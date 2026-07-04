import type { Metadata } from "next";
import Link from "next/link";
import { babyNameRankings, rankingYears } from "@/data/babyNames";

export async function generateStaticParams() {
  return rankingYears.map((year) => ({ year: String(year) }));
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }): Promise<Metadata> {
  const { year } = await params;
  return {
    title: `${year} 인기 아기 이름 순위 | 남아 여아 이름 참고`,
    description: `${year}년 기준 한국 아기 이름 흐름을 남아·여아로 나누어 부모가 참고하기 쉽게 정리했습니다.`,
    keywords: [`${year} 아기 이름`, `${year} 아기 이름 순위`, "남자 아기 이름", "여자 아기 이름", "인기 이름"],
    alternates: { canonical: `https://momtools.kr/baby-names/rankings/${year}` },
  };
}

function RankingList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="mt-card px-4 py-4 md:px-6 md:py-6">
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
    </article>
  );
}

export default async function RankingYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  type RankingYear = keyof typeof babyNameRankings;

  const validYears = Object.keys(babyNameRankings) as RankingYear[];
  const typedYear: RankingYear = validYears.includes(year as RankingYear)
    ? (year as RankingYear)
    : rankingYears[0];

  const data = babyNameRankings[typedYear];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${typedYear} 인기 아기 이름 순위`,
    itemListElement: [...data.boy.slice(0, 10), ...data.girl.slice(0, 10)].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-4 md:space-y-6">
        <section className="mt-card px-4 py-5 md:px-7 md:py-8">
          <span className="mt-badge">인기 이름 순위</span>
          <h1 className="mt-title-xl mt-3">{typedYear} 인기 아기 이름 순위</h1>
          <p className="mt-text-main mt-3">
            최근 이름 흐름을 남아와 여아로 나누어 정리했어요. 순위는 후보를 넓혀보는 참고용으로 보고,
            최종 선택은 뜻과 발음, 성씨와의 조합까지 함께 살펴보세요.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {rankingYears.map((item) => (
              <Link
                key={item}
                href={`/baby-names/rankings/${item}`}
                className={String(item) === typedYear ? "mt-button-primary min-h-9 px-3 py-1.5 text-[12px]" : "mt-chip-link"}
              >
                {item}년
              </Link>
            ))}
          </div>
        </section>

        <RankingList title="남아 이름" items={data.boy} />
        <RankingList title="여아 이름" items={data.girl} />

        <section className="mt-simple-list">
          <Link href="/baby-names/meanings" className="mt-simple-list-item">
            <strong className="text-slate-900">이름 뜻도 함께 보기</strong>
            <span className="mt-1 block text-slate-500">마음에 드는 이름이 있다면 뜻과 느낌을 함께 확인해보세요.</span>
          </Link>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
