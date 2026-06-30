import { prisma } from "@/lib/db";
import { normalizeCoupangPathname } from "@/lib/coupang-partners";

export type MatchedCoupangProductAd = {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string | null;
  partnerUrl: string;
  buttonText: string;
  priority: number;
};

const MAX_PRODUCT_AD_ITEMS = 6;
const MAX_LINKS_PER_CATEGORY = 2;

const fallbackCategorySlugsByPath: { pattern: RegExp; slugs: string[] }[] = [
  { pattern: /^\/tools\/vaccine-schedule(?:\/.*)?$/, slugs: ["thermometer", "baby-bottle", "newborn-item"] },
  { pattern: /^\/tools\/weaning-start(?:\/.*)?$/, slugs: ["baby-food-tool", "baby-bottle", "baby-wipes"] },
  { pattern: /^\/tools\/baby-age(?:\/.*)?$/, slugs: ["newborn-item", "baby-bottle", "diaper"] },
  { pattern: /^\/tools\/growth-percentile(?:\/.*)?$/, slugs: ["development-toy", "baby-bottle", "baby-food-tool"] },
  { pattern: /^\/tools\/due-date(?:\/.*)?$/, slugs: ["newborn-item", "baby-bath", "baby-detergent"] },
  { pattern: /^\/tools\/birth-support-calculator(?:\/.*)?$/, slugs: ["newborn-item", "diaper", "baby-wipes"] },
  { pattern: /^\/baby-food(?:\/.*)?$/, slugs: ["baby-food-tool", "baby-bottle", "baby-wipes"] },
  { pattern: /^\/qna\/health(?:\/.*)?$/, slugs: ["thermometer", "humidifier", "nasal-aspirator"] },
  { pattern: /^\/qna\/growth(?:\/.*)?$/, slugs: ["development-toy", "safety-item", "baby-food-tool"] },
  { pattern: /^\/qna\/behavior(?:\/.*)?$/, slugs: ["sleeping-item", "daycare-item", "development-toy"] },
  { pattern: /^\/health(?:\/.*)?$/, slugs: ["thermometer", "humidifier", "nasal-aspirator"] },
  { pattern: /^\/monthly-guide(?:\/.*)?$/, slugs: ["development-toy", "baby-food-tool", "sleeping-item"] },
  { pattern: /^\/checklists\/birth(?:\/.*)?$/, slugs: ["newborn-item", "baby-bath", "baby-detergent"] },
  { pattern: /^\/checklists\/newborn(?:\/.*)?$/, slugs: ["newborn-item", "diaper", "baby-wipes"] },
  { pattern: /^\/checklists\/weaning(?:\/.*)?$/, slugs: ["baby-food-tool", "baby-bottle", "baby-wipes"] },
  { pattern: /^\/checklists\/daycare(?:\/.*)?$/, slugs: ["daycare-item", "baby-wipes", "safety-item"] },
];

function getFallbackCategorySlugs(pagePath: string) {
  return fallbackCategorySlugsByPath.find((rule) => rule.pattern.test(pagePath))?.slugs ?? [];
}

async function getFallbackProductAds(pagePath: string): Promise<MatchedCoupangProductAd[]> {
  const slugs = getFallbackCategorySlugs(pagePath);
  if (slugs.length === 0) return [];

  const categories = await prisma.coupangProductCategory.findMany({
    where: {
      slug: { in: slugs },
      enabled: true,
      links: {
        some: {
          enabled: true,
          partnerUrl: { not: "" },
        },
      },
    },
    include: {
      links: {
        where: {
          enabled: true,
          partnerUrl: { not: "" },
        },
        orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
        take: MAX_LINKS_PER_CATEGORY,
        select: {
          id: true,
          title: true,
          description: true,
          partnerUrl: true,
          buttonText: true,
        },
      },
    },
  });

  const order = new Map(slugs.map((slug, index) => [slug, index]));

  return categories
    .sort((a: { slug: string }, b: { slug: string }) => (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99))
    .flatMap((category: { slug: string; name: string; links: Array<{ id: string; title: string; description: string | null; partnerUrl: string; buttonText: string }> }, categoryIndex: number) =>
      category.links.map((link: { id: string; title: string; description: string | null; partnerUrl: string; buttonText: string }, linkIndex: number) => ({
        id: link.id,
        categorySlug: category.slug,
        categoryName: category.name,
        title: link.title,
        description: link.description,
        partnerUrl: link.partnerUrl,
        buttonText: link.buttonText,
        priority: 100 - categoryIndex * 10 - linkIndex,
      } satisfies MatchedCoupangProductAd)),
    )
    .slice(0, MAX_PRODUCT_AD_ITEMS);
}

export async function getMatchedCoupangProductAds(pathname: string): Promise<MatchedCoupangProductAd[]> {
  const pagePath = normalizeCoupangPathname(pathname);

  const mappings = await prisma.pageProductAdMapping.findMany({
    where: {
      pagePath,
      enabled: true,
      category: {
        enabled: true,
        links: {
          some: {
            enabled: true,
            partnerUrl: { not: "" },
          },
        },
      },
    },
    orderBy: [{ priority: "desc" }, { category: { sortOrder: "asc" } }],
    take: MAX_PRODUCT_AD_ITEMS,
    include: {
      category: {
        select: {
          slug: true,
          name: true,
          links: {
            where: {
              enabled: true,
              partnerUrl: { not: "" },
            },
            orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
            take: MAX_LINKS_PER_CATEGORY,
            select: {
              id: true,
              title: true,
              description: true,
              partnerUrl: true,
              buttonText: true,
            },
          },
        },
      },
    },
  });

  const mappedItems = mappings.flatMap((mapping: { priority: number; category: { slug: string; name: string; links: Array<{ id: string; title: string; description: string | null; partnerUrl: string; buttonText: string }> } }) =>
    mapping.category.links.map((link: { id: string; title: string; description: string | null; partnerUrl: string; buttonText: string }) => ({
      id: link.id,
      categorySlug: mapping.category.slug,
      categoryName: mapping.category.name,
      title: link.title,
      description: link.description,
      partnerUrl: link.partnerUrl,
      buttonText: link.buttonText,
      priority: mapping.priority,
    } satisfies MatchedCoupangProductAd)),
  ).slice(0, MAX_PRODUCT_AD_ITEMS);

  if (mappedItems.length > 0) return mappedItems;
  return getFallbackProductAds(pagePath);
}
