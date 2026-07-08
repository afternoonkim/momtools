import { toDateInputValue } from "@/lib/child-profile";

export type VaccinationTiming = "birth" | "month" | "range" | "seasonal";

export type VaccinationScheduleItem = {
  vaccineKey: string;
  doseKey: string;
  title: string;
  shortTitle: string;
  timing: VaccinationTiming;
  month: number;
  rangeEndMonth?: number;
  vaccines: string[];
  note: string;
  caution?: string;
};

export type VaccinationScheduleWithDate = VaccinationScheduleItem & {
  scheduledDate: string;
  rangeEndDate?: string;
  status: "overdue" | "near" | "upcoming" | "completed";
  daysFromToday: number;
};

const NOTE = {
  official: "정확한 접종 가능 여부와 간격은 의료기관·보건소·예방접종도우미 기록을 기준으로 확인해요.",
  early: "출생 직후 병원 기록이나 산모수첩에 적힌 접종 여부를 먼저 확인해두면 좋아요.",
  rota: "로타바이러스는 백신 종류에 따라 총 접종 횟수와 마지막 가능 시기가 달라질 수 있어요.",
  flu: "인플루엔자는 계절과 첫 접종 여부에 따라 횟수가 달라질 수 있어요.",
  je: "일본뇌염은 백신 종류에 따라 차수와 간격이 달라질 수 있어 의료기관 안내를 함께 확인해요.",
};

