export type NameGender = 'boy' | 'girl';

export interface NameMeaning {
  name: string;
  slug: string;
  gender: NameGender;
  description: string;
  firstSyllable: string;
  secondSyllable: string;
  vibe: string;
  shortMeaning: string;
}

export const rankingYears = ["2025", "2024", "2023"] as const;

export const babyNameRankings = {
  "2025": {
    "boy": [
      "도윤","이준","하준","시우","도현","태오","이안","서준","선우","은우",
      "수호","도하","이현","지호","우주","은호","유준","윤우","주원","시윤"
    ],
    "girl": [
      "서아","서윤","하린","이서","하윤","지안","아린","지유","아윤","시아",
      "윤서","지아","지우","채이","유나","수아","채아","도아","예린","서하"
    ]
  },
  "2024": {
    "boy": [
      "이준","하준","도윤","은우","시우","서준","선우","유준","태오","수호",
      "도현","이안","이현","지호","도하","우주","예준","주원","로운","지한"
    ],
    "girl": [
      "이서","서아","하린","지유","하윤","지안","아윤","지아","아린","서윤",
      "시아","지우","유주","유나","채아","윤서","수아","윤슬","서하","리아"
    ]
  },
  "2023": {
    "boy": [
      "이준","도윤","하준","은우","서준","시우","지호","유준","도현","선우",
      "이안","예준","우주","수호","로운","도하","이현","연우","태오","윤우"
    ],
    "girl": [
      "서아","이서","아윤","지아","하윤","지유","서윤","아린","시아","지안",
      "하린","지우","유나","채아","리아","수아","예나","유주","나은","하은"
    ]
  }
} as const;

