import { addDays, diffInDays, formatKoreanDate, parseLocalDate, toDateInputValue } from "@/lib/child-profile";

export type ChildHomeState = "PREGNANCY_HOME" | "BIRTH_CONFIRM" | "BABY_HOME";

export type PregnancyWeekGuide = {
  week: number;
  title: string;
  summary: string;
  babyGrowth: string;
  motherChange: string;
  checklist: string[];
};

export type PregnancyScheduleTemplate = {
  week: number;
  title: string;
  description: string;
};

export type PregnancySymptomGuide = {
  id: string;
  title: string;
  slug: string;
  category: string;
  severity: "EMERGENCY" | "SEE_DOCTOR" | "NORMAL";
  summary: string;
  detail: string;
  actionGuide: string;
  caution: string;
  relatedQnaSlug?: string;
};

export const pregnancyScheduleTemplates: PregnancyScheduleTemplate[] = [
  { week: 6, title: "심장 소리 확인 초음파", description: "아기집과 심장 소리 확인을 위해 병원에서 안내받는 시기가 많아요." },
  { week: 10, title: "임신 초기 검사", description: "혈액검사, 소변검사 등 기본 검사를 안내받을 수 있어요." },
  { week: 12, title: "1차 기형아 검사 또는 NT 검사", description: "목투명대 검사 등 초기 선별검사를 확인하는 시기예요." },
  { week: 16, title: "2차 기형아 검사", description: "병원 안내에 따라 2차 선별검사를 진행하는 경우가 많아요." },
  { week: 20, title: "정밀초음파", description: "아기 구조와 성장 흐름을 자세히 확인하는 초음파 시기예요." },
  { week: 24, title: "임당검사", description: "임신성 당뇨 선별검사를 안내받는 경우가 많아요." },
  { week: 32, title: "후기 초음파", description: "아기 성장, 양수, 태반 위치 등을 함께 확인할 수 있어요." },
  { week: 36, title: "막달 검사", description: "출산이 가까워지며 분만 준비와 막달 검사를 확인해요." },
];

const pregnancyWeekGuides: PregnancyWeekGuide[] = [
  { week: 6, title: "처음 심장 소리를 기다리는 시기", summary: "초음파로 아기집과 심장 소리를 확인하는 보호자가 많아요.", babyGrowth: "작지만 중요한 기관이 빠르게 만들어지고 있어요.", motherChange: "피곤함, 속 울렁거림, 냄새 민감함이 생길 수 있어요.", checklist: ["첫 진료 일정 확인", "복용 중인 약 상담", "무리한 운동 줄이기"] },
  { week: 10, title: "초기 검사를 챙기는 시기", summary: "입덧과 피로가 이어질 수 있어 생활 리듬을 무리하지 않는 편이 좋아요.", babyGrowth: "팔다리 모양이 더 또렷해지고 몸의 기본 형태가 잡혀가요.", motherChange: "졸림과 소화 불편이 커질 수 있어요.", checklist: ["임신 초기 검사 확인", "수분 섭취", "출혈이나 심한 통증 기록"] },
  { week: 12, title: "초기 안정기로 넘어가는 시기", summary: "초기 선별검사나 NT 검사를 병원 일정에 맞춰 확인하는 시기예요.", babyGrowth: "얼굴 윤곽과 손발 움직임이 조금씩 뚜렷해져요.", motherChange: "입덧이 조금씩 줄어드는 사람도 있지만 개인차가 커요.", checklist: ["검사 일정 확인", "가벼운 산책", "궁금한 점 메모"] },
  { week: 16, title: "배가 조금씩 드러나는 시기", summary: "컨디션이 나아지는 사람도 있지만 어지러움이나 당김을 느끼기도 해요.", babyGrowth: "뼈와 근육이 단단해지고 움직임이 더 활발해져요.", motherChange: "아랫배 당김이나 허리 불편이 생길 수 있어요.", checklist: ["2차 검사 일정 확인", "편한 옷 준비", "복통 양상 기록"] },
  { week: 18, title: "움직임을 기다리는 시기", summary: "아기의 움직임이 조금씩 활발해지는 시기예요. 아직 태동을 못 느껴도 이상한 것은 아닐 수 있어요.", babyGrowth: "손발을 움직이고 몸을 돌리는 움직임이 늘어날 수 있어요.", motherChange: "배가 더 뚜렷해지고 오래 서 있으면 피로감이 커질 수 있어요.", checklist: ["태동 느낌 기록", "정밀초음파 일정 확인", "불편한 증상 메모"] },
  { week: 20, title: "정밀초음파를 확인하는 시기", summary: "아기 성장과 구조를 자세히 보는 검사를 안내받는 경우가 많아요.", babyGrowth: "몸의 비율이 더 균형 있게 자라고 움직임도 다양해져요.", motherChange: "허리 부담과 다리 저림이 생길 수 있어요.", checklist: ["정밀초음파 일정 확인", "장시간 같은 자세 피하기", "태동 패턴 관찰"] },
  { week: 24, title: "임당검사를 준비하는 시기", summary: "병원에서 임신성 당뇨 선별검사를 안내받는 시기예요.", babyGrowth: "청각 반응이 더 뚜렷해지고 몸무게가 늘어나는 흐름이에요.", motherChange: "가슴 답답함, 속쓰림, 부종을 느끼는 사람도 있어요.", checklist: ["임당검사 일정 확인", "식사 기록", "부종과 두통 관찰"] },
  { week: 28, title: "후기로 넘어가는 시기", summary: "배가 빠르게 커지며 잠자리와 활동이 불편해질 수 있어요.", babyGrowth: "눈을 뜨고 감는 움직임이 나타나고 몸무게가 점점 늘어요.", motherChange: "숨이 차거나 갈비뼈 주변이 답답할 수 있어요.", checklist: ["태동 변화 기록", "철분 복용 상담", "무리한 일정 줄이기"] },
  { week: 32, title: "출산 준비를 시작하는 시기", summary: "후기 초음파와 출산 준비물을 함께 확인하기 좋아요.", babyGrowth: "몸에 지방이 붙고 자세가 자주 바뀔 수 있어요.", motherChange: "배 뭉침과 수면 불편이 잦아질 수 있어요.", checklist: ["후기 초음파 확인", "출산 가방 목록 작성", "배 뭉침 빈도 기록"] },
  { week: 36, title: "막달 검사를 확인하는 시기", summary: "분만 준비와 막달 검사를 병원 안내에 맞춰 확인해요.", babyGrowth: "태어날 준비를 하며 머리 위치와 자세를 확인하는 시기예요.", motherChange: "골반 압박감, 잦은 화장실, 불규칙한 배 뭉침이 느껴질 수 있어요.", checklist: ["막달 검사 일정", "병원 갈 준비물", "양수·진통 신호 확인"] },
  { week: 39, title: "만날 날이 가까워진 시기", summary: "규칙적인 진통, 양수 흐름, 태동 변화는 바로 확인이 필요할 수 있어요.", babyGrowth: "아기는 바깥세상에 적응할 준비를 마무리해가요.", motherChange: "잠이 얕아지고 몸이 무겁게 느껴질 수 있어요.", checklist: ["진통 간격 기록", "병원 연락 기준 확인", "출생정보 입력 준비"] },
];

