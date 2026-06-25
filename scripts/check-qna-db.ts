import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

async function main() {
  const { prisma } = await import("../lib/db");
  const { qnaCategories } = await import("../data/qna");

  function isQnaCategory(value: string): value is keyof typeof qnaCategories {
    return value in qnaCategories;
  }

  function toStringArray(value: unknown): string[] {
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  }

  const [total, categories, sample] = await Promise.all([
    prisma.content.count({ where: { locale: "ko", type: "QNA", status: "PUBLISHED" } }),
    prisma.contentCategory.findMany({
      where: { locale: "ko", type: "QNA" },
      orderBy: [{ sortOrder: "asc" }, { slug: "asc" }],
      include: { _count: { select: { contents: { where: { status: "PUBLISHED" } } } } },
    }),
    prisma.content.findFirst({
      where: { locale: "ko", type: "QNA", status: "PUBLISHED" },
      orderBy: [{ createdAt: "asc" }, { slug: "asc" }],
      include: { category: true, sections: { orderBy: { sortOrder: "asc" } }, keywords: true },
    }),
  ]);

  console.log("\n[Q&A DB 확인]");
  console.log("DB 연결: 성공");
  console.log(`발행된 Q&A 콘텐츠: ${total.toLocaleString()}개`);

  console.log("\n카테고리별 개수");
  for (const category of categories) {
    const label = isQnaCategory(category.slug) ? qnaCategories[category.slug] : category.name;
    console.log(`- ${category.slug} / ${label}: ${category._count.contents.toLocaleString()}개`);
  }

  if (sample) {
    const sectionMap = new Map(sample.sections.map((section) => [section.sectionType, section]));
    console.log("\n샘플 콘텐츠");
    console.log(`- path: ${sample.path}`);
    console.log(`- category: ${sample.category?.slug ?? "-"}`);
    console.log(`- question: ${sample.question ?? sample.title}`);
    console.log(`- summary: ${sample.summary}`);
    console.log(`- answer: ${toStringArray(sectionMap.get("answer")?.items).length}개`);
    console.log(`- checklist: ${toStringArray(sectionMap.get("checklist")?.items).length}개`);
    console.log(`- simpleAction: ${toStringArray(sectionMap.get("simpleAction")?.items).length}개`);
    console.log(`- caution: ${sectionMap.get("caution")?.body ?? "-"}`);
    console.log(`- keywords: ${sample.keywords.length}개`);
  }

  console.log("\n브라우저 확인 경로");
  console.log("- http://localhost:3000/db-check/qna");
  console.log("- http://localhost:3000/qna/health/baby-fever-38");
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("\nQ&A DB 확인 실패");
  console.error(error);
  process.exit(1);
});
