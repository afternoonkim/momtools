import {
  familyHealthCategories,
  familyHealthQnaData,
  getFamilyHealthEntry,
  type FamilyHealthQnaCategory,
  type FamilyHealthQnaEntry,
} from "@/data/familyHealthQna";

export type FamilyHealthCategorySummary = {
  key: FamilyHealthQnaCategory;
  name: string;
  shortName?: string | null;
  description?: string | null;
  count: number;
};

export type FamilyHealthSearchEntry = Pick<
  FamilyHealthQnaEntry,
  "slug" | "question" | "topic" | "summary" | "keywords"
>;

type DbFamilyHealthRow = {
  slug: string;
  title: string;
  question: string | null;
  topic: string | null;
  summary: string;
  path: string;
  category?: { slug: string } | null;
  sections?: Array<{
    sectionType: string;
    body: string | null;
    items: unknown;
    sortOrder: number;
  }>;
  keywords?: Array<{ keyword: string }>;
};

const familyHealthCategoryKeys = Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[];

export function isFamilyHealthCategory(value: string): value is FamilyHealthQnaCategory {
  return value in familyHealthCategories;
}

function staticCategorySummaries(): FamilyHealthCategorySummary[] {
  return familyHealthCategoryKeys.map((key) => ({
    key,
    name: familyHealthCategories[key].label,
    shortName: familyHealthCategories[key].shortLabel,
    description: familyHealthCategories[key].description,
    count: familyHealthQnaData[key].length,
  }));
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function findSection(row: DbFamilyHealthRow, sectionType: string) {
  return row.sections?.find((section) => section.sectionType === sectionType);
}

function rowToFamilyHealthEntry(row: DbFamilyHealthRow): FamilyHealthQnaEntry {
  const answer = toStringArray(findSection(row, "answer")?.items);
  const checklist = toStringArray(findSection(row, "checklist")?.items);
  const simpleAction = toStringArray(findSection(row, "simpleAction")?.items);
  const caution = findSection(row, "caution")?.body ?? checklist.at(-1) ?? row.summary;
  const keywords = (row.keywords ?? []).map((item) => item.keyword).filter(Boolean);

  return {
    slug: row.slug,
    question: row.question ?? row.title,
    topic: row.topic ?? "가족 건강",
    summary: row.summary,
    answer: answer.length > 0 ? answer : [row.summary],
    checklist,
    simpleAction,
    caution,
    keywords,
  };
}

function rowToSearchEntry(row: DbFamilyHealthRow): FamilyHealthSearchEntry {
  return {
    slug: row.slug,
    question: row.question ?? row.title,
    topic: row.topic ?? "가족 건강",
    summary: row.summary,
    keywords: (row.keywords ?? []).map((item) => item.keyword).filter(Boolean),
  };
}

async function getPrismaOrNull() {
  try {
    const { prisma } = await import("@/lib/db");
    return prisma;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[family-health-qna-db] DB 연결을 사용할 수 없어 정적 가족건강 Q&A 데이터로 대체합니다.", error);
    }
    return null;
  }
}

export async function getFamilyHealthCategorySummaries(): Promise<FamilyHealthCategorySummary[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return staticCategorySummaries();

  try {
    const categories = await prisma.contentCategory.findMany({
      where: {
        locale: "ko",
        type: "FAMILY_HEALTH_QNA",
      },
      orderBy: [{ sortOrder: "asc" }, { slug: "asc" }],
      include: {
        _count: {
          select: {
            contents: {
              where: { status: "PUBLISHED" },
            },
          },
        },
      },
    });

    const summaries = categories
      .filter((category) => isFamilyHealthCategory(category.slug))
      .map((category) => ({
        key: category.slug as FamilyHealthQnaCategory,
        name: category.name,
        shortName: category.shortName,
        description: category.description,
        count: category._count.contents,
      }));

    return summaries.length > 0 ? summaries : staticCategorySummaries();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[family-health-qna-db] 가족건강 Q&A 카테고리 조회 실패. 정적 데이터로 대체합니다.", error);
    }
    return staticCategorySummaries();
  }
}

