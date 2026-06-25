export type ContentQualityIssueKind =
  | "RISKY_MEDICAL_EXPRESSION"
  | "OPERATOR_VIEWPOINT"
  | "AI_LIKE_REPETITION"
  | "WEAK_USER_VALUE"
  | "TOO_SHORT"
  | "MISSING_SAFETY_SECTION";

export type ContentQualityIssue = {
  kind: ContentQualityIssueKind;
  label: string;
  severity: "high" | "medium" | "low";
  path: string;
  title: string;
  type: string;
  category: string | null;
  sectionType: string | null;
  matchedText: string;
  suggestion: string;
};

export type RepeatedSentence = {
  sentence: string;
  count: number;
  examples: Array<{ path: string; title: string }>;
};

type DbContentRow = {
  id: string;
  type: string;
  slug: string;
  path: string;
  title: string;
  question: string | null;
  summary: string;
  reviewStatus: string;
  editorMemo: string | null;
  duplicateMemo: string | null;
  isMedical: boolean;
  category: { slug: string; name: string } | null;
  sections: Array<{
    sectionType: string;
    title: string | null;
    body: string | null;
    items: unknown;
  }>;
  keywords: Array<{ keyword: string }>;
};

const WATCHED_TYPES = ["QNA", "FAMILY_HEALTH_QNA", "MONTHLY_GUIDE", "HEALTH_GUIDE"] as const;

const OPERATOR_VIEWPOINT_PATTERNS: Array<{ pattern: RegExp; label: string; suggestion: string }> = [
  { pattern: /\bSEO\b|검색엔진|네이버\s*SEO|구글\s*SEO/i, label: "SEO/운영 목적 노출", suggestion: "검색 최적화 표현은 화면에서 빼고, 사용자가 얻는 도움을 직접 말해 주세요." },
  { pattern: /AI|자동\s*생성|생성형|프롬프트/i, label: "AI 생성 흔적", suggestion: "AI나 자동 생성 표현을 제거하고 실제 부모 상황 중심 문장으로 바꿔 주세요." },
  { pattern: /운영자|관리자|검수\s*상태|reviewStatus|DB|데이터베이스/i, label: "운영자/개발자 관점 표현", suggestion: "내부 관리 용어 대신 사용자가 지금 확인할 내용을 설명해 주세요." },
  { pattern: /준비\s*중|업데이트\s*예정|추후\s*제공|서비스\s*개선/i, label: "준비중/운영 안내 표현", suggestion: "준비 상태를 말하기보다 현재 확인 가능한 정보와 다음 행동을 안내해 주세요." },
  { pattern: /정보를\s*제공합니다|콘텐츠를\s*제공합니다|데이터를\s*제공합니다|이\s*페이지(?:에서는|는)/i, label: "페이지 설명식 문장", suggestion: "페이지가 무엇을 제공하는지가 아니라, 사용자가 어떤 고민을 해결할 수 있는지로 바꿔 주세요." },
];

const RISKY_PATTERNS: Array<{ pattern: RegExp; label: string; suggestion: string }> = [
  { pattern: /괜찮습니다|문제\s*없습니다|정상입니다|걱정하지\s*않아도\s*됩니다/i, label: "안심 단정", suggestion: "괜찮다고 단정하지 말고, 확인할 증상과 상담이 필요한 신호를 함께 안내해 주세요." },
  { pattern: /먹어도\s*됩니다|복용해도\s*됩니다|사용해도\s*됩니다|발라도\s*됩니다/i, label: "복용·사용 가능 단정", suggestion: "복용 가능 여부는 연령, 임신·수유, 지병, 병용약에 따라 달라질 수 있다고 분리해서 안내해 주세요." },
  { pattern: /복용하세요|드세요|사용하세요|처방받으세요|치료하세요/i, label: "치료·복용 지시", suggestion: "직접 지시 대신 제품 설명서 확인, 약사·의료진 상담, 병원 방문 기준으로 바꿔 주세요." },
  { pattern: /확실히|반드시\s*낫|완치|진단됩니다|원인은\s*.+입니다/i, label: "진단·예후 단정", suggestion: "원인을 단정하지 말고 가능성, 관찰 포인트, 상담 기준을 나눠 주세요." },
  { pattern: /\d+\s?(mg|㎎|ml|mL|정|알|포|회)\b/i, label: "용량·횟수 수치", suggestion: "복용량 수치는 화면에서 단정하지 말고, 제품 라벨과 전문가 확인을 안내해 주세요." },
];

