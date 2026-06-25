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
    "batchItemId": "cmqs71zsz0019r8t695hpu3in",
    "contentId": "cmqnsj7yz021ajot6rfkrnzuv",
    "path": "/qna/health/baby-cough-when-lying-down",
    "title": "아기가 누우면 기침이 심해질 때 먼저 봐야 할 점은?",
    "question": "아기가 누우면 기침이 심해질 때 먼저 봐야 할 점은?",
    "summary": "아기가 낮에는 괜찮다가 눕기만 하면 기침을 하면 코막힘, 목 뒤로 넘어가는 콧물, 건조한 공기처럼 자세와 환경이 영향을 줄 수 있어요. 다만 숨이 차 보이거나 먹는 양이 줄면 밤기침으로만 넘기지 말고 호흡 상태를 함께 확인해야 합니다.",
    "metaTitle": "아기가 누우면 기침이 심해질 때 확인할 점 | MomTools",
    "metaDescription": "아기가 누울 때 기침이 심해지는 이유, 집에서 볼 코막힘·실내환경·수유 변화, 진료 상담이 필요한 호흡 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-when-lying-down",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 누울 때 심해지는 기침을 코막힘·후비루·건조함·호흡 신호로 분리함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 누우면 기침",
      "아기 밤기침",
      "아기 누울 때 기침",
      "아기 코막힘 기침",
      "아기 후비루",
      "아기 기침 병원",
      "아기 호흡 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "누운 자세에서만 심해지는지부터 나눠보세요",
        "items": [
          "아기가 눕자마자 기침을 하거나 밤에만 더 심해진다면 기침 자체보다 코막힘, 콧물이 목 뒤로 넘어가는 느낌, 방 안 건조함이 함께 있는지 먼저 보는 게 좋아요.",
          "낮에도 숨소리가 거칠고 수유 중 자주 멈추거나 잠을 거의 못 잘 정도라면 단순한 밤기침으로만 보기는 어렵습니다. 기침 소리보다 숨쉬는 모습과 먹는 양이 더 중요한 기준입니다.",
          "코가 막혀 입으로 숨을 쉬는지, 자고 일어난 뒤 기침이 몰아서 나오는지, 누운 방향을 바꾸면 달라지는지를 하루 이틀만 기록해도 상담할 때 설명이 훨씬 쉬워집니다.",
          "가습이나 코 관리로 조금 나아지는지 살펴볼 수 있지만, 기침이 반복 구토로 이어지거나 쌕쌕거림이 들리면 집에서 버티기보다 소아청소년과 상담 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "밤기침을 볼 때 체크할 것",
        "items": [
          "누웠을 때만 심한지, 낮 활동 중에도 기침이 계속되는지 나누기",
          "코막힘, 콧물, 입으로 숨쉬기, 코골이처럼 동반되는 변화 확인하기",
          "수유량·식사량이 줄었는지, 기침 때문에 잠을 거의 못 자는지 보기",
          "방이 너무 건조하거나 먼지·향이 강한 제품에 노출됐는지 점검하기",
          "숨쉴 때 갈비뼈 사이가 들어가거나 입술색이 변하지 않는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 밤 기록해두면 좋은 것",
        "items": [
          "기침이 심해진 시간, 누운 자세, 콧물 여부를 같이 적어두세요.",
          "기침 소리가 걱정된다면 10초 정도 짧은 영상으로 남겨 진료 때 보여줄 수 있게 해두세요.",
          "잠들기 전 코막힘을 완화했을 때 수유와 잠이 나아지는지도 함께 확인해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "밤기침이어도 바로 확인할 신호",
        "body": "쌕쌕거림, 빠른 호흡, 갈비뼈 사이가 들어가는 호흡, 입술이나 얼굴색 변화, 기침 때문에 수유를 거의 못 하는 모습이 있으면 밤기침으로만 지켜보지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "기침이 자세와 시간대에 따라 달라진다면 아기 기침 확인 가이드에서 밤기침, 쌕쌕거림, 호흡곤란 신호를 함께 확인해보세요.",
        "items": [
          "아기 기침 확인 가이드",
          "/health/cough"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001ar8t67rror90v",
    "contentId": "cmqnsj9ot02fsjot6y30ucmd8",
    "path": "/qna/health/baby-cough-with-fast-breathing",
    "title": "기침하면서 숨이 빨라 보이면 바로 진료를 봐야 할까요?",
    "question": "기침하면서 숨이 빨라 보이면 바로 진료를 봐야 할까요?",
    "summary": "기침과 함께 숨이 빨라 보이면 감기 기침인지보다 아이가 숨쉬는 데 힘을 쓰는지가 먼저입니다. 갈비뼈 사이가 들어가거나 입술색이 변하고, 수유를 멈출 만큼 숨차 보이면 빠른 진료 상담이 필요할 수 있습니다.",
    "metaTitle": "아기 기침과 빠른 호흡, 바로 봐야 할 신호 | MomTools",
    "metaDescription": "아기가 기침하면서 숨이 빨라 보일 때 호흡곤란 신호, 집에서 볼 체크포인트, 진료 상담이 필요한 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-with-fast-breathing",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 빠른 호흡을 응급 신호 중심으로 재정리하고 일반 기침 글과 구분함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 빠른 호흡",
      "아기 기침 숨참",
      "아기 호흡곤란",
      "아기 갈비뼈 들어감",
      "아기 쌕쌕거림",
      "아기 기침 병원",
      "소아 호흡 체크"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "숨을 빨리 쉬는 이유보다 힘들어 보이는지가 먼저예요",
        "items": [
          "아기가 기침을 하면서 숨이 빨라 보이면 단순히 호흡수를 세는 것보다 숨을 쉴 때 가슴과 배가 얼마나 힘들게 움직이는지 먼저 보세요.",
          "갈비뼈 사이가 쑥쑥 들어가거나 콧구멍이 벌렁거리고, 수유 중 자꾸 멈춘다면 몸이 숨쉬는 데 힘을 많이 쓰고 있을 수 있습니다.",
          "열이 있거나 쌕쌕거림이 들리고 아이가 평소보다 축 처진다면 기다리며 관찰하기보다 빠르게 상담하는 편이 안전합니다.",
          "아이의 호흡은 울거나 뛰고 난 직후에도 빨라질 수 있어요. 잠시 안정된 상태에서도 계속 빠른지, 먹고 잘 수 있는지를 같이 확인하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "빠른 호흡과 함께 볼 신호",
        "items": [
          "안정된 상태에서도 숨이 계속 빠른지 보기",
          "갈비뼈 사이, 목 아래, 배가 숨쉴 때 깊게 들어가는지 확인하기",
          "입술·얼굴색이 창백하거나 푸르게 보이지 않는지 살펴보기",
          "기침 때문에 수유·식사를 끝까지 못 하는지 보기",
          "쌕쌕거림, 고열, 처짐이 함께 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "진료 전 남기면 좋은 기록",
        "items": [
          "아이가 조용히 있을 때 30초 정도 가슴 움직임을 영상으로 남겨두세요.",
          "체온, 수유량, 소변 횟수, 기침이 심해진 시간을 함께 적어두세요.",
          "숨이 차 보이면 기침약을 먼저 찾기보다 호흡 상태를 설명하고 상담을 받는 것이 우선입니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "빠르게 도움을 받아야 하는 경우",
        "body": "숨쉴 때 갈비뼈 사이가 들어가거나 입술색이 변하는 경우, 깨워도 반응이 약한 경우, 수유를 거의 못 하는 경우, 쌕쌕거림과 빠른 호흡이 이어지는 경우에는 지체하지 말고 의료진 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "호흡이 걱정되는 기침은 아기 기침 확인 가이드의 호흡곤란 신호와 함께 보면 판단 기준을 정리하기 쉽습니다.",
        "items": [
          "아기 기침 확인 가이드",
          "/health/cough"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001br8t6ugg8meii",
    "contentId": "cmqnsj52s01c3jot6a51cmgc7",
    "path": "/qna/health/baby-cough-with-phlegm",
    "title": "가래 끓는 듯한 아기 기침은 얼마나 지켜봐도 될까요?",
    "question": "가래 끓는 듯한 아기 기침은 얼마나 지켜봐도 될까요?",
    "summary": "가래 끓는 듯한 기침은 소리만 들으면 크게 느껴지지만, 실제로는 콧물이나 목 뒤 분비물 때문에 그르렁거릴 때도 있어요. 아이가 잘 먹고 숨이 편한지, 열과 쌕쌕거림이 함께 있는지부터 확인해보세요.",
    "metaTitle": "아기 가래 기침, 지켜봐도 되는지 확인할 기준 | MomTools",
    "metaDescription": "아기 가래 끓는 기침이 있을 때 집에서 확인할 호흡·수유·열 체크포인트와 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-with-phlegm",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 가래 소리와 호흡곤란 신호를 분리해 불필요한 공포와 단정을 줄임.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 가래 기침",
      "아기 가래 끓는 소리",
      "아기 그르렁 기침",
      "아기 기침 가래",
      "아기 쌕쌕거림",
      "아기 감기 기침",
      "아기 호흡 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "가래 소리보다 먹고 숨쉬는 흐름을 보세요",
        "items": [
          "아기가 가래가 끓는 듯이 기침하면 폐에 문제가 생긴 건 아닌지 걱정될 수 있어요. 하지만 코 뒤로 넘어간 콧물이나 목의 분비물 때문에 그르렁거리는 소리가 나는 경우도 있습니다.",
          "먼저 아이가 평소처럼 먹는지, 누워 있을 때 숨이 편한지, 열이 함께 있는지 살펴보세요. 기침 소리가 거칠어도 컨디션이 좋고 호흡이 편하면 짧게 경과를 볼 수 있습니다.",
          "반대로 쌕쌕거림이 뚜렷하거나 숨이 빨라지고, 기침 때문에 수유량이 줄면 단순 가래 기침으로만 보기 어렵습니다.",
          "가래를 억지로 빼내려고 여러 방법을 반복하기보다 코막힘 관리, 수분 섭취, 실내 건조함 조절처럼 아이가 숨쉬기 편한 환경을 만드는 데 집중하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "가래 기침에서 확인할 점",
        "items": [
          "가래 소리가 목에서 나는지, 숨쉴 때 쌕쌕거림처럼 들리는지 구분하기",
          "열, 콧물, 코막힘, 구토가 함께 있는지 보기",
          "기침 때문에 수유·식사량이 줄었는지 확인하기",
          "잠을 잘 때 숨이 편한지, 가슴이 들어가는 호흡이 없는지 살펴보기",
          "소변 횟수와 입술 건조함을 함께 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 도와줄 수 있는 것",
        "items": [
          "코막힘이 있으면 수유 전 코를 편하게 해주는 것이 기침 완화에 도움이 될 수 있습니다.",
          "방이 너무 건조하지 않은지 보고, 담배 연기나 강한 향은 피하세요.",
          "기침 소리가 계속 걱정되면 짧은 영상과 함께 열·수유량 변화를 기록해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "가래 기침 중 상담을 서두를 신호",
        "body": "쌕쌕거림, 빠른 호흡, 갈비뼈 사이가 들어가는 호흡, 입술색 변화, 고열과 처짐, 수유량 급감이 함께 있으면 가래 소리만 보며 기다리지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "가래 기침은 콧물·코막힘과 함께 나타나는 경우가 많아 아기 기침 확인 가이드에서 소리와 호흡 신호를 함께 보는 것이 좋습니다.",
        "items": [
          "아기 기침 확인 가이드",
          "/health/cough"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001cr8t622xvmggc",
    "contentId": "cmqnsj98f02bsjot6xeobd4yd",
    "path": "/qna/health/baby-cough-with-vomit",
    "title": "아기가 기침하다가 토할 때는 어떻게 봐야 하나요?",
    "question": "아기가 기침하다가 토할 때는 어떻게 봐야 하나요?",
    "summary": "기침 끝에 한 번 토하는 경우와, 기침과 상관없이 반복해서 토하는 경우는 다르게 봐야 해요. 토한 뒤 다시 잘 먹고 호흡이 편한지, 소변이 줄지 않는지, 기침이 숨참으로 이어지는지 확인하는 것이 중요합니다.",
    "metaTitle": "아기 기침 후 구토, 집에서 볼 기준과 병원 신호 | MomTools",
    "metaDescription": "아기가 기침하다 토할 때 단순 기침 반응인지 확인할 점, 탈수·호흡곤란·반복 구토 등 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cough-with-vomit",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 기침 후 구토와 반복 구토·탈수 신호를 분리해 실제 판단 기준을 강화함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 기침하다 토함",
      "아기 기침 후 구토",
      "아기 토하고 기침",
      "아기 가래 구토",
      "아기 기침 병원",
      "아기 탈수 확인",
      "아기 호흡곤란"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "기침 끝에 토한 건지, 구토가 반복되는지 나눠보세요",
        "items": [
          "아기가 기침을 세게 한 뒤 토하면 보호자는 폐나 위에 문제가 있는 건 아닌지 걱정하게 됩니다. 기침 끝에 한 번 토하고 다시 편안해지는지, 기침과 상관없이 계속 토하는지 먼저 나눠보세요.",
          "콧물이나 가래가 목에 걸려 기침이 심해지면 토할 수 있지만, 토한 뒤 수분을 전혀 못 먹고 소변이 줄면 탈수 쪽 확인이 필요합니다.",
          "기침할 때 얼굴이 창백해지거나 숨을 몰아쉬고, 반복 구토가 함께 있으면 단순한 기침 반응으로만 넘기지 않는 것이 안전합니다.",
          "토한 양보다 중요한 건 이후 컨디션입니다. 아이가 다시 잘 먹는지, 축 처지지 않는지, 호흡이 편한지를 같이 확인하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "기침 후 구토에서 볼 것",
        "items": [
          "구토가 기침 직후에만 생기는지, 식사와 상관없이 반복되는지 확인하기",
          "토한 뒤 물·수유를 조금씩 받아들이는지 보기",
          "소변 횟수와 입술·혀 건조함 확인하기",
          "쌕쌕거림, 빠른 호흡, 가슴 들어감이 함께 있는지 살피기",
          "구토 색이 초록색이거나 피가 섞이지 않았는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 할 수 있는 대처",
        "items": [
          "토한 직후에는 한 번에 많이 먹이기보다 잠시 쉬었다가 소량씩 시도하세요.",
          "기침이 심한 시간, 구토 횟수, 토한 뒤 수분 섭취와 소변을 같이 적어두세요.",
          "기침 소리와 호흡 모습이 걱정되면 영상으로 남겨 진료 때 보여주는 것이 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "구토가 함께 있을 때 상담할 신호",
        "body": "반복 구토, 초록색 또는 피 섞인 구토, 소변 감소, 축 처짐, 빠른 호흡이나 갈비뼈 사이가 들어가는 호흡이 있으면 기침 후 구토로만 보지 말고 빠른 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "기침 뒤 토하는 상황은 기침과 탈수 신호를 함께 봐야 하므로 아기 기침 확인 가이드와 아기 구토 대처 가이드를 함께 보면 좋습니다.",
        "items": [
          "아기 기침 확인 가이드",
          "/health/cough"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001dr8t6ev6t2gjd",
    "contentId": "cmqnsj7gl01wsjot6c09ofz1g",
    "path": "/qna/health/baby-covid-signs",
    "title": "코로나 의심 증상이 있을 때 아이는 무엇부터 확인해야 하나요?",
    "question": "코로나 의심 증상이 있을 때 아이는 무엇부터 확인해야 하나요?",
    "summary": "아이에게 열, 기침, 콧물, 목 통증이 생기면 코로나인지 감기인지 바로 구분하기 어렵습니다. 검사 여부만 생각하기보다 숨쉬기, 먹는 양, 소변, 처짐 정도를 먼저 보고 가족 내 전파 가능성도 함께 관리하는 것이 좋습니다.",
    "metaTitle": "아이 코로나 의심 증상, 집에서 먼저 확인할 것 | MomTools",
    "metaDescription": "아이 코로나 의심 증상이 있을 때 열·기침·호흡·수분 상태를 확인하는 방법과 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-covid-signs",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 코로나 의심을 감염명 단정이 아니라 아이 컨디션·호흡·수분 관리 중심으로 정리함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아이 코로나 증상",
      "아기 코로나 의심",
      "아이 열 기침 코로나",
      "아이 코로나 검사",
      "아이 감기 코로나 구분",
      "아이 호흡곤란",
      "아이 수분 섭취"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "검사보다 먼저 아이 컨디션을 확인하세요",
        "items": [
          "아이에게 열과 기침, 콧물이 생기면 코로나인지 감기인지 보호자가 바로 구분하기는 어렵습니다. 이름을 먼저 붙이기보다 아이가 잘 먹고 숨쉬는지, 소변이 줄지 않았는지부터 보세요.",
          "가족 중 확진자나 비슷한 증상이 있다면 감염 가능성을 고려해 접촉을 줄이고, 아이의 체온과 호흡 상태를 기록해두는 것이 좋습니다.",
          "대부분의 호흡기 감염은 집에서 경과를 보며 회복하기도 하지만, 아이가 축 처지거나 숨쉬기 힘들어 보이면 검사 결과를 기다리기보다 진료 상담이 우선입니다.",
          "코로나가 의심될 때도 해열제나 감기약을 임의로 여러 가지 섞어 쓰기보다, 월령·체중·복용 중인 약을 확인하고 필요하면 의료진 안내를 받는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "코로나 의심 때 볼 체크포인트",
        "items": [
          "열, 기침, 콧물, 목 통증, 설사처럼 함께 있는 증상 적기",
          "가족이나 어린이집·학교에서 비슷한 증상이 있었는지 확인하기",
          "수유·식사량과 소변 횟수가 줄었는지 보기",
          "숨이 차거나 가슴이 들어가는 호흡이 없는지 확인하기",
          "아이의 반응이 평소보다 현저히 처지는지 살피기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 정리할 것",
        "items": [
          "체온, 증상 시작일, 가족 내 증상 여부를 간단히 적어두세요.",
          "아이 물컵과 수건을 따로 쓰고, 보호자는 손 씻기와 환기를 자주 해주세요.",
          "호흡이 힘들거나 수분 섭취가 안 되면 검사 결과와 관계없이 진료 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "검사보다 먼저 상담할 신호",
        "body": "숨쉬기 힘들어 보임, 입술이나 얼굴색 변화, 깨워도 반응이 약함, 물이나 수유를 거의 못 함, 소변이 크게 줄어드는 경우에는 코로나 여부를 확인하는 것과 별개로 빠른 진료 상담이 필요합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "열과 기침이 함께 있다면 아기 열 대처 가이드와 아기 기침 확인 가이드를 같이 보면 집에서 볼 기준을 나눠 정리하기 쉽습니다.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001er8t66rk5zrh7",
    "contentId": "cmqnsjdyr03hajot60wj6hopp",
    "path": "/qna/health/baby-cries-unusually",
    "title": "평소와 다른 울음소리가 나면 통증 신호일 수 있나요?",
    "question": "평소와 다른 울음소리가 나면 통증 신호일 수 있나요?",
    "summary": "아이 울음이 갑자기 날카롭거나 약해지고, 안아도 달래지지 않으면 단순 보챔이 아니라 불편감이나 통증 신호일 수 있어요. 울음만 보지 말고 열, 먹는 양, 배·귀·팔다리 움직임, 다친 흔적을 함께 확인해보세요.",
    "metaTitle": "평소와 다른 아기 울음, 통증 신호인지 확인하기 | MomTools",
    "metaDescription": "아기 울음소리가 갑자기 달라졌을 때 집에서 확인할 통증 신호, 동반 증상, 진료 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cries-unusually",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 비슷한 보챔 문구를 제거하고 통증·외상·복부·소변 신호별 확인 기준을 분리함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아기 울음소리 이상",
      "아기 계속 울어요",
      "아기 통증 신호",
      "아기 안 달래짐",
      "아기 보챔 원인",
      "아기 병원 신호",
      "아이 갑자기 울음"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "울음의 크기보다 평소와 다른지를 보세요",
        "items": [
          "아이마다 우는 방식은 다르지만, 평소와 전혀 다른 고음의 울음이나 힘없이 약한 울음, 안아도 거의 달래지지 않는 울음은 그냥 기분 문제로만 보지 않는 게 좋아요.",
          "먼저 열이 있는지, 먹는 양이 줄었는지, 배를 만지면 더 우는지, 귀를 만지거나 팔다리를 잘 쓰지 않는지 살펴보세요. 아이는 통증 위치를 말로 설명하기 어렵기 때문에 행동 변화가 단서가 됩니다.",
          "머리를 부딪친 뒤 울음이 달라졌거나, 배가 단단해지고 구토가 함께 있거나, 한쪽 팔·다리를 움직이려 하지 않으면 빠르게 확인이 필요할 수 있습니다.",
          "단순 잠투정처럼 보여도 보호자가 “평소와 다르다”고 느끼는 변화가 지속되면 시간, 상황, 동반 증상을 기록해 상담하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "울음이 달라졌을 때 볼 것",
        "items": [
          "기저귀, 배고픔, 졸림, 온도처럼 기본 원인을 먼저 확인하기",
          "열, 구토, 설사, 발진, 배 팽만이 함께 있는지 보기",
          "귀를 만지거나 소변 볼 때 더 우는지 확인하기",
          "팔다리를 한쪽만 덜 쓰거나 만지면 심하게 우는 부위가 있는지 살피기",
          "안아도 전혀 진정되지 않거나 울음이 점점 약해지는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "기록해두면 좋은 장면",
        "items": [
          "울음이 시작된 시간과 직전에 먹은 것, 넘어짐이나 부딪힘이 있었는지 적어두세요.",
          "특정 자세나 부위를 만질 때 더 우는지 확인해보세요.",
          "달래도 오래 진정되지 않는다면 울음소리와 아이 반응을 짧게 기록해 진료 때 보여줄 수 있습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "울음과 함께 바로 볼 신호",
        "body": "깨워도 반응이 약함, 고열, 반복 구토, 배가 단단해짐, 한쪽 팔다리를 쓰지 않음, 머리 부딪힘 이후 울음 변화, 안아도 달래지지 않는 심한 울음이 지속되면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "울음이 통증과 관련된지 헷갈린다면 아이 건강 Q&A에서 열, 배앓이, 소변 통증, 머리 부딪힘 관련 질문을 함께 확인해보세요.",
        "items": [
          "아이 건강 Q&A",
          "/qna/health"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001fr8t6mbpzu01c",
    "contentId": "cmqnsjdc003bsjot6fjverdum",
    "path": "/qna/health/baby-cries-when-peeing",
    "title": "소변 볼 때 우는 아이는 어디가 아픈 걸까요?",
    "question": "소변 볼 때 우는 아이는 어디가 아픈 걸까요?",
    "summary": "아이가 소변 볼 때마다 울거나 기저귀 갈 때 유난히 불편해하면 피부 자극, 기저귀 발진, 변비, 요로감염 가능성을 함께 봐야 해요. 특히 열이 있거나 소변 냄새·색이 달라지고 잘 먹지 못하면 상담이 필요할 수 있습니다.",
    "metaTitle": "소변 볼 때 우는 아이, 요로감염인지 확인할 점 | MomTools",
    "metaDescription": "아이가 소변 볼 때 우는 이유로 볼 수 있는 피부 자극, 기저귀 발진, 요로감염 신호와 병원 상담 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-cries-when-peeing",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 소변 통증을 요로감염 단정 없이 피부 자극·발진·변비·발열 신호로 나눠 정리함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아이 소변 볼 때 울음",
      "아기 소변 통증",
      "아기 요로감염 증상",
      "아이 오줌 눌 때 아파함",
      "아기 기저귀 발진",
      "소변 냄새 이상",
      "아이 열 소변"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "피부 자극인지, 소변 자체가 아픈지 나눠보세요",
        "items": [
          "아이가 소변을 볼 때마다 울면 가장 먼저 기저귀 안쪽 피부가 빨갛게 헐었는지, 소변이 닿을 때 따가워 보이는지 확인해보세요.",
          "피부가 괜찮은데도 소변 볼 때만 힘들어하거나 열이 함께 있고, 소변 냄새가 강해지거나 탁해 보이면 요로감염 가능성도 생각해야 합니다.",
          "말을 잘 못 하는 아이는 배가 아프다거나 소변이 따갑다고 설명하지 못해 보챔, 식욕 저하, 열, 기저귀 변화로 나타날 수 있어요.",
          "변비가 심해도 소변 볼 때 불편해할 수 있으니 최근 대변 간격과 배가 단단한지도 함께 보세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "소변 통증처럼 보일 때 확인할 것",
        "items": [
          "기저귀 부위가 빨갛거나 헐어 소변이 닿을 때 아파하는지 보기",
          "열, 보챔, 식욕 저하가 함께 있는지 확인하기",
          "소변 냄새가 강하거나 색이 탁해졌는지 살피기",
          "소변 횟수가 너무 잦거나 반대로 눈에 띄게 줄었는지 보기",
          "변비나 배변 통증이 함께 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 할 수 있는 관찰",
        "items": [
          "소변 볼 때만 우는지, 기저귀를 갈 때도 우는지 나눠서 보세요.",
          "피부 발진이 있다면 물로 부드럽게 씻고 충분히 말린 뒤 변화를 확인하세요.",
          "열이나 잘 먹지 못함이 함께 있으면 소변 사진이나 기저귀 변화 기록을 들고 상담하는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "소변 문제에서 상담을 서두를 신호",
        "body": "열, 구토, 축 처짐, 잘 먹지 못함, 소변 냄새·색 변화, 옆구리나 배 통증처럼 보이는 울음, 소변량 감소가 함께 있으면 요로감염 등 확인이 필요할 수 있어 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "소변 볼 때 통증처럼 보이면 탈수나 열 증상도 함께 확인해야 하므로 아기 열 대처 가이드와 아이 건강 Q&A를 같이 보면 좋습니다.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001gr8t6vj99pl09",
    "contentId": "cmqnsjg0u03ywjot6skpvmqbp",
    "path": "/qna/health/baby-crying-after-feeding",
    "title": "먹고 난 뒤 계속 보채는 아기는 배가 아픈 걸까요?",
    "question": "먹고 난 뒤 계속 보채는 아기는 배가 아픈 걸까요?",
    "summary": "먹고 난 뒤 바로 우는 아기는 배앓이처럼 보일 수 있지만, 수유량, 트림, 게워냄, 역류, 가스, 졸림이 겹쳐 있을 때도 많아요. 반복 구토나 피 섞인 변, 체중 증가 문제, 숨참이 없다면 먼저 언제 보채는지 패턴을 나눠보는 것이 좋습니다.",
    "metaTitle": "먹고 난 뒤 보채는 아기, 배앓이인지 확인할 점 | MomTools",
    "metaDescription": "수유나 이유식 후 아기가 계속 보챌 때 트림·가스·역류·알레르기 의심 신호와 진료 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-crying-after-feeding",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 수유 후 보챔을 배앓이 단정 없이 트림·역류·식단 변화·알레르기 신호로 분리함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "먹고 난 뒤 아기 보챔",
      "수유 후 아기 울음",
      "아기 배앓이",
      "아기 역류 보챔",
      "아기 트림 안 함",
      "아기 수유 후 울음",
      "아기 분유 후 보챔"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "먹은 직후인지, 조금 지나서인지가 단서예요",
        "items": [
          "아기가 먹고 난 뒤 계속 보채면 배가 아픈 건지, 더 먹고 싶은 건지, 토할 것 같은 건지 헷갈릴 수 있어요. 먼저 보챔이 수유 직후인지, 트림 전후인지, 눕힌 뒤 심해지는지 나눠보세요.",
          "공기를 많이 삼켰거나 트림이 덜 된 경우, 먹은 양이 한 번에 많았던 경우, 역류로 불편한 경우에는 등을 젖히거나 얼굴을 찡그리며 울 수 있습니다.",
          "하지만 반복 분수토, 피 섞인 변, 심한 설사, 호흡 불편, 체중 증가 문제처럼 다른 신호가 함께 있으면 단순 배앓이로만 보기 어렵습니다.",
          "아이가 다시 편안해지는 자세, 먹는 속도, 트림 후 변화, 최근 분유나 이유식 변화까지 함께 기록하면 원인을 좁히는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "수유 후 보챔에서 볼 것",
        "items": [
          "수유 직후, 트림 전후, 눕힌 뒤 중 언제 가장 심한지 보기",
          "등을 뒤로 젖히거나 다리를 배 쪽으로 당기는지 확인하기",
          "게워냄이 소량인지, 분수토처럼 반복되는지 나누기",
          "변에 피나 점액이 섞였는지, 설사가 동반되는지 보기",
          "최근 분유 변경, 이유식 새 재료, 수유량 증가가 있었는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 조절해볼 수 있는 것",
        "items": [
          "한 번에 많이 먹었다면 수유 중간에 잠깐 쉬며 트림 시간을 가져보세요.",
          "먹은 뒤 바로 깊이 눕히기보다 잠시 안아 안정시키고 변화를 보세요.",
          "보챔 시간, 먹은 양, 게워냄 여부, 대변 변화를 같이 기록해두면 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "수유 후 보챔 중 상담할 신호",
        "body": "반복 분수토, 초록색 구토, 피 섞인 변, 호흡 불편, 체중 증가가 잘 되지 않음, 먹을 때마다 심하게 보채며 수유를 거부하는 모습이 있으면 소아청소년과 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "수유 후 보챔이 구토나 변 변화와 함께 있다면 아기 구토 대처 가이드와 설사·변 상태 관련 Q&A를 함께 확인해보세요.",
        "items": [
          "아기 구토 대처 가이드",
          "/health/vomiting"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001hr8t6ob65il20",
    "contentId": "cmqnsj6fx01o0jot60kikiuwp",
    "path": "/qna/health/baby-dark-urine",
    "title": "소변색이 진해지면 수분 부족 신호인가요?",
    "question": "소변색이 진해지면 수분 부족 신호인가요?",
    "summary": "아이 소변색이 평소보다 진해졌다면 땀을 많이 흘렸거나 수분 섭취가 줄어 농축된 소변일 수 있어요. 다만 색만으로 판단하지 말고 소변 횟수, 입술 건조함, 열·설사·구토가 함께 있는지를 같이 봐야 합니다.",
    "metaTitle": "아이 소변색이 진할 때 수분 부족인지 확인하기 | MomTools",
    "metaDescription": "아이 소변색이 진해졌을 때 탈수 가능성, 집에서 볼 소변 횟수·입술 건조·동반 증상, 진료 상담 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dark-urine",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 진한 소변을 탈수 단정이 아니라 소변 횟수·동반 증상·색 변화로 나눠 설명함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "아이 소변색 진함",
      "아기 소변색 진함",
      "아기 탈수 소변",
      "아이 소변 줄어듦",
      "아기 수분 부족",
      "소변색 갈색",
      "아이 진한 소변"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "색 하나보다 소변 횟수와 컨디션을 같이 보세요",
        "items": [
          "아이 소변이 평소보다 노랗고 진해 보이면 수분 섭취가 줄었거나 땀을 많이 흘려 소변이 농축됐을 수 있습니다. 하지만 색만으로 탈수를 단정하기는 어렵습니다.",
          "기저귀가 평소보다 오래 마른 상태인지, 소변 횟수가 줄었는지, 입술과 혀가 마른지, 아이가 축 처지는지를 함께 보세요.",
          "열, 설사, 구토가 있는 날에는 평소보다 수분 손실이 커질 수 있어 진한 소변이 더 의미 있는 신호가 됩니다.",
          "소변이 콜라색처럼 매우 진하거나 피가 섞인 듯 보이고, 배나 옆구리를 아파하거나 열이 함께 있으면 단순 수분 부족으로만 보지 않는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "진한 소변에서 확인할 것",
        "items": [
          "하루 소변 횟수나 젖은 기저귀 수가 줄었는지 보기",
          "입술·혀가 마르거나 눈물이 줄었는지 확인하기",
          "열, 설사, 구토, 땀을 많이 흘린 상황이 있었는지 살피기",
          "소변이 단순히 진한 노란색인지, 갈색·붉은색에 가까운지 확인하기",
          "아이 반응이 평소보다 축 처지는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 기록할 것",
        "items": [
          "마지막 소변 시간, 색, 양을 간단히 적어두세요.",
          "열이나 설사·구토가 있다면 먹은 수분량과 소변 횟수를 같이 기록하세요.",
          "기저귀 사진이나 소변 색을 남겨두면 진료 상담 때 설명하기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진한 소변과 함께 상담할 신호",
        "body": "소변이 눈에 띄게 줄어듦, 입술·혀 건조, 축 처짐, 반복 구토나 설사, 고열, 갈색 또는 붉은 소변, 배나 옆구리 통증이 함께 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "진한 소변은 열이나 설사 뒤 탈수 신호와 함께 봐야 하므로 아기 열 대처 가이드와 아기 설사 가이드를 같이 확인하면 좋습니다.",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zsz001ir8t66kjzjjdc",
    "contentId": "cmqnsjd7u03asjot6pxksyveb",
    "path": "/qna/health/baby-dark-urine-new-2",
    "title": "소변 색이 진한 아이, 물을 더 먹이면 될까요?",
    "question": "소변 색이 진한 아이, 물을 더 먹이면 될까요?",
    "summary": "소변 색이 진하다고 해서 모든 아이에게 물을 많이 먹이는 것이 답은 아니에요. 특히 어린 아기는 월령에 맞는 수유가 우선이고, 큰 아이도 물을 마실 수 있는지보다 소변 횟수와 탈수 신호를 함께 확인해야 합니다.",
    "metaTitle": "아이 소변색이 진할 때 물을 더 먹여도 될까? | MomTools",
    "metaDescription": "아이 소변색이 진할 때 물을 더 먹이면 되는지, 월령별 수분 보충 기준과 탈수·진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dark-urine-new-2",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-005: 상세 페이지 카드 흐름까지 함께 점검해 사용자 관점으로 재작성. 유사한 진한 소변 페이지와 중복되지 않도록 수분 보충 행동·월령 기준 중심으로 분리함.",
    "duplicateMemo": "batch-005에서 기침·호흡, 코로나 의심, 소변·수분, 수유 후 보챔 등 비슷해 보이는 건강 질문을 주제별로 분리해 반복 구조를 줄임.",
    "keywords": [
      "소변 색 진할 때 물",
      "아기 물 먹여도 되나요",
      "아이 진한 소변 물",
      "아기 탈수 수분 보충",
      "아기 수유량 소변",
      "아이 소변 횟수",
      "진한 소변 대처"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "물을 더 주기 전에 월령과 먹는 방식을 먼저 보세요",
        "items": [
          "아이 소변색이 진하면 물을 더 먹여야 할지 바로 고민될 수 있어요. 하지만 어린 아기는 물보다 모유나 분유 섭취가 기본이고, 월령에 따라 물을 주는 방식이 달라집니다.",
          "이유식 전 아기라면 임의로 물을 많이 먹이기보다 수유량이 줄었는지, 기저귀가 평소보다 덜 젖는지 먼저 확인하세요.",
          "이유식을 시작했거나 더 큰 아이라면 물을 조금씩 자주 권할 수 있지만, 계속 토하거나 설사로 수분을 잃는 상황에서는 단순히 물만 많이 주는 것으로 충분하지 않을 수 있습니다.",
          "진한 소변이 하루 이틀 반복되고 아이가 축 처지거나 입술이 마르고 소변 횟수가 줄면 수분 보충 방법을 의료진에게 확인하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "물을 더 주기 전 확인할 것",
        "items": [
          "아이 월령과 현재 주식이 모유·분유인지, 이유식인지 확인하기",
          "최근 수유량·식사량이 줄었는지 보기",
          "젖은 기저귀 수나 소변 횟수가 평소보다 줄었는지 확인하기",
          "열, 설사, 구토, 땀을 많이 흘린 상황이 있었는지 살피기",
          "입술 건조, 눈물 감소, 축 처짐이 함께 있는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "안전하게 수분 상태를 보는 방법",
        "items": [
          "어린 아기는 물보다 수유량과 젖은 기저귀 수를 먼저 확인하세요.",
          "이유식 이후라면 한 번에 많이 먹이기보다 조금씩 자주 권하고 소변 색 변화를 보세요.",
          "설사나 구토가 있으면 수분 보충 방식이 달라질 수 있으니 소변 횟수와 아이 컨디션을 함께 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "물을 먹여도 지켜보면 안 되는 경우",
        "body": "소변이 계속 줄어듦, 입술·혀가 마름, 반복 구토나 설사, 고열, 축 처짐, 물이나 수유를 받아들이지 못함, 갈색 또는 붉은 소변이 있으면 단순히 물을 더 먹이는 것보다 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "수분 부족이 걱정된다면 아기 열 대처 가이드와 설사 가이드에서 탈수 신호를 함께 확인해보세요.",
        "items": [
          "아기 설사 가이드",
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-005 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 5`,
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

  console.log("batch-005 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-005 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-cough-when-lying-down");
  console.log("- http://localhost:3000/qna/health/baby-cough-with-fast-breathing");
  console.log("- http://localhost:3000/qna/health/baby-covid-signs");
  console.log("- http://localhost:3000/qna/health/baby-cries-when-peeing");
  console.log("- http://localhost:3000/qna/health/baby-dark-urine-new-2");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-005 반영 실패");
  console.error(error);
  process.exit(1);
});