export async function getFamilyHealthEntriesForCategory(category: FamilyHealthQnaCategory): Promise<FamilyHealthQnaEntry[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return familyHealthQnaData[category];

  try {
    const rows = await prisma.content.findMany({
      where: {
        locale: "ko",
        type: "FAMILY_HEALTH_QNA",
        status: "PUBLISHED",
        category: { slug: category },
      },
      orderBy: [{ topic: "asc" }, { createdAt: "asc" }, { slug: "asc" }],
      include: {
        keywords: { orderBy: { keyword: "asc" } },
      },
    });

    return rows.length > 0 ? rows.map(rowToFamilyHealthEntry) : familyHealthQnaData[category];
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[family-health-qna-db] ${category} 가족건강 Q&A 목록 조회 실패. 정적 데이터로 대체합니다.`, error);
    }
    return familyHealthQnaData[category];
  }
}

export async function getFamilyHealthEntryFromDb(
  category: FamilyHealthQnaCategory,
  slug: string,
): Promise<FamilyHealthQnaEntry | null> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return getFamilyHealthEntry(category, slug) ?? null;

  try {
    const row = await prisma.content.findFirst({
      where: {
        locale: "ko",
        type: "FAMILY_HEALTH_QNA",
        slug,
        status: "PUBLISHED",
        category: { slug: category },
      },
      include: {
        sections: { orderBy: { sortOrder: "asc" } },
        keywords: { orderBy: { keyword: "asc" } },
      },
    });

    return row ? rowToFamilyHealthEntry(row) : getFamilyHealthEntry(category, slug) ?? null;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[family-health-qna-db] ${category}/${slug} 가족건강 Q&A 상세 조회 실패. 정적 데이터로 대체합니다.`, error);
    }
    return getFamilyHealthEntry(category, slug) ?? null;
  }
}

export async function getRelatedFamilyHealthFromDb(
  category: FamilyHealthQnaCategory,
  slug: string,
  limit = 6,
): Promise<FamilyHealthSearchEntry[]> {
  const entries = await getFamilyHealthEntriesForCategory(category);
  const current = entries.find((item) => item.slug === slug);

  if (!current) {
    return entries.filter((item) => item.slug !== slug).slice(0, limit).map(({ slug, question, topic, summary, keywords }) => ({
      slug,
      question,
      topic,
      summary,
      keywords,
    }));
  }

  const currentKeywordSet = new Set(current.keywords);

  return entries
    .filter((item) => item.slug !== slug)
    .map((item) => {
      const topicScore = item.topic === current.topic ? 5 : 0;
      const keywordScore = item.keywords.filter((keyword) => currentKeywordSet.has(keyword)).length;
      return { item, score: topicScore + keywordScore };
    })
    .sort((a, b) => b.score - a.score || a.item.question.localeCompare(b.item.question, "ko"))
    .slice(0, limit)
    .map(({ item }) => ({
      slug: item.slug,
      question: item.question,
      topic: item.topic,
      summary: item.summary,
      keywords: item.keywords,
    }));
}

export async function getFamilyHealthSearchEntriesFromDb(): Promise<Array<FamilyHealthSearchEntry & { category: FamilyHealthQnaCategory }>> {
  const prisma = await getPrismaOrNull();
  if (!prisma) {
    return familyHealthCategoryKeys.flatMap((category) =>
      familyHealthQnaData[category].map((entry) => ({ ...entry, category })),
    );
  }

  try {
    const rows = await prisma.content.findMany({
      where: { locale: "ko", type: "FAMILY_HEALTH_QNA", status: "PUBLISHED" },
      orderBy: [{ createdAt: "desc" }, { slug: "asc" }],
      include: {
        category: true,
        keywords: { orderBy: { keyword: "asc" } },
      },
    });

    const dbEntries = rows
      .filter((row) => row.category?.slug && isFamilyHealthCategory(row.category.slug))
      .map((row) => ({ ...rowToSearchEntry(row), category: row.category!.slug as FamilyHealthQnaCategory }));

    return dbEntries.length > 0
      ? dbEntries
      : familyHealthCategoryKeys.flatMap((category) =>
          familyHealthQnaData[category].map((entry) => ({ ...entry, category })),
        );
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[family-health-qna-db] 가족건강 Q&A 검색 데이터 조회 실패. 정적 데이터로 대체합니다.", error);
    }
    return familyHealthCategoryKeys.flatMap((category) =>
      familyHealthQnaData[category].map((entry) => ({ ...entry, category })),
    );
  }
}

