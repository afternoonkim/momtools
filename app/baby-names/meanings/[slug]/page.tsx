import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { meaningPureKoreanNames, getKoreanNameBySlug } from "@/data/koreanNames";

export function generateStaticParams() {
  return meaningPureKoreanNames.map((item) => ({ slug: item.slug }));
}

function topicParticle(name: string) {
  const last = name.charCodeAt(name.length - 1);
  if (last < 0xac00 || last > 0xd7a3) return "은";
  return (last - 0xac00) % 28 === 0 ? "는" : "은";
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getKoreanNameBySlug(slug);
  if (!item) return { title: "이름을 찾을 수 없습니다" };
  return {
    title: `${item.name} 이름 뜻 | 아기 이름 참고`,
    description: `${item.name} 이름의 뜻은 ${item.meaning}입니다. 이름을 고를 때 부모가 함께 확인하면 좋은 발음, 느낌, 성씨 조합 기준을 정리했습니다.`,
    keywords: [`${item.name} 이름 뜻`, `${item.name} 뜻`, "아기 이름 뜻", "순우리말 이름", "아이 이름 참고"],
    robots: { index: true, follow: true },
    alternates: { canonical: `https://momtools.kr/baby-names/meanings/${item.slug}` },
    openGraph: {
      title: `${item.name} 이름 뜻`,
      description: `${item.name} 이름의 뜻과 부모가 함께 볼 체크포인트를 정리했어요.`,
      url: `https://momtools.kr/baby-names/meanings/${item.slug}`,
      siteName: "MomTools",
      type: "article",
    },
  };
}

export default async function KoreanNameMeaningDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getKoreanNameBySlug(slug);
  if (!item) notFound();
  const related = meaningPureKoreanNames
    .filter((name) => name.slug !== item.slug)
    .filter((name) => name.name[0] === item.name[0])
    .slice(0, 4);
  const fallbackRelated = related.length > 0 ? related : meaningPureKoreanNames.filter((name) => name.slug !== item.slug).slice(0, 4);
  const particle = topicParticle(item.name);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${item.name} 이름 뜻`,
    description: `${item.name} 이름의 뜻은 ${item.meaning}입니다.`,
    url: `https://momtools.kr/baby-names/meanings/${item.slug}`,
    author: { "@type": "Organization", name: "MomTools" },
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-4 md:space-y-6">
        <nav className="px-1 text-[12px] text-slate-500">
          <Link href="/baby-names" className="hover:text-slate-700">아기 이름과 뜻</Link>
          <span className="mx-2">/</span>
          <Link href="/baby-names/meanings" className="hover:text-slate-700">이름 뜻 모음</Link>
          <span className="mx-2">/</span>
          <span>{item.name}</span>
        </nav>

        <section className="mt-card px-4 py-5 md:px-7 md:py-8">
          <span className="mt-badge">이름 뜻</span>
          <h1 className="mt-title-xl mt-3">{item.name} 이름 뜻</h1>
          <p className="mt-text-main mt-3">
            {item.name}{particle} <strong className="text-slate-900">{item.meaning}</strong>의 이미지를 담은 이름으로 참고할 수 있어요.
            이름을 정할 때는 뜻뿐 아니라 성씨와 붙였을 때의 발음, 가족이 실제로 불렀을 때의 느낌도 함께 보는 것이 좋습니다.
          </p>
        </section>

        <section className="mt-card px-4 py-4 md:px-6 md:py-6">
          <h2 className="mt-title-md">먼저 볼 기준</h2>
          <div className="mt-3 grid gap-2 text-[13px] leading-6 text-slate-600">
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">뜻</strong>
              {item.meaning}
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">불러보기</strong>
              성씨와 붙여 천천히 불러보고, 줄여 부를 때도 자연스러운지 확인해보세요.
            </div>
            <div className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
              <strong className="block text-slate-900">오래 쓰기</strong>
              아기 때뿐 아니라 어린이집, 학교, 성인이 된 뒤에도 자연스럽게 느껴지는지 생각해보세요.
            </div>
          </div>
        </section>

        <details className="mt-section-details">
          <summary className="mt-section-summary">
            이름을 정하기 전 더 확인할 점
            <span className="text-xs text-slate-400">열기</span>
          </summary>
          <div className="mt-detail-body">
            <ul className="space-y-2">
              <li>가족이 같은 발음으로 편하게 부를 수 있는지 확인해보세요.</li>
              <li>비슷한 소리의 단어 때문에 놀림이 될 가능성은 없는지 살펴보세요.</li>
              <li>한자 이름으로 정할 경우에는 사용하는 한자의 뜻과 획수를 별도로 확인해야 합니다.</li>
            </ul>
          </div>
        </details>

        <section className="mt-card px-4 py-4 md:px-6 md:py-6">
          <div className="flex items-start justify-between gap-3">
            <h2 className="mt-title-md">비슷하게 참고할 이름</h2>
            <Link href="/baby-names/meanings" className="mt-chip-link shrink-0">전체 보기</Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {fallbackRelated.map((relatedItem) => (
              <Link
                key={relatedItem.slug}
                href={`/baby-names/meanings/${relatedItem.slug}`}
                className="rounded-2xl border border-amber-100 bg-white px-3 py-3 active:bg-amber-50"
              >
                <div className="text-[15px] font-extrabold text-slate-900">{relatedItem.name}</div>
                <p className="mt-1 line-clamp-2 text-[12px] leading-5 text-slate-500">{relatedItem.meaning}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
