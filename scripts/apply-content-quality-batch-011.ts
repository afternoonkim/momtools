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
    "batchItemId": "cmqs71zyj0033r8t667b1g9d1",
    "contentId": "cmqnsj8b80246jot66pbte2tc",
    "path": "/qna/health/baby-fever-not-down",
    "title": "해열제를 먹였는데 열이 잘 안 내려가면 어떻게 봐야 하나요?",
    "question": "해열제를 먹였는데 열이 잘 안 내려가면 어떻게 봐야 하나요?",
    "summary": "해열제를 먹였는데도 체온이 바로 떨어지지 않으면 약이 안 듣는 건지 걱정될 수 있어요. 숫자가 얼마나 내려갔는지만 보지 말고 아이가 조금 편해졌는지, 수분을 받아들이는지, 호흡과 반응이 괜찮은지 함께 확인해야 합니다.",
    "metaTitle": "해열제를 먹였는데 열이 안 내려갈 때 확인할 점 | MomTools",
    "metaDescription": "해열제 후에도 열이 잘 안 내려갈 때 체온 변화, 아이 반응, 수분 섭취, 다시 상담해야 하는 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-not-down",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 해열제 후에도 열이 떨어지지 않는 상황을 약효 단정이 아니라 반응·수분·복용 정보 확인 기준으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "해열제 열 안 내려감",
      "아기 해열제 반응",
      "아기 열 안 떨어짐",
      "해열제 후 고열",
      "아기 발열 상담",
      "아이 열 대처",
      "해열제 재복용 전 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "체온 숫자보다 아이가 편해졌는지를 같이 봐요",
        "items": [
          "해열제를 먹인 뒤에도 체온이 바로 정상으로 내려가지 않으면 불안할 수 있습니다. 다만 해열제의 목표는 체온을 완전히 없애는 것보다 아이가 덜 힘들게 지나가도록 돕는 쪽에 가깝습니다.",
          "먼저 아이가 조금이라도 편해졌는지 보세요. 울음이 줄었는지, 물이나 수유를 받아들이는지, 눈맞춤과 반응이 평소와 비슷한지가 체온 숫자만큼 중요합니다.",
          "체온은 같은 체온계와 같은 부위로 다시 재야 흐름을 비교할 수 있어요. 목욕 직후, 두꺼운 이불 속, 많이 울고 난 직후 숫자는 실제 상태보다 높게 보일 수 있습니다.",
          "해열제를 더 먹일지 여부는 제품 성분, 아이 나이와 체중, 마지막 복용 시간에 따라 달라질 수 있어요. 화면의 정보만 보고 반복 복용하기보다 포장지·처방 안내·약사나 의료진의 설명을 기준으로 확인하세요.",
          "열이 잘 안 내려간다는 사실보다, 열과 함께 처짐·호흡 불편·수분 섭취 감소가 나타나는지가 다음 행동을 정하는 핵심입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "해열제 후 다시 볼 기준",
        "items": [
          "마지막으로 해열제를 먹인 시간과 제품 성분 확인하기",
          "같은 방법으로 체온을 다시 재고 변화 흐름 보기",
          "아이가 물·수유를 받아들이는지 확인하기",
          "해열 후에도 계속 축 처지는지, 깨웠을 때 반응하는지 보기",
          "소변 횟수와 입술·입안 건조 여부 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 기록해둘 것",
        "items": [
          "체온을 잰 시간, 해열제 복용 시간, 이후 아이 반응을 한 줄씩 적어두세요.",
          "복용한 제품명과 성분을 사진으로 남겨두면 상담 때 설명하기 쉽습니다.",
          "열이 다시 오른 시간과 함께 콧물·기침·구토·설사 같은 동반 증상을 따로 적어두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "기다리지 말고 상담할 신호",
        "body": "해열 후에도 아이가 축 처지고 깨우기 어렵거나, 숨쉬기 힘들어 보이거나, 입술색이 변하거나, 반복 구토·경련·소변 감소가 있으면 체온이 조금 내려갔더라도 빠르게 진료 상담을 권합니다. 3개월 미만 아기의 발열은 특히 더 일찍 확인하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "해열제 반응을 볼 때는 체온뿐 아니라 월령과 아이 컨디션을 같이 봐야 해요. 발열 기준이 헷갈리면 아기 열 대처 가이드도 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj0034r8t6vogyc9rb",
    "contentId": "cmqnsj47p014ljot6vltt89jp",
    "path": "/qna/health/baby-fever-repeats-everyday",
    "title": "아기 열이 며칠째 반복되면 언제 진료를 봐야 하나요?",
    "question": "아기 열이 며칠째 반복되면 언제 진료를 봐야 하나요?",
    "summary": "아기 열이 하루 좋아졌다가 다시 오르거나 며칠째 반복되면 단순 감기 흐름인지, 다시 확인해야 하는 상황인지 헷갈릴 수 있어요. 열이 난 날짜만 세기보다 하루 중 패턴, 동반 증상, 아이 컨디션 회복 여부를 같이 봐야 합니다.",
    "metaTitle": "아기 열이 며칠째 반복될 때 진료 상담 기준 | MomTools",
    "metaDescription": "며칠째 반복되는 아기 열을 볼 때 열 패턴, 동반 증상, 수분 섭취, 진료 상담이 필요한 변화를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-repeats-everyday",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 반복 발열 페이지를 날짜 계산보다 열 없는 시간의 회복과 동반 증상 패턴 중심으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 열 며칠째",
      "반복 발열 아기",
      "아기 열 반복",
      "아이 열 재발",
      "아기 열 진료 시점",
      "아기 발열 기록",
      "소아과 발열 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "반복되는 열은 “며칠째인지”와 “사이에 회복되는지”를 같이 봐요",
        "items": [
          "열이 며칠째 이어지면 부모는 “계속 기다려도 되나”를 가장 많이 고민하게 됩니다. 이때는 단순히 날짜만 세기보다 열이 없는 시간에 아이가 얼마나 회복되는지를 함께 보는 게 좋습니다.",
          "열이 내려간 시간에 잘 먹고 놀고 소변도 평소와 비슷하면 기록하며 관찰할 여지가 있습니다. 반대로 열이 없는 사이에도 처지고 먹는 양이 줄면 다시 확인이 필요할 수 있어요.",
          "콧물·기침·구토·설사·귀 통증·발진처럼 새로 붙는 증상이 있는지도 따로 적어보세요. 반복 발열은 동반 증상 흐름을 함께 봐야 설명이 쉬워집니다.",
          "열이 매일 비슷한 시간에 오르는지, 해열 뒤 얼마나 편해지는지, 밤에만 심한지 같은 패턴도 진료 상담 때 유용합니다.",
          "특히 어린 아기이거나 열이 길어지고 컨디션 회복이 느리다면 “며칠 더 기다릴지”를 혼자 판단하기보다 소아청소년과에 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "며칠째 열을 볼 때 나눠 적을 것",
        "items": [
          "열이 시작된 날짜와 하루 최고 체온 적기",
          "열이 없는 시간에 먹고 노는 모습이 회복되는지 보기",
          "새로 생긴 기침, 설사, 구토, 발진, 귀 통증 확인하기",
          "마지막 소변 시간과 기저귀 횟수 확인하기",
          "해열 후 편해지는지, 아니면 계속 처지는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "진료 전 정리 방법",
        "items": [
          "날짜별 최고 체온을 표처럼 적어두세요.",
          "열이 없는 시간의 컨디션을 “잘 놈/덜 먹음/계속 처짐”처럼 짧게 표시하세요.",
          "어린이집 유행 질환, 가족 감기, 최근 접종 여부도 함께 적어두면 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "재진 상담을 서두를 상황",
        "body": "열이 반복되면서 아이가 점점 처지거나, 수분 섭취와 소변이 줄거나, 호흡이 힘들어 보이거나, 반복 구토·발진·경련·목이 뻣뻣한 모습이 있으면 날짜를 더 기다리지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "반복되는 열은 최고 체온보다 패턴과 컨디션 회복이 중요해요. 발열 기준을 다시 정리하려면 아기 열 대처 가이드도 함께 보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj0035r8t6p39usazo",
    "contentId": "cmqnsj8y0029djot6bffu9v5d",
    "path": "/qna/health/baby-fever-returns",
    "title": "열이 내렸다가 다시 오르면 회복 중인 걸까요?",
    "question": "열이 내렸다가 다시 오르면 회복 중인 걸까요?",
    "summary": "열이 한 번 내려갔다가 다시 오르면 좋아지는 중인지, 병이 다시 심해지는 건지 불안해질 수 있어요. 열이 다시 오른 시간뿐 아니라 내려갔던 동안 아이가 먹고 놀았는지, 새 증상이 붙었는지를 같이 봐야 합니다.",
    "metaTitle": "아기 열이 내렸다가 다시 오를 때 확인할 점 | MomTools",
    "metaDescription": "열이 내렸다가 다시 오르는 경우 회복 중인지 다시 상담이 필요한지 볼 체온 패턴, 컨디션, 동반 증상을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-returns",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 열 재상승 페이지를 회복 여부 단정 대신 열 없는 시간의 컨디션과 새 증상 확인 기준으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 열 다시 오름",
      "열 내렸다 다시 오름",
      "아이 발열 재상승",
      "아기 열 회복 중",
      "해열 후 열 재발",
      "소아 발열 패턴",
      "아기 고열 반복"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "열이 다시 오른 것만으로 회복 여부를 단정하긴 어려워요",
        "items": [
          "아이 열은 하루 안에서도 오르내릴 수 있어요. 그래서 한 번 내려갔다가 다시 오른 것만 보고 회복 중인지 악화인지 바로 판단하기는 어렵습니다.",
          "더 중요한 건 열이 내려간 동안 아이가 어떻게 지냈는지예요. 잘 먹고 소변을 보고 잠깐이라도 평소처럼 반응했다면 회복 흐름일 수 있지만, 계속 처지고 먹지 못했다면 다시 확인해야 합니다.",
          "열이 다시 오를 때 새 증상이 붙는지도 봐야 해요. 기침이 심해지거나 귀 통증, 발진, 반복 구토, 설사가 생기면 처음과 다른 흐름일 수 있습니다.",
          "해열제 후 잠깐 내려갔다가 다시 오르는 경우도 있으니, 마지막 복용 시간과 아이 반응을 함께 적어두세요. 임의로 복용 간격을 줄이는 것은 피해야 합니다.",
          "열의 숫자보다 아이가 점점 나아지는지, 아니면 열이 없을 때도 힘들어하는지가 다음 행동을 정하는 기준이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "열이 다시 올랐을 때 확인할 것",
        "items": [
          "열이 내려간 동안 아이가 먹고 놀았는지 보기",
          "다시 오른 시간이 해열제 복용 후 몇 시간째인지 확인하기",
          "기침, 발진, 귀 통증, 구토, 설사 같은 새 증상 확인하기",
          "소변 횟수와 입안 건조 여부 보기",
          "열이 없는 시간에도 계속 처지는지 살피기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "패턴을 이렇게 적어보세요",
        "items": [
          "체온을 시간 순서대로 적고, 해열제 복용 시간은 따로 표시하세요.",
          "열이 내려갔을 때 아이 행동을 “수유 가능/놀이 가능/계속 누워 있음”처럼 적어두세요.",
          "새로 생긴 증상은 시작 시간을 함께 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "다시 상담이 필요한 신호",
        "body": "열이 다시 오르면서 아이가 깨우기 어려울 만큼 처지거나, 숨쉬기 힘들어 보이거나, 수분을 거의 못 먹거나, 소변이 줄거나, 발진·반복 구토·경련이 함께 있으면 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 오르내릴 때는 체온표처럼 흐름을 보는 게 좋아요. 월령별 발열 기준은 아기 열 대처 가이드에서 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj0036r8t6qqazc1yp",
    "contentId": "cmqnsjf4603r3jot623g00mkv",
    "path": "/qna/health/baby-fever-revisit-timing",
    "title": "열로 병원 다녀왔는데 언제 다시 가야 하나요?",
    "question": "열로 병원 다녀왔는데 언제 다시 가야 하나요?",
    "summary": "이미 병원에 다녀왔는데도 열이 계속되면 “처방대로 지켜보면 될까, 다시 가야 할까”가 가장 고민됩니다. 진료 후에는 체온보다 아이 반응, 새 증상, 처방 후 변화, 수분 섭취와 소변을 함께 확인하는 것이 좋습니다.",
    "metaTitle": "열로 병원 다녀온 뒤 다시 진료가 필요한 신호 | MomTools",
    "metaDescription": "열로 진료를 받은 뒤 다시 병원에 문의해야 하는 변화, 집에서 기록할 내용, 처방 후 확인할 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-revisit-timing",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 재진 시점 페이지를 처방 후 변화, 새 증상, 수분·소변 기준으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "열 병원 다녀왔는데 다시",
      "아기 열 재진",
      "열로 진료 후 고열",
      "아기 처방 후 열",
      "소아과 다시 가야 할 때",
      "아기 발열 재진 기준",
      "아이 열 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "진료 후에는 “새로 달라진 점”을 중심으로 봐요",
        "items": [
          "열로 병원에 다녀왔는데도 체온이 계속 오르면 처방이 맞는지, 다시 가야 하는지 불안할 수 있습니다. 이때는 같은 증상이 이어지는지, 새 증상이 생겼는지를 나눠 보는 것이 좋습니다.",
          "처방을 시작한 뒤 아이가 조금이라도 편해졌는지, 먹는 양과 소변이 유지되는지 확인하세요. 열이 있어도 컨디션이 회복되는 흐름이면 의료진 안내에 따라 관찰할 수 있습니다.",
          "반대로 진료 때 없던 발진, 귀 통증, 호흡 불편, 반복 구토, 설사, 심한 처짐이 새로 생기면 다시 문의할 이유가 됩니다.",
          "약을 먹였는데도 열이 남는다고 해서 임의로 다른 해열제나 감기약을 추가하는 것은 피해야 합니다. 제품 성분이 겹칠 수 있어 처방전이나 약 봉투 기준으로 확인하는 편이 안전합니다.",
          "재진을 고민할 때는 “언제 진료받았고, 어떤 약을 언제 먹였고, 이후 어떤 변화가 있었는지”를 짧게 정리하면 상담이 훨씬 명확해집니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "다시 문의하기 전 정리할 내용",
        "items": [
          "첫 진료 날짜와 진료 당시 증상 확인하기",
          "처방 약 이름, 복용 시간, 마지막 복용 시간 적기",
          "열이 줄었는지보다 아이 컨디션이 나아지는지 보기",
          "진료 후 새로 생긴 증상 따로 적기",
          "수분 섭취와 마지막 소변 시간 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "전화 상담 전에 준비할 것",
        "items": [
          "체온표와 약 복용 시간을 한 화면에 적어두세요.",
          "진료 후 달라진 증상을 “새로 생김/더 심해짐/줄어듦”으로 표시하세요.",
          "약 봉투나 처방 안내를 사진으로 준비하면 설명이 빠릅니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "다시 진료를 서두를 변화",
        "body": "진료 후에도 아이가 점점 처지거나, 수분을 거의 못 먹거나, 소변이 줄거나, 호흡이 힘들어 보이거나, 반복 구토·경련·입술색 변화·발진이 나타나면 기존 진료를 받았더라도 다시 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "진료 후 발열은 약 복용 시간과 아이 반응을 함께 봐야 해요. 발열 흐름을 정리할 때 아기 열 대처 가이드도 함께 참고해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj0037r8t62i4vkst3",
    "contentId": "cmqnsj8pr027hjot65ndrkle1",
    "path": "/qna/health/baby-fever-two-days",
    "title": "아기 열이 이틀째 이어지면 어떤 점을 기록해야 하나요?",
    "question": "아기 열이 이틀째 이어지면 어떤 점을 기록해야 하나요?",
    "summary": "아기 열이 이틀째 계속되면 체온을 몇 번이나 재야 할지, 어떤 내용을 병원에 말해야 할지 막막할 수 있어요. 체온 숫자만 적기보다 열이 오르는 시간, 아이 컨디션, 수분 섭취, 동반 증상을 같이 기록하는 것이 좋습니다.",
    "metaTitle": "아기 열 이틀째, 진료 전 기록할 체크포인트 | MomTools",
    "metaDescription": "아기 열이 이틀째 이어질 때 체온표, 아이 컨디션, 수분 섭취, 동반 증상 기록 방법과 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-two-days",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 이틀째 발열 페이지를 체온표, 수분·소변, 동반 증상 기록법 중심으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 열 이틀째",
      "아이 열 2일째",
      "아기 발열 기록",
      "열 기록 방법",
      "아기 열 상담 준비",
      "소아과 발열 기록",
      "아기 열 체크리스트"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "이틀째 열은 숫자보다 “흐름”을 적어두면 좋아요",
        "items": [
          "열이 이틀째 이어지면 부모는 체온계 숫자만 계속 확인하게 되기 쉽습니다. 하지만 진료나 상담 때는 최고 체온뿐 아니라 아이가 어떻게 지냈는지가 더 중요한 단서가 됩니다.",
          "체온은 너무 자주 재기보다 같은 방법으로 일정한 간격을 두고 기록하세요. 재는 부위와 체온계를 바꾸면 비교가 어려워집니다.",
          "아이 컨디션은 “잘 먹음, 조금 마심, 계속 잠만 잠, 평소처럼 놀다 쉬었음”처럼 짧게 적어도 충분합니다. 말보다 실제 행동 기록이 더 선명합니다.",
          "동반 증상도 함께 적어보세요. 콧물·기침·구토·설사·귀 통증·발진이 언제부터 있었는지 알면 열의 흐름을 설명하기 쉽습니다.",
          "이틀째라는 사실만으로 무조건 응급이라고 볼 수는 없지만, 월령이 어리거나 아이 반응이 나빠지는 경우는 더 빨리 상담하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "기록에 넣으면 좋은 항목",
        "items": [
          "체온을 잰 시간과 측정 부위 적기",
          "하루 최고 체온과 열이 오른 시간대 표시하기",
          "먹은 양, 마신 양, 마지막 소변 시간 적기",
          "해열제 복용 시간과 이후 반응 기록하기",
          "기침, 콧물, 구토, 설사, 발진 같은 동반 증상 적기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "간단한 기록 예시",
        "items": [
          "“오전 8시 38.2도, 물 조금 마심, 소변 있음”처럼 짧게 적어도 괜찮아요.",
          "밤에만 열이 오르는지, 낮에도 이어지는지 구분해보세요.",
          "사진이 필요한 발진이나 변 변화는 시간과 함께 남겨두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "기록보다 상담이 먼저인 경우",
        "body": "이틀째 열이 이어지면서 아이가 깨우기 어려울 만큼 처지거나, 수분 섭취가 거의 없거나, 소변이 줄거나, 호흡이 힘들어 보이거나, 반복 구토·경련·입술색 변화가 있으면 기록을 더 기다리지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "발열 기록을 할 때는 월령과 상담 신호를 함께 보는 것이 좋아요. 아기 열 대처 가이드에서 기준을 다시 확인할 수 있습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj0038r8t6w0ycixmg",
    "contentId": "cmqnsj8720238jot6jxilip3i",
    "path": "/qna/health/baby-fever-with-chills",
    "title": "아기가 오한처럼 떨면서 열이 나면 어떻게 구분해야 하나요?",
    "question": "아기가 오한처럼 떨면서 열이 나면 어떻게 구분해야 하나요?",
    "summary": "아이가 열이 오르면서 몸을 덜덜 떨면 오한인지 경련인지 헷갈릴 수 있어요. 떨림 자체보다 아이가 눈을 맞추고 반응하는지, 몸이 뻣뻣해지는지, 입술색이나 호흡이 달라지는지를 먼저 봐야 합니다.",
    "metaTitle": "아기 열과 오한, 경련 신호와 구분하는 법 | MomTools",
    "metaDescription": "열이 나면서 아이가 떨 때 오한처럼 보이는 떨림과 경련 의심 신호, 집에서 확인할 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-with-chills",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 오한·떨림 페이지를 오한과 경련 의심 신호 구분, 보호자 초기 행동 중심으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 오한 열",
      "아기 열 떨림",
      "열날 때 몸 떨림",
      "열성경련 신호",
      "아이 오한 대처",
      "아기 고열 오한",
      "아기 경련 의심"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "오한인지 경련인지 볼 때는 반응을 먼저 봐요",
        "items": [
          "열이 오르는 과정에서 아이가 춥다고 느끼며 떨 수 있습니다. 부모 눈에는 경련처럼 보여 놀랄 수 있지만, 떨림의 모양과 아이 반응을 함께 봐야 합니다.",
          "오한에 가까운 떨림은 아이가 보호자를 알아보고, 안아주면 조금 진정되거나, 말을 알아듣는 모습이 남아 있는 경우가 많습니다.",
          "반대로 몸이 뻣뻣해지거나 팔다리가 반복적으로 움직이고, 부르거나 만져도 반응이 약하거나, 눈맞춤이 끊기면 경련 가능성을 생각해야 합니다.",
          "춥다고 해서 두꺼운 이불로 오래 싸두면 열이 더 갇힐 수 있어요. 아이가 떨면 가볍게 덮어주되, 몸통이 과하게 뜨거워지는지 봐주세요.",
          "경련이 의심되는 상황에서는 입에 무언가를 넣거나 억지로 붙잡기보다 주변을 치우고 시간을 확인한 뒤 빠르게 도움을 요청하는 것이 우선입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "떨림을 볼 때 확인할 기준",
        "items": [
          "아이를 불렀을 때 눈을 맞추거나 반응하는지 보기",
          "몸 전체가 뻣뻣해지는지, 팔다리가 반복적으로 움직이는지 확인하기",
          "입술색 변화나 숨쉬기 어려운 모습이 있는지 보기",
          "떨림이 시작되고 멈춘 시간을 기록하기",
          "이전에도 열성경련이나 비슷한 일이 있었는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "보호자가 먼저 할 일",
        "items": [
          "아이 주변의 딱딱한 물건을 치우고 안전한 자세를 유지해주세요.",
          "떨림이 얼마나 지속되는지 시간을 확인하세요.",
          "열이 오르기 전후 증상과 복용한 약이 있다면 함께 적어두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 도움을 요청할 신호",
        "body": "몸이 뻣뻣해지거나 반복적으로 떨고, 의식이나 눈맞춤이 끊기거나, 입술색이 변하거나, 호흡이 이상하거나, 경련처럼 보이는 움직임이 이어지면 즉시 진료 도움을 요청하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "오한처럼 보이는 떨림은 발열 흐름과 함께 보는 것이 좋아요. 열성경련이 걱정될 때도 발열 기준을 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj0039r8t61ok5l288",
    "contentId": "cmqnsj43n013ljot62gfmmx7k",
    "path": "/qna/health/baby-fever-with-cold-hands",
    "title": "열이 있는데 손발이 차가운 아기는 어떻게 봐야 하나요?",
    "question": "열이 있는데 손발이 차가운 아기는 어떻게 봐야 하나요?",
    "summary": "아기 몸은 뜨거운데 손발이 차가우면 순환 문제인지, 열이 더 오르려는 건지 걱정될 수 있어요. 손발 온도만 보지 말고 몸통 열감, 피부색, 호흡, 아이 반응과 수분 섭취를 함께 확인해야 합니다.",
    "metaTitle": "아기 열과 차가운 손발, 집에서 볼 기준 | MomTools",
    "metaDescription": "열이 있는데 손발이 차가운 아기를 볼 때 몸통 열감, 피부색, 호흡, 수분 섭취와 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-with-cold-hands",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 손발 차가움 동반 발열 페이지를 말초 온도보다 몸통 열감·피부색·호흡·반응 중심으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 열 손발 차가움",
      "아이 열 손발 차가운",
      "아기 발열 손발 차가움",
      "아기 손발 차가움 열",
      "고열 손발 차가움",
      "아기 열 대처",
      "아이 컨디션 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "손발보다 몸통과 아이 반응을 같이 봐요",
        "items": [
          "열이 있는데 손발이 차갑게 느껴지면 부모는 몸 안에서 무슨 문제가 생긴 건 아닌지 걱정하게 됩니다. 하지만 손발은 주변 온도와 혈액순환 변화에 영향을 많이 받아요.",
          "먼저 몸통, 목 뒤, 배가 함께 뜨거운지 확인해보세요. 손발만 차가운지, 몸 전체가 축축하고 창백한지에 따라 보는 기준이 달라집니다.",
          "피부색도 봐야 합니다. 입술이나 얼굴빛이 파래 보이거나 회색빛으로 처져 보이면 단순 손발 차가움으로 넘기면 안 됩니다.",
          "아이 반응과 수분 섭취가 더 중요합니다. 평소처럼 눈을 맞추고 수유나 물을 받아들이는지, 소변이 줄지 않았는지 같이 봐주세요.",
          "손발이 차갑다고 뜨겁게 덥히기보다 아이가 과열되지 않게 옷과 이불을 조절하고, 체온 흐름과 컨디션을 함께 확인하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "손발 차가움과 함께 볼 것",
        "items": [
          "몸통과 목 뒤도 뜨거운지 확인하기",
          "입술색, 얼굴빛, 피부가 창백하거나 얼룩덜룩한지 보기",
          "호흡이 빠르거나 힘들어 보이는지 확인하기",
          "수분 섭취와 소변 횟수가 줄었는지 보기",
          "아이를 깨웠을 때 평소처럼 반응하는지 살피기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 해볼 일",
        "items": [
          "두꺼운 이불이나 과한 옷은 줄이고 실내 온도를 편하게 맞춰주세요.",
          "체온은 같은 방법으로 일정 간격을 두고 다시 확인하세요.",
          "손발 온도만 적지 말고 몸통 열감과 아이 반응을 함께 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 변화",
        "body": "손발이 차가우면서 아이가 축 처지고, 입술색이 변하거나 피부가 창백·얼룩덜룩해 보이거나, 숨쉬기 힘들어 보이거나, 소변이 줄면 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열과 손발 차가움은 체온 숫자만으로 보기 어렵습니다. 발열 중 컨디션 기준은 아기 열 대처 가이드에서 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj003ar8t6qmkb0le4",
    "contentId": "cmqnsj903029ujot6eiicc489",
    "path": "/qna/health/baby-fever-with-rash-spots",
    "title": "열과 작은 붉은 점이 같이 보이면 무엇을 먼저 봐야 하나요?",
    "question": "열과 작은 붉은 점이 같이 보이면 무엇을 먼저 봐야 하나요?",
    "summary": "아기에게 열이 나면서 작은 붉은 점이 보이면 땀띠인지, 감염이나 알레르기 반응인지 불안할 수 있어요. 붉은 점의 모양, 눌렀을 때 색 변화, 퍼지는 속도, 아이 컨디션을 함께 확인하는 것이 좋습니다.",
    "metaTitle": "아기 열과 작은 붉은 점, 확인할 신호 | MomTools",
    "metaDescription": "열과 작은 붉은 점이 같이 보일 때 발진 모양, 눌렀을 때 색 변화, 퍼지는 속도, 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-with-rash-spots",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 열+작은 붉은 점 페이지를 발진 모양·색 변화·퍼짐·컨디션 기준으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 열 붉은 점",
      "아이 열 발진 점",
      "아기 붉은 반점 열",
      "열 작은 빨간 점",
      "아기 발진 병원",
      "아기 열 발진",
      "아이 발진 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "붉은 점은 모양과 퍼지는 속도를 같이 봐야 해요",
        "items": [
          "열이 나면서 작은 붉은 점이 보이면 부모는 바로 심각한 발진인지 걱정하게 됩니다. 발진 이름을 맞히려 하기보다 먼저 모양과 아이 상태를 나눠 보는 것이 좋습니다.",
          "붉은 점이 눌렀을 때 잠시 옅어지는지, 보라색이나 멍처럼 남는지 확인해보세요. 색이 그대로 남는 반점은 더 조심해서 봐야 합니다.",
          "발진이 어디에서 시작해 얼마나 빨리 퍼지는지도 중요합니다. 얼굴, 몸통, 팔다리, 손발, 입안에 함께 보이는지 사진으로 남겨두면 변화 비교가 쉽습니다.",
          "아이 컨디션도 함께 봐야 해요. 잘 먹고 반응이 괜찮은지, 아니면 축 처지고 열이 계속 오르는지에 따라 다음 행동이 달라질 수 있습니다.",
          "새 음식, 새 약, 예방접종, 어린이집 유행 질환이 있었는지 함께 정리하면 진료 때 상황 설명이 훨씬 쉬워집니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "붉은 점을 볼 때 확인할 것",
        "items": [
          "눌렀을 때 색이 옅어지는지 확인하기",
          "보라색 반점, 물집, 진물, 입안 병변이 있는지 보기",
          "발진이 퍼지는 속도와 위치를 사진으로 남기기",
          "아이의 수분 섭취, 소변 횟수, 반응 확인하기",
          "새 음식·약·접종·어린이집 유행 증상이 있었는지 떠올리기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 기록해둘 것",
        "items": [
          "처음 발견한 시간과 부위를 적고 같은 조명에서 사진을 남겨두세요.",
          "체온 변화와 발진이 퍼진 순서를 따로 적어보세요.",
          "가려움, 통증, 입안 통증, 손발 부종이 있는지 관찰하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "빠르게 상담할 신호",
        "body": "열과 함께 아이가 매우 처지거나, 붉은 점이 보라색 반점처럼 보이거나 눌러도 색이 옅어지지 않거나, 호흡이 힘들어 보이거나, 반복 구토·수분 섭취 감소·입술색 변화가 있으면 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열과 발진은 체온과 피부 변화가 같이 움직이는지 봐야 해요. 발열 상담 신호는 아기 열 대처 가이드에서 다시 확인할 수 있습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj003br8t6irndn3ze",
    "contentId": "cmqnsjd5s03aajot668k8h5d5",
    "path": "/qna/health/baby-fewer-wet-diapers",
    "title": "기저귀가 평소보다 덜 젖으면 탈수를 의심해야 하나요?",
    "question": "기저귀가 평소보다 덜 젖으면 탈수를 의심해야 하나요?",
    "summary": "아기가 평소보다 기저귀를 덜 적시면 수분이 부족한 건 아닌지 걱정될 수 있어요. 한 번 덜 젖은 것만으로 단정하지 말고 마지막 소변 시간, 입안 건조, 눈물, 먹는 양, 열·설사·구토 여부를 함께 봐야 합니다.",
    "metaTitle": "아기 기저귀가 덜 젖을 때 탈수 확인 기준 | MomTools",
    "metaDescription": "기저귀가 평소보다 덜 젖을 때 마지막 소변 시간, 먹는 양, 입안 건조, 탈수 의심 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fewer-wet-diapers",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 기저귀 덜 젖음 페이지를 소변 감소·탈수 신호·수분 섭취 기록 중심으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 기저귀 덜 젖음",
      "아기 소변 줄어듦",
      "아기 탈수 신호",
      "기저귀 횟수 감소",
      "아기 소변 안 봄",
      "아기 입마름",
      "영아 탈수 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "기저귀 한 번보다 전체 흐름을 봐야 해요",
        "items": [
          "기저귀가 평소보다 덜 젖으면 부모는 탈수를 먼저 걱정하게 됩니다. 실제로 소변이 줄어드는 것은 아이의 수분 상태를 볼 때 중요한 단서가 될 수 있어요.",
          "다만 한 번 덜 젖은 것만으로 바로 탈수라고 단정하기는 어렵습니다. 잠을 오래 잤는지, 땀을 많이 흘렸는지, 먹는 양이 줄었는지 함께 봐야 합니다.",
          "마지막으로 소변을 본 시간이 언제인지, 기저귀가 완전히 마른 시간이 길어지는지 확인해보세요. 열, 설사, 구토가 함께 있으면 수분 부족 위험이 더 커질 수 있습니다.",
          "입안이 마르고 울 때 눈물이 적거나, 아이가 축 처지고 잘 먹지 못하면 단순 기저귀 변화로 넘기기 어렵습니다.",
          "특히 어린 아기는 수분 부족이 빠르게 진행될 수 있으니, 월령이 어리거나 소변 감소가 이어지면 상담을 미루지 않는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "소변 감소와 함께 볼 신호",
        "items": [
          "마지막으로 젖은 기저귀를 확인한 시간 적기",
          "평소 먹던 양보다 수유·물 섭취가 줄었는지 보기",
          "입술과 입안이 마른지 확인하기",
          "울 때 눈물이 줄었는지 살피기",
          "열, 설사, 구토가 함께 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 바로 정리할 것",
        "items": [
          "마지막 젖은 기저귀 시간과 먹은 양을 같이 기록하세요.",
          "억지로 많이 먹이기보다 가능한 범위에서 조금씩 자주 먹는지 확인하세요.",
          "설사나 구토가 있다면 횟수와 양상을 따로 적어두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "탈수 상담이 필요한 경우",
        "body": "기저귀가 오래 마른 상태로 이어지고, 입안이 마르거나 눈물이 줄고, 아이가 축 처지거나 수분을 거의 못 먹거나, 열·설사·구토가 함께 있으면 빠르게 진료 상담을 권합니다. 6개월 미만 아기는 더 일찍 확인하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "소변 감소는 열이나 설사와 함께 볼 때 더 중요해질 수 있어요. 발열 중 탈수 신호는 아기 열 대처 가이드와 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zyj003cr8t6issh4i16",
    "contentId": "cmqnsjgd2041tjot6fmuinkr6",
    "path": "/qna/health/baby-flat-head-worry",
    "title": "뒤통수가 납작해 보이면 병원에 가야 하나요?",
    "question": "뒤통수가 납작해 보이면 병원에 가야 하나요?",
    "summary": "아기 뒤통수가 납작해 보이면 머리 모양이 계속 남는 건 아닌지 걱정될 수 있어요. 눕는 방향이 한쪽으로 고정되는지, 목을 돌리는 범위가 좁은지, 머리 모양이 점점 심해지는지를 함께 확인하는 것이 좋습니다.",
    "metaTitle": "아기 뒤통수 납작함, 병원 상담이 필요한 경우 | MomTools",
    "metaDescription": "아기 뒤통수가 납작해 보일 때 자세 습관, 목 돌림, 터미타임, 진료 상담이 필요한 변화를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-flat-head-worry",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-011: 뒤통수 납작함 페이지를 자세 습관, 목 움직임, 터미타임, 상담 신호 중심으로 재작성.",
    "duplicateMemo": "batch-011에서 해열제 반응, 반복 발열, 재진 시점, 오한·손발 차가움, 열+붉은 점, 탈수 의심, 뒤통수 납작함을 각각 다른 검색 의도와 확인 기준으로 분리하고 발열 관련 반복 문장을 줄임.",
    "keywords": [
      "아기 뒤통수 납작",
      "아기 납작머리",
      "아기 두상 걱정",
      "사두증 의심",
      "아기 머리 모양",
      "터미타임 두상",
      "아기 목 한쪽만 봄"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "머리 모양은 자세 습관과 목 움직임을 같이 봐요",
        "items": [
          "아기 뒤통수가 납작해 보이면 부모는 머리 모양이 계속 남을까 걱정하게 됩니다. 누워 지내는 시간이 많은 시기에는 한쪽에 압력이 반복되면서 납작해 보일 수 있어요.",
          "먼저 아기가 항상 같은 쪽만 보고 자는지, 고개를 반대쪽으로 돌리기 어려워하는지 확인해보세요. 목 움직임이 제한되어 있으면 자세만 바꾸기보다 상담이 필요할 수 있습니다.",
          "깨어 있을 때는 보호자가 지켜보는 상태에서 엎드려 노는 시간을 조금씩 늘리고, 안아주기와 방향 바꾸기를 섞어주는 것이 좋습니다. 다만 잠잘 때는 안전수면 원칙을 우선해야 합니다.",
          "머리 모양을 사진으로 남겨 같은 각도에서 비교하면 실제로 나아지는지, 더 비대칭이 커지는지 보기 쉽습니다.",
          "납작한 모양이 점점 심해지거나 얼굴 비대칭, 귀 위치 차이, 목 돌림 제한이 보이면 소아청소년과나 영유아 검진에서 상담해보는 편이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집에서 볼 두상 체크포인트",
        "items": [
          "아기가 자주 보는 방향이 한쪽으로 고정되는지 확인하기",
          "반대쪽으로 고개를 돌릴 때 불편해 보이는지 보기",
          "뒤통수 납작함이 한쪽인지 전체적으로 납작한지 살피기",
          "귀 위치나 이마 모양이 좌우로 달라 보이는지 확인하기",
          "같은 각도 사진으로 2~4주 간격 변화 비교하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘부터 해볼 수 있는 자세 조절",
        "items": [
          "깨어 있는 시간에 보호자가 지켜보며 짧은 터미타임을 시도하세요.",
          "장난감이나 보호자 위치를 바꿔 아기가 양쪽을 번갈아 보게 해주세요.",
          "카시트, 바운서, 유모차처럼 뒤통수 압력이 오래 가는 시간을 줄여보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담을 권하는 변화",
        "body": "머리 모양 비대칭이 점점 심해지거나, 한쪽으로만 고개를 돌리거나, 목 움직임이 제한되어 보이거나, 얼굴·귀 위치가 달라 보이거나, 정수리 모양이 특이하게 튀어나와 보이면 영유아 검진이나 소아청소년과에서 상담해보는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 개월수 계산기",
          "/tools/baby-age"
        ],
        "body": "두상 변화는 월령과 깨어 있는 활동 시간에 따라 보는 기준이 달라질 수 있어요. 정확한 개월수가 헷갈리면 아기 개월수 계산기로 먼저 확인해보세요."
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-011 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 11`,
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

  console.log("batch-011 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-011 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-fever-not-down");
  console.log("- http://localhost:3000/qna/health/baby-fever-repeats-everyday");
  console.log("- http://localhost:3000/qna/health/baby-fever-with-chills");
  console.log("- http://localhost:3000/qna/health/baby-fewer-wet-diapers");
  console.log("- http://localhost:3000/qna/health/baby-flat-head-worry");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-011 반영 실패");
  console.error(error);
  process.exit(1);
});
