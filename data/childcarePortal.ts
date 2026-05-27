export type ChildcarePortalSection = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  officialUrl: string;
  useWhen: string[];
  momtoolsLinks: Array<{ label: string; href: string }>;
  keywords: string[];
};

export type ChildcarePortalService = {
  title: string;
  description: string;
  officialUrl: string;
  badge: string;
};

export const CHILDCARE_PORTAL_VERIFIED_AT = "2026-05-27";
export const CHILDCARE_PORTAL_SOURCE_URL = "https://www.childcare.go.kr/?menuno=1";

export const childcarePortalSections: ChildcarePortalSection[] = [
  {
    id: "pregnancy",
    title: "임신 준비와 임신 중 확인",
    subtitle: "임신 계획, 임신 초기·중기·후기, 고위험 임신, 난임 정보를 먼저 볼 수 있어요.",
    description:
      "임신을 준비하거나 임신 사실을 확인한 뒤에는 검사, 주차별 생활, 상담이 필요한 신호를 따로 정리해 두는 것이 좋습니다. MomTools에서는 예정일과 주차를 먼저 계산하고, 아이사랑에서는 공식 임신 정보를 이어서 확인하는 흐름으로 연결했습니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=251",
    useWhen: ["임신 전 검사와 준비 순서를 보고 싶을 때", "임신 주차별 생활 주의사항을 확인하고 싶을 때", "난임·고위험 임신처럼 전문 상담이 필요한 주제를 찾을 때"],
    momtoolsLinks: [
      { label: "출산 예정일 계산기", href: "/tools/due-date" },
      { label: "임신 정보 가이드", href: "/info/pregnancy" },
      { label: "출산 준비 체크리스트", href: "/checklists/birth" },
    ],
    keywords: ["임신준비", "임신초기", "임신중기", "임신후기", "난임", "고위험임신"],
  },
  {
    id: "birth",
    title: "출산 준비와 산후관리",
    subtitle: "출산 준비, 출산징후, 분만, 산후관리, 출산 상담 정보를 이어서 볼 수 있어요.",
    description:
      "출산 전에는 병원 이동 기준, 입원 가방, 보호자 동선, 산후조리 계획이 한꺼번에 필요합니다. MomTools 체크리스트로 준비물을 먼저 정리하고, 공식 포털에서는 출산·산후관리 정보를 확인할 수 있게 구성했습니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=266",
    useWhen: ["출산 준비물과 입원 전 준비를 정리할 때", "출산징후와 분만 관련 정보를 확인할 때", "산후관리와 산후 상담 정보를 찾을 때"],
    momtoolsLinks: [
      { label: "출산 준비 체크리스트", href: "/checklists/birth" },
      { label: "신생아 준비 체크리스트", href: "/checklists/newborn" },
      { label: "첫만남이용권 확인", href: "/policy/pregnancy-birth/first-encounter-voucher-data" },
    ],
    keywords: ["출산준비", "출산징후", "분만", "산후관리", "산후조리"],
  },
  {
    id: "parenting",
    title: "월령별 성장과 돌보기",
    subtitle: "신생아부터 36개월까지 월령별 성장·돌보기 흐름을 참고할 수 있어요.",
    description:
      "육아 정보는 아이 나이에 따라 필요한 내용이 달라집니다. 개월수를 먼저 확인한 뒤 신생아, 1~3개월, 4~6개월, 7~9개월, 10~12개월, 13~24개월, 25~36개월 흐름으로 보는 방식이 부모에게 가장 편합니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=282",
    useWhen: ["아이 개월수에 맞는 수유·수면·놀이 흐름을 보고 싶을 때", "발달 차이가 걱정되어 먼저 관찰 기준을 정리하고 싶을 때", "쌍둥이·대리양육 등 상황별 육아 정보를 찾을 때"],
    momtoolsLinks: [
      { label: "아기 개월수 계산기", href: "/tools/baby-age" },
      { label: "월령별 육아 로드맵", href: "/monthly-guide" },
      { label: "성장 Q&A", href: "/qna/growth" },
    ],
    keywords: ["월령별 성장", "신생아", "1개월", "돌보기", "육아갈등", "쌍둥이육아"],
  },
  {
    id: "childcare-center",
    title: "어린이집 찾기와 입소 준비",
    subtitle: "어린이집 찾기, 입소대기, 보육료, 시간제보육, 야간연장보육을 함께 확인할 수 있어요.",
    description:
      "어린이집은 시설 검색만으로 끝나지 않고 입소대기, 우선순위 서류, 보육료 결제, 시간제보육 가능 여부까지 이어서 확인해야 합니다. 등원 전 준비물과 공식 신청 경로를 함께 보도록 연결했습니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=166",
    useWhen: ["집 근처 어린이집·유치원 정보를 비교하고 싶을 때", "입소대기 신청 순서와 우선순위 서류를 확인할 때", "시간제보육이나 야간연장보육 이용 가능성을 알아볼 때"],
    momtoolsLinks: [
      { label: "어린이집 준비 체크리스트", href: "/checklists/daycare" },
      { label: "돌봄·교육 지원정책", href: "/policy/care-education" },
      { label: "아이돌봄서비스 확인", href: "/policy/care-education/child-care-service-data" },
    ],
    keywords: ["어린이집찾기", "입소대기", "보육료", "시간제보육", "야간연장보육", "유치원"],
  },
  {
    id: "consulting",
    title: "임신·출산·육아 상담 연결",
    subtitle: "임신 상담, 출산 상담, 육아 상담, 어린이집 이용 상담, 심리·정책 상담을 찾을 수 있어요.",
    description:
      "인터넷 정보만으로 판단하기 어려운 상황은 상담 창구를 함께 확인하는 것이 안전합니다. 아이사랑에는 임신·출산·육아 관련 상담 메뉴와 전화 상담 안내가 있어, MomTools의 체크포인트를 본 뒤 공식 상담으로 이어갈 수 있습니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=301",
    useWhen: ["증상이나 상황이 애매해 혼자 판단하기 어려울 때", "육아 상담이나 어린이집 이용 상담을 찾을 때", "임신·출산 과정에서 심리·정책 상담이 필요할 때"],
    momtoolsLinks: [
      { label: "아이 건강 Q&A", href: "/qna/health" },
      { label: "가족건강 Q&A", href: "/family-health-qna" },
      { label: "문의 전 정리할 체크리스트", href: "/checklists" },
    ],
    keywords: ["임신상담", "출산상담", "육아상담", "어린이집상담", "심리상담", "정책상담"],
  },
  {
    id: "health-info",
    title: "임산부·소아청소년 건강정보",
    subtitle: "임산부 건강, 소아청소년 건강, 성인 건강 정보를 공식 메뉴에서 확인할 수 있어요.",
    description:
      "건강 정보는 아이의 월령, 증상 변화, 수분 섭취, 호흡, 전신 반응처럼 함께 볼 항목이 많습니다. MomTools에서는 관찰 기준을 먼저 정리하고, 필요한 경우 공식 건강정보와 의료진 상담으로 이어가도록 안내합니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=329",
    useWhen: ["임산부 건강정보를 공식 메뉴에서 확인하고 싶을 때", "아이 증상별로 관찰 기준과 상담 신호를 함께 볼 때", "가족 건강 정보를 생활 기록과 함께 정리할 때"],
    momtoolsLinks: [
      { label: "증상별 건강 가이드", href: "/health" },
      { label: "예방접종 일정 계산기", href: "/tools/vaccine-schedule" },
      { label: "가족건강 Q&A", href: "/family-health-qna" },
    ],
    keywords: ["임산부건강", "소아청소년건강", "성인건강", "건강정보", "아기열", "예방접종"],
  },
];