export async function getFamilyHealthSitemapPaths(): Promise<string[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) {
    return familyHealthCategoryKeys.flatMap((category) =>
      familyHealthQnaData[category].map((entry) => `/family-health-qna/${category}/${entry.slug}`),
    );
  }

  try {
    const rows = await prisma.content.findMany({
      where: { locale: "ko", type: "FAMILY_HEALTH_QNA", status: "PUBLISHED" },
      select: { path: true },
      orderBy: [{ createdAt: "desc" }, { slug: "asc" }],
    });

    return rows.length > 0
      ? rows.map((row) => row.path)
      : familyHealthCategoryKeys.flatMap((category) =>
          familyHealthQnaData[category].map((entry) => `/family-health-qna/${category}/${entry.slug}`),
        );
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[family-health-qna-db] 가족건강 Q&A 사이트맵 경로 조회 실패. 정적 데이터로 대체합니다.", error);
    }
    return familyHealthCategoryKeys.flatMap((category) =>
      familyHealthQnaData[category].map((entry) => `/family-health-qna/${category}/${entry.slug}`),
    );
  }
}

export async function getFamilyHealthDbStatus() {
  const prisma = await getPrismaOrNull();
  if (!prisma) {
    return { connected: false, total: 0, categories: staticCategorySummaries(), reviewStatuses: [], sourceCount: 0, sample: null };
  }

  try {
    const [total, categoryRows, reviewRows, sourceCount, sample] = await Promise.all([
      prisma.content.count({ where: { locale: "ko", type: "FAMILY_HEALTH_QNA", status: "PUBLISHED" } }),
      prisma.contentCategory.findMany({
        where: { locale: "ko", type: "FAMILY_HEALTH_QNA" },
        orderBy: [{ sortOrder: "asc" }, { slug: "asc" }],
        include: { _count: { select: { contents: { where: { status: "PUBLISHED" } } } } },
      }),
      prisma.content.groupBy({
        by: ["reviewStatus"],
        where: { locale: "ko", type: "FAMILY_HEALTH_QNA", status: "PUBLISHED" },
        _count: { _all: true },
        orderBy: { reviewStatus: "asc" },
      }),
      prisma.contentSource.count({
        where: {
          content: { locale: "ko", type: "FAMILY_HEALTH_QNA", status: "PUBLISHED" },
        },
      }),
      prisma.content.findFirst({
        where: {
          locale: "ko",
          type: "FAMILY_HEALTH_QNA",
          status: "PUBLISHED",
          category: { slug: { in: ["medicine", "postpartum", "checkup"] } },
        },
        orderBy: [{ updatedAt: "desc" }, { slug: "asc" }],
        include: { category: true, sections: { orderBy: { sortOrder: "asc" } }, keywords: true, sources: true },
      }),
    ]);

    return {
      connected: true,
      total,
      categories: categoryRows
        .filter((category) => isFamilyHealthCategory(category.slug))
        .map((category) => ({
          key: category.slug as FamilyHealthQnaCategory,
          name: category.name,
          shortName: category.shortName,
          description: category.description,
          count: category._count.contents,
        })),
      reviewStatuses: reviewRows.map((row) => ({
        reviewStatus: row.reviewStatus,
        count: row._count._all,
      })),
      sourceCount,
      sample: sample
        ? {
            path: sample.path,
            question: sample.question ?? sample.title,
            summary: sample.summary,
            category: sample.category?.slug ?? null,
            reviewStatus: sample.reviewStatus,
            editorMemo: sample.editorMemo,
            duplicateMemo: sample.duplicateMemo,
            sections: sample.sections.map((section) => section.sectionType),
            keywordCount: sample.keywords.length,
            sourceCount: sample.sources.length,
          }
        : null,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[family-health-qna-db] 가족건강 Q&A DB 상태 확인 실패", error);
    }
    return { connected: false, total: 0, categories: staticCategorySummaries(), reviewStatuses: [], sourceCount: 0, sample: null };
  }
}
