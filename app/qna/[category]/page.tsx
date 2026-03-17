import type { Metadata } from "next";
import Link from "next/link";
import { getQnaEntries, qnaCategories, type QnaCategory } from "@/data/qna";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

const categoryDescriptions: Record<QnaCategory, string> = {
  health: "열, 기침, 콧물, 발진, 변 상태처럼 아플 때 가장 먼저 확인하고 싶은 질문을 모았습니다.",
  growth: "월령별 발달, 말, 걷기, 키와 몸무게처럼 성장 흐름을 확인할 때 참고하기 좋은 질문을 모았습니다.",
  behavior: "잠, 식사, 떼쓰기, 분리불안, 예민함처럼 매일 반복되는 행동 고민을 정리했습니다.",
};

export async function generateStaticParams() {
  return (Object.keys(qnaCategories) as QnaCategory[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in qnaCategories)) return {};
  const typed = category as QnaCategory;
  return {
    title: `${qnaCategories[typed]} Q&A | 질문 80개 모음`,
    description: `${qnaCategories[typed]}과 관련해 보호자가 먼저 확인할 포인트를 정리한 MomTools 질문형 육아 정보 페이지입니다.`,
    alternates: { canonical: `https://momtools.kr/qna/${category}` },
  };
}

export default async function QnaCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!(category in qnaCategories)) notFound();
  const typed = category as QnaCategory;
  const entries = getQnaEntries(typed);

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{qnaCategories[typed]}</span>
          <h1 className="mt-title-xl mt-5">{qnaCategories[typed]} 질문 {entries.length}개</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{categoryDescriptions[typed]}</p>
          <div className="mt-6 rounded-3xl bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-800">
            이 카테고리는 보호자가 지금 당장 무엇을 먼저 확인하면 좋은지에 초점을 맞춰 구성했습니다. 특히 건강 카테고리는 일반 건강정보 원칙을 기준으로 보수적으로 정리했기 때문에, 증상이나 행동이 심하거나 보호자가 느끼기에 평소와 많이 다르면 지켜보기보다 상담을 먼저 고려하세요.
          </div>
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="Q&A 카테고리 광고 영역" />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((item) => (
            <Link key={item.slug} href={`/qna/${typed}/${item.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{item.topic}</div>
              <h2 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
