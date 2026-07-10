import {
  getCoupangSearchKeyword,
  isCoupangPartnersApiConfigured,
  searchCoupangProductsByKeyword,
  type CoupangPartnersApiProduct,
} from "@/lib/coupang-partners-api";
import { normalizeCoupangPathname } from "@/lib/coupang-partners";
import { prisma } from "@/lib/db";

export type MatchedCoupangProductAd = {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string | null;
  partnerUrl: string;
  imageUrl?: string | null;
  price?: number | null;
  buttonText: string;
  priority: number;
  source?: "api" | "manual";
};

type CategoryCandidate = {
  slug: string;
  name: string;
  priority: number;
};

const MAX_PRODUCT_AD_ITEMS = 3;
const MAX_LINKS_PER_CATEGORY = 1;

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
  { pattern: /^\/items\/essential(?:\/.*)?$/, slugs: ["newborn-item", "stroller", "baby-food-tool"] },
  { pattern: /^\/play(?:\/.*)?$/, slugs: ["development-toy", "safety-item", "balance-bike"] },
];

function getFallbackCategorySlugs(pagePath: string) {
  return fallbackCategorySlugsByPath.find((rule) => rule.pattern.test(pagePath))?.slugs ?? [];
}

const nativeDescriptionByCategorySlug: Record<string, string> = {
  thermometer: "아이 열이 걱정될 때 집에서 먼저 체온을 확인할 수 있는 준비물이에요.",
  "nasal-aspirator": "콧물이나 코막힘이 불편해 보일 때 코 관리용으로 함께 확인해볼 수 있어요.",
  humidifier: "실내가 건조하게 느껴질 때 아이 방 습도 관리를 위해 함께 볼 수 있어요.",
  stroller: "산책이나 외출이 잦아질 때 이동 준비물로 함께 비교해볼 수 있어요.",
  "car-seat": "차량 이동을 준비할 때 아이 안전을 위해 함께 확인해볼 수 있어요.",
  "baby-carrier": "짧은 외출이나 안아주기가 잦은 시기에 함께 확인해볼 수 있어요.",
  "balance-bike": "야외 놀이와 균형감각 놀이를 시작할 때 함께 볼 수 있어요.",
  "baby-food-tool": "이유식을 시작하거나 보관·먹는 연습을 준비할 때 함께 확인해볼 수 있어요.",
  "baby-bottle": "수유 준비와 외출 수유를 생각할 때 함께 확인해볼 수 있어요.",
  diaper: "기저귀 교체가 잦은 시기나 외출 준비 때 함께 확인할 수 있어요.",
  "baby-wipes": "기저귀 갈이, 외출 준비, 어린이집 준비 때 함께 확인해볼 수 있어요.",
  "newborn-item": "출산 후 집에서 쓸 신생아 준비물을 정리할 때 함께 볼 수 있어요.",
  "daycare-item": "등원 준비, 낮잠, 여벌옷처럼 어린이집 준비물을 챙길 때 확인할 수 있어요.",
  "baby-bath": "목욕 시간을 조금 더 편하게 준비할 때 함께 확인해볼 수 있어요.",
  "baby-detergent": "아기 옷 세탁과 피부 자극이 걱정될 때 함께 확인해볼 수 있어요.",
  "sleeping-item": "아이 잠자리와 수면 환경을 정리할 때 함께 확인해볼 수 있어요.",
  "oral-care": "첫니와 양치 습관을 시작할 때 함께 확인해볼 수 있어요.",
  "potty-training": "배변훈련을 시작할 때 아이가 익숙해질 준비물로 함께 볼 수 있어요.",
  "safety-item": "뒤집기·기어가기·걸음마 시기 집안 안전을 챙길 때 함께 볼 수 있어요.",
  "development-toy": "월령별 놀이와 발달 활동을 준비할 때 함께 확인해볼 수 있어요.",
};

function buildNativeProductTitle(category: CategoryCandidate) {
  return `${category.name} 확인하기`;
}

function buildNativeProductDescription(category: CategoryCandidate) {
  return (
    nativeDescriptionByCategorySlug[category.slug] ??
    "지금 보고 있는 내용과 함께 확인해볼 수 있는 육아 준비물이에요."
  );
}

