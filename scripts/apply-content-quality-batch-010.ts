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
    "batchItemId": "cmqs71zxm002sr8t6irx0nf29",
    "contentId": "cmqnsj7im01xajot6b5j6vduc",
    "path": "/qna/health/baby-fever-and-rash-together",
    "title": "열과 발진이 같이 있으면 무조건 병원에 가야 하나요?",
    "question": "열과 발진이 같이 있으면 무조건 병원에 가야 하나요?",
    "summary": "아이에게 열과 발진이 함께 보이면 단순 땀띠인지, 감염이나 알레르기처럼 확인이 필요한 상황인지 걱정될 수 있어요. 발진 모양과 퍼지는 속도, 아이의 반응, 수분 섭취, 호흡 상태를 함께 보면 다음 행동을 정하기 쉽습니다.",
    "metaTitle": "아이 열과 발진, 병원 상담이 필요한 신호 | MomTools",
    "metaDescription": "열과 발진이 함께 있을 때 집에서 먼저 볼 발진 모양, 아이 컨디션, 수분 섭취와 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-and-rash-together",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 열+발진 페이지를 발진 모양·퍼짐·아이 컨디션·수분 섭취 기준으로 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아이 열 발진",
      "아기 열 발진",
      "열과 발진 병원",
      "아이 발진 고열",
      "아기 발진 상담",
      "발진 퍼짐 확인",
      "아기 열 대처"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "열과 발진은 “모양과 아이 상태”를 같이 봐야 해요",
        "items": [
          "열이 나면서 발진이 보이면 부모 입장에서는 바로 병원에 가야 할지 당황할 수 있습니다. 모든 발진이 응급은 아니지만, 열과 함께 나타난 발진은 아이 상태를 조금 더 촘촘히 보는 편이 좋습니다.",
          "먼저 발진이 어디에서 시작해 어디로 퍼지는지, 눌렀을 때 색이 옅어지는지, 물집이나 보라색 반점처럼 보이는 부분이 있는지 확인해보세요.",
          "아이의 반응도 중요합니다. 평소처럼 눈을 맞추고 마시고 소변을 보는지, 아니면 축 처지고 깨우기 어려운지에 따라 상담 필요성이 달라질 수 있어요.",
          "최근 예방접종, 새 음식, 새 약, 감기 증상, 어린이집 유행 질환이 있었는지도 함께 적어두면 진료 때 설명하기 쉽습니다.",
          "발진 이름을 집에서 맞히려고 하기보다 “열이 언제 시작됐고, 발진이 언제 어디에 생겼는지”를 정리하는 것이 더 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "발진을 볼 때 확인할 기준",
        "items": [
          "발진이 얼굴·몸통·팔다리 중 어디에서 시작했는지 보기",
          "눌렀을 때 색이 잠시 옅어지는지, 보라색 반점처럼 그대로 남는지 확인하기",
          "물집, 진물, 입안 통증, 손발 부종이 함께 있는지 살피기",
          "아이의 눈맞춤, 수분 섭취, 소변 횟수, 호흡이 평소와 같은지 보기",
          "새 약·새 음식·예방접종·어린이집 유행 증상이 있었는지 떠올리기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 집에서 정리할 것",
        "items": [
          "발진이 처음 보인 시간과 퍼진 부위를 사진으로 남겨두세요.",
          "체온, 먹은 양, 소변 횟수, 아이 반응을 같은 시간대별로 적어두세요.",
          "가려워 긁는지, 입안 통증 때문에 못 먹는지처럼 아이 행동을 함께 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담을 권하는 신호",
        "body": "열과 함께 아이가 매우 처지거나 깨우기 어렵고, 숨쉬기 힘들어 보이거나, 보라색 반점·물집·입안 병변·반복 구토·수분 섭취 감소가 있으면 집에서만 지켜보지 말고 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열과 발진이 같이 보이면 체온 숫자뿐 아니라 아이 컨디션과 동반 증상을 함께 봐야 해요. 발열 기준이 헷갈리면 아기 열 대처 가이드도 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxm002tr8t6rjtdm0ge",
    "contentId": "cmqnsj4fx016ljot673yph387",
    "path": "/qna/health/baby-fever-and-red-face",
    "title": "얼굴이 빨갛고 뜨거울 때 체온 외에 뭘 봐야 하나요?",
    "question": "얼굴이 빨갛고 뜨거울 때 체온 외에 뭘 봐야 하나요?",
    "summary": "아이 얼굴이 빨갛고 뜨거우면 열이 오른 건지, 더위·울음·활동 후 일시적인 홍조인지 헷갈릴 수 있어요. 얼굴색만 보지 말고 체온 재측정, 몸통 열감, 땀, 수분 섭취, 아이 반응을 함께 확인하는 것이 좋습니다.",
    "metaTitle": "아기 얼굴이 빨갛고 뜨거울 때 확인할 점 | MomTools",
    "metaDescription": "아기 얼굴 홍조와 열감이 있을 때 체온 외에 봐야 할 몸통 열감, 수분 섭취, 실내 온도, 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-and-red-face",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 얼굴 홍조와 열감 페이지를 더위·울음·활동 영향과 실제 발열 흐름을 나눠 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 얼굴 빨개짐",
      "아기 얼굴 뜨거움",
      "아기 홍조 열",
      "아기 체온 확인",
      "아기 열감",
      "아이 얼굴 빨개짐",
      "아기 발열 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "얼굴색보다 몸통 열감과 컨디션을 같이 봐요",
        "items": [
          "아이 얼굴이 갑자기 빨개지면 열이 난다고 느껴질 수 있지만, 울고 난 뒤나 뛰어논 뒤, 방이 덥거나 이불을 오래 덮은 뒤에도 얼굴이 뜨거워 보일 수 있습니다.",
          "먼저 몸통과 목 뒤가 함께 뜨거운지, 땀이 나는지, 손발만 차갑고 몸은 뜨거운지 확인해보세요. 얼굴만 보고 판단하면 실제 체온 흐름을 놓칠 수 있습니다.",
          "체온은 아이가 조금 안정된 뒤 같은 체온계와 같은 부위로 다시 재는 것이 좋습니다. 바로 잰 숫자보다 다시 잰 흐름이 더 도움이 됩니다.",
          "아이 컨디션도 함께 봐야 해요. 평소처럼 마시고 놀고 반응하면 조금 더 관찰할 수 있지만, 축 처지고 수분 섭취가 줄면 상담 기준에 가까워집니다.",
          "얼굴 홍조가 발진처럼 번지거나, 입술색 변화·호흡 불편·반복 구토가 있으면 단순 열감으로 넘기지 않는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "체온 외에 볼 것",
        "items": [
          "몸통, 목 뒤, 겨드랑이 쪽도 함께 뜨거운지 확인하기",
          "방 온도, 옷 두께, 이불, 목욕·울음·활동 직후인지 보기",
          "물을 마시거나 수유를 받아들이는지 확인하기",
          "얼굴 빨개짐이 발진처럼 번지는지, 눌렀을 때 달라지는지 보기",
          "아이가 평소처럼 눈을 맞추고 반응하는지 살피기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "바로 해볼 일",
        "items": [
          "두꺼운 옷과 이불을 정리하고 아이가 편안해진 뒤 체온을 다시 재보세요.",
          "얼굴색만 보지 말고 먹은 양, 소변 횟수, 활동 반응을 함께 적어두세요.",
          "홍조가 반복되는 시간대와 상황을 기록하면 더위·활동·발열 흐름을 구분하기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 변화",
        "body": "얼굴 홍조와 함께 38도 이상 발열이 반복되거나, 아이가 축 처지고 잘 먹지 못하거나, 호흡이 힘들어 보이거나, 발진이 빠르게 퍼지거나, 입술색 변화가 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "얼굴이 뜨겁게 느껴질 때는 체온 재는 방법과 발열 상담 신호를 함께 확인하면 판단이 더 쉬워요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxm002ur8t6to5kf28u",
    "contentId": "cmqnsj4dw0163jot66oxa8oi4",
    "path": "/qna/health/baby-fever-and-shivering",
    "title": "열날 때 몸을 떨면 경련 전조일 수 있나요?",
    "question": "열날 때 몸을 떨면 경련 전조일 수 있나요?",
    "summary": "아이에게 열이 오르면서 몸을 덜덜 떠는 모습이 보이면 오한인지, 열성경련 전조인지 걱정될 수 있어요. 의식이 또렷한 떨림인지, 뻣뻣해지거나 눈맞춤이 끊기는 움직임인지 구분해서 봐야 합니다.",
    "metaTitle": "아기 열날 때 몸 떨림, 오한과 경련 신호 구분 | MomTools",
    "metaDescription": "열날 때 아이가 몸을 떠는 경우 오한처럼 보이는 떨림과 열성경련 의심 신호를 구분하는 기준, 바로 상담할 상황을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-and-shivering",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 발열 중 몸 떨림을 오한과 열성경련 의심 신호로 구분해 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "열날 때 몸 떨림",
      "아기 오한",
      "열성경련 전조",
      "아기 열 떨림",
      "아기 경련 신호",
      "아이 발열 오한",
      "아기 고열 떨림"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "떨림이 있어도 모두 경련은 아니지만 반응을 봐야 해요",
        "items": [
          "열이 오르는 과정에서 아이가 춥다고 느끼며 몸을 떨 수 있습니다. 이때 아이가 눈을 맞추고 말을 알아듣거나 안으면 진정되는지 먼저 보세요.",
          "오한처럼 보이는 떨림은 의식이 유지되고 아이가 보호자를 알아보는 경우가 많습니다. 반대로 몸이 뻣뻣해지거나 팔다리가 반복적으로 움직이고, 부르거나 만져도 반응이 약하면 경련 가능성을 생각해야 합니다.",
          "떨린다고 해서 바로 두꺼운 이불로 꽁꽁 싸면 열이 더 갇힐 수 있어요. 아이가 추워하면 가볍게 덮되, 몸통이 과하게 뜨거워지지 않게 봐주세요.",
          "체온이 빠르게 오르는지, 해열 후 반응이 어떤지, 경련처럼 보이는 움직임이 몇 분 지속됐는지 기록하면 상담 때 도움이 됩니다.",
          "경련이 의심되면 억지로 입에 무언가를 넣거나 흔들어 깨우려 하지 말고, 안전한 자세와 시간 확인이 먼저입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "오한과 경련을 나눠 볼 기준",
        "items": [
          "아이를 불렀을 때 눈을 맞추거나 반응하는지 확인하기",
          "몸 전체가 뻣뻣해지거나 팔다리가 반복적으로 움직이는지 보기",
          "입술색이 파래지거나 숨쉬기 어려워 보이는지 확인하기",
          "떨림이 시작된 시간과 멈춘 시간을 기록하기",
          "열이 처음 오른 날인지, 이전에도 비슷한 일이 있었는지 떠올리기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "보호자가 먼저 할 일",
        "items": [
          "아이 주변의 딱딱한 물건을 치우고 안전한 자세를 유지해 주세요.",
          "떨림이나 경련처럼 보이는 움직임이 몇 분 이어졌는지 시간을 확인하세요.",
          "체온, 해열 여부, 아이 반응을 적어두고 필요하면 바로 의료 상담을 받으세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 도움을 받아야 하는 신호",
        "body": "부르거나 만져도 반응이 없고 몸이 뻣뻣해지거나 반복적으로 떨리는 경우, 입술색 변화·호흡곤란·경련이 길게 이어짐·반복 경련·경련 뒤 깨우기 어려움이 있으면 즉시 응급 도움이나 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 오르는 과정에서 떨림이 보이면 체온 흐름과 경고 신호를 함께 봐야 하므로 아기 열 대처 가이드를 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxm002vr8t6t5snctx5",
    "contentId": "cmqnsj4bq015ljot66thkf02k",
    "path": "/qna/health/baby-fever-and-sleepy",
    "title": "열이 나면서 계속 자려고만 하면 위험한가요?",
    "question": "열이 나면서 계속 자려고만 하면 위험한가요?",
    "summary": "열이 있는 아이가 평소보다 오래 자려고 하면 회복 과정인지, 위험한 졸림인지 구분이 필요해요. 잠을 자는 시간보다 깨웠을 때 반응하는지, 수분을 받아들이는지, 호흡이 편한지를 먼저 봐야 합니다.",
    "metaTitle": "아기 열나고 계속 잠, 위험한 졸림 구분 기준 | MomTools",
    "metaDescription": "열이 나면서 아이가 계속 자려고 할 때 회복을 위한 수면인지, 진료 상담이 필요한 졸림인지 확인하는 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-and-sleepy",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 발열 중 졸림 페이지를 깨웠을 때 반응·수분 섭취·소변·호흡 기준으로 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 열 졸림",
      "열나고 계속 잠",
      "아기 열 축 처짐",
      "아기 깨우기 어려움",
      "아기 발열 반응",
      "아기 열 수분 섭취",
      "소아과 상담 신호"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "자는 시간보다 “깨웠을 때 반응”이 더 중요해요",
        "items": [
          "열이 나면 아이가 평소보다 더 자려고 할 수 있습니다. 몸이 힘들어 쉬는 경우도 있지만, 부모가 봐야 할 핵심은 잠 자체가 아니라 깨웠을 때의 반응입니다.",
          "살짝 깨웠을 때 눈을 뜨고 보호자를 알아보는지, 물이나 수유를 조금이라도 받아들이는지 확인해보세요. 잠깐 칭얼대다 다시 자더라도 반응이 분명하면 기록하며 볼 수 있습니다.",
          "반대로 깨우기 어렵고, 눈맞춤이 거의 없거나, 몸에 힘이 빠진 듯 축 늘어지면 단순히 “많이 잔다”로 보기 어렵습니다.",
          "열이 높은데 수분 섭취와 소변이 줄면 탈수 신호도 같이 봐야 합니다. 특히 입이 마르고 눈물이 적고 마지막 소변 시간이 오래됐다면 상담을 서두르는 편이 좋습니다.",
          "밤에는 판단이 더 어려우니, 체온과 함께 깨웠을 때 반응·마신 양·호흡 모습을 짧게 메모해두세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "잠이 많아졌을 때 볼 것",
        "items": [
          "깨웠을 때 눈을 뜨고 보호자를 알아보는지 확인하기",
          "물, 수유, 전해질 음료 등 수분을 조금이라도 받아들이는지 보기",
          "마지막 소변 시간이 평소보다 많이 늦어졌는지 확인하기",
          "숨이 빠르거나 가슴이 들어가 보이는지 살피기",
          "해열 후에도 처짐이 계속되는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 확인할 방법",
        "items": [
          "억지로 계속 깨우기보다 일정 간격으로 반응과 수분 섭취 가능 여부를 확인하세요.",
          "마신 양과 기저귀가 젖은 시간을 함께 기록하세요.",
          "깨우기 어려운 졸림인지, 잠깐 깨서 반응하는 피곤함인지 구분해 메모해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 미루지 않을 신호",
        "body": "열이 있으면서 아이를 깨우기 어렵거나, 반응이 흐리고 축 처지거나, 수분 섭취와 소변이 줄거나, 호흡이 힘들어 보이거나, 경련·반복 구토가 있으면 빠르게 의료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "발열 중 졸림은 체온뿐 아니라 반응과 수분 섭취를 함께 봐야 하므로 아기 열 대처 가이드와 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxm002wr8t6eq1xkm93",
    "contentId": "cmqnsj8ff0254jot6gd2zoapi",
    "path": "/qna/health/baby-fever-and-sleepy-new-2",
    "title": "열이 나면서 계속 자려고 하는 아기는 위험한가요?",
    "question": "열이 나면서 계속 자려고 하는 아기는 위험한가요?",
    "summary": "아기가 열이 나면서 자꾸 잠들려고 하면 쉬게 둬도 되는지, 바로 병원에 가야 하는지 고민됩니다. 자는 모습만 보지 말고 중간에 깨웠을 때 눈맞춤, 울음 힘, 수분 섭취, 소변 횟수가 유지되는지 확인해보세요.",
    "metaTitle": "열나는 아기가 계속 자려고 할 때 확인할 신호 | MomTools",
    "metaDescription": "열이 나면서 계속 자려는 아기를 볼 때 회복 수면과 위험한 처짐을 나누는 기준, 집에서 기록할 점과 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-and-sleepy-new-2",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 중복 졸림 페이지를 회복 수면과 위험한 처짐 구분, 야간 관찰 기준으로 차별화해 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "열나는 아기 계속 잠",
      "아기 열 자려고 함",
      "아기 발열 처짐",
      "아기 열 수유 안함",
      "아기 열 소변 감소",
      "아기 깨워도 반응",
      "아기 열 병원 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "쉬는 잠인지, 처지는 모습인지 나눠 봐야 해요",
        "items": [
          "아기가 열이 날 때 잠을 더 자는 것은 드물지 않지만, 부모가 가장 불안한 지점은 “그냥 쉬는 건지, 상태가 나빠지는 건지”입니다.",
          "잠깐 깨웠을 때 울음이 약하지 않은지, 눈을 마주치는지, 품에 안겼을 때 몸이 축 늘어지지 않는지 살펴보세요.",
          "수유나 물을 완전히 거부하고, 기저귀가 잘 젖지 않고, 입술이 마르면 잠이 많은 것보다 탈수 신호가 더 중요해질 수 있습니다.",
          "해열 후 체온이 조금 내려가도 계속 처지고 깨우기 어렵다면 숫자가 내려간 것만으로 안심하기 어렵습니다.",
          "한밤중에는 판단이 흔들리기 쉬우니 “체온-마신 양-소변-깨웠을 때 반응” 네 가지를 짧게 기록하는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "위험한 처짐인지 확인하기",
        "items": [
          "깨웠을 때 눈을 뜨고 보호자에게 반응하는지 보기",
          "울음소리가 평소보다 현저히 약한지 확인하기",
          "수유나 물을 거의 못 받아들이는지 보기",
          "기저귀가 평소보다 눈에 띄게 덜 젖는지 확인하기",
          "호흡이 빠르거나 가슴이 들어가는지 살피기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 밤 관찰할 때",
        "items": [
          "아이가 잘 때도 너무 두껍게 덮지 말고 실내를 덥지 않게 유지하세요.",
          "수분을 한 번에 많이 먹이려 하기보다 받아들일 수 있는 양을 조금씩 시도하세요.",
          "반응이 흐려지거나 소변이 줄면 아침까지 기다리지 말고 상담을 생각하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "쉬는 잠으로 보기 어려운 경우",
        "body": "깨워도 반응이 약하거나 계속 축 처지고, 수분 섭취가 거의 안 되거나 소변이 줄고, 호흡곤란·입술색 변화·경련·반복 구토가 있으면 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열과 졸림이 함께 보일 때는 아기 열 대처 가이드에서 수분 섭취와 상담 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxn002xr8t6ltqc08o1",
    "contentId": "cmqnsj8hh025ljot6ayskv0qt",
    "path": "/qna/health/baby-fever-cold-feet",
    "title": "열은 있는데 발이 차가우면 이불을 덮어줘야 하나요?",
    "question": "열은 있는데 발이 차가우면 이불을 덮어줘야 하나요?",
    "summary": "열이 나는데 발이 차가우면 더 춥다고 느끼는 건지, 이불을 더 덮어야 하는지 헷갈릴 수 있어요. 발끝만 보지 말고 몸통 열감, 땀, 피부색, 아이 반응을 함께 보면서 과하게 덮지 않는 것이 중요합니다.",
    "metaTitle": "열은 있는데 발이 차가울 때 이불을 덮어도 될까? | MomTools",
    "metaDescription": "아기 열이 있는데 발이 차가울 때 오한과 체온 상승 흐름을 구분하고, 이불·옷차림을 조절하는 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-cold-feet",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 발 차가움 페이지를 과보온 방지와 몸통 열감·피부색·반응 기준으로 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 열 발 차가움",
      "열나는데 발 차가움",
      "아기 오한 발 차가움",
      "아기 열 이불",
      "아기 손발 차가움",
      "아기 발열 옷차림",
      "아기 열 대처"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "발이 차가워도 몸을 너무 덥게 싸면 안 돼요",
        "items": [
          "열이 오르는 과정에서는 발끝이 차갑게 느껴질 수 있습니다. 그래서 부모는 아이가 춥다고 생각해 이불을 더 덮어주고 싶어져요.",
          "하지만 발만 차갑다고 두꺼운 이불로 감싸면 몸통의 열이 빠져나가지 못할 수 있습니다. 발끝보다 배와 등, 목 뒤가 얼마나 뜨거운지 함께 확인해보세요.",
          "아이가 떨고 힘들어하면 얇게 덮어 안정시킬 수는 있지만, 땀이 나거나 얼굴이 붉어지면 덮개를 줄여야 합니다.",
          "손발 차가움과 함께 입술색이 파래지거나, 피부가 얼룩덜룩하고, 아이가 축 처지면 단순 오한으로만 보기 어렵습니다.",
          "이불 조절보다 중요한 것은 체온 흐름, 아이 반응, 수분 섭취, 소변 횟수를 같이 보는 것입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "이불을 조절할 때 볼 것",
        "items": [
          "발끝이 아니라 몸통과 목 뒤가 뜨거운지 확인하기",
          "땀이 나는지, 얼굴이 붉어지는지 보기",
          "아이가 떨고 있는지, 아니면 처져 있는지 구분하기",
          "입술색이나 피부색이 평소와 다른지 확인하기",
          "수분 섭취와 소변이 줄지 않았는지 살피기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "옷차림 조절 방법",
        "items": [
          "두꺼운 이불 여러 겹보다 얇은 덮개로 조절하며 반응을 보세요.",
          "땀이 나면 젖은 옷을 갈아입히고 실내를 너무 덥지 않게 해주세요.",
          "손발이 차가운 시간과 체온이 오르는 시간을 함께 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "오한으로만 보기 어려운 신호",
        "body": "손발 차가움과 함께 아이가 축 처지거나, 입술색이 변하거나, 호흡이 힘들어 보이거나, 깨워도 반응이 약하거나, 수분 섭취와 소변이 줄면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 나는데 발이 차가운 상황은 발끝보다 전체 컨디션을 봐야 하므로 아기 열 대처 가이드와 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxn002yr8t60ve3o99i",
    "contentId": "cmqnsj8rt027yjot65mpyq754",
    "path": "/qna/health/baby-fever-crying",
    "title": "열이 나면서 계속 우는 아기는 통증을 의심해야 하나요?",
    "question": "열이 나면서 계속 우는 아기는 통증을 의심해야 하나요?",
    "summary": "열이 있는 아이가 달래도 계속 울면 단순 불편감인지, 귀·목·배·소변 통증 같은 다른 문제가 있는지 걱정됩니다. 울음의 강도와 달래지는지 여부, 만졌을 때 아파하는 부위, 먹는 양과 소변을 함께 확인해보세요.",
    "metaTitle": "열나면서 계속 우는 아기, 통증 의심 신호 | MomTools",
    "metaDescription": "열이 나면서 계속 우는 아이를 볼 때 귀 통증, 배 통증, 소변 통증, 탈수와 상담 신호를 나눠 확인하는 방법을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-crying",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 발열+울음 페이지를 통증 단서·달래짐 여부·수분/소변 기준으로 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 열 계속 울음",
      "열나고 보챔",
      "아기 통증 신호",
      "아기 귀 아픔 열",
      "아기 소변 볼 때 울음",
      "아기 배 아픔 열",
      "소아과 상담 신호"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "계속 우는 이유는 열 말고도 같이 봐야 해요",
        "items": [
          "열이 있으면 아이가 보채고 울 수 있지만, 달래도 계속 울거나 특정 자세에서 더 심해지면 통증 신호가 섞여 있는지 살펴봐야 합니다.",
          "귀를 만지며 울거나, 배를 만지면 더 울거나, 소변 볼 때 울거나, 다리를 움직일 때 아파하면 발열과 별도로 설명할 단서가 됩니다.",
          "울음이 크다고 무조건 큰 병이라고 단정할 수는 없지만, 평소와 전혀 다른 울음소리나 달래지지 않는 울음은 기록해두는 것이 좋습니다.",
          "수분 섭취가 줄고 소변이 적어지면 아이가 더 예민해질 수 있어요. 마지막으로 먹은 시간과 기저귀가 젖은 시간도 함께 확인하세요.",
          "아이를 진정시키려 애쓰기보다 언제부터, 어떤 상황에서, 어디를 만질 때 더 우는지 정리하면 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "울음 속에서 볼 단서",
        "items": [
          "안아도 달래지는지, 계속 날카롭게 우는지 보기",
          "귀, 배, 목, 다리, 소변 볼 때처럼 특정 상황에서 더 우는지 확인하기",
          "고개를 젖히거나 몸을 웅크리는 자세가 반복되는지 보기",
          "수유량·식사량·소변 횟수가 줄었는지 살피기",
          "발진, 구토, 설사, 호흡 변화가 함께 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "진료 전 메모할 것",
        "items": [
          "울음이 시작된 시간과 가장 심해지는 상황을 적어두세요.",
          "아이 몸을 만졌을 때 더 아파하는 부위가 있는지 조심스럽게 확인하세요.",
          "마지막으로 먹은 양과 소변 본 시간을 같이 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담을 서두르는 게 좋은 경우",
        "body": "열과 함께 달래지지 않는 울음이 오래 이어지거나, 축 처짐·깨우기 어려움·호흡곤란·반복 구토·경련·소변 감소·목을 뻣뻣하게 하는 모습이 있으면 빠르게 의료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 나며 계속 우는 상황에서는 발열 기준과 함께 통증 신호를 나눠보는 것이 좋아요. 아기 열 대처 가이드도 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxn002zr8t6pitj6kbq",
    "contentId": "cmqnsj851022rjot621527aft",
    "path": "/qna/health/baby-fever-hands-cold",
    "title": "열이 나는데 손발이 차가우면 어떻게 봐야 하나요?",
    "question": "열이 나는데 손발이 차가우면 어떻게 봐야 하나요?",
    "summary": "열이 있는데 손발이 차가우면 체온이 더 오르는 중인지, 혈액순환이 좋지 않은 건지 걱정될 수 있어요. 손발 온도만 보지 말고 몸통 열감, 피부색, 아이 반응, 호흡과 수분 섭취를 함께 확인해야 합니다.",
    "metaTitle": "아기 열나는데 손발이 차가울 때 확인할 기준 | MomTools",
    "metaDescription": "열이 나는데 손발이 차가운 아기를 볼 때 오한, 과보온, 피부색 변화, 상담 신호를 나누어 확인하는 방법을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-hands-cold",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 손발 차가움 페이지를 피부색·몸통 열감·반응·호흡 기준으로 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 열 손발 차가움",
      "열나는데 손 차가움",
      "아기 오한 손발",
      "아기 손발 차가움 발열",
      "아기 피부색 변화",
      "아기 열 대처",
      "소아과 상담 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "손발보다 몸통과 피부색을 먼저 봐요",
        "items": [
          "발열 중에는 손발이 차갑게 느껴질 수 있습니다. 열이 오르는 과정에서 말초가 차가워 보이는 경우가 있어 부모가 더 불안해져요.",
          "이때 손발만 따뜻하게 하려고 두껍게 싸기보다, 배와 등 같은 몸통이 얼마나 뜨거운지 확인해보세요.",
          "피부가 얼룩덜룩하거나 입술색이 변하고, 아이가 축 처지거나 반응이 약하면 단순 손발 차가움으로 보기 어렵습니다.",
          "손발이 차가워도 아이가 눈을 맞추고 수분을 받아들이며 소변을 본다면 체온 흐름을 기록하며 볼 수 있습니다.",
          "반대로 해열 후에도 반응이 회복되지 않거나 손발 차가움과 호흡 불편이 함께 있으면 상담을 서두르는 편이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "손발 차가울 때 확인할 것",
        "items": [
          "배와 등, 목 뒤가 뜨겁거나 땀이 나는지 보기",
          "입술색, 손톱색, 피부 얼룩이 평소와 다른지 확인하기",
          "아이를 불렀을 때 눈을 맞추고 반응하는지 보기",
          "수분 섭취와 소변 횟수가 유지되는지 살피기",
          "체온이 오르는 중인지, 해열 후 내려가는 중인지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 조절할 부분",
        "items": [
          "얇은 옷과 덮개로 조절하며 몸통이 과하게 뜨거워지지 않게 해주세요.",
          "손발 온도만 적지 말고 체온, 피부색, 아이 반응을 함께 기록하세요.",
          "차가운 손발이 반복되며 아이 상태가 나빠지는지 시간대별로 비교해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 확인이 필요한 신호",
        "body": "손발 차가움과 함께 입술색 변화, 호흡곤란, 축 처짐, 깨워도 반응이 약함, 경련, 소변 감소가 있으면 체온 숫자와 관계없이 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "손발 차가움은 발열 과정에서 헷갈리기 쉬운 신호라, 아기 열 대처 가이드에서 오한과 상담 신호를 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxn0030r8t61s7n0hyl",
    "contentId": "cmqnsj45o0143jot6u3vpjyrx",
    "path": "/qna/health/baby-fever-no-appetite",
    "title": "열날 때 밥이나 수유를 잘 안 하면 괜찮을까요?",
    "question": "열날 때 밥이나 수유를 잘 안 하면 괜찮을까요?",
    "summary": "열이 나면 아이가 평소보다 덜 먹을 수 있지만, 얼마나 마시는지와 소변이 유지되는지는 꼭 봐야 해요. 식사량보다 수분 섭취, 기저귀 횟수, 입안 건조, 아이 반응을 먼저 확인하는 것이 좋습니다.",
    "metaTitle": "열날 때 아이가 안 먹을 때 먼저 볼 기준 | MomTools",
    "metaDescription": "열이 나면서 밥이나 수유를 잘 안 하는 아이를 볼 때 수분 섭취, 소변 횟수, 탈수 신호와 진료 상담 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-no-appetite",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 발열 중 식욕 저하 페이지를 수분 섭취·소변·탈수 신호 중심으로 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 열 안 먹음",
      "열날 때 수유 거부",
      "아기 발열 식욕 없음",
      "아기 열 수분 섭취",
      "아기 소변 감소",
      "아기 탈수 신호",
      "아기 열 대처"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "밥보다 수분과 소변을 먼저 봐야 해요",
        "items": [
          "열이 나면 입맛이 떨어져 평소만큼 먹지 못할 수 있습니다. 이때 한 끼를 다 먹었는지보다 물이나 수유를 얼마나 받아들이는지 먼저 봐야 해요.",
          "아이가 조금씩이라도 마시고, 기저귀가 평소처럼 젖고, 깨웠을 때 반응이 괜찮다면 식사량은 잠시 줄어도 관찰할 수 있습니다.",
          "반대로 수분도 거부하고 소변이 줄거나 입술과 입안이 마르면 탈수 가능성을 더 신경 써야 합니다.",
          "억지로 많이 먹이려 하면 토하거나 더 보챌 수 있어요. 아이가 받아들이는 양을 조금씩 자주 시도하는 편이 낫습니다.",
          "열이 내려도 식욕이 계속 돌아오지 않거나 처짐이 이어지면 단순 식욕 저하로만 보지 말고 상담해보세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "먹는 양이 줄었을 때 볼 것",
        "items": [
          "마지막으로 수유하거나 물을 마신 시간이 언제인지 확인하기",
          "기저귀가 평소보다 덜 젖는지 보기",
          "입술·입안이 마르거나 눈물이 줄었는지 살피기",
          "구토나 설사가 함께 있는지 확인하기",
          "깨웠을 때 반응과 울음 힘이 평소와 같은지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 먹일 때 해볼 일",
        "items": [
          "한 번에 많이 먹이려 하지 말고 소량씩 자주 시도하세요.",
          "아이가 좋아하는 부드러운 음식이나 수분 위주로 부담을 줄여보세요.",
          "마신 양과 소변 시간을 적어두면 탈수 여부를 설명하기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "기다리기보다 상담할 신호",
        "body": "수분을 거의 못 마시거나, 소변이 눈에 띄게 줄거나, 입안이 마르고 눈물이 적거나, 축 처짐·반복 구토·설사·호흡 불편이 함께 있으면 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 날 때 식사보다 수분 섭취와 소변 횟수가 중요해요. 아기 열 대처 가이드에서 탈수 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zxn0031r8t6ok3a0r1j",
    "contentId": "cmqnsj8no0270jot6m9uav9c0",
    "path": "/qna/health/baby-fever-no-appetite-new-2",
    "title": "열이 나면서 밥을 거의 안 먹으면 얼마나 지켜봐도 되나요?",
    "question": "열이 나면서 밥을 거의 안 먹으면 얼마나 지켜봐도 되나요?",
    "summary": "열이 있는 아이가 거의 먹지 않으면 하루 정도 기다려도 되는지 불안할 수 있어요. 시간만 정해두기보다 마시는 양, 마지막 소변 시간, 구토·설사 동반 여부, 아이의 반응을 기준으로 판단하는 것이 좋습니다.",
    "metaTitle": "열나고 거의 안 먹는 아이, 지켜볼 수 있는 기준 | MomTools",
    "metaDescription": "열이 나면서 밥이나 수유를 거의 안 하는 아이를 얼마나 지켜볼지 고민될 때 수분, 소변, 탈수와 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-no-appetite-new-2",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-010: 중복 식욕 저하 페이지를 관찰 가능 기준과 탈수·구토·설사 동반 여부 중심으로 차별화해 재작성.",
    "duplicateMemo": "batch-010에서 발열과 발진, 얼굴 홍조, 오한·떨림, 졸림, 손발 차가움, 보챔, 식욕 저하를 각각 다른 검색 의도와 확인 기준으로 분리하고, 발열 관련 반복 문장과 단정 표현을 줄임.",
    "keywords": [
      "아기 열 밥 안 먹음",
      "아기 열 거의 안 먹음",
      "열날 때 얼마나 지켜봐",
      "아기 수유 거부 열",
      "아기 탈수 확인",
      "아기 열 소변 감소",
      "아기 식욕 저하 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "기다리는 시간보다 “마시고 소변 보는지”가 기준이에요",
        "items": [
          "아이가 열이 나면서 거의 먹지 않으면 부모는 “몇 시간까지 괜찮을까”를 먼저 떠올리게 됩니다. 하지만 시간만으로 판단하기보다 수분과 소변 흐름을 보는 것이 더 안전합니다.",
          "밥을 잘 안 먹어도 물, 수유, 묽은 음식처럼 수분을 조금씩 받아들이고 소변이 유지된다면 짧은 간격으로 관찰할 수 있습니다.",
          "하지만 수분까지 거부하거나 마지막 소변 시간이 많이 지나고, 입술이 마르거나 아이가 축 처지면 기다리는 기준이 달라집니다.",
          "구토나 설사가 함께 있으면 탈수 위험이 더 빨리 커질 수 있어요. 먹는 양보다 빠져나가는 양도 같이 봐야 합니다.",
          "열이 지속되고 식욕이 거의 돌아오지 않는다면 아이가 어떤 증상을 함께 보이는지 정리해서 상담하는 편이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "얼마나 지켜볼지 판단할 때",
        "items": [
          "물이나 수유를 조금씩이라도 받아들이는지 확인하기",
          "마지막 소변 시간이 평소보다 많이 늦어졌는지 보기",
          "구토나 설사가 반복되는지 확인하기",
          "입술·입안이 마르고 눈물이 줄었는지 살피기",
          "아이를 깨웠을 때 반응이 괜찮은지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "관찰 중 할 일",
        "items": [
          "먹는 양을 억지로 늘리기보다 아이가 받아들이는 수분을 조금씩 자주 주세요.",
          "마신 양, 토한 횟수, 설사 횟수, 마지막 소변 시간을 함께 기록하세요.",
          "몇 시간 버틸지 고민되면 아이 상태를 기록한 뒤 의료 상담을 이용하는 것이 더 안전합니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "더 지켜보기 어려운 신호",
        "body": "수분을 거의 못 마시고 소변이 줄거나, 입안이 마르고 눈물이 적거나, 반복 구토·설사·축 처짐·호흡 불편·깨우기 어려움이 있으면 오래 기다리지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 나면서 거의 먹지 않을 때는 탈수 신호 확인이 중요해요. 아기 열 대처 가이드에서 수분 섭취와 상담 기준을 함께 확인해보세요."
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-010 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 10`,
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

  console.log("batch-010 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-010 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-fever-and-rash-together");
  console.log("- http://localhost:3000/qna/health/baby-fever-and-shivering");
  console.log("- http://localhost:3000/qna/health/baby-fever-and-sleepy");
  console.log("- http://localhost:3000/qna/health/baby-fever-cold-feet");
  console.log("- http://localhost:3000/qna/health/baby-fever-no-appetite-new-2");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-010 반영 실패");
  console.error(error);
  process.exit(1);
});
