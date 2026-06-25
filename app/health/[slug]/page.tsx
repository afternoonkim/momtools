import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { healthGuideItems, type HealthGuideItem } from "@/data/healthGuides";
import { getHealthGuideFromDb, getHealthGuidesFromDb } from "@/lib/repositories/guides-db";
import { getQnaEntriesForCategory } from "@/lib/repositories/qna-db";

export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return healthGuideItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getHealthGuideFromDb(slug);
  if (!item) return {};
  return {
    title: `${item.title} | MomTools`,
    description: item.summary,
    keywords: item.keywords,
    alternates: { canonical: `https://momtools.kr/health/${item.slug}` },
  };
}


async function getRelatedHealthQna(item: HealthGuideItem) {
  const keywords = new Set([
    item.slug,
    ...item.keywords,
    ...item.title.split(/[｜·\s]+/),
  ].map((word) => word.toLowerCase()).filter(Boolean));

  const healthQnaEntries = await getQnaEntriesForCategory("health");

  return healthQnaEntries
    .filter((entry) => {
      const haystack = `${entry.question} ${entry.topic} ${entry.summary} ${entry.keywords.join(" ")}`.toLowerCase();
      return [...keywords].some((keyword) => keyword.length >= 2 && haystack.includes(keyword));
    })
    .slice(0, 8);
}

export default async function HealthGuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getHealthGuideFromDb(slug);
  if (!item) notFound();
  const allGuides = await getHealthGuidesFromDb();
  const otherItems = allGuides.filter((guide) => guide.slug !== item.slug).slice(0, 4);
  const relatedQna = await getRelatedHealthQna(item);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/health" className="text-sm font-semibold text-rose-700">← 증상별 가이드로 돌아가기</Link>

      <section className="mt-5 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-orange-50 p-6 shadow-sm ring-1 ring-rose-100 sm:p-8">
        <p className="text-sm font-bold text-rose-700">증상별 확인 가이드</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{item.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">{item.summary}</p>
        <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <h2 className="text-base font-bold text-slate-950">먼저 결론부터 확인하세요</h2>
          <p className="mt-2 leading-7 text-slate-700">{item.quickConclusion}</p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <InfoCard title="집에서 먼저 확인할 기준" items={item.firstCheck} tone="rose" />
        <InfoCard title="집에서 도와줄 수 있는 방법" items={item.homeCare} tone="slate" />
        <InfoCard title="개월수별로 다르게 볼 점" items={item.ageCriteria} tone="amber" />
        <InfoCard title="바로 상담이 필요한 신호" items={item.dangerSigns} tone="red" />
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <DetailBox title="진료 전 기록하면 좋은 것" items={item.recordTips} />
        <DetailBox title="부모가 자주 놓치는 부분" items={item.commonMistakes} />
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">자주 묻는 질문</h2>
        <div className="mt-5 space-y-4">
          {item.faq.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Q. {faq.question}</h3>
              <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>


      {relatedQna.length > 0 ? (
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">이 증상과 함께 많이 보는 건강 Q&A</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            같은 증상이라도 아이 월령과 동반 증상에 따라 확인할 기준이 달라질 수 있어요. 아래 질문까지 이어서 보면 집에서 무엇을 먼저 봐야 할지 더 차분하게 정리할 수 있습니다.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {relatedQna.map((qna) => (
              <Link key={qna.slug} href={`/qna/health/${qna.slug}`} className="rounded-2xl bg-slate-50 p-4 transition hover:bg-rose-50">
                <p className="font-bold text-slate-900">{qna.question}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{qna.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-8 rounded-3xl bg-rose-50 p-6">
        <h2 className="text-xl font-bold text-slate-950">함께 보면 좋은 페이지</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          {item.relatedLinks.map((link) => (
            <Link key={link.href} className="rounded-full bg-white px-4 py-2 text-rose-700 shadow-sm" href={link.href}>{link.label}</Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">다른 증상도 이어서 확인하기</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {otherItems.map((guide) => (
            <Link key={guide.slug} href={`/health/${guide.slug}`} className="rounded-2xl bg-slate-50 p-4 transition hover:bg-rose-50">
              <p className="font-bold text-slate-900">{guide.title}</p>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{guide.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
        이 페이지는 부모가 증상을 관찰할 때 참고할 수 있는 일반 안내입니다. 아이가 평소와 다르거나 위험 신호가 보이면 가까운 의료기관, 소아청소년과, 응급실 또는 119 안내를 우선해 주세요.
      </section>
    </main>
  );
}

function InfoCard({ title, items, tone }: { title: string; items: string[]; tone: "rose" | "slate" | "amber" | "red" }) {
  const style = {
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
    slate: "bg-slate-50 text-slate-700 ring-slate-100",
    amber: "bg-amber-50 text-amber-800 ring-amber-100",
    red: "bg-red-50 text-red-700 ring-red-100",
  }[tone];
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ring-1 ${style}`}>{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </div>
  );
}

function DetailBox({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
        {items.map((item) => <li key={item} className="rounded-2xl bg-slate-50 p-4">{item}</li>)}
      </ul>
    </section>
  );
}
