import dotenv from "dotenv";

const dotenvOptions = (path: string) =>
  ({ path, quiet: true }) as Parameters<typeof dotenv.config>[0];

dotenv.config(dotenvOptions(".env.local"));
dotenv.config(dotenvOptions(".env"));

import type { PrismaClient } from "../lib/generated/prisma/client";

let activePrisma: PrismaClient | null = null;

const coupangProductLinks = [
  {
    categorySlug: "thermometer",
    slug: "default",
    title: "체온계 확인하기",
    description: "아이 열이 걱정될 때 체온을 확인할 때 함께 볼 수 있는 체온계입니다.",
    partnerUrl: "https://link.coupang.com/a/eUBDd7r9ky",
    buttonText: "체온계 보러가기",
    sortOrder: 10,
  },
  {
    categorySlug: "development-toy",
    slug: "default",
    title: "발달 놀이용품 확인하기",
    description: "놀이와 발달 활동을 준비할 때 함께 볼 수 있는 용품입니다.",
    partnerUrl: "https://link.coupang.com/a/eUBOIB6LIq",
    buttonText: "발달 놀이용품 보러가기",
    sortOrder: 20,
  },
  {
    categorySlug: "diaper",
    slug: "default",
    title: "기저귀 확인하기",
    description: "기저귀 교체가 잦은 시기나 외출 준비 때 함께 확인할 수 있어요.",
    partnerUrl: "https://link.coupang.com/a/eUBTnCw1Tw",
    buttonText: "기저귀 보러가기",
    sortOrder: 30,
  },
  {
    categorySlug: "humidifier",
    slug: "default",
    title: "가습기 확인하기",
    description: "실내 습도가 건조하게 느껴질 때 함께 볼 수 있는 가습기입니다.",
    partnerUrl: "https://link.coupang.com/a/eUBXuTWGqq",
    buttonText: "가습기 보러가기",
    sortOrder: 40,
  },
  {
    categorySlug: "sleeping-item",
    slug: "default",
    title: "수면 용품 확인하기",
    description: "아이 수면 환경을 정리할 때 함께 볼 수 있는 수면 용품입니다.",
    partnerUrl: "https://link.coupang.com/a/eUB09Z9CM0",
    buttonText: "수면 용품 보러가기",
    sortOrder: 50,
  },
  {
    categorySlug: "daycare-item",
    slug: "default",
    title: "어린이집 준비물 확인하기",
    description: "어린이집·유치원 준비물을 챙길 때 함께 볼 수 있는 수건입니다.",
    partnerUrl: "https://link.coupang.com/a/eUCKPgoWwC",
    buttonText: "어린이집 준비물 보러가기",
    sortOrder: 60,
  },
  {
    categorySlug: "nasal-aspirator",
    slug: "default",
    title: "콧물흡입기 확인하기",
    description: "콧물과 코막힘 관리가 필요할 때 함께 볼 수 있는 콧물흡입기입니다.",
    partnerUrl: "https://link.coupang.com/a/eUB6YahHmm",
    buttonText: "콧물흡입기 보러가기",
    sortOrder: 70,
  },
  {
    categorySlug: "baby-food-tool",
    slug: "default",
    title: "이유식 용품 확인하기",
    description: "이유식을 시작할 때 용기, 스푼, 보관용품을 함께 확인할 수 있어요.",
    partnerUrl: "https://link.coupang.com/a/eUCdIQ2Heu",
    buttonText: "이유식 용품 보러가기",
    sortOrder: 80,
  },
  {
    categorySlug: "baby-bottle",
    slug: "default",
    title: "젖병 확인하기",
    description: "수유 준비와 외출 수유를 생각할 때 함께 볼 수 있는 젖병입니다.",
    partnerUrl: "https://link.coupang.com/a/eUCh8QMoHA",
    buttonText: "젖병 보러가기",
    sortOrder: 90,
  },
  {
    categorySlug: "oral-care",
    slug: "default",
    title: "구강 관리용품 확인하기",
    description: "첫 양치와 구강 관리를 시작할 때 함께 볼 수 있는 영유아 칫솔입니다.",
    partnerUrl: "https://link.coupang.com/a/eUCm8x891M",
    buttonText: "구강 관리용품 보러가기",
    sortOrder: 100,
  },
  {
    categorySlug: "safety-item",
    slug: "default",
    title: "안전용품 확인하기",
    description: "뒤집기·기어가기·걸음마 시기에 집안 안전을 챙길 때 함께 볼 수 있어요.",
    partnerUrl: "https://link.coupang.com/a/eUCrAGKD8K",
    buttonText: "안전용품 보러가기",
    sortOrder: 110,
  },
  {
    categorySlug: "baby-bath",
    slug: "default",
    title: "아기 목욕용품 확인하기",
    description: "목욕 시간을 조금 더 편하게 준비할 때 함께 볼 수 있는 목욕용품입니다.",
    partnerUrl: "https://link.coupang.com/a/eUCAV3bwk0",
    buttonText: "목욕용품 보러가기",
    sortOrder: 120,
  },
  {
    categorySlug: "newborn-item",
    slug: "default",
    title: "신생아 준비물 확인하기",
    description: "신생아 침구와 집에서 쓸 준비물을 챙길 때 함께 볼 수 있어요.",
    partnerUrl: "https://link.coupang.com/a/eUCIwCVr4K",
    buttonText: "신생아 준비물 보러가기",
    sortOrder: 130,
  },
  {
    categorySlug: "potty-training",
    slug: "default",
    title: "배변훈련 용품 확인하기",
    description: "배변훈련을 시작할 때 아이가 변기에 익숙해지도록 함께 볼 수 있는 용품입니다.",
    partnerUrl: "https://link.coupang.com/a/eUCOzqIh6j",
    buttonText: "변기커버 보러가기",
    sortOrder: 140,
  },
  {
    categorySlug: "stroller",
    slug: "default",
    title: "유모차 확인하기",
    description: "외출과 산책이 잦아질 때 휴대용 유모차를 비교해볼 수 있어요.",
    partnerUrl: "https://link.coupang.com/a/eUC2ZuT2nk",
    buttonText: "휴대용유모차 보러가기",
    sortOrder: 150,
  },
  {
    categorySlug: "car-seat",
    slug: "default",
    title: "카시트 확인하기",
    description: "차량 이동을 준비할 때 카시트를 비교해볼 수 있어요.",
    partnerUrl: "https://link.coupang.com/a/eUC9Dcbry0",
    buttonText: "카시트 보러가기",
    sortOrder: 160,
  },
  {
    categorySlug: "balance-bike",
    slug: "default",
    title: "밸런스바이크 확인하기",
    description: "야외 놀이와 균형감각 놀이를 시작할 때 함께 볼 수 있는 밸런스바이크입니다.",
    partnerUrl: "https://link.coupang.com/a/eUDcrmd8Fg",
    buttonText: "밸런스 바이크 보러가기",
    sortOrder: 170,
  },
  {
    categorySlug: "baby-carrier",
    slug: "default",
    title: "아기띠 확인하기",
    description: "짧은 외출이나 안아주기가 잦을 때 함께 볼 수 있는 아기띠입니다.",
    partnerUrl: "https://link.coupang.com/a/eUDh6Jxx6G",
    buttonText: "아기띠 보러가기",
    sortOrder: 180,
  },
] as const;

