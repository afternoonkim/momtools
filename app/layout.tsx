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
    "아기 개월수, 예방접종, 이유식, 건강 신호와 체크리스트를 부모가 바로 확인할 수 있게 정리한 MomTools",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://momtools.kr/",
    languages: {
      "ko-KR": "https://momtools.kr/",
      "x-default": "https://momtools.kr/",
    },
    types: {
      "application/rss+xml": [
        { url: "https://momtools.kr/rss.xml", title: "MomTools 전체 피드" },
        { url: "https://momtools.kr/info/family-finance/rss.xml", title: "MomTools 가계 가이드 피드" },
        { url: "https://momtools.kr/policy/rss.xml", title: "MomTools 정부정책 피드" },
        { url: "https://momtools.kr/qna/rss.xml", title: "MomTools 육아 Q&A 피드" },
      ],
    },
  },
  openGraph: {
    title: "MomTools",
    description:
      "아기 개월수, 예방접종, 이유식, 건강 신호와 체크리스트를 빠르게 확인하는 육아 도구 사이트",
    url: "https://momtools.kr",
    siteName: "MomTools",
    locale: "ko_KR",
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
