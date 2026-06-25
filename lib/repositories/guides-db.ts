import { healthGuideItems, type HealthGuideItem } from "@/data/healthGuides";
import { monthlyGuideItems, type MonthlyGuideItem } from "@/data/monthlyGuide";

export type GuideSearchEntry = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  path: string;
  keywords: string[];
};

type DbGuideRow = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string | null;
  topic: string | null;
  summary: string;
  ageMinMonth?: number | null;
  ageMaxMonth?: number | null;
  reviewStatus?: string;
  editorMemo?: string | null;
  duplicateMemo?: string | null;
  sections?: Array<{
    sectionType: string;
    title: string | null;
    body: string | null;
    items: unknown;
    sortOrder: number;
  }>;
  keywords?: Array<{ keyword: string }>;
  sources?: Array<{ name: string; url: string | null; description: string | null }>;
};

type LinkItem = { label: string; href: string };
type FaqItem = { question: string; answer: string };

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function toLinkArray(value: unknown): LinkItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const record = item as Record<string, unknown>;
      if (typeof record.label !== "string" || typeof record.href !== "string") return null;
      return { label: record.label, href: record.href };
    })
    .filter((item): item is LinkItem => item !== null);
}

function toFaqArray(value: unknown): FaqItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const record = item as Record<string, unknown>;
      if (typeof record.question !== "string" || typeof record.answer !== "string") return null;
      return { question: record.question, answer: record.answer };
    })
    .filter((item): item is FaqItem => item !== null);
}

function findSection(row: DbGuideRow, sectionType: string) {
  return row.sections?.find((section) => section.sectionType === sectionType);
}

function rowKeywords(row: DbGuideRow): string[] {
  return (row.keywords ?? []).map((item) => item.keyword).filter(Boolean);
}

function rowToMonthlyGuide(row: DbGuideRow): MonthlyGuideItem {
  const fallback = monthlyGuideItems.find((item) => item.slug === row.slug);

  return {
    slug: row.slug,
    title: row.title,
    ageLabel: row.shortTitle ?? row.topic ?? fallback?.ageLabel ?? "월령별 가이드",
    summary: row.summary,
    searchIntent: findSection(row, "searchIntent")?.body ?? fallback?.searchIntent ?? `${row.title}를 찾는 부모를 위한 월령별 확인 가이드입니다.`,
    keyChecks: toStringArray(findSection(row, "keyChecks")?.items).length > 0 ? toStringArray(findSection(row, "keyChecks")?.items) : fallback?.keyChecks ?? [],
    development: toStringArray(findSection(row, "development")?.items).length > 0 ? toStringArray(findSection(row, "development")?.items) : fallback?.development ?? [],
    feeding: toStringArray(findSection(row, "feeding")?.items).length > 0 ? toStringArray(findSection(row, "feeding")?.items) : fallback?.feeding ?? [],
    sleep: toStringArray(findSection(row, "sleep")?.items).length > 0 ? toStringArray(findSection(row, "sleep")?.items) : fallback?.sleep ?? [],
    play: toStringArray(findSection(row, "play")?.items).length > 0 ? toStringArray(findSection(row, "play")?.items) : fallback?.play ?? [],
    parentTips: toStringArray(findSection(row, "parentTips")?.items).length > 0 ? toStringArray(findSection(row, "parentTips")?.items) : fallback?.parentTips ?? [],
    dangerSigns: toStringArray(findSection(row, "dangerSigns")?.items).length > 0 ? toStringArray(findSection(row, "dangerSigns")?.items) : fallback?.dangerSigns ?? [],
    commonQuestions: toFaqArray(findSection(row, "commonQuestions")?.items).length > 0 ? toFaqArray(findSection(row, "commonQuestions")?.items) : fallback?.commonQuestions ?? [],
    relatedLinks: toLinkArray(findSection(row, "relatedLinks")?.items).length > 0 ? toLinkArray(findSection(row, "relatedLinks")?.items) : fallback?.relatedLinks ?? [],
    keywords: rowKeywords(row).length > 0 ? rowKeywords(row) : fallback?.keywords ?? [],
  };
}

