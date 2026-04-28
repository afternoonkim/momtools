export type GovernmentPolicyCategory =
  | "pregnancy-birth"
  | "childcare-benefit"
  | "work-parenting"
  | "care-education"
  | "medical-health"
  | "local-check";

export type GovernmentPolicyStatus = "2026년 공식자료 확인" | "신청 전 재확인" | "지역별 확인" | "시행 시기 확인";

export interface GovernmentPolicyCategoryInfo {
  label: string;
  shortLabel: string;
  description: string;
  heroLead: string;
  searchPlaceholder: string;
  guide: string[];
}

export interface GovernmentPolicySource {
  name: string;
  url: string;
  checkedAt: string;
  sourceUpdatedAt?: string;
}

export interface GovernmentPolicyAmountCard {
  label: string;
  amount: string;
  description: string;
}

export interface GovernmentPolicyDataRow {
  label: string;
  value: string;
  note?: string;
}

export interface GovernmentPolicyEntry {
  slug: string;
  category: GovernmentPolicyCategory;
  title: string;
  shortTitle: string;
  summary: string;
  status: GovernmentPolicyStatus;
  verifiedFacts: string[];
  target: string[];
  benefit: string[];
  apply: string[];
  checkBefore: string[];
  userTip: string[];
  caution: string;
  keywords: string[];
  sources: GovernmentPolicySource[];
  relatedSlugs: string[];
  amountCards?: GovernmentPolicyAmountCard[];
  dataRows?: GovernmentPolicyDataRow[];
  regionName?: string;
}

export const POLICY_VERIFIED_AT = "2026-04-28";
export const POLICY_VERIFIED_LABEL = "2026년 4월 28일 공식자료 확인 기준";

export const governmentPolicyCategories: Record<GovernmentPolicyCategory, GovernmentPolicyCategoryInfo> = {
  "pregnancy-birth": {
    label: "임신·출산 지원",
    shortLabel: "임신·출산",
    description: "임신 확인부터 출산 직후까지 받을 수 있는 바우처, 출산 초기 지원금, 산후관리, 난임 지원을 실제 금액과 신청 조건 중심으로 정리했습니다.",
    heroLead: "임신·출산 지원은 신청 순서가 중요합니다. 임신 확인 뒤 진료비 바우처를 먼저 확인하고, 출생신고 뒤 첫만남이용권·부모급여·아동수당·지역 지원금을 이어서 확인해 보세요.",
    searchPlaceholder: "예: 첫만남이용권, 국민행복카드, 산후도우미, 난임, 임신 바우처",
    guide: [
      "임신 확인서를 받은 뒤 국민행복카드 바우처 신청 가능 여부를 먼저 확인해 보세요.",
      "출생신고 이후 신청하는 지원은 아이의 주민등록번호와 신청 기한이 함께 연결됩니다.",
      "산모·신생아 건강관리, 난임 지원은 보건소 기준과 지역 예외 지원이 달라질 수 있습니다.",
    ],
  },
  "childcare-benefit": {
    label: "양육·보육 지원",
    shortLabel: "양육·보육",
    description: "부모급여, 아동수당, 양육수당, 어린이집 보육료처럼 아이 나이와 기관 이용 여부에 따라 달라지는 지원을 실제 금액 중심으로 정리했습니다.",
    heroLead: "양육·보육 지원은 아이의 개월수, 어린이집·유치원 이용 여부, 거주 지역에 따라 달라집니다. 같은 아이도 집에서 양육할 때와 기관을 이용할 때 신청해야 하는 지원이 바뀔 수 있습니다.",
    searchPlaceholder: "예: 부모급여, 아동수당, 양육수당, 보육료, 어린이집",
    guide: [
      "0~23개월은 부모급여를 먼저 확인하고, 24개월 이후 가정양육은 양육수당을 함께 확인해 보세요.",
      "어린이집을 이용하면 보육료 바우처와 부모급여 차액이 함께 조정될 수 있습니다.",
      "아동수당은 2026년부터 적용 기준이 바뀌는 부분이 있어 최신 기준을 다시 확인하는 것이 좋습니다.",
    ],
  },
  "work-parenting": {
    label: "일·육아 병행",
    shortLabel: "일·육아",
    description: "출산전후휴가급여, 배우자 출산휴가, 육아휴직급여, 근로시간 단축처럼 회사 신청과 고용보험 신청이 함께 필요한 제도를 정리했습니다.",
    heroLead: "일·육아 병행 제도는 회사에 휴가를 쓰는 절차와 고용보험 급여를 신청하는 절차가 나뉘는 경우가 많습니다. 휴가 가능 여부와 실제 급여 기준을 따로 확인해 보세요.",
    searchPlaceholder: "예: 육아휴직급여, 배우자 출산휴가, 출산휴가, 근로시간 단축",
    guide: [
      "회사 신청, 고용보험 신청, 필요 서류를 따로 정리하면 신청 과정이 훨씬 쉬워집니다.",
      "육아휴직급여는 사용 개월수와 통상임금, 특례 적용 여부에 따라 금액이 달라집니다.",
      "신청 기한을 놓치지 않도록 휴가 시작일과 종료일을 달력에 표시해 두세요.",
    ],
  },
  "care-education": {
    label: "돌봄·교육 지원",
    shortLabel: "돌봄·교육",
    description: "아이돌봄서비스, 유아학비, 무상보육, 긴급돌봄처럼 돌봄 공백과 교육비 부담을 줄이는 지원을 정리했습니다.",
    heroLead: "돌봄·교육 지원은 아이 나이, 양육 공백 사유, 이용 기관, 필요한 시간대에 따라 달라집니다. 신청 전에 우리 집에 실제로 필요한 돌봄 시간이 어느 정도인지 먼저 적어보세요.",
    searchPlaceholder: "예: 아이돌봄서비스, 유아학비, 무상보육, 야간연장, 긴급돌봄",
    guide: [
      "아이돌봄서비스는 시간제, 영아종일제, 질병감염아동 지원처럼 유형을 먼저 고르는 것이 중요합니다.",
      "유치원과 어린이집 지원은 신청 경로와 적용 월이 다를 수 있습니다.",
      "야간·긴급 돌봄은 지역과 기관 운영 상황에 따라 실제 이용 가능 여부가 달라질 수 있습니다.",
    ],
  },
  "medical-health": {
    label: "의료·건강 지원",
    shortLabel: "의료·건강",
    description: "영유아 건강검진, 미숙아·선천성이상아 의료비, 신생아 검사, 기저귀·조제분유처럼 건강 확인과 의료비 부담을 줄이는 지원을 정리했습니다.",
    heroLead: "의료·건강 지원은 검사 시기, 퇴원일, 신청 기한, 영수증 보관 여부가 중요합니다. 병원 진료와 보건소 신청을 따로 생각하지 말고 함께 확인해 보세요.",
    searchPlaceholder: "예: 영유아 건강검진, 미숙아 의료비, 선천성이상아, 난청검사, 기저귀",
    guide: [
      "영유아 건강검진은 월령별 기간이 정해져 있어 검진 가능 시기를 놓치지 않는 것이 중요합니다.",
      "의료비 지원은 영수증, 세부내역서, 진단서가 필요한 경우가 많아 처음부터 보관해 두는 것이 좋습니다.",
      "검사 결과 해석은 의료진 상담이 우선이고, 지원금 신청은 보건소 기준을 함께 확인해야 합니다.",
    ],
  },
  "local-check": {
    label: "지역별 출산지원금",
    shortLabel: "지역 지원",
    description: "아이사랑 출산지원금 목록을 기준으로 전국 시·군·구와 자치구의 출산지원금, 산후조리비, 출산축하금, 양육수당을 지역명·금액·조건 중심으로 정리했습니다.",
    heroLead: "전국 공통 첫만남이용권을 확인했다면 마지막으로 우리 동네 지자체 혜택을 꼭 확인해 보세요. 같은 출산이라도 지역명, 전입일, 거주 기간, 출생 순서에 따라 실제 받을 수 있는 금액과 신청 기한이 달라집니다.",
    searchPlaceholder: "예: 청주시 출산지원금, 합천군 출산장려금, 서울 산후조리비, 대구 군위군 출산지원금",
    guide: [
      "지역 지원은 주민등록상 주소지 기준으로 보는 경우가 많습니다.",
      "전입일과 거주 기간 조건 때문에 출산 전 이사 계획이 있다면 미리 확인하는 것이 좋습니다.",
      "첫만남이용권과 지자체 지원금은 별도 제도이므로 각각 신청해야 하는지 확인해 보세요.",
    ],
  },
};

