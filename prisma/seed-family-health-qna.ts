import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

import {
  familyHealthCategories,
  familyHealthQnaData,
  type FamilyHealthQnaCategory,
  type FamilyHealthQnaEntry,
} from "../data/familyHealthQna";

const isDryRun = process.argv.includes("--dry-run");

const categoryOrder: Record<FamilyHealthQnaCategory, number> = {
  mom: 1,
  dad: 2,
  postpartum: 3,
  family: 4,
  medicine: 5,
  checkup: 6,
};

const categorySummaryLead: Record<FamilyHealthQnaCategory, string[]> = {
  mom: [
    "육아와 집안일을 버티다 보면 내 몸의 신호가 뒤로 밀리기 쉽습니다.",
    "엄마의 컨디션은 수면, 식사, 통증, 감정 변화가 함께 흔들릴 때가 많습니다.",
    "몸이 불편해도 계속 참게 되는 상황이라면 먼저 변화를 작게 나누어 보는 것이 좋습니다.",
  ],
  dad: [
    "일과 육아가 겹치면 피로와 통증을 참고 넘기기 쉽습니다.",
    "아빠 건강은 수면, 스트레스, 음주, 체중 변화와 함께 볼 때 더 현실적으로 정리됩니다.",
    "반복되는 불편함은 한 번의 증상보다 생활 흐름 속에서 확인하는 것이 도움이 됩니다.",
  ],
  postpartum: [
    "임신 중이거나 출산 후라면 작은 변화도 혼자 정상이라고 단정하기 어렵습니다.",
    "출산 후 회복은 통증, 출혈, 수유, 수면 부족, 감정 변화가 함께 영향을 줄 수 있습니다.",
    "회복 중 불안한 증상은 참기보다 기록하고 상담 기준을 함께 확인하는 편이 안전합니다.",
  ],
  family: [
    "가족 생활 건강은 한 사람의 증상이 집안 전체의 생활 리듬과 연결될 때가 많습니다.",
    "감기 기운, 장염, 피부 변화처럼 흔한 증상도 가족 구성원과 환경을 함께 보면 정리하기 쉽습니다.",
    "집에서 같은 증상이 반복되면 시작 시점과 함께 먹은 음식, 생활 환경을 같이 확인해 보세요.",
  ],
  medicine: [
    "집에 있는 약이나 영양제를 바로 쓰기 전에는 제품명보다 성분과 사용 대상을 먼저 확인해야 합니다.",
    "익숙한 제품이라도 나이, 체중, 임신·수유 여부, 기존 질환, 함께 먹는 약에 따라 확인할 점이 달라집니다.",
    "남은 약이나 가족이 쓰던 제품은 같은 증상처럼 보여도 그대로 나누어 쓰지 않는 편이 안전합니다.",
  ],
  checkup: [
    "검진 결과는 숫자 하나만 보고 판단하기보다 이전 결과와 생활 습관을 함께 보는 것이 좋습니다.",
    "재검 안내나 수치 변화가 보이면 결과지를 기준으로 무엇을 물어볼지 정리해 두면 상담이 쉬워집니다.",
    "검진 수치는 가족력, 현재 증상, 복용 중인 약과 함께 볼 때 더 정확하게 이해할 수 있습니다.",
  ],
};

const baseReviewStatus: Record<FamilyHealthQnaCategory, string> = {
  mom: "NEEDS_HEALTH_REVIEW",
  dad: "NEEDS_HEALTH_REVIEW",
  postpartum: "NEEDS_POSTPARTUM_REVIEW",
  family: "NEEDS_HEALTH_REVIEW",
  medicine: "NEEDS_MEDICINE_REVIEW",
  checkup: "NEEDS_SOURCE_CHECK",
};

const medicineHighRiskTerms = [
  "어린이",
  "해열",
  "감기약",
  "진통",
  "피임약",
  "금연보조제",
  "우황청심원",
  "한방",
  "코막힘",
  "변비",
  "관장",
  "점안액",
  "탈모",
  "색소침착",
];

const postpartumHighRiskTerms = [
  "출혈",
  "복통",
  "고열",
  "분비물",
  "우울",
  "불안",
  "가슴 통증",
  "숨참",
  "수유",
  "어지럼",
];

const checkupHighRiskTerms = ["재검", "정밀검사", "혈압", "혈당", "간 수치", "콜레스테롤", "소변", "심전도", "암검진"];

function normalizeText(value: string): string {
  return value
    .replace(/[“”]/g, "\"")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .trim();
}

function splitSentences(value: string): string[] {
  const normalized = normalizeText(value);
  const matches = normalized.match(/[^.!?。]+[.!?。]?/g) ?? [normalized];
  return matches.map((sentence) => sentence.trim()).filter(Boolean);
}