export const nameMeanings: NameMeaning[] = [
  {
    "name": "가람",
    "slug": "garam-boy",
    "gender": "boy",
    "description": "가람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 강처럼 넓고 시원하게 흐르는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "가",
    "secondSyllable": "람",
    "vibe": "넓고 유연한 인상",
    "shortMeaning": "강처럼 넓고 시원하게 흐르는 뜻"
  },
  {
    "name": "겨루",
    "slug": "gyeoru-boy",
    "gender": "boy",
    "description": "겨루은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 스스로 힘을 기르고 이겨 내는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "겨",
    "secondSyllable": "루",
    "vibe": "단단하고 씩씩한 분위기",
    "shortMeaning": "스스로 힘을 기르고 이겨 내는 느낌"
  },
  {
    "name": "그루",
    "slug": "geuru-boy",
    "gender": "boy",
    "description": "그루은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 나무의 줄기처럼 든든하게 자라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "그",
    "secondSyllable": "루",
    "vibe": "차분하고 든든한 느낌",
    "shortMeaning": "나무의 줄기처럼 든든하게 자라는 뜻"
  },
  {
    "name": "나래",
    "slug": "narae-boy",
    "gender": "boy",
    "description": "나래은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 날개처럼 높이 뻗어 가라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "나",
    "secondSyllable": "래",
    "vibe": "가볍고 자유로운 인상",
    "shortMeaning": "날개처럼 높이 뻗어 가라는 뜻"
  },
  {
    "name": "나봄",
    "slug": "nabom-boy",
    "gender": "boy",
    "description": "나봄은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 봄처럼 새롭게 시작하는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "나",
    "secondSyllable": "봄",
    "vibe": "밝고 산뜻한 분위기",
    "shortMeaning": "봄처럼 새롭게 시작하는 느낌"
  },
  {
    "name": "누리",
    "slug": "nuri-boy",
    "gender": "boy",
    "description": "누리은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 세상을 품는 넓은 마음이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "누",
    "secondSyllable": "리",
    "vibe": "편안하고 넓은 인상",
    "shortMeaning": "세상을 품는 넓은 마음이라는 뜻"
  },
  {
    "name": "다온",
    "slug": "daon-boy",
    "gender": "boy",
    "description": "다온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 좋은 일이 다 온다는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "다",
    "secondSyllable": "온",
    "vibe": "따뜻하고 반가운 느낌",
    "shortMeaning": "좋은 일이 다 온다는 뜻"
  },
  {
    "name": "다올",
    "slug": "daol-boy",
    "gender": "boy",
    "description": "다올은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 하는 일이 모두 잘 풀리길 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "다",
    "secondSyllable": "올",
    "vibe": "긍정적이고 또렷한 분위기",
    "shortMeaning": "하는 일이 모두 잘 풀리길 바라는 뜻"
  },
  {
    "name": "도담",
    "slug": "dodam-boy",
    "gender": "boy",
    "description": "도담은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 야무지고 건강하게 자라는 모습을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "도",
    "secondSyllable": "담",
    "vibe": "단정하고 튼튼한 느낌",
    "shortMeaning": "야무지고 건강하게 자라는 모습"
  },
  {
    "name": "라온",
    "slug": "raon-boy",
    "gender": "boy",
    "description": "라온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 즐겁고 기쁜 하루를 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "라",
    "secondSyllable": "온",
    "vibe": "경쾌하고 환한 인상",
    "shortMeaning": "즐겁고 기쁜 하루를 바라는 뜻"
  },
  {
    "name": "마루",
    "slug": "maru-boy",
    "gender": "boy",
    "description": "마루은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 하늘과 맞닿은 산마루처럼 높고 곧은 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "마",
    "secondSyllable": "루",
    "vibe": "높고 곧은 분위기",
    "shortMeaning": "하늘과 맞닿은 산마루처럼 높고 곧은 뜻"
  },
  {
    "name": "바다",
    "slug": "bada-boy",
    "gender": "boy",
    "description": "바다은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 넓고 깊은 마음을 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "바",
    "secondSyllable": "다",
    "vibe": "시원하고 여유로운 인상",
    "shortMeaning": "넓고 깊은 마음을 바라는 뜻"
  },
  {
    "name": "보람",
    "slug": "boram-boy",
    "gender": "boy",
    "description": "보람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 사는 하루가 값지고 보람차라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "보",
    "secondSyllable": "람",
    "vibe": "성실하고 반듯한 느낌",
    "shortMeaning": "사는 하루가 값지고 보람차라는 뜻"
  },
  {
    "name": "새론",
    "slug": "saeron-boy",
    "gender": "boy",
    "description": "새론은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 새롭고 맑은 시작이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "새",
    "secondSyllable": "론",
    "vibe": "신선하고 깨끗한 분위기",
    "shortMeaning": "새롭고 맑은 시작이라는 뜻"
  },
  {
    "name": "서리",
    "slug": "seori-boy",
    "gender": "boy",
    "description": "서리은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 이른 새벽처럼 맑고 선명한 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "서",
    "secondSyllable": "리",
    "vibe": "맑고 차분한 인상",
    "shortMeaning": "이른 새벽처럼 맑고 선명한 느낌"
  },
  {
    "name": "솔찬",
    "slug": "solchan-boy",
    "gender": "boy",
    "description": "솔찬은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 소나무처럼 푸르고 알차게 자라라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "솔",
    "secondSyllable": "찬",
    "vibe": "알차고 믿음직한 분위기",
    "shortMeaning": "소나무처럼 푸르고 알차게 자라라는 뜻"
  },
  {
    "name": "시온",
    "slug": "sion-boy",
    "gender": "boy",
    "description": "시온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 평안하고 따뜻한 공간 같은 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "시",
    "secondSyllable": "온",
    "vibe": "부드럽고 편안한 인상",
    "shortMeaning": "평안하고 따뜻한 공간 같은 느낌"
  },
  {
    "name": "아람",
    "slug": "aram-boy",
    "gender": "boy",
    "description": "아람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 알차게 여문 열매처럼 단단하라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "아",
    "secondSyllable": "람",
    "vibe": "성숙하고 단단한 분위기",
    "shortMeaning": "알차게 여문 열매처럼 단단하라는 뜻"
  },
  {
    "name": "여울",
    "slug": "yeoul-boy",
    "gender": "boy",
    "description": "여울은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑게 흐르는 물길처럼 유연한 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "여",
    "secondSyllable": "울",
    "vibe": "잔잔하고 맑은 느낌",
    "shortMeaning": "맑게 흐르는 물길처럼 유연한 뜻"
  },
  {
    "name": "온결",
    "slug": "ongyeol-boy",
    "gender": "boy",
    "description": "온결은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 마음결이 따뜻하고 반듯하라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "온",
    "secondSyllable": "결",
    "vibe": "반듯하고 온화한 인상",
    "shortMeaning": "마음결이 따뜻하고 반듯하라는 뜻"
  },
  {
    "name": "온새미",
    "slug": "onsaemi-boy",
    "gender": "boy",
    "description": "온새미은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 언제나 변함없이 한결같다는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "온",
    "secondSyllable": "새",
    "vibe": "꾸준하고 안정적인 분위기",
    "shortMeaning": "언제나 변함없이 한결같다는 뜻"
  },
  {
    "name": "이든",
    "slug": "iden-boy",
    "gender": "boy",
    "description": "이든은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 착하고 바르게 자라길 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "이",
    "secondSyllable": "든",
    "vibe": "단정하고 부드러운 인상",
    "shortMeaning": "착하고 바르게 자라길 바라는 뜻"
  },
  {
    "name": "자온",
    "slug": "jaon-boy",
    "gender": "boy",
    "description": "자온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 스스로 따뜻함을 지닌 사람이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "자",
    "secondSyllable": "온",
    "vibe": "포근하고 차분한 느낌",
    "shortMeaning": "스스로 따뜻함을 지닌 사람이라는 뜻"
  },
  {
    "name": "찬솔",
    "slug": "chansol-boy",
    "gender": "boy",
    "description": "찬솔은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 밝고 푸른 기운을 담은 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "찬",
    "secondSyllable": "솔",
    "vibe": "맑고 씩씩한 분위기",
    "shortMeaning": "밝고 푸른 기운을 담은 이름"
  },
  {
    "name": "초롱",
    "slug": "chorong-boy",
    "gender": "boy",
    "description": "초롱은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑고 또렷하게 빛나는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "초",
    "secondSyllable": "롱",
    "vibe": "반짝이고 경쾌한 인상",
    "shortMeaning": "맑고 또렷하게 빛나는 느낌"
  },
  {
    "name": "태람",
    "slug": "taeram-boy",
    "gender": "boy",
    "description": "태람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 크고 든든한 사람으로 자라길 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "태",
    "secondSyllable": "람",
    "vibe": "크고 안정감 있는 분위기",
    "shortMeaning": "크고 든든한 사람으로 자라길 바라는 뜻"
  },
  {
    "name": "하람",
    "slug": "haram-boy",
    "gender": "boy",
    "description": "하람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 하늘이 내린 소중한 사람이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "하",
    "secondSyllable": "람",
    "vibe": "맑고 고운 인상",
    "shortMeaning": "하늘이 내린 소중한 사람이라는 뜻"
  },
  {
    "name": "하랑",
    "slug": "harang-boy",
    "gender": "boy",
    "description": "하랑은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 함께 높이 날고 밝게 자라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "하",
    "secondSyllable": "랑",
    "vibe": "밝고 활동적인 느낌",
    "shortMeaning": "함께 높이 날고 밝게 자라는 뜻"
  },
  {
    "name": "한결",
    "slug": "hangyeol-boy",
    "gender": "boy",
    "description": "한결은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 처음과 끝이 한결같은 마음을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "한",
    "secondSyllable": "결",
    "vibe": "꾸준하고 믿음직한 인상",
    "shortMeaning": "처음과 끝이 한결같은 마음"
  },
  {
    "name": "해솔",
    "slug": "haesol-boy",
    "gender": "boy",
    "description": "해솔은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 햇살과 소나무의 맑고 푸른 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "해",
    "secondSyllable": "솔",
    "vibe": "환하고 청량한 분위기",
    "shortMeaning": "햇살과 소나무의 맑고 푸른 느낌"
  },
  {
    "name": "해찬",
    "slug": "haechan-boy",
    "gender": "boy",
    "description": "해찬은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 햇살처럼 밝고 씩씩한 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "해",
    "secondSyllable": "찬",
    "vibe": "명랑하고 활기찬 인상",
    "shortMeaning": "햇살처럼 밝고 씩씩한 뜻"
  },
  {
    "name": "든해",
    "slug": "deunhae-boy",
    "gender": "boy",
    "description": "든해은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 든든하고 환한 기운을 담은 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "든",
    "secondSyllable": "해",
    "vibe": "따뜻하고 안정적인 분위기",
    "shortMeaning": "든든하고 환한 기운을 담은 이름"
  },
  {
    "name": "푸름",
    "slug": "pureum-boy",
    "gender": "boy",
    "description": "푸름은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 푸르게 자라라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "푸",
    "secondSyllable": "름",
    "vibe": "청량하고 싱그러운 인상",
    "shortMeaning": "푸르게 자라라는 뜻"
  },
  {
    "name": "미르",
    "slug": "mireu-boy",
    "gender": "boy",
    "description": "미르은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 용처럼 힘차고 크게 자라라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "미",
    "secondSyllable": "르",
    "vibe": "힘차고 대담한 분위기",
    "shortMeaning": "용처럼 힘차고 크게 자라라는 뜻"
  },
  {
    "name": "수리",
    "slug": "suri-boy",
    "gender": "boy",
    "description": "수리은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 슬기롭고 재빠른 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "수",
    "secondSyllable": "리",
    "vibe": "영리하고 또렷한 인상",
    "shortMeaning": "슬기롭고 재빠른 느낌"
  },
  {
    "name": "고운",
    "slug": "goun-boy",
    "gender": "boy",
    "description": "고운은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 마음씨가 곱고 부드럽다는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "고",
    "secondSyllable": "운",
    "vibe": "정갈하고 부드러운 분위기",
    "shortMeaning": "마음씨가 곱고 부드럽다는 뜻"
  },
  {
    "name": "윤슬",
    "slug": "yoonseul-boy",
    "gender": "boy",
    "description": "윤슬은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 햇빛에 반짝이는 물결처럼 빛나는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "윤",
    "secondSyllable": "슬",
    "vibe": "빛나고 섬세한 인상",
    "shortMeaning": "햇빛에 반짝이는 물결처럼 빛나는 뜻"
  },
  {
    "name": "한울",
    "slug": "hanul-boy",
    "gender": "boy",
    "description": "한울은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 큰 울타리처럼 넓게 품는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "한",
    "secondSyllable": "울",
    "vibe": "넓고 든든한 분위기",
    "shortMeaning": "큰 울타리처럼 넓게 품는 뜻"
  },
  {
    "name": "이솔",
    "slug": "isol-boy",
    "gender": "boy",
    "description": "이솔은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑고 단정한 소나무 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "이",
    "secondSyllable": "솔",
    "vibe": "차분하고 깔끔한 인상",
    "shortMeaning": "맑고 단정한 소나무 느낌"
  },
  {
    "name": "별하",
    "slug": "byeolha-boy",
    "gender": "boy",
    "description": "별하은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 별처럼 빛나고 높게 자라라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "별",
    "secondSyllable": "하",
    "vibe": "맑고 반짝이는 분위기",
    "shortMeaning": "별처럼 빛나고 높게 자라라는 뜻"
  },
  {
    "name": "온유",
    "slug": "onyu-boy",
    "gender": "boy",
    "description": "온유은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 부드럽고 너그러운 성품이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "온",
    "secondSyllable": "유",
    "vibe": "온화하고 편안한 인상",
    "shortMeaning": "부드럽고 너그러운 성품이라는 뜻"
  },
  {
    "name": "나온",
    "slug": "naon-boy",
    "gender": "boy",
    "description": "나온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 좋은 길로 나아온다는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "나",
    "secondSyllable": "온",
    "vibe": "담백하고 긍정적인 분위기",
    "shortMeaning": "좋은 길로 나아온다는 뜻"
  },
  {
    "name": "늘봄",
    "slug": "neulbom-boy",
    "gender": "boy",
    "description": "늘봄은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 늘 봄처럼 따뜻한 기운을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "늘",
    "secondSyllable": "봄",
    "vibe": "포근하고 밝은 인상",
    "shortMeaning": "늘 봄처럼 따뜻한 기운"
  },
  {
    "name": "모람",
    "slug": "moram-boy",
    "gender": "boy",
    "description": "모람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 모으고 쌓아 크게 이룬다는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "모",
    "secondSyllable": "람",
    "vibe": "차근차근 단단한 분위기",
    "shortMeaning": "모으고 쌓아 크게 이룬다는 느낌"
  },
  {
    "name": "다빛",
    "slug": "dabit-boy",
    "gender": "boy",
    "description": "다빛은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 많은 빛을 품은 사람이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "다",
    "secondSyllable": "빛",
    "vibe": "밝고 선명한 인상",
    "shortMeaning": "많은 빛을 품은 사람이라는 뜻"
  },
  {
    "name": "한빛",
    "slug": "hanbit-boy",
    "gender": "boy",
    "description": "한빛은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 큰 빛처럼 환하게 비추는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "한",
    "secondSyllable": "빛",
    "vibe": "힘있고 환한 분위기",
    "shortMeaning": "큰 빛처럼 환하게 비추는 뜻"
  },
  {
    "name": "온빛",
    "slug": "onbit-boy",
    "gender": "boy",
    "description": "온빛은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 따뜻한 빛을 가진 사람이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "온",
    "secondSyllable": "빛",
    "vibe": "부드럽고 따뜻한 인상",
    "shortMeaning": "따뜻한 빛을 가진 사람이라는 뜻"
  },
  {
    "name": "샘찬",
    "slug": "saemchan-boy",
    "gender": "boy",
    "description": "샘찬은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 샘물처럼 맑고 기운찬 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "샘",
    "secondSyllable": "찬",
    "vibe": "맑고 생기 있는 분위기",
    "shortMeaning": "샘물처럼 맑고 기운찬 뜻"
  },
  {
    "name": "라별",
    "slug": "rabyeol-boy",
    "gender": "boy",
    "description": "라별은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 즐겁고 반짝이는 별 같은 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "라",
    "secondSyllable": "별",
    "vibe": "경쾌하고 귀여운 인상",
    "shortMeaning": "즐겁고 반짝이는 별 같은 느낌"
  },
  {
    "name": "새힘",
    "slug": "saehim-boy",
    "gender": "boy",
    "description": "새힘은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 새로운 힘과 용기를 담은 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "새",
    "secondSyllable": "힘",
    "vibe": "의젓하고 씩씩한 분위기",
    "shortMeaning": "새로운 힘과 용기를 담은 뜻"
  },
  {
    "name": "가온",
    "slug": "gaon-girl",
    "gender": "girl",
    "description": "가온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 가운데를 바로 잡는 중심이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "가",
    "secondSyllable": "온",
    "vibe": "차분하고 안정적인 인상",
    "shortMeaning": "가운데를 바로 잡는 중심이라는 뜻"
  },
  {
    "name": "나린",
    "slug": "narin-girl",
    "gender": "girl",
    "description": "나린은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 하늘에서 내린 듯 맑고 고운 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "나",
    "secondSyllable": "린",
    "vibe": "맑고 고운 분위기",
    "shortMeaning": "하늘에서 내린 듯 맑고 고운 뜻"
  },
  {
    "name": "나봄",
    "slug": "nabom-girl",
    "gender": "girl",
    "description": "나봄은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 봄처럼 화사하고 따뜻한 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "나",
    "secondSyllable": "봄",
    "vibe": "산뜻하고 사랑스러운 인상",
    "shortMeaning": "봄처럼 화사하고 따뜻한 느낌"
  },
  {
    "name": "나율",
    "slug": "nayul-girl",
    "gender": "girl",
    "description": "나율은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 잔잔하고 고운 흐름이라는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "나",
    "secondSyllable": "율",
    "vibe": "부드럽고 잔잔한 분위기",
    "shortMeaning": "잔잔하고 고운 흐름이라는 느낌"
  },
  {
    "name": "누리",
    "slug": "nuri-girl",
    "gender": "girl",
    "description": "누리은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 세상을 넓게 품는 마음이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "누",
    "secondSyllable": "리",
    "vibe": "넓고 편안한 인상",
    "shortMeaning": "세상을 넓게 품는 마음이라는 뜻"
  },
  {
    "name": "다솜",
    "slug": "dasom-girl",
    "gender": "girl",
    "description": "다솜은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 사랑을 뜻하는 순우리말 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "다",
    "secondSyllable": "솜",
    "vibe": "따뜻하고 다정한 분위기",
    "shortMeaning": "사랑을 뜻하는 순우리말 이름"
  },
  {
    "name": "다은",
    "slug": "daeun-girl",
    "gender": "girl",
    "description": "다은은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 많은 은혜와 따뜻함을 담은 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "다",
    "secondSyllable": "은",
    "vibe": "정갈하고 포근한 인상",
    "shortMeaning": "많은 은혜와 따뜻함을 담은 느낌"
  },
  {
    "name": "도담",
    "slug": "dodam-girl",
    "gender": "girl",
    "description": "도담은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 야무지고 건강하게 자라는 모습을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "도",
    "secondSyllable": "담",
    "vibe": "단단하고 단정한 분위기",
    "shortMeaning": "야무지고 건강하게 자라는 모습"
  },
  {
    "name": "라온",
    "slug": "raon-girl",
    "gender": "girl",
    "description": "라온은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 즐겁고 기쁜 하루를 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "라",
    "secondSyllable": "온",
    "vibe": "밝고 경쾌한 인상",
    "shortMeaning": "즐겁고 기쁜 하루를 바라는 뜻"
  },
  {
    "name": "로다",
    "slug": "roda-girl",
    "gender": "girl",
    "description": "로다은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 이루어 가는 길이 곧고 좋다는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "로",
    "secondSyllable": "다",
    "vibe": "담백하고 맑은 분위기",
    "shortMeaning": "이루어 가는 길이 곧고 좋다는 느낌"
  },
  {
    "name": "마음",
    "slug": "maeum-girl",
    "gender": "girl",
    "description": "마음은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 따뜻하고 바른 마음을 담은 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "마",
    "secondSyllable": "음",
    "vibe": "부드럽고 편안한 인상",
    "shortMeaning": "따뜻하고 바른 마음을 담은 이름"
  },
  {
    "name": "모아",
    "slug": "moa-girl",
    "gender": "girl",
    "description": "모아은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 좋은 것을 모아 이루길 바라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "모",
    "secondSyllable": "아",
    "vibe": "아기자기하고 사랑스러운 분위기",
    "shortMeaning": "좋은 것을 모아 이루길 바라는 뜻"
  },
  {
    "name": "보나",
    "slug": "bona-girl",
    "gender": "girl",
    "description": "보나은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 보기에 좋고 사랑스러운 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "보",
    "secondSyllable": "나",
    "vibe": "귀엽고 포근한 인상",
    "shortMeaning": "보기에 좋고 사랑스러운 느낌"
  },
  {
    "name": "보라",
    "slug": "bora-girl",
    "gender": "girl",
    "description": "보라은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 보랏빛처럼 은은하고 고운 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "보",
    "secondSyllable": "라",
    "vibe": "은은하고 차분한 분위기",
    "shortMeaning": "보랏빛처럼 은은하고 고운 느낌"
  },
  {
    "name": "빛나",
    "slug": "bitna-girl",
    "gender": "girl",
    "description": "빛나은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 밝게 빛나는 사람이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "빛",
    "secondSyllable": "나",
    "vibe": "환하고 선명한 인상",
    "shortMeaning": "밝게 빛나는 사람이라는 뜻"
  },
  {
    "name": "사랑",
    "slug": "sarang-girl",
    "gender": "girl",
    "description": "사랑은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 사랑을 가득 담은 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "사",
    "secondSyllable": "랑",
    "vibe": "따뜻하고 다정한 분위기",
    "shortMeaning": "사랑을 가득 담은 이름"
  },
  {
    "name": "새나",
    "slug": "saena-girl",
    "gender": "girl",
    "description": "새나은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 새처럼 가볍고 자유로운 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "새",
    "secondSyllable": "나",
    "vibe": "맑고 자유로운 인상",
    "shortMeaning": "새처럼 가볍고 자유로운 느낌"
  },
  {
    "name": "새봄",
    "slug": "saebom-girl",
    "gender": "girl",
    "description": "새봄은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 새로운 봄처럼 산뜻한 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "새",
    "secondSyllable": "봄",
    "vibe": "화사하고 산뜻한 분위기",
    "shortMeaning": "새로운 봄처럼 산뜻한 뜻"
  },
  {
    "name": "서린",
    "slug": "seorin-girl",
    "gender": "girl",
    "description": "서린은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑게 스미는 느낌의 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "서",
    "secondSyllable": "린",
    "vibe": "섬세하고 고운 인상",
    "shortMeaning": "맑게 스미는 느낌의 이름"
  },
  {
    "name": "소예",
    "slug": "soye-girl",
    "gender": "girl",
    "description": "소예은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 작고 고운 아름다움이라는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "소",
    "secondSyllable": "예",
    "vibe": "단아하고 부드러운 분위기",
    "shortMeaning": "작고 고운 아름다움이라는 느낌"
  },
  {
    "name": "소은",
    "slug": "soeun-girl",
    "gender": "girl",
    "description": "소은은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 부드럽고 따뜻한 인상을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "소",
    "secondSyllable": "은",
    "vibe": "포근하고 맑은 느낌",
    "shortMeaning": "부드럽고 따뜻한 인상"
  },
  {
    "name": "솔비",
    "slug": "solbi-girl",
    "gender": "girl",
    "description": "솔비은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 소나무와 비처럼 맑고 푸른 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "솔",
    "secondSyllable": "비",
    "vibe": "청량하고 깨끗한 분위기",
    "shortMeaning": "소나무와 비처럼 맑고 푸른 느낌"
  },
  {
    "name": "수아",
    "slug": "sua-girl",
    "gender": "girl",
    "description": "수아은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑고 단정한 인상을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "수",
    "secondSyllable": "아",
    "vibe": "반듯하고 부드러운 느낌",
    "shortMeaning": "맑고 단정한 인상"
  },
  {
    "name": "시나",
    "slug": "sina-girl",
    "gender": "girl",
    "description": "시나은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 시처럼 고운 말과 마음이라는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "시",
    "secondSyllable": "나",
    "vibe": "말갛고 잔잔한 분위기",
    "shortMeaning": "시처럼 고운 말과 마음이라는 느낌"
  },
  {
    "name": "아라",
    "slug": "ara-girl",
    "gender": "girl",
    "description": "아라은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 바다처럼 넓고 아름다운 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "아",
    "secondSyllable": "라",
    "vibe": "시원하고 넓은 인상",
    "shortMeaning": "바다처럼 넓고 아름다운 뜻"
  },
  {
    "name": "아름",
    "slug": "areum-girl",
    "gender": "girl",
    "description": "아름은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 아름다움을 그대로 담은 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "아",
    "secondSyllable": "름",
    "vibe": "단아하고 고운 분위기",
    "shortMeaning": "아름다움을 그대로 담은 이름"
  },
  {
    "name": "아린",
    "slug": "arin-girl",
    "gender": "girl",
    "description": "아린은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑고 여린 아름다움을 뜻하는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "아",
    "secondSyllable": "린",
    "vibe": "맑고 섬세한 인상",
    "shortMeaning": "맑고 여린 아름다움을 뜻하는 느낌"
  },
  {
    "name": "여울",
    "slug": "yeoul-girl",
    "gender": "girl",
    "description": "여울은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 잔잔하고 맑게 흐르는 물길을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "여",
    "secondSyllable": "울",
    "vibe": "부드럽고 청명한 분위기",
    "shortMeaning": "잔잔하고 맑게 흐르는 물길"
  },
  {
    "name": "예다",
    "slug": "yeda-girl",
    "gender": "girl",
    "description": "예다은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 곱고 예쁜 뜻을 담은 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "예",
    "secondSyllable": "다",
    "vibe": "사랑스럽고 단정한 인상",
    "shortMeaning": "곱고 예쁜 뜻을 담은 느낌"
  },
  {
    "name": "온새",
    "slug": "onsae-girl",
    "gender": "girl",
    "description": "온새은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 언제나 새롭고 맑은 기운을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "온",
    "secondSyllable": "새",
    "vibe": "산뜻하고 밝은 분위기",
    "shortMeaning": "언제나 새롭고 맑은 기운"
  },
  {
    "name": "온유",
    "slug": "onyu-girl",
    "gender": "girl",
    "description": "온유은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 부드럽고 온화한 성품이라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "온",
    "secondSyllable": "유",
    "vibe": "차분하고 포근한 인상",
    "shortMeaning": "부드럽고 온화한 성품이라는 뜻"
  },
  {
    "name": "유란",
    "slug": "yuran-girl",
    "gender": "girl",
    "description": "유란은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 부드럽고 고운 울림이라는 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "유",
    "secondSyllable": "란",
    "vibe": "우아하고 부드러운 분위기",
    "shortMeaning": "부드럽고 고운 울림이라는 느낌"
  },
  {
    "name": "윤슬",
    "slug": "yoonseul-girl",
    "gender": "girl",
    "description": "윤슬은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 물결 위 햇빛처럼 반짝이는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "윤",
    "secondSyllable": "슬",
    "vibe": "반짝이고 청아한 인상",
    "shortMeaning": "물결 위 햇빛처럼 반짝이는 뜻"
  },
  {
    "name": "이레",
    "slug": "ire-girl",
    "gender": "girl",
    "description": "이레은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 일주일처럼 가득 찬 시간의 의미을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "이",
    "secondSyllable": "레",
    "vibe": "차분하고 안정적인 분위기",
    "shortMeaning": "일주일처럼 가득 찬 시간의 의미"
  },
  {
    "name": "이솔",
    "slug": "isol-girl",
    "gender": "girl",
    "description": "이솔은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 소나무처럼 맑고 단정한 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "이",
    "secondSyllable": "솔",
    "vibe": "맑고 또렷한 인상",
    "shortMeaning": "소나무처럼 맑고 단정한 느낌"
  },
  {
    "name": "자람",
    "slug": "jaram-girl",
    "gender": "girl",
    "description": "자람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 건강하게 자란다는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "자",
    "secondSyllable": "람",
    "vibe": "튼튼하고 바른 분위기",
    "shortMeaning": "건강하게 자란다는 뜻"
  },
  {
    "name": "조은",
    "slug": "joeun-girl",
    "gender": "girl",
    "description": "조은은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 좋고 바른 마음을 담은 이름을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "조",
    "secondSyllable": "은",
    "vibe": "정직하고 맑은 인상",
    "shortMeaning": "좋고 바른 마음을 담은 이름"
  },
  {
    "name": "초롱",
    "slug": "chorong-girl",
    "gender": "girl",
    "description": "초롱은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑게 빛나는 눈빛 같은 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "초",
    "secondSyllable": "롱",
    "vibe": "또렷하고 사랑스러운 분위기",
    "shortMeaning": "맑게 빛나는 눈빛 같은 느낌"
  },
  {
    "name": "채움",
    "slug": "chaeum-girl",
    "gender": "girl",
    "description": "채움은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 부족함을 따뜻하게 채운다는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "채",
    "secondSyllable": "움",
    "vibe": "포근하고 다정한 인상",
    "shortMeaning": "부족함을 따뜻하게 채운다는 뜻"
  },
  {
    "name": "하나",
    "slug": "hana-girl",
    "gender": "girl",
    "description": "하나은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 세상에 하나뿐인 소중한 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "하",
    "secondSyllable": "나",
    "vibe": "또렷하고 소중한 분위기",
    "shortMeaning": "세상에 하나뿐인 소중한 뜻"
  },
  {
    "name": "하늘",
    "slug": "haneul-girl",
    "gender": "girl",
    "description": "하늘은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 넓고 높게 자라라는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "하",
    "secondSyllable": "늘",
    "vibe": "시원하고 맑은 인상",
    "shortMeaning": "넓고 높게 자라라는 뜻"
  },
  {
    "name": "하람",
    "slug": "haram-girl",
    "gender": "girl",
    "description": "하람은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 하늘이 내린 소중한 사람을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "하",
    "secondSyllable": "람",
    "vibe": "맑고 귀한 분위기",
    "shortMeaning": "하늘이 내린 소중한 사람"
  },
  {
    "name": "하린",
    "slug": "harin-girl",
    "gender": "girl",
    "description": "하린은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 맑고 고운 기운이 내린 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "하",
    "secondSyllable": "린",
    "vibe": "청아하고 섬세한 인상",
    "shortMeaning": "맑고 고운 기운이 내린 느낌"
  },
  {
    "name": "한결",
    "slug": "hangyeol-girl",
    "gender": "girl",
    "description": "한결은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 늘 한결같은 마음을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "한",
    "secondSyllable": "결",
    "vibe": "꾸준하고 따뜻한 분위기",
    "shortMeaning": "늘 한결같은 마음"
  },
  {
    "name": "한빛",
    "slug": "hanbit-girl",
    "gender": "girl",
    "description": "한빛은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 큰 빛처럼 환하고 밝은 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "한",
    "secondSyllable": "빛",
    "vibe": "밝고 선명한 인상",
    "shortMeaning": "큰 빛처럼 환하고 밝은 뜻"
  },
  {
    "name": "해나",
    "slug": "haena-girl",
    "gender": "girl",
    "description": "해나은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 해처럼 밝고 따뜻한 기운을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "해",
    "secondSyllable": "나",
    "vibe": "환하고 사랑스러운 분위기",
    "shortMeaning": "해처럼 밝고 따뜻한 기운"
  },
  {
    "name": "해봄",
    "slug": "haebom-girl",
    "gender": "girl",
    "description": "해봄은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 햇살 가득한 봄의 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "해",
    "secondSyllable": "봄",
    "vibe": "화사하고 따뜻한 인상",
    "shortMeaning": "햇살 가득한 봄의 느낌"
  },
  {
    "name": "해솔",
    "slug": "haesol-girl",
    "gender": "girl",
    "description": "해솔은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 햇살과 소나무의 맑고 푸른 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "해",
    "secondSyllable": "솔",
    "vibe": "청량하고 부드러운 분위기",
    "shortMeaning": "햇살과 소나무의 맑고 푸른 뜻"
  },
  {
    "name": "라별",
    "slug": "rabyeol-girl",
    "gender": "girl",
    "description": "라별은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 즐겁고 반짝이는 별 같은 느낌을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "라",
    "secondSyllable": "별",
    "vibe": "경쾌하고 귀여운 인상",
    "shortMeaning": "즐겁고 반짝이는 별 같은 느낌"
  },
  {
    "name": "별하",
    "slug": "byeolha-girl",
    "gender": "girl",
    "description": "별하은(는) 순우리말 느낌이 살아 있는 한글 이름으로, 별처럼 높고 맑게 빛나는 뜻을 담아 참고하기 좋습니다. 성씨와 붙였을 때 발음의 자연스러움과 가족이 실제로 불러보는 어감을 함께 살펴보세요.",
    "firstSyllable": "별",
    "secondSyllable": "하",
    "vibe": "반짝이고 청명한 분위기",
    "shortMeaning": "별처럼 높고 맑게 빛나는 뜻"
  }
];

