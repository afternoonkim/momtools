import Script from "next/script";
import { AD_CLIENT } from "@/lib/adsense";

export default function AdSenseScript() {
  if (!AD_CLIENT) return null;

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
    />
  );
}