function compactKey(value: string): string {
  return value.replace(/[\s,.!?\"'·:;()\[\]{}]/g, "");
}

function uniqueTextItems(items: string[], max = items.length): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const raw of items) {
    const item = normalizeText(raw);
    const key = compactKey(item);
    if (!item || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
    if (result.length >= max) break;
  }

  return result;
}

function hasAny(value: string, terms: string[]): boolean {
  return terms.some((term) => value.includes(term));
}

function sanitizeSensitiveText(value: string, category: FamilyHealthQnaCategory): string {
  let text = normalizeText(value)
    .replace(/괜찮아요/g, "상황에 따라 확인이 필요합니다")
    .replace(/괜찮습니다/g, "상황에 따라 확인이 필요합니다")
    .replace(/먹어도 됩니다/g, "복용 가능 여부를 확인해야 합니다")
    .replace(/사용해도 됩니다/g, "사용 가능 여부를 확인해야 합니다")
    .replace(/복용하면 됩니다/g, "복용 전 기준을 확인해야 합니다")
    .replace(/바르면 됩니다/g, "사용 전 기준을 확인해야 합니다")
    .replace(/정상입니다/g, "개인차가 있어 단정하기 어렵습니다");

  if (category === "medicine") {
    text = text
      .replace(/복용량을 늘리지 않는 것이 안전합니다/g, "정해진 기준보다 많이 쓰지 말고 필요하면 약사나 의료진에게 확인해 주세요")
      .replace(/복용을 멈추고/g, "추가 사용은 피하고")
      .replace(/중단하고/g, "추가 사용은 피하고");
  }

  if (category === "postpartum") {
    text = text
      .replace(/조금 쉬면/g, "휴식 후에도")
      .replace(/흔한 증상/g, "나타날 수 있는 변화");
  }

  if (category === "checkup") {
    text = text
      .replace(/수치가 높으면/g, "수치가 높게 나왔다면")
      .replace(/수치가 낮으면/g, "수치가 낮게 나왔다면")
      .replace(/의미합니다/g, "의미할 수 있어 의료진 설명이 필요합니다");
  }

  return text;
}

function uniqueSentences(value: string, maxSentences = 3): string {
  return uniqueTextItems(splitSentences(value), maxSentences).join(" ");
}

function getReviewStatus(category: FamilyHealthQnaCategory, entry: FamilyHealthQnaEntry): string {
  const text = `${entry.question} ${entry.topic} ${entry.summary} ${entry.keywords.join(" ")}`;
  if (category === "medicine") {
    if (hasAny(text, ["어린이", "아이", "임산부", "수유부", "피임약", "금연보조제"])) {
      return "NEEDS_MEDICINE_HIGH_RISK_REVIEW";
    }
    if (hasAny(text, medicineHighRiskTerms)) return "NEEDS_MEDICINE_REVIEW";
  }
  if (category === "postpartum" && hasAny(text, postpartumHighRiskTerms)) {
    return "NEEDS_POSTPARTUM_HIGH_RISK_REVIEW";
  }
  if (category === "checkup" && hasAny(text, checkupHighRiskTerms)) {
    return "NEEDS_CHECKUP_SOURCE_REVIEW";
  }
  return baseReviewStatus[category];
}

function getMedicineTopicSafety(entry: FamilyHealthQnaEntry): string[] {
  const text = `${entry.question} ${entry.topic} ${entry.keywords.join(" ")}`;
  const items: string[] = [];

  if (hasAny(text, ["해열", "타이레놀", "아세트아미노펜", "감기약", "어린이"])) {
    items.push("해열진통제나 감기약은 같은 해열·진통 성분이 겹칠 수 있으니 성분명과 마지막 복용 시간을 먼저 확인하세요.");
  }
  if (hasAny(text, ["진통소염제", "탁센", "이지엔", "게보린", "파스"])) {
    items.push("진통소염제 계열은 위장 불편, 신장 질환, 혈압약·항응고제 복용 여부에 따라 확인할 점이 달라질 수 있습니다.");
  }
  if (hasAny(text, ["감기약", "콜대원", "판콜", "판피린", "테라플루", "모드콜"])) {
    items.push("감기약은 졸림, 두근거림, 항히스타민·해열진통 성분 중복 여부를 함께 확인해야 합니다.");
  }
  if (hasAny(text, ["어린이", "챔프", "텐텐", "키즈"])) {
    items.push("아이에게 쓰는 제품은 나이와 체중 기준이 중요하므로 제품 설명서와 약사 확인을 우선하세요.");
  }
  if (hasAny(text, ["임산부", "수유부", "피임약", "머시론", "임신"] )) {
    items.push("임신 가능성, 임신 중, 수유 중이라면 제품을 임의로 판단하지 말고 의료진이나 약사에게 먼저 확인하세요.");
  }
  if (hasAny(text, ["점안", "안약", "눈", "렌즈"])) {
    items.push("점안액은 개봉일, 렌즈 착용 여부, 눈 통증·시야 흐림·심한 충혈 여부를 먼저 확인하세요.");
  }
  if (hasAny(text, ["코막힘", "비염", "스프레이", "나잘"])) {
    items.push("코 스프레이는 사용 기간과 횟수를 확인하고, 반복 사용 중 코피나 심한 두통이 있으면 상담이 필요합니다.");
  }
  if (hasAny(text, ["피부", "연고", "크림", "겔", "흉터", "색소", "여드름", "두피"])) {
    items.push("피부 외용제는 바르는 부위, 상처·진물·물집 여부, 임신·수유 여부를 함께 확인하세요.");
  }
  if (hasAny(text, ["변비", "관장", "둘코락스", "메이킨", "크린클"])) {
    items.push("변비약이나 관장액은 복통, 구토, 혈변, 탈수 의심이 있으면 반복 사용보다 진료 상담이 먼저일 수 있습니다.");
  }
  if (hasAny(text, ["영양제", "비타민", "콘드로이틴", "마그", "아로나민", "비맥스"])) {
    items.push("영양제는 이미 먹는 종합비타민, 건강기능식품, 처방약과 성분이나 함량이 겹치지 않는지 확인하세요.");
  }

  return uniqueTextItems(items, 4);
}

function polishSummary(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory, index: number): string {
  const leadCandidates = categorySummaryLead[category];
  const lead = leadCandidates[index % leadCandidates.length];
  const cleaned = sanitizeSensitiveText(entry.summary, category)
    .replace(/일 때 자주 떠오르는 질문이에요\.?/g, "상황에서 많이 확인하는 질문입니다.")
    .replace(/시간이 지나도 불편함이 계속되거나 평소와 다른 신호가 보이면/g, "불편함이 이어지거나 평소와 다른 신호가 보이면")
    .replace(/병원·약국 상담을 고려해 보세요\.?/g, "병원이나 약국 상담 기준을 확인해 보세요.");

  if (category === "medicine") {
    const topicSafety = getMedicineTopicSafety(entry).at(0);
    return uniqueTextItems([
      lead,
      `${entry.topic} 제품은 복용 가능 여부나 용량을 이 글만 보고 정하기보다 제품 설명서와 성분표를 먼저 확인해야 합니다.`,
      topicSafety ?? "아이, 임산부, 수유부, 고령자, 만성질환자는 같은 제품이라도 확인 기준이 달라질 수 있습니다.",
    ], 3).join(" ").slice(0, 360);
  }

  if (category === "postpartum") {
    return uniqueTextItems([
      lead,
      `${entry.topic} 관련 변화는 출산 시기, 출혈·통증·열, 수유 상태, 감정 변화를 함께 봐야 합니다.`,
      "불안하거나 평소와 다른 신호가 있으면 혼자 참기보다 진료 상담 기준을 먼저 확인해 보세요.",
    ], 3).join(" ").slice(0, 360);
  }

  if (category === "checkup") {
    return uniqueTextItems([
      lead,
      `${entry.topic} 결과는 한 번의 수치만으로 판단하기 어렵고 이전 결과, 현재 증상, 복용 중인 약과 함께 봐야 합니다.`,
      "재검이나 정밀검사 안내가 있으면 결과지를 들고 의료진에게 확인할 질문을 정리해 두는 것이 좋습니다.",
    ], 3).join(" ").slice(0, 360);
  }

  const sentences = uniqueTextItems([lead, ...splitSentences(cleaned)], 3);
  return sentences.join(" ").slice(0, 360);
}

function polishAnswer(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory, index: number): string[] {
  const info = familyHealthCategories[category];
  const base = entry.answer.map((paragraph) =>
    sanitizeSensitiveText(paragraph, category)
      .replace(/라는 생각이 들 때는 먼저/g, "라는 생각이 들면 먼저")
      .replace(/가족 건강 증상은 한 가지만 따로 보기보다/g, "가족 건강은 증상 하나만 따로 보기보다")
      .replace(/이건 병을 스스로 판단하려는 게 아니라,/g, "이 과정은 진단을 대신하려는 것이 아니라")
      .replace(/진료실이나 약국에서 같은 설명을 두 번 하지 않아도 돼요\.?/g, "진료실이나 약국에서 상황을 더 정확히 설명하는 데 도움이 됩니다."),
  );

  if (category === "medicine") {
    return uniqueTextItems([
      "이 답변은 특정 제품을 복용해도 된다는 판단이나 용량 안내가 아니라, 사용 전 확인해야 할 기준을 정리한 내용입니다.",
      `${entry.question}라고 고민된다면 제품명만 보지 말고 성분명, 함량, 제형, 사용 대상, 유통기한을 먼저 확인하세요.`,
      ...getMedicineTopicSafety(entry),
      "아이, 임산부, 수유부, 고령자, 간·신장 질환자, 매일 복용하는 약이 있는 가족은 같은 제품이라도 약사나 의료진에게 확인하는 편이 안전합니다.",
      "약국이나 병원에 문의할 때는 제품 사진, 성분표, 마지막 복용 시간, 함께 먹은 약과 영양제를 같이 보여주면 설명이 쉬워집니다.",
    ], 6);
  }

  if (category === "postpartum") {
    return uniqueTextItems([
      "임신 중이거나 출산 후라면 몸의 변화가 빠르게 달라질 수 있어 혼자 정상 여부를 단정하지 않는 것이 좋습니다.",
      `${entry.question}라는 걱정이 있다면 증상 시작 시점, 출산 후 경과 기간, 출혈량, 열, 통증 위치, 수유 상태를 같이 기록해 보세요.`,
      "기분 저하나 불안이 함께 있다면 의지가 약해서가 아니라 회복 과정에서 도움을 받아야 하는 신호일 수 있습니다.",
      ...base,
      "몸이 보내는 신호가 평소와 다르거나 가족이 보기에도 상태가 급격히 나빠졌다면 기록을 마칠 때까지 기다리지 말고 진료 상담을 먼저 권합니다.",
    ], 6);
  }

  if (category === "checkup") {
    return uniqueTextItems([
      "검진 결과는 수치 하나로 혼자 결론 내리기보다 이전 결과와 현재 증상, 가족력, 복용 중인 약을 함께 보는 것이 좋습니다.",
      `${entry.question}라는 걱정이 있다면 결과지의 판정 문구, 기준 범위, 재검 안내, 작년 결과와 달라진 부분을 먼저 표시해 두세요.`,
      "인터넷에서 수치를 해석하기보다 진료실에서 '왜 재검이 필요한지', '언제 다시 확인할지', '생활에서 바꿀 점이 있는지'를 질문하는 쪽이 안전합니다.",
      ...base,
      "가슴 통증, 숨참, 심한 어지럼, 갑작스러운 마비나 말 어눌함처럼 증상이 함께 있으면 검진 상담 예약을 기다리지 말고 즉시 상담이 필요할 수 있습니다.",
    ], 6);
  }

  const firstLineByCategory: Record<FamilyHealthQnaCategory, string> = {
    mom: "아이를 돌보는 동안 내 몸의 불편함은 뒤로 밀리기 쉽지만, 반복되는 변화는 기록해 두는 편이 좋습니다.",
    dad: "일과 육아를 함께하다 보면 피로와 통증을 참고 넘기기 쉬우므로 생활 흐름과 함께 확인해 보세요.",
    postpartum: "임신 중이거나 출산 후라면 같은 증상도 회복 단계와 수유, 출혈, 수면 상태를 함께 봐야 합니다.",
    family: "가족이 함께 생활하는 공간에서는 증상 시작 시점과 주변 가족의 상태를 같이 확인하는 것이 도움이 됩니다.",
    medicine: "약이나 영양제는 제품명보다 성분, 복용 대상, 중복 여부를 먼저 확인하는 것이 안전합니다.",
    checkup: "검진 결과는 현재 증상, 이전 수치, 생활 습관, 가족력과 함께 볼 때 더 정확하게 이해할 수 있습니다.",
  };

  return uniqueTextItems([
    firstLineByCategory[category],
    ...base,
    `${info.shortLabel} 관련 질문은 집에서 결론을 내리기보다 현재 상태를 정리하고 필요한 경우 의료진이나 약사에게 확인하는 방향으로 보는 것이 좋습니다.`,
  ], 5);
}

function polishChecklist(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory): string[] {
  if (category === "medicine") {
    return uniqueTextItems([
      `${entry.topic} 제품의 성분명, 함량, 제형, 사용 대상, 유통기한을 확인하세요.`,
      "현재 함께 먹는 약, 감기약, 진통제, 영양제, 한약과 성분이나 작용이 겹치지 않는지 확인하세요.",
      "아이, 임산부, 수유부, 고령자, 만성질환자, 간·신장 질환자는 사용 전 상담이 필요한지 확인하세요.",
      ...getMedicineTopicSafety(entry),
      "복용하거나 사용한 시간과 이후 나타난 변화를 메모해 두세요.",
      "확신이 없으면 제품 사진과 설명서를 들고 약국이나 병원에 문의하세요.",
    ], 7);
  }

  if (category === "postpartum") {
    return uniqueTextItems([
      "증상이 시작된 시점과 출산 후 며칠 또는 몇 주가 지났는지 적어두세요.",
      "출혈량, 냄새, 덩어리 여부, 열, 오한, 복통, 어지럼을 함께 확인하세요.",
      "수유 중이라면 유방 통증, 붉어짐, 몸살 느낌, 아이 수유 상태를 같이 기록하세요.",
      "기분 저하, 불안, 눈물, 잠을 못 자는 정도, 자신이나 아이를 해칠 생각이 드는지 확인하세요.",
      ...entry.checklist,
      "가족에게 현재 상태를 공유하고 혼자 아이를 돌보는 시간을 줄일 방법을 정리해 보세요.",
    ], 7);
  }

  if (category === "checkup") {
    return uniqueTextItems([
      "검진 결과지의 판정 문구, 기준 범위, 재검·정밀검사 안내가 있는지 확인하세요.",
      "이전 검진 결과와 비교해 갑자기 달라진 수치가 있는지 표시해 두세요.",
      "현재 증상, 복용 중인 약, 영양제, 가족력, 음주·흡연·수면 패턴을 같이 정리하세요.",
      "의료진에게 물어볼 질문을 결과지 여백이나 휴대폰 메모에 미리 적어두세요.",
      ...entry.checklist,
      "재검 안내가 있으면 검사를 미루지 않도록 가능한 일정부터 확인하세요.",
    ], 7);
  }

  return uniqueTextItems([
    ...entry.checklist.map((item) => sanitizeSensitiveText(item, category)),
    "증상이 좋아지는지, 비슷한 정도로 반복되는지, 점점 심해지는지 하루 단위로 비교해 보세요.",
    "최근 먹은 음식, 복용한 약, 수면 부족, 스트레스, 외출이나 가족 내 증상 여부를 함께 확인해 보세요.",
  ], 6);
}

function polishSimpleAction(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory): string[] {
  if (category === "medicine") {
    return uniqueTextItems([
      "제품 앞면보다 뒷면의 성분명과 사용 대상, 주의사항을 먼저 사진으로 남겨두세요.",
      "같이 먹은 약과 영양제를 한 줄로 적고, 중복이 의심되면 추가 사용 전 약국에 문의하세요.",
      "아이, 임산부, 수유부, 고령자에게 쓰려는 경우에는 제품을 바로 나누어 쓰지 말고 상담 여부를 먼저 확인하세요.",
      "복용량을 헷갈렸거나 평소와 다른 반응이 있으면 임의로 더 먹지 말고 제품을 들고 상담하세요.",
    ], 4);
  }

  if (category === "postpartum") {
    return uniqueTextItems([
      "증상과 함께 출산 후 경과 기간, 체온, 출혈량, 통증 위치를 휴대폰 메모에 남겨두세요.",
      "혼자 버티기보다 배우자나 가족에게 구체적으로 필요한 도움을 말해 아이 돌봄 시간을 나누세요.",
      "우울감이나 불안이 심하면 가까운 사람에게 바로 알리고 산부인과, 정신건강 상담, 응급 상담 경로를 확인하세요.",
      "출혈, 고열, 심한 복통, 숨참처럼 위험 신호가 보이면 기록보다 진료 상담을 먼저 하세요.",
    ], 4);
  }

  if (category === "checkup") {
    return uniqueTextItems([
      "검진 결과지를 사진으로 저장하고 작년 결과가 있다면 같은 항목끼리 표시해 보세요.",
      "재검·정밀검사 안내 문구가 있으면 검사명, 예약 가능일, 준비사항을 먼저 확인하세요.",
      "진료실에서 물어볼 질문을 '왜 달라졌는지, 언제 다시 볼지, 생활에서 바꿀 점' 순서로 적어두세요.",
      "증상이 함께 있으면 검진 결과 상담을 기다리지 말고 필요한 진료과 문의를 먼저 고려하세요.",
    ], 4);
  }

  return uniqueTextItems([
    ...entry.simpleAction.map((item) => sanitizeSensitiveText(item, category)),
    "상담이 필요할 수 있는 신호가 보이면 증상 기록보다 먼저 병원이나 약국에 문의하세요.",
  ], 4);
}

function polishCaution(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory): string {
  if (category === "medicine") {
    return uniqueTextItems([
      "복용량을 헷갈렸거나 정해진 기준보다 많이 사용한 것 같다면 추가 사용을 멈추고 약사나 의료진에게 확인해 주세요.",
      "두드러기, 얼굴·입술 부기, 호흡곤란, 심한 어지럼, 의식 변화가 있으면 즉시 의료 상담이 필요할 수 있습니다.",
      "아이, 임산부, 수유부, 고령자, 간·신장 질환자, 여러 약을 함께 복용 중인 가족은 제품 사용 전 전문가 확인이 우선입니다.",
      ...splitSentences(sanitizeSensitiveText(entry.caution, category)),
    ], 4).join(" ");
  }

  if (category === "postpartum") {
    return uniqueTextItems([
      "출산 후 많은 출혈, 고열, 심한 복통, 악취 나는 분비물, 숨참, 가슴 통증, 실신 느낌이 있으면 지체하지 말고 진료 상담을 권합니다.",
      "자신이나 아이를 해칠 생각이 들거나 극심한 불안·우울감으로 일상 유지가 어렵다면 즉시 주변에 알리고 전문 상담이나 진료를 받아야 합니다.",
      ...splitSentences(sanitizeSensitiveText(entry.caution, category)),
    ], 4).join(" ");
  }

  if (category === "checkup") {
    return uniqueTextItems([
      "검진 결과에 재검이나 정밀검사 안내가 있으면 결과지를 가지고 의료진과 확인하는 것이 좋습니다.",
      "가슴 통증, 숨참, 갑작스러운 마비나 말 어눌함, 심한 두통, 실신 느낌처럼 증상이 함께 있으면 검진 결과 상담을 기다리지 말고 즉시 상담을 권합니다.",
      ...splitSentences(sanitizeSensitiveText(entry.caution, category)),
    ], 4).join(" ");
  }

  const extra = "호흡곤란, 의식 저하, 갑작스러운 심한 통증, 반복 구토처럼 빠르게 악화될 수 있는 신호가 있으면 바로 상담을 권합니다.";
  return uniqueTextItems([
    ...splitSentences(sanitizeSensitiveText(entry.caution, category)),
    extra,
  ], 4).join(" ");
}

function buildMetaTitle(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory): string {
  const label = familyHealthCategories[category].shortLabel;
  const suffix = category === "medicine" ? "복용 전 확인" : category === "postpartum" ? "산후 건강" : category === "checkup" ? "검진 결과" : "가족건강 Q&A";
  const title = `${entry.question} | ${label} ${suffix}`;
  return title.length > 58 ? `${entry.question.slice(0, 38)} | ${label} Q&A` : title;
}

function buildMetaDescription(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory): string {
  if (category === "medicine") {
    return `${entry.question} 성분 중복, 사용 대상, 아이·임산부·수유부 확인점과 약국 상담 신호를 정리했습니다.`.slice(0, 155);
  }
  if (category === "postpartum") {
    return `${entry.question} 출산 후 회복 과정에서 확인할 증상, 기록할 내용, 진료 상담이 필요한 신호를 정리했습니다.`.slice(0, 155);
  }
  if (category === "checkup") {
    return `${entry.question} 검진 결과지를 볼 때 확인할 항목, 이전 결과 비교, 의료진에게 물어볼 질문을 정리했습니다.`.slice(0, 155);
  }
  const label = familyHealthCategories[category].shortLabel;
  const text = `${label} 상황에서 ${entry.topic} 관련해 집에서 먼저 확인할 점, 기록할 내용, 병원·약국 상담이 필요한 신호를 사용자 관점으로 정리했습니다.`;
  return text.slice(0, 155);
}

function buildEditorMemo(category: FamilyHealthQnaCategory, entry: FamilyHealthQnaEntry): string {
  if (category === "medicine") {
    return "민감 카테고리 1차 개선: 복용 가능 여부·용량 단정 금지, 성분 중복·사용 대상·약국 상담 신호 중심으로 재구성됨.";
  }
  if (category === "postpartum") {
    return "민감 카테고리 1차 개선: 산후 회복 개인차, 출혈·고열·심한 통증·우울감 등 상담 신호 중심으로 재구성됨.";
  }
  if (category === "checkup") {
    return "민감 카테고리 1차 개선: 검진 수치 해석 단정 금지, 결과지 비교·재검 안내·의료진 질문 중심으로 재구성됨.";
  }
  return `${entry.topic} 관련 가족건강 Q&A 1차 DB seed 정리 완료.`;
}

function buildDuplicateMemo(category: FamilyHealthQnaCategory): string | null {
  if (["medicine", "postpartum", "checkup"].includes(category)) {
    return "seed 과정에서 반복형 AI 문장 일부 제거 및 사용자 상황 중심 문장으로 1차 재구성.";
  }
  return null;
}

function buildSourceRows(contentId: string, category: FamilyHealthQnaCategory) {
  const rowsByCategory: Partial<Record<FamilyHealthQnaCategory, Array<{ name: string; description: string }>>> = {
    medicine: [
      { name: "제품 포장·첨부문서 확인", description: "제품별 성분, 사용 대상, 주의사항은 실제 포장과 첨부문서를 우선 확인해야 합니다." },
      { name: "약사·의료진 상담 권장", description: "아이, 임산부, 수유부, 고령자, 만성질환자, 여러 약을 함께 쓰는 경우 전문가 확인이 필요할 수 있습니다." },
    ],
    postpartum: [
      { name: "산부인과·분만 의료기관 상담 권장", description: "출산 후 출혈, 고열, 심한 통증, 우울감 등은 개인차가 커 의료진 확인이 중요합니다." },
      { name: "정신건강 상담 권장", description: "자신이나 아이를 해칠 생각, 극심한 우울감·불안감은 즉시 주변 도움과 전문 상담이 필요할 수 있습니다." },
    ],
    checkup: [
      { name: "검진 결과지 및 의료진 설명 확인", description: "검진 수치는 이전 결과, 증상, 가족력, 복용 중인 약과 함께 의료진 설명으로 확인하는 것이 좋습니다." },
      { name: "재검·정밀검사 안내 우선 확인", description: "결과지에 재검이나 정밀검사 안내가 있으면 안내된 일정과 준비사항을 확인해야 합니다." },
    ],
  };

  return (rowsByCategory[category] ?? []).map((row) => ({
    contentId,
    name: row.name,
    description: row.description,
    checkedAt: new Date(),
  }));
}

function polishEntry(entry: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory, index: number) {
  const summary = polishSummary(entry, category, index);
  const answer = polishAnswer(entry, category, index);
  const checklist = polishChecklist(entry, category);
  const simpleAction = polishSimpleAction(entry, category);
  const caution = polishCaution(entry, category);
  const keywords = uniqueTextItems([
    ...entry.keywords,
    entry.question,
    entry.topic,
    familyHealthCategories[category].label,
    familyHealthCategories[category].shortLabel,
    category === "medicine" ? "약 복용 전 확인" : "가족건강 Q&A",
    category === "postpartum" ? "산후 상담 신호" : "병원 상담 신호",
    category === "checkup" ? "검진 결과 확인" : "집에서 확인할 점",
  ], 16);

  return {
    ...entry,
    summary,
    answer,
    checklist,
    simpleAction,
    caution,
    keywords,
    metaTitle: buildMetaTitle(entry, category),
    metaDescription: buildMetaDescription(entry, category),
    reviewStatus: getReviewStatus(category, entry),
    editorMemo: buildEditorMemo(category, entry),
    duplicateMemo: buildDuplicateMemo(category),
  };
}

async function seedFamilyHealthQna() {
  const { prisma } = await import("../lib/db");
  const categories = Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[];

  let total = 0;
  let sectionCount = 0;
  let keywordCount = 0;
  let sourceCount = 0;

  for (const category of categories) {
    const info = familyHealthCategories[category];
    const items = familyHealthQnaData[category];
    const categoryRow = await prisma.contentCategory.upsert({
      where: {
        locale_type_slug: {
          locale: "ko",
          type: "FAMILY_HEALTH_QNA",
          slug: category,
        },
      },
      update: {
        name: info.label,
        shortName: info.shortLabel,
        description: info.description,
        sortOrder: categoryOrder[category],
      },
      create: {
        locale: "ko",
        type: "FAMILY_HEALTH_QNA",
        slug: category,
        name: info.label,
        shortName: info.shortLabel,
        description: info.description,
        sortOrder: categoryOrder[category],
      },
    });

    for (const [index, raw] of items.entries()) {
      const item = polishEntry(raw, category, index);
      const path = `/family-health-qna/${category}/${item.slug}`;

      const content = await prisma.content.upsert({
        where: {
          locale_type_slug: {
            locale: "ko",
            type: "FAMILY_HEALTH_QNA",
            slug: item.slug,
          },
        },
        update: {
          categoryId: categoryRow.id,
          path,
          title: item.question,
          question: item.question,
          topic: item.topic,
          summary: item.summary,
          isMedical: true,
          status: "PUBLISHED",
          reviewStatus: item.reviewStatus,
          duplicateMemo: item.duplicateMemo,
          editorMemo: item.editorMemo,
          metaTitle: item.metaTitle,
          metaDescription: item.metaDescription,
          canonicalPath: path,
          ogTitle: item.metaTitle,
          ogDescription: item.metaDescription,
          publishedAt: new Date(),
        },
        create: {
          locale: "ko",
          type: "FAMILY_HEALTH_QNA",
          categoryId: categoryRow.id,
          slug: item.slug,
          path,
          title: item.question,
          question: item.question,
          topic: item.topic,
          summary: item.summary,
          isMedical: true,
          status: "PUBLISHED",
          reviewStatus: item.reviewStatus,
          duplicateMemo: item.duplicateMemo,
          editorMemo: item.editorMemo,
          metaTitle: item.metaTitle,
          metaDescription: item.metaDescription,
          canonicalPath: path,
          ogTitle: item.metaTitle,
          ogDescription: item.metaDescription,
          publishedAt: new Date(),
        },
      });

      await prisma.contentSection.deleteMany({ where: { contentId: content.id } });
      const sectionRows = [
        { contentId: content.id, sectionType: "answer", title: "질문에 대한 자세한 답변", items: item.answer, sortOrder: 1 },
        { contentId: content.id, sectionType: "checklist", title: "지금 먼저 확인하면 좋은 내용", items: item.checklist, sortOrder: 2 },
        { contentId: content.id, sectionType: "simpleAction", title: "집에서 먼저 해볼 수 있는 정리 방법", items: item.simpleAction, sortOrder: 3 },
        { contentId: content.id, sectionType: "caution", title: "상담을 더 서둘러야 하는 신호", body: item.caution, sortOrder: 4 },
      ];
      await prisma.contentSection.createMany({ data: sectionRows });

      await prisma.contentKeyword.deleteMany({ where: { contentId: content.id } });
      await prisma.contentKeyword.createMany({
        data: item.keywords.map((keyword) => ({ contentId: content.id, keyword })),
        skipDuplicates: true,
      });

      await prisma.contentSource.deleteMany({ where: { contentId: content.id } });
      const sourceRows = buildSourceRows(content.id, category);
      if (sourceRows.length > 0) {
        await prisma.contentSource.createMany({ data: sourceRows });
      }

      total += 1;
      sectionCount += sectionRows.length;
      keywordCount += item.keywords.length;
      sourceCount += sourceRows.length;
    }
  }

  await prisma.$disconnect();
  return { total, sectionCount, keywordCount, sourceCount };
}

async function dryRun() {
  const categories = Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[];
  const total = categories.reduce((sum, category) => sum + familyHealthQnaData[category].length, 0);
  console.log("\n[가족건강 Q&A seed 미리보기]");
  console.log(`전체 대상: ${total.toLocaleString()}개`);
  for (const category of categories) {
    console.log(`- ${category} / ${familyHealthCategories[category].label}: ${familyHealthQnaData[category].length.toLocaleString()}개`);
  }

  const samples: FamilyHealthQnaCategory[] = ["medicine", "postpartum", "checkup"];
  for (const sampleCategory of samples) {
    const sample = polishEntry(familyHealthQnaData[sampleCategory][0], sampleCategory, 0);
    console.log(`\n샘플 변환: ${sampleCategory}`);
    console.log(`- path: /family-health-qna/${sampleCategory}/${sample.slug}`);
    console.log(`- reviewStatus: ${sample.reviewStatus}`);
    console.log(`- question: ${sample.question}`);
    console.log(`- summary: ${sample.summary}`);
    console.log(`- answer: ${sample.answer.length}개`);
    console.log(`- checklist: ${sample.checklist.length}개`);
    console.log(`- simpleAction: ${sample.simpleAction.length}개`);
    console.log(`- caution: ${sample.caution}`);
    console.log(`- keywords: ${sample.keywords.length}개`);
  }
}

async function main() {
  if (isDryRun) {
    await dryRun();
    return;
  }

  console.log("\n가족건강 Q&A seed 시작");
  const result = await seedFamilyHealthQna();
  console.log("가족건강 Q&A seed 완료");
  console.log(`- 콘텐츠: ${result.total.toLocaleString()}개`);
  console.log(`- 섹션: ${result.sectionCount.toLocaleString()}개`);
  console.log(`- 키워드: ${result.keywordCount.toLocaleString()}개`);
  console.log(`- 출처/검수 메모: ${result.sourceCount.toLocaleString()}개`);
}

main().catch((error) => {
  console.error("\n가족건강 Q&A seed 실패");
  console.error(error);
  process.exit(1);
});
