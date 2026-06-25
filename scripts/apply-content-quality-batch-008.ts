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
    "batchItemId": "cmqs71zvs0026r8t69lwdmz1j",
    "contentId": "cmqnsjc2t030sjot6chbt5ryj",
    "path": "/qna/health/baby-eczema-behind-knees",
    "title": "무릎 뒤와 팔 접히는 곳 습진은 어떻게 관리하나요?",
    "question": "무릎 뒤와 팔 접히는 곳 습진은 어떻게 관리하나요?",
    "summary": "무릎 뒤, 팔 안쪽처럼 접히는 부위가 빨갛고 거칠어지면 땀·마찰 때문인지, 아토피처럼 반복되는 습진인지 헷갈릴 수 있어요. 접히는 부위는 쉽게 축축해지고 긁기 쉬우므로 보습, 옷 마찰, 진물·갈라짐 여부를 함께 확인하는 것이 좋습니다.",
    "metaTitle": "무릎 뒤·팔 접히는 곳 습진 관리 기준 | MomTools",
    "metaDescription": "아기 무릎 뒤와 팔 접히는 곳 습진이 반복될 때 보습, 옷 마찰, 가려움, 진물 여부를 확인하는 방법과 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-eczema-behind-knees",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 접히는 부위 습진을 침독/기저귀 발진 문맥이 아닌 땀·마찰·보습·가려움 기준으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 접히는 부위 습진",
      "무릎 뒤 습진",
      "팔 접히는 곳 아토피",
      "아기 피부 가려움",
      "아기 보습 관리",
      "아기 습진 진물",
      "아기 아토피 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "접히는 부위는 땀과 마찰을 같이 봐야 해요",
        "items": [
          "무릎 뒤와 팔 안쪽은 살이 접히고 옷이 닿는 부위라 땀, 건조, 마찰이 겹치기 쉽습니다. 그래서 다른 부위보다 빨갛고 거칠어 보일 수 있어요.",
          "먼저 발진이 접히는 자리 위주인지, 얼굴이나 몸통처럼 다른 부위까지 반복되는지 나눠보세요. 같은 자리에 자주 생기고 가려워한다면 단순 건조보다 습진 관리가 필요할 수 있습니다.",
          "목욕은 너무 길게 하지 말고, 씻긴 뒤 피부가 마르기 전에 보습제를 충분히 발라 접히는 부위가 갈라지지 않게 해주세요.",
          "두꺼운 옷이나 까슬한 소재가 닿으면 긁음이 심해질 수 있습니다. 땀이 찼을 때는 문질러 닦기보다 부드럽게 말리고 옷을 갈아입히는 편이 좋아요.",
          "진물, 노란 딱지, 피가 날 정도의 긁음, 잠을 깰 정도의 가려움이 있으면 집 관리만 반복하지 말고 진료 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "접히는 부위에서 확인할 것",
        "items": [
          "발진이 무릎 뒤·팔 안쪽처럼 접히는 자리에 반복되는지 보기",
          "피부가 건조한지, 축축한지, 진물이 나는지 구분하기",
          "긁어서 피가 나거나 잠을 깨는지 확인하기",
          "땀, 옷 소재, 세제, 보습제 변경 시점을 함께 적어두기",
          "얼굴·목·몸통 등 다른 부위로 번지는지 사진으로 비교하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 관리",
        "items": [
          "목욕 후 바로 보습제를 바르고, 접히는 부위는 땀이 차지 않게 부드럽게 말려주세요.",
          "몸에 붙는 옷이나 까슬한 소재는 잠시 피하고, 면 소재처럼 부드러운 옷으로 바꿔보세요.",
          "좋아지는지 확인하려면 같은 조명에서 하루 한 번 사진을 남겨 붉은 범위와 진물 여부를 비교해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "피부 진료 상담이 필요한 신호",
        "body": "진물, 노란 딱지, 물집, 피가 날 정도의 긁음, 열이 동반되는 발진, 잠을 깰 만큼 심한 가려움이 있거나 보습을 해도 며칠 사이 악화되면 소아청소년과나 피부 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ],
        "body": "접히는 부위 습진이 반복된다면 아기 발진·두드러기 확인 가이드에서 발진 모양과 번지는 양상을 함께 비교해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs0027r8t6sucktqah",
    "contentId": "cmqnsj5vi01j3jot6bhp44eyd",
    "path": "/qna/health/baby-eczema-scratching",
    "title": "가려워서 계속 긁는 피부는 어떻게 관리하나요?",
    "question": "가려워서 계속 긁는 피부는 어떻게 관리하나요?",
    "summary": "아이가 같은 부위를 계속 긁으면 피부가 더 헐고 잠까지 방해될 수 있어요. 먼저 어디를 언제 긁는지, 보습 후에도 계속 가려워하는지, 진물이나 피가 나는지 확인해보세요. 긁음이 반복될수록 단순 건조보다 습진·자극 요인을 같이 봐야 합니다.",
    "metaTitle": "아기가 피부를 계속 긁을 때 관리 기준 | MomTools",
    "metaDescription": "아기가 가려워서 피부를 계속 긁을 때 보습, 손톱 관리, 자극 요인 확인, 진료 상담이 필요한 피부 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-eczema-scratching",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 가려움 피부를 발진 일반론이 아닌 긁음-피부 손상-수면 영향 기준으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 피부 가려움",
      "아기 긁음",
      "아기 습진 가려움",
      "아기 피부 보습",
      "아기 아토피 의심",
      "아기 손톱 관리",
      "가려워서 잠 못 자는 아이"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "긁는 행동은 피부 상태와 수면을 같이 봐요",
        "items": [
          "피부가 가려우면 아이는 말로 설명하기보다 계속 비비거나 긁는 행동으로 표현합니다. 특히 밤에 심해지면 잠을 자주 깨고 피부가 더 손상될 수 있어요.",
          "먼저 어느 부위를 주로 긁는지 보세요. 볼, 목, 팔 안쪽, 무릎 뒤처럼 반복되는 부위가 있으면 건조와 마찰, 습진 가능성을 함께 봐야 합니다.",
          "보습제를 바른 뒤에도 계속 긁는지, 피부가 갈라지거나 피가 묻는지, 진물이 생기는지 확인해보세요. 긁음 때문에 상처가 나면 감염 위험도 커질 수 있습니다.",
          "손톱은 짧고 부드럽게 정리하고, 잘 때 긁음이 심하면 면 소재 옷으로 피부 마찰을 줄여보세요.",
          "가려움이 며칠 이상 이어지거나 잠을 깰 정도라면 원인과 치료 방향을 확인하기 위해 진료 상담을 고려하는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "가려움에서 볼 체크포인트",
        "items": [
          "긁는 부위가 항상 같은지, 전신으로 번지는지 보기",
          "긁은 자리에 피, 진물, 노란 딱지가 생겼는지 확인하기",
          "밤잠을 깰 정도로 가려워하는지 살피기",
          "목욕 시간, 실내 습도, 보습 횟수, 옷 소재를 함께 점검하기",
          "새 음식·로션·세제·섬유유연제 변경 시점을 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바로 줄여볼 자극",
        "items": [
          "손톱을 짧게 다듬고, 긁은 부위는 세게 닦지 말고 보습제를 충분히 발라주세요.",
          "목욕은 미지근한 물로 짧게 하고, 씻긴 뒤 바로 보습하는 흐름으로 바꿔보세요.",
          "가려움이 심한 시간대와 악화되는 상황을 적어두면 진료 때 원인을 좁히는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "가려움이 심할 때 상담할 신호",
        "body": "피가 날 정도로 긁거나 진물·노란 딱지가 생기는 경우, 가려움 때문에 밤잠을 자주 깨는 경우, 발진이 넓게 번지거나 열이 함께 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ],
        "body": "가려움과 발진이 반복된다면 아기 발진·두드러기 확인 가이드에서 피부 변화와 동반 증상을 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs0028r8t6f0hxeeln",
    "contentId": "cmqnsjf8b03s2jot64mkdk2cy",
    "path": "/qna/health/baby-emergency-night-signs",
    "title": "밤에 아이가 아플 때 응급실을 고민해야 하는 신호는 무엇인가요?",
    "question": "밤에 아이가 아플 때 응급실을 고민해야 하는 신호는 무엇인가요?",
    "summary": "밤에 아이가 갑자기 아프면 “아침까지 기다려도 될까?”가 가장 어렵습니다. 이때는 증상 이름보다 호흡, 의식과 반응, 반복 구토, 탈수 신호, 심한 통증처럼 기다리기 어려운 변화가 있는지 먼저 봐야 해요. 애매하면 전화 상담이나 응급 진료 기준을 확인하는 편이 안전합니다.",
    "metaTitle": "밤에 아이가 아플 때 응급실을 고민해야 하는 신호 | MomTools",
    "metaDescription": "밤에 아이가 아플 때 응급실을 갈지 고민될 때 호흡, 의식, 반복 구토, 탈수, 심한 통증 등 바로 확인할 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-emergency-night-signs",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 야간 응급실 고민을 일반 건강 체크가 아닌 즉시 확인해야 할 신호 중심으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아이 응급실 기준",
      "아기 밤에 아플 때",
      "아이 응급 신호",
      "아기 호흡곤란",
      "아이 반복 구토",
      "아기 탈수 신호",
      "소아 응급실 가야 할 때"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "밤에는 “기다릴 수 없는 변화”부터 보세요",
        "items": [
          "낮이었다면 바로 병원에 전화했을 증상도 밤에는 더 망설이게 됩니다. 하지만 몇 가지 신호는 시간대와 상관없이 먼저 확인해야 해요.",
          "숨이 가쁘거나 갈비뼈 사이가 들어가고, 입술이나 얼굴색이 푸르게 보이면 호흡 문제를 먼저 생각해야 합니다. 이때는 증상을 더 지켜보기보다 도움을 요청하는 편이 안전합니다.",
          "깨워도 반응이 약하거나 축 처지고, 평소와 다르게 멍해 보이거나 경련처럼 몸이 떨리는 경우도 바로 확인이 필요한 신호입니다.",
          "반복 구토, 심한 복통처럼 보이는 울음, 소변이 눈에 띄게 줄어든 탈수 의심, 머리 부딪힘 뒤 이상 행동도 아침까지 미루기 어렵습니다.",
          "애매할 때는 체온, 마지막 소변 시간, 먹은 양, 증상이 시작된 시간을 적어두고 지역 응급 상담이나 의료기관에 문의하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "밤에 먼저 확인할 5가지",
        "items": [
          "숨쉬는 모습: 빠른 호흡, 가슴이 쑥 들어감, 입술색 변화",
          "반응: 깨웠을 때 눈을 맞추는지, 평소처럼 울거나 움직이는지",
          "수분 상태: 마지막 소변 시간, 입안 마름, 눈물 감소",
          "반복 증상: 구토 반복, 심한 통증, 경련, 의식 변화",
          "사고 여부: 머리 부딪힘, 높은 곳에서 떨어짐, 삼킴 사고 가능성"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "응급실을 고민할 때 정리할 것",
        "items": [
          "체온, 증상 시작 시간, 마지막 소변, 먹은 양을 메모해두세요.",
          "호흡이 힘들거나 반응이 약하면 촬영이나 검색보다 도움 요청을 먼저 하세요.",
          "이동이 필요할 수 있으니 아이를 너무 두껍게 싸지 말고, 복용한 약 이름이나 사진을 함께 챙겨두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 도움을 요청해야 할 신호",
        "body": "숨쉬기 어려움, 입술·얼굴색 변화, 깨워도 반응이 약함, 경련, 반복 구토, 심한 처짐, 소변이 거의 없음, 머리 부딪힘 뒤 이상 행동이 있으면 밤이라도 응급 상담이나 진료를 우선하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "발열이나 호흡 증상이 함께 있다면 아기 열 대처 가이드와 호흡 관련 Q&A를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs0029r8t64nkqcjqp",
    "contentId": "cmqnsjcfa033sjot6dyc4vtvm",
    "path": "/qna/health/baby-eye-discharge-morning",
    "title": "아침마다 눈곱이 많이 끼면 결막염일까요?",
    "question": "아침마다 눈곱이 많이 끼면 결막염일까요?",
    "summary": "아침에 눈을 뜰 때 눈곱이 붙어 있으면 결막염부터 걱정되지만, 잠자는 동안 생긴 분비물이 말라붙은 경우도 있어요. 닦은 뒤 금방 다시 끼는지, 눈 흰자가 빨갛게 충혈되는지, 한쪽만 반복되는지, 아이가 눈을 아파하는지 함께 보면 진료가 필요한지 판단하기 쉽습니다.",
    "metaTitle": "아침마다 눈곱이 많을 때 결막염 확인 기준 | MomTools",
    "metaDescription": "아침마다 아기 눈곱이 많이 낄 때 결막염 의심 신호, 집에서 닦는 방법, 진료 상담이 필요한 눈 증상을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-eye-discharge-morning",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 아침 눈곱을 결막염 단정이 아닌 닦은 뒤 재발·충혈·통증·한쪽/양쪽 차이 기준으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 아침 눈곱",
      "아기 눈곱 결막염",
      "아이 눈 충혈",
      "아기 눈곱 닦는 법",
      "아기 눈 붓기",
      "한쪽 눈곱",
      "소아 눈 진료"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "닦은 뒤 다시 끼는지부터 보세요",
        "items": [
          "아침에만 눈곱이 붙어 있고 낮에는 깨끗하다면 잠자는 동안 분비물이 말라붙은 모습일 수 있어요. 하지만 닦아도 금방 다시 끼면 조금 더 살펴봐야 합니다.",
          "깨끗한 거즈나 티슈에 미지근한 물을 묻혀 눈 안쪽에서 바깥쪽으로 부드럽게 닦아보세요. 양쪽 눈을 닦을 때는 같은 면을 반복해서 쓰지 않는 것이 좋습니다.",
          "눈 흰자가 빨갛게 충혈되는지, 눈꺼풀이 붓는지, 노란 눈곱이 계속 나오는지, 아이가 눈을 비비거나 통증처럼 보채는지도 함께 확인하세요.",
          "한쪽 눈만 반복되면서 눈물이 고이거나 눈곱이 계속 생기면 눈물길 문제처럼 따로 확인이 필요한 경우도 있습니다.",
          "신생아나 어린 아기에게 눈이 빨갛고 끈적한 분비물이 많다면 집에서만 판단하지 말고 진료 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "아침 눈곱에서 볼 기준",
        "items": [
          "닦은 뒤 낮 동안 다시 끼는지 확인하기",
          "눈 흰자 충혈, 눈꺼풀 붓기, 눈 통증처럼 보이는 보챔 살피기",
          "한쪽만 반복되는지, 양쪽 모두인지 비교하기",
          "콧물·감기 증상이나 가족 결막염 노출이 있었는지 확인하기",
          "눈을 비비는 행동이 늘었는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 닦고 기록할 때",
        "items": [
          "손을 씻은 뒤 부드러운 거즈로 한 번 닦고, 몇 시간 뒤 다시 끼는지 보세요.",
          "눈곱 색과 양, 충혈 여부를 사진으로 남기면 변화 비교가 쉽습니다.",
          "수건을 가족과 같이 쓰지 말고, 아이가 눈을 비비면 손을 자주 씻겨주세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "눈 진료 상담이 필요한 경우",
        "body": "눈곱이 닦아도 계속 많이 끼거나, 눈 흰자가 빨갛고 눈꺼풀이 붓는 경우, 통증처럼 심하게 보채는 경우, 생후 1개월 미만 아기에게 끈적한 눈곱과 충혈이 보이면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "눈곱과 충혈이 함께 있다면 아이 건강 Q&A에서 눈 분비물, 눈 비빔, 한쪽 눈물 관련 질문을 이어서 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs002ar8t6bhuuw1de",
    "contentId": "cmqnsj5jb01g3jot61d2pda1p",
    "path": "/qna/health/baby-eye-discharge-yellow",
    "title": "눈곱이 노랗게 많이 끼면 진료를 봐야 하나요?",
    "question": "눈곱이 노랗게 많이 끼면 진료를 봐야 하나요?",
    "summary": "노란 눈곱이 계속 끼면 단순한 건조보다 감염성 결막염 같은 문제를 걱정하게 됩니다. 색만으로 단정할 수는 없지만, 닦아도 바로 다시 생기는지, 충혈·눈꺼풀 붓기·통증이 있는지, 한쪽에서 시작해 양쪽으로 번지는지 확인해보세요.",
    "metaTitle": "아기 노란 눈곱, 진료가 필요한 경우 | MomTools",
    "metaDescription": "아기 눈곱이 노랗고 많이 낄 때 결막염 의심 신호, 집에서 확인할 점, 진료 상담이 필요한 상황을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-eye-discharge-yellow",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 노란 눈곱을 색만으로 진단하지 않고 양·재발·충혈·붓기·통증 기준으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 노란 눈곱",
      "아이 결막염 의심",
      "눈곱 많이 낌",
      "아기 눈 충혈",
      "눈꺼풀 붓기",
      "아기 눈 분비물",
      "소아 안과 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "색보다 반복 양상과 충혈을 같이 보세요",
        "items": [
          "눈곱이 노랗고 끈적하게 많이 보이면 부모는 결막염을 가장 먼저 떠올리게 됩니다. 다만 눈곱 색 하나만으로 원인을 확정하기는 어렵습니다.",
          "먼저 깨끗하게 닦은 뒤 몇 시간 안에 다시 많이 끼는지 확인해보세요. 계속 반복되고 눈 흰자가 빨갛다면 진료 상담이 필요할 수 있습니다.",
          "눈꺼풀이 붓거나 아이가 눈을 뜨기 힘들어하고, 밝은 빛을 싫어하거나 통증처럼 심하게 보채는지도 살펴보세요.",
          "감기 증상과 함께 나타나는 눈 분비물도 있고, 가족이나 어린이집에서 결막염이 돌았던 경우도 단서가 됩니다.",
          "눈곱이 많을 때는 손과 수건을 통해 옮을 수 있으므로 닦는 도구를 따로 쓰고, 눈을 비비지 않게 손 위생을 챙겨주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "노란 눈곱에서 확인할 것",
        "items": [
          "닦아도 바로 다시 끼는지 보기",
          "눈 흰자 충혈과 눈꺼풀 붓기가 있는지 확인하기",
          "한쪽에서 시작했는지, 양쪽 모두인지 비교하기",
          "통증처럼 보채거나 눈을 잘 못 뜨는지 살피기",
          "가족·어린이집 결막염 노출이나 감기 증상이 있었는지 떠올리기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 조심할 점",
        "items": [
          "눈곱은 손을 씻은 뒤 깨끗한 거즈로 부드럽게 닦고, 같은 면을 양쪽 눈에 반복해서 쓰지 마세요.",
          "수건은 따로 쓰고, 아이가 눈을 비빈 뒤에는 손을 씻겨주세요.",
          "눈곱 사진과 다시 끼는 시간을 적어두면 진료 때 설명하기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료를 미루지 말아야 할 눈 증상",
        "body": "노란 눈곱이 계속 많이 끼고 충혈·눈꺼풀 붓기·통증처럼 보이는 보챔이 함께 있거나, 생후 1개월 미만 아기에게 끈적한 분비물이 보이면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "눈곱과 함께 눈을 비비거나 한쪽 눈물만 반복된다면 아이 건강 Q&A에서 눈 관련 질문을 이어서 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs002br8t6jbbndbsh",
    "contentId": "cmqnsjcb5032sjot68ja7i5pa",
    "path": "/qna/health/baby-eye-rub-often",
    "title": "눈을 자주 비비는 아기는 알레르기일 수 있나요?",
    "question": "눈을 자주 비비는 아기는 알레르기일 수 있나요?",
    "summary": "아기가 눈을 자주 비비면 졸린 건지, 눈에 자극이 있는 건지, 알레르기인지 헷갈릴 수 있어요. 눈 비빔이 언제 심한지, 충혈·눈물·콧물·재채기가 함께 있는지, 한쪽만 비비는지 확인하면 원인을 좁히는 데 도움이 됩니다.",
    "metaTitle": "아기가 눈을 자주 비빌 때 알레르기 확인 기준 | MomTools",
    "metaDescription": "아기가 눈을 자주 비빌 때 졸림, 건조, 이물감, 알레르기 가능성을 나누어 보고 진료 상담이 필요한 눈 증상을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-eye-rub-often",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 눈 비빔을 알레르기 단정이 아닌 졸림·건조·이물감·충혈·콧물 동반 여부로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 눈 비빔",
      "아기 눈 알레르기",
      "아이 눈 가려움",
      "아기 눈 충혈",
      "아기 눈물 많음",
      "눈을 자주 비비는 아이",
      "소아 알레르기 눈"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "눈 비빔이 나오는 상황을 먼저 나눠보세요",
        "items": [
          "아기가 눈을 비비는 모습은 졸릴 때도 흔하지만, 반복되면 눈이 가렵거나 불편한 신호일 수 있어요.",
          "잠들기 전이나 피곤할 때만 잠깐 비비는지, 하루 종일 반복되는지 먼저 보세요. 특정 시간대나 외출 뒤 심해진다면 먼지, 꽃가루, 건조한 공기 같은 자극도 생각해볼 수 있습니다.",
          "눈 흰자가 빨갛게 충혈되는지, 눈물이 많아지는지, 콧물·재채기·코막힘이 함께 있는지도 확인해보세요. 이런 증상이 같이 있으면 알레르기성 자극 가능성을 상담해볼 수 있습니다.",
          "한쪽 눈만 계속 비비거나 통증처럼 심하게 보채고 눈을 잘 못 뜬다면 이물감이나 상처 가능성도 있어 집에서만 판단하기 어렵습니다.",
          "눈을 자꾸 비벼 피부가 붓거나 충혈이 반복된다면 사진과 심해지는 상황을 기록해 진료 상담 때 보여주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "눈을 비빌 때 볼 것",
        "items": [
          "졸릴 때만 비비는지, 낮에도 반복되는지 확인하기",
          "충혈, 눈물, 눈꺼풀 붓기, 노란 눈곱이 있는지 보기",
          "콧물·재채기·코막힘처럼 알레르기 의심 증상이 함께 있는지 살피기",
          "한쪽만 계속 비비는지, 양쪽 모두인지 비교하기",
          "외출, 먼지, 반려동물, 침구 교체 뒤 심해지는지 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 관리",
        "items": [
          "아이 손을 자주 씻기고 손톱을 짧게 정리해 눈 주변 피부가 긁히지 않게 해주세요.",
          "먼지 많은 날이나 외출 뒤 심해지면 세안과 침구 관리, 실내 환기를 점검해보세요.",
          "눈을 세게 비비거나 충혈이 심하면 임의로 안약을 넣기보다 상담 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "눈 비빔으로 상담할 신호",
        "body": "한쪽 눈만 계속 비비거나 눈을 잘 못 뜨는 경우, 심한 충혈·눈꺼풀 붓기·노란 눈곱·통증처럼 보이는 보챔이 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "눈 비빔과 눈곱이 함께 있다면 아침 눈곱, 노란 눈곱, 한쪽 눈물 관련 Q&A도 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs002cr8t60ljfgmg1",
    "contentId": "cmqnsjcd9033ajot67ng3tu5a",
    "path": "/qna/health/baby-eye-tears-one-side",
    "title": "한쪽 눈물만 계속 나는 아기는 눈물길 문제일까요?",
    "question": "한쪽 눈물만 계속 나는 아기는 눈물길 문제일까요?",
    "summary": "아기 한쪽 눈에만 눈물이 고이거나 눈곱이 반복되면 눈물길이 막힌 건 아닌지 걱정될 수 있어요. 실제 원인은 눈물길, 감기, 자극, 결막염 등 다양하므로 한쪽만 반복되는지, 충혈·붓기·노란 눈곱이 있는지 함께 봐야 합니다.",
    "metaTitle": "아기 한쪽 눈물, 눈물길 문제인지 확인할 점 | MomTools",
    "metaDescription": "아기 한쪽 눈에만 눈물이 계속 고일 때 눈물길 문제 가능성, 눈곱·충혈 확인법, 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-eye-tears-one-side",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 한쪽 눈물 고임을 눈물길 단정이 아닌 반복 양상·충혈·눈곱·붓기 기준으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 한쪽 눈물",
      "아기 눈물길 막힘",
      "아기 눈곱 한쪽",
      "아기 눈물 고임",
      "눈물길 문제",
      "아기 눈 충혈",
      "소아 안과 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "한쪽만 반복되는지가 중요한 단서예요",
        "items": [
          "아기 눈에 눈물이 고이면 울지 않았는데도 눈이 젖어 보여 걱정될 수 있습니다. 특히 한쪽만 반복되면 눈물길 문제를 떠올리기 쉬워요.",
          "다만 한쪽 눈물만으로 원인을 단정할 수는 없습니다. 눈 흰자가 빨갛게 충혈되는지, 눈꺼풀이 붓는지, 노란 눈곱이 계속 끼는지 같이 봐야 합니다.",
          "생후 초기에는 눈물 배출이 아직 미숙해 눈물이 고이거나 눈곱이 반복되는 경우가 있지만, 분비물이 많고 붓거나 통증처럼 보채면 확인이 필요합니다.",
          "눈 주변을 닦을 때는 손을 씻고 깨끗한 거즈로 부드럽게 닦아주세요. 눈을 세게 누르거나 임의로 마사지하는 것은 안내받은 경우가 아니라면 피하는 편이 좋습니다.",
          "한쪽 눈물과 눈곱이 오래 반복되거나 충혈·붓기가 동반되면 소아청소년과나 안과 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "한쪽 눈물에서 확인할 것",
        "items": [
          "항상 같은 쪽 눈인지, 양쪽으로 번지는지 보기",
          "눈곱 색과 양, 닦은 뒤 다시 생기는 시간 확인하기",
          "눈 흰자 충혈과 눈꺼풀 붓기 여부 살피기",
          "감기 증상, 코막힘, 눈 비빔이 함께 있는지 보기",
          "생후 몇 개월부터 반복됐는지 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 조심할 관리",
        "items": [
          "눈물과 눈곱은 손을 씻은 뒤 깨끗한 거즈로 부드럽게 닦아주세요.",
          "한쪽만 반복되는 날짜와 사진을 남기면 진료 상담 때 흐름을 설명하기 쉽습니다.",
          "눈을 세게 누르거나 여러 안약을 임의로 쓰기보다, 반복 기간과 동반 증상을 기준으로 상담하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "눈물 고임으로 상담할 신호",
        "body": "한쪽 눈물과 노란 눈곱이 오래 반복되거나, 눈 흰자 충혈·눈꺼풀 붓기·통증처럼 보이는 보챔이 있으면 진료 상담을 권합니다. 생후 초기 아기에게 분비물이 많고 눈이 붓는 경우도 확인이 필요합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "한쪽 눈물과 눈곱이 함께 보인다면 아침 눈곱, 노란 눈곱 관련 Q&A를 이어서 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs002dr8t63k48go6z",
    "contentId": "cmqnsj6q501qgjot6ph2i7dri",
    "path": "/qna/health/baby-fall-and-vomit",
    "title": "머리를 부딪친 뒤 토하면 바로 병원에 가야 하나요?",
    "question": "머리를 부딪친 뒤 토하면 바로 병원에 가야 하나요?",
    "summary": "아이가 머리를 부딪친 뒤 토하면 단순히 놀라서 그런 건지, 머리 손상 신호인지 바로 걱정됩니다. 한 번 토하고 평소처럼 반응하는지, 반복해서 토하는지, 졸려 보이거나 깨우기 어려운지, 경련·보행 이상·심한 보챔이 있는지 확인해야 합니다.",
    "metaTitle": "머리 부딪친 뒤 토할 때 병원 상담 기준 | MomTools",
    "metaDescription": "아이가 머리를 부딪친 뒤 토했을 때 반복 구토, 의식 변화, 졸림, 경련 등 바로 확인해야 할 신호와 집에서 볼 점을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fall-and-vomit",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 머리 부딪힘 뒤 구토 페이지에 섞인 설사 문맥을 제거하고 외상 경고 신호 중심으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 머리 부딪힘 구토",
      "아이 머리 다친 뒤 토함",
      "아기 낙상 구토",
      "머리 부딪힘 병원",
      "아기 뇌진탕 의심",
      "아이 머리 혹",
      "소아 응급실 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "반복 구토와 반응 변화를 가장 먼저 보세요",
        "items": [
          "머리를 부딪친 뒤 아이가 토하면 부모는 바로 응급실을 떠올리게 됩니다. 이때는 구토가 한 번인지 반복되는지, 아이 반응이 평소와 같은지가 중요합니다.",
          "부딪힌 직후 크게 울었다가 금방 진정하고, 잘 먹고 눈을 맞추며 평소처럼 움직인다면 가까이서 지켜보며 변화를 확인할 수 있습니다.",
          "하지만 구토가 반복되거나 시간이 지나며 더 졸려 보이고, 깨우기 어렵거나 멍해 보이면 집에서만 지켜보기 어렵습니다.",
          "경련처럼 몸이 떨리거나, 걸음이 이상하거나, 머리 통증을 계속 호소하거나, 코나 귀에서 맑은 액체나 피가 보이는 경우도 바로 확인이 필요한 신호입니다.",
          "사고 시간, 떨어진 높이, 바닥 재질, 부딪힌 부위, 구토 횟수를 메모해두면 의료진에게 상황을 설명하기 쉽습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "머리 부딪힌 뒤 확인할 것",
        "items": [
          "구토가 한 번인지, 두 번 이상 반복되는지 확인하기",
          "깨웠을 때 눈을 맞추고 평소처럼 반응하는지 보기",
          "점점 졸려 하거나 깨우기 어려운지 살피기",
          "경련, 보행 이상, 심한 보챔, 의식 변화가 있는지 확인하기",
          "떨어진 높이, 바닥, 부딪힌 부위를 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "사고 후 집에서 할 일",
        "items": [
          "아이가 깨어 있고 반응이 괜찮더라도 몇 시간 동안 평소와 다른 변화가 생기는지 가까이에서 보세요.",
          "혹이 있으면 천으로 감싼 차가운 찜질을 짧게 해볼 수 있지만, 아이가 너무 싫어하면 억지로 하지 마세요.",
          "반복 구토나 의식 변화가 있으면 촬영이나 검색보다 응급 상담을 먼저 하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 진료 상담이 필요한 신호",
        "body": "머리 부딪힌 뒤 구토가 반복되거나, 깨우기 어려울 정도로 졸림, 의식 변화, 경련, 걷기 이상, 심한 두통·보챔, 코나 귀에서 피나 맑은 액체가 보이면 즉시 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "머리 혹이 생기거나 침대에서 떨어진 상황이라면 낙상 관련 Q&A를 이어서 확인해 사고 후 관찰 기준을 정리해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs002er8t69gr44onb",
    "contentId": "cmqnsj59001dljot6tsnhhi5c",
    "path": "/qna/health/baby-fast-breathing-no-fever",
    "title": "열은 없는데 숨이 빠르면 바로 진료를 봐야 하나요?",
    "question": "열은 없는데 숨이 빠르면 바로 진료를 봐야 하나요?",
    "summary": "열이 없는데도 아이 숨이 빨라 보이면 감기보다 호흡 자체가 걱정됩니다. 먼저 울거나 뛴 직후인지, 쉬고 있어도 빠른지, 갈비뼈 사이가 들어가는지, 쌕쌕거림·입술색 변화·수유 어려움이 있는지 확인해야 합니다.",
    "metaTitle": "열 없이 숨이 빠른 아이, 진료가 필요한 신호 | MomTools",
    "metaDescription": "아이에게 열은 없지만 숨이 빠를 때 일시적인 변화와 호흡곤란 신호를 나누어 보고, 바로 상담해야 할 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fast-breathing-no-fever",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 빠른 호흡 페이지에 섞인 발열/손발 차가움 문맥을 제거하고 호흡곤란 신호 중심으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 숨 빠름",
      "열 없는 빠른 호흡",
      "아이 호흡곤란",
      "아기 쌕쌕거림",
      "갈비뼈 들어가는 호흡",
      "아기 입술 파래짐",
      "소아 호흡 빠름"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "쉬고 있을 때도 빠른지가 중요해요",
        "items": [
          "아이가 울었거나 막 뛰어놀았다면 숨이 잠깐 빨라질 수 있어요. 하지만 안정을 취한 뒤에도 계속 빠르면 호흡 신호를 자세히 봐야 합니다.",
          "먼저 아이가 가만히 있을 때 가슴과 배가 어떻게 움직이는지 보세요. 갈비뼈 사이가 쑥 들어가거나 목 아래가 움푹 들어가면 힘들게 숨 쉬는 모습일 수 있습니다.",
          "쌕쌕거림, 콧구멍이 벌렁거림, 입술이나 얼굴색 변화, 수유나 물 마시기 어려움이 함께 있으면 열이 없어도 진료 상담을 서둘러야 합니다.",
          "호흡수를 세어보고 싶다면 아이가 울지 않고 안정된 순간에 1분 동안 가슴이 오르내리는 횟수를 세어보세요. 숫자보다 중요한 것은 평소보다 확연히 힘들어 보이는지입니다.",
          "빠른 호흡이 갑자기 시작됐거나, 흡인·알레르기·천식 의심 상황이 있으면 집에서 오래 지켜보지 않는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "빠른 호흡에서 볼 것",
        "items": [
          "울음이나 활동 뒤가 아니라 쉬고 있을 때도 빠른지 확인하기",
          "갈비뼈 사이, 목 아래, 배가 심하게 움직이는지 보기",
          "쌕쌕거림, 콧구멍 벌렁거림, 입술색 변화가 있는지 살피기",
          "수유·식사·물 마시기가 힘들어졌는지 확인하기",
          "이물질 삼킴, 갑작스러운 알레르기, 기침 시작 시점을 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "호흡이 빠를 때 먼저 할 일",
        "items": [
          "아이를 편한 자세로 두고 옷을 느슨하게 해 호흡을 방해하지 않게 해주세요.",
          "안정된 상태에서 호흡 모습과 지속 시간을 짧게 기록하되, 힘들어 보이면 기록보다 도움 요청이 먼저입니다.",
          "열이 없다는 이유로 안심하지 말고, 호흡이 힘들어 보이면 의료기관에 문의하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담해야 할 호흡 신호",
        "body": "갈비뼈 사이가 들어가는 호흡, 쌕쌕거림, 입술·얼굴색 변화, 수유나 물 마시기 어려움, 축 처짐, 갑작스러운 빠른 호흡이 있으면 열이 없어도 즉시 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "호흡이 빠르면서 기침도 있다면 기침과 빠른 호흡 관련 Q&A를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zvs002fr8t64701r7d2",
    "contentId": "cmqnsje2y03iajot6jb7of1k6",
    "path": "/qna/health/baby-fell-from-bed",
    "title": "침대에서 떨어진 아기는 바로 응급실에 가야 하나요?",
    "question": "침대에서 떨어진 아기는 바로 응급실에 가야 하나요?",
    "summary": "아기가 침대에서 떨어지면 높이가 크지 않아 보여도 부모는 머리를 다쳤을까 걱정하게 됩니다. 바로 응급실 여부는 떨어진 높이만이 아니라 울고 난 뒤 반응, 구토 반복, 졸림, 혹의 위치, 팔다리 움직임, 의식 변화가 있는지에 따라 달라집니다.",
    "metaTitle": "아기가 침대에서 떨어졌을 때 응급실 기준 | MomTools",
    "metaDescription": "아기가 침대에서 떨어졌을 때 집에서 관찰할 점, 머리 손상 경고 신호, 응급실을 고민해야 하는 상황을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fell-from-bed",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-008: 침대 낙상 페이지에 섞인 눈곱 문맥을 제거하고 낙상 후 관찰·응급 신호 중심으로 재작성.",
    "duplicateMemo": "batch-008에서 접히는 부위 습진·가려움 피부·야간 응급 신호·눈곱/눈 비빔/한쪽 눈물·낙상 후 구토·빠른 호흡·침대 낙상 질문을 각각 다른 검색 의도와 확인 기준으로 분리하고, 피부·눈·외상·호흡 관련 단정 표현을 줄임.",
    "keywords": [
      "아기 침대에서 떨어짐",
      "아기 낙상 응급실",
      "아기 머리 부딪힘",
      "아기 머리 혹",
      "아기 낙상 구토",
      "아기 떨어진 뒤 졸림",
      "소아 낙상 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "떨어진 뒤 반응과 시간이 지나며 달라지는 모습을 보세요",
        "items": [
          "침대에서 떨어진 순간 아이가 크게 울면 부모도 당황하게 됩니다. 우는 것 자체보다 진정한 뒤 평소처럼 반응하는지가 더 중요해요.",
          "먼저 아이가 눈을 맞추고, 팔다리를 평소처럼 움직이고, 수유나 물을 받아들이는지 확인해보세요. 부딪힌 부위에 혹이나 상처가 있는지도 살펴야 합니다.",
          "구토가 반복되거나 점점 졸려 보이고, 깨우기 어렵거나 멍해 보이면 단순 낙상으로 넘기기 어렵습니다.",
          "높은 곳에서 떨어졌거나 딱딱한 바닥에 머리를 세게 부딪친 경우, 혹이 커지거나 머리 모양이 이상해 보이는 경우도 상담이 필요할 수 있어요.",
          "사고 시간, 침대 높이, 바닥 재질, 떨어진 뒤 울음 시간, 구토 여부를 적어두면 진료 상담 때 설명이 훨씬 정확해집니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "침대 낙상 후 확인할 것",
        "items": [
          "아이를 깨웠을 때 눈을 맞추고 평소처럼 반응하는지 보기",
          "팔다리를 양쪽 모두 움직이는지, 특정 부위를 아파하는지 확인하기",
          "구토, 점점 심해지는 졸림, 경련, 이상 행동이 있는지 살피기",
          "머리 혹, 찢어진 상처, 코나 귀의 피·맑은 액체를 확인하기",
          "떨어진 높이와 바닥 재질, 사고 시간을 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 지켜볼 때",
        "items": [
          "아이가 안정되고 반응이 괜찮아도 몇 시간 동안 평소와 다른 변화가 생기는지 가까이에서 보세요.",
          "혹이 있다면 천으로 감싼 차가운 찜질을 짧게 해볼 수 있지만, 아이가 힘들어하면 억지로 하지 마세요.",
          "수면 시간이 겹치더라도 깨웠을 때 반응이 지나치게 약하거나 이상하면 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "응급 상담을 권하는 낙상 후 신호",
        "body": "반복 구토, 의식 변화, 깨우기 어려운 졸림, 경련, 걷거나 기는 모습의 이상, 심한 보챔, 코나 귀에서 피나 맑은 액체가 보이는 경우에는 바로 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ],
        "body": "낙상 뒤 토하거나 머리에 혹이 생겼다면 머리 부딪힘 관련 Q&A를 함께 확인해 관찰 기준을 정리해보세요."
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
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-008 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedItems")) assignments.push(`"completedItems" = 10`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);

    if (assignments.length > 0) {
      await prisma.$executeRawUnsafe(
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 8`,
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

  console.log("batch-008 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-008 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-eczema-behind-knees");
  console.log("- http://localhost:3000/qna/health/baby-eye-discharge-yellow");
  console.log("- http://localhost:3000/qna/health/baby-fall-and-vomit");
  console.log("- http://localhost:3000/qna/health/baby-fast-breathing-no-fever");
  console.log("- http://localhost:3000/qna/health/baby-fell-from-bed");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-008 반영 실패");
  console.error(error);
  process.exit(1);
});
