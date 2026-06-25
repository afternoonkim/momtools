import { qnaCategories, type QnaCategory, type QnaEntry } from "@/data/qna";
import {
  familyHealthCategories,
  type FamilyHealthQnaCategory,
  type FamilyHealthQnaEntry,
} from "@/data/familyHealthQna";
import { healthGuideItems } from "@/data/healthGuides";
import { getFamilyHealthEntryFromDb, getRelatedFamilyHealthFromDb } from "@/lib/repositories/family-health-qna-db";
import { getQnaEntryFromDb, getRelatedQnaFromDb } from "@/lib/repositories/qna-db";
import { buildQnaLongtailContent } from "@/lib/qna-longtail";

type SectionSource =
  | "DB_CONTENT"
  | "GENERATED_LONGTAIL"
  | "STATIC_TEMPLATE"
  | "RELATED_DYNAMIC"
  | "SHARED_COMPONENT"
  | "AD_COMPONENT"
  | "METADATA";

type IssueKind =
  | "OPERATOR_VIEWPOINT"
  | "AI_LIKE_GENERIC"
  | "RISKY_MEDICAL_EXPRESSION"
  | "REPEATED_WITHIN_PAGE"
  | "LOW_RELEVANCE_GENERIC_CARD"
  | "MISSING_PAGE_WIDE_REVIEW";

type IssueSeverity = "high" | "medium" | "low";

export type PageVisibleSection = {
  id: string;
  label: string;
  source: SectionSource;
  location: string;
  title?: string;
  description?: string;
  textItems: string[];
  links?: Array<{ href: string; label: string; description?: string }>;
  actionNeeded: "NONE" | "REVIEW" | "REWRITE" | "TEMPLATE_REVIEW" | "RELATION_REVIEW";
};

export type PageQualityIssue = {
  sectionId: string;
  sectionLabel: string;
  source: SectionSource;
  severity: IssueSeverity;
  kind: IssueKind;
  matchedText: string;
  suggestion: string;
};

export type PageQualityReport = {
  supported: boolean;
  path: string;
  pageType: string;
  category?: string;
  title: string;
  summary?: string;
  pageSourceNote: string;
  sections: PageVisibleSection[];
  issues: PageQualityIssue[];
  sourceCounts: Array<{ source: SectionSource; count: number }>;
  actionCounts: Array<{ action: PageVisibleSection["actionNeeded"]; count: number }>;
  recommendedActions: string[];
  batchRuleUpdate: string[];
};

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

const qnaRelatedLinks: Record<QnaCategory, RelatedLink[]> = {
  health: [
    { href: "/tools/vaccine-schedule", label: "예방접종 일정 계산기", description: "접종 시기와 다음 일정을 정리할 때 함께 보기 좋습니다." },
    { href: "/info/newborn", label: "신생아 정보", description: "수유, 체온, 수면, 배변처럼 초기 관찰 기준을 함께 확인할 수 있습니다." },
    { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "건강 증상을 볼 때 월령 기준을 먼저 확인하면 판단이 더 쉬워집니다." },
  ],
  growth: [
    { href: "/tools/growth-percentile", label: "성장 백분위 계산기", description: "키와 몸무게 흐름을 수치로 확인하며 성장 Q&A와 함께 볼 수 있습니다." },
    { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "정확한 개월수를 확인한 뒤 발달 흐름을 비교할 때 편리합니다." },
    { href: "/info/toddler", label: "유아 정보", description: "말, 놀이, 생활습관처럼 성장과 연결되는 일상 기준을 함께 볼 수 있습니다." },
  ],
  behavior: [
    { href: "/info/toddler", label: "유아 정보", description: "생활 루틴, 자율성, 감정 조절처럼 행동과 연결되는 배경 정보를 함께 볼 수 있습니다." },
    { href: "/checklists/daycare", label: "어린이집 준비 체크리스트", description: "분리불안, 생활 전환, 등원 적응처럼 행동 변화가 생기기 쉬운 시기에 참고하기 좋습니다." },
    { href: "/checklists/newborn", label: "신생아 준비 체크리스트", description: "초기 생활 루틴과 환경 준비를 확인하며 행동 변화의 배경을 같이 살펴볼 수 있습니다." },
  ],
};