const official = {
  mohwParent: { name: "보건복지부 부모급여 안내", url: "https://www.mohw.go.kr/menu.es?mid=a10711030600", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-25" },
  firstVoucher: { name: "국민행복카드 첫만남이용권 안내", url: "https://www.voucher.go.kr/voucher/firstEncounter.do", checkedAt: POLICY_VERIFIED_AT },
  pregnancyVoucher: { name: "국민행복카드 임신·출산 진료비 지원 안내", url: "https://www.voucher.go.kr/voucher/pregnancy.do", checkedAt: POLICY_VERIFIED_AT },
  pregnancyVoucherMohw: { name: "보건복지부 임신·출산진료비지원사업 안내", url: "https://www.mohw.go.kr/menu.es?mid=a10705020100", checkedAt: POLICY_VERIFIED_AT },
  childAllowance: { name: "보건복지부 아동수당 확대 보도자료", url: "https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1490257&mid=a10503010100&nPage=1&tag=", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-04-24" },
  childcareFee: { name: "임신육아종합포털 아이사랑 2026년 보육료 공지", url: "https://www.childcare.go.kr/index.html?BVIEWGB=2&bgb=1&bid=1895876&menuno=325", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2025-12-29" },
  idolbomGuide: { name: "아이돌봄서비스 공식 안내", url: "https://idolbom.go.kr/front/biz/srvcGuide", checkedAt: POLICY_VERIFIED_AT },
  work24ParentalLeave: { name: "고용24 육아휴직급여 안내", url: "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=10&systClId=SC00000251&systId=SI00000402", checkedAt: POLICY_VERIFIED_AT },
  worklifeSpouseLeave: { name: "고용노동부 일생활균형 배우자 출산휴가 안내", url: "https://www.worklife.kr/website_renew/index/workerSupport/childbirth_childcare_support.asp", checkedAt: POLICY_VERIFIED_AT },
  worklifeMaternity: { name: "고용노동부 일생활균형 출산전후휴가 급여 안내", url: "https://www.worklife.kr/website_renew/index/workerSupport/maternity_benefit.asp", checkedAt: POLICY_VERIFIED_AT },
  worklifeReducedPregnancy: { name: "고용노동부 일생활균형 임신기 근로시간 단축 안내", url: "https://www.worklife.kr/website_renew/index/workerSupport/reduced_hours_during_pregnancy.asp", checkedAt: POLICY_VERIFIED_AT },
  worklifeReducedChildcare: { name: "고용노동부 일생활균형 육아기 근로시간 단축 안내", url: "https://www.worklife.kr/website_renew/index/workerSupport/reduced_hours_childcare_benefit.asp", checkedAt: POLICY_VERIFIED_AT },
  worklifeFamilyCare: { name: "고용노동부 일생활균형 가족돌봄휴가 안내", url: "https://www.worklife.kr/website_renew/index/workerSupport/family_care_leave.asp", checkedAt: POLICY_VERIFIED_AT },
  newbornCareGuide: { name: "보건복지부 산모·신생아 건강관리 지원사업 안내", url: "https://www.mohw.go.kr/board.es?act=view&bid=0026&list_no=1488490&mid=a10409020000", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-01-02" },
  infertilityKorea: { name: "대한민국 정책브리핑 난임지원정책 안내", url: "https://www.korea.kr/news/reporterView.do?newsId=148959999", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-04" },
  mohwMotherChild: { name: "보건복지부 모자보건지원 안내", url: "https://www.mohw.go.kr/menu.es?mid=a10711020200", checkedAt: POLICY_VERIFIED_AT },
  infantCheckup: { name: "국민건강보험공단 영유아 건강검진 안내", url: "https://www.nhis.or.kr/nhis/healthin/wbhaca04800m01.do", checkedAt: POLICY_VERIFIED_AT },
  childcareLocalBirth: { name: "임신육아종합포털 아이사랑 지자체 출산지원금", url: "https://www.childcare.go.kr/?menuno=279", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-17" },
  seoulPostpartum: { name: "서울시 서울형 산후조리경비 지원", url: "https://umppa.seoul.go.kr/hmpg/sprt/bzin/bzmgComtDetail.do?biz_mng_no=58D83411277E40D1BFF6255A10CBCDD5", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-30" },
  seoulNews: { name: "서울시 다자녀 산후조리경비·교통비 개편 안내", url: "https://news.seoul.go.kr/welfare/archives/577980", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-18" },
  gyeonggiPostpartum: { name: "경기도 산후조리비 지원", url: "https://web1.gg.go.kr/contents/contents.do?ciIdx=987173&menuId=266159", checkedAt: POLICY_VERIFIED_AT },
  gyeonggiWelfare: { name: "경기도 2026 복지서비스 산후조리비 안내", url: "https://www.gg.go.kr/cmmn/download.do?idx=889074", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-16" },
  chungbukBirth: { name: "충청북도 출산육아수당 안내", url: "https://www.chungbuk.go.kr/young/contents.do?key=4946", checkedAt: POLICY_VERIFIED_AT },
  chungbukPolicy: { name: "충청북도 출산지원정책 안내", url: "https://www.chungbuk.go.kr/www/contents.do?key=507", checkedAt: POLICY_VERIFIED_AT },
  cheongjuNews: { name: "청주시 출산·양육 현금 혜택 안내", url: "https://www.cheongju.go.kr/dosi/selectBbsNttView.do?bbsNo=40&integrDeptCode=&key=4049&nttNo=251533&pageIndex=1&searchCnd=all&searchCtgry=&searchKrwd=", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-01-27" },
  busanBirth: { name: "부산광역시 출산장려시책", url: "https://www.busan.go.kr/childcare/childcare010101", checkedAt: POLICY_VERIFIED_AT },
  busanSuyeong: { name: "부산 수영구 출산장려금 안내", url: "https://www.suyeong.go.kr/index.suyeong?menuCd=DOM_000000118005001002", checkedAt: POLICY_VERIFIED_AT },
  daeguBirth: { name: "대구광역시 출산지원·다자녀지원", url: "https://www.daegu.go.kr/woman/index.do?menu_id=00934300", checkedAt: POLICY_VERIFIED_AT, sourceUpdatedAt: "2026-03-25" },
  daeguDalseo: { name: "생활법령정보 대구 달서구 출산장려금", url: "https://easylaw.go.kr/CSP/CnpClsOrdinMain.laf?areaCsmOrdinSeq=273&ccfNo=1&cciNo=1&cnpClsNo=1&popMenu=ov", checkedAt: POLICY_VERIFIED_AT },
  daejeonAllowance: { name: "대전광역시 대전형 양육기본수당", url: "https://www.daejeon.go.kr/drh/DrhContentsHtmlView.do?menuSeq=7205", checkedAt: POLICY_VERIFIED_AT },
  incheonAngel: { name: "인천광역시 천사(1040) 지원금", url: "https://www.incheon.go.kr/earlychild/EC060101", checkedAt: POLICY_VERIFIED_AT },
  incheonDream: { name: "인천광역시 아이 꿈 수당", url: "https://www.incheon.go.kr/earlychild/EC060102", checkedAt: POLICY_VERIFIED_AT },
  incheonTransport: { name: "인천광역시 임산부 교통비 지원", url: "https://www.incheon.go.kr/earlychild/EC060103", checkedAt: POLICY_VERIFIED_AT },
  incheonPostpartum: { name: "인천광역시 맘편한 산후조리비", url: "https://www.incheon.go.kr/earlychild/EC060104", checkedAt: POLICY_VERIFIED_AT },
  gov24: { name: "정부24 행복출산 원스톱서비스", url: "https://www.gov.kr/portal/onestopSvc/happyBirth", checkedAt: POLICY_VERIFIED_AT },
  bokjiro: { name: "복지로 복지서비스 안내", url: "https://www.bokjiro.go.kr/", checkedAt: POLICY_VERIFIED_AT },
} satisfies Record<string, GovernmentPolicySource>;

type Seed = Omit<GovernmentPolicyEntry, "relatedSlugs"> & { relatedSlugs?: string[] };

function entry(seed: Seed): GovernmentPolicyEntry {
  return {
    ...seed,
    relatedSlugs: seed.relatedSlugs ?? [],
    keywords: Array.from(new Set([...seed.keywords, governmentPolicyCategories[seed.category].label, seed.shortTitle, seed.title])).slice(0, 16),
  };
}

const basePolicies: GovernmentPolicyEntry[] = [
  entry({
    slug: "pregnancy-medical-voucher-data",
    category: "pregnancy-birth",
    title: "임신·출산 진료비 지원은 국민행복카드로 얼마까지 받을 수 있나요?",
    shortTitle: "임신·출산 진료비 지원",
    summary: "임신·출산 진료비 지원은 임신이 확인된 건강보험 가입자 또는 피부양자가 국민행복카드 바우처로 진료비를 지원받는 제도입니다. 단태아 100만 원, 다태아 기본 140만 원, 분만취약지 20만 원 추가 기준을 먼저 확인하면 됩니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "단태아", amount: "100만 원", description: "임신 1회 기준 기본 지원금입니다." },
      { label: "다태아", amount: "140만 원", description: "다태아 임산부 기본 지원금입니다." },
      { label: "분만취약지", amount: "+20만 원", description: "분만취약지 대상이면 추가 지원을 확인할 수 있습니다." },
    ],
    dataRows: [
      { label: "지원 방식", value: "국민행복카드 바우처", note: "임신·출산 관련 진료비와 약제·치료재료 구입에 사용" },
      { label: "사용 가능 범위", value: "임산부 진료비, 2세 미만 영유아 진료·처방 약제 등", note: "사용처는 카드사와 요양기관 기준을 함께 확인" },
      { label: "신청 전 확인", value: "임신 확인 정보 전산 등록 여부", note: "산부인과 등록 후 신청하면 처리 과정이 수월합니다." },
    ],
    verifiedFacts: ["단태아 기본 100만 원이 안내되어 있습니다.", "다태아 기본 140만 원과 분만취약지 20만 원 추가 기준이 안내되어 있습니다.", "국민행복카드 바우처 방식으로 사용합니다."],
    target: ["임신·출산이 확인된 건강보험 가입자 또는 피부양자", "국민행복카드로 진료비 바우처를 사용하려는 임산부", "다태아·분만취약지 추가 지원을 확인하려는 가정"],
    benefit: ["임신·출산 관련 진료비 부담을 줄일 수 있습니다.", "일부 약제·치료재료 구입에도 사용할 수 있습니다.", "다태아와 분만취약지 대상은 추가 지원 여부를 확인할 수 있습니다."],
    apply: ["산부인과에서 임신 확인 후 국민행복카드 바우처를 신청합니다.", "기존 국민행복카드가 있다면 바우처 추가 신청 가능 여부를 확인합니다.", "카드사, 국민건강보험공단, 바우처 공식 안내에서 신청 경로를 확인합니다."],
    checkBefore: ["임신 확인 정보가 전산 등록되어 있는지 확인하세요.", "다태아·분만취약지 추가 지원 대상인지 확인하세요.", "바우처 사용기한과 사용 가능 병원·약국을 확인하세요."],
    userTip: ["임신 확인서를 받은 날 카드 신청까지 같이 진행하면 다음 진료비 결제부터 편하게 사용할 수 있습니다.", "카드사 앱에서 잔액과 사용기한을 확인해 두면 바우처가 남는 일을 줄일 수 있습니다."],
    caution: "의료급여 수급자, 다태아 추가 지원, 분만취약지 여부는 일반 기준과 다를 수 있습니다. 결제 전 병원과 카드사에서 사용 가능 여부를 확인해 주세요.",
    keywords: ["임신출산 진료비 지원", "국민행복카드 임신", "임신 바우처", "다태아 임신 지원", "분만취약지 지원"],
    sources: [official.pregnancyVoucher, official.pregnancyVoucherMohw],
    relatedSlugs: ["first-encounter-voucher-data", "newborn-mother-care-data", "seoul-postpartum-support"],
  }),
  entry({
    slug: "first-encounter-voucher-data",
    category: "pregnancy-birth",
    title: "첫만남이용권은 첫째와 둘째 이상 금액이 어떻게 다른가요?",
    shortTitle: "첫만남이용권",
    summary: "첫만남이용권은 출생아에게 지급되는 국민행복카드 바우처입니다. 2024년 1월 1일 이후 출생아 기준 첫째아 200만 원, 둘째아 이상 300만 원을 먼저 확인하면 됩니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "첫째아", amount: "200만 원", description: "출생아 1명 기준 국민행복카드 바우처" },
      { label: "둘째아 이상", amount: "300만 원", description: "2024년 이후 출생아 기준 상향 금액" },
    ],
    dataRows: [
      { label: "지원대상", value: "출생신고되어 주민등록번호를 부여받은 아동" },
      { label: "신청처", value: "주민센터, 복지로, 정부24" },
      { label: "확인할 점", value: "사용기한, 사용 제외 업종, 다태아 아동별 지급 기준" },
    ],
    verifiedFacts: ["첫째아 200만 원이 안내되어 있습니다.", "둘째아 이상은 300만 원이 안내되어 있습니다.", "국민행복카드 바우처 방식으로 지급됩니다."],
    target: ["출생신고를 마친 아동", "국민행복카드 바우처를 신청하려는 보호자", "첫째와 둘째 이상 금액 차이를 확인하려는 가정"],
    benefit: ["출산 직후 병원비와 육아용품 지출에 활용할 수 있습니다.", "전국 공통 지원으로 지역 출산지원금과 별도로 확인할 수 있습니다.", "둘째 이상은 첫째보다 높은 금액을 받을 수 있습니다."],
    apply: ["출생신고 후 주민센터, 복지로, 정부24에서 신청합니다.", "국민행복카드 발급 또는 기존 카드 사용 가능 여부를 확인합니다.", "지역 출산지원금과 별도 신청인지 함께 확인하세요."],
    checkBefore: ["출생일 기준 사용기한을 확인하세요.", "사용 제외 업종과 잔액 확인 방법을 미리 확인하세요.", "출생신고와 함께 부모급여·아동수당도 같이 신청 가능한지 확인하세요."],
    userTip: ["출생신고를 하면서 부모급여, 아동수당과 함께 신청 목록으로 정리해 두면 좋습니다.", "출산 직후 큰 지출이 많은 항목부터 사용 계획을 세우면 바우처를 놓치지 않고 쓰기 쉽습니다."],
    caution: "사용기한이 지나면 남은 포인트가 소멸될 수 있습니다. 결제 전 사용 가능 업종과 잔액을 확인해 주세요.",
    keywords: ["첫만남이용권", "첫만남이용권 둘째", "첫만남이용권 사용처", "국민행복카드 출산", "출생아 바우처"],
    sources: [official.firstVoucher, official.gov24],
    relatedSlugs: ["parental-benefit-data", "child-allowance-data", "local-birth-grant-check-data"],
  }),
  entry({
    slug: "newborn-mother-care-data",
    category: "pregnancy-birth",
    title: "산모·신생아 건강관리 지원은 소득 기준과 신청 시기가 어떻게 되나요?",
    shortTitle: "산모·신생아 건강관리",
    summary: "산모·신생아 건강관리 지원은 건강관리사가 출산 가정을 방문해 산모 회복과 신생아 돌봄을 돕는 바우처입니다. 기준 중위소득 150% 이하가 기본 안내되지만 지자체 예외 지원이 있을 수 있어 보건소 확인이 중요합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "지원 기준", amount: "중위소득 150% 이하", description: "기본 안내 기준이며 예외 지원은 지역별 확인" },
      { label: "서비스 기간", amount: "5~40일", description: "태아 유형, 출산 순위, 서비스 유형에 따라 달라질 수 있습니다." },
    ],
    dataRows: [
      { label: "신청 시기", value: "출산예정일 전후 정해진 기간", note: "보통 예정일 40일 전부터 출산 후 일정 기간 안에 확인" },
      { label: "신청처", value: "복지로 또는 관할 보건소" },
      { label: "확인할 점", value: "본인부담금, 제공기관 예약 가능 여부, 지역 예외지원" },
    ],
    verifiedFacts: ["기준 중위소득 150% 이하 출산가정이 기본 안내 대상입니다.", "소득 기준 초과 가정도 지자체 예외 지원이 있을 수 있습니다.", "보건소 또는 복지로 신청 흐름을 확인해야 합니다."],
    target: ["출산 예정일이 가까운 가정", "산후도우미 정부지원을 알아보는 산모", "둘째아 이상·쌍태아·미숙아 등 예외 지원 가능성을 확인하려는 가정"],
    benefit: ["건강관리사 방문 서비스 이용권을 지원받을 수 있습니다.", "지원 기간과 본인부담금은 태아 유형, 출산 순위, 소득 구간에 따라 달라집니다.", "지역별 추가 본인부담금 지원이 있을 수 있습니다."],
    apply: ["복지로 또는 관할 보건소에서 신청합니다.", "제공기관 예약 가능 여부와 본인부담금을 같이 확인합니다.", "출산 예정일, 실제 출산일, 신청 마감일을 달력에 표시해 두세요."],
    checkBefore: ["건강보험료 기준과 예외 지원 여부를 보건소에 확인하세요.", "원하는 제공기관의 예약 가능 여부를 미리 확인하세요.", "지역 산후조리비 지원과 중복 활용이 가능한지 확인하세요."],
    userTip: ["출산 후에는 신청이 늦어질 수 있어 예정일 전에 보건소와 제공기관을 미리 확인하는 편이 좋습니다.", "지역마다 추가 지원이 달라질 수 있으니 시·군·구 공지도 함께 보세요."],
    caution: "산모·신생아 건강관리 지원은 지역 예산과 예외 지원 기준 영향을 받습니다. 실제 대상 여부와 본인부담금은 관할 보건소에서 확인해 주세요.",
    keywords: ["산모신생아 건강관리", "산후도우미 정부지원", "산모신생아 바우처", "보건소 산후도우미", "출산 후 지원"],
    sources: [official.newbornCareGuide, official.mohwMotherChild],
    relatedSlugs: ["first-encounter-voucher-data", "seoul-postpartum-support", "gyeonggi-postpartum-support"],
  }),
  entry({
    slug: "infertility-treatment-support-data",
    category: "pregnancy-birth",
    title: "난임부부 시술비 지원은 소득 기준 없이 신청할 수 있나요?",
    shortTitle: "난임부부 시술비 지원",
    summary: "난임부부 시술비 지원은 난임 진단을 받은 부부가 체외수정과 인공수정 시술비 일부를 지원받는 제도입니다. 2024년부터 소득 기준 폐지와 출산당 총 25회 지원 확대가 안내되어 있습니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "지원 횟수", amount: "출산당 총 25회", description: "체외수정 20회, 인공수정 5회 기준 안내" },
      { label: "소득 기준", amount: "폐지 안내", description: "지역 추가 지원과 세부 금액은 보건소 확인" },
    ],
    dataRows: [
      { label: "지원 대상", value: "난임 진단을 받은 부부", note: "법적 혼인과 사실혼은 서류 확인이 다를 수 있습니다." },
      { label: "신청처", value: "e보건소 또는 관할 보건소" },
      { label: "주의", value: "시술 시작 전 지원결정통지서 필요 여부 확인" },
    ],
    verifiedFacts: ["2024년부터 소득 기준 폐지가 안내되었습니다.", "체외수정 20회와 인공수정 5회, 출산당 총 25회 기준이 안내되었습니다.", "사실혼 최초 신청은 보건소 방문이 필요할 수 있습니다."],
    target: ["난임 진단서를 받은 부부", "사실혼 관계로 난임 시술을 준비하는 부부", "시술 전 지원결정통지서가 필요한지 확인하려는 가정"],
    benefit: ["체외수정과 인공수정 시술비 일부를 지원받을 수 있습니다.", "지원 상한액은 시술 종류, 회차, 지역 기준에 따라 달라질 수 있습니다.", "지역 추가 지원이 있는지 관할 보건소 확인이 필요합니다."],
    apply: ["난임 진단서를 준비한 뒤 e보건소 또는 관할 보건소에서 신청합니다.", "배우자 개인정보 제공 동의 절차를 확인합니다.", "시술 시작 전 지원결정 여부를 확인합니다."],
    checkBefore: ["지원결정통지서가 시술 시작 전에 필요한지 확인하세요.", "시술 병원과 보건소의 처리 기간을 함께 확인하세요.", "사실혼, 외국인 배우자, 건강보험 자격은 별도 확인이 필요할 수 있습니다."],
    userTip: ["시술 병원에 필요한 서류를 먼저 물어보면 보건소 신청 준비가 쉬워집니다.", "지역 추가 지원은 주민등록지 기준으로 달라질 수 있어 보건소 공지를 꼭 확인하세요."],
    caution: "난임 지원은 시술 시작 시점과 지원결정통지 여부가 중요합니다. 이미 시작한 시술은 지원 적용이 어려울 수 있으니 사전에 확인해 주세요.",
    keywords: ["난임부부 시술비 지원", "난임 지원 소득기준 폐지", "체외수정 지원", "인공수정 지원", "e보건소 난임"],
    sources: [official.infertilityKorea, official.gov24],
    relatedSlugs: ["pregnancy-medical-voucher-data", "newborn-mother-care-data"],
  }),
  entry({
    slug: "parental-benefit-data",
    category: "childcare-benefit",
    title: "부모급여는 0세와 1세가 각각 얼마인가요?",
    shortTitle: "부모급여",
    summary: "부모급여는 2세 미만 아동의 양육 부담을 줄이기 위한 지원입니다. 보건복지부 공식 안내 기준 0세는 월 100만 원, 1세는 월 50만 원입니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "0세", amount: "월 100만 원", description: "0~11개월 기준 현금 또는 보육료 차액" },
      { label: "1세", amount: "월 50만 원", description: "12~23개월 기준 현금 또는 보육료 차액" },
    ],
    dataRows: [
      { label: "지원대상", value: "2세 미만 0~23개월 아동" },
      { label: "어린이집 이용", value: "보육료 바우처와 차액 지급 방식 확인" },
      { label: "신청처", value: "주민센터 또는 복지로" },
    ],
    verifiedFacts: ["지원대상은 2세 미만 0~23개월 아동입니다.", "0세는 월 100만 원, 1세는 월 50만 원이 안내되어 있습니다.", "어린이집 이용 시 보육료 바우처 또는 차액 지급 방식으로 달라질 수 있습니다."],
    target: ["0~23개월 아동을 양육하는 가정", "출생신고 후 현금 지원을 확인하려는 보호자", "어린이집 입소 전후 금액 변화를 확인하려는 가정"],
    benefit: ["0세 월 100만 원을 받을 수 있습니다.", "1세 월 50만 원을 받을 수 있습니다.", "어린이집 이용 시 보육료를 제외한 차액이 지급될 수 있습니다."],
    apply: ["출생신고 후 주민센터 또는 복지로에서 신청합니다.", "어린이집 입소 예정이면 보육료 전환과 차액 지급을 함께 확인합니다.", "출생 후 60일 이내 신청 시 소급 기준을 확인하세요."],
    checkBefore: ["아이의 출생월과 현재 개월수를 확인하세요.", "어린이집 입소월과 보육료 전환 시점을 확인하세요.", "부모급여와 양육수당 대상 구간을 구분하세요."],
    userTip: ["출생신고를 마친 뒤 첫만남이용권, 아동수당, 부모급여를 한 번에 신청 목록으로 정리해 두면 좋습니다.", "어린이집 입소월에는 실제 입금액이 달라질 수 있어 지자체 안내를 확인하세요."],
    caution: "부모급여 차액은 어린이집 이용월, 보육료 단가, 입퇴소월에 따라 달라질 수 있습니다. 실제 지급액은 복지로와 지자체 안내를 확인해 주세요.",
    keywords: ["부모급여", "2026 부모급여", "0세 부모급여", "1세 부모급여", "부모급여 어린이집"],
    sources: [official.mohwParent, official.childcareFee],
    relatedSlugs: ["child-allowance-data", "home-childcare-allowance-data", "childcare-fee-support-data"],
  }),
  entry({
    slug: "child-allowance-data",
    category: "childcare-benefit",
    title: "아동수당은 2026년에 대상과 금액이 어떻게 바뀌나요?",
    shortTitle: "아동수당",
    summary: "아동수당은 2026년 4월부터 지급 연령과 금액 확대가 시작된 정책입니다. 2026년에는 9세 미만으로 확대되고 거주 지역과 지급 방식에 따라 금액이 달라질 수 있습니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "기본 기준", amount: "월 10만 원 이상", description: "2026년 확대 자료 기준, 지역에 따라 달라질 수 있습니다." },
      { label: "지급 연령", amount: "9세 미만", description: "2026년 4월부터 단계적 확대 시작" },
    ],
    dataRows: [
      { label: "확대 시점", value: "2026년 4월부터", note: "소급 지급과 지역별 지급 방식 확인 필요" },
      { label: "지급 방식", value: "현금 또는 지역사랑상품권 등", note: "거주 지역 기준을 확인해야 합니다." },
      { label: "신청처", value: "복지로 또는 주민센터" },
    ],
    verifiedFacts: ["2026년 4월부터 아동수당 대상·금액 확대가 시작된 것으로 안내되었습니다.", "지급 연령은 2026년 기준 9세 미만으로 확대됩니다.", "거주 지역과 지역사랑상품권 지급 방식에 따라 금액이 달라질 수 있습니다."],
    target: ["아동수당을 처음 신청하는 가정", "예전에 대상이 아니었지만 2026년 확대 여부를 확인하려는 가정", "지역별 금액 차이를 확인하려는 보호자"],
    benefit: ["기본 월 10만 원 기준에서 지역별 차등 금액이 적용될 수 있습니다.", "비수도권과 인구감소지역은 추가 금액이 적용될 수 있습니다.", "지급 연령이 단계적으로 확대되는 흐름입니다."],
    apply: ["주민센터 또는 복지로에서 신청합니다.", "기존 수급자와 지급 중단 후 재개 대상자는 별도 안내를 확인합니다.", "지역사랑상품권 지급 여부는 거주지 지자체 기준을 확인합니다."],
    checkBefore: ["아이의 생년월일과 지급 연령 확대 대상 여부를 확인하세요.", "주민등록상 거주지와 지역 구분을 확인하세요.", "현금 지급인지 지역사랑상품권인지 확인하세요."],
    userTip: ["2026년에는 기준이 바뀌는 시기라 예전에 대상이 아니었다고 바로 포기하지 말고 다시 확인해 보세요.", "전입·전출이 있었다면 지급액이 달라질 수 있어 주민센터 문의가 빠릅니다."],
    caution: "아동수당은 확대 적용 시기와 지역 기준이 중요합니다. 실제 지급 여부와 금액은 복지로, 주민센터, 지자체 안내를 확인해 주세요.",
    keywords: ["2026 아동수당", "아동수당 9세", "아동수당 지역별 금액", "아동수당 신청", "아동수당 소급"],
    sources: [official.childAllowance, official.bokjiro],
    relatedSlugs: ["parental-benefit-data", "home-childcare-allowance-data"],
  }),
  entry({
    slug: "home-childcare-allowance-data",
    category: "childcare-benefit",
    title: "가정양육수당은 어린이집을 안 보내면 받을 수 있나요?",
    shortTitle: "가정양육수당",
    summary: "가정양육수당은 어린이집·유치원·종일제 아이돌봄서비스 등을 이용하지 않고 가정에서 양육하는 미취학 아동에게 지원되는 제도입니다. 부모급여 대상 구간과 구분해서 확인해야 합니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "지원 기준", amount: "월령별 차등", description: "보육료·유아학비·종일제 아이돌봄 이용 여부에 따라 달라집니다." },
      { label: "신청처", amount: "복지로·주민센터", description: "기관 이용 시작 시 변경 신청 필요 여부 확인" },
    ],
    dataRows: [
      { label: "대상", value: "어린이집·유치원·종일제 아이돌봄서비스를 이용하지 않는 미취학 아동" },
      { label: "구분", value: "0~23개월은 부모급여 대상 구간부터 확인" },
      { label: "변경", value: "어린이집 입소 시 보육료 지원으로 변경될 수 있음" },
    ],
    verifiedFacts: ["기관을 이용하지 않는 미취학 아동이 기본 대상입니다.", "부모급여 도입 후 0~23개월은 부모급여 대상 구간으로 먼저 확인합니다.", "기관 이용 시 보육료·유아학비와 중복되지 않을 수 있습니다."],
    target: ["가정에서 아이를 돌보는 보호자", "어린이집 입소 전 대기 중인 가정", "부모급여 이후 양육수당 전환 시점을 확인하려는 가정"],
    benefit: ["가정양육 아동에게 월 지원금을 지급합니다.", "일반 아동, 장애아동, 농어촌아동은 기준이 다를 수 있습니다.", "기관 이용을 시작하면 지원 종류가 바뀔 수 있습니다."],
    apply: ["주민센터 또는 복지로에서 신청합니다.", "어린이집·유치원 입소 시 변경 신청이 필요한지 확인합니다.", "서비스 변경월의 지급 기준을 확인하세요."],
    checkBefore: ["현재 아이가 어린이집·유치원에 다니는지 확인하세요.", "부모급여 대상 개월수인지 양육수당 대상 개월수인지 구분하세요.", "종일제 아이돌봄서비스 이용 여부를 확인하세요."],
    userTip: ["어린이집 입소 전 대기 기간에는 양육수당 대상이 될 수 있는지 먼저 확인해 보세요.", "기관 이용을 시작하면 지원 변경 신청이 필요한지 확인하는 것이 좋습니다."],
    caution: "가정양육수당은 보육료, 유아학비, 종일제 아이돌봄서비스와 동시에 받을 수 없는 경우가 있습니다. 기관 이용 여부가 바뀌면 바로 확인해 주세요.",
    keywords: ["가정양육수당", "양육수당", "어린이집 안보내면 지원", "복지로 양육수당", "부모급여 양육수당 차이"],
    sources: [official.bokjiro],
    relatedSlugs: ["parental-benefit-data", "childcare-fee-support-data"],
  }),
  entry({
    slug: "childcare-fee-support-data",
    category: "childcare-benefit",
    title: "어린이집 보육료 지원은 부모가 직접 받는 돈인가요?",
    shortTitle: "어린이집 보육료 지원",
    summary: "어린이집 보육료 지원은 부모에게 현금으로 주는 방식이 아니라 보육료 바우처로 어린이집 이용 비용을 지원하는 구조입니다. 2026년 1월 이용월부터 0~2세 보육료 단가 인상 안내가 있었습니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "지원 방식", amount: "보육료 바우처", description: "어린이집 이용 비용으로 정산되는 구조" },
      { label: "적용 시점", amount: "2026년 1월 이용분", description: "영유아보육료 지원 단가 인상 안내 기준" },
    ],
    dataRows: [
      { label: "대상", value: "어린이집 이용 영유아" },
      { label: "신청", value: "복지로 또는 주민센터" },
      { label: "주의", value: "특별활동비·차량비 등은 별도 비용일 수 있음" },
    ],
    verifiedFacts: ["2026년 영유아보육료 지원 단가 인상이 안내되었습니다.", "부모에게 현금으로 직접 지급되는 구조가 아닙니다.", "어린이집 이용 시 부모급여와 함께 정산될 수 있습니다."],
    target: ["어린이집을 이용하거나 입소 예정인 가정", "보육료와 부모급여 차액을 함께 확인하려는 보호자", "입소월에 지원 변경이 필요한지 궁금한 가정"],
    benefit: ["정부지원보육료 단가 내에서 보육료를 지원합니다.", "0~2세와 장애아동 일부 보육료 단가가 인상 안내되었습니다.", "어린이집 이용 시 부모급여와 보육료가 함께 정산될 수 있습니다."],
    apply: ["복지로 또는 주민센터에서 보육료 신청을 확인합니다.", "어린이집 입소 예정월 전에 사전신청 기간을 확인합니다.", "국민행복카드 또는 아이행복카드 결제 흐름을 어린이집에 확인하세요."],
    checkBefore: ["어린이집 입소일과 적용 월을 확인하세요.", "부모급여 차액이 발생하는지 확인하세요.", "사전신청 기간과 당월신청 기준을 구분하세요."],
    userTip: ["3월 입소라면 사전신청 기간을 놓치지 않는 것이 중요합니다.", "부모부담금이 있는지, 특별활동비 등 별도 비용이 있는지 어린이집에 따로 확인하세요."],
    caution: "보육료 지원과 어린이집 추가 비용은 다른 항목입니다. 정부지원보육료 외 특별활동비, 차량비, 행사비 등은 별도로 확인해 주세요.",
    keywords: ["어린이집 보육료", "2026 보육료", "보육료 사전신청", "부모급여 차액", "아이사랑 보육료"],
    sources: [official.childcareFee, official.bokjiro],
    relatedSlugs: ["parental-benefit-data", "home-childcare-allowance-data"],
  }),
  entry({
    slug: "maternity-leave-pay-data",
    category: "work-parenting",
    title: "출산전후휴가급여는 회사와 고용보험 중 어디서 확인해야 하나요?",
    shortTitle: "출산전후휴가급여",
    summary: "출산전후휴가급여는 회사의 휴가 처리와 고용보험 급여 신청이 함께 연결되는 제도입니다. 회사 신청, 피보험 단위기간, 신청 기한을 나누어 확인해야 합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "확인 기준", amount: "회사 + 고용보험", description: "휴가 사용과 급여 신청을 따로 확인" },
      { label: "신청 경로", amount: "고용24·고용센터", description: "회사 확인서 처리 여부도 함께 확인" },
    ],
    dataRows: [
      { label: "먼저 할 일", value: "회사에 출산전후휴가 사용 신청" },
      { label: "급여 신청", value: "고용보험 요건과 신청 기한 확인" },
      { label: "필요 확인", value: "휴가 시작일, 종료일, 회사 확인서" },
    ],
    verifiedFacts: ["출산전후휴가는 회사의 휴가 부여와 고용보험 급여 신청이 연결됩니다.", "고용보험 피보험 단위기간과 신청 기한 확인이 필요합니다.", "우선지원 대상기업 여부에 따라 급여 처리 방식이 달라질 수 있습니다."],
    target: ["출산휴가를 앞둔 직장인", "회사 인사팀과 급여 신청을 함께 확인해야 하는 근로자", "출산휴가 후 고용보험 급여 신청 기한이 궁금한 보호자"],
    benefit: ["출산휴가 기간 중 급여를 지원받을 수 있습니다.", "기업 규모와 고용보험 요건에 따라 지급 방식이 달라질 수 있습니다.", "신청 기한 안에 고용센터 또는 고용24 기준을 확인해야 합니다."],
    apply: ["회사에 출산전후휴가 사용을 먼저 신청합니다.", "고용보험 급여 신청 가능 기간과 필요 서류를 확인합니다.", "고용24 또는 관할 고용센터 안내를 확인합니다."],
    checkBefore: ["휴가 시작일과 종료일을 확인하세요.", "고용보험 피보험 단위기간을 확인하세요.", "회사에서 발급해야 하는 확인서 제출 여부를 확인하세요."],
    userTip: ["출산 예정일이 정해지면 회사 신청 서류와 고용보험 신청 서류를 따로 폴더로 정리해 두면 좋습니다.", "휴가 종료 후 급여 신청 기한을 놓치지 않도록 달력에 표시해 두세요."],
    caution: "근로 형태, 고용보험 가입 기간, 기업 규모에 따라 실제 급여 처리 방식이 달라질 수 있습니다. 회사와 고용센터 안내를 함께 확인해 주세요.",
    keywords: ["출산전후휴가급여", "출산휴가 급여", "고용보험 출산휴가", "출산휴가 신청", "출산휴가 서류"],
    sources: [official.worklifeMaternity, official.gov24],
    relatedSlugs: ["spouse-childbirth-leave-data", "parental-leave-pay-data"],
  }),
  entry({
    slug: "spouse-childbirth-leave-data",
    category: "work-parenting",
    title: "배우자 출산휴가는 2026년에 며칠 사용할 수 있나요?",
    shortTitle: "배우자 출산휴가",
    summary: "배우자 출산휴가는 배우자 출산을 이유로 사용하는 휴가입니다. 2026년 공식 안내 기준 20일 사용, 출산일로부터 120일 이내 사용 기준을 확인해야 합니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "휴가 일수", amount: "20일", description: "배우자 출산휴가 법정 기준" },
      { label: "사용 기한", amount: "출산일부터 120일 이내", description: "분할 사용 가능 여부도 회사와 확인" },
    ],
    dataRows: [
      { label: "분할 사용", value: "3회 분할, 총 4개 구간 가능 안내" },
      { label: "급여 지원", value: "우선지원 대상기업 근로자는 고용보험 급여 확인" },
      { label: "신청", value: "회사 고지 후 고용24 급여 요건 확인" },
    ],
    verifiedFacts: ["배우자 출산휴가는 20일로 안내되어 있습니다.", "배우자가 출산한 날부터 120일 이내 사용해야 합니다.", "분할 사용과 급여 지원 요건은 회사와 고용보험 기준을 함께 확인해야 합니다."],
    target: ["배우자 출산을 앞둔 근로자", "출산 직후 산모와 신생아 돌봄 시간을 확보하려는 가정", "우선지원 대상기업 급여 지원 여부를 확인하려는 근로자"],
    benefit: ["배우자 출산휴가 20일을 사용할 수 있습니다.", "우선지원 대상기업 근로자는 급여 지원 대상이 될 수 있습니다.", "출산 직후 산모 회복과 신생아 돌봄 시간을 확보할 수 있습니다."],
    apply: ["회사에 배우자 출산휴가 사용을 고지합니다.", "휴가 시작일과 분할 사용 계획을 회사와 조율합니다.", "고용24 또는 고용센터에서 급여 신청 요건을 확인합니다."],
    checkBefore: ["출산일로부터 120일 이내 사용해야 하는지 확인하세요.", "근로제공 의무가 있는 날 기준으로 휴가 일수가 계산되는지 확인하세요.", "피보험 단위기간 180일 이상 요건을 확인하세요."],
    userTip: ["출산예정일이 임박하면 산후조리원 이동일, 첫 병원 방문일, 퇴원일을 기준으로 휴가를 나눠 쓰는 계획을 세워보세요.", "급여 신청은 휴가 사용 이후 기간 제한이 있으니 마감일을 따로 기록하세요."],
    caution: "배우자 출산휴가는 회사 휴가 사용과 고용보험 급여 신청이 나뉩니다. 회사 승인 여부만 확인하지 말고 급여 신청 요건도 함께 확인해 주세요.",
    keywords: ["배우자 출산휴가", "2026 배우자 출산휴가 20일", "아빠 출산휴가", "배우자 출산휴가 급여", "배우자 출산휴가 분할"],
    sources: [official.worklifeSpouseLeave],
    relatedSlugs: ["maternity-leave-pay-data", "parental-leave-pay-data"],
  }),
  entry({
    slug: "parental-leave-pay-data",
    category: "work-parenting",
    title: "육아휴직급여는 2026년에 월 상한액이 어떻게 적용되나요?",
    shortTitle: "육아휴직급여",
    summary: "고용24 안내 기준 일반 육아휴직급여는 1~3개월 월 상한 250만 원, 4~6개월 월 상한 200만 원, 7개월 이후 월 상한 160만 원 기준으로 확인됩니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "1~3개월", amount: "월 상한 250만 원", description: "통상임금 100% 기준" },
      { label: "4~6개월", amount: "월 상한 200만 원", description: "통상임금 100% 기준" },
      { label: "7개월 이후", amount: "월 상한 160만 원", description: "통상임금 80% 기준" },
    ],
    dataRows: [
      { label: "기본 요건", value: "육아휴직 30일 이상 사용, 피보험 단위기간 확인" },
      { label: "특례", value: "부모 함께 육아휴직제, 한부모 특례 별도 확인" },
      { label: "신청처", value: "고용24 또는 고용센터" },
    ],
    verifiedFacts: ["1~3개월은 통상임금 100%, 월 상한 250만 원으로 안내됩니다.", "4~6개월은 통상임금 100%, 월 상한 200만 원으로 안내됩니다.", "7개월 이후는 통상임금 80%, 월 상한 160만 원으로 안내됩니다."],
    target: ["육아휴직을 계획 중인 근로자", "부부가 순차 또는 동시 육아휴직을 고민하는 가정", "육아휴직급여 예상액을 확인하려는 보호자"],
    benefit: ["육아휴직 기간에 따라 급여를 지원받을 수 있습니다.", "부모 함께 육아휴직제 6+6 특례가 적용될 수 있습니다.", "한부모 근로자는 별도 특례를 확인할 수 있습니다."],
    apply: ["회사에 육아휴직 사용을 신청합니다.", "고용24에서 육아휴직급여 신청 요건과 서류를 확인합니다.", "휴직 30일 이상 사용 여부와 고용보험 피보험 단위기간을 확인합니다."],
    checkBefore: ["육아휴직 개시일 기준 통상임금을 확인하세요.", "고용보험 피보험 단위기간 180일 이상 여부를 확인하세요.", "부모 함께 육아휴직제 적용 가능성을 확인하세요."],
    userTip: ["휴직 시작 전 월급명세서, 고용보험 가입 이력, 회사 확인서 처리 일정을 미리 확인하면 급여 신청이 수월합니다.", "부부가 모두 사용할 계획이라면 같은 자녀 기준 사용 순서와 시기를 같이 정리하세요."],
    caution: "육아휴직급여는 통상임금, 특례 적용 여부, 회사에서 받은 금품 등에 따라 실제 지급액이 달라질 수 있습니다. 고용24 계산기와 고용센터 안내를 함께 확인하세요.",
    keywords: ["육아휴직급여", "2026 육아휴직급여", "육아휴직 상한액", "6+6 부모육아휴직", "고용24 육아휴직"],
    sources: [official.work24ParentalLeave],
    relatedSlugs: ["spouse-childbirth-leave-data", "childcare-reduced-hours-data"],
  }),
  entry({
    slug: "pregnancy-reduced-hours-data",
    category: "work-parenting",
    title: "임신기 근로시간 단축은 언제 신청할 수 있나요?",
    shortTitle: "임신기 근로시간 단축",
    summary: "임신기 근로시간 단축은 임신 중 근로자가 건강 보호를 위해 근로시간을 줄일 수 있는 제도입니다. 임신 주수, 회사 신청 방식, 임금 처리 기준을 함께 확인해야 합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "핵심 기준", amount: "임신 주수 확인", description: "사용 가능 기간과 신청 서류를 회사와 확인" },
      { label: "신청처", amount: "회사 인사담당", description: "임신확인서 등 필요 서류 확인" },
    ],
    dataRows: [
      { label: "대상", value: "임신 중 근로자" },
      { label: "확인", value: "임신 주수별 사용 가능 기간" },
      { label: "주의", value: "회사 절차와 법정 기준을 함께 확인" },
    ],
    verifiedFacts: ["임신 중 근로자 건강 보호를 위한 근로시간 단축 제도입니다.", "임신 주수별 사용 가능 기간과 신청 방식 확인이 필요합니다.", "회사 내부 절차와 법정 기준을 함께 확인해야 합니다."],
    target: ["임신 중 근무 시간이 부담되는 직장인", "출퇴근과 입덧, 병원 진료 일정을 조율해야 하는 근로자", "회사에 어떤 방식으로 신청해야 할지 궁금한 보호자"],
    benefit: ["법정 기준에 따라 근로시간 단축을 요청할 수 있습니다.", "건강 상태와 병원 진료 일정을 고려해 근무 조정이 가능합니다.", "출퇴근 부담과 통원 일정을 줄이는 데 도움이 될 수 있습니다."],
    apply: ["회사 인사 담당자에게 신청 절차와 서류를 확인합니다.", "임신확인서 등 필요 서류를 준비합니다.", "고용노동부 일생활균형 안내에서 최신 기준을 확인합니다."],
    checkBefore: ["현재 임신 주수를 확인하세요.", "회사에 제출해야 하는 서류를 확인하세요.", "단축 가능 시간과 임금 처리 방식을 확인하세요."],
    userTip: ["입덧이나 통원 일정이 반복된다면 병원 방문 요일과 출퇴근 시간을 기준으로 회사에 먼저 상담해 보세요.", "구두로만 이야기하지 말고 신청일과 사용 기간을 기록해 두는 것이 좋습니다."],
    caution: "근로시간 단축은 회사 내부 절차와 법정 기준을 함께 따릅니다. 실제 사용 가능 기간과 임금 처리는 회사·고용노동부 안내를 확인해 주세요.",
    keywords: ["임신기 근로시간 단축", "임산부 근로시간 단축", "임신 근무시간", "임신 단축근무", "일생활균형 임신"],
    sources: [official.worklifeReducedPregnancy],
    relatedSlugs: ["maternity-leave-pay-data", "parental-leave-pay-data"],
  }),
  entry({
    slug: "childcare-reduced-hours-data",
    category: "work-parenting",
    title: "육아기 근로시간 단축은 육아휴직 대신 사용할 수 있나요?",
    shortTitle: "육아기 근로시간 단축",
    summary: "육아기 근로시간 단축은 아이를 키우면서 근로시간을 줄여 일과 돌봄을 병행할 수 있도록 돕는 제도입니다. 육아휴직과 사용 가능 기간, 급여 계산 기준이 다르므로 따로 확인해야 합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "활용 방식", amount: "근로시간 단축", description: "육아휴직 대신 또는 육아휴직과 조합해 확인" },
      { label: "급여", amount: "고용보험 확인", description: "단축 전 통상임금과 단축 시간 기준" },
    ],
    dataRows: [
      { label: "대상", value: "육아 중인 근로자" },
      { label: "확인", value: "대상 자녀 나이와 사용 가능 기간" },
      { label: "신청", value: "회사 신청 후 고용보험 급여 신청" },
    ],
    verifiedFacts: ["육아기 근로시간 단축은 육아휴직과 별도로 확인해야 하는 제도입니다.", "근로시간 단축급여는 단축 전 통상임금과 단축 시간 기준으로 계산됩니다.", "회사 신청과 고용보험 급여 신청이 연결됩니다."],
    target: ["육아휴직 대신 근무 시간을 줄이고 싶은 근로자", "등하원 시간 때문에 정규 근무가 어려운 보호자", "육아휴직과 단축근무를 조합하려는 가정"],
    benefit: ["근로시간을 줄여 돌봄 시간을 확보할 수 있습니다.", "요건을 충족하면 육아기 근로시간 단축급여를 신청할 수 있습니다.", "회사와 협의해 근무 형태를 조정할 수 있습니다."],
    apply: ["회사에 단축근무 사용 신청을 합니다.", "고용보험 급여 신청 요건과 서류를 확인합니다.", "단축 전후 근로시간과 임금 변화를 미리 계산합니다."],
    checkBefore: ["대상 자녀 나이와 사용 가능 기간을 확인하세요.", "주당 단축 시간과 회사 근무표를 확인하세요.", "급여 신청에 필요한 회사 확인서 처리 일정을 확인하세요."],
    userTip: ["등원·하원 시간, 병원 방문, 돌봄 공백 시간을 기준으로 단축 시간을 정하면 실제 생활에 맞추기 좋습니다.", "육아휴직과 함께 쓸 계획이면 사용 순서와 남은 기간을 표로 정리해 보세요."],
    caution: "육아기 근로시간 단축은 회사 인력 운영과 급여 산정이 함께 연결됩니다. 신청 전 회사와 고용24 안내를 모두 확인해 주세요.",
    keywords: ["육아기 근로시간 단축", "육아 단축근무", "육아기 단축급여", "육아휴직 대신 단축근무", "고용24 단축근무"],
    sources: [official.worklifeReducedChildcare],
    relatedSlugs: ["parental-leave-pay-data", "family-care-leave-data"],
  }),
  entry({
    slug: "family-care-leave-data",
    category: "work-parenting",
    title: "가족돌봄휴가는 아이가 아플 때도 사용할 수 있나요?",
    shortTitle: "가족돌봄휴가",
    summary: "가족돌봄휴가는 가족의 질병, 사고, 노령, 자녀 양육 등으로 긴급한 돌봄이 필요할 때 사용할 수 있는 제도입니다. 회사 신청 방식과 사용 사유를 미리 확인하는 것이 좋습니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "활용 상황", amount: "질병·사고·자녀 양육", description: "가족 돌봄이 필요한 단기 상황" },
      { label: "신청처", amount: "회사", description: "증빙자료와 무급·유급 여부 확인" },
    ],
    dataRows: [
      { label: "주요 사유", value: "가족 질병, 사고, 노령, 자녀 양육" },
      { label: "확인", value: "회사 신청서와 증빙자료" },
      { label: "주의", value: "급여 지원 여부는 별도 확인" },
    ],
    verifiedFacts: ["가족의 질병·사고·노령 또는 자녀 양육을 위한 돌봄 사유로 확인되는 제도입니다.", "회사에 사용 사유와 기간을 신청해야 합니다.", "급여 지원 여부는 별도 정책과 시기별 안내를 확인해야 합니다."],
    target: ["아이가 갑자기 아파 등원·등교가 어려운 보호자", "가족 병원 동행이 필요한 근로자", "육아휴직까지는 아니지만 단기간 돌봄 시간이 필요한 직장인"],
    benefit: ["긴급한 가족 돌봄 사유로 휴가를 사용할 수 있습니다.", "자녀 양육과 가족 질병 상황을 회사에 설명할 수 있는 제도입니다.", "돌봄 공백이 생겼을 때 다른 휴가와 함께 검토할 수 있습니다."],
    apply: ["회사에 가족돌봄휴가 사용 신청을 합니다.", "필요 시 진료확인서 등 증빙 가능 자료를 준비합니다.", "무급·유급 여부와 회사 취업규칙을 확인합니다."],
    checkBefore: ["사용하려는 사유가 가족돌봄휴가 대상인지 확인하세요.", "회사에 제출해야 하는 신청서와 증빙자료를 확인하세요.", "연차, 병가, 가족돌봄휴가 중 어떤 방식이 유리한지 비교하세요."],
    userTip: ["아이 병원 방문, 등원 중지 안내, 가족 진료 일정처럼 날짜가 명확한 자료를 보관해 두면 회사 신청이 쉬워집니다.", "긴급 상황일수록 사후 증빙 가능 여부를 회사에 바로 확인하세요."],
    caution: "가족돌봄휴가는 회사 규정과 법정 기준이 함께 적용됩니다. 급여 지원이 항상 함께 제공되는 것은 아니므로 회사와 고용노동부 안내를 확인해 주세요.",
    keywords: ["가족돌봄휴가", "아이 아플 때 휴가", "자녀 병원 휴가", "가족 병원 동행 휴가", "일생활균형 가족돌봄"],
    sources: [official.worklifeFamilyCare],
    relatedSlugs: ["childcare-reduced-hours-data", "idolbom-disease-child-data"],
  }),
  entry({
    slug: "idolbom-service-data",
    category: "care-education",
    title: "아이돌봄서비스 시간제 기본형은 누가 이용할 수 있나요?",
    shortTitle: "아이돌봄서비스 시간제",
    summary: "아이돌봄서비스 시간제 기본형은 생후 3개월 이상 만 12세 이하 아동을 대상으로 아이돌보미가 찾아가 돌봄을 제공하는 서비스입니다. 정부지원 시간은 연 960시간, 기본형 이용요금은 시간당 12,790원으로 확인됩니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "대상 연령", amount: "생후 3개월~만 12세", description: "시간제 기본형 기준" },
      { label: "정부지원 시간", amount: "연 960시간", description: "지원 유형에 따라 본인부담금 차이" },
      { label: "기본형 요금", amount: "시간당 12,790원", description: "정부지원 전 기본요금 기준" },
    ],
    dataRows: [
      { label: "서비스 내용", value: "아이돌보미 방문 돌봄" },
      { label: "신청", value: "아이돌봄서비스 공식 사이트" },
      { label: "확인", value: "소득유형, 정부지원 시간, 연계 가능 시간" },
    ],
    verifiedFacts: ["시간제 기본형 대상은 생후 3개월 이상 만 12세 이하 아동입니다.", "정부지원 시간은 연 960시간으로 안내되어 있습니다.", "기본형 이용요금은 시간당 12,790원으로 확인됩니다."],
    target: ["맞벌이 등으로 양육 공백이 있는 가정", "등하원 전후 돌봄이 필요한 보호자", "아이돌봄서비스 이용요금과 정부지원 시간을 확인하려는 가정"],
    benefit: ["아이돌보미가 가정으로 방문해 돌봄을 제공합니다.", "정부지원 유형에 따라 본인부담금이 달라질 수 있습니다.", "정부지원 시간 초과 시 전액 본인부담으로 이용할 수 있습니다."],
    apply: ["아이돌봄서비스 공식 사이트에서 회원가입과 신청 절차를 확인합니다.", "소득유형 판정과 정부지원 대상 여부를 확인합니다.", "원하는 날짜와 시간대에 서비스 연계 가능 여부를 확인합니다."],
    checkBefore: ["아이 나이가 생후 3개월 이상 만 12세 이하인지 확인하세요.", "가구 소득유형과 정부지원 가능 시간을 확인하세요.", "가사활동 포함 여부는 기본형과 종합형에서 다르므로 구분하세요."],
    userTip: ["정기적으로 필요한 시간대가 있다면 대기 시간을 고려해 미리 신청하는 것이 좋습니다.", "등하원, 학원 이동, 부모 퇴근 시간처럼 실제 필요한 돌봄 시간을 먼저 적어보세요."],
    caution: "아이돌봄서비스는 예산과 수요, 지역 상황에 따라 지원 대상과 연계 가능 시간이 달라질 수 있습니다. 신청 전 공식 사이트에서 이용 가능 여부를 확인해 주세요.",
    keywords: ["아이돌봄서비스", "아이돌봄서비스 시간제", "아이돌봄 960시간", "아이돌보미 신청", "아이돌봄서비스 요금"],
    sources: [official.idolbomGuide],
    relatedSlugs: ["idolbom-infant-full-day-data", "idolbom-disease-child-data"],
  }),
  entry({
    slug: "idolbom-infant-full-day-data",
    category: "care-education",
    title: "영아종일제 아이돌봄서비스는 몇 개월 아기부터 가능한가요?",
    shortTitle: "영아종일제 아이돌봄",
    summary: "영아종일제 아이돌봄서비스는 생후 3개월 이상 만 36개월 이하 영아를 대상으로 하는 방문 돌봄 서비스입니다. 정부지원 시간은 월 80시간부터 월 200시간 이내로 확인됩니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "대상 연령", amount: "생후 3개월~36개월", description: "영아 돌봄 중심 서비스" },
      { label: "정부지원 시간", amount: "월 80~200시간", description: "장시간 돌봄이 필요한 가정에 적합" },
    ],
    dataRows: [
      { label: "서비스", value: "영아 돌봄 활동", note: "일반 가사활동은 제외" },
      { label: "신청", value: "아이돌봄서비스 공식 사이트" },
      { label: "확인", value: "어린이집 이용 계획과 중복 여부" },
    ],
    verifiedFacts: ["대상은 생후 3개월 이상 만 36개월 이하 영아입니다.", "정부지원 시간은 월 80시간~200시간 이내로 안내되어 있습니다.", "영아 돌봄 관련 활동을 제공하지만 일반 가사활동은 제외됩니다."],
    target: ["영아를 집에서 돌봐야 하는 맞벌이 가정", "어린이집 입소 전 장시간 돌봄이 필요한 보호자", "영아종일제와 시간제서비스 차이를 확인하려는 가정"],
    benefit: ["영아 돌봄 중심의 방문 서비스를 이용할 수 있습니다.", "정부지원 유형에 따라 본인부담금이 달라질 수 있습니다.", "월 단위 장시간 돌봄이 필요한 가정에 적합합니다."],
    apply: ["아이돌봄서비스 공식 사이트에서 영아종일제 유형을 확인합니다.", "소득유형 판정과 정부지원 시간을 확인합니다.", "정기 이용 가능 여부와 연계 대기 상황을 확인합니다."],
    checkBefore: ["아이가 생후 3개월 이상 36개월 이하인지 확인하세요.", "월 이용 시간이 80시간 이상 필요한지 확인하세요.", "어린이집 이용 계획과 중복되는지 확인하세요."],
    userTip: ["어린이집 대기 중이거나 복직 일정이 정해졌다면 최소 몇 주 전부터 서비스 연계 가능성을 확인해 보세요.", "월 이용시간이 많을수록 본인부담금이 커질 수 있어 모의계산을 먼저 해보는 것이 좋습니다."],
    caution: "영아종일제는 지역별 아이돌보미 연계 상황에 따라 원하는 날짜에 바로 이용하기 어려울 수 있습니다. 복직 일정 전에 여유 있게 확인해 주세요.",
    keywords: ["영아종일제 아이돌봄", "아이돌봄 영아종일제", "생후 3개월 돌봄", "아이돌봄 월 200시간", "복직 아이돌봄"],
    sources: [official.idolbomGuide],
    relatedSlugs: ["idolbom-service-data", "childcare-fee-support-data"],
  }),
  entry({
    slug: "idolbom-disease-child-data",
    category: "care-education",
    title: "질병감염아동 아이돌봄서비스는 아이가 아플 때 이용할 수 있나요?",
    shortTitle: "질병감염아동 돌봄",
    summary: "질병감염아동지원서비스는 감염병 등으로 시설 이용이 어려운 아동을 위한 돌봄 서비스입니다. 이용 가능 질병, 증빙서류, 서비스 연계 가능 시간을 먼저 확인해야 합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "이용 상황", amount: "감염병 등 등원 제한", description: "아이가 아파 기관 이용이 어려울 때 확인" },
      { label: "신청", amount: "아이돌봄서비스", description: "진단서·소견서 등 증빙 확인" },
    ],
    dataRows: [
      { label: "대상", value: "질병으로 기관 이용이 어려운 아동" },
      { label: "확인", value: "증빙서류와 이용 가능 질병" },
      { label: "주의", value: "돌보미 연계 가능 여부는 지역별 차이" },
    ],
    verifiedFacts: ["질병 또는 감염으로 기관 이용이 어려운 경우 확인할 수 있는 서비스입니다.", "증빙서류와 서비스 신청 절차를 확인해야 합니다.", "지역 연계 상황에 따라 실제 이용 가능 여부가 달라질 수 있습니다."],
    target: ["아이가 아파 어린이집·학교 이용이 어려운 가정", "부모가 갑자기 출근해야 하는 상황의 보호자", "질병감염아동 돌봄 이용 가능 여부가 궁금한 가정"],
    benefit: ["질병으로 인한 돌봄 공백을 줄이는 데 도움이 될 수 있습니다.", "아이돌보미가 가정에 방문해 돌봄을 제공할 수 있습니다.", "기본형과 다른 지원 기준을 확인할 수 있습니다."],
    apply: ["아이돌봄서비스 공식 사이트에서 질병감염아동 유형을 확인합니다.", "필요한 증빙서류를 준비합니다.", "서비스 연계 가능 시간을 확인합니다."],
    checkBefore: ["해당 질병이 서비스 대상인지 확인하세요.", "진단서, 소견서, 등원 중지 안내 등 증빙자료를 확인하세요.", "긴급 신청이 가능한지 지역 서비스기관에 문의하세요."],
    userTip: ["감염병 유행 시기에는 신청이 몰릴 수 있어 증빙자료를 미리 준비해 두면 좋습니다.", "아이가 고열이거나 상태가 좋지 않다면 돌봄 신청보다 진료 일정을 먼저 확인하세요."],
    caution: "아픈 아이의 상태가 위중하거나 진료가 필요한 경우에는 돌봄서비스보다 의료기관 상담이 우선입니다.",
    keywords: ["질병감염아동 아이돌봄", "아이 아플 때 돌봄", "감염병 아이돌봄", "등원중지 돌봄", "아이돌봄 질병"],
    sources: [official.idolbomGuide],
    relatedSlugs: ["idolbom-service-data", "family-care-leave-data"],
  }),
  entry({
    slug: "infant-health-checkup-data",
    category: "medical-health",
    title: "영유아 건강검진은 언제까지 받아야 하나요?",
    shortTitle: "영유아 건강검진",
    summary: "영유아 건강검진은 아이 월령별로 정해진 기간 안에 받는 국가건강검진입니다. 검진 가능 기간을 놓치지 않도록 생년월일 기준으로 미리 확인하는 것이 중요합니다.",
    status: "2026년 공식자료 확인",
    amountCards: [
      { label: "검진 방식", amount: "월령별 검진", description: "생년월일 기준 검진 가능 기간 확인" },
      { label: "확인처", amount: "건강보험공단", description: "검진기관과 문진표 확인" },
    ],
    dataRows: [
      { label: "대상", value: "영유아 건강검진 대상 아동" },
      { label: "핵심", value: "월령별 검진 기간을 놓치지 않는 것" },
      { label: "준비", value: "문진표, 발달선별검사, 검진기관 예약" },
    ],
    verifiedFacts: ["영유아 건강검진은 월령별 검진 기간이 정해져 있습니다.", "국민건강보험공단에서 검진 대상과 기간을 확인할 수 있습니다.", "검진기관 예약과 문진표 작성이 필요할 수 있습니다."],
    target: ["아이 건강검진 시기를 확인하려는 보호자", "검진기관 예약 전 확인이 필요한 가정", "발달검사와 문진표 준비가 궁금한 보호자"],
    benefit: ["아이의 성장, 발달, 건강 상태를 주기적으로 확인할 수 있습니다.", "발달 지연이나 건강 문제를 조기에 발견하는 데 도움이 됩니다.", "구강검진 등 월령별 필요한 검진을 함께 확인할 수 있습니다."],
    apply: ["건강보험공단 또는 검진기관에서 대상 여부를 확인합니다.", "검진 가능 기간 안에 병원 예약을 합니다.", "문진표와 발달선별검사를 미리 작성합니다."],
    checkBefore: ["아이 생년월일 기준 검진 가능 기간을 확인하세요.", "검진기관 예약 가능 날짜를 확인하세요.", "문진표와 예방접종 기록을 준비하세요."],
    userTip: ["검진 가능 기간 마지막 달에는 예약이 밀릴 수 있어 한 달 이상 여유를 두고 예약하는 것이 좋습니다.", "평소 걱정되는 수면, 식사, 언어, 행동을 메모해 갔다가 진료실에서 질문해 보세요."],
    caution: "검진 결과에서 재검이나 상담 권유가 나오면 결과지만 보고 넘기지 말고 의료진 안내에 따라 추가 진료를 확인해 주세요.",
    keywords: ["영유아 건강검진", "아기 건강검진 시기", "영유아 검진 기간", "발달선별검사", "건강보험공단 영유아"],
    sources: [official.infantCheckup],
    relatedSlugs: ["congenital-metabolic-test-data", "congenital-hearing-test-data"],
  }),
  entry({
    slug: "preterm-congenital-medical-data",
    category: "medical-health",
    title: "미숙아·선천성이상아 의료비 지원은 어떤 서류가 필요한가요?",
    shortTitle: "미숙아·선천성이상아 의료비",
    summary: "미숙아·선천성이상아 의료비 지원은 입원 치료비 부담을 줄이기 위한 보건소 사업입니다. 퇴원일, 신청 기한, 영수증과 세부내역서 보관 여부가 중요합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "지원 방식", amount: "의료비 일부 지원", description: "진단·입원·치료 기준에 따라 달라질 수 있습니다." },
      { label: "신청처", amount: "보건소", description: "퇴원일과 신청 기한 확인" },
    ],
    dataRows: [
      { label: "필요 서류", value: "진단서, 영수증, 세부내역서 등", note: "지역 보건소 요구 서류 확인" },
      { label: "확인 기준", value: "미숙아·선천성이상아 진단과 입원 치료 여부" },
      { label: "주의", value: "퇴원 후 신청 기한을 놓치지 않아야 함" },
    ],
    verifiedFacts: ["미숙아·선천성이상아 의료비 지원은 보건소 사업으로 안내됩니다.", "퇴원일과 신청 기한 확인이 필요합니다.", "영수증과 진료비 세부내역서 보관이 중요합니다."],
    target: ["미숙아로 입원 치료를 받은 아이의 보호자", "선천성이상 진단 후 의료비 지원을 알아보는 가정", "퇴원 후 보건소 신청서류가 궁금한 보호자"],
    benefit: ["입원 치료비 일부를 지원받을 수 있습니다.", "가정의 의료비 부담을 줄이는 데 도움이 될 수 있습니다.", "보건소를 통해 다른 모자보건 지원도 함께 확인할 수 있습니다."],
    apply: ["퇴원 후 관할 보건소에 신청 가능 여부를 확인합니다.", "진단서, 영수증, 세부내역서 등 제출 서류를 준비합니다.", "신청 기한 안에 접수합니다."],
    checkBefore: ["퇴원일 기준 신청 마감일을 확인하세요.", "원본 영수증과 세부내역서를 버리지 말고 보관하세요.", "민간보험 청구와 보건소 지원 신청 순서를 확인하세요."],
    userTip: ["퇴원 수납 직후 병원 원무과에서 지원 신청에 필요한 서류를 한 번에 발급받으면 다시 방문하는 일을 줄일 수 있습니다.", "보건소에 전화해 아이 이름, 생년월일, 진단명 기준으로 필요 서류를 먼저 확인하세요."],
    caution: "의료비 지원은 진단명, 입원 기간, 소득 기준, 신청 기한에 따라 달라질 수 있습니다. 치료비 지출 전후로 보건소에 꼭 확인해 주세요.",
    keywords: ["미숙아 의료비 지원", "선천성이상아 의료비", "미숙아 지원 신청", "퇴원일 의료비", "보건소 의료비 지원"],
    sources: [official.mohwMotherChild, official.bokjiro],
    relatedSlugs: ["infant-health-checkup-data", "congenital-metabolic-test-data"],
  }),
  entry({
    slug: "congenital-metabolic-test-data",
    category: "medical-health",
    title: "선천성대사이상 검사는 지원을 받을 수 있나요?",
    shortTitle: "선천성대사이상 검사",
    summary: "선천성대사이상 검사는 신생아에게 드물지만 중요한 대사질환이 있는지 확인하는 검사입니다. 선별검사와 확진검사, 환아관리 지원은 항목별 기준과 신청 서류를 나누어 확인해야 합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "검사 단계", amount: "선별·확진", description: "검사 단계별 지원 기준 확인" },
      { label: "신청처", amount: "보건소", description: "검사 결과와 영수증 보관" },
    ],
    dataRows: [
      { label: "대상", value: "신생아 선별검사 또는 확진검사가 필요한 가정" },
      { label: "지원", value: "검사비와 환아관리 지원 가능 여부 확인" },
      { label: "준비", value: "검사 결과지, 영수증, 진단 관련 서류" },
    ],
    verifiedFacts: ["선천성대사이상 선별검사와 확진검사 지원은 보건소 사업으로 안내됩니다.", "검사 시기와 건강보험 적용 여부에 따라 지원 가능성이 달라질 수 있습니다.", "확진 후 환아관리 지원은 질환별 기준을 확인해야 합니다."],
    target: ["신생아 선별검사를 받은 보호자", "검사 결과 유소견으로 확진검사가 필요한 가정", "선천성대사이상 환아관리 지원을 확인하려는 보호자"],
    benefit: ["선별검사비와 확진검사비 일부를 지원받을 수 있습니다.", "확진된 경우 특수식이 등 환아관리 지원을 확인할 수 있습니다.", "지원 범위는 검사 종류와 건강보험 적용 여부에 따라 달라질 수 있습니다."],
    apply: ["출생 병원에서 검사 결과와 영수증을 확인합니다.", "관할 보건소에서 지원 대상과 제출서류를 확인합니다.", "검사비 영수증, 세부내역서, 진단 관련 서류를 준비합니다."],
    checkBefore: ["검사일이 출생 후 지원 기준에 맞는지 확인하세요.", "건강보험 적용 검사인지 확인하세요.", "유소견 후 확진검사 결과와 진단서를 보관하세요."],
    userTip: ["신생아 검사 결과지는 나중에 다시 필요할 수 있으니 사진과 원본을 함께 보관해 두세요.", "결과가 늦게 나오거나 재검 안내를 받으면 병원과 보건소에 동시에 문의하는 것이 좋습니다."],
    caution: "검사 결과 해석은 의료진 상담이 우선입니다. 지원 신청과 별개로 재검이나 확진 안내를 받았다면 병원 진료 일정을 먼저 확인해 주세요.",
    keywords: ["선천성대사이상 검사", "신생아 대사이상 검사 지원", "선천성대사이상 환아관리", "신생아 선별검사", "보건소 신생아 검사"],
    sources: [official.mohwMotherChild],
    relatedSlugs: ["infant-health-checkup-data", "congenital-hearing-test-data"],
  }),
  entry({
    slug: "congenital-hearing-test-data",
    category: "medical-health",
    title: "신생아 난청검사와 보청기 지원은 어떻게 확인하나요?",
    shortTitle: "선천성 난청검사 지원",
    summary: "선천성 난청검사와 보청기 지원은 신생아 청각 선별검사, 확진검사, 보청기 지원 여부를 단계별로 확인하는 보건소 사업입니다. 검사 결과와 신청 서류를 잘 보관하는 것이 중요합니다.",
    status: "신청 전 재확인",
    amountCards: [
      { label: "검사 단계", amount: "선별·확진", description: "청각검사 결과에 따라 진행" },
      { label: "지원 확인", amount: "검사비·보청기", description: "진단 기준과 연령 기준 확인" },
    ],
    dataRows: [
      { label: "대상", value: "신생아 청각검사 또는 난청 확진검사가 필요한 가정" },
      { label: "신청처", value: "관할 보건소" },
      { label: "준비", value: "검사 결과지, 진단서, 영수증" },
    ],
    verifiedFacts: ["선천성 난청검사와 보청기 지원은 모자보건지원 사업에 포함되어 안내됩니다.", "선별검사, 확진검사, 보청기 지원은 각각 기준이 다를 수 있습니다.", "검사 결과와 진단 관련 서류 보관이 중요합니다."],
    target: ["신생아 청각 선별검사를 받은 보호자", "난청 재검 또는 확진검사 안내를 받은 가정", "보청기 지원 가능성을 확인하려는 보호자"],
    benefit: ["난청 선별검사와 확진검사 비용 일부 지원을 확인할 수 있습니다.", "지원 기준을 충족하면 보청기 지원 여부를 확인할 수 있습니다.", "조기 발견과 치료 연결에 도움을 받을 수 있습니다."],
    apply: ["출생 병원 또는 검사기관에서 결과지를 확인합니다.", "관할 보건소에 지원 대상과 제출서류를 문의합니다.", "진단서, 검사 결과지, 영수증 등을 준비합니다."],
    checkBefore: ["검사 결과 재검 또는 확진 필요 여부를 확인하세요.", "검사비 영수증과 세부내역서를 보관하세요.", "보청기 지원은 연령과 진단 기준을 따로 확인하세요."],
    userTip: ["청각 검사는 시기를 놓치면 치료 연결이 늦어질 수 있어 재검 안내를 받으면 바로 예약하는 것이 좋습니다.", "검사기관이 지원 대상 기관인지 보건소에 먼저 확인해 보세요."],
    caution: "난청검사 결과는 전문의 상담이 우선입니다. 지원금 확인보다 재검과 확진 진료 일정을 먼저 챙겨 주세요.",
    keywords: ["신생아 난청검사", "선천성 난청검사 지원", "신생아 청각검사", "보청기 지원", "보건소 난청검사"],
    sources: [official.mohwMotherChild],
    relatedSlugs: ["infant-health-checkup-data", "congenital-metabolic-test-data"],
  }),
];

