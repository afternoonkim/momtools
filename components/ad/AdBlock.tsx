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
    return <div className={`my-10 w-full rounded-2xl bg-transparent ${formatClass} ${className}`} aria-hidden="true" />;
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