export const vaccinationScheduleItems: VaccinationScheduleItem[] = [
  {
    vaccineKey: "bcg",
    doseKey: "bcg-1",
    title: "BCG 1회",
    shortTitle: "BCG",
    timing: "birth",
    month: 0,
    vaccines: ["BCG"],
    note: `결핵 예방접종이에요. ${NOTE.early}`,
  },
  {
    vaccineKey: "hepb",
    doseKey: "hepb-1",
    title: "B형간염 1차",
    shortTitle: "B형간염 1차",
    timing: "birth",
    month: 0,
    vaccines: ["B형간염"],
    note: `출생 직후 확인하는 첫 차수예요. ${NOTE.early}`,
  },
  {
    vaccineKey: "hepb",
    doseKey: "hepb-2",
    title: "B형간염 2차",
    shortTitle: "B형간염 2차",
    timing: "month",
    month: 1,
    vaccines: ["B형간염"],
    note: `출생 후 1개월 전후로 확인하는 차수예요. ${NOTE.official}`,
  },
  {
    vaccineKey: "dtap",
    doseKey: "dtap-1",
    title: "DTaP 1차",
    shortTitle: "DTaP 1차",
    timing: "month",
    month: 2,
    vaccines: ["DTaP"],
    note: "디프테리아·파상풍·백일해 예방접종의 첫 차수예요. 2개월 접종 예약 때 함께 확인해요.",
  },
  {
    vaccineKey: "ipv",
    doseKey: "ipv-1",
    title: "IPV 1차",
    shortTitle: "IPV 1차",
    timing: "month",
    month: 2,
    vaccines: ["IPV"],
    note: "소아마비 예방접종의 첫 차수예요. 같은 시기 접종 중 빠진 항목이 없는지 따로 체크해요.",
  },
  {
    vaccineKey: "hib",
    doseKey: "hib-1",
    title: "Hib 1차",
    shortTitle: "Hib 1차",
    timing: "month",
    month: 2,
    vaccines: ["Hib"],
    note: "b형헤모필루스인플루엔자 예방접종이에요. 2개월 기초접종 목록에서 개별로 확인해요.",
  },
  {
    vaccineKey: "pcv",
    doseKey: "pcv-1",
    title: "폐렴구균 1차",
    shortTitle: "폐렴구균 1차",
    timing: "month",
    month: 2,
    vaccines: ["폐렴구균"],
    note: "폐렴구균 예방접종의 첫 차수예요. 다른 2개월 접종과 별도로 완료 여부를 남겨요.",
  },
  {
    vaccineKey: "rv",
    doseKey: "rv-1",
    title: "로타바이러스 1차",
    shortTitle: "로타 1차",
    timing: "month",
    month: 2,
    vaccines: ["로타바이러스"],
    note: `먹는 백신으로 안내되는 경우가 많아요. ${NOTE.rota}`,
    caution: "로타바이러스는 첫 접종과 마지막 접종 가능 시기를 의료기관에서 꼭 확인해 주세요.",
  },
  {
    vaccineKey: "dtap",
    doseKey: "dtap-2",
    title: "DTaP 2차",
    shortTitle: "DTaP 2차",
    timing: "month",
    month: 4,
    vaccines: ["DTaP"],
    note: "2개월 접종 이후 이어지는 차수예요. 이전 접종일이 늦어졌다면 다음 간격을 확인해요.",
  },
  {
    vaccineKey: "ipv",
    doseKey: "ipv-2",
    title: "IPV 2차",
    shortTitle: "IPV 2차",
    timing: "month",
    month: 4,
    vaccines: ["IPV"],
    note: "소아마비 예방접종의 두 번째 차수예요. 4개월 접종 중 빠진 항목이 없는지 따로 기록해요.",
  },
  {
    vaccineKey: "hib",
    doseKey: "hib-2",
    title: "Hib 2차",
    shortTitle: "Hib 2차",
    timing: "month",
    month: 4,
    vaccines: ["Hib"],
    note: "Hib 두 번째 차수예요. 같은 날 여러 접종을 하더라도 항목별로 따로 체크할 수 있어요.",
  },
  {
    vaccineKey: "pcv",
    doseKey: "pcv-2",
    title: "폐렴구균 2차",
    shortTitle: "폐렴구균 2차",
    timing: "month",
    month: 4,
    vaccines: ["폐렴구균"],
    note: "폐렴구균 두 번째 차수예요. 병원 기록과 맞춰 완료 여부를 남겨요.",
  },
  {
    vaccineKey: "rv",
    doseKey: "rv-2",
    title: "로타바이러스 2차",
    shortTitle: "로타 2차",
    timing: "month",
    month: 4,
    vaccines: ["로타바이러스"],
    note: `백신 종류에 따라 2회로 끝나거나 3차가 이어질 수 있어요. ${NOTE.rota}`,
    caution: "로타바이러스는 백신 제품별 일정이 달라질 수 있어요.",
  },
  {
    vaccineKey: "hepb",
    doseKey: "hepb-3",
    title: "B형간염 3차",
    shortTitle: "B형간염 3차",
    timing: "month",
    month: 6,
    vaccines: ["B형간염"],
    note: "B형간염 기초 접종 흐름에서 마지막으로 확인하는 차수예요. 산모수첩 기록과 함께 맞춰봐요.",
  },
  {
    vaccineKey: "dtap",
    doseKey: "dtap-3",
    title: "DTaP 3차",
    shortTitle: "DTaP 3차",
    timing: "month",
    month: 6,
    vaccines: ["DTaP"],
    note: "DTaP 기초접종의 세 번째 차수예요. 6개월 접종 항목 중 하나로 따로 체크해요.",
  },
  {
    vaccineKey: "ipv",
    doseKey: "ipv-3",
    title: "IPV 3차",
    shortTitle: "IPV 3차",
    timing: "month",
    month: 6,
    vaccines: ["IPV"],
    note: "IPV 세 번째 차수예요. 이전 차수와 실제 간격은 병원 기록으로 확인해요.",
  },
  {
    vaccineKey: "hib",
    doseKey: "hib-3",
    title: "Hib 3차",
    shortTitle: "Hib 3차",
    timing: "month",
    month: 6,
    vaccines: ["Hib"],
    note: "Hib 세 번째 차수예요. 접종을 같이 진행했는지 항목별로 남겨두면 나중에 확인하기 쉬워요.",
  },
  {
    vaccineKey: "pcv",
    doseKey: "pcv-3",
    title: "폐렴구균 3차",
    shortTitle: "폐렴구균 3차",
    timing: "month",
    month: 6,
    vaccines: ["폐렴구균"],
    note: "폐렴구균 세 번째 차수예요. 6개월 접종 항목 중 완료 여부를 따로 체크해요.",
  },
  {
    vaccineKey: "rv",
    doseKey: "rv-3",
    title: "로타바이러스 3차",
    shortTitle: "로타 3차",
    timing: "month",
    month: 6,
    vaccines: ["로타바이러스"],
    note: `백신 종류에 따라 필요한 경우에만 확인하는 차수예요. ${NOTE.rota}`,
    caution: "2회 접종 백신을 맞은 경우에는 해당되지 않을 수 있어요.",
  },
  {
    vaccineKey: "flu",
    doseKey: "flu-6m-plus",
    title: "인플루엔자 계절접종",
    shortTitle: "독감 접종",
    timing: "seasonal",
    month: 6,
    vaccines: ["인플루엔자"],
    note: `생후 6개월 이후 계절에 따라 확인하는 접종이에요. ${NOTE.flu}`,
    caution: "그해 접종 시기와 첫 접종 여부는 의료기관 안내를 함께 확인하세요.",
  },
  {
    vaccineKey: "mmr",
    doseKey: "mmr-1",
    title: "MMR 1차",
    shortTitle: "MMR 1차",
    timing: "range",
    month: 12,
    rangeEndMonth: 15,
    vaccines: ["MMR"],
    note: "홍역·유행성이하선염·풍진 예방접종이에요. 돌 전후 접종 목록에서 개별로 확인해요.",
  },
  {
    vaccineKey: "var",
    doseKey: "var-1",
    title: "수두 1회",
    shortTitle: "수두",
    timing: "range",
    month: 12,
    rangeEndMonth: 15,
    vaccines: ["수두"],
    note: "돌 전후에 함께 확인하는 접종이에요. 어린이집 준비 전 기록을 정리해두면 좋아요.",
  },
  {
    vaccineKey: "hib",
    doseKey: "hib-4",
    title: "Hib 추가접종",
    shortTitle: "Hib 추가",
    timing: "range",
    month: 12,
    rangeEndMonth: 15,
    vaccines: ["Hib"],
    note: "Hib 기초접종 이후 추가로 확인하는 차수예요. 이전 접종 기록과 이어서 확인해요.",
  },
  {
    vaccineKey: "pcv",
    doseKey: "pcv-4",
    title: "폐렴구균 추가접종",
    shortTitle: "폐렴구균 추가",
    timing: "range",
    month: 12,
    rangeEndMonth: 15,
    vaccines: ["폐렴구균"],
    note: "폐렴구균 기초접종 이후 추가로 확인하는 차수예요. 돌 전후 체크리스트에 따로 남겨요.",
  },
  {
    vaccineKey: "hepa",
    doseKey: "hepa-1",
    title: "A형간염 1차",
    shortTitle: "A형간염 1차",
    timing: "range",
    month: 12,
    rangeEndMonth: 23,
    vaccines: ["A형간염"],
    note: "첫 차수 접종 후 다음 차수 간격을 따로 기록해두면 좋아요. 실제 일정은 의료기관 안내를 기준으로 해요.",
  },
  {
    vaccineKey: "je",
    doseKey: "je-1",
    title: "일본뇌염 1차",
    shortTitle: "일본뇌염 1차",
    timing: "range",
    month: 12,
    rangeEndMonth: 23,
    vaccines: ["일본뇌염"],
    note: `첫 차수 확인용이에요. ${NOTE.je}`,
    caution: "일본뇌염은 백신 종류별 일정 차이가 있어 병원 안내를 따로 확인하세요.",
  },
  {
    vaccineKey: "je",
    doseKey: "je-2",
    title: "일본뇌염 2차",
    shortTitle: "일본뇌염 2차",
    timing: "range",
    month: 13,
    rangeEndMonth: 24,
    vaccines: ["일본뇌염"],
    note: `이전 차수 이후 간격 확인이 중요해요. ${NOTE.je}`,
    caution: "일본뇌염은 접종 방식에 따라 차수가 달라질 수 있어요.",
  },
  {
    vaccineKey: "dtap",
    doseKey: "dtap-4",
    title: "DTaP 4차",
    shortTitle: "DTaP 4차",
    timing: "range",
    month: 15,
    rangeEndMonth: 18,
    vaccines: ["DTaP"],
    note: "기초접종 이후 추가로 확인하는 차수예요. 이전 차수와 간격이 맞는지 의료기관 기록으로 확인해요.",
  },
  {
    vaccineKey: "hepa",
    doseKey: "hepa-2",
    title: "A형간염 2차",
    shortTitle: "A형간염 2차",
    timing: "range",
    month: 18,
    rangeEndMonth: 29,
    vaccines: ["A형간염"],
    note: "1차 이후 일정 간격을 두고 확인하는 차수예요. 1차 접종일을 기준으로 병원에서 다음 일정을 확인해요.",
  },
  {
    vaccineKey: "je",
    doseKey: "je-3",
    title: "일본뇌염 3차",
    shortTitle: "일본뇌염 3차",
    timing: "range",
    month: 24,
    rangeEndMonth: 36,
    vaccines: ["일본뇌염"],
    note: `앞선 접종 방식에 따라 필요 여부가 달라질 수 있어요. ${NOTE.je}`,
    caution: "의료기관에서 사용하는 백신 종류와 차수 안내를 함께 확인해 주세요.",
  },
  {
    vaccineKey: "dtap",
    doseKey: "dtap-5",
    title: "DTaP 5차",
    shortTitle: "DTaP 5차",
    timing: "range",
    month: 48,
    rangeEndMonth: 72,
    vaccines: ["DTaP"],
    note: "만 4~6세 시기에 확인하는 추가접종이에요. 취학 전 접종 기록 점검 때 함께 확인해요.",
  },
  {
    vaccineKey: "ipv",
    doseKey: "ipv-4",
    title: "IPV 4차",
    shortTitle: "IPV 4차",
    timing: "range",
    month: 48,
    rangeEndMonth: 72,
    vaccines: ["IPV"],
    note: "만 4~6세 시기에 확인하는 소아마비 추가접종이에요. 취학 전 기록 정리에 포함해요.",
  },
  {
    vaccineKey: "mmr",
    doseKey: "mmr-2",
    title: "MMR 2차",
    shortTitle: "MMR 2차",
    timing: "range",
    month: 48,
    rangeEndMonth: 72,
    vaccines: ["MMR"],
    note: "만 4~6세 시기 추가로 확인하는 차수예요. 취학 전 예방접종 기록과 함께 점검해요.",
  },
  {
    vaccineKey: "je",
    doseKey: "je-4",
    title: "일본뇌염 추가접종",
    shortTitle: "일본뇌염 추가",
    timing: "range",
    month: 72,
    rangeEndMonth: 84,
    vaccines: ["일본뇌염"],
    note: `만 6세 전후로 확인할 수 있는 추가 접종이에요. ${NOTE.je}`,
    caution: "사용 백신에 따라 해당되지 않을 수 있으니 접종 기록을 기준으로 확인해 주세요.",
  },
];

