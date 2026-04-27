import { qnaCategories, type QnaCategory, type QnaEntry } from "@/data/qna";

type TopicProfile = {
  label: string;
  parentIntent: string;
  quickAnswer: string;
  firstChecks: string[];
  homeActions: string[];
  avoid: string[];
  recordItems: string[];
  relatedTerms: string[];
};

type SituationCard = {
  title: string;
  description: string;
  points: string[];
};

export type QnaLongtailContent = {
  h1: string;
  seoTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  heroLead: string;
  oneLineAnswer: string;
  searchIntentTitle: string;
  searchIntentParagraphs: string[];
  quickSummary: string[];
  situationCards: SituationCard[];
  recordTitle: string;
  recordDescription: string;
  recordItems: string[];
  avoidTitle: string;
  avoidItems: string[];
  longtailPhrases: string[];
  relatedQuestionIntro: string;
};

const categoryIntent: Record<QnaCategory, string> = {
  health:
    "지금 아이 상태가 단순히 지켜봐도 되는 흐름인지, 오늘 바로 상담을 잡아야 하는 신호가 있는지 차분히 나눠 보는 것이 중요합니다.",
  growth:
    "우리 아이가 또래보다 느린 것인지, 아직 기다려도 되는 개인차인지, 집에서 어떤 변화를 기록해야 하는지 순서대로 살펴보면 도움이 됩니다.",
  behavior:
    "행동을 당장 멈추게 하는 방법보다 왜 반복되는지, 보호자가 어떤 반응을 줄이면 갈등이 줄어드는지 함께 살펴보는 것이 좋습니다.",
};

const categoryQuickPoint: Record<QnaCategory, string> = {
  health: "증상 이름보다 아이의 컨디션, 수분 섭취, 소변 횟수, 호흡 상태를 먼저 확인해야 합니다.",
  growth: "평균보다 빠른지 느린지보다 최근 몇 주 사이 변화가 이어지고 있는지를 먼저 보는 것이 좋습니다.",
  behavior: "문제 행동 하나만 보지 말고 수면, 배고픔, 과자극, 전환 상황, 보호자 반응 패턴을 함께 봐야 합니다.",
};

const categoryRecordTitle: Record<QnaCategory, string> = {
  health: "진료 전에 메모해두면 좋은 기록",
  growth: "발달 흐름을 볼 때 남겨두면 좋은 기록",
  behavior: "행동 패턴을 찾을 때 남겨두면 좋은 기록",
};

