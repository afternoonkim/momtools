import extraBirthSupportRegionSeeds from "./birthSupportExtraRegions.json";

export type BirthOrder = "first" | "second" | "third" | "fourthPlus";

export type BirthSupportPaymentType = "현금" | "계좌입금" | "바우처" | "지역화폐" | "상품권" | "선불카드" | "현물" | "서비스" | "보험료지원" | "기타";

export type BirthSupportCategory =
  | "전국공통"
  | "지자체출산지원금"
  | "출산장려금"
  | "출산축하금"
  | "출산지원금"
  | "출산축하용품"
  | "다자녀지원금"
  | "육아수당"
  | "건강보험료"
  | "임신축하물품"
  | "부모급여"
  | "아동수당"
  | "가정양육수당"
  | "기타";

export type BirthSupportAmountByOrder = Record<BirthOrder, number>;

export interface BirthSupportBenefit {
  id: string;
  category: BirthSupportCategory;
  name: string;
  paymentType: BirthSupportPaymentType;
  amountByBirthOrder: BirthSupportAmountByOrder;
  displayValue: string;
  includedInTotal: boolean;
  isLocalSupport?: boolean;
  isRecurring?: boolean;
  isConditional?: boolean;
  periodLabel?: string;
  target: string;
  residenceCondition: string;
  applicationPeriod: string;
  applicationMethod: string;
  contact: string;
  note: string;
}

export interface MonthlySupportScheduleItem {
  ageGroup: string;
  ageRange: string;
  firstEncounterVoucher: string;
  parentalBenefit: string;
  childAllowance: string;
  homeCareAllowance: string;
  monthlyTotalText: string;
}

export interface BirthSupportRegion {
  sido: string;
  sigungu: string;
  regionCode: string;
  title: string;
  sourceName: string;
  sourceUrl: string;
  updatedAt: string;
  benefits: BirthSupportBenefit[];
}

export const birthOrderLabels: Record<BirthOrder, string> = {
  first: "첫째아",
  second: "둘째아",
  third: "셋째아",
  fourthPlus: "넷째아 이상",
};

const firstEncounterVoucher: BirthSupportBenefit = {
  id: "first-encounter-voucher",
  category: "전국공통",
  name: "첫만남이용권",
  paymentType: "바우처",
  amountByBirthOrder: { first: 2_000_000, second: 3_000_000, third: 3_000_000, fourthPlus: 3_000_000 },
  displayValue: "첫째아 200만 원, 둘째아 이상 300만 원",
  includedInTotal: true,
  target: "2026년 출생한 대한민국 국적 아동 중 출생신고가 완료되어 주민등록번호를 부여받은 아동입니다.",
  residenceCondition: "전국 공통 지원이며, 아동의 주민등록상 주소지를 기준으로 신청합니다.",
  applicationPeriod: "출생일로부터 60일 이내 신청을 권장하며, 사용 기한은 아동 출생일로부터 2년입니다.",
  applicationMethod: "아동의 주민등록상 주소지 읍·면·동 행정복지센터 방문 신청 또는 정부24·복지로 홈페이지/앱 온라인 신청이 가능합니다.",
  contact: "보건복지상담센터 129 또는 관할 읍·면·동 행정복지센터",
  note: "국민행복카드 바우처 포인트로 지급됩니다. 대형마트, 백화점, 온라인 쇼핑몰 등 대부분의 판매처에서 사용할 수 있지만 유흥업소, 사행업종, 레저업종 등은 제한됩니다.",
};

const parentalBenefit: BirthSupportBenefit = {
  id: "parental-benefit",
  category: "부모급여",
  name: "부모급여",
  paymentType: "계좌입금",
  amountByBirthOrder: { first: 18_000_000, second: 18_000_000, third: 18_000_000, fourthPlus: 18_000_000 },
  displayValue: "0세 월 100만 원, 1세 월 50만 원 기준 총 1,800만 원",
  includedInTotal: true,
  isRecurring: true,
  periodLabel: "0~23개월 월 지급",
  target: "소득·재산과 관계없이 만 2세 미만, 0~23개월 모든 아동입니다.",
  residenceCondition: "전국 공통 지원입니다.",
  applicationPeriod: "출생신고 이후 가능한 빨리 신청하는 것이 좋습니다. 실제 지급 시작월은 신청 시점에 따라 달라질 수 있습니다.",
  applicationMethod: "복지로, 정부24, 읍·면·동 행정복지센터에서 신청할 수 있습니다.",
  contact: "주소지 읍·면·동 행정복지센터 또는 보건복지상담센터 129",
  note: "어린이집을 이용하는 경우 부모급여 전액을 현금으로 받는 것이 아니라 보육료를 차감한 뒤 남는 차액이 현금으로 지급됩니다.",
};

const childAllowance: BirthSupportBenefit = {
  id: "child-allowance",
  category: "아동수당",
  name: "아동수당",
  paymentType: "계좌입금",
  amountByBirthOrder: { first: 11_340_000, second: 11_340_000, third: 11_340_000, fourthPlus: 11_340_000 },
  displayValue: "비수도권 월 10.5만 원, 만 9세 미만 기준 최대 1,134만 원",
  includedInTotal: true,
  isRecurring: true,
  periodLabel: "0~8세 월 지급",
  target: "2026년 기준 만 9세 미만 아동입니다. 2017년생 이후 출생 아동부터 순차 적용되는 연령 확대 기준을 확인합니다.",
  residenceCondition: "전국 공통 지원이지만 2026년 한시적으로 수도권·비수도권 지급액이 달라질 수 있습니다. 현재 계산기는 비수도권 월 10.5만 원을 기본값으로 반영했습니다.",
  applicationPeriod: "2026년 4월부터 확대 내용이 적용되며, 1~3월분은 소급 적용 안내를 확인해야 합니다.",
  applicationMethod: "복지로, 정부24 또는 아동의 주민등록상 주소지 읍·면·동 주민센터에서 신청할 수 있습니다.",
  contact: "주소지 읍·면·동 행정복지센터 또는 보건복지상담센터 129",
  note: "기존 신청자는 재신청이 필요하지 않을 수 있으나, 연령 초과로 지급이 종료된 경우에는 안내에 따라 재신청 여부를 확인해야 합니다. 비수도권 및 인구감소지역은 지자체별 추가 수당으로 11만~13만 원까지 달라질 수 있어 실제 금액 확인이 필요합니다.",
};

const homeCareAllowance: BirthSupportBenefit = {
  id: "home-care-allowance",
  category: "가정양육수당",
  name: "가정양육수당",
  paymentType: "계좌입금",
  amountByBirthOrder: { first: 6_200_000, second: 6_200_000, third: 6_200_000, fourthPlus: 6_200_000 },
  displayValue: "24개월 이상~86개월 미만 월 10만 원 기준 최대 620만 원",
  includedInTotal: true,
  isRecurring: true,
  isConditional: true,
  periodLabel: "24~85개월 조건부 월 지급",
  target: "어린이집, 유치원 등을 이용하지 않고 가정에서 양육하는 24개월 이상~86개월 미만 영유아입니다.",
  residenceCondition: "전국 공통 지원이지만 어린이집·유치원 이용 여부에 따라 지급 대상이 달라집니다.",
  applicationPeriod: "가정양육 전환 또는 해당 월 기준으로 신청 조건을 확인해야 합니다.",
  applicationMethod: "읍·면·동 행정복지센터 방문 신청 또는 복지로·정부24 온라인 신청으로 확인합니다.",
  contact: "주소지 읍·면·동 행정복지센터 또는 보건복지상담센터 129",
  note: "일반 아동은 월 10만 원입니다. 장애아동은 24~36개월 미만 월 20만 원, 36~86개월 미만 월 10만 원 지원 기준을 별도로 확인해야 합니다. 보육료·유아학비 지원과 중복 수령 여부도 반드시 확인해야 합니다.",
};

const commonBenefits = [firstEncounterVoucher, parentalBenefit, childAllowance, homeCareAllowance];

function createLocalBenefit(input: Omit<BirthSupportBenefit, "isLocalSupport">): BirthSupportBenefit {
  return { ...input, isLocalSupport: true };
}

