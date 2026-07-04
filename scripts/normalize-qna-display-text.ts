import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

const args = new Set(process.argv.slice(2));
const shouldApply = args.has("--apply");

function hasChanged(before: unknown, after: unknown) {
  return JSON.stringify(before) !== JSON.stringify(after);
}

async function main() {
  const { prisma } = await import("../lib/db");
  const { normalizeJsonText, normalizeQnaQuestion, normalizeUserVisibleText } = await import("../lib/content-text-normalize");

  const rows = await prisma.content.findMany({
    where: { locale: "ko", type: "QNA" as any },
    include: { sections: true },
    orderBy: [{ updatedAt: "desc" }, { slug: "asc" }],
  });

  let changedContents = 0;
  let changedSections = 0;

  for (const row of rows as any[]) {
    const nextTitle = normalizeUserVisibleText(row.title);
    const nextQuestion = row.question ? normalizeQnaQuestion(row.question) : row.question;
    const nextSummary = normalizeUserVisibleText(row.summary);
    const nextMetaTitle = row.metaTitle ? normalizeUserVisibleText(row.metaTitle) : row.metaTitle;
    const nextMetaDescription = row.metaDescription ? normalizeUserVisibleText(row.metaDescription) : row.metaDescription;
    const nextOgTitle = row.ogTitle ? normalizeUserVisibleText(row.ogTitle) : row.ogTitle;
    const nextOgDescription = row.ogDescription ? normalizeUserVisibleText(row.ogDescription) : row.ogDescription;

    const contentChanged =
      nextTitle !== row.title ||
      nextQuestion !== row.question ||
      nextSummary !== row.summary ||
      nextMetaTitle !== row.metaTitle ||
      nextMetaDescription !== row.metaDescription ||
      nextOgTitle !== row.ogTitle ||
      nextOgDescription !== row.ogDescription;

    if (contentChanged) {
      changedContents += 1;
      if (shouldApply) {
        await prisma.content.update({
          where: { id: row.id },
          data: {
            title: nextTitle,
            question: nextQuestion,
            summary: nextSummary,
            metaTitle: nextMetaTitle,
            metaDescription: nextMetaDescription,
            ogTitle: nextOgTitle,
            ogDescription: nextOgDescription,
          },
        });
      }
    }

    for (const section of row.sections) {
      const nextTitle = section.title ? normalizeUserVisibleText(section.title) : section.title;
      const nextBody = section.body ? normalizeUserVisibleText(section.body) : section.body;
      const nextItems = normalizeJsonText(section.items);
      const sectionChanged = nextTitle !== section.title || nextBody !== section.body || hasChanged(section.items, nextItems);

      if (sectionChanged) {
        changedSections += 1;
        if (shouldApply) {
          await prisma.contentSection.update({
            where: { id: section.id },
            data: { title: nextTitle, body: nextBody, items: nextItems as any },
          });
        }
      }
    }
  }

  console.log(`Q&A 콘텐츠 점검: ${rows.length.toLocaleString()}개`);
  console.log(`수정 대상 콘텐츠: ${changedContents.toLocaleString()}개`);
  console.log(`수정 대상 섹션: ${changedSections.toLocaleString()}개`);
  console.log(shouldApply ? "DB 반영 완료" : "미리보기만 실행했습니다. 실제 반영은 --apply를 붙여 실행하세요.");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("Q&A 문구 정리 실패");
  console.error(error);
  process.exit(1);
});
