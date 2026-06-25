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
    "batchItemId": "cmqs71zs0000yr8t6mtwmwi93",
    "contentId": "cmqnsj4yn01b3jot6af9ke9iu",
    "path": "/qna/health/baby-constipation-no-poop-three-days",
    "title": "아기가 3일 이상 변을 안 보면 변비일까요?",
    "question": "아기가 3일 이상 변을 안 보면 변비일까요?",
    "summary": "아기가 며칠째 변을 보지 않으면 배가 아픈 건 아닌지, 바로 병원에 가야 하는지 걱정될 수 있어요. 변을 안 본 날짜만 보지 말고 배가 단단한지, 먹는 양과 소변이 유지되는지, 변을 볼 때 많이 힘들어하는지를 함께 확인해보세요.",
    "metaTitle": "아기 3일째 변 안 봄, 변비인지 확인할 기준 | MomTools",
    "metaDescription": "아기가 3일 이상 변을 안 볼 때 변비로 볼 수 있는 신호, 집에서 기록할 점, 병원 상담이 필요한 증상을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-constipation-no-poop-three-days",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "아기 변비",
      "아기 3일째 변 안 봄",
      "아기 대변 안 봄",
      "아기 배변 간격",
      "아기 딱딱한 변",
      "이유식 변비",
      "아기 변비 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "변을 안 본 날짜보다 아이 컨디션을 같이 보세요",
        "items": [
          "아기가 3일 정도 변을 보지 않았다고 해서 모두 위험한 것은 아닙니다. 모유 수유 중인 아기나 이유식 양이 바뀐 시기에는 배변 간격이 달라질 수 있어요. 다만 변이 너무 딱딱하거나 배가 빵빵하고 아이가 힘들어하면 변비 쪽으로 봐야 합니다.",
          "먼저 아이가 평소처럼 먹는지, 소변을 보는지, 배를 만졌을 때 심하게 아파하는지 확인해보세요. 기저귀나 변기에서 힘을 오래 주는데도 나오지 않거나, 변을 볼 때 울고 피가 묻는다면 그냥 며칠 더 기다리기보다 상담 기준을 확인하는 편이 좋습니다.",
          "변을 안 보는 동안 구토가 있거나 배가 점점 단단해지고, 아이가 축 처지는 모습이 함께 있으면 단순한 배변 간격 변화로만 보기 어렵습니다.",
          "이유식을 시작했다면 최근 새로 먹인 재료, 물 섭취, 분유·우유 양 변화도 같이 적어두세요. 배변 문제는 날짜보다 식단과 변 모양의 변화가 더 중요한 단서가 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집에서 먼저 볼 것",
        "items": [
          "마지막으로 변을 본 날짜와 변 모양이 딱딱했는지 확인하기",
          "배가 평소보다 단단하거나 빵빵한지 살펴보기",
          "수유·식사량과 소변 횟수가 줄었는지 보기",
          "변을 볼 때 오래 울거나 힘을 주는지 확인하기",
          "항문 주변에 피가 묻거나 찢어진 흔적이 있는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 기록해두면 좋은 것",
        "items": [
          "마지막 대변 날짜, 변 모양, 아이가 힘준 정도를 함께 적어두세요.",
          "이유식 중이라면 최근 2~3일 동안 새로 먹인 재료와 물 섭취량을 같이 기록하세요.",
          "임의로 관장이나 약을 반복하기보다, 변이 딱딱하고 피가 묻거나 아이가 심하게 힘들어하면 진료 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 서두를 신호",
        "body": "배가 심하게 부풀거나 반복 구토가 있는 경우, 변에 피가 묻는 경우, 아이가 심하게 울며 배를 아파하는 경우, 수유나 식사량이 줄고 축 처지는 경우에는 변을 며칠 안 봤다는 이유만으로 기다리지 말고 소아청소년과에 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "이유식 시작 후 변비",
          "/qna/health/baby-constipation-after-weaning",
          "딱딱한 변을 보며 우는 아이",
          "/qna/health/baby-hard-stool-cry"
        ],
        "body": "배변 간격이 길어지는 문제는 이유식 변화나 딱딱한 변과 이어지는 경우가 많아요. 비슷한 변비 Q&A를 함께 보면 아이 상황에 맞는 확인 기준을 더 구체적으로 볼 수 있습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs0000zr8t6m5kn8gdm",
    "contentId": "cmqnsj9mr02fajot615687b8s",
    "path": "/qna/health/baby-cough-after-cold",
    "title": "감기는 나은 것 같은데 기침만 남으면 얼마나 지켜봐도 될까요?",
    "question": "감기는 나은 것 같은데 기침만 남으면 얼마나 지켜봐도 될까요?",
    "summary": "열과 콧물은 줄었는데 기침만 남으면 부모는 감기가 덜 나은 건지, 다른 문제가 생긴 건지 헷갈릴 수 있어요. 기침이 줄어드는 흐름인지, 밤잠·식사·호흡을 방해하는지, 열이 다시 나는지를 나눠보면 다음 행동을 정하기 쉽습니다.",
    "metaTitle": "감기 후 기침만 남을 때 확인할 점 | MomTools",
    "metaDescription": "감기는 나은 것 같은데 기침만 남았을 때 지켜볼 수 있는 흐름, 병원 상담이 필요한 신호, 집에서 기록할 점을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-after-cold",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "감기 후 기침",
      "아이 기침 오래감",
      "아기 기침",
      "기침만 남음",
      "아이 밤기침",
      "소아 감기 후 기침",
      "기침 병원 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "좋아지는 흐름인지 먼저 나눠보세요",
        "items": [
          "감기 뒤 기침은 다른 증상이 먼저 좋아진 뒤에도 남아 보일 수 있습니다. 중요한 건 기침이 하루하루 조금씩 줄어드는지, 아니면 새로 심해지거나 밤마다 잠을 깨울 정도로 이어지는지예요.",
          "아이 컨디션이 괜찮고 잘 먹고 잘 놀며 숨쉬기가 편해 보인다면 당장 기침 소리만으로 급하게 판단하기보다는 시간대와 강도를 기록해보세요.",
          "반대로 열이 다시 나거나, 쌕쌕거림이 들리거나, 기침 때문에 토하고 잠을 거의 못 자면 감기 뒤 잔기침으로만 보기 어렵습니다. 특히 숨이 빨라 보이거나 가슴이 들어가는 호흡이 보이면 바로 확인이 필요합니다.",
          "집 안 공기가 건조하거나 코막힘이 남아 있으면 누웠을 때 기침이 더 도드라질 수 있어요. 코 상태, 방 습도, 잠드는 자세도 함께 봐주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "기침 흐름을 볼 때",
        "items": [
          "기침이 줄어드는지, 같은 강도로 계속되는지 비교하기",
          "밤잠을 깨우거나 식사·수유를 방해하는지 확인하기",
          "열이 다시 나거나 콧물이 진해지는지 보기",
          "쌕쌕거림, 빠른 호흡, 가슴 들어감이 있는지 살피기",
          "어린이집 등원 뒤 다시 심해지는 패턴이 있는지 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 해볼 정리",
        "items": [
          "기침이 심한 시간대와 아이가 누웠는지, 활동했는지, 콧물이 있었는지를 같이 적어두세요.",
          "수분 섭취와 코막힘 완화를 먼저 챙기고, 기침약을 임의로 추가하기 전에는 아이 나이와 성분을 확인하세요.",
          "기침 소리가 걱정되면 짧은 영상으로 남겨 진료 상담 때 보여주는 것이 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 신호",
        "body": "감기 증상이 좋아진 뒤에도 기침이 점점 심해지거나, 열이 다시 나거나, 쌕쌕거림·숨가쁨·가슴이 들어가는 호흡·반복 구토가 동반되면 단순 잔기침으로만 보지 말고 진료 상담을 받는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "가슴이 쑥 들어가는 호흡",
          "/qna/health/baby-chest-retractions"
        ],
        "body": "감기 후 기침은 호흡 상태와 같이 보면 판단이 쉬워요. 기침·호흡 가이드와 호흡곤란 신호 Q&A를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00010r8t6lbvy7jcp",
    "contentId": "cmqnsj7ko01xsjot6ttfn357s",
    "path": "/qna/health/baby-cough-after-crying",
    "title": "울고 난 뒤 기침이 심해지면 어떤 점을 봐야 하나요?",
    "question": "울고 난 뒤 기침이 심해지면 어떤 점을 봐야 하나요?",
    "summary": "아이가 많이 운 뒤 기침을 하면 목이 자극돼서 그런 건지, 숨쉬기가 불편한 건지 걱정될 수 있어요. 울음이 멈춘 뒤 기침이 잦아드는지, 쌕쌕거림이나 입술색 변화가 있는지, 수유나 잠이 방해받는지를 함께 살펴보세요.",
    "metaTitle": "울고 난 뒤 기침이 심할 때 확인할 신호 | MomTools",
    "metaDescription": "아이가 울고 난 뒤 기침이 심해질 때 목 자극과 호흡 문제를 구분해 볼 체크포인트, 집에서 볼 점, 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-after-crying",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "울고 난 뒤 기침",
      "아이 울음 후 기침",
      "아기 기침",
      "아기 호흡 확인",
      "기침 쌕쌕거림",
      "입술색 변화",
      "소아 기침 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "울음 뒤 바로 가라앉는지부터 보세요",
        "items": [
          "아이가 오래 울면 목이 마르고 콧물이나 침이 넘어가면서 기침이 잠깐 심해질 수 있습니다. 울음이 멈추고 아이가 안정을 찾은 뒤 기침이 줄어드는지 먼저 보세요.",
          "기침이 울 때만 나타나고 금방 잦아들며 잘 먹고 잘 논다면 급한 호흡 문제와는 거리가 있을 수 있어요. 다만 같은 상황이 자주 반복되거나 기침 뒤 숨이 차 보이면 따로 확인이 필요합니다.",
          "울음 뒤 쌕쌕거림이 들리거나, 갈비뼈 사이가 들어가거나, 입술색이 푸르스름해 보이면 단순 자극으로만 보지 마세요.",
          "기침이 시작된 상황을 보면 도움이 됩니다. 울기 전부터 콧물이 있었는지, 누운 자세였는지, 우유나 분유를 먹은 직후였는지도 같이 적어두세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "울음 후 기침에서 볼 것",
        "items": [
          "울음이 멈춘 뒤 기침이 금방 줄어드는지",
          "쌕쌕거림, 숨가쁨, 가슴 들어감이 있는지",
          "입술이나 얼굴색이 평소와 같은지",
          "기침 때문에 수유나 잠이 자주 끊기는지",
          "울기 전 콧물, 수유, 누운 자세가 있었는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "상황을 나눠 기록해보세요",
        "items": [
          "기침이 운 직후에만 나타나는지, 울지 않을 때도 반복되는지 구분해 적어두세요.",
          "기침 소리보다 아이가 숨을 편하게 쉬는지 먼저 확인하세요.",
          "쌕쌕거림이나 가슴이 들어가는 모습이 보이면 집에서 오래 지켜보기보다 상담 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 확인해야 하는 경우",
        "body": "울음 후 기침과 함께 입술색이 파래 보이거나, 숨이 빠르고 가슴이 들어가거나, 아이가 축 처지고 잘 먹지 못한다면 단순히 많이 울어서 그런 것으로 넘기지 말고 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "입술이 잠깐 파래 보이는 경우",
          "/qna/health/baby-blue-lips-briefly"
        ],
        "body": "울음 뒤 기침은 호흡과 입술색 변화를 같이 보면 더 안전하게 판단할 수 있어요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00011r8t6qt9cssmx",
    "contentId": "cmqnsja1c02isjot6a1xiuoin",
    "path": "/qna/health/baby-cough-after-laughing",
    "title": "웃다가 기침이 심해지는 아이, 기관지 문제일까요?",
    "question": "웃다가 기침이 심해지는 아이, 기관지 문제일까요?",
    "summary": "아이가 크게 웃거나 장난친 뒤 기침을 하면 기관지가 약한 건 아닌지 걱정될 수 있어요. 웃을 때만 잠깐 나는지, 운동·찬 공기·밤에도 반복되는지, 쌕쌕거림이나 숨참이 함께 있는지를 나눠보는 것이 좋습니다.",
    "metaTitle": "웃다가 기침하는 아이, 기관지 확인 기준 | MomTools",
    "metaDescription": "아이가 웃다가 기침을 심하게 할 때 일시적 자극인지, 반복되는 기관지 민감 신호인지 확인할 체크포인트를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-after-laughing",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "웃다가 기침",
      "아이 웃을 때 기침",
      "아기 기침",
      "기관지 민감",
      "아이 쌕쌕거림",
      "운동 후 기침",
      "기침 병원 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "웃을 때만인지, 다른 자극에도 반복되는지 보세요",
        "items": [
          "웃다가 숨을 몰아쉬면 목이나 기도가 자극돼 기침이 잠깐 날 수 있습니다. 한두 번 기침하고 바로 괜찮아진다면 그 장면만으로 기관지 문제를 단정하기는 어렵습니다.",
          "하지만 웃을 때뿐 아니라 뛰고 난 뒤, 찬 공기를 마신 뒤, 밤이나 새벽에도 기침이 반복된다면 기관지가 예민하게 반응하는 상황일 수 있어요. 이때는 기침의 반복 패턴을 보는 것이 중요합니다.",
          "쌕쌕거림, 가슴 답답함처럼 보이는 행동, 숨이 차서 놀이를 멈추는 모습이 함께 있으면 단순 웃음 자극으로만 넘기지 않는 편이 좋습니다.",
          "아이에게 알레르기나 아토피 병력이 있거나 가족 중 천식·알레르기가 있다면 진료 때 그 정보도 함께 이야기해 주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "반복 패턴 확인",
        "items": [
          "웃을 때만 기침하는지, 뛰거나 찬 공기에서도 기침하는지",
          "기침 뒤 쌕쌕거림이나 숨참이 있는지",
          "밤이나 새벽 기침이 함께 있는지",
          "놀이를 멈출 정도로 힘들어하는지",
          "알레르기, 아토피, 가족력과 함께 반복되는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "기록하면 좋은 내용",
        "items": [
          "기침이 생긴 상황을 웃음, 운동, 찬 공기, 잠자리로 나눠 적어보세요.",
          "기침 후 아이가 바로 회복하는지, 숨을 고르느라 멈추는지 살펴보세요.",
          "비슷한 상황이 여러 번 반복되면 영상이나 메모를 준비해 소아청소년과에 상담해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담을 미루지 않을 신호",
        "body": "웃거나 뛰는 상황 뒤 기침과 함께 쌕쌕거림, 숨참, 입술색 변화, 가슴이 들어가는 호흡이 보이거나 밤기침이 반복되면 기관지 반응 여부를 확인하기 위해 진료 상담을 받는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "뛰어논 뒤 기침이 심해지는 아이",
          "/qna/health/baby-cough-after-running",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "웃음 뒤 기침이 운동 후 기침과 함께 반복되는지 비교해보면 상담 때 설명하기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00012r8t614cc0gjg",
    "contentId": "cmqnsj9qw02gajot65d3gaepr",
    "path": "/qna/health/baby-cough-after-milk",
    "title": "우유나 분유 먹고 기침하면 사레인지 확인해야 하나요?",
    "question": "우유나 분유 먹고 기침하면 사레인지 확인해야 하나요?",
    "summary": "수유나 우유를 먹는 중 기침하면 사레가 들린 건지, 삼키는 과정이 힘든 건지 걱정될 수 있어요. 먹는 속도, 젖꼭지 흐름, 자세, 기침 뒤 색 변화와 호흡을 함께 보면 다음 행동을 정하기 쉽습니다.",
    "metaTitle": "우유·분유 먹고 기침할 때 사레 확인 기준 | MomTools",
    "metaDescription": "아이가 우유나 분유를 먹고 기침할 때 사레, 수유 자세, 젖꼭지 흐름, 상담이 필요한 호흡 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-after-milk",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "분유 먹고 기침",
      "우유 먹고 기침",
      "아기 사레",
      "수유 중 기침",
      "아기 기침",
      "분유 사레 대처",
      "아기 호흡 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "먹는 중 기침은 자세와 흐름을 먼저 보세요",
        "items": [
          "우유나 분유를 먹다가 기침을 하면 대부분의 부모가 사레를 먼저 떠올립니다. 한 번 기침하고 다시 편하게 먹는다면 일시적으로 빠르게 넘어갔을 수 있지만, 매번 반복된다면 수유 흐름을 점검해야 합니다.",
          "젖꼭지 구멍이 너무 크거나, 아이가 급하게 먹거나, 누운 자세에 가까우면 기침이 더 잘 생길 수 있어요. 먹는 중간에 숨을 고를 시간을 주는지도 중요합니다.",
          "기침 뒤 얼굴이나 입술색이 변하거나, 숨을 가쁘게 쉬거나, 먹는 양이 줄고 체중 증가가 걱정된다면 단순 사레로만 보기 어렵습니다.",
          "수유 직후 자주 기침하고 토하거나 몸을 뒤로 젖히는 모습이 반복된다면 역류나 삼킴 문제도 상담 때 함께 이야기해볼 수 있습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "수유 중 확인할 것",
        "items": [
          "기침이 먹는 첫 부분에 많은지, 끝부분에 많은지",
          "젖꼭지 흐름이 너무 빠르지 않은지",
          "먹는 중 숨을 고를 시간이 있는지",
          "기침 뒤 입술색 변화나 쌕쌕거림이 있는지",
          "수유량 감소, 반복 구토, 체중 증가 문제와 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "수유할 때 해볼 수 있는 조정",
        "items": [
          "먹는 속도가 빠르면 중간에 잠깐 쉬게 하고 자세를 조금 세워주세요.",
          "젖꼭지 단계나 컵·빨대 사용 방식이 아이에게 맞는지 확인해보세요.",
          "반복되는 기침은 시간, 먹은 양, 자세, 색 변화 여부를 적어 상담 때 보여주세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 신호",
        "body": "우유나 분유를 먹을 때마다 기침이 반복되거나, 기침 뒤 입술색이 파래 보이거나, 숨이 차고 쌕쌕거림이 있거나, 수유량과 체중 증가가 줄어드는 경우에는 소아청소년과 상담을 받는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "수유 후 몸을 뒤로 젖히는 경우",
          "/qna/health/baby-back-arching-after-feeding",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "수유 중 기침은 자세, 역류, 호흡 신호를 같이 보면 더 정확하게 설명할 수 있습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00013r8t66zzp4dze",
    "contentId": "cmqnsj96c02bajot6htowd1c7",
    "path": "/qna/health/baby-cough-after-running",
    "title": "뛰어논 뒤 기침이 심해지는 아이, 괜찮을까요?",
    "question": "뛰어논 뒤 기침이 심해지는 아이, 괜찮을까요?",
    "summary": "뛰고 난 뒤 아이가 기침을 하면 숨이 찬 정도인지, 기관지가 예민하게 반응하는 건지 걱정될 수 있어요. 놀이를 멈추면 금방 회복되는지, 쌕쌕거림·가슴 답답함·밤기침이 함께 있는지 확인해보세요.",
    "metaTitle": "뛰고 난 뒤 기침하는 아이, 확인할 기준 | MomTools",
    "metaDescription": "아이가 뛰어논 뒤 기침이 심해질 때 운동 후 기침, 쌕쌕거림, 숨참, 병원 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-after-running",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "뛰고 난 뒤 기침",
      "운동 후 기침 아이",
      "아이 쌕쌕거림",
      "소아 운동성 기침",
      "아기 기침",
      "기관지 민감",
      "아이 호흡 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "운동 후 회복되는 시간을 보세요",
        "items": [
          "뛰어놀면 누구나 숨이 차고 기침이 잠깐 날 수 있습니다. 하지만 놀이를 멈춘 뒤에도 기침이 오래가거나, 쌕쌕거림이 들리거나, 아이가 숨차서 놀이를 피한다면 반복 패턴을 살펴봐야 합니다.",
          "특히 찬 공기, 미세먼지, 감기 직후, 격한 달리기 뒤에 기침이 더 심해지는지 비교해보세요. 같은 상황에서 반복되면 기관지가 자극에 민감하게 반응하는지 상담해볼 수 있습니다.",
          "기침만 있는지, 가슴 답답함처럼 보이는 행동이나 호흡곤란이 함께 있는지도 중요합니다. 어린아이는 '답답하다'고 표현하지 못해 놀이를 멈추거나 안기려고만 할 수 있어요.",
          "운동을 무조건 막기보다 어떤 환경에서 심해지는지 확인하는 것이 먼저입니다. 다만 호흡이 힘들어 보이면 활동을 이어가지 말고 쉬게 해주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "운동 후 기침에서 확인할 것",
        "items": [
          "쉬면 몇 분 안에 가라앉는지, 오래 이어지는지",
          "쌕쌕거림이나 숨참이 함께 있는지",
          "찬 공기, 미세먼지, 감기 뒤에 더 심해지는지",
          "밤기침이나 새벽 기침도 함께 있는지",
          "놀이를 피하거나 중간에 멈추려는 모습이 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "다음 놀이 때 비교해보기",
        "items": [
          "기침이 나온 활동, 날씨, 공기 상태, 회복 시간을 적어두세요.",
          "감기 직후에는 격한 활동을 줄이고 회복 흐름을 먼저 보세요.",
          "반복되는 운동 후 기침은 영상이나 메모를 준비해 진료 때 상담해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 권하는 경우",
        "body": "뛰어논 뒤 기침이 반복되고 쌕쌕거림, 숨참, 가슴이 들어가는 호흡, 입술색 변화가 함께 있거나 밤기침까지 이어진다면 운동 후 기관지 반응 여부를 확인하기 위해 진료 상담을 받아보는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "웃다가 기침이 심해지는 아이",
          "/qna/health/baby-cough-after-laughing",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "운동 후 기침은 웃음, 찬 공기, 미세먼지 같은 자극과 함께 비교하면 원인을 설명하기 쉬워집니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00014r8t6pa60t8ap",
    "contentId": "cmqnsj9z802iajot6lrtlwxe7",
    "path": "/qna/health/baby-cough-air-pollution",
    "title": "미세먼지 심한 날 기침하는 아이는 어떻게 관리하나요?",
    "question": "미세먼지 심한 날 기침하는 아이는 어떻게 관리하나요?",
    "summary": "미세먼지가 심한 날 아이가 기침을 하면 감기인지 공기 자극인지 헷갈릴 수 있어요. 그날의 공기질, 외출 시간, 쌕쌕거림이나 숨참 여부, 기존 알레르기·천식 병력을 함께 확인해보는 것이 좋습니다.",
    "metaTitle": "미세먼지 심한 날 아이 기침 관리 기준 | MomTools",
    "metaDescription": "미세먼지 심한 날 아이가 기침할 때 외출 조절, 실내 관리, 쌕쌕거림과 호흡곤란 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-air-pollution",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "미세먼지 기침 아이",
      "아이 미세먼지 관리",
      "아기 기침",
      "공기질 기침",
      "아이 쌕쌕거림",
      "소아 호흡 관리",
      "미세먼지 외출"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "공기질과 증상 변화를 같이 보세요",
        "items": [
          "미세먼지가 높은 날에는 눈·코·목이 자극되고 기침이 늘어날 수 있습니다. 감기처럼 보이더라도 외출 시간과 공기질이 나빴던 시간대가 겹치는지 먼저 비교해보세요.",
          "기침만 살짝 늘고 아이가 잘 먹고 잘 논다면 외출 시간을 줄이고 실내 공기를 관리하면서 변화를 볼 수 있습니다. 다만 쌕쌕거림, 숨참, 가슴 답답함처럼 보이는 행동이 함께 있으면 더 주의해야 합니다.",
          "알레르기 비염, 천식, 반복되는 기관지 증상이 있는 아이는 미세먼지에 더 예민하게 반응할 수 있어요. 이런 병력이 있다면 공기질이 나쁜 날의 증상 변화를 따로 적어두는 것이 좋습니다.",
          "마스크는 아이 나이와 착용 가능 여부에 따라 달라질 수 있으므로, 어린아이에게 억지로 씌우기보다 외출 시간 조절과 실내 관리가 먼저입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "미세먼지 날 체크포인트",
        "items": [
          "기침이 외출 뒤 심해졌는지, 실내에서도 계속되는지",
          "눈 가려움, 콧물, 목 따가움이 함께 있는지",
          "쌕쌕거림이나 숨참, 가슴 들어감이 있는지",
          "기존 천식·알레르기 병력이 있는지",
          "공기질이 좋아진 뒤 증상이 줄어드는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 할 수 있는 관리",
        "items": [
          "공기질이 나쁜 시간대에는 격한 실외 활동을 줄이고, 귀가 후 손과 얼굴을 씻겨 주세요.",
          "실내는 너무 건조하지 않게 하고, 환기는 공기질이 상대적으로 나을 때 짧게 하세요.",
          "기침이 심해진 날짜와 공기질, 외출 시간을 같이 적어두면 반복 패턴을 찾기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 신호",
        "body": "미세먼지 날 기침과 함께 쌕쌕거림, 숨참, 가슴이 들어가는 호흡, 입술색 변화가 있거나 기존 천식·호흡기 질환이 있는 아이의 증상이 악화되면 진료 상담을 받는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "뛰어논 뒤 기침이 심해지는 아이",
          "/qna/health/baby-cough-after-running",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "미세먼지 기침은 활동량과도 연결될 수 있어요. 운동 후 기침과 함께 비교하면 아이의 호흡 반응을 더 잘 볼 수 있습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00015r8t6d3jgh8wk",
    "contentId": "cmqnsja3e02jajot6s3h6ydcb",
    "path": "/qna/health/baby-cough-and-chest-sound",
    "title": "가슴에서 그르렁 소리가 나는 아이는 무엇을 봐야 하나요?",
    "question": "가슴에서 그르렁 소리가 나는 아이는 무엇을 봐야 하나요?",
    "summary": "아이 가슴에서 그르렁 소리가 들리면 가래가 많은 건지, 쌕쌕거림인지, 호흡이 힘든 건지 걱정될 수 있어요. 소리가 코에서 나는지 가슴에서 나는지보다 아이가 숨을 편하게 쉬는지, 먹고 자는지가 더 중요합니다.",
    "metaTitle": "아이 가슴 그르렁 소리, 확인할 호흡 신호 | MomTools",
    "metaDescription": "아이 가슴에서 그르렁 소리가 날 때 가래, 쌕쌕거림, 빠른 호흡, 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-and-chest-sound",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "가슴 그르렁 소리",
      "아이 가래 소리",
      "아기 쌕쌕거림",
      "아기 기침",
      "소아 호흡 확인",
      "아기 호흡곤란",
      "기침 가래"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "소리보다 숨쉬는 모습을 먼저 보세요",
        "items": [
          "그르렁거리는 소리는 코막힘이나 목의 가래처럼 위쪽에서 들릴 때도 있고, 가슴 쪽에서 거칠게 들릴 때도 있습니다. 부모가 소리만으로 위치를 정확히 구분하기는 어렵기 때문에 아이의 호흡 상태를 함께 봐야 합니다.",
          "아이가 평소처럼 먹고 놀며 숨을 편하게 쉬면 코막힘이나 가래가 움직이며 소리가 커져 들릴 수 있어요. 하지만 숨이 빠르거나 가슴이 들어가고, 쌕쌕거림이 반복되면 확인이 필요합니다.",
          "기침 뒤 토하거나 잠을 자주 깨는지, 열이 동반되는지, 콧물이 많은지도 같이 보세요. 소리가 날 때 아이가 힘들어 보이는지가 가장 중요한 기준입니다.",
          "가능하면 짧은 영상으로 숨소리와 가슴 움직임을 남겨두세요. 진료 때 소리를 말로 설명하는 것보다 훨씬 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "그르렁 소리와 함께 볼 것",
        "items": [
          "숨이 평소보다 빠르거나 힘들어 보이는지",
          "가슴이나 갈비뼈 사이가 들어가는지",
          "쌕쌕거림, 컹컹 기침, 반복 구토가 있는지",
          "수유·식사량과 잠이 줄었는지",
          "열이나 콧물이 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "상담 전 준비하면 좋은 것",
        "items": [
          "소리가 들리는 시간대와 자세를 적어두세요.",
          "기침 소리와 숨쉬는 모습을 짧게 촬영해두면 설명하기 쉽습니다.",
          "코막힘이 있다면 코를 편하게 해주고, 호흡이 힘들어 보이면 바로 상담 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 확인할 신호",
        "body": "그르렁 소리와 함께 숨이 빠르거나 가슴이 들어가고, 입술색이 변하거나 잘 먹지 못하고 축 처지는 경우에는 단순 가래 소리로만 넘기지 말고 진료 상담을 받는 것이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "가슴이 쑥 들어가는 호흡",
          "/qna/health/baby-chest-retractions",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "가슴 소리가 걱정될 때는 흉부 함몰 호흡이 있는지 함께 보면 더 안전합니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00016r8t6vbrx2kge",
    "contentId": "cmqnsja5h02jsjot6noztxh17",
    "path": "/qna/health/baby-cough-daycare-return",
    "title": "어린이집만 다녀오면 기침이 늘어나는 아이는 어떻게 봐야 하나요?",
    "question": "어린이집만 다녀오면 기침이 늘어나는 아이는 어떻게 봐야 하나요?",
    "summary": "어린이집에 다녀온 날마다 기침이 늘면 감기가 반복되는 건지, 환경 자극 때문인지 헷갈릴 수 있어요. 등원일과 쉬는 날의 차이, 콧물·열 동반 여부, 낮잠과 실내 환경을 함께 비교해보세요.",
    "metaTitle": "어린이집 다녀오면 기침하는 아이 확인 기준 | MomTools",
    "metaDescription": "어린이집에 다녀온 뒤 기침이 늘어나는 아이에게서 감기 반복, 환경 자극, 호흡 상담 신호를 구분해 볼 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-daycare-return",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "어린이집 기침",
      "등원 후 기침",
      "아이 기침 반복",
      "어린이집 감기",
      "아기 기침",
      "소아 호흡 확인",
      "아이 콧물 기침"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "등원일과 쉬는 날을 비교해보세요",
        "items": [
          "어린이집에 다니기 시작하면 감기 노출이 늘고, 낮잠 환경이나 실내 공기, 활동량 변화 때문에 기침이 도드라져 보일 수 있습니다. 먼저 등원한 날과 집에 있는 날의 차이를 비교해보세요.",
          "기침이 하원 후 잠깐 늘었다가 밤에 잦아드는지, 밤새 심해지고 다음 날 열이나 콧물이 따라오는지에 따라 흐름이 달라집니다.",
          "교실에서 뛰어놀거나 먼지·건조함·향이 강한 물질에 노출될 때 기침이 심해지는 아이도 있어요. 담임에게 낮잠 중 기침, 활동 후 기침, 콧물 여부를 물어보면 단서를 얻을 수 있습니다.",
          "다만 어린이집 때문이라고만 단정하지 말고, 반복되는 열·쌕쌕거림·호흡 곤란 신호가 있는지도 같이 봐야 합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "패턴을 볼 때",
        "items": [
          "등원한 날과 쉬는 날의 기침 차이",
          "하원 직후, 밤, 새벽 중 언제 심한지",
          "열, 콧물, 쌕쌕거림이 함께 있는지",
          "낮잠 중 기침이나 활동 후 기침이 있는지",
          "교실 환경, 미세먼지, 감기 유행 여부"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "어린이집과 함께 확인할 것",
        "items": [
          "담임에게 낮잠 때 기침했는지, 활동 후 심했는지, 콧물이 있었는지 물어보세요.",
          "하원 후 손 씻기, 옷 갈아입기, 충분한 수분과 휴식을 챙겨주세요.",
          "기침이 반복되는 요일과 증상 변화를 1~2주 정도 적어두면 진료 상담에 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 경우",
        "body": "등원 뒤 기침이 반복되면서 열이 자주 나거나, 쌕쌕거림·숨참·밤잠 방해가 함께 있거나, 아이가 잘 먹지 못하고 처져 보이면 단순 어린이집 적응으로만 보기보다 진료 상담을 받아보는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "감기는 나은 것 같은데 기침만 남는 경우",
          "/qna/health/baby-cough-after-cold",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "등원 후 기침은 감기 후 잔기침과 헷갈리기 쉬워요. 두 흐름을 비교하면 판단이 쉬워집니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zs00017r8t6ni0rq8z0",
    "contentId": "cmqnsj94802asjot6bujlohvk",
    "path": "/qna/health/baby-cough-morning-only",
    "title": "아침에만 기침하는 아이는 감기일까요?",
    "question": "아침에만 기침하는 아이는 감기일까요?",
    "summary": "아이가 아침에만 기침하고 낮에는 괜찮아 보이면 감기인지, 코가 넘어가서 그런지, 방이 건조한 건지 헷갈릴 수 있어요. 잠자리 환경, 코막힘, 밤기침, 쌕쌕거림 여부를 함께 확인해보세요.",
    "metaTitle": "아침에만 기침하는 아이, 감기인지 확인할 점 | MomTools",
    "metaDescription": "아이가 아침에만 기침할 때 코막힘, 후비루, 건조한 방, 알레르기, 병원 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-morning-only",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-004: 상세 페이지 전체 카드 흐름을 함께 점검해 사용자 관점으로 재작성. 기존 설사/일반 기침 반복 문맥을 제거하고 주제별 확인 기준을 분리함.",
    "duplicateMemo": "batch-004에서 본문, 체크포인트, 상담 신호, 관련 가이드 문맥까지 함께 정리해 반복 구조와 잘못 연결된 주제를 줄임.",
    "keywords": [
      "아침에만 기침",
      "아이 아침 기침",
      "아기 기침",
      "코막힘 기침",
      "후비루 아이",
      "알레르기 기침",
      "밤기침"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "아침 기침은 잠자는 동안의 환경을 같이 보세요",
        "items": [
          "아침에만 기침이 나면 밤새 코가 목 뒤로 넘어갔거나, 방이 건조하거나, 이불·먼지 같은 자극이 있었을 수 있습니다. 감기처럼 하루 종일 심한 기침과는 흐름이 다를 수 있어요.",
          "먼저 코막힘이나 콧물이 있는지, 자는 동안 입을 벌리고 잤는지, 일어난 직후 목을 가다듬듯 기침하는지 살펴보세요.",
          "낮에는 괜찮지만 밤이나 새벽에도 기침이 반복되거나, 웃거나 뛰고 난 뒤에도 기침한다면 기관지 민감성이나 알레르기 가능성도 상담해볼 수 있습니다.",
          "아침 기침만 보고 바로 병명을 정하기보다 수면 환경, 콧물, 기침 시간대를 함께 기록하면 원인을 좁히는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "아침 기침에서 볼 것",
        "items": [
          "코막힘, 콧물, 재채기가 함께 있는지",
          "자는 동안 입을 벌리고 잤는지",
          "방이 건조하거나 먼지가 많은지",
          "밤기침, 새벽기침, 운동 후 기침도 있는지",
          "열, 쌕쌕거림, 숨참이 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "잠자리 환경부터 점검해보세요",
        "items": [
          "침구 먼지와 방 습도를 확인하고, 잠들기 전 코막힘이 심한지 살펴보세요.",
          "기침이 아침에만 있는지, 밤에도 깨는지 1주일 정도 시간대를 적어보세요.",
          "쌕쌕거림이나 숨참이 함께 있으면 단순한 아침 기침으로만 보지 말고 상담해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 고려할 신호",
        "body": "아침 기침이 오래 이어지면서 밤기침, 운동 후 기침, 쌕쌕거림, 숨참, 반복되는 열이나 체중·식사량 감소가 함께 있으면 감기만으로 단정하지 말고 진료 상담을 받아보는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "감기는 나은 것 같은데 기침만 남는 경우",
          "/qna/health/baby-cough-after-cold",
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ],
        "body": "아침 기침은 감기 후 잔기침, 코막힘, 알레르기와 이어질 수 있어요. 관련 글을 함께 보면 흐름을 나누기 쉽습니다."
      }
    ]
  }
];

function escapeSql(value: string) {
  return value.replace(/'/g, "''");
}

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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-004 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
    if (columnSet.has("contentId")) assignments.push(`"contentId" = '${escapeSql(contentId)}'`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatchItem" set ${assignments.join(", ")} where "id" = '${escapeSql(batchItemId)}'`,
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 4`,
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

  console.log("batch-004 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-004 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-constipation-no-poop-three-days");
  console.log("- http://localhost:3000/qna/health/baby-cough-after-cold");
  console.log("- http://localhost:3000/qna/health/baby-cough-after-milk");
  console.log("- http://localhost:3000/qna/health/baby-cough-air-pollution");
  console.log("- http://localhost:3000/qna/health/baby-cough-morning-only");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-004 반영 실패");
  console.error(error);
  process.exit(1);
});