export const commonMonthlySupportSchedule: MonthlySupportScheduleItem[] = [
  {
    ageGroup: "0세",
    ageRange: "0개월~11개월",
    firstEncounterVoucher: "첫째 200만 원 / 둘째 이상 300만 원(1회)",
    parentalBenefit: "월 100만 원",
    childAllowance: "수도권 월 10만 원 / 비수도권 월 10.5만 원",
    homeCareAllowance: "-",
    monthlyTotalText: "첫만남이용권 + 월 110만~110.5만 원",
  },
  {
    ageGroup: "1세",
    ageRange: "12개월~23개월",
    firstEncounterVoucher: "-",
    parentalBenefit: "월 50만 원",
    childAllowance: "수도권 월 10만 원 / 비수도권 월 10.5만 원",
    homeCareAllowance: "-",
    monthlyTotalText: "월 60만~60.5만 원",
  },
  {
    ageGroup: "2~6세",
    ageRange: "24개월~85개월",
    firstEncounterVoucher: "-",
    parentalBenefit: "-",
    childAllowance: "수도권 월 10만 원 / 비수도권 월 10.5만 원",
    homeCareAllowance: "월 10만 원(조건부)",
    monthlyTotalText: "월 20만~20.5만 원",
  },
  {
    ageGroup: "7~8세",
    ageRange: "86개월~107개월",
    firstEncounterVoucher: "-",
    parentalBenefit: "-",
    childAllowance: "수도권 월 10만 원 / 비수도권 월 10.5만 원",
    homeCareAllowance: "-",
    monthlyTotalText: "월 10만~10.5만 원",
  },
];