export const childcarePortalServices: ChildcarePortalService[] = [
  {
    title: "어린이집·유치원 통합검색",
    description: "시설 위치와 기본 정보를 먼저 비교해야 할 때 이용하기 좋은 공식 검색 경로입니다.",
    officialUrl: "https://enter.childinfo.go.kr",
    badge: "시설 검색",
  },
  {
    title: "입소대기 안내",
    description: "어린이집 신청 전 입소대기 순서, 아동 등록, 우선순위 서류를 확인할 때 참고하세요.",
    officialUrl: "https://www.childcare.go.kr/?menuno=169",
    badge: "입소 준비",
  },
  {
    title: "국민행복카드 안내",
    description: "임신·출산 진료비와 보육료 등 바우처 이용 흐름을 확인할 때 함께 보면 좋습니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=180",
    badge: "바우처",
  },
  {
    title: "시간제보육 안내",
    description: "정기 등원이 아니어도 잠깐 돌봄이 필요한 날 이용 가능성을 확인할 수 있습니다.",
    officialUrl: "https://www.childcare.go.kr/?menuno=200",
    badge: "돌봄",
  },
  {
    title: "임신·출산·육아 상담",
    description: "혼자 판단하기 어려운 상황은 상담 메뉴와 전화 상담 안내를 함께 확인해 보세요.",
    officialUrl: "https://www.childcare.go.kr/?menuno=301",
    badge: "상담",
  },
  {
    title: "임산부 건강정보",
    description: "건강 관련 내용은 참고 정보로만 보고, 증상이 심하거나 불안하면 의료진 상담을 우선하세요.",
    officialUrl: "https://www.childcare.go.kr/?menuno=329",
    badge: "건강",
  },
];

export const childcarePortalQuickSteps = [
  "아이 나이와 현재 상황을 먼저 정리합니다. 예: 임신 중, 출산 직전, 신생아, 어린이집 준비.",
  "MomTools 계산기·체크리스트로 내 상황에 맞는 기준을 빠르게 확인합니다.",
  "신청이나 상담이 필요한 항목은 아이사랑 공식 메뉴에서 최종 조건과 절차를 확인합니다.",
  "금액, 신청 기간, 서류, 이용 가능 여부는 지역과 시점에 따라 달라질 수 있으므로 접수 직전에 다시 확인합니다.",
];
