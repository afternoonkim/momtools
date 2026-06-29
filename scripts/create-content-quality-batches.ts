import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

type InventoryItem = {
  sourceKind: "DB_CONTENT" | "STATIC_CONTENT";
  sourceKey: string;
  dbStatus: "DB_READY" | "STATIC_PENDING_DB";
  contentId?: string;
  path: string;
  type: string;
  category: string | null;
  title: string;
  reviewStatus?: string | null;
};

type OrderedInventoryItem = InventoryItem & { globalOrder: number };

const BATCH_SIZE = 10;

const TYPE_ORDER: Record<string, number> = {
  QNA: 10,
  FAMILY_HEALTH_QNA: 20,
  MONTHLY_GUIDE: 30,
  HEALTH_GUIDE: 40,
  BABY_FOOD_STAGE: 50,
  BABY_FOOD_RECIPE: 60,
  CHECKLIST: 70,
  CHILDCARE_PORTAL_GUIDE: 80,
  FAMILY_FINANCE: 90,
  POLICY: 100,
  BIRTH_SUPPORT: 110,
  BABY_PRODUCT_QNA: 120,
  BABY_NAME: 130,
  PLAY_ITEM: 140,
  CALCULATOR_COPY: 150,
  STATIC_PAGE: 160,
};

const CATEGORY_ORDER: Record<string, number> = {
  health: 10,
  growth: 20,
  behavior: 30,
  medicine: 40,
  postpartum: 50,
  checkup: 60,
  mom: 70,
  dad: 80,
  family: 90,
  early: 100,
  middle: 110,
  late: 120,
};

function getArgValue(name: string) {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);
  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) return process.argv[index + 1];
  return undefined;
}

function hasFlag(name: string) {
  return process.argv.includes(`--${name}`);
}

function normalizeText(value: unknown, fallback = "제목 확인 필요") {
  if (typeof value !== "string") return fallback;
  const text = value.replace(/\s+/g, " ").trim();
  return text.length > 0 ? text : fallback;
}

function staticItem(type: string, category: string | null, path: string, title: string): InventoryItem {
  return {
    sourceKind: "STATIC_CONTENT",
    sourceKey: `STATIC:${path}`,
    dbStatus: "STATIC_PENDING_DB",
    path,
    type,
    category,
    title: normalizeText(title),
  };
}