export const birthSupportRegions: BirthSupportRegion[] = [
  {
    sido: "제주특별자치도",
    sigungu: "전체",
    regionCode: "jeju",
    title: "제주도 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 제주도 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "jeju-birth-grant",
      category: "지자체출산지원금",
      name: "제주도 출산지원금",
      paymentType: "현금",
      amountByBirthOrder: { first: 5_000_000, second: 10_000_000, third: 10_000_000, fourthPlus: 10_000_000 },
      displayValue: "첫째아 500만 원(5년 분할), 둘째아 이상 1,000만 원(9년 분할)",
      includedInTotal: true,
      isRecurring: true,
      
      periodLabel: "분할 지급",
      target: "제주특별자치도에 주민등록상 주소를 두고 거주하는 부 또는 모가 출생 또는 입양한 아동입니다.",
      residenceCondition: "첫째아는 출생일 기준 6개월 이전부터, 둘째아 이상은 출생일 기준 12개월 이전부터 제주특별자치도에 주민등록상 주소를 두고 거주해야 합니다.",
      applicationPeriod: "출생 후 1년 이내 신청",
      applicationMethod: "거주지 관할 읍·면·동 주민센터 방문 신청",
      contact: "제주특별자치도 복지가족국 복지정책과 064-710-2875",
      note: "첫째아는 2025년 1월 1일 이후, 둘째아 이상은 2021년 1월 1일 이후 출생·입양 기준입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "합천군",
    regionCode: "gyeongnam-hapcheon",
    title: "경남 합천군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 합천군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "hapcheon-birth-incentive",
      category: "출산장려금",
      name: "합천군 출산장려금",
      paymentType: "바우처",
      amountByBirthOrder: { first: 1_000_000, second: 3_000_000, third: 10_000_000, fourthPlus: 10_000_000 },
      displayValue: "첫째 100만 원, 둘째 300만 원, 셋째 이상 1,000만 원",
      includedInTotal: true,
      isRecurring: true,
      
      periodLabel: "분할 또는 사용기간 확인",
      target: "출생신고 되어 주민등록번호를 부여받은 2024년 이후 출생아입니다.",
      residenceCondition: "합천군 기준 출생신고 및 주민등록 요건을 확인해야 합니다.",
      applicationPeriod: "아동 출생일로부터 2년 사용 기준",
      applicationMethod: "행정복지센터 방문 또는 복지로·정부24 온라인 신청",
      contact: "합천군 담당부서 확인 필요",
      note: "사용처 제한이 있는 지원으로 안내되어 있어 계산기에서는 바우처성 지원으로 분류했습니다.",
    }),
      createLocalBenefit({
      id: "hapcheon-multichild",
      category: "다자녀지원금",
      name: "합천군 다자녀 지원금",
      paymentType: "계좌입금",
      amountByBirthOrder: { first: 0, second: 12_600_000, third: 12_600_000, fourthPlus: 12_600_000 },
      displayValue: "둘째 이상 월 15만 원, 만 7세 미만 기준 최대 1,260만 원",
      includedInTotal: true,
      isRecurring: true,
      
      periodLabel: "만 7세 미만 월 지급",
      target: "만 7세 미만 둘째 이상 자녀가 있는 가정입니다.",
      residenceCondition: "부모와 첫째·둘째 이상 자녀가 주민등록을 군에 등재해야 합니다.",
      applicationPeriod: "지원자격 충족 시 신청",
      applicationMethod: "합천군 안내에 따라 신청",
      contact: "합천군 미래성장활력과 055-930-3587",
      note: "둘째 이상에게만 적용되는 월 지급성 지원입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "함안군",
    regionCode: "gyeongnam-haman",
    title: "경남 함안군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 함안군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "haman-birth-grant",
      category: "출산지원금",
      name: "함안군 출산지원금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 3_000_000, third: 10_000_000, fourthPlus: 10_000_000 },
      displayValue: "첫째 100만 원, 둘째 300만 원, 셋째 1,000만 원",
      includedInTotal: true,
      isRecurring: true,
      
      periodLabel: "분할 지급",
      target: "함안군에 출생신고 또는 입양신고를 한 가정입니다.",
      residenceCondition: "신생아 출생일 또는 입양일 기준 부모 모두 6개월 이전부터 함안군에 주민등록을 두고 실제 거주해야 합니다. 예외 사유가 있는 경우 부모 중 1명 기준도 가능하며, 6개월 미충족 시 6개월 경과 후 신청할 수 있습니다.",
      applicationPeriod: "거주기간 충족 후 신청",
      applicationMethod: "주소지 읍·면사무소 총무담당 신청",
      contact: "함안군 혁신전략담당관 055-580-2543",
      note: "둘째는 첫해 100만 원 후 2년 분할, 셋째는 첫해 200만 원 후 4년 분할 지급입니다.",
    }),
      createLocalBenefit({
      id: "haman-birth-goods",
      category: "출산축하용품",
      name: "함안군 출산축하 용품",
      paymentType: "현물",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "보습세트, 빨대컵, 내의, 칫솔 등",
      includedInTotal: false,
      
      
      
      target: "함안군에 주민등록을 둔 보건소 등록 임산부입니다.",
      residenceCondition: "임신 8개월부터 분만 전까지, 조산 시 분만 후 한 달 내 수령 기준입니다.",
      applicationPeriod: "임신 8개월부터 분만 전까지",
      applicationMethod: "보건소 등록 후 수령",
      contact: "함안군 보건소 모자보건실 055-580-3025",
      note: "금액이 명시되지 않은 현물 지원이라 총액 계산에는 포함하지 않았습니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "하동군",
    regionCode: "gyeongnam-hadong",
    title: "경남 하동군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 하동군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "hadong-childcare-allowance",
      category: "육아수당",
      name: "하동형 육아수당",
      paymentType: "지역화폐",
      amountByBirthOrder: { first: 45_200_000, second: 45_200_000, third: 45_200_000, fourthPlus: 45_200_000 },
      displayValue: "출산축하금 200만 원 + 12~83개월 월 60만 원",
      includedInTotal: true,
      isRecurring: true,
      
      periodLabel: "0~83개월 지급",
      target: "출생한 달을 포함해 84개월까지의 아동을 양육하는 친권자입니다.",
      residenceCondition: "아동이 하동군에 주민등록되어 있고, 부 또는 모가 출생일 기준 6개월 이상 하동군에 주민등록되어 있어야 합니다. 6개월 미만이면 6개월 경과 후 지원됩니다.",
      applicationPeriod: "지원기준 충족 후 신청",
      applicationMethod: "하동군 안내에 따라 신청",
      contact: "하동군 지역활력추진단 055-880-2844",
      note: "하동사랑상품권으로 지급되며 상품권 유효기간은 발행일부터 1년입니다.",
    }),
      createLocalBenefit({
      id: "hadong-birth-goods",
      category: "출산축하용품",
      name: "하동군 출산용품 구입비",
      paymentType: "현물",
      amountByBirthOrder: { first: 500_000, second: 500_000, third: 500_000, fourthPlus: 500_000 },
      displayValue: "50만 원 상당 출산축하용품",
      includedInTotal: true,
      
      
      
      target: "하동군 출산가정입니다.",
      residenceCondition: "하동군 지원기준을 확인해야 합니다.",
      applicationPeriod: "출산 후 신청",
      applicationMethod: "하동군 안내에 따라 신청",
      contact: "하동군 지역활력추진단 055-880-2844",
      note: "현물성 지원 가치로 총액에 포함했습니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "통영시",
    regionCode: "gyeongnam-tongyeong",
    title: "경남 통영시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 통영시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "tongyeong-birth-grant",
      category: "출산지원금",
      name: "통영시 출산지원금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 2_000_000, third: 3_000_000, fourthPlus: 3_000_000 },
      displayValue: "첫째 100만 원, 둘째 200만 원, 셋째 이후 300만 원",
      includedInTotal: true,
      
      
      
      target: "통영시에 출생아 주민등록을 등재한 부 또는 모입니다.",
      residenceCondition: "신생아 출생일 기준 6개월 전부터 신청일까지 통영시에 주민등록이 계속되어 있어야 하며, 6개월 미만이면 6개월 경과 후 지원됩니다.",
      applicationPeriod: "출생 후 지원대상 충족 시 신청",
      applicationMethod: "읍·면·동 주민센터 신청",
      contact: "통영시 여성가족과 055-650-4634",
      note: "출생 시 지급되는 지자체 출산지원금입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "창원시",
    regionCode: "gyeongnam-changwon",
    title: "경남 창원시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 창원시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "changwon-birth-congrats",
      category: "출산축하금",
      name: "창원시 출산축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 500_000, second: 2_000_000, third: 2_000_000, fourthPlus: 2_000_000 },
      displayValue: "첫째 50만 원, 둘째 이상 200만 원",
      includedInTotal: true,
      
      
      
      target: "영아의 출생신고일 기준 부 또는 모가 창원시에 거주하는 가정입니다.",
      residenceCondition: "출생신고일 기준 3개월 전부터 신청일까지 계속 창원시에 주민등록을 두고 거주해야 합니다. 3개월 미만이면 3개월 이상 거주 후 지원됩니다.",
      applicationPeriod: "첫 출산축하금은 출생신고일로부터 1년 이내, 1주년 축하금은 1년 계속 거주한 날부터 1년 이내",
      applicationMethod: "주소지 읍·면·동 행정복지센터 신청",
      contact: "창원시 여성가족과 055-225-3981 및 구청 가정복지과",
      note: "둘째 이상은 출산 시 100만 원, 시민 1주년 100만 원 구조이며 1주년 축하금은 방문 신청이 필요합니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "창녕군",
    regionCode: "gyeongnam-changnyeong",
    title: "경남 창녕군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 창녕군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "changnyeong-birth-incentive",
      category: "출산장려금",
      name: "창녕군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 2_000_000, second: 4_000_000, third: 10_000_000, fourthPlus: 10_000_000 },
      displayValue: "첫째 200만 원, 둘째 400만 원, 셋째 이상 1,000만 원",
      includedInTotal: true,
      
      
      
      target: "창녕군에 출생신고를 한 출산가정입니다.",
      residenceCondition: "출생신고일 또는 입양일 기준 부모가 3개월 이상 계속 군내 주민등록 및 실제 거주해야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "주소지 읍·면사무소 방문 신청",
      contact: "창녕군 노인여성아동과 055-530-1423",
      note: "창녕군 출산장려금 기준입니다.",
    }),
      createLocalBenefit({
      id: "changnyeong-pregnancy-goods",
      category: "임신축하물품",
      name: "창녕군 임신축하물품",
      paymentType: "현물",
      amountByBirthOrder: { first: 50_000, second: 50_000, third: 50_000, fourthPlus: 50_000 },
      displayValue: "1인 5만 원 상당 축하물품",
      includedInTotal: true,
      
      
      
      target: "창녕군에 주민등록한 보건소 등록 임산부입니다.",
      residenceCondition: "군내 주민등록 및 보건소 등록 기준입니다.",
      applicationPeriod: "임신 중 수시 신청",
      applicationMethod: "방문 신청 또는 맘편한임신 온라인 신청",
      contact: "창녕군보건소 모자보건실 055-530-6275",
      note: "임신축하물품 지원 가치로 총액에 포함했습니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "진주시",
    regionCode: "gyeongnam-jinju",
    title: "경남 진주시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 진주시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "jinju-birth-congrats",
      category: "출산축하금",
      name: "진주시 출산축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 2_000_000, third: 6_000_000, fourthPlus: 6_000_000 },
      displayValue: "첫째 100만 원, 둘째 200만 원, 셋째 이상 600만 원",
      includedInTotal: true,
      
      
      
      target: "진주시에 출생신고를 한 모든 출생가정입니다.",
      residenceCondition: "출생아 출생일 기준 90일 전부터 진주시에 주소를 둔 부 또는 모 기준입니다.",
      applicationPeriod: "출생신고일로부터 180일 이내",
      applicationMethod: "진주시 안내에 따라 신청",
      contact: "진주시 여성가족과 인구정책팀 055-749-8527",
      note: "셋째 이상은 출생 시 200만 원, 생후 1~4년까지 매년 100만 원 구조입니다.",
    }),
      createLocalBenefit({
      id: "jinju-birth-goods",
      category: "출산축하용품",
      name: "진주시 출산용품 구입비",
      paymentType: "현금",
      amountByBirthOrder: { first: 100_000, second: 100_000, third: 100_000, fourthPlus: 100_000 },
      displayValue: "출생아 1인당 10만 원",
      includedInTotal: true,
      
      
      
      target: "진주시에 출생신고를 한 모든 출생가정입니다.",
      residenceCondition: "출생아 출생일 기준 90일 전부터 진주시에 주소를 둔 부 또는 모 기준입니다.",
      applicationPeriod: "출생일로부터 180일 이내",
      applicationMethod: "진주시 안내에 따라 신청",
      contact: "진주시 여성가족과 가족정책팀 055-749-8527",
      note: "다태아는 10만 원 × 다태아 수 기준입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "의령군",
    regionCode: "gyeongnam-uiryeong",
    title: "경남 의령군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 의령군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "uiryeong-birth-incentive",
      category: "출산장려금",
      name: "의령군 출산장려금(지자체 추가 계산액)",
      paymentType: "현금",
      amountByBirthOrder: { first: 2_000_000, second: 4_000_000, third: 11_000_000, fourthPlus: 11_000_000 },
      displayValue: "공식 안내 총액: 첫째 400만 원, 둘째 700만 원, 셋째 이상 1,400만 원(첫만남이용권 포함)",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "의령군에 출생신고한 출생아 또는 입양아 가정입니다.",
      residenceCondition: "신생아 출생일 또는 입양일 기준 부 또는 모가 의령군에 6개월 이상 계속 거주해야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "거주지 관할 읍·면사무소 신청",
      contact: "의령군 소멸위기대응추진담당 055-570-2924",
      note: "공식 금액에 첫만남이용권이 포함되어 있어, 계산기에서는 전국 공통 첫만남이용권과 중복되지 않도록 지자체 추가분만 더했습니다.",
    }),
      createLocalBenefit({
      id: "uiryeong-health-insurance",
      category: "건강보험료",
      name: "의령군 출생아 건강보험 지원",
      paymentType: "보험료지원",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "월 24,000~28,000원씩 5년 납입, 10년 보장",
      includedInTotal: false,
      
      
      
      target: "의령군에 주민등록을 두고 거주하는 영유아입니다.",
      residenceCondition: "의령군에 반드시 출생신고되어야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "거주지 관할 읍·면사무소 신청",
      contact: "의령군 소멸위기대응추진단 055-570-2924",
      note: "보험상품과 보험료 범위에 따라 실제 지원 가치가 달라져 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "양산시",
    regionCode: "gyeongnam-yangsan",
    title: "경남 양산시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 양산시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "yangsan-birth-incentive",
      category: "출산장려금",
      name: "양산시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 500_000, second: 1_000_000, third: 2_000_000, fourthPlus: 2_000_000 },
      displayValue: "첫째 50만 원, 둘째 100만 원, 셋째 이상 200만 원",
      includedInTotal: true,
      
      
      
      target: "자녀와 보호자가 함께 양산시에 주민등록을 두고 실제 거주하는 세대입니다.",
      residenceCondition: "출생일 또는 입양일부터 신청일 현재까지 양산시에 실제 거주해야 합니다.",
      applicationPeriod: "출생신고일로부터 6개월 이내",
      applicationMethod: "읍·면·동에 출생신고 후 출산 서비스 통합처리 신청서 제출",
      contact: "양산시 여성청소년과 055-392-3622",
      note: "양산시 출산장려금 기준입니다.",
    }),
      createLocalBenefit({
      id: "yangsan-birth-goods",
      category: "출산축하용품",
      name: "양산시 출산축하용품 지원",
      paymentType: "지역화폐",
      amountByBirthOrder: { first: 100_000, second: 100_000, third: 100_000, fourthPlus: 100_000 },
      displayValue: "양산사랑카드 10만 포인트",
      includedInTotal: true,
      
      
      
      target: "출생신고를 한 출생아 가정입니다.",
      residenceCondition: "관내 주민등록을 둔 부 또는 모 기준입니다.",
      applicationPeriod: "출생신고 후 신청",
      applicationMethod: "읍·면·동 행정복지센터 또는 정부24 신청",
      contact: "양산시보건소 모자보건팀 055-392-5275",
      note: "유효기간은 지급일부터 24개월이며 캐시백은 지급되지 않습니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "산청군",
    regionCode: "gyeongnam-sancheong",
    title: "경남 산청군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 산청군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "sancheong-birth-incentive",
      category: "출산장려금",
      name: "산청군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 2_900_000, second: 4_100_000, third: 12_500_000, fourthPlus: 12_500_000 },
      displayValue: "첫째 290만 원, 둘째 410만 원, 셋째 이상 1,250만 원",
      includedInTotal: true,
      
      
      
      target: "출생아의 부 또는 모가 산청군에 거주하는 가정입니다.",
      residenceCondition: "출생일 현재 6개월 이상 관내 주민등록이 되어 있어야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "해당 읍·면사무소 방문 신청",
      contact: "산청군 전략사업담당관 055-970-8973",
      note: "분할 지급 기준을 총액으로 계산했습니다.",
    }),
      createLocalBenefit({
      id: "sancheong-birth-gift",
      category: "출산축하용품",
      name: "산청군 출산축하선물",
      paymentType: "현물",
      amountByBirthOrder: { first: 100_000, second: 100_000, third: 100_000, fourthPlus: 100_000 },
      displayValue: "출산선물세트 10만 원 상당",
      includedInTotal: true,
      
      
      
      target: "관내 주민등록 및 거주, 임산부 등록 가정입니다.",
      residenceCondition: "산청군 관내 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출산 전후 보건소 안내에 따라 신청",
      applicationMethod: "산청군 보건소 안내에 따라 신청",
      contact: "산청군 건강관리과 055-970-7524 / 055-970-7626",
      note: "배냇저고리, 속싸개, 손수건, 목욕용품 등 현물 지원입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "사천시",
    regionCode: "gyeongnam-sacheon",
    title: "경남 사천시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 사천시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "sacheon-birth-grant",
      category: "출산지원금",
      name: "사천시 출산지원금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 2_000_000, third: 8_000_000, fourthPlus: 8_000_000 },
      displayValue: "첫째 100만 원, 둘째 200만 원, 셋째 이상 800만 원",
      includedInTotal: true,
      
      
      
      target: "사천시에 출생아 주민등록을 둔 출산가정입니다.",
      residenceCondition: "출생신고일 기준 부 또는 모가 사천시에 주민등록을 두고 거주해야 합니다.",
      applicationPeriod: "출생신고와 동시에 신청",
      applicationMethod: "주소지 관할 읍·면·동 신청",
      contact: "사천시보건소 건강증진과 출산지원팀 055-831-3609",
      note: "셋째 이상 800만 원 기준입니다.",
    }),
      createLocalBenefit({
      id: "sacheon-birth-goods",
      category: "출산축하용품",
      name: "사천시 출산축하용품",
      paymentType: "현물",
      amountByBirthOrder: { first: 40_000, second: 40_000, third: 40_000, fourthPlus: 40_000 },
      displayValue: "출생아 1인당 4만 원 상당",
      includedInTotal: true,
      
      
      
      target: "당해연도 관내 출생신고한 모든 출생아입니다.",
      residenceCondition: "사천시 관내 출생신고 기준입니다.",
      applicationPeriod: "출생신고와 동시에 신청",
      applicationMethod: "주소지 관할 읍·면·동 신청",
      contact: "사천시보건소 건강증진과 출산지원팀 055-831-3609",
      note: "출산축하용품 세트 지원입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "밀양시",
    regionCode: "gyeongnam-miryang",
    title: "경남 밀양시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 밀양시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "miryang-birth-incentive",
      category: "출산장려금",
      name: "밀양시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 2_000_000, third: 5_000_000, fourthPlus: 5_000_000 },
      displayValue: "첫째 100만 원, 둘째 200만 원, 셋째 이상 500만 원",
      includedInTotal: true,
      
      
      
      target: "출생아 출생일 기준 관내 거주 출산자입니다.",
      residenceCondition: "출생일 기준 6개월 이전부터 계속 관내 주민등록 및 실제 거주해야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "읍·면·동 행정복지센터 방문 또는 정부24 온라인 신청",
      contact: "밀양시 모자보건담당 055-359-7050",
      note: "첫돌·두돌 축하금이 포함된 분할 지급 기준입니다.",
    }),
      createLocalBenefit({
      id: "miryang-birth-congrats",
      category: "출산축하금",
      name: "밀양시 출산축하금",
      paymentType: "현물",
      amountByBirthOrder: { first: 100_000, second: 200_000, third: 300_000, fourthPlus: 300_000 },
      displayValue: "첫째 10만 원 상당, 둘째 20만 원 상당, 셋째 30만 원 상당",
      includedInTotal: true,
      
      
      
      target: "밀양시에 출생신고를 한 출생아 가정입니다.",
      residenceCondition: "출생일 기준 6개월 이전부터 관내 주민등록 및 실제 거주한 부 또는 모 기준입니다.",
      applicationPeriod: "출생신고 시",
      applicationMethod: "관할 읍·면·동 행정복지센터에서 지급",
      contact: "밀양시보건소 모자보건담당 055-359-6987",
      note: "상당액 기준 현물성 지원으로 계산했습니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "남해군",
    regionCode: "gyeongnam-namhae",
    title: "경남 남해군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 남해군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "namhae-birth-congrats",
      category: "출산축하금",
      name: "남해군 출산축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 3_000_000, second: 4_000_000, third: 10_000_000, fourthPlus: 10_000_000 },
      displayValue: "첫째 300만 원, 둘째 400만 원, 셋째 이상 1,000만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "부모가 남해군에 주민등록을 두고 자녀를 출산하여 군에 주민등록을 등재하는 가정입니다.",
      residenceCondition: "자녀 출생일 기준 부모가 3개월 이전부터 계속 군에 주민등록을 두고 있어야 합니다. 미충족 시 전입신고일부터 3개월 경과 다음 달부터 지원됩니다.",
      applicationPeriod: "지원기준 충족 시 신청 가능",
      applicationMethod: "방문 접수",
      contact: "남해군 전략사업단 청년인구팀 055-860-8836",
      note: "일시금과 월 분할 지급을 합산한 총액입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "김해시",
    regionCode: "gyeongnam-gimhae",
    title: "경남 김해시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 김해시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "gimhae-birth-congrats",
      category: "출산축하금",
      name: "김해시 출산축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 1_500_000, third: 2_000_000, fourthPlus: 3_000_000 },
      displayValue: "첫째 100만 원, 둘째 150만 원, 셋째 200만 원, 넷째 300만 원, 다섯째 이상 400만 원",
      includedInTotal: true,
      
      
      
      target: "출생일 기준 90일 이상 신청일 현재까지 김해시에 거주하는 출산가정입니다.",
      residenceCondition: "김해시 거주요건을 충족해야 합니다.",
      applicationPeriod: "출생신고 시 또는 출생일 기준 1년 이내",
      applicationMethod: "출생신고 시 신청",
      contact: "김해시 여성가족과 가족지원팀 055-330-2495",
      note: "넷째 이상 선택 시 계산기는 넷째 300만 원을 적용합니다. 다섯째 이상은 400만 원으로 별도 확인이 필요합니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "고성군",
    regionCode: "gyeongnam-goseong",
    title: "경남 고성군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 고성군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "goseong-birth-incentive",
      category: "출산장려금",
      name: "고성군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 2_000_000, third: 5_000_000, fourthPlus: 5_000_000 },
      displayValue: "첫째 100만 원, 둘째 200만 원, 셋째 이상 500만 원",
      includedInTotal: true,
      
      
      
      target: "고성군에 출생신고를 한 출산가정입니다.",
      residenceCondition: "신생아 출생일 또는 입양일 기준 부모 1명이 6개월 이전부터 군내 주민등록을 계속 두어야 합니다. 6개월 미만이면 6개월 경과 후 신청 가능합니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면사무소 출생신고 시 신청",
      contact: "고성군 인구청년추진단 055-670-2705",
      note: "분할 지급 기준입니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "거창군",
    regionCode: "gyeongnam-geochang",
    title: "경남 거창군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 거창군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "geochang-birth-congrats",
      category: "출산축하금",
      name: "거창군 출산축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 5_000_000, second: 5_000_000, third: 5_000_000, fourthPlus: 5_000_000 },
      displayValue: "출생순위와 관계없이 500만 원",
      includedInTotal: true,
      
      
      
      target: "거창군에 출생신고를 한 부 또는 모입니다.",
      residenceCondition: "관내 주민등록 3개월 이상 및 출생신고일 기준 6개월간 주소 유지 조건을 확인해야 합니다.",
      applicationPeriod: "출산일로부터 12개월 이내",
      applicationMethod: "읍·면사무소 방문 신청",
      contact: "거창군 인구교육과 인구정책담당 055-940-8885",
      note: "출생신고일 기준 6개월간 주소 유지 시 지급됩니다.",
    })],
  },
  {
    sido: "경상남도",
    sigungu: "거제시",
    regionCode: "gyeongnam-geoje",
    title: "경남 거제시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경남 거제시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "geoje-birth-incentive",
      category: "출산장려금",
      name: "거제시 출산장려금",
      paymentType: "선불카드",
      amountByBirthOrder: { first: 1_000_000, second: 3_000_000, third: 8_000_000, fourthPlus: 8_000_000 },
      displayValue: "첫째 100만 원, 둘째 300만 원, 셋째 이상 800만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "거제시에 출생등록된 1세 영유아를 둔 보호자입니다.",
      residenceCondition: "영유아와 함께 거제시에 주민등록을 두고 신청일 기준 3개월 이상 실제 거주해야 합니다.",
      applicationPeriod: "1세 첫돌부터 2세가 되는 생일 전일까지",
      applicationMethod: "아동 주소지 면·동 주민센터 또는 정부24 신청",
      contact: "거제시 가족정책과 인구정책팀 055-639-4934",
      note: "사용처 제한이 있는 선불카드로 지급됩니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "포항시",
    regionCode: "gyeongbuk-pohang",
    title: "경북 포항시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 포항시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "pohang-birth-incentive",
      category: "출산장려금",
      name: "포항시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 2_900_000, third: 4_100_000, fourthPlus: 11_300_000 },
      displayValue: "첫째 100만 원, 둘째 290만 원, 셋째 410만 원, 넷째 이상 1,130만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "포항시에 주민등록한 출생아동·전입아동의 부 또는 모입니다.",
      residenceCondition: "출생일 또는 전입일 현재 부 또는 모가 포항시에 주민등록을 두고 거주해야 합니다.",
      applicationPeriod: "출생 또는 전입 후 신청",
      applicationMethod: "포항시 안내에 따라 신청",
      contact: "포항시 여성가족과 054-270-3033",
      note: "전입아동은 전입일 기준 남은 기간만 지급되며 일시금과 첫돌 축하금은 제외됩니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "칠곡군",
    regionCode: "gyeongbuk-chilgok",
    title: "경북 칠곡군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 칠곡군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "chilgok-birth-incentive",
      category: "출산장려금",
      name: "칠곡군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 0, second: 700_000, third: 1_400_000, fourthPlus: 3_800_000 },
      displayValue: "둘째 70만 원, 셋째 140만 원, 넷째 380만 원, 다섯째 이상 740만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "칠곡군에 출생신고를 한 출산가정입니다.",
      residenceCondition: "신생아 출생일 기준 부모 모두 3개월 전부터 관내 주민등록 및 거주해야 합니다. 지원기간 중 전출 시 중단됩니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "칠곡군 안내에 따라 신청",
      contact: "칠곡군 출산지원담당 054-979-8253",
      note: "첫째 지원금은 제공 자료에 명시되지 않아 0원으로 처리했습니다. 넷째 이상 선택 시 넷째 금액을 적용하며 다섯째 이상은 별도 확인이 필요합니다.",
    }),
      createLocalBenefit({
      id: "chilgok-birth-goods",
      category: "출산축하용품",
      name: "칠곡군 임신·출산 축하용품",
      paymentType: "현물",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "체온계 등 물품 지원",
      includedInTotal: false,
      
      
      
      target: "칠곡군에 주소를 둔 임산부입니다.",
      residenceCondition: "관내 주소 기준입니다.",
      applicationPeriod: "수시",
      applicationMethod: "보건소 안내에 따라 신청",
      contact: "칠곡군 보건소 출산지원담당 054-979-8252",
      note: "금액이 명시되지 않아 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "청송군",
    regionCode: "gyeongbuk-cheongsong",
    title: "경북 청송군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 청송군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "cheongsong-birth-incentive",
      category: "출산장려금",
      name: "청송군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 5_800_000, second: 13_000_000, third: 16_000_000, fourthPlus: 19_000_000 },
      displayValue: "첫째 580만 원, 둘째 1,300만 원, 셋째 1,600만 원, 넷째 이상 1,900만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생일 기준 부 또는 모가 청송군에 주민등록을 두고 거주하는 출생아 가정입니다.",
      residenceCondition: "청송군 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "읍·면사무소 신청",
      contact: "청송군 출산지원팀 054-870-7281",
      note: "일시금과 월 분할 지원을 합산한 금액입니다.",
    }),
      createLocalBenefit({
      id: "cheongsong-birth-goods",
      category: "출산축하용품",
      name: "청송군 행복맘꾸러미",
      paymentType: "현물",
      amountByBirthOrder: { first: 200_000, second: 200_000, third: 200_000, fourthPlus: 200_000 },
      displayValue: "육아용품 9종, 20만 원 상당",
      includedInTotal: true,
      
      
      
      target: "청송군 출산가정입니다.",
      residenceCondition: "청송군 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "읍·면사무소 신청",
      contact: "청송군 출산지원팀 054-870-7281",
      note: "현물성 지원 가치로 총액에 포함했습니다.",
    }),
      createLocalBenefit({
      id: "cheongsong-health-insurance",
      category: "건강보험료",
      name: "청송군 출생아 건강보험료 지원",
      paymentType: "보험료지원",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "월 30,000원 이하 5년 납, 10년 보장",
      includedInTotal: false,
      
      
      
      target: "청송군 출생아 가정입니다.",
      residenceCondition: "청송군 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "읍·면사무소 신청",
      contact: "청송군 출산지원팀 054-870-7281",
      note: "보험료가 월 30,000원 이하로 실제 계약에 따라 달라져 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "청도군",
    regionCode: "gyeongbuk-cheongdo",
    title: "경북 청도군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 청도군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "cheongdo-birth-grant",
      category: "출산지원금",
      name: "청도군 출산지원금",
      paymentType: "현금",
      amountByBirthOrder: { first: 5_600_000, second: 14_800_000, third: 21_400_000, fourthPlus: 21_400_000 },
      displayValue: "첫째 560만 원, 둘째 1,480만 원, 셋째 이상 2,140만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "청도군에 출생신고된 출생아 또는 36개월 미만 전입아 가정입니다.",
      residenceCondition: "부 또는 모가 군내 주민등록을 두고 거주해야 합니다.",
      applicationPeriod: "출생 및 전입 신고일로부터 90일 이내",
      applicationMethod: "주소지 관할 읍·면사무소 방문 신청",
      contact: "청도군 건강증진과 출산지원팀 054-370-6482",
      note: "출생시 지급액과 월 지급액을 합산한 금액입니다.",
    }),
      createLocalBenefit({
      id: "cheongdo-birth-goods",
      category: "출산축하용품",
      name: "청도군 출산축하용품",
      paymentType: "현물",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "3개 세트 중 1세트 지원",
      includedInTotal: false,
      
      
      
      target: "청도군에 주민등록을 둔 출생아의 부 또는 모입니다.",
      residenceCondition: "2024년 1월 1일 이후 청도군에 출생등록한 출생아와 동일 세대원인 부 또는 모 기준입니다.",
      applicationPeriod: "자녀 출생 후 90일까지",
      applicationMethod: "읍·면사무소 출산지원금 신청 시 또는 보건소 방문 신청",
      contact: "청도군 건강증진과 출산지원팀 054-370-6482",
      note: "세트별 금액이 명시되지 않아 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "의성군",
    regionCode: "gyeongbuk-uiseong",
    title: "경북 의성군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 의성군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "uiseong-birth-incentive",
      category: "출산장려금",
      name: "의성군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 19_000_000, second: 19_000_000, third: 19_000_000, fourthPlus: 19_000_000 },
      displayValue: "2024년 7월 1일 이후 출생아 총 1,900만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "신생아 출생일 기준 부 또는 모 및 형제자매가 의성군에 주민등록을 두고 거주하는 가정입니다.",
      residenceCondition: "의성군 주민등록 및 거주 기준입니다. 타지역 출생 후 전입한 경우 월 지급액만 지원됩니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면사무소 행복출산 원스톱 또는 정부24 신청",
      contact: "의성군 청년정책과 인구정책팀 054-830-6453",
      note: "출생 시 100만 원, 월 30만 원 × 60개월 기준입니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "울진군",
    regionCode: "gyeongbuk-uljin",
    title: "경북 울진군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 울진군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "uljin-birth-incentive",
      category: "출산장려금",
      name: "울진군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 6_000_000, second: 6_000_000, third: 12_000_000, fourthPlus: 12_000_000 },
      displayValue: "첫째·둘째 월 10만 원, 셋째 이상 월 20만 원을 만 5세 직전 달까지 지급",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "울진군에 부 또는 모와 함께 주민등록을 두고 거주하는 5세 미만 영유아입니다.",
      residenceCondition: "울진군 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출생 및 전입 신고 시 신청",
      applicationMethod: "읍·면사무소 신청",
      contact: "울진군 건강증진과 054-789-5051",
      note: "만 5세 직전 달까지 최대 60개월로 계산했습니다.",
    }),
      createLocalBenefit({
      id: "uljin-birth-goods",
      category: "출산축하용품",
      name: "울진군 출생축하 기념품",
      paymentType: "현물",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "젖병소독기 또는 분유제조기 택 1, 낮잠이불세트 공통",
      includedInTotal: false,
      
      
      
      target: "울진군 출생아입니다.",
      residenceCondition: "관내 출생신고 기준입니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면사무소 출산 서비스 통합처리 신청",
      contact: "울진군 건강증진과 054-789-5053",
      note: "금액이 명시되지 않아 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "울릉군",
    regionCode: "gyeongbuk-ulleung",
    title: "경북 울릉군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 울릉군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "ulleung-birth-incentive",
      category: "출산장려금",
      name: "울릉군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 6_800_000, second: 11_600_000, third: 26_000_000, fourthPlus: 26_000_000 },
      displayValue: "첫째 680만 원, 둘째 1,160만 원, 셋째 이상 2,600만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "울릉군에 주민등록을 두고 실제 거주하는 신생아의 부모 등입니다.",
      residenceCondition: "출생일 기준 6개월 전부터 군에 주민등록을 두고 실제 거주해야 합니다. 미혼모, 입양, 보호자 양육 등 예외 기준이 있습니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "읍·면사무소 행복출산 통합서비스 신청",
      contact: "울릉군보건의료원 건강출산팀 054-790-6824",
      note: "출생축하금 200만 원과 4년간 월 지급액을 합산했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "예천군",
    regionCode: "gyeongbuk-yecheon",
    title: "경북 예천군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 예천군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "yecheon-birth-incentive",
      category: "출산장려금",
      name: "예천군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 2_400_000, second: 4_800_000, third: 7_200_000, fourthPlus: 12_000_000 },
      displayValue: "첫째 240만 원, 둘째 480만 원, 셋째 720만 원, 넷째 이상 1,200만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "예천군 관내에 주민등록을 둔 부 또는 모가 출생신고한 출생아 등입니다.",
      residenceCondition: "출생아와 보호자가 예천군 주민등록 기준을 충족해야 하며 전출 시 지원이 중단됩니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면사무소 원스톱서비스 통합신청",
      contact: "예천군 보건소 모자보건팀 054-650-6436",
      note: "월 지급액을 24개월 기준으로 합산했습니다.",
    }),
      createLocalBenefit({
      id: "yecheon-birth-congrats",
      category: "출산축하금",
      name: "예천군 출산축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 1_000_000, third: 1_000_000, fourthPlus: 1_000_000 },
      displayValue: "출생아당 1회 100만 원",
      includedInTotal: true,
      
      
      
      target: "2023년 1월 1일 이후 출생아입니다.",
      residenceCondition: "자녀의 출생일 기준 지원대상 자녀와 보호자가 예천군 주민등록을 두고 있어야 합니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면 행정복지센터 원스톱서비스 통합신청",
      contact: "예천군 보건소 모자보건팀 054-650-6436",
      note: "출생신고일 기준 매달 말일 출산장려금 지급 계좌로 지급됩니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "영천시",
    regionCode: "gyeongbuk-yeongcheon",
    title: "경북 영천시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 영천시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "yeongcheon-birth-incentive",
      category: "출산장려금",
      name: "영천시 출산·양육 장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 3_000_000, second: 13_000_000, third: 16_000_000, fourthPlus: 19_000_000 },
      displayValue: "첫째 300만 원, 둘째 1,300만 원, 셋째 1,600만 원, 넷째 이상 1,900만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "2025년 1월 1일 이후 출생아 가정입니다.",
      residenceCondition: "부 또는 모가 출산일 기준 영천시에 주민등록을 두고 거주해야 합니다.",
      applicationPeriod: "출생 신고일로부터 90일 이내",
      applicationMethod: "읍·면·동 행정복지센터 또는 정부24 행복출산 신청",
      contact: "영천시 출산지원분야 054-339-7779",
      note: "출생시 지급액과 월 지급액을 합산했습니다.",
    }),
      createLocalBenefit({
      id: "yeongcheon-birth-goods",
      category: "출산축하용품",
      name: "영천시 출산가정 축하용품",
      paymentType: "현물",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "출산 및 육아에 필요한 축하용품 지원",
      includedInTotal: false,
      
      
      
      target: "2024년 12월 25일 이후 출생아 가정입니다.",
      residenceCondition: "부 또는 모가 출산일 기준 영천시에 주민등록을 두고 거주해야 합니다.",
      applicationPeriod: "출생 신고일로부터 90일 이내",
      applicationMethod: "행정복지센터 또는 정부24 행복출산 신청",
      contact: "영천시 출산지원분야 054-339-7779",
      note: "금액이 명시되지 않아 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "영주시",
    regionCode: "gyeongbuk-yeongju",
    title: "경북 영주시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 영주시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "yeongju-birth-incentive",
      category: "출산장려금",
      name: "영주시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 2_900_000, second: 7_700_000, third: 18_500_000, fourthPlus: 18_500_000 },
      displayValue: "첫째 290만 원, 둘째 770만 원, 셋째 이상 1,850만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생일 기준 부 또는 모와 출생아가 영주시에 주소를 두고 거주하는 가정입니다.",
      residenceCondition: "영주시 주소 및 거주 기준입니다. 전입아는 출생 후 월령 기준이 별도로 적용됩니다.",
      applicationPeriod: "출생일 또는 전입일로부터 2개월 이내",
      applicationMethod: "읍·면·동 행정복지센터 방문 신청",
      contact: "영주시 담당부서 054-639-5742",
      note: "출생축하금 50만 원과 월 출생장려금을 합산했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "영양군",
    regionCode: "gyeongbuk-yeongyang",
    title: "경북 영양군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 영양군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "yeongyang-birth-incentive",
      category: "출산장려금",
      name: "영양군 출산장려금",
      paymentType: "계좌입금",
      amountByBirthOrder: { first: 3_600_000, second: 5_400_000, third: 12_000_000, fourthPlus: 12_000_000 },
      displayValue: "첫째 360만 원, 둘째 540만 원, 셋째 이상 1,200만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생일 기준 영양군에 주민등록을 두고 거주하는 출생아의 부 또는 모입니다.",
      residenceCondition: "자녀 모두가 같은 세대에 주민등록이 등재되어 있지 않은 경우 등재된 자녀 기준으로 순위를 산정합니다.",
      applicationPeriod: "출생신고일부터 60일 이내",
      applicationMethod: "출생신고 시 읍·면사무소 행복출산 원스톱 신청",
      contact: "영양군 보건소 모자보건실 054-680-5153",
      note: "신청일 다음 달 10일 개인별 계좌로 지급됩니다. 전출 시 자격이 상실됩니다.",
    }),
      createLocalBenefit({
      id: "yeongyang-health-insurance",
      category: "건강보험료",
      name: "영양군 둘째아 이상 건강보험료 지원",
      paymentType: "보험료지원",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "둘째아 이상 매월 5만 원 이내 보험료 지원",
      includedInTotal: false,
      
      
      
      target: "출생순위와 지원순위가 둘째아 이상인 영양군 출생아 가정입니다.",
      residenceCondition: "영양군 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출생신고일부터 60일 이내",
      applicationMethod: "출생신고 시 읍·면사무소 행복출산 원스톱 신청",
      contact: "영양군 보건소 모자보건실 054-680-5153",
      note: "보험료가 월 5만 원 이내로 실제 계약에 따라 달라져 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "영덕군",
    regionCode: "gyeongbuk-yeongdeok",
    title: "경북 영덕군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 영덕군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "yeongdeok-birth-incentive",
      category: "출산장려금",
      name: "영덕군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 5_800_000, second: 8_200_000, third: 8_200_000, fourthPlus: 8_200_000 },
      displayValue: "첫째 580만 원, 둘째 이상 820만 원(첫돌·입학 축하금 포함)",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생일 기준 신생아의 부 또는 모가 영덕군에 주민등록을 두고 거주하는 가정입니다.",
      residenceCondition: "지원기간 중 출생아 또는 부모가 타 시군으로 전출하면 지원이 중단됩니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면 출산서비스통합처리신청서 또는 정부24·복지로 신청",
      contact: "영덕군 건강관리과 출산지원팀 054-730-6829",
      note: "출생시 월 지급액, 첫돌 축하금, 초등학교 입학 축하금을 합산했습니다.",
    }),
      createLocalBenefit({
      id: "yeongdeok-health-insurance",
      category: "건강보험료",
      name: "영덕군 출생아 건강보험료 지원",
      paymentType: "보험료지원",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "월 3만 원 이내 60회 납입, 18세까지 보장",
      includedInTotal: false,
      
      
      
      target: "출생일 기준 부 또는 모가 영덕군에 주민등록을 두고 거주하는 가정의 출생아입니다.",
      residenceCondition: "영덕군 주민등록 및 거주 기준입니다.",
      applicationPeriod: "출생신고 시 신청",
      applicationMethod: "읍·면 출산서비스통합처리신청서 제출",
      contact: "영덕군 건강관리과 출산지원팀 054-730-6829",
      note: "보험료가 월 3만 원 이내로 실제 계약에 따라 달라져 총액 계산에서는 제외했습니다.",
    }),
      createLocalBenefit({
      id: "yeongdeok-birth-box",
      category: "출산축하용품",
      name: "영덕군 임신·출산 축하 박스",
      paymentType: "현물",
      amountByBirthOrder: { first: 150_000, second: 150_000, third: 150_000, fourthPlus: 150_000 },
      displayValue: "육아용품 15만 원 상당",
      includedInTotal: true,
      
      
      
      target: "영덕군 보건소 등록 임산부 또는 영덕군 출생 등록 가정입니다.",
      residenceCondition: "영덕군 등록 기준입니다.",
      applicationPeriod: "임신 또는 출생 등록 후 신청",
      applicationMethod: "영덕군 보건소 안내에 따라 신청",
      contact: "영덕군 건강관리과 출산지원팀 054-730-6829",
      note: "현물성 지원 가치로 총액에 포함했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "안동시",
    regionCode: "gyeongbuk-andong",
    title: "경북 안동시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 안동시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "andong-birth-incentive",
      category: "출산장려금",
      name: "안동시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 2_400_000, second: 4_800_000, third: 7_200_000, fourthPlus: 7_200_000 },
      displayValue: "첫째 240만 원, 둘째 480만 원, 셋째 이상 720만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생일 또는 입양·전입일 기준 보호자가 안동시에 주소를 둔 24개월 미만 출생아입니다.",
      residenceCondition: "안동시 주소 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "안동시 안내에 따라 신청",
      contact: "안동시 인구정책과 출산장려팀 054-840-5996",
      note: "출생일 기준 2년간 월 지급액을 합산했습니다.",
    }),
      createLocalBenefit({
      id: "andong-birth-congrats",
      category: "출산축하금",
      name: "안동시 출산축하금·돌축하금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_000_000, second: 1_000_000, third: 1_000_000, fourthPlus: 1_000_000 },
      displayValue: "출산축하금 50만 원 + 돌축하금 50만 원",
      includedInTotal: true,
      
      
      
      target: "안동시에 주소를 둔 출생아 가정입니다.",
      residenceCondition: "출산축하금은 출생일 기준 자녀와 함께 안동시에 주소를 둔 가정, 돌축하금은 12개월 동안 계속 주민등록을 둔 가정 기준입니다.",
      applicationPeriod: "출생 및 돌 시점 기준 신청",
      applicationMethod: "안동시 안내에 따라 신청",
      contact: "안동시 인구정책과 출산장려팀 054-840-5996",
      note: "전출 시 자격이 상실됩니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "성주군",
    regionCode: "gyeongbuk-seongju",
    title: "경북 성주군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 성주군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "seongju-birth-incentive",
      category: "출산장려금",
      name: "성주군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 7_200_000, second: 10_800_000, third: 21_600_000, fourthPlus: 28_800_000 },
      displayValue: "첫째 720만 원, 둘째 1,080만 원, 셋째 2,160만 원, 넷째 이상 2,880만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "성주군에 출생신고한 영아의 부 또는 모입니다.",
      residenceCondition: "신청일 기준 6개월 전부터 관내 주민등록을 두어야 하며, 둘째아 이상은 신청 및 지원기간 동안 자녀 모두 성주군에 주민등록을 두어야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "성주군 안내에 따라 신청",
      contact: "성주군 담당부서 054-930-8142",
      note: "월 지급액을 72개월 기준으로 합산했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "상주시",
    regionCode: "gyeongbuk-sangju",
    title: "경북 상주시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 상주시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "sangju-birth-incentive",
      category: "출산장려금",
      name: "상주시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 3_600_000, second: 9_600_000, third: 18_000_000, fourthPlus: 24_000_000 },
      displayValue: "첫째 360만 원, 둘째 960만 원, 셋째 1,800만 원, 넷째 이상 2,400만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "상주시에 주소를 두고 실제 거주하는 출생아 및 만 5세 이하 입양아·전입아입니다.",
      residenceCondition: "관내 주소 및 실제 거주 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "상주시 안내에 따라 신청",
      contact: "상주시 담당부서 054-537-5230",
      note: "월 지급액을 총액으로 환산했습니다.",
    }),
      createLocalBenefit({
      id: "sangju-birth-box",
      category: "출산축하용품",
      name: "상주시 출산축하박스",
      paymentType: "현물",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "지역특산품, 기저귀, 미역, 내의 등",
      includedInTotal: false,
      
      
      
      target: "상주시 출산가정입니다.",
      residenceCondition: "상주시 주소 기준입니다.",
      applicationPeriod: "출생신고 시 통합신청",
      applicationMethod: "읍·면·동 행정복지센터 또는 정부24 행복출산 신청",
      contact: "상주시 담당부서 054-537-5232",
      note: "금액이 명시되지 않아 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "봉화군",
    regionCode: "gyeongbuk-bonghwa",
    title: "경북 봉화군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 봉화군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "bonghwa-birth-incentive",
      category: "출산장려금",
      name: "봉화군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 7_000_000, second: 10_000_000, third: 16_000_000, fourthPlus: 19_000_000 },
      displayValue: "첫째 700만 원, 둘째 1,000만 원, 셋째 1,600만 원, 넷째 이상 1,900만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "봉화군에 주소를 두고 실제 거주하는 출생아 및 만 5세 이하 입양아·전입아입니다.",
      residenceCondition: "관내 주소 및 실제 거주 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "봉화군 안내에 따라 신청",
      contact: "봉화군 담당부서 054-679-6742",
      note: "월 지급액과 출산축하금 100만 원을 합산했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "문경시",
    regionCode: "gyeongbuk-mungyeong",
    title: "경북 문경시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 문경시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "mungyeong-birth-incentive",
      category: "출산장려금",
      name: "문경시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 5_000_000, second: 5_000_000, third: 5_000_000, fourthPlus: 5_000_000 },
      displayValue: "출생순서와 관계없이 500만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "2023년 1월 1일 이후 출생아입니다.",
      residenceCondition: "문경시 조례 기준을 확인해야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "읍·면·동 행정복지센터, 정부24, 복지로 신청",
      contact: "문경시 담당부서 054-550-8185",
      note: "20만 원씩 15개월, 출산축하금 100만 원, 돌축하금 100만 원 구조입니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "김천시",
    regionCode: "gyeongbuk-gimcheon",
    title: "경북 김천시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 김천시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "gimcheon-birth-incentive",
      category: "출산장려금",
      name: "김천시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 3_000_000, second: 5_000_000, third: 8_000_000, fourthPlus: 10_000_000 },
      displayValue: "첫째 300만 원, 둘째 500만 원, 셋째 800만 원, 넷째 이상 1,000만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "주민등록상 신생아를 출생신고한 가정입니다.",
      residenceCondition: "출생일부터 부모 또는 부·모와 함께 김천시에 주민등록이 되어 있고 실제 거주해야 합니다.",
      applicationPeriod: "출생신고일로부터 90일 이내",
      applicationMethod: "해당 읍·면·동 주민센터 신청",
      contact: "김천시 담당부서 054-421-2741",
      note: "축하금과 월 지급액을 합산했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "구미시",
    regionCode: "gyeongbuk-gumi",
    title: "경북 구미시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 구미시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "gumi-birth-incentive",
      category: "출산장려금",
      name: "구미시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_500_000, second: 2_000_000, third: 3_000_000, fourthPlus: 4_000_000 },
      displayValue: "첫째 150만 원, 둘째 200만 원, 셋째 300만 원, 넷째 400만 원, 다섯째 이상 500만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생일에서 지원일까지 구미시에 거주하는 부 또는 모입니다.",
      residenceCondition: "구미시 거주 기준입니다.",
      applicationPeriod: "출생신고 후 90일 이내",
      applicationMethod: "읍·면·동 주민센터 또는 정부24 행복출산 신청",
      contact: "구미시 담당부서 054-480-6528",
      note: "첫 돌분은 현금, 두 돌분은 지역화폐로 지급됩니다. 넷째 이상 선택 시 넷째 금액을 적용합니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "고령군",
    regionCode: "gyeongbuk-goryeong",
    title: "경북 고령군 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 고령군 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "goryeong-birth-incentive",
      category: "출산장려금",
      name: "고령군 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_500_000, second: 4_800_000, third: 7_200_000, fourthPlus: 12_000_000 },
      displayValue: "첫째 150만 원, 둘째 480만 원, 셋째 720만 원, 넷째 이상 1,200만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "고령군에 출생신고한 출생아의 부 또는 모입니다.",
      residenceCondition: "신청일 현재 3개월 이상 고령군에 주소를 두고 출생일로부터 6개월 이내 신청해야 합니다.",
      applicationPeriod: "출생일로부터 6개월 이내",
      applicationMethod: "행복출산 원스톱 통합서비스 또는 보건소 개별신청",
      contact: "고령군 출산지원담당 054-950-7951",
      note: "신청 후 매월 말 집계하여 익월 10일경 개인별 계좌로 지급됩니다.",
    }),
      createLocalBenefit({
      id: "goryeong-health-insurance",
      category: "건강보험료",
      name: "고령군 출생아 건강보험료 지원",
      paymentType: "보험료지원",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "3년 납 7년 보장 보험 지원",
      includedInTotal: false,
      
      
      
      target: "출산장려금 지원대상에 해당하는 출생아입니다.",
      residenceCondition: "고령군 지원대상 기준을 충족해야 하며 전출 시 보험을 해지합니다.",
      applicationPeriod: "출산장려금 신청으로 갈음",
      applicationMethod: "출산장려금 신청서로 신청",
      contact: "고령군 출산지원담당 054-950-7951",
      note: "보험료 금액이 명시되지 않아 총액 계산에서는 제외했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "경주시",
    regionCode: "gyeongbuk-gyeongju",
    title: "경북 경주시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 경주시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "gyeongju-birth-incentive",
      category: "출산장려금",
      name: "경주시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 3_200_000, second: 5_200_000, third: 18_200_000, fourthPlus: 18_200_000 },
      displayValue: "첫째 320만 원, 둘째 520만 원, 셋째 이상 1,820만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "부 또는 모가 경주시에 주민등록을 두고 실거주하는 가정입니다.",
      residenceCondition: "출생일로부터 지원일까지 부 또는 모가 경주시에 주민등록을 두고 실거주해야 하며 전출 시 중단됩니다.",
      applicationPeriod: "출생신고일로부터 6개월 이내",
      applicationMethod: "읍·면·동 행정복지센터 또는 정부24 행복출산 신청",
      contact: "경주시 건강증진과 가족건강팀 054-779-8627~9",
      note: "모든 출생아 출산축하금 20만 원과 월 지급액을 합산했습니다.",
    })],
  },
  {
    sido: "경상북도",
    sigungu: "경산시",
    regionCode: "gyeongbuk-gyeongsan",
    title: "경북 경산시 출산지원금 계산기",
    sourceName: "임신육아종합포털 아이사랑 2026년 경북 경산시 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료",
    sourceUrl: "https://www.childcare.go.kr/?menuno=279",
    updatedAt: "2026-03-17",
    benefits: [...commonBenefits,
      createLocalBenefit({
      id: "gyeongsan-birth-incentive",
      category: "출산장려금",
      name: "경산시 출산장려금",
      paymentType: "현금",
      amountByBirthOrder: { first: 1_200_000, second: 2_400_000, third: 3_600_000, fourthPlus: 12_000_000 },
      displayValue: "첫째 120만 원, 둘째 240만 원, 셋째 360만 원, 넷째 이상 1,200만 원",
      includedInTotal: true,
      isRecurring: true,
      isConditional: true,
      
      target: "출생신고 시 주소지를 경산시로 등록한 자녀를 둔 가정입니다.",
      residenceCondition: "경산시 주소 등록 기준입니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "아동의 주민등록상 주소지 읍·면·동 행정복지센터 방문 신청",
      contact: "경산시 담당부서 053-810-6363",
      note: "분할 지급 기준입니다.",
    }),
      createLocalBenefit({
      id: "gyeongsan-health-insurance",
      category: "건강보험료",
      name: "경산시 출생아 건강보장 보험료지원",
      paymentType: "보험료지원",
      amountByBirthOrder: { first: 0, second: 0, third: 0, fourthPlus: 0 },
      displayValue: "둘째아 이상 월 22,000~27,000원 범위 내 지원",
      includedInTotal: false,
      
      
      
      target: "경산시에 출생신고한 둘째아 이상 출생아입니다.",
      residenceCondition: "신생아 출생일 기준 부 또는 모가 경산시에 주민등록을 두고 있어야 합니다.",
      applicationPeriod: "출생 후 신청",
      applicationMethod: "아동의 주민등록상 주소지 읍·면·동 행정복지센터 방문 신청",
      contact: "경산시 담당부서 053-810-6363",
      note: "보험료 범위가 실제 계약에 따라 달라져 총액 계산에서는 제외했습니다.",
    })],
  }
];


