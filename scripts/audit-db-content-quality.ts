import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

async function main() {
  const { getContentQualityStatus } = await import("../lib/repositories/content-quality-db");
  const status = await getContentQualityStatus();

  console.log("\n[DB 콘텐츠 품질 진단]");
  console.log(`DB 연결: ${status.connected ? "성공" : "실패"}`);
  console.log(`점검 대상 콘텐츠: ${status.total.toLocaleString("ko-KR")}개`);
  console.log(`탐지된 이슈: ${status.issueCount.toLocaleString("ko-KR")}개`);
  console.log(`높은 우선순위: ${status.highIssueCount.toLocaleString("ko-KR")}개`);
  console.log(`운영자/개발자 관점 표현: ${status.operatorIssueCount.toLocaleString("ko-KR")}개`);
  console.log(`의료·복용 단정 위험 표현: ${status.riskyIssueCount.toLocaleString("ko-KR")}개`);

  if (status.typeCounts.length > 0) {
    console.log("\n콘텐츠 타입별 개수");
    for (const row of status.typeCounts) {
      console.log(`- ${row.type}: ${row.count.toLocaleString("ko-KR")}개`);
    }
  }

  if (status.repeatedSentences.length > 0) {
    console.log("\n반복 문장 TOP 10");
    for (const item of status.repeatedSentences.slice(0, 10)) {
      console.log(`- ${item.count.toLocaleString("ko-KR")}회: ${item.sentence}`);
      console.log(`  예: ${item.examples.map((example) => example.path).join(", ")}`);
    }
  }

  if (status.topIssues.length > 0) {
    console.log("\n우선 수정 대상 TOP 20");
    for (const issue of status.topIssues.slice(0, 20)) {
      console.log(`- [${issue.severity}] ${issue.label} / ${issue.path}`);
      console.log(`  발견: ${issue.matchedText}`);
      console.log(`  제안: ${issue.suggestion}`);
    }
  }

  console.log("\n브라우저 확인 경로");
  console.log("- http://localhost:3000/db-check/content-quality");
}

main().catch((error) => {
  console.error("\nDB 콘텐츠 품질 진단 실패");
  console.error(error);
  process.exit(1);
});
