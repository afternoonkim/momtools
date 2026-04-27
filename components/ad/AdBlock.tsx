"use client";

import { useEffect, useRef } from "react";
import { AD_CLIENT, ADSENSE_ENABLED, AdPlacement, getAdSlot } from "@/lib/adsense";

interface AdBlockProps {
  placement?: AdPlacement;
  slot?: string;
  format?: string;
  responsive?: boolean;
  layoutKey?: string;
  className?: string;
  showLabel?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBlock({
  placement = "default",
  slot,
  format = "auto",
  responsive = true,
  layoutKey,
  className,
  showLabel = true,
}: AdBlockProps) {
  const insRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  const slotId = (slot && slot.trim().length > 0 ? slot : getAdSlot(placement)).trim();

  useEffect(() => {
    if (!ADSENSE_ENABLED || !slotId || pushedRef.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch {
      // ignore
    }
  }, [slotId]);

  if (!ADSENSE_ENABLED || !slotId) return null;

  return (
    <aside
      aria-label="Sponsored content"
      className={`my-6 w-full ${className ?? ""}`.trim()}
    >
      {showLabel && (
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Advertisement
        </div>
      )}
      <ins
        ref={insRef}
        className="adsbygoogle block min-h-[120px] w-full"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
    </aside>
  );
}