type ExtraBirthSupportBenefitSeed = Omit<BirthSupportBenefit, "isLocalSupport">;
type ExtraBirthSupportRegionSeed = {
  sido: string;
  sigungu: string;
  regionCode: string;
  sourceRegionLabel: string;
  benefits: ExtraBirthSupportBenefitSeed[];
};

const extraBirthSupportRegions = (extraBirthSupportRegionSeeds as unknown as ExtraBirthSupportRegionSeed[]).map((seed): BirthSupportRegion => ({
  sido: seed.sido,
  sigungu: seed.sigungu,
  regionCode: seed.regionCode,
  title: `${seed.sourceRegionLabel} 출산지원금 계산기`,
  sourceName: `임신육아종합포털 아이사랑 2026년 ${seed.sourceRegionLabel} 출산지원금 게시물 및 사용자가 제공한 지역별 상세 자료`,
  sourceUrl: "https://www.childcare.go.kr/?menuno=279",
  updatedAt: "2026-03-17",
  benefits: [...commonBenefits, ...seed.benefits.map((benefit) => createLocalBenefit(benefit))],
}));

birthSupportRegions.push(...extraBirthSupportRegions);

export function formatWon(amount: number) {
  if (amount >= 10_000) {
    return `${Math.round(amount / 10_000).toLocaleString("ko-KR")}만 원`;
  }

  return `${amount.toLocaleString("ko-KR")}원`;
}

