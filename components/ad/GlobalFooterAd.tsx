"use client";

import { usePathname } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

const HIDE_ON_PATHS = ["/contact", "/privacy", "/terms"];

export default function GlobalFooterAd() {
  const pathname = usePathname();

  if (HIDE_ON_PATHS.includes(pathname)) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6">
      <AdBlock
        placement="footer"
        format="horizontal"
        label="전 페이지 공통 하단 광고 영역"
        className="mb-0"
      />
    </div>
  );
}