function addMonthsSafe(date: Date, months: number) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const targetMonthIndex = month + months;
  const targetYear = year + Math.floor(targetMonthIndex / 12);
  const targetMonth = ((targetMonthIndex % 12) + 12) % 12;
  const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();
  return new Date(targetYear, targetMonth, Math.min(day, lastDay));
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

export function getVaccinationScheduleForBirthDate(birthDate: Date, today = new Date()): VaccinationScheduleWithDate[] {
  return vaccinationScheduleItems.map((item) => {
    const scheduled = addMonthsSafe(birthDate, item.month);
    const rangeEnd = item.rangeEndMonth !== undefined ? addMonthsSafe(birthDate, item.rangeEndMonth) : undefined;
    const daysFromToday = diffInDays(today, scheduled);
    const rangeEndDaysFromToday = rangeEnd ? diffInDays(today, rangeEnd) : daysFromToday;
    const status = rangeEndDaysFromToday < -14 ? "overdue" : daysFromToday <= 30 && rangeEndDaysFromToday >= -14 ? "near" : "upcoming";

    return {
      ...item,
      scheduledDate: toDateInputValue(scheduled),
      rangeEndDate: rangeEnd ? toDateInputValue(rangeEnd) : undefined,
      daysFromToday,
      status,
    };
  });
}

export function getVaccinationItem(vaccineKey: string, doseKey: string) {
  return vaccinationScheduleItems.find((item) => item.vaccineKey === vaccineKey && item.doseKey === doseKey) ?? null;
}

export function formatVaccinationWindow(item: Pick<VaccinationScheduleWithDate, "scheduledDate" | "rangeEndDate" | "timing">) {
  if (item.timing === "birth") return "출생 직후";
  if (item.rangeEndDate) return `${item.scheduledDate} ~ ${item.rangeEndDate}`;
  if (item.timing === "seasonal") return `${item.scheduledDate} 이후 계절 확인`;
  return item.scheduledDate;
}