const WEAK_AI_PATTERNS: Array<{ pattern: RegExp; label: string; suggestion: string }> = [
  { pattern: /매우\s*중요합니다|중요합니다|필요합니다|도움이\s*됩니다/i, label: "일반론 중심 마무리", suggestion: "중요하다는 말보다 오늘 바로 확인할 행동이나 관찰 포인트로 바꿔 주세요." },
  { pattern: /상태를\s*관찰(?:하는\s*것)?이\s*중요|아이의\s*상태를\s*잘\s*살펴/i, label: "반복 관찰 문구", suggestion: "무엇을 관찰할지 구체화해 주세요. 예: 먹는 양, 소변량, 잠, 처짐, 호흡." },
  { pattern: /개인차가\s*있습니다|상황에\s*따라\s*다릅니다/i, label: "차이 설명만 있는 문장", suggestion: "차이가 있다는 말 뒤에 부모가 확인할 기준을 붙여 주세요." },
];

const USER_START_PATTERNS = [
  /아기|아이|부모|엄마|아빠|산후|검진|약|열|수면|이유식|수유|기침|설사|변비|피부|체중|발달|떼쓰기/,
  /걱정|불안|고민|헷갈|막막|당황|확인|살펴/,
];

function textFromUnknown(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(textFromUnknown);
  if (value && typeof value === "object") return Object.values(value as Record<string, unknown>).flatMap(textFromUnknown);
  return [];
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function splitSentences(value: string): string[] {
  return value
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?。？！]|요\.|다\.|죠\.|니다\.)\s+|[•·]/g)
    .map(normalizeWhitespace)
    .filter((sentence) => sentence.length >= 18 && sentence.length <= 180);
}

function getSectionTexts(row: DbContentRow) {
  const base = [
    { sectionType: "title", text: row.title },
    { sectionType: "summary", text: row.summary },
  ];

  const sectionTexts = row.sections.flatMap((section) => {
    const texts = [section.title ?? "", section.body ?? "", ...textFromUnknown(section.items)];
    return texts
      .map(normalizeWhitespace)
      .filter(Boolean)
      .map((text) => ({ sectionType: section.sectionType, text }));
  });

  return [...base, ...sectionTexts].filter((item) => item.text.trim().length > 0);
}

function getWordLength(text: string) {
  return normalizeWhitespace(text).split(/\s+/).filter(Boolean).length;
}

function hasSafetySection(row: DbContentRow) {
  const safetyTypes = new Set(["caution", "warningSigns", "doctorConsultGuide", "safety", "checkBefore"]);
  return row.sections.some((section) => safetyTypes.has(section.sectionType) && (section.body || textFromUnknown(section.items).length > 0));
}

function isSensitive(row: DbContentRow) {
  const category = row.category?.slug ?? "";
  return row.isMedical || ["health", "medicine", "postpartum", "checkup"].includes(category) || row.type === "HEALTH_GUIDE";
}

function contentPriority(issue: ContentQualityIssue) {
  const severityScore = issue.severity === "high" ? 100 : issue.severity === "medium" ? 50 : 10;
  const typeScore = issue.type === "FAMILY_HEALTH_QNA" ? 8 : issue.type === "QNA" ? 6 : issue.type === "HEALTH_GUIDE" ? 5 : 2;
  const categoryScore = ["medicine", "postpartum", "checkup", "health"].includes(issue.category ?? "") ? 20 : 0;
  return severityScore + categoryScore + typeScore;
}

