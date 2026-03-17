import type { Metadata } from "next";
import Link from "next/link";
import { getQnaEntry, getRelatedQna, qnaCategories, type QnaCategory } from "@/data/qna";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

export async function generateStaticParams() {
  const categories = Object.keys(qnaCategories) as QnaCategory[];
  const { qnaData } = await import('@/data/qna');
  return categories.flatMap((category) => qnaData[category].map((item) => ({ category, slug: item.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  if (!(category in qnaCategories)) return {};
  const item = getQnaEntry(category as QnaCategory, slug);
  if (!item) return {};
  return {
    title: `${item.question} | ${qnaCategories[category as QnaCategory]} Q&A`,
    description: `${item.summary} 일반 참고용 정보이며 아이 상태가 심하면 진료 상담이 우선입니다.`,
    alternates: { canonical: `https://momtools.kr/qna/${category}/${slug}` },
  };
}

export default async function QnaDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  if (!(category in qnaCategories)) notFound();
  const typed = category as QnaCategory;
  const item = getQnaEntry(typed, slug);
  if (!item) notFound();
  const related = getRelatedQna(typed, slug);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">{qnaCategories[typed]}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{item.topic}</span>
          </div>
          <h1 className="mt-title-xl mt-5">{item.question}</h1>
          <p className="mt-text-main mt-4">{item.summary}</p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 알아둘 점</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            이 페이지는 보호자가 집에서 먼저 볼 포인트를 정리한 일반 참고용 요약입니다. 특히 건강 관련 내용은 공공 건강정보에서 반복적으로 안내하는 관찰 원칙과 병원 상담 필요 신호를 중심으로 정리했으며, 정확한 진단이나 약 복용 판단을 대신하지 않습니다.
          </p>
        </section>

        <AdBlock placement="contentInline" format="rectangle" label="Q&A 상세 광고 영역" />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">보호자가 먼저 보면 좋은 내용</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>


        {typed === "health" && item.simpleAction && item.simpleAction.length > 0 ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">간단히 먼저 해볼 수 있는 대처</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {item.simpleAction.map((point) => (
                <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">집에서 체크할 포인트</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {item.checklist.map((point) => (
              <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">이럴 때는 빠르게 상담을 고려하세요</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.caution}</p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">같이 보면 좋은 질문</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((entry) => (
              <Link key={entry.slug} href={`/qna/${typed}/${entry.slug}`} className="mt-list-card">
                <div className="font-semibold text-slate-800">{entry.question}</div>
                <div className="mt-2 text-sm text-slate-500">{entry.summary}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
