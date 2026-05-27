import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const FILES = [
  { file: "data/qna.ts", name: "육아 Q&A" },
  { file: "data/familyHealthQna.ts", name: "가족건강 Q&A" },
  { file: "data/en/qna100.ts", name: "English Q&A" },
];

const UNSAFE_PATTERNS = [
  "정상입니다",
  "괜찮습니다",
  "문제 없습니다",
  "병원에 안 가도 됩니다",
  "약을 먹이면 됩니다",
  "몇 mL 먹이면 됩니다",
  "이 증상은 감기입니다",
];

function extractExportedObject(source, exportName) {
  const start = source.indexOf(exportName);
  if (start < 0) return null;
  const eq = source.indexOf("=", start);
  if (eq < 0) return null;
  const end = source.indexOf(" as const", eq);
  if (end < 0) return null;
  return source.slice(eq + 1, end).trim();
}

function extractExportedArray(source, exportName) {
  const match = source.match(new RegExp(`${exportName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^=]*= ([\\s\\S]*?);\\n\\nexport `));
  if (match) return match[1].trim();
  const start = source.indexOf(exportName);
  if (start < 0) return null;
  const eq = source.indexOf("=", start);
  if (eq < 0) return null;
  const end = source.indexOf(";\n\n", eq);
  if (end < 0) return null;
  return source.slice(eq + 1, end).trim();
}

function loadEntries(file) {
  const source = fs.readFileSync(path.join(ROOT, file), "utf8");
  let raw = null;
  if (file.endsWith("qna.ts")) raw = extractExportedObject(source, "export const qnaData");
  if (file.includes("familyHealth")) raw = extractExportedObject(source, "export const familyHealthQnaData");
  if (file.includes("qna100")) raw = extractExportedArray(source, "export const enQnaEntries");
  if (!raw) return { source, entries: [] };
  const data = Function(`return (${raw});`)();
  const entries = Array.isArray(data) ? data : Object.entries(data).flatMap(([category, items]) => items.map((item) => ({ ...item, category })));
  return { source, entries };
}

function sentencesFrom(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?。！？]|다\.|요\.|니다\.|세요\.)\s+/g)
    .map((s) => s.trim())
    .filter((s) => s.length >= 14);
}

function firstSentence(text) {
  return sentencesFrom(text)[0] ?? String(text ?? "").slice(0, 80).trim();
}

function similarity(a, b) {
  const A = new Set(String(a).replace(/\s+/g, " ").split(" ").filter(Boolean));
  const B = new Set(String(b).replace(/\s+/g, " ").split(" ").filter(Boolean));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const token of A) if (B.has(token)) inter += 1;
  return inter / Math.max(A.size, B.size);
}

let hasWarning = false;
const lines = [];

for (const target of FILES) {
  const { source, entries } = loadEntries(target.file);
  if (!entries.length) continue;
  lines.push(`\n[${target.name}] ${target.file} · ${entries.length}개 항목 점검`);

  const sentenceCount = new Map();
  const cautionCount = new Map();
  let summaryAnswerSimilar = 0;
  let answerChecklistSimilar = 0;
  for (const entry of entries) {
    const texts = [entry.summary, ...(entry.answer ?? []), ...(entry.checklist ?? []), ...(entry.simpleAction ?? []), entry.caution];
    for (const text of texts) {
      for (const sentence of sentencesFrom(text)) {
        sentenceCount.set(sentence, (sentenceCount.get(sentence) ?? 0) + 1);
      }
    }
    if (entry.caution) cautionCount.set(entry.caution, (cautionCount.get(entry.caution) ?? 0) + 1);

    const summaryFirst = firstSentence(entry.summary);
    const answerFirst = firstSentence(Array.isArray(entry.answer) ? entry.answer[0] : entry.answer);
    if (similarity(summaryFirst, answerFirst) >= 0.82 && summaryFirst && answerFirst) {
      hasWarning = true;
      summaryAnswerSimilar += 1;
      if (summaryAnswerSimilar <= 20) lines.push(`- summary와 answer 첫 문장이 비슷함: ${entry.slug ?? entry.question}`);
    }

    const answerText = (entry.answer ?? []).join(" ");
    const checklistText = (entry.checklist ?? []).join(" ");
    if (similarity(firstSentence(answerText), firstSentence(checklistText)) >= 0.82 && answerText && checklistText) {
      hasWarning = true;
      answerChecklistSimilar += 1;
      if (answerChecklistSimilar <= 20) lines.push(`- answer와 checklist 첫 문장이 비슷함: ${entry.slug ?? entry.question}`);
    }
  }

  if (summaryAnswerSimilar > 20) lines.push(`- summary와 answer 첫 문장 유사 항목 추가 ${summaryAnswerSimilar - 20}개`);
  if (answerChecklistSimilar > 20) lines.push(`- answer와 checklist 첫 문장 유사 항목 추가 ${answerChecklistSimilar - 20}개`);

  const repeated = [...sentenceCount.entries()].filter(([, count]) => count >= 5).sort((a, b) => b[1] - a[1]).slice(0, 30);
  if (repeated.length) {
    hasWarning = true;
    lines.push("- 5회 이상 반복 문장:");
    for (const [sentence, count] of repeated) lines.push(`  · ${count}회: ${sentence.slice(0, 120)}`);
  }

  const repeatedCautions = [...cautionCount.entries()].filter(([, count]) => count >= 10).sort((a, b) => b[1] - a[1]);
  if (repeatedCautions.length) {
    hasWarning = true;
    lines.push("- 10개 이상 동일 caution:");
    for (const [caution, count] of repeatedCautions.slice(0, 20)) lines.push(`  · ${count}개: ${caution.slice(0, 120)}`);
  }

  for (const pattern of UNSAFE_PATTERNS) {
    const count = source.split(pattern).length - 1;
    if (count > 0) {
      hasWarning = true;
      lines.push(`- 단정 표현 발견: "${pattern}" ${count}회`);
    }
  }

  const rawUrlCount = (source.match(/['"`]\/((tools|qna|health)\/[^'"`\s]+)['"`]/g) ?? []).length;
  if (rawUrlCount > 0) {
    lines.push(`- 참고: 화면 텍스트가 아닌 링크 값으로 보이는 내부 URL 문자열 ${rawUrlCount}개가 있습니다.`);
  }
}

console.log(lines.join("\n"));
if (hasWarning) {
  console.log("\n점검 결과: 확인이 필요한 반복·유사 문장이 있습니다. 위 항목을 우선 검토하세요.");
  process.exitCode = 0;
} else {
  console.log("\n점검 결과: 기준에 걸린 항목이 없습니다.");
}
