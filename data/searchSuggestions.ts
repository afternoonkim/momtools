export interface SearchSuggestion {
  query: string;
  label: string;
  description: string;
  category: string;
}

export const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { query: "아기 열", label: "아기 열", description: "월령별로 먼저 볼 신호와 상담 기준", category: "아이 건강" },
  { query: "예방접종 일정", label: "예방접종 일정", description: "생년월일 기준 접종 시기 확인", category: "계산하기" },
  { query: "아기 개월수", label: "아기 개월수", description: "오늘 기준 개월수와 100일·돌 계산", category: "계산하기" },
  { query: "발달 체크", label: "발달 체크", description: "아이별 발달 흐름을 기록", category: "기록하기" },
  { query: "아기 발달", label: "아기 발달", description: "월령별 발달 체크와 관찰 메모", category: "기록하기" },
  { query: "이유식 시작", label: "이유식 시작", description: "시작 시기와 단계별 진행 흐름", category: "이유식" },
  { query: "아기 이름", label: "아기 이름과 뜻", description: "순우리말 이름 뜻과 인기 이름 참고", category: "참고하기" },
  { query: "이름 뜻", label: "이름 뜻 모음", description: "뜻이 좋은 한글 이름을 빠르게 확인", category: "참고하기" },
  { query: "순우리말 이름", label: "순우리말 이름", description: "아기 이름 후보와 뜻을 비교", category: "참고하기" },
  { query: "성장 백분위", label: "성장 백분위", description: "키와 몸무게로 성장 위치 확인", category: "계산하기" },
  { query: "달빛아동병원", label: "달빛아동병원", description: "야간·휴일 소아 진료 병원 찾기", category: "확인하기" },
  { query: "청주 달빛아동병원", label: "청주 달빛아동병원", description: "청주 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "인천 달빛아동병원", label: "인천 달빛아동병원", description: "인천 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "서울 달빛아동병원", label: "서울 달빛아동병원", description: "서울 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "용인 달빛아동병원", label: "용인 달빛아동병원", description: "용인 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "부산 달빛아동병원", label: "부산 달빛아동병원", description: "부산 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "대구 달빛아동병원", label: "대구 달빛아동병원", description: "대구 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "대전 달빛아동병원", label: "대전 달빛아동병원", description: "대전 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "광주 달빛아동병원", label: "광주 달빛아동병원", description: "광주 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "울산 달빛아동병원", label: "울산 달빛아동병원", description: "울산 지역 달빛아동병원 확인", category: "지역 병원" },
  { query: "수면", label: "아기 수면", description: "잠투정과 수면 루틴 확인", category: "행동·수면" },
  { query: "기침", label: "아기 기침", description: "기침이 있을 때 확인할 점", category: "아이 건강" },
  { query: "설사", label: "아기 설사", description: "수분, 소변량, 상담 신호 확인", category: "아이 건강" },
  { query: "구토", label: "아기 구토", description: "반복 구토와 탈수 신호 확인", category: "아이 건강" },
  { query: "이유식 알레르기", label: "이유식 알레르기", description: "처음 먹인 뒤 볼 신호", category: "이유식" },
  { query: "신생아 준비물", label: "신생아 준비물", description: "수유·수면·위생 준비 체크", category: "체크리스트" },
  { query: "출산 준비물", label: "출산 준비물", description: "입원 가방과 출산 전 준비", category: "체크리스트" },
  { query: "어린이집 준비물", label: "어린이집 준비물", description: "등원 전 준비물과 적응 포인트", category: "체크리스트" },
  { query: "출산지원금", label: "출산지원금", description: "지역별 출산지원금 예상 확인", category: "정책" },
  { query: "부모급여", label: "부모급여", description: "지원 대상과 신청 흐름 확인", category: "정책" },
  { query: "아동수당", label: "아동수당", description: "지원금과 신청 정보 확인", category: "정책" },
  { query: "입소대기", label: "어린이집 입소대기", description: "아이사랑에서 입소대기 확인", category: "참고하기" },
  { query: "월령별 가이드", label: "월령별 가이드", description: "개월별 발달과 돌봄 포인트", category: "성장·발달" },
  { query: "배앓이", label: "아기 배앓이", description: "수유 뒤 불편해할 때 확인", category: "아이 건강" },
  { query: "코막힘", label: "아기 코막힘", description: "호흡과 수유 상태 확인", category: "아이 건강" },
];

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function getSearchSuggestions(input: string, limit = 7): SearchSuggestion[] {
  const query = normalize(input);
  if (!query) return SEARCH_SUGGESTIONS.slice(0, limit);

  const tokens = query.split(" ").filter(Boolean);
  const scored = SEARCH_SUGGESTIONS.map((item, index) => {
    const haystack = normalize(`${item.label} ${item.query} ${item.description} ${item.category}`);
    let score = 0;
    if (normalize(item.query) === query || normalize(item.label) === query) score += 100;
    if (normalize(item.query).startsWith(query) || normalize(item.label).startsWith(query)) score += 60;
    if (haystack.includes(query)) score += 35;
    for (const token of tokens) {
      if (token && haystack.includes(token)) score += 12;
    }
    return { item, score, index };
  })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((entry) => entry.item);

  return scored;
}
