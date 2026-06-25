import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

async function main() {
  const { getContentQualityProgressStatus } = await import("../lib/repositories/content-quality-progress-db");
  const status = await getContentQualityProgressStatus();

  console.log("\n[콘텐츠 품질 개선 진행률]");
  console.log(`DB 연결: ${status.connected ? "성공" : "확인 필요"}`);

  if (!status.initialized) {
    console.log("batch가 아직 생성되지 않았습니다.");
    console.log("npm run db:quality:init 을 먼저 실행해 주세요.");
    return;
  }

  const progress = status.totalItems > 0 ? Math.round((status.completedItems / status.totalItems) * 1000) / 10 : 0;
  console.log(`전체 대상: ${status.totalItems.toLocaleString("ko-KR")}개`);
  console.log(`전체 batch: ${status.totalBatches.toLocaleString("ko-KR")}개`);
  console.log(`완료: ${status.completedItems.toLocaleString("ko-KR")}개 (${progress}%)`);
  console.log(`추출됨: ${status.exportedItems.toLocaleString("ko-KR")}개`);
  console.log(`대기: ${status.readyItems.toLocaleString("ko-KR")}개`);
  console.log(`DB화 완료 대상: ${status.dbReadyItems.toLocaleString("ko-KR")}개`);
  console.log(`DB 전환 대기 대상: ${status.staticPendingItems.toLocaleString("ko-KR")}개`);

  console.log("\n[상태별 개수]");
  for (const row of status.statusCounts) {
    console.log(`- ${row.status}: ${row.count.toLocaleString("ko-KR")}개`);
  }

  console.log("\n[유형별 개수 상위]");
  for (const row of status.typeCounts.slice(0, 20)) {
    const label = `${row.type}${row.category ? `/${row.category}` : ""}`;
    console.log(`- ${label}: ${row.count.toLocaleString("ko-KR")}개 (완료 ${row.completed.toLocaleString("ko-KR")}개, DB전환대기 ${row.staticPending.toLocaleString("ko-KR")}개)`);
  }

  if (status.nextBatch) {
    console.log("\n[다음 작업 batch]");
    console.log(`batch-${String(status.nextBatch.batchNo).padStart(3, "0")}: ${status.nextBatch.scope}`);
    for (const item of status.nextBatch.items) {
      console.log(`- ${item.sequence}. [${item.dbStatus}] ${item.path} | ${item.title}`);
    }
    console.log("\n추출 명령어:");
    console.log(`npm run db:quality:export -- --batch=${String(status.nextBatch.batchNo).padStart(3, "0")}`);
  }

  console.log("\n브라우저 확인:");
  console.log("http://localhost:3000/db-check/content-quality-progress");
}

main().catch((error) => {
  console.error("\n콘텐츠 품질 진행률 확인 실패");
  console.error(error);
  process.exit(1);
});
