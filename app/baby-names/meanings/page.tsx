import type { Metadata } from "next";
import Link from "next/link";
import { meaningPureKoreanNames } from "@/data/koreanNames";

const pureKoreanNames = meaningPureKoreanNames;

export const metadata: Metadata = {
  title: "순우리말 이름 뜻 모음 | 아기 이름 참고",
  description:
    "순우리말 아기 이름과 뜻을 모바일에서 빠르게 검색하고 비교할 수 있게 정리했습니다. 이름의 뜻, 느낌, 발음 기준을 함께 확인해보세요.",
  keywords: ["순우리말 이름", "아기 이름 뜻", "아이 이름 뜻", "뜻 좋은 이름", "예쁜 한글 이름"],
  alternates: { canonical: "https://momtools.kr/baby-names/meanings" },
};

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

export default async function KoreanNameMeaningsPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = params?.q?.trim() ?? "";
  const normalizedQuery = normalize(q);
  const names = normalizedQuery
    ? pureKoreanNames.filter((item) => normalize(`${item.name}${item.meaning}`).includes(normalizedQuery))
    : pureKoreanNames;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "순우리말 이름 뜻 모음",
    itemListElement: names.slice(0, 30).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `https://momtools.kr/baby-names/meanings/${item.slug}`,
    })),
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-4 md:space-y-6">
        <section className="mt-card px-4 py-5 md:px-7 md:py-8">
          <span className="mt-badge">이름 뜻 모음</span>
          <h1 className="mt-title-xl mt-3">순우리말 이름 뜻을 빠르게 찾아보세요</h1>
          <p className="mt-text-main mt-3">
            이름의 뜻과 소리감을 먼저 보고, 마음에 드는 이름은 성씨와 붙여 여러 번 불러보세요.
            이 페이지는 이름 후보를 좁히기 위한 참고 자료입니다.
          </p>
          <form action="/baby-names/meanings" className="mt-4 flex gap-2">
            <input
              name="q"
              defaultValue={q}
              className="mt-input min-w-0 flex-1"
              placeholder="이름 또는 뜻 검색"
              aria-label="이름 또는 뜻 검색"
            />
            <button type="submit" className="mt-button-primary shrink-0 px-4">
              검색
            </button>
          </form>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-slate-500">
            <span>총 {names.length}개</span>
            {q ? (
              <Link href="/baby-names/meanings" className="rounded-full border border-amber-100 bg-white px-3 py-1.5 font-bold text-slate-600">
                전체 보기
              </Link>
            ) : null}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {names.map((item) => (
            <Link
              key={item.slug}
              href={`/baby-names/meanings/${item.slug}`}
              className="rounded-2xl border border-amber-100 bg-white px-4 py-3 active:bg-amber-50 md:px-5 md:py-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-[16px] font-extrabold leading-6 text-slate-900">{item.name}</h2>
                  <p className="mt-1 text-[13px] leading-6 text-slate-600">{item.meaning}</p>
                </div>
                <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">
                  뜻 보기
                </span>
              </div>
            </Link>
          ))}
        </section>

        {names.length === 0 ? (
          <section className="mt-card px-4 py-5 text-center">
            <h2 className="text-[16px] font-extrabold text-slate-900">검색된 이름이 없어요</h2>
            <p className="mt-2 text-[13px] leading-6 text-slate-500">한 글자만 입력하거나, 뜻에 들어갈 단어로 다시 찾아보세요.</p>
          </section>
        ) : null}

        <details className="mt-section-details">
          <summary className="mt-section-summary">
            이름을 고를 때 함께 확인할 점
            <span className="text-xs text-slate-400">열기</span>
          </summary>
          <div className="mt-detail-body">
            <ul className="space-y-2">
              <li>성과 붙였을 때 발음이 자연스러운지 여러 번 불러보세요.</li>
              <li>뜻이 좋아도 실제로 부르기 어렵다면 후보에서 한 번 더 고민해보세요.</li>
              <li>너무 낯선 이름은 가족이 느끼는 인상과 아이가 자랐을 때의 사용성을 함께 생각해보세요.</li>
            </ul>
          </div>
        </details>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
