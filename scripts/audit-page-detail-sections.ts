import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

function getArgValue(name: string) {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);
  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) return process.argv[index + 1];
  return undefined;
}

function safeFileName(value: string) {
  return value.replace(/^\//, "").replace(/[^a-zA-Z0-9가-힣._-]+/g, "_").slice(0, 160) || "page";
}

function renderMarkdown(report: any) {
  const lines: string[] = [];
  lines.push(`# 상세 페이지 카드 섹션 점검`);
  lines.push("");
  lines.push(`- path: ${report.path}`);
  lines.push(`- pageType: ${report.pageType}`);
  lines.push(`- supported: ${report.supported ? "yes" : "no"}`);
  lines.push(`- title: ${report.title}`);
  if (report.summary) lines.push(`- summary: ${report.summary}`);
  lines.push("");
  lines.push(`> ${report.pageSourceNote}`);
  lines.push("");
  lines.push("## 출처별 섹션 수");
  lines.push("");
  for (const row of report.sourceCounts) lines.push(`- ${row.source}: ${row.count}개`);
  lines.push("");
  lines.push("## 조치 유형별 섹션 수");
  lines.push("");
  for (const row of report.actionCounts) lines.push(`- ${row.action}: ${row.count}개`);
  lines.push("");
  lines.push("## 표시 섹션");
  lines.push("");
  for (const section of report.sections) {
    lines.push(`### ${section.label}`);
    lines.push("");
    lines.push(`- id: ${section.id}`);
    lines.push(`- source: ${section.source}`);
    lines.push(`- location: ${section.location}`);
    lines.push(`- actionNeeded: ${section.actionNeeded}`);
    if (section.title) lines.push(`- title: ${section.title}`);
    if (section.description) lines.push(`- description: ${section.description}`);
    if (section.textItems?.length) {
      lines.push("");
      for (const text of section.textItems.slice(0, 12)) lines.push(`- ${text}`);
    }
    if (section.links?.length) {
      lines.push("");
      lines.push("링크:");
      for (const link of section.links) lines.push(`- ${link.label}: ${link.href}${link.description ? ` — ${link.description}` : ""}`);
    }
    lines.push("");
  }
  lines.push("## 탐지 이슈");
  lines.push("");
  if (report.issues.length === 0) {
    lines.push("- 탐지된 이슈가 없습니다.");
  } else {
    for (const issue of report.issues) {
      lines.push(`- [${issue.severity}] ${issue.kind} / ${issue.sectionLabel}: ${issue.matchedText}`);
      lines.push(`  - 제안: ${issue.suggestion}`);
    }
  }
  lines.push("");
  lines.push("## 권장 조치");
  lines.push("");
  for (const action of report.recommendedActions) lines.push(`- ${action}`);
  return lines.join("\n");
}

async function main() {
  const pagePath = getArgValue("path");
  if (!pagePath) {
    throw new Error("--path=/qna/health/after-vaccine-fever 형식으로 점검할 상세 페이지 경로를 입력해 주세요.");
  }

  const { getPageQualityReport } = await import("../lib/repositories/page-quality-db");
  const report = await getPageQualityReport(pagePath);
  const exportDir = path.join(process.cwd(), "exports", "page-quality");
  await fs.mkdir(exportDir, { recursive: true });
  const fileBase = safeFileName(report.path);
  const jsonPath = path.join(exportDir, `${fileBase}.json`);
  const mdPath = path.join(exportDir, `${fileBase}.md`);

  await fs.writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await fs.writeFile(mdPath, renderMarkdown(report), "utf8");

  console.log("\n[상세 페이지 카드 섹션 점검 완료]");
  console.log(`path: ${report.path}`);
  console.log(`지원 여부: ${report.supported ? "지원" : "미지원"}`);
  console.log(`표시 섹션: ${report.sections.length.toLocaleString("ko-KR")}개`);
  console.log(`탐지 이슈: ${report.issues.length.toLocaleString("ko-KR")}개`);
  console.log(`JSON: ${jsonPath}`);
  console.log(`Markdown: ${mdPath}`);
}

main().catch((error) => {
  console.error("\n상세 페이지 카드 섹션 점검 실패");
  console.error(error);
  process.exit(1);
});
