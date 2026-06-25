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

const updates = [
  {
    "batchItemId": "cmqs71zp20001r8t6pf9wq6uw",
    "contentId": "cmqnsizpb001jjot6ci1zxb8z",
    "path": "/qna/health/after-vaccine-fever",
    "title": "예방접종 후 열이 나는데 정상인가요?",
    "question": "예방접종 후 열이 나는데 정상인가요?",
    "summary": "예방접종 후 열이 나면 부모는 접종 반응인지, 감기 같은 다른 이유인지 헷갈릴 수 있어요. 체온 숫자만 보지 말고 아이가 잘 먹는지, 평소처럼 반응하는지, 접종 부위가 심하게 붓는지 함께 확인해보세요.",
    "metaTitle": "예방접종 후 열, 언제 병원에 문의할까요? | MomTools",
    "metaDescription": "예방접종 후 열이 날 때 집에서 먼저 볼 체온·컨디션·접종 부위 변화와 소아청소년과 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/after-vaccine-fever",
    "keywords": [
      "예방접종 후 열",
      "아기 접종열",
      "접종 후 발열",
      "아기 열 38도",
      "예방접종 부위 붓기"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "접종 후 열이 날 때 먼저 볼 것",
        "items": [
          "예방접종 뒤에는 아이에 따라 미열이나 보챔이 나타날 수 있어요. 다만 ‘접종했으니 괜찮겠지’로 넘기기보다 체온, 먹는 양, 반응, 접종 부위를 같이 보는 게 안전합니다.",
          "체온은 같은 부위에서 다시 재어 비교하세요. 옷을 너무 두껍게 입혔거나 방이 더우면 실제보다 높게 느껴질 수 있어요.",
          "아이 컨디션이 핵심입니다. 열이 있어도 수유나 물을 어느 정도 받아들이고 눈맞춤이 괜찮은지, 반대로 열이 낮아도 축 처지고 깨우기 어려운지 나눠 보세요.",
          "접종 부위가 살짝 붓거나 아파 보일 수는 있지만, 붓기가 빠르게 커지거나 고름처럼 보이는 분비물이 있으면 확인이 필요합니다.",
          "해열제를 이미 안내받았다면 병원이나 약국에서 들은 방법대로만 사용하고, 용량을 임의로 늘리거나 다른 감기약과 겹쳐 먹이지 마세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "오늘 집에서 확인할 기록",
        "items": [
          "열이 시작된 시간과 가장 높게 측정된 체온",
          "마지막 수유·식사 시간과 평소 대비 먹은 양",
          "소변 기저귀가 평소처럼 나오는지",
          "접종 부위의 붓기, 열감, 색 변화",
          "해열제 사용 여부와 사용 후 아이 반응"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "지금 해볼 수 있는 일",
        "items": [
          "방을 너무 덥게 하지 말고, 아이가 땀을 많이 흘리면 옷차림을 가볍게 조절하세요.",
          "아이가 먹을 수 있다면 수유나 수분 섭취를 조금씩 이어가세요.",
          "체온 변화만 적지 말고 아이가 웃는지, 눈을 맞추는지, 잘 깨는지도 같이 메모해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "소아청소년과에 문의할 신호",
        "body": "생후 3개월 미만 아기에게 38도 이상 열이 나거나, 아이가 축 처지고 잘 먹지 못하거나, 호흡이 힘들어 보이거나, 접종 부위가 빠르게 붓고 심하게 아파 보이면 집에서 오래 지켜보기보다 소아청소년과에 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "아기 나이에 따라 열을 보는 기준이 달라질 수 있어요. 생후 개월수가 헷갈린다면 아기 개월수 계산기와 아기 열 대처 가이드를 함께 확인해보세요.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
      }
    ],
    "editorMemo": "batch-001: 예방접종 후 발열 주제로 재작성. 일반론과 반복 문장을 줄이고 체온·컨디션·접종 부위 확인 기준을 분리함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20002r8t6aeiz9v80",
    "contentId": "cmqnsj0om009yjot68dl9xmrb",
    "path": "/qna/health/atopic-suspect",
    "title": "아토피처럼 보이는 피부는 언제 진료를 받아야 하나요?",
    "question": "아토피처럼 보이는 피부는 언제 진료를 받아야 하나요?",
    "summary": "아기 피부가 거칠고 빨갛게 올라오면 단순 건조인지, 아토피 피부염처럼 관리가 필요한 상태인지 걱정될 수 있어요. 가려움 때문에 잠을 설치는지, 진물이 나는지, 보습 후에도 반복되는지를 중심으로 확인해보세요.",
    "metaTitle": "아토피처럼 보이는 아기 피부, 진료가 필요한 신호 | MomTools",
    "metaDescription": "아기 피부가 거칠고 가려워 보일 때 건조와 아토피 의심 상황을 구분하는 체크포인트, 보습 관리, 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/atopic-suspect",
    "keywords": [
      "아기 아토피",
      "아기 피부 가려움",
      "아기 피부 건조",
      "아토피 진료 시기",
      "아기 습진"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "건조함과 아토피 의심을 나눠 보기",
        "items": [
          "피부가 거칠다고 모두 아토피라고 보기는 어려워요. 하지만 같은 부위가 자주 빨개지고, 아이가 긁거나 비비며, 보습을 해도 금방 다시 심해진다면 진료 상담을 고려할 수 있습니다.",
          "볼, 팔꿈치 안쪽, 무릎 뒤, 목처럼 접히는 부위에 반복되는지 봐주세요. 부위와 반복 양상이 피부 상태를 설명하는 데 도움이 됩니다.",
          "가려움 때문에 잠을 자주 깨거나 피가 날 정도로 긁는다면 단순 건조보다 적극적인 관리가 필요할 수 있어요.",
          "진물, 노란 딱지, 심한 열감이 보이면 피부가 자극을 넘어 감염처럼 보이는 변화가 있는지 확인해야 합니다.",
          "새로 바꾼 세제, 섬유유연제, 목욕 제품, 이유식 재료가 있었다면 시기와 피부 변화를 함께 적어두세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "사진으로 남겨두면 좋은 것",
        "items": [
          "피부가 심한 날과 괜찮은 날의 사진",
          "보습제를 바른 직후와 몇 시간 뒤 변화",
          "가려움 때문에 깨는지, 긁는 부위가 정해져 있는지",
          "새로 먹은 음식이나 바꾼 생활용품",
          "진물, 딱지, 갈라짐, 피가 나는 부위"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 관리할 때의 기준",
        "items": [
          "목욕은 길게 하기보다 짧게 끝내고, 씻은 뒤에는 피부가 마르기 전에 보습제를 충분히 발라주세요.",
          "긁어서 상처가 생기지 않도록 손톱을 짧게 정리하고, 밤에는 옷감 자극이 적은 옷을 입혀보세요.",
          "피부가 좋아졌다 나빠지는 패턴을 3~7일 정도 기록하면 상담 때 설명하기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료를 미루지 않는 게 좋은 경우",
        "body": "진물이 나거나 노란 딱지가 생기고, 아이가 가려움 때문에 잠을 못 자거나, 피부가 빠르게 번지고, 발열이나 심한 보챔이 함께 있으면 소아청소년과나 피부 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "피부 변화가 열이나 감염 의심 신호와 함께 보이면 아기 열 대처 가이드도 같이 확인해보세요.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ],
    "editorMemo": "batch-001: 잘못 연결된 설사 문맥을 제거하고 아토피·건조 피부 확인 기준으로 전면 재작성함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20003r8t6ri4rfbah",
    "contentId": "cmqnsjfae03sjjot61gawqqw2",
    "path": "/qna/health/baby-after-discharge-check",
    "title": "진료 후 집에 와서 어떤 변화를 계속 봐야 하나요?",
    "question": "진료 후 집에 와서 어떤 변화를 계속 봐야 하나요?",
    "summary": "병원 진료를 받고 집에 돌아와도 부모는 ‘이제 괜찮은 걸까, 다시 가야 하는 걸까’가 계속 신경 쓰일 수 있어요. 진료 직후에는 증상 이름보다 먹는 양, 열 변화, 호흡, 소변, 아이 반응이 이전보다 나아지는지 보는 것이 중요합니다.",
    "metaTitle": "진료 후 집에서 봐야 할 아기 변화 체크리스트 | MomTools",
    "metaDescription": "아기 진료 후 집에서 체온, 먹는 양, 호흡, 소변, 처짐을 어떻게 기록하고 어떤 신호가 있으면 다시 상담해야 하는지 정리했습니다.",
    "canonicalPath": "/qna/health/baby-after-discharge-check",
    "keywords": [
      "진료 후 아기 상태",
      "아기 병원 다녀온 후",
      "아기 증상 관찰",
      "소아과 재진 기준",
      "아기 컨디션 체크"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "집에 온 뒤에는 ‘좋아지는 흐름’이 있는지 보세요",
        "items": [
          "진료를 받고 왔다고 해서 그날 바로 모든 증상이 사라지지는 않을 수 있어요. 대신 시간이 지나며 아이가 조금씩 먹고, 반응하고, 잠드는 흐름이 생기는지 확인해보세요.",
          "체온은 숫자만 따로 보지 말고 해열 후 아이가 편해졌는지, 다시 열이 오르는 간격이 짧아지는지 함께 봐야 합니다.",
          "기침이나 콧물로 진료를 받았다면 숨쉬기 힘들어 보이는지, 수유 중 자주 멈추는지, 잠잘 때 호흡이 거칠어지는지를 살펴보세요.",
          "복통이나 설사로 진료를 받았다면 마지막 소변 시간, 입안 건조함, 반복 구토나 혈변 여부를 같이 확인하세요.",
          "처방받은 약이 있다면 안내받은 방법대로만 사용하고, 증상이 남아 있다고 임의로 약을 추가하거나 중단하지 않는 것이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "진료 후 24시간 기록하면 좋은 항목",
        "items": [
          "체온 변화와 해열제 사용 시간",
          "먹은 양, 수유 횟수, 물을 마신 정도",
          "소변 기저귀 횟수와 마지막 소변 시간",
          "잠에서 깨웠을 때 반응과 울음의 힘",
          "호흡이 힘들어 보이는 장면이 있었는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "다시 문의할 때 도움이 되는 준비",
        "items": [
          "처방전이나 약 봉투를 바로 볼 수 있게 보관해두세요.",
          "열 그래프처럼 복잡하게 적기보다 시간, 체온, 먹은 양, 소변 여부만 짧게 남겨도 충분합니다.",
          "기침 소리, 발진, 이상한 움직임처럼 말로 설명하기 어려운 증상은 짧은 영상이나 사진이 도움이 될 수 있습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "다시 진료 상담이 필요한 신호",
        "body": "아이를 깨우기 어렵거나, 숨쉬기 힘들어 보이거나, 반복 구토·혈변·소변 감소가 있거나, 보호자가 보기에 진료 전보다 더 나빠졌다는 느낌이 강하면 다시 소아청소년과에 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "진료 후에도 열이 이어진다면 아기 열 대처 가이드에서 월령별 확인 기준을 함께 살펴보세요.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
      }
    ],
    "editorMemo": "batch-001: 진료 후 관찰 주제로 재작성. 기존 설사 가이드 오연결 문맥 제거.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20004r8t672yidxoi",
    "contentId": "cmqnsj6w801rxjot61ehadp13",
    "path": "/qna/health/baby-allergy-cough-at-home",
    "title": "집에만 오면 기침이 심해지면 알레르기 가능성이 있나요?",
    "question": "집에만 오면 기침이 심해지면 알레르기 가능성이 있나요?",
    "summary": "밖에서는 괜찮은데 집에 들어오면 아이 기침이 심해진다면 먼지, 건조함, 반려동물, 침구, 곰팡이 같은 실내 자극을 떠올릴 수 있어요. 다만 알레르기로 단정하기보다 기침이 심해지는 시간대와 호흡 신호를 함께 봐야 합니다.",
    "metaTitle": "집에서만 심해지는 아기 기침, 알레르기일까요? | MomTools",
    "metaDescription": "집에 오면 기침이 심해지는 아이에게서 실내 자극, 알레르기 가능성, 호흡 위험 신호, 집에서 확인할 기록을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-allergy-cough-at-home",
    "keywords": [
      "집에서 기침",
      "아기 알레르기 기침",
      "실내 먼지 기침",
      "아기 밤 기침",
      "아기 호흡 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "알레르기보다 먼저 ‘언제 심해지는지’를 보세요",
        "items": [
          "집에만 오면 기침이 심해지는 것처럼 보여도 원인은 하나로 단정하기 어려워요. 실내 먼지, 건조한 공기, 침구, 반려동물, 곰팡이, 향이 강한 제품, 감기 후 잔기침이 겹칠 수 있습니다.",
          "기침이 현관에 들어오자마자 심해지는지, 잠자리에 누우면 심해지는지, 특정 방에서만 심한지 나눠서 보면 원인을 좁히기 쉽습니다.",
          "알레르기 가능성을 보려면 기침과 함께 재채기, 맑은 콧물, 눈 비빔, 피부 가려움이 반복되는지도 살펴보세요.",
          "반대로 쌕쌕거림, 숨참, 갈비뼈 사이가 들어가는 호흡이 보이면 환경 관리보다 진료 상담이 우선입니다.",
          "청소를 한 날, 침구를 바꾼 날, 가습기를 사용한 날처럼 환경 변화와 기침 변화를 같이 기록해두면 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집 안에서 비교해볼 것",
        "items": [
          "기침이 심해지는 방, 시간대, 자세",
          "침구 세탁 후와 전의 차이",
          "반려동물, 카펫, 커튼, 곰팡이 흔적",
          "실내가 건조하거나 향이 강한 제품을 쓴 날",
          "콧물, 눈 비빔, 피부 가려움 동반 여부"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 수 있는 환경 점검",
        "items": [
          "침구와 아이가 자주 안는 인형을 세탁하고, 먼지가 많은 물건은 잠자리 주변에서 잠시 치워보세요.",
          "가습기를 쓴다면 물통과 필터 상태를 확인하고, 방이 너무 습해지지 않게 관리하세요.",
          "기침 소리나 숨소리가 평소와 다르면 짧은 영상으로 남겨두세요. 말보다 정확히 전달될 때가 많습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "기침보다 호흡이 먼저인 경우",
        "body": "쌕쌕거림, 숨가쁨, 갈비뼈 사이가 들어가는 호흡, 입술색 변화, 수유량 급감, 반복 구토를 동반한 기침이 있으면 알레르기 여부를 집에서 판단하기보다 소아청소년과에 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "기침이 환경에 따라 달라지는지 보면서도 호흡 신호는 놓치지 않는 것이 중요해요. 기침·호흡 확인 가이드도 함께 확인해보세요.",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ]
      }
    ],
    "editorMemo": "batch-001: 실내 환경성 기침 주제로 고유 정보와 기록 기준을 추가함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20005r8t6vb0fv6rf",
    "contentId": "cmqnsjf0203q3jot6x66e1eau",
    "path": "/qna/health/baby-antibiotic-diarrhea",
    "title": "항생제 복용 중 설사하면 약을 중단해야 하나요?",
    "question": "항생제 복용 중 설사하면 약을 중단해야 하나요?",
    "summary": "항생제를 먹는 중 아이가 설사를 하면 약 때문인지, 장염이 겹친 건지 걱정될 수 있어요. 설사가 있다고 보호자가 임의로 약을 끊기보다 변 상태, 소변량, 열·구토 동반 여부를 확인하고 처방한 병원이나 약국에 문의하는 편이 안전합니다.",
    "metaTitle": "항생제 먹는 중 아기 설사, 약을 끊어야 할까요? | MomTools",
    "metaDescription": "항생제 복용 중 설사할 때 임의 중단을 피해야 하는 이유, 탈수 체크포인트, 병원·약국에 문의할 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-antibiotic-diarrhea",
    "keywords": [
      "항생제 설사",
      "아기 항생제 설사",
      "항생제 중단",
      "아기 설사 탈수",
      "항생제 복용 중 변"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "약을 바로 끊기보다 먼저 문의할 기준을 보세요",
        "items": [
          "항생제를 먹는 중 설사가 생기면 부모 입장에서는 약을 계속 먹여도 되는지 바로 불안해져요. 하지만 처방받은 항생제는 임의로 중단하면 치료 흐름에 영향을 줄 수 있어, 먼저 처방한 병원이나 약국에 확인하는 것이 좋습니다.",
          "설사가 약과 관련이 있을 수도 있지만 장염, 새로 먹은 음식, 감기와 함께 온 위장 증상처럼 다른 이유가 겹칠 수도 있습니다.",
          "가장 먼저 볼 것은 탈수 신호예요. 마지막 소변 시간, 입안이 마른지, 눈물이 줄었는지, 아이가 축 처지는지를 확인하세요.",
          "혈변, 검은 변, 반복 구토, 고열이 함께 있으면 단순한 묽은 변으로 넘기지 않는 편이 안전합니다.",
          "약 이름, 복용 시작일, 설사가 시작된 시간, 변 사진, 먹은 양을 정리해두면 문의할 때 훨씬 정확하게 설명할 수 있습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "병원이나 약국에 물어볼 때 준비할 것",
        "items": [
          "항생제 이름과 하루 복용 횟수",
          "설사가 시작된 날짜와 하루 횟수",
          "피, 점액, 심한 악취처럼 평소와 다른 변 변화",
          "열, 구토, 복통, 처짐 동반 여부",
          "마지막 소변 시간과 수분 섭취 정도"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 할 수 있는 일",
        "items": [
          "먹을 수 있는 만큼 수유나 수분 섭취를 이어가고, 억지로 많이 먹이려고 하기보다 자주 조금씩 시도하세요.",
          "기저귀 사진을 남겨두면 혈변이나 점액 여부를 설명할 때 도움이 됩니다.",
          "항생제와 함께 다른 감기약, 해열제, 유산균 등을 먹이고 있다면 함께 복용 중인 제품을 모두 적어두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담이 필요한 신호",
        "body": "혈변, 반복 구토, 소변 감소, 심한 처짐, 고열, 입안 건조와 눈물 감소가 보이면 약을 임의로 조절하기보다 처방한 의료기관이나 소아청소년과에 바로 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "설사에서는 횟수보다 탈수 신호가 더 중요할 때가 많아요. 아기 설사 확인 가이드에서 소변량과 컨디션 기준도 같이 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ],
    "editorMemo": "batch-001: 항생제 관련 임의 중단 위험을 줄이고 병원·약국 문의 기준 중심으로 재작성함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20006r8t62353q50h",
    "contentId": "cmqnsjetx03oojot6dhw0tkq6",
    "path": "/qna/health/baby-arm-not-moving-after-pull",
    "title": "팔을 잡아당긴 뒤 팔을 안 쓰면 탈구일 수 있나요?",
    "question": "팔을 잡아당긴 뒤 팔을 안 쓰면 탈구일 수 있나요?",
    "summary": "아이 손이나 팔을 잡아당긴 뒤 갑자기 팔을 안 쓰고 축 늘어뜨리면 보호자는 탈구가 아닐까 걱정하게 됩니다. 통증이 심해 보이지 않아도 한쪽 팔을 계속 안 쓰면 집에서 맞춰보려 하지 말고 진료를 받아 확인하는 편이 안전합니다.",
    "metaTitle": "아이 팔을 잡아당긴 뒤 팔을 안 써요, 탈구일까요? | MomTools",
    "metaDescription": "팔을 잡아당긴 뒤 아이가 한쪽 팔을 안 쓸 때 볼 신호, 집에서 하지 말아야 할 행동, 진료가 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-arm-not-moving-after-pull",
    "keywords": [
      "아이 팔 안 씀",
      "아기 팔 잡아당김",
      "팔 빠짐 의심",
      "아이 팔 통증",
      "소아 팔 탈구"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "계속 한쪽 팔을 안 쓰면 확인이 필요해요",
        "items": [
          "아이 팔을 잡아당긴 뒤 갑자기 한쪽 팔을 아래로 늘어뜨리거나 장난감을 잡지 않으려 하면 보호자는 많이 놀랄 수 있어요. 겉으로 크게 붓지 않아도 팔꿈치 주변 문제가 있을 수 있습니다.",
          "아이가 울음을 그쳤더라도 팔을 들지 않거나 손을 쓰지 않으려 한다면 ‘괜찮아졌나 보다’로 넘기지 않는 편이 안전합니다.",
          "집에서 팔을 돌리거나 맞춰보려고 하면 더 아플 수 있어요. 억지로 움직이기보다 현재 자세 그대로 편하게 두고 진료를 받는 것이 좋습니다.",
          "넘어짐, 부딪힘, 붓기, 멍, 손가락 색 변화가 함께 있으면 단순한 팔 빠짐보다 다른 손상 가능성도 확인해야 합니다.",
          "언제, 어떤 방향으로 팔이 당겨졌는지 기억해두면 진료 때 설명하는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "진료 전 확인할 것",
        "items": [
          "어느 팔을 안 쓰는지, 손가락은 움직이는지",
          "장난감이나 과자를 잡으려 하는지",
          "팔꿈치, 손목, 어깨 주변에 붓기나 멍이 있는지",
          "넘어지거나 부딪힌 일이 함께 있었는지",
          "팔을 움직일 때만 우는지, 가만히 있어도 아파하는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 하지 않는 게 좋은 행동",
        "items": [
          "팔을 잡아당겨 펴거나 돌려 맞춰보려 하지 마세요.",
          "아픈 팔을 억지로 쓰게 하며 확인하지 말고, 아이가 편한 자세를 유지하게 해주세요.",
          "가능하면 당시 상황을 간단히 메모해두고, 붓기나 멍이 보이면 사진으로 남겨두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 진료를 권하는 경우",
        "body": "팔을 잡아당긴 뒤 아이가 한쪽 팔을 계속 쓰지 않거나, 붓기·멍·변형이 보이거나, 손가락 색이 창백하거나 차갑게 느껴지면 집에서 기다리기보다 진료를 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "다친 뒤 아이 상태를 볼 때는 통증 표현보다 행동 변화가 더 잘 보일 때가 있어요. 진료 후 관찰 기준도 함께 확인해보세요.",
        "items": [
          "진료 후 집에서 볼 변화",
          "/qna/health/baby-after-discharge-check"
        ]
      }
    ],
    "editorMemo": "batch-001: 팔 빠짐 의심 상황에 맞게 집에서 하지 말아야 할 행동과 진료 기준을 구체화함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20007r8t6tn5btpws",
    "contentId": "cmqnsjg2x03zejot6793dl358",
    "path": "/qna/health/baby-back-arching-after-feeding",
    "title": "수유 후 몸을 뒤로 젖히는 아기는 역류 때문일까요?",
    "question": "수유 후 몸을 뒤로 젖히는 아기는 역류 때문일까요?",
    "summary": "수유 뒤 아기가 몸을 뒤로 젖히고 보채면 역류 때문인지, 젖병 속도나 코막힘 때문에 불편한 건지 헷갈릴 수 있어요. 한 번의 행동보다 수유량, 토하는 양상, 체중 증가, 소변 기저귀, 호흡 신호를 함께 보는 것이 좋습니다.",
    "metaTitle": "수유 후 몸을 뒤로 젖히는 아기, 역류 때문일까요? | MomTools",
    "metaDescription": "수유 후 몸을 젖히는 아기에게서 역류, 젖병 속도, 코막힘, 수유 거부를 나눠 보고 진료가 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-back-arching-after-feeding",
    "keywords": [
      "수유 후 몸 젖힘",
      "아기 역류",
      "수유 거부",
      "아기 토함",
      "아기 수유량"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "역류 하나로만 보지 말고 수유 장면을 나눠 보세요",
        "items": [
          "수유 후 몸을 뒤로 젖히는 모습은 역류가 있을 때도 보일 수 있지만, 젖병 흐름이 빠르거나 코가 막혀 숨쉬기 불편하거나 배에 가스가 찼을 때도 나타날 수 있어요.",
          "젖을 물자마자 힘들어하는지, 먹는 중간에 젖히는지, 먹고 난 뒤 눕힐 때 심한지 시간대를 나눠보세요.",
          "토하더라도 아이가 잘 먹고, 소변이 평소처럼 나오고, 체중 증가가 유지된다면 급하게 판단하기보다 패턴을 기록해볼 수 있습니다.",
          "반대로 먹는 양이 눈에 띄게 줄고, 반복적으로 뿜듯이 토하거나, 숨이 차 보이거나, 체중 증가가 걱정된다면 상담이 필요합니다.",
          "수유 자세, 젖병 꼭지 단계, 트림 여부, 수유 후 바로 눕는지 같은 생활 요소도 함께 보세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "수유 장면에서 볼 포인트",
        "items": [
          "젖을 물기 전부터 보채는지, 먹는 중간에 젖히는지",
          "토하는 양이 조금 흘러나오는 정도인지, 반복적으로 뿜는지",
          "코막힘, 기침, 열, 입안 통증처럼 다른 불편이 있는지",
          "소변 기저귀가 평소처럼 나오는지",
          "수유 후 안아주면 편해지는지, 누우면 심해지는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 수유 때 바꿔볼 수 있는 것",
        "items": [
          "수유 중간에 잠깐 쉬며 트림할 시간을 주세요.",
          "젖병을 쓴다면 꼭지 단계가 너무 빠르지 않은지 확인해보세요.",
          "수유 후 바로 눕히기보다 잠시 세워 안고 반응을 살펴보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담이 필요한 신호",
        "body": "반복적으로 뿜듯이 토하거나, 초록색 구토가 보이거나, 수유량과 소변량이 줄고 축 처지거나, 숨쉬기 힘들어 보이는 모습이 있으면 역류로 단정하지 말고 소아청소년과에 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "수유량이 충분한지 판단이 어렵다면 아기 개월수와 기저귀 변화를 함께 확인해보세요.",
        "items": [
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
      }
    ],
    "editorMemo": "batch-001: 역류·수유 흐름·젖병 속도·코막힘을 구분하는 사용자 관점으로 재작성함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20008r8t6cbneuox2",
    "contentId": "cmqnsj6hz01oijot6tn0x798d",
    "path": "/qna/health/baby-bad-breath",
    "title": "아기 입 냄새가 심하면 어디를 먼저 봐야 하나요?",
    "question": "아기 입 냄새가 심하면 어디를 먼저 봐야 하나요?",
    "summary": "아기 입 냄새가 평소보다 심해지면 양치가 부족한 건지, 코막힘이나 입안 염증 때문인지 걱정될 수 있어요. 냄새 자체보다 입안 상태, 코로 숨 쉬는지, 열이나 침 흘림, 먹는 양 변화를 함께 확인해보세요.",
    "metaTitle": "아기 입 냄새가 심할 때 먼저 볼 곳 | MomTools",
    "metaDescription": "아기 입 냄새가 심할 때 입안 염증, 코막힘, 입마름, 먹는 양 변화와 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-bad-breath",
    "keywords": [
      "아기 입 냄새",
      "아이 구취",
      "아기 입안 염증",
      "아기 코막힘 입냄새",
      "아기 구내염"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "입안, 코막힘, 수분 상태를 함께 보세요",
        "items": [
          "아기 입 냄새는 양치 문제만으로 생기지 않을 수 있어요. 코가 막혀 입으로 숨을 쉬거나, 입안이 건조하거나, 입안에 헐거나 하얗게 낀 부위가 있을 때도 냄새가 강해질 수 있습니다.",
          "먼저 혀, 잇몸, 볼 안쪽에 하얀 막이나 헐어 보이는 부위가 있는지 부드럽게 확인해보세요. 아이가 아파서 입을 못 벌리면 억지로 보려고 하지 않아도 됩니다.",
          "콧물이 오래가거나 밤에 입을 벌리고 자는지 살펴보세요. 입마름이 심하면 아침이나 낮잠 후 냄새가 더 강하게 느껴질 수 있습니다.",
          "입 냄새와 함께 열, 침 흘림 증가, 먹는 양 감소, 심한 보챔이 있으면 단순 구취보다 입안 통증이나 감염 가능성을 확인해야 합니다.",
          "새로 시작한 음식, 약, 수분 섭취 감소도 냄새 변화와 관련될 수 있어요. 언제부터 심해졌는지 같이 적어두면 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "먼저 확인할 부위",
        "items": [
          "혀와 잇몸에 하얀 막, 궤양, 피가 나는 부위가 있는지",
          "코막힘 때문에 입으로 숨 쉬는지",
          "물을 마시는 양이나 수유량이 줄었는지",
          "열, 침 흘림, 삼키기 불편해하는 모습이 있는지",
          "아침뿐 아니라 낮에도 냄새가 계속 심한지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 수 있는 관리",
        "items": [
          "월령에 맞는 방법으로 입안을 부드럽게 닦고, 억지로 세게 문지르지 마세요.",
          "코막힘이 있다면 실내 습도와 코 주변 청결을 먼저 챙겨보세요.",
          "냄새가 심한 시간대와 함께 먹은 음식, 수분 섭취, 코막힘 여부를 간단히 적어두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담이 필요한 신호",
        "body": "입 냄새와 함께 고열, 입안 궤양, 심한 침 흘림, 먹거나 마시기 어려워하는 모습, 탈수 의심 신호가 있으면 구취만의 문제로 보지 말고 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "입 냄새가 수유량 감소나 탈수 신호와 함께 보이면 아기 설사 확인 가이드의 수분 상태 체크 기준도 도움이 될 수 있어요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea"
        ]
      }
    ],
    "editorMemo": "batch-001: 눈곱 가이드 오연결을 제거하고 입 냄새 원인 확인 기준으로 전면 재작성함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp20009r8t682adjft8",
    "contentId": "cmqnsjctl037ajot6xly9hsrl",
    "path": "/qna/health/baby-bad-breath-morning",
    "title": "아침 입 냄새가 심한 아이는 무엇을 확인하나요?",
    "question": "아침 입 냄새가 심한 아이는 무엇을 확인하나요?",
    "summary": "아침에만 아이 입 냄새가 유독 심하다면 밤새 입이 마르는 상황부터 살펴보는 게 좋아요. 입을 벌리고 자는지, 코가 막혀 있는지, 자기 전 간식이나 양치 습관, 낮에도 냄새가 이어지는지를 함께 확인해보세요.",
    "metaTitle": "아침에 아이 입 냄새가 심할 때 확인할 것 | MomTools",
    "metaDescription": "아침 입 냄새가 심한 아이에게서 입마름, 코막힘, 양치 습관, 입안 통증, 진료 상담 신호를 부모 입장에서 정리했습니다.",
    "canonicalPath": "/qna/health/baby-bad-breath-morning",
    "keywords": [
      "아침 입 냄새",
      "아이 구취",
      "입 벌리고 자는 아이",
      "아이 코막힘",
      "아이 양치 습관"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "아침에만 심한지, 낮에도 이어지는지 나눠 보세요",
        "items": [
          "아침 입 냄새는 밤사이 침 분비가 줄고 입안이 마르면서 더 강하게 느껴질 수 있어요. 특히 코가 막혀 입을 벌리고 자는 아이에게서 더 두드러질 수 있습니다.",
          "먼저 낮에도 냄새가 계속 심한지 확인해보세요. 아침에만 있다가 양치와 물 섭취 후 줄어든다면 생활 습관과 코막힘을 함께 봅니다.",
          "자기 전 우유나 간식을 먹고 바로 잠드는 습관, 양치가 대충 끝나는 습관도 아침 냄새를 강하게 만들 수 있어요.",
          "입안에 헐거나 아파하는 부위가 있는지, 잇몸이 붓거나 피가 나는지, 삼키기 힘들어하는지도 확인하세요.",
          "코골이, 입 벌림, 콧물, 목 통증이 반복되면 단순 구취보다 코·목 상태를 함께 상담해볼 수 있습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "아침 루틴에서 볼 포인트",
        "items": [
          "잠잘 때 입을 벌리고 자는지",
          "코막힘, 콧물, 코골이가 반복되는지",
          "자기 전 간식·우유 후 양치가 충분했는지",
          "아침 양치 후 냄새가 줄어드는지",
          "낮에도 냄새와 입안 통증이 이어지는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘부터 바꿔볼 습관",
        "items": [
          "자기 전 간식이나 우유를 먹었다면 월령에 맞는 방법으로 입안을 정리하고 재워보세요.",
          "아침에만 심한지 확인하려면 양치 전후 냄새 변화를 며칠만 비교해보세요.",
          "코막힘이 반복된다면 방의 건조함, 콧물 지속 기간, 잠잘 때 입 벌림을 함께 기록해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 고려할 신호",
        "body": "입 냄새가 낮에도 계속 심하고, 입안 통증·잇몸 출혈·고열·삼키기 어려움·먹는 양 감소가 함께 있으면 양치 문제로만 보지 말고 진료 상담을 받아보는 편이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "입 냄새가 코막힘이나 기침과 함께 반복된다면 기침·호흡 확인 가이드도 같이 보면 원인을 정리하는 데 도움이 됩니다.",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ]
      }
    ],
    "editorMemo": "batch-001: 아침 구취 주제로 재작성. 기존 눈곱 관련 잘못된 연결과 반복 문장 제거.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  },
  {
    "batchItemId": "cmqs71zp2000ar8t66x4km4xx",
    "contentId": "cmqnsj54x01cljot6ve3pmahv",
    "path": "/qna/health/baby-barking-cough",
    "title": "컹컹거리는 기침 소리가 나면 위험한가요?",
    "question": "컹컹거리는 기침 소리가 나면 위험한가요?",
    "summary": "아이 기침이 컹컹거리거나 개 짖는 소리처럼 들리면 부모는 밤새 호흡이 나빠질까 걱정하게 됩니다. 소리만으로 판단하기보다 숨을 들이쉴 때 거친 소리가 나는지, 가슴이 들어가는지, 수유나 잠이 가능한지를 먼저 확인하세요.",
    "metaTitle": "컹컹거리는 아기 기침, 위험 신호는 무엇일까요? | MomTools",
    "metaDescription": "컹컹거리는 기침이 날 때 소리보다 먼저 봐야 할 호흡 신호, 밤에 확인할 점, 진료가 필요한 상황을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-barking-cough",
    "keywords": [
      "컹컹거리는 기침",
      "아기 크룹 기침",
      "개 짖는 기침",
      "아기 호흡곤란",
      "아기 밤 기침"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "기침 소리보다 호흡이 편한지가 먼저예요",
        "items": [
          "컹컹거리는 기침은 부모가 듣기에 매우 놀랄 수 있어요. 특히 밤에 갑자기 심해지면 응급 상황인지 판단하기 어렵습니다.",
          "먼저 아이가 숨을 들이쉴 때 목에서 거친 소리가 나는지, 가슴이나 갈비뼈 사이가 들어가는지, 입술색이 평소와 다른지 확인하세요.",
          "소리가 거칠어도 아이가 편하게 숨 쉬고, 물이나 수유를 받아들이며, 잠깐씩이라도 안정된다면 기침이 심해지는 시간대를 기록해볼 수 있습니다.",
          "반대로 가만히 있어도 숨소리가 거칠고, 숨쉬기 힘들어 보이거나, 축 처지면 기침 소리의 원인을 집에서 판단하지 않는 편이 안전합니다.",
          "감기약이나 기침약을 임의로 먹이기보다 아이 나이와 증상에 맞는 상담을 먼저 확인하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "밤에 특히 확인할 신호",
        "items": [
          "숨을 들이쉴 때 목에서 거친 소리가 나는지",
          "갈비뼈 사이, 명치 아래가 들어가는지",
          "입술색이 창백하거나 푸르게 보이는지",
          "수유나 물 마시기를 힘들어하는지",
          "기침이 심해진 시간과 열 동반 여부"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "상담 전 정리하면 좋은 것",
        "items": [
          "기침 소리를 짧게 녹화해두면 진료 때 설명하기 쉽습니다.",
          "기침이 시작된 시간, 열, 콧물, 수유량, 소변 횟수를 함께 적어두세요.",
          "아이가 불안해하면 억지로 눕히기보다 편한 자세로 안정을 돕고 호흡 변화를 살펴보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 진료 상담이 필요한 신호",
        "body": "가만히 있어도 숨소리가 거칠거나, 갈비뼈 사이가 들어가거나, 입술색 변화·심한 처짐·수유량 급감이 있으면 컹컹거리는 기침을 집에서만 지켜보지 말고 즉시 의료진에게 문의하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "기침이 들릴 때는 소리보다 호흡 신호가 중요해요. 기침·호흡 확인 가이드에서 숨쉬기 힘든 신호를 함께 확인해보세요.",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough"
        ]
      }
    ],
    "editorMemo": "batch-001: 컹컹거리는 기침의 호흡 위험 신호 중심으로 재작성하고 기침약 단정 표현을 피함.",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "duplicateMemo": "batch-001에서 기존 반복 구조와 잘못 연결된 문맥을 제거하고 사용자 상황 중심으로 재작성함"
  }
] satisfies ContentUpdate[];

async function markBatchItem(prisma: any, batchItemId: string, contentId: string) {
  try {
    const columns = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
      `select column_name from information_schema.columns where table_schema = 'public' and table_name = 'ContentQualityBatchItem'`,
    );
    const columnSet = new Set(columns.map((row) => row.column_name));
    if (!columnSet.has("id")) return;

    const assignments: string[] = [];
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-001 사용자 관점 리라이팅 완료'`);
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
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedItems")) assignments.push(`"completedItems" = 10`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 1`,
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

  console.log("batch-001 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-001 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/after-vaccine-fever");
  console.log("- http://localhost:3000/qna/health/atopic-suspect");
  console.log("- http://localhost:3000/qna/health/baby-antibiotic-diarrhea");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-001 반영 실패");
  console.error(error);
  process.exit(1);
});