export const nameStyles = ["부르기 쉬운 이름", "세련된 느낌의 이름", "부드러운 느낌의 이름", "중성적인 느낌의 이름", "짧고 또렷한 이름"] as const;

export type NameStyle = (typeof nameStyles)[number];

export const generatorNamePools: Record<NameGender, Record<NameStyle, string[]>> = {
  boy: {
    "부르기 쉬운 이름": ["가람","그루","누리","다온","도담","라온","마루","시온","아람","온결","이든","자온","하람","하랑","한결","해솔","미르","온유","한빛","라별","새힘","나온","늘봄","윤슬"],
    "세련된 느낌의 이름": ["다올","라온","시온","온결","이든","자온","찬솔","태람","하랑","해찬","미르","윤슬","한울","온유","다빛","한빛","온빛","샘찬","라별","새힘","별하","고운"],
    "부드러운 느낌의 이름": ["가람","나봄","누리","도담","마루","바다","보람","새론","서리","아람","여울","온결","하람","한결","해솔","고운","윤슬","한울","온유","늘봄","모람","온빛","라별","별하"],
    "중성적인 느낌의 이름": ["누리","다온","도담","라온","마루","바다","시온","여울","온결","온새미","이든","하람","하랑","한결","해솔","윤슬","이솔","별하","온유","나온","늘봄","다빛","한빛","라별"],
    "짧고 또렷한 이름": ["가람","그루","누리","다온","다올","도담","라온","마루","시온","아람","이든","자온","찬솔","하람","하랑","한결","해찬","미르","수리","한울","다빛","샘찬","라별","새힘"]
  },
  girl: {
    "부르기 쉬운 이름": ["가온","나린","나봄","누리","다솜","다은","도담","라온","마음","모아","보나","보라","빛나","사랑","새봄","서린","소은","수아","아라","아린","이레","조은","하나","하린"],
    "세련된 느낌의 이름": ["나율","라온","로다","서린","소예","솔비","시나","아린","예다","온유","유란","윤슬","이레","이솔","채움","하린","한빛","해나","해봄","해솔","라별","별하","가온","지아"],
    "부드러운 느낌의 이름": ["가온","나린","나봄","누리","다솜","도담","마음","보나","사랑","새나","새봄","서린","소은","아라","아름","아린","온유","윤슬","이레","자람","하나","하늘","하린","해나"],
    "중성적인 느낌의 이름": ["가온","누리","도담","라온","여울","온새","온유","윤슬","이솔","초롱","한결","한빛","해솔","라별","별하","하람","자람","모아","나봄","새봄","아라","하늘","보라","수아"],
    "짧고 또렷한 이름": ["가온","나린","나율","누리","다은","도담","라온","로다","모아","보라","빛나","소예","수아","아라","예다","이레","조은","채움","하나","하늘","하린","해나","라별","별하"]
  }
};

export function getYearRanking(year: string) {
  const safeYear = rankingYears.includes(year as (typeof rankingYears)[number])
    ? (year as (typeof rankingYears)[number])
    : "2025";

  return babyNameRankings[safeYear];
}

export function getNameMeaning(slug: string) {
  return nameMeanings.find((item) => item.slug === slug);
}
