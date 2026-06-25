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

function normalizeBatchNo(value: string | undefined) {
  if (!value) throw new Error("--batch=001 형식으로 batch 번호를 지정해 주세요.");
  const normalized = value.replace(/^batch-/i, "");
  const batchNo = Number(normalized);
  if (!Number.isInteger(batchNo) || batchNo < 1) {
    throw new Error("batch 번호는 001, 002 같은 양의 정수여야 합니다.");
  }
  return batchNo;
}

function asTextList(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(asTextList);
  if (value && typeof value === "object") return Object.values(value as Record<string, unknown>).flatMap(asTextList);
  return [];
}

function mdEscape(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function formatSection(section: any) {
  const texts = [section.body, ...asTextList(section.items)].filter(Boolean);
  return {
    sectionType: section.sectionType,
    title: section.title,
    body: section.body,
    items: section.items,
    textPreview: texts.slice(0, 8),
  };
}

function renderMarkdown(batch: any, exportedItems: any[]) {
  const lines: string[] = [];
  lines.push(`# ${batch.label} 콘텐츠 품질 개선 대상`);
  lines.push("");
  lines.push(`- batch 번호: ${String(batch.batchNo).padStart(3, "0")}`);
  lines.push(`- 범위: ${batch.scope}`);
  lines.push(`- 대상 수: ${exportedItems.length}개`);
  lines.push("");
  lines.push("## 작업 기준");
  lines.push("");
  lines.push("- 첫 문단은 부모가 실제로 겪는 상황이나 검색 의도에서 시작합니다.");
  lines.push("- 같은 구조와 같은 문장 마무리가 반복되지 않게 글마다 전개를 다르게 만듭니다.");
  lines.push("- 건강·약·산후·검진 글은 진단, 복용량, 사용 가능 여부를 단정하지 않습니다.");
  lines.push("- 사용자 화면에는 AI, SEO, DB, 검수, 운영자 같은 내부 표현을 남기지 않습니다.");
  lines.push("- 네이버 검색어는 억지로 반복하지 않고 제목·첫 문단·확인 기준에 자연스럽게 녹입니다.");
  lines.push("");
  lines.push("## 대상 목록");
  lines.push("");
  lines.push("|순서|상태|유형|카테고리|경로|제목|");
  lines.push("|---:|---|---|---|---|---|");
  for (const item of exportedItems) {
    lines.push(`|${item.sequence}|${item.dbStatus}|${item.type}|${item.category ?? ""}|${mdEscape(item.path)}|${mdEscape(item.title)}|`);
  }
  lines.push("");

  for (const item of exportedItems) {
    lines.push(`---`);
    lines.push("");
    lines.push(`## ${item.sequence}. ${item.title}`);
    lines.push("");
    lines.push(`- path: ${item.path}`);
    lines.push(`- type/category: ${item.type}${item.category ? ` / ${item.category}` : ""}`);
    lines.push(`- DB 상태: ${item.dbStatus}`);
    lines.push(`- 작업 상태: ${item.status}`);
    lines.push("");

    if (item.content) {
      lines.push(`### 현재 요약`);
      lines.push("");
      lines.push(item.content.summary || "요약 없음");
      lines.push("");
      lines.push(`### 현재 메타`);
      lines.push("");
      lines.push(`- metaTitle: ${item.content.metaTitle ?? ""}`);
      lines.push(`- metaDescription: ${item.content.metaDescription ?? ""}`);
      lines.push("");
      lines.push(`### 현재 섹션`);
      lines.push("");
      for (const section of item.content.sections) {
        lines.push(`#### ${section.sectionType}${section.title ? ` - ${section.title}` : ""}`);
        const previews = section.textPreview.length > 0 ? section.textPreview : ["내용 없음"];
        for (const text of previews) lines.push(`- ${text}`);
        lines.push("");
      }
      if (item.content.keywords.length > 0) {
        lines.push(`### 키워드`);
        lines.push("");
        lines.push(item.content.keywords.map((row: any) => row.keyword).join(", "));
        lines.push("");
      }
      if (item.pageQuality?.supported) {
        lines.push(`### 실제 화면 카드 섹션 점검`);
        lines.push("");
        lines.push(`- 표시 섹션: ${item.pageQuality.sections.length}개`);
        lines.push(`- 탐지 이슈: ${item.pageQuality.issues.length}개`);
        lines.push("");
        lines.push(`|출처|카드|조치|위치|`);
        lines.push(`|---|---|---|---|`);
        for (const section of item.pageQuality.sections) {
          lines.push(`|${section.source}|${mdEscape(section.label)}|${section.actionNeeded}|${mdEscape(section.location)}|`);
        }
        if (item.pageQuality.issues.length > 0) {
          lines.push("");
          lines.push(`#### 페이지 전체 이슈`);
          for (const issue of item.pageQuality.issues.slice(0, 12)) {
            lines.push(`- [${issue.severity}] ${issue.kind} / ${issue.sectionLabel}: ${issue.matchedText}`);
          }
        }
        lines.push("");
      }
    } else {
      lines.push("### DB 전환 필요");
      lines.push("");
      lines.push("이 항목은 아직 DB로 전환되지 않은 정적 페이지입니다. 해당 batch 작업 시 원본 파일을 확인해 DB 전환과 품질 개선을 함께 진행합니다.");
      lines.push("");
    }
  }

  return lines.join("\n");
}

async function main() {
  const batchNo = normalizeBatchNo(getArgValue("batch"));
  const { prisma } = await import("../lib/db");
  const db = prisma as any;

  const { getPageQualityReport } = await import("../lib/repositories/page-quality-db");

  const batch = await db.contentQualityBatch.findUnique({
    where: { batchNo },
    include: {
      items: {
        orderBy: { sequence: "asc" },
      },
    },
  });

  if (!batch) {
    throw new Error(`batch-${String(batchNo).padStart(3, "0")}을 찾을 수 없습니다. 먼저 npm run db:quality:init 을 실행해 주세요.`);
  }

  const exportedItems = [];
  for (const item of batch.items) {
    let content = null;
    if (item.contentId) {
      content = await db.content.findUnique({
        where: { id: item.contentId },
        include: {
          category: true,
          sections: { orderBy: { sortOrder: "asc" } },
          keywords: { orderBy: { keyword: "asc" } },
          sources: true,
        },
      });
    }

    let pageQuality = null;
    if (item.dbStatus === "DB_READY") {
      try {
        const report = await getPageQualityReport(item.path);
        pageQuality = report.supported
          ? {
              supported: report.supported,
              pageType: report.pageType,
              pageSourceNote: report.pageSourceNote,
              sections: report.sections.map((section) => ({
                id: section.id,
                label: section.label,
                source: section.source,
                location: section.location,
                title: section.title,
                description: section.description,
                actionNeeded: section.actionNeeded,
                textPreview: section.textItems.slice(0, 8),
                links: section.links,
              })),
              issues: report.issues.map((issue) => ({
                sectionId: issue.sectionId,
                sectionLabel: issue.sectionLabel,
                source: issue.source,
                severity: issue.severity,
                kind: issue.kind,
                matchedText: issue.matchedText,
                suggestion: issue.suggestion,
              })),
              sourceCounts: report.sourceCounts,
              actionCounts: report.actionCounts,
              recommendedActions: report.recommendedActions,
            }
          : { supported: false, pageType: report.pageType, pageSourceNote: report.pageSourceNote };
      } catch (error) {
        pageQuality = {
          supported: false,
          pageType: "ERROR",
          pageSourceNote: error instanceof Error ? error.message : "상세 페이지 카드 점검 중 오류가 발생했습니다.",
        };
      }
    }

    exportedItems.push({
      id: item.id,
      batchNo: item.batchNo,
      sequence: item.sequence,
      globalOrder: item.globalOrder,
      sourceKind: item.sourceKind,
      sourceKey: item.sourceKey,
      dbStatus: item.dbStatus,
      contentId: item.contentId,
      path: item.path,
      type: item.type,
      category: item.category,
      title: item.title,
      status: item.status,
      reviewStatus: item.reviewStatus,
      editorMemo: item.editorMemo,
      pageQuality,
      content: content
        ? {
            id: content.id,
            path: content.path,
            title: content.title,
            question: content.question,
            summary: content.summary,
            metaTitle: content.metaTitle,
            metaDescription: content.metaDescription,
            canonicalPath: content.canonicalPath,
            reviewStatus: content.reviewStatus,
            editorMemo: content.editorMemo,
            duplicateMemo: content.duplicateMemo,
            isMedical: content.isMedical,
            category: content.category ? { slug: content.category.slug, name: content.category.name } : null,
            sections: content.sections.map(formatSection),
            keywords: content.keywords,
            sources: content.sources,
          }
        : null,
    });
  }

  const exportDir = path.join(process.cwd(), "exports", "content-quality");
  await fs.mkdir(exportDir, { recursive: true });

  const batchLabel = `batch-${String(batchNo).padStart(3, "0")}`;
  const jsonPath = path.join(exportDir, `${batchLabel}.json`);
  const mdPath = path.join(exportDir, `${batchLabel}.md`);

  const payload = {
    exportedAt: new Date().toISOString(),
    qualityPolicy: {
      goal: "사용자 관점, 네이버 SEO, AI 생성 티 제거, 반복 구조 제거",
      batchSize: batch.items.length,
      requiredChecks: [
        "첫 문단이 사용자 상황에서 시작하는가",
        "제목이 실제 검색 문장처럼 자연스러운가",
        "본문에 이 글만의 고유 정보가 있는가",
        "다른 글과 같은 문장 구조가 반복되지 않는가",
        "건강·약·검진 관련 단정 표현이 없는가",
        "상담 또는 병원 확인 신호가 구체적인가",
        "운영자/개발자/AI/SEO/DB 관점 표현이 없는가",
        "키워드가 자연스럽게 들어갔는가",
        "메타 제목과 설명이 클릭하고 싶은 문장인가",
        "읽고 난 사용자가 다음 행동을 알 수 있는가",
        "본문 외 카드 섹션, 관련 글, 계산기 추천, 공통 안내 문구까지 현재 페이지 주제와 맞는가",
      ],
    },
    batch: {
      id: batch.id,
      batchNo: batch.batchNo,
      label: batch.label,
      scope: batch.scope,
      status: batch.status,
      totalItems: batch.totalItems,
      completedItems: batch.completedItems,
    },
    items: exportedItems,
  };

  await fs.writeFile(jsonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  await fs.writeFile(mdPath, renderMarkdown(batch, exportedItems), "utf8");

  await db.contentQualityBatch.update({
    where: { id: batch.id },
    data: {
      status: batch.status === "READY" ? "EXPORTED" : batch.status,
      startedAt: batch.startedAt ?? new Date(),
    },
  });

  await db.contentQualityBatchItem.updateMany({
    where: { batchId: batch.id, status: "READY" },
    data: {
      status: "EXPORTED",
      exportedAt: new Date(),
    },
  });

  console.log("\n[콘텐츠 품질 batch 추출 완료]");
  console.log(`batch: ${batchLabel}`);
  console.log(`JSON: ${jsonPath}`);
  console.log(`Markdown: ${mdPath}`);
  console.log("\n이 파일을 기준으로 10개씩 재작성한 뒤 DB update 스크립트로 반영하면 됩니다.");
}

main().catch((error) => {
  console.error("\n콘텐츠 품질 batch 추출 실패");
  console.error(error);
  process.exit(1);
});
