import type { MetadataRoute } from "next";
import { babyFoodRecipes } from "@/data/babyFood";
import { rankingYears, nameMeanings } from "@/data/babyNames";
import { qnaData } from "@/data/qna";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://momtools.kr";
  const now = new Date();

  const staticRoutes = [
    "",
    "/tools",
    "/tools/due-date",
    "/tools/baby-age",
    "/tools/vaccine-schedule",
    "/tools/weaning-start",
    "/tools/growth-percentile",
    "/baby-names",
    "/baby-names/generator",
    "/baby-names/meanings",
    "/baby-food",
    "/baby-food/early",
    "/baby-food/middle",
    "/baby-food/late",
    "/qna",
    "/qna/health",
    "/qna/growth",
    "/qna/behavior",
    "/checklists",
    "/checklists/birth",
    "/checklists/newborn",
    "/checklists/weaning",
    "/checklists/daycare",
    "/content/blog",
    "/content/youtube",
    "/items/essential",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const dynamicRoutes = [
    ...rankingYears.map((year) => `/baby-names/rankings/${year}`),
    ...nameMeanings.map((item) => `/baby-names/meanings/${item.slug}`),
    ...babyFoodRecipes.map((item) => `/baby-food/recipes/${item.slug}`),
    ...Object.entries(qnaData).flatMap(([category, items]) => items.map((item) => `/qna/${category}/${item.slug}`)),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route.includes('/qna/') || route.includes('/baby-food/recipes/') || route.includes('/baby-names/meanings/') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.split('/').length <= 2 ? 0.9 : 0.7,
  }));
}