function makeLocalEntry(input: {
  slug: string;
  regionName: string;
  provinceName: string;
  title: string;
  shortTitle: string;
  summary: string;
  amountCards: GovernmentPolicyAmountCard[];
  dataRows: GovernmentPolicyDataRow[];
  verifiedFacts: string[];
  target: string[];
  benefit: string[];
  apply: string[];
  checkBefore: string[];
  userTip: string[];
  caution: string;
  keywords: string[];
  sources: GovernmentPolicySource[];
  relatedSlugs?: string[];
}) {
  return entry({
    slug: input.slug,
    category: "local-check",
    title: input.title,
    shortTitle: input.shortTitle,
    summary: input.summary,
    status: "지역별 확인",
    amountCards: input.amountCards,
    dataRows: input.dataRows,
    verifiedFacts: input.verifiedFacts,
    target: input.target,
    benefit: input.benefit,
    apply: input.apply,
    checkBefore: input.checkBefore,
    userTip: input.userTip,
    caution: input.caution,
    keywords: input.keywords,
    sources: input.sources,
    relatedSlugs: input.relatedSlugs ?? ["first-encounter-voucher-data", "parental-benefit-data", "child-allowance-data"],
    regionName: input.regionName,
  });
}

type LocalProgram =
  | "seoul"
  | "gyeonggi"
  | "chungbuk"
  | "busan"
  | "daegu"
  | "daejeon"
  | "ulsan-junggu"
  | "ulsan-basic"
  | "ulsan-ulju"
  | "sejong"
  | "jeju"
  | "incheon"
  | "default";

