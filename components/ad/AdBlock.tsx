"use client";

import { useEffect, useId } from "react";
import { AD_CLIENT, getAdSlot, type AdPlacement } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBlockProps {
  slot?: string;
  placement?: AdPlacement;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
  label?: string;
}

export default function AdBlock({
  slot,
  placement = "default",
  format = "auto",
  className = "",
  label = "AdSense 광고 영역",
}: AdBlockProps) {
  const rawId = useId();
  const insId = `ad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const isDev = process.env.NODE_ENV === "development";
  const resolvedSlot = slot || getAdSlot(placement);
  const canRenderAd = !isDev && Boolean(AD_CLIENT) && Boolean(resolvedSlot);

  useEffect(() => {
    if (!canRenderAd) return;

    const adElement = document.getElementById(insId);
    if (!adElement || adElement.getAttribute("data-ad-status") === "filled") return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense render error:", error);
    }
  }, [canRenderAd, resolvedSlot, insId]);

  const formatClass =
    format === "horizontal"
      ? "min-h-[90px]"
      : format === "rectangle"
      ? "min-h-[250px]"
      : "min-h-[120px]";

  if (!canRenderAd) {
    return (
      <div className={`my-10 w-full ${className}`}>
        <div
          className={`flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-sm text-slate-500 ${formatClass}`}
        >
          <span>{label}</span>
          <span className="mt-1 text-xs text-slate-400">
            개발 환경 또는 애드센스 미설정 상태
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-10 w-full ${className}`}>
      <ins
        id={insId}
        className={`adsbygoogle block ${formatClass}`}
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={resolvedSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