function rowToHealthGuide(row: DbGuideRow): HealthGuideItem {
  const fallback = healthGuideItems.find((item) => item.slug === row.slug);

  return {
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    quickConclusion: findSection(row, "quickConclusion")?.body ?? fallback?.quickConclusion ?? row.summary,
    firstCheck: toStringArray(findSection(row, "firstCheck")?.items).length > 0 ? toStringArray(findSection(row, "firstCheck")?.items) : fallback?.firstCheck ?? [],
    homeCare: toStringArray(findSection(row, "homeCare")?.items).length > 0 ? toStringArray(findSection(row, "homeCare")?.items) : fallback?.homeCare ?? [],
    ageCriteria: toStringArray(findSection(row, "ageCriteria")?.items).length > 0 ? toStringArray(findSection(row, "ageCriteria")?.items) : fallback?.ageCriteria ?? [],
    dangerSigns: toStringArray(findSection(row, "dangerSigns")?.items).length > 0 ? toStringArray(findSection(row, "dangerSigns")?.items) : fallback?.dangerSigns ?? [],
    recordTips: toStringArray(findSection(row, "recordTips")?.items).length > 0 ? toStringArray(findSection(row, "recordTips")?.items) : fallback?.recordTips ?? [],
    commonMistakes: toStringArray(findSection(row, "commonMistakes")?.items).length > 0 ? toStringArray(findSection(row, "commonMistakes")?.items) : fallback?.commonMistakes ?? [],
    faq: toFaqArray(findSection(row, "faq")?.items).length > 0 ? toFaqArray(findSection(row, "faq")?.items) : fallback?.faq ?? [],
    relatedLinks: toLinkArray(findSection(row, "relatedLinks")?.items).length > 0 ? toLinkArray(findSection(row, "relatedLinks")?.items) : fallback?.relatedLinks ?? [],
    keywords: rowKeywords(row).length > 0 ? rowKeywords(row) : fallback?.keywords ?? [],
  };
}

async function getPrismaOrNull() {
  try {
    const { prisma } = await import("@/lib/db");
    return prisma;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[guides-db] DB 연결을 사용할 수 없어 정적 가이드 데이터로 대체합니다.", error);
    }
    return null;
  }
}

const guideRowSelect = {
  slug: true,
  path: true,
  title: true,
  shortTitle: true,
  topic: true,
  summary: true,
  ageMinMonth: true,
  ageMaxMonth: true,
  reviewStatus: true,
  editorMemo: true,
  duplicateMemo: true,
  sections: {
    orderBy: { sortOrder: "asc" as const },
    select: {
      sectionType: true,
      title: true,
      body: true,
      items: true,
      sortOrder: true,
    },
  },
  keywords: {
    orderBy: { keyword: "asc" as const },
    select: { keyword: true },
  },
  sources: {
    select: { name: true, url: true, description: true },
  },
};

async function findGuideRows(type: "MONTHLY_GUIDE" | "HEALTH_GUIDE"): Promise<DbGuideRow[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return [];

  try {
    if (type === "MONTHLY_GUIDE") {
      return await prisma.content.findMany({
        where: {
          locale: "ko",
          type,
          status: "PUBLISHED",
        },
        orderBy: [{ ageMinMonth: "asc" }, { slug: "asc" }],
        select: guideRowSelect,
      });
    }

    return await prisma.content.findMany({
      where: {
        locale: "ko",
        type,
        status: "PUBLISHED",
      },
      orderBy: [{ createdAt: "asc" }, { slug: "asc" }],
      select: guideRowSelect,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[guides-db] ${type} 목록 조회 실패. 정적 데이터로 대체합니다.`, error);
    }
    return [];
  }
}

async function findGuideRow(type: "MONTHLY_GUIDE" | "HEALTH_GUIDE", slug: string): Promise<DbGuideRow | null> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return null;

  try {
    return await prisma.content.findFirst({
      where: {
        locale: "ko",
        type,
        slug,
        status: "PUBLISHED",
      },
      select: {
        slug: true,
        path: true,
        title: true,
        shortTitle: true,
        topic: true,
        summary: true,
        ageMinMonth: true,
        ageMaxMonth: true,
        reviewStatus: true,
        editorMemo: true,
        duplicateMemo: true,
        sections: {
          orderBy: { sortOrder: "asc" },
          select: {
            sectionType: true,
            title: true,
            body: true,
            items: true,
            sortOrder: true,
          },
        },
        keywords: {
          orderBy: { keyword: "asc" },
          select: { keyword: true },
        },
        sources: {
          select: { name: true, url: true, description: true },
        },
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[guides-db] ${type}/${slug} 상세 조회 실패. 정적 데이터로 대체합니다.`, error);
    }
    return null;
  }
}

export async function getMonthlyGuidesFromDb(): Promise<MonthlyGuideItem[]> {
  const rows = await findGuideRows("MONTHLY_GUIDE");
  return rows.length > 0 ? rows.map(rowToMonthlyGuide) : monthlyGuideItems;
}

export async function getMonthlyGuideFromDb(slug: string): Promise<MonthlyGuideItem | null> {
  const row = await findGuideRow("MONTHLY_GUIDE", slug);
  return row ? rowToMonthlyGuide(row) : monthlyGuideItems.find((item) => item.slug === slug) ?? null;
}

export async function getHealthGuidesFromDb(): Promise<HealthGuideItem[]> {
  const rows = await findGuideRows("HEALTH_GUIDE");
  return rows.length > 0 ? rows.map(rowToHealthGuide) : healthGuideItems;
}

export async function getHealthGuideFromDb(slug: string): Promise<HealthGuideItem | null> {
  const row = await findGuideRow("HEALTH_GUIDE", slug);
  return row ? rowToHealthGuide(row) : healthGuideItems.find((item) => item.slug === slug) ?? null;
}

