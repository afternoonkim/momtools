"use client";

import Script from "next/script";
import { AD_CLIENT, ADSENSE_ENABLED } from "@/lib/adsense";

export default function AdSenseScript() {
  if (!ADSENSE_ENABLED) return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
    />
  );
}
