import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 일반 크롤러 — 모든 콘텐츠 허용. 쿠팡 파트너스 콘텐츠는 페이지 단위 noindex로 처리.
      {
        userAgent: "*",
        allow: "/",
      },
      // 주요 크롤러를 명시적으로 허용해 인덱싱 신호를 강화. 네이버는 "Yeti"(웹 검색)와 "Naverbot" 둘 다 인식.
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Yeti",
        allow: "/",
      },
      {
        userAgent: "Naverbot",
        allow: "/",
      },
      {
        userAgent: "Daumoa",
        allow: "/",
      },
      {
        userAgent: "bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://momtools.kr/sitemap.xml",
    host: "https://momtools.kr",
  };
}
