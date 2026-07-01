import type { Metadata } from "next";
import Link from "next/link";
import { buildCanonical } from "@/lib/content-meta";
import { searchSite, groupResultsByType, TYPE_LABELS } from "@/lib/search/search";
import SearchBox from "@/components/layout/SearchBox";
import RecentViewedPages from "@/components/common/RecentViewedPages";

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
    ? `MomTools에서 "${query}"로 검색한 결과입니다. 육아 계산기, Q&A, 체크리스트, 이유식, 건강 가이드를 모바일에서 보기 쉽게 모아 보여드립니다.`
    : "MomTools 통합 검색입니다. 아기 열, 아기 개월수, 이유식 시작, 예방접종처럼 궁금한 키워드를 입력하면 관련 답변과 도구를 한 번에 찾아드립니다.";

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

const seeds = ["아기 열", "아기 개월수", "이유식 시작", "예방접종", "수면", "신생아 준비물", "출산지원금", "달빛아동병원", "입소대기"];

function SearchResultRow({ entry }: { entry: Awaited<ReturnType<typeof searchSite>>[number] }) {
  return (
    <Link href={entry.href} className="block px-4 py-3.5 transition hover:bg-amber-50/60">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-700">{entry.categoryLabel}</span>
        {entry.type === "tool" ? <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-bold text-sky-700">바로 사용</span> : null}
      </div>
      <div className="mt-2 text-[15px] font-extrabold leading-6 text-slate-900">{entry.title}</div>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">{entry.description}</p>
    </Link>
  );
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const results = query ? await searchSite(query, 80) : [];
  const groups = groupResultsByType(results);
  const directResults = results.filter((entry) => entry.type === "tool" || entry.type === "qna" || entry.type === "health-guide" || entry.type === "moonlight-hospital").slice(0, 4);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">통합 검색</span>
          <h1 className="mt-title-xl mt-4">
            {query ? `"${query}" 검색 결과` : "궁금한 키워드를 짧게 입력하세요"}
          </h1>
          <p className="mt-text-main mt-3">
            {query
              ? `먼저 바로 쓸 수 있는 도구와 판단 기준이 있는 페이지를 위쪽에 모았습니다.`
              : "아기 열, 개월수, 이유식, 예방접종처럼 지금 필요한 단어만 입력해도 됩니다."}
          </p>

          <div className="mt-5">
            <SearchBox
              initialQuery={query}
              placeholder="예) 아기 열, 이유식 시작"
              showSubmitButton
              className="min-h-12 px-4 py-3"
            />
          </div>
        </section>

        {query ? (
          results.length === 0 ? (
            <section className="mt-card-soft p-4 md:p-6">
              <h2 className="mt-title-md">검색 결과가 없어요</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">검색어를 조금 짧게 입력하거나 아래 키워드로 다시 찾아보세요.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {seeds.map((seed) => (
                  <Link key={seed} href={`/search?q=${encodeURIComponent(seed)}`} className="mt-chip-link">{seed}</Link>
                ))}
              </div>
            </section>
          ) : (
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm">
                <span className="font-bold text-slate-700">총 {results.length}개 결과</span>
                <span className="text-xs text-slate-500">도구·Q&amp;A 우선 정렬</span>
              </div>

              {directResults.length > 0 ? (
                <section className="mt-card p-4 md:p-6">
                  <h2 className="mt-title-md">먼저 볼 결과</h2>
                  <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-amber-100 bg-white">
                    {directResults.map((entry) => (
                      <SearchResultRow key={entry.href} entry={entry} />
                    ))}
                  </div>
                </section>
              ) : null}

              {groups.map((group) => (
                <section key={group.type} className="mt-card p-4 md:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-extrabold text-slate-900">{TYPE_LABELS[group.type]}</h2>
                    <span className="rounded-full bg-slate-50 px-2 py-1 text-xs font-bold text-slate-500">{group.results.length}개</span>
                  </div>
                  <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-amber-100 bg-white">
                    {group.results.slice(0, 8).map((entry) => (
                      <SearchResultRow key={entry.href} entry={entry} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )
        ) : (
          <div className="space-y-5 md:space-y-6">
            <RecentViewedPages title="최근 확인한 페이지" />
            <section className="mt-card-soft p-4 md:p-6">
              <h2 className="mt-title-md">자주 찾는 키워드</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {seeds.map((seed) => (
                  <Link key={seed} href={`/search?q=${encodeURIComponent(seed)}`} className="mt-chip-link">{seed}</Link>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