export function normalizeUserFacingText(value: string): string {
  let next = value;

  const replacements: Array<[RegExp, string]> = [
    [/이\s*페이지(?:에서는|는)\s*/g, ""],
    [/관련\s*정보를\s*제공합니다\.?/g, "확인할 점을 정리했어요."],
    [/정보를\s*제공합니다\.?/g, "확인할 수 있어요."],
    [/콘텐츠를\s*제공합니다\.?/g, "살펴볼 수 있어요."],
    [/데이터를\s*제공합니다\.?/g, "확인할 수 있어요."],
    [/SEO에\s*최적화(?:된|한)\s*/gi, ""],
    [/AI가\s*작성한|AI\s*생성|자동\s*생성/gi, ""],
    [/준비\s*중입니다\.?/g, "현재 확인 가능한 내용부터 살펴볼 수 있어요."],
    [/운영자가\s*확인\s*후\s*업데이트합니다\.?/g, "신청이나 상담 전에는 공식 안내를 한 번 더 확인해 주세요."],
    [/괜찮습니다/g, "대체로 지켜볼 수 있는 경우도 있지만"],
    [/문제\s*없습니다/g, "바로 위험하다고 단정하기는 어렵지만"],
    [/정상입니다/g, "흔히 보일 수 있지만 상황을 함께 봐야 합니다"],
    [/먹어도\s*됩니다/g, "복용 전 확인이 필요합니다"],
    [/복용해도\s*됩니다/g, "복용 전 확인이 필요합니다"],
    [/사용해도\s*됩니다/g, "사용 전 확인이 필요합니다"],
    [/복용하세요/g, "복용 여부를 확인해 주세요"],
    [/사용하세요/g, "사용 여부를 확인해 주세요"],
    [/전문가와\s*상담하는\s*것이\s*좋습니다/g, "걱정되는 증상이 계속되면 소아청소년과나 담당 의료진에게 확인해 주세요"],
  ];

  for (const [pattern, replacement] of replacements) {
    next = next.replace(pattern, replacement);
  }

  return next.replace(/\s{2,}/g, " ").replace(/\s+([,.!?])/g, "$1").trim();
}

