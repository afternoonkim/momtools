import { qnaCategories, qnaData, type QnaCategory } from "@/data/qna";
import { familyHealthCategories } from "@/data/familyHealthQna";
import { getFamilyHealthSearchEntriesFromDb } from "@/lib/repositories/family-health-qna-db";
import { getHealthGuideSearchEntriesFromDb, getMonthlyGuideSearchEntriesFromDb } from "@/lib/repositories/guides-db";
import { governmentPolicies, governmentPolicyCategories } from "@/data/governmentPolicy";
import { familyFinanceArticles } from "@/data/familyFinance";
import { babyFoodRecipes, stageLabels } from "@/data/babyFood";
import { SITE_DATES } from "@/lib/content-meta";
import { getPublishedParentingProductGuides } from "@/data/parentingProductGuides";
import { buildRssXml, RSS_RESPONSE_HEADERS, type FeedItem } from "@/lib/rss/feed";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const MAX_ITEMS_PER_SECTION = 40;
const MAX_TOTAL = 80;

function pickQnaItems(): FeedItem[] {
  return (Object.keys(qnaCategories) as QnaCategory[]).flatMap((category) =>
    qnaData[category].slice(0, 8).map((entry) => ({
      link: `/qna/${category}/${entry.slug}`,
      title: entry.question,
      description: entry.summary,
      pubDate: SITE_DATES.updated,
      category: `${qnaCategories[category]} Q&A`,
    })),
  );
}

async function pickFamilyHealthItems(): Promise<FeedItem[]> {
  const entries = await getFamilyHealthSearchEntriesFromDb();

  return entries.slice(0, 24).map((entry) => ({
    link: `/family-health-qna/${entry.category}/${entry.slug}`,
    title: entry.question,
    description: entry.summary,
    pubDate: SITE_DATES.updated,
    category: familyHealthCategories[entry.category].label,
  }));
}


async function pickMonthlyGuideItems(): Promise<FeedItem[]> {
  const entries = await getMonthlyGuideSearchEntriesFromDb();

  return entries.slice(0, 18).map((entry) => ({
    link: entry.path,
    title: entry.title,
    description: entry.summary,
    pubDate: SITE_DATES.updated,
    category: "월령별 육아 로드맵",
  }));
}

async function pickHealthGuideItems(): Promise<FeedItem[]> {
  const entries = await getHealthGuideSearchEntriesFromDb();

  return entries.slice(0, 12).map((entry) => ({
    link: entry.path,
    title: entry.title,
    description: entry.summary,
    pubDate: SITE_DATES.updated,
    category: "증상별 건강 가이드",
  }));
}

function pickPolicyItems(): FeedItem[] {
  return governmentPolicies.slice(0, MAX_ITEMS_PER_SECTION).map((entry) => ({
    link: `/policy/${entry.category}/${entry.slug}`,
    title: entry.title,
    description: entry.summary,
    pubDate: SITE_DATES.updated,
    category: `정부정책 · ${governmentPolicyCategories[entry.category].shortLabel}`,
  }));
}

function pickFamilyFinanceItems(): FeedItem[] {
  return familyFinanceArticles.map((article) => ({
    link: `/info/family-finance/${article.slug}`,
    title: article.title,
    description: article.metaDescription,
    pubDate: article.publishedOn,
    category: "가계 가이드",
  }));
}

function pickBabyFoodItems(): FeedItem[] {
  return babyFoodRecipes.slice(0, 12).map((recipe) => ({
    link: `/baby-food/recipes/${recipe.slug}`,
    title: recipe.title,
    description: recipe.summary,
    pubDate: SITE_DATES.updated,
    category: `이유식 · ${stageLabels[recipe.stage]}`,
  }));
}

function pickParentingProductItems(): FeedItem[] {
  return getPublishedParentingProductGuides().map((guide) => ({
    link: `/parenting-products/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    pubDate: guide.publishAt,
    category: `육아용품 가이드 · ${guide.category}`,
  }));
}

function pickFeaturedToolItems(): FeedItem[] {
  return [
    {
      link: "/tools/birth-support-calculator",
      title: "출산지원금 계산기 — 지역별 첫째·둘째·셋째 예상 금액",
      description:
        "사는 지역과 출생 순위를 선택하면 첫만남이용권, 부모급여, 아동수당, 가정양육수당, 지자체 출산지원금을 합산해 예상 금액을 확인할 수 있어요.",
      pubDate: SITE_DATES.updated,
      category: "육아 계산기",
    },
    {
      link: "/tools/due-date",
      title: "출산 예정일 계산기",
      description: "마지막 생리일을 입력하면 출산 예정일과 임신 주차, 주요 검진 시기를 자동으로 계산해 보여드려요.",
      pubDate: SITE_DATES.updated,
      category: "육아 계산기",
    },
    {
      link: "/tools/baby-age",
      title: "아기 개월수 계산기",
      description: "생년월일로 현재 아기 개월수, 출생 후 일수, 100일·돌 시점을 한 번에 확인할 수 있어요.",
      pubDate: SITE_DATES.updated,
      category: "육아 계산기",
    },
    {
      link: "/tools/vaccine-schedule",
      title: "예방접종 일정 계산기",
      description: "생년월일을 입력하면 월령별 국가예방접종 시기를 한국 기준으로 정리해 보여드려요.",
      pubDate: SITE_DATES.updated,
      category: "육아 계산기",
    },
    {
      link: "/tools/weaning-start",
      title: "이유식 시작 계산기",
      description: "생년월일과 발달 신호를 입력하면 이유식 시작 시기와 단계별 진행 시점을 안내해 드려요.",
      pubDate: SITE_DATES.updated,
      category: "육아 계산기",
    },
    {
      link: "/tools/growth-percentile",
      title: "성장 백분위 계산기",
      description: "키와 몸무게로 또래 대비 성장 백분위 위치를 빠르게 확인할 수 있어요.",
      pubDate: SITE_DATES.updated,
      category: "육아 계산기",
    },
  ];
}

function sortByDateDesc(items: FeedItem[]): FeedItem[] {
  return [...items].sort((a, b) => {
    const da = new Date(a.pubDate).getTime();
    const db = new Date(b.pubDate).getTime();
    return db - da;
  });
}

export async function GET() {
  const [familyHealthItems, monthlyGuideItems, healthGuideItems] = await Promise.all([
    pickFamilyHealthItems(),
    pickMonthlyGuideItems(),
    pickHealthGuideItems(),
  ]);

  const items = sortByDateDesc([
    ...pickFamilyFinanceItems(),
    ...pickPolicyItems(),
    ...familyHealthItems,
    ...monthlyGuideItems,
    ...healthGuideItems,
    ...pickQnaItems(),
    ...pickBabyFoodItems(),
    ...pickParentingProductItems(),
    ...pickFeaturedToolItems(),
  ]).slice(0, MAX_TOTAL);

  const xml = buildRssXml(
    {
      title: "MomTools — 육아 계산기·정보·정책·가계 가이드",
      description:
        "출산 예정일, 아기 개월수, 예방접종, 이유식, 성장 백분위, 지역별 출산지원금, 부모급여 활용, 자녀 적금·청약, 연말정산 자녀세액공제까지 한국 가정이 자주 찾는 정보를 모아 둔 사이트의 최신 콘텐츠 피드입니다.",
      pagePath: "/",
      feedPath: "/rss.xml",
    },
    items,
  );

  return new Response(xml, { headers: RSS_RESPONSE_HEADERS });
}