type LocalRegionSeed = {
  provinceName: string;
  provinceCode: string;
  regionName: string;
  program?: LocalProgram;
};

function localSlug(seed: LocalRegionSeed) {
  return `${seed.provinceCode}-${seed.regionName.replace(/특별자치시|특별자치도|특별시|광역시|도|시|군|구/g, "").replace(/[\s·]/g, "-")}-birth-grant-2026`;
}

function localSources(program: LocalProgram) {
  if (program === "seoul") return [official.childcareLocalBirth, official.seoulPostpartum, official.seoulNews];
  if (program === "gyeonggi") return [official.childcareLocalBirth, official.gyeonggiPostpartum, official.gyeonggiWelfare];
  if (program === "chungbuk") return [official.childcareLocalBirth, official.chungbukBirth, official.chungbukPolicy];
  if (program === "busan") return [official.childcareLocalBirth, official.busanBirth];
  if (program === "daegu") return [official.childcareLocalBirth, official.daeguBirth];
  if (program === "daejeon") return [official.childcareLocalBirth, official.daejeonAllowance];
  if (program.startsWith("ulsan")) return [official.childcareLocalBirth];
  if (program === "incheon") return [official.childcareLocalBirth, official.incheonAngel, official.incheonDream, official.incheonTransport, official.incheonPostpartum];
  if (program === "jeju") return [official.childcareLocalBirth];
  if (program === "sejong") return [official.childcareLocalBirth];
  return [official.childcareLocalBirth, official.gov24];
}