export const pregnancySymptoms: PregnancySymptomGuide[] = [
  {
    id: "water-leak",
    title: "양수처럼 물이 계속 흐르는 느낌",
    slug: "water-leak",
    category: "양수·분비물",
    severity: "EMERGENCY",
    summary: "속옷이 반복해서 젖거나 조절되지 않는 물 흐름처럼 느껴지면 바로 확인이 필요할 수 있어요.",
    detail: "소변인지 분비물인지 구분이 어려울 때도 있어요. 흐르는 양, 색, 냄새, 시작 시간을 기록하면 상담에 도움이 돼요.",
    actionGuide: "패드를 사용해 양상을 확인하고, 병원 또는 분만실에 문의하세요.",
    caution: "진단은 의료기관에서 확인해야 해요. 양수가 의심되면 샤워나 목욕 전 먼저 문의하는 편이 좋아요.",
  },
  {
    id: "heavy-bleeding",
    title: "선명한 출혈이 계속 보일 때",
    slug: "heavy-bleeding",
    category: "출혈",
    severity: "EMERGENCY",
    summary: "선명한 피가 반복되거나 양이 늘어나는 느낌이면 빠른 확인이 필요해요.",
    detail: "소량의 갈색 분비물과 달리 선명한 출혈, 덩어리, 복통이 함께 있으면 상황을 기록해두세요.",
    actionGuide: "출혈 양과 시작 시간을 확인하고 의료기관에 문의하세요.",
    caution: "출혈 원인은 다양하므로 화면 안내만으로 판단하지 않아요.",
  },
  {
    id: "fetal-movement-decrease",
    title: "평소보다 태동이 확연히 줄어든 느낌",
    slug: "fetal-movement-decrease",
    category: "태동",
    severity: "SEE_DOCTOR",
    summary: "태동은 개인차가 크지만 평소 패턴과 다르게 줄었다고 느껴지면 확인이 필요할 수 있어요.",
    detail: "식사 후, 휴식 중 등 평소 잘 느끼던 상황에서도 다르게 느껴지는지 기록해보세요.",
    actionGuide: "왼쪽으로 누워 잠시 쉬며 기록해보고, 걱정이 계속되면 의료기관에 문의하세요.",
    caution: "태동 횟수만으로 상태를 단정하지 않아요. 보호자가 느끼는 변화도 중요해요.",
  },
  {
    id: "strong-headache-swelling",
    title: "심한 두통과 부종이 함께 느껴질 때",
    slug: "strong-headache-swelling",
    category: "기타",
    severity: "SEE_DOCTOR",
    summary: "심한 두통, 시야 흐림, 갑작스러운 부종이 함께 느껴지면 상담이 필요할 수 있어요.",
    detail: "평소와 다른 두통인지, 손·얼굴 부종이 갑자기 늘었는지 기록하면 좋아요.",
    actionGuide: "혈압을 잴 수 있다면 기록하고, 증상이 이어지면 의료기관에 문의하세요.",
    caution: "두통 원인은 다양하므로 진통제 복용 전 임신 중 복용 가능 여부를 확인하세요.",
  },
  {
    id: "round-ligament-pain",
    title: "자세를 바꿀 때 아랫배가 당겨요",
    slug: "round-ligament-pain",
    category: "통증",
    severity: "NORMAL",
    summary: "자궁이 커지며 자세 변화 때 당김을 느끼는 경우가 있어요.",
    detail: "짧게 찌릿하거나 당기는 느낌이 들 수 있지만, 통증이 반복되거나 강해지면 기록해두세요.",
    actionGuide: "천천히 움직이고 쉬어보세요. 출혈, 열, 규칙적인 통증이 동반되면 상담하세요.",
    caution: "정상 여부를 스스로 단정하지 말고 평소와 다르면 문의하는 편이 좋아요.",
  },
  {
    id: "frequent-urination",
    title: "소변이 자주 마려워요",
    slug: "frequent-urination",
    category: "소변",
    severity: "NORMAL",
    summary: "임신 중 자궁이 커지며 소변이 자주 마려울 수 있어요.",
    detail: "다만 통증, 열, 소변 냄새 변화가 함께 있으면 감염 여부 확인이 필요할 수 있어요.",
    actionGuide: "수분을 너무 줄이기보다 증상 변화를 기록하고 불편이 크면 상담하세요.",
    caution: "소변 통증이나 발열이 있으면 단순 빈뇨로 넘기지 않는 편이 좋아요.",
  },
];

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function resolveChildHomeState(child: { birthDate?: Date | string | null; expectedDueDate?: Date | string | null }, today = new Date()): ChildHomeState {
  if (child.birthDate) return "BABY_HOME";
  if (!child.expectedDueDate) return "BABY_HOME";
  const dueDate = typeof child.expectedDueDate === "string" ? parseLocalDate(child.expectedDueDate.slice(0, 10)) : child.expectedDueDate;
  if (!dueDate) return "BABY_HOME";
  return startOfLocalDay(today).getTime() <= startOfLocalDay(dueDate).getTime() ? "PREGNANCY_HOME" : "BIRTH_CONFIRM";
}