const familyRelatedLinks: Record<FamilyHealthQnaCategory, RelatedLink[]> = {
  mom: [
    { href: "/family-health-qna/postpartum", label: "임신·출산 후 건강 Q&A", description: "출산 후 회복과 연결되는 통증, 수면, 마음 건강을 함께 볼 수 있어요." },
    { href: "/qna/health", label: "아이 건강 Q&A", description: "아이 증상과 엄마 컨디션을 함께 확인해야 할 때 이어서 보기 좋아요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "진통제, 감기약, 영양제를 먹기 전 확인할 점을 볼 수 있어요." },
  ],
  dad: [
    { href: "/family-health-qna/checkup", label: "검진·병원 이용 Q&A", description: "혈압, 혈당, 간 수치처럼 검진 결과를 함께 정리할 수 있어요." },
    { href: "/family-health-qna/family", label: "가족 생활 건강 Q&A", description: "가족 전체의 감기, 장염, 생활 건강 질문을 이어서 볼 수 있어요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "복용 중인 약과 영양제 주의점을 함께 확인할 수 있어요." },
  ],
  postpartum: [
    { href: "/family-health-qna/mom", label: "엄마 건강 Q&A", description: "육아 중 반복되는 피로, 통증, 수면 문제를 함께 살펴볼 수 있어요." },
    { href: "/info/pregnancy", label: "임신 정보", description: "임신 중 변화와 준비 흐름을 함께 확인할 수 있어요." },
    { href: "/checklists/birth", label: "출산 준비 체크리스트", description: "출산 전후 준비 항목을 정리할 때 도움이 됩니다." },
  ],
  family: [
    { href: "/qna/health", label: "아이 건강 Q&A", description: "아이에게 생긴 열, 기침, 설사 같은 증상을 이어서 확인할 수 있어요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "가족이 함께 복용할 수 있는 약과 영양제 주의점을 볼 수 있어요." },
    { href: "/family-health-qna/checkup", label: "검진·병원 이용 Q&A", description: "증상을 병원에서 설명하기 위한 기록 방법을 볼 수 있어요." },
  ],
  medicine: [
    { href: "/family-health-qna/family", label: "가족 생활 건강 Q&A", description: "감기, 장염, 알레르기처럼 약 복용을 고민하기 전 증상 흐름을 볼 수 있어요." },
    { href: "/qna/health", label: "아이 건강 Q&A", description: "아이 약 복용은 월령과 체중 기준이 중요하므로 함께 확인해 보세요." },
    { href: "/family-health-qna/checkup", label: "검진·병원 이용 Q&A", description: "검진 결과와 복용 중인 약을 정리할 때 도움이 됩니다." },
  ],
  checkup: [
    { href: "/family-health-qna/dad", label: "아빠 건강 Q&A", description: "혈압, 간 수치, 체중처럼 검진과 연결되는 질문을 함께 볼 수 있어요." },
    { href: "/family-health-qna/mom", label: "엄마 건강 Q&A", description: "피로, 어지럼, 생리 변화처럼 검진 수치와 연결될 수 있는 질문을 볼 수 있어요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "검진 결과에 따라 약과 영양제를 확인할 때 참고하기 좋아요." },
  ],
};

const qnaCategoryTemplate = {
  health: {
    intro: "아이 건강 Q&A는 열, 기침, 콧물, 구토, 설사처럼 보호자가 자주 걱정하는 증상형 질문을 기준으로 정리했습니다. 병명을 단정하기보다 아이의 컨디션, 수분 섭취, 수면, 호흡 상태처럼 집에서 먼저 볼 수 있는 기준을 중심으로 설명합니다.",
    observationTitle: "이 증상을 볼 때 특히 먼저 확인할 점",
    observationBody: "건강 관련 질문은 숫자 하나나 증상 하나만 보지 않는 것이 중요합니다. 같은 열이라도 아이가 웃고 노는지, 물이나 수유를 받는지, 숨쉬는 모습이 편한지에 따라 의미가 달라질 수 있습니다. 그래서 집에서는 증상이 시작된 시점, 체온 변화, 먹는 양, 소변 횟수, 잠든 시간처럼 진료에 바로 도움이 되는 정보를 함께 기록하는 것이 좋습니다.",
    actionTitle: "집에서 먼저 해볼 수 있는 정리 방법",
    actionBody: "증상이 애매할수록 해열제나 약을 반복해서 쓰기보다 아이가 얼마나 잘 마시고 소변을 보는지, 처짐은 없는지, 호흡이 편한지를 우선 보세요. 병원에 가게 되더라도 보호자가 정리한 기록이 있으면 훨씬 정확하게 상황을 전달할 수 있습니다.",
    helpTitle: "바로 상담을 고려해야 하는 경우",
  },
  growth: {
    intro: "아이 성장 Q&A는 뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 월령별 발달 흐름을 궁금해하는 보호자를 위한 내용입니다. 한 번의 결과보다 최근 몇 주와 몇 달의 흐름을 함께 보는 관점으로 정리했습니다.",
    observationTitle: "이 발달 고민을 볼 때 먼저 확인할 점",
    observationBody: "성장과 발달은 하루 단위로 판단하기보다 흐름으로 보는 것이 중요합니다. 어떤 기술을 아직 못 한다고 해서 바로 문제가 있다고 보기보다, 최근 몇 주 사이에 새로운 시도가 있었는지, 이전 기술은 잘 유지되는지, 놀이와 상호작용이 어떤지까지 같이 봐야 합니다.",
    actionTitle: "보호자가 기록해두면 좋은 내용",
    actionBody: "성장 관련 고민은 하루 이틀 관찰만으로 결론내리기 어렵습니다. 아이가 최근에 새롭게 시도하는 행동, 성공한 순간, 어려워하는 상황, 식사와 수면 변화, 어린이집이나 집에서의 차이를 함께 기록하면 판단에 도움이 됩니다.",
    helpTitle: "발달 상담을 고려하면 좋은 경우",
  },
  behavior: {
    intro: "아이 행동 Q&A는 잠투정, 떼쓰기, 편식, 분리불안, 예민함처럼 반복적으로 부딪히는 일상 고민을 보호자 관점에서 다시 풀었습니다. 문제 행동만 보지 않고 수면, 루틴, 자극, 배고픔, 피로 같은 배경 요인을 함께 살펴보는 방식으로 설명합니다.",
    observationTitle: "이 행동 고민을 볼 때 먼저 확인할 점",
    observationBody: "행동 문제는 버릇 하나로 단순하게 설명되지 않는 경우가 많습니다. 같은 떼쓰기나 거부 행동도 배고픔, 졸림, 과도한 자극, 예고 없는 전환, 보호자 반응 패턴에 따라 더 심해질 수 있습니다. 그래서 언제, 어디서, 누구와 있을 때 자주 나타나는지 맥락을 함께 보는 것이 중요합니다.",
    actionTitle: "상황을 더 악화시키지 않는 대응 팁",
    actionBody: "행동 문제는 그 순간을 빨리 멈추게 하는 것보다 반복 패턴을 줄이는 방향이 더 중요합니다. 미리 예고하기, 짧고 일관된 말 사용하기, 자극을 줄이기, 성공 경험을 먼저 주기 같은 기본 원칙이 쌓이면 갈등 빈도를 줄이는 데 도움이 됩니다.",
    helpTitle: "전문가 도움을 고려해야 하는 경우",
  },
} satisfies Record<QnaCategory, Record<string, string>>;

const familyCategoryTemplate: Record<FamilyHealthQnaCategory, { observationTitle: string; observationBody: string }> = {
  mom: {
    observationTitle: "엄마 건강을 볼 때 함께 확인할 점",
    observationBody: "육아 중 엄마의 몸 상태는 수면 부족, 반복되는 자세, 식사 불규칙, 생리 변화, 스트레스와 함께 흔들릴 수 있습니다. 증상 하나만 보고 넘기기보다 언제부터 시작됐는지, 쉬면 나아지는지, 아이 돌봄 동작과 연결되는지 함께 살펴보세요.",
  },
  dad: {
    observationTitle: "아빠 건강을 볼 때 함께 확인할 점",
    observationBody: "아빠 건강은 피로와 스트레스를 참고 넘기다가 검진 수치나 통증으로 뒤늦게 드러나는 경우가 있습니다. 수면, 음주, 운동량, 체중 변화, 업무 스트레스, 가족력을 함께 기록하면 상담할 때 도움이 됩니다.",
  },
  postpartum: {
    observationTitle: "임신·출산 후 건강을 볼 때 함께 확인할 점",
    observationBody: "임신과 출산 후 회복은 개인차가 큽니다. 출혈, 통증, 수유, 감정 변화, 수면 부족이 함께 영향을 주기 때문에 정상인지 아닌지를 혼자 단정하지 말고 변화 흐름을 기록하는 것이 좋습니다.",
  },
  family: {
    observationTitle: "가족 생활 건강을 볼 때 함께 확인할 점",
    observationBody: "가족 생활 건강은 집안 환경과 함께 보는 것이 중요합니다. 같은 공간에서 지내는 가족에게 비슷한 증상이 있는지, 음식·환기·습도·수면 환경이 바뀌었는지 확인해 보세요.",
  },
  medicine: {
    observationTitle: "약과 영양제를 확인할 때 먼저 볼 점",
    observationBody: "약과 영양제는 제품명보다 성분, 복용 대상, 복용 간격, 중복 여부가 중요합니다. 특히 가족끼리 약을 나누어 먹거나 예전에 남은 약을 다시 쓰는 것은 피하는 편이 안전합니다.",
  },
  checkup: {
    observationTitle: "검진 결과를 볼 때 함께 확인할 점",
    observationBody: "검진 결과는 수치 하나만 보고 판단하기보다 이전 결과, 가족력, 생활 습관, 현재 증상과 함께 보는 것이 좋습니다. 결과지를 보관하고 상담 때 비교하면 변화 흐름을 이해하기 쉽습니다.",
  },
};

function isQnaCategory(value: string): value is QnaCategory {
  return value in qnaCategories;
}

function isFamilyHealthCategory(value: string): value is FamilyHealthQnaCategory {
  return value in familyHealthCategories;
}

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function unique(values: string[]) {
  return Array.from(new Set(values.map(normalize).filter(Boolean)));
}

function addSection(
  sections: PageVisibleSection[],
  section: Omit<PageVisibleSection, "textItems"> & { textItems?: string[] },
) {
  sections.push({ ...section, textItems: unique(section.textItems ?? []) });
}

function asText(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(asText);
  if (value && typeof value === "object") return Object.values(value as Record<string, unknown>).flatMap(asText);
  return [];
}

function getRelatedHealthGuideLinks(item: QnaEntry) {
  const haystack = `${item.question} ${item.topic} ${item.summary} ${item.keywords.join(" ")}`.toLowerCase();
  return healthGuideItems
    .filter((guide) => {
      const candidates = [guide.slug, ...guide.keywords, ...guide.title.split(/[｜·\s]+/)];
      return candidates.some((candidate) => {
        const keyword = candidate.toLowerCase();
        return keyword.length >= 2 && haystack.includes(keyword);
      });
    })
    .slice(0, 4);
}

function buildQnaFaqs(item: QnaEntry, category: QnaCategory) {
  const content = buildQnaLongtailContent(item, category);
  const categoryExtra: Record<QnaCategory, { question: string; answer: string }> = {
    health: {
      question: "건강 Q&A는 어디까지 참고하고 언제 병원을 우선해야 하나요?",
      answer: "아래 내용은 보호자가 집에서 먼저 볼 관찰 포인트를 정리한 일반 참고용 정보입니다. 축 처짐, 탈수 의심, 호흡곤란, 경련, 혈변처럼 경고 신호가 있거나 보호자가 느끼기에 평소와 많이 다르면 온라인 정보보다 진료 상담을 먼저 고려하는 편이 안전합니다.",
    },
    growth: {
      question: "성장 Q&A에서 가장 중요한 것은 평균 수치인가요?",
      answer: "평균 수치만 보는 것보다 아이가 자기 흐름을 이어가고 있는지, 최근 몇 주와 몇 달 사이 새로운 기술이 늘고 있는지, 이전에 하던 기능이 유지되는지가 더 중요합니다. 급격한 후퇴나 보호자가 크게 걱정될 정도의 지연이 느껴지면 상담을 고려하세요.",
    },
    behavior: {
      question: "행동 문제는 훈육만 잘하면 해결되나요?",
      answer: "항상 그렇지는 않습니다. 행동은 기질, 수면 부족, 감각 예민함, 루틴 변화, 보호자 반응 패턴의 영향을 함께 받습니다. 훈육만 강화하기보다 언제 심해지고 언제 덜한지 패턴을 먼저 파악하는 접근이 더 도움이 되는 경우가 많습니다.",
    },
  };

  return [
    { question: item.question, answer: content.oneLineAnswer },
    { question: `${item.topic} 상황에서 집에서 먼저 무엇을 보면 좋나요?`, answer: content.quickSummary.join(" ") },
    ...((item.simpleAction ?? []).length > 0
      ? [{ question: `${item.topic}일 때 바로 해볼 수 있는 기본 대처는 무엇인가요?`, answer: (item.simpleAction ?? []).join(" ") }]
      : []),
    { question: `${item.topic} 상황에서 어떤 기록을 남기면 도움이 되나요?`, answer: content.recordItems.join(" ") },
    { question: `${item.topic} 상황에서 언제 상담을 더 서둘러야 하나요?`, answer: item.caution },
    categoryExtra[category],
  ];
}

function buildFamilyFaqs(item: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory) {
  return [
    { question: item.question, answer: item.summary },
    { question: `${item.topic} 상황에서 집에서 먼저 무엇을 확인하면 좋나요?`, answer: item.checklist.join(" ") },
    { question: `${item.topic} 문제를 상담할 때 어떤 기록이 도움이 되나요?`, answer: item.checklist.at(-1) ?? "증상 시작 시점과 변화 흐름을 적어두면 도움이 됩니다." },
    { question: `${familyHealthCategories[category].label}에서 언제 진료 상담을 먼저 고려해야 하나요?`, answer: item.caution },
  ];
}

function pushLinkSection(
  sections: PageVisibleSection[],
  id: string,
  label: string,
  source: SectionSource,
  location: string,
  title: string,
  description: string,
  links: Array<{ href: string; label: string; description?: string }>,
  actionNeeded: PageVisibleSection["actionNeeded"] = "RELATION_REVIEW",
) {
  addSection(sections, {
    id,
    label,
    source,
    location,
    title,
    description,
    textItems: [title, description, ...links.flatMap((link) => [link.label, link.description ?? ""])],
    links,
    actionNeeded,
  });
}

function detectIssues(sections: PageVisibleSection[]): PageQualityIssue[] {
  const issues: PageQualityIssue[] = [];
  const allTextMap = new Map<string, Array<{ section: PageVisibleSection; text: string }>>();

  const patterns: Array<{
    kind: IssueKind;
    severity: IssueSeverity;
    regex: RegExp;
    suggestion: string;
  }> = [
    {
      kind: "OPERATOR_VIEWPOINT",
      severity: "high",
      regex: /(DB|데이터|콘텐츠|운영자|관리자|SEO|AI|자동 생성|검수|준비중|업데이트 예정|정보를 제공합니다|콘텐츠를 제공합니다)/,
      suggestion: "사용자 화면에는 내부 운영 표현 대신 사용자가 지금 확인할 수 있는 기준과 다음 행동을 적어 주세요.",
    },
    {
      kind: "RISKY_MEDICAL_EXPRESSION",
      severity: "high",
      regex: /(먹어도 됩니다|복용하세요|괜찮습니다|정상입니다|감기입니다|병원에 가지 않아도|하루\s*\d+\s*번|\d+\s*(mg|ml|정|포)\b)/,
      suggestion: "진단·복용량·사용 가능 여부를 단정하지 말고 나이, 체중, 증상 흐름, 전문가 확인 기준으로 바꿔 주세요.",
    },
    {
      kind: "AI_LIKE_GENERIC",
      severity: "medium",
      regex: /(중요합니다|도움이 됩니다|필요합니다|확인하는 것이 좋습니다|살펴보는 것이 좋습니다|관찰하는 것이 중요합니다|판단에 도움이 됩니다)/,
      suggestion: "추상적인 조언을 실제로 볼 수 있는 행동 기준으로 바꿔 주세요. 예: '잘 먹는지, 소변량이 줄었는지, 축 처지는지'.",
    },
  ];

  for (const section of sections) {
    const texts = unique([section.title ?? "", section.description ?? "", ...section.textItems]);
    for (const text of texts) {
      if (text.length < 8) continue;
      const normalized = normalize(text);
      const arr = allTextMap.get(normalized) ?? [];
      arr.push({ section, text: normalized });
      allTextMap.set(normalized, arr);

      for (const pattern of patterns) {
        const matched = normalized.match(pattern.regex);
        if (!matched) continue;
        issues.push({
          sectionId: section.id,
          sectionLabel: section.label,
          source: section.source,
          severity: pattern.severity,
          kind: pattern.kind,
          matchedText: matched[0],
          suggestion: pattern.suggestion,
        });
      }
    }

    if (section.actionNeeded === "TEMPLATE_REVIEW") {
      issues.push({
        sectionId: section.id,
        sectionLabel: section.label,
        source: section.source,
        severity: "medium",
        kind: "MISSING_PAGE_WIDE_REVIEW",
        matchedText: section.title ?? section.label,
        suggestion: "이 카드는 DB 본문이 아니라 페이지 템플릿에서 붙는 카드입니다. batch 완료 전 현재 주제에 맞게 어색하지 않은지 함께 확인해야 합니다.",
      });
    }

    if (section.actionNeeded === "RELATION_REVIEW") {
      issues.push({
        sectionId: section.id,
        sectionLabel: section.label,
        source: section.source,
        severity: "low",
        kind: "LOW_RELEVANCE_GENERIC_CARD",
        matchedText: section.title ?? section.label,
        suggestion: "관련 카드가 현재 글과 실제로 이어지는지 확인하세요. 범용 추천이면 해당 batch에서 연결 문구나 대상 링크를 조정합니다.",
      });
    }
  }

  for (const [text, rows] of allTextMap.entries()) {
    if (rows.length < 2 || text.length < 24) continue;
    for (const row of rows.slice(0, 3)) {
      issues.push({
        sectionId: row.section.id,
        sectionLabel: row.section.label,
        source: row.section.source,
        severity: "low",
        kind: "REPEATED_WITHIN_PAGE",
        matchedText: text,
        suggestion: "같은 문장이 페이지 안에서 반복됩니다. 카드마다 역할이 다르게 보이도록 표현을 분리해 주세요.",
      });
    }
  }

  return issues;
}

function summarize<T extends string>(values: T[]) {
  const map = new Map<T, number>();
  for (const value of values) map.set(value, (map.get(value) ?? 0) + 1);
  return Array.from(map.entries()).map(([key, count]) => ({ key, count }));
}

function makeReport(params: {
  supported: boolean;
  path: string;
  pageType: string;
  category?: string;
  title: string;
  summary?: string;
  pageSourceNote: string;
  sections: PageVisibleSection[];
}): PageQualityReport {
  const issues = detectIssues(params.sections);
  const sourceCounts = summarize(params.sections.map((section) => section.source)).map(({ key, count }) => ({ source: key, count }));
  const actionCounts = summarize(params.sections.map((section) => section.actionNeeded)).map(({ key, count }) => ({ action: key, count }));
  const hasHigh = issues.some((issue) => issue.severity === "high");
  const hasTemplate = params.sections.some((section) => section.actionNeeded === "TEMPLATE_REVIEW" || section.actionNeeded === "RELATION_REVIEW");

  return {
    ...params,
    issues,
    sourceCounts,
    actionCounts,
    recommendedActions: [
      "batch 리라이팅은 Content/ContentSection 본문만 보지 말고 이 보고서의 STATIC_TEMPLATE, GENERATED_LONGTAIL, RELATED_DYNAMIC 카드까지 함께 확인합니다.",
      hasHigh ? "높음 이슈가 있는 카드부터 먼저 고치고, 건강·약·검진 관련 단정 표현은 화면에 남기지 않습니다." : "높음 이슈는 적지만 카드별 반복 표현과 관련성은 화면에서 함께 확인하세요.",
      hasTemplate ? "템플릿 카드가 현재 글과 어색하면 DB update만으로 해결되지 않으므로 상세 페이지 컴포넌트 또는 관련 링크 규칙도 같이 수정합니다." : "현재 표시 카드 대부분이 DB 본문 기반입니다. 페이지 전체 흐름만 마지막으로 확인하면 됩니다.",
    ],
    batchRuleUpdate: [
      "batch 완료 조건을 '본문 리라이팅 완료'가 아니라 '페이지 전체 표시 카드 검수 완료'로 변경합니다.",
      "각 batch export에는 pageQuality.sections를 포함해 어떤 카드가 DB·템플릿·추천 로직에서 오는지 확인합니다.",
      "관련 카드가 범용 문구라면 현재 글 주제와 연결되는 문장으로 고치거나 링크 대상을 조정합니다.",
    ],
  };
}

async function buildQnaReport(path: string, category: QnaCategory, slug: string): Promise<PageQualityReport> {
  const item = await getQnaEntryFromDb(category, slug);
  if (!item) {
    return makeReport({
      supported: true,
      path,
      pageType: "QNA_DETAIL",
      category,
      title: "Q&A를 찾을 수 없습니다",
      pageSourceNote: "DB와 정적 fallback 모두에서 해당 Q&A를 찾지 못했습니다.",
      sections: [],
    });
  }

  const content = buildQnaLongtailContent(item, category);
  const template = qnaCategoryTemplate[category];
  const related = await getRelatedQnaFromDb(category, slug, 6);
  const healthGuides = category === "health" ? getRelatedHealthGuideLinks(item) : [];
  const faqs = buildQnaFaqs(item, category);
  const sections: PageVisibleSection[] = [];

  addSection(sections, {
    id: "metadata",
    label: "검색/공유 메타",
    source: "METADATA",
    location: "generateMetadata",
    title: content.seoTitle,
    description: content.metaDescription,
    textItems: [content.seoTitle, content.metaDescription, ...content.metaKeywords],
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "hero",
    label: "상단 히어로 카드",
    source: "GENERATED_LONGTAIL",
    location: "상단 첫 카드",
    title: content.h1,
    description: content.heroLead,
    textItems: [qnaCategories[category], item.topic, "보호자용 체크 답변", content.oneLineAnswer],
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "update-note",
    label: "작성일/최근 수정일 카드",
    source: "SHARED_COMPONENT",
    location: "ContentUpdateNote",
    title: "작성일·최근 수정일",
    textItems: ["최근 검토 기준에 맞춰 집에서 먼저 볼 관찰 기준, 기록 항목, 함께 보면 좋은 질문을 정리했습니다."],
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "quick-summary",
    label: "핵심 요약 카드",
    source: "GENERATED_LONGTAIL",
    location: "#checkpoints",
    title: "한눈에 보는 체크포인트",
    textItems: content.quickSummary,
    actionNeeded: "REVIEW",
  });
  pushLinkSection(
    sections,
    "related-tools-top",
    "상단 관련 도구 카드",
    "STATIC_TEMPLATE",
    "#related-tools 상단",
    "함께 볼 계산기와 관련 질문",
    "모바일에서 긴 글을 끝까지 읽기 전에 필요한 도구로 바로 이동할 수 있게 연결했습니다. 현재 질문과 함께 보면 판단 흐름을 더 빨리 정리할 수 있어요.",
    qnaRelatedLinks[category],
  );
  addSection(sections, {
    id: "search-intent",
    label: "검색 의도 설명 카드",
    source: "GENERATED_LONGTAIL",
    location: "본문 상단",
    title: content.searchIntentTitle,
    textItems: content.searchIntentParagraphs,
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "category-intro",
    label: "카테고리 공통 안내 카드",
    source: "STATIC_TEMPLATE",
    location: "본문 상단",
    title: "비슷한 고민을 볼 때 참고할 기준",
    textItems: [template.intro],
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "answer",
    label: "질문에 대한 자세한 답변",
    source: "DB_CONTENT",
    location: "ContentSection.answer",
    title: "질문에 대한 자세한 답변",
    textItems: item.answer,
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "situation-cards",
    label: "상황별 카드 3개",
    source: "GENERATED_LONGTAIL",
    location: "situationCards",
    title: "상황별 확인 카드",
    textItems: content.situationCards.flatMap((card) => [card.title, card.description, ...card.points]),
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "checklist",
    label: "먼저 확인할 점 카드",
    source: "DB_CONTENT",
    location: "ContentSection.checklist + category template",
    title: template.observationTitle,
    description: template.observationBody,
    textItems: item.checklist,
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "simple-action",
    label: "집에서 해볼 수 있는 정리 방법 카드",
    source: "DB_CONTENT",
    location: "ContentSection.simpleAction + category template",
    title: template.actionTitle,
    description: template.actionBody,
    textItems: item.simpleAction ?? [],
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "record",
    label: "기록 항목 카드",
    source: "GENERATED_LONGTAIL",
    location: "recordItems",
    title: content.recordTitle,
    description: content.recordDescription,
    textItems: content.recordItems,
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "avoid",
    label: "피해야 할 점 카드",
    source: "GENERATED_LONGTAIL",
    location: "avoidItems",
    title: content.avoidTitle,
    textItems: content.avoidItems,
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "consultation-template",
    label: "상담 설명 준비 카드",
    source: "STATIC_TEMPLATE",
    location: "본문 중간 고정 카드",
    title: "이 내용을 병원이나 상담에서 더 잘 설명하려면",
    textItems: [
      "증상이나 행동 자체보다 언제 시작됐는지, 하루 중 언제 심해지는지, 먹는 양과 잠은 어떤지, 최근 달라진 환경이 있었는지를 함께 정리해두면 설명이 훨씬 쉬워집니다. 특히 같은 문제라도 반복되는 시간대와 패턴이 보이면 원인을 좁히는 데 도움이 됩니다.",
      "짧게라도 기록해두면 보호자 스스로 불안을 줄이는 데도 도움이 됩니다. 오늘은 어땠는지, 어제와 비교해 나아졌는지 악화됐는지, 아이가 힘들어하는 포인트가 무엇인지를 적어두면 다음 판단이 한결 분명해집니다.",
    ],
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "caution",
    label: "상담 신호 카드",
    source: "DB_CONTENT",
    location: "ContentSection.caution",
    title: template.helpTitle,
    textItems: [item.caution],
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "longtail-tags",
    label: "비슷한 상황 검색어 카드",
    source: "GENERATED_LONGTAIL",
    location: "longtailPhrases",
    title: "비슷한 상황에서 함께 볼 주제",
    description: "같은 고민도 아이 상태와 상황에 따라 살펴볼 부분이 조금씩 달라질 수 있습니다. 아래 주제들은 이 질문과 함께 확인하면 도움이 됩니다.",
    textItems: content.longtailPhrases,
    actionNeeded: "REVIEW",
  });
  if (healthGuides.length > 0) {
    pushLinkSection(
      sections,
      "health-guides",
      "증상별 건강 가이드 추천 카드",
      "RELATED_DYNAMIC",
      "healthGuideItems 매칭",
      "증상별 건강 가이드로 더 자세히 보기",
      "이 질문과 연결되는 증상 가이드입니다. 같은 증상이라도 월령, 수유·수면 변화, 위험 신호를 함께 보면 판단이 더 쉬워집니다.",
      healthGuides.map((guide) => ({ href: `/health/${guide.slug}`, label: guide.title, description: guide.summary })),
    );
  }
  pushLinkSection(
    sections,
    "related-tools-bottom",
    "하단 관련 도구 카드",
    "STATIC_TEMPLATE",
    "본문 하단",
    "이어서 보면 좋은 도구와 정보",
    "",
    qnaRelatedLinks[category],
  );
  addSection(sections, {
    id: "faq",
    label: "FAQ 카드",
    source: "GENERATED_LONGTAIL",
    location: "FAQPage + 화면 FAQ",
    title: "자주 묻는 질문",
    textItems: faqs.flatMap((faq) => [faq.question, faq.answer]),
    actionNeeded: "REVIEW",
  });
  pushLinkSection(
    sections,
    "related-qna",
    "같이 이어서 보면 좋은 질문 카드",
    "RELATED_DYNAMIC",
    "getRelatedQnaFromDb",
    "같이 이어서 보면 좋은 질문",
    content.relatedQuestionIntro,
    related.map((entry) => ({ href: `/qna/${category}/${entry.slug}`, label: entry.question, description: entry.topic })),
  );
  pushLinkSection(
    sections,
    "related-content-component",
    "공통 RelatedContent 카드",
    "SHARED_COMPONENT",
    "RelatedContent",
    "관련 정보를 함께 보면 정리가 더 쉬워져요",
    "같은 고민을 여러 방향에서 확인하면 집에서 무엇을 먼저 보고, 어떤 정보를 이어서 보면 좋은지 감을 잡기 쉬워집니다.",
    qnaRelatedLinks[category],
    "TEMPLATE_REVIEW",
  );
  addSection(sections, {
    id: "adfit",
    label: "광고 영역",
    source: "AD_COMPONENT",
    location: "AdFitAd mobileResult",
    title: "광고 영역",
    textItems: [],
    actionNeeded: "NONE",
  });

  return makeReport({
    supported: true,
    path,
    pageType: "QNA_DETAIL",
    category,
    title: item.question,
    summary: item.summary,
    pageSourceNote: "Q&A 상세 페이지는 DB 본문, qna-longtail 생성 카드, 페이지 템플릿 고정 카드, 동적 관련 Q&A/가이드 카드가 함께 표시됩니다.",
    sections,
  });
}

async function buildFamilyHealthReport(path: string, category: FamilyHealthQnaCategory, slug: string): Promise<PageQualityReport> {
  const item = await getFamilyHealthEntryFromDb(category, slug);
  if (!item) {
    return makeReport({
      supported: true,
      path,
      pageType: "FAMILY_HEALTH_QNA_DETAIL",
      category,
      title: "가족건강 Q&A를 찾을 수 없습니다",
      pageSourceNote: "DB와 정적 fallback 모두에서 해당 가족건강 Q&A를 찾지 못했습니다.",
      sections: [],
    });
  }

  const info = familyHealthCategories[category];
  const related = await getRelatedFamilyHealthFromDb(category, slug, 6);
  const faqs = buildFamilyFaqs(item, category);
  const sections: PageVisibleSection[] = [];
  const template = familyCategoryTemplate[category];

  addSection(sections, {
    id: "metadata",
    label: "검색/공유 메타",
    source: "METADATA",
    location: "generateMetadata",
    title: `${item.question} | ${info.shortLabel} 가족건강 Q&A`,
    description: `${item.summary.slice(0, 135)}...`,
    textItems: item.keywords,
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "hero",
    label: "상단 히어로 카드",
    source: "DB_CONTENT",
    location: "상단 첫 카드",
    title: item.question,
    description: item.summary,
    textItems: [info.label, item.topic, "가족 건강 참고 답변", item.checklist[0] ?? ""],
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "update-note",
    label: "작성일/최근 수정일 카드",
    source: "SHARED_COMPONENT",
    location: "ContentUpdateNote",
    title: "작성일·최근 수정일",
    textItems: ["가족이 집에서 먼저 확인할 수 있는 관찰 기준, 기록 항목, 상담이 필요한 신호를 중심으로 정리했습니다."],
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "medical-disclaimer",
    label: "의료 정보 안내 카드",
    source: "SHARED_COMPONENT",
    location: "MedicalDisclaimer",
    title: "의료 정보 안내",
    textItems: ["의료 안내 컴포넌트 문구는 별도 공통 컴포넌트에서 표시됩니다."],
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "checkpoints",
    label: "핵심 요약 카드",
    source: "DB_CONTENT",
    location: "ContentSection.checklist",
    title: "지금 먼저 확인하면 좋은 내용",
    textItems: item.checklist,
    actionNeeded: "REWRITE",
  });
  pushLinkSection(
    sections,
    "related-tools-top",
    "상단 관련 페이지 카드",
    "STATIC_TEMPLATE",
    "본문 상단",
    "지금 같이 확인하면 좋은 페이지",
    "가족 건강 질문은 증상, 약, 검진, 아이 건강 정보가 함께 연결되는 경우가 많습니다. 필요한 페이지를 먼저 열어두면 상황을 더 빠르게 정리할 수 있어요.",
    familyRelatedLinks[category],
  );
  addSection(sections, {
    id: "answer",
    label: "질문에 대한 자세한 답변",
    source: "DB_CONTENT",
    location: "ContentSection.answer",
    title: "질문에 대한 자세한 답변",
    textItems: item.answer,
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "category-observation",
    label: "카테고리 공통 관찰 카드",
    source: "STATIC_TEMPLATE",
    location: "categoryObservationBody",
    title: template.observationTitle,
    textItems: [template.observationBody],
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "simple-action",
    label: "집에서 먼저 해볼 수 있는 정리 방법 카드",
    source: "DB_CONTENT",
    location: "ContentSection.simpleAction",
    title: "집에서 먼저 해볼 수 있는 정리 방법",
    textItems: item.simpleAction,
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "record-template",
    label: "병원·약국 기록 카드",
    source: "STATIC_TEMPLATE",
    location: "본문 중간 고정 카드",
    title: "병원이나 약국에서 설명하기 쉽게 기록할 점",
    description: "같은 증상이라도 시작 시점과 반복되는 상황을 알고 있으면 상담이 훨씬 쉬워집니다. 아래 항목을 메모해 두면 가족의 상태를 더 정확하게 전달하는 데 도움이 됩니다.",
    textItems: item.checklist,
    actionNeeded: "TEMPLATE_REVIEW",
  });
  addSection(sections, {
    id: "caution",
    label: "상담 신호 카드",
    source: "DB_CONTENT",
    location: "ContentSection.caution",
    title: "상담을 더 서둘러야 하는 신호",
    textItems: [item.caution],
    actionNeeded: "REWRITE",
  });
  addSection(sections, {
    id: "keyword-tags",
    label: "비슷한 검색어 카드",
    source: "DB_CONTENT",
    location: "keywords",
    title: "비슷한 상황에서 함께 떠올릴 주제",
    description: "건강 질문은 한 가지 표현으로만 검색되지 않는 경우가 많아요. 아래 표현들은 같은 상황을 다른 말로 찾을 때 도움이 됩니다.",
    textItems: item.keywords.slice(0, 12),
    actionNeeded: "REVIEW",
  });
  addSection(sections, {
    id: "faq",
    label: "FAQ 카드",
    source: "GENERATED_LONGTAIL",
    location: "FAQPage + 화면 FAQ",
    title: "자주 묻는 질문",
    textItems: faqs.flatMap((faq) => [faq.question, faq.answer]),
    actionNeeded: "REVIEW",
  });
  pushLinkSection(
    sections,
    "related-family-qna",
    "같이 이어서 보면 좋은 질문 카드",
    "RELATED_DYNAMIC",
    "getRelatedFamilyHealthFromDb",
    "같이 이어서 보면 좋은 질문",
    "같은 증상도 가족 구성원과 생활 상황에 따라 살펴볼 부분이 달라질 수 있어요. 아래 질문을 함께 보면 현재 상황을 더 넓게 정리할 수 있습니다.",
    related.map((entry) => ({ href: `/family-health-qna/${category}/${entry.slug}`, label: entry.question, description: entry.topic })),
  );
  pushLinkSection(
    sections,
    "related-tools-bottom",
    "하단 관련 도구와 정보 카드",
    "STATIC_TEMPLATE",
    "본문 하단",
    "같이 보면 좋은 도구와 정보",
    "",
    familyRelatedLinks[category],
  );
  pushLinkSection(
    sections,
    "related-content-component",
    "공통 RelatedContent 카드",
    "SHARED_COMPONENT",
    "RelatedContent",
    "관련 정보를 함께 보면 정리가 더 쉬워져요",
    "건강 고민은 증상, 복용 중인 약, 가족 구성원, 검진 결과가 함께 연결될 수 있어요. 지금 상황과 가까운 정보를 이어서 확인해 보세요.",
    familyRelatedLinks[category],
    "TEMPLATE_REVIEW",
  );
  addSection(sections, {
    id: "adfit",
    label: "광고 영역",
    source: "AD_COMPONENT",
    location: "AdFitAd mobileResult",
    title: "광고 영역",
    textItems: [],
    actionNeeded: "NONE",
  });

  return makeReport({
    supported: true,
    path,
    pageType: "FAMILY_HEALTH_QNA_DETAIL",
    category,
    title: item.question,
    summary: item.summary,
    pageSourceNote: "가족건강 Q&A 상세 페이지는 DB 본문, 카테고리 고정 카드, 공통 의료 안내, 관련 질문 추천 카드가 함께 표시됩니다.",
    sections,
  });
}

export async function getPageQualityReport(path: string): Promise<PageQualityReport> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const qnaMatch = normalizedPath.match(/^\/qna\/([^/]+)\/([^/]+)$/);
  if (qnaMatch && isQnaCategory(qnaMatch[1])) {
    return buildQnaReport(normalizedPath, qnaMatch[1], qnaMatch[2]);
  }

  const familyMatch = normalizedPath.match(/^\/family-health-qna\/([^/]+)\/([^/]+)$/);
  if (familyMatch && isFamilyHealthCategory(familyMatch[1])) {
    return buildFamilyHealthReport(normalizedPath, familyMatch[1], familyMatch[2]);
  }

  return makeReport({
    supported: false,
    path: normalizedPath,
    pageType: "UNSUPPORTED",
    title: "아직 상세 카드 점검을 지원하지 않는 페이지입니다",
    pageSourceNote: "현재 상세 카드 점검은 /qna/[category]/[slug], /family-health-qna/[category]/[slug]부터 지원합니다. 월령별/건강 가이드/정적 페이지는 해당 batch 차례에 확장합니다.",
    sections: [],
  });
}
