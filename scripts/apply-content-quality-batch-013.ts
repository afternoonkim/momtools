import dotenv from "dotenv";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

type SectionUpdate = {
  sectionType: string;
  title?: string;
  body?: string;
  items?: string[];
};

type ContentUpdate = {
  batchItemId: string;
  contentId: string;
  path: string;
  title: string;
  question: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  reviewStatus: string;
  editorMemo: string;
  duplicateMemo: string;
  keywords: string[];
  sections: SectionUpdate[];
};

function escapeSql(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).replace(/'/g, "''");
}

async function loadUpdates(): Promise<ContentUpdate[]> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../exports/content-quality/batch-013-rewritten.json");
  const raw = await readFile(filePath, "utf-8");
  const parsed = JSON.parse(raw) as { items: ContentUpdate[] };
  return parsed.items;
}

async function markBatchItem(prisma: any, batchItemId: string, contentId: string) {
  try {
    const columns = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
      `select column_name from information_schema.columns where table_schema = 'public' and table_name = 'ContentQualityBatchItem'`,
    );
    const columnSet = new Set(columns.map((row) => row.column_name));
    if (!columnSet.has("id")) return;

    const assignments: string[] = [];
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-013 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
    if (columnSet.has("contentId")) assignments.push(`"contentId" = '${escapeSql(contentId)}'`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatchItem" set ${assignments.join(", ")} where "id" = '${escapeSql(batchItemId)}'`,
      );
    }
  } catch (error) {
    console.warn("batch item 상태 업데이트는 건너뜁니다:", error instanceof Error ? error.message : error);
  }
}

async function markBatch(prisma: any) {
  try {
    const columns = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
      `select column_name from information_schema.columns where table_schema = 'public' and table_name = 'ContentQualityBatch'`,
    );
    const columnSet = new Set(columns.map((row) => row.column_name));
    if (!columnSet.has("batchNo")) return;

    const assignments: string[] = [];
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedItems")) assignments.push(`"completedItems" = 10`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 13`,
      );
    }
  } catch (error) {
    console.warn("batch 상태 업데이트는 건너뜁니다:", error instanceof Error ? error.message : error);
  }
}

async function upsertSection(prisma: any, contentId: string, section: SectionUpdate, sortOrder: number) {
  const existing = await prisma.contentSection.findMany({
    where: { contentId, sectionType: section.sectionType },
    orderBy: { sortOrder: "asc" },
  });

  const data = {
    title: section.title ?? null,
    body: section.body ?? null,
    items: section.items ?? undefined,
    sortOrder,
  };

  if (existing.length > 0) {
    await prisma.contentSection.update({ where: { id: existing[0].id }, data });
    const extraIds = existing.slice(1).map((item: any) => item.id);
    if (extraIds.length > 0) await prisma.contentSection.deleteMany({ where: { id: { in: extraIds } } });
    return;
  }

  await prisma.contentSection.create({ data: { contentId, sectionType: section.sectionType, ...data } });
}

async function applyUpdate(prisma: any, update: ContentUpdate) {
  const content = await prisma.content.findFirst({
    where: { OR: [{ id: update.contentId }, { path: update.path }] },
    select: { id: true, path: true },
  });
  if (!content) throw new Error(`콘텐츠를 찾을 수 없습니다: ${update.path}`);

  await prisma.content.update({
    where: { id: content.id },
    data: {
      title: update.title,
      question: update.question,
      summary: update.summary,
      metaTitle: update.metaTitle,
      metaDescription: update.metaDescription,
      canonicalPath: update.canonicalPath,
      ogTitle: update.metaTitle,
      ogDescription: update.metaDescription,
      reviewStatus: update.reviewStatus,
      editorMemo: update.editorMemo,
      duplicateMemo: update.duplicateMemo,
    },
  });

  for (const [index, section] of update.sections.entries()) await upsertSection(prisma, content.id, section, index + 1);

  await prisma.contentKeyword.deleteMany({ where: { contentId: content.id } });
  await prisma.contentKeyword.createMany({
    data: update.keywords.map((keyword) => ({ contentId: content.id, keyword })),
    skipDuplicates: true,
  });

  await markBatchItem(prisma, update.batchItemId, content.id);
}

async function main() {
  const { prisma } = await import("../lib/db");
  const updates = await loadUpdates();
  console.log("batch-013 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);
  console.log("");
  console.log("batch-013 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-hiccups-long-time");
  console.log("- http://localhost:3000/qna/health/baby-hives-after-egg");
  console.log("- http://localhost:3000/qna/health/baby-hoarse-voice");
  console.log("- http://localhost:3000/qna/health/baby-insect-bite-swelling");
  console.log("- http://localhost:3000/qna/health/baby-jitters-when-crying");
  console.log("- http://localhost:3000/db-check/content-quality-progress");
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-013 반영 실패");
  console.error(error);
  process.exit(1);
});
