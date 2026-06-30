"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

type FamilyHealthSearchEntry = {
  slug: string;
  question: string;
  topic: string;
  summary: string;
  keywords: readonly string[];
};

type FamilyHealthCategorySearchProps = {
  category: string;
  entries: readonly FamilyHealthSearchEntry[];
};

const topicKeywordMap: Record<string, string> = {
  fatigue: "피로",
  pain: "통증",
  mood: "기분",
  stress: "스트레스",
  "blood-pressure": "혈압",
  recovery: "회복",
  bleeding: "출혈",
  cold: "기침",
  stomach: "구토 설사",
  skin: "피부",
  "fever-medicine": "해열제",
  "cold-medicine": "감기약",
  supplement: "영양제",
  blood: "혈압 혈당",
  liver: "간 수치",
  visit: "진료 준비",
};

function normalizeText(value: string) {
  return value.toLowerCase().replace(/\s+/g, "").trim();
}

function buildSearchText(item: FamilyHealthSearchEntry) {
  return normalizeText([item.question, item.topic, item.summary, ...item.keywords].join(" "));
}

export default function FamilyHealthCategorySearch({ category, entries }: FamilyHealthCategorySearchProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("전체");

  useEffect(() => {
    const queryParam = searchParams.get("q")?.trim();
    const topicParam = searchParams.get("topic")?.trim();
    const nextQuery = queryParam || (topicParam ? topicKeywordMap[topicParam] ?? topicParam : "");
    if (nextQuery) {
      setQuery(nextQuery);
      setSelectedTopic("전체");
    }
  }, [searchParams]);

  const topicOptions = useMemo(() => {
    const counts = new Map<string, number>();
    entries.forEach((item) => counts.set(item.topic, (counts.get(item.topic) ?? 0) + 1));

    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"))
      .slice(0, 12)
      .map(([topic]) => topic);
  }, [entries]);

  const suggestedTerms = useMemo(() => {
    const terms = new Set<string>();
    entries.slice(0, 24).forEach((item) => {
      terms.add(item.topic);
      item.keywords.slice(0, 2).forEach((keyword) => {
        if (keyword.length >= 2 && keyword.length <= 10) terms.add(keyword);
      });
    });
    return [...terms].slice(0, 8);
  }, [entries]);

  const normalizedQuery = normalizeText(query);

  const filteredEntries = useMemo(() => {
    return entries.filter((item) => {
      const matchesTopic = selectedTopic === "전체" || item.topic === selectedTopic;
      const matchesQuery = !normalizedQuery || buildSearchText(item).includes(normalizedQuery);
      return matchesTopic && matchesQuery;
    });
  }, [entries, normalizedQuery, selectedTopic]);

  const hasFilter = Boolean(query.trim()) || selectedTopic !== "전체";

  return (
    <section id="qna-search-panel" className="mt-app-stack scroll-mt-24" aria-label="궁금한 건강 질문 찾기">
      <div className="mt-app-stack-section">
        <h2 className="mt-app-section-title">궁금한 건강 질문 찾기</h2>
        <p className="mt-app-section-desc">증상, 부위, 약, 검진 수치처럼 짧은 단어로 찾아보세요.</p>
      </div>

      <div className="mt-app-stack-section bg-amber-50/40">
        <label htmlFor="family-health-search" className="sr-only">찾고 싶은 질문 입력</label>
        <div className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-white px-3 py-2.5 transition focus-within:border-amber-300 focus-within:ring-4 focus-within:ring-amber-100">
          <Search className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
          <input
            id="family-health-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 피로, 감기약, 혈압"
            className="min-w-0 flex-1 bg-transparent py-1 text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
          />
          {hasFilter ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedTopic("전체");
              }}
              className="rounded-full bg-amber-50 p-2 text-amber-800"
              aria-label="검색 조건 지우기"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {["전체", ...topicOptions].map((topic) => {
            const isActive = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setSelectedTopic(topic);
                  setQuery("");
                }}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-[12px] font-bold transition ${
                  isActive ? "border-amber-400 bg-amber-100 text-amber-900" : "border-amber-100 bg-white text-slate-600"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* {!hasFilter ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {suggestedTerms.map((term) => (
              <button key={term} type="button" onClick={() => setQuery(term)} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-500 ring-1 ring-amber-100">
                {term}
              </button>
            ))}
          </div>
        ) : null} */}
      </div>

      {filteredEntries.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {filteredEntries.map((item) => (
            <Link key={item.slug} href={`/family-health-qna/${category}/${item.slug}`} className="block px-4 py-3.5 transition hover:bg-amber-50/60 active:bg-amber-50">
              <div className="text-[11px] font-bold text-amber-600">{item.topic}</div>
              <h3 className="mt-1 text-[13px] font-extrabold leading-5 text-slate-900">{item.question}</h3>
              <p className="mt-1 line-clamp-2 text-[12.5px] leading-5 text-slate-500">{item.summary}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-app-stack-section text-center">
          <h3 className="text-[14px] font-extrabold text-slate-900">맞는 질문을 찾지 못했어요</h3>
          <p className="mt-1 text-[13px] leading-6 text-slate-600">증상, 부위, 약 이름처럼 다른 단어로 다시 찾아보세요.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedTopic("전체");
            }}
            className="mt-3 rounded-2xl bg-amber-600 px-4 py-2.5 text-[13px] font-bold text-white"
          >
            전체 질문 보기
          </button>
        </div>
      )}
    </section>
  );
}
