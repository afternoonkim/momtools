import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { monthlyGuideItems } from "@/data/monthlyGuide";
import { getMonthlyGuideFromDb, getMonthlyGuidesFromDb } from "@/lib/repositories/guides-db";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import FeedbackPrompt from "@/components/common/FeedbackPrompt";

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
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <Link href="/monthly-guide" className="text-sm font-bold text-emerald-700">← 월령별 로드맵</Link>

        <section className="mt-page-hero">
          <span className="mt-badge">{item.ageLabel} 육아 기준</span>
          <h1 className="mt-title-xl mt-4">{item.title}</h1>
          <p className="mt-text-main mt-3">{item.summary}</p>
          <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-4 text-sm leading-7 text-emerald-950">
            {item.searchIntent}
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <div className="mt-app-stack">
          <InfoSection title="오늘 먼저 확인할 것" items={item.keyChecks} />
          <InfoSection title="바로 상담이 필요한 신호" items={item.dangerSigns} tone="danger" />
          <InfoSection title="발달 흐름" items={item.development} />
          <InfoSection title="수유·식사 기준" items={item.feeding} />
          <InfoSection title="수면과 하루 루틴" items={item.sleep} />
          <InfoSection title="집에서 해볼 수 있는 놀이" items={item.play} />
          <InfoSection title="부모가 기억하면 좋은 팁" items={item.parentTips} />
        </div>

        <section className="mt-section-details" id="faq">
          <details>
            <summary className="mt-section-summary"><span>부모가 자주 묻는 질문</span><span className="text-xs font-bold text-amber-700">열기</span></summary>
            <div className="mt-detail-body">
          <h2 className="sr-only">부모가 자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {item.commonQuestions.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-sm font-extrabold leading-7 text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
            </div>
          </details>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">함께 확인하면 좋은 페이지</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.relatedLinks.map((link) => (
              <Link key={link.href} className="mt-chip-link" href={link.href}>{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="mt-app-section-title">다른 월령도 이어서 보기</h2>
          <div className="mt-app-link-list">
            {otherItems.map((guide) => (
              <Link key={guide.slug} href={`/monthly-guide/${guide.slug}`} className="mt-app-link-item">
                <div className="text-xs font-bold text-emerald-700">{guide.ageLabel}</div>
                <div className="mt-1 font-extrabold text-slate-900">{guide.title}</div>
              </Link>
            ))}
          </div>
        </section>
        <FeedbackPrompt />
      </div>
    </div>
  );
}

function InfoSection({ title, items, tone = "normal" }: { title: string; items: string[]; tone?: "normal" | "danger" }) {
  const titleClass = tone === "danger" ? "mt-app-section-title-danger" : "mt-app-section-title";
  const itemClass = tone === "danger" ? "mt-app-list-item-danger" : "mt-app-list-item";
  return (
    <section className="mt-app-stack-section">
      <h2 className={titleClass}>{title}</h2>
      <ul className="mt-app-list">
        {items.map((item) => <li key={item} className={itemClass}>{item}</li>)}
      </ul>
    </section>
  );
}
