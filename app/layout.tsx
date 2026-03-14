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
  openGraph: {
    title: "MomTools",
    description:
      "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위를 쉽게 확인하는 육아 도구 사이트",
    url: "https://momtools.kr",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
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
