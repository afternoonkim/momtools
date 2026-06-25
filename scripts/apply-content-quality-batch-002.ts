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
    "batchItemId": "cmqs71zq3000cr8t6mepz46yv",
    "contentId": "cmqnsjavz02qajot6wcjq0bgx",
    "path": "/qna/health/baby-belly-pain-night",
    "title": "밤마다 배 아프다고 깨는 아이, 무엇을 확인해야 하나요?",
    "question": "밤마다 배 아프다고 깨는 아이, 무엇을 확인해야 하나요?",
    "summary": "아이가 밤에 배가 아프다며 자주 깨면 단순 배앓이인지, 변비나 장염처럼 확인이 필요한 상황인지 걱정될 수 있어요. 통증이 어느 부위인지, 대변·구토·열·소변 변화가 함께 있는지부터 차분히 나눠보세요.",
    "metaTitle": "밤마다 배 아프다고 깨는 아이, 확인할 점과 진료 신호 | MomTools",
    "metaDescription": "아이가 밤에 배 아프다고 자주 깰 때 복통 위치, 대변 변화, 구토·열·소변 감소 여부와 소아청소년과 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-belly-pain-night",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 밤 복통 주제로 전면 재작성. 기존 설사 중심 반복 문장을 제거하고 복통 위치·배변·구토·열·소변 확인 기준으로 구성함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 밤 복통",
      "아기 배 아픔",
      "아이 배 아프다고 깸",
      "아이 복통 병원",
      "아기 변비 복통",
      "아이 장염 의심",
      "복통 체크포인트"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "밤에 반복되는 복통은 흐름을 먼저 보세요",
        "items": [
          "아이가 밤마다 배가 아프다며 깨면 부모는 “잠투정일까, 정말 아픈 걸까”부터 헷갈릴 수 있어요. 한 번의 말보다 며칠 동안 비슷한 시간에 반복되는지, 통증 때문에 잠을 완전히 깨는지부터 봐주세요.",
          "배꼽 주변이 뻐근하다고 하는지, 오른쪽 아랫배처럼 한쪽을 계속 가리키는지, 배를 만지면 더 아파하는지 확인하면 상담 때 설명하기 쉽습니다.",
          "대변을 며칠 못 봤거나 딱딱한 변을 본 뒤라면 변비와 함께 배가 아플 수 있어요. 반대로 묽은 변, 구토, 열이 같이 있으면 장염처럼 수분 상태를 함께 봐야 합니다.",
          "저녁에 많이 먹었는지, 새 음식이나 유제품을 먹은 뒤인지, 어린이집이나 유치원에서 배변을 참는 일이 있는지도 같이 떠올려보세요.",
          "아이가 잠깐 안정을 찾고 다시 자는지, 통증이 점점 강해져 울음을 멈추지 못하는지의 차이가 중요합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "오늘 밤 확인할 체크포인트",
        "items": [
          "배가 아픈 위치와 만졌을 때 더 아파하는 부위",
          "마지막 대변 시간, 변 모양, 변비나 설사 여부",
          "구토, 열, 식은땀, 소변 감소가 함께 있는지",
          "저녁 식사, 새 음식, 과식, 외식 여부",
          "통증 때문에 걷기 힘들어하거나 몸을 웅크리는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 먼저 정리할 일",
        "items": [
          "통증 시간, 지속 시간, 대변·구토·열 여부를 한 줄로 적어두세요.",
          "배를 세게 누르거나 억지로 먹이기보다 아이가 편한 자세로 쉬게 해주세요.",
          "변비가 의심되면 최근 배변 간격과 변 모양을 기록하고, 물 섭취와 식사 변화를 함께 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 서두를 신호",
        "body": "통증이 점점 심해지거나 한쪽 배를 계속 아파하고, 반복 구토·혈변·고열·소변 감소·심한 처짐이 함께 있으면 집에서 밤새 지켜보기보다 소아청소년과나 응급 상담을 우선하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "배 아픔이 설사나 변비와 함께 나타난다면 변 변화도 같이 보는 게 좋아요. 변이 묽거나 피가 섞이는지 헷갈릴 때는 아기 설사 확인 가이드를 함께 확인해보세요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000dr8t687xzxp6n",
    "contentId": "cmqnsjenp03n6jot6u9qyyw44",
    "path": "/qna/health/baby-bellybutton-red",
    "title": "아기 배꼽이 빨갛고 냄새가 나면 어떻게 해야 하나요?",
    "question": "아기 배꼽이 빨갛고 냄새가 나면 어떻게 해야 하나요?",
    "summary": "아기 배꼽 주변이 빨갛고 냄새까지 나면 단순한 때나 습기인지, 배꼽 감염처럼 진료가 필요한 변화인지 걱정될 수 있어요. 분비물 색, 붉은 범위, 열, 먹는 양을 함께 확인하는 것이 중요합니다.",
    "metaTitle": "아기 배꼽 빨갛고 냄새날 때 확인할 신호 | MomTools",
    "metaDescription": "아기 배꼽 주변이 빨갛고 냄새가 날 때 분비물, 붓기, 열, 수유량 변화와 진료 상담이 필요한 신호를 보호자 기준으로 정리했습니다.",
    "canonicalPath": "/qna/health/baby-bellybutton-red",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 배꼽 감염 의심 상황에 맞게 재작성. 기존 설사 문맥을 제거하고 붉은 범위·분비물·열·수유량 기준으로 정리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아기 배꼽 냄새",
      "신생아 배꼽 빨개짐",
      "아기 배꼽 분비물",
      "배꼽 감염 의심",
      "아기 배꼽 진료",
      "신생아 배꼽 관리"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "배꼽은 냄새와 붉은 범위를 같이 봐야 해요",
        "items": [
          "배꼽이 조금 눅눅하거나 딱지가 떨어지는 과정에서 냄새가 약하게 느껴질 수는 있어요. 하지만 붉은기가 주변 피부로 번지거나 노란 분비물, 고름 같은 냄새가 나면 단순 청결 문제로만 보기 어렵습니다.",
          "먼저 붉은 범위가 배꼽 안쪽에만 있는지, 주변 피부까지 퍼지는지 확인하세요. 사진을 찍어두면 몇 시간 사이 넓어졌는지 비교하기 좋습니다.",
          "배꼽을 만질 때 아이가 심하게 보채거나, 부위가 뜨겁고 부어 보이면 자극이나 감염 가능성을 상담해야 합니다.",
          "열이 나거나 수유량이 줄고 축 처지는 모습이 함께 있으면 배꼽만의 문제가 아닐 수 있어 더 빨리 확인하는 편이 안전합니다.",
          "소독제나 연고를 임의로 반복해서 바르기보다, 병원에서 안내받은 관리법이 있는지 먼저 확인하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "사진으로 남기면 좋은 변화",
        "items": [
          "붉은 범위가 배꼽 안쪽인지 주변 피부까지 번졌는지",
          "노란 분비물, 피, 고름처럼 보이는 것이 있는지",
          "냄새가 씻은 뒤에도 계속 나는지",
          "열, 수유량 감소, 처짐이 함께 있는지",
          "기저귀나 옷이 배꼽을 계속 문지르는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 관리할 때 주의할 점",
        "items": [
          "배꼽 주변을 세게 문지르거나 딱지를 억지로 떼지 마세요.",
          "기저귀가 배꼽을 덮어 습기가 차지 않는지 확인하고, 옷 마찰을 줄여보세요.",
          "붉은 범위와 분비물 상태를 사진으로 남기고, 몇 시간 뒤 달라지는지 비교해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료가 필요한 신호",
        "body": "배꼽 주변 붉은기가 퍼지고, 고름 같은 분비물이나 악취가 계속되거나, 열·수유량 감소·축 처짐이 함께 보이면 신생아나 어린 아기일수록 진료 상담을 미루지 않는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "아기가 어릴수록 배꼽 변화와 체온, 수유량을 같이 보는 것이 좋아요. 신생아 기본 관찰 기준도 함께 확인해보세요.",
        "items": [
          "신생아 정보",
          "/info/newborn",
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000er8t6odjqm92v",
    "contentId": "cmqnsjept03nojot6th5a0ekp",
    "path": "/qna/health/baby-bite-wound-daycare",
    "title": "어린이집에서 물린 자국, 집에서 어떻게 확인해야 하나요?",
    "question": "어린이집에서 물린 자국, 집에서 어떻게 확인해야 하나요?",
    "summary": "어린이집에서 아이가 물려 오면 상처가 가벼워 보여도 감염이나 멍, 피부가 벗겨진 정도를 확인해야 해요. 피부가 찢어졌는지, 붉어지는 범위가 커지는지, 아이가 아파하는지부터 살펴보세요.",
    "metaTitle": "어린이집 물린 자국, 감염 신호와 확인 방법 | MomTools",
    "metaDescription": "어린이집에서 아이가 물렸을 때 상처 세척, 멍·피부 벗겨짐, 붓기, 고름, 열 등 진료가 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-bite-wound-daycare",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 어린이집 물림 상처 주제로 재작성. 기존 수유 거부 문맥을 제거하고 사람 물림 상처의 감염 신호와 기록 기준을 정리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "어린이집 물린 자국",
      "아이 물림 상처",
      "아기 물린 상처",
      "아이 상처 감염",
      "어린이집 사고 확인",
      "물린 자국 진료"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "물린 자국은 피부가 벗겨졌는지가 중요해요",
        "items": [
          "아이끼리 놀다 물린 자국은 멍만 남는 경우도 있지만, 피부가 벗겨졌다면 감염 위험을 더 신경 써야 합니다. 사람 입 안에는 세균이 많아 작아 보이는 상처도 붓거나 빨개질 수 있어요.",
          "먼저 피부가 실제로 찢어졌는지, 피가 났는지, 이빨 자국이 깊게 찍혔는지 확인하세요. 상처가 열린 상태라면 깨끗한 흐르는 물과 비누로 부드럽게 씻는 것이 기본입니다.",
          "어린이집에는 언제, 어디를, 어떤 상황에서 물렸는지 확인해두세요. 같은 날 넘어짐이나 긁힘이 함께 있었는지도 알면 상처 변화를 설명하기 쉽습니다.",
          "얼굴, 손가락, 관절 주변처럼 움직임이 많거나 흉터가 신경 쓰이는 부위는 상처가 작아 보여도 상담이 도움이 될 수 있습니다.",
          "상처 주위가 점점 붉어지거나 뜨겁고, 통증이 심해지거나 고름이 보이면 단순 멍으로 넘기지 않는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집에 와서 볼 것",
        "items": [
          "피부가 찢어졌는지, 피가 났는지, 이빨 자국이 깊은지",
          "붉은 범위가 시간이 지나며 커지는지",
          "붓기, 열감, 고름, 냄새가 생기는지",
          "아이에게 열이 나거나 해당 부위를 계속 아파하는지",
          "어린이집 사고 기록과 보호자에게 전달된 내용이 맞는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바로 할 일",
        "items": [
          "피부가 벗겨진 상처는 깨끗한 물과 비누로 부드럽게 씻고 마른 거즈로 덮어주세요.",
          "상처 사진을 당일, 다음 날 같은 거리에서 찍어두면 붉어짐이 번지는지 비교하기 좋습니다.",
          "피부가 열린 상처라면 파상풍 접종 여부나 진료 필요성을 소아청소년과에 문의해보는 것이 안전합니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 권하는 경우",
        "body": "피부가 찢어졌거나 깊은 이빨 자국이 있고, 붓기·열감·고름·심한 통증·발열이 생기거나 얼굴·손·관절 주변을 물린 경우에는 상처가 작아 보여도 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "물린 자국 외에도 넘어짐이나 부딪힘이 함께 있었다면 상처와 멍의 변화를 같이 확인해보세요.",
        "items": [
          "아이 건강 Q&A",
          "/qna/health",
          "어린이집 준비 체크리스트",
          "/checklists/daycare"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000fr8t6bhsedxcy",
    "contentId": "cmqnsj50q01bljot6f96q1t9u",
    "path": "/qna/health/baby-blood-in-stool",
    "title": "기저귀에 피가 조금 묻어 나오면 바로 병원에 가야 하나요?",
    "question": "기저귀에 피가 조금 묻어 나오면 바로 병원에 가야 하나요?",
    "summary": "기저귀에 피가 조금 묻어 나오면 부모는 매우 놀랄 수 있어요. 선홍색 피가 딱딱한 변 겉에 묻었는지, 변 전체에 섞였는지, 설사·구토·열·복통이 함께 있는지에 따라 확인할 기준이 달라집니다.",
    "metaTitle": "기저귀에 피가 묻었을 때 확인할 혈변 신호 | MomTools",
    "metaDescription": "아기 기저귀에 피가 조금 묻었을 때 변 색, 변비, 설사, 구토, 열, 소변 감소 등 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-blood-in-stool",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 기저귀 혈변 주제로 재작성. 기존 반복 설사 문장을 줄이고 피의 위치·색·변 상태·컨디션 기준을 분리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "기저귀 피",
      "아기 혈변",
      "아기 변에 피",
      "아기 항문 찢어짐",
      "아이 혈변 병원",
      "아기 대변 피"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "피가 어디에 보이는지부터 나눠보세요",
        "items": [
          "기저귀에 피가 조금 보여도 원인은 여러 가지일 수 있어요. 딱딱한 변을 본 뒤 선홍색 피가 겉에 묻었다면 항문 주위가 자극받았을 가능성도 있지만, 이것만으로 단정하면 안 됩니다.",
          "피가 변 겉에 살짝 묻었는지, 변과 섞여 나왔는지, 점액이나 설사가 함께 있는지 확인하세요. 가능하면 기저귀 사진을 남겨 상담 때 보여주는 것이 도움이 됩니다.",
          "최근 변비가 있었는지, 이유식 재료가 바뀌었는지, 설사나 구토가 같이 있는지 살펴보세요. 변 색을 말로 설명하기 어려울 때가 많아 기록이 중요합니다.",
          "아이 컨디션도 같이 봐야 합니다. 잘 먹고 평소처럼 노는지, 배를 아파하며 울거나 축 처지는지에 따라 상담 우선순위가 달라질 수 있어요.",
          "피가 반복되거나 양이 늘면 “조금이니까 괜찮겠지”로 넘기지 말고 의료진에게 확인하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "기저귀 사진과 함께 적어둘 것",
        "items": [
          "피 색이 선홍색인지, 검붉거나 검은색에 가까운지",
          "피가 변 겉에 묻었는지, 변 안에 섞여 있는지",
          "변이 딱딱했는지, 묽은 설사였는지",
          "구토, 열, 복통, 소변 감소가 함께 있는지",
          "최근 새 이유식, 약, 변비가 있었는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "지금 해볼 수 있는 정리",
        "items": [
          "기저귀를 버리기 전에 사진을 남기고, 피가 보인 시간과 변 상태를 적어두세요.",
          "변비가 의심되면 최근 배변 간격과 변의 딱딱한 정도를 함께 기록하세요.",
          "피가 반복되거나 아이가 아파 보이면 온라인 검색보다 소아청소년과 상담을 우선하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담이 필요한 신호",
        "body": "검은 변, 피가 섞인 설사, 반복 구토, 심한 복통, 소변 감소, 축 처짐, 생후 3개월 미만 아기의 혈변은 집에서 지켜보기보다 진료 상담을 서두르는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "혈변이 설사나 변비와 함께 보이면 변 변화의 흐름을 같이 확인하는 것이 좋아요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000gr8t6duwrtkvd",
    "contentId": "cmqnsjb6602ssjot6ymw5bz9y",
    "path": "/qna/health/baby-blood-streak-stool",
    "title": "변에 피가 조금 묻어 나오면 어떤 경우를 봐야 하나요?",
    "question": "변에 피가 조금 묻어 나오면 어떤 경우를 봐야 하나요?",
    "summary": "변에 피가 실처럼 조금 묻어 나오면 변비로 항문이 자극된 것인지, 장염이나 다른 원인으로 확인이 필요한지 헷갈릴 수 있어요. 피가 반복되는지, 변이 딱딱한지, 설사·점액·복통이 함께 있는지부터 확인해보세요.",
    "metaTitle": "아기 변에 피가 조금 묻을 때 확인할 점 | MomTools",
    "metaDescription": "아기 변에 피가 조금 묻어 나올 때 변비, 항문 자극, 설사, 점액, 복통, 반복 여부와 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-blood-streak-stool",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 변에 피가 조금 묻는 상황으로 재작성. 혈변 페이지와 중복되지 않도록 반복 여부·변비·점액·사진 기록 기준을 강조함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아기 변 피 조금",
      "변에 피 묻음",
      "아기 혈변 조금",
      "아기 변비 피",
      "아이 대변 피",
      "아기 항문 자극"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "선홍색 피가 반복되는지 확인하세요",
        "items": [
          "변에 피가 아주 조금 보이면 부모는 당연히 불안해져요. 딱딱한 변을 본 직후 선홍색 피가 겉에 묻는 경우도 있지만, 피가 반복되거나 변과 섞여 나오면 확인이 필요합니다.",
          "피가 한 번 보였는지, 여러 번 이어지는지 먼저 기록해보세요. 같은 날이라도 양이 늘거나 점액이 함께 보이면 상담 때 중요한 단서가 됩니다.",
          "최근 변을 참았거나 딱딱한 변을 힘들게 봤다면 항문 주변 자극을 의심할 수 있어요. 다만 아이가 배를 심하게 아파하거나 설사를 동반하면 단순 변비로만 보기는 어렵습니다.",
          "모유·분유·이유식 변화, 새 음식, 약 복용, 가족 내 장염 증상도 함께 떠올려보세요.",
          "사진이 있으면 “피가 조금”이라는 표현보다 훨씬 정확하게 설명할 수 있습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "피가 보였을 때 비교할 항목",
        "items": [
          "변이 딱딱했는지, 묽었는지, 점액이 있었는지",
          "피가 변 겉에 줄처럼 묻었는지, 변 전체와 섞였는지",
          "아이 배가 아파 보이거나 구토·열이 있는지",
          "피가 한 번인지, 며칠 사이 반복되는지",
          "기저귀 사진으로 색과 양을 확인할 수 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 할 수 있는 일",
        "items": [
          "기저귀 사진을 남기고 변 모양, 피의 색, 아이 컨디션을 함께 적어두세요.",
          "딱딱한 변이 반복된다면 물 섭취, 이유식 재료, 배변 간격을 같이 정리해보세요.",
          "피가 반복되면 양이 적어도 소아청소년과에 문의해 확인하는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담을 미루지 않을 신호",
        "body": "피가 섞인 설사, 검거나 끈적한 변, 반복 구토, 심한 복통, 소변 감소, 축 처짐, 피가 반복되는 경우에는 양이 적어 보여도 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "변에 피가 보일 때는 설사뿐 아니라 변비와 배변 간격도 함께 보는 것이 좋아요.",
        "items": [
          "아기 설사 확인 가이드",
          "/health/diarrhea",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000hr8t6ep9ys2os",
    "contentId": "cmqnsj6o301pyjot6740drc2r",
    "path": "/qna/health/baby-blue-lips-briefly",
    "title": "아기 입술이 잠깐 파래 보이면 위험한가요?",
    "question": "아기 입술이 잠깐 파래 보이면 위험한가요?",
    "summary": "아기 입술이 순간적으로 파래 보이면 부모는 호흡 문제인지 바로 걱정하게 됩니다. 추위나 울음 뒤에 금방 돌아오는지, 혀까지 파란지, 숨쉬기 힘들어 보이거나 축 처지는지에 따라 확인해야 할 기준이 달라요.",
    "metaTitle": "아기 입술이 파래 보일 때 확인할 호흡 신호 | MomTools",
    "metaDescription": "아기 입술이 잠깐 파래 보일 때 추위·울음 후 회복 여부, 혀 색, 호흡곤란, 처짐 등 바로 상담해야 할 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-blue-lips-briefly",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 입술 청색 의심 상황으로 재작성. 기존 피부 발진 문맥을 제거하고 혀 색·호흡·회복 속도 기준을 분리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아기 입술 파래짐",
      "아기 입술 청색",
      "입술이 파래 보여요",
      "아기 호흡곤란",
      "아기 피부색 변화",
      "청색증 의심"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "입술만인지, 혀와 얼굴색까지인지 보세요",
        "items": [
          "입술이 잠깐 파래 보이면 가장 먼저 확인할 것은 색이 돌아오는 속도와 아이의 호흡입니다. 추운 곳에 있다가 입 주변만 푸르스름해 보이고 금방 돌아온다면 상황을 기록하며 볼 수 있지만, 반복되거나 호흡이 힘들어 보이면 다르게 봐야 합니다.",
          "입술 바깥쪽만인지, 혀나 입안까지 파랗게 보이는지 확인하세요. 혀와 입안 색 변화는 단순 입 주변 색 변화보다 더 주의가 필요합니다.",
          "아이를 안았을 때 몸에 힘이 없거나, 수유 중 숨이 차서 자주 멈추거나, 갈비뼈가 들어가는 듯한 호흡이 보이면 바로 상담해야 합니다.",
          "색 변화가 언제 생기는지도 중요해요. 울 때만인지, 목욕 후인지, 잠자는 중인지, 먹는 중인지에 따라 설명할 내용이 달라집니다.",
          "사진이나 짧은 영상이 있으면 상담 때 도움이 되지만, 호흡이 힘들어 보이는 순간에는 촬영보다 도움 요청이 먼저입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "색이 변했을 때 바로 볼 것",
        "items": [
          "입술 바깥만인지, 혀와 입안까지 파란지",
          "몇 초 안에 원래 색으로 돌아오는지",
          "숨이 빠르거나 갈비뼈가 들어가는지",
          "수유나 울음 뒤에 반복되는지",
          "축 처짐, 식은땀, 의식 저하가 함께 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "지금 할 수 있는 확인",
        "items": [
          "아이를 편한 자세로 안고 호흡과 반응을 먼저 보세요.",
          "추위나 울음 뒤라면 몸을 따뜻하게 하고 색이 바로 돌아오는지 확인하세요.",
          "반복되는 장면은 시간, 상황, 지속 시간을 짧게 기록해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 도움을 요청할 신호",
        "body": "혀나 입안까지 파랗게 보이거나, 숨쉬기 힘들어 보이거나, 축 처지고 잘 먹지 못하거나, 색 변화가 반복되고 회복이 늦다면 지체하지 말고 의료기관이나 응급 상담을 우선하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "입술 색 변화가 기침, 쌕쌕거림, 숨참과 함께 보인다면 호흡 관련 기준도 같이 확인해보세요.",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "아기 열 대처 가이드",
          "/health/fever"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000ir8t6ii6oajq8",
    "contentId": "cmqnsjfss03wxjot6kj8lljon",
    "path": "/qna/health/baby-blue-lips-crying",
    "title": "울 때 입술이 파래 보이면 바로 병원에 가야 하나요?",
    "question": "울 때 입술이 파래 보이면 바로 병원에 가야 하나요?",
    "summary": "아이가 크게 울다가 입술이 파래 보이면 숨을 참는 행동인지, 호흡 문제인지 구분이 어려울 수 있어요. 울음 전후 흐름, 색이 돌아오는 시간, 의식 변화, 호흡 상태를 함께 확인해야 합니다.",
    "metaTitle": "울 때 입술이 파래지는 아이, 확인할 신호 | MomTools",
    "metaDescription": "아이가 울 때 입술이 파래 보일 때 숨참, 회복 시간, 의식 변화, 호흡곤란 여부와 바로 상담해야 할 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-blue-lips-crying",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 울음 중 입술 청색 상황으로 재작성. 기존 설사 문맥을 제거하고 숨참·회복 시간·의식 변화 기준을 정리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "울 때 입술 파래짐",
      "아이 숨참",
      "아기 숨참 발작",
      "입술 청색 울음",
      "아이 호흡 확인",
      "아기 울다 파래짐"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "울음 뒤 바로 회복되는지 확인하세요",
        "items": [
          "아이가 세게 울다가 숨을 멈춘 듯 보이고 입술이 파래지면 보호자는 매우 놀랄 수 있어요. 일부 아이는 울음이나 놀람 뒤 숨참처럼 보이는 행동을 보일 수 있지만, 모든 경우를 같은 것으로 보면 안 됩니다.",
          "먼저 울기 시작한 이유가 있었는지, 색이 몇 초 안에 돌아왔는지, 이후 평소처럼 울고 반응하는지 확인하세요.",
          "입술 색만 잠깐 변했는지, 몸이 축 늘어지거나 의식이 흐려졌는지, 경련처럼 떨림이 있었는지에 따라 상담 필요성이 달라집니다.",
          "울지 않았는데도 파래지거나, 먹는 중·자는 중에도 반복된다면 단순 숨참으로만 보기 어렵습니다.",
          "아이를 세게 흔들거나 입에 물을 넣는 행동은 피하고, 안전한 바닥이나 보호자 품에서 다치지 않게 자세를 잡아주세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "상황을 설명할 때 필요한 내용",
        "items": [
          "울음이나 놀람 같은 계기가 있었는지",
          "입술 색이 돌아오는 데 걸린 시간",
          "몸이 축 늘어졌는지, 의식이 흐려졌는지",
          "경련처럼 떨림이나 눈이 돌아가는 모습이 있었는지",
          "울지 않을 때도 같은 색 변화가 반복되는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "그 순간 대처 방법",
        "items": [
          "아이를 안전한 곳에 눕히거나 안아 다치지 않게 하고, 호흡과 반응을 확인하세요.",
          "억지로 입을 벌리거나 물을 먹이거나 세게 흔들지 마세요.",
          "처음 겪은 일이라면 지속 시간과 회복 과정을 적어두고 소아청소년과에 상담해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 서두를 경우",
        "body": "색이 잘 돌아오지 않거나, 의식 저하·경련·호흡곤란이 동반되거나, 울음 없이도 반복되거나, 생후 어린 아기에게 처음 나타난 경우에는 단순 숨참으로 넘기지 말고 진료 상담을 받는 것이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "입술 색 변화가 호흡과 연결되어 보인다면 기침·호흡 확인 기준도 함께 살펴보세요.",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "아이 건강 Q&A",
          "/qna/health"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000jr8t6lo5hmc4l",
    "contentId": "cmqnsjfus03xfjot6uln9d973",
    "path": "/qna/health/baby-breath-holding-cry",
    "title": "울다가 숨을 참는 아이, 어떻게 대처해야 하나요?",
    "question": "울다가 숨을 참는 아이, 어떻게 대처해야 하나요?",
    "summary": "아이가 울다가 숨을 멈춘 듯 보이면 보호자는 당황해서 바로 흔들거나 물을 먹이고 싶어질 수 있어요. 먼저 아이가 안전하게 있는지 확인하고, 얼마나 오래 지속됐는지와 회복 과정을 기록하는 것이 중요합니다.",
    "metaTitle": "울다가 숨을 참는 아이 대처와 상담 신호 | MomTools",
    "metaDescription": "아이가 울다가 숨을 참는 것처럼 보일 때 안전하게 대처하는 방법, 기록할 내용, 진료 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-breath-holding-cry",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 숨참 상황으로 재작성. 기침 문맥을 제거하고 순간 대처·기록·상담 신호를 분리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 숨참",
      "울다가 숨참",
      "숨참 발작",
      "아기 울다 숨 멈춤",
      "아이 입술 파래짐",
      "숨참 대처"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "그 순간에는 아이를 안전하게 두는 게 먼저예요",
        "items": [
          "울다가 숨을 참는 모습은 보호자에게 매우 무섭게 보일 수 있어요. 하지만 그 순간 아이를 세게 흔들거나 입에 무언가를 넣는 행동은 도움이 되지 않고 오히려 위험할 수 있습니다.",
          "먼저 아이가 넘어지거나 부딪치지 않도록 바닥이나 안전한 곳에 눕히고, 숨이 돌아오며 평소 반응으로 회복되는지 확인하세요.",
          "대개 울음, 놀람, 통증 같은 계기가 있었는지 보는 것이 중요합니다. 아무 계기 없이 창백해지거나 의식을 잃는 모습이 반복되면 다른 원인 확인이 필요할 수 있어요.",
          "처음 겪은 일이라면 지속 시간, 입술 색 변화, 몸이 뻣뻣해졌는지, 회복 후 아이가 어떻게 반응했는지를 적어두면 상담에 도움이 됩니다.",
          "숨참을 막기 위해 아이 요구를 모두 들어주는 방식으로 대응하면 행동 패턴이 더 복잡해질 수 있어요. 안전 확인 후에는 차분하고 짧게 반응하는 편이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "숨참 뒤 기록할 내용",
        "items": [
          "울음, 놀람, 통증 같은 계기가 있었는지",
          "입술이 파랗게 보였는지, 얼굴이 창백했는지",
          "지속 시간이 몇 초 정도였는지",
          "몸이 축 늘어지거나 떨림이 있었는지",
          "회복 후 바로 울거나 평소처럼 반응했는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "다음에 반복될 때의 대처",
        "items": [
          "아이를 안전한 자세로 두고 주변 물건을 치워 다치지 않게 하세요.",
          "입에 물이나 음식을 넣지 말고, 세게 흔들지 마세요.",
          "처음 발생했거나 반복 빈도가 늘면 기록을 가지고 소아청소년과에 상담하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담이 필요한 경우",
        "body": "생후 어린 아기에게 처음 나타났거나, 계기 없이 발생하거나, 의식 회복이 늦거나, 경련처럼 보이는 움직임·호흡곤란·반복적인 청색증이 있으면 숨참으로만 판단하지 말고 진료 상담을 받는 것이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "숨참 중 입술 색이 변하거나 호흡이 불편해 보이면 호흡 관련 기준도 함께 확인해보세요.",
        "items": [
          "아기 기침·호흡 확인 가이드",
          "/health/cough",
          "아이 행동 Q&A",
          "/qna/behavior"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000kr8t6l77tah6k",
    "contentId": "cmqnsje5103isjot6ljf5a8k8",
    "path": "/qna/health/baby-bruise-leg",
    "title": "아이 다리에 멍이 자주 드는데 괜찮은 걸까요?",
    "question": "아이 다리에 멍이 자주 드는데 괜찮은 걸까요?",
    "summary": "걷고 뛰는 아이는 정강이나 무릎에 멍이 생기기 쉽지만, 멍의 위치와 반복 양상은 확인이 필요해요. 부딪힌 기억이 있는지, 멍이 몸통·귀·얼굴처럼 unusual한 부위에 생기는지, 코피나 잇몸 출혈이 함께 있는지 봐주세요.",
    "metaTitle": "아이 다리에 멍이 자주 들 때 확인할 점 | MomTools",
    "metaDescription": "아이 다리에 멍이 자주 생길 때 활동 부위 멍과 상담이 필요한 멍을 나누어 보고, 반복·위치·출혈 동반 여부를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-bruise-leg",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 다리 멍 주제로 재작성. 기존 머리 부딪힘 문맥을 제거하고 멍 위치·출혈 동반·안전 확인 기준으로 구성함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아이 멍 자주",
      "아기 다리 멍",
      "아이 멍 병원",
      "멍이 잘 드는 아이",
      "아이 출혈 증상",
      "아이 안전 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "활동 부위 멍인지, 설명하기 어려운 멍인지 나눠보세요",
        "items": [
          "걷고 뛰기 시작한 아이는 정강이, 무릎처럼 부딪히기 쉬운 부위에 멍이 생길 수 있어요. 하지만 멍이 자주 생긴다는 이유만으로 모두 활동 때문이라고 단정하면 안 됩니다.",
          "먼저 멍이 생긴 위치를 보세요. 정강이처럼 부딪히기 쉬운 곳인지, 배·등·귀·목·팔 안쪽처럼 평소 잘 부딪히지 않는 부위인지가 중요합니다.",
          "멍 크기가 유난히 크거나, 여러 색의 멍이 여러 부위에 동시에 있거나, 부딪힌 기억이 없는데 반복된다면 기록이 필요합니다.",
          "코피가 자주 나거나 잇몸 출혈, 작은 붉은 점 같은 피부 출혈, 열·피로감이 함께 있으면 단순 타박상과 다르게 봐야 합니다.",
          "어린이집이나 놀이터에서 생긴 멍이라면 언제, 어디서, 어떤 놀이 중 생겼는지 확인해두면 불필요한 오해를 줄이고 아이 안전도 점검할 수 있어요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "멍을 볼 때 기록할 것",
        "items": [
          "멍 위치와 크기, 색 변화",
          "부딪힌 기억이나 사고 상황이 있는지",
          "정강이·무릎 같은 활동 부위인지, 몸통·귀·얼굴 같은 부위인지",
          "코피, 잇몸 출혈, 작은 붉은 점이 함께 있는지",
          "멍이 몇 일 사이 늘거나 반복되는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 수 있는 정리",
        "items": [
          "멍 사진을 날짜별로 찍어 크기와 색이 줄어드는지 비교하세요.",
          "최근 넘어진 일, 어린이집 활동, 새로 시작한 운동이나 놀이를 함께 적어두세요.",
          "부딪힌 설명이 어려운 멍이 반복되면 소아청소년과에 상담해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담이 필요한 멍",
        "body": "부딪힌 기억이 없는데 멍이 반복되거나, 몸통·귀·얼굴처럼 unusual한 부위에 생기거나, 코피·잇몸 출혈·피부의 작은 붉은 점·열·심한 피로가 함께 있으면 진료 상담을 받는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "멍이 넘어짐이나 부딪힘과 관련되어 보인다면 머리 부딪힘, 상처 확인 기준도 함께 보는 것이 좋아요.",
        "items": [
          "아이 건강 Q&A",
          "/qna/health",
          "어린이집 준비 체크리스트",
          "/checklists/daycare"
        ]
      }
    ]
  },
  {
    "batchItemId": "cmqs71zq3000lr8t68xpaszg5",
    "contentId": "cmqnsj6s701qyjot6f1zgzt2l",
    "path": "/qna/health/baby-bump-on-head",
    "title": "아이가 머리를 부딪치고 혹이 생기면 어떻게 봐야 하나요?",
    "question": "아이가 머리를 부딪치고 혹이 생기면 어떻게 봐야 하나요?",
    "summary": "아이가 머리를 부딪치고 혹이 생기면 울음을 그쳤더라도 이후 반응을 봐야 해요. 반복 구토, 심한 졸림, 의식 변화, 경련, 계속 심해지는 두통이나 보챔이 있는지 일정 시간 관찰하는 것이 중요합니다.",
    "metaTitle": "아이 머리 혹, 부딪힌 뒤 집에서 볼 신호 | MomTools",
    "metaDescription": "아이가 머리를 부딪치고 혹이 생겼을 때 냉찜질, 관찰 시간, 반복 구토·졸림·의식 변화 등 진료 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-bump-on-head",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-002: 머리 부딪힘 페이지를 재작성. 기존 일반 건강 문맥을 제거하고 사고 높이·관찰 시간·구토·졸림·의식 변화 기준을 정리함.",
    "duplicateMemo": "batch-002에서 본문, 카드 섹션, 관련 가이드 문맥을 함께 점검해 반복 구조와 잘못 연결된 주제를 정리함.",
    "keywords": [
      "아기 머리 혹",
      "아이 머리 부딪힘",
      "머리 부딪힌 후 구토",
      "아이 낙상 확인",
      "아기 머리 멍",
      "머리 혹 병원"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "혹 크기보다 이후 반응을 함께 보세요",
        "items": [
          "머리를 부딪치고 혹이 생기면 혹 자체보다 그 뒤 아이 반응이 중요합니다. 울음을 멈췄더라도 평소처럼 눈을 맞추는지, 걷거나 놀 때 균형이 괜찮은지, 먹는 양이 유지되는지 확인하세요.",
          "부딪힌 직후에는 깨끗한 천으로 감싼 차가운 찜질을 짧게 해볼 수 있어요. 피부에 얼음을 직접 오래 대지는 마세요.",
          "사고 높이와 바닥 상태도 적어두면 좋습니다. 침대, 소파, 계단, 유모차처럼 어디서 떨어졌는지에 따라 상담 때 설명할 내용이 달라집니다.",
          "잠을 자야 하는 시간이면 무조건 재우지 말아야 하는 것은 아니지만, 깨웠을 때 평소처럼 반응하는지 확인할 수 있어야 합니다.",
          "이후 24~48시간 동안 반복 구토, 심한 졸림, 평소와 다른 행동, 경련, 걷기 이상이 생기지 않는지 살펴보세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "머리를 부딪힌 뒤 확인할 것",
        "items": [
          "떨어진 높이와 부딪힌 위치",
          "의식을 잃었거나 멍해 보인 시간이 있었는지",
          "반복 구토, 심한 졸림, 경련이 있는지",
          "혹이 빠르게 커지거나 상처에서 피가 나는지",
          "평소와 다른 울음, 보챔, 걷기·눈맞춤 변화가 있는지"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 관찰할 때",
        "items": [
          "차가운 찜질은 천을 사이에 두고 짧게 해주세요.",
          "사고 시간, 장소, 높이, 이후 구토 여부를 적어두세요.",
          "아이를 혼자 오래 두기보다 일정 시간 반응과 걸음, 먹는 양을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 진료가 필요한 신호",
        "body": "의식을 잃었거나 깨우기 어렵고, 반복 구토·경련·심한 졸림·평소와 다른 행동·걷기 이상·계속 심해지는 두통이나 보챔이 있으면 머리 혹 크기와 상관없이 진료나 응급 상담을 우선하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "body": "머리 부딪힘은 멍이나 상처 변화도 같이 볼 수 있어요. 비슷한 안전 사고 Q&A도 이어서 확인해보세요.",
        "items": [
          "아이 건강 Q&A",
          "/qna/health",
          "아기 개월수 계산기",
          "/tools/baby-age"
        ]
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
    if (columnSet.has("status")) assignments.push(`"status" = 'COMPLETED'`);
    if (columnSet.has("completedAt")) assignments.push(`"completedAt" = now()`);
    if (columnSet.has("updatedAt")) assignments.push(`"updatedAt" = now()`);
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-002 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 2`,
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

  console.log("batch-002 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-002 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-belly-pain-night");
  console.log("- http://localhost:3000/qna/health/baby-bite-wound-daycare");
  console.log("- http://localhost:3000/qna/health/baby-blue-lips-briefly");
  console.log("- http://localhost:3000/qna/health/baby-bump-on-head");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-002 반영 실패");
  console.error(error);
  process.exit(1);
});
