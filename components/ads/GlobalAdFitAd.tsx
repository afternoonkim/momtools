"use client";

import { usePathname } from "next/navigation";
import AdFitAd from "@/components/ads/AdFitAd";
import {
  getGlobalAdFitUnit,
  shouldShowGlobalAdFitAd,
  type GlobalAdFitPosition,
} from "@/lib/adfit";

type GlobalAdFitAdProps = {
  position?: GlobalAdFitPosition;
};

export default function GlobalAdFitAd({ position = "bottom" }: GlobalAdFitAdProps) {
  const pathname = usePathname() || "/";

  if (!shouldShowGlobalAdFitAd(pathname, position)) return null;

  const unit = getGlobalAdFitUnit(position);

  if (position === "top") {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 pt-3 sm:px-6">
        <AdFitAd {...unit} className="my-2" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6">
      <AdFitAd {...unit} className="my-4" />
    </div>
  );
}
