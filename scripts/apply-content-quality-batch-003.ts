import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });

type SectionUpdate = {
  sectionType: string;
  title?: string;
  body?: string;
  items?: string[];
};

type ContentUpdate = {
  batchItemId: string;
  contentId: string;
  path: string;
  title: string;
  question: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  reviewStatus: string;
  editorMemo: string;
  duplicateMemo: string;
  keywords: string[];
  sections: SectionUpdate[];
};

const updates: ContentUpdate[] = [
  {
    "batchItemId": "cmqs71zr3000nr8t6yjagyb8b",
    "contentId": "cmqnsjeb803kajot6d6wbwxqx",
    "path": "/qna/health/baby-burn-finger",
    "title": "아이가 손가락을 데였을 때 집에서 먼저 해야 할 일은?",
    "question": "아이가 손가락을 데였을 때 집에서 먼저 해야 할 일은?",
    "summary": "뜨거운 물이나 조리도구에 손가락을 데이면 부모는 얼음을 대야 할지, 연고를 발라야 할지 급하게 고민하게 됩니다. 먼저 열감을 식히고, 물집·피부 벗겨짐·통증 범위를 확인한 뒤 진료가 필요한 화상인지 나눠보세요.",
    "metaTitle": "아이 손가락 화상, 집에서 먼저 할 일과 진료 신호 | MomTools",
    "metaDescription": "아이가 손가락을 데였을 때 흐르는 물로 식히는 방법, 물집·피부 벗겨짐 확인, 병원 상담이 필요한 화상 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-burn-finger",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 손가락 화상 주제로 전면 재작성. 기존 일반 건강 반복 문장을 제거하고 화상 응급 대처·물집·관절 부위 상담 신호로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 손가락 화상",
      "아기 손 데임",
      "아이 화상 응급처치",
      "손가락 물집 화상",
      "소아 화상 병원",
      "아기 데였을 때"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "화상은 먼저 열감을 식히는 것이 우선이에요",
        "items": [
          "아이 손가락이 뜨거운 물이나 냄비, 다리미에 닿았다면 가장 먼저 해야 할 일은 피부에 남은 열을 식히는 것입니다. 얼음이나 치약을 바르기보다 시원한 흐르는 물로 충분히 식혀 주세요.",
          "반지, 장갑, 조이는 소매처럼 부어오를 때 압박이 될 수 있는 것은 가능하면 빨리 느슨하게 해주세요. 피부에 붙은 천이나 이물질은 억지로 떼지 않는 편이 안전합니다.",
          "화상이 손가락 끝에만 살짝 붉은 정도인지, 물집이 생겼는지, 피부가 하얗거나 벗겨졌는지를 봐야 합니다. 손가락은 움직임이 많은 부위라 작은 물집도 아이가 계속 건드리면 악화될 수 있어요.",
          "통증이 심하거나 손가락을 움직이기 힘들어하면 단순한 빨개짐으로 넘기기 어렵습니다. 특히 손 전체, 관절 부위, 깊어 보이는 화상은 진료 상담을 우선하세요.",
          "민간요법을 여러 번 바르면 상처 상태를 보기 어려워질 수 있어요. 깨끗하게 보호하고, 어떤 상황에서 데였는지와 식힌 시간을 기억해두면 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "손가락 화상에서 확인할 것",
        "items": [
          "물집이 생겼는지, 피부가 벗겨졌는지",
          "손가락 관절을 움직일 때 심하게 아파하는지",
          "화상 범위가 손가락 끝인지 손바닥이나 손등까지 이어지는지",
          "피부색이 하얗거나 검게 변한 부분이 있는지",
          "통증이 줄지 않고 계속 심해지는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "바로 해볼 수 있는 대처",
        "items": [
          "뜨거운 물질에서 아이를 떨어뜨리고 시원한 흐르는 물로 화상 부위를 식혀주세요.",
          "물집을 터뜨리거나 얼음을 직접 대지 말고, 깨끗한 거즈나 천으로 느슨하게 보호하세요.",
          "화상 범위와 물집 여부를 사진으로 남기고, 아이가 손가락을 잘 움직이는지 확인해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 서두를 신호",
        "body": "물집이 크거나 여러 개 생긴 경우, 피부가 벗겨지거나 하얗게 변한 경우, 손가락 관절 부위 화상, 통증이 심해 손을 쓰지 못하는 경우에는 집에서만 관리하기보다 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever",
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "화상 뒤 아이가 열이 나거나 처져 보이면 상처만 보지 말고 전체 컨디션도 함께 확인해야 해요. 아기 열 대처 가이드와 아이 건강 Q&A를 같이 보면 상담 기준을 정리하기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000or8t66ybik1mv",
    "contentId": "cmqnsjglc043tjot6khr5zcg5",
    "path": "/qna/health/baby-checkup-before-travel",
    "title": "아이와 여행 전 건강 상태는 무엇을 확인해야 하나요?",
    "question": "아이와 여행 전 건강 상태는 무엇을 확인해야 하나요?",
    "summary": "아이와 여행을 앞두고 콧물, 미열, 설사 같은 증상이 있으면 예정대로 가도 될지 고민될 수 있어요. 여행지는 병원 접근성, 이동 시간, 아이의 수분 섭취와 수면 상태까지 함께 봐야 안전하게 판단할 수 있습니다.",
    "metaTitle": "아이와 여행 전 건강 체크리스트, 미리 볼 신호 | MomTools",
    "metaDescription": "아이와 여행 전 열, 기침, 설사, 복용 중인 약, 예방접종, 여행지 병원 접근성까지 보호자가 확인할 점을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-checkup-before-travel",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 여행 전 건강 체크 주제로 재작성. 기존 일반 증상 문장을 제거하고 이동 환경·복용약·병원 접근성 중심으로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 여행 전 건강",
      "아기 여행 준비",
      "아이 여행 전 열",
      "아기 여행 건강 체크",
      "아이 여행 전 병원",
      "아이와 여행 주의사항"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "여행 전에는 증상보다 “버틸 수 있는 환경인지”를 보세요",
        "items": [
          "아이와 여행을 계획해두면 가벼운 콧물이나 미열도 쉽게 넘기기 어렵습니다. 핵심은 증상이 있는지 없는지만이 아니라, 이동 중 악화됐을 때 바로 쉬거나 진료를 받을 수 있는지예요.",
          "출발 전날부터 체온, 수유나 식사량, 소변 횟수, 잠을 잘 잤는지를 확인해보세요. 평소보다 먹지 못하고 처져 있다면 일정 조정보다 건강 확인이 먼저입니다.",
          "기침이 심해 밤잠을 방해하거나, 설사·구토로 수분 섭취가 줄었다면 장거리 이동은 아이에게 더 힘들 수 있어요. 특히 차 안이나 비행기에서는 중간에 돌보기 어려운 상황이 생깁니다.",
          "복용 중인 약이 있다면 이름, 복용 시간, 처방받은 이유를 적어두세요. 여행지에서 새 약을 임의로 추가하기보다 기존 약과 겹치는 성분이 없는지 확인하는 것이 중요합니다.",
          "여행지가 낯선 지역이라면 근처 소아 진료 가능 병원, 야간 진료처, 응급실 위치를 미리 저장해두면 갑작스러운 상황에서 덜 당황합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "출발 전날 확인할 것",
        "items": [
          "열, 기침, 콧물, 설사, 구토가 새로 생겼는지",
          "평소처럼 먹고 자며 소변을 보는지",
          "복용 중인 약과 알레르기, 최근 예방접종 여부",
          "여행지 병원 접근성과 야간 진료 가능 여부",
          "이동 시간이 길어 아이가 쉴 수 있는 계획이 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "여행 전 준비해두면 좋은 것",
        "items": [
          "아이 체온계, 처방약, 건강보험 관련 정보, 여벌 옷과 수분 보충할 것을 따로 챙기세요.",
          "최근 증상이 있었다면 시작 시간과 좋아지는 흐름을 짧게 메모해두세요.",
          "열이나 호흡 증상이 진행 중이면 출발 전 소아청소년과에 여행 가능 여부를 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "여행을 미루거나 상담할 신호",
        "body": "고열이 계속되거나 숨쉬기 힘들어 보이는 경우, 반복 구토·설사로 소변이 줄어든 경우, 아이가 축 처지고 깨워도 반응이 약한 경우에는 여행 일정보다 진료 확인을 먼저 하는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 개월수 계산기",
          "/tools/baby-age",
          "예방접종 일정 계산기",
          "/tools/vaccine-schedule"
        ],
        "body": "여행 전 아이 나이별로 챙길 것이 달라질 수 있어요. 아기 개월수 계산기와 예방접종 일정 계산기를 함께 보면 준비물을 더 현실적으로 정리할 수 있습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000pr8t6z4rvtpd7",
    "contentId": "cmqnsj5d601eljot6txyoag4a",
    "path": "/qna/health/baby-chest-retractions",
    "title": "아기 가슴이 쑥 들어가며 숨 쉬면 얼마나 급한가요?",
    "question": "아기 가슴이 쑥 들어가며 숨 쉬면 얼마나 급한가요?",
    "summary": "숨을 쉴 때 갈비뼈 사이나 가슴 아래가 쑥 들어가 보이면 단순 기침보다 호흡이 힘든 신호일 수 있어요. 숨소리, 입술색, 수유량, 아이의 반응을 함께 보면서 지체하지 말아야 할 상황을 구분해야 합니다.",
    "metaTitle": "아기 가슴이 쑥 들어가는 호흡, 바로 확인할 신호 | MomTools",
    "metaDescription": "아기가 숨쉴 때 가슴이나 갈비뼈 사이가 들어가 보일 때 호흡곤란 신호, 입술색 변화, 수유량 감소와 진료 필요 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-chest-retractions",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 흉부 함몰 호흡 주제로 전면 재작성. 기존 기침 반복 문장을 줄이고 호흡곤란 신호 중심으로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아기 가슴 들어감",
      "아기 흉부 함몰",
      "갈비뼈 들어가는 호흡",
      "아기 호흡곤란",
      "아기 숨쉬기 힘듦",
      "아기 쌕쌕거림"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "가슴이 들어가는 호흡은 빨리 확인해야 해요",
        "items": [
          "기침 소리가 크다고 모두 위험한 것은 아니지만, 숨을 들이쉴 때 갈비뼈 사이·목 아래·가슴 아래가 쑥 들어가면 아이가 숨을 쉬기 위해 힘을 많이 쓰고 있다는 신호일 수 있습니다.",
          "먼저 아이가 숨을 쉴 때 배만 부드럽게 움직이는지, 가슴과 목 주변이 함께 끌려 들어가는지 보세요. 숨이 빠르거나 콧구멍을 벌렁거리며 쉬는지도 중요합니다.",
          "입술이나 혀가 푸르스름해 보이거나, 수유를 하다 자꾸 멈추고 숨을 고른다면 단순 감기로만 보기 어렵습니다. 먹는 양이 급격히 줄어도 호흡 부담을 의심해야 합니다.",
          "쌕쌕거림, 컹컹거리는 기침, 열이 함께 있으면 원인이 다양할 수 있어요. 집에서 병명을 판단하기보다 호흡이 편한지와 악화 신호를 우선 확인하세요.",
          "아이가 축 처지거나 깨워도 반응이 약하면 사진을 찍느라 시간을 쓰기보다 바로 도움을 요청하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "호흡을 볼 때 체크할 것",
        "items": [
          "갈비뼈 사이, 목 아래, 가슴 아래가 들어가는지",
          "숨이 평소보다 빠르거나 힘겨워 보이는지",
          "입술, 혀, 얼굴색이 창백하거나 푸르스름한지",
          "수유나 식사를 하다 숨차서 멈추는지",
          "축 처짐, 심한 보챔, 반응 저하가 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "지금 할 일",
        "items": [
          "아이를 편한 자세로 세우거나 안아 호흡이 조금이라도 편한지 확인하세요.",
          "숨소리와 가슴 움직임을 짧게 기록하되, 힘들어 보이면 촬영보다 진료 상담을 먼저 하세요.",
          "코막힘이 있으면 코를 편하게 해주고, 먹는 양과 소변 횟수를 함께 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담해야 하는 신호",
        "body": "가슴이나 갈비뼈 사이가 뚜렷하게 들어가고, 입술이나 혀 색이 파래 보이거나, 수유량이 급감하고 축 처지는 경우에는 지체하지 말고 응급 상담이나 진료를 받는 것이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "호흡이 힘들어 보이는 상황은 기침 소리만으로 판단하기 어렵습니다. 아기 기침·호흡 확인 가이드와 열 대처 가이드를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000qr8t6go3qh2b1",
    "contentId": "cmqnsj63n01l2jot6wfy99qd4",
    "path": "/qna/health/baby-cold-hands-and-feet",
    "title": "아기 손발이 늘 차가우면 어디까지 지켜봐도 될까요?",
    "question": "아기 손발이 늘 차가우면 어디까지 지켜봐도 될까요?",
    "summary": "아기 손발이 자주 차가우면 몸이 약한 건 아닌지 걱정될 수 있어요. 손발 온도만 보지 말고 가슴과 배가 따뜻한지, 피부색과 반응이 평소 같은지, 수유와 소변이 유지되는지를 함께 확인하는 것이 좋습니다.",
    "metaTitle": "아기 손발이 차가울 때 확인할 점과 진료 신호 | MomTools",
    "metaDescription": "아기 손발이 늘 차가울 때 실내 온도, 몸통 온기, 피부색, 수유량, 소변 횟수와 병원 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cold-hands-and-feet",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 손발 차가움 주제로 재작성. 기존 일반 증상 문장을 제거하고 몸통 온기·피부색·반응 기준으로 정리함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아기 손발 차가움",
      "아기 손발 차가운 이유",
      "아기 손 차가움",
      "아기 발 차가움",
      "아기 체온 확인",
      "아기 손발 파래짐"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "손발보다 몸통과 반응을 먼저 보세요",
        "items": [
          "아기는 손끝과 발끝이 몸통보다 차갑게 느껴질 때가 있습니다. 특히 잠에서 깬 직후나 방이 서늘할 때는 손발만 차가워 보일 수 있어요.",
          "먼저 가슴과 배를 만져보세요. 몸통은 따뜻하고 아이가 잘 먹고 잘 반응한다면 손발이 조금 찬 것만으로 바로 병이라고 단정하기는 어렵습니다.",
          "반대로 손발뿐 아니라 얼굴이 창백하거나 입술이 푸르스름하고, 몸이 축 처지거나 깨워도 반응이 약하면 단순한 체온 조절 문제로 보기 어렵습니다.",
          "옷을 너무 두껍게 입히면 땀이 난 뒤 오히려 손발이 차갑게 느껴질 수 있어요. 실내 온도와 옷차림, 이불이 과하지 않은지도 함께 보세요.",
          "손발 차가움이 계속 반복된다면 언제 심한지, 체온은 어떤지, 먹는 양과 소변이 줄었는지를 기록해두면 상담할 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "손발이 찰 때 같이 볼 기준",
        "items": [
          "가슴과 배는 따뜻한지",
          "입술, 손톱, 얼굴색이 평소와 같은지",
          "잘 먹고 소변을 평소처럼 보는지",
          "열이 있거나 반대로 몸이 너무 차갑게 느껴지는지",
          "축 처짐, 호흡 변화, 보챔이 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 조절해볼 것",
        "items": [
          "실내 온도와 옷차림을 확인하고, 땀이 나지 않을 정도로만 보온해 주세요.",
          "체온을 같은 방식으로 재고 손발이 찬 시간대를 메모해두세요.",
          "손발을 세게 주무르기보다 아이 전체 컨디션과 피부색 변화를 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 경우",
        "body": "손발 차가움과 함께 입술이나 얼굴색이 창백하거나 푸르스름해지고, 잘 먹지 못하거나 반응이 약하고, 호흡이 힘들어 보이면 바로 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ],
        "body": "체온과 컨디션을 같이 보는 것이 중요해요. 아기 열 대처 가이드와 아기 개월수 계산기를 함께 보면 나이에 맞는 확인 기준을 정리하기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000rr8t6w0ryopaj",
    "contentId": "cmqnsjfqp03wfjot6mi5w00m1",
    "path": "/qna/health/baby-cold-hands-no-fever",
    "title": "열은 없는데 아기 손발이 차가우면 괜찮은 걸까요?",
    "question": "열은 없는데 아기 손발이 차가우면 괜찮은 걸까요?",
    "summary": "체온은 정상인데 손발만 차가우면 부모는 방이 추운 건지, 몸 상태가 안 좋은 건지 헷갈릴 수 있어요. 몸통 온기와 피부색, 수유량, 소변 횟수, 아이의 반응을 함께 보면 단순한 손발 차가움인지 구분하는 데 도움이 됩니다.",
    "metaTitle": "열은 없는데 아기 손발이 차가울 때 확인할 기준 | MomTools",
    "metaDescription": "아기에게 열은 없지만 손발이 차가울 때 몸통 온기, 피부색, 수유량, 소변 횟수와 병원 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cold-hands-no-fever",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 열 없는 손발 차가움 주제로 재작성. 기존 발열 문맥을 줄이고 정상 체온 상황의 관찰 기준으로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "열 없는데 손발 차가움",
      "아기 손발 차가움 열 없음",
      "아기 체온 정상 손 차가움",
      "아기 발 차가움",
      "아기 피부색 확인",
      "아기 저체온 의심"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "체온이 정상이라도 아이 전체 모습을 같이 보세요",
        "items": [
          "체온계로 잰 온도는 정상인데 손발만 차가우면 우선 몸통을 확인해보세요. 가슴과 배가 따뜻하고 아이가 잘 먹고 논다면 손발 온도만으로 급하게 판단할 필요는 적습니다.",
          "잠에서 막 깼거나 방바닥이 차가웠거나 손을 밖에 내놓고 잤다면 손발이 일시적으로 차가울 수 있어요. 이때는 옷차림과 실내 온도를 조절한 뒤 색과 반응이 돌아오는지 보면 됩니다.",
          "하지만 손발이 차가우면서 입술색이 파래 보이거나 얼굴이 창백하고, 아이가 축 처져 있으면 체온 숫자가 정상이어도 확인이 필요합니다.",
          "땀을 많이 흘린 뒤 옷이 젖어 있으면 몸이 식을 수 있어요. 젖은 옷은 갈아입히고 과하게 덥히기보다 아이가 편안해하는지 살펴보세요.",
          "손발 차가움이 반복된다면 체온, 실내 온도, 옷차림, 수유량, 소변 횟수를 같이 기록해두면 원인을 좁히는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "열이 없을 때도 확인할 것",
        "items": [
          "가슴과 배는 따뜻한지",
          "입술, 혀, 손톱 색이 평소와 같은지",
          "수유나 식사량, 소변 횟수가 줄지 않았는지",
          "땀을 흘린 뒤 옷이 젖어 있지는 않은지",
          "아이 반응이 평소보다 느리거나 힘이 없는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "먼저 해볼 수 있는 조절",
        "items": [
          "젖은 옷이나 양말은 갈아입히고, 손발보다 몸통이 편안한지 확인하세요.",
          "실내 온도를 조절한 뒤 20~30분 정도 지나 손발 색과 반응이 달라지는지 보세요.",
          "체온은 같은 부위와 같은 방식으로 다시 재고, 소변 횟수와 먹은 양을 같이 적어두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 미루지 말아야 할 때",
        "body": "열이 없더라도 입술이나 혀가 파래 보이거나, 호흡이 힘들어 보이고, 아이가 잘 먹지 못하거나 깨워도 반응이 약하면 바로 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 개월수 계산기",
          "/tools/baby-age",
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "열이 없을 때도 아이 나이와 컨디션을 함께 보는 것이 좋아요. 아기 개월수 계산기와 아이 건강 Q&A를 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000sr8t6xgxzl9xj",
    "contentId": "cmqnsjfeg03tijot6zvddg5fc",
    "path": "/qna/health/baby-cold-medicine-sleepy",
    "title": "감기약을 먹고 아이가 너무 졸려 보이면 괜찮은가요?",
    "question": "감기약을 먹고 아이가 너무 졸려 보이면 괜찮은가요?",
    "summary": "감기약을 먹은 뒤 아이가 평소보다 많이 졸려 보이면 약의 영향인지, 컨디션 악화인지 걱정될 수 있어요. 약 이름보다 성분과 복용 시간, 다른 약과의 중복 여부, 아이를 깨웠을 때 반응하는지를 먼저 확인해야 합니다.",
    "metaTitle": "감기약 먹고 아이가 너무 졸릴 때 확인할 점 | MomTools",
    "metaDescription": "아이 감기약 복용 후 졸림이 심할 때 성분 중복, 복용 시간, 깨웠을 때 반응, 호흡 변화와 의료진 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cold-medicine-sleepy",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 감기약 졸림 주제로 전면 재작성. 기존 기침 일반 문장을 제거하고 성분 중복·반응 저하·호흡 변화 기준으로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 감기약 졸림",
      "아기 감기약 부작용",
      "감기약 먹고 졸려함",
      "아이 약 먹고 처짐",
      "소아 감기약 주의",
      "감기약 성분 중복"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "졸림이 “잠”인지 “반응 저하”인지 나눠보세요",
        "items": [
          "감기약을 먹은 뒤 아이가 졸려 보이면 부모는 약 때문인지, 감기가 심해진 건지 바로 걱정하게 됩니다. 먼저 아이를 부드럽게 깨웠을 때 눈을 맞추고 평소처럼 반응하는지 확인해보세요.",
          "감기약에는 콧물, 기침, 알레르기 증상을 줄이는 성분이 함께 들어 있는 경우가 있고, 일부 성분은 졸림을 만들 수 있어요. 제품명보다 성분표와 복용 시간을 확인하는 것이 중요합니다.",
          "다른 해열제, 콧물약, 기침약을 같이 먹고 있다면 성분이 겹칠 수 있습니다. 특히 여러 증상용 약을 동시에 쓸 때는 같은 성분을 중복으로 먹는 일이 생기지 않도록 약사나 의료진에게 확인하세요.",
          "아이가 잠을 자도 깨우면 반응하고 숨쉬기가 편안하다면 우선 복용 시간과 증상 변화를 기록해두세요. 하지만 깨워도 멍하거나 호흡이 느려 보이면 단순 졸림으로 넘기면 안 됩니다.",
          "남은 약을 임의로 추가하거나 용량을 조절하지 말고, 처방받은 약이라면 처방한 병원이나 약국에 현재 모습을 설명하고 다음 복용 여부를 확인하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "약 복용 후 확인할 것",
        "items": [
          "약 이름, 성분, 복용 시간, 복용량을 확인했는지",
          "다른 감기약·해열제·알레르기약과 성분이 겹치지 않는지",
          "깨웠을 때 눈을 맞추고 평소처럼 반응하는지",
          "숨이 느려지거나 힘들어 보이지 않는지",
          "구토, 발진, 입술색 변화가 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "지금 할 일",
        "items": [
          "약 봉투나 제품 라벨을 보며 복용 시간을 적어두세요.",
          "다음 복용 전에 약국이나 처방 병원에 졸림 정도를 설명하고 확인하세요.",
          "졸린 아이를 억지로 먹이기보다 호흡과 반응을 먼저 살피고, 수분 섭취가 가능한지 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 확인이 필요한 신호",
        "body": "아이를 깨워도 반응이 약하거나 축 늘어지고, 숨이 느리거나 힘들어 보이거나, 입술색 변화·반복 구토·전신 발진이 함께 있으면 다음 복용을 기다리지 말고 의료진에게 바로 문의하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "감기약은 기침·콧물 증상과 함께 봐야 하는 경우가 많아요. 아기 기침·호흡 확인 가이드와 아이 건강 Q&A를 함께 보면 약을 추가하기 전 확인할 점을 정리하기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000tr8t6r7pp0blo",
    "contentId": "cmqnsjdof03esjot6ytez99fv",
    "path": "/qna/health/baby-cold-sweat",
    "title": "아이가 식은땀을 흘리면 어떤 상황을 먼저 봐야 하나요?",
    "question": "아이가 식은땀을 흘리면 어떤 상황을 먼저 봐야 하나요?",
    "summary": "아이가 갑자기 식은땀을 흘리면 더운 건지, 열이 오르내리는 건지, 통증이나 컨디션 저하가 있는지 헷갈릴 수 있어요. 땀만 보지 말고 얼굴색, 체온, 호흡, 복통·구토·처짐 같은 동반 신호를 같이 확인해야 합니다.",
    "metaTitle": "아이 식은땀, 집에서 먼저 확인할 신호 | MomTools",
    "metaDescription": "아이가 식은땀을 흘릴 때 실내 온도, 체온, 얼굴색, 호흡, 복통·구토·처짐 여부와 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cold-sweat",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 식은땀 주제로 전면 재작성. 기존 설사 문맥 오류를 제거하고 체온·얼굴색·호흡·복통 동반 신호 중심으로 정리함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 식은땀",
      "아기 식은땀",
      "아이 땀 많이 흘림",
      "아기 얼굴 창백 식은땀",
      "아이 컨디션 저하",
      "식은땀 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "식은땀은 땀보다 함께 보이는 신호가 중요해요",
        "items": [
          "아이가 이마나 등에서 차가운 땀을 흘리면 부모는 “더워서 그런가, 어디가 아픈가”를 먼저 떠올리게 됩니다. 식은땀 자체보다 아이가 창백한지, 아파 보이는지, 숨쉬기가 편한지를 같이 봐야 합니다.",
          "방이 덥거나 옷이 두껍고, 잠을 자다 땀을 흘린 뒤 식으면 땀이 차갑게 느껴질 수 있어요. 이 경우 옷을 갈아입히고 실내를 조절한 뒤 아이가 편안해지는지 확인해보세요.",
          "열이 오르내리는 과정에서도 땀이 날 수 있습니다. 체온을 재고, 해열제를 썼다면 사용 시간과 이후 반응을 같이 기록해두는 것이 좋습니다.",
          "복통, 구토, 설사, 심한 기침, 호흡곤란처럼 다른 증상이 함께 있으면 단순 땀으로만 보기 어렵습니다. 특히 얼굴이 창백하고 축 처진다면 더 빨리 확인해야 합니다.",
          "반복되는 식은땀은 발생 시간, 식사 여부, 활동량, 체온 변화를 함께 기록해두면 상담 때 원인을 설명하기 쉬워요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "식은땀과 함께 볼 것",
        "items": [
          "체온이 오르거나 내려가는 중인지",
          "얼굴색이 창백하거나 입술색이 달라졌는지",
          "숨이 차거나 가슴이 들어가는 호흡이 있는지",
          "복통, 구토, 설사, 기침, 통증이 함께 있는지",
          "땀 뒤에도 축 처지고 잘 먹지 못하는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "먼저 정리할 일",
        "items": [
          "젖은 옷은 갈아입히고 실내 온도와 이불 두께를 조절하세요.",
          "체온, 땀이 난 시간, 직전 활동이나 식사 상태를 기록해두세요.",
          "아이가 아파 보이면 땀을 멈추게 하려고 무리하게 덥히기보다 전체 컨디션을 먼저 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 신호",
        "body": "식은땀과 함께 창백함, 호흡곤란, 반복 구토, 심한 복통, 의식이 흐려 보임, 소변 감소, 축 처짐이 있으면 집에서 원인을 추측하기보다 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "식은땀이 열이나 호흡 증상과 함께 나타나는지 확인해보세요. 아기 열 대처 가이드와 기침·호흡 확인 가이드를 함께 보면 위험 신호를 나누기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000ur8t610gfay4j",
    "contentId": "cmqnsjgja043bjot64yonx7lw",
    "path": "/qna/health/baby-cold-symptoms-after-pool",
    "title": "물놀이 뒤 콧물과 기침이 생기면 감기일까요?",
    "question": "물놀이 뒤 콧물과 기침이 생기면 감기일까요?",
    "summary": "물놀이 뒤 아이가 콧물과 기침을 보이면 물에 젖어 감기에 걸린 건지, 물이나 염소 자극 때문인지 걱정될 수 있어요. 기침이 시작된 시점, 숨쉬기, 열, 물을 삼키거나 사레든 일이 있었는지를 함께 확인해보세요.",
    "metaTitle": "물놀이 뒤 콧물·기침, 감기인지 확인할 점 | MomTools",
    "metaDescription": "물놀이 후 아이에게 콧물과 기침이 생겼을 때 감기, 자극, 사레 후 기침을 나누고 호흡곤란·열 등 진료 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cold-symptoms-after-pool",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 물놀이 뒤 콧물·기침 주제로 재작성. 기존 호흡 반복 문장을 줄이고 물 자극·사레·감기 흐름 구분으로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "물놀이 후 기침",
      "물놀이 후 콧물",
      "수영장 다녀와서 기침",
      "아이 물놀이 감기",
      "아기 사레 기침",
      "아이 호흡 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "물놀이 뒤 기침은 시작 시점을 먼저 보세요",
        "items": [
          "물놀이를 한 뒤 콧물과 기침이 생기면 “물에 젖어서 감기 걸린 걸까” 하고 걱정될 수 있어요. 하지만 물놀이 직후 바로 난 기침인지, 하루 이틀 뒤 감기처럼 시작됐는지에 따라 볼 포인트가 달라집니다.",
          "수영장 물이나 염소 냄새, 차가운 공기, 코로 물이 들어간 자극 때문에 일시적으로 기침이 날 수 있습니다. 이때는 쉬면서 코와 목이 편해지는지 살펴보세요.",
          "물놀이 중 물을 많이 삼키거나 사레가 들린 뒤 계속 기침한다면 호흡 상태를 더 주의 깊게 봐야 합니다. 숨이 차거나 쌕쌕거림이 있으면 단순 감기처럼 기다리기 어렵습니다.",
          "열, 누런 콧물, 밤에 심해지는 기침, 먹는 양 감소가 함께 있으면 감기나 호흡기 감염 흐름일 수 있어요. 며칠간 좋아지는지 악화되는지 기록해두세요.",
          "물놀이 뒤 바로 외출이나 찬 바람을 오래 맞았다면 젖은 옷을 빨리 갈아입히고 충분히 쉬게 해주는 것도 중요합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "물놀이 뒤 확인할 것",
        "items": [
          "기침이 물놀이 직후 시작됐는지, 다음 날부터 시작됐는지",
          "물에 사레들거나 많이 삼킨 일이 있었는지",
          "쌕쌕거림, 숨가쁨, 가슴이 들어가는 호흡이 있는지",
          "열, 콧물 색 변화, 밤기침이 함께 있는지",
          "먹는 양과 소변 횟수가 줄지 않았는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 해볼 일",
        "items": [
          "젖은 옷을 갈아입히고 아이가 따뜻하고 편하게 쉴 수 있게 해주세요.",
          "코막힘이 있으면 코를 편하게 해주고, 물이나 수분을 조금씩 자주 권해보세요.",
          "기침이 심해지는 시간대와 숨소리를 짧게 기록해두면 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담이 필요한 경우",
        "body": "물놀이 중 사레가 든 뒤 기침이 계속되거나, 숨쉬기 힘들어 보임, 쌕쌕거림, 입술색 변화, 고열, 반복 구토, 먹는 양 급감이 있으면 단순 감기로만 보지 말고 진료 상담을 받는 것이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "물놀이 뒤 기침은 호흡 상태와 열을 같이 보는 것이 좋아요. 아기 기침·호흡 확인 가이드와 열 대처 가이드를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000vr8t6vi5doi5u",
    "contentId": "cmqnsjay002qsjot6l3avugid",
    "path": "/qna/health/baby-constipation-after-weaning",
    "title": "이유식 시작 후 변비가 생기면 어떻게 조절해야 하나요?",
    "question": "이유식 시작 후 변비가 생기면 어떻게 조절해야 하나요?",
    "summary": "이유식을 시작한 뒤 변이 딱딱해지거나 며칠씩 못 보면 재료가 안 맞는 건지, 물을 더 먹여야 하는지 고민될 수 있어요. 변 횟수만 보지 말고 변의 단단함, 힘주는 정도, 피 묻음, 식단 변화를 함께 확인해보세요.",
    "metaTitle": "이유식 시작 후 변비, 재료와 배변 확인 방법 | MomTools",
    "metaDescription": "이유식 시작 후 아기 변비가 생겼을 때 변 모양, 힘주는 정도, 수분·식단 변화, 피 묻음과 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-constipation-after-weaning",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 이유식 후 변비 주제로 전면 재작성. 기존 설사 문맥 오류를 제거하고 변 모양·재료·수분·상담 신호로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "이유식 변비",
      "이유식 시작 후 변비",
      "아기 딱딱한 변",
      "아기 변비 이유식",
      "이유식 물 섭취",
      "아기 변비 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "이유식 초기는 변 모양이 바뀔 수 있어요",
        "items": [
          "이유식을 시작하면 모유나 분유만 먹을 때와 달리 변 색, 냄새, 단단함이 달라질 수 있습니다. 하지만 변이 너무 딱딱해서 아이가 울거나 항문에 피가 묻는다면 단순 변화로만 넘기기 어렵습니다.",
          "먼저 며칠 동안 어떤 재료를 먹였는지, 쌀미음·고구마·바나나처럼 변을 단단하게 만들 수 있는 음식이 많았는지 확인해보세요. 새 재료를 시작한 날과 변 변화를 같이 적으면 원인을 찾기 쉽습니다.",
          "이유식 양이 늘면서 수분 섭취가 부족해지면 변이 딱딱해질 수 있어요. 월령에 맞는 수분 섭취 방식은 아이 상태에 따라 달라질 수 있으니 무리하게 많이 먹이기보다 식사 흐름을 조절해보세요.",
          "변을 보려고 힘을 주지만 실제로 부드럽게 나오면 꼭 변비는 아닐 수 있습니다. 반대로 며칠째 변을 못 보고 배가 빵빵하거나 먹는 양이 줄면 상담이 필요합니다.",
          "임의로 관장이나 변비약을 반복하기보다, 변 모양과 이유식 재료 기록을 가지고 소아청소년과에 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "이유식 변비에서 볼 것",
        "items": [
          "마지막 대변 날짜와 변의 단단함",
          "변을 볼 때 심하게 울거나 항문에 피가 묻는지",
          "최근 새로 시작한 이유식 재료",
          "이유식 양이 갑자기 늘었는지",
          "배가 빵빵하거나 구토, 먹는 양 감소가 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 조절해볼 일",
        "items": [
          "최근 3일간 먹인 이유식 재료와 변 모양을 같이 적어보세요.",
          "새 재료를 한꺼번에 늘리기보다 변화가 큰 재료는 잠시 멈추고 반응을 비교하세요.",
          "배를 세게 누르거나 임의로 약을 쓰기보다, 딱딱한 변이 반복되면 기록을 가지고 상담하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담이 필요한 신호",
        "body": "딱딱한 변과 함께 피가 반복해서 묻거나, 배가 심하게 빵빵하고 구토·먹는 양 감소·심한 보챔이 있거나, 며칠째 변을 못 보며 힘들어하면 소아청소년과 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "이유식 시작 시기 계산기",
          "/tools/feeding-start",
          "이유식 초기 정보",
          "/info/baby-food"
        ],
        "body": "이유식 단계와 재료 변화가 변비에 영향을 줄 수 있어요. 이유식 시작 시기 계산기와 이유식 초기 가이드를 함께 보면 조절할 포인트를 잡기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zr3000wr8t6clh0ybpo",
    "contentId": "cmqnsj4wl01aljot6tqncxs8l",
    "path": "/qna/health/baby-constipation-hard-stool",
    "title": "딱딱한 변을 보며 우는 아이, 변비로 봐야 하나요?",
    "question": "딱딱한 변을 보며 우는 아이, 변비로 봐야 하나요?",
    "summary": "아이가 딱딱한 변을 보며 울면 변비인지, 항문이 아파서 참는 건지 걱정될 수 있어요. 변을 보는 횟수보다 변의 단단함, 힘주는 시간, 피 묻음, 배 통증과 먹는 양 변화를 함께 확인해야 합니다.",
    "metaTitle": "아이 딱딱한 변과 울음, 변비 확인 기준 | MomTools",
    "metaDescription": "아이가 딱딱한 변을 보며 울 때 변비 여부, 항문 자극, 피 묻음, 배 통증, 먹는 양 변화와 병원 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-constipation-hard-stool",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-003: 딱딱한 변과 배변 시 울음 주제로 재작성. 기존 설사 문맥 오류를 제거하고 변비 기준·항문 자극·상담 신호로 구성함.",
    "duplicateMemo": "batch-003에서 본문, 카드 섹션, 관련 가이드 문맥까지 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 딱딱한 변",
      "아기 변비 울음",
      "아기 변 볼 때 울음",
      "아기 항문 피",
      "아이 변비 기준",
      "아기 변비 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "변비는 횟수보다 “힘들게 보는지”가 중요해요",
        "items": [
          "아이가 변을 볼 때 얼굴이 빨개지고 잠깐 힘을 주는 것만으로 바로 변비라고 보기는 어렵습니다. 하지만 딱딱한 변을 보며 오래 울거나, 변을 참으려는 모습이 반복되면 변비 흐름을 의심할 수 있어요.",
          "변이 동글동글하고 단단한지, 큰 덩어리처럼 나오는지, 변 겉에 피가 살짝 묻는지 확인해보세요. 딱딱한 변이 항문을 자극하면 아이가 다음 배변을 더 무서워해 참는 악순환이 생길 수 있습니다.",
          "마지막 대변 날짜보다 최근 식사, 물 섭취, 활동량, 이유식이나 우유 변화가 있었는지도 같이 봐야 합니다. 갑자기 식단이 바뀌면 변이 단단해질 수 있어요.",
          "배가 부풀고 먹는 양이 줄거나 구토가 함께 있으면 집에서 식단만 조절하기보다 상담이 필요합니다.",
          "임의로 변비약이나 관장을 반복하기보다 변 모양 사진, 배변 간격, 피 묻음 여부를 가지고 소아청소년과에 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "딱딱한 변에서 확인할 것",
        "items": [
          "변이 작고 동글동글한지, 큰 덩어리처럼 나오는지",
          "변을 볼 때 오래 울거나 참으려는지",
          "항문 주변이 찢어져 보이거나 피가 묻는지",
          "배가 빵빵하고 먹는 양이 줄었는지",
          "최근 식단, 우유, 이유식, 수분 섭취 변화가 있었는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "기록해두면 좋은 것",
        "items": [
          "며칠 간 배변 날짜, 변 모양, 울음 정도를 간단히 적어보세요.",
          "딱딱한 변이 반복되면 최근 먹은 음식과 수분 섭취를 함께 확인하세요.",
          "피가 보이면 양이 적어도 사진이나 기록을 남기고 반복 여부를 봐주세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 경우",
        "body": "피가 반복해서 묻거나, 배가 심하게 부풀고 구토가 있거나, 변을 보지 못한 채 심하게 보채고 먹는 양이 줄면 변비만으로 단정하지 말고 진료 상담을 받는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "이유식 시작 시기 계산기",
          "/tools/feeding-start",
          "이유식 정보",
          "/info/baby-food"
        ],
        "body": "이유식이나 식단 변화 뒤 딱딱한 변이 생겼다면 이유식 단계도 함께 확인해보세요. 이유식 시작 시기 계산기와 이유식 정보가 도움이 될 수 있습니다."
      }
    ]
  }
];

async function markBatchItem(prisma: any, batchItemId: string, contentId: string) {
  try {
    const columns = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
      `select column_name from information_schema.columns where table_schema = 'public' and table_name = 'ContentQualityBatchItem'`,
    );
    const columnSet = new Set(columns.map((row) => row.column_name));
    if (!columnSet.has("id")) return;

    const assignments: string[] = [];
    if (columnSet.has("status")) assignments.push(`"status" = 'REWRITTEN'`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-003 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
    if (columnSet.has("contentId")) assignments.push(`"contentId" = '${contentId.replace(/'/g, "''")}'`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatchItem" set ${assignments.join(", ")} where "id" = '${batchItemId.replace(/'/g, "''")}'`,
      );
    }
  } catch (error) {
    console.warn("batch item 상태 업데이트는 건너뜁니다:", error instanceof Error ? error.message : error);
  }
}

async function markBatch(prisma: any) {
  try {
    const columns = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
      `select column_name from information_schema.columns where table_schema = 'public' and table_name = 'ContentQualityBatch'`,
    );
    const columnSet = new Set(columns.map((row) => row.column_name));
    if (!columnSet.has("batchNo")) return;

    const assignments: string[] = [];
    if (columnSet.has("status")) assignments.push(`"status" = 'REWRITTEN'`);
    if (columnSet.has("completedItems")) assignments.push(`"completedItems" = 10`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 3`,
      );
    }
  } catch (error) {
    console.warn("batch 상태 업데이트는 건너뜁니다:", error instanceof Error ? error.message : error);
  }
}

async function upsertSection(prisma: any, contentId: string, section: SectionUpdate, sortOrder: number) {
  const existing = await prisma.contentSection.findMany({
    where: { contentId, sectionType: section.sectionType },
    orderBy: { sortOrder: "asc" },
  });

  const data = {
    title: section.title ?? null,
    body: section.body ?? null,
    items: section.items ?? undefined,
    sortOrder,
  };

  if (existing.length > 0) {
    await prisma.contentSection.update({
      where: { id: existing[0].id },
      data,
    });

    const extraIds = existing.slice(1).map((item: any) => item.id);
    if (extraIds.length > 0) {
      await prisma.contentSection.deleteMany({ where: { id: { in: extraIds } } });
    }
    return;
  }

  await prisma.contentSection.create({
    data: {
      contentId,
      sectionType: section.sectionType,
      ...data,
    },
  });
}

async function applyUpdate(prisma: any, update: ContentUpdate) {
  const content = await prisma.content.findFirst({
    where: { OR: [{ id: update.contentId }, { path: update.path }] },
    select: { id: true, path: true },
  });

  if (!content) {
    throw new Error(`콘텐츠를 찾을 수 없습니다: ${update.path}`);
  }

  await prisma.content.update({
    where: { id: content.id },
    data: {
      title: update.title,
      question: update.question,
      summary: update.summary,
      metaTitle: update.metaTitle,
      metaDescription: update.metaDescription,
      canonicalPath: update.canonicalPath,
      ogTitle: update.metaTitle,
      ogDescription: update.metaDescription,
      reviewStatus: update.reviewStatus,
      editorMemo: update.editorMemo,
      duplicateMemo: update.duplicateMemo,
    },
  });

  for (const [index, section] of update.sections.entries()) {
    await upsertSection(prisma, content.id, section, index + 1);
  }

  await prisma.contentKeyword.deleteMany({ where: { contentId: content.id } });
  await prisma.contentKeyword.createMany({
    data: update.keywords.map((keyword) => ({ contentId: content.id, keyword })),
    skipDuplicates: true,
  });

  await markBatchItem(prisma, update.batchItemId, content.id);
}

async function main() {
  const { prisma } = await import("../lib/db");

  console.log("batch-003 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-003 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-burn-finger");
  console.log("- http://localhost:3000/qna/health/baby-chest-retractions");
  console.log("- http://localhost:3000/qna/health/baby-cold-medicine-sleepy");
  console.log("- http://localhost:3000/qna/health/baby-constipation-after-weaning");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-003 반영 실패");
  console.error(error);
  process.exit(1);
});