function localRegisteredAt(seed: LocalRegionSeed) {
  const detail = getLocalDetail(seed);
  if (detail?.registeredAt) return detail.registeredAt;
  const fixedByProvince: Record<string, string> = {
    seoul: "2026-01-27",
    busan: "2026-01-28",
    daegu: "2026-01-29",
    incheon: "2026-01-30",
    daejeon: "2026-02-09",
    chungnam: "2026-03-16",
    jeonbuk: "2026-03-16",
    jeonnam: "2026-03-16",
    gyeongbuk: "2026-03-17",
    gyeongnam: "2026-03-17",
    jeju: "2026-03-17",
  };
  return fixedByProvince[seed.provinceCode] ?? "2026년 아이사랑 등록 게시물";
}

function localPostTitle(seed: LocalRegionSeed) {
  const provinceLabel = seed.provinceName.replace(/특별자치도|특별자치시|특별시|광역시|도/g, "");
  return (provinceLabel + " " + seed.regionName + " 출산지원금").trim();
}

function localOfficialDetailRows(seed: LocalRegionSeed): GovernmentPolicyDataRow[] {
  const registeredAt = localRegisteredAt(seed);
  return [
    { label: "아이사랑 게시물", value: localPostTitle(seed), note: "등록일: " + registeredAt },
    { label: "아이사랑 확인 범위", value: "첫만남이용권, 지자체 출산지원금, 출산축하금, 신청방법, 문의처를 함께 확인", note: "아이사랑 2026년 등록 게시물의 지역별 항목을 사용자 확인 순서에 맞춰 재정리했습니다." },
    { label: "공통 신청 흐름", value: "출생신고 후 주민센터 또는 정부24 행복출산 원스톱서비스에서 신청 가능 항목 확인", note: "지자체 추가 지원은 주소지 행정복지센터에서 신청 가능 항목을 함께 확인하면 됩니다." },
  ];
}

type LocalSupportDetail = {
  registeredAt?: string;
  summary?: string;
  amountCards: GovernmentPolicyAmountCard[];
  dataRows: GovernmentPolicyDataRow[];
  verifiedFacts?: string[];
  benefit?: string[];
  checkBefore?: string[];
  keywords?: string[];
};

