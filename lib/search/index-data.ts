import { familyHealthCategories, familyHealthQnaData, type FamilyHealthQnaCategory } from "@/data/familyHealthQna";
import { governmentPolicies, governmentPolicyCategories } from "@/data/governmentPolicy";
import { familyFinanceArticles } from "@/data/familyFinance";
import { babyFoodRecipes, stageLabels } from "@/data/babyFood";
import { birthSupportRegions } from "@/data/birthSupportCalculator";
import { monthlyGuideItems } from "@/data/monthlyGuide";
import { healthGuideItems } from "@/data/healthGuides";
import { childcarePortalSections } from "@/data/childcarePortal";
import { childcarePortalGuides } from "@/data/childcarePortalGuides";
import { getMoonlightHospitalAreaPath, moonlightHospitalAreas, moonlightHospitals } from "@/data/moonlightHospitals";

export type SearchEntryType =
  | "qna"
  | "family-health"
  | "policy"
  | "family-finance"
  | "baby-food"
  | "tool"
  | "info"
  | "checklist"
  | "birth-support-region"
  | "monthly-guide"
  | "health-guide"
  | "moonlight-hospital";

export interface SearchEntry {
  type: SearchEntryType;
  /** 카테고리 라벨 (UI 그룹화용, 예: "아이 건강 Q&A") */
  categoryLabel: string;
  href: string;
  title: string;
  description: string;
  topic?: string;
  keywords: string[];
}

const familyHealthEntries: SearchEntry[] = (Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[]).flatMap(
  (category) =>
    familyHealthQnaData[category].map((entry) => ({
      type: "family-health" as const,
      categoryLabel: `${familyHealthCategories[category].label}`,
      href: `/family-health-qna/${category}/${entry.slug}`,
      title: entry.question,
      description: entry.summary,
      topic: entry.topic,
      keywords: [...(entry.keywords ?? []), entry.topic, familyHealthCategories[category].shortLabel].filter(Boolean) as string[],
    })),
);

const policyEntries: SearchEntry[] = governmentPolicies.map((entry) => ({
  type: "policy" as const,
  categoryLabel: `정부정책 · ${governmentPolicyCategories[entry.category].shortLabel}`,
  href: `/policy/${entry.category}/${entry.slug}`,
  title: entry.title,
  description: entry.summary,
  topic: entry.shortTitle,
  keywords: [...(entry.keywords ?? []), entry.shortTitle, entry.title].filter(Boolean) as string[],
}));

const familyFinanceEntries: SearchEntry[] = familyFinanceArticles.map((article) => ({
  type: "family-finance" as const,
  categoryLabel: "가계 가이드",
  href: `/info/family-finance/${article.slug}`,
  title: article.title,
  description: article.metaDescription,
  topic: article.topic,
  keywords: [...(article.keywords ?? []), article.topic].filter(Boolean) as string[],
}));

const babyFoodEntries: SearchEntry[] = babyFoodRecipes.map((recipe) => ({
  type: "baby-food" as const,
  categoryLabel: `이유식 · ${stageLabels[recipe.stage]}`,
  href: `/baby-food/recipes/${recipe.slug}`,
  title: recipe.title,
  description: recipe.summary,
  topic: stageLabels[recipe.stage],
  keywords: [
    ...(recipe.searchTerms ?? []),
    ...(recipe.ingredients ?? []),
    recipe.category,
    stageLabels[recipe.stage],
  ].filter(Boolean) as string[],
}));

const birthSupportRegionEntries: SearchEntry[] = birthSupportRegions.map((region) => {
  const sigungu = region.sigungu === "전체" ? "" : region.sigungu;
  const sidoShort = region.sido
    .replace("특별자치도", "")
    .replace("특별자치시", "")
    .replace("광역시", "")
    .replace("특별시", "")
    .replace(/도$|시$/, "")
    .trim();
  const displayName = sigungu ? `${region.sido} ${sigungu}` : region.sido;
  const shortName = sigungu || sidoShort || region.sido;
  return {
    type: "birth-support-region" as const,
    categoryLabel: "출산지원금 (지역별)",
    href: `/tools/birth-support-calculator/${region.regionCode}`,
    title: `${shortName} 출산지원금`,
    description: `${displayName}의 출산지원금·출산축하금·출산장려금을 첫째·둘째·셋째 출생 순위별로 합산한 예상 금액과 신청 안내를 한 번에 볼 수 있어요.`,
    topic: "출산지원금",
    keywords: [
      shortName,
      displayName,
      `${shortName} 출산지원금`,
      `${shortName} 출산축하금`,
      `${shortName} 출산장려금`,
      sidoShort,
      region.sido,
      "지역별 출산지원금",
    ].filter(Boolean) as string[],
  };
});


const monthlyGuideEntries: SearchEntry[] = monthlyGuideItems.map((item) => ({
  type: "monthly-guide" as const,
  categoryLabel: "월령별 육아 로드맵",
  href: `/monthly-guide/${item.slug}`,
  title: item.title,
  description: item.summary,
  topic: item.ageLabel,
  keywords: [...item.keywords, item.ageLabel, "월령별 육아"],
}));

