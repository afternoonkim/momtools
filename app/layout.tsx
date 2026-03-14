import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://momtools.kr"),
  title: { default: "MomTools", template: "%s | MomTools" },
  description:
    "육아 계산기, 육아 정보, 준비 체크리스트, 추천 콘텐츠를 한곳에서 보는 밝고 실용적인 육아 도구 사이트 MomTools",
  robots: { index: true, follow: true },
  other: {
    "google-adsense-account": "ca-pub-5706989796325741",
  },
  openGraph: {
    title: "MomTools",
    description:
      "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위를 쉽게 확인하는 육아 도구 사이트",
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
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
