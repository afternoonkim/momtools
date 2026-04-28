import type { MetadataRoute } from "next";
import { babyFoodRecipes as koBabyFoodRecipes } from "@/data/babyFood";
import { babyFoodRecipes as enBabyFoodRecipes } from "@/data/en/babyFood";
import { rankingYears } from "@/data/babyNames";
import { qnaData, qnaCategories, type QnaCategory } from "@/data/qna";
import { familyHealthCategories, familyHealthQnaData, type FamilyHealthQnaCategory } from "@/data/familyHealthQna";
import { governmentPolicies } from "@/data/governmentPolicy";
import { babyProductQnaItems } from "@/data/babyProductQna";
import { enQnaEntries } from "@/data/en/qna100";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
type RouteConfig = { path: string; priority: number; changeFrequency: ChangeFrequency };
const now = new Date(SITE_DATES.updated);

function route(path: string, priority: number, changeFrequency: ChangeFrequency): RouteConfig {
  return { path, priority, changeFrequency };
}

const staticRoutes: RouteConfig[] = [
  route("/", 1.0, "daily"),
  route("/tools", 0.95, "weekly"),
  route("/tools/due-date", 0.9, "weekly"),
  route("/tools/baby-age", 0.9, "weekly"),
  route("/tools/vaccine-schedule", 0.9, "weekly"),
  route("/tools/weaning-start", 0.9, "weekly"),
  route("/tools/growth-percentile", 0.9, "weekly"),
  route("/qna", 0.9, "weekly"),
  route("/qna/health", 0.85, "weekly"),
  route("/qna/growth", 0.85, "weekly"),
  route("/qna/behavior", 0.85, "weekly"),
  route("/family-health-qna/mom", 0.84, "weekly"),
  route("/family-health-qna/dad", 0.84, "weekly"),
  route("/family-health-qna/postpartum", 0.84, "weekly"),
  route("/family-health-qna/family", 0.84, "weekly"),
  route("/family-health-qna/medicine", 0.84, "weekly"),
  route("/family-health-qna/checkup", 0.84, "weekly"),
  route("/policy", 0.88, "daily"),
  route("/policy/pregnancy-birth", 0.84, "daily"),
  route("/policy/childcare-benefit", 0.84, "daily"),
  route("/policy/work-parenting", 0.84, "daily"),
  route("/policy/care-education", 0.84, "daily"),
  route("/policy/medical-health", 0.84, "daily"),
  route("/policy/local-check", 0.82, "daily"),
  route("/info", 0.84, "weekly"),
  route("/info/pregnancy", 0.8, "weekly"),
  route("/info/newborn", 0.8, "weekly"),
  route("/info/weaning", 0.8, "weekly"),
  route("/info/toddler", 0.8, "weekly"),
  route("/baby-food", 0.85, "weekly"),
  route("/baby-food/early", 0.8, "weekly"),
  route("/baby-food/middle", 0.8, "weekly"),
  route("/baby-food/late", 0.8, "weekly"),
  route("/checklists", 0.8, "weekly"),
  route("/checklists/birth", 0.75, "monthly"),
  route("/checklists/newborn", 0.75, "monthly"),
  route("/checklists/weaning", 0.75, "monthly"),
  route("/checklists/daycare", 0.75, "monthly"),
  route("/baby-names", 0.8, "weekly"),
  route("/baby-names/rankings/2025", 0.75, "weekly"),
  route("/baby-names/rankings/2024", 0.7, "monthly"),
  route("/baby-names/rankings/2023", 0.7, "monthly"),
  route("/baby-names/meanings", 0.72, "weekly"),
  route("/items/essential", 0.82, "weekly"),
  route("/about", 0.55, "monthly"),
  route("/faq", 0.5, "monthly"),
  route("/contact", 0.4, "monthly"),
  route("/privacy", 0.3, "yearly"),
  route("/terms", 0.3, "yearly"),
  route("/en", 0.95, "daily"),
  route("/en/cal", 0.9, "weekly"),
  route("/en/cal/due-date", 0.85, "weekly"),
  route("/en/cal/baby-age", 0.85, "weekly"),
  route("/en/cal/vaccine-schedule", 0.85, "weekly"),
  route("/en/cal/weaning-start", 0.85, "weekly"),
  route("/en/cal/growth-percentile", 0.85, "weekly"),
  route("/en/info", 0.8, "weekly"),
  route("/en/info/pregnancy", 0.75, "weekly"),
  route("/en/info/newborn", 0.75, "weekly"),
  route("/en/info/weaning", 0.75, "weekly"),
  route("/en/info/toddler", 0.75, "weekly"),
  route("/en/baby-food", 0.8, "weekly"),
  route("/en/baby-food/early", 0.75, "weekly"),
  route("/en/baby-food/middle", 0.75, "weekly"),
  route("/en/baby-food/late", 0.75, "weekly"),
  route("/en/qna", 0.85, "weekly"),
  route("/en/qna/health", 0.8, "weekly"),
  route("/en/qna/growth", 0.8, "weekly"),
  route("/en/qna/behavior", 0.8, "weekly"),
  route("/en/checklists", 0.75, "weekly"),
  route("/en/checklists/birth", 0.7, "monthly"),
  route("/en/checklists/newborn", 0.7, "monthly"),
  route("/en/checklists/weaning", 0.7, "monthly"),
  route("/en/checklists/daycare", 0.7, "monthly"),
  route("/en/about", 0.5, "monthly"),
  route("/en/faq", 0.45, "monthly"),
  route("/en/contact", 0.35, "monthly"),
  route("/en/privacy", 0.25, "yearly"),
  route("/en/terms", 0.25, "yearly"),
];

