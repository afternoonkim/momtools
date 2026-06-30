import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import {
  familyHealthCategories,
  type FamilyHealthQnaCategory,
  type FamilyHealthQnaEntry,
} from "@/data/familyHealthQna";
import { getFamilyHealthEntryFromDb, getRelatedFamilyHealthFromDb } from "@/lib/repositories/family-health-qna-db";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";
import FeedbackPrompt from "@/components/common/FeedbackPrompt";

type Params = { category: string; slug: string };

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

const categoryObservationTitle: Record<FamilyHealthQnaCategory, string> = {
  mom: "엄마 건강을 볼 때 함께 확인할 점",
  dad: "아빠 건강을 볼 때 함께 확인할 점",
  postpartum: "임신·출산 후 건강을 볼 때 함께 확인할 점",
  family: "가족 생활 건강을 볼 때 함께 확인할 점",
  medicine: "약과 영양제를 확인할 때 먼저 볼 점",
  checkup: "검진 결과를 볼 때 함께 확인할 점",
};

const categoryObservationBody: Record<FamilyHealthQnaCategory, string> = {
  mom: "육아 중 엄마의 몸 상태는 수면 부족, 반복되는 자세, 식사 불규칙, 생리 변화, 스트레스와 함께 흔들릴 수 있습니다. 증상 하나만 보고 넘기기보다 언제부터 시작됐는지, 쉬면 나아지는지, 아이 돌봄 동작과 연결되는지 함께 살펴보세요.",
  dad: "아빠 건강은 피로와 스트레스를 참고 넘기다가 검진 수치나 통증으로 뒤늦게 드러나는 경우가 있습니다. 수면, 음주, 운동량, 체중 변화, 업무 스트레스, 가족력을 함께 기록하면 상담할 때 도움이 됩니다.",
  postpartum: "임신과 출산 후 회복은 개인차가 큽니다. 출혈, 통증, 수유, 감정 변화, 수면 부족이 함께 영향을 주기 때문에 정상인지 아닌지를 혼자 단정하지 말고 변화 흐름을 기록하는 것이 좋습니다.",
  family: "가족 생활 건강은 집안 환경과 함께 보는 것이 중요합니다. 같은 공간에서 지내는 가족에게 비슷한 증상이 있는지, 음식·환기·습도·수면 환경이 바뀌었는지 확인해 보세요.",
  medicine: "약과 영양제는 제품명보다 성분, 복용 대상, 복용 간격, 중복 여부가 중요합니다. 특히 가족끼리 약을 나누어 먹거나 예전에 남은 약을 다시 쓰는 것은 피하는 편이 안전합니다.",
  checkup: "검진 결과는 수치 하나만 보고 판단하기보다 이전 결과, 가족력, 생활 습관, 현재 증상과 함께 보는 것이 좋습니다. 결과지를 보관하고 상담 때 비교하면 변화 흐름을 이해하기 쉽습니다.",
};

