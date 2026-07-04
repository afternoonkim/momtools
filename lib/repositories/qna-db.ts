import { qnaCategories, qnaData, type QnaCategory, type QnaEntry } from "@/data/qna";
import { normalizeQnaQuestion, normalizeStringList, normalizeUserVisibleText } from "@/lib/content-text-normalize";

export type QnaCategorySummary = {
  key: QnaCategory;
  name: string;
  shortName?: string | null;
  description?: string | null;
  count: number;
};

export type QnaSearchEntry = Pick<QnaEntry, "slug" | "question" | "topic" | "summary" | "keywords">;

export type QnaSearchIndexEntry = QnaSearchEntry & {
  category: QnaCategory;
  categoryLabel: string;
  href: string;
};

type DbContentListRow = {
  slug: string;
  title: string;
  question: string | null;
  topic: string | null;
  summary: string;
  category?: { slug: string; name: string } | null;
  keywords: Array<{ keyword: string }>;
};

type DbContentWithSections = DbContentListRow & {
  sections: Array<{
    sectionType: string;
    body: string | null;
    items: unknown;
    sortOrder: number;
  }>;
};

const qnaCategoryKeys = Object.keys(qnaCategories) as QnaCategory[];

function isQnaCategory(value: string): value is QnaCategory {
  return value in qnaCategories;
}

function staticCategorySummaries(): QnaCategorySummary[] {
  return qnaCategoryKeys.map((key) => ({
    key,
    name: qnaCategories[key],
    shortName: qnaCategories[key].replace("아이 ", ""),
    count: qnaData[key].length,
  }));
}

function staticQnaSearchEntries(): QnaSearchIndexEntry[] {
  return qnaCategoryKeys.flatMap((category) =>
    qnaData[category].map((entry) => ({
      category,
      categoryLabel: `${qnaCategories[category]} Q&A`,
      href: `/qna/${category}/${entry.slug}`,
      slug: entry.slug,
      question: entry.question,
      topic: entry.topic,
      summary: entry.summary,
      keywords: entry.keywords,
    })),
  );
}

function staticQnaSitemapPaths(): string[] {
  return qnaCategoryKeys.flatMap((category) => qnaData[category].map((entry) => `/qna/${category}/${entry.slug}`));
}

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function findSection(row: DbContentWithSections, sectionType: string) {
  return row.sections.find((section) => section.sectionType === sectionType);
}

function rowToQnaListEntry(row: DbContentListRow): QnaEntry {
  const keywords = row.keywords.map((item) => normalizeUserVisibleText(item.keyword)).filter(Boolean);
  const summary = normalizeUserVisibleText(row.summary);

  return {
    slug: row.slug,
    question: normalizeQnaQuestion(row.question ?? row.title),
    topic: normalizeUserVisibleText(row.topic ?? "육아 질문"),
    summary,
    answer: [summary],
    checklist: [],
    simpleAction: [],
    caution: summary,
    keywords,
  };
}

function rowToQnaEntry(row: DbContentWithSections): QnaEntry {
  const answer = normalizeStringList(toStringArray(findSection(row, "answer")?.items));
  const checklist = normalizeStringList(toStringArray(findSection(row, "checklist")?.items));
  const simpleAction = normalizeStringList(toStringArray(findSection(row, "simpleAction")?.items));
  const summary = normalizeUserVisibleText(row.summary);
  const caution = normalizeUserVisibleText(findSection(row, "caution")?.body ?? checklist.at(-1) ?? summary);
  const keywords = row.keywords.map((item) => normalizeUserVisibleText(item.keyword)).filter(Boolean);

  return {
    slug: row.slug,
    question: normalizeQnaQuestion(row.question ?? row.title),
    topic: normalizeUserVisibleText(row.topic ?? "육아 질문"),
    summary,
    answer: answer.length > 0 ? answer : [summary],
    checklist,
    simpleAction,
    caution,
    keywords,
  };
}

async function getPrismaOrNull() {
  try {
    const { prisma } = await import("@/lib/db");
    return prisma;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[qna-db] DB 연결을 사용할 수 없어 정적 Q&A 데이터로 대체합니다.", error);
    }

    return null;
  }
}

export async function getQnaCategorySummaries(): Promise<QnaCategorySummary[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return staticCategorySummaries();

  try {
    const categories = await prisma.contentCategory.findMany({
      where: {
        locale: "ko",
        type: "QNA",
      },
      orderBy: [{ sortOrder: "asc" }, { slug: "asc" }],
      include: {
        _count: {
          select: {
            contents: {
              where: {
                status: "PUBLISHED",
              },
            },
          },
        },
      },
    });

    const summaries = categories
      .filter((category) => isQnaCategory(category.slug))
      .map((category) => ({
        key: category.slug as QnaCategory,
        name: category.name,
        shortName: category.shortName,
        description: category.description,
        count: category._count.contents,
      }));

    return summaries.length > 0 ? summaries : staticCategorySummaries();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[qna-db] Q&A 카테고리 조회 실패. 정적 데이터로 대체합니다.", error);
    }

    return staticCategorySummaries();
  }
}