const detailedLocalSupport: Record<string, LocalSupportDetail> = {
  "충청남도 서산시": {
    registeredAt: "2026-03-16",
    summary: "충청남도 서산시 출산지원금은 첫만남이용권, 신생아 출산지원금, 둘째 이후 영유아 양육비, 출산용품 지원을 나누어 확인해야 합니다. 첫째는 첫만남이용권 200만 원과 신생아 출산지원금 50만 원을 구분해서 보고, 셋째 이상은 분할 지급 조건까지 함께 확인하는 것이 좋습니다.",
    amountCards: [
      { label: "첫만남이용권", amount: "첫째 200만 원·둘째 이상 300만 원", description: "국민행복카드 바우처, 출생일로부터 2년 사용" },
      { label: "신생아 출산지원금", amount: "첫째 50만 원·둘째 100만 원·셋째 500만 원·넷째 이상 1,000만 원", description: "셋째 이상은 1/2 먼저 지급 후 12개월 뒤 잔액 지급" },
      { label: "추가 지원", amount: "월 10만 원·상품권 10만 원", description: "둘째 이후 36개월까지 영유아 양육비, 출산용품 모바일 상품권" },
    ],
    dataRows: [
      { label: "첫만남이용권 지원대상", value: "출생신고 후 주민등록번호를 부여받은 아동", note: "2024년 이후 출생아 기준 첫째 200만 원, 둘째 이상 300만 원" },
      { label: "첫만남이용권 사용기간", value: "아동 출생일로부터 2년", note: "유흥·사행·일부 위생업종 등 제외 업종 확인" },
      { label: "첫만남이용권 신청방법", value: "행정복지센터 방문, 복지로, 정부24" },
      { label: "신생아 출산지원금 지원대상", value: "서산시에 신생아를 출생신고한 가정", note: "첫째·둘째는 출산일 기준 1개월, 셋째 이후는 1년 전부터 서산시 주민등록과 실제 거주 조건 확인" },
      { label: "신생아 출산지원금 금액", value: "첫째 50만 원, 둘째 100만 원, 셋째 500만 원, 넷째 이상 1,000만 원" },
      { label: "신생아 출산지원금 지급방식", value: "셋째 이상은 지원금의 1/2 지급 후 12개월 뒤 잔액 지급", note: "지급일은 신청한 다음 달 20일" },
      { label: "신생아 출산지원금 신청기한", value: "출생일로부터 1년 이내" },
      { label: "둘째 이후 영유아 양육비", value: "만 3세까지 매월 10만 원", note: "출생신고 후 90일 이내 신청, 신청한 다음 달 20일 지급" },
      { label: "출산용품 지원", value: "10만 원 상당 모바일 상품권", note: "출생일로부터 1년 이내 신청, 신청한 다음 달 20일 지급" },
      { label: "신청 경로", value: "출생자 주소지 행정복지센터 방문 또는 정부24 온라인 신청" },
    ],
    verifiedFacts: ["서산시는 첫만남이용권 외에 신생아 출산지원금, 둘째 이후 영유아 양육비, 출산용품 지원을 따로 확인해야 합니다.", "셋째 이상 신생아 출산지원금은 분할 지급 조건이 있어 지급 시점을 함께 확인해야 합니다."],
    benefit: ["첫째 기준 첫만남이용권 200만 원과 신생아 출산지원금 50만 원을 별도로 확인할 수 있습니다.", "둘째 이후는 영유아 양육비 월 10만 원과 첫만남이용권 상향 금액을 함께 볼 수 있습니다.", "출산용품 10만 원 상당 모바일 상품권도 신청기한 안에 확인할 수 있습니다."],
    checkBefore: ["첫째·둘째와 셋째 이후의 서산시 거주 기간 조건이 다르므로 출산일 기준 전입일을 확인하세요.", "영유아 양육비는 출생신고 후 90일 이내 신청 기준을 놓치지 않도록 따로 적어두세요.", "셋째 이상은 지원금 지급 시점이 나뉘므로 12개월 후 잔액 지급 조건을 확인하세요."],
    keywords: ["서산시 출산지원금", "충남 서산 출산지원금", "서산시 첫만남이용권", "서산시 신생아 출산지원금", "서산시 영유아 양육비", "서산시 출산용품 지원"],
  },
  "충청남도 천안시": { registeredAt: "2026-03-16", summary: "천안시 출산지원금은 첫만남이용권과 천안시 출산축하금을 함께 확인하면 됩니다. 천안시 출산축하금은 첫째 30만 원, 둘째 50만 원, 셋째 이상 100만 원 기준으로 신청 조건과 지급 방식을 확인하는 것이 좋습니다.", amountCards: [{ label: "천안시 출산축하금", amount: "첫째 30만 원·둘째 50만 원·셋째 이상 100만 원", description: "첫만남이용권과 별도 확인" }], dataRows: [{ label: "천안시 출산축하금", value: "첫째 30만 원, 둘째 50만 원, 셋째 이상 100만 원" }, { label: "신청 전 확인", value: "천안시 출생신고, 부모와 아동 주민등록, 신청기한, 지급 방식" }], keywords: ["천안시 출산지원금", "천안 출산축하금"] },
  "충청남도 공주시": { registeredAt: "2026-03-16", summary: "공주시 출산지원금은 출생 순서별 지원금과 출산축하선물, 출산용품을 함께 확인해야 합니다. 첫째 300만 원, 둘째 500만 원, 셋째 이상 1,000만 원 구조로 분할 지급 조건을 함께 보는 것이 좋습니다.", amountCards: [{ label: "공주시 출산장려금", amount: "첫째 300만 원·둘째 500만 원·셋째 이상 1,000만 원", description: "공주페이 등 지급 방식 확인" }, { label: "추가 물품", amount: "각 10만 원 상당", description: "출산축하선물과 출산용품" }], dataRows: [{ label: "첫째", value: "300만 원", note: "150만 원씩 2년 지급 기준 확인" }, { label: "둘째", value: "500만 원", note: "초기 200만 원과 이후 회차별 150만 원 지급 기준 확인" }, { label: "셋째 이상", value: "1,000만 원", note: "250만 원씩 분할 지급 기준 확인" }, { label: "추가 지원", value: "10만 원 상당 출산축하선물, 10만 원 상당 출산용품" }], keywords: ["공주시 출산지원금", "공주 출산장려금"] },
  "충청남도 보령시": { registeredAt: "2026-03-16", summary: "보령시 출산양육지원금은 첫째부터 다섯째 이상까지 금액 차이가 큽니다. 첫째 100만 원 이내, 둘째 300만 원 이내, 셋째 500만 원 이내, 넷째 1,500만 원 이내, 다섯째 이상 3,000만 원 이내 기준을 먼저 확인해 보세요.", amountCards: [{ label: "보령시 출산양육지원금", amount: "100만~3,000만 원 이내", description: "출생 순서별 차등, 예산과 조건 확인" }], dataRows: [{ label: "첫째", value: "100만 원 이내" }, { label: "둘째", value: "300만 원 이내" }, { label: "셋째", value: "500만 원 이내" }, { label: "넷째", value: "1,500만 원 이내" }, { label: "다섯째 이상", value: "3,000만 원 이내" }], keywords: ["보령시 출산지원금", "보령 출산양육지원금"] },
  "충청남도 아산시": { registeredAt: "2026-03-16", summary: "아산시 출산장려금은 첫째 30만 원, 둘째 50만 원, 셋째 100만 원, 넷째 이상 200만 원 기준으로 확인할 수 있습니다. 모바일 지역상품권 지급 여부와 신청 기한을 함께 확인하세요.", amountCards: [{ label: "아산시 출산장려금", amount: "첫째 30만 원·둘째 50만 원·셋째 100만 원·넷째 이상 200만 원", description: "아산사랑 모바일 상품권 지급 기준 확인" }], dataRows: [{ label: "금액", value: "첫째 30만 원, 둘째 50만 원, 셋째 100만 원, 넷째 이상 200만 원" }, { label: "지급 형태", value: "아산사랑 모바일 상품권 기준 확인" }], keywords: ["아산시 출산지원금", "아산 출산장려금"] },
  "충청남도 논산시": { registeredAt: "2026-03-16", summary: "논산시 출산지원금은 첫째 100만 원부터 다섯째 이상 700만 원까지 출생 순서별로 달라집니다. 첫만남이용권과 논산시 자체 지원금을 나누어 확인해 보세요.", amountCards: [{ label: "논산시 출산지원금", amount: "첫째 100만 원·둘째 200만 원·셋째 300만 원·넷째 400만 원·다섯째 이상 700만 원", description: "출생 순서별 차등 지급" }], dataRows: [{ label: "첫째", value: "100만 원" }, { label: "둘째", value: "200만 원" }, { label: "셋째", value: "300만 원" }, { label: "넷째", value: "400만 원" }, { label: "다섯째 이상", value: "700만 원" }], keywords: ["논산시 출산지원금", "논산 출산장려금"] },
  "충청남도 계룡시": { registeredAt: "2026-03-16", summary: "계룡시 출산장려금은 첫째 50만 원, 둘째 100만 원, 셋째 이상 300만 원 기준으로 확인할 수 있습니다. 첫만남이용권과 별도 지원인지 함께 확인하세요.", amountCards: [{ label: "계룡시 출산장려금", amount: "첫째 50만 원·둘째 100만 원·셋째 이상 300만 원", description: "출생 순서별 차등 지급" }], dataRows: [{ label: "금액", value: "첫째 50만 원, 둘째 100만 원, 셋째 이상 300만 원" }], keywords: ["계룡시 출산지원금", "계룡 출산장려금"] },
  "충청남도 당진시": { registeredAt: "2026-03-16", summary: "당진시 출산지원금은 첫째 50만 원, 둘째 100만 원, 셋째 500만 원, 넷째 이상 1,000만 원 기준으로 확인합니다. 셋째 이상은 2년 분할 지급과 육아용품 교환권을 함께 확인하는 것이 좋습니다.", amountCards: [{ label: "당진시 출산지원금", amount: "첫째 50만 원·둘째 100만 원·셋째 500만 원·넷째 이상 1,000만 원", description: "셋째 이상 분할 지급 확인" }, { label: "육아용품", amount: "10만 원 상당", description: "육아용품 교환권 기준 확인" }], dataRows: [{ label: "첫째·둘째", value: "첫째 50만 원, 둘째 100만 원" }, { label: "셋째", value: "500만 원", note: "연 250만 원씩 2년 지급 기준 확인" }, { label: "넷째 이상", value: "1,000만 원", note: "연 500만 원씩 2년 지급 기준 확인" }, { label: "육아용품 교환권", value: "10만 원 상당" }], keywords: ["당진시 출산지원금", "당진 출산장려금"] },
  "충청남도 금산군": { registeredAt: "2026-03-16", summary: "금산군 출산장려금은 첫째 500만 원, 둘째 700만 원, 셋째 1,000만 원, 넷째 이상 2,000만 원 기준으로 금액이 큽니다. 분할 지급 기준과 거주 요건을 신청 전에 확인하세요.", amountCards: [{ label: "금산군 출산장려금", amount: "첫째 500만 원·둘째 700만 원·셋째 1,000만 원·넷째 이상 2,000만 원", description: "분할 지급 기준 확인" }], dataRows: [{ label: "첫째", value: "500만 원" }, { label: "둘째", value: "700만 원" }, { label: "셋째", value: "1,000만 원" }, { label: "넷째 이상", value: "2,000만 원" }, { label: "지급방식", value: "매년 분할 지급 기준 확인" }], keywords: ["금산군 출산지원금", "금산 출산장려금"] },
  "충청남도 부여군": { registeredAt: "2026-03-16", summary: "부여군 출산장려금은 첫째 50만 원, 둘째 200만 원, 셋째 500만 원, 넷째 이상 1,000만 원 기준입니다. 둘째 이상은 회차별 지급 구조와 다태아 추가 지원을 함께 확인하세요.", amountCards: [{ label: "부여군 출산장려금", amount: "첫째 50만 원·둘째 200만 원·셋째 500만 원·넷째 이상 1,000만 원", description: "둘째 이상 분할 지급 기준 확인" }, { label: "다태아", amount: "100만 원", description: "다태아 출산 가정 추가 지원" }], dataRows: [{ label: "첫째", value: "50만 원 일시금" }, { label: "둘째", value: "200만 원", note: "50만 원 지급 후 매년 50만 원씩 3년 기준 확인" }, { label: "셋째", value: "500만 원", note: "100만 원 지급 후 매년 100만 원씩 4년 기준 확인" }, { label: "넷째 이상", value: "1,000만 원", note: "250만 원 지급 후 매년 150만 원씩 5년 기준 확인" }, { label: "다태아 추가", value: "100만 원" }], keywords: ["부여군 출산지원금", "부여 출산장려금"] },
  "충청남도 서천군": { registeredAt: "2026-03-16", summary: "서천군 출산장려금은 50개월 분할 지원 구조를 먼저 확인해야 합니다. 첫째 500만 원, 둘째 1,000만 원, 셋째 1,500만 원, 넷째 2,000만 원, 다섯째 3,000만 원 기준을 확인하세요.", amountCards: [{ label: "서천군 출산장려금", amount: "첫째 500만 원·둘째 1,000만 원·셋째 1,500만 원·넷째 2,000만 원·다섯째 3,000만 원", description: "50개월 분할 지원 구조 확인" }], dataRows: [{ label: "첫째", value: "500만 원" }, { label: "둘째", value: "1,000만 원" }, { label: "셋째", value: "1,500만 원" }, { label: "넷째", value: "2,000만 원" }, { label: "다섯째", value: "3,000만 원" }, { label: "여섯째 이상", value: "1,500만 원" }, { label: "지급방식", value: "50개월 분할 지원 기준 확인" }], keywords: ["서천군 출산지원금", "서천 출산장려금"] },
  "충청남도 청양군": { registeredAt: "2026-03-16", summary: "청양군 출산장려금은 첫째 500만 원부터 다섯째 이상 3,000만 원까지 5년 분할 지급 구조로 확인할 수 있습니다. 실제 신청 전 거주 기간과 지급 회차를 확인하세요.", amountCards: [{ label: "청양군 출산장려금", amount: "첫째 500만 원·둘째 1,000만 원·셋째 1,500만 원·넷째 2,000만 원·다섯째 이상 3,000만 원", description: "5년 분할 지급 기준" }], dataRows: [{ label: "금액", value: "첫째 500만 원, 둘째 1,000만 원, 셋째 1,500만 원, 넷째 2,000만 원, 다섯째 이상 3,000만 원" }, { label: "지급방식", value: "총 5회, 5년간 분할 지급 기준 확인" }], keywords: ["청양군 출산지원금", "청양 출산장려금"] },
  "충청남도 홍성군": { registeredAt: "2026-03-16", summary: "홍성군 출산장려금은 첫째 200만 원, 둘째 400만 원, 셋째 600만 원, 넷째 1,000만 원, 다섯째 이상 3,000만 원 구조입니다. 둘째 이상은 분할 지급 조건을 함께 확인해야 합니다.", amountCards: [{ label: "홍성군 출산장려금", amount: "첫째 200만 원·둘째 400만 원·셋째 600만 원·넷째 1,000만 원·다섯째 이상 3,000만 원", description: "출생 순서별 차등·분할 지급 확인" }], dataRows: [{ label: "첫째", value: "200만 원" }, { label: "둘째", value: "400만 원", note: "2년 분할 지급 기준 확인" }, { label: "셋째", value: "600만 원", note: "3년 분할 지급 기준 확인" }, { label: "넷째", value: "1,000만 원", note: "5년 분할 지급 기준 확인" }, { label: "다섯째 이상", value: "3,000만 원", note: "5년 분할 지급 기준 확인" }], keywords: ["홍성군 출산지원금", "홍성 출산장려금"] },
  "충청남도 예산군": { registeredAt: "2026-03-16", summary: "예산군 출산육아지원금은 첫째 200만 원부터 다섯째 이상 3,000만 원까지 차등 지원됩니다. 출산축하바구니 20만 원 상당 지원도 함께 확인하세요.", amountCards: [{ label: "예산군 출산육아지원금", amount: "첫째 200만 원·둘째 400만 원·셋째 600만 원·넷째 1,000만 원·다섯째 이상 3,000만 원", description: "출생 순서별 분할 지급 확인" }, { label: "출산축하바구니", amount: "20만 원 상당", description: "물품과 상품권 구성 확인" }], dataRows: [{ label: "첫째", value: "200만 원" }, { label: "둘째", value: "400만 원", note: "2년 분할 지급 기준 확인" }, { label: "셋째", value: "600만 원", note: "3년 분할 지급 기준 확인" }, { label: "넷째", value: "1,000만 원", note: "5년 분할 지급 기준 확인" }, { label: "다섯째 이상", value: "3,000만 원", note: "6년 분할 지급 기준 확인" }, { label: "추가 지원", value: "20만 원 상당 출산축하바구니" }], keywords: ["예산군 출산지원금", "예산 출산육아지원금"] },
  "충청남도 태안군": { registeredAt: "2026-03-16", summary: "태안군 출산장려금은 첫째 50만 원, 둘째 100만 원, 셋째 이상 200만 원 기준으로 확인할 수 있습니다. 신청 기한과 주소지 기준을 함께 확인하세요.", amountCards: [{ label: "태안군 출산장려금", amount: "첫째 50만 원·둘째 100만 원·셋째 이상 200만 원", description: "출생 순서별 차등 지급" }], dataRows: [{ label: "금액", value: "첫째 50만 원, 둘째 100만 원, 셋째 이상 200만 원" }], keywords: ["태안군 출산지원금", "태안 출산장려금"] },
  "제주특별자치도 제주도": { registeredAt: "2026-03-17", summary: "제주도 출산지원금은 첫째 50만 원, 둘째 이상은 육아지원금 1,000만 원 또는 무주택 주거임차비 1,400만 원 선택 가능 여부를 확인해야 합니다. 첫만남이용권과 별도 기준으로 함께 계산해 보세요.", amountCards: [{ label: "제주 해피아이", amount: "첫째 50만 원·둘째 이상 1,000만 원", description: "둘째 이상은 주거임차비 선택 가능 여부 확인" }, { label: "무주택 주거임차비", amount: "1,400만 원", description: "연 280만 원씩 5년 지급 기준 확인" }], dataRows: [{ label: "첫째", value: "50만 원" }, { label: "둘째 이상", value: "육아지원금 1,000만 원", note: "연 200만 원씩 5년 지급 기준 확인" }, { label: "무주택 가정 선택", value: "주거임차비 1,400만 원", note: "연 280만 원씩 5년 지급 기준 확인" }], keywords: ["제주도 출산지원금", "제주 해피아이"] },
};

