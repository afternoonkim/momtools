import dotenv from "dotenv";

const dotenvOptions = (path: string) =>
  ({ path, quiet: true }) as Parameters<typeof dotenv.config>[0];

dotenv.config(dotenvOptions(".env.local"));
dotenv.config(dotenvOptions(".env"));

import type { PrismaClient } from "../lib/generated/prisma/client";

let activePrisma: PrismaClient | null = null;

const coupangProductCategories = [
  {
    slug: "thermometer",
    name: "체온계",
    description: "아이 열, 접종 후 발열, 밤중 체온 확인처럼 체온을 자주 재야 하는 페이지에 연결합니다.",
    sortOrder: 10,
  },
  {
    slug: "nasal-aspirator",
    name: "콧물흡입기",
    description: "콧물, 코막힘, 수유 전 코 관리처럼 코가 막혀 불편한 상황의 페이지에 연결합니다.",
    sortOrder: 20,
  },
  {
    slug: "humidifier",
    name: "가습기",
    description: "기침, 코막힘, 건조한 실내 관리처럼 습도 조절이 함께 언급되는 페이지에 연결합니다.",
    sortOrder: 30,
  },
  {
    slug: "stroller",
    name: "유모차",
    description: "외출, 산책, 유모차 선택, 휴대용 유모차처럼 이동과 관련된 페이지에 연결합니다.",
    sortOrder: 40,
  },
  {
    slug: "car-seat",
    name: "카시트",
    description: "차량 이동, 신생아 외출, 카시트 선택과 안전한 이동을 다루는 페이지에 연결합니다.",
    sortOrder: 50,
  },
  {
    slug: "baby-carrier",
    name: "아기띠",
    description: "안아주기, 외출, 등센서, 짧은 이동처럼 보호자가 아이를 안고 움직이는 상황에 연결합니다.",
    sortOrder: 60,
  },
  {
    slug: "balance-bike",
    name: "밸런스바이크",
    description: "대근육 발달, 야외 놀이, 균형감각, 첫 자전거 준비와 관련된 페이지에 연결합니다.",
    sortOrder: 70,
  },
  {
    slug: "baby-food-tool",
    name: "이유식 용품",
    description: "이유식 시작, 이유식 단계, 큐브 보관, 스푼과 용기 준비 페이지에 연결합니다.",
    sortOrder: 80,
  },
  {
    slug: "baby-bottle",
    name: "젖병",
    description: "수유량, 분유 수유, 젖병 거부, 외출 수유처럼 수유용품이 필요한 페이지에 연결합니다.",
    sortOrder: 90,
  },
  {
    slug: "diaper",
    name: "기저귀",
    description: "기저귀 발진, 소변 횟수, 설사 관찰, 신생아 준비물 페이지에 연결합니다.",
    sortOrder: 100,
  },
  {
    slug: "baby-wipes",
    name: "아기 물티슈",
    description: "기저귀 갈이, 외출 준비, 어린이집 준비물처럼 자주 쓰는 소모품 페이지에 연결합니다.",
    sortOrder: 110,
  },
  {
    slug: "newborn-item",
    name: "신생아 준비물",
    description: "출산 준비, 신생아 체크리스트, 산후조리 후 집에 돌아오는 시기 페이지에 연결합니다.",
    sortOrder: 120,
  },
  {
    slug: "daycare-item",
    name: "어린이집 준비물",
    description: "어린이집 등원, 낮잠이불, 네임스티커, 여벌옷 준비가 필요한 페이지에 연결합니다.",
    sortOrder: 130,
  },
  {
    slug: "baby-bath",
    name: "아기 목욕용품",
    description: "신생아 목욕, 피부 관리, 목욕 시간과 목욕 준비물을 다루는 페이지에 연결합니다.",
    sortOrder: 140,
  },
  {
    slug: "baby-detergent",
    name: "아기 세제",
    description: "아기 옷 세탁, 피부가 예민한 아이의 세탁 관리, 출산 준비물 페이지에 연결합니다.",
    sortOrder: 150,
  },
  {
    slug: "sleeping-item",
    name: "수면 용품",
    description: "잠투정, 낮잠, 수면 환경, 침구와 수면조끼가 함께 언급되는 페이지에 연결합니다.",
    sortOrder: 160,
  },
  {
    slug: "oral-care",
    name: "구강 관리용품",
    description: "첫니, 양치 시작, 치발기, 구강 청결 관리가 필요한 페이지에 연결합니다.",
    sortOrder: 170,
  },
  {
    slug: "potty-training",
    name: "배변훈련 용품",
    description: "배변훈련 시기, 변기 거부, 어린이 변기와 팬티 준비가 필요한 페이지에 연결합니다.",
    sortOrder: 180,
  },
  {
    slug: "safety-item",
    name: "안전용품",
    description: "뒤집기, 기어다니기, 걸음마, 집안 안전관리처럼 사고 예방이 중요한 페이지에 연결합니다.",
    sortOrder: 190,
  },
  {
    slug: "development-toy",
    name: "발달 놀이용품",
    description: "월령별 놀이, 소근육·대근육 발달, 집에서 하는 놀이 페이지에 연결합니다.",
    sortOrder: 200,
  },
] as const;

async function seedCoupangProductCategories() {
  const dryRun = process.argv.includes("--dry-run");
  activePrisma = dryRun ? null : (await import("../lib/db")).prisma;
  const db = activePrisma;

  let upsertCount = 0;

  for (const category of coupangProductCategories) {
    if (dryRun) {
      console.log(`[dry-run] ${category.slug} / ${category.name}`);
      upsertCount += 1;
      continue;
    }

    await db!.coupangProductCategory.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
        sortOrder: category.sortOrder,
        enabled: true,
      },
      create: {
        slug: category.slug,
        name: category.name,
        description: category.description,
        sortOrder: category.sortOrder,
        enabled: true,
      },
    });

    upsertCount += 1;
  }

  console.log(`쿠팡 맞춤 광고 카테고리 seed 완료: ${upsertCount}개`);
}

seedCoupangProductCategories()
  .catch((error) => {
    console.error("쿠팡 맞춤 광고 카테고리 seed 실패");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await activePrisma?.$disconnect();
  });