const fallbackProfiles: Record<QnaCategory, TopicProfile> = {
  health: {
    label: "아이 건강 증상",
    parentIntent: "증상이 흔한 일인지, 병원에 가야 하는 신호인지 구분하고 싶어 하는 상황입니다.",
    quickAnswer: "아이 건강 문제는 증상 하나만으로 단정하기 어렵기 때문에 컨디션 변화와 경고 신호를 함께 봐야 합니다.",
    firstChecks: [
      "평소처럼 눈을 맞추고 반응하는지 확인하기",
      "수유량·식사량·물 섭취량이 눈에 띄게 줄었는지 보기",
      "소변이나 기저귀 횟수가 줄었는지 확인하기",
      "숨쉬는 모습, 피부색, 처짐 정도가 평소와 다른지 보기",
    ],
    homeActions: [
      "증상이 시작된 시간을 적고 같은 방식으로 변화를 확인하세요.",
      "아이를 억지로 먹이기보다 수분을 조금씩 자주 보충해 주세요.",
      "새로운 약이나 민간요법은 임의로 반복하지 말고 복용 기준을 확인하세요.",
    ],
    avoid: [
      "체온이나 증상 숫자 하나만 보고 괜찮다고 단정하지 않기",
      "온라인 정보만 보고 병명을 확정하지 않기",
      "아이 컨디션이 나쁜데 밤까지 무조건 기다리지 않기",
    ],
    recordItems: ["증상 시작 시간", "체온·횟수 변화", "수유량·식사량", "소변·기저귀 횟수", "평소와 다른 행동"],
    relatedTerms: ["아기 증상 병원", "아이 컨디션 확인", "소아과 상담 기준", "육아 건강 Q&A"],
  },
  growth: {
    label: "아이 성장 발달",
    parentIntent: "발달이 늦은 것인지, 자연스러운 개인차인지, 어떤 기준으로 지켜봐야 하는지 걱정되는 상황입니다.",
    quickAnswer: "성장과 발달은 하루 차이보다 누적된 흐름을 보는 것이 중요하며, 이전에 하던 기능이 유지되는지도 함께 확인해야 합니다.",
    firstChecks: [
      "정확한 개월수와 교정월령이 필요한 상황인지 확인하기",
      "최근 몇 주 사이 새롭게 시도한 행동이 있는지 보기",
      "이전에 하던 기능이 갑자기 줄지 않았는지 확인하기",
      "수면, 식사, 놀이, 상호작용이 함께 달라졌는지 보기",
    ],
    homeActions: [
      "하루 결과보다 2~4주 단위로 변화를 기록하세요.",
      "못 하는 행동만 보지 말고 아이가 시도하는 장면을 같이 적어두세요.",
      "비교가 필요할 때는 정확한 개월수부터 먼저 맞춰보세요.",
    ],
    avoid: [
      "또래 한 명과만 비교해 늦다고 단정하지 않기",
      "한 번 실패한 행동을 계속 반복시켜 아이가 지치게 만들지 않기",
      "기술 후퇴가 있는데 단순 개인차로만 넘기지 않기",
    ],
    recordItems: ["정확한 개월수", "새롭게 시도한 행동", "잘 되는 시간대", "어려워하는 상황", "식사·수면 변화"],
    relatedTerms: ["아기 발달 늦음", "아이 성장 체크", "개월수별 발달", "발달 상담 기준"],
  },
  behavior: {
    label: "아이 행동 고민",
    parentIntent: "버릇인지 발달 과정인지, 집에서 어떤 방식으로 대응하면 덜 악화되는지 알고 싶은 상황입니다.",
    quickAnswer: "행동 문제는 아이가 일부러 그러는지보다 어떤 상황에서 반복되는지 패턴을 찾는 것이 먼저입니다.",
    firstChecks: [
      "행동이 가장 자주 나오는 시간대와 장소 확인하기",
      "배고픔, 졸림, 과자극, 화면 노출이 겹쳤는지 보기",
      "전환 상황이나 예고 없는 변화가 있었는지 확인하기",
      "보호자 반응에 따라 행동이 더 커지는지 살펴보기",
    ],
    homeActions: [
      "긴 설명보다 짧고 같은 문장으로 반복해 주세요.",
      "안전과 관련된 행동은 먼저 막고, 설명은 아이가 진정한 뒤에 해주세요.",
      "성공할 수 있는 작은 선택지를 먼저 주면 갈등을 줄이는 데 도움이 됩니다.",
    ],
    avoid: [
      "그 자리에서 아이를 이기려고 오래 실랑이하지 않기",
      "매번 다른 기준으로 허용했다가 금지하지 않기",
      "잠 부족이나 과자극을 무시하고 훈육만 강화하지 않기",
    ],
    recordItems: ["반복되는 시간대", "직전 상황", "먹고 잔 상태", "보호자 반응", "진정까지 걸린 시간"],
    relatedTerms: ["아이 떼쓰기 대처", "육아 행동 고민", "유아 훈육 방법", "아이 감정조절"],
  },
};

