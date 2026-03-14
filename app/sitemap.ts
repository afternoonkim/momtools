import type { MetadataRoute } from "next";

const routes = [
  "",
  "/cal/due-date",
  "/cal/baby-age",
  "/cal/vaccine-schedule",
  "/cal/weaning-start",
  "/cal/growth-percentile",
  "/info/pregnancy",
  "/info/newborn",
  "/info/weaning",
  "/info/toddler",
  "/checklists/birth-prep",
  "/checklists/newborn-prep",
  "/checklists/weaning-prep",
  "/checklists/daycare-prep",
  "/content/blog",
  "/content/youtube",
  "/items/essential",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://momtools.kr";
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
