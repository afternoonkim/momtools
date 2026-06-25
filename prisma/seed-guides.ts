import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

import { healthGuideItems, type HealthGuideItem } from "../data/healthGuides";
import { monthlyGuideItems, type MonthlyGuideItem } from "../data/monthlyGuide";
import type { Prisma } from "../lib/generated/prisma/client";

const isDryRun = process.argv.includes("--dry-run");

function normalizeText(value: string): string {
  return value.replace(/[“”]/g, "\"").replace(/\s+/g, " ").trim();
}

function compactKey(value: string): string {
  return value.replace(/[\s,.!?\"'·:;()\[\]{}｜/]/g, "").trim();
}

function uniqueTextItems(items: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const raw of items) {
    const item = normalizeText(raw);
    const key = compactKey(item);
    if (!item || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function uniqueKeywords(items: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const raw of items) {
    const item = normalizeText(raw).replace(/^#/, "");
    const key = item.toLowerCase();
    if (!item || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function safeMetaDescription(value: string, fallback: string): string {
  const text = normalizeText(value || fallback);
  return text.length > 145 ? `${text.slice(0, 142)}...` : text;
}

function parseAgeRange(slug: string): { min: number | null; max: number | null } {
  const single = slug.match(/^(\d+)-month$/);
  if (single) {
    const month = Number(single[1]);
    return { min: month, max: month };
  }
  const range = slug.match(/^(\d+)-(\d+)-month$/);
  if (range) return { min: Number(range[1]), max: Number(range[2]) };
  return { min: null, max: null };
}

function sanitizeMonthlyItem(item: MonthlyGuideItem): MonthlyGuideItem {
  return {
    ...item,
    title: normalizeText(item.title),
    ageLabel: normalizeText(item.ageLabel),
    summary: normalizeText(item.summary),
    searchIntent: normalizeText(item.searchIntent),
    keyChecks: uniqueTextItems(item.keyChecks),
    development: uniqueTextItems(item.development),
    feeding: uniqueTextItems(item.feeding),
    sleep: uniqueTextItems(item.sleep),
    play: uniqueTextItems(item.play),
    parentTips: uniqueTextItems(item.parentTips),
    dangerSigns: uniqueTextItems(item.dangerSigns),
    commonQuestions: item.commonQuestions
      .map((faq) => ({ question: normalizeText(faq.question), answer: normalizeText(faq.answer) }))
      .filter((faq) => faq.question && faq.answer),
    relatedLinks: item.relatedLinks.filter((link) => link.label && link.href),
    keywords: uniqueKeywords([...item.keywords, item.ageLabel, item.title, "월령별 육아", "아기 발달"]),
  };
}

function sanitizeHealthText(value: string): string {
  return normalizeText(value)
    .replace(/괜찮습니다/g, "상황에 따라 확인이 필요합니다")
    .replace(/괜찮아요/g, "상황에 따라 확인이 필요합니다")
    .replace(/정상입니다/g, "개인차가 있어 단정하기 어렵습니다")
    .replace(/해열제를 먹이면 됩니다/g, "해열제는 월령과 체중 기준을 확인한 뒤 사용해야 합니다")
    .replace(/약을 먹이면 됩니다/g, "약 사용 전 월령과 체중 기준을 확인해야 합니다");
}

function sanitizeHealthItem(item: HealthGuideItem): HealthGuideItem {
  return {
    ...item,
    title: sanitizeHealthText(item.title),
    summary: sanitizeHealthText(item.summary),
    quickConclusion: sanitizeHealthText(item.quickConclusion),
    firstCheck: uniqueTextItems(item.firstCheck.map(sanitizeHealthText)),
    homeCare: uniqueTextItems(item.homeCare.map(sanitizeHealthText)),
    ageCriteria: uniqueTextItems(item.ageCriteria.map(sanitizeHealthText)),
    dangerSigns: uniqueTextItems(item.dangerSigns.map(sanitizeHealthText)),
    recordTips: uniqueTextItems(item.recordTips.map(sanitizeHealthText)),
    commonMistakes: uniqueTextItems(item.commonMistakes.map(sanitizeHealthText)),
    faq: item.faq
      .map((faq) => ({ question: sanitizeHealthText(faq.question), answer: sanitizeHealthText(faq.answer) }))
      .filter((faq) => faq.question && faq.answer),
    relatedLinks: item.relatedLinks.filter((link) => link.label && link.href),
    keywords: uniqueKeywords([...item.keywords, item.title, "아기 증상", "아이 건강", "병원 상담 신호"]),
  };
}

async function importDb() {
  return import("../lib/db");
}

type PrismaClientForSeed = Awaited<ReturnType<typeof importDb>>["prisma"];

function healthReviewStatus(item: HealthGuideItem): string {
  const text = `${item.slug} ${item.title} ${item.summary} ${item.keywords.join(" ")}`;
  if (["fever", "dehydration", "head-bump", "vomiting", "rash"].some((slug) => item.slug.includes(slug))) {
    return "NEEDS_HEALTH_HIGH_RISK_REVIEW";
  }
  if (/해열제|탈수|호흡|응급|혈변|분수토|초록색|머리|낙상|발진|두드러기/.test(text)) {
    return "NEEDS_HEALTH_HIGH_RISK_REVIEW";
  }
  return "NEEDS_MEDICAL_REVIEW";
}

async function upsertCategory(prisma: PrismaClientForSeed, type: "MONTHLY_GUIDE" | "HEALTH_GUIDE") {
  const config =
    type === "MONTHLY_GUIDE"
      ? {
          slug: "monthly-guide",
          name: "월령별 육아 가이드",
          shortName: "월령 가이드",
          description: "생후 0개월부터 36개월까지 발달, 수유, 수면, 놀이, 상담 신호를 부모 관점으로 정리한 가이드입니다.",
          sortOrder: 1,
        }
      : {
          slug: "health-guide",
          name: "증상별 건강 가이드",
          shortName: "건강 가이드",
          description: "아기 열, 기침, 콧물, 설사, 구토, 발진처럼 부모가 자주 찾는 증상별 확인 기준과 상담 신호입니다.",
          sortOrder: 2,
        };

  return prisma.contentCategory.upsert({
    where: {
      locale_type_slug: {
        locale: "ko",
        type,
        slug: config.slug,
      },
    },
    update: config,
    create: {
      locale: "ko",
      type,
      ...config,
    },
  });
}

async function seedMonthlyGuides() {
  const { prisma } = await importDb();
  const category = await upsertCategory(prisma, "MONTHLY_GUIDE");

  let count = 0;
  for (const raw of monthlyGuideItems) {
    const item = sanitizeMonthlyItem(raw);
    const ageRange = parseAgeRange(item.slug);

    if (isDryRun) {
      if (count < 3) {
        console.log(`[dry-run][monthly] ${item.slug} / ${item.title}`);
        console.log(`  summary: ${item.summary}`);
        console.log(`  sections: keyChecks ${item.keyChecks.length}, dangerSigns ${item.dangerSigns.length}`);
      }
      count += 1;
      continue;
    }

    const content = await prisma.content.upsert({
      where: {
        locale_type_slug: {
          locale: "ko",
          type: "MONTHLY_GUIDE",
          slug: item.slug,
        },
      },
      update: {
        categoryId: category.id,
        path: `/monthly-guide/${item.slug}`,
        title: item.title,
        shortTitle: item.ageLabel,
        topic: item.ageLabel,
        summary: item.summary,
        ageMinMonth: ageRange.min,
        ageMaxMonth: ageRange.max,
        isMedical: false,
        isOfficialInfo: false,
        status: "PUBLISHED",
        reviewStatus: "READY_FOR_PAGE_TEST",
        duplicateMemo: "기존 월령별 가이드 데이터를 DB 구조에 맞게 섹션화했습니다. 반복 문장과 사용자 관점 문장을 이후 월령별로 추가 점검하세요.",
        editorMemo: "월령별 검색어와 부모가 바로 확인할 체크포인트를 유지했습니다.",
        metaTitle: `${item.ageLabel} 아기 발달·수유·수면 가이드 | MomTools`,
        metaDescription: safeMetaDescription(item.summary, item.searchIntent),
        canonicalPath: `/monthly-guide/${item.slug}`,
        ogTitle: item.title,
        ogDescription: safeMetaDescription(item.summary, item.searchIntent),
        publishedAt: new Date(),
      },
      create: {
        locale: "ko",
        type: "MONTHLY_GUIDE",
        categoryId: category.id,
        slug: item.slug,
        path: `/monthly-guide/${item.slug}`,
        title: item.title,
        shortTitle: item.ageLabel,
        topic: item.ageLabel,
        summary: item.summary,
        ageMinMonth: ageRange.min,
        ageMaxMonth: ageRange.max,
        isMedical: false,
        isOfficialInfo: false,
        status: "PUBLISHED",
        reviewStatus: "READY_FOR_PAGE_TEST",
        duplicateMemo: "기존 월령별 가이드 데이터를 DB 구조에 맞게 섹션화했습니다. 반복 문장과 사용자 관점 문장을 이후 월령별로 추가 점검하세요.",
        editorMemo: "월령별 검색어와 부모가 바로 확인할 체크포인트를 유지했습니다.",
        metaTitle: `${item.ageLabel} 아기 발달·수유·수면 가이드 | MomTools`,
        metaDescription: safeMetaDescription(item.summary, item.searchIntent),
        canonicalPath: `/monthly-guide/${item.slug}`,
        ogTitle: item.title,
        ogDescription: safeMetaDescription(item.summary, item.searchIntent),
        publishedAt: new Date(),
      },
    });

    await prisma.contentSection.deleteMany({ where: { contentId: content.id } });
    await prisma.contentSection.createMany({
      data: [
        { contentId: content.id, sectionType: "searchIntent", title: "이 가이드를 찾는 상황", body: item.searchIntent, sortOrder: 1 },
        { contentId: content.id, sectionType: "keyChecks", title: "오늘 먼저 확인할 것", items: item.keyChecks as Prisma.InputJsonValue, sortOrder: 2 },
        { contentId: content.id, sectionType: "development", title: "발달 흐름", items: item.development as Prisma.InputJsonValue, sortOrder: 3 },
        { contentId: content.id, sectionType: "feeding", title: "수유·식사 기준", items: item.feeding as Prisma.InputJsonValue, sortOrder: 4 },
        { contentId: content.id, sectionType: "sleep", title: "수면과 하루 루틴", items: item.sleep as Prisma.InputJsonValue, sortOrder: 5 },
        { contentId: content.id, sectionType: "play", title: "집에서 해볼 수 있는 놀이", items: item.play as Prisma.InputJsonValue, sortOrder: 6 },
        { contentId: content.id, sectionType: "parentTips", title: "부모가 기억하면 좋은 팁", items: item.parentTips as Prisma.InputJsonValue, sortOrder: 7 },
        { contentId: content.id, sectionType: "dangerSigns", title: "바로 상담이 필요한 신호", items: item.dangerSigns as Prisma.InputJsonValue, sortOrder: 8 },
        { contentId: content.id, sectionType: "commonQuestions", title: "부모가 자주 묻는 질문", items: item.commonQuestions as unknown as Prisma.InputJsonValue, sortOrder: 9 },
        { contentId: content.id, sectionType: "relatedLinks", title: "함께 확인하면 좋은 페이지", items: item.relatedLinks as unknown as Prisma.InputJsonValue, sortOrder: 10 },
      ],
    });

    await prisma.contentKeyword.deleteMany({ where: { contentId: content.id } });
    await prisma.contentKeyword.createMany({ data: item.keywords.map((keyword) => ({ contentId: content.id, keyword })), skipDuplicates: true });
    await prisma.contentSource.deleteMany({ where: { contentId: content.id } });
    count += 1;
  }
  return count;
}

async function seedHealthGuides() {
  const { prisma } = await importDb();
  const category = await upsertCategory(prisma, "HEALTH_GUIDE");

  let count = 0;
  for (const raw of healthGuideItems) {
    const item = sanitizeHealthItem(raw);
    const reviewStatus = healthReviewStatus(item);

    if (isDryRun) {
      if (count < 3) {
        console.log(`[dry-run][health] ${item.slug} / ${item.title}`);
        console.log(`  summary: ${item.summary}`);
        console.log(`  reviewStatus: ${reviewStatus}`);
      }
      count += 1;
      continue;
    }

    const content = await prisma.content.upsert({
      where: {
        locale_type_slug: {
          locale: "ko",
          type: "HEALTH_GUIDE",
          slug: item.slug,
        },
      },
      update: {
        categoryId: category.id,
        path: `/health/${item.slug}`,
        title: item.title,
        shortTitle: item.title.split("｜")[0],
        topic: "아기 증상별 건강",
        summary: item.summary,
        isMedical: true,
        isOfficialInfo: false,
        status: "PUBLISHED",
        reviewStatus,
        duplicateMemo: "증상별 건강 가이드는 진단·복용량 단정 없이 확인 기준과 상담 신호 중심으로 유지해야 합니다.",
        editorMemo: "위험 신호, 기록 팁, 자주 놓치는 부분을 분리 저장했습니다.",
        metaTitle: `${item.title} | MomTools`,
        metaDescription: safeMetaDescription(item.summary, item.quickConclusion),
        canonicalPath: `/health/${item.slug}`,
        ogTitle: item.title,
        ogDescription: safeMetaDescription(item.summary, item.quickConclusion),
        publishedAt: new Date(),
        verifiedAt: new Date(),
      },
      create: {
        locale: "ko",
        type: "HEALTH_GUIDE",
        categoryId: category.id,
        slug: item.slug,
        path: `/health/${item.slug}`,
        title: item.title,
        shortTitle: item.title.split("｜")[0],
        topic: "아기 증상별 건강",
        summary: item.summary,
        isMedical: true,
        isOfficialInfo: false,
        status: "PUBLISHED",
        reviewStatus,
        duplicateMemo: "증상별 건강 가이드는 진단·복용량 단정 없이 확인 기준과 상담 신호 중심으로 유지해야 합니다.",
        editorMemo: "위험 신호, 기록 팁, 자주 놓치는 부분을 분리 저장했습니다.",
        metaTitle: `${item.title} | MomTools`,
        metaDescription: safeMetaDescription(item.summary, item.quickConclusion),
        canonicalPath: `/health/${item.slug}`,
        ogTitle: item.title,
        ogDescription: safeMetaDescription(item.summary, item.quickConclusion),
        publishedAt: new Date(),
        verifiedAt: new Date(),
      },
    });

    await prisma.contentSection.deleteMany({ where: { contentId: content.id } });
    await prisma.contentSection.createMany({
      data: [
        { contentId: content.id, sectionType: "quickConclusion", title: "먼저 결론부터 확인하세요", body: item.quickConclusion, sortOrder: 1 },
        { contentId: content.id, sectionType: "firstCheck", title: "집에서 먼저 확인할 기준", items: item.firstCheck as Prisma.InputJsonValue, sortOrder: 2 },
        { contentId: content.id, sectionType: "homeCare", title: "집에서 도와줄 수 있는 방법", items: item.homeCare as Prisma.InputJsonValue, sortOrder: 3 },
        { contentId: content.id, sectionType: "ageCriteria", title: "개월수별로 다르게 볼 점", items: item.ageCriteria as Prisma.InputJsonValue, sortOrder: 4 },
        { contentId: content.id, sectionType: "dangerSigns", title: "바로 상담이 필요한 신호", items: item.dangerSigns as Prisma.InputJsonValue, sortOrder: 5 },
        { contentId: content.id, sectionType: "recordTips", title: "진료 전 기록하면 좋은 것", items: item.recordTips as Prisma.InputJsonValue, sortOrder: 6 },
        { contentId: content.id, sectionType: "commonMistakes", title: "부모가 자주 놓치는 부분", items: item.commonMistakes as Prisma.InputJsonValue, sortOrder: 7 },
        { contentId: content.id, sectionType: "faq", title: "자주 묻는 질문", items: item.faq as unknown as Prisma.InputJsonValue, sortOrder: 8 },
        { contentId: content.id, sectionType: "relatedLinks", title: "함께 보면 좋은 페이지", items: item.relatedLinks as unknown as Prisma.InputJsonValue, sortOrder: 9 },
      ],
    });

    await prisma.contentKeyword.deleteMany({ where: { contentId: content.id } });
    await prisma.contentKeyword.createMany({ data: item.keywords.map((keyword) => ({ contentId: content.id, keyword })), skipDuplicates: true });
    await prisma.contentSource.deleteMany({ where: { contentId: content.id } });
    await prisma.contentSource.createMany({
      data: [
        {
          contentId: content.id,
          name: "소아청소년과 상담 기준",
          description: "이 콘텐츠는 진단이 아니라 보호자가 증상을 관찰할 때 참고할 수 있는 일반 안내입니다. 위험 신호가 있으면 의료기관 상담을 우선합니다.",
          checkedAt: new Date(),
        },
        {
          contentId: content.id,
          name: "응급 신호 확인",
          description: "호흡 곤란, 의식 저하, 반복 구토, 탈수, 경련, 3개월 미만 발열 등은 빠른 상담이 필요한 신호로 분리해 안내합니다.",
          checkedAt: new Date(),
        },
      ],
    });
    count += 1;
  }
  return count;
}

async function main() {
  const monthlyCount = await seedMonthlyGuides();
  const healthCount = await seedHealthGuides();

  console.log(`\n[가이드 DB seed ${isDryRun ? "dry-run" : "완료"}]`);
  console.log(`- 월령별 가이드: ${monthlyCount.toLocaleString()}개`);
  console.log(`- 건강 가이드: ${healthCount.toLocaleString()}개`);
  console.log("\n확인 명령어: npm run db:check:guides");
}

main().catch((error) => {
  console.error("\n가이드 DB seed 실패");
  console.error(error);
  process.exit(1);
});
