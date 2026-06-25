import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

async function main() {
  const { getGuidesDbStatus } = await import("../lib/repositories/guides-db");
  const status = await getGuidesDbStatus();

  console.log("\n[월령별/건강 가이드 DB 확인]");
  console.log(`DB 연결: ${status.connected ? "성공" : "실패"}`);
  console.log(`발행된 가이드 전체: ${status.total.toLocaleString()}개`);
  console.log(`- 월령별 가이드: ${status.monthlyTotal.toLocaleString()}개`);
  console.log(`- 증상별 건강 가이드: ${status.healthTotal.toLocaleString()}개`);

  if (status.reviewStatuses.length > 0) {
    console.log("\n검수 상태별 개수");
    for (const row of status.reviewStatuses) {
      console.log(`- ${row.type} / ${row.reviewStatus}: ${row.count.toLocaleString()}개`);
    }
  }

  if (status.samples.monthly) {
    console.log("\n월령별 가이드 샘플");
    console.log(`- path: ${status.samples.monthly.path}`);
    console.log(`- title: ${status.samples.monthly.title}`);
    console.log(`- summary: ${status.samples.monthly.summary}`);
    console.log(`- sections: ${status.samples.monthly.sections.join(", ")}`);
    console.log(`- keywords: ${status.samples.monthly.keywordCount.toLocaleString()}개`);
  }

  if (status.samples.health) {
    console.log("\n건강 가이드 샘플");
    console.log(`- path: ${status.samples.health.path}`);
    console.log(`- title: ${status.samples.health.title}`);
    console.log(`- summary: ${status.samples.health.summary}`);
    console.log(`- sections: ${status.samples.health.sections.join(", ")}`);
    console.log(`- keywords: ${status.samples.health.keywordCount.toLocaleString()}개`);
  }

  console.log("\n브라우저 확인 경로");
  console.log("- http://localhost:3000/db-check/guides");
  console.log("- http://localhost:3000/monthly-guide");
  console.log("- http://localhost:3000/monthly-guide/6-month");
  console.log("- http://localhost:3000/health");
  console.log("- http://localhost:3000/health/fever");
}

main().catch((error) => {
  console.error("\n월령별/건강 가이드 DB 확인 실패");
  console.error(error);
  process.exit(1);
});
