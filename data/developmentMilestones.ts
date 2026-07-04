export type DevelopmentStatus = "not_started" | "practicing" | "achieved" | "concern";

export type DevelopmentDomainKey = "motor" | "sensory" | "communication" | "feeding";

export type DevelopmentAgeRangeKey =
  | "0-2"
  | "3-4"
  | "5-6"
  | "7-9"
  | "10-12"
  | "13-18"
  | "19-24"
  | "25-36";

export type DevelopmentDomain = {
  key: DevelopmentDomainKey;
  label: string;
  description: string;
};

export type DevelopmentAgeRange = {
  key: DevelopmentAgeRangeKey;
  label: string;
  shortLabel: string;
  minMonth: number;
  maxMonth: number;
  guide: string;
};

export type DevelopmentMilestone = {
  key: string;
  ageRangeKey: DevelopmentAgeRangeKey;
  domainKey: DevelopmentDomainKey;
  title: string;
  description: string;
  observeTip: string;
  supportTip: string;
};

export const developmentDomains: DevelopmentDomain[] = [
  {
    key: "motor",
    label: "움직임",
    description: "고개, 몸통, 손 사용처럼 아이가 몸을 조절하는 모습을 봐요.",
  },
  {
    key: "sensory",
    label: "감각·놀이",
    description: "소리, 빛, 촉감, 장난감에 반응하고 탐색하는 모습을 봐요.",
  },
  {
    key: "communication",
    label: "말·소통",
    description: "눈맞춤, 옹알이, 손짓, 말 이해와 표현 흐름을 봐요.",
  },
  {
    key: "feeding",
    label: "먹기·생활",
    description: "수유, 이유식, 씹기, 컵 사용처럼 생활 속 발달을 봐요.",
  },
];

export const developmentAgeRanges: DevelopmentAgeRange[] = [
  { key: "0-2", label: "생후 0~2개월", shortLabel: "0~2개월", minMonth: 0, maxMonth: 2, guide: "깨어 있는 짧은 시간에 얼굴, 소리, 엎드려 보기 반응을 천천히 살펴요." },
  { key: "3-4", label: "생후 3~4개월", shortLabel: "3~4개월", minMonth: 3, maxMonth: 4, guide: "고개 조절, 손을 입으로 가져가기, 사람 목소리에 반응하는 흐름을 봐요." },
  { key: "5-6", label: "생후 5~6개월", shortLabel: "5~6개월", minMonth: 5, maxMonth: 6, guide: "뒤집기, 앉기 준비, 장난감 잡기, 이유식 준비 신호를 함께 봐요." },
  { key: "7-9", label: "생후 7~9개월", shortLabel: "7~9개월", minMonth: 7, maxMonth: 9, guide: "앉아서 놀기, 기기 준비, 낯가림, 질감 있는 음식 반응을 살펴요." },
  { key: "10-12", label: "생후 10~12개월", shortLabel: "10~12개월", minMonth: 10, maxMonth: 12, guide: "잡고 서기, 손가락 사용, 이름 부르면 반응, 가족 식사로 넘어가는 흐름을 봐요." },
  { key: "13-18", label: "생후 13~18개월", shortLabel: "13~18개월", minMonth: 13, maxMonth: 18, guide: "걷기, 따라 하기, 간단한 말 이해, 숟가락 연습처럼 생활 속 변화를 기록해요." },
  { key: "19-24", label: "생후 19~24개월", shortLabel: "19~24개월", minMonth: 19, maxMonth: 24, guide: "두 단어 표현, 몸 놀이, 간단한 지시 이해, 스스로 먹기 흐름을 봐요." },
  { key: "25-36", label: "생후 25~36개월", shortLabel: "25~36개월", minMonth: 25, maxMonth: 36, guide: "문장 표현, 또래 놀이, 뛰기·계단, 배변 준비 같은 일상 변화를 기록해요." },
];