export function detectQualityIssues(row: DbContentRow): ContentQualityIssue[] {
  const issues: ContentQualityIssue[] = [];
  const category = row.category?.slug ?? null;
  const sectionTexts = getSectionTexts(row);

  for (const section of sectionTexts) {
    for (const rule of OPERATOR_VIEWPOINT_PATTERNS) {
      const match = section.text.match(rule.pattern);
      if (match) {
        issues.push({
          kind: "OPERATOR_VIEWPOINT",
          label: rule.label,
          severity: "high",
          path: row.path,
          title: row.question ?? row.title,
          type: row.type,
          category,
          sectionType: section.sectionType,
          matchedText: match[0],
          suggestion: rule.suggestion,
        });
      }
    }

    for (const rule of RISKY_PATTERNS) {
      const match = section.text.match(rule.pattern);
      if (match) {
        issues.push({
          kind: "RISKY_MEDICAL_EXPRESSION",
          label: rule.label,
          severity: isSensitive(row) ? "high" : "medium",
          path: row.path,
          title: row.question ?? row.title,
          type: row.type,
          category,
          sectionType: section.sectionType,
          matchedText: match[0],
          suggestion: rule.suggestion,
        });
      }
    }

    for (const rule of WEAK_AI_PATTERNS) {
      const match = section.text.match(rule.pattern);
      if (match) {
        issues.push({
          kind: "WEAK_USER_VALUE",
          label: rule.label,
          severity: "low",
          path: row.path,
          title: row.question ?? row.title,
          type: row.type,
          category,
          sectionType: section.sectionType,
          matchedText: match[0],
          suggestion: rule.suggestion,
        });
      }
    }
  }

  const firstText = normalizeWhitespace(row.summary || row.title);
  if (firstText.length > 0 && !USER_START_PATTERNS.some((pattern) => pattern.test(firstText))) {
    issues.push({
      kind: "WEAK_USER_VALUE",
      label: "첫 문단 사용자 상황 부족",
      severity: "medium",
      path: row.path,
      title: row.question ?? row.title,
      type: row.type,
      category,
      sectionType: "summary",
      matchedText: firstText.slice(0, 80),
      suggestion: "첫 문장을 일반 설명보다 부모가 실제로 겪는 상황이나 확인 질문으로 시작해 주세요.",
    });
  }

  const answerText = row.sections
    .filter((section) => section.sectionType === "answer")
    .flatMap((section) => [section.body ?? "", ...textFromUnknown(section.items)])
    .join(" ");

  if (getWordLength(answerText) > 0 && getWordLength(answerText) < 28) {
    issues.push({
      kind: "TOO_SHORT",
      label: "답변 정보량 부족",
      severity: "medium",
      path: row.path,
      title: row.question ?? row.title,
      type: row.type,
      category,
      sectionType: "answer",
      matchedText: normalizeWhitespace(answerText).slice(0, 100),
      suggestion: "상황 설명, 확인할 포인트, 집에서 볼 수 있는 기준, 상담 신호를 보강해 주세요.",
    });
  }

  if (isSensitive(row) && !hasSafetySection(row)) {
    issues.push({
      kind: "MISSING_SAFETY_SECTION",
      label: "민감 콘텐츠 상담 신호 부족",
      severity: "high",
      path: row.path,
      title: row.question ?? row.title,
      type: row.type,
      category,
      sectionType: null,
      matchedText: "상담/주의 섹션 없음",
      suggestion: "병원 상담이 필요한 신호, 복용 전 확인사항, 응급 신호를 별도 섹션으로 분리해 주세요.",
    });
  }

  return issues;
}

function collectRepeatedSentences(rows: DbContentRow[]): RepeatedSentence[] {
  const sentenceMap = new Map<string, { count: number; examples: Array<{ path: string; title: string }> }>();

  for (const row of rows) {
    const seenInContent = new Set<string>();
    for (const item of getSectionTexts(row)) {
      for (const sentence of splitSentences(item.text)) {
        if (sentence.length < 18 || sentence.length > 150) continue;
        if (seenInContent.has(sentence)) continue;
        seenInContent.add(sentence);
        const current = sentenceMap.get(sentence) ?? { count: 0, examples: [] };
        current.count += 1;
        if (current.examples.length < 5) {
          current.examples.push({ path: row.path, title: row.question ?? row.title });
        }
        sentenceMap.set(sentence, current);
      }
    }
  }

  return [...sentenceMap.entries()]
    .filter(([, value]) => value.count >= 6)
    .map(([sentence, value]) => ({ sentence, count: value.count, examples: value.examples }))
    .sort((a, b) => b.count - a.count || b.sentence.length - a.sentence.length)
    .slice(0, 30);
}

async function getPrismaOrNull() {
  try {
    const { prisma } = await import("@/lib/db");
    return prisma;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[content-quality-db] DB 연결을 사용할 수 없습니다.", error);
    }
    return null;
  }
}

