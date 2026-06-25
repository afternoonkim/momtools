import type { MetadataRoute } from "next";
import { babyFoodRecipes as koBabyFoodRecipes } from "@/data/babyFood";
import { rankingYears } from "@/data/babyNames";
import { meaningPureKoreanNames } from "@/data/koreanNames";
import { qnaData, qnaCategories, type QnaCategory } from "@/data/qna";
import { getFamilyHealthSitemapPaths } from "@/lib/repositories/family-health-qna-db";
import { governmentPolicies } from "@/data/governmentPolicy";
import { birthSupportRegions } from "@/data/birthSupportCalculator";
import { familyFinanceArticles } from "@/data/familyFinance";
import { childcarePortalGuides } from "@/data/childcarePortalGuides";
import { getHealthGuideSitemapPathsFromDb, getMonthlyGuideSitemapPathsFromDb } from "@/lib/repositories/guides-db";
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
  route("/monthly-guide", 0.86, "weekly"),
  route("/health", 0.86, "weekly"),
  route("/policy", 0.88, "daily"),
  route("/policy/pregnancy-birth", 0.84, "daily"),
  route("/policy/childcare-benefit", 0.84, "daily"),
  route("/policy/work-parenting", 0.84, "daily"),
  route("/policy/care-education", 0.84, "daily"),
  route("/policy/medical-health", 0.84, "daily"),
  route("/policy/local-check", 0.82, "daily"),
  route("/tools/birth-support-calculator", 0.9, "daily"),
  route("/info", 0.84, "weekly"),
  route("/info/childcare-portal", 0.82, "weekly"),
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
  route("/baby-names/generator", 0.76, "monthly"),
  route("/baby-names/rankings", 0.76, "weekly"),
  route("/search", 0.62, "weekly"),
  route("/family-health-qna", 0.86, "weekly"),
  route("/baby-names/rankings/2025", 0.75, "weekly"),
  route("/baby-names/rankings/2024", 0.7, "monthly"),
  route("/baby-names/rankings/2023", 0.7, "monthly"),
  route("/baby-names/meanings", 0.72, "weekly"),
  route("/about", 0.55, "monthly"),
  route("/faq", 0.5, "monthly"),
  route("/contact", 0.4, "monthly"),
  route("/privacy", 0.3, "yearly"),
  route("/terms", 0.3, "yearly"),
];

const dynamicKoreanQnaRoutes = (Object.keys(qnaCategories) as QnaCategory[]).flatMap((category) =>
  qnaData[category].map((entry) => route(`/qna/${category}/${entry.slug}`, 0.82, "daily")),
);
const dynamicKoreanPolicyRoutes = governmentPolicies.map((policy) => route(`/policy/${policy.category}/${policy.slug}`, 0.8, "daily"));
const dynamicKoreanBabyFoodRoutes = koBabyFoodRecipes.map((recipe) => route(`/baby-food/recipes/${recipe.slug}`, 0.68, "weekly"));
// "[지역명] 출산지원금" 검색에 대응하기 위해 시·군·구별 지역 페이지를 sitemap에 노출합니다.
const dynamicKoreanBirthSupportRoutes = birthSupportRegions.map((region) =>
  route(`/tools/birth-support-calculator/${region.regionCode}`, 0.85, "weekly"),
);

// 출산·육아 가계 가이드(부모급여·자녀 적금·연말정산 등) 콘텐츠
const dynamicKoreanFamilyFinanceRoutes: RouteConfig[] = [
  route("/info/family-finance", 0.82, "weekly"),
  ...familyFinanceArticles.map((article) =>
    route(`/info/family-finance/${article.slug}`, 0.78, "weekly"),
  ),
];
const dynamicChildcarePortalGuideRoutes = childcarePortalGuides.map((guide) =>
  route(`/info/childcare-portal/${guide.slug}`, 0.8, "weekly"),
);
const dynamicRankingRoutes = rankingYears.map((year, index) => route(`/baby-names/rankings/${year}`, index === 0 ? 0.75 : 0.7, index === 0 ? "weekly" : "monthly"));
const dynamicBabyNameMeaningRoutes = meaningPureKoreanNames.map((item) => route(`/baby-names/meanings/${item.slug}`, 0.68, "monthly"));
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [familyHealthPaths, monthlyGuidePaths, healthGuidePaths] = await Promise.all([
    getFamilyHealthSitemapPaths(),
    getMonthlyGuideSitemapPathsFromDb(),
    getHealthGuideSitemapPathsFromDb(),
  ]);

  const dynamicKoreanFamilyHealthRoutes = familyHealthPaths.map((path) => route(path, 0.78, "weekly"));
  const dynamicMonthlyGuideRoutes = monthlyGuidePaths.map((path) => route(path, 0.82, "weekly"));
  const dynamicHealthGuideRoutes = healthGuidePaths.map((path) => route(path, 0.82, "weekly"));
  const deduped = new Map<string, RouteConfig>();
  [
    ...staticRoutes,
    ...dynamicKoreanQnaRoutes,
    ...dynamicKoreanFamilyHealthRoutes,
    ...dynamicKoreanPolicyRoutes,
    ...dynamicKoreanBabyFoodRoutes,
    ...dynamicKoreanBirthSupportRoutes,
    ...dynamicKoreanFamilyFinanceRoutes,
    ...dynamicChildcarePortalGuideRoutes,
    ...dynamicRankingRoutes,
    ...dynamicBabyNameMeaningRoutes,
    ...dynamicMonthlyGuideRoutes,
    ...dynamicHealthGuideRoutes,
  ].forEach((item) => deduped.set(item.path, item));

  return Array.from(deduped.values()).map((item) => ({
    url: buildCanonical(item.path),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
