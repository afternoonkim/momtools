"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  COUPANG_PARTNERS_DISCLOSURE,
  getGlobalCoupangPartnerBanners,
  shouldShowGlobalCoupangPartnersAd,
  type CoupangPartnersBannerConfig,
} from "@/lib/coupang-partners";

const PORTAL_ATTRIBUTE = "data-coupang-partners-placement";

function CoupangBannerFrame({ banner }: { banner: CoupangPartnersBannerConfig }) {
  return (
    <div
      className="mx-auto w-full max-w-[320px] overflow-hidden rounded-xl bg-white shadow-sm [&_iframe]:mx-auto [&_iframe]:block [&_iframe]:max-w-full"
      style={{
        width: banner.width,
        minHeight: banner.height,
      }}
      dangerouslySetInnerHTML={{ __html: banner.html }}
    />
  );
}

function removePlacements() {
  document.querySelectorAll(`[${PORTAL_ATTRIBUTE}="true"]`).forEach((element) => {
    element.remove();
  });
}

function findAdAnchor() {
  const main = document.querySelector("main");
  if (!main) return null;

  const breadcrumb = main.querySelector<HTMLElement>('nav[aria-label="breadcrumb"]');
  if (breadcrumb) return breadcrumb;

  const pageContainer = main.querySelector<HTMLElement>(
    ".mt-container-narrow, .mt-container",
  );

  if (pageContainer) {
    const firstVisibleBlock = Array.from(pageContainer.children).find(
      (child): child is HTMLElement =>
        child instanceof HTMLElement &&
        child.tagName.toLowerCase() !== "script" &&
        child.getAttribute(PORTAL_ATTRIBUTE) !== "true",
    );

    if (firstVisibleBlock) return firstVisibleBlock;
  }

  const firstMainChild = Array.from(main.children).find(
    (child): child is HTMLElement =>
      child instanceof HTMLElement &&
      child.tagName.toLowerCase() !== "script" &&
      child.getAttribute(PORTAL_ATTRIBUTE) !== "true",
  );

  return firstMainChild ?? main;
}

function ensurePlacementContainer() {
  const anchor = findAdAnchor();
  if (!anchor?.parentElement) return null;

  const existingPlacements = Array.from(
    document.querySelectorAll<HTMLElement>(`[${PORTAL_ATTRIBUTE}="true"]`),
  );
  const [container, ...duplicates] = existingPlacements;

  duplicates.forEach((element) => element.remove());

  const placement = container ?? document.createElement("div");
  placement.setAttribute(PORTAL_ATTRIBUTE, "true");
  placement.className = "mt-coupang-partners-placement";

  if (placement.parentElement !== anchor.parentElement || placement.previousElementSibling !== anchor) {
    anchor.insertAdjacentElement("afterend", placement);
  }

  return placement;
}

export default function GlobalCoupangPartnersAd() {
  const pathname = usePathname() || "/";
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const banners = useMemo(() => getGlobalCoupangPartnerBanners(), []);
  const shouldShow = shouldShowGlobalCoupangPartnersAd(pathname) && banners.length > 0;

  useEffect(() => {
    if (!shouldShow) {
      removePlacements();
      setPortalTarget(null);
      return;
    }

    let disposed = false;
    const timers: number[] = [];
    let animationFrame = 0;
    let observer: MutationObserver | null = null;

    const mountPlacement = () => {
      if (disposed) return;
      const placement = ensurePlacementContainer();
      setPortalTarget(placement);
    };

    mountPlacement();
    animationFrame = window.requestAnimationFrame(mountPlacement);
    [100, 350, 800].forEach((delay) => {
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
      removePlacements();
      setPortalTarget(null);
    };
  }, [pathname, shouldShow]);

  if (!shouldShow || !portalTarget) return null;

  return createPortal(
    <aside aria-label="육아용품 관련 광고" className="my-4 w-full">
      <div className="rounded-2xl border border-slate-100 bg-white/90 p-3 shadow-sm">
        <div className="grid gap-2.5 sm:grid-cols-2 sm:justify-items-center">
          {banners.map((banner) => (
            <CoupangBannerFrame key={banner.kind} banner={banner} />
          ))}
        </div>

        <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-center text-[11px] font-medium leading-5 text-slate-500">
          {COUPANG_PARTNERS_DISCLOSURE}
        </p>
      </div>
    </aside>,
    portalTarget,
  );
}
