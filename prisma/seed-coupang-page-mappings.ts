import dotenv from "dotenv";

const dotenvOptions = (path: string) =>
  ({ path, quiet: true }) as Parameters<typeof dotenv.config>[0];

dotenv.config(dotenvOptions(".env.local"));
dotenv.config(dotenvOptions(".env"));

import { babyFoodRecipes, stageLabels } from "../data/babyFood";
import { babyProductQnaItems, type BabyProductCategory } from "../data/babyProductQna";
import { playCategories, playItems } from "../data/play";
import { parentingProductGuides } from "../data/parentingProductGuides";
import type { ContentType, PrismaClient } from "../lib/generated/prisma/client";

const MAX_CATEGORIES_PER_PAGE = 3;
const PRIORITY_BASE = 100;
const PRIORITY_STEP = 10;

let activePrisma: PrismaClient | null = null;

type ProductCategorySlug =
  | "thermometer"
  | "nasal-aspirator"
  | "humidifier"
  | "stroller"
  | "car-seat"
  | "baby-carrier"
  | "balance-bike"
  | "baby-food-tool"
  | "baby-bottle"
  | "diaper"
  | "baby-wipes"
  | "newborn-item"
  | "daycare-item"
  | "baby-bath"
  | "baby-detergent"
  | "sleeping-item"
  | "oral-care"
  | "potty-training"
  | "safety-item"
  | "development-toy";

type PageCandidate = {
  pagePath: string;
  titleText: string;
  bodyText: string;
  explicitCategories?: ProductCategorySlug[];
  source: "content-db" | "static-route";
};

type Rule = {
  slug: ProductCategorySlug;
  strong: string[];
  weak?: string[];
  minScore?: number;
};

type ScoredCategory = {
  slug: ProductCategorySlug;
  score: number;
  reasons: string[];
};

const isDryRun = process.argv.includes("--dry-run");
const shouldSync = process.argv.includes("--sync");

const skippedContentTypes = new Set<ContentType>([
  "POLICY",
  "FAMILY_FINANCE",
  "CHILDCARE_PORTAL_GUIDE",
  "BABY_NAME",
]);

const skippedPathPrefixes = [
  "/en",
  "/cal",
  "/tools",
  "/db-check",
  "/search",
  "/faq",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
  "/policy",
];

