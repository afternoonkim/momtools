import type { Metadata } from "next";
import Link from "next/link";
import { getNameMeaning, nameMeanings } from "@/data/babyNames";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

export async function generateStaticParams() {
  return nameMeanings.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNameMeaning(slug);
  if (!item) return {};
  return {
    title: `${item.name} 이름 뜻`,
    description: `${item.name} 한글 이름 뜻과 이름이 주는 느낌을 정리한 MomTools 이름 정보 페이지입니다.`,
    alternates: { canonical: `https://momtools.kr/baby-names/meanings/${slug}` },
  };
}

export default async function NameMeaningDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNameMeaning(slug);
  if (!item) notFound();
  const related = nameMeanings.filter((name) => name.slug !== slug).slice(0, 6);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">한글 이름 뜻</span>
          <h1 className="mt-title-xl mt-5">{item.name} 이름 뜻 정리</h1>
          <p className="mt-text-main mt-4">{item.description}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="mt-list-card"><div className="text-sm text-slate-400">첫 음절</div><div className="mt-1 text-xl font-bold text-slate-800">{item.firstSyllable}</div></div>
            <div className="mt-list-card"><div className="text-sm text-slate-400">둘째 음절</div><div className="mt-1 text-xl font-bold text-slate-800">{item.secondSyllable}</div></div>
          </div>
          <section className="mt-card-soft mt-6 p-6">
            <h2 className="text-lg font-bold text-slate-800">이 이름이 주는 느낌</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.vibe}</p>
          </section>
        </section>

        <AdBlock placement="contentInline" format="rectangle" label="이름 뜻 상세 광고 영역" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 이름</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((name) => (
              <Link key={name.slug} href={`/baby-names/meanings/${name.slug}`} className="rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                {name.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
