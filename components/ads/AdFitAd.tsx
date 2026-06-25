"use client";

import { useEffect, useId, useRef } from "react";

type AdFitAdProps = {
  unit: string;
  width: number;
  height: number;
  className?: string;
};

const ADFIT_SCRIPT_SRC = "https://t1.daumcdn.net/kas/static/ba.min.js";

export default function AdFitAd({
  unit,
  width,
  height,
  className = "",
}: AdFitAdProps) {
  const enabled = process.env.NEXT_PUBLIC_ADFIT_ENABLED === "true";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!enabled || !unit || !containerRef.current) return;

    const container = containerRef.current;
    const previousScript = container.querySelector<HTMLScriptElement>(
      "script[data-adfit-render-script='true']",
    );
    previousScript?.remove();

    const script = document.createElement("script");
    script.src = ADFIT_SCRIPT_SRC;
    script.async = true;
    script.dataset.adfitRenderScript = "true";
    script.dataset.adfitInstance = instanceId;
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, [enabled, unit, width, height, instanceId]);

  if (!enabled || !unit) return null;

  return (
    <aside
      aria-label="광고"
      className={`not-prose my-6 flex w-full justify-center overflow-hidden ${className}`.trim()}
    >
      <div
        ref={containerRef}
        className="mx-auto flex max-w-full justify-center"
        style={{ width: `${width}px`, minHeight: `${height}px` }}
      >
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={unit}
          data-ad-width={String(width)}
          data-ad-height={String(height)}
        />
      </div>
    </aside>
  );
}
