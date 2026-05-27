import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { buildCanonical } from "@/lib/content-meta";
import { searchSite, groupResultsByType, TYPE_LABELS } from "@/lib/search/search";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const title = query
    ? `"${query}" 검색 결과 | MomTools 통합 검색`
    : "통합 검색 | MomTools";
  const description = query
    ? `MomTools에서 "${query}"로 검색한 결과예요. 육아 Q&A, 가족건강, 정부정책, 출산지원금, 이유식, 가계 가이드까지 한 번에 모아 보여드려요.`
    : "MomTools 통합 검색이에요. 아기 열, 아기 개월수, 이유식 시작, 예방접종처럼 궁금한 키워드를 입력하면 관련 답변과 도구를 한 번에 찾아드려요.";

  return {
    title,
    description,
    alternates: { canonical: buildCanonical("/search") },
    robots: query
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: buildCanonical("/search"),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const results = query ? searchSite(query, 80) : [];
  const groups = groupResultsByType(results);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">통합 검색</span>
          <h1 className="mt-title-xl mt-5">
            {query ? `"${query}" 검색 결과` : "사이트 전체에서 찾고 싶은 키워드를 입력해 보세요"}
          </h1>
          <p className="mt-text-main mt-4">
            {query
              ? `육아 Q&A, 가족건강, 정부정책, 지역별 출산지원금, 이유식, 가계 가이드까지 "${query}"와 관련된 페이지를 모아 보여드려요.`
              : "아기 열, 아기 개월수, 이유식 시작, 예방접종, 수면처럼 지금 궁금한 단어를 넣으면 관련 답변과 도구를 한 번에 찾아드려요."}
          </p>

          <form
            action="/search"
            method="get"
            role="search"
            className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center"
          >
            <label htmlFor="q" className="sr-only">
              검색어
            </label>
            <div className="flex-1 flex items-center rounded-2xl border border-amber-200 bg-white px-4 py-3 shadow-sm focus-within:border-amber-400">
              <Search size={18} className="shrink-0 text-amber-600" aria-hidden />
              <input
                id="q"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="예) 아기 열, 아기 개월수, 이유식 시작"
                className="ml-3 w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="min-h-12 rounded-2xl bg-amber-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              검색
            </button>
          </form>
        </section>

        {query ? (
          results.length === 0 ? (
            <section className="mt-card-soft p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900">&quot;{query}&quot; 와 일치하는 결과가 없어요</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                검색어를 조금 짧게 입력해 보세요. 예: “아기 열 38도” 대신 “아기 열”, “어린이집 입소대기 신청 방법” 대신 “입소대기”처럼 핵심 단어만 넣으면 더 잘 찾을 수 있어요.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                {["아기 열", "아기 개월수", "이유식 시작", "예방접종", "수면", "신생아 준비물"].map((seed) => (
                  <Link
                    key={seed}
                    href={`/search?q=${encodeURIComponent(seed)}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-slate-700 transition hover:bg-amber-50"
                  >
                    {seed}
                  </Link>
                ))}
              </div>
            </section>
          ) : (
            <div className="space-y-6">
              <p className="text-sm font-semibold text-slate-600">
                총 <span className="text-amber-700">{results.length}</span>개 결과
              </p>
              {groups.map((group) => (
                <section key={group.type} className="mt-card p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900">{TYPE_LABELS[group.type]}</h2>
                    <span className="text-sm text-slate-500">{group.results.length}개</span>
                  </div>
                  <ul className="mt-4 divide-y divide-slate-100">
                    {group.results.slice(0, 12).map((entry) => (
                      <li key={entry.href} className="py-4">
                        <Link href={entry.href} className="group block rounded-2xl border border-transparent p-3 transition hover:border-amber-100 hover:bg-amber-50/50">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{entry.categoryLabel}</span>
                            {entry.type === "tool" ? (
                              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">관련 도구</span>
                            ) : null}
                          </div>
                          <div className="mt-2 text-base font-bold leading-7 text-slate-900 group-hover:text-amber-700">
                            {entry.title}
                          </div>
                          <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">{entry.description}</p>
                          <div className="mt-3 inline-flex min-h-11 items-center rounded-2xl bg-white px-4 text-sm font-bold text-amber-700 shadow-sm transition group-hover:bg-amber-100">
                            {entry.type === "tool" ? "바로 확인하기" : "바로 답변 보기"}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {group.results.length > 12 ? (
                    <p className="mt-3 text-xs text-slate-500">상위 12개만 보여드려요. 더 좁은 키워드로 다시 검색해 보세요.</p>
                  ) : null}
                </section>
              ))}
            </div>
          )
        ) : (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900">자주 찾는 키워드</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              어떤 키워드로 시작하면 좋을지 막막하다면 아래에서 한번 눌러 보세요.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              {[
                "아기 열",
                "아기 개월수",
                "이유식 시작",
                "예방접종",
                "수면",
                "신생아 준비물",
                "어린이집 찾기",
                "입소대기",
                "출산지원금",
                "국민행복카드",
                "시간제보육",
                "육아 상담",
              ].map((seed) => (
                <Link
                  key={seed}
                  href={`/search?q=${encodeURIComponent(seed)}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-amber-200 bg-white px-4 py-2 text-slate-700 transition hover:bg-amber-50"
                >
                  {seed}
                </Link>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/tools/baby-age", label: "아기 개월수 계산" },
                { href: "/tools/vaccine-schedule", label: "예방접종 일정 확인" },
                { href: "/info/childcare-portal/daycare-search", label: "어린이집 찾기" },
                { href: "/info/childcare-portal/daycare-waiting", label: "입소대기 확인" },
                { href: "/policy", label: "정부지원정책 보기" },
                { href: "/family-health-qna", label: "가족건강 Q&A" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-12 items-center justify-between rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">
                  {item.label}<span className="text-amber-700">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
