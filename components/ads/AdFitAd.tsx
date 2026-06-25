"use client";

import { useEffect, useId, useRef, useState } from "react";

type AdFitAdProps = {
  unit: string;
  width: number;
  height: number;
  className?: string;
};

type AdFitRegistryWindow = Window & {
  __momtoolsAdFitUnitOwners?: Map<string, string>;
};

const ADFIT_SCRIPT_SRC = "https://t1.daumcdn.net/kas/static/ba.min.js";

function getAdFitUnitOwners() {
  const browserWindow = window as AdFitRegistryWindow;

  if (!browserWindow.__momtoolsAdFitUnitOwners) {
    browserWindow.__momtoolsAdFitUnitOwners = new Map<string, string>();
  }

  return browserWindow.__momtoolsAdFitUnitOwners;
}

export default function AdFitAd({
  unit,
  width,
  height,
  className = "",
}: AdFitAdProps) {
  const enabled = process.env.NEXT_PUBLIC_ADFIT_ENABLED === "true";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceId = useId().replace(/:/g, "");
  const [isUnitOwner, setIsUnitOwner] = useState(false);

  useEffect(() => {
    if (!enabled || !unit) {
      setIsUnitOwner(false);
      return;
    }

    const owners = getAdFitUnitOwners();
    const currentOwner = owners.get(unit);

    if (currentOwner && currentOwner !== instanceId) {
      setIsUnitOwner(false);
      return;
    }

    owners.set(unit, instanceId);
    setIsUnitOwner(true);

    return () => {
      if (owners.get(unit) === instanceId) {
        owners.delete(unit);
      }
      setIsUnitOwner(false);
    };
  }, [enabled, unit, instanceId]);

  useEffect(() => {
    if (!enabled || !unit || !isUnitOwner || !containerRef.current) return;

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
  }, [enabled, unit, width, height, instanceId, isUnitOwner]);

  if (!enabled || !unit || !isUnitOwner) return null;

  return (
    <aside
      aria-label="광고"
      className={`my-6 flex w-full justify-center overflow-hidden ${className}`.trim()}
    >
      <div
        ref={containerRef}
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
    </aside>
  );
}