const healthGuideEntries: SearchEntry[] = healthGuideItems.map((item) => ({
  type: "health-guide" as const,
  categoryLabel: "증상별 건강 가이드",
  href: `/health/${item.slug}`,
  title: item.title,
  description: item.summary,
  topic: item.title,
  keywords: [...item.keywords, "아기 증상", "아이 건강"],
}));

const moonlightHospitalAreaEntries: SearchEntry[] = moonlightHospitalAreas.map((area) => ({
  type: "moonlight-hospital" as const,
  categoryLabel: "지역별 달빛아동병원",
  href: getMoonlightHospitalAreaPath(area),
  title: `${area.label} 달빛아동병원`,
  description: area.description,
  topic: area.label,
  keywords: [
    ...area.keywords,
    area.label,
    area.region ?? "",
    area.regionShort ?? "",
    area.city ?? "",
    "달빛아동병원",
    "소아 야간진료",
    "휴일 소아과",
  ].filter(Boolean) as string[],
}));

const moonlightHospitalEntries: SearchEntry[] = moonlightHospitals.map((hospital) => ({
  type: "moonlight-hospital" as const,
  categoryLabel: "달빛아동병원",
  href: `/moonlight-hospitals?region=${encodeURIComponent(hospital.region)}&q=${encodeURIComponent(hospital.name)}`,
  title: hospital.name,
  description: `${hospital.regionShort} ${hospital.city} · ${hospital.address} · ${hospital.phone}`,
  topic: hospital.regionShort,
  keywords: [
    hospital.name,
    hospital.region,
    hospital.regionShort,
    hospital.city,
    hospital.address,
    hospital.phone,
    `${hospital.regionShort} 달빛아동병원`,
    `${hospital.city} 달빛아동병원`,
    "달빛아동병원",
    "야간진료",
    "휴일진료",
    "소아과",
  ].filter(Boolean) as string[],
}));

const childcarePortalEntries: SearchEntry[] = [
  {
    type: "info" as const,
    categoryLabel: "공식 육아정보",
    href: "/info/childcare-portal",
    title: "아이사랑 공식정보 활용 가이드",
    description: "임신육아종합포털 아이사랑에서 확인할 수 있는 임신, 출산, 육아, 어린이집, 상담, 건강정보를 필요한 순서대로 정리했어요.",
    topic: "아이사랑",
    keywords: [
      "아이사랑",
      "임신육아종합포털",
      "어린이집 찾기",
      "입소대기",
      "국민행복카드",
      "시간제보육",
      "육아 상담",
      ...childcarePortalSections.flatMap((section) => section.keywords),
    ],
  },
];

const childcarePortalGuideEntries: SearchEntry[] = childcarePortalGuides.map((guide) => ({
  type: "info" as const,
  categoryLabel: `공식 육아정보 · ${guide.topic}`,
  href: `/info/childcare-portal/${guide.slug}`,
  title: guide.title,
  description: guide.quickAnswer,
  topic: guide.topic,
  keywords: [guide.topic, guide.shortTitle, ...guide.keywords, ...guide.checkPoints].filter(Boolean) as string[],
}));

/**
 * 정적인 도구·정보·체크리스트 페이지 (검색에 잡혀야 하지만 데이터로 정의되어 있지 않은 페이지들)
 */
