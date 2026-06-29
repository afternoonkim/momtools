"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  COUPANG_PARTNERS,
  COUPANG_PARTNERS_DISCLOSURE,
  shouldShowCoupangProductAds,
} from "@/lib/coupang-partners";

type CoupangProductAdItem = {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string | null;
  partnerUrl: string;
  buttonText: string;
  priority: number;
};

type CoupangProductAdsResponse = {
  items?: CoupangProductAdItem[];
};

const PRODUCT_PORTAL_ATTRIBUTE = "data-coupang-product-placement";

function removeProductPlacements() {
  document.querySelectorAll(`[${PRODUCT_PORTAL_ATTRIBUTE}="true"]`).forEach((element) => {
    element.remove();
  });
}

function isProductPlacementElement(element: Element) {
  return (
    element.getAttribute(PRODUCT_PORTAL_ATTRIBUTE) === "true" ||
    element.getAttribute("data-coupang-partners-placement") === "true"
  );
}

function isContentSectionAnchor(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;

  const tagName = element.tagName.toLowerCase();
  const className = element.className.toString();

  if (tagName === "script" || tagName === "nav") return false;
  if (isProductPlacementElement(element)) return false;
  if (element.getAttribute("aria-label") === "breadcrumb") return false;

  return (
    tagName === "section" ||
    tagName === "article" ||
    tagName === "header" ||
    className.includes("mt-card") ||
    className.includes("mt-hero")
  );
}

function findContentSectionAfterBreadcrumb(main: HTMLElement) {
  const breadcrumb = main.querySelector<HTMLElement>('nav[aria-label="breadcrumb"]');
  if (!breadcrumb) return null;

  let nextElement = breadcrumb.nextElementSibling;
  while (nextElement) {
    if (isContentSectionAnchor(nextElement)) return nextElement;
    nextElement = nextElement.nextElementSibling;
  }

  return null;
}

function findFirstContentSection(main: HTMLElement) {
  const pageContainer = main.querySelector<HTMLElement>(
    ".mt-container-narrow, .mt-container",
  );

  if (pageContainer) {
    const firstContentSection = Array.from(pageContainer.children).find(isContentSectionAnchor);
    if (firstContentSection) return firstContentSection;
  }

  const firstMainContentSection = Array.from(main.children).find(isContentSectionAnchor);
  return firstMainContentSection ?? null;
}

function findProductAnchor() {
  const main = document.querySelector<HTMLElement>("main");
  if (!main) return null;

  return findContentSectionAfterBreadcrumb(main) ?? findFirstContentSection(main) ?? main;
}

function getProductInsertionReference(anchor: Element) {
  let reference = anchor;
  let next = anchor.nextElementSibling;

  while (next instanceof HTMLElement) {
    if (next.getAttribute("data-coupang-partners-placement") === "true") {
      reference = next;
      next = next.nextElementSibling;
      continue;
    }

    if (next.getAttribute(PRODUCT_PORTAL_ATTRIBUTE) === "true") {
      break;
    }

    break;
  }

  return reference;
}

function ensureProductPlacementContainer() {
  const anchor = findProductAnchor();
  if (!anchor?.parentElement) return null;

  const existingPlacements = Array.from(
    document.querySelectorAll<HTMLElement>(`[${PRODUCT_PORTAL_ATTRIBUTE}="true"]`),
  );
  const [container, ...duplicates] = existingPlacements;
  duplicates.forEach((element) => element.remove());

  const placement = container ?? document.createElement("div");
  placement.setAttribute(PRODUCT_PORTAL_ATTRIBUTE, "true");
  placement.className = "mt-coupang-product-placement";

  const insertionReference = getProductInsertionReference(anchor);
  if (
    placement.parentElement !== insertionReference.parentElement ||
    placement.previousElementSibling !== insertionReference
  ) {
    insertionReference.insertAdjacentElement("afterend", placement);
  }

  return placement;
}

