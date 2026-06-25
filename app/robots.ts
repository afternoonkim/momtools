import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/db-check/", "/en/"],
    },
    sitemap: "https://momtools.kr/sitemap.xml",
    host: "https://momtools.kr",
  };
}
