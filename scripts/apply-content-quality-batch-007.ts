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
    "batchItemId": "cmqs71zuv001vr8t6bbzsqt1d",
    "contentId": "cmqnsj69s01mijot6eblzod33",
    "path": "/qna/health/baby-drooling-and-fever",
    "title": "침을 많이 흘리고 열이 나면 이앓이 때문일까요?",
    "question": "침을 많이 흘리고 열이 나면 이앓이 때문일까요?",
    "summary": "아기가 침을 많이 흘리고 잇몸을 불편해하면 이앓이부터 떠올리기 쉽지만, 38도 안팎의 열까지 함께 보인다면 이앓이만으로 단정하지 않는 편이 안전해요. 체온, 먹는 양, 소변, 콧물·기침 같은 감기 증상, 입안 염증을 함께 살펴보면 다음 행동을 정하기 쉽습니다.",
    "metaTitle": "침 흘림과 열, 이앓이로 봐도 될까요? | MomTools",
    "metaDescription": "아기가 침을 많이 흘리며 열이 날 때 이앓이와 감기·입안 염증을 어떻게 구분해 볼지, 집에서 확인할 점과 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-drooling-and-fever",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 이앓이를 발열 원인으로 단정하지 않고 체온·수분·감기 증상·입안 변화 확인 중심으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 침 흘림 열",
      "이앓이 열",
      "아기 이앓이 증상",
      "아기 열 38도",
      "아기 잇몸 통증",
      "아기 입안 염증",
      "아기 발열 병원",
      "침 많이 흘리는 아기"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "이앓이와 열은 따로 봐야 해요",
        "items": [
          "이가 올라오는 시기에는 침이 늘고 손이나 장난감을 자주 물 수 있어요. 잇몸이 불편해서 보채는 모습도 흔합니다.",
          "하지만 체온이 38도 안팎으로 오르거나 아이가 축 처지면 “이앓이라서 그렇겠지” 하고 넘기기 어렵습니다. 감기, 입안 염증, 다른 감염이 함께 있는지 살펴봐야 해요.",
          "먼저 같은 방법으로 체온을 다시 재고, 수유나 물을 받아들이는지, 기저귀가 평소처럼 젖는지 확인해보세요.",
          "침 흘림과 함께 입안에 하얀 반점, 잇몸 부기, 입 주변 발진, 콧물·기침이 있는지도 같이 보면 원인을 좁히는 데 도움이 됩니다.",
          "생후 3개월 미만 아기에게 38도 이상 열이 있거나, 월령과 관계없이 반응이 약하고 잘 먹지 못하면 바로 의료진에게 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집에서 먼저 볼 체크포인트",
        "items": [
          "체온을 같은 체온계와 같은 부위로 다시 재기",
          "침 흘림만 있는지, 열·콧물·기침·설사가 함께 있는지 나누어 보기",
          "잇몸이 붓거나 침 때문에 입 주변이 헐었는지 확인하기",
          "수유량·물 섭취량과 마지막 소변 시간을 적어두기",
          "깨웠을 때 눈을 맞추고 평소처럼 반응하는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바로 해볼 일",
        "items": [
          "잇몸이 불편해 보이면 깨끗한 손가락이나 차갑게 식힌 치발기처럼 안전한 방법으로 잠깐 진정시켜보세요.",
          "열이 있다면 침 흘림보다 체온 변화, 먹는 양, 소변 횟수를 함께 기록하세요.",
          "해열제 사용 여부는 아이 월령과 체중, 이미 먹은 약을 확인해야 하므로 혼자 반복하지 말고 상담 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "이앓이로만 넘기지 말아야 할 신호",
        "body": "생후 3개월 미만의 발열, 38도 이상 열이 반복되는 경우, 잘 먹지 못함, 소변 감소, 축 처짐, 호흡이 힘들어 보임, 입안 통증 때문에 거의 못 먹는 모습이 있으면 의료진 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열이 함께 있을 때는 아기 열 대처 가이드에서 월령별 발열 기준과 집에서 기록할 항목을 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv001wr8t6ejmrltdq",
    "contentId": "cmqnsjcxo038ajot67tvpc7rw",
    "path": "/qna/health/baby-drooling-with-rash",
    "title": "침 때문에 턱에 발진이 생기면 어떻게 관리할까요?",
    "question": "침 때문에 턱에 발진이 생기면 어떻게 관리할까요?",
    "summary": "침이 턱과 입 주변에 오래 닿으면 피부가 빨갛고 거칠어질 수 있어요. 먼저 침을 세게 문질러 닦기보다 톡톡 눌러 말리고, 보습·보호막 관리로 좋아지는지 보세요. 다만 진물, 고름, 물집, 빠르게 번지는 발진은 단순 침 자극만으로 보기 어렵습니다.",
    "metaTitle": "침독처럼 턱 발진이 생겼을 때 관리법 | MomTools",
    "metaDescription": "아기 침 때문에 턱과 입 주변이 빨갛게 헐 때 닦는 방법, 보습·보호막 관리, 진료 상담이 필요한 피부 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-drooling-with-rash",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 침독성 자극 피부염과 알레르기/감염 신호를 구분하도록 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 침독",
      "침 때문에 턱 발진",
      "아기 입 주변 발진",
      "침 흘림 피부 자극",
      "아기 턱 빨개짐",
      "아기 피부 보습",
      "아기 발진 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "침 자극은 닦는 방식부터 바꿔보세요",
        "items": [
          "침이 많아지는 시기에는 턱, 볼 아래, 목 접히는 부위가 쉽게 젖습니다. 이때 반복해서 문질러 닦으면 피부 장벽이 더 약해질 수 있어요.",
          "발진이 침이 닿는 자리 위주로 있고, 아이가 전반적으로 잘 먹고 열이 없다면 먼저 자극을 줄이는 관리부터 해볼 수 있습니다.",
          "부드러운 거즈나 수건으로 침을 톡톡 눌러 닦고, 목욕 뒤와 외출 전후에 보습제를 얇게 발라 피부가 마르지 않게 해주세요.",
          "침받이는 젖은 채 오래 두지 말고 자주 갈아주는 것이 좋습니다. 세제나 섬유유연제를 바꾼 뒤 심해졌다면 그 변화도 같이 확인해보세요.",
          "진물, 노란 딱지, 고름, 물집, 열, 얼굴 전체로 번지는 발진이 있으면 침 자극만으로 단정하지 말고 진료 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "턱 발진에서 확인할 것",
        "items": [
          "발진이 침이 닿는 턱·입 주변·목 접힘에 집중되어 있는지 보기",
          "진물, 노란 딱지, 고름, 물집이 있는지 확인하기",
          "새 음식, 새 로션, 세제, 침받이 소재 변화가 있었는지 떠올리기",
          "아이가 긁거나 비비면서 더 붉어지는지 살피기",
          "열, 입술·얼굴 부종, 전신 두드러기가 함께 있는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 관리할 때 해볼 일",
        "items": [
          "침은 문지르지 말고 눌러 닦고, 젖은 침받이는 자주 갈아주세요.",
          "보습제는 여러 종류를 번갈아 쓰기보다 자극이 적은 제품 하나로 며칠 흐름을 봐도 좋습니다.",
          "발진 부위를 하루 한 번 같은 조명에서 사진으로 남기면 번지는지 줄어드는지 비교하기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "피부 진료 상담이 필요한 경우",
        "body": "진물, 노란 딱지, 고름, 물집, 출혈, 열이 있거나 발진이 빠르게 번지는 경우, 호흡곤란이나 얼굴·입술 부종이 함께 보이면 집 관리보다 진료 상담이 우선입니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ],
        "body": "침 자극인지 다른 발진인지 헷갈릴 때는 아기 발진·두드러기 확인 가이드에서 피부 모양과 동반 증상을 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv001xr8t6ktn1pidm",
    "contentId": "cmqnsjbic02vsjot6rddienr2",
    "path": "/qna/health/baby-dry-cheeks-red",
    "title": "볼이 빨갛고 거칠면 아토피 초기일 수 있나요?",
    "question": "볼이 빨갛고 거칠면 아토피 초기일 수 있나요?",
    "summary": "아기 볼이 빨갛고 까칠해지면 아토피를 걱정하게 되지만, 겨울 건조, 침 자극, 로션·세제 변화처럼 흔한 원인도 많아요. 반복되는 가려움, 진물, 잠을 깰 정도의 긁음, 팔·다리 접히는 부위까지 번지는지 함께 보면 진료 상담이 필요한지 정리하기 쉽습니다.",
    "metaTitle": "아기 볼이 빨갛고 거칠 때 아토피 의심 기준 | MomTools",
    "metaDescription": "아기 볼이 빨갛고 건조할 때 단순 건조와 아토피 의심 상황을 나누어 보고, 보습 관리와 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dry-cheeks-red",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 설사 문맥 오류를 제거하고 건조·침 자극·아토피 의심 기준 중심으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 볼 빨개짐",
      "아기 볼 건조",
      "아기 아토피 초기",
      "아기 얼굴 거칠음",
      "아기 피부 보습",
      "아기 얼굴 발진",
      "아토피 병원 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "볼 건조와 아토피 의심 신호를 나눠보세요",
        "items": [
          "아기 볼은 침, 바람, 건조한 실내 공기, 마찰에 자주 노출돼 쉽게 빨개지고 거칠어질 수 있어요. 하루 이틀의 변화만으로 아토피라고 단정하기는 어렵습니다.",
          "먼저 볼만 건조한지, 팔꿈치 안쪽·무릎 뒤·목 접힘처럼 다른 부위도 반복해서 거칠어지는지 확인해보세요.",
          "가려워서 자주 비비거나 긁고, 밤에 잠을 깰 정도로 불편해하거나, 진물·딱지가 생기면 단순 건조보다 진료 상담이 필요한 피부 문제일 수 있습니다.",
          "관리할 때는 뜨거운 물 목욕을 피하고, 목욕 뒤 피부가 완전히 마르기 전에 보습제를 충분히 바르는 방식이 도움이 될 수 있어요.",
          "새 로션, 세제, 섬유유연제, 이유식 재료를 시작한 시점과 피부가 나빠진 시점을 함께 적어두면 상담 때 원인을 좁히기 쉽습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "아토피가 걱정될 때 볼 부분",
        "items": [
          "볼만 거친지, 몸의 접히는 부위까지 반복되는지 확인하기",
          "긁음, 비빔, 밤잠 방해가 있는지 보기",
          "진물, 딱지, 피부 갈라짐, 피가 묻는 부위가 있는지 살피기",
          "실내 습도, 목욕 시간, 보습제 사용 횟수를 점검하기",
          "최근 바꾼 세제·로션·이유식 재료가 있는지 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 피부 관리",
        "items": [
          "목욕은 길게 하지 말고 미지근한 물로 짧게 마무리해보세요.",
          "씻긴 뒤 3분 안에 보습제를 넓게 바르고, 건조한 부위는 하루 중 한두 번 더 덧발라보세요.",
          "피부가 심하게 가려워 보이거나 진물이 나면 여러 제품을 새로 시도하기보다 진료 때 보여줄 사진을 남겨두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "피부 진료를 권하는 신호",
        "body": "진물, 노란 딱지, 피가 날 정도의 긁음, 잠을 깰 정도의 가려움, 발진이 몸 여러 부위로 번지는 경우에는 아토피나 감염 여부를 확인하기 위해 소아청소년과나 피부 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ],
        "body": "볼 건조와 발진이 반복된다면 아기 발진·두드러기 확인 가이드에서 발진 모양과 동반 증상을 같이 비교해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv001yr8t6l6d4cud8",
    "contentId": "cmqnsj9af02cajot6liiiavka",
    "path": "/qna/health/baby-dry-cough-no-fever",
    "title": "열 없이 마른기침만 오래가면 무엇을 봐야 할까요?",
    "question": "열 없이 마른기침만 오래가면 무엇을 봐야 할까요?",
    "summary": "열은 없는데 마른기침이 오래가면 감기가 남은 건지, 건조한 공기나 알레르기 자극 때문인지 헷갈릴 수 있어요. 기침이 심해지는 시간대, 잠을 깨는지, 쌕쌕거림이나 빠른 호흡이 있는지, 콧물·코막힘이 뒤로 넘어가는 느낌이 있는지 함께 봐야 합니다.",
    "metaTitle": "열 없이 마른기침이 오래갈 때 확인할 점 | MomTools",
    "metaDescription": "아이에게 열은 없지만 마른기침이 오래갈 때 집에서 볼 시간대·환경·호흡 신호와 진료 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dry-cough-no-fever",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 마른기침을 감기 일반론이 아닌 시간대·환경·호흡 신호 중심으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "열 없는 마른기침",
      "아기 마른기침",
      "아이 기침 오래감",
      "밤 기침",
      "알레르기 기침",
      "건조한 공기 기침",
      "쌕쌕거림",
      "소아 기침 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "열이 없어도 기침 흐름은 기록해보세요",
        "items": [
          "열이 없으면 조금 안심되지만, 마른기침이 며칠 이상 이어지면 부모는 “그냥 남은 기침일까?” 하고 계속 신경 쓰이게 됩니다.",
          "먼저 기침이 아침에 심한지, 누우면 심한지, 뛰거나 웃을 때 나오는지, 밤잠을 깨울 정도인지 나누어 보세요. 같은 마른기침이라도 원인을 추정하는 단서가 달라집니다.",
          "방이 건조하거나 먼지, 향이 강한 제품, 미세먼지, 반려동물 털 같은 자극이 있을 때 심해지는지도 확인해보세요.",
          "콧물·코막힘이 함께 있으면 코가 뒤로 넘어가 기침이 이어질 수 있고, 쌕쌕거림이나 가슴이 들어가는 호흡이 있으면 단순 잔기침으로 보기 어렵습니다.",
          "2주 이상 지속되거나 점점 심해지고, 숨쉬기 힘들어 보이거나 먹는 양과 잠이 줄면 진료 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "마른기침에서 볼 기준",
        "items": [
          "기침이 심해지는 시간대와 상황을 적어두기",
          "밤잠을 깨우는지, 운동·웃음·울음 뒤 심해지는지 보기",
          "콧물, 코막힘, 목 가다듬는 소리가 함께 있는지 확인하기",
          "쌕쌕거림, 빠른 호흡, 가슴이 쑥 들어가는 호흡이 있는지 보기",
          "방 습도, 먼지, 향 제품, 미세먼지 노출을 비교하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 조절해볼 것",
        "items": [
          "잠자는 공간의 먼지를 줄이고, 너무 건조하지 않게 실내 습도를 조절해보세요.",
          "기침이 나오는 시간과 상황을 하루 이틀만 기록해도 진료 때 설명이 쉬워집니다.",
          "기침약이나 감기약을 임의로 반복하기보다 아이 나이와 증상에 맞는지 의료진이나 약사에게 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "마른기침이어도 상담할 신호",
        "body": "가슴이 들어가는 호흡, 쌕쌕거림, 입술색 변화, 기침 후 구토가 반복되는 경우, 2주 이상 지속되거나 밤잠·식사에 영향을 줄 정도라면 소아청소년과 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "기침이 오래갈 때는 감기 이후 기침, 알레르기 자극, 호흡곤란 신호를 나누어 볼 수 있는 기침 관련 Q&A를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv001zr8t6tpys54gc",
    "contentId": "cmqnsjdi903dajot6kuhztp6b",
    "path": "/qna/health/baby-dry-lips-fever",
    "title": "열이 나며 입술이 마르면 탈수 신호일 수 있나요?",
    "question": "열이 나며 입술이 마르면 탈수 신호일 수 있나요?",
    "summary": "아이가 열이 나면서 입술이 바짝 마르면 수분이 부족한 건 아닌지 걱정될 수 있어요. 입술만 보지 말고 마지막 소변 시간, 입안과 혀의 촉촉함, 눈물, 마실 수 있는지, 축 처지는지를 함께 보면 집에서 더 지켜볼지 상담이 필요한지 판단하기 쉽습니다.",
    "metaTitle": "열이 나며 입술이 마를 때 탈수 확인 기준 | MomTools",
    "metaDescription": "아이에게 열이 있고 입술이 마를 때 탈수 신호를 어떻게 볼지, 수분 보충과 진료 상담이 필요한 경우를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dry-lips-fever",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 입술 건조를 탈수 단정이 아닌 소변·입안·눈물·반응 확인 기준으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 열 입술 마름",
      "아이 탈수 신호",
      "아기 소변 줄어듦",
      "아기 입마름",
      "아기 열 수분 보충",
      "아기 발열 탈수",
      "아이 열 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "입술보다 소변과 반응을 함께 보세요",
        "items": [
          "열이 나면 평소보다 땀과 호흡으로 수분이 더 빠져나갈 수 있어요. 그래서 입술이 마르는 모습만 봐도 부모는 탈수를 걱정하게 됩니다.",
          "다만 입술이 건조하다는 이유만으로 탈수라고 단정하기보다는 마지막 소변이 언제였는지, 기저귀가 평소보다 덜 젖는지부터 확인해보세요.",
          "입안과 혀가 바짝 말라 보이는지, 울 때 눈물이 거의 없는지, 물이나 수유를 받아들이는지도 같이 봐야 합니다.",
          "아이가 마실 수 있다면 한 번에 많이 먹이기보다 조금씩 자주 시도해보세요. 구토가 반복되면 억지로 먹이는 것보다 상담이 우선일 수 있습니다.",
          "열과 함께 축 처짐, 소변 감소, 반복 구토, 빠른 호흡이 있으면 체온만 낮추는 데 집중하지 말고 의료진에게 문의하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "탈수 의심 때 볼 항목",
        "items": [
          "마지막 소변 시간과 기저귀 젖은 정도 확인하기",
          "입술뿐 아니라 입안·혀가 마른지 보기",
          "울 때 눈물이 나는지 살피기",
          "수유나 물을 조금씩이라도 받아들이는지 확인하기",
          "열, 설사, 구토가 함께 있는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바로 해볼 일",
        "items": [
          "마실 수 있다면 소량씩 자주 주고, 먹은 양과 소변 시간을 같이 적어두세요.",
          "방을 너무 덥게 하지 말고 편안한 옷차림으로 체온 변화를 다시 확인하세요.",
          "반복 구토나 처짐이 있으면 수분 보충을 집에서만 해결하려 하지 말고 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "수분 부족이 걱정될 때 바로 상담할 신호",
        "body": "소변이 눈에 띄게 줄거나 6~8시간 이상 거의 없고, 입안이 매우 마르며, 깨워도 반응이 약하거나 반복 구토로 물을 못 마시는 경우에는 의료진 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열과 수분 상태를 함께 볼 때는 아기 열 대처 가이드에서 월령별 발열 기준과 상담 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv0020r8t6bnrb55i6",
    "contentId": "cmqnsj5xj01jljot6sa6kz8tc",
    "path": "/qna/health/baby-dry-skin-winter",
    "title": "겨울에 아기 피부가 갈라질 만큼 건조하면 어떻게 해야 할까요?",
    "question": "겨울에 아기 피부가 갈라질 만큼 건조하면 어떻게 해야 할까요?",
    "summary": "겨울에는 실내가 건조하고 옷 마찰이 늘어 아기 피부가 쉽게 거칠어질 수 있어요. 단순 건조인지, 갈라짐·피·진물·가려움이 동반되는지에 따라 관리 방향이 달라집니다. 보습을 늘려도 반복되거나 아이가 긁어서 잠을 깨면 진료 상담을 고려해보는 게 좋습니다.",
    "metaTitle": "겨울철 아기 피부 갈라짐과 건조 관리 기준 | MomTools",
    "metaDescription": "겨울에 아기 피부가 갈라지고 거칠 때 보습 관리, 목욕 습관, 피해야 할 자극과 진료 상담이 필요한 피부 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-dry-skin-winter",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 겨울 피부 건조를 실내 환경·목욕·보습·갈라짐 상담 신호 중심으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 겨울 피부 건조",
      "아기 피부 갈라짐",
      "아기 보습제",
      "아기 건조한 피부",
      "아기 아토피 의심",
      "겨울철 아기 피부",
      "아기 피부 진물"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "갈라짐이 있으면 보습 방식부터 점검해보세요",
        "items": [
          "겨울에는 난방 때문에 공기가 건조해지고, 두꺼운 옷과 이불이 피부를 자극하기 쉬워요. 그래서 평소 괜찮던 아기도 볼, 팔, 다리, 배 쪽이 거칠어질 수 있습니다.",
          "가벼운 건조라면 목욕 시간을 줄이고, 씻긴 뒤 피부가 완전히 마르기 전에 보습제를 넓게 바르는 것부터 해볼 수 있어요.",
          "피부가 갈라져 피가 비치거나, 진물·노란 딱지가 생기거나, 아이가 계속 긁어 잠을 깨면 단순 건조보다 염증이나 아토피성 피부염 여부를 확인해야 할 수 있습니다.",
          "향이 강한 제품, 거친 옷감, 잦은 비누 사용, 뜨거운 물 목욕은 피부 장벽을 더 약하게 만들 수 있어요.",
          "며칠 관리해도 악화되거나 부위가 넓어지면 사진과 사용한 보습제 이름을 함께 정리해 진료 상담 때 보여주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "겨울 건조 피부 체크포인트",
        "items": [
          "목욕 시간이 길거나 물이 뜨겁지 않은지 확인하기",
          "목욕 후 보습제를 바르는 시간이 너무 늦지 않은지 보기",
          "피부 갈라짐, 피, 진물, 노란 딱지가 있는지 살피기",
          "아이 옷감, 세제, 로션을 최근 바꿨는지 떠올리기",
          "긁음 때문에 잠을 깨거나 보채는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바꿔볼 관리 습관",
        "items": [
          "목욕은 짧게 하고, 씻긴 뒤 바로 보습제를 충분히 발라보세요.",
          "건조한 부위만 조금 바르기보다 주변 피부까지 넓게 덮듯이 발라주세요.",
          "새 제품을 여러 개 동시에 바꾸지 말고, 변화가 있으면 어떤 제품을 썼는지 기록해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "피부 진료를 권하는 경우",
        "body": "피부가 갈라져 피가 나거나 진물·노란 딱지가 생기는 경우, 가려움 때문에 잠을 깨는 경우, 보습을 해도 빠르게 번지는 경우에는 소아청소년과나 피부 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 발진·두드러기 확인 가이드",
          "/health/rash"
        ],
        "body": "건조와 발진이 반복된다면 아기 발진·두드러기 확인 가이드에서 피부 변화 모양과 상담 신호를 함께 비교해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv0021r8t6j0zg5ps3",
    "contentId": "cmqnsjd3q039sjot6n5ysz5p8",
    "path": "/qna/health/baby-ear-after-swimming",
    "title": "물놀이 후 귀를 아파하면 외이도염일 수 있나요?",
    "question": "물놀이 후 귀를 아파하면 외이도염일 수 있나요?",
    "summary": "물놀이 뒤 아이가 귀를 만지고 아파하면 물이 들어가서 불편한 건지, 외이도염처럼 귀 바깥 통로에 염증이 생긴 건지 걱정될 수 있어요. 귀를 누르거나 잡아당길 때 더 아픈지, 귀에서 물·분비물·냄새가 나는지, 열이 있는지를 함께 확인해보세요.",
    "metaTitle": "물놀이 후 귀 통증, 외이도염 의심 기준 | MomTools",
    "metaDescription": "물놀이 뒤 아이가 귀를 아파할 때 외이도염 가능성을 어떻게 볼지, 집에서 피해야 할 행동과 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-ear-after-swimming",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 물놀이 후 귀 통증을 외이도염 단정이 아닌 통증 위치·분비물·청소 금지 기준으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "물놀이 후 귀 통증",
      "아기 외이도염",
      "아이 귀 아픔",
      "귀에 물 들어감",
      "아이 귀 분비물",
      "귀 냄새",
      "수영 후 귀 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "물놀이 뒤 귀 통증은 귀 바깥 통로도 확인해야 해요",
        "items": [
          "물놀이 뒤 귀를 자꾸 만지며 아파하면 단순히 물이 남아 불편한 것처럼 보일 수 있어요. 하지만 귀 바깥 통로가 자극되거나 염증이 생기면 통증이 더 심해질 수 있습니다.",
          "외이도염이 의심될 때는 귓바퀴를 만지거나 귀 앞쪽을 살짝 눌렀을 때 통증이 커지는지, 귀가 막힌 듯해 하는지, 분비물이나 냄새가 있는지 봅니다.",
          "면봉을 깊이 넣거나 귀 안을 세게 닦으면 피부가 더 상할 수 있어요. 물을 빼겠다고 억지로 흔들거나 귀 안에 임의로 약을 넣는 것도 피하는 편이 좋습니다.",
          "통증이 계속되거나 분비물, 심한 냄새, 열, 청력 저하처럼 반응하는 모습이 있으면 진료 상담을 권합니다.",
          "물놀이가 잦은 아이는 다음부터 귀를 세게 파지 않고, 물놀이 뒤 겉만 부드럽게 말리는 습관을 들이는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "물놀이 후 귀에서 볼 점",
        "items": [
          "귓바퀴를 만지거나 귀 앞을 누를 때 통증이 심해지는지 보기",
          "귀에서 물, 고름 같은 분비물, 냄새가 나는지 확인하기",
          "귀가 먹먹해 보이거나 소리에 반응이 달라졌는지 살피기",
          "열, 보챔, 밤잠 방해가 함께 있는지 보기",
          "면봉이나 귀이개로 깊이 닦은 적이 있는지 떠올리기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 피해야 할 행동",
        "items": [
          "귀 안쪽을 면봉으로 깊게 닦지 말고 겉부분만 부드럽게 말려주세요.",
          "처방받지 않은 귀약을 임의로 넣기보다 통증과 분비물 여부를 먼저 확인하세요.",
          "통증이 몇 시간 이상 지속되면 물놀이 시간, 통증 시작 시점, 분비물 여부를 적어 상담에 활용하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 권하는 경우",
        "body": "귀 통증이 심하거나 밤잠을 방해하고, 분비물·냄새·열·청력 저하처럼 보이는 반응이 있거나 귀 주변이 붓고 붉어지면 외이도염이나 다른 귀 문제 확인을 위해 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "귀 통증과 열이 함께 있거나 아이가 귀를 계속 만진다면 아기 열 대처 가이드와 관련 귀 통증 Q&A를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv0022r8t6w9ru9b92",
    "contentId": "cmqnsjclg035ajot6tp9k3yuz",
    "path": "/qna/health/baby-ear-pain-at-night",
    "title": "밤에 귀를 아파하는 아이는 왜 더 힘들어할까요?",
    "question": "밤에 귀를 아파하는 아이는 왜 더 힘들어할까요?",
    "summary": "낮에는 괜찮아 보이다가 밤에 귀가 아프다고 울면 부모도 바로 병원에 가야 할지 고민하게 됩니다. 누우면 귀 압박감이 더 느껴지거나 감기 뒤 중이 쪽 압력이 불편해질 수 있어요. 열, 콧물, 수유·식사 거부, 귀 분비물 여부를 같이 확인해보세요.",
    "metaTitle": "밤에 귀를 아파하는 아이, 확인할 신호 | MomTools",
    "metaDescription": "아이가 밤에 귀 통증으로 울 때 감기 뒤 귀 압박감, 중이염 의심 신호, 집에서 기록할 내용과 진료 상담 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-ear-pain-at-night",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 밤 귀 통증을 수면 방해·감기 후 압박감·분비물/열 기준으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "밤에 귀 아픔",
      "아이 귀 통증 밤",
      "아기 중이염 의심",
      "귀 아파서 우는 아이",
      "감기 후 귀 통증",
      "아이 귀 병원",
      "귀 통증 열"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "밤 통증은 감기 흐름과 함께 봐야 해요",
        "items": [
          "밤에만 귀를 아파하면 낮에는 괜찮았던 아이가 갑자기 심해진 것처럼 보여 부모가 더 당황하게 됩니다.",
          "누워 있을 때 귀 안쪽 압박감이 더 불편하게 느껴질 수 있고, 감기 뒤 코막힘이나 콧물이 이어지면 귀 통증이 같이 나타날 수 있어요.",
          "아이에게 열이 있는지, 최근 감기를 앓았는지, 귀를 만지거나 잡아당기는지, 식사나 수유를 거부하는지 확인해보세요.",
          "귀에서 분비물이나 냄새가 나거나, 통증 때문에 잠을 거의 못 자고 계속 보채면 단순 피로로 넘기기 어렵습니다.",
          "밤중에는 아이 상태를 기록하고, 통증이 심하거나 열·처짐·분비물이 동반되면 진료 상담을 우선하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "밤 귀 통증에서 확인할 것",
        "items": [
          "최근 감기, 콧물, 코막힘이 있었는지 보기",
          "귀를 잡아당기거나 한쪽으로만 누우려 하는지 확인하기",
          "열, 구토, 어지러움처럼 보이는 균형 변화가 있는지 보기",
          "귀에서 분비물이나 냄새가 나는지 살피기",
          "통증 때문에 잠을 얼마나 못 잤는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "밤에 기록해두면 좋은 것",
        "items": [
          "통증이 시작된 시간과 아이가 만지는 귀 방향을 적어두세요.",
          "체온, 감기 증상, 먹은 양, 수면 방해 정도를 함께 기록해두면 상담 때 설명이 쉬워집니다.",
          "귀 안을 파거나 임의로 약을 넣기보다 통증·열·분비물 여부를 정리해 진료 기준을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "밤이라도 상담할 신호",
        "body": "고열, 귀 분비물, 심한 통증, 반복 구토, 목이 뻣뻣해 보임, 반응 저하, 귀 주변 붓기나 붉어짐이 있으면 밤 시간이라도 의료진 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "귀 통증이 감기와 함께 나타났다면 발열과 컨디션을 같이 볼 수 있는 아기 열 대처 가이드도 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv0023r8t6mnrfftes",
    "contentId": "cmqnsj5ha01fljot6f2i6vo8g",
    "path": "/qna/health/baby-ear-pulling-and-crying",
    "title": "귀를 자꾸 만지고 울면 중이염일 수 있나요?",
    "question": "귀를 자꾸 만지고 울면 중이염일 수 있나요?",
    "summary": "아기가 귀를 잡아당기고 울면 중이염을 먼저 걱정하게 되지만, 졸림·이앓이·귀지 불편감처럼 단순한 이유도 있을 수 있어요. 열, 감기 증상, 수유 거부, 밤잠 방해, 귀 분비물이 함께 있는지 봐야 중이염 상담이 필요한지 판단하기 쉽습니다.",
    "metaTitle": "아기가 귀를 잡아당기고 울 때 중이염 확인 기준 | MomTools",
    "metaDescription": "아기가 귀를 만지고 울 때 중이염을 의심할 수 있는 동반 증상, 집에서 볼 체크포인트와 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-ear-pulling-and-crying",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 귀 잡아당김을 중이염으로 단정하지 않고 졸림·이앓이·감기 동반 신호를 나누어 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 귀 잡아당김",
      "아기 귀 만지고 울음",
      "아기 중이염 증상",
      "아이 귀 통증",
      "아기 귀 분비물",
      "아기 감기 귀 아픔",
      "중이염 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "귀를 만지는 행동만으로는 단정하기 어려워요",
        "items": [
          "아기가 귀를 자꾸 잡아당기면 부모는 바로 중이염을 떠올리게 됩니다. 하지만 아기들은 졸리거나 심심할 때, 이가 날 때, 귀지가 불편할 때도 귀를 만질 수 있어요.",
          "중이염 가능성을 보려면 귀를 만지는 행동보다 함께 나타나는 변화를 보는 것이 좋습니다. 열, 콧물·기침, 수유 거부, 밤에 자주 깨는 모습, 한쪽 귀만 계속 만지는지가 단서가 됩니다.",
          "귀에서 분비물이 나오거나 냄새가 나고, 아이가 평소보다 심하게 보채며 달래지지 않는다면 진료 상담이 필요할 수 있어요.",
          "귀 안을 면봉으로 깊이 닦거나 귀지를 억지로 빼려고 하면 오히려 자극이 될 수 있습니다.",
          "최근 감기를 앓은 뒤 귀를 만지고 울기 시작했다면 체온과 먹는 양, 수면 변화를 같이 적어두세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "중이염이 걱정될 때 볼 점",
        "items": [
          "열이나 감기 증상이 함께 있는지 확인하기",
          "한쪽 귀만 반복해서 만지는지 보기",
          "수유·식사를 거부하거나 삼킬 때 더 우는지 살피기",
          "밤에 통증 때문에 자주 깨는지 기록하기",
          "귀 분비물, 냄새, 청력 반응 변화가 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 할 수 있는 정리",
        "items": [
          "귀를 만지는 시간대와 함께 보채는 상황을 적어두세요.",
          "체온, 콧물·기침, 먹는 양, 잠을 깬 횟수를 같이 남겨두면 진료 때 설명하기 좋습니다.",
          "귀 안을 파지 말고, 분비물이나 냄새가 있으면 사진이나 메모로 남겨 상담하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 권하는 경우",
        "body": "고열, 귀 분비물, 심한 보챔, 수유 거부, 밤잠을 거의 못 자는 통증, 반응 저하, 귀 주변 붓기나 붉어짐이 있으면 소아청소년과나 이비인후과 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "귀를 만지는 행동과 열이 함께 있다면 아기 열 대처 가이드에서 월령별 상담 기준도 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zuv0024r8t6xtnh519f",
    "contentId": "cmqnsjcje034sjot6xm5cnqj2",
    "path": "/qna/health/baby-ear-smell",
    "title": "귀에서 냄새가 나면 중이염일 수 있나요?",
    "question": "귀에서 냄새가 나면 중이염일 수 있나요?",
    "summary": "아기 귀에서 냄새가 나면 중이염이나 염증을 걱정하게 됩니다. 하지만 땀, 귀지, 물놀이 뒤 습기처럼 비교적 가벼운 이유도 있어요. 냄새만으로 단정하지 말고 분비물, 귀 통증, 열, 귀 주변 붓기, 소리에 대한 반응 변화를 함께 확인해보세요.",
    "metaTitle": "아기 귀 냄새가 날 때 중이염 의심 기준 | MomTools",
    "metaDescription": "아기 귀에서 냄새가 날 때 귀지·습기와 중이염 의심 신호를 나누어 보고, 귀 분비물과 진료 상담 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-ear-smell",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-007: 귀 냄새를 중이염 단정으로 쓰지 않고 귀지·습기·분비물·통증 기준으로 재작성.",
    "duplicateMemo": "batch-007에서 침 흘림·턱 발진·볼 건조·마른기침·입술 건조·겨울 피부 갈라짐·귀 통증/냄새 질문을 페이지별 검색 의도에 맞게 분리하고, 이앓이·아토피·중이염 같은 단정 표현을 줄임.",
    "keywords": [
      "아기 귀 냄새",
      "아기 귀 분비물",
      "아기 중이염 냄새",
      "귀지 냄새 아기",
      "아이 귀 통증",
      "아기 귀 병원",
      "귀에서 냄새"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "냄새만보다 분비물과 통증을 같이 보세요",
        "items": [
          "아기 귀에서 평소와 다른 냄새가 나면 부모는 귀 안에 염증이 생긴 건 아닌지 걱정하게 됩니다.",
          "귀지가 많거나 땀이 차고, 목욕이나 물놀이 뒤 귀 주변이 오래 젖어 있으면 냄새가 날 수 있어요. 이런 경우에는 귀 겉부분을 부드럽게 말리고 며칠 흐름을 볼 수 있습니다.",
          "다만 귀에서 누런 분비물이나 진물이 나오고, 아이가 귀를 아파하거나 열이 나면 중이염이나 외이도염 같은 귀 문제를 확인해야 할 수 있습니다.",
          "면봉을 깊이 넣어 냄새를 없애려 하면 귀 안쪽 피부가 상하거나 귀지가 더 밀려 들어갈 수 있어요.",
          "냄새가 반복되거나 분비물, 통증, 청력 반응 변화가 함께 보이면 진료 상담을 권합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "귀 냄새와 함께 볼 항목",
        "items": [
          "귀 겉부분만 냄새가 나는지, 귀 안에서 분비물이 나오는지 보기",
          "누런 진물, 피, 고름처럼 보이는 것이 있는지 확인하기",
          "귀를 만지면 아파하거나 울음이 심해지는지 보기",
          "열, 감기 증상, 밤잠 방해가 함께 있는지 살피기",
          "소리에 대한 반응이 평소와 달라졌는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 피해야 할 관리",
        "items": [
          "귀 안을 면봉으로 깊게 닦지 말고, 겉부분만 부드럽게 말려주세요.",
          "냄새가 나는 부위를 억지로 씻어내거나 처방받지 않은 귀약을 넣지 마세요.",
          "분비물이 있으면 닦아내기 전 사진이나 색·양을 메모해 상담 때 설명할 수 있게 해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "귀 냄새와 함께 상담할 신호",
        "body": "누런 분비물, 고름, 피, 심한 통증, 열, 귀 주변 붓기, 소리 반응 저하가 있거나 냄새가 반복되면 중이염·외이도염 여부를 확인하기 위해 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "귀 냄새와 함께 열이나 보챔이 있다면 아기 열 대처 가이드와 귀 통증 관련 Q&A를 함께 확인해보세요."
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-007 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 7`,
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

  console.log("batch-007 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-007 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-drooling-and-fever");
  console.log("- http://localhost:3000/qna/health/baby-drooling-with-rash");
  console.log("- http://localhost:3000/qna/health/baby-dry-cheeks-red");
  console.log("- http://localhost:3000/qna/health/baby-ear-after-swimming");
  console.log("- http://localhost:3000/qna/health/baby-ear-smell");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-007 반영 실패");
  console.error(error);
  process.exit(1);
});