export async function getMonthlyGuideSearchEntriesFromDb(): Promise<GuideSearchEntry[]> {
  const items = await getMonthlyGuidesFromDb();
  return items.map((item) => ({
    slug: item.slug,
    path: `/monthly-guide/${item.slug}`,
    title: item.title,
    summary: item.summary,
    topic: item.ageLabel,
    keywords: [...item.keywords, item.ageLabel, "월령별 육아", "아기 발달"],
  }));
}

export async function getHealthGuideSearchEntriesFromDb(): Promise<GuideSearchEntry[]> {
  const items = await getHealthGuidesFromDb();
  return items.map((item) => ({
    slug: item.slug,
    path: `/health/${item.slug}`,
    title: item.title,
    summary: item.summary,
    topic: item.title,
    keywords: [...item.keywords, "아기 증상", "아이 건강", "병원 상담 신호"],
  }));
}

export async function getMonthlyGuideSitemapPathsFromDb(): Promise<string[]> {
  const rows = await findGuideRows("MONTHLY_GUIDE");
  return rows.length > 0 ? rows.map((row) => row.path) : monthlyGuideItems.map((item) => `/monthly-guide/${item.slug}`);
}

export async function getHealthGuideSitemapPathsFromDb(): Promise<string[]> {
  const rows = await findGuideRows("HEALTH_GUIDE");
  return rows.length > 0 ? rows.map((row) => row.path) : healthGuideItems.map((item) => `/health/${item.slug}`);
}

export async function getGuidesDbStatus() {
  const prisma = await getPrismaOrNull();
  const staticStatus = {
    connected: false,
    monthlyTotal: monthlyGuideItems.length,
    healthTotal: healthGuideItems.length,
    total: monthlyGuideItems.length + healthGuideItems.length,
    reviewStatuses: [] as Array<{ type: string; reviewStatus: string; count: number }>,
    samples: {
      monthly: monthlyGuideItems[0]
        ? {
            path: `/monthly-guide/${monthlyGuideItems[0].slug}`,
            title: monthlyGuideItems[0].title,
            summary: monthlyGuideItems[0].summary,
            sections: ["keyChecks", "development", "feeding", "sleep", "play", "parentTips", "dangerSigns"],
            keywordCount: monthlyGuideItems[0].keywords.length,
          }
        : null,
      health: healthGuideItems[0]
        ? {
            path: `/health/${healthGuideItems[0].slug}`,
            title: healthGuideItems[0].title,
            summary: healthGuideItems[0].summary,
            sections: ["quickConclusion", "firstCheck", "homeCare", "ageCriteria", "dangerSigns"],
            keywordCount: healthGuideItems[0].keywords.length,
          }
        : null,
    },
  };

  if (!prisma) return staticStatus;

  try {
    const [monthlyTotal, healthTotal, reviewGroups, monthlySample, healthSample] = await Promise.all([
      prisma.content.count({ where: { locale: "ko", type: "MONTHLY_GUIDE", status: "PUBLISHED" } }),
      prisma.content.count({ where: { locale: "ko", type: "HEALTH_GUIDE", status: "PUBLISHED" } }),
      prisma.content.groupBy({
        by: ["type", "reviewStatus"],
        where: {
          locale: "ko",
          type: { in: ["MONTHLY_GUIDE", "HEALTH_GUIDE"] },
          status: "PUBLISHED",
        },
        _count: { _all: true },
        orderBy: [{ type: "asc" }, { reviewStatus: "asc" }],
      }),
      prisma.content.findFirst({
        where: { locale: "ko", type: "MONTHLY_GUIDE", status: "PUBLISHED" },
        orderBy: [{ ageMinMonth: "asc" }, { slug: "asc" }],
        include: { sections: { orderBy: { sortOrder: "asc" } }, keywords: true },
      }),
      prisma.content.findFirst({
        where: { locale: "ko", type: "HEALTH_GUIDE", status: "PUBLISHED" },
        orderBy: [{ createdAt: "asc" }, { slug: "asc" }],
        include: { sections: { orderBy: { sortOrder: "asc" } }, keywords: true },
      }),
    ]);

    return {
      connected: true,
      monthlyTotal,
      healthTotal,
      total: monthlyTotal + healthTotal,
      reviewStatuses: reviewGroups.map((row) => ({
        type: row.type,
        reviewStatus: row.reviewStatus,
        count: row._count._all,
      })),
      samples: {
        monthly: monthlySample
          ? {
              path: monthlySample.path,
              title: monthlySample.title,
              summary: monthlySample.summary,
              sections: monthlySample.sections.map((section) => section.sectionType),
              keywordCount: monthlySample.keywords.length,
            }
          : null,
        health: healthSample
          ? {
              path: healthSample.path,
              title: healthSample.title,
              summary: healthSample.summary,
              sections: healthSample.sections.map((section) => section.sectionType),
              keywordCount: healthSample.keywords.length,
            }
          : null,
      },
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[guides-db] 가이드 DB 상태 확인 실패", error);
    }
    return staticStatus;
  }
}
