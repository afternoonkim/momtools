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
    "batchItemId": "cmqs71ztx001kr8t680aijta6",
    "contentId": "cmqnsj8lm026jjot6y5ota7bs",
    "path": "/qna/health/baby-dawn-fever",
    "title": "새벽에만 열이 오르는 아이, 어떻게 관찰하면 좋을까요?",
    "question": "새벽에만 열이 오르는 아이, 어떻게 관찰하면 좋을까요?",
    "summary": "아이가 낮에는 괜찮아 보이다가 새벽마다 체온이 오르면 밤새 지켜봐야 할지 고민될 수 있어요. 같은 방법으로 다시 체온을 재고, 옷차림·이불·실내 온도·수분 섭취·소변 횟수를 함께 보면 단순한 일시 변화인지 상담이 필요한 흐름인지 정리하기 쉽습니다.",
    "metaTitle": "새벽에만 열이 오르는 아이 관찰 기준 | MomTools",
    "metaDescription": "새벽마다 아이 열이 오를 때 체온 재는 방법, 수분·소변·컨디션 확인, 진료 상담이 필요한 발열 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dawn-fever",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 새벽에만 오르는 열을 환경·측정법·수분 상태·3개월 미만 경고 신호 중심으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "새벽에만 열",
      "아기 새벽 열",
      "아이 밤에 열",
      "아기 발열 관찰",
      "아기 열 병원",
      "아기 해열제 확인",
      "아기 소변 수분",
      "3개월 미만 열"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "새벽 열은 체온 숫자와 아이 모습을 같이 봐야 해요",
        "items": [
          "새벽에만 열이 오르면 낮에는 멀쩡해 보여도 부모는 밤마다 긴장하게 됩니다. 이럴 때는 한 번 잰 체온보다 같은 체온계, 같은 부위, 같은 방법으로 다시 확인하는 것이 먼저예요.",
          "잠들면서 이불을 많이 덮었거나 방이 더웠다면 체온이 일시적으로 높게 나올 수 있습니다. 옷을 조금 가볍게 하고 20~30분 뒤 다시 재보면 흐름을 보는 데 도움이 됩니다.",
          "다만 체온이 내려가도 아이가 축 처지거나 잘 먹지 못하고, 소변이 줄거나 숨쉬기 힘들어 보이면 ‘새벽에만 나는 열’로 넘기기 어렵습니다.",
          "특히 생후 3개월 미만 아기에게 38도 안팎의 열이 있거나, 열과 함께 경련·반응 저하·호흡곤란이 보이면 집에서 오래 관찰하기보다 바로 의료진에게 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "밤새 확인할 체크포인트",
        "items": [
          "체온을 잰 시간, 측정 부위, 최고 체온을 같이 적어두기",
          "옷차림, 이불 두께, 방 온도처럼 체온에 영향을 줄 수 있는 환경 확인하기",
          "수유량·물 섭취량과 마지막 소변 시간을 함께 보기",
          "열이 내려간 뒤에도 아이가 눈을 맞추고 반응하는지 확인하기",
          "최근 예방접종, 감기 노출, 어린이집 등원, 가족 감기 증상이 있었는지 떠올리기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 밤 바로 해볼 일",
        "items": [
          "아이를 너무 덥게 싸두지 말고 편안한 옷차림으로 바꾼 뒤 체온을 다시 확인해보세요.",
          "체온만 적지 말고 먹은 양, 소변 횟수, 잠든 시간, 아이 반응을 한 줄씩 남겨두세요.",
          "열이 반복된다면 해열제 사용 여부를 혼자 결정하기보다 월령·체중·복용 간격을 확인할 수 있게 소아청소년과나 약사에게 상담할 자료를 준비하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "새벽 열이어도 바로 상담할 신호",
        "body": "생후 3개월 미만의 발열, 깨워도 반응이 약한 모습, 호흡곤란, 경련, 반복되는 구토, 소변이 눈에 띄게 줄어드는 경우에는 밤 시간이라도 의료진 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "열이 반복될 때는 아기 열 대처 가이드에서 월령별 발열 기준, 해열제 확인 전 볼 점, 병원 상담 신호를 같이 정리해보세요.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001lr8t6ub7su9xc",
    "contentId": "cmqnsjbmh02wsjot6k38w2afn",
    "path": "/qna/health/baby-diaper-rash-blisters",
    "title": "기저귀 발진에 물집이 보이면 진료가 필요할까요?",
    "question": "기저귀 발진에 물집이 보이면 진료가 필요할까요?",
    "summary": "기저귀 발진에 물집처럼 보이는 부위가 생기면 단순한 자극인지 감염 신호인지 헷갈릴 수 있어요. 물집·진물·피부 벗겨짐이 있는지, 열이 나거나 아이가 소변·대변 볼 때 많이 아파하는지를 함께 보면 진료 상담이 필요한지 판단하기 쉽습니다.",
    "metaTitle": "기저귀 발진에 물집이 보일 때 확인할 점 | MomTools",
    "metaDescription": "아기 기저귀 발진에 물집이 보일 때 집에서 볼 피부 상태, 피해야 할 관리, 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diaper-rash-blisters",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 물집 동반 기저귀 발진을 단순 피부 변화가 아니라 물집·진물·통증·열 기준으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "기저귀 발진 물집",
      "아기 기저귀 발진",
      "기저귀 발진 병원",
      "아기 엉덩이 물집",
      "기저귀 발진 진물",
      "아기 피부 짓무름",
      "아기 발진 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "물집이 보이면 가벼운 발진과 구분해보세요",
        "items": [
          "기저귀 안쪽 피부가 빨갛게 된 정도라면 자극성 발진일 수 있지만, 물집이나 작은 고름, 피부가 벗겨진 부위가 보이면 집 관리만으로 충분한지 다시 봐야 합니다.",
          "먼저 물집이 한두 개만 있는지, 주변 피부가 빠르게 번지는지, 진물이나 피가 묻는지 확인해보세요. 아이가 기저귀를 갈 때 심하게 울거나 소변·대변 볼 때 아파한다면 통증도 중요한 신호입니다.",
          "물집을 터뜨리거나 여러 연고를 번갈아 바르면 피부가 더 자극될 수 있어요. 깨끗하게 씻기고 충분히 말린 뒤, 기존에 쓰던 제품 중 최근 바뀐 것이 있는지부터 정리해보는 편이 좋습니다.",
          "열이 함께 나거나 물집·진물이 늘고, 며칠 관리해도 나아지지 않으면 감염이나 다른 피부 문제를 확인해야 할 수 있어 진료 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "물집 발진에서 볼 부분",
        "items": [
          "물집, 고름, 진물, 피가 묻는 부위가 있는지 확인하기",
          "발진이 엉덩이·사타구니·접히는 부위 중 어디에 심한지 보기",
          "기저귀를 갈 때마다 아이가 통증처럼 심하게 우는지 살피기",
          "최근 설사, 항생제 복용, 새 기저귀·물티슈·크림 사용이 있었는지 확인하기",
          "열이 있거나 발진이 빠르게 번지는지 비교하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 관리할 때 주의할 점",
        "items": [
          "물집은 일부러 터뜨리지 말고 사진을 남겨 몇 시간 뒤 크기와 개수를 비교해보세요.",
          "닦을 때 세게 문지르지 말고 물로 부드럽게 씻긴 뒤 충분히 말려주세요.",
          "새로 바꾼 기저귀, 물티슈, 로션이 있다면 잠시 이전 제품과 비교해볼 수 있습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 권하는 경우",
        "body": "기저귀 발진에 물집·고름·진물·출혈이 보이거나, 열이 함께 나거나, 며칠 관리해도 더 심해지는 경우에는 집에서만 버티지 말고 소아청소년과나 피부 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "기저귀 발진과 다른 피부 발진을 구분하려면 아기 발진·두드러기 확인 가이드에서 번지는 속도, 열 동반, 물집 여부를 함께 확인해보세요.",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001mr8t6dlnom9nn",
    "contentId": "cmqnsj5tg01iljot6bp5vn8sg",
    "path": "/qna/health/baby-diaper-rash-severe",
    "title": "기저귀 발진이 진물 나면 병원에 가야 하나요?",
    "question": "기저귀 발진이 진물 나면 병원에 가야 하나요?",
    "summary": "기저귀 발진이 빨갛게만 보이는 수준을 넘어 진물, 벗겨짐, 피 묻음이 보이면 아이도 많이 따가울 수 있어요. 며칠 관리해도 악화되는지, 열이 있는지, 대소변 볼 때 통증처럼 우는지를 같이 확인하면 진료 상담이 필요한 시점을 놓치지 않을 수 있습니다.",
    "metaTitle": "기저귀 발진 진물, 병원 상담이 필요한 경우 | MomTools",
    "metaDescription": "아기 기저귀 발진이 진물 나거나 헐었을 때 집에서 볼 점, 피해야 할 관리, 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diaper-rash-severe",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 진물 나는 기저귀 발진을 짓무름·감염 의심 신호·임의 연고 사용 주의 중심으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "기저귀 발진 진물",
      "심한 기저귀 발진",
      "아기 엉덩이 헐었을 때",
      "기저귀 발진 병원",
      "기저귀 발진 피",
      "기저귀 발진 통증",
      "아기 피부 짓무름"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "진물이 나면 ‘얼마나 헐었는지’를 먼저 보세요",
        "items": [
          "기저귀 발진이 진물 나거나 피부가 벗겨져 보이면 단순히 빨갛게 오른 발진보다 피부 장벽이 더 손상된 상태일 수 있습니다.",
          "발진이 접히는 부위에만 있는지, 엉덩이 전체로 번지는지, 피나 고름처럼 보이는 분비물이 있는지를 확인해보세요. 설사가 잦았거나 항생제를 먹는 중이었다면 발진이 더 쉽게 심해질 수 있습니다.",
          "집에서 여러 크림을 겹쳐 바르거나 스테로이드·항진균제 같은 약을 임의로 쓰는 것은 피하는 게 좋아요. 원인이 다르면 필요한 관리도 달라질 수 있기 때문입니다.",
          "아이에게 열이 있거나 발진이 계속 번지고, 대소변 볼 때 심하게 아파한다면 진료에서 피부 상태를 직접 확인받는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "진물 나는 발진 체크리스트",
        "items": [
          "피부가 벗겨졌는지, 진물·고름·피가 묻는지 보기",
          "발진이 며칠째 지속되는지와 점점 넓어지는지 확인하기",
          "설사나 잦은 대변 때문에 피부가 계속 젖어 있었는지 살피기",
          "기저귀를 갈 때 통증처럼 심하게 우는지 보기",
          "열, 처짐, 먹는 양 감소가 같이 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 할 수 있는 기본 관리",
        "items": [
          "기저귀는 더 자주 갈고, 닦은 뒤에는 피부가 마를 시간을 조금 주세요.",
          "물티슈가 따갑게 느껴질 수 있어 물로 부드럽게 씻기고 문지르지 않는 것이 좋습니다.",
          "진물 부위가 커지는지 사진으로 남겨 진료 때 보여줄 수 있게 해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "병원 상담을 미루지 말아야 할 때",
        "body": "진물·고름·출혈, 물집, 열, 심한 통증, 며칠 관리해도 악화되는 발진이 있으면 단순 기저귀 발진으로만 보기 어렵기 때문에 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "기저귀 발진이 심할 때는 아기 발진·두드러기 확인 가이드에서 물집, 진물, 열 동반 여부를 함께 확인해보세요.",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001nr8t6nh8740bb",
    "contentId": "cmqnsj4s8019ljot6vw5z4t2h",
    "path": "/qna/health/baby-diarrhea-after-antibiotics",
    "title": "항생제 먹고 설사할 때 집에서 어떻게 관리하나요?",
    "question": "항생제 먹고 설사할 때 집에서 어떻게 관리하나요?",
    "summary": "아이가 항생제를 먹는 중 설사를 하면 약을 계속 먹여야 할지, 중단해야 할지 걱정될 수 있어요. 임의로 끊기보다 처방받은 병원에 현재 변 횟수와 상태를 알릴 준비를 하고, 피·점액·탈수 신호가 있는지 먼저 확인하는 게 중요합니다.",
    "metaTitle": "항생제 먹고 설사할 때 집에서 볼 점 | MomTools",
    "metaDescription": "아이가 항생제 복용 중 설사할 때 약을 임의로 중단하지 않고 확인할 점, 탈수·혈변·상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-after-antibiotics",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 항생제 설사를 약 중단 여부가 아닌 처방 병원 상담·탈수·혈변 기준으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "항생제 설사 아이",
      "아기 항생제 설사",
      "항생제 먹고 설사",
      "아이 설사 탈수",
      "아기 설사 병원",
      "항생제 부작용 상담",
      "아이 변 변화 기록"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "약을 끊기 전에 설사 양상부터 정리하세요",
        "items": [
          "항생제를 먹기 시작한 뒤 변이 묽어지면 부모는 ‘약이 안 맞는 걸까?’ 하고 바로 불안해질 수 있습니다. 하지만 처방받은 약을 임의로 중단하거나 줄이는 것은 피하고, 먼저 변 상태를 정리해 상담하는 것이 안전합니다.",
          "하루 설사 횟수가 갑자기 늘었는지, 물처럼 많은지, 피나 점액이 섞였는지, 열이나 복통처럼 보이는 울음이 함께 있는지 확인해보세요.",
          "설사가 있으면 가장 먼저 볼 것은 탈수입니다. 마지막 소변 시간이 오래됐거나 입이 마르고 눈물이 거의 없고, 아이가 축 처져 보이면 변 횟수보다 수분 상태가 우선입니다.",
          "항생제를 처방받은 병원에 약 이름, 복용 시작일, 설사 시작 시점, 횟수와 색을 알려주면 다음 지시를 받는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "항생제 복용 중 설사 체크포인트",
        "items": [
          "항생제 시작 후 몇 시간 또는 며칠 뒤 설사가 시작됐는지 적기",
          "설사 횟수, 양, 피·점액 여부, 냄새 변화를 함께 보기",
          "아이의 수분 섭취량과 마지막 소변 시간을 확인하기",
          "열, 복통처럼 보이는 울음, 반복 구토가 있는지 보기",
          "약을 임의로 끊기보다 처방받은 곳에 현재 상태를 문의하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "상담 전 준비하면 좋은 기록",
        "items": [
          "약 이름과 복용 시작일, 설사 시작 시간을 같이 적어두세요.",
          "기저귀 사진은 피나 점액 여부를 설명할 때 도움이 될 수 있습니다.",
          "소변이 줄거나 잘 마시지 못하면 설사 횟수만 세지 말고 탈수 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담이 필요한 신호",
        "body": "피가 섞인 설사, 반복 구토, 소변 감소, 매우 마른 입, 눈물이 거의 없는 울음, 심한 복통처럼 보이는 울음, 고열이나 축 처짐이 있으면 항생제 부작용인지 혼자 판단하지 말고 의료진 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "설사가 계속될 때는 아기 설사 확인 가이드에서 탈수 신호와 기저귀 기록 방법을 함께 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001or8t6xnpxlulg",
    "contentId": "cmqnsjafp02majot66yn787rv",
    "path": "/qna/health/baby-diarrhea-after-new-food",
    "title": "새 음식을 먹고 설사하면 알레르기일 수 있나요?",
    "question": "새 음식을 먹고 설사하면 알레르기일 수 있나요?",
    "summary": "이유식이나 새 간식을 먹은 뒤 설사가 생기면 알레르기인지 장염인지 바로 구분하기 어렵습니다. 음식 이름만 보지 말고 먹은 시간, 설사 시작 시점, 두드러기·입술 부종·구토·호흡 변화가 같이 있었는지 확인해보는 것이 먼저예요.",
    "metaTitle": "새 음식 후 설사, 알레르기인지 확인할 점 | MomTools",
    "metaDescription": "아기가 새 음식을 먹고 설사할 때 알레르기 의심 신호, 장염과 구분할 기록, 진료 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-after-new-food",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 새 음식 이후 설사를 알레르기 단정 없이 시간 흐름·동반 증상·반복성 중심으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "새 음식 설사",
      "이유식 설사",
      "아기 음식 알레르기 설사",
      "새 재료 설사",
      "아기 두드러기 설사",
      "아기 설사 기록",
      "이유식 알레르기 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "음식 때문인지 보려면 시간 흐름을 같이 봐야 해요",
        "items": [
          "새 음식을 먹고 설사를 하면 부모는 바로 알레르기를 떠올리게 됩니다. 하지만 같은 날 장염이 시작됐거나, 양이 많았거나, 질감이 바뀌어 변이 달라진 경우도 있을 수 있어요.",
          "먼저 새 음식을 먹은 시간과 설사가 시작된 시간을 적어보세요. 같은 음식 후 반복되는지, 두드러기·입술이나 눈 주변 붓기·구토·기침이나 숨참이 함께 있었는지도 중요합니다.",
          "설사만 한두 번 있었다면 새 재료를 잠시 쉬고 아이 컨디션과 수분 상태를 확인할 수 있습니다. 다만 피가 섞이거나 반복 구토, 호흡 변화가 있다면 알레르기 가능성을 포함해 빠르게 상담해야 합니다.",
          "다음에 같은 음식을 다시 시도할지는 혼자 판단하기보다 반응 기록을 가지고 소아청소년과에 확인하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "새 음식 후 설사에서 기록할 것",
        "items": [
          "먹은 음식 이름, 양, 조리 형태, 먹은 시간을 적기",
          "설사가 시작된 시간과 횟수, 변의 색·점액·피 여부 확인하기",
          "두드러기, 입술·눈 주변 붓기, 구토, 기침, 숨참이 함께 있었는지 보기",
          "가족이 같이 배탈이 났거나 어린이집에서 장염이 돌았는지 확인하기",
          "같은 음식에서 반응이 반복되는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘은 이렇게 정리해보세요",
        "items": [
          "새 재료는 잠시 멈추고 이전에 문제 없던 음식 위주로 아이가 먹을 수 있는 만큼만 주세요.",
          "기저귀 사진과 먹은 음식 기록을 함께 남겨두면 상담 때 설명하기 쉽습니다.",
          "호흡 변화나 얼굴 부종이 보이면 음식 기록보다 빠른 도움 요청이 먼저입니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "알레르기 가능성을 포함해 빨리 상담할 신호",
        "body": "설사와 함께 전신 두드러기, 입술·눈 주변 부종, 반복 구토, 기침·쌕쌕거림·숨참, 축 처짐, 피가 섞인 변이 있으면 새 음식 반응을 가볍게 넘기지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "새 음식 후 변이 달라졌다면 아기 설사 확인 가이드와 이유식 알레르기 관찰 기준을 함께 보면 기록할 항목을 정리하기 좋습니다.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001pr8t6al7s42uo",
    "contentId": "cmqnsjb0202rajot6wnom3clx",
    "path": "/qna/health/baby-diarrhea-dehydration-check",
    "title": "설사하는 아이 탈수는 집에서 어떻게 확인하나요?",
    "question": "설사하는 아이 탈수는 집에서 어떻게 확인하나요?",
    "summary": "설사가 계속되면 변 횟수보다 아이가 마실 수 있는지, 소변이 줄었는지가 더 중요해요. 입이 마르고 눈물이 거의 없거나 기저귀가 오래 젖지 않고, 아이가 축 처지면 집에서만 지켜보기보다 탈수 상담이 필요할 수 있습니다.",
    "metaTitle": "설사하는 아이 탈수 확인 기준 | MomTools",
    "metaDescription": "아이 설사 때 탈수 신호를 집에서 확인하는 방법, 소변·눈물·입마름 체크포인트, 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-dehydration-check",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 설사 탈수 글을 변 횟수보다 소변·눈물·입마름·수분 섭취 기준으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아이 설사 탈수",
      "아기 설사 탈수 확인",
      "소변 줄어듦",
      "아기 입마름",
      "설사 기저귀 횟수",
      "아기 설사 병원",
      "아이 탈수 증상"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "변 횟수보다 수분 신호가 먼저예요",
        "items": [
          "아이가 설사를 많이 하면 기저귀를 몇 번 갈았는지부터 세게 되지만, 실제로 더 중요한 것은 몸에 수분이 유지되고 있는지입니다.",
          "마지막 소변이 언제였는지, 평소보다 기저귀가 덜 젖는지, 입술과 입안이 마른지, 울 때 눈물이 거의 없는지 확인해보세요.",
          "영아는 말로 목마름을 표현하지 못해 더 조심해야 합니다. 잘 먹지 못하고 계속 졸려 보이거나 보채기만 한다면 단순 설사로 넘기기 어렵습니다.",
          "설사가 있어도 조금씩 마실 수 있고 소변이 유지된다면 기록하며 경과를 볼 수 있지만, 수분을 못 받거나 소변이 줄면 의료진 상담 기준을 빨리 확인하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집에서 볼 탈수 체크포인트",
        "items": [
          "마지막 소변 시간과 기저귀가 젖은 정도 확인하기",
          "입술, 혀, 입안이 평소보다 마른지 보기",
          "울 때 눈물이 거의 없는지 살피기",
          "눈이 푹 꺼져 보이거나 영아의 정수리 부위가 꺼져 보이는지 확인하기",
          "마시려고 하지 않거나 마셔도 반복해서 토하는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "기록하면 상담이 쉬운 내용",
        "items": [
          "설사 횟수와 함께 마신 양, 마지막 소변 시간을 같이 적어두세요.",
          "아이가 마실 수 있다면 한 번에 많이 먹이기보다 조금씩 자주 시도해보세요.",
          "기저귀 사진보다 아이가 얼마나 마시고 소변을 봤는지가 탈수 판단에 더 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "탈수가 의심되어 상담이 필요한 경우",
        "body": "소변이 오래 없거나 평소보다 기저귀가 거의 젖지 않는 경우, 입이 매우 마르고 눈물이 거의 없는 경우, 반복 구토로 수분을 못 받는 경우, 축 처지거나 깨워도 반응이 약한 경우에는 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "설사 중 탈수가 걱정된다면 아기 설사 확인 가이드에서 소변, 수분 섭취, 혈변·구토 동반 여부를 함께 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001qr8t60hqdobmu",
    "contentId": "cmqnsjajr02najot66twy6o41",
    "path": "/qna/health/baby-diarrhea-mucus",
    "title": "끈적한 점액변이 보이면 병원에 가야 하나요?",
    "question": "끈적한 점액변이 보이면 병원에 가야 하나요?",
    "summary": "기저귀에 끈적한 점액이 보이면 장이 많이 안 좋은 건 아닌지 걱정될 수 있어요. 점액만 한 번 보였는지, 설사와 함께 반복되는지, 피·열·복통처럼 보이는 울음·소변 감소가 동반되는지를 나눠보는 것이 먼저입니다.",
    "metaTitle": "아기 점액변, 병원 상담이 필요한 경우 | MomTools",
    "metaDescription": "아기 변에 끈적한 점액이 보일 때 집에서 볼 반복 여부, 피·설사·탈수 신호, 진료 상담이 필요한 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-mucus",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 점액변을 변비/혈변 문맥과 섞지 않고 반복 여부·피·탈수·최근 음식/약 기록 중심으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 점액변",
      "점액변 병원",
      "아기 변 점액",
      "아기 설사 점액",
      "아기 혈변 점액",
      "아기 대변 사진",
      "아기 설사 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "점액이 한 번인지, 설사와 반복되는지 나눠보세요",
        "items": [
          "변에 끈적한 점액이 섞여 보이면 사진을 찍어 검색하고 싶을 만큼 놀랄 수 있습니다. 하지만 점액이 한 번 보였는지, 묽은 설사와 같이 반복되는지에 따라 확인할 점이 달라요.",
          "감기 뒤 콧물을 삼켰거나 장이 자극을 받았을 때 일시적으로 점액이 보일 수 있습니다. 다만 점액이 반복되고 피가 섞이거나 열, 복통처럼 보이는 울음이 함께 있으면 상담이 필요합니다.",
          "기저귀를 볼 때는 점액 양뿐 아니라 변 색, 설사 횟수, 먹는 양, 마지막 소변 시간을 함께 적어두세요.",
          "아이가 잘 먹고 잘 놀며 점액이 한 번 정도라면 경과를 볼 수 있지만, 점점 잦아지거나 아이 컨디션이 나빠지면 진료에서 변 상태를 설명하는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "점액변에서 확인할 것",
        "items": [
          "점액이 한 번인지, 하루에 여러 번 반복되는지 보기",
          "피가 섞였는지, 변이 검붉거나 검게 보이지 않는지 확인하기",
          "설사, 구토, 열, 배를 움켜쥐는 듯한 울음이 함께 있는지 보기",
          "먹는 양과 마지막 소변 시간이 평소와 같은지 확인하기",
          "최근 새 음식, 항생제, 감기 증상이 있었는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "진료 전 준비하면 좋은 것",
        "items": [
          "기저귀 사진을 남기되, 사진만 보지 말고 시간과 횟수도 같이 적어두세요.",
          "새 음식이나 약을 시작했다면 시작 날짜를 함께 기록하세요.",
          "점액에 피가 섞이거나 아이가 축 처지면 다음 기저귀를 기다리기보다 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "점액변과 함께 빨리 확인할 신호",
        "body": "점액변에 피가 섞이거나 설사가 반복되고, 고열·반복 구토·소변 감소·심한 복통처럼 보이는 울음·처짐이 함께 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "점액변이 설사와 함께 보이면 아기 설사 확인 가이드에서 혈변, 탈수, 반복 구토 기준을 함께 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001rr8t6uyjeigkp",
    "contentId": "cmqnsjahq02msjot6veps4rg5",
    "path": "/qna/health/baby-diarrhea-smell-sour",
    "title": "변 냄새가 시큼하고 묽으면 장염일까요?",
    "question": "변 냄새가 시큼하고 묽으면 장염일까요?",
    "summary": "아기 변이 갑자기 시큼한 냄새가 나고 묽어지면 장염인지, 먹은 음식 때문인지 걱정될 수 있어요. 냄새만으로 원인을 단정하기보다 설사 횟수, 구토·열 동반 여부, 아이가 잘 마시는지와 소변이 줄었는지를 함께 봐야 합니다.",
    "metaTitle": "아기 변 냄새가 시큼하고 묽을 때 확인할 점 | MomTools",
    "metaDescription": "아기 변이 시큼하고 묽을 때 장염으로 단정하기 전 볼 설사 횟수, 수분 상태, 구토·열 동반 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-smell-sour",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 시큼한 냄새를 장염으로 단정하지 않고 음식·감염 노출·탈수 기준으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 변 냄새 시큼",
      "아기 묽은 변",
      "아기 장염 의심",
      "아기 설사 냄새",
      "아기 설사 탈수",
      "아기 변 냄새 변화",
      "아기 설사 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "냄새만으로 장염을 단정하지는 마세요",
        "items": [
          "변 냄새가 평소와 다르게 시큼하고 묽으면 장염이 아닐까 걱정될 수 있습니다. 하지만 냄새만으로 원인을 구분하기는 어렵고, 변 횟수와 아이 컨디션을 같이 봐야 해요.",
          "최근 새 음식, 과일, 유제품, 이유식 질감 변화가 있었는지 떠올려보세요. 가족 중 장염 증상이 있거나 어린이집에서 설사가 돌았다면 감염 가능성도 함께 생각할 수 있습니다.",
          "묽은 변이 반복되더라도 아이가 잘 마시고 소변이 유지되면 기록하며 관찰할 수 있습니다. 반대로 구토와 열이 함께 있거나 소변이 줄면 냄새보다 탈수 신호가 우선입니다.",
          "시큼한 냄새가 계속되면서 피나 점액이 보이면 기저귀 사진과 횟수를 남겨 의료진에게 보여주는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "시큼한 묽은 변에서 볼 기준",
        "items": [
          "평소보다 변 횟수가 늘었는지, 물처럼 묽은지 확인하기",
          "구토, 열, 복통처럼 보이는 울음이 함께 있는지 보기",
          "최근 새 음식, 유제품, 과일, 항생제 복용이 있었는지 확인하기",
          "마지막 소변 시간과 입마름, 눈물 감소를 함께 보기",
          "피나 점액이 섞였는지 기저귀 상태를 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 정리할 내용",
        "items": [
          "변 냄새 표현보다 변 횟수, 색, 묽은 정도를 간단히 적어두세요.",
          "새 음식을 먹은 뒤라면 그 음식은 잠시 쉬고 아이가 잘 마시는지 확인해보세요.",
          "가족이나 어린이집에 비슷한 설사 증상이 있었는지도 함께 확인해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "장염 의심으로 상담할 신호",
        "body": "묽은 변이 반복되면서 피·점액, 고열, 반복 구토, 소변 감소, 입마름, 눈물 감소, 심한 처짐이 함께 있으면 냄새 변화만 보며 기다리지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "묽은 변과 냄새 변화가 함께 있으면 아기 설사 확인 가이드에서 장염 의심 신호와 탈수 기준을 같이 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001sr8t6zovp62rw",
    "contentId": "cmqnsj4ua01a3jot6t325cznf",
    "path": "/qna/health/baby-diarrhea-smelly",
    "title": "설사 냄새가 심하게 달라지면 감염 신호일까요?",
    "question": "설사 냄새가 심하게 달라지면 감염 신호일까요?",
    "summary": "설사 냄새가 갑자기 심해지면 감염 때문인지 걱정되지만, 냄새 하나만으로 판단하기는 어려워요. 냄새 변화와 함께 열, 구토, 피나 점액, 복통처럼 보이는 울음, 소변 감소가 있는지를 같이 봐야 합니다.",
    "metaTitle": "설사 냄새가 심하게 달라질 때 확인할 신호 | MomTools",
    "metaDescription": "아이 설사 냄새가 갑자기 심해졌을 때 감염으로 단정하기 전 볼 동반 증상, 탈수 신호, 진료 상담 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-smelly",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 설사 냄새 변화를 코로나/감염 단정 문맥에서 분리하고 동반 증상·노출·탈수 기준으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "설사 냄새 심함",
      "아기 설사 냄새",
      "아기 감염성 설사",
      "아기 장염 냄새",
      "아기 설사 피 점액",
      "아이 설사 탈수",
      "설사 병원 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "냄새보다 함께 나타나는 변화가 더 중요해요",
        "items": [
          "설사 냄새가 평소보다 확 달라지면 감염이 아닐까 걱정되지만, 냄새만으로 장염이나 세균 감염을 단정할 수는 없습니다.",
          "감염 가능성을 볼 때는 냄새보다 열, 반복 구토, 피나 점액, 심한 복통처럼 보이는 울음, 아이가 축 처지는지를 함께 확인해야 합니다.",
          "어린이집이나 가족 중 설사·구토가 있었는지, 최근 외식이나 새 음식이 있었는지도 기록해두면 원인을 좁히는 데 도움이 됩니다.",
          "냄새가 심해도 아이가 잘 마시고 소변이 유지된다면 우선 변 횟수와 컨디션을 관찰할 수 있습니다. 하지만 탈수 신호가 보이면 냄새 변화보다 수분 상태가 더 급한 기준입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "감염 가능성을 볼 때 확인할 것",
        "items": [
          "열, 구토, 복통처럼 보이는 울음이 함께 있는지 보기",
          "피나 점액이 섞였는지 기저귀 상태 확인하기",
          "설사 횟수가 빠르게 늘거나 물처럼 많은지 보기",
          "가족·어린이집에서 비슷한 증상이 있었는지 확인하기",
          "소변이 줄고 입이 마르거나 아이가 처지는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "냄새 변화가 있을 때 남길 기록",
        "items": [
          "냄새 표현보다 설사 횟수, 색, 점액·피 여부를 먼저 적어두세요.",
          "어린이집 등원일, 외식, 새 음식, 가족 증상 여부를 함께 메모해두세요.",
          "피가 보이거나 소변이 줄면 다음 변을 기다리기보다 상담 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "설사 냄새 변화와 함께 상담할 신호",
        "body": "설사에 피나 점액이 섞이거나 고열, 반복 구토, 심한 복통처럼 보이는 울음, 소변 감소, 입마름, 축 처짐이 있으면 감염 가능성을 포함해 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "냄새 변화가 설사와 함께 반복된다면 아기 설사 확인 가이드에서 탈수와 혈변 기준을 함께 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71ztx001tr8t6y7q8o6yj",
    "contentId": "cmqnsj4q70193jot6y1andmo4",
    "path": "/qna/health/baby-diarrhea-with-mucus",
    "title": "아기 설사에 점액이 섞이면 바로 진료를 봐야 하나요?",
    "question": "아기 설사에 점액이 섞이면 바로 진료를 봐야 하나요?",
    "summary": "아기 설사에 점액이 섞여 보이면 장이 많이 자극된 건 아닌지 걱정될 수 있어요. 점액이 조금 보였는지, 설사가 반복되는지, 피·열·구토·소변 감소가 함께 있는지 확인하면 바로 상담해야 할 상황을 구분하는 데 도움이 됩니다.",
    "metaTitle": "아기 설사에 점액이 섞일 때 진료 기준 | MomTools",
    "metaDescription": "아기 설사에 점액이 섞였을 때 집에서 볼 점액·피·탈수 신호와 바로 진료 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-diarrhea-with-mucus",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-006: 점액 설사 글을 7번 점액변 글과 겹치지 않게 설사 반복·동반 증상·탈수 기준으로 재작성.",
    "duplicateMemo": "batch-006에서 새벽 발열, 기저귀 발진, 항생제·새 음식 이후 설사, 탈수·점액변·냄새 변화 질문을 페이지별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 설사 점액",
      "아기 점액 설사",
      "아기 점액변",
      "아기 설사 병원",
      "아기 설사 피",
      "아기 설사 탈수",
      "아기 장염 증상"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "점액이 섞인 설사는 반복 여부와 동반 증상을 같이 봐요",
        "items": [
          "설사에 점액이 보이면 ‘바로 병원에 가야 하나’라는 생각이 먼저 들 수 있습니다. 한 번 소량 보인 점액과, 묽은 설사 속에 계속 섞이는 점액은 다르게 봐야 해요.",
          "먼저 점액이 몇 번 보였는지, 피가 섞였는지, 열이나 구토가 함께 있는지 확인하세요. 아이가 배를 아파하는 듯 웅크리거나 심하게 우는지도 중요한 단서입니다.",
          "설사가 반복되면 탈수 확인이 빠지면 안 됩니다. 마지막 소변 시간, 입마름, 눈물 감소, 먹는 양을 함께 봐야 합니다.",
          "점액이 계속되거나 피가 보이면 사진과 기록을 가지고 진료 상담을 받는 편이 안전합니다. 원인을 집에서 단정하려 하기보다 위험 신호를 놓치지 않는 것이 중요합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "점액 섞인 설사 체크포인트",
        "items": [
          "점액이 한 번인지, 설사 때마다 반복되는지 확인하기",
          "피가 섞였거나 변이 검붉거나 검게 보이지 않는지 보기",
          "열, 구토, 복통처럼 보이는 울음이 함께 있는지 살피기",
          "마지막 소변 시간과 수분 섭취량 확인하기",
          "최근 새 음식, 항생제, 가족 장염 증상이 있었는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바로 할 수 있는 기록",
        "items": [
          "기저귀 사진을 남기고 점액·피 여부를 짧게 적어두세요.",
          "먹은 음식, 약, 설사 시작 시간을 같이 적으면 상담 때 도움이 됩니다.",
          "소변이 줄거나 아이가 축 처지면 변 모양을 더 기다리지 말고 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 진료 상담을 권하는 경우",
        "body": "점액 설사와 함께 피가 보이거나, 반복 구토, 고열, 소변 감소, 입마름, 눈물 감소, 심한 복통처럼 보이는 울음, 축 처짐이 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "점액이 섞인 설사가 반복된다면 아기 설사 확인 가이드에서 혈변, 탈수, 장염 의심 신호를 함께 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-006 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 6`,
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

  console.log("batch-006 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-006 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-dawn-fever");
  console.log("- http://localhost:3000/qna/health/baby-diaper-rash-blisters");
  console.log("- http://localhost:3000/qna/health/baby-diarrhea-after-antibiotics");
  console.log("- http://localhost:3000/qna/health/baby-diarrhea-dehydration-check");
  console.log("- http://localhost:3000/qna/health/baby-diarrhea-with-mucus");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-006 반영 실패");
  console.error(error);
  process.exit(1);
});