const dynamicKoreanQnaRoutes = (Object.keys(qnaCategories) as QnaCategory[]).flatMap((category) =>
  qnaData[category].map((entry) => route(`/qna/${category}/${entry.slug}`, 0.82, "daily")),
);
const dynamicKoreanFamilyHealthRoutes = (Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[]).flatMap((category) =>
  familyHealthQnaData[category].map((entry) => route(`/family-health-qna/${category}/${entry.slug}`, 0.78, "weekly")),
);
const dynamicKoreanPolicyRoutes = governmentPolicies.map((policy) => route(`/policy/${policy.category}/${policy.slug}`, 0.8, "daily"));
const dynamicKoreanBabyFoodRoutes = koBabyFoodRecipes.map((recipe) => route(`/baby-food/recipes/${recipe.slug}`, 0.68, "weekly"));
const dynamicKoreanBabyProductRoutes = babyProductQnaItems.map((item) => route(`/items/essential/${item.slug}`, 0.76, "weekly"));
const dynamicEnglishBabyFoodRoutes = enBabyFoodRecipes.map((recipe) => route(`/en/baby-food/recipes/${recipe.slug}`, 0.65, "weekly"));
const dynamicEnglishQnaRoutes = enQnaEntries.map((entry) => route(`/en/qna/${entry.slug}`, 0.7, "weekly"));
const dynamicRankingRoutes = rankingYears.map((year, index) => route(`/baby-names/rankings/${year}`, index === 0 ? 0.75 : 0.7, index === 0 ? "weekly" : "monthly"));

export default function sitemap(): MetadataRoute.Sitemap {
  const deduped = new Map<string, RouteConfig>();
  [
    ...staticRoutes,
    ...dynamicKoreanQnaRoutes,
    ...dynamicKoreanFamilyHealthRoutes,
    ...dynamicKoreanPolicyRoutes,
    ...dynamicKoreanBabyFoodRoutes,
    ...dynamicKoreanBabyProductRoutes,
    ...dynamicEnglishBabyFoodRoutes,
    ...dynamicEnglishQnaRoutes,
    ...dynamicRankingRoutes,
  ].forEach((item) => deduped.set(item.path, item));

  return Array.from(deduped.values()).map((item) => ({
    url: buildCanonical(item.path),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