async function buildStaticInventory(): Promise<InventoryItem[]> {
  const items: InventoryItem[] = [];

  try {
    const babyFood = await import("../data/babyFood");
    const stageLabels = babyFood.stageLabels as Record<string, string>;
    for (const [stage, label] of Object.entries(stageLabels)) {
      items.push(staticItem("BABY_FOOD_STAGE", stage, `/baby-food/${stage}`, `${label} 시작 전 확인할 것`));
    }
    for (const recipe of babyFood.babyFoodRecipes ?? []) {
      items.push(staticItem("BABY_FOOD_RECIPE", recipe.stage ?? null, `/baby-food/recipes/${recipe.slug}`, recipe.title));
    }
  } catch (error) {
    console.warn("[경고] babyFood 정적 데이터 인벤토리 생성 실패", error);
  }

  const checklistPages = [
    ["birth", "출산 준비 체크리스트"],
    ["birth-prep", "출산 전 준비물 체크리스트"],
    ["newborn", "신생아 준비 체크리스트"],
    ["newborn-prep", "신생아 돌봄 준비 체크리스트"],
    ["weaning", "이유식 준비 체크리스트"],
    ["weaning-prep", "이유식 시작 전 준비 체크리스트"],
    ["daycare", "어린이집 준비 체크리스트"],
    ["daycare-prep", "어린이집 입소 전 체크리스트"],
  ] as const;
  for (const [slug, title] of checklistPages) {
    items.push(staticItem("CHECKLIST", slug, `/checklists/${slug}`, title));
  }

  try {
    const childcare = await import("../data/childcarePortalGuides");
    for (const guide of childcare.childcarePortalGuides ?? []) {
      items.push(staticItem("CHILDCARE_PORTAL_GUIDE", guide.topic ?? null, `/info/childcare-portal/${guide.slug}`, guide.title));
    }
  } catch (error) {
    console.warn("[경고] childcarePortalGuides 정적 데이터 인벤토리 생성 실패", error);
  }

  try {
    const finance = await import("../data/familyFinance");
    for (const article of finance.familyFinanceArticles ?? []) {
      items.push(staticItem("FAMILY_FINANCE", article.topic ?? null, `/info/family-finance/${article.slug}`, article.title));
    }
  } catch (error) {
    console.warn("[경고] familyFinance 정적 데이터 인벤토리 생성 실패", error);
  }

  try {
    const policy = await import("../data/governmentPolicy");
    for (const entry of policy.governmentPolicies ?? []) {
      items.push(staticItem("POLICY", entry.category ?? null, `/policy/${entry.category}/${entry.slug}`, entry.title));
    }
  } catch (error) {
    console.warn("[경고] governmentPolicy 정적 데이터 인벤토리 생성 실패", error);
  }

  items.push(staticItem("BIRTH_SUPPORT", "calculator", "/tools/birth-support-calculator", "출산지원금 계산기 안내와 지역별 지원금 확인"));

  // 정체성 개편으로 제외한 아기 이름, 놀이 자료, 육아용품 카드 페이지는 품질 개선 인벤토리에서도 제외합니다.

  const calculatorPages = [
    ["baby-age", "아기 개월수 계산기 안내와 결과 문구"],
    ["due-date", "출산 예정일 계산기 안내와 결과 문구"],
    ["vaccine-schedule", "예방접종 일정 계산기 안내와 결과 문구"],
    ["weaning-start", "이유식 시작 시기 계산기 안내와 결과 문구"],
    ["growth-percentile", "성장 백분위 계산기 안내와 결과 문구"],
  ] as const;
  for (const [slug, title] of calculatorPages) {
    items.push(staticItem("CALCULATOR_COPY", slug, `/tools/${slug}`, title));
  }

  const staticInfoPages = [
    ["info", "/info", "육아 정보 모아보기"],
    ["pregnancy", "/info/pregnancy", "임신 중 확인할 정보"],
    ["newborn", "/info/newborn", "신생아 돌봄 정보"],
    ["weaning", "/info/weaning", "이유식 정보"],
    ["toddler", "/info/toddler", "유아기 생활 정보"],
    ["baby-food", "/baby-food", "이유식 정보와 레시피"],
    ["checklists", "/checklists", "육아 체크리스트 모아보기"],
  ] as const;
  for (const [category, path, title] of staticInfoPages) {
    items.push(staticItem("STATIC_PAGE", category, path, title));
  }

  return items;
}

function compareInventory(a: InventoryItem, b: InventoryItem) {
  const typeDiff = (TYPE_ORDER[a.type] ?? 999) - (TYPE_ORDER[b.type] ?? 999);
  if (typeDiff !== 0) return typeDiff;
  const categoryDiff = (CATEGORY_ORDER[a.category ?? ""] ?? 999) - (CATEGORY_ORDER[b.category ?? ""] ?? 999);
  if (categoryDiff !== 0) return categoryDiff;
  return a.path.localeCompare(b.path, "ko");
}

