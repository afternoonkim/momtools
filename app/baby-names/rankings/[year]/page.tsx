import type { Metadata } from "next";
import Link from "next/link";
import { babyNameRankings, rankingYears } from "@/data/babyNames";
import AdBlock from "@/components/ad/AdBlock";

export async function generateStaticParams() {
  return rankingYears.map((year) => ({ year: String(year) }));
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `${year} 인기 아이 이름 순위`,
    description: `${year}년 기준 한국 아기 이름 흐름을 참고하기 좋게 정리한 남아·여아 인기 이름 순위 페이지입니다.`,
    alternates: { canonical: `https://momtools.kr/baby-names/rankings/${year}` },
  };
}

export default async function RankingYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  type RankingYear = keyof typeof babyNameRankings;

  const validYears = Object.keys(babyNameRankings) as RankingYear[];
  const typedYear: RankingYear = validYears.includes(year as RankingYear)
    ? (year as RankingYear)
    : "2025";

  const data = babyNameRankings[typedYear];

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">연도별 인기 이름 순위</span>
          <h1 className="mt-title-xl mt-5">{year} 인기 아이 이름 순위</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            최근 출생신고 이름 흐름을 참고하기 좋게 연도별로 정리했습니다. 이름 순위는 공개 통계 기반 집계 서비스를 참고해 반영했으며, 실제 조회 시점에 따라 소폭 달라질 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {rankingYears.map((item) => (
              <Link key={item} href={`/baby-names/rankings/${item}`} className={`rounded-full px-4 py-2 text-sm ${String(item) === year ? 'bg-amber-500 text-white' : 'bg-white text-slate-600 border border-amber-100'}`}>
                {item}
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Boy</div>
            <h2 className="mt-title-md mt-3">남아 인기 이름 TOP 20</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {data.boy.map((name, index) => (
                <div key={name} className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
                  <div className="text-xs text-slate-400">TOP {index + 1}</div>
                  <div className="mt-1 font-semibold text-slate-800">{name}</div>
                </div>
              ))}
            </div>
          </article>
          <article className="mt-card p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Girl</div>
            <h2 className="mt-title-md mt-3">여아 인기 이름 TOP 20</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {data.girl.map((name, index) => (
                <div key={name} className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
                  <div className="text-xs text-slate-400">TOP {index + 1}</div>
                  <div className="mt-1 font-semibold text-slate-800">{name}</div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="이름 순위 광고 영역" />
      </div>
    </div>
  );
}
