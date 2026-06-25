import dotenv from "dotenv";

dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true });


function escapeSql(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).replace(/'/g, "''");
}


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
    "batchItemId": "cmqs71zzf003er8t6tobf1thh",
    "contentId": "cmqnsj7ej01wajot68qxyo47k",
    "path": "/qna/health/baby-flu-signs",
    "title": "아이 독감이 의심될 때 집에서 먼저 봐야 할 기준은?",
    "question": "아이 독감이 의심될 때 집에서 먼저 봐야 할 기준은?",
    "summary": "아이가 갑자기 고열처럼 보이고 축 처지면 독감인지 감기인지부터 걱정될 수 있어요. 병명을 집에서 단정하기보다 열이 오른 속도, 호흡, 수분 섭취, 소변, 깨웠을 때 반응을 함께 확인하는 것이 먼저입니다.",
    "metaTitle": "아이 독감 의심 증상, 집에서 먼저 볼 기준 | MomTools",
    "metaDescription": "아이 독감이 의심될 때 감기와 단정해서 구분하기보다 열, 호흡, 수분 섭취, 소변, 처짐 정도를 어떻게 볼지 정리했습니다.",
    "canonicalPath": "/qna/health/baby-flu-signs",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "독감 의심 글을 기침 일반론에서 분리하고 발열·호흡·수분·반응 기준 중심으로 재작성",
    "keywords": [
      "아이 독감 의심",
      "아기 독감 증상",
      "아이 고열",
      "독감 감기 구분",
      "아이 발열",
      "소아 독감 상담 신호",
      "아기 수분 섭취",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "독감인지보다 아이가 버티고 있는지를 먼저 봐요",
        "items": [
          "아이가 평소와 다르게 축 처지고 열이 빨리 오르면 부모는 독감부터 떠올리게 됩니다. 다만 집에서는 독감인지 감기인지 이름을 붙이기보다, 지금 아이가 얼마나 힘들어하는지부터 보는 게 더 안전합니다.",
          "먼저 숨쉬는 모습과 반응을 확인하세요. 가슴이나 갈비뼈 사이가 들어가 보이거나, 깨웠을 때 눈을 잘 맞추지 못하고 멍하게 있으면 단순 감기처럼 지켜보기 어렵습니다.",
          "수분 섭취와 소변도 같이 봐야 합니다. 물이나 수유를 거의 받지 못하고 기저귀가 눈에 띄게 덜 젖는다면 열의 원인보다 탈수 위험을 먼저 생각해야 합니다.",
          "독감이 유행하는 시기에는 가족이나 어린이집·학교에서 비슷한 증상이 있었는지도 기록해두면 진료 때 도움이 됩니다. 하지만 노출 이력만으로 독감을 확정할 수는 없습니다.",
          "해열제를 이미 썼다면 제품명, 복용 시간, 이후 반응을 적어두세요. 임의로 약을 겹쳐 쓰기보다 아이 상태와 복용 기록을 가지고 상담하는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "집에서 먼저 확인할 기준",
        "items": [
          "열이 언제부터 시작됐고 최고 체온이 어느 정도였는지 보기",
          "깨웠을 때 눈을 맞추고 반응하는지 확인하기",
          "숨이 빠르거나 힘들어 보이는지, 입술색이 변하지 않는지 보기",
          "수유·물 섭취가 유지되는지와 마지막 소변 시간을 확인하기",
          "가족, 어린이집, 학교에서 비슷한 증상이 있었는지 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "진료 전 정리하면 좋은 것",
        "items": [
          "체온, 해열제 복용 시간, 아이 반응을 시간 순서대로 적어두세요.",
          "기침·콧물·목아픔·근육통처럼 함께 보이는 증상을 따로 표시해두세요.",
          "아이가 잘 마시지 못하면 먹인 양보다 마지막으로 소변을 본 시간을 먼저 기록하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 상담을 서두를 신호",
        "body": "숨쉬기 힘들어 보이거나, 입술이나 얼굴색이 파래 보이거나, 깨우기 어려울 정도로 처지거나, 반복 구토·경련·소변 감소가 있으면 독감 여부를 기다리지 말고 진료 상담을 권합니다. 3개월 미만 아기의 발열은 특히 더 일찍 확인하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "독감이 의심될 때도 핵심은 체온 숫자만 보는 것이 아니라 월령, 수분 섭취, 호흡, 반응을 함께 확인하는 것입니다. 발열 기준이 헷갈리면 아기 열 대처 가이드도 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003fr8t6xhc2gizn",
    "contentId": "cmqnsjfyt03yejot6p0k4d4ld",
    "path": "/qna/health/baby-frequent-hiccups-after-feeding",
    "title": "수유 후 딸꾹질이 자주 나는 아기, 어떻게 도와줄까요?",
    "question": "수유 후 딸꾹질이 자주 나는 아기, 어떻게 도와줄까요?",
    "summary": "수유가 끝날 때마다 딸꾹질을 하면 아기가 힘든 건 아닌지 걱정될 수 있어요. 대부분은 공기를 함께 삼켰거나 배가 빨리 찬 상황과 관련될 수 있지만, 먹는 양·토함·호흡·체중 증가를 함께 봐야 합니다.",
    "metaTitle": "수유 후 딸꾹질 잦은 아기, 집에서 도와주는 법 | MomTools",
    "metaDescription": "수유 후 딸꾹질이 자주 나는 아기를 어떻게 도와줄지, 트림·수유 속도·자세·상담 신호를 부모 관점으로 정리했습니다.",
    "canonicalPath": "/qna/health/baby-frequent-hiccups-after-feeding",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "딸꾹질을 질환처럼 단정하지 않고 수유 흐름·공기 삼킴·역류 신호 중심으로 재작성",
    "keywords": [
      "수유 후 딸꾹질",
      "아기 딸꾹질",
      "신생아 딸꾹질",
      "아기 트림",
      "수유 자세",
      "아기 역류",
      "수유 후 토함",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "수유 리듬을 조금 느리게 보면 도움이 돼요",
        "items": [
          "수유가 끝날 때마다 딸꾹질을 하면 아기가 불편해서 우는 건 아닌지 걱정될 수 있습니다. 딸꾹질만 있고 잘 먹고 잘 자라면 흔히 지나갈 수 있지만, 수유 흐름을 살펴볼 필요는 있습니다.",
          "젖병을 너무 빨리 먹거나 젖이 한꺼번에 많이 나오면 공기를 같이 삼킬 수 있어요. 수유 중간에 한 번 쉬어 트림을 시키고, 먹는 속도가 너무 빠르지 않은지 확인해보세요.",
          "수유 직후 바로 눕히면 토하거나 보채는 아기는 상체를 살짝 세워 안고 안정되는 시간을 주는 편이 도움이 될 수 있습니다. 단, 잠잘 때는 안전수면 원칙에 맞는 자세를 지켜야 합니다.",
          "딸꾹질을 멈추게 하려고 물, 설탕, 깜짝 놀라게 하기 같은 어른식 방법을 쓰는 것은 피하는 게 좋아요. 아기에게는 오히려 불편하거나 안전하지 않을 수 있습니다.",
          "딸꾹질과 함께 자주 토하고, 먹는 양이 줄고, 체중 증가가 더디거나, 숨이 불편해 보이면 단순 딸꾹질로만 보기 어렵습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "수유 후 같이 볼 변화",
        "items": [
          "수유 중 공기를 많이 삼키는지, 먹는 속도가 너무 빠른지 보기",
          "수유 중간과 끝에 트림을 했을 때 편해지는지 확인하기",
          "딸꾹질 뒤 토함이나 보챔이 반복되는지 살피기",
          "수유량과 기저귀 횟수, 체중 증가 흐름을 함께 보기",
          "딸꾹질 중 입술색·호흡이 평소와 같은지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 수유 때 해볼 수 있는 조정",
        "items": [
          "수유 중간에 잠깐 쉬어 트림 시간을 넣어보세요.",
          "젖병이라면 젖꼭지 단계가 너무 빠르지 않은지 확인하세요.",
          "수유 직후에는 바로 눕히기보다 잠깐 안아서 안정시키고, 잠은 안전한 수면 자세로 재우세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "딸꾹질보다 함께 나타나는 신호를 봐야 할 때",
        "body": "딸꾹질 중 숨을 멈추는 것처럼 보이거나 입술색이 변하거나, 반복적으로 심하게 토하거나, 수유량이 줄고 체중 증가가 걱정되면 소아청소년과 상담을 권합니다. 딸꾹질 자체보다 먹고 숨쉬고 자라는 흐름이 더 중요합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "신생아 정보",
          "/info/newborn"
        ],
        "body": "수유 후 딸꾹질은 트림, 토함, 수유 자세와 함께 볼 때 이해하기 쉽습니다. 신생아 수유와 배변·수면 흐름도 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003gr8t6pszmt1xh",
    "contentId": "cmqnsjde403cajot6avhcvwgv",
    "path": "/qna/health/baby-frequent-pee",
    "title": "소변을 너무 자주 보는 아이, 무엇을 확인해야 할까요?",
    "question": "소변을 너무 자주 보는 아이, 무엇을 확인해야 할까요?",
    "summary": "아이가 화장실을 너무 자주 가면 물을 많이 마셔서인지, 통증이 있는지, 다른 증상의 신호인지 헷갈릴 수 있어요. 횟수만 세기보다 갈증, 소변 볼 때 통증, 색 변화, 밤중 소변, 체중 변화를 함께 확인해야 합니다.",
    "metaTitle": "소변을 자주 보는 아이, 집에서 확인할 기준 | MomTools",
    "metaDescription": "소변을 너무 자주 보는 아이가 걱정될 때 갈증, 통증, 색 변화, 밤중 소변, 열과 함께 봐야 할 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-frequent-pee",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "빈뇨를 단순 물 많이 마심으로 단정하지 않고 통증·갈증·요로감염·당뇨 의심 신호 중심으로 재작성",
    "keywords": [
      "소변 자주 보는 아이",
      "아이 빈뇨",
      "아기 소변 횟수",
      "소변 볼 때 통증",
      "아이 갈증",
      "요로감염 의심",
      "아이 소변 색",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "횟수보다 같이 보이는 변화가 중요해요",
        "items": [
          "아이가 평소보다 자주 화장실을 가면 물을 많이 마신 탓인지, 소변 보는 데 불편함이 있는지 구분이 잘 안 됩니다. 하루 횟수만으로 판단하기보다 최근 패턴이 얼마나 달라졌는지부터 보세요.",
          "물을 많이 마신 날이나 더운 날에는 소변 횟수가 늘 수 있습니다. 하지만 갈증이 유난히 늘고 밤에도 자주 깨서 소변을 보거나, 체중이 줄어드는 느낌이 있으면 단순 습관으로 넘기기 어렵습니다.",
          "소변을 볼 때 울거나 아프다고 하거나, 소변 냄새가 심하게 달라졌거나, 열이 함께 있으면 요로 쪽 불편을 의심해 볼 수 있습니다. 집에서 감별하기보다 증상 흐름을 정리해 상담하는 편이 안전합니다.",
          "소변 색이 붉거나 진한 갈색처럼 보이면 음식이나 약의 영향인지도 확인해야 하지만, 반복되거나 통증이 있으면 진료가 필요할 수 있습니다.",
          "배변을 참거나 변비가 있는 아이도 소변을 자주 보는 것처럼 보일 때가 있어요. 화장실 습관과 변 상태도 같이 살피면 원인을 좁히는 데 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "소변 횟수와 함께 볼 기준",
        "items": [
          "최근 물을 마시는 양이 갑자기 늘었는지 확인하기",
          "소변 볼 때 따가워하거나 배·옆구리 통증을 말하는지 보기",
          "열, 보챔, 소변 냄새 변화가 함께 있는지 확인하기",
          "밤에 깨서 소변을 보는 횟수가 늘었는지 보기",
          "변비나 배변 참기가 함께 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "상담 전에 적어두면 좋은 기록",
        "items": [
          "하루 동안 화장실 간 횟수와 물 마신 양을 대략 적어보세요.",
          "소변 볼 때 아이 표정, 통증 표현, 소변 색과 냄새 변화를 함께 기록하세요.",
          "열이 있거나 밤중 소변이 늘었다면 시작 날짜와 동반 증상을 따로 표시해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "진료 상담을 미루지 말아야 할 때",
        "body": "소변 볼 때 통증이 있거나, 열·옆구리 통증·피가 섞인 소변·붉거나 진한 갈색 소변이 보이거나, 갑자기 갈증과 소변이 함께 늘고 체중 감소가 걱정되면 진료 상담을 권합니다. 어린 아이가 평소와 달리 축 처지는 경우도 빠르게 확인하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 개월수 계산기",
          "/tools/baby-age"
        ],
        "body": "소변 횟수는 나이와 수분 섭취, 배변 습관에 따라 다르게 보일 수 있어요. 아이 월령이 헷갈린다면 먼저 개월수를 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003hr8t6e67b1nln",
    "contentId": "cmqnsj72a01tfjot619o3p0i9",
    "path": "/qna/health/baby-gas-and-crying",
    "title": "가스가 차서 우는 아기, 집에서 어떻게 도와줄까요?",
    "question": "가스가 차서 우는 아기, 집에서 어떻게 도와줄까요?",
    "summary": "아기가 배에 힘을 주고 울면 가스 때문인지, 배가 아픈 건지 걱정될 수 있어요. 울음 시간만 보지 말고 수유 속도, 트림, 배가 말랑한지, 토함과 변 상태가 어떤지 함께 확인하는 것이 좋습니다.",
    "metaTitle": "가스 차서 우는 아기, 집에서 도와주는 법 | MomTools",
    "metaDescription": "가스가 차서 우는 아기를 도울 때 수유 속도, 트림, 배 마사지, 변 상태, 상담이 필요한 신호를 부모 관점으로 정리했습니다.",
    "canonicalPath": "/qna/health/baby-gas-and-crying",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "가스 울음을 일반 보챔으로 반복하지 않고 수유·트림·복부 긴장·위험 신호 중심으로 재작성",
    "keywords": [
      "아기 가스",
      "배에 가스 찬 아기",
      "아기 배앓이",
      "아기 트림",
      "아기 보챔",
      "수유 후 울음",
      "아기 복부 팽만",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "울음보다 배가 편해지는 흐름을 봐요",
        "items": [
          "아기가 다리를 끌어올리고 얼굴이 빨개지도록 울면 배에 가스가 찬 것 같아 보일 수 있습니다. 하지만 울음만으로 원인을 확정하기보다 수유 전후 흐름을 같이 보는 게 좋아요.",
          "수유를 급하게 하거나 공기를 많이 삼키면 가스가 차서 불편해질 수 있습니다. 수유 중간에 쉬어 트림을 시키고, 젖병 수유라면 젖꼭지 속도가 너무 빠르지 않은지 확인해보세요.",
          "배를 만졌을 때 계속 딱딱하게 부풀어 있는지, 잠깐 힘을 줄 때만 단단해지는지도 다릅니다. 울다 진정되면 배가 말랑해지고 방귀나 트림 뒤 편해진다면 가스 불편에 가까울 수 있어요.",
          "무리하게 배를 누르거나 성인용 민간요법을 시도하기보다, 안아 세워주기·부드러운 다리 움직임·깨어 있을 때 짧은 엎드려 놀기처럼 안전한 방법부터 해보세요.",
          "가스처럼 보여도 반복 구토, 열, 혈변, 심한 복부 팽만이 있으면 단순 배앓이로 넘기면 안 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "가스인지 볼 때 확인할 것",
        "items": [
          "수유 직후 심해지는지, 공기를 많이 삼키는지 보기",
          "트림이나 방귀 뒤에 울음이 줄어드는지 확인하기",
          "배가 계속 팽팽하게 부풀어 있는지 만져보기",
          "변 색과 횟수, 혈변이나 점액이 있는지 확인하기",
          "울음이 매일 같은 시간대에 반복되는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 안전하게 해볼 수 있는 도움",
        "items": [
          "수유 중간에 한 번 쉬고 트림 시간을 넣어보세요.",
          "아기가 깨어 있을 때 다리를 자전거 타듯 천천히 움직여보세요.",
          "먹은 직후 바로 눕히기보다 잠깐 안아서 안정시키되, 잠잘 때는 안전한 자세를 지켜주세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "배앓이처럼 보여도 상담이 필요한 경우",
        "body": "배가 계속 단단하게 부풀어 있거나, 초록빛 구토·반복 구토·혈변·고열이 있거나, 아이가 달래지지 않을 정도로 심하게 울고 처지면 가스 때문이라고 단정하지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "신생아 정보",
          "/info/newborn"
        ],
        "body": "신생아와 어린 아기는 수유, 트림, 배변 흐름이 서로 연결되어 보일 때가 많아요. 수유와 배변 기준을 함께 보면 가스 불편을 판단하는 데 도움이 됩니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003ir8t69fvhf2hg",
    "contentId": "cmqnsjaty02psjot6j6arc9zq",
    "path": "/qna/health/baby-gas-belly-hard",
    "title": "아기 배가 가스로 단단해 보일 때 확인할 점은?",
    "question": "아기 배가 가스로 단단해 보일 때 확인할 점은?",
    "summary": "아기 배가 빵빵하고 단단해 보이면 단순 가스인지, 진료가 필요한 복부 팽만인지 걱정될 수 있어요. 배가 계속 단단한지, 토함·변·방귀·울음 양상이 어떤지 함께 봐야 합니다.",
    "metaTitle": "아기 배가 단단하고 가스 찬 듯할 때 확인 기준 | MomTools",
    "metaDescription": "아기 배가 가스로 단단해 보일 때 단순 불편과 상담이 필요한 복부 팽만을 구분하기 위한 확인 기준을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-gas-belly-hard",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "배 단단함을 가스라고 단정하지 않고 지속성·구토·변·방귀·통증 신호 중심으로 재작성",
    "keywords": [
      "아기 배 단단",
      "아기 복부 팽만",
      "아기 가스",
      "아기 배 빵빵",
      "아기 방귀",
      "아기 변비",
      "아기 구토",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "잠깐 단단한지, 계속 팽팽한지가 달라요",
        "items": [
          "아기가 울거나 힘을 줄 때 배가 단단해지는 모습은 흔히 보일 수 있습니다. 중요한 건 진정된 뒤에도 배가 계속 빵빵하고 팽팽한지, 만지면 아파하는지입니다.",
          "방귀나 트림을 한 뒤 편해지고, 먹는 양과 기저귀가 평소와 비슷하다면 먼저 수유 리듬과 배변 흐름을 살펴볼 수 있습니다. 하지만 배가 점점 불러오거나 아이가 계속 힘들어하면 다르게 봐야 합니다.",
          "변을 오래 못 봤거나 딱딱한 변을 보는 아이는 배가 불편해 보일 수 있어요. 이때도 변비로만 단정하지 말고 구토, 혈변, 열, 수유 거부가 함께 있는지 확인해야 합니다.",
          "무리하게 배를 강하게 누르거나 약을 임의로 먹이는 것은 피하세요. 아기 배는 부드럽게 만져 흐름을 확인하는 정도로 충분합니다.",
          "특히 초록빛 구토, 반복 구토, 혈변, 심하게 처짐이 있으면 가스 때문이라고 기다리지 않는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "배가 단단해 보일 때 볼 것",
        "items": [
          "아기가 진정된 뒤에도 배가 계속 팽팽한지 확인하기",
          "방귀·트림·변을 본 뒤 편해지는지 보기",
          "변이 너무 딱딱하거나 며칠째 안 나오는지 확인하기",
          "구토 색, 반복 횟수, 수유 거부가 있는지 살피기",
          "열, 혈변, 심한 처짐이 함께 있는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 할 수 있는 안전한 정리",
        "items": [
          "마지막 변, 방귀, 수유 시간과 배가 단단해진 시간을 함께 적어보세요.",
          "먹은 직후에는 잠깐 세워 안고 트림을 도와주세요.",
          "아기가 깨어 있을 때 짧게 자세를 바꾸고 다리를 부드럽게 움직여 보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 확인이 필요한 복부 신호",
        "body": "배가 계속 팽팽하게 부풀어 있고 만지면 심하게 울거나, 초록빛 구토·반복 구토·혈변·열·수유 거부·처짐이 있으면 단순 가스라고 보기 어렵습니다. 이런 경우에는 빠르게 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 변비 가이드",
          "/health/constipation"
        ],
        "body": "배가 단단해 보일 때 변 상태와 배변 간격을 같이 보면 도움이 됩니다. 딱딱한 변이나 배변 통증이 함께 있다면 변비 관련 기준도 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003jr8t6onjoafga",
    "contentId": "cmqnsjczp038sjot6s5qahjg7",
    "path": "/qna/health/baby-grinds-teeth",
    "title": "아이가 이를 가는 행동, 치아 문제로 봐야 할까요?",
    "question": "아이가 이를 가는 행동, 치아 문제로 봐야 할까요?",
    "summary": "아이가 자다가 이를 갈거나 낮에도 이를 꽉 무는 모습을 보면 치아가 상하는 건 아닌지 걱정될 수 있어요. 언제, 얼마나 자주, 치아 마모나 턱 통증, 수면 중 코골이와 함께 있는지를 확인해보는 게 좋습니다.",
    "metaTitle": "아이가 이를 갈 때 치아 문제인지 확인할 기준 | MomTools",
    "metaDescription": "아이 이갈이가 걱정될 때 치아 마모, 턱 통증, 낮 행동, 수면 중 코골이와 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-grinds-teeth",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "이갈이를 치아 문제로 단정하지 않고 수면·습관·치아 마모·치과 상담 기준 중심으로 재작성",
    "keywords": [
      "아이 이갈이",
      "아기 이를 갈아요",
      "유아 이갈이",
      "아이 치아 마모",
      "턱 통증",
      "수면 중 이갈이",
      "아이 코골이",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "소리보다 치아와 수면 변화를 같이 봐요",
        "items": [
          "아이의 이갈이 소리를 처음 들으면 치아가 다 닳는 것 같아 놀랄 수 있습니다. 하지만 한두 번의 이갈이만으로 치아 문제가 생겼다고 단정하기는 어렵습니다.",
          "먼저 언제 주로 나타나는지 보세요. 잠들기 전이나 자는 중에만 보이는지, 낮에도 이를 꽉 물거나 턱에 힘을 주는지에 따라 살펴볼 포인트가 달라집니다.",
          "치아 끝이 눈에 띄게 닳아 보이거나, 아침에 턱이 아프다고 하거나, 씹을 때 불편해하면 치과 상담이 도움이 될 수 있습니다.",
          "수면 중 코골이, 입벌림, 숨이 막히는 듯한 모습이 함께 있으면 단순 습관보다 수면 중 호흡 문제와도 연결될 수 있어요. 이럴 때는 소아청소년과나 치과에서 확인하는 편이 안전합니다.",
          "아이에게 '하지 마'라고 계속 말하는 것보다, 낮에 턱에 힘을 주는 상황이 있는지 보고 잠들기 전 과자극을 줄여주는 방식이 더 현실적입니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "이갈이를 볼 때 확인할 것",
        "items": [
          "자는 중에만 나타나는지, 낮에도 반복되는지 보기",
          "치아 끝이 닳거나 깨진 부분이 있는지 확인하기",
          "턱 통증, 씹기 불편, 두통을 말하는지 살피기",
          "코골이, 입벌림, 수면 중 숨 불편이 함께 있는지 보기",
          "스트레스나 피로, 잠들기 전 흥분이 심한 날과 관련 있는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 기록하고 조정할 것",
        "items": [
          "이갈이가 들린 시간대와 지속 시간을 짧게 적어두세요.",
          "낮에 이를 꽉 무는 장면이 있는지, 어떤 상황에서 나오는지 관찰해보세요.",
          "잠들기 전 격한 놀이와 화면 노출을 줄이고, 편안한 루틴으로 바꿔보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "치과나 진료 상담을 고려할 때",
        "body": "치아가 눈에 띄게 닳거나 깨져 보이거나, 턱 통증·씹기 불편·두통이 반복되거나, 코골이와 숨 불편이 함께 있으면 치과 또는 소아청소년과 상담을 권합니다. 통증 없이 가끔 들리는 이갈이는 경과를 기록해보는 것부터 시작해도 됩니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 월령별 가이드",
          "/monthly-guide"
        ],
        "body": "이갈이처럼 습관인지 발달 과정인지 헷갈리는 행동은 월령과 수면 흐름을 함께 보면 이해하기 쉬워요. 아이 나이에 맞는 발달 가이드도 같이 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003kr8t6basd24r5",
    "contentId": "cmqnsjcrl036sjot6e1jom7m2",
    "path": "/qna/health/baby-gum-swelling-teething",
    "title": "잇몸이 붓고 침을 많이 흘리면 이앓이일까요?",
    "question": "잇몸이 붓고 침을 많이 흘리면 이앓이일까요?",
    "summary": "침이 늘고 잇몸이 부어 보이면 이가 나려는 건지, 입안에 다른 문제가 있는 건지 걱정될 수 있어요. 이앓이만으로 열이나 설사를 단정하지 말고 잇몸 모양, 수유, 입안 상처, 전신 증상을 함께 봐야 합니다.",
    "metaTitle": "잇몸 붓고 침 많은 아기, 이앓이인지 확인하기 | MomTools",
    "metaDescription": "잇몸이 붓고 침을 많이 흘리는 아기를 볼 때 이앓이 가능성과 함께 확인할 입안 상처, 수유 변화, 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-gum-swelling-teething",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "이앓이로 발열·설사를 단정하지 않고 침흘림·잇몸 붓기·수유 거부·입안 병변 기준 중심으로 재작성",
    "keywords": [
      "아기 이앓이",
      "잇몸 붓기",
      "침 많이 흘리는 아기",
      "아기 잇몸 부음",
      "이 나는 시기",
      "아기 수유 거부",
      "아기 입안 상처",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "이앓이처럼 보여도 열·설사는 따로 봐야 해요",
        "items": [
          "아기가 침을 많이 흘리고 손을 입에 넣으며 잇몸을 씹으려 하면 이가 나려는 신호처럼 보일 수 있습니다. 실제로 이 시기에는 잇몸 불편감과 침흘림이 늘 수 있어요.",
          "다만 열이 나거나 설사를 한다고 해서 이앓이 때문이라고 단정하면 안 됩니다. 아이가 아파 보이거나 수유가 줄거나 열이 뚜렷하면 별도로 확인해야 합니다.",
          "잇몸이 전체적으로 살짝 부어 보이는지, 한 부위만 심하게 붓고 고름처럼 보이는지, 입안에 물집이나 궤양이 있는지도 살펴보세요.",
          "차갑게 식힌 치발기나 깨끗한 손가락으로 잇몸을 부드럽게 눌러주는 정도는 도움이 될 수 있습니다. 단, 마취 성분 젤이나 민간요법은 아이에게 맞는지 반드시 확인이 필요합니다.",
          "침 때문에 턱과 입 주변이 빨개질 수 있으니, 문지르기보다 톡톡 닦고 보습으로 보호하는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "이앓이와 함께 확인할 점",
        "items": [
          "침흘림, 손 빨기, 잇몸 씹기 행동이 늘었는지 보기",
          "열, 설사, 심한 보챔을 이앓이로만 넘기지 않기",
          "입안 물집, 궤양, 고름처럼 보이는 부위가 있는지 확인하기",
          "수유량이 눈에 띄게 줄었는지 살피기",
          "턱·입 주변 피부가 침 때문에 헐지 않는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 해볼 수 있는 편한 방법",
        "items": [
          "차갑게 식힌 치발기를 짧게 물려보고 반응을 보세요.",
          "침은 자주 닦되 세게 문지르지 말고, 입 주변은 보습제로 보호해 주세요.",
          "새로운 제품이나 젤을 쓰기 전에는 연령과 성분을 확인하고 필요하면 약사나 의료진에게 물어보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "이앓이로만 보기 어려운 신호",
        "body": "고열, 반복 설사, 수유 거부, 입안 물집이나 궤양, 잇몸의 심한 한쪽 붓기·고름처럼 보이는 변화가 있으면 이앓이라고 단정하지 말고 진료 상담을 권합니다. 아이가 축 처지거나 잘 마시지 못하는 경우도 빨리 확인하는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 월령별 가이드",
          "/monthly-guide"
        ],
        "body": "이가 나는 시기와 침흘림은 월령에 따라 다르게 보일 수 있어요. 현재 개월수에 맞는 발달 흐름도 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003lr8t6w9ak1m7e",
    "contentId": "cmqnsjapv02osjot6wedprka0",
    "path": "/qna/health/baby-hard-stool-crying",
    "title": "딱딱한 변을 보며 우는 아이, 변비로 봐야 할까요?",
    "question": "딱딱한 변을 보며 우는 아이, 변비로 봐야 할까요?",
    "summary": "아이가 딱딱한 변을 보며 울면 배변이 무서워질까 걱정될 수 있어요. 변을 보는 횟수보다 변의 단단함, 피가 묻는지, 배가 아픈지, 먹는 양과 소변이 유지되는지를 함께 확인해야 합니다.",
    "metaTitle": "딱딱한 변 보며 우는 아이, 변비 확인 기준 | MomTools",
    "metaDescription": "딱딱한 변을 보며 우는 아이가 걱정될 때 변비 가능성, 피 묻음, 배 통증, 식사·수분·상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-hard-stool-crying",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "변비 글을 설사/배앓이 문맥에서 분리하고 변 단단함·통증·피·식습관 기준으로 재작성",
    "keywords": [
      "딱딱한 변",
      "아이 변비",
      "아기 변비",
      "배변할 때 울어요",
      "변에 피",
      "배변 통증",
      "이유식 변비",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "며칠 못 봤는지보다 변이 얼마나 힘든지가 중요해요",
        "items": [
          "아이가 변을 볼 때 울고 변이 딱딱하면 부모는 변비인지 바로 걱정하게 됩니다. 배변 간격도 참고가 되지만, 실제로는 변이 단단해서 아픈지와 아이가 참기 시작했는지가 더 중요합니다.",
          "딱딱한 변이 항문을 스치며 피가 조금 묻을 수 있지만, 피가 반복되거나 양이 많거나 설사와 함께 나오면 다르게 봐야 합니다.",
          "이유식 시작, 우유 섭취 변화, 물·과일·채소 섭취가 줄어든 시기와 맞물리는지도 확인해보세요. 다만 어린 아기에게 무리하게 물이나 음식을 늘리는 방식은 월령에 맞게 조심해야 합니다.",
          "배변을 무서워하면 더 참게 되고, 참을수록 변이 더 딱딱해지는 흐름이 생길 수 있습니다. 혼내기보다 편안한 자세와 일정한 화장실 시간을 만들어주는 것이 도움이 됩니다.",
          "복부가 심하게 부풀거나 반복 구토, 식사 거부, 심한 복통이 있으면 단순 변비로만 기다리지 않는 편이 안전합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "변비처럼 보일 때 볼 기준",
        "items": [
          "변이 토끼똥처럼 작고 딱딱한지 확인하기",
          "배변할 때 울거나 참는 행동이 반복되는지 보기",
          "피가 묻는지, 반복되는지, 양이 늘었는지 확인하기",
          "배가 아프다고 하거나 복부가 심하게 부풀었는지 살피기",
          "최근 이유식·우유·수분·활동량 변화가 있었는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘부터 해볼 수 있는 배변 기록",
        "items": [
          "변을 본 날짜보다 변 모양과 아이가 힘들어한 정도를 같이 적어보세요.",
          "월령에 맞는 식사와 수분 섭취를 확인하고, 갑자기 과하게 바꾸지 마세요.",
          "변을 봤을 때 결과보다 시도한 행동을 칭찬해 배변에 대한 긴장을 줄여주세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "변비로만 보기 어려운 신호",
        "body": "딱딱한 변과 함께 반복 구토, 심한 복통, 배가 계속 부풀어 있음, 피가 반복되거나 많아짐, 식사·수유 거부, 체중 증가 걱정이 있으면 진료 상담을 권합니다. 어린 아기일수록 변비약이나 관장은 임의로 사용하지 않는 편이 안전합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 변비 가이드",
          "/health/constipation"
        ],
        "body": "딱딱한 변과 배변 통증은 변비 흐름과 이어질 수 있어요. 변 모양, 배변 간격, 상담 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzf003mr8t65wzmc74e",
    "contentId": "cmqnsjbga02vajot6s7muv2gv",
    "path": "/qna/health/baby-heat-rash-summer",
    "title": "여름에 땀띠가 반복되는 아이, 어떻게 예방할까요?",
    "question": "여름에 땀띠가 반복되는 아이, 어떻게 예방할까요?",
    "summary": "더운 날마다 목, 등, 접히는 부위에 작은 발진이 반복되면 땀띠인지 다른 피부 문제인지 고민될 수 있어요. 땀과 열이 갇히는 환경을 줄이고, 진물·고름·열이 동반되는지는 따로 확인해야 합니다.",
    "metaTitle": "여름 땀띠 반복되는 아이, 예방과 상담 기준 | MomTools",
    "metaDescription": "여름에 땀띠가 반복되는 아이를 위해 옷차림, 실내 온도, 땀 닦기, 보습, 진료 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-heat-rash-summer",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "땀띠를 피부 발진 일반론에서 분리하고 땀·열·마찰·감염 의심 신호 중심으로 재작성",
    "keywords": [
      "아이 땀띠",
      "아기 땀띠",
      "여름 피부 발진",
      "목 땀띠",
      "등 땀띠",
      "접히는 부위 발진",
      "땀띠 예방",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "땀을 없애기보다 열이 갇히지 않게 해요",
        "items": [
          "여름마다 목, 등, 겨드랑이, 팔·다리 접히는 곳에 작은 발진이 생기면 땀띠가 반복되는 것처럼 보일 수 있습니다. 땀 자체보다 땀과 열이 피부에 오래 갇히는 환경을 줄이는 게 핵심입니다.",
          "옷은 얇고 통풍이 잘되는 것으로 입히고, 땀을 많이 흘린 뒤에는 물로 가볍게 씻기거나 젖은 수건으로 닦은 뒤 잘 말려주세요.",
          "기름진 연고를 넓게 바르면 오히려 땀구멍이 더 막힌 느낌이 들 수 있어요. 보습이 필요하더라도 발진 상태와 부위에 맞게 가볍게 쓰는 편이 좋습니다.",
          "땀띠처럼 보여도 발진 부위가 점점 붓고 아프거나, 진물·고름·열이 동반되면 단순 땀띠로만 보기 어렵습니다.",
          "에어컨을 켤 때는 춥게 만들기보다 땀이 마르고 다시 젖지 않는 정도의 환경을 유지하는 것이 좋아요. 땀을 흘린 채 오래 안겨 있거나 카시트·유모차에 오래 눌리는 상황도 줄여보세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "땀띠가 반복될 때 볼 환경",
        "items": [
          "목·등·겨드랑이·접히는 부위처럼 땀이 고이는 곳인지 확인하기",
          "땀을 흘린 뒤 바로 말리지 못한 시간이 길었는지 보기",
          "옷, 기저귀, 카시트, 아기띠가 피부를 오래 누르는지 확인하기",
          "발진이 물집, 진물, 고름처럼 변하는지 살피기",
          "열이나 심한 가려움, 통증이 함께 있는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘부터 줄여볼 수 있는 자극",
        "items": [
          "외출 뒤에는 땀이 고인 부위를 가볍게 씻기고 완전히 말려주세요.",
          "두꺼운 옷보다 얇은 옷을 여러 번 갈아입히는 방식이 도움이 됩니다.",
          "아기띠나 카시트 사용 후에는 등과 목 뒤를 확인해 땀이 고이지 않게 해주세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "땀띠처럼 보여도 확인이 필요한 경우",
        "body": "발진이 빠르게 번지거나, 진물·고름·심한 통증·열이 함께 있거나, 아이가 계속 긁어 피부가 헐면 진료 상담을 권합니다. 며칠간 시원하게 관리해도 악화되는 경우도 확인이 필요할 수 있습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 피부 발진 가이드",
          "/health/rash"
        ],
        "body": "땀띠와 다른 피부 발진은 위치, 가려움, 진물, 열 동반 여부가 다르게 보일 수 있어요. 발진이 반복된다면 피부 발진 기준도 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zzg003nr8t6n3nui17u",
    "contentId": "cmqnsj1vp00kdjot6qowj3n6u",
    "path": "/qna/health/baby-hiccups",
    "title": "딸꾹질이 잦은 아기, 괜찮은 편인가요?",
    "question": "딸꾹질이 잦은 아기, 괜찮은 편인가요?",
    "summary": "아기가 하루에도 여러 번 딸꾹질을 하면 불편하거나 아픈 신호인지 걱정될 수 있어요. 잘 먹고 숨쉬고 잠드는 흐름이 유지되는지, 토함이나 체중 증가 문제가 함께 있는지를 함께 보면 됩니다.",
    "metaTitle": "딸꾹질이 잦은 아기, 괜찮은지 확인할 기준 | MomTools",
    "metaDescription": "딸꾹질이 잦은 아기를 볼 때 수유, 트림, 호흡, 토함, 체중 증가와 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-hiccups",
    "reviewStatus": "COMPLETED",
    "editorMemo": "batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료",
    "duplicateMemo": "일반 딸꾹질 글을 수유 후 딸꾹질 글과 겹치지 않게 빈도·불편감·성장 흐름 중심으로 재작성",
    "keywords": [
      "아기 딸꾹질",
      "딸꾹질 잦은 아기",
      "신생아 딸꾹질",
      "아기 트림",
      "아기 수유",
      "딸꾹질 멈추는 법",
      "아기 역류",
      "아이 건강 Q&A"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "딸꾹질 횟수보다 먹고 숨쉬는 흐름을 봐요",
        "items": [
          "아기가 자주 딸꾹질을 하면 부모는 혹시 속이 불편한 건지 걱정하게 됩니다. 딸꾹질 자체는 아기에게 흔히 보일 수 있지만, 늘 괜찮다고 단정하기보다 함께 나타나는 변화를 보는 게 좋아요.",
          "딸꾹질 중에도 얼굴색과 호흡이 평소와 같고, 수유량과 기저귀 횟수가 유지되며, 잠드는 데 큰 문제가 없다면 먼저 수유 리듬을 살펴볼 수 있습니다.",
          "수유 직후 유난히 잦다면 공기를 많이 삼키거나 배가 빨리 찬 상황과 관련될 수 있어요. 수유 속도를 조금 늦추고 중간 트림을 넣어보세요.",
          "딸꾹질을 멈추게 하려고 억지로 물을 먹이거나 놀라게 하는 방법은 피하는 게 좋습니다. 아기에게 맞는 방법은 부드럽게 안아 안정시키고, 먹는 흐름을 조절하는 쪽입니다.",
          "딸꾹질이 토함, 수유 거부, 호흡 불편, 체중 증가 걱정과 함께 반복된다면 단순 딸꾹질로만 보기 어렵습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "딸꾹질이 잦을 때 볼 것",
        "items": [
          "수유 직후에 주로 나타나는지, 공기를 많이 삼키는지 보기",
          "딸꾹질 중 입술색이나 호흡이 평소와 같은지 확인하기",
          "토함, 보챔, 수유 거부가 함께 반복되는지 살피기",
          "기저귀 횟수와 체중 증가 흐름이 유지되는지 보기",
          "딸꾹질 때문에 잠이나 수유가 자주 끊기는지 기록하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "딸꾹질이 잦은 날 해볼 수 있는 것",
        "items": [
          "수유 중간에 잠깐 쉬어 트림을 도와주세요.",
          "먹는 속도가 빠른 날과 딸꾹질이 심한 날이 겹치는지 적어보세요.",
          "딸꾹질을 억지로 멈추게 하려 하기보다 아기를 편하게 안고 호흡과 얼굴색을 확인하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "딸꾹질과 함께 확인이 필요한 신호",
        "body": "딸꾹질 중 숨쉬기 힘들어 보이거나 입술색이 변하거나, 반복적으로 심하게 토하거나, 수유량이 줄고 체중 증가가 걱정되면 소아청소년과 상담을 권합니다. 딸꾹질보다 호흡·수유·성장 흐름이 더 중요한 기준입니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "신생아 정보",
          "/info/newborn"
        ],
        "body": "딸꾹질은 수유, 트림, 토함과 함께 볼 때 이해하기 쉽습니다. 신생아 시기의 수유와 배변·수면 흐름도 함께 확인해보세요."
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-012 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 12`,
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

  console.log("batch-012 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-012 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-flu-signs");
  console.log("- http://localhost:3000/qna/health/baby-frequent-hiccups-after-feeding");
  console.log("- http://localhost:3000/qna/health/baby-frequent-pee");
  console.log("- http://localhost:3000/qna/health/baby-gas-belly-hard");
  console.log("- http://localhost:3000/qna/health/baby-heat-rash-summer");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-012 반영 실패");
  console.error(error);
  process.exit(1);
});