function apiProductToMatchedAd(
  product: CoupangPartnersApiProduct,
  category: CategoryCandidate,
  index: number,
): MatchedCoupangProductAd {
  return {
    id: `api-${category.slug}-${product.productId}-${index}`,
    categorySlug: category.slug,
    categoryName: category.name,
    title: buildNativeProductTitle(category),
    description: buildNativeProductDescription(category),
    partnerUrl: product.productUrl,
    imageUrl: null,
    price: null,
    buttonText: "보기",
    priority: category.priority - index,
    source: "api",
  };
}

async function getCategoryCandidatesFromMappings(pagePath: string): Promise<CategoryCandidate[]> {
  const mappings = await prisma.pageProductAdMapping.findMany({
    where: {
      pagePath,
      enabled: true,
      category: { enabled: true },
    },
    orderBy: [{ priority: "desc" }, { category: { sortOrder: "asc" } }],
    take: MAX_PRODUCT_AD_ITEMS,
    include: {
      category: {
        select: {
          slug: true,
          name: true,
        },
      },
    },
  });

  return mappings.map((mapping) => ({
    slug: mapping.category.slug,
    name: mapping.category.name,
    priority: mapping.priority,
  }));
}

async function getFallbackCategoryCandidates(pagePath: string): Promise<CategoryCandidate[]> {
  const slugs = getFallbackCategorySlugs(pagePath).slice(0, MAX_PRODUCT_AD_ITEMS);
  if (slugs.length === 0) return [];

  const categories = await prisma.coupangProductCategory.findMany({
    where: {
      slug: { in: slugs },
      enabled: true,
    },
    select: {
      slug: true,
      name: true,
    },
  });

  const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
  return slugs
    .map((slug, index) => {
      const category = categoryBySlug.get(slug);
      if (!category) return null;
      return {
        slug,
        name: category.name,
        priority: 100 - index * 10,
      } satisfies CategoryCandidate;
    })
    .filter((category): category is CategoryCandidate => Boolean(category));
}

async function getPageCategoryCandidates(pagePath: string) {
  const mappedCategories = await getCategoryCandidatesFromMappings(pagePath);
  if (mappedCategories.length > 0) return mappedCategories.slice(0, MAX_PRODUCT_AD_ITEMS);
  return getFallbackCategoryCandidates(pagePath);
}

async function getApiProductAds(categories: CategoryCandidate[]): Promise<MatchedCoupangProductAd[]> {
  if (!isCoupangPartnersApiConfigured() || categories.length === 0) return [];

  const [representativeCategory] = categories;
  if (!representativeCategory) return [];

  const keyword = getCoupangSearchKeyword(representativeCategory.slug);
  const products = await searchCoupangProductsByKeyword(keyword, MAX_PRODUCT_AD_ITEMS);

  return products
    .map((product, index) => apiProductToMatchedAd(product, representativeCategory, index))
    .slice(0, MAX_PRODUCT_AD_ITEMS);
}

async function getManualProductAds(categories: CategoryCandidate[]): Promise<MatchedCoupangProductAd[]> {
  if (categories.length === 0) return [];
  const slugs = categories.map((category) => category.slug);
  const priorityBySlug = new Map(categories.map((category) => [category.slug, category.priority]));

  const categoryRows = await prisma.coupangProductCategory.findMany({
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
          imageUrl: true,
          buttonText: true,
        },
      },
    },
  });

  const order = new Map(slugs.map((slug, index) => [slug, index]));

  return categoryRows
    .sort((a, b) => (order.get(a.slug) ?? 99) - (order.get(b.slug) ?? 99))
    .flatMap((category) =>
      category.links.map((link, linkIndex) => ({
        id: link.id,
        categorySlug: category.slug,
        categoryName: category.name,
        title: link.title,
        description: link.description,
        partnerUrl: link.partnerUrl,
        imageUrl: link.imageUrl,
        buttonText: link.buttonText,
        priority: (priorityBySlug.get(category.slug) ?? 0) - linkIndex,
        source: "manual" as const,
      } satisfies MatchedCoupangProductAd)),
    )
    .slice(0, MAX_PRODUCT_AD_ITEMS);
}

export async function getMatchedCoupangProductAds(pathname: string): Promise<MatchedCoupangProductAd[]> {
  const pagePath = normalizeCoupangPathname(pathname);
  const categories = await getPageCategoryCandidates(pagePath);
  if (categories.length === 0) return [];

  const apiItems = await getApiProductAds(categories);
  if (apiItems.length > 0) return apiItems;

  return getManualProductAds(categories);
}