export function getPregnancySummary(dueDateValue: Date | string, today = new Date()) {
  const dueDate = typeof dueDateValue === "string" ? parseLocalDate(dueDateValue.slice(0, 10)) ?? new Date(dueDateValue) : dueDateValue;
  const daysUntilDue = diffInDays(today, dueDate);
  const pregnancyDays = Math.max(0, Math.min(280, 280 - daysUntilDue));
  const pregnancyWeek = Math.floor(pregnancyDays / 7);
  const pregnancyDay = pregnancyDays % 7;
  return {
    dueDate,
    daysUntilDue,
    pregnancyDays,
    pregnancyWeek,
    pregnancyDay,
    label: `${pregnancyWeek}주 ${pregnancyDay}일 · D-${Math.max(0, daysUntilDue)}`,
    dueDateLabel: formatKoreanDate(dueDate),
  };
}

export function getPregnancyWeekGuide(week: number) {
  const sorted = [...pregnancyWeekGuides].sort((a, b) => a.week - b.week);
  return [...sorted].reverse().find((guide) => week >= guide.week) ?? sorted[0];
}

export function getEstimatedConceptionDate(dueDate: Date) {
  return addDays(dueDate, -280);
}

export function getScheduleDateByWeek(dueDate: Date, week: number) {
  return addDays(getEstimatedConceptionDate(dueDate), week * 7);
}

export function buildPregnancyScheduleSeeds(childId: string, dueDateValue: Date | string) {
  const dueDate = typeof dueDateValue === "string" ? parseLocalDate(dueDateValue.slice(0, 10)) ?? new Date(dueDateValue) : dueDateValue;
  return pregnancyScheduleTemplates.map((template) => ({
    childId,
    title: template.title,
    description: template.description,
    week: template.week,
    scheduledDate: getScheduleDateByWeek(dueDate, template.week),
    status: "UPCOMING",
  }));
}

export function formatDaysFromToday(date: Date, today = new Date()) {
  const days = diffInDays(today, date);
  if (days === 0) return "오늘";
  if (days > 0) return `${days}일 후`;
  return `${Math.abs(days)}일 지남`;
}

export function getSeverityLabel(severity: PregnancySymptomGuide["severity"]) {
  if (severity === "EMERGENCY") return "응급";
  if (severity === "SEE_DOCTOR") return "진료 권장";
  return "정상 범위";
}

export function getSeverityClasses(severity: PregnancySymptomGuide["severity"]) {
  if (severity === "EMERGENCY") return "border-rose-200 bg-rose-50 text-rose-700";
  if (severity === "SEE_DOCTOR") return "border-amber-200 bg-amber-50 text-amber-700";
  return "border-emerald-200 bg-emerald-50 text-emerald-700";
}

export function toPregnancyDateInput(value: Date | string) {
  return toDateInputValue(value);
}