export function calculateBirthSupport(regionCode: string, birthOrder: BirthOrder) {
  const region = birthSupportRegions.find((item) => item.regionCode === regionCode) ?? birthSupportRegions[0];
  const items = region.benefits.map((benefit) => {
    const amount = benefit.amountByBirthOrder[birthOrder] ?? 0;

    return {
      ...benefit,
      amount,
      formattedAmount: formatWon(amount),
    };
  });

  const includedItems = items.filter((item) => item.includedInTotal);
  const totalAmount = includedItems.reduce((sum, item) => sum + item.amount, 0);
  const cashAmount = includedItems
    .filter((item) => item.paymentType === "현금" || item.paymentType === "계좌입금")
    .reduce((sum, item) => sum + item.amount, 0);
  const voucherAmount = includedItems
    .filter((item) => item.paymentType === "바우처")
    .reduce((sum, item) => sum + item.amount, 0);
  const conditionalAmount = includedItems
    .filter((item) => item.isConditional)
    .reduce((sum, item) => sum + item.amount, 0);
  const commonSupportAmount = includedItems
    .filter((item) => !item.isLocalSupport)
    .reduce((sum, item) => sum + item.amount, 0);
  const localSupportAmount = includedItems
    .filter((item) => item.isLocalSupport)
    .reduce((sum, item) => sum + item.amount, 0);

  return {
    region,
    birthOrder,
    birthOrderLabel: birthOrderLabels[birthOrder],
    items,
    totalAmount,
    cashAmount,
    voucherAmount,
    conditionalAmount,
    commonSupportAmount,
    localSupportAmount,
    formattedTotal: formatWon(totalAmount),
    formattedCash: formatWon(cashAmount),
    formattedVoucher: formatWon(voucherAmount),
    formattedConditional: formatWon(conditionalAmount),
    formattedCommonSupport: formatWon(commonSupportAmount),
    formattedLocalSupport: formatWon(localSupportAmount),
  };
}
