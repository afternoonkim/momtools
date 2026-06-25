import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { monthlyGuideItems } from "@/data/monthlyGuide";
import { getMonthlyGuideFromDb, getMonthlyGuidesFromDb } from "@/lib/repositories/guides-db";

export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return monthlyGuideItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getMonthlyGuideFromDb(slug);
  if (!item) return {};
  return {
    title: `${item.title} | MomTools`,
    description: item.summary,
    keywords: item.keywords,
    alternates: { canonical: `https://momtools.kr/monthly-guide/${item.slug}` },
  };
}

export default async function MonthlyGuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getMonthlyGuideFromDb(slug);
  if (!item) notFound();

  const allGuides = await getMonthlyGuidesFromDb();
  const otherItems = allGuides.filter((guide) => guide.slug !== item.slug).slice(0, 4);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/monthly-guide" className="text-sm font-semibold text-emerald-700">
        ← 월령별 로드맵으로 돌아가기
      </Link>

      <section className="mt-5 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
        <p className="text-sm font-bold text-emerald-700">{item.ageLabel} 육아 기준</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{item.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">{item.summary}</p>
        <p className="mt-4 rounded-2xl bg-white/80 p-4 text-sm leading-7 text-slate-600 ring-1 ring-emerald-100">
          {item.searchIntent}
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <InfoCard title="오늘 먼저 확인할 것" items={item.keyChecks} tone="emerald" />
        <InfoCard title="바로 상담이 필요한 신호" items={item.dangerSigns} tone="rose" />
      </section>

      <section className="mt-8 grid gap-5">
        <DetailSection title="발달 흐름" description="한 가지 행동만으로 빠르다·늦다를 판단하기보다 움직임, 반응, 먹고 자는 흐름을 함께 보세요." items={item.development} />
        <DetailSection title="수유·식사 기준" description="월령별 평균보다 우리 아이의 컨디션, 기저귀, 성장 흐름을 기준으로 보는 것이 안전합니다." items={item.feeding} />
        <DetailSection title="수면과 하루 루틴" description="잠은 발달, 수유, 활동량에 따라 흔들릴 수 있습니다. 완벽한 시간표보다 반복 가능한 순서가 중요합니다." items={item.sleep} />
        <DetailSection title="집에서 해볼 수 있는 놀이" description="비싼 장난감보다 보호자의 반응, 안전한 바닥 시간, 짧고 반복되는 상호작용이 더 도움이 됩니다." items={item.play} />
        <DetailSection title="부모가 기억하면 좋은 팁" description="아이를 비교하기보다 기록하고 관찰하면 불안은 줄고 상담은 더 정확해집니다." items={item.parentTips} />
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">부모가 자주 묻는 질문</h2>
        <div className="mt-5 space-y-4">
          {item.commonQuestions.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Q. {faq.question}</h3>
              <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl bg-emerald-50 p-6">
        <h2 className="text-xl font-bold text-slate-950">함께 확인하면 좋은 페이지</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          {item.relatedLinks.map((link) => (
            <Link key={link.href} className="rounded-full bg-white px-4 py-2 text-emerald-700 shadow-sm" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">다른 월령도 이어서 보기</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {otherItems.map((guide) => (
            <Link key={guide.slug} href={`/monthly-guide/${guide.slug}`} className="rounded-2xl bg-slate-50 p-4 transition hover:bg-emerald-50">
              <p className="text-xs font-semibold text-emerald-700">{guide.ageLabel}</p>
              <p className="mt-1 font-bold text-slate-900">{guide.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, items, tone }: { title: string; items: string[]; tone: "emerald" | "rose" }) {
  const color = tone === "rose" ? "text-rose-700 bg-rose-50 ring-rose-100" : "text-emerald-700 bg-emerald-50 ring-emerald-100";
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ring-1 ${color}`}>{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </div>
  );
}

function DetailSection({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-slate-50 p-4">{item}</li>
        ))}
      </ul>
    </section>
  );
}