const milestoneRows: Array<Omit<DevelopmentMilestone, "key">> = [
  { ageRangeKey: "0-2", domainKey: "motor", title: "엎드려 있을 때 고개를 잠깐 들어요", description: "짧은 시간이라도 고개를 옆으로 돌리거나 살짝 드는지 봐요.", observeTip: "수유 직후를 피하고 깨어 있을 때 1~2분부터 시작해요.", supportTip: "보호자 가슴 위나 단단한 매트 위에서 얼굴을 마주 보며 도와주세요." },
  { ageRangeKey: "0-2", domainKey: "motor", title: "팔과 다리를 양쪽 비슷하게 움직여요", description: "한쪽만 계속 덜 움직이지 않는지 편하게 관찰해요.", observeTip: "기저귀를 갈 때 양쪽 팔·다리 움직임을 함께 봐요.", supportTip: "손발을 억지로 펴기보다 편하게 움직일 수 있게 옷과 자세를 조절해요." },
  { ageRangeKey: "0-2", domainKey: "motor", title: "안았을 때 목과 몸이 조금씩 안정돼요", description: "완전히 가누지는 못해도 안았을 때 몸이 조금씩 힘을 받는지 봐요.", observeTip: "목을 지지한 상태에서 짧게만 확인해요.", supportTip: "안아 올릴 때 목과 등을 충분히 받쳐 주세요." },
  { ageRangeKey: "0-2", domainKey: "sensory", title: "큰 소리에 놀라거나 반응해요", description: "갑작스러운 소리에 깜짝 놀라거나 몸을 움직이는지 봐요.", observeTip: "일부러 큰 소리를 내기보다 생활 소리에 자연스럽게 반응하는지 확인해요.", supportTip: "너무 큰 소음은 피하고 보호자 목소리를 자주 들려주세요." },
  { ageRangeKey: "0-2", domainKey: "sensory", title: "가까운 얼굴이나 빛을 잠깐 바라봐요", description: "가까운 거리에서 얼굴이나 대비가 큰 물체를 잠깐 보는지 봐요.", observeTip: "아이 얼굴에서 20~30cm 정도 떨어져 천천히 움직여 봐요.", supportTip: "밝은 조명은 직접 비추지 말고 부드러운 빛에서 마주 봐 주세요." },
  { ageRangeKey: "0-2", domainKey: "sensory", title: "안기거나 부드러운 접촉에 진정돼요", description: "안거나 토닥이면 울음이 조금 줄어드는지 봐요.", observeTip: "배고픔, 기저귀, 졸림 같은 기본 원인도 함께 확인해요.", supportTip: "부드럽게 안고 일정한 리듬으로 토닥이며 안정감을 주세요." },
  { ageRangeKey: "0-2", domainKey: "communication", title: "울음으로 배고픔이나 불편함을 알려요", description: "울음의 길이와 강도가 상황에 따라 조금씩 달라지는지 봐요.", observeTip: "울음 시간, 수유 간격, 기저귀 상태를 함께 적어두면 도움이 돼요.", supportTip: "반응을 빨리 해주면 아이가 안정감을 느끼는 데 도움이 돼요." },
  { ageRangeKey: "0-2", domainKey: "communication", title: "보호자 목소리에 잠깐 멈추거나 바라봐요", description: "익숙한 목소리에 움직임을 멈추거나 눈을 맞추려는 모습을 봐요.", observeTip: "조용한 시간에 이름이나 짧은 말을 부드럽게 들려주세요.", supportTip: "말을 많이 가르치기보다 표정과 목소리로 자주 반응해 주세요." },
  { ageRangeKey: "0-2", domainKey: "communication", title: "가끔 미소나 표정 변화가 보여요", description: "잠깐이라도 편안한 표정이나 미소가 나오는지 봐요.", observeTip: "수유 후 안정된 시간에 얼굴을 마주 보고 살펴요.", supportTip: "아이 표정을 따라 하며 짧게 말을 걸어 주세요." },
  { ageRangeKey: "0-2", domainKey: "feeding", title: "수유할 때 빨고 삼키는 흐름이 안정돼요", description: "먹는 중 자주 사레들리거나 숨차 보이지 않는지 봐요.", observeTip: "수유 시간, 양, 중간에 쉬는 횟수를 간단히 기록해요.", supportTip: "아이 속도에 맞춰 쉬는 시간을 주고 자세를 안정적으로 잡아주세요." },
  { ageRangeKey: "0-2", domainKey: "feeding", title: "수유 후 트림이나 안정 시간이 필요해요", description: "먹은 뒤 바로 눕혔을 때 불편해하는지 봐요.", observeTip: "토함이 잦거나 수유 후 계속 힘들어하면 기록해두세요.", supportTip: "수유 후 잠시 세워 안고 편안한 자세로 쉬게 해주세요." },
  { ageRangeKey: "0-2", domainKey: "feeding", title: "배고픔과 포만 신호가 조금씩 보여요", description: "입을 찾거나 고개를 돌리는 신호가 있는지 봐요.", observeTip: "억지로 더 먹이기보다 아이가 멈추는 신호도 봐요.", supportTip: "수유량만 보지 말고 소변, 체중 증가, 컨디션을 함께 확인해요." },

  { ageRangeKey: "3-4", domainKey: "motor", title: "엎드려서 고개를 더 오래 들어요", description: "팔로 바닥을 밀며 고개와 가슴을 조금 드는지 봐요.", observeTip: "하루 여러 번 짧게 엎드려 보는 시간을 만들어 주세요.", supportTip: "앞에 장난감이나 보호자 얼굴을 두고 자연스럽게 보게 해요." },
  { ageRangeKey: "3-4", domainKey: "motor", title: "손을 입으로 가져가요", description: "손을 바라보거나 입으로 가져가며 몸을 탐색하는지 봐요.", observeTip: "장갑을 오래 끼우기보다 손을 볼 수 있는 시간을 줘요.", supportTip: "손을 깨끗하게 유지하고 억지로 빼기보다 안전하게 탐색하게 해요." },
  { ageRangeKey: "3-4", domainKey: "motor", title: "누운 자세에서 몸을 좌우로 움직여요", description: "몸을 비틀거나 옆으로 돌려보려는 움직임이 있는지 봐요.", observeTip: "딱딱한 바닥 매트 위에서 안전하게 관찰해요.", supportTip: "한쪽 방향만 보지 않도록 장난감 위치를 바꿔 주세요." },
  { ageRangeKey: "3-4", domainKey: "sensory", title: "장난감을 눈으로 따라가요", description: "천천히 움직이는 물체를 좌우로 따라보는지 봐요.", observeTip: "너무 빠르게 흔들지 말고 아이 눈높이에서 천천히 움직여요.", supportTip: "대비가 큰 딸랑이나 부드러운 소리 장난감을 사용해요." },
  { ageRangeKey: "3-4", domainKey: "sensory", title: "소리 나는 쪽으로 관심을 보여요", description: "목소리나 딸랑이 소리 쪽으로 눈이나 고개가 향하는지 봐요.", observeTip: "양쪽에서 번갈아 부드럽게 소리를 들려줘요.", supportTip: "TV 소리보다 보호자의 실제 목소리를 자주 들려주세요." },
  { ageRangeKey: "3-4", domainKey: "sensory", title: "손에 닿는 물건을 느껴봐요", description: "부드러운 천이나 딸랑이에 손이 닿을 때 반응하는지 봐요.", observeTip: "입에 넣어도 안전한 크기와 재질인지 먼저 확인해요.", supportTip: "다양한 촉감을 짧게 경험하게 해주세요." },
  { ageRangeKey: "3-4", domainKey: "communication", title: "옹알이를 시작해요", description: "아, 우 같은 소리를 내거나 목소리 놀이를 하는지 봐요.", observeTip: "기저귀 갈기나 목욕 후 편한 시간에 말을 걸어봐요.", supportTip: "아이 소리에 바로 반응하고 비슷한 소리로 답해 주세요." },
  { ageRangeKey: "3-4", domainKey: "communication", title: "얼굴을 보면 웃거나 표정이 밝아져요", description: "익숙한 얼굴에 미소나 표정 변화가 있는지 봐요.", observeTip: "아이와 눈높이를 맞추고 천천히 표정을 보여줘요.", supportTip: "짧은 까꿍 놀이처럼 부담 없는 상호작용을 해요." },
  { ageRangeKey: "3-4", domainKey: "communication", title: "불편할 때 다른 울음이나 소리로 표현해요", description: "졸림, 배고픔, 심심함에 따라 반응이 다른지 봐요.", observeTip: "상황과 함께 기록하면 패턴을 찾기 쉬워요.", supportTip: "아이 신호를 맞히려 애쓰기보다 반복해서 반응해 주세요." },
  { ageRangeKey: "3-4", domainKey: "feeding", title: "수유 중 고개와 몸이 조금 더 안정돼요", description: "먹는 중 몸을 과하게 젖히거나 자주 힘들어하지 않는지 봐요.", observeTip: "자세를 바꿨을 때 먹기 편해지는지 확인해요.", supportTip: "아이 몸이 한쪽으로 꺾이지 않게 안거나 받쳐 주세요." },
  { ageRangeKey: "3-4", domainKey: "feeding", title: "손을 입에 가져가며 입 주변을 탐색해요", description: "입으로 손을 빨거나 혀와 입술 움직임이 늘어나는지 봐요.", observeTip: "이 시기 입 탐색은 자연스러운 발달 과정일 수 있어요.", supportTip: "위생을 챙기고 작은 물건은 가까이 두지 않아요." },
  { ageRangeKey: "3-4", domainKey: "feeding", title: "수유 리듬이 조금씩 예측 가능해져요", description: "수유 간격이나 잠드는 흐름이 조금씩 일정해지는지 봐요.", observeTip: "하루 전체가 아니라 며칠 흐름으로 보세요.", supportTip: "일정한 조명, 소리, 자세로 편안한 루틴을 만들어 주세요." },

  { ageRangeKey: "5-6", domainKey: "motor", title: "뒤집기를 시도하거나 성공해요", description: "등에서 배로, 배에서 등으로 몸을 돌리려는 모습을 봐요.", observeTip: "침대나 소파 위에서는 낙상 위험이 있어 바닥 매트에서 봐요.", supportTip: "장난감을 옆에 두고 스스로 몸을 돌려보게 도와주세요." },
  { ageRangeKey: "5-6", domainKey: "motor", title: "양손으로 장난감을 잡고 살펴봐요", description: "손을 뻗어 잡고 입으로 가져가거나 흔드는지 봐요.", observeTip: "너무 무겁거나 작은 물건은 피하세요.", supportTip: "잡기 쉬운 가벼운 장난감을 양쪽에 번갈아 놓아 주세요." },
  { ageRangeKey: "5-6", domainKey: "motor", title: "앉기 준비가 보여요", description: "받쳐 앉혔을 때 머리와 몸통을 조금씩 세우는지 봐요.", observeTip: "혼자 앉히고 오래 두기보다 짧게 안전하게 확인해요.", supportTip: "양옆을 받쳐 주고 넘어질 수 있는 주변을 정리해요." },
  { ageRangeKey: "5-6", domainKey: "sensory", title: "입과 손으로 장난감을 탐색해요", description: "잡은 것을 보고, 만지고, 입으로 가져가는지 봐요.", observeTip: "삼킬 수 있는 작은 물건은 모두 치워요.", supportTip: "안전한 치발기나 촉감 장난감으로 탐색을 도와주세요." },
  { ageRangeKey: "5-6", domainKey: "sensory", title: "거울 속 얼굴이나 사람 표정에 관심을 보여요", description: "거울, 표정, 목소리에 웃거나 집중하는지 봐요.", observeTip: "깨지지 않는 안전 거울을 사용해요.", supportTip: "이름을 부르고 표정을 바꾸며 짧게 놀아 주세요." },
  { ageRangeKey: "5-6", domainKey: "sensory", title: "새로운 촉감에 반응해요", description: "부드러운 천, 딸랑이, 물놀이처럼 촉감 변화에 반응하는지 봐요.", observeTip: "싫어하면 억지로 반복하지 말고 짧게 끝내요.", supportTip: "좋아하는 촉감부터 천천히 넓혀 주세요." },
  { ageRangeKey: "5-6", domainKey: "communication", title: "소리 내며 관심을 끌어요", description: "옹알이, 웃음, 높은 소리처럼 다양한 소리가 늘어나는지 봐요.", observeTip: "아이가 소리 낼 때 잠시 기다렸다가 반응해요.", supportTip: "아이 소리를 따라 하고 대화하듯 번갈아 말해 주세요." },
  { ageRangeKey: "5-6", domainKey: "communication", title: "이름이나 익숙한 말에 반응해요", description: "이름을 부르면 잠깐 보거나 소리 쪽으로 관심을 보이는지 봐요.", observeTip: "TV나 음악을 줄이고 조용한 상황에서 확인해요.", supportTip: "기저귀, 목욕, 수유처럼 반복 상황에서 같은 말을 들려주세요." },
  { ageRangeKey: "5-6", domainKey: "communication", title: "좋고 싫은 반응을 더 분명하게 보여요", description: "웃음, 찡그림, 몸 돌리기처럼 선호 표현이 보이는지 봐요.", observeTip: "아이가 피곤하거나 배고픈 시간은 피해서 관찰해요.", supportTip: "싫어하는 신호를 존중하고 잠시 쉬게 해주세요." },
  { ageRangeKey: "5-6", domainKey: "feeding", title: "이유식 준비 신호를 보여요", description: "고개를 가누고, 받쳐 앉고, 음식에 관심을 보이는지 함께 봐요.", observeTip: "월령만 보지 말고 앉기와 입 움직임을 함께 확인해요.", supportTip: "시작 전에는 소아청소년과나 영유아검진 안내를 참고하세요." },
  { ageRangeKey: "5-6", domainKey: "feeding", title: "숟가락이 입에 닿는 느낌을 경험해요", description: "숟가락을 밀어내거나 받아들이는 반응을 봐요.", observeTip: "처음부터 많이 먹이려 하지 말고 반응 확인을 우선해요.", supportTip: "부드러운 숟가락으로 짧고 편안하게 시도해요." },
  { ageRangeKey: "5-6", domainKey: "feeding", title: "침 흘림과 입 움직임이 늘어요", description: "입술, 혀, 턱 움직임이 활발해지는지 봐요.", observeTip: "침 흘림만으로 이유식 시작을 판단하지는 않아요.", supportTip: "턱받이를 사용하고 입 주변 피부를 부드럽게 닦아주세요." },

  { ageRangeKey: "7-9", domainKey: "motor", title: "혼자 앉아서 손으로 놀아요", description: "앉은 자세에서 양손으로 장난감을 만지며 버티는지 봐요.", observeTip: "뒤로 넘어질 수 있어 주변에 쿠션을 두고 관찰해요.", supportTip: "앞에 장난감을 두고 손을 뻗어보게 해요." },
  { ageRangeKey: "7-9", domainKey: "motor", title: "배밀이나 기기 준비 움직임이 보여요", description: "몸을 앞으로 밀거나 팔과 다리를 사용하려는지 봐요.", observeTip: "기기 방식은 아이마다 다르니 한 가지 모습만 기대하지 않아요.", supportTip: "바닥에서 자유롭게 움직일 시간을 주세요." },
  { ageRangeKey: "7-9", domainKey: "motor", title: "작은 물건을 손가락으로 만지려 해요", description: "손 전체에서 손가락 사용으로 조금씩 세밀해지는지 봐요.", observeTip: "작은 물건은 삼킴 위험이 있어 실제로 주지 말고 안전한 장난감으로 봐요.", supportTip: "잡고 놓기 쉬운 블록이나 컵 장난감을 사용해요." },
  { ageRangeKey: "7-9", domainKey: "sensory", title: "낯선 사람이나 장소에 반응해요", description: "익숙한 사람과 낯선 사람을 다르게 대하는지 봐요.", observeTip: "낯가림은 자연스러운 발달 과정일 수 있어요.", supportTip: "억지로 안기기보다 보호자 품에서 천천히 적응하게 해요." },
  { ageRangeKey: "7-9", domainKey: "sensory", title: "물건을 두드리고 흔들어 소리를 탐색해요", description: "같은 물건을 여러 방식으로 다뤄보는지 봐요.", observeTip: "너무 큰 소리가 나는 장난감은 피하세요.", supportTip: "컵, 천, 안전한 딸랑이처럼 다른 반응을 주는 물건을 보여주세요." },
  { ageRangeKey: "7-9", domainKey: "sensory", title: "숨겨진 물건을 찾으려 해요", description: "천 아래 숨긴 장난감에 관심을 보이는지 봐요.", observeTip: "완전히 찾지 못해도 관심을 보이면 기록해요.", supportTip: "까꿍 놀이와 숨기기 놀이를 짧게 반복해요." },
  { ageRangeKey: "7-9", domainKey: "communication", title: "마마, 바바 같은 반복 옹알이를 해요", description: "의미가 분명하지 않아도 반복 소리가 늘어나는지 봐요.", observeTip: "소리 종류보다 보호자와 주고받는 흐름을 함께 봐요.", supportTip: "아이 소리에 대답하고 실제 말과 연결해 주세요." },
  { ageRangeKey: "7-9", domainKey: "communication", title: "안 돼, 이리 와 같은 익숙한 말에 반응해요", description: "말뜻을 완전히 몰라도 표정이나 목소리 변화에 반응하는지 봐요.", observeTip: "같은 말과 동작을 반복해서 보여줘요.", supportTip: "짧은 말과 손짓을 같이 사용하면 이해에 도움이 돼요." },
  { ageRangeKey: "7-9", domainKey: "communication", title: "관심 있는 물건을 보거나 손을 뻗어요", description: "원하는 것을 눈빛, 소리, 손뻗기로 표현하는지 봐요.", observeTip: "바로 주기 전에 잠깐 기다리며 표현을 관찰해요.", supportTip: "'공 줄까?'처럼 말로 이름을 붙여 주세요." },
  { ageRangeKey: "7-9", domainKey: "feeding", title: "부드러운 이유식을 삼키는 흐름이 좋아져요", description: "입 밖으로 많이 밀어내던 모습이 조금씩 줄어드는지 봐요.", observeTip: "양보다 삼키기, 표정, 변화를 함께 봐요.", supportTip: "새 재료는 천천히 시작하고 반응을 기록해요." },
  { ageRangeKey: "7-9", domainKey: "feeding", title: "컵이나 빨대컵에 관심을 보여요", description: "컵을 잡거나 입에 가져가려는지 봐요.", observeTip: "흘리는 것은 연습 과정일 수 있어요.", supportTip: "소량의 물로 짧게 연습해요." },
  { ageRangeKey: "7-9", domainKey: "feeding", title: "음식 질감 변화에 반응해요", description: "입자가 조금 있는 음식에 표정이나 입 움직임이 달라지는지 봐요.", observeTip: "질식 위험이 있는 크기와 질감은 피하세요.", supportTip: "너무 빠르게 단계를 올리지 말고 아이 반응에 맞춰요." },

  { ageRangeKey: "10-12", domainKey: "motor", title: "잡고 서거나 몸을 일으켜요", description: "가구나 보호자를 잡고 무릎을 펴려는지 봐요.", observeTip: "미끄러운 바닥과 모서리를 먼저 정리해요.", supportTip: "잡고 설 수 있는 안정적인 위치에서 짧게 연습해요." },
  { ageRangeKey: "10-12", domainKey: "motor", title: "손가락으로 작은 조각을 집으려 해요", description: "엄지와 검지를 사용하려는 움직임이 있는지 봐요.", observeTip: "작은 음식은 질식 위험을 고려해 안전한 크기로 준비해요.", supportTip: "큰 블록 넣기, 꺼내기처럼 손가락 놀이를 해요." },
  { ageRangeKey: "10-12", domainKey: "motor", title: "기거나 이동해서 원하는 곳으로 가요", description: "배밀이, 네발기기, 엉덩이 이동 등 방식은 달라도 이동 의지가 있는지 봐요.", observeTip: "기기 방식이 달라도 양쪽 몸 사용을 함께 봐요.", supportTip: "멀리 있는 장난감을 향해 움직일 수 있게 공간을 주세요." },
  { ageRangeKey: "10-12", domainKey: "sensory", title: "상자에 넣고 빼는 놀이를 좋아해요", description: "물건의 위치와 소리를 반복해서 탐색하는지 봐요.", observeTip: "반복 행동은 학습 과정일 수 있어요.", supportTip: "컵, 상자, 큰 블록처럼 안전한 물건으로 놀아 주세요." },
  { ageRangeKey: "10-12", domainKey: "sensory", title: "음악이나 리듬에 몸을 움직여요", description: "노래, 박수, 리듬에 흔들거나 웃는지 봐요.", observeTip: "반응이 약한 날도 있으니 여러 날 흐름으로 봐요.", supportTip: "짧은 노래와 박수 놀이를 반복해요." },
  { ageRangeKey: "10-12", domainKey: "sensory", title: "새로운 공간을 탐색하려 해요", description: "문, 서랍, 방 구석처럼 주변에 관심을 보이는지 봐요.", observeTip: "안전장치를 먼저 확인한 뒤 관찰해요.", supportTip: "위험한 물건은 치우고 안전한 탐색 공간을 만들어 주세요." },
  { ageRangeKey: "10-12", domainKey: "communication", title: "이름을 부르면 자주 돌아봐요", description: "익숙한 환경에서 이름에 반응하는지 봐요.", observeTip: "놀이에 몰입한 순간보다 조용한 상황에서 확인해요.", supportTip: "이름을 부른 뒤 눈맞춤이 되면 밝게 반응해 주세요." },
  { ageRangeKey: "10-12", domainKey: "communication", title: "손짓이나 표정으로 원하는 것을 알려요", description: "달라고 손을 뻗거나 빠이빠이처럼 따라 하는지 봐요.", observeTip: "말보다 먼저 손짓이 나올 수 있어요.", supportTip: "'주세요', '안녕' 같은 짧은 말과 손짓을 같이 보여주세요." },
  { ageRangeKey: "10-12", domainKey: "communication", title: "간단한 말을 알아듣는 듯한 반응이 있어요", description: "'공 어디 있어?', '엄마에게 줘' 같은 말에 반응하는지 봐요.", observeTip: "한 번에 긴 문장보다 짧고 반복적인 말을 사용해요.", supportTip: "물건 이름을 말하며 함께 가리켜 주세요." },
  { ageRangeKey: "10-12", domainKey: "feeding", title: "손으로 집어 먹으려 해요", description: "부드럽고 안전한 음식을 손으로 집어 입에 가져가는지 봐요.", observeTip: "질식 위험이 없는 크기와 질감인지 확인해요.", supportTip: "흘려도 괜찮은 환경에서 스스로 먹는 경험을 주세요." },
  { ageRangeKey: "10-12", domainKey: "feeding", title: "컵 마시기나 숟가락에 익숙해져요", description: "컵, 빨대컵, 숟가락을 반복해서 시도하는지 봐요.", observeTip: "완벽하게 먹는 것보다 참여하려는 모습을 봐요.", supportTip: "소량으로 짧게, 칭찬하며 연습해요." },
  { ageRangeKey: "10-12", domainKey: "feeding", title: "가족 식사에 관심을 보여요", description: "식탁, 음식, 숟가락 움직임을 보며 따라 하려는지 봐요.", observeTip: "간과 양념은 아이 기준으로 조절해야 해요.", supportTip: "안전한 메뉴를 따로 준비하고 같은 시간에 앉아 보게 해요." },

  { ageRangeKey: "13-18", domainKey: "motor", title: "혼자 걷거나 걷기 연습을 해요", description: "혼자 몇 걸음 걷거나 가구를 잡고 이동하는지 봐요.", observeTip: "넘어지는 횟수보다 균형을 잡아가려는 흐름을 봐요.", supportTip: "실내에서 맨발로 안전하게 걸어볼 시간을 주세요." },
  { ageRangeKey: "13-18", domainKey: "motor", title: "쪼그려 앉거나 장난감을 집어요", description: "앉았다 일어나며 장난감을 줍는지 봐요.", observeTip: "계속 한쪽으로만 기울거나 자주 넘어지는지 함께 봐요.", supportTip: "낮은 위치에 장난감을 두고 스스로 집어보게 해요." },
  { ageRangeKey: "13-18", domainKey: "motor", title: "블록을 쌓거나 큰 낙서를 시도해요", description: "손으로 물건을 조절하려는 놀이가 늘어나는지 봐요.", observeTip: "결과물보다 잡고 놓는 조절을 봐요.", supportTip: "큰 크레용, 큰 블록처럼 잡기 쉬운 도구를 주세요." },
  { ageRangeKey: "13-18", domainKey: "sensory", title: "모래, 물, 반죽 같은 촉감 놀이에 반응해요", description: "좋아하거나 싫어하는 촉감이 분명해지는지 봐요.", observeTip: "강하게 거부하면 억지로 계속하지 않아요.", supportTip: "짧게 만져보고 손을 닦을 수 있게 준비해 주세요." },
  { ageRangeKey: "13-18", domainKey: "sensory", title: "흉내 놀이를 시작해요", description: "빗질, 전화, 청소처럼 어른 행동을 따라 하는지 봐요.", observeTip: "반복해서 보는 행동을 따라 하는지 살펴요.", supportTip: "안전한 생활 도구 장난감으로 짧은 역할놀이를 해요." },
  { ageRangeKey: "13-18", domainKey: "sensory", title: "좋아하는 놀이를 기억하고 반복해요", description: "자주 하던 노래나 놀이를 기대하는지 봐요.", observeTip: "표정, 몸짓, 소리로 기대감을 표현할 수 있어요.", supportTip: "매일 짧은 놀이 루틴을 만들어 주세요." },
  { ageRangeKey: "13-18", domainKey: "communication", title: "뜻이 있는 단어가 조금씩 늘어요", description: "엄마, 아빠, 맘마처럼 상황에 맞는 말을 쓰는지 봐요.", observeTip: "발음이 정확하지 않아도 의미가 이어지는지 봐요.", supportTip: "아이 말에 맞장구치고 짧은 문장으로 다시 말해 주세요." },
  { ageRangeKey: "13-18", domainKey: "communication", title: "간단한 지시를 이해해요", description: "'공 줘', '앉아' 같은 익숙한 말을 따라 하는지 봐요.", observeTip: "손짓 없이도 되는지, 손짓이 있어야 되는지 함께 봐요.", supportTip: "한 번에 한 가지 말만 하고 성공하면 바로 칭찬해요." },
  { ageRangeKey: "13-18", domainKey: "communication", title: "원하는 것을 가리키거나 가져와요", description: "손가락, 소리, 몸짓으로 원하는 것을 표현하는지 봐요.", observeTip: "울기 전에 표현 신호가 있는지 살펴요.", supportTip: "'물 줄까?'처럼 선택지를 말로 붙여 주세요." },
  { ageRangeKey: "13-18", domainKey: "feeding", title: "숟가락을 잡고 먹으려 해요", description: "흘리더라도 스스로 숟가락을 입으로 가져가는지 봐요.", observeTip: "완벽함보다 참여하려는 마음을 봐요.", supportTip: "떠먹여 주는 숟가락과 아이 숟가락을 따로 준비해요." },
  { ageRangeKey: "13-18", domainKey: "feeding", title: "씹는 음식 종류가 늘어요", description: "부드러운 고형식을 씹고 삼키는 흐름이 좋아지는지 봐요.", observeTip: "갑자기 큰 덩어리로 바꾸지 말고 질감을 단계적으로 올려요.", supportTip: "아이 속도에 맞춰 한입 크기를 조절해요." },
  { ageRangeKey: "13-18", domainKey: "feeding", title: "컵으로 마시려는 시도가 늘어요", description: "도움을 받아 컵을 들거나 빨대로 마시는지 봐요.", observeTip: "흘림은 자연스러운 연습 과정일 수 있어요.", supportTip: "물이 적은 컵으로 짧게 연습해요." },

  { ageRangeKey: "19-24", domainKey: "motor", title: "뛰거나 빠르게 걷기를 시도해요", description: "걷기에서 뛰기처럼 움직임이 커지는지 봐요.", observeTip: "자주 넘어져도 속도 조절을 배우는 과정일 수 있어요.", supportTip: "미끄럽지 않은 공간에서 충분히 움직이게 해요." },
  { ageRangeKey: "19-24", domainKey: "motor", title: "공을 차거나 던져요", description: "큰 공을 발로 차거나 손으로 던지는지 봐요.", observeTip: "방향이 정확하지 않아도 시도 자체를 봐요.", supportTip: "부드럽고 큰 공으로 마주 보고 놀아 주세요." },
  { ageRangeKey: "19-24", domainKey: "motor", title: "페이지를 넘기거나 블록을 더 높이 쌓아요", description: "손 조절이 더 세밀해지는지 봐요.", observeTip: "책을 찢지 않게 두꺼운 보드북부터 시작해요.", supportTip: "짧은 그림책 읽기와 블록 놀이를 반복해요." },
  { ageRangeKey: "19-24", domainKey: "sensory", title: "상상놀이가 늘어요", description: "인형 먹이기, 전화하기처럼 장면을 흉내 내는지 봐요.", observeTip: "혼자 놀이와 보호자와의 놀이가 모두 나타날 수 있어요.", supportTip: "아이 행동에 말로 상황을 붙여 주세요." },
  { ageRangeKey: "19-24", domainKey: "sensory", title: "소리와 촉감에 대한 선호가 뚜렷해져요", description: "특정 소리나 옷감, 음식 질감을 좋아하거나 싫어하는지 봐요.", observeTip: "일상생활을 방해할 정도인지 함께 기록해요.", supportTip: "싫어하는 감각은 천천히, 짧게, 예측 가능하게 경험하게 해요." },
  { ageRangeKey: "19-24", domainKey: "sensory", title: "퍼즐이나 맞추기 놀이에 관심을 보여요", description: "간단한 모양 맞추기나 넣기 놀이를 시도하는지 봐요.", observeTip: "정답보다 맞춰보려는 과정을 봐요.", supportTip: "2~3개짜리 쉬운 퍼즐부터 시작해요." },
  { ageRangeKey: "19-24", domainKey: "communication", title: "두 단어를 이어 말하려 해요", description: "'엄마 물', '더 줘'처럼 짧은 조합이 나오는지 봐요.", observeTip: "정확한 문법보다 의미 전달을 봐요.", supportTip: "아이 말에 한 단어를 더 붙여 자연스럽게 확장해 주세요." },
  { ageRangeKey: "19-24", domainKey: "communication", title: "몸 이름이나 익숙한 물건을 알아요", description: "코, 눈, 신발, 공처럼 자주 듣는 말을 이해하는지 봐요.", observeTip: "가리키기, 가져오기, 바라보기 모두 반응으로 볼 수 있어요.", supportTip: "목욕, 옷 입기, 정리 시간에 이름을 자주 말해 주세요." },
  { ageRangeKey: "19-24", domainKey: "communication", title: "싫어, 더, 주세요 같은 의사를 표현해요", description: "말, 손짓, 표정으로 의사를 분명히 표현하는지 봐요.", observeTip: "짜증으로만 표현하는지, 다른 표현도 있는지 봐요.", supportTip: "표현을 알아차리고 짧은 말로 대신 말해 주세요." },
  { ageRangeKey: "19-24", domainKey: "feeding", title: "스스로 먹는 시간이 늘어요", description: "숟가락, 포크, 손을 사용해 식사에 참여하는지 봐요.", observeTip: "흘림이 많아도 식사 참여와 씹기 흐름을 봐요.", supportTip: "시간 여유가 있는 식사에 스스로 먹는 기회를 주세요." },
  { ageRangeKey: "19-24", domainKey: "feeding", title: "다양한 음식 냄새와 질감을 경험해요", description: "새 음식에 대한 반응을 보며 폭을 넓혀가는지 봐요.", observeTip: "거부한 음식도 며칠 뒤 다시 시도할 수 있어요.", supportTip: "억지로 먹이기보다 작은 양을 자주 보여주세요." },
  { ageRangeKey: "19-24", domainKey: "feeding", title: "컵 사용이 더 안정돼요", description: "도움이 있거나 없이 컵을 들고 마시는지 봐요.", observeTip: "흘림보다 손 조절과 삼키기 흐름을 봐요.", supportTip: "가벼운 컵에 소량을 담아 연습해요." },

  { ageRangeKey: "25-36", domainKey: "motor", title: "계단을 오르내리려 해요", description: "난간이나 손을 잡고 계단을 오르내리는지 봐요.", observeTip: "혼자 하게 두지 말고 반드시 가까이에서 지켜봐요.", supportTip: "낮은 계단에서 손을 잡고 천천히 연습해요." },
  { ageRangeKey: "25-36", domainKey: "motor", title: "두 발로 점프를 시도해요", description: "제자리에서 두 발이 바닥에서 떨어지는지 봐요.", observeTip: "점프가 늦어도 균형, 걷기, 뛰기 흐름을 함께 봐요.", supportTip: "노래에 맞춰 깡충 놀이를 해요." },
  { ageRangeKey: "25-36", domainKey: "motor", title: "간단한 선이나 동그라미를 그려요", description: "크레용으로 선을 긋고 낙서하며 손을 조절하는지 봐요.", observeTip: "정확한 모양보다 손목과 손가락 사용을 봐요.", supportTip: "굵은 크레용과 큰 종이를 준비해 자유롭게 그리게 해요." },
  { ageRangeKey: "25-36", domainKey: "sensory", title: "또래 놀이에 관심을 보여요", description: "같이 놀거나 옆에서 비슷한 놀이를 하는지 봐요.", observeTip: "나눠 쓰기가 아직 어려울 수 있어요.", supportTip: "짧은 놀이 약속과 차례 기다리기를 부드럽게 알려주세요." },
  { ageRangeKey: "25-36", domainKey: "sensory", title: "상상놀이가 더 길어져요", description: "인형, 자동차, 주방놀이처럼 이야기를 붙여 노는지 봐요.", observeTip: "같은 놀이를 반복해도 내용을 조금씩 바꾸는지 봐요.", supportTip: "아이 놀이에 보호자가 짧게 역할을 맡아 참여해요." },
  { ageRangeKey: "25-36", domainKey: "sensory", title: "감정 표현이 커지고 조절을 배우기 시작해요", description: "화, 기쁨, 무서움 같은 감정을 강하게 표현하는지 봐요.", observeTip: "떼쓰기 자체보다 진정되는 방법을 함께 봐요.", supportTip: "감정 이름을 말해주고 짧은 진정 루틴을 만들어 주세요." },
  { ageRangeKey: "25-36", domainKey: "communication", title: "짧은 문장으로 말해요", description: "'엄마 이거 해줘'처럼 2~3단어 이상을 연결하는지 봐요.", observeTip: "발음이 또렷하지 않아도 말하려는 의도와 이해를 봐요.", supportTip: "아이 말을 고쳐 말하기보다 자연스럽게 다시 들려주세요." },
  { ageRangeKey: "25-36", domainKey: "communication", title: "간단한 질문에 대답해요", description: "뭐야, 어디 있어, 누구야 같은 질문에 말이나 가리키기로 답하는지 봐요.", observeTip: "대답이 늦어도 기다리는 시간을 주세요.", supportTip: "그림책을 보며 짧은 질문과 대답을 주고받아요." },
  { ageRangeKey: "25-36", domainKey: "communication", title: "일상 규칙을 조금씩 이해해요", description: "정리하자, 손 씻자, 신발 신자 같은 말을 이해하는지 봐요.", observeTip: "기분에 따라 거부할 수 있으니 반복 흐름을 봐요.", supportTip: "말과 함께 같은 순서를 반복해 예측 가능하게 해요." },
  { ageRangeKey: "25-36", domainKey: "feeding", title: "식사 도구 사용이 더 안정돼요", description: "숟가락이나 포크로 스스로 먹는 양이 늘어나는지 봐요.", observeTip: "식사 시간이 너무 길어지면 양과 피로를 함께 봐요.", supportTip: "먹기 쉬운 크기와 아이용 도구를 준비해요." },
  { ageRangeKey: "25-36", domainKey: "feeding", title: "식사 자리 규칙을 조금씩 배워요", description: "앉아서 먹기, 기다리기, 물 마시기 같은 흐름을 익혀가는지 봐요.", observeTip: "한 번에 모든 규칙을 기대하지 말고 하나씩 봐요.", supportTip: "짧고 일정한 식사 루틴을 반복해요." },
  { ageRangeKey: "25-36", domainKey: "feeding", title: "배변 준비 신호가 보일 수 있어요", description: "젖은 기저귀를 불편해하거나 쉬·응가를 말로 알려주는지 봐요.", observeTip: "월령보다 아이 신호와 준비도를 먼저 봐요.", supportTip: "부담을 주기보다 화장실과 변기를 편하게 경험하게 해요." },
];

