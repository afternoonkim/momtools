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
  imageUrl?: string | null;
  price?: number | null;
  buttonText: string;
  priority: number;
  source?: "api" | "manual";
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

function findProductAnchor(pathname: string) {
  const main = document.querySelector<HTMLElement>("main");
  if (!main) return null;

  if (pathname.startsWith("/parenting-products/")) {
    return main.querySelector<HTMLElement>('[data-coupang-product-anchor="true"]');
  }

  if (pathname.startsWith("/tools/")) {
    const calculatorAd = main.querySelector<HTMLElement>('aside[aria-label="광고"]');
    if (calculatorAd) return calculatorAd;
  }

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

function ensureProductPlacementContainer(pathname: string) {
  const anchor = findProductAnchor(pathname);
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
  const title = item.title.trim() || `${item.categoryName} 확인하기`;
  const description =
    item.description?.trim() ||
    "지금 보고 있는 내용과 함께 확인해볼 수 있는 육아 준비물이에요.";
  const buttonText = "보기";
  const formattedPrice = typeof item.price === "number" && item.price > 0
    ? `${item.price.toLocaleString("ko-KR")}원`
    : null;

  return (
    <a
      href={item.partnerUrl}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="group flex min-h-[112px] items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white hover:shadow-sm"
      aria-label={`${item.categoryName} 관련 쿠팡 파트너스 링크 열기`}
    >
      {item.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.imageUrl}
          alt=""
          className="h-20 w-20 shrink-0 rounded-xl border border-slate-100 bg-white object-cover md:h-24 md:w-24"
          loading="lazy"
        />
      ) : null}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="inline-flex w-fit rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">
          {item.categoryName}
        </span>
        <span className="mt-2 text-sm font-extrabold leading-5 text-slate-900 md:text-[15px] md:leading-6">
          {title}
        </span>
        <span className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 md:text-sm md:leading-6">
          {description}
        </span>
        {formattedPrice ? <span className="mt-1 text-sm font-extrabold text-slate-800">{formattedPrice}</span> : null}
      </span>

      <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700 transition group-hover:border-amber-300 group-hover:bg-amber-100 group-hover:text-amber-800">
        {buttonText}
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
      removeProductPlacements();
      const timer = window.setTimeout(() => {
        setItems([]);
        setIsLoaded(false);
        setPortalTarget(null);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    const controller = new AbortController();
    const pendingTimer = window.setTimeout(() => {
      setIsLoaded(false);
    }, 0);

    fetch(`/api/coupang-product-ads?path=${encodeURIComponent(pathname)}`, {
      signal: controller.signal,
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

    return () => {
      window.clearTimeout(pendingTimer);
      controller.abort();
    };
  }, [pathname, shouldTryLoad]);

  const shouldShow = shouldTryLoad && isLoaded && items.length > 0;

  useEffect(() => {
    if (!shouldShow) {
      removeProductPlacements();
      const timer = window.setTimeout(() => {
        setPortalTarget(null);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    let disposed = false;
    const timers: number[] = [];
    let animationFrame = 0;
    let observer: MutationObserver | null = null;

    const mountPlacement = () => {
      if (disposed) return;
      const placement = ensureProductPlacementContainer(pathname);
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
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3 shadow-sm md:p-4">
        <div className="px-1">
          <p className="text-sm font-extrabold text-slate-900 md:text-base">
            이 내용과 함께 확인하면 좋은 육아용품
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">
            현재 페이지와 관련된 준비물을 최대 3개만 골라 보여드려요.
          </p>
        </div>

        <div className="mt-3 grid gap-2.5">
          {items.map((item) => (
            <ProductAdCard key={`${item.categorySlug}-${item.id}`} item={item} />
          ))}
        </div>

        <p className="mt-3 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-center text-[11px] font-medium leading-5 text-slate-500">
          {COUPANG_PARTNERS_DISCLOSURE}
        </p>
      </div>
    </aside>,
    portalTarget,
  );
}
