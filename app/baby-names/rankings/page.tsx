import type { Metadata } from "next";
import Link from "next/link";
import { babyNameRankings, rankingYears } from "@/data/babyNames";

const latestYear = rankingYears[0];
const latest = babyNameRankings[latestYear];

export const metadata: Metadata = {
  title: "인기 아기 이름 순위 | 남아 여아 이름 참고",
  description:
    "최근 부모들이 많이 참고하는 아기 이름 흐름을 남아와 여아로 나누어 모바일에서 보기 쉽게 정리했습니다.",
  keywords: ["인기 아기 이름", "남자 아기 이름", "여자 아기 이름", "아기 이름 순위", "아이 이름 추천"],
  alternates: { canonical: "https://momtools.kr/baby-names/rankings" },
};

function RankingList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className="mt-card px-4 py-4 md:px-6 md:py-6">
      <h2 className="mt-title-md">{title} TOP 20</h2>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((name, index) => (
          <div key={name} className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white px-3 py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[12px] font-extrabold text-amber-700">
              {index + 1}
            </div>
            <div className="text-[14px] font-extrabold text-slate-900">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BabyNameRankingsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-4 md:space-y-6">
        <section className="mt-card px-4 py-5 md:px-7 md:py-8">
          <span className="mt-badge">인기 이름</span>
          <h1 className="mt-title-xl mt-3">인기 아기 이름 흐름을 확인해보세요</h1>
          <p className="mt-text-main mt-3">
            많이 쓰이는 이름을 보면 요즘 부모들이 선호하는 소리감과 분위기를 참고할 수 있어요.
            순위는 이름을 확정하는 기준이 아니라 후보를 넓혀보는 참고 자료로 활용해보세요.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {rankingYears.map((year) => (
              <Link key={year} href={`/baby-names/rankings/${year}`} className="mt-chip-link">
                {year}년 보기
              </Link>
            ))}
          </div>
        </section>

        <RankingList title="남아 이름" items={latest.boy} />
        <RankingList title="여아 이름" items={latest.girl} />
      </div>
    </div>
  );
}