const staticPageEntries: SearchEntry[] = [
  {
    type: "tool",
    categoryLabel: "육아 계산기",
    href: "/tools/due-date",
    title: "출산 예정일 계산기",
    description: "마지막 생리일을 입력하면 출산 예정일과 임신 주차, 주요 검진 시기를 자동으로 계산해 보여드려요.",
    keywords: ["출산 예정일", "출산 예정일 계산기", "임신 주차", "임신 주수 계산기"],
  },
  {
    type: "tool",
    categoryLabel: "육아 계산기",
    href: "/tools/baby-age",
    title: "아기 개월수 계산기",
    description: "생년월일로 현재 아기 개월수, 출생 후 일수, 100일·돌 시점을 한 번에 확인할 수 있어요.",
    keywords: ["아기 개월수", "아기 개월수 계산기", "100일", "돌 계산기", "신생아 일수"],
  },
  {
    type: "tool",
    categoryLabel: "육아 계산기",
    href: "/tools/vaccine-schedule",
    title: "예방접종 일정 계산기",
    description: "생년월일을 입력하면 월령별 국가예방접종 시기를 한국 기준으로 정리해 보여드려요.",
    keywords: ["예방접종 일정", "예방접종 계산기", "DTaP", "MMR", "BCG", "국가예방접종"],
  },
  {
    type: "tool",
    categoryLabel: "육아 계산기",
    href: "/tools/weaning-start",
    title: "이유식 시작 계산기",
    description: "생년월일과 발달 신호를 입력하면 이유식 시작 시기와 단계별 진행 시점을 안내해 드려요.",
    keywords: ["이유식 시작", "이유식 시작 시기", "이유식 계산기"],
  },
  {
    type: "tool",
    categoryLabel: "육아 계산기",
    href: "/tools/growth-percentile",
    title: "성장 백분위 계산기",
    description: "키와 몸무게로 또래 대비 성장 백분위 위치를 빠르게 확인할 수 있어요.",
    keywords: ["성장 백분위", "성장 백분위 계산기", "키 백분위", "체중 백분위"],
  },
  {
    type: "tool",
    categoryLabel: "육아 계산기",
    href: "/tools/birth-support-calculator",
    title: "출산지원금 계산기",
    description: "사는 지역과 출생 순위로 첫만남이용권·부모급여·아동수당·지자체 출산지원금을 합산한 예상 금액을 확인할 수 있어요.",
    keywords: ["출산지원금", "출산지원금 계산기", "지역별 출산지원금", "첫만남이용권", "부모급여"],
  },
  {
    type: "info",
    categoryLabel: "육아 정보",
    href: "/info/pregnancy",
    title: "임신 정보 가이드",
    description: "임신 초기 증상, 주차별 체크포인트, 출산 준비 흐름을 한곳에 정리한 임신 정보 가이드예요.",
    keywords: ["임신", "임신 초기 증상", "임신 주차별", "임신 정보"],
  },
  {
    type: "info",
    categoryLabel: "육아 정보",
    href: "/info/newborn",
    title: "신생아 정보 가이드",
    description: "수유, 수면, 체온, 황달, 병원 상담 신호처럼 처음 부모가 가장 자주 찾는 신생아 정보예요.",
    keywords: ["신생아", "신생아 수유", "신생아 수면", "신생아 황달", "신생아 체온"],
  },
  {
    type: "info",
    categoryLabel: "육아 정보",
    href: "/info/weaning",
    title: "이유식 정보 가이드",
    description: "이유식 시작 시기, 첫 재료, 단계별 진행 흐름을 한 번에 살펴볼 수 있어요.",
    keywords: ["이유식", "이유식 시작", "이유식 단계", "이유식 재료"],
  },
  {
    type: "info",
    categoryLabel: "육아 정보",
    href: "/info/toddler",
    title: "유아 정보 가이드",
    description: "식사, 수면, 놀이, 생활 루틴처럼 유아기 일상에서 자주 보게 되는 주제를 정리했어요.",
    keywords: ["유아", "유아 식사", "유아 수면", "유아 루틴"],
  },
  {
    type: "info",
    categoryLabel: "육아 정보",
    href: "/info/family-finance",
    title: "출산·육아 가계 가이드",
    description: "부모급여 활용, 자녀 적금·청약, 연말정산 자녀세액공제, 의료비 공제까지 한국 가정 출산 후 가계 흐름을 한자리에서.",
    keywords: ["출산 가계", "육아 가계부", "부모급여 활용", "자녀 적금", "주택청약", "자녀세액공제"],
  },
  {
    type: "checklist",
    categoryLabel: "체크리스트",
    href: "/checklists/birth",
    title: "출산 준비 체크리스트",
    description: "출산 전 입원 가방과 미리 챙겨야 하는 준비물·서류를 한 번에 점검할 수 있어요.",
    keywords: ["출산 준비", "출산 준비물", "입원 가방", "출산 체크리스트"],
  },
  {
    type: "checklist",
    categoryLabel: "체크리스트",
    href: "/checklists/newborn",
    title: "신생아 준비 체크리스트",
    description: "신생아 맞이 전 수유·수면·위생·외출 용품 우선순위를 한 번에 정리할 수 있는 체크리스트예요.",
    keywords: ["신생아 준비", "신생아 준비물", "신생아 체크리스트"],
  },
  {
    type: "checklist",
    categoryLabel: "체크리스트",
    href: "/checklists/weaning",
    title: "이유식 준비 체크리스트",
    description: "이유식 시작 전 조리 도구, 식기, 재료 준비를 빠뜨리지 않게 도와주는 체크리스트예요.",
    keywords: ["이유식 준비", "이유식 도구", "이유식 체크리스트"],
  },
  {
    type: "checklist",
    categoryLabel: "체크리스트",
    href: "/checklists/daycare",
    title: "어린이집 준비 체크리스트",
    description: "어린이집 등원 전 준비물, 적응 포인트, 서류를 정리한 체크리스트예요.",
    keywords: ["어린이집 준비", "어린이집 준비물", "어린이집 체크리스트", "등원 준비"],
  },
];

export const STATIC_SEARCH_INDEX: SearchEntry[] = [
  ...staticPageEntries,
  ...familyHealthEntries,
  ...policyEntries,
  ...familyFinanceEntries,
  ...childcarePortalEntries,
  ...childcarePortalGuideEntries,
  ...babyFoodEntries,
  ...birthSupportRegionEntries,
  ...monthlyGuideEntries,
  ...healthGuideEntries,
  ...moonlightHospitalAreaEntries,
  ...moonlightHospitalEntries,
];


export const SEARCH_INDEX: SearchEntry[] = STATIC_SEARCH_INDEX;