function ProductAdCard({ item }: { item: CoupangProductAdItem }) {
  return (
    <a
      href={item.partnerUrl}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="group flex min-h-[92px] items-center justify-between gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
      aria-label={`${item.categoryName} 쿠팡 파트너스 링크 열기`}
    >
      <span className="min-w-0 flex-1">
        <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">
          {item.categoryName}
        </span>
        <span className="mt-2 block text-sm font-extrabold leading-6 text-slate-900 md:text-base">
          {item.title}
        </span>
        {item.description ? (
          <span className="mt-1 block text-xs leading-5 text-slate-500 md:text-sm md:leading-6">
            {item.description}
          </span>
        ) : null}
      </span>
      <span className="shrink-0 rounded-full bg-slate-900 px-3 py-2 text-xs font-bold text-white transition group-hover:bg-amber-600">
        보기
      </span>
    </a>
  );
}

export default function GlobalCoupangProductAd() {
  const pathname = usePathname() || "/";
  const [items, setItems] = useState<CoupangProductAdItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const shouldTryLoad = useMemo(
    () => COUPANG_PARTNERS.enabled && shouldShowCoupangProductAds(pathname),
    [pathname],
  );

  useEffect(() => {
    if (!shouldTryLoad) {
      setItems([]);
      setIsLoaded(false);
      removeProductPlacements();
      setPortalTarget(null);
      return;
    }

    const controller = new AbortController();
    setIsLoaded(false);

    fetch(`/api/coupang-product-ads?path=${encodeURIComponent(pathname)}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) return { items: [] } satisfies CoupangProductAdsResponse;
        return (await response.json()) as CoupangProductAdsResponse;
      })
      .then((payload) => {
        if (controller.signal.aborted) return;
        setItems((payload.items ?? []).filter((item) => item.partnerUrl.trim().length > 0));
        setIsLoaded(true);
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        console.error("쿠팡 맞춤 상품 광고 로드 실패", error);
        setItems([]);
        setIsLoaded(true);
      });

    return () => controller.abort();
  }, [pathname, shouldTryLoad]);

  const shouldShow = shouldTryLoad && isLoaded && items.length > 0;

  useEffect(() => {
    if (!shouldShow) {
      removeProductPlacements();
      setPortalTarget(null);
      return;
    }

    let disposed = false;
    const timers: number[] = [];
    let animationFrame = 0;
    let observer: MutationObserver | null = null;

    const mountPlacement = () => {
      if (disposed) return;
      const placement = ensureProductPlacementContainer();
      setPortalTarget(placement);
    };

    mountPlacement();
    animationFrame = window.requestAnimationFrame(mountPlacement);
    [150, 450, 900].forEach((delay) => {
      timers.push(window.setTimeout(mountPlacement, delay));
    });

    observer = new MutationObserver(() => {
      window.requestAnimationFrame(mountPlacement);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
      observer?.disconnect();
      removeProductPlacements();
      setPortalTarget(null);
    };
  }, [shouldShow, pathname]);

  if (!shouldShow || !portalTarget) return null;

  return createPortal(
    <aside aria-label="페이지 내용과 관련된 육아용품" className="my-4 w-full">
      <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-3 shadow-[0_10px_30px_rgba(245,158,11,0.08)] md:p-4">
        <div className="flex items-start justify-between gap-3 px-1">
          <div>
            <p className="text-sm font-extrabold text-slate-900 md:text-base">
              이 내용과 함께 확인하면 좋은 육아용품
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
              현재 페이지와 연결된 품목만 보여드려요.
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-2.5 md:grid-cols-3">
          {items.map((item) => (
            <ProductAdCard key={`${item.categorySlug}-${item.id}`} item={item} />
          ))}
        </div>

        <p className="mt-3 rounded-xl bg-white/80 px-3 py-2 text-center text-[11px] font-medium leading-5 text-slate-500">
          {COUPANG_PARTNERS_DISCLOSURE}
        </p>
      </div>
    </aside>,
    portalTarget,
  );
}
