import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

const args = new Set(process.argv.slice(2));
const shouldApply = args.has("--apply");
const limitArg = process.argv.find((arg) => arg.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.replace("--limit=", "")) : 300;

function textFromUnknown(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(textFromUnknown);
  if (value && typeof value === "object") return Object.values(value as Record<string, unknown>).flatMap(textFromUnknown);
  return [];
}

function mapJsonText(value: unknown, mapper: (text: string) => string): unknown {
  if (typeof value === "string") return mapper(value);
  if (Array.isArray(value)) return value.map((item) => mapJsonText(item, mapper));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, mapJsonText(item, mapper)]));
  }
  return value;
}

function hasChanged(before: unknown, after: unknown) {
  return JSON.stringify(before) !== JSON.stringify(after);
}

function isSensitiveCategory(categorySlug: string | null | undefined, type: string, isMedical: boolean) {
  return isMedical || type === "HEALTH_GUIDE" || ["health", "medicine", "postpartum", "checkup"].includes(categorySlug ?? "");
}

function appendMemo(existing: string | null | undefined, memo: string) {
  if (!existing) return memo;
  if (existing.includes(memo)) return existing;
  return `${existing}\n${memo}`;
}

async function main() {
  const { prisma } = await import("../lib/db");
  const { normalizeUserFacingText, detectQualityIssues } = await import("../lib/repositories/content-quality-db");

  const rows = await prisma.content.findMany({
    where: {
      locale: "ko",
      status: "PUBLISHED",
      type: { in: ["QNA", "FAMILY_HEALTH_QNA", "MONTHLY_GUIDE", "HEALTH_GUIDE"] as any },
    },
    orderBy: [
      { type: "asc" },
      { updatedAt: "desc" },
      { slug: "asc" },
    ],
    include: {
      category: { select: { slug: true, name: true } },
      sections: { orderBy: { sortOrder: "asc" } },
      keywords: { select: { keyword: true } },
    },
    take: Number.isFinite(limit) && limit > 0 ? limit : 300,
  });

  let targetCount = 0;
  let updatedContentCount = 0;
  let updatedSectionCount = 0;
  const examples: string[] = [];

  for (const row of rows as any[]) {
    const issues = detectQualityIssues(row);
    const hasAutoFixableIssue = issues.some((issue) =>
      ["OPERATOR_VIEWPOINT", "RISKY_MEDICAL_EXPRESSION"].includes(issue.kind),
    );

    if (!hasAutoFixableIssue) continue;
    targetCount += 1;

    const nextSummary = normalizeUserFacingText(row.summary);
    const nextMetaDescription = row.metaDescription ? normalizeUserFacingText(row.metaDescription) : row.metaDescription;
    const nextOgDescription = row.ogDescription ? normalizeUserFacingText(row.ogDescription) : row.ogDescription;
    const categorySlug = row.category?.slug ?? null;
    const sensitive = isSensitiveCategory(categorySlug, row.type, row.isMedical);
    const nextReviewStatus = sensitive ? "NEEDS_FINAL_HUMAN_REVIEW" : "QUALITY_AUTO_REVIEWED";
    const memo = `품질 자동 점검: 운영자 관점/단정 표현을 1차 완화했습니다. 화면에서 자연스러운지 최종 확인이 필요합니다. (${new Date().toISOString().slice(0, 10)})`;

    const contentChanged =
      nextSummary !== row.summary ||
      nextMetaDescription !== row.metaDescription ||
      nextOgDescription !== row.ogDescription ||
      row.reviewStatus !== nextReviewStatus;

    if (contentChanged) {
      updatedContentCount += 1;
      if (shouldApply) {
        await prisma.content.update({
          where: { id: row.id },
          data: {
            summary: nextSummary,
            metaDescription: nextMetaDescription,
            ogDescription: nextOgDescription,
            reviewStatus: nextReviewStatus,
            editorMemo: appendMemo(row.editorMemo, memo),
          },
        });
      }
    }

    for (const section of row.sections) {
      const nextBody = section.body ? normalizeUserFacingText(section.body) : section.body;
      const nextItems = mapJsonText(section.items, normalizeUserFacingText);
      if (nextBody !== section.body || hasChanged(section.items, nextItems)) {
        updatedSectionCount += 1;
        if (shouldApply) {
          await prisma.contentSection.update({
            where: { id: section.id },
            data: {
              body: nextBody,
              items: nextItems as any,
            },
          });
        }
      }
    }

    if (examples.length < 8) {
      const allText = [row.summary, ...row.sections.flatMap((section: any) => [section.body ?? "", ...textFromUnknown(section.items)])].join(" ");
      examples.push(`${row.path} / ${issues[0]?.label ?? "품질 개선"} / ${allText.slice(0, 80)}`);
    }
  }

  console.log("\n[DB 콘텐츠 1차 자동 개선]");
  console.log(`실행 모드: ${shouldApply ? "DB 업데이트 적용" : "미리보기"}`);
  console.log(`점검 제한: ${Number.isFinite(limit) && limit > 0 ? limit.toLocaleString("ko-KR") : "300"}개`);
  console.log(`개선 대상 콘텐츠: ${targetCount.toLocaleString("ko-KR")}개`);
  console.log(`수정 예정/완료 콘텐츠: ${updatedContentCount.toLocaleString("ko-KR")}개`);
  console.log(`수정 예정/완료 섹션: ${updatedSectionCount.toLocaleString("ko-KR")}개`);

  if (examples.length > 0) {
    console.log("\n예시");
    for (const example of examples) console.log(`- ${example}`);
  }

  if (!shouldApply) {
    console.log("\n실제 DB에 반영하려면 아래 명령어를 실행하세요.");
    console.log("npm run db:improve:content:apply");
  }
}

main().catch((error) => {
  console.error("\nDB 콘텐츠 자동 개선 실패");
  console.error(error);
  process.exit(1);
});