const categoryRules: Rule[] = [
  {
    slug: "thermometer",
    strong: ["열", "발열", "체온", "고열", "미열", "해열", "해열제", "38도", "39도", "예방접종 후 열"],
    weak: ["접종 후", "축 처짐", "아기 열", "아이 열"],
    minScore: 18,
  },
  {
    slug: "nasal-aspirator",
    strong: ["콧물", "코막힘", "코가 막", "코딱지", "비염", "코 흡입", "식염수"],
    weak: ["코 관리", "입으로 숨", "수유 중 자주 떼"],
    minScore: 18,
  },
  {
    slug: "humidifier",
    strong: ["가습", "습도", "건조", "마른기침", "쌕쌕", "호흡"],
    weak: ["기침", "실내 공기", "밤에 심", "숨쉬"],
    minScore: 18,
  },
  {
    slug: "stroller",
    strong: ["유모차", "휴대용 유모차", "절충형", "디럭스", "쌍둥이 유모차", "기내반입"],
    weak: ["산책", "외출", "나들이", "아기 이동"],
    minScore: 18,
  },
  {
    slug: "car-seat",
    strong: ["카시트", "주니어카시트", "신생아 카시트", "자동차", "차량", "안전벨트"],
    weak: ["장거리 이동", "차로", "차 안", "차량 안전"],
    minScore: 18,
  },
  {
    slug: "baby-carrier",
    strong: ["아기띠", "힙시트", "포대기", "슬링", "업기"],
    weak: ["안아", "등센서", "짧은 이동", "외출 보조"],
    minScore: 18,
  },
  {
    slug: "balance-bike",
    strong: ["밸런스바이크", "균형자전거", "첫 자전거", "두발자전거"],
    weak: ["균형감각", "대근육 놀이", "야외 놀이"],
    minScore: 18,
  },
  {
    slug: "baby-food-tool",
    strong: ["이유식", "초기 이유식", "중기 이유식", "후기 이유식", "이유식 용기", "이유식 큐브", "이유식 스푼", "흡착식판"],
    weak: ["보관용기", "큐브", "스푼", "식판", "먹는 연습", "자기주도 식사"],
    minScore: 18,
  },
  {
    slug: "baby-bottle",
    strong: ["젖병", "분유", "모유", "젖꼭지", "빨대컵", "분유케이스", "보온병"],
    weak: ["수유", "수유량", "먹는 양", "외출 수유"],
    minScore: 22,
  },
  {
    slug: "diaper",
    strong: ["기저귀", "기저귀 발진", "소변", "대변", "설사", "배변", "묽은 변", "혈변"],
    weak: ["기저귀 횟수", "변 상태", "변 횟수", "갈이"],
    minScore: 20,
  },
  {
    slug: "baby-wipes",
    strong: ["물티슈", "기저귀 갈이", "외출 준비", "손 닦", "청결"],
    weak: ["위생", "닦아", "준비물"],
    minScore: 20,
  },
  {
    slug: "newborn-item",
    strong: ["신생아", "출산 준비", "출산가방", "배냇저고리", "속싸개", "신생아 준비물", "출산 준비물"],
    weak: ["산후조리", "생후 0개월", "생후 초기", "태어", "조리원"],
    minScore: 18,
  },
  {
    slug: "daycare-item",
    strong: ["어린이집", "등원", "낮잠이불", "네임스티커", "여벌옷", "입소", "준비물"],
    weak: ["물통", "등원 준비", "적응기간", "하원"],
    minScore: 18,
  },
  {
    slug: "baby-bath",
    strong: ["목욕", "아기욕조", "아기 비데", "아기비데", "목욕의자", "샤워", "목욕용품"],
    weak: ["피부 관리", "위생", "씻기", "목욕 시간"],
    minScore: 18,
  },
  {
    slug: "baby-detergent",
    strong: ["세제", "아기 세제", "세탁", "빨래", "섬유유연제", "아기 옷"],
    weak: ["피부 자극", "옷 관리", "세탁 관리"],
    minScore: 18,
  },
  {
    slug: "sleeping-item",
    strong: ["수면", "밤잠", "낮잠", "잠투정", "수면교육", "수면 환경", "침구", "수면조끼"],
    weak: ["잠", "이불", "자다", "밤에 깨", "재우"],
    minScore: 20,
  },
  {
    slug: "oral-care",
    strong: ["양치", "첫니", "치아", "칫솔", "치발기", "구강", "불소"],
    weak: ["입안", "잇몸", "이가 나"],
    minScore: 18,
  },
  {
    slug: "potty-training",
    strong: ["배변훈련", "기저귀 떼기", "유아변기", "변기커버", "대소변", "팬티"],
    weak: ["화장실", "응가", "소변 가리기"],
    minScore: 18,
  },
  {
    slug: "safety-item",
    strong: ["안전문", "모서리", "콘센트", "낙상", "화상", "추락", "사고 예방", "안전용품"],
    weak: ["안전", "뒤집기", "기어", "걸음마", "잡고 서", "위험"],
    minScore: 22,
  },
  {
    slug: "development-toy",
    strong: ["놀이", "장난감", "발달완구", "소근육", "대근육", "오감", "색칠", "미로", "숨은그림", "점잇기"],
    weak: ["발달", "촉감", "집중력", "관찰력", "운동 발달"],
    minScore: 22,
  },
];

