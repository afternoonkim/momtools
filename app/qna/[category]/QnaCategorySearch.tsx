"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

type QnaSearchEntry = {
  slug: string;
  question: string;
  topic: string;
  summary: string;
  keywords: readonly string[];
};

type QnaCategorySearchProps = {
  category: string;
  entries: readonly QnaSearchEntry[];
};

function normalizeText(value: string) {
  return value.toLowerCase().replace(/\s+/g, "").trim();
}

function buildSearchText(item: QnaSearchEntry) {
  return normalizeText(
    [item.question, item.topic, item.summary, ...item.keywords].join(" "),
  );
}

export default function QnaCategorySearch({ category, entries }: QnaCategorySearchProps) {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("전체");

  const topicOptions = useMemo(() => {
    const counts = new Map<string, number>();

    entries.forEach((item) => {
      counts.set(item.topic, (counts.get(item.topic) ?? 0) + 1);
    });

    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"))
      .slice(0, 10)
      .map(([topic]) => topic);
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
    <section className="mt-card p-4 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">궁금한 질문 찾기</h2>
          <p className="mt-1 text-sm leading-7 text-slate-600">“열”, “기침”, “걷기”, “떼쓰기”처럼 짧게 입력해도 됩니다.</p>
        </div>
        <div className="shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
          {filteredEntries.length}개
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50/60 p-3 md:p-4">
        <label htmlFor="qna-search" className="sr-only">찾고 싶은 질문 입력</label>
        <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 transition focus-within:border-amber-300 focus-within:ring-4 focus-within:ring-amber-100">
          <Search className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
          <input
            id="qna-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 밤에 기침, 말이 늦어요"
            className="min-w-0 flex-1 bg-transparent py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
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
                onClick={() => setSelectedTopic(topic)}
                className={`shrink-0 rounded-full border px-3 py-2 text-xs font-bold transition ${
                  isActive
                    ? "border-amber-400 bg-amber-100 text-amber-900"
                    : "border-amber-100 bg-white text-slate-600"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>

      {filteredEntries.length > 0 ? (
        <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-amber-100 bg-white">
          {filteredEntries.map((item) => (
            <Link key={item.slug} href={`/qna/${category}/${item.slug}`} className="block px-4 py-4 transition hover:bg-amber-50/60">
              <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">{item.topic}</div>
              <h3 className="mt-1 text-base font-extrabold leading-7 text-slate-900">{item.question}</h3>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">{item.summary}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-amber-100 bg-white p-5 text-center">
          <h3 className="text-base font-extrabold text-slate-900">맞는 질문을 찾지 못했어요</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">단어를 더 짧게 입력하거나 다른 표현으로 다시 찾아보세요.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedTopic("전체");
            }}
            className="mt-4 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-bold text-white"
          >
            전체 질문 보기
          </button>
        </div>
      )}
    </section>
  );
}
