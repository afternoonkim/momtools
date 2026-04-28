import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import AdSenseScript from "@/components/ad/AdSenseScript";
import CookieConsent from "@/components/common/CookieConsent";
import HydrationCleanupScript from "@/components/common/HydrationCleanupScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://momtools.kr"),
  title: { default: "MomTools", template: "%s | MomTools" },
  description:
    "육아 계산기, 아이 이름 짓기, 이유식 메뉴, 질문형 육아 정보, 체크리스트를 한곳에서 보는 MomTools",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://momtools.kr/",
    languages: {
      "ko-KR": "https://momtools.kr/",
      "en-US": "https://momtools.kr/en",
      "x-default": "https://momtools.kr/",
    },
  },
  openGraph: {
    title: "MomTools",
    description:
      "출산 예정일, 아기 개월수, 아이 이름 짓기, 이유식 메뉴, 육아 Q&A를 한곳에서 보는 육아 도구 사이트",
    url: "https://momtools.kr",
    siteName: "MomTools",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  verification: {
    google: "9_OzUEu4gt8llcGWd0aujrL7rwWadnj3HFS4k16Pkk4",
    other: {
      "naver-site-verification": "1dae33c8d0ab9be494b117f91e4d8a6ad911b520",
      "msvalidate.01": "A0623C2A4E78687DE6334EBC6E9BBE67"
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HydrationCleanupScript />
        <ClientLayout>{children}</ClientLayout>
        <CookieConsent />
        <AdSenseScript />
        <Analytics />
      </body>
    </html>
  );
}
