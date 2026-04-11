import type { Metadata } from "next";
import Link from "next/link";
import { rankingYears, nameMeanings } from "@/data/babyNames";

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

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이용 전 안내</div>
          <h2 className="mt-title-lg mt-3">이름 메뉴는 참고용 아이디어를 넓혀보는 공간입니다</h2>
          <p className="mt-text-main mt-3 max-w-4xl">
            이름은 가족의 기준, 발음, 느낌, 성씨와의 조합, 실제 사용 편의까지 여러 요소가 함께 고려됩니다.
            MomTools 이름 메뉴는 법적 판단이나 작명 확정 서비스가 아니라, 부모가 먼저 이름 후보를 넓혀 보고
            분위기와 흐름을 비교할 수 있도록 돕는 참고형 구성입니다. 생성기, 순위, 뜻 페이지를 나눠 둔 이유도
            한 가지 기준에 치우치지 않고 여러 방향으로 이름을 살펴볼 수 있게 하기 위해서입니다.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">후보 넓히기</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">생성기로 참고용 이름을 보고, 비슷한 어감과 분위기의 이름을 빠르게 찾아볼 수 있습니다.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">흐름 확인</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">연도별 인기 이름 흐름을 따로 모아 현재 많이 찾는 분위기를 참고할 수 있습니다.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">의미 비교</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">이름 뜻과 인상을 함께 보며 발음과 느낌이 맞는지 비교하는 데 도움이 됩니다.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/about" className="rounded-full bg-amber-50 px-4 py-2 text-amber-800">사이트 소개</Link>
            <Link href="/faq" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">FAQ</Link>
            <Link href="/contact" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">문의하기</Link>
          </div>
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
