import type { Metadata } from "next";
import Link from "next/link";
import { rankingYears } from "@/data/babyNames";
import { meaningPureKoreanNames } from "@/data/koreanNames";

const featuredNames = meaningPureKoreanNames.slice(0, 16);
const latestRankingYear = rankingYears[0];

export const metadata: Metadata = {
  title: "아기 이름과 뜻 | 순우리말 이름, 인기 이름 참고",
  description:
    "아기 이름을 고민하는 부모를 위해 순우리말 이름 뜻, 인기 이름 흐름, 이름을 고를 때 확인할 기준을 모바일에서 보기 쉽게 정리했습니다.",
  keywords: [
    "아기 이름",
    "아기 이름 뜻",
    "아이 이름 뜻",
    "순우리말 이름",
    "예쁜 아기 이름",
    "남자 아기 이름",
    "여자 아기 이름",
    "인기 아기 이름",
  ],
  alternates: { canonical: "https://momtools.kr/baby-names" },
  openGraph: {
    title: "아기 이름과 뜻",
    description: "순우리말 이름 뜻과 인기 이름 흐름을 부모가 가볍게 참고할 수 있게 정리했어요.",
    url: "https://momtools.kr/baby-names",
    siteName: "MomTools",
    type: "website",
  },
};

export default function BabyNamesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "아기 이름과 뜻",
    description: "아기 이름 뜻, 순우리말 이름, 인기 이름 흐름을 참고할 수 있는 페이지",
    url: "https://momtools.kr/baby-names",
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-4 md:space-y-6">
        <section className="mt-card px-4 py-5 md:px-7 md:py-8">
          <span className="mt-badge">아기 이름 참고</span>
          <h1 className="mt-title-xl mt-3">아기 이름과 뜻을 가볍게 살펴보세요</h1>
          <p className="mt-text-main mt-3">
            이름을 정할 때는 뜻, 발음, 성씨와 붙였을 때의 느낌을 함께 보는 것이 좋아요.
            MomTools는 작명을 대신하지 않고, 부모가 이름 후보를 좁혀갈 때 참고할 수 있는 자료만 간단히 모았습니다.
          </p>

          <form action="/baby-names/meanings" className="mt-4 flex gap-2">
            <input
              name="q"
              className="mt-input min-w-0 flex-1"
              placeholder="예: 라온, 도담, 하람"
              aria-label="이름 검색"
            />
            <button type="submit" className="mt-button-primary shrink-0 px-4">
              찾기
            </button>
          </form>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[13px] font-bold md:grid-cols-3">
            <Link href="/baby-names/meanings" className="mt-button-secondary min-h-10 px-3 py-2">
              이름 뜻 보기
            </Link>
            <Link href={`/baby-names/rankings/${latestRankingYear}`} className="mt-button-secondary min-h-10 px-3 py-2">
              인기 이름 보기
            </Link>
            <Link href="/tools/due-date" className="mt-button-secondary col-span-2 min-h-10 px-3 py-2 md:col-span-1">
              출산 예정일
            </Link>
          </div>
        </section>

        <section className="mt-card px-4 py-4 md:px-6 md:py-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="mt-title-md">많이 찾는 순우리말 이름</h2>
              <p className="mt-text-sub mt-1">뜻이 궁금한 이름을 눌러 바로 확인해보세요.</p>
            </div>
            <Link href="/baby-names/meanings" className="mt-chip-link shrink-0">
              전체 보기
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {featuredNames.map((item) => (
              <Link
                key={item.slug}
                href={`/baby-names/meanings/${item.slug}`}
                className="rounded-2xl border border-amber-100 bg-white px-3 py-3 active:bg-amber-50"
              >
                <div className="text-[15px] font-extrabold text-slate-900">{item.name}</div>
                <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-slate-500">{item.meaning}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card-soft px-4 py-4 md:px-6 md:py-6">
          <h2 className="mt-title-md">이름을 고를 때 먼저 볼 기준</h2>
          <div className="mt-3 grid gap-2 text-[13px] leading-6 text-slate-600 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">부르기 쉬운지</strong>
              성씨와 붙여 여러 번 불렀을 때 입에 자연스럽게 붙는지 확인해요.
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">뜻이 마음에 드는지</strong>
              이름 뜻이 가족이 바라는 이미지와 잘 맞는지 살펴봐요.
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">너무 헷갈리지 않는지</strong>
              발음이 비슷한 단어, 놀림이 될 수 있는 소리가 없는지 봐요.
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">오래 불러도 좋은지</strong>
              아기 때뿐 아니라 자라서도 자연스러운 이름인지 생각해요.
            </div>
          </div>
        </section>

        <section className="mt-simple-list">
          <Link href="/checklists/birth" className="mt-simple-list-item">
            <strong className="text-slate-900">출산 준비 체크리스트</strong>
            <span className="mt-1 block text-slate-500">이름을 고민하는 시기에 함께 준비하면 좋은 항목을 확인해요.</span>
          </Link>
          <Link href="/checklists/newborn" className="mt-simple-list-item">
            <strong className="text-slate-900">신생아 준비 체크리스트</strong>
            <span className="mt-1 block text-slate-500">아기 맞이 전 꼭 필요한 준비물을 간단히 정리해요.</span>
          </Link>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
