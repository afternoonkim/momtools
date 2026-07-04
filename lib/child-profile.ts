export type ChildSummary = {
  birth: Date;
  months: number;
  actualMonths: number;
  correctedMonths: number | null;
  usesCorrectedAge: boolean;
  correctedBaseDate: Date | null;
  days: number;
  weeks: number;
  remainDays: number;
  ageLabel: string;
  hundredDay: Date;
  firstBirthday: Date;
  nextMilestoneLabel: string;
  nextMilestoneDate: Date;
  nextMilestoneDays: number;
  monthlyGuideHref: string;
  monthlyGuideLabel: string;
  weaningLabel: string;
  weaningHint: string;
};

export function formatKoreanDate(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

export function toDateInputValue(value: Date | string) {
  if (typeof value === "string") return value.slice(0, 10);
  return value.toISOString().slice(0, 10);
}

export function parseLocalDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;

  const date = new Date(year, month - 1, day);
  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

export function birthDateToLocalDate(value: Date | string) {
  return parseLocalDate(toDateInputValue(value)) ?? new Date();
}

export function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

export function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function getMonthDiffWithDayAdjustment(birth: Date, today: Date) {
  let months =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());

  if (today.getDate() < birth.getDate()) months -= 1;
  return Math.max(0, months);
}

function getYearsMonthsDays(birth: Date, today: Date) {
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years: Math.max(0, years), months: Math.max(0, months), days: Math.max(0, days) };
}

export function getMonthlyGuide(months: number) {
  if (months <= 12) return { href: `/monthly-guide/${months}-month`, label: `생후 ${months}개월 가이드` };
  if (months <= 18) return { href: "/monthly-guide/13-18-month", label: "생후 13~18개월 가이드" };
  if (months <= 24) return { href: "/monthly-guide/19-24-month", label: "생후 19~24개월 가이드" };
  return { href: "/monthly-guide/25-36-month", label: "생후 25~36개월 가이드" };
}

export function getWeaningStage(months: number) {
  if (months < 4) {
    return { label: "수유 중심", hint: "이유식 전에는 수유량과 체중 증가 흐름을 먼저 봐요." };
  }
  if (months < 6) {
    return { label: "이유식 준비", hint: "고개 가누기, 앉기, 음식에 대한 관심을 함께 확인해요." };
  }
  if (months < 8) {
    return { label: "초기 이유식", hint: "쌀미음처럼 단순한 재료부터 천천히 시작하는 시기예요." };
  }
  if (months < 10) {
    return { label: "중기 이유식", hint: "질감과 재료를 조금씩 늘리며 반응을 확인해요." };
  }
  if (months < 12) {
    return { label: "후기 이유식", hint: "씹기 연습과 식사 리듬을 함께 만들어가요." };
  }
  return { label: "완료기 이후", hint: "가족 식사로 넘어가되 간과 질감은 아이 기준으로 조절해요." };
}

export function getCorrectedMonthInfo({
  birthDate,
  expectedDueDate,
  useCorrectedAge,
  today = new Date(),
}: {
  birthDate: Date | string;
  expectedDueDate?: Date | string | null;
  useCorrectedAge?: boolean | null;
  today?: Date;
}) {
  const birth = birthDateToLocalDate(birthDate);
  const dueDate = expectedDueDate ? birthDateToLocalDate(expectedDueDate) : null;
  const actualMonths = getMonthDiffWithDayAdjustment(birth, today);
  const canUseCorrectedAge = Boolean(useCorrectedAge && dueDate && dueDate.getTime() > birth.getTime() && actualMonths < 24);
  const correctedMonths = canUseCorrectedAge && dueDate ? getMonthDiffWithDayAdjustment(dueDate, today) : null;

  return {
    birth,
    actualMonths,
    correctedMonths: correctedMonths === null ? null : Math.max(0, correctedMonths),
    usesCorrectedAge: canUseCorrectedAge,
    correctedBaseDate: canUseCorrectedAge ? dueDate : null,
    displayMonths: canUseCorrectedAge && correctedMonths !== null ? Math.max(0, correctedMonths) : actualMonths,
  };
}

export function getChildSummary(
  birthDate: Date | string,
  today = new Date(),
  expectedDueDate?: Date | string | null,
  useCorrectedAge?: boolean | null,
): ChildSummary {
  const correctedInfo = getCorrectedMonthInfo({ birthDate, expectedDueDate, useCorrectedAge, today });
  const birth = correctedInfo.birth;
  const days = Math.max(0, diffInDays(birth, today));
  const months = correctedInfo.displayMonths;
  const age = getYearsMonthsDays(birth, today);
  const hundredDay = addDays(birth, 99);
  const firstBirthday = addDays(birth, 365);
  const guide = getMonthlyGuide(months);
  const weaning = getWeaningStage(months);

  const candidates = [
    { label: "100일", date: hundredDay },
    { label: "첫돌", date: firstBirthday },
  ].filter((item) => diffInDays(today, item.date) >= 0);
  const nextMilestone = candidates[0] ?? { label: "월령 가이드", date: today };
  const nextMilestoneDays = Math.max(0, diffInDays(today, nextMilestone.date));

  return {
    birth,
    months,
    actualMonths: correctedInfo.actualMonths,
    correctedMonths: correctedInfo.correctedMonths,
    usesCorrectedAge: correctedInfo.usesCorrectedAge,
    correctedBaseDate: correctedInfo.correctedBaseDate,
    days,
    weeks: Math.floor(days / 7),
    remainDays: days % 7,
    ageLabel: `${age.years}세 ${age.months}개월 ${age.days}일`,
    hundredDay,
    firstBirthday,
    nextMilestoneLabel: nextMilestone.label,
    nextMilestoneDate: nextMilestone.date,
    nextMilestoneDays,
    monthlyGuideHref: guide.href,
    monthlyGuideLabel: guide.label,
    weaningLabel: weaning.label,
    weaningHint: weaning.hint,
  };
}
