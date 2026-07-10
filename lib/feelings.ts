export type FeelingStage = "PREGNANCY" | "BABY_MONTH" | "CHILD_AGE";
export type FeelingVisibility = "PRIVATE" | "PUBLIC";
export type FeelingEmotionKey =
  | "excited"
  | "touched"
  | "happy"
  | "worried"
  | "tired"
  | "hard"
  | "grateful"
  | "hopeful";

export type FeelingScope = {
  stage: FeelingStage;
  baseValue: number;
  minValue: number;
  maxValue: number;
  label: string;
  shortLabel: string;
};

export type ChildForFeelingScope = {
  birthDate?: Date | string | null;
  expectedDueDate?: Date | string | null;
};

export type MomentPromptSeed = {
  id: string;
  stage: "PREGNANCY" | "BABY_DAY" | "CHILD_AGE";
  triggerType: "PREGNANCY_WEEK" | "D_DAY" | "BABY_DAY" | "CHILD_BIRTHDAY";
  triggerValue: number;
  title: string;
  question: string;
  placeholder: string;
};

const DAY_MS = 1000 * 60 * 60 * 24;

function toDateOnly(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function differenceInCalendarDays(left: Date | string, right: Date | string) {
  const leftDate = toDateOnly(left);
  const rightDate = toDateOnly(right);
  return Math.round((leftDate.getTime() - rightDate.getTime()) / DAY_MS);
}

function differenceInYears(today: Date, birthDate: Date | string) {
  const birth = toDateOnly(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const hasNotHadBirthday = today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  if (hasNotHadBirthday) age -= 1;
  return Math.max(0, age);
}

function differenceInMonths(today: Date, birthDate: Date | string) {
  const birth = toDateOnly(birthDate);
  let months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
  if (today.getDate() < birth.getDate()) months -= 1;
  return Math.max(0, months);
}

export const FEELING_EMOTIONS: { key: FeelingEmotionKey; emoji: string; label: string }[] = [
  { key: "excited", emoji: "😊", label: "설렘" },
  { key: "touched", emoji: "🥹", label: "감동" },
  { key: "happy", emoji: "😌", label: "행복" },
  { key: "worried", emoji: "😥", label: "걱정" },
  { key: "tired", emoji: "😴", label: "피곤" },
  { key: "hard", emoji: "😭", label: "힘들었어요" },
  { key: "grateful", emoji: "❤️", label: "감사" },
  { key: "hopeful", emoji: "🌸", label: "기대" },
];

export const FEELING_REACTIONS = [
  { key: "heart", emoji: "❤️", label: "공감해요" },
  { key: "cheer", emoji: "👏", label: "응원해요" },
  { key: "same", emoji: "🤗", label: "저도 그랬어요" },
];

export const FEELING_REPORT_REASONS = [
  { key: "ad", label: "광고" },
  { key: "abuse", label: "욕설" },
  { key: "false", label: "허위정보" },
  { key: "privacy", label: "개인정보" },
  { key: "etc", label: "기타" },
];

export const MOMENT_PROMPTS: MomentPromptSeed[] = [
  {
    id: "pregnancy-week-8",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 8,
    title: "오늘은 임신 8주쯤이에요.",
    question: "처음으로 엄마가 된다는 느낌이 더 실감 나는 순간이 있었나요?",
    placeholder: "오늘 마음에 남은 장면을 짧게 적어보세요.",
  },
  {
    id: "pregnancy-week-12",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 12,
    title: "오늘은 임신 12주쯤이에요.",
    question: "검사나 진료를 앞두고 가장 신경 쓰이는 마음은 무엇인가요?",
    placeholder: "걱정, 기대, 안도감 중 기억하고 싶은 마음을 남겨보세요.",
  },
  {
    id: "pregnancy-week-18",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 18,
    title: "오늘은 임신 18주쯤이에요.",
    question: "아기와 조금 더 가까워졌다고 느낀 순간이 있었나요?",
    placeholder: "작은 변화나 오늘의 마음을 남겨보세요.",
  },
  {
    id: "pregnancy-week-20",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 20,
    title: "오늘은 임신 20주쯤이에요.",
    question: "정밀초음파를 다녀오셨거나 기다리고 있나요?",
    placeholder: "오늘 느낀 마음을 짧게 남겨보세요.",
  },
  {
    id: "pregnancy-week-24",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 24,
    title: "오늘은 임신 24주쯤이에요.",
    question: "몸의 변화가 부쩍 느껴지는 요즘, 가장 챙기고 싶은 것은 무엇인가요?",
    placeholder: "나를 위해 챙기고 싶은 한 가지를 적어보세요.",
  },
  {
    id: "pregnancy-week-30",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 30,
    title: "오늘은 임신 30주쯤이에요.",
    question: "아기를 만날 준비가 조금씩 가까워진다고 느껴지나요?",
    placeholder: "준비하면서 든 마음을 남겨보세요.",
  },
  {
    id: "pregnancy-week-36",
    stage: "PREGNANCY",
    triggerType: "PREGNANCY_WEEK",
    triggerValue: 36,
    title: "오늘은 임신 36주쯤이에요.",
    question: "곧 만날 아기에게 가장 먼저 전하고 싶은 말은 무엇인가요?",
    placeholder: "아기에게 남기고 싶은 한마디를 적어보세요.",
  },
  {
    id: "pregnancy-dday-30",
    stage: "PREGNANCY",
    triggerType: "D_DAY",
    triggerValue: 30,
    title: "출산예정일이 30일 남았어요.",
    question: "이제 한 달 남은 지금, 가장 크게 드는 마음은 무엇인가요?",
    placeholder: "기대, 떨림, 걱정 중 오늘 마음을 남겨보세요.",
  },
  {
    id: "pregnancy-dday-7",
    stage: "PREGNANCY",
    triggerType: "D_DAY",
    triggerValue: 7,
    title: "출산예정일이 7일 남았어요.",
    question: "아기를 기다리며 오늘 가장 기억하고 싶은 순간은 무엇인가요?",
    placeholder: "오늘의 기다림을 짧게 남겨보세요.",
  },
  {
    id: "pregnancy-dday-0",
    stage: "PREGNANCY",
    triggerType: "D_DAY",
    triggerValue: 0,
    title: "오늘은 출산예정일이에요.",
    question: "오늘 하루를 어떤 마음으로 보내고 있나요?",
    placeholder: "오늘의 마음을 짧게 남겨보세요.",
  },
  {
    id: "baby-day-30",
    stage: "BABY_DAY",
    triggerType: "BABY_DAY",
    triggerValue: 30,
    title: "오늘은 아기 30일이에요.",
    question: "한 달을 함께 보낸 지금 가장 기억에 남는 순간은 무엇인가요?",
    placeholder: "한 달 동안 가장 오래 남은 장면을 적어보세요.",
  },
  {
    id: "baby-day-50",
    stage: "BABY_DAY",
    triggerType: "BABY_DAY",
    triggerValue: 50,
    title: "오늘은 아기 50일이에요.",
    question: "처음보다 익숙해졌다고 느낀 육아의 순간이 있었나요?",
    placeholder: "조금 익숙해진 나를 기록해보세요.",
  },
  {
    id: "baby-day-100",
    stage: "BABY_DAY",
    triggerType: "BABY_DAY",
    triggerValue: 100,
    title: "오늘은 아기 100일이에요.",
    question: "100일을 맞이한 지금 가장 기억에 남는 순간은 무엇인가요?",
    placeholder: "가장 기억에 남는 장면을 남겨보세요.",
  },
  {
    id: "baby-day-200",
    stage: "BABY_DAY",
    triggerType: "BABY_DAY",
    triggerValue: 200,
    title: "오늘은 아기 200일이에요.",
    question: "요즘 아이에게서 새롭게 보이는 모습이 있나요?",
    placeholder: "요즘 자주 보이는 표정이나 행동을 남겨보세요.",
  },
  {
    id: "child-age-1",
    stage: "CHILD_AGE",
    triggerType: "CHILD_BIRTHDAY",
    triggerValue: 1,
    title: "오늘은 첫돌 무렵이에요.",
    question: "지난 1년을 떠올릴 때 가장 먼저 생각나는 순간은 무엇인가요?",
    placeholder: "첫돌을 맞은 마음을 남겨보세요.",
  },
  {
    id: "child-age-2",
    stage: "CHILD_AGE",
    triggerType: "CHILD_BIRTHDAY",
    triggerValue: 2,
    title: "오늘은 두돌 무렵이에요.",
    question: "아이의 말이나 행동 중 요즘 가장 많이 웃게 되는 장면은 무엇인가요?",
    placeholder: "요즘의 귀여운 순간을 남겨보세요.",
  },
  {
    id: "child-age-3",
    stage: "CHILD_AGE",
    triggerType: "CHILD_BIRTHDAY",
    triggerValue: 3,
    title: "오늘은 세돌 무렵이에요.",
    question: "아이와 대화가 늘면서 기억하고 싶은 말이 있었나요?",
    placeholder: "아이의 말이나 오늘의 마음을 적어보세요.",
  },
  {
    id: "child-age-4",
    stage: "CHILD_AGE",
    triggerType: "CHILD_BIRTHDAY",
    triggerValue: 4,
    title: "오늘은 네돌 무렵이에요.",
    question: "아이가 스스로 해낸 일 중 기억하고 싶은 순간이 있나요?",
    placeholder: "작은 성장의 순간을 남겨보세요.",
  },
];

export function getEmotionMeta(key: string) {
  return FEELING_EMOTIONS.find((emotion) => emotion.key === key) ?? { key: "happy", emoji: "😌", label: "행복" };
}

export function getReactionMeta(key: string) {
  return FEELING_REACTIONS.find((reaction) => reaction.key === key) ?? FEELING_REACTIONS[0];
}

export function getFeelingScope(child: ChildForFeelingScope, today = new Date()): FeelingScope | null {
  if (!child.birthDate && child.expectedDueDate) {
    const daysUntilDue = differenceInCalendarDays(child.expectedDueDate, today);
    const pregnancyDays = Math.max(0, 280 - daysUntilDue);
    const week = Math.max(0, Math.floor(pregnancyDays / 7));
    return {
      stage: "PREGNANCY",
      baseValue: week,
      minValue: Math.max(0, week - 1),
      maxValue: week + 1,
      label: `임신 ${week}주 전후 부모`,
      shortLabel: `${Math.max(0, week - 1)}~${week + 1}주`,
    };
  }

  if (child.birthDate) {
    const months = differenceInMonths(today, child.birthDate);
    if (months < 12) {
      return {
        stage: "BABY_MONTH",
        baseValue: months,
        minValue: Math.max(0, months - 1),
        maxValue: months + 1,
        label: `생후 ${months}개월 전후 부모`,
        shortLabel: `${Math.max(0, months - 1)}~${months + 1}개월`,
      };
    }

    const age = Math.max(1, differenceInYears(today, child.birthDate));
    return {
      stage: "CHILD_AGE",
      baseValue: age,
      minValue: age,
      maxValue: age,
      label: `${age}세 아이 부모`,
      shortLabel: `${age}세`,
    };
  }

  return null;
}

export function getTodayMomentPrompt(child: ChildForFeelingScope, today = new Date()): MomentPromptSeed | null {
  if (!child.birthDate && child.expectedDueDate) {
    const daysUntilDue = differenceInCalendarDays(child.expectedDueDate, today);
    const pregnancyDays = Math.max(0, 280 - daysUntilDue);
    const pregnancyWeek = Math.floor(pregnancyDays / 7);

    return (
      MOMENT_PROMPTS.find((prompt) => prompt.stage === "PREGNANCY" && prompt.triggerType === "PREGNANCY_WEEK" && prompt.triggerValue === pregnancyWeek) ??
      MOMENT_PROMPTS.find((prompt) => prompt.stage === "PREGNANCY" && prompt.triggerType === "D_DAY" && prompt.triggerValue === daysUntilDue) ??
      null
    );
  }

  if (child.birthDate) {
    const birth = toDateOnly(child.birthDate);
    const babyDays = differenceInCalendarDays(today, child.birthDate);
    const age = differenceInYears(today, child.birthDate);
    const isBirthday = today.getMonth() === birth.getMonth() && today.getDate() === birth.getDate();

    return (
      MOMENT_PROMPTS.find((prompt) => prompt.stage === "BABY_DAY" && prompt.triggerType === "BABY_DAY" && prompt.triggerValue === babyDays) ??
      (isBirthday ? MOMENT_PROMPTS.find((prompt) => prompt.stage === "CHILD_AGE" && prompt.triggerType === "CHILD_BIRTHDAY" && prompt.triggerValue === age) : null) ??
      null
    );
  }

  return null;
}

export function isValidEmotion(value: string): value is FeelingEmotionKey {
  return FEELING_EMOTIONS.some((emotion) => emotion.key === value);
}

export function formatFeelingDate(value: Date) {
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(value);
}