export const developmentMilestones: DevelopmentMilestone[] = milestoneRows.map((item) => ({
  ...item,
  key: `${item.ageRangeKey}-${item.domainKey}-${item.title}`
    .replace(/[^0-9a-zA-Z가-힣]+/g, "-")
    .replace(/^-|-$/g, ""),
}));

export function getDevelopmentAgeRangeKey(months: number): DevelopmentAgeRangeKey {
  const range = developmentAgeRanges.find((item) => months >= item.minMonth && months <= item.maxMonth);
  if (range) return range.key;
  return months < 0 ? "0-2" : "25-36";
}

export function getDevelopmentAgeRange(key: DevelopmentAgeRangeKey) {
  return developmentAgeRanges.find((item) => item.key === key) ?? developmentAgeRanges[0];
}

export function getDevelopmentMilestone(itemKey: string) {
  return developmentMilestones.find((item) => item.key === itemKey) ?? null;
}

export function getMilestonesByAgeAndDomain(ageRangeKey: DevelopmentAgeRangeKey, domainKey: DevelopmentDomainKey) {
  return developmentMilestones.filter((item) => item.ageRangeKey === ageRangeKey && item.domainKey === domainKey);
}

export const developmentStatusLabels: Record<DevelopmentStatus, string> = {
  not_started: "아직 어려워요",
  practicing: "연습 중",
  achieved: "잘 해요",
  concern: "걱정돼요",
};

export const developmentStatusDescriptions: Record<DevelopmentStatus, string> = {
  not_started: "아직 보이지 않거나 기회가 적었어요.",
  practicing: "가끔 보이지만 꾸준하지는 않아요.",
  achieved: "생활 속에서 자주 보여요.",
  concern: "반복해서 걱정되어 상담 때 물어보고 싶어요.",
};
