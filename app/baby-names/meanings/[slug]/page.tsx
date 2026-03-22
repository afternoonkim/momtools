import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { meaningPureKoreanNames, getKoreanNameBySlug } from "@/data/koreanNames";

export function generateStaticParams() {
  return meaningPureKoreanNames.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getKoreanNameBySlug(slug);
  if (!item) return { title: "이름을 찾을 수 없습니다" };
  return {
    title: `${item.name} 이름 뜻`,
    description: `${item.name} 이름의 뜻과 느낌, 부모가 함께 체크하면 좋은 포인트를 정리했습니다.`,
  };
}

export default async function KoreanNameMeaningDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getKoreanNameBySlug(slug);
  if (!item) notFound();
  const related = meaningPureKoreanNames.filter((name) => name.slug !== item.slug).slice(0, 6);
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <nav className="text-sm text-slate-500">
          <Link href="/baby-names/meanings" className="hover:text-slate-700">한글 이름 뜻 모음</Link>
          <span className="mx-2">/</span>
          <span>{item.name}</span>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">순우리말 이름</span>
          <h1 className="mt-title-xl mt-5">{item.name}</h1>
          <p className="mt-text-main mt-5 max-w-3xl">
            {item.name}은(는) {item.meaning.replace(/라는 뜻$/, "")}의 이미지를 담은 순우리말 이름입니다.
            이름을 볼 때는 뜻뿐 아니라 실제로 자주 불렀을 때의 발음, 성과 붙였을 때의 자연스러움, 가족이 느끼는 인상까지 함께 살펴보는 것이 좋습니다.
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">이름의 핵심 뜻</h2>
          <p className="mt-text-main mt-4">{item.meaning}</p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">이 이름이 주는 느낌</h2>
          <p className="mt-text-sub mt-4 leading-8">
            순우리말 이름은 한글 그대로 읽었을 때의 소리감과 분위기가 중요한 편입니다. {item.name}은(는) 비교적 부드럽게 불리고,
            자연스럽고 따뜻한 이미지를 주는 이름으로 참고하기 좋습니다.
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">이름을 정할 때 함께 체크할 점</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>성과 붙였을 때 발음이 너무 길거나 어색하지 않은지</li>
            <li>가족이 실제로 자주 부르기 쉬운 이름인지</li>
            <li>또래 이름과 비교했을 때 너무 낯설거나 지나치게 흔하지는 않은지</li>
            <li>이름 뜻이 부모가 바라는 이미지와 잘 맞는지</li>
          </ul>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">비슷한 분위기의 추천 이름</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {related.map((relatedItem) => (
              <Link key={relatedItem.slug} href={`/baby-names/meanings/${relatedItem.slug}`} className="rounded-2xl border border-amber-100 bg-white p-5 transition hover:border-amber-200 hover:shadow-sm">
                <div className="text-lg font-bold text-slate-800">{relatedItem.name}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{relatedItem.meaning}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