function getLocalDetail(seed: LocalRegionSeed) {
  return detailedLocalSupport[`${seed.provinceName} ${seed.regionName}`.trim()];
}

type LocalTotalHint = {
  firstTotal: number;
  secondTotal: number;
};

const NATIONAL_BASE_TOTAL_MANWON = 3050;
const localTotalHintRows = `
서울특별시 강남구|3320|3320
서울특별시 강동구|3120|3120
서울특별시 강북구|3120|3120
서울특별시 강서구|3120|3120
서울특별시 관악구|3120|3120
서울특별시 광진구|3220|3220
서울특별시 구로구|3120|3120
서울특별시 금천구|3130|3130
서울특별시 노원구|3120|3120
서울특별시 도봉구|3120|3120
서울특별시 동대문구|3120|3120
서울특별시 동작구|3140|3170
서울특별시 마포구|3120|3120
서울특별시 서대문구|3210|3120
서울특별시 서초구|3120|3120
서울특별시 성동구|3220|3220
서울특별시 성북구|3120|3120
서울특별시 송파구|3120|3120
서울특별시 양천구|3120|3120
서울특별시 영등포구|3120|3120
서울특별시 용산구|3120|3120
서울특별시 은평구|3120|3120
서울특별시 종로구|3120|3120
서울특별시 중구|3320|3320
서울특별시 중랑구|3120|3120
경기도 가평군|3200|3500
경기도 고양시|3200|3300
경기도 과천시|3200|3250
경기도 광명시|3170|3170
경기도 광주시|3200|3200
경기도 구리시|3150|3200
경기도 군포시|3200|3400
경기도 김포시|3100|3200
경기도 남양주시|3200|3200
경기도 동두천시|3200|3250
경기도 부천시|3100|3100
경기도 성남시|3130|3150
경기도 수원시|3100|3150
경기도 시흥시|3100|3150
경기도 안산시|3200|3400
경기도 안성시|3100|3200
경기도 안양시|3350|3550
경기도 양주시|3100|3100
경기도 양평군|3600|3600
경기도 여주시|3200|3600
경기도 연천군|3200|3300
경기도 오산시|3200|3200
경기도 용인시|3130|3150
경기도 의왕시|3200|3300
경기도 의정부시|3100|3200
경기도 이천시|3200|3300
경기도 파주시|3110|3103
경기도 평택시|3150|3220
경기도 포천시|3200|3400
경기도 하남시|3150|3200
경기도 화성시|3200|3300
인천광역시 강화군|3790|4210
인천광역시 계양구|3050|3050
인천광역시 남동구|3050|3050
인천광역시 동구|3100|3150
인천광역시 미추홀구|3050|3050
인천광역시 부평구|3080|3100
인천광역시 서구|3080|3100
인천광역시 연수구|3050|3150
인천광역시 옹진군|3150|3250
인천광역시 중구|3050|3150
부산광역시 강서구|3150|3250
부산광역시 금정구|3060|3170
부산광역시 기장군|3050|3200
부산광역시 남구|3100|3200
부산광역시 동구|3050|3170
부산광역시 동래구|3150|3250
부산광역시 부산진구|3070|3200
부산광역시 북구|3050|3170
부산광역시 사상구|3070|3200
부산광역시 사하구|3100|3200
부산광역시 서구|3070|3180
부산광역시 수영구|3050|3250
부산광역시 연제구|3070|3200
부산광역시 영도구|3550|3650
부산광역시 중구|3080|3210
부산광역시 해운대구|3100|3300
대전광역시 대덕구|4210|4160
대전광역시 동구|4160|4160
대전광역시 서구|4190|4190
대전광역시 유성구|4190|4160
대전광역시 중구|4190|4190
대구광역시 중구|3050|3150
대구광역시 서구|3050|3150
대구광역시 북구|3050|3150
대구광역시 수성구|3050|3150
대구광역시 군위군|3330|3770
대구광역시 남구|3060|3150
대구광역시 달서구|3070|3150
대구광역시 달성군|3100|3280
대구광역시 동구|3060|3150
울산광역시 남구|3110|3150
울산광역시 동구|3110|3150
울산광역시 북구|3110|3150
울산광역시 울주군|3120|3300
울산광역시 중구|3120|3150
세종특별자치시 세종시|3170|3170
광주광역시 광산구|3390|3390
광주광역시 남구|3390|3400
광주광역시 동구|3390|3410
광주광역시 북구|3390|3400
광주광역시 서구|3390|3390
강원특별자치도 강릉시|3080|3100
강원특별자치도 고성군|3190|3340
강원특별자치도 동해시|3110|3170
강원특별자치도 삼척시|3150|3200
강원특별자치도 속초시|3100|3120
강원특별자치도 양구군|3150|3250
강원특별자치도 양양군|3170|3290
강원특별자치도 영월군|3150|3350
강원특별자치도 원주시|3080|3100
강원특별자치도 인제군|3250|3350
강원특별자치도 정선군|3170|3170
강원특별자치도 철원군|3120|3230
강원특별자치도 춘천시|3100|3120
강원특별자치도 태백시|3100|3150
강원특별자치도 평창군|3150|3250
강원특별자치도 홍천군|3250|3350
강원특별자치도 화천군|3350|3350
강원특별자치도 횡성군|3070|3150
충청북도 괴산군|3100|3100
충청북도 단양군|3150|3150
충청북도 보은군|3150|3150
충청북도 영동군|3400|3650
충청북도 옥천군|3150|3150
충청북도 음성군|3100|3100
충청북도 제천시|3050|3050
충청북도 증평군|3100|3100
충청북도 진천군|3100|3100
충청북도 청주시|4050|4050
충청북도 충주시|3100|3100
충청남도 계룡시|3150|3350
충청남도 공주시|3350|3550
충청남도 금산군|3550|3750
충청남도 논산시|3150|3250
충청남도 당진시|3100|3150
충청남도 보령시|3150|3350
충청남도 부여군|3100|3250
충청남도 서산시|3150|3150
충청남도 서천군|3550|4050
충청남도 아산시|3150|3150
충청남도 예산군|3550|4050
충청남도 천안시|3100|3100
충청남도 청양군|3550|4050
충청남도 태안군|3100|3150
충청남도 홍성군|3550|4050
경상북도 경산시|3100|3170
경상북도 경주시|3370|3570
경상북도 고령군|3200|3530
경상북도 구미시|3200|3250
경상북도 김천시|3350|3550
경상북도 문경시|3550|3550
경상북도 봉화군|3650|3950
경상북도 상주시|3410|4010
경상북도 성주군|3770|4130
경상북도 안동시|3290|3530
경상북도 영덕군|3730|4070
경상북도 영양군|3050|3050
경상북도 영주시|3340|3820
경상북도 영천시|3350|4350
경상북도 예천군|3390|3630
경상북도 울릉군|3730|4210
경상북도 울진군|3650|3650
경상북도 의성군|4950|4950
경상북도 청도군|3610|4530
경상북도 청송군|3630|3750
경상북도 칠곡군|3120|3190
경상북도 포항시|3150|3340
경상남도 거제시|3150|3350
경상남도 거창군|3550|3550
경상남도 고성군|3150|3250
경상남도 김해시|3100|3150
경상남도 남해군|3350|3450
경상남도 밀양시|3150|3250
경상남도 사천시|3150|3250
경상남도 산청군|3340|3460
경상남도 양산시|3100|3150
경상남도 의령군|3450|3750
경상남도 진주시|3150|3250
경상남도 창녕군|3550|3750
경상남도 창원시|3300|3550
경상남도 통영시|3150|3250
경상남도 하동군|3490|4150
경상남도 함안군|3150|3350
경상남도 함양군|3150|3250
경상남도 합천군|3150|3350
전북특별자치도 고창군|3350|3550
전북특별자치도 군산시|3150|3250
전북특별자치도 김제시|4050|4650
전북특별자치도 남원시|3250|3550
전북특별자치도 무주군|3450|3650
전북특별자치도 부안군|3350|3550
전북특별자치도 순창군|3350|3510
전북특별자치도 완주군|3250|3350
전북특별자치도 익산시|3150|3250
전북특별자치도 임실군|3350|3550
전북특별자치도 장수군|3550|3750
전북특별자치도 전주시|3080|3100
전북특별자치도 정읍시|3250|3350
전북특별자치도 진안군|3350|3550
전라남도 강진군|3050|3050
전라남도 고흥군|4130|4130
전라남도 곡성군|3350|3450
전라남도 광양시|3550|4050
전라남도 구례군|3350|3550
전라남도 나주시|3350|3550
전라남도 담양군|3180|3270
전라남도 목포시|3200|3300
전라남도 무안군|3200|3250
전라남도 보성군|3650|3770
전라남도 순천시|3550|4050
전라남도 신안군|3290|3370
전라남도 여수시|3550|3550
전라남도 영광군|3550|4250
전라남도 영암군|3400|3600
전라남도 완도군|3150|3550
전라남도 장성군|3450|3650
전라남도 장흥군|3350|3550
전라남도 진도군|3350|3350
전라남도 함평군|3350|3550
전라남도 해남군|3370|3420
전라남도 화순군|3400|3400
제주특별자치도 제주도|3150|5050
`;

const localTotalHints: Record<string, LocalTotalHint> = localTotalHintRows
  .trim()
  .split("\n")
  .reduce((acc, line) => {
    const [region, first, second] = line.split("|");
    const firstTotal = Number(first);
    const secondTotal = Number(second);
    const current = acc[region];
    if (!current || firstTotal + secondTotal > current.firstTotal + current.secondTotal) {
      acc[region] = { firstTotal, secondTotal };
    }
    return acc;
  }, {} as Record<string, LocalTotalHint>);

function getLocalTotalHint(seed: LocalRegionSeed) {
  return localTotalHints[`${seed.provinceName} ${seed.regionName}`.trim()];
}

function amountMinusBase(total: number) {
  return Math.max(0, total - NATIONAL_BASE_TOTAL_MANWON);
}

function formatManwon(value: number) {
  return value === 0 ? "0원" : `${value.toLocaleString("ko-KR")}만 원`;
}

function localAdditionalSummary(seed: LocalRegionSeed) {
  const hint = getLocalTotalHint(seed);
  if (!hint) return undefined;
  const first = amountMinusBase(hint.firstTotal);
  const second = amountMinusBase(hint.secondTotal);
  return {
    first,
    second,
    amountText: `첫째 ${formatManwon(first)}·둘째 ${formatManwon(second)}`,
    totalText: `첫째 총 ${hint.firstTotal.toLocaleString("ko-KR")}만 원·둘째 총 ${hint.secondTotal.toLocaleString("ko-KR")}만 원`,
  };
}

function localAdditionalRows(seed: LocalRegionSeed): GovernmentPolicyDataRow[] {
  const extra = localAdditionalSummary(seed);
  if (!extra) return [];
  return [
    {
      label: `${seed.regionName} 지역 추가지원 합계`,
      value: extra.amountText,
      note: "전국 공통 지원 합계 3,050만 원을 제외하고 지역·부가 지원으로 따로 볼 수 있는 금액입니다. 신청 전 아이사랑 원문과 주소지 행정복지센터에서 최종 확인해 주세요.",
    },
    {
      label: "첫째·둘째 총 지원금 참고",
      value: extra.totalText,
      note: "첫만남이용권, 부모급여, 아동수당, 양육수당 등 공통 지원과 지역 지원을 합산해 비교할 때 쓰는 참고 금액입니다.",
    },
  ];
}

function programCards(program: LocalProgram, seed?: LocalRegionSeed): GovernmentPolicyAmountCard[] {
  const detail = seed ? getLocalDetail(seed) : undefined;
  if (detail?.amountCards?.length) return detail.amountCards;
  const firstVoucher = { label: "첫째 공통", amount: "200만 원", description: "첫만남이용권 국민행복카드 바우처" };
  const secondVoucher = { label: "둘째 이상 공통", amount: "300만 원", description: "2024년 이후 둘째 이상 첫만남이용권 기준" };
  if (program === "seoul") {
    return [
      firstVoucher,
      secondVoucher,
      { label: "서울형 산후조리경비", amount: "100만~150만 원", description: "첫째 100만 원, 둘째 120만 원, 셋째 이상 150만 원" },
    ];
  }
  if (program === "gyeonggi") {
    return [firstVoucher, secondVoucher, { label: "경기도 산후조리비", amount: "1명당 50만 원", description: "다태아는 출생아 수에 따라 50만 원의 배수" }];
  }
  if (program === "chungbuk") {
    return [firstVoucher, secondVoucher, { label: "충북 출산육아수당", amount: "총 1,000만 원", description: "1세 100만 원, 2~5세 각 200만 원, 6세 100만 원" }];
  }
  if (program === "busan") {
    return [firstVoucher, secondVoucher, { label: "부산시 출산지원금", amount: "둘째 이후 100만 원", description: "부산시 공통 지원 기준, 구·군 추가 지원은 별도 확인" }];
  }
  if (program === "daegu") {
    return [firstVoucher, secondVoucher, { label: "대구시 출생축하금", amount: "둘째 100만 원·셋째 이상 200만 원", description: "구·군별 추가 지원은 주소지 기준 확인" }];
  }
  if (program === "daejeon") {
    return [firstVoucher, secondVoucher, { label: "대전형 양육기본수당", amount: "월 15만 원", description: "0~35개월, 2세 추가 지원 기준은 신청 전 확인" }];
  }
  if (program === "ulsan-junggu") {
    return [firstVoucher, secondVoucher, { label: "울산 중구", amount: "첫째 70만 원·둘째 이상 100만 원", description: "중구 출산양육지원금 기준" }];
  }
  if (program === "ulsan-basic") {
    return [firstVoucher, secondVoucher, { label: "울산 남·동·북구", amount: "첫째 60만 원·둘째 이상 100만 원", description: "구별 신청기한과 거주 조건 확인" }];
  }
  if (program === "ulsan-ulju") {
    return [firstVoucher, secondVoucher, { label: "울산 울주군", amount: "첫째 70만 원·둘째 250만 원·셋째 이상 500만 원", description: "둘째·셋째 이상은 분할 지급 기준 확인" }];
  }
  if (program === "sejong") {
    return [firstVoucher, secondVoucher, { label: "세종 출산축하금", amount: "120만 원", description: "출생아 1인당 지역화폐 지급 기준" }];
  }
  if (program === "jeju") {
    return [firstVoucher, secondVoucher, { label: "제주 해피아이", amount: "첫째 50만 원·둘째 이상 1,000만 원", description: "둘째 이상은 무주택 주거임차비 선택 가능 여부 확인" }];
  }
  if (program === "incheon") {
    return [firstVoucher, secondVoucher, { label: "인천형 출생정책", amount: "연 120만 원 등", description: "천사지원금·아이꿈수당·교통비·산후조리비 대상별 확인" }];
  }
  if (seed) {
    const extra = localAdditionalSummary(seed);
    if (extra) {
      return [
        firstVoucher,
        secondVoucher,
        { label: "지자체 추가지원", amount: extra.amountText, description: "전국 공통 지원과 구분해 볼 수 있는 지역·부가 지원 합계" },
      ];
    }
  }
  return [
    firstVoucher,
    secondVoucher,
    { label: "지자체 추가지원", amount: "지역 지원금 항목 확인", description: "해당 지역 게시물의 출산축하금·양육비·출산용품 지원을 기준으로 확인" },
  ];
}