const relatedLinks: Record<FamilyHealthQnaCategory, RelatedLink[]> = {
  mom: [
    { href: "/family-health-qna/postpartum", label: "임신·출산 후 건강 Q&A", description: "출산 후 회복과 연결되는 통증, 수면, 마음 건강을 함께 볼 수 있어요." },
    { href: "/qna/health", label: "아이 건강 Q&A", description: "아이 증상과 엄마 컨디션을 함께 확인해야 할 때 이어서 보기 좋아요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "진통제, 감기약, 영양제를 먹기 전 확인할 점을 볼 수 있어요." },
  ],
  dad: [
    { href: "/family-health-qna/checkup", label: "검진·병원 이용 Q&A", description: "혈압, 혈당, 간 수치처럼 검진 결과를 함께 정리할 수 있어요." },
    { href: "/family-health-qna/family", label: "가족 생활 건강 Q&A", description: "가족 전체의 감기, 장염, 생활 건강 질문을 이어서 볼 수 있어요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "복용 중인 약과 영양제 주의점을 함께 확인할 수 있어요." },
  ],
  postpartum: [
    { href: "/family-health-qna/mom", label: "엄마 건강 Q&A", description: "육아 중 반복되는 피로, 통증, 수면 문제를 함께 살펴볼 수 있어요." },
    { href: "/info/pregnancy", label: "임신 정보", description: "임신 중 변화와 준비 흐름을 함께 확인할 수 있어요." },
    { href: "/checklists/birth", label: "출산 준비 체크리스트", description: "출산 전후 준비 항목을 정리할 때 도움이 됩니다." },
  ],
  family: [
    { href: "/qna/health", label: "아이 건강 Q&A", description: "아이에게 생긴 열, 기침, 설사 같은 증상을 이어서 확인할 수 있어요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "가족이 함께 복용할 수 있는 약과 영양제 주의점을 볼 수 있어요." },
    { href: "/family-health-qna/checkup", label: "검진·병원 이용 Q&A", description: "증상을 병원에서 설명하기 위한 기록 방법을 볼 수 있어요." },
  ],
  medicine: [
    { href: "/family-health-qna/family", label: "가족 생활 건강 Q&A", description: "감기, 장염, 알레르기처럼 약 복용을 고민하기 전 증상 흐름을 볼 수 있어요." },
    { href: "/qna/health", label: "아이 건강 Q&A", description: "아이 약 복용은 월령과 체중 기준이 중요하므로 함께 확인해 보세요." },
    { href: "/family-health-qna/checkup", label: "검진·병원 이용 Q&A", description: "검진 결과와 복용 중인 약을 정리할 때 도움이 됩니다." },
  ],
  checkup: [
    { href: "/family-health-qna/dad", label: "아빠 건강 Q&A", description: "혈압, 간 수치, 체중처럼 검진과 연결되는 질문을 함께 볼 수 있어요." },
    { href: "/family-health-qna/mom", label: "엄마 건강 Q&A", description: "피로, 어지럼, 생리 변화처럼 검진 수치와 연결될 수 있는 질문을 볼 수 있어요." },
    { href: "/family-health-qna/medicine", label: "약·영양제 Q&A", description: "검진 결과에 따라 약과 영양제를 확인할 때 참고하기 좋아요." },
  ],
};

function buildFaqs(item: FamilyHealthQnaEntry, category: FamilyHealthQnaCategory) {
  return [
    { question: item.question, answer: item.summary },
    { question: `${item.topic} 상황에서 집에서 먼저 무엇을 확인하면 좋나요?`, answer: item.checklist.join(" ") },
    { question: `${item.topic} 문제를 상담할 때 어떤 기록이 도움이 되나요?`, answer: item.checklist[item.checklist.length - 1] ?? "증상 시작 시점과 변화 흐름을 적어두면 도움이 됩니다." },
    { question: `${familyHealthCategories[category].label}에서 언제 진료 상담을 먼저 고려해야 하나요?`, answer: item.caution },
  ];
}

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params;
  if (!(category in familyHealthCategories)) return {};
  const typed = category as FamilyHealthQnaCategory;
  const item = await getFamilyHealthEntryFromDb(typed, slug);
  if (!item) return {};
  const info = familyHealthCategories[typed];
  const title = `${item.question} | ${info.shortLabel} 가족건강 Q&A`;
  const description = `${item.summary.slice(0, 135)}...`;

  return {
    title,
    description,
    keywords: item.keywords,
    alternates: { canonical: buildCanonical(`/family-health-qna/${typed}/${slug}`) },
    openGraph: {
      title,
      description,
      url: buildCanonical(`/family-health-qna/${typed}/${slug}`),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: SITE_DATES.published,
      modifiedTime: SITE_DATES.updated,
    },
  };
}

export default async function FamilyHealthDetailPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  if (!(category in familyHealthCategories)) notFound();
  const typed = category as FamilyHealthQnaCategory;
  const item = await getFamilyHealthEntryFromDb(typed, slug);
  if (!item) notFound();

  const info = familyHealthCategories[typed];
  const related = await getRelatedFamilyHealthFromDb(typed, slug, 5);
  const faqs = buildFaqs(item, typed);
  const pageUrl = buildCanonical(`/family-health-qna/${typed}/${slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: item.question,
        description: item.summary,
        inLanguage: "ko-KR",
        datePublished: SITE_DATES.published,
        dateModified: SITE_DATES.updated,
        author: { "@type": "Organization", name: "MomTools" },
        publisher: { "@type": "Organization", name: "MomTools" },
        mainEntityOfPage: pageUrl,
        about: item.keywords.slice(0, 8),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 md:text-sm" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link>
          <span>/</span>
          <Link href={`/family-health-qna/${typed}`} className="hover:text-amber-700">{info.label}</Link>
        </nav>

        <section className="mt-page-hero">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mt-badge">{info.label}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{item.topic}</span>
          </div>
          <h1 className="mt-title-xl mt-4">{item.question}</h1>
          <p className="mt-text-main mt-3">{item.summary}</p>
          <div id="first-check" className="mt-mobile-note mt-4">
            <div className="font-extrabold text-slate-900">먼저 볼 핵심</div>
            <p className="mt-1">{item.checklist[0]}</p>
          </div>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <div className="mt-app-stack" aria-label="가족 건강 확인 내용">
          <section id="checkpoints" className="mt-app-stack-section">
            <h2 className="mt-app-section-title">지금 먼저 확인할 것</h2>
            <ul className="mt-app-list">
              {item.checklist.map((point) => (
                <li key={point} className="mt-app-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="mt-app-stack-section">
            <h2 className="mt-app-section-title">집에서 정리할 방법</h2>
            <ul className="mt-app-list">
              {item.simpleAction.map((point) => (
                <li key={point} className="mt-app-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section id="when-help" className="mt-app-stack-section">
            <h2 className="mt-app-section-title-danger">상담을 서두를 신호</h2>
            <p className="mt-app-section-desc text-rose-900">{item.caution}</p>
          </section>

          <section className="mt-app-stack-section">
            <h2 className="mt-app-section-title">{categoryObservationTitle[typed]}</h2>
            <p className="mt-app-section-desc">{categoryObservationBody[typed]}</p>
          </section>
        </div>

        <details className="mt-section-details">
          <summary className="mt-section-summary">
            <span>자세한 답변 보기</span>
            <span className="text-xs font-bold text-amber-700">열기</span>
          </summary>
          <div className="mt-detail-body space-y-3">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>

        <details className="mt-section-details" id="faq">
          <summary className="mt-section-summary">
            <span>자주 묻는 질문</span>
            <span className="text-xs font-bold text-amber-700">열기</span>
          </summary>
          <div className="mt-detail-body space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-sm font-extrabold leading-7 text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </details>

        <section id="related-tools" className="space-y-3">
          <h2 className="mt-app-section-title">같이 보면 좋은 도구와 정보</h2>
          <div className="mt-app-link-list">
            {relatedLinks[typed].map((link) => (
              <Link key={link.href} href={link.href} className="mt-app-link-item">
                <div className="mt-app-link-title">{link.label}</div>
                <div className="mt-app-link-desc">{link.description}</div>
              </Link>
            ))}
          </div>
        </section>

        {related.length > 0 ? (
          <section className="space-y-3">
            <h2 className="mt-app-section-title">같이 이어서 보면 좋은 질문</h2>
            <div className="mt-app-link-list">
              {related.map((entry) => (
                <Link key={`${entry.slug}-${entry.question}`} href={`/family-health-qna/${typed}/${entry.slug}`} className="mt-app-link-item">
                  <div className="text-[11px] font-bold text-amber-600">{entry.topic}</div>
                  <div className="mt-app-link-title mt-1">{entry.question}</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
        <FeedbackPrompt />
      </div>
    </div>
  );
}