export async function getContentQualityStatus() {
  const prisma = await getPrismaOrNull();
  if (!prisma) {
    return {
      connected: false,
      total: 0,
      issueCount: 0,
      highIssueCount: 0,
      operatorIssueCount: 0,
      riskyIssueCount: 0,
      repeatedSentences: [] as RepeatedSentence[],
      topIssues: [] as ContentQualityIssue[],
      typeCounts: [] as Array<{ type: string; count: number }>,
      reviewStatuses: [] as Array<{ reviewStatus: string; count: number }>,
      suggestedNextActions: ["DATABASE_URL 또는 DIRECT_URL 환경변수를 확인한 뒤 다시 실행해 주세요."],
    };
  }

  try {
    const [rows, typeRows, reviewRows] = await Promise.all([
      prisma.content.findMany({
        where: {
          locale: "ko",
          status: "PUBLISHED",
          type: { in: WATCHED_TYPES as any },
        },
        orderBy: [{ type: "asc" }, { updatedAt: "desc" }, { slug: "asc" }],
        include: {
          category: { select: { slug: true, name: true } },
          sections: { select: { sectionType: true, title: true, body: true, items: true }, orderBy: { sortOrder: "asc" } },
          keywords: { select: { keyword: true } },
        },
      }),
      prisma.content.groupBy({
        by: ["type"],
        where: { locale: "ko", status: "PUBLISHED", type: { in: WATCHED_TYPES as any } },
        _count: { _all: true },
        orderBy: { type: "asc" },
      }),
      prisma.content.groupBy({
        by: ["reviewStatus"],
        where: { locale: "ko", status: "PUBLISHED", type: { in: WATCHED_TYPES as any } },
        _count: { _all: true },
        orderBy: { reviewStatus: "asc" },
      }),
    ]);

    const typedRows = rows as unknown as DbContentRow[];
    const issues = typedRows.flatMap(detectQualityIssues).sort((a, b) => contentPriority(b) - contentPriority(a));
    const repeatedSentences = collectRepeatedSentences(typedRows);

    const topRepeatedIssues: ContentQualityIssue[] = repeatedSentences.slice(0, 10).flatMap((item) =>
      item.examples.slice(0, 2).map((example) => ({
        kind: "AI_LIKE_REPETITION" as const,
        label: `반복 문장 ${item.count.toLocaleString("ko-KR")}회`,
        severity: item.count >= 30 ? "high" : item.count >= 12 ? "medium" : "low",
        path: example.path,
        title: example.title,
        type: "반복 문장",
        category: null,
        sectionType: null,
        matchedText: item.sentence,
        suggestion: "같은 문장을 여러 글에서 쓰기보다 해당 상황의 원인, 확인 기준, 다음 행동을 다르게 써 주세요.",
      })),
    );

    const allIssues = [...issues, ...topRepeatedIssues].sort((a, b) => contentPriority(b) - contentPriority(a));

    return {
      connected: true,
      total: typedRows.length,
      issueCount: allIssues.length,
      highIssueCount: allIssues.filter((issue) => issue.severity === "high").length,
      operatorIssueCount: allIssues.filter((issue) => issue.kind === "OPERATOR_VIEWPOINT").length,
      riskyIssueCount: allIssues.filter((issue) => issue.kind === "RISKY_MEDICAL_EXPRESSION").length,
      repeatedSentences,
      topIssues: allIssues.slice(0, 40),
      typeCounts: typeRows.map((row) => ({ type: String(row.type), count: row._count._all })),
      reviewStatuses: reviewRows.map((row) => ({ reviewStatus: row.reviewStatus, count: row._count._all })),
      suggestedNextActions: [
        "medicine, postpartum, checkup, qna health 순서로 high 이슈를 먼저 줄이세요.",
        "반복 문장은 한 번에 전체 치환하기보다 카테고리별로 의미가 달라지도록 다시 쓰는 편이 안전합니다.",
        "운영자·개발자 관점 표현은 화면 노출 문구에서 제거하고, 부모가 지금 확인할 행동으로 바꾸세요.",
      ],
    };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[content-quality-db] 콘텐츠 품질 상태 확인 실패", error);
    }

    return {
      connected: false,
      total: 0,
      issueCount: 0,
      highIssueCount: 0,
      operatorIssueCount: 0,
      riskyIssueCount: 0,
      repeatedSentences: [] as RepeatedSentence[],
      topIssues: [] as ContentQualityIssue[],
      typeCounts: [] as Array<{ type: string; count: number }>,
      reviewStatuses: [] as Array<{ reviewStatus: string; count: number }>,
      suggestedNextActions: ["DB 조회 중 오류가 발생했습니다. 터미널 로그를 확인해 주세요."],
    };
  }
}