async function main() {
  const reset = hasFlag("reset");
  const batchSize = Number(getArgValue("size") ?? BATCH_SIZE);

  if (!Number.isFinite(batchSize) || batchSize < 1 || batchSize > 50) {
    throw new Error("batch size는 1~50 사이 숫자로 지정해 주세요.");
  }

  const { prisma } = await import("../lib/db");
  const db = prisma as any;

  const existingCount = await db.contentQualityBatchItem.count();
  if (existingCount > 0 && !reset) {
    console.log(`[중단] 이미 품질 batch가 ${existingCount.toLocaleString("ko-KR")}개 생성되어 있습니다.`);
    console.log("다시 만들려면 아래처럼 실행하세요.");
    console.log("npm run db:quality:init -- --reset");
    return;
  }

  if (reset) {
    console.log("기존 품질 batch를 삭제하고 다시 생성합니다.");
    await db.contentQualityBatchItem.deleteMany();
    await db.contentQualityBatch.deleteMany();
  }

  const dbContents = await db.content.findMany({
    where: {
      locale: "ko",
      status: { in: ["PUBLISHED", "REVIEW"] },
    },
    include: {
      category: { select: { slug: true, name: true } },
    },
  });

  const dbInventory: InventoryItem[] = dbContents.map((content: any) => ({
    sourceKind: "DB_CONTENT",
    sourceKey: `DB:${content.id}`,
    dbStatus: "DB_READY",
    contentId: content.id,
    path: content.path,
    type: content.type,
    category: content.category?.slug ?? null,
    title: normalizeText(content.question ?? content.title),
    reviewStatus: content.reviewStatus,
  }));

  const staticInventory = await buildStaticInventory();
  const dbPaths = new Set(dbInventory.map((item) => item.path));
  const filteredStatic = staticInventory.filter((item) => !dbPaths.has(item.path));

  const inventory: OrderedInventoryItem[] = [...dbInventory, ...filteredStatic]
    .sort(compareInventory)
    .map((item, index) => ({ ...item, globalOrder: index + 1 }));

  const batches = new Map<number, OrderedInventoryItem[]>();
  for (const item of inventory) {
    const batchNo = Math.ceil(item.globalOrder / batchSize);
    const current = batches.get(batchNo) ?? [];
    current.push(item);
    batches.set(batchNo, current);
  }

  for (const [batchNo, items] of batches) {
    const first = items[0];
    const last = items[items.length - 1];
    const label = `batch-${String(batchNo).padStart(3, "0")}`;
    const scope = first.type === last.type && first.category === last.category
      ? `${first.type}${first.category ? `/${first.category}` : ""}`
      : `${first.type}${first.category ? `/${first.category}` : ""} → ${last.type}${last.category ? `/${last.category}` : ""}`;

    const batch = await db.contentQualityBatch.create({
      data: {
        batchNo,
        label,
        scope,
        status: "READY",
        totalItems: items.length,
        completedItems: 0,
      },
    });

    await db.contentQualityBatchItem.createMany({
      data: items.map((item, index) => ({
        batchId: batch.id,
        batchNo,
        sequence: index + 1,
        globalOrder: item.globalOrder,
        sourceKind: item.sourceKind,
        sourceKey: item.sourceKey,
        dbStatus: item.dbStatus,
        contentId: item.contentId ?? null,
        path: item.path,
        type: item.type,
        category: item.category,
        title: item.title,
        status: "READY",
        reviewStatus: item.reviewStatus ?? null,
        editorMemo: item.dbStatus === "STATIC_PENDING_DB" ? "아직 DB로 전환되지 않은 정적 페이지입니다. 해당 batch 작업 시 DB 전환과 품질 개선을 함께 진행합니다." : null,
      })),
    });
  }

  console.log("\n[콘텐츠 품질 batch 생성 완료]");
  console.log(`전체 대상: ${inventory.length.toLocaleString("ko-KR")}개`);
  console.log(`DB화 완료 대상: ${dbInventory.length.toLocaleString("ko-KR")}개`);
  console.log(`DB 전환 대기 대상: ${filteredStatic.length.toLocaleString("ko-KR")}개`);
  console.log(`batch 크기: ${batchSize}개`);
  console.log(`batch 수: ${batches.size.toLocaleString("ko-KR")}개`);
  console.log("\n다음 명령어로 첫 batch를 추출하세요.");
  console.log("npm run db:quality:export -- --batch=001");
}

main()
  .catch((error) => {
    console.error("\n콘텐츠 품질 batch 생성 실패");
    console.error(error);
    process.exit(1);
  });
