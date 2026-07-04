import { SEARCH_INDEX, type SearchEntry, type SearchEntryType } from "./index-data";
import { familyHealthCategories } from "@/data/familyHealthQna";
import { getFamilyHealthSearchEntriesFromDb } from "@/lib/repositories/family-health-qna-db";
import { getHealthGuideSearchEntriesFromDb, getMonthlyGuideSearchEntriesFromDb } from "@/lib/repositories/guides-db";

export interface SearchResult extends SearchEntry {
  score: number;
}

/**
 * 검색어를 토큰으로 분해합니다.
 * 한국어는 공백 단위 토큰화 + 원본 문자열을 그대로 한 번 더 매칭에 사용합니다.
 */
function tokenize(input: string): string[] {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return [];
  const split = trimmed.split(/[\s,·,/]+/g).filter(Boolean);
  // 원문도 토큰에 포함시켜 "감기 콧물" 같은 다단어 검색에서도 원문 매칭 가산점이 들어가도록.
  return Array.from(new Set([trimmed, ...split]));
}

function normalize(value: string): string {
  return value.toLowerCase();
}

/**
 * 점수 기반 매칭. 점수 우선순위:
 *  - 제목 정확 일치: 100
 *  - 제목 부분 일치: 50
 *  - 토픽/카테고리 일치: 30
 *  - 키워드 정확 일치: 25
 *  - 키워드 부분 일치: 12
 *  - 설명 부분 일치: 8
 */
function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  if (tokens.length === 0) return 0;
  const title = normalize(entry.title);
  const description = normalize(entry.description ?? "");
  const topic = normalize(entry.topic ?? "");
  const keywords = (entry.keywords ?? []).map(normalize);

  let score = 0;
  let anyHit = false;

  for (const token of tokens) {
    if (!token) continue;

    if (title === token) {
      score += 100;
      anyHit = true;
    } else if (title.includes(token)) {
      score += 50;
      anyHit = true;
    }

    if (topic && (topic === token || topic.includes(token))) {
      score += 30;
      anyHit = true;
    }

    let keywordHit = false;
    for (const kw of keywords) {
      if (kw === token) {
        score += 25;
        keywordHit = true;
        anyHit = true;
        break;
      }
      if (kw.includes(token)) {
        score += 12;
        keywordHit = true;
        anyHit = true;
      }
    }
    if (keywordHit) continue;

    if (description.includes(token)) {
      score += 8;
      anyHit = true;
    }
  }

  return anyHit ? score : 0;
}

async function buildSearchIndex(): Promise<SearchEntry[]> {
  const [familyHealthEntries, monthlyGuideEntries, healthGuideEntries] = await Promise.all([
    getFamilyHealthSearchEntriesFromDb(),
    getMonthlyGuideSearchEntriesFromDb(),
    getHealthGuideSearchEntriesFromDb(),
  ]);

  const dbFamilyEntries: SearchEntry[] = familyHealthEntries.map((entry) => ({
    type: "family-health" as const,
    categoryLabel: familyHealthCategories[entry.category].label,
    href: `/family-health-qna/${entry.category}/${entry.slug}`,
    title: entry.question,
    description: entry.summary,
    topic: entry.topic,
    keywords: [...(entry.keywords ?? []), entry.topic, familyHealthCategories[entry.category].shortLabel].filter(Boolean) as string[],
  }));

  const dbMonthlyEntries: SearchEntry[] = monthlyGuideEntries.map((entry) => ({
    type: "monthly-guide" as const,
    categoryLabel: "월령별 육아 로드맵",
    href: entry.path,
    title: entry.title,
    description: entry.summary,
    topic: entry.topic,
    keywords: entry.keywords,
  }));

  const dbHealthEntries: SearchEntry[] = healthGuideEntries.map((entry) => ({
    type: "health-guide" as const,
    categoryLabel: "증상별 건강 가이드",
    href: entry.path,
    title: entry.title,
    description: entry.summary,
    topic: entry.topic,
    keywords: entry.keywords,
  }));

  const merged = new Map<string, SearchEntry>();
  for (const entry of SEARCH_INDEX) merged.set(entry.href, entry);
  for (const entry of dbFamilyEntries) merged.set(entry.href, entry);
  for (const entry of dbMonthlyEntries) merged.set(entry.href, entry);
  for (const entry of dbHealthEntries) merged.set(entry.href, entry);
  return Array.from(merged.values());
}

export async function searchSite(query: string, limit = 60): Promise<SearchResult[]> {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const index = await buildSearchIndex();
  const scored: SearchResult[] = [];
  for (const entry of index) {
    const score = scoreEntry(entry, tokens);
    if (score > 0) {
      scored.push({ ...entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

/** 검색 결과를 카테고리(type) 기준으로 묶어 UI에 그룹 단위로 보여주기 쉽게 만들어요. */
export function groupResultsByType(results: SearchResult[]): Array<{ type: SearchEntryType; results: SearchResult[] }> {
  const order: SearchEntryType[] = [
    "tool",
    "qna",
    "family-health",
    "moonlight-hospital",
    "policy",
    "birth-support-region",
    "family-finance",
    "baby-food",
    "info",
    "checklist",
    "record",
    "monthly-guide",
    "health-guide",
  ];
  const groups = new Map<SearchEntryType, SearchResult[]>();
  for (const r of results) {
    if (!groups.has(r.type)) groups.set(r.type, []);
    groups.get(r.type)!.push(r);
  }
  return order
    .map((type) => ({ type, results: groups.get(type) ?? [] }))
    .filter((group) => group.results.length > 0);
}

export const TYPE_LABELS: Record<SearchEntryType, string> = {
  tool: "육아 계산기",
  qna: "육아 Q&A",
  "family-health": "가족건강 Q&A",
  "moonlight-hospital": "달빛아동병원",
  policy: "정부정책",
  "birth-support-region": "지역별 출산지원금",
  "family-finance": "가계 가이드",
  "baby-food": "이유식 메뉴",
  info: "육아 정보",
  checklist: "체크리스트",
  record: "기록하기",
  "monthly-guide": "월령별 육아 로드맵",
  "health-guide": "증상별 건강 가이드",
};
