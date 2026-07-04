import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { healthGuideItems, type HealthGuideItem } from "@/data/healthGuides";
import { getHealthGuideFromDb, getHealthGuidesFromDb } from "@/lib/repositories/guides-db";
import { getQnaEntriesForCategory } from "@/lib/repositories/qna-db";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import FeedbackPrompt from "@/components/common/FeedbackPrompt";

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
    .slice(0, 5);
}

export default async function HealthGuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getHealthGuideFromDb(slug);
  if (!item) notFound();
  const allGuides = await getHealthGuidesFromDb();
  const otherItems = allGuides.filter((guide) => guide.slug !== item.slug).slice(0, 4);
  const relatedQna = await getRelatedHealthQna(item);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <Link href="/health" className="text-sm font-bold text-rose-700">← 증상별 가이드</Link>

        <section className="mt-page-hero">
          <span className="mt-badge">증상별 확인 가이드</span>
          <h1 className="mt-title-xl mt-4">{item.title}</h1>
          <p className="mt-text-main mt-3">{item.summary}</p>
          <div className="mt-health-quick-conclusion mt-5 rounded-2xl bg-rose-50 px-4 py-4 text-sm leading-7 text-rose-950">
            <div className="font-extrabold text-rose-700">먼저 결론</div>
            <p className="mt-1">{item.quickConclusion}</p>
          </div>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <div className="mt-app-stack">
          <InfoSection title="바로 상담이 필요한 신호" items={item.dangerSigns.slice(0, 4)} tone="danger" />
          <InfoSection title="집에서 먼저 확인할 기준" items={item.firstCheck.slice(0, 4)} />
        </div>

        <details className="mt-section-details">
          <summary className="mt-section-summary"><span>집에서 도와줄 방법과 기록할 점</span><span className="text-xs font-bold text-amber-700">열기</span></summary>
          <div className="mt-detail-body space-y-4">
            <InfoSection title="집에서 도와줄 수 있는 방법" items={item.homeCare} />
            <InfoSection title="개월수별로 다르게 볼 점" items={item.ageCriteria} />
            <InfoSection title="진료 전 기록하면 좋은 것" items={item.recordTips} />
          </div>
        </details>

        <section className="mt-section-details" id="faq">
          <details>
            <summary className="mt-section-summary"><span>자주 묻는 질문</span><span className="text-xs font-bold text-amber-700">열기</span></summary>
            <div className="mt-detail-body">
          <h2 className="sr-only">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {item.faq.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-sm font-extrabold leading-7 text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
            </div>
          </details>
        </section>

        {relatedQna.length > 0 ? (
          <section className="space-y-3">
            <h2 className="mt-app-section-title">이 증상과 함께 많이 보는 Q&amp;A</h2>
            <div className="mt-app-link-list">
              {relatedQna.slice(0, 4).map((qna) => (
                <Link key={qna.slug} href={`/qna/health/${qna.slug}`} className="mt-app-link-item">
                  <div className="mt-app-link-title">{qna.question}</div>
                  <div className="mt-app-link-desc">{qna.summary}</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="space-y-3">
          <h2 className="mt-app-section-title">함께 보면 좋은 페이지</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.relatedLinks.slice(0, 4).map((link) => (
              <Link key={link.href} className="mt-chip-link" href={link.href}>{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="mt-app-section-title">다른 증상도 이어서 확인하기</h2>
          <div className="mt-app-link-list">
            {otherItems.map((guide) => (
              <Link key={guide.slug} href={`/health/${guide.slug}`} className="mt-app-link-item">
                <div className="mt-app-link-title">{guide.title}</div>
                <div className="mt-app-link-desc">{guide.summary}</div>
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