function programRows(seed: LocalRegionSeed, program: LocalProgram): GovernmentPolicyDataRow[] {
  const regionFullName = `${seed.provinceName} ${seed.regionName}`.trim();
  const commonRows: GovernmentPolicyDataRow[] = [
    { label: "지역명", value: regionFullName },
    { label: "아이사랑 2026 등록일", value: localRegisteredAt(seed), note: "아이사랑 출산지원금 게시판에서 2026년 등록 게시물만 기준으로 정리했습니다." },
    { label: "전국 공통 첫만남이용권", value: "첫째 200만 원, 둘째 이상 300만 원", note: "출생신고 후 주민등록번호를 부여받은 출생아 기준" },
    { label: "신청 기본 경로", value: "주민센터 출생신고, 정부24 행복출산 원스톱서비스, 복지로·아이사랑 안내 확인" },
    ...localOfficialDetailRows(seed),
  ];
  const detail = getLocalDetail(seed);
  if (detail?.dataRows?.length) return [...commonRows, ...detail.dataRows];
  if (program === "seoul") {
    return [
      ...commonRows,
      { label: "서울형 산후조리경비", value: "첫째 100만 원, 둘째 120만 원, 셋째 이상 150만 원", note: "2026년 개선 기준" },
      { label: "신청기한", value: "출생 후 180일 이내" },
      { label: "조건", value: "신청일 기준 서울 거주, 출생아 서울 출생신고, 산모 명의 협약카드 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "gyeonggi") {
    return [
      ...commonRows,
      { label: "경기도 산후조리비", value: "출생아 1인당 50만 원 지역화폐", note: "쌍둥이 100만 원, 세쌍둥이 150만 원" },
      { label: "신청기한", value: "출생일 기준 12개월 이내" },
      { label: "조건", value: "출생일 및 신청일 현재 경기도 주민등록·실거주, 경기도 출생등록" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "chungbuk") {
    return [
      ...commonRows,
      { label: "충북 출산육아수당", value: "총 1,000만 원", note: "1세 100만 원, 2~5세 각 200만 원, 6세 100만 원" },
      { label: "조건", value: "부 또는 모와 출생아동이 함께 충북 도내 주민등록상 거주" },
      { label: "주의", value: "신청일 이전 회차는 지급하지 않는 기준 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "busan") {
    return [
      ...commonRows,
      { label: "부산시 공통", value: "둘째 이후 자녀 100만 원" },
      { label: "신청기한", value: "자녀 출생일로부터 3개월 이내" },
      { label: "조건", value: "부산시에 출생신고 및 주민등록 등재, 부모 중 1인 이상과 자녀가 같은 주민등록지에 거주" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "daegu") {
    if (seed.regionName === "군위군") {
      return [
        ...commonRows,
        { label: "군위군 출생축하금", value: "출생 축하금 100만 원, 첫돌 축하금 100만 원" },
        { label: "군위군 양육지원금", value: "첫째 월 15만 원×12개월, 둘째 월 15만 원×26개월, 셋째 이상 월 45만 원×36개월" },
        { label: "조건", value: "군위군 주민등록과 실제 양육 여부, 지급 회차별 거주 요건 확인" },
      ];
    }
    return [
      ...commonRows,
      { label: "대구시 출생축하금", value: "둘째 100만 원, 셋째 이상 200만 원" },
      { label: "조건", value: "출생신고 시 주민등록지가 해당 구·군에 있는 둘째 이상 출생아, 부 또는 모의 주소지 기준 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "daejeon") {
    return [
      ...commonRows,
      { label: "대전형 양육기본수당", value: "월 15만 원", note: "0~35개월, 2세 15만 원 추가 지원 안내 확인" },
      { label: "조건", value: "아동이 대전시에 주민등록, 부 또는 모가 출생일 기준 6개월 이상 대전시에 주민등록" },
      { label: "지급일", value: "매월 25일" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program.startsWith("ulsan")) {
    const amount = program === "ulsan-junggu" ? "첫째 70만 원, 둘째 이상 100만 원" : program === "ulsan-ulju" ? "첫째 70만 원, 둘째 250만 원, 셋째 이상 500만 원" : "첫째 60만 원, 둘째 이상 100만 원";
    return [
      ...commonRows,
      { label: "울산 구·군 출산지원금", value: amount },
      { label: "조건", value: `${seed.regionName}에 출생신고한 출생아와 보호자의 주민등록·거주 요건 확인` },
      { label: "신청", value: "주소지 행정복지센터 또는 정부24 행복출산 원스톱서비스 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "sejong") {
    return [
      ...commonRows,
      { label: "세종 출산축하금", value: "출생아 1인당 120만 원" },
      { label: "지급방식", value: "지역화폐 여민전" },
      { label: "조건", value: "신생아의 세종시 출생신고와 부 또는 모의 세종시 거주 기간 요건 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "jeju") {
    return [
      ...commonRows,
      { label: "제주 해피아이", value: "첫째 50만 원, 둘째 이상 1,000만 원" },
      { label: "대안 지원", value: "무주택자는 주거임차비 1,400만 원 또는 육아지원금 1,000만 원 중 선택 가능 여부 확인" },
      { label: "조건", value: "첫째는 출생일 기준 6개월 전, 둘째 이상은 12개월 전부터 제주 주민등록·거주 요건 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  if (program === "incheon") {
    return [
      ...commonRows,
      { label: "인천 천사지원금", value: "연 120만 원 등 인천형 지원 확인", note: "아동 연령과 출생연도에 따라 적용 항목 확인" },
      { label: "아이 꿈 수당", value: "연령별 월 5만~15만 원 구간 확인" },
      { label: "추가 확인", value: "임산부 교통비, 맘편한 산후조리비 등 대상별 확인" },
      ...localAdditionalRows(seed),
    ];
  }
  return [
    ...commonRows,
    ...localAdditionalRows(seed),
    { label: "지원금 확인 기준", value: regionFullName + " 아이사랑 2026년 등록 게시물과 주소지 행정복지센터 안내 기준", note: "첫만남이용권과 지역 추가지원을 나누어 보도록 정리했습니다." },
    { label: "조건", value: "출생아 주민등록, 부모 주소지, 거주 기간, 출생 순서, 신청 기한 확인" },
    { label: "최종 확인", value: seed.regionName + " 행정복지센터 또는 지자체 담당 부서" },
  ];
}

function programSummary(seed: LocalRegionSeed, program: LocalProgram) {
  const regionFullName = `${seed.provinceName} ${seed.regionName}`.trim();
  const detail = getLocalDetail(seed);
  if (detail?.summary) return detail.summary;
  if (program === "seoul") return `${regionFullName} 출산가정은 첫만남이용권과 서울형 산후조리경비를 함께 확인하면 됩니다. 서울형 산후조리경비는 첫째 100만 원, 둘째 120만 원, 셋째 이상 150만 원 기준으로 정리했습니다.`;
  if (program === "gyeonggi") return `${regionFullName} 출산가정은 첫만남이용권과 경기도 산후조리비를 함께 확인하면 됩니다. 경기도 산후조리비는 출생아 1명당 50만 원 지역화폐 지원이 핵심입니다.`;
  if (program === "chungbuk") return `${regionFullName} 출산가정은 첫만남이용권과 충북 출산육아수당을 함께 확인하면 됩니다. 충북 출산육아수당은 2024년 이후 출생아 기준 총 1,000만 원 구조입니다.`;
  if (program === "busan") return `${regionFullName} 출산가정은 첫만남이용권과 부산시 공통 출산지원금을 먼저 확인하면 됩니다. 부산시는 둘째 이후 자녀 100만 원 지원 기준이 있으며 구·군별 추가 지원도 지역 상세표에서 확인이 필요합니다.`;
  if (program === "daegu") return seed.regionName === "군위군" ? `${regionFullName} 출산가정은 첫만남이용권과 군위군 출생축하금·첫돌축하금·양육지원금을 함께 확인하면 됩니다. 군위군은 출생축하금 100만 원, 첫돌축하금 100만 원, 출생 순서별 월 양육지원금 기준을 확인해야 합니다.` : `${regionFullName} 출산가정은 첫만남이용권과 대구시 출생축하금을 먼저 확인하면 됩니다. 대구시는 둘째 100만 원, 셋째 이상 200만 원 기준이 있으며 구·군별 추가 조건과 지역 추가지원 합계를 함께 봐야 합니다.`;
  if (program === "daejeon") return `${regionFullName} 출산가정은 첫만남이용권과 대전형 양육기본수당을 함께 확인하면 됩니다. 대전형 양육기본수당은 0~35개월 아동에게 월 15만 원 기준으로 안내됩니다.`;
  if (program.startsWith("ulsan")) return `${regionFullName} 출산가정은 첫만남이용권과 울산 구·군 출산지원금을 함께 확인하면 됩니다. 울산은 구·군별로 첫째와 둘째 이상 금액이 달라 주소지 기준 확인이 중요합니다.`;
  if (program === "sejong") return `${regionFullName} 출산가정은 첫만남이용권과 세종 출산축하금을 함께 확인하면 됩니다. 세종 출산축하금은 출생아 1인당 120만 원 지역화폐 지급 기준을 먼저 보면 됩니다.`;
  if (program === "jeju") return `제주도 출산가정은 첫만남이용권과 제주 해피아이 정책을 함께 확인하면 됩니다. 제주 해피아이는 첫째 50만 원, 둘째 이상 1,000만 원 기준과 거주 기간 조건을 함께 봐야 합니다.`;
  if (program === "incheon") return `${regionFullName} 출산가정은 첫만남이용권과 인천형 출생정책을 함께 확인하면 됩니다. 천사지원금, 아이 꿈 수당, 임산부 교통비, 산후조리비는 대상과 연령 기준이 서로 다릅니다.`;
  return `${regionFullName} 출산지원금은 아이사랑 2026년 등록 게시물 기준으로 첫만남이용권과 지역 자체 지원을 나누어 확인해야 합니다. 첫째는 전국 공통 200만 원, 둘째 이상은 300만 원 바우처를 먼저 보고, 지역 자체 출산축하금은 출생 순서와 거주 기간 조건을 함께 확인해 주세요.`;
}

function makeLocalFromSeed(seed: LocalRegionSeed) {
  const program = seed.program ?? "default";
  const regionFullName = `${seed.provinceName} ${seed.regionName}`.trim();
  const detail = getLocalDetail(seed);
  return makeLocalEntry({
    slug: localSlug(seed),
    regionName: regionFullName,
    provinceName: seed.provinceName,
    title: `${regionFullName} 출산지원금은 얼마이고 신청 조건은 무엇인가요?`,
    shortTitle: `${regionFullName} 출산지원금`,
    summary: programSummary(seed, program),
    amountCards: programCards(program, seed),
    dataRows: programRows(seed, program),
    verifiedFacts: [
      "아이사랑 출산지원금 게시판은 2026년 지자체 출산지원금 업데이트 완료 공지를 2026년 3월 17일 기준으로 안내하고 있습니다.",
      `${localPostTitle(seed)} 게시물은 ${localRegisteredAt(seed)} 기준으로 아이사랑 목록에서 확인되는 2026년 등록 자료입니다.`,
      "전국 공통 첫만남이용권은 출생신고되어 주민등록번호를 부여받은 아동을 대상으로 첫째 200만 원, 둘째 이상 300만 원 기준으로 확인합니다.",
      `${regionFullName} 지역 지원은 주소지, 출생 순서, 거주 기간, 신청 기한에 따라 달라질 수 있어 신청 전 공식 창구 확인이 필요합니다.`,
      ...(detail?.verifiedFacts ?? []),
    ],
    target: [
      `${regionFullName}에서 출생신고를 앞둔 가정`,
      `${seed.regionName} 출산지원금 금액과 신청 조건을 한 번에 확인하고 싶은 보호자`,
      "첫만남이용권과 지자체 추가지원금을 함께 놓치지 않으려는 가정",
    ],
    benefit: [
      "전국 공통 첫만남이용권 금액을 먼저 확인할 수 있습니다.",
      `${regionFullName}에서 따로 확인해야 하는 지역 지원 항목을 함께 볼 수 있습니다.`,
      "출생 순서, 거주 기간, 신청기한을 미리 확인해 신청 누락을 줄일 수 있습니다.",
      ...(detail?.benefit ?? []),
    ],
    apply: [
      "출생신고 시 주소지 읍·면·동 행정복지센터에서 행복출산 원스톱서비스 신청 가능 여부를 확인합니다.",
      "정부24 행복출산 원스톱서비스에서 온라인 신청 가능 항목을 확인합니다.",
      "아이사랑 출산지원금 게시판과 지자체 홈페이지에서 최신 금액과 서류를 다시 확인합니다.",
    ],
    checkBefore: [
      "부모와 출생아의 주민등록 주소지가 지원 기준에 맞는지 확인하세요.",
      "출생일 또는 신청일 기준 거주 기간 조건이 있는지 확인하세요.",
      "첫째·둘째·셋째 이상처럼 출생 순서별 금액이 달라지는지 확인하세요.",
      "출생신고와 동시에 신청 가능한 항목과 따로 신청해야 하는 항목을 나누어 적어두세요.",
      ...(detail?.checkBefore ?? []),
    ],
    userTip: [
      "출산 전 이사 계획이 있다면 전입일 때문에 지원 여부가 달라질 수 있으니 주민센터에 미리 문의하는 것이 좋습니다.",
      "전국 공통 지원금, 시·도 지원금, 시·군·구 지원금을 따로 표로 적어두면 실제 받을 수 있는 금액을 계산하기 쉽습니다.",
    ],
    caution: `${regionFullName} 출산지원금은 아이사랑 2026년 등록 게시물을 기준으로 정리했지만, 조례·예산·거주 기간·출생 순서에 따라 실제 지급 여부가 달라질 수 있습니다. 최종 신청 전에는 ${seed.regionName} 행정복지센터와 공식자료를 반드시 확인해 주세요.`,
    keywords: [
      `${regionFullName} 출산지원금`,
      `${seed.regionName} 출산지원금`,
      `${seed.regionName} 출산장려금`,
      `${seed.regionName} 첫만남이용권`,
      `${seed.regionName} 출산축하금`,
      `${seed.regionName} 행복출산 원스톱서비스`,
      ...(detail?.keywords ?? []),
    ],
    sources: localSources(program),
  });
}

function seeds(provinceName: string, provinceCode: string, regionNames: string[], program?: LocalProgram): LocalRegionSeed[] {
  return regionNames.map((regionName) => ({ provinceName, provinceCode, regionName, program }));
}

const localBirthRegions: LocalRegionSeed[] = [
  ...seeds("서울특별시", "seoul", ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구"], "seoul"),
  ...seeds("부산광역시", "busan", ["중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"], "busan"),
  ...seeds("대구광역시", "daegu", ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군", "군위군"], "daegu"),
  ...seeds("인천광역시", "incheon", ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"], "incheon"),
  ...seeds("광주광역시", "gwangju", ["동구", "서구", "남구", "북구", "광산구"], "default"),
  ...seeds("대전광역시", "daejeon", ["동구", "중구", "서구", "유성구", "대덕구"], "daejeon"),
  { provinceName: "울산광역시", provinceCode: "ulsan", regionName: "중구", program: "ulsan-junggu" },
  ...seeds("울산광역시", "ulsan", ["남구", "동구", "북구"], "ulsan-basic"),
  { provinceName: "울산광역시", provinceCode: "ulsan", regionName: "울주군", program: "ulsan-ulju" },
  { provinceName: "세종특별자치시", provinceCode: "sejong", regionName: "세종시", program: "sejong" },
  ...seeds("경기도", "gyeonggi", ["수원시", "용인시", "고양시", "화성시", "성남시", "부천시", "남양주시", "안산시", "평택시", "안양시", "시흥시", "파주시", "김포시", "의정부시", "광주시", "하남시", "광명시", "군포시", "오산시", "이천시", "안성시", "구리시", "의왕시", "양주시", "포천시", "여주시", "동두천시", "과천시", "가평군", "양평군", "연천군"], "gyeonggi"),
  ...seeds("강원특별자치도", "gangwon", ["춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군", "인제군", "고성군", "양양군"], "default"),
  ...seeds("충청북도", "chungbuk", ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"], "chungbuk"),
  ...seeds("충청남도", "chungnam", ["천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"], "default"),
  ...seeds("전북특별자치도", "jeonbuk", ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"], "default"),
  ...seeds("전라남도", "jeonnam", ["목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"], "default"),
  ...seeds("경상북도", "gyeongbuk", ["포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"], "default"),
  ...seeds("경상남도", "gyeongnam", ["창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "의령군", "함안군", "창녕군", "고성군", "남해군", "하동군", "산청군", "함양군", "거창군", "합천군"], "default"),
  { provinceName: "제주특별자치도", provinceCode: "jeju", regionName: "제주도", program: "jeju" },
];

const comprehensiveLocalBirthPolicies = localBirthRegions.map(makeLocalFromSeed);


export const governmentPolicies: GovernmentPolicyEntry[] = [
  ...basePolicies,
  ...comprehensiveLocalBirthPolicies,
];

export const governmentPolicyData = governmentPolicies.reduce((acc, policy) => {
  (acc[policy.category] ??= []).push(policy);
  return acc;
}, {} as Record<GovernmentPolicyCategory, GovernmentPolicyEntry[]>);

(Object.keys(governmentPolicyCategories) as GovernmentPolicyCategory[]).forEach((category) => {
  governmentPolicyData[category] ??= [];
});

export function getGovernmentPolicyCategory(category: string): GovernmentPolicyCategoryInfo | undefined {
  if (category in governmentPolicyCategories) {
    return governmentPolicyCategories[category as GovernmentPolicyCategory];
  }
  return undefined;
}

export function getGovernmentPolicies(category: GovernmentPolicyCategory) {
  return governmentPolicyData[category];
}

function safeDecodeSlug(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function slugMatches(policySlug: string, requestSlug: string) {
  const decodedRequestSlug = safeDecodeSlug(requestSlug);
  return (
    policySlug === requestSlug ||
    policySlug === decodedRequestSlug ||
    encodeURIComponent(policySlug) === requestSlug ||
    encodeURIComponent(policySlug) === decodedRequestSlug
  );
}

export function getGovernmentPolicy(category: GovernmentPolicyCategory, slug: string) {
  return governmentPolicyData[category].find((policy) => slugMatches(policy.slug, slug));
}

export function getGovernmentPolicyBySlug(slug: string) {
  return governmentPolicies.find((policy) => slugMatches(policy.slug, slug));
}

export function getRelatedGovernmentPolicies(policy: GovernmentPolicyEntry, count = 4) {
  const related = policy.relatedSlugs
    .map((slug) => getGovernmentPolicyBySlug(slug))
    .filter((item): item is GovernmentPolicyEntry => Boolean(item));

  const sameCategory = governmentPolicyData[policy.category].filter((item) => item.slug !== policy.slug);
  const fallback = governmentPolicies.filter((item) => item.category !== policy.category);

  const unique = new Map<string, GovernmentPolicyEntry>();
  [...related, ...sameCategory, ...fallback].forEach((item) => unique.set(item.slug, item));
  return Array.from(unique.values()).slice(0, count);
}

export const governmentPolicyTotalCount = governmentPolicies.length;