async function seedCoupangProductLinks() {
  const dryRun = process.argv.includes("--dry-run");
  activePrisma = dryRun ? null : (await import("../lib/db")).prisma;
  const db = activePrisma;

  let upsertCount = 0;
  let skippedCount = 0;

  for (const link of coupangProductLinks) {
    if (dryRun) {
      console.log(`[dry-run] ${link.categorySlug} / ${link.title} / ${link.partnerUrl}`);
      upsertCount += 1;
      continue;
    }

    const category = await db!.coupangProductCategory.findUnique({
      where: { slug: link.categorySlug },
      select: { id: true, slug: true, name: true },
    });

    if (!category) {
      console.warn(`카테고리 없음: ${link.categorySlug} - ${link.title}`);
      skippedCount += 1;
      continue;
    }

    await db!.coupangProductLink.upsert({
      where: {
        categoryId_slug: {
          categoryId: category.id,
          slug: link.slug,
        },
      },
      update: {
        title: link.title,
        description: link.description,
        partnerUrl: link.partnerUrl,
        buttonText: link.buttonText,
        sortOrder: link.sortOrder,
        enabled: true,
      },
      create: {
        categoryId: category.id,
        slug: link.slug,
        title: link.title,
        description: link.description,
        partnerUrl: link.partnerUrl,
        buttonText: link.buttonText,
        sortOrder: link.sortOrder,
        enabled: true,
      },
    });

    upsertCount += 1;
  }

  console.log(`쿠팡 맞춤 상품 링크 seed 완료: ${upsertCount}개 반영, ${skippedCount}개 건너뜀`);
}

seedCoupangProductLinks()
  .catch((error) => {
    console.error("쿠팡 맞춤 상품 링크 seed 실패");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await activePrisma?.$disconnect();
  });