export async function getQnaEntriesForCategory(category: QnaCategory): Promise<QnaEntry[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return qnaData[category];

  try {
    const rows = await prisma.content.findMany({
      where: {
        locale: "ko",
        type: "QNA",
        status: "PUBLISHED",
        category: {
          slug: category,
        },
      },
      orderBy: [{ topic: "asc" }, { createdAt: "asc" }, { slug: "asc" }],
      select: {
        slug: true,
        title: true,
        question: true,
        topic: true,
        summary: true,
        keywords: {
          select: { keyword: true },
          orderBy: { keyword: "asc" },
        },
      },
    });

    return rows.length > 0 ? rows.map(rowToQnaListEntry) : qnaData[category];
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[qna-db] ${category} Q&A 목록 조회 실패. 정적 데이터로 대체합니다.`, error);
    }

    return qnaData[category];
  }
}

export async function getQnaEntryFromDb(category: QnaCategory, slug: string): Promise<QnaEntry | null> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return qnaData[category].find((item) => item.slug === slug) ?? null;

  try {
    const row = await prisma.content.findFirst({
      where: {
        locale: "ko",
        type: "QNA",
        slug,
        status: "PUBLISHED",
        category: {
          slug: category,
        },
      },
      select: {
        slug: true,
        title: true,
        question: true,
        topic: true,
        summary: true,
        sections: {
          orderBy: { sortOrder: "asc" },
          select: {
            sectionType: true,
            body: true,
            items: true,
            sortOrder: true,
          },
        },
        keywords: {
          orderBy: { keyword: "asc" },
          select: { keyword: true },
        },
      },
    });

    return row ? rowToQnaEntry(row) : qnaData[category].find((item) => item.slug === slug) ?? null;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[qna-db] ${category}/${slug} Q&A 상세 조회 실패. 정적 데이터로 대체합니다.`, error);
    }

    return qnaData[category].find((item) => item.slug === slug) ?? null;
  }
}

export async function getRelatedQnaFromDb(category: QnaCategory, slug: string, limit = 6): Promise<QnaSearchEntry[]> {
  const entries = await getQnaEntriesForCategory(category);
  const current = entries.find((item) => item.slug === slug);

  if (!current) return entries.filter((item) => item.slug !== slug).slice(0, limit);

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

export async function getAllQnaSearchEntriesFromDb(): Promise<QnaSearchIndexEntry[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return staticQnaSearchEntries();

  try {
    const rows = await prisma.content.findMany({
      where: {
        locale: "ko",
        type: "QNA",
        status: "PUBLISHED",
        category: {
          slug: { in: qnaCategoryKeys },
        },
      },
      orderBy: [{ createdAt: "desc" }, { slug: "asc" }],
      select: {
        slug: true,
        title: true,
        question: true,
        topic: true,
        summary: true,
        category: {
          select: {
            slug: true,
            name: true,
          },
        },
        keywords: {
          select: { keyword: true },
          orderBy: { keyword: "asc" },
        },
      },
    });

    const entries = rows
      .filter((row) => row.category?.slug && isQnaCategory(row.category.slug))
      .map((row) => {
        const category = row.category!.slug as QnaCategory;
        const qna = rowToQnaListEntry(row);
        return {
          category,
          categoryLabel: `${qnaCategories[category]} Q&A`,
          href: `/qna/${category}/${row.slug}`,
          slug: qna.slug,
          question: qna.question,
          topic: qna.topic,
          summary: qna.summary,
          keywords: qna.keywords,
        };
      });

    return entries.length > 0 ? entries : staticQnaSearchEntries();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[qna-db] Q&A 검색 인덱스 조회 실패. 정적 데이터로 대체합니다.", error);
    }

    return staticQnaSearchEntries();
  }
}

export async function getQnaSitemapPathsFromDb(): Promise<string[]> {
  const prisma = await getPrismaOrNull();
  if (!prisma) return staticQnaSitemapPaths();

  try {
    const rows = await prisma.content.findMany({
      where: {
        locale: "ko",
        type: "QNA",
        status: "PUBLISHED",
        path: { startsWith: "/qna/" },
      },
      orderBy: [{ createdAt: "desc" }, { path: "asc" }],
      select: { path: true },
    });

    return rows.length > 0 ? rows.map((row) => row.path) : staticQnaSitemapPaths();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[qna-db] Q&A sitemap 경로 조회 실패. 정적 데이터로 대체합니다.", error);
    }

    return staticQnaSitemapPaths();
  }
}

export async function getQnaDbStatus() {
  const prisma = await getPrismaOrNull();
  if (!prisma) {
    return {
      connected: false,
      total: 0,
      categories: staticCategorySummaries(),
      sample: null,
    };
  }

  try {
    const [total, categoryRows, sample] = await Promise.all([
      prisma.content.count({
        where: { locale: "ko", type: "QNA", status: "PUBLISHED" },
      }),
      prisma.contentCategory.findMany({
        where: { locale: "ko", type: "QNA" },
        orderBy: [{ sortOrder: "asc" }, { slug: "asc" }],
        include: {
          _count: {
            select: {
              contents: { where: { status: "PUBLISHED" } },
            },
          },
        },
      }),
      prisma.content.findFirst({
        where: { locale: "ko", type: "QNA", status: "PUBLISHED" },
        orderBy: [{ createdAt: "asc" }, { slug: "asc" }],
        include: {
          category: true,
          sections: { orderBy: { sortOrder: "asc" } },
          keywords: true,
        },
      }),
    ]);

    return {
      connected: true,
      total,
      categories: categoryRows
        .filter((category) => isQnaCategory(category.slug))
        .map((category) => ({
          key: category.slug as QnaCategory,
          name: category.name,
          shortName: category.shortName,
          description: category.description,
          count: category._count.contents,
        })),
      sample: sample
        ? {
            path: sample.path,
            question: sample.question ?? sample.title,
            summary: sample.summary,
            category: sample.category?.slug ?? null,
            sections: sample.sections.map((section) => section.sectionType),
            keywordCount: sample.keywords.length,
          }
        : null,
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[qna-db] Q&A DB 상태 확인 실패", error);
    }

    return {
      connected: false,
      total: 0,
      categories: staticCategorySummaries(),
      sample: null,
    };
  }
}