function normalize(value: string): string {
  return value
    .replace(/[“”]/g, "\"")
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isSkippedPath(pagePath: string): boolean {
  if (!pagePath || pagePath === "/") return true;
  return skippedPathPrefixes.some((prefix) => pagePath === prefix || pagePath.startsWith(`${prefix}/`));
}

function toUniqueCategories(categories: ProductCategorySlug[]): ProductCategorySlug[] {
  return Array.from(new Set(categories)).slice(0, MAX_CATEGORIES_PER_PAGE);
}

function scoreRule(candidate: PageCandidate, rule: Rule): ScoredCategory | null {
  const titleText = normalize(`${candidate.pagePath} ${candidate.titleText}`);
  const bodyText = normalize(candidate.bodyText);
  let score = 0;
  const reasons: string[] = [];

  for (const keyword of rule.strong) {
    const normalizedKeyword = normalize(keyword);
    if (!normalizedKeyword) continue;
    if (titleText.includes(normalizedKeyword)) {
      score += 30;
      reasons.push(keyword);
      continue;
    }
    if (bodyText.includes(normalizedKeyword)) {
      score += 12;
      reasons.push(keyword);
    }
  }

  for (const keyword of rule.weak ?? []) {
    const normalizedKeyword = normalize(keyword);
    if (!normalizedKeyword) continue;
    if (titleText.includes(normalizedKeyword)) {
      score += 16;
      reasons.push(keyword);
      continue;
    }
    if (bodyText.includes(normalizedKeyword)) {
      score += 4;
      reasons.push(keyword);
    }
  }

  const minScore = rule.minScore ?? 18;
  if (score < minScore) return null;

  return { slug: rule.slug, score, reasons };
}

function rankCategories(candidate: PageCandidate): ScoredCategory[] {
  const scores = new Map<ProductCategorySlug, ScoredCategory>();

  candidate.explicitCategories?.forEach((slug, index) => {
    scores.set(slug, {
      slug,
      score: 500 - index * 20,
      reasons: ["수동 경로 매핑"],
    });
  });

  for (const rule of categoryRules) {
    const matched = scoreRule(candidate, rule);
    if (!matched) continue;

    const existing = scores.get(matched.slug);
    if (existing) {
      existing.score += matched.score;
      existing.reasons = Array.from(new Set([...existing.reasons, ...matched.reasons])).slice(0, 5);
    } else {
      scores.set(matched.slug, matched);
    }
  }

  return [...scores.values()]
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
    .slice(0, MAX_CATEGORIES_PER_PAGE);
}

function categoriesForProductCategory(category: BabyProductCategory, text: string): ProductCategorySlug[] {
  if (category === "stroller") return ["stroller"];
  if (category === "feeding") return ["baby-bottle"];
  if (category === "potty") return ["potty-training"];
  if (category === "bath") return ["baby-bath"];
  if (category === "weaning") return ["baby-food-tool"];

  const normalizedText = normalize(text);
  if (normalizedText.includes("밸런스바이크") || normalizedText.includes("자전거")) {
    return ["balance-bike", "development-toy"];
  }
  return ["development-toy"];
}

function buildStaticCandidates(): PageCandidate[] {
  const candidates: PageCandidate[] = [
    {
      pagePath: "/baby-food",
      titleText: "이유식 정보 이유식 시작 단계별 이유식",
      bodyText: "이유식 용기 이유식 스푼 큐브 보관용기 흡착식판",
      explicitCategories: ["baby-food-tool"],
      source: "static-route",
    },
    ...Object.entries(stageLabels).map(([stage, label]) => ({
      pagePath: `/baby-food/${stage}`,
      titleText: `${label} 이유식 단계`,
      bodyText: "이유식 용기 이유식 스푼 큐브 보관용기 흡착식판",
      explicitCategories: ["baby-food-tool" as ProductCategorySlug],
      source: "static-route" as const,
    })),
    {
      pagePath: "/checklists",
      titleText: "육아 체크리스트 출산 신생아 이유식 어린이집 준비물",
      bodyText: "출산 준비물 신생아 준비물 이유식 준비물 어린이집 준비물",
      explicitCategories: ["newborn-item", "baby-food-tool", "daycare-item"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/birth",
      titleText: "출산 준비물 체크리스트",
      bodyText: "신생아 준비물 젖병 기저귀 아기 세제 아기 목욕용품",
      explicitCategories: ["newborn-item", "baby-bottle", "baby-detergent"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/birth-prep",
      titleText: "출산가방 출산 준비 체크리스트",
      bodyText: "출산 준비물 신생아 준비물 배냇저고리 속싸개 젖병",
      explicitCategories: ["newborn-item", "baby-bottle", "baby-detergent"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/newborn",
      titleText: "신생아 체크리스트",
      bodyText: "신생아 준비물 기저귀 아기 목욕용품 체온계 젖병",
      explicitCategories: ["newborn-item", "diaper", "baby-bath"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/newborn-prep",
      titleText: "신생아 준비물 체크리스트",
      bodyText: "신생아 준비물 기저귀 젖병 아기 목욕용품 아기 세제",
      explicitCategories: ["newborn-item", "diaper", "baby-bottle"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/weaning",
      titleText: "이유식 준비물 체크리스트",
      bodyText: "이유식 용기 이유식 스푼 큐브 보관용기 흡착식판 턱받이",
      explicitCategories: ["baby-food-tool", "baby-wipes"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/weaning-prep",
      titleText: "이유식 시작 준비 체크리스트",
      bodyText: "이유식 용기 이유식 스푼 큐브 보관용기 흡착식판",
      explicitCategories: ["baby-food-tool", "baby-wipes"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/daycare",
      titleText: "어린이집 준비물 체크리스트",
      bodyText: "어린이집 등원 낮잠이불 네임스티커 여벌옷 물통 기저귀 물티슈",
      explicitCategories: ["daycare-item", "baby-wipes", "diaper"],
      source: "static-route",
    },
    {
      pagePath: "/checklists/daycare-prep",
      titleText: "어린이집 입소 준비 체크리스트",
      bodyText: "어린이집 등원 낮잠이불 네임스티커 여벌옷 물통 기저귀 물티슈",
      explicitCategories: ["daycare-item", "baby-wipes", "diaper"],
      source: "static-route",
    },
    {
      pagePath: "/info/newborn",
      titleText: "신생아 정보",
      bodyText: "신생아 준비물 수유 기저귀 목욕 수면 체온",
      explicitCategories: ["newborn-item", "diaper", "baby-bottle"],
      source: "static-route",
    },
    {
      pagePath: "/info/weaning",
      titleText: "이유식 정보",
      bodyText: "이유식 시작 이유식 용기 이유식 스푼 보관용기 큐브",
      explicitCategories: ["baby-food-tool", "baby-bottle"],
      source: "static-route",
    },
    {
      pagePath: "/info/toddler",
      titleText: "유아 정보 발달 놀이 안전 배변훈련",
      bodyText: "발달 놀이 안전용품 배변훈련 구강관리 어린이집 준비물",
      explicitCategories: ["development-toy", "safety-item", "potty-training"],
      source: "static-route",
    },
    {
      pagePath: "/items/essential",
      titleText: "육아용품 정보 필수 육아용품",
      bodyText: "유모차 젖병 이유식용품 목욕용품 배변훈련용품 장난감",
      explicitCategories: ["newborn-item", "stroller", "baby-food-tool"],
      source: "static-route",
    },
    {
      pagePath: "/play",
      titleText: "육아 놀이 색칠 미로 숨은그림 점잇기",
      bodyText: "발달 놀이 소근육 대근육 집중력 관찰력 프린트 도안",
      explicitCategories: ["development-toy"],
      source: "static-route",
    },
  ];

  for (const recipe of babyFoodRecipes) {
    candidates.push({
      pagePath: `/baby-food/recipes/${recipe.slug}`,
      titleText: `${recipe.title} ${stageLabels[recipe.stage]} ${recipe.category}`,
      bodyText: [
        recipe.summary,
        recipe.tip,
        recipe.textureGuide,
        recipe.storageTip,
        recipe.ingredients.join(" "),
        recipe.searchTerms.join(" "),
      ].join(" "),
      explicitCategories: ["baby-food-tool"],
      source: "static-route",
    });
  }

  for (const item of babyProductQnaItems) {
    const text = [item.title, item.question, item.summary, item.productName, item.kind, item.keywords.join(" ")].join(" ");
    candidates.push({
      pagePath: `/items/essential/${item.slug}`,
      titleText: `${item.title} ${item.question} ${item.kind}`,
      bodyText: text,
      explicitCategories: categoriesForProductCategory(item.category, text),
      source: "static-route",
    });
  }

  for (const guide of parentingProductGuides) {
    candidates.push({
      pagePath: `/parenting-products/${guide.slug}`,
      titleText: `${guide.title} ${guide.shortTitle} ${guide.keywords.join(" ")}`,
      bodyText: [
        guide.summary,
        guide.quickAnswer,
        guide.coupangKeywords.join(" "),
        guide.sections
          .map((section) => `${section.title} ${section.paragraphs.join(" ")} ${(section.items ?? []).join(" ")}`)
          .join(" "),
      ].join(" "),
      explicitCategories: [...guide.productCategorySlugs],
      source: "static-route",
    });
  }

  for (const category of playCategories) {
    candidates.push({
      pagePath: `/play/${category.slug}`,
      titleText: `${category.name.ko} ${category.searchLabel.ko}`,
      bodyText: `${category.description.ko} 발달 놀이 장난감 소근육 대근육 집중력`,
      explicitCategories: ["development-toy"],
      source: "static-route",
    });
  }

  for (const item of playItems) {
    candidates.push({
      pagePath: `/play/${item.category}/${item.slug}`,
      titleText: `${item.title.ko} ${item.ageRange.ko} ${item.difficulty.ko}`,
      bodyText: [item.summary.ko, item.intro.ko, item.useTip.ko, item.skills.map((skill) => skill.ko).join(" "), item.keywords.join(" ")].join(" "),
      explicitCategories: ["development-toy"],
      source: "static-route",
    });
  }

  return candidates;
}

function mergeMapping(
  pageMap: Map<string, Map<ProductCategorySlug, ScoredCategory>>,
  pagePath: string,
  scoredCategories: ScoredCategory[],
) {
  if (isSkippedPath(pagePath) || scoredCategories.length === 0) return;

  const current = pageMap.get(pagePath) ?? new Map<ProductCategorySlug, ScoredCategory>();
  for (const category of scoredCategories) {
    const existing = current.get(category.slug);
    if (!existing || category.score > existing.score) {
      current.set(category.slug, category);
    }
  }
  pageMap.set(pagePath, current);
}

function pickTopCategories(categories: Map<ProductCategorySlug, ScoredCategory>): ScoredCategory[] {
  return [...categories.values()]
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
    .slice(0, MAX_CATEGORIES_PER_PAGE);
}

async function getDbContentCandidates(db: PrismaClient): Promise<PageCandidate[]> {
  const contents = await db.content.findMany({
    where: {
      locale: "ko",
      status: { not: "HIDDEN" },
    },
    select: {
      path: true,
      type: true,
      title: true,
      shortTitle: true,
      question: true,
      topic: true,
      summary: true,
      keywords: { select: { keyword: true } },
      sections: {
        select: {
          title: true,
          body: true,
          items: true,
        },
      },
    },
    orderBy: { path: "asc" },
  });

  return contents
    .filter((content) => !skippedContentTypes.has(content.type))
    .filter((content) => !isSkippedPath(content.path))
    .map((content) => {
      const sectionText = content.sections
        .map((section) => {
          const itemsText = Array.isArray(section.items) ? section.items.join(" ") : JSON.stringify(section.items ?? "");
          return [section.title, section.body, itemsText].filter(Boolean).join(" ");
        })
        .join(" ");

      return {
        pagePath: content.path,
        titleText: [content.path, content.type, content.title, content.shortTitle, content.question, content.topic]
          .filter(Boolean)
          .join(" "),
        bodyText: [content.summary, content.keywords.map((item) => item.keyword).join(" "), sectionText]
          .filter(Boolean)
          .join(" "),
        explicitCategories: explicitCategoriesForContentType(content.type, `${content.path} ${content.title} ${content.question ?? ""} ${content.topic ?? ""} ${content.summary}`),
        source: "content-db" as const,
      };
    });
}

function explicitCategoriesForContentType(type: ContentType, text: string): ProductCategorySlug[] | undefined {
  if (type === "BABY_FOOD_RECIPE") return ["baby-food-tool"];
  if (type === "PLAY_ITEM") return ["development-toy"];

  const normalizedText = normalize(text);
  if (type === "CHECKLIST") {
    if (normalizedText.includes("어린이집")) return ["daycare-item", "baby-wipes", "diaper"];
    if (normalizedText.includes("이유식")) return ["baby-food-tool", "baby-wipes"];
    if (normalizedText.includes("신생아")) return ["newborn-item", "diaper", "baby-bottle"];
    if (normalizedText.includes("출산")) return ["newborn-item", "baby-bottle", "baby-detergent"];
  }

  return undefined;
}

function buildPageMappings(candidates: PageCandidate[]) {
  const pageMap = new Map<string, Map<ProductCategorySlug, ScoredCategory>>();

  for (const candidate of candidates) {
    mergeMapping(pageMap, candidate.pagePath, rankCategories(candidate));
  }

  return [...pageMap.entries()]
    .map(([pagePath, categoryMap]) => ({ pagePath, categories: pickTopCategories(categoryMap) }))
    .filter((mapping) => mapping.categories.length > 0)
    .sort((a, b) => a.pagePath.localeCompare(b.pagePath));
}

async function seedCoupangPageMappings() {
  activePrisma = (await import("../lib/db")).prisma;
  const db = activePrisma;

  const categoryRows = await db.coupangProductCategory.findMany({
    where: { enabled: true },
    select: { id: true, slug: true, name: true },
  });

  const categoryBySlug = new Map(categoryRows.map((category) => [category.slug as ProductCategorySlug, category]));
  const missingCategories = categoryRules
    .map((rule) => rule.slug)
    .filter((slug) => !categoryBySlug.has(slug));

  if (missingCategories.length > 0) {
    throw new Error(
      `쿠팡 상품 카테고리가 아직 준비되지 않았습니다. 먼저 npm run db:seed:coupang-ads 를 실행해 주세요. 누락: ${missingCategories.join(", ")}`,
    );
  }

  const candidates = [
    ...buildStaticCandidates(),
    ...(await getDbContentCandidates(db)),
  ];

  const mappings = buildPageMappings(candidates);

  const categoryCount = new Map<ProductCategorySlug, number>();
  let upsertCount = 0;
  let disabledCount = 0;

  for (const mapping of mappings) {
    if (shouldSync && !isDryRun) {
      const selectedCategoryIds = mapping.categories
        .map((category) => categoryBySlug.get(category.slug)?.id)
        .filter((categoryId): categoryId is string => Boolean(categoryId));
      const disabled = await db.pageProductAdMapping.updateMany({
        where: {
          pagePath: mapping.pagePath,
          categoryId: { notIn: selectedCategoryIds },
          enabled: true,
        },
        data: { enabled: false },
      });
      disabledCount += disabled.count;
    }

    for (const [index, category] of mapping.categories.entries()) {
      const categoryRow = categoryBySlug.get(category.slug);
      if (!categoryRow) continue;
      const priority = PRIORITY_BASE - index * PRIORITY_STEP;

      categoryCount.set(category.slug, (categoryCount.get(category.slug) ?? 0) + 1);

      if (isDryRun) {
        continue;
      }

      await db.pageProductAdMapping.upsert({
        where: {
          pagePath_categoryId: {
            pagePath: mapping.pagePath,
            categoryId: categoryRow.id,
          },
        },
        update: {
          priority,
          enabled: true,
        },
        create: {
          pagePath: mapping.pagePath,
          categoryId: categoryRow.id,
          priority,
          enabled: true,
        },
      });
      upsertCount += 1;
    }
  }

  console.log(
    `쿠팡 맞춤 광고 페이지 매핑 ${isDryRun ? "dry-run" : "seed"} 완료: ${mappings.length}개 페이지, ${isDryRun ? mappings.reduce((sum, item) => sum + item.categories.length, 0) : upsertCount}개 매핑`,
  );

  if (shouldSync) {
    console.log(`--sync 적용: 기존 초과/불일치 매핑 ${disabledCount}개 비활성화`);
  }

  console.log("카테고리별 매핑 수:");
  [...categoryCount.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(([slug, count]) => {
      const label = categoryBySlug.get(slug)?.name ?? slug;
      console.log(`- ${slug} (${label}): ${count}`);
    });

  console.log("샘플 매핑:");
  mappings.slice(0, 20).forEach((mapping) => {
    console.log(`- ${mapping.pagePath} => ${mapping.categories.map((category) => category.slug).join(", ")}`);
  });
}

seedCoupangPageMappings()
  .catch((error) => {
    console.error("쿠팡 맞춤 광고 페이지 매핑 seed 실패");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await activePrisma?.$disconnect();
  });
