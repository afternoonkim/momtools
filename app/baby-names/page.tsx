import type { Metadata } from "next";
import Link from "next/link";
import { rankingYears, nameMeanings } from "@/data/babyNames";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "아이 이름 짓기 | 이름 생성기 순위 뜻",
  description: "아이 이름 생성기, 인기 이름 순위, 이름 뜻 페이지를 한곳에서 볼 수 있는 MomTools 아이 이름 짓기 메뉴입니다.",
  alternates: { canonical: "https://momtools.kr/baby-names" },
};

export default function BabyNamesHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">아이 이름 짓기</span>
          <h1 className="mt-title-xl mt-5">복잡하지 않게, 바로 비교할 수 있게 구성한 이름 메뉴</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            이름을 처음 정리할 때는 생성기, 인기 이름, 이름 뜻을 따로 보는 것이 더 편합니다.
            성씨에 어울리는 이름을 빠르게 보고 싶다면 생성기부터, 많이 찾는 이름 흐름을 알고 싶다면 연도별 순위를,
            특정 이름의 인상과 분위기가 궁금하다면 이름 뜻 페이지를 먼저 보세요.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <Link href="/baby-names/generator" className="mt-card p-6 transition hover:-translate-y-0.5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Generator</div>
            <h2 className="mt-3 text-xl font-bold text-slate-800">이름 생성기</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">성씨, 성별 느낌, 원하는 분위기를 선택하면 참고용 이름 조합을 바로 보여줍니다.</p>
          </Link>
          <Link href={`/baby-names/rankings/${rankingYears[0]}`} className="mt-card p-6 transition hover:-translate-y-0.5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Ranking</div>
            <h2 className="mt-3 text-xl font-bold text-slate-800">연도별 인기 이름 순위</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">2025, 2024, 2023처럼 연도별 페이지를 분리해 흐름을 쉽게 비교할 수 있게 했습니다.</p>
          </Link>
          <Link href="/baby-names/meanings" className="mt-card p-6 transition hover:-translate-y-0.5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Meaning</div>
            <h2 className="mt-3 text-xl font-bold text-slate-800">이름 뜻 보기</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">이름의 인상, 어감, 분위기를 먼저 살펴보고 비슷한 이름으로 이어서 비교할 수 있습니다.</p>
          </Link>
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="아이 이름 짓기 허브 광고 영역" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">많이 보는 이름 바로가기</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {nameMeanings.slice(0, 12).map((item) => (
              <Link key={item.slug} href={`/baby-names/meanings/${item.slug}`} className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