const topicProfiles: Array<{ category: QnaCategory; match: RegExp; profile: TopicProfile }> = [
  {
    category: "health",
    match: /열|발열|체온|미열|해열|접종 후 열|예방접종.*열/,
    profile: {
      label: "아기 열·미열",
      parentIntent: "체온 숫자가 위험한 수준인지, 해열제를 써야 하는지, 병원에 바로 가야 하는지 걱정되는 상황입니다.",
      quickAnswer: "열은 숫자만 보지 말고 아이가 처지는지, 수분을 받는지, 소변이 줄었는지를 함께 봐야 합니다.",
      firstChecks: ["같은 부위와 같은 방식으로 체온을 다시 재기", "잘 마시고 소변을 보는지 확인하기", "축 처짐·호흡곤란·경련 같은 경고 신호 확인하기", "예방접종, 감기 노출, 외출 등 전날 변화 떠올리기"],
      homeActions: ["옷과 이불을 너무 두껍게 하지 말고 편안한 상태를 유지해 주세요.", "수분이나 수유를 조금씩 자주 시도해 주세요.", "해열제는 월령과 체중 기준을 확인한 뒤 사용 여부를 판단하세요."],
      avoid: ["손발이 차다고 무조건 두껍게 싸기", "해열제를 짧은 간격으로 반복하기", "열이 내려갔다는 이유만으로 처짐이나 탈수 신호를 놓치기"],
      recordItems: ["체온을 잰 시간과 방법", "최고 체온", "해열제 사용 여부", "수유량·물 섭취량", "소변 횟수"],
      relatedTerms: ["아기 열 38도", "아기 미열", "아기 해열제 기준", "예방접종 후 열"],
    },
  },
  {
    category: "health",
    match: /기침|콧물|코막힘|가래|쌕쌕|호흡|숨|천명/,
    profile: {
      label: "기침·콧물·호흡 증상",
      parentIntent: "감기처럼 지켜봐도 되는지, 숨쉬는 모습 때문에 바로 진료가 필요한지 걱정되는 상황입니다.",
      quickAnswer: "기침과 콧물은 밤에 심해 보일 수 있지만 호흡이 힘들어 보이는지와 수유·수면이 유지되는지가 더 중요합니다.",
      firstChecks: ["숨이 빠르거나 갈비뼈가 들어가는지 보기", "기침 때문에 먹거나 자는 것이 크게 줄었는지 확인하기", "코막힘으로 수유가 어려운지 살펴보기", "열이 동반되는지 같은 시간대에 확인하기"],
      homeActions: ["실내가 너무 건조하거나 덥지 않게 조절해 주세요.", "코막힘이 심하면 수면 전 코를 편하게 해주는 환경을 먼저 만들어 주세요.", "기침 소리보다 아이가 숨쉬기 편한지를 우선 확인하세요."],
      avoid: ["기침을 바로 멈추게 하려고 임의로 약을 반복하기", "호흡이 힘든데 단순 감기로만 넘기기", "밤에 심하다는 이유만으로 원인을 하나로 단정하기"],
      recordItems: ["기침이 심한 시간대", "열 동반 여부", "수유·식사 변화", "잠에서 깨는 횟수", "숨쉬는 모습"],
      relatedTerms: ["아기 밤 기침", "아기 코막힘", "아이 콧물 오래감", "소아 호흡 체크"],
    },
  },
  {
    category: "health",
    match: /구토|토하|설사|변비|대변|배변|묽은 변|혈변|복통|배가|토/,
    profile: {
      label: "구토·설사·배변 변화",
      parentIntent: "장염인지, 먹은 음식 때문인지, 탈수나 혈변처럼 놓치면 안 되는 신호가 있는지 걱정되는 상황입니다.",
      quickAnswer: "구토와 설사는 횟수보다 아이가 마실 수 있는지, 소변이 줄지 않는지, 피나 심한 통증이 있는지를 같이 봐야 합니다.",
      firstChecks: ["구토·설사 횟수와 시작 시간 적기", "소변 횟수와 입술·눈물 등 탈수 의심 신호 보기", "피가 섞였거나 심한 복통이 있는지 확인하기", "최근 새 음식, 외식, 가족 내 장염 증상 떠올리기"],
      homeActions: ["한 번에 많이 먹이기보다 조금씩 자주 수분을 시도해 주세요.", "억지 식사는 피하고 아이가 받아들이는 양을 중심으로 보세요.", "변 색과 냄새보다 횟수, 양, 아이 컨디션을 함께 기록하세요."],
      avoid: ["구토 직후 바로 많이 먹이기", "설사가 있다고 무조건 굶기기", "혈변이나 탈수 신호를 단순 배탈로 넘기기"],
      recordItems: ["구토·설사 횟수", "마신 양", "소변 횟수", "대변 색과 양", "복통·열 동반 여부"],
      relatedTerms: ["아기 구토", "아기 설사", "아기 변비", "아이 배 아픔"],
    },
  },
  {
    category: "health",
    match: /발진|두드러기|피부|습진|땀띠|기저귀|붉|가려/,
    profile: {
      label: "피부 발진·두드러기",
      parentIntent: "알레르기인지, 접촉 자극인지, 집에서 지켜봐도 되는 피부 변화인지 걱정되는 상황입니다.",
      quickAnswer: "피부 변화는 모양만 보지 말고 퍼지는 속도, 가려움, 열 동반, 호흡 증상 여부를 함께 확인해야 합니다.",
      firstChecks: ["언제부터 어디에 생겼는지 확인하기", "새 음식·약·세제·로션·기저귀 변화 떠올리기", "가려움이나 붓기가 빠르게 퍼지는지 보기", "열, 입술 붓기, 호흡 불편이 동반되는지 확인하기"],
      homeActions: ["최근 바꾼 제품이나 음식이 있다면 기록해 두세요.", "긁어서 상처가 나지 않도록 손톱과 옷 자극을 줄여 주세요.", "사진을 남겨두면 변화 속도를 설명할 때 도움이 됩니다."],
      avoid: ["원인을 모른 채 여러 제품을 한꺼번에 바르기", "빠르게 퍼지는 두드러기를 단순 땀띠로만 보기", "호흡 증상이나 붓기가 있는데 기다리기"],
      recordItems: ["처음 생긴 부위", "퍼지는 속도", "새 음식·제품", "가려움 정도", "사진 기록"],
      relatedTerms: ["아기 발진", "아기 두드러기", "기저귀 발진", "아이 피부 가려움"],
    },
  },
  {
    category: "growth",
    match: /뒤집|앉|기어|기기|걷|걸|서기|잡고|목 가누|대근육|계단|점프/,
    profile: {
      label: "대근육 발달",
      parentIntent: "뒤집기, 앉기, 기기, 걷기처럼 눈에 보이는 운동 발달이 늦은 건 아닌지 걱정되는 상황입니다.",
      quickAnswer: "대근육 발달은 순서와 시기가 아이마다 다르지만, 이전보다 힘이 빠지거나 하던 동작이 줄면 더 주의해 봐야 합니다.",
      firstChecks: ["정확한 개월수와 교정월령 확인하기", "양쪽 몸을 비슷하게 쓰는지 보기", "새로운 자세를 시도하는 빈도 확인하기", "이전에 하던 동작이 줄었는지 살펴보기"],
      homeActions: ["짧은 놀이 시간에 엎드리기, 잡기, 이동 시도를 자연스럽게 만들어 주세요.", "못 하는 동작을 억지로 반복하기보다 성공하기 쉬운 단계부터 시작하세요.", "한쪽만 쓰는 모습이 반복되면 기록해 두세요."],
      avoid: ["월령표 하나만 보고 늦다고 단정하기", "아이 몸을 억지로 세우거나 걷게 하기", "갑작스러운 기능 후퇴를 개인차로만 넘기기"],
      recordItems: ["성공한 동작", "시도하는 자세", "양쪽 사용 차이", "넘어짐·불편함", "최근 2~4주 변화"],
      relatedTerms: ["아기 뒤집기 늦음", "아기 앉기 시기", "아기 걷는 시기", "대근육 발달"],
    },
  },
  {
    category: "growth",
    match: /말|언어|옹알|단어|문장|발음|이름|부르|따라 말|말귀/,
    profile: {
      label: "언어 발달",
      parentIntent: "말이 늦은 것인지, 이해는 하는데 표현만 느린 것인지, 상담이 필요한 시점인지 걱정되는 상황입니다.",
      quickAnswer: "언어 발달은 말하는 단어 수만 보지 말고 눈맞춤, 반응, 이해, 따라 하기, 의사표현을 함께 보는 것이 중요합니다.",
      firstChecks: ["이름을 부르면 돌아보는지 확인하기", "간단한 지시를 이해하는지 보기", "손짓·표정·소리로 요구를 표현하는지 살펴보기", "이전에 하던 말이나 반응이 줄었는지 확인하기"],
      homeActions: ["아이 행동을 짧은 문장으로 말로 붙여 주세요.", "질문을 몰아치기보다 기다리는 시간을 주세요.", "화면 소리보다 실제 상호작용 시간을 늘리는 쪽이 도움이 됩니다."],
      avoid: ["말만 늦고 다 괜찮다고 단정하기", "계속 따라 말하라고 압박하기", "눈맞춤이나 반응 저하를 놓치기"],
      recordItems: ["현재 쓰는 단어", "이해하는 말", "손짓·표정 표현", "이름 반응", "상호작용 변화"],
      relatedTerms: ["아기 말 늦음", "언어 발달 지연", "옹알이 시기", "아이 말문 트이기"],
    },
  },
  {
    category: "growth",
    match: /키|몸무게|체중|성장|백분위|머리둘레|작|마른|살/,
    profile: {
      label: "키·몸무게 성장",
      parentIntent: "키나 몸무게가 평균보다 낮거나 높을 때 정상 흐름인지, 성장곡선을 다시 봐야 하는지 걱정되는 상황입니다.",
      quickAnswer: "키와 몸무게는 한 번의 숫자보다 성장곡선에서 자기 흐름을 유지하는지가 더 중요합니다.",
      firstChecks: ["최근 측정값이 같은 방식으로 잰 값인지 확인하기", "이전 기록과 비교해 급격한 변화가 있는지 보기", "식사량, 수면, 활동량 변화 확인하기", "아픈 뒤 체중 변화가 생겼는지 살펴보기"],
      homeActions: ["측정 날짜와 값을 함께 남겨 추세로 보세요.", "먹는 양만 보지 말고 활동량과 수면을 같이 기록하세요.", "급격한 감소나 증가가 반복되면 상담 때 기록을 가져가세요."],
      avoid: ["하루 측정값으로 성장 부진을 단정하기", "또래 평균만 보고 아이의 기존 흐름을 무시하기", "체중 변화와 식사·질병 이력을 따로 보기"],
      recordItems: ["측정 날짜", "키·몸무게", "최근 식사량", "수면 시간", "아팠던 기간"],
      relatedTerms: ["아기 성장 백분위", "아이 키 몸무게", "아기 체중 증가", "성장곡선"],
    },
  },
  {
    category: "behavior",
    match: /떼|고집|울|화내|짜증|바닥|소리|분노|거부|싫어/,
    profile: {
      label: "떼쓰기·감정 폭발",
      parentIntent: "훈육을 해야 하는지, 달래야 하는지, 반복되는 떼쓰기를 어떻게 줄일지 걱정되는 상황입니다.",
      quickAnswer: "떼쓰기는 그 순간을 이기는 것보다 배고픔, 졸림, 전환 상황 같은 유발 요인을 줄이는 것이 먼저입니다.",
      firstChecks: ["졸리거나 배고픈 시간이었는지 보기", "갑작스러운 전환이나 거절이 있었는지 확인하기", "사람이 많은 곳이나 소음이 큰 곳이었는지 보기", "보호자 반응 후 행동이 더 커졌는지 살펴보기"],
      homeActions: ["위험하지 않다면 먼저 짧게 기다리고 감정을 이름 붙여 주세요.", "선택지를 두 개 정도로 줄여 아이가 다시 조절할 기회를 주세요.", "진정 후에 짧은 문장으로 규칙을 반복하세요."],
      avoid: ["울음을 멈추게 하려고 매번 원하는 것을 바로 주기", "긴 설교로 아이의 감정을 더 키우기", "공공장소라는 이유로 기준을 계속 바꾸기"],
      recordItems: ["떼쓰기 전 상황", "거절한 내용", "잠·식사 상태", "진정 방법", "반복되는 장소"],
      relatedTerms: ["아이 떼쓰기", "유아 고집", "아이 감정조절", "떼쓰기 훈육"],
    },
  },
  {
    category: "behavior",
    match: /잠|수면|낮잠|새벽|밤|잠투정|재우|자다/,
    profile: {
      label: "수면·잠투정",
      parentIntent: "잠을 안 자는 이유가 습관인지, 낮잠이나 루틴 문제인지, 집에서 어떤 순서로 조정할지 걱정되는 상황입니다.",
      quickAnswer: "수면 문제는 그날 밤만 보지 말고 낮잠, 활동량, 잠들기 전 자극, 매일 반복되는 루틴을 함께 봐야 합니다.",
      firstChecks: ["낮잠 시간과 마지막 낮잠 종료 시간 확인하기", "잠들기 전 화면·소음·격한 놀이가 있었는지 보기", "배고픔이나 불편함이 있는지 살펴보기", "매일 같은 순서의 잠자리 루틴이 있는지 확인하기"],
      homeActions: ["잠들기 전 순서를 짧고 반복 가능하게 만들어 주세요.", "잠투정이 심한 날은 설명보다 자극을 줄이는 데 집중하세요.", "기상 시간과 낮잠 시간을 함께 기록하면 패턴을 찾기 쉽습니다."],
      avoid: ["밤마다 다른 방식으로 재우기", "잠들기 직전 화면 노출 늘리기", "낮잠 문제를 보지 않고 밤잠만 해결하려 하기"],
      recordItems: ["기상 시간", "낮잠 시간", "잠든 시간", "밤중 깬 횟수", "잠들기 전 활동"],
      relatedTerms: ["아이 잠투정", "아기 수면 루틴", "아이 새벽에 깸", "낮잠 조절"],
    },
  },
  {
    category: "behavior",
    match: /편식|밥|먹|간식|음식|식사|숟가락/,
    profile: {
      label: "편식·식사 거부",
      parentIntent: "왜 안 먹는지, 억지로 먹여도 되는지, 식사 시간을 어떻게 바꾸면 좋을지 걱정되는 상황입니다.",
      quickAnswer: "식사 거부는 입맛만의 문제가 아니라 간식, 피로, 수면, 식사 분위기, 감각 예민함과 함께 나타날 수 있습니다.",
      firstChecks: ["간식과 우유·음료 섭취 시간이 식사와 가까웠는지 보기", "졸리거나 피곤한 시간대였는지 확인하기", "특정 질감·냄새·온도에만 거부가 있는지 보기", "식사 시간이 갈등으로 길어지는지 살펴보기"],
      homeActions: ["먹는 양보다 식사 자리에 편하게 앉는 경험을 먼저 쌓아 주세요.", "새 음식은 아주 작은 양으로 반복 노출해 보세요.", "억지로 먹이는 시간보다 식사 루틴을 짧고 예측 가능하게 만드는 것이 좋습니다."],
      avoid: ["한 끼를 많이 먹이려고 오래 붙잡기", "안 먹으면 바로 간식으로 보상하기", "먹는 문제를 아이 의지 문제로만 보기"],
      recordItems: ["잘 먹는 음식", "거부하는 질감", "간식 시간", "식사 소요 시간", "식사 중 갈등 상황"],
      relatedTerms: ["아이 편식", "유아 식사 거부", "밥 안 먹는 아이", "이유식 거부"],
    },
  },
  {
    category: "behavior",
    match: /분리불안|어린이집|엄마|아빠|낯가림|등원|떨어/,
    profile: {
      label: "분리불안·등원 적응",
      parentIntent: "엄마 아빠와 떨어질 때 우는 행동이 정상 발달인지, 어린이집 적응을 어떻게 도와야 하는지 걱정되는 상황입니다.",
      quickAnswer: "분리불안은 낯선 환경과 전환에서 커질 수 있으므로 예고, 짧은 인사, 반복되는 루틴이 도움이 됩니다.",
      firstChecks: ["새로운 장소나 사람이 있었는지 확인하기", "등원 전 수면과 아침 루틴이 흔들렸는지 보기", "헤어지는 순간이 길어지며 불안이 커지는지 살펴보기", "돌아온 뒤 회복은 빠른지 확인하기"],
      homeActions: ["헤어질 때는 길게 설득하기보다 짧고 같은 인사를 반복해 주세요.", "돌아온다는 예측을 쌓을 수 있게 약속한 순서를 지켜 주세요.", "전날 밤이나 아침에 오늘 일정을 짧게 예고해 주세요."],
      avoid: ["몰래 사라지기", "울음을 멈출 때까지 계속 되돌아가기", "불안을 혼낸 뒤 바로 분리하기"],
      recordItems: ["울기 시작한 시점", "진정까지 걸린 시간", "등원 전 수면", "담임 피드백", "하원 후 컨디션"],
      relatedTerms: ["아이 분리불안", "어린이집 등원 거부", "낯가림 심한 아이", "등원 적응"],
    },
  },
  {
    category: "behavior",
    match: /때리|물어|던지|공격|밀치|위험|다치/,
    profile: {
      label: "공격 행동·위험 행동",
      parentIntent: "아이의 때리기나 물기, 던지기가 일시적인 표현인지, 어떻게 막고 가르쳐야 하는지 걱정되는 상황입니다.",
      quickAnswer: "공격 행동은 먼저 안전을 막고, 아이가 진정한 뒤 짧은 규칙과 대체 표현을 반복하는 방식이 필요합니다.",
      firstChecks: ["다칠 수 있는 물건이나 거리를 먼저 확보하기", "행동 직전 빼앗김·피로·과자극이 있었는지 보기", "말로 표현하기 어려운 상황이었는지 확인하기", "반복 빈도가 늘고 강도가 세지는지 살펴보기"],
      homeActions: ["때리거나 던지는 행동은 즉시 막고 짧게 '안전하게'라는 기준을 알려 주세요.", "진정 후에는 손으로 할 수 있는 대체 행동을 알려 주세요.", "반복되는 상황은 미리 예고하고 물건 배치를 조정해 주세요."],
      avoid: ["맞대응하거나 큰 소리로 더 자극하기", "웃고 넘겨 행동이 놀이처럼 굳어지게 하기", "다친 사람이 있는데 이유 설명부터 길게 하기"],
      recordItems: ["행동 직전 사건", "대상과 장소", "강도와 빈도", "다친 여부", "진정 후 반응"],
      relatedTerms: ["아이 때리기", "아이 무는 행동", "유아 공격성", "위험 행동 훈육"],
    },
  },
];

