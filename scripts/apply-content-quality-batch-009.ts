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
    "batchItemId": "cmqs71zwo002hr8t6krmpfr7x",
    "contentId": "cmqnsizl3000jjot683568pg5",
    "path": "/qna/health/baby-fever-37-5",
    "title": "아기 체온 37.5도는 미열인가요, 정상인가요?",
    "question": "아기 체온 37.5도는 미열인가요, 정상인가요?",
    "summary": "아기 체온이 37.5도로 나오면 미열인지 정상 범위인지 헷갈릴 수 있어요. 한 번 나온 숫자만 보지 말고 측정 부위, 방 온도, 옷차림, 방금 자거나 운 상황이었는지 함께 확인한 뒤 같은 방법으로 다시 재는 것이 좋습니다.",
    "metaTitle": "아기 체온 37.5도, 미열인지 확인하는 기준 | MomTools",
    "metaDescription": "아기 체온이 37.5도일 때 미열인지, 환경 영향인지 확인하는 방법과 다시 재야 할 상황, 병원 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-37-5",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 37.5도 미열 페이지를 체온 숫자 단정이 아닌 측정 환경·재측정·컨디션 확인 중심으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "아기 체온 37.5도",
      "아기 미열 기준",
      "아기 열 재는 법",
      "아기 정상 체온",
      "아기 체온 다시 재기",
      "신생아 열 기준",
      "아기 발열 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "37.5도는 측정 상황부터 다시 봐야 해요",
        "items": [
          "아기 체온은 재는 부위와 시간, 방금 운 뒤인지, 이불을 덮고 있었는지에 따라 다르게 나올 수 있습니다. 37.5도 한 번만으로 바로 열이라고 단정하기는 어려워요.",
          "먼저 옷을 너무 두껍게 입혔는지, 방이 더운지, 낮잠 직후인지 확인해보세요. 몸이 더워진 상황이었다면 가볍게 정리한 뒤 잠시 후 같은 체온계로 다시 재는 편이 좋습니다.",
          "체온보다 중요한 것은 아이의 컨디션입니다. 평소처럼 눈을 맞추고 잘 먹고 소변도 평소와 비슷하다면 체온 변화를 조금 더 차분히 볼 수 있습니다.",
          "반대로 38도 이상으로 올라가거나, 아직 어린 아기에게 발열이 의심되거나, 축 처지고 잘 먹지 못하면 집에서만 지켜보지 말고 상담을 권합니다.",
          "체온 기록은 숫자만 적기보다 “언제, 어디서, 어떤 부위로 쟀는지”까지 적어두면 진료 상담 때 훨씬 설명하기 쉽습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "체온을 다시 볼 때 확인할 것",
        "items": [
          "같은 체온계로 같은 부위에서 다시 쟀는지 확인하기",
          "낮잠 직후, 울고 난 뒤, 목욕 직후처럼 체온이 높게 나올 상황이었는지 보기",
          "옷차림, 이불, 실내 온도가 너무 덥지 않은지 확인하기",
          "수유량·식사량·소변 횟수·놀이 반응이 평소와 같은지 살피기",
          "체온이 오르는 흐름인지, 다시 안정되는 흐름인지 시간대별로 적어두기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 바로 해볼 일",
        "items": [
          "두꺼운 옷이나 이불을 잠시 정리하고, 아이가 편한 상태에서 20~30분 뒤 다시 재보세요.",
          "체온 숫자와 함께 아이가 잘 먹는지, 소변이 줄지 않았는지, 평소처럼 반응하는지를 같이 기록하세요.",
          "해열제나 약을 임의로 먼저 쓰기보다 아이 나이와 체온, 동반 증상을 확인한 뒤 판단하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "상담을 미루지 않는 게 좋은 신호",
        "body": "38도 이상으로 반복 측정되거나, 생후 초기 아기에게 열이 의심되거나, 축 처짐·수유 거부·소변 감소·숨쉬기 힘들어 보임·경련 같은 변화가 있으면 소아청소년과나 의료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "체온이 계속 올라가거나 발열 기준이 헷갈린다면 아기 열 대처 가이드에서 월령별 확인 기준과 집에서 볼 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002ir8t6t3krh653",
    "contentId": "cmqnsizim0001jot69pygknaj",
    "path": "/qna/health/baby-fever-38",
    "title": "아기 열 38도면 바로 병원에 가야 하나요?",
    "question": "아기 열 38도면 바로 병원에 가야 하나요?",
    "summary": "아기 체온이 38도로 나오면 바로 병원에 가야 하는지 고민될 수 있어요. 이때는 나이, 측정 부위, 아이 컨디션, 수분 섭취, 호흡 상태를 함께 봐야 합니다. 특히 어린 아기이거나 축 처지는 모습이 있으면 상담을 미루지 않는 것이 안전합니다.",
    "metaTitle": "아기 열 38도, 병원 상담이 필요한 기준 | MomTools",
    "metaDescription": "아기 체온 38도일 때 바로 병원에 가야 하는지, 집에서 먼저 확인할 점과 소아청소년과 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-38",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 38도 발열을 단순 병원 여부가 아닌 월령·컨디션·수분·호흡 기준으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "아기 열 38도",
      "아기 고열 병원",
      "아기 38도 병원",
      "아기 발열 대처",
      "아기 해열제 전 확인",
      "신생아 38도",
      "아기 열 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "38도는 나이와 컨디션을 함께 봐야 해요",
        "items": [
          "아기에게 38도는 그냥 넘기기 어려운 체온입니다. 다만 병원에 바로 갈지, 먼저 상담할지 판단할 때는 아이 나이와 전반적인 상태가 중요해요.",
          "생후 초기 아기라면 38도 이상 발열 자체가 더 조심스러운 신호가 될 수 있습니다. 이 경우 집에서 오래 지켜보기보다 의료진에게 확인하는 편이 안전합니다.",
          "조금 큰 아이라도 평소처럼 먹고 놀고 반응이 괜찮은지, 소변이 줄지 않았는지, 숨쉬기가 편한지를 같이 봐야 합니다.",
          "열이 있어도 손발이 차다고 무조건 더 덮으면 몸에 열이 더 갇힐 수 있어요. 몸통 열감과 땀, 방 온도를 함께 확인해 주세요.",
          "해열 후 숫자가 조금 내려갔더라도 아이가 축 처지거나 수분 섭취가 거의 안 되면 다시 상담이 필요할 수 있습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "38도 발열에서 먼저 볼 것",
        "items": [
          "아이 나이와 정확한 체온 측정 부위 확인하기",
          "눈 맞춤, 울음 힘, 놀이 반응이 평소와 다른지 보기",
          "수유량·물 섭취량·소변 횟수가 줄었는지 확인하기",
          "기침, 콧물, 구토, 설사, 발진 같은 동반 증상 살피기",
          "해열 후 체온 숫자만 보지 말고 컨디션이 회복되는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에서 정리할 기록",
        "items": [
          "열이 처음 오른 시간, 최고 체온, 해열 여부를 한 줄로 적어두세요.",
          "마지막 소변 시간과 먹은 양을 함께 기록하면 탈수 여부를 설명하기 쉽습니다.",
          "호흡이 빠르거나 가슴이 들어가 보이면 체온 기록보다 진료 상담을 먼저 생각하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "바로 확인이 필요한 신호",
        "body": "생후 초기 아기의 38도 이상 발열, 축 처짐, 깨워도 반응이 약함, 호흡곤란, 입술색 변화, 경련, 반복 구토, 소변이 거의 없는 경우에는 빠르게 의료 상담이나 진료를 받는 것이 좋습니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "38도 이상 열이 반복된다면 아기 열 대처 가이드에서 월령별 발열 기준과 상담 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002jr8t6k2tbeg1c",
    "contentId": "cmqnsj8vx028wjot6nujmotgl",
    "path": "/qna/health/baby-fever-after-antibiotics",
    "title": "항생제를 먹는 중에도 열이 나면 다시 진료가 필요할까요?",
    "question": "항생제를 먹는 중에도 열이 나면 다시 진료가 필요할까요?",
    "summary": "항생제를 먹기 시작했는데도 열이 나면 약이 맞지 않는 건지, 병원에 다시 가야 하는지 걱정될 수 있어요. 처방받은 이유, 복용 시작 시점, 열의 흐름, 아이 컨디션과 함께 설사·발진·호흡 변화가 있는지 같이 확인해야 합니다.",
    "metaTitle": "항생제 복용 중 열이 날 때 다시 진료가 필요한 신호 | MomTools",
    "metaDescription": "아이가 항생제를 먹는 중에도 열이 날 때 약을 중단해도 되는지 단정하지 않고, 재진 상담이 필요한 신호와 기록할 점을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-antibiotics",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 항생제 복용 중 발열을 약효 단정이 아닌 처방 이유·복용 시점·부작용 의심 신호·재진 상담 기준으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "항생제 먹는데 열",
      "아기 항생제 발열",
      "항생제 복용 중 열",
      "아이 항생제 재진",
      "항생제 설사 발진",
      "아기 열 지속",
      "소아과 재진 기준"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "약을 임의로 끊기보다 열의 흐름을 설명할 준비가 필요해요",
        "items": [
          "항생제는 처방된 이유와 감염 종류에 따라 경과가 다를 수 있습니다. 복용 중 열이 난다고 해서 약이 무조건 듣지 않는다고 단정하기는 어려워요.",
          "다만 열이 계속 높아지거나 아이가 더 처지고, 먹는 양이나 소변이 줄면 처방받은 병원에 다시 문의하는 것이 좋습니다.",
          "항생제 복용 뒤 설사, 발진, 얼굴이나 입술 부기, 숨쉬기 불편함 같은 변화가 생기면 단순 발열과 따로 봐야 합니다.",
          "약을 임의로 중단하거나 남은 약을 조절해서 먹이는 것은 피하세요. 중단 여부나 변경은 처방한 의료진에게 확인하는 것이 안전합니다.",
          "진료 때는 약 이름, 복용 시작 시간, 마지막 복용 시간, 열이 오른 시간을 함께 말하면 판단에 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "항생제 중 발열에서 확인할 것",
        "items": [
          "항생제를 언제부터, 어떤 이유로 처방받았는지 확인하기",
          "열이 내려가는 흐름인지, 다시 오르는 흐름인지 시간별로 적기",
          "설사, 발진, 구토, 복통, 호흡 불편 같은 새 증상이 생겼는지 보기",
          "먹는 양과 소변 횟수가 줄었는지 확인하기",
          "약을 먹은 뒤 바로 생긴 반응인지, 원래 증상 흐름인지 구분해보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "진료 문의 전에 준비할 것",
        "items": [
          "약 봉투나 처방전 사진을 준비해 약 이름과 복용량을 정확히 전달하세요.",
          "열이 오른 시간, 최고 체온, 마지막 복용 시간을 메모해두세요.",
          "발진이나 설사처럼 새 증상이 있으면 사진과 시작 시간을 함께 남겨두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "재진 상담을 권하는 신호",
        "body": "복용 중에도 열이 계속 높아지거나 아이가 더 처지는 경우, 수분 섭취와 소변이 줄어드는 경우, 발진·부기·호흡 불편·심한 설사·반복 구토가 나타나면 처방받은 의료기관에 다시 상담하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "열의 흐름을 정리해야 할 때는 아기 열 대처 가이드와 함께 보면 체온 기록과 상담 신호를 나눠보기 쉽습니다."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002kr8t6avtkzn49",
    "contentId": "cmqnsj82z022ajot6h8xreyey",
    "path": "/qna/health/baby-fever-after-bath",
    "title": "목욕 후 체온이 올라간 아기는 열로 봐야 하나요?",
    "question": "목욕 후 체온이 올라간 아기는 열로 봐야 하나요?",
    "summary": "목욕 직후 아기 체온이 높게 나오면 실제 열인지, 따뜻한 물과 실내 온도 영향인지 헷갈릴 수 있어요. 바로 판단하기보다 몸을 말리고 옷차림을 가볍게 한 뒤 같은 방법으로 다시 재고, 아이 컨디션을 함께 확인하는 것이 좋습니다.",
    "metaTitle": "목욕 후 아기 체온 상승, 열인지 확인하는 방법 | MomTools",
    "metaDescription": "목욕 후 아기 체온이 높게 나올 때 일시적인 상승인지 발열인지 확인하는 방법과 상담이 필요한 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-bath",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 목욕 후 체온 상승을 환경 영향과 발열 신호로 나누어 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "목욕 후 아기 열",
      "목욕 후 체온 상승",
      "아기 목욕 후 37도",
      "아기 체온 다시 재기",
      "아기 미열 확인",
      "아기 발열 기준",
      "아기 목욕 후 열감"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "목욕 직후 체온은 잠시 높게 나올 수 있어요",
        "items": [
          "따뜻한 물로 목욕한 직후에는 피부와 몸이 데워져 체온이 평소보다 높게 나올 수 있습니다. 그래서 목욕 직후 숫자만 보고 바로 열이라고 판단하기는 어렵습니다.",
          "먼저 몸을 충분히 말리고, 너무 두껍지 않게 입힌 뒤 아이가 편안해진 상태에서 다시 재보세요.",
          "체온이 다시 내려가고 아이가 평소처럼 먹고 반응한다면 목욕 환경의 영향을 먼저 생각해볼 수 있습니다.",
          "하지만 목욕 전부터 컨디션이 좋지 않았거나, 시간이 지나도 38도 이상으로 반복되거나, 처짐·수유 거부가 있으면 발열로 보고 상담해야 합니다.",
          "목욕 후 매번 체온이 높게 나온다면 물 온도, 목욕 시간, 욕실 온도, 옷차림을 함께 조정해보는 것이 좋습니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "목욕 후 체온에서 볼 체크포인트",
        "items": [
          "목욕 전에도 아이가 뜨거웠는지 떠올려보기",
          "목욕 물 온도와 목욕 시간이 길지 않았는지 확인하기",
          "목욕 후 20~30분 뒤 같은 체온계로 다시 재기",
          "땀, 얼굴 붉어짐, 축 처짐, 수유 거부가 있는지 보기",
          "체온이 내려가는지, 계속 오르는지 시간대별로 적기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘 조정해볼 부분",
        "items": [
          "목욕은 길게 하지 말고, 끝난 뒤에는 몸을 충분히 말린 뒤 가볍게 입혀주세요.",
          "목욕 직후 바로 열로 판단하지 말고 아이가 안정된 뒤 다시 측정하세요.",
          "목욕 후 체온이 자주 높다면 물 온도와 욕실 온도를 조금 낮춰 비교해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "목욕 영향으로만 보기 어려운 신호",
        "body": "목욕 후 시간이 지나도 38도 이상 체온이 반복되거나, 축 처짐·수유 거부·호흡 불편·반복 구토·소변 감소가 함께 있으면 목욕 때문이라고만 보지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "목욕 후 일시적인 체온 상승인지 발열인지 헷갈린다면 아기 열 대처 가이드에서 체온 측정과 상담 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002lr8t6fypm3626",
    "contentId": "cmqnsj7af01vcjot6u0imuo6g",
    "path": "/qna/health/baby-fever-after-daycare",
    "title": "어린이집 다닌 뒤 자주 아픈 아이는 면역이 약한 걸까요?",
    "question": "어린이집 다닌 뒤 자주 아픈 아이는 면역이 약한 걸까요?",
    "summary": "어린이집을 다니기 시작한 뒤 감기나 열이 잦아지면 면역이 약한 건 아닌지 걱정될 수 있어요. 단체 생활을 시작하면 감염 노출이 늘어 아픈 횟수가 늘 수 있지만, 회복 속도와 증상 강도, 성장 흐름을 함께 봐야 합니다.",
    "metaTitle": "어린이집 다닌 뒤 자주 아픈 아이, 면역이 약한 걸까요? | MomTools",
    "metaDescription": "어린이집 등원 후 감기와 열이 잦아진 아이를 볼 때 단체 생활 노출, 회복 속도, 진료 상담 신호를 사용자 관점으로 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-daycare",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 등원 후 잦은 감염을 면역 약함으로 단정하지 않고 단체 생활 노출·회복 속도·성장 흐름 기준으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "어린이집 자주 아픈 아이",
      "어린이집 감기 반복",
      "아이 면역 약한가요",
      "어린이집 열 자주",
      "등원 후 아픈 아이",
      "아이 감기 자주",
      "어린이집 건강 관리"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "단체 생활을 시작하면 아픈 횟수가 늘 수 있어요",
        "items": [
          "어린이집을 시작하면 이전보다 감기, 콧물, 기침, 열을 겪는 일이 늘 수 있습니다. 여러 아이가 함께 지내면서 바이러스에 노출될 기회가 많아지기 때문이에요.",
          "자주 아프다고 해서 바로 면역이 약하다고 단정하기는 어렵습니다. 중요한 것은 아플 때마다 회복이 되는지, 체중과 식사·수면이 유지되는지, 심한 감염이 반복되는지입니다.",
          "열이 날 때마다 아이가 너무 처지거나, 회복에 오래 걸리거나, 폐렴·중이염처럼 진료가 반복된다면 담당 의료진과 패턴을 상의해보는 것이 좋습니다.",
          "집에서는 등원 전후 손 씻기, 수면 확보, 무리한 등원 피하기처럼 회복 시간을 확보해주는 관리가 중요합니다.",
          "아픈 기록을 남겨두면 “자주 아픈 것”인지 “특정 시기나 환경에서 반복되는 것”인지 구분하기 쉬워집니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "자주 아플 때 비교할 기준",
        "items": [
          "한 달에 몇 번 아픈지보다 회복까지 며칠 걸리는지 보기",
          "열, 기침, 콧물, 설사 중 어떤 증상이 반복되는지 나누기",
          "아픈 기간에도 수분 섭취와 소변이 유지되는지 확인하기",
          "성장, 체중, 식욕, 수면이 장기간 흔들리는지 보기",
          "같은 반 아이들 사이에 유행 증상이 있었는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "가정에서 관리할 부분",
        "items": [
          "등원 전후 손 씻기와 옷 갈아입기처럼 반복 가능한 루틴을 만들어주세요.",
          "열이 있거나 기운이 크게 떨어진 날은 무리한 등원보다 회복을 우선하세요.",
          "아픈 날짜, 증상, 회복 시점, 진료 여부를 짧게 기록해두면 패턴을 보기 쉽습니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "면역 문제까지 상담해볼 신호",
        "body": "감염이 매우 잦고 회복이 느리거나, 체중 증가가 부진하거나, 숨쉬기 힘든 기침·반복 폐렴·반복 중이염처럼 진료가 자주 필요한 흐름이 있으면 소아청소년과에 패턴을 상담해보세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "어린이집 생활 중 열이 반복된다면 아기 열 대처 가이드와 함께 체온 기록과 등원 여부를 정리해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002mr8t67slcik9o",
    "contentId": "cmqnsj92502abjot6bw6sgjh0",
    "path": "/qna/health/baby-fever-after-daycare-new-2",
    "title": "어린이집 다녀온 뒤 열이 나면 등원을 쉬어야 하나요?",
    "question": "어린이집 다녀온 뒤 열이 나면 등원을 쉬어야 하나요?",
    "summary": "어린이집에서 돌아온 뒤 열이 나면 다음 날 등원을 보내도 되는지 바로 고민됩니다. 체온 숫자만 보지 말고 아이가 활동할 만큼 회복됐는지, 해열제 없이 열이 가라앉는지, 기침·설사·구토 같은 동반 증상이 있는지 함께 확인해야 합니다.",
    "metaTitle": "어린이집 다녀온 뒤 열, 등원 쉬어야 할 기준 | MomTools",
    "metaDescription": "어린이집 하원 후 열이 날 때 등원 여부를 결정하기 전 확인할 체온, 컨디션, 전염 증상, 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-daycare-new-2",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 어린이집 하원 후 발열을 등원 여부·전염 증상·회복 상태 기준으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "어린이집 다녀온 뒤 열",
      "어린이집 열 등원",
      "아기 열 등원 쉬기",
      "하원 후 발열",
      "아이 열나면 어린이집",
      "등원 가능 기준",
      "아기 발열 회복"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "등원 여부는 열 숫자보다 회복 상태를 같이 봐야 해요",
        "items": [
          "하원 후 열이 나면 다음 날 등원을 보내도 될지 난감합니다. 이때는 체온 숫자만이 아니라 아이가 하루 활동을 버틸 만큼 회복됐는지를 봐야 해요.",
          "해열제를 먹었을 때만 잠깐 괜찮아 보이고 다시 열이 오르거나, 아이가 축 처지고 잘 먹지 못한다면 등원보다 휴식과 상담이 우선입니다.",
          "기침이 심하거나 설사·구토가 있거나 눈곱·발진처럼 전염 가능성이 있는 증상이 함께 있으면 어린이집 기준도 확인해야 합니다.",
          "열이 내렸더라도 아이가 피곤해하고 수분 섭취가 부족하면 하루 더 쉬면서 회복을 보는 편이 나을 수 있습니다.",
          "어린이집에 전달할 때는 “언제 열이 났고, 해열제 사용 여부, 동반 증상”을 간단히 알려주면 이후 관찰에도 도움이 됩니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "등원 전 확인할 것",
        "items": [
          "해열제 없이도 체온이 안정되는지 보기",
          "평소처럼 먹고 마시고 소변을 보는지 확인하기",
          "기침, 설사, 구토, 발진, 눈곱 같은 동반 증상 확인하기",
          "밤새 열이 반복됐는지, 잠을 거의 못 잤는지 보기",
          "어린이집의 감염병·발열 등원 기준을 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "다음 날 아침 해볼 일",
        "items": [
          "아침 체온과 아이 표정, 먹는 양을 함께 확인한 뒤 등원 여부를 결정하세요.",
          "열이 반복되면 등원 준비보다 수분 보충과 휴식을 먼저 챙겨주세요.",
          "등원하지 않더라도 증상 시작 시간과 최고 체온을 기록해두면 진료 상담 때 도움이 됩니다."
        ]
      },
      {
        "sectionType": "caution",
        "title": "등원보다 상담이 먼저인 신호",
        "body": "열이 반복되고 아이가 축 처지거나, 호흡이 힘들어 보이거나, 수분 섭취와 소변이 줄거나, 반복 구토·설사·발진·경련이 있으면 등원 여부보다 진료 상담을 먼저 고려하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "하원 후 열이 반복된다면 아기 열 대처 가이드에서 월령별 발열 기준과 집에서 볼 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002nr8t6s3vcaw2f",
    "contentId": "cmqnsj41k0133jot6fxuddan3",
    "path": "/qna/health/baby-fever-after-nap",
    "title": "낮잠 자고 일어난 뒤 열이 있으면 바로 병원에 가야 하나요?",
    "question": "낮잠 자고 일어난 뒤 열이 있으면 바로 병원에 가야 하나요?",
    "summary": "낮잠에서 깬 직후 몸이 뜨겁게 느껴지면 열이 난 건지, 이불이나 방 온도 때문인지 헷갈릴 수 있어요. 먼저 옷차림과 이불을 정리하고 아이가 안정된 뒤 다시 재보면서, 컨디션과 동반 증상을 함께 확인하는 것이 좋습니다.",
    "metaTitle": "낮잠 후 아기 열, 바로 병원에 가야 할까요? | MomTools",
    "metaDescription": "낮잠 자고 난 뒤 아기 체온이 높게 나올 때 환경 영향인지 발열인지 구분하는 방법과 병원 상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-nap",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 낮잠 직후 발열 고민을 환경 영향·재측정·컨디션 기준으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "낮잠 후 아기 열",
      "자고 일어나면 열",
      "아기 낮잠 체온",
      "아기 이불 열감",
      "아기 열 병원 기준",
      "아기 체온 다시 재기",
      "아기 발열 상담"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "낮잠 직후에는 열감이 커 보일 수 있어요",
        "items": [
          "아이들은 낮잠을 자는 동안 이불, 옷, 방 온도 영향으로 몸이 따뜻하게 느껴질 수 있습니다. 그래서 깬 직후 한 번 잰 체온만으로 바로 병원 여부를 판단하기는 어렵습니다.",
          "먼저 이불을 걷고 옷차림을 가볍게 한 뒤 아이가 편해진 상태에서 다시 재보세요. 체온이 안정되고 컨디션이 괜찮다면 환경 영향을 먼저 생각할 수 있습니다.",
          "다만 낮잠 전부터 기운이 없었거나, 깬 뒤에도 계속 처지고 잘 먹지 않는다면 단순 열감으로 넘기지 않는 편이 좋아요.",
          "체온이 오르는 흐름인지, 잠시 높았다가 내려가는 흐름인지가 중요합니다. 시간대별로 적어두면 판단이 쉬워집니다.",
          "호흡이 힘들어 보이거나 입술색 변화, 반복 구토, 경련이 있으면 체온 재측정보다 진료 상담을 먼저 생각해야 합니다."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "낮잠 후 체온에서 볼 것",
        "items": [
          "낮잠 전 컨디션이 평소와 같았는지 확인하기",
          "이불, 옷차림, 방 온도가 너무 덥지 않았는지 보기",
          "깬 뒤 20~30분 후 같은 방법으로 다시 재기",
          "수유량·식사량·소변 횟수가 줄었는지 확인하기",
          "콧물, 기침, 구토, 설사, 발진이 함께 있는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "바로 해볼 일",
        "items": [
          "방을 덥지 않게 조절하고 두꺼운 이불을 걷은 뒤 다시 체온을 확인하세요.",
          "체온과 함께 아이가 잘 먹는지, 웃거나 반응하는지, 소변이 줄지 않았는지 적어두세요.",
          "낮잠 후에만 반복되는지, 하루 종일 체온이 높은지 구분해보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "낮잠 영향으로만 보기 어려운 신호",
        "body": "체온이 38도 이상으로 반복되거나, 축 처짐·수유 거부·소변 감소·호흡 불편·입술색 변화·경련·반복 구토가 있으면 낮잠 때문이라고만 보지 말고 진료 상담을 권합니다."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "낮잠 후 열감이 반복된다면 아기 열 대처 가이드에서 체온 측정 방법과 월령별 상담 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002or8t64u8qrptk",
    "contentId": "cmqnsj8dc024njot6nhd0ouzk",
    "path": "/qna/health/baby-fever-after-nap-new-2",
    "title": "낮잠 후에만 체온이 높게 나오면 괜찮은 걸까요?",
    "question": "낮잠 후에만 체온이 높게 나오면 괜찮은 걸까요?",
    "summary": "낮잠 후에만 체온이 높게 나오면 실제 열인지 일시적인 열감인지 판단하기 어렵습니다. 매번 같은 시간대에만 높고 곧 내려가는지, 하루 중 다른 시간에도 오르는지, 아이 컨디션이 함께 나빠지는지를 나눠서 봐야 합니다.",
    "metaTitle": "낮잠 후에만 체온이 높을 때 확인할 기준 | MomTools",
    "metaDescription": "아기 체온이 낮잠 후에만 높게 나올 때 환경 영향, 반복 발열, 컨디션 변화, 상담 신호를 구분해 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-nap-new-2",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 낮잠 후 반복 체온 상승을 패턴 기록·환경 비교 중심으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "낮잠 후 체온 높음",
      "아기 자고 일어나면 체온",
      "아기 낮잠 후 미열",
      "아기 체온 패턴",
      "낮잠 후 열감",
      "아기 발열 기록",
      "아기 열 확인"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "“낮잠 후에만” 반복되는지 패턴을 봐야 해요",
        "items": [
          "낮잠 후에만 체온이 높게 나오고 잠시 뒤 내려간다면 이불, 옷차림, 방 온도 같은 환경 영향일 수 있습니다. 하지만 반복되는 패턴은 따로 기록해볼 필요가 있어요.",
          "같은 체온계로 같은 부위에서 재고 있는지 먼저 확인하세요. 재는 방법이 매번 다르면 실제 변화인지 비교하기 어렵습니다.",
          "낮잠 후 체온만 높고 아이가 잘 먹고 잘 놀며 소변도 평소와 같다면 잠시 관찰할 수 있습니다.",
          "반대로 낮잠 후뿐 아니라 저녁에도 오르거나, 콧물·기침·설사·구토처럼 다른 증상이 함께 생기면 발열 흐름으로 봐야 합니다.",
          "기록할 때는 낮잠 시간, 방 온도, 옷차림, 체온이 내려가기까지 걸린 시간을 함께 적어두세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "패턴을 볼 때 적어둘 것",
        "items": [
          "낮잠 시작·종료 시간과 체온을 잰 시간 기록하기",
          "이불과 옷차림, 방 온도 확인하기",
          "체온이 얼마 만에 내려가는지 보기",
          "하루 중 다른 시간에도 체온이 오르는지 비교하기",
          "컨디션, 먹는 양, 소변 횟수가 함께 변하는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "오늘부터 비교해볼 방법",
        "items": [
          "같은 체온계와 같은 부위로 낮잠 전후를 2~3일 정도 비교해보세요.",
          "낮잠 후 바로 재지 말고 아이가 안정된 뒤 다시 재서 차이를 확인하세요.",
          "체온이 높게 나온 날의 방 온도와 이불 상태를 함께 적어보세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "패턴 관찰보다 상담이 필요한 경우",
        "body": "낮잠 후뿐 아니라 하루 중 여러 번 38도 이상으로 오르거나, 아이가 축 처지고 잘 먹지 못하거나, 호흡 불편·소변 감소·반복 구토·경련이 있으면 패턴 관찰보다 진료 상담을 우선하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "낮잠 후 체온 패턴이 헷갈린다면 아기 열 대처 가이드에서 발열 기준과 기록 방법을 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002pr8t6vaory98y",
    "contentId": "cmqnsj49p0153jot67u6xsy76",
    "path": "/qna/health/baby-fever-after-outing",
    "title": "외출 후 열이 오르면 집에서 먼저 뭘 확인해야 하나요?",
    "question": "외출 후 열이 오르면 집에서 먼저 뭘 확인해야 하나요?",
    "summary": "외출 뒤 열이 오르면 더위 때문인지, 감기나 다른 감염의 시작인지 헷갈릴 수 있어요. 먼저 외출 환경, 땀과 수분 섭취, 아이의 반응, 체온이 쉬면서 내려가는지를 확인하고 호흡이나 처짐이 있는지도 함께 봐야 합니다.",
    "metaTitle": "외출 후 아기 열, 집에서 먼저 확인할 것 | MomTools",
    "metaDescription": "외출 후 아기 열이 오를 때 더위·피로·감염 가능성을 단정하지 않고, 집에서 볼 체온·수분·컨디션·상담 신호를 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-outing",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 외출 후 발열을 더위·수분·감염 가능성으로 나눠 사용자 판단 기준 중심으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "외출 후 아기 열",
      "외출 후 발열",
      "아기 더위 열",
      "아기 열 집에서 확인",
      "아기 수분 부족 열",
      "아기 열 대처",
      "아이 외출 후 열감"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "외출 환경과 아이 반응을 같이 봐야 해요",
        "items": [
          "외출 후 열이 나면 더운 날씨, 두꺼운 옷, 활동량, 수분 부족이 영향을 줄 수 있습니다. 하지만 이것만으로 감염이 아니라고 단정할 수도 없어요.",
          "먼저 시원하고 편한 환경에서 쉬게 하고, 옷차림을 가볍게 정리한 뒤 같은 체온계로 다시 재보세요.",
          "외출 중 땀을 많이 흘렸는지, 물이나 수유를 평소보다 적게 했는지, 소변이 줄었는지 확인하는 것이 중요합니다.",
          "체온이 내려가도 아이가 축 처지거나 입이 마르고 소변이 거의 없다면 탈수 신호를 함께 봐야 합니다.",
          "콧물, 기침, 구토, 설사, 발진 같은 증상이 뒤따르면 외출 때문이라고만 보지 말고 발열 흐름을 기록해두세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "외출 후 열에서 볼 체크포인트",
        "items": [
          "외출 시간이 길었는지, 햇볕이나 더운 실내에 오래 있었는지 확인하기",
          "땀, 얼굴 붉어짐, 입술 마름, 소변 감소가 있는지 보기",
          "시원한 곳에서 쉬고 나서 체온이 내려가는지 확인하기",
          "콧물, 기침, 구토, 설사 등 감염 증상이 함께 생기는지 살피기",
          "아이 반응이 평소처럼 돌아오는지 보기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "집에 와서 해볼 일",
        "items": [
          "옷을 가볍게 하고 시원한 환경에서 쉬게 한 뒤 체온을 다시 확인하세요.",
          "수분이나 수유를 조금씩 자주 제공하고, 소변 횟수를 함께 봐주세요.",
          "외출 장소, 시간, 땀을 많이 흘렸는지, 체온 변화를 메모해두세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "외출 영향으로 넘기면 안 되는 신호",
        "body": "체온이 계속 오르거나, 아이가 축 처지고 깨워도 반응이 약하거나, 소변이 거의 없거나, 호흡이 힘들어 보이거나, 반복 구토·경련·입술색 변화가 있으면 빠르게 진료 상담을 받으세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "외출 후 발열이 반복된다면 아기 열 대처 가이드에서 체온 변화와 탈수 신호를 함께 확인해보세요."
      }
    ]
  },
  {
    "batchItemId": "cmqs71zwo002qr8t6t32alliz",
    "contentId": "cmqnsj8jj0262jot66zdr6d0h",
    "path": "/qna/health/baby-fever-after-outing-new-2",
    "title": "외출한 날 밤에 열이 나면 감기 시작일 수 있나요?",
    "question": "외출한 날 밤에 열이 나면 감기 시작일 수 있나요?",
    "summary": "외출한 날 밤에 열이 나면 “밖에서 감기 옮은 걸까?”부터 떠오를 수 있어요. 하지만 그날 외출 하나만으로 원인을 단정하기는 어렵습니다. 이미 시작된 감염, 피로, 더위, 수분 부족 가능성을 나눠 보고 다음 증상을 함께 확인해야 합니다.",
    "metaTitle": "외출한 날 밤 열, 감기 시작인지 확인하는 기준 | MomTools",
    "metaDescription": "외출한 날 밤에 아이 열이 날 때 감기 시작인지 단정하지 않고, 피로·더위·수분 부족·감염 증상을 나눠 확인하는 방법을 정리했습니다.",
    "canonicalPath": "/qna/health/baby-fever-after-outing-new-2",
    "reviewStatus": "QUALITY_REWRITTEN_NEEDS_MEDICAL_REVIEW",
    "editorMemo": "batch-009: 외출 당일 밤 발열을 감기 단정이 아닌 더위·피로·감염 시작 가능성 비교 기준으로 재작성.",
    "duplicateMemo": "batch-009에서 37.5도·38도·항생제 복용 중 발열·목욕/낮잠/외출/어린이집 후 체온 상승을 각각 다른 검색 의도와 판단 기준으로 분리하고, 발열 관련 단정 표현과 반복 카드 문구를 줄임.",
    "keywords": [
      "외출한 날 밤 열",
      "아기 밤에 열",
      "외출 후 감기 시작",
      "아기 감기 열 시작",
      "아이 피곤하면 열",
      "아기 열 원인",
      "외출 후 밤 발열"
    ],
    "sections": [
      {
        "sectionType": "answer",
        "title": "그날 외출만으로 감기라고 단정하긴 어려워요",
        "items": [
          "외출한 날 밤에 열이 나면 감기 시작처럼 느껴질 수 있습니다. 다만 감염은 이미 전부터 시작됐을 수도 있고, 외출 중 피로·더위·수분 부족이 겹쳐 열감이 커졌을 수도 있어요.",
          "먼저 콧물, 기침, 목 불편감, 구토, 설사 같은 증상이 함께 생기는지 살펴보세요. 동반 증상이 시간이 지나며 드러나는 경우도 있습니다.",
          "아이가 잘 먹고 소변도 평소와 비슷하며 잠시 쉬면서 체온이 안정된다면 기록하면서 지켜볼 수 있습니다.",
          "반대로 밤새 열이 반복되고 아이가 처지거나, 수분 섭취가 줄고 호흡이 힘들어 보이면 감기 여부보다 상담 신호를 먼저 봐야 합니다.",
          "다음 날 아침에는 체온뿐 아니라 표정, 먹는 양, 소변, 기침·콧물 여부를 함께 확인해 등원이나 외출 여부를 결정하세요."
        ]
      },
      {
        "sectionType": "checklist",
        "title": "밤 발열에서 구분할 것",
        "items": [
          "외출 중 더웠는지, 땀을 많이 흘렸는지 확인하기",
          "수분 섭취와 소변 횟수가 줄었는지 보기",
          "콧물, 기침, 목소리 변화, 구토, 설사가 새로 생기는지 살피기",
          "쉬고 난 뒤 체온이 내려가는지, 밤새 반복되는지 비교하기",
          "다음 날 컨디션과 식사량이 회복되는지 확인하기"
        ]
      },
      {
        "sectionType": "simpleAction",
        "title": "밤에 할 수 있는 대응",
        "items": [
          "두꺼운 옷과 이불을 정리하고, 아이가 편하게 쉴 수 있게 해주세요.",
          "물을 마실 수 있는 아이라면 조금씩 자주 주고, 어린 아기는 수유량과 기저귀를 확인하세요.",
          "외출 시간, 체온 변화, 동반 증상을 기록해 다음 날 판단에 활용하세요."
        ]
      },
      {
        "sectionType": "caution",
        "title": "감기 시작 여부보다 먼저 볼 위험 신호",
        "body": "숨쉬기 힘들어 보임, 입술색 변화, 깨워도 반응이 약함, 반복 구토, 소변 감소, 경련, 38도 이상 발열이 반복되는 어린 아기라면 감기인지 기다리기보다 의료 상담을 우선하세요."
      },
      {
        "sectionType": "relatedGuide",
        "title": "함께 보면 좋은 페이지",
        "items": [
          "아기 열 대처 가이드",
          "/health/fever"
        ],
        "body": "밤에 열이 오르는 흐름이 반복된다면 아기 열 대처 가이드에서 집에서 볼 신호와 상담 기준을 함께 확인해보세요."
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
    if (columnSet.has("resultMemo")) assignments.push(`"resultMemo" = 'batch-009 페이지 전체 카드 점검 및 사용자 관점 리라이팅 완료'`);
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
        `update "ContentQualityBatch" set ${assignments.join(", ")} where "batchNo" = 9`,
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

  console.log("batch-009 콘텐츠 품질 개선 반영을 시작합니다.");

  for (const [index, update] of updates.entries()) {
    await applyUpdate(prisma, update);
    console.log(`${String(index + 1).padStart(2, "0")}/10 완료: ${update.path}`);
  }

  await markBatch(prisma);

  console.log("");
  console.log("batch-009 반영 완료");
  console.log("확인 경로:");
  console.log("- http://localhost:3000/qna/health/baby-fever-37-5");
  console.log("- http://localhost:3000/qna/health/baby-fever-38");
  console.log("- http://localhost:3000/qna/health/baby-fever-after-antibiotics");
  console.log("- http://localhost:3000/qna/health/baby-fever-after-daycare-new-2");
  console.log("- http://localhost:3000/qna/health/baby-fever-after-outing-new-2");
  console.log("- http://localhost:3000/db-check/content-quality-progress");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("batch-009 반영 실패");
  console.error(error);
  process.exit(1);
});
