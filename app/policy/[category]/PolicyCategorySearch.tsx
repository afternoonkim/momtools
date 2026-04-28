"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

type PolicySearchEntry = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  status: string;
  keywords: readonly string[];
};

type PolicyCategorySearchProps = {
  category: string;
  placeholder: string;
  entries: readonly PolicySearchEntry[];
};

function normalizeText(value: string) {
  return value.toLowerCase().replace(/\s+/g, "").trim();
}

function buildSearchText(item: PolicySearchEntry) {
  return normalizeText([item.title, item.shortTitle, item.summary, item.status, ...item.keywords].join(" "));
}

export default function PolicyCategorySearch({ category, placeholder, entries }: PolicyCategorySearchProps) {
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("전체");

  const statusOptions = useMemo(() => {
    return Array.from(new Set(entries.map((entry) => entry.status)));
  }, [entries]);

  const normalizedQuery = normalizeText(query);
  const filteredEntries = useMemo(() => {
    return entries.filter((item) => {
      const matchesStatus = selectedStatus === "전체" || item.status === selectedStatus;
      const matchesQuery = !normalizedQuery || buildSearchText(item).includes(normalizedQuery);
      return matchesStatus && matchesQuery;
    });
  }, [entries, normalizedQuery, selectedStatus]);

  const hasFilter = Boolean(query.trim()) || selectedStatus !== "전체";

  return (
    <section className="mt-card p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="mt-title-md">필요한 지원정책 찾기</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            정책 이름이 정확히 기억나지 않아도 괜찮습니다. “출산”, “어린이집”, “휴직”, “아이돌봄”처럼 지금 궁금한 단어를 입력해 보세요.
          </p>
        </div>
        <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
          {filteredEntries.length}개 정책 표시
        </div>
      </div>

      <div className="mt-5 rounded-[28px] border border-amber-100 bg-amber-50/60 p-4 md:p-5">
        <label htmlFor="policy-search" className="text-sm font-bold text-slate-800">
          찾고 싶은 정책 입력
        </label>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-stretch">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 transition focus-within:border-amber-300 focus-within:ring-4 focus-within:ring-amber-100">
            <Search className="h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <input
              id="policy-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="min-w-0 flex-1 bg-transparent py-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
          {hasFilter ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedStatus("전체");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-amber-800 shadow-sm transition hover:bg-amber-100"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              전체 정책 보기
            </button>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["전체", ...statusOptions].map((status) => {
            const isActive = selectedStatus === status;
            return (
              <button
                key={status}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedStatus(status)}
                style={isActive ? { backgroundColor: "#fef3c7", borderColor: "#f59e0b", color: "#78350f" } : undefined}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-amber-400 bg-amber-100 text-amber-900 shadow-sm ring-2 ring-amber-200"
                    : "border-amber-100 bg-white text-slate-600 hover:bg-amber-100 hover:text-amber-800"
                }`}
              >
                {status}
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
              href={`/policy/${category}/${item.slug}`}
              className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{item.status}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-800">{item.shortTitle}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-500">{item.summary}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">신청 기준 확인하기</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[28px] border border-amber-100 bg-white p-6 text-center shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">아직 맞는 정책을 찾지 못했어요</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            정책 이름 대신 상황을 짧게 입력해 보세요. 예를 들어 “출산”, “지원금”, “휴가”, “어린이집”, “보건소”처럼 검색하면 관련 정책을 찾기 쉽습니다.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedStatus("전체");
            }}
            className="mt-5 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-700"
          >
            전체 정책 다시 보기
          </button>
        </div>
      )}
    </section>
  );
}
