import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

async function main() {
  const { getFamilyHealthDbStatus } = await import("../lib/repositories/family-health-qna-db");
  const status = await getFamilyHealthDbStatus();

  console.log("\n[가족건강 Q&A DB 확인]");
  console.log(`DB 연결: ${status.connected ? "성공" : "실패"}`);
  console.log(`발행된 가족건강 Q&A 콘텐츠: ${status.total.toLocaleString()}개`);
  console.log(`출처/검수 메모 저장 수: ${status.sourceCount.toLocaleString()}개`);

  if (status.reviewStatuses.length > 0) {
    console.log("\n검수 상태별 개수");
    for (const row of status.reviewStatuses) {
      console.log(`- ${row.reviewStatus}: ${row.count.toLocaleString()}개`);
    }
  }

  console.log("\n카테고리별 개수");
  for (const category of status.categories) {
    console.log(`- ${category.key} / ${category.name}: ${category.count.toLocaleString()}개`);
  }

  if (status.sample) {
    console.log("\n샘플 콘텐츠");
    console.log(`- path: ${status.sample.path}`);
    console.log(`- category: ${status.sample.category}`);
    console.log(`- question: ${status.sample.question}`);
    console.log(`- summary: ${status.sample.summary}`);
    console.log(`- reviewStatus: ${status.sample.reviewStatus}`);
    console.log(`- editorMemo: ${status.sample.editorMemo ?? "-"}`);
    console.log(`- duplicateMemo: ${status.sample.duplicateMemo ?? "-"}`);
    console.log(`- sections: ${status.sample.sections.join(", ")}`);
    console.log(`- keywords: ${status.sample.keywordCount}개`);
    console.log(`- sources: ${status.sample.sourceCount}개`);
  }

  console.log("\n브라우저 확인 경로");
  console.log("- http://localhost:3000/db-check/family-health-qna");
  console.log("- http://localhost:3000/family-health-qna");
  console.log("- http://localhost:3000/family-health-qna/medicine");
}

main().catch((error) => {
  console.error("\n가족건강 Q&A DB 확인 실패");
  console.error(error);
  process.exit(1);
});