function unique(values: string[]) {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}

function compactSentence(value: string, maxLength = 78) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trim()}…`;
}

function getQuestionCore(question: string) {
  return question.replace(/[?？]/g, "").trim();
}

function getTargetLabel(question: string) {
  if (question.includes("신생아")) return "신생아";
  if (question.includes("아기")) return "아기";
  if (question.includes("유아")) return "유아";
  return "아이";
}

function getProfile(item: QnaEntry, category: QnaCategory) {
  const source = `${item.question} ${item.topic} ${item.summary}`;
  return topicProfiles.find((entry) => entry.category === category && entry.match.test(source))?.profile ?? fallbackProfiles[category];
}

function buildSeoTitle(question: string, topic: string) {
  const core = getQuestionCore(question);
  const suffix = `${topic} 체크포인트`;
  const title = `${core} 답변 정리 | ${suffix}`;
  return compactSentence(title, 58);
}

function buildLongtailPhrases(item: QnaEntry, category: QnaCategory, profile: TopicProfile) {
  const target = getTargetLabel(item.question);
  const questionCore = getQuestionCore(item.question);
  const categoryName = qnaCategories[category];
  return unique([
    questionCore,
    `${target} ${item.topic}`,
    `${target} ${item.topic} 원인`,
    `${target} ${item.topic} 대처`,
    `${target} ${item.topic} 병원`,
    `${item.topic} 체크리스트`,
    `${categoryName} 질문`,
    ...profile.relatedTerms,
    ...item.keywords,
  ]).slice(0, 12);
}

export function buildQnaLongtailContent(item: QnaEntry, category: QnaCategory): QnaLongtailContent {
  const profile = getProfile(item, category);
  const target = getTargetLabel(item.question);
  const questionCore = getQuestionCore(item.question);
  const longtailPhrases = buildLongtailPhrases(item, category, profile);
  const categoryName = qnaCategories[category];
  const seoTitle = buildSeoTitle(item.question, item.topic);

  const heroLead = `${questionCore} 때문에 걱정된다면 먼저 볼 것은 ${profile.label} 자체보다 ${target}의 현재 컨디션과 반복되는 패턴입니다. 아래 내용은 집에서 바로 확인할 부분, 기록해두면 좋은 내용, 상담을 서두르면 좋은 신호를 보호자 입장에서 정리한 답변입니다.`;

  const oneLineAnswer = `${profile.quickAnswer} ${item.caution}`;

  const searchIntentParagraphs = [
    `${item.question}라는 고민이 생기면 가장 먼저 떠오르는 걱정은 "지금 우리 아이에게 바로 문제가 되는 상황일까?"입니다. 그래서 짧은 결론만 보기보다 아이 상태를 어떤 순서로 확인하면 좋을지 차근차근 나눠 보는 것이 좋습니다.`,
    `${profile.parentIntent} 특히 ${item.topic} 상황은 아이마다 원인과 반응이 다를 수 있어, 하루의 한 장면보다 최근 흐름과 아이의 기본 컨디션을 같이 보는 것이 좋습니다.`,
    categoryIntent[category],
  ];

  const quickSummary = unique([
    categoryQuickPoint[category],
    profile.quickAnswer,
    `오늘 바로 판단이 어렵다면 ${profile.recordItems.slice(0, 3).join(", ")}부터 짧게 기록해 보세요.`,
    item.caution,
  ]);

  const situationCards: SituationCard[] = [
    {
      title: `${item.topic} 상황에서 먼저 볼 것`,
      description: "바로 단정하기 전에, 아이 상태를 같은 기준으로 나눠보면 판단이 쉬워집니다.",
      points: profile.firstChecks,
    },
    {
      title: "집에서 오늘 해볼 수 있는 대응",
      description: "큰 조치를 하기 전 보호자가 부담 없이 확인하고 정리할 수 있는 기본 대응입니다.",
      points: profile.homeActions,
    },
    {
      title: "놓치기 쉬운 비교 기준",
      description: "어제와 오늘, 평소와 지금, 특정 시간대와 장소를 비교하면 원인을 좁히는 데 도움이 됩니다.",
      points: [
        `평소 ${target}의 먹는 양과 잠드는 모습이 달라졌는지 보기`,
        `${item.topic}이 하루 중 언제 심해지고 언제 줄어드는지 비교하기`,
        "최근 외출, 접종, 새 음식, 어린이집, 가족 컨디션 변화가 있었는지 확인하기",
        "좋아지는 흐름인지, 점점 강해지는 흐름인지 구분하기",
      ],
    },
  ];

  const recordItems = unique([...profile.recordItems, ...item.checklist.slice(0, 3)]).slice(0, 8);

  return {
    h1: `${item.question} 답변 정리`,
    seoTitle,
    metaDescription: compactSentence(
      `${item.question} 보호자가 먼저 확인할 ${item.topic} 체크포인트, 집에서 볼 기준, 기록 방법, 상담을 서둘러야 하는 신호까지 문장형 Q&A로 정리했습니다.`,
      155,
    ),
    metaKeywords: longtailPhrases,
    heroLead,
    oneLineAnswer,
    searchIntentTitle: `${item.question} 판단하기 전에 먼저 볼 점`,
    searchIntentParagraphs,
    quickSummary,
    situationCards,
    recordTitle: categoryRecordTitle[category],
    recordDescription: `${item.topic} 관련 고민은 말로만 설명하려면 막상 빠뜨리는 내용이 많습니다. 아래 항목을 짧게라도 적어두면 보호자 판단에도 도움이 되고, 상담이나 진료를 받을 때도 상황 전달이 쉬워집니다.`,
    recordItems,
    avoidTitle: `${item.topic} 상황에서 피하면 좋은 대응`,
    avoidItems: profile.avoid,
    longtailPhrases,
    relatedQuestionIntro: `${categoryName} 안에서도 ${item.topic}와 연결된 질문을 함께 보면 아이 상태를 더 입체적으로 이해할 수 있습니다. 아래 질문들은 비슷한 고민을 이어서 살펴볼 때 도움이 됩니다.`,
  };
}
