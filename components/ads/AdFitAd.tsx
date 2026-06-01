"use client";

import Script from "next/script";

type AdFitAdProps = {
  unit: string;
  width: number;
  height: number;
  className?: string;
};

export default function AdFitAd({
  unit,
  width,
  height,
  className = "",
}: AdFitAdProps) {
  const enabled = process.env.NEXT_PUBLIC_ADFIT_ENABLED === "true";

  if (!enabled || !unit) return null;

  return (
    <aside
      aria-label="광고"
      className={`my-6 flex w-full justify-center overflow-hidden ${className}`.trim()}
    >
      <div
        className="mx-auto max-w-full"
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
      <Script
        id="kakao-adfit-script"
        src="https://t1.daumcdn.net/kas/static/ba.min.js"
        strategy="afterInteractive"
        async
      />
    </aside>
  );
}
