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
      .slice(0, 12)
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
    <section className="mt-card p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="mt-title-md">궁금한 질문 찾기</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            질문이 많을 때는 지금 궁금한 말을 그대로 입력해 보세요. 예를 들어 “열”, “기침”, “걷기”, “떼쓰기”처럼 짧게 입력해도 관련 질문을 찾을 수 있어요.
          </p>
        </div>
        <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
          {filteredEntries.length}개 질문 표시
        </div>
      </div>

      <div className="mt-5 rounded-[28px] border border-amber-100 bg-amber-50/60 p-4 md:p-5">
        <label htmlFor="qna-search" className="text-sm font-bold text-slate-800">
          찾고 싶은 질문 입력
        </label>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-stretch">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 transition focus-within:border-amber-300 focus-within:ring-4 focus-within:ring-amber-100">
            <Search className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <input
              id="qna-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="예: 밤에 기침, 말이 늦어요, 밥을 안 먹어요"
              className="min-w-0 flex-1 bg-transparent py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
          {hasFilter ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedTopic("전체");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-amber-800 shadow-sm transition hover:bg-amber-100"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              다시 전체 보기
            </button>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["전체", ...topicOptions].map((topic) => {
            const isActive = selectedTopic === topic;

            return (
              <button
                key={topic}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedTopic(topic)}
                style={
                  isActive
                    ? {
                        backgroundColor: "#fef3c7",
                        borderColor: "#f59e0b",
                        color: "#78350f",
                      }
                    : undefined
                }
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-amber-400 bg-amber-100 text-amber-900 shadow-sm ring-2 ring-amber-200"
                    : "border-amber-100 bg-white text-slate-600 hover:bg-amber-100 hover:text-amber-800"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>

      {filteredEntries.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredEntries.map((item) => (
            <Link
              key={item.slug}
              href={`/qna/${category}/${item.slug}`}
              className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{item.topic}</div>
              <h3 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">설명형 답변 보기</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[28px] border border-amber-100 bg-white p-6 text-center shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">아직 맞는 질문을 찾지 못했어요</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            단어를 조금 짧게 입력하거나, 증상·행동·개월수처럼 다른 표현으로 다시 찾아보세요. 그래도 걱정이 계속된다면 아이 상태를 메모해 두고 상담을 먼저 고려하는 것이 좋습니다.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedTopic("전체");
            }}
            className="mt-5 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-700"
          >
            전체 질문 다시 보기
          </button>
        </div>
      )}
    </section>
  );
}
