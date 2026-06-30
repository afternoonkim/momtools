import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { qnaCategories, type QnaCategory, type QnaEntry } from "@/data/qna";
import { getQnaEntryFromDb, getRelatedQnaFromDb } from "@/lib/repositories/qna-db";
import { buildQnaLongtailContent, type QnaLongtailContent } from "@/lib/qna-longtail";
import { healthGuideItems } from "@/data/healthGuides";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";
import FeedbackPrompt from "@/components/common/FeedbackPrompt";

type Params = { category: string; slug: string };

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

const QNA_PUBLISHED_ON = "2026-04-09";
const QNA_UPDATED_ON = "2026-04-27";

const categoryObservationTitle: Record<QnaCategory, string> = {
  health: "이 증상을 볼 때 특히 먼저 확인할 점",
  growth: "이 발달 고민을 볼 때 먼저 확인할 점",
  behavior: "이 행동 고민을 볼 때 먼저 확인할 점",
};

const categoryObservationBody: Record<QnaCategory, string> = {
  health:
    "건강 관련 질문은 숫자 하나나 증상 하나만 보지 않는 것이 중요합니다. 같은 열이라도 아이가 웃고 노는지, 물이나 수유를 받는지, 숨쉬는 모습이 편한지에 따라 의미가 달라질 수 있습니다. 그래서 집에서는 증상이 시작된 시점, 체온 변화, 먹는 양, 소변 횟수, 잠든 시간처럼 진료에 바로 도움이 되는 정보를 함께 기록하는 것이 좋습니다.",
  growth:
    "성장과 발달은 하루 단위로 판단하기보다 흐름으로 보는 것이 중요합니다. 어떤 기술을 아직 못 한다고 해서 바로 문제가 있다고 보기보다, 최근 몇 주 사이에 새로운 시도가 있었는지, 이전 기술은 잘 유지되는지, 놀이와 상호작용이 어떤지까지 같이 봐야 합니다.",
  behavior:
    "행동 문제는 버릇 하나로 단순하게 설명되지 않는 경우가 많습니다. 같은 떼쓰기나 거부 행동도 배고픔, 졸림, 과도한 자극, 예고 없는 전환, 보호자 반응 패턴에 따라 더 심해질 수 있습니다. 그래서 언제, 어디서, 누구와 있을 때 자주 나타나는지 맥락을 함께 보는 것이 중요합니다.",
};

const categoryActionTitle: Record<QnaCategory, string> = {
  health: "집에서 먼저 해볼 수 있는 정리 방법",
  growth: "보호자가 기록해두면 좋은 내용",
  behavior: "상황을 더 악화시키지 않는 대응 팁",
};

const categoryActionBody: Record<QnaCategory, string> = {
  health:
    "증상이 애매할수록 해열제나 약을 반복해서 쓰기보다 아이가 얼마나 잘 마시고 소변을 보는지, 처짐은 없는지, 호흡이 편한지를 우선 보세요. 병원에 가게 되더라도 보호자가 정리한 기록이 있으면 훨씬 정확하게 상황을 전달할 수 있습니다.",
  growth:
    "성장 관련 고민은 하루 이틀 관찰만으로 결론내리기 어렵습니다. 아이가 최근에 새롭게 시도하는 행동, 성공한 순간, 어려워하는 상황, 식사와 수면 변화, 어린이집이나 집에서의 차이를 함께 기록하면 판단에 도움이 됩니다.",
  behavior:
    "행동 문제는 그 순간을 빨리 멈추게 하는 것보다 반복 패턴을 줄이는 방향이 더 중요합니다. 미리 예고하기, 짧고 일관된 말 사용하기, 자극을 줄이기, 성공 경험을 먼저 주기 같은 기본 원칙이 쌓이면 갈등 빈도를 줄이는 데 도움이 됩니다.",
};

const categoryWhenToSeekHelpTitle: Record<QnaCategory, string> = {
  health: "바로 상담을 고려해야 하는 경우",
  growth: "발달 상담을 고려하면 좋은 경우",
  behavior: "전문가 도움을 고려해야 하는 경우",
};

const categoryFaqExtra: Record<QnaCategory, { question: string; answer: string }> = {
  health: {
    question: "건강 Q&A는 어디까지 참고하고 언제 병원을 우선해야 하나요?",
    answer:
      "아래 내용은 보호자가 집에서 먼저 볼 관찰 포인트를 정리한 일반 참고용 정보입니다. 축 처짐, 탈수 의심, 호흡곤란, 경련, 혈변처럼 경고 신호가 있거나 보호자가 느끼기에 평소와 많이 다르면 온라인 정보보다 진료 상담을 먼저 고려하는 편이 안전합니다.",
  },
  growth: {
    question: "성장 Q&A에서 가장 중요한 것은 평균 수치인가요?",
    answer:
      "평균 수치만 보는 것보다 아이가 자기 흐름을 이어가고 있는지, 최근 몇 주와 몇 달 사이 새로운 기술이 늘고 있는지, 이전에 하던 기능이 유지되는지가 더 중요합니다. 급격한 후퇴나 보호자가 크게 걱정될 정도의 지연이 느껴지면 상담을 고려하세요.",
  },
  behavior: {
    question: "행동 문제는 훈육만 잘하면 해결되나요?",
    answer:
      "항상 그렇지는 않습니다. 행동은 기질, 수면 부족, 감각 예민함, 루틴 변화, 보호자 반응 패턴의 영향을 함께 받습니다. 훈육만 강화하기보다 언제 심해지고 언제 덜한지 패턴을 먼저 파악하는 접근이 더 도움이 되는 경우가 많습니다.",
  },
};

const relatedLinks: Record<QnaCategory, RelatedLink[]> = {
  health: [
    {
      href: "/tools/vaccine-schedule",
      label: "예방접종 일정 계산기",
      description: "접종 시기와 다음 일정을 정리할 때 함께 보기 좋습니다.",
    },
    {
      href: "/info/newborn",
      label: "신생아 정보",
      description: "수유, 체온, 수면, 배변처럼 초기 관찰 기준을 함께 확인할 수 있습니다.",
    },
    {
      href: "/tools/baby-age",
      label: "아기 개월수 계산기",
      description: "건강 증상을 볼 때 월령 기준을 먼저 확인하면 판단이 더 쉬워집니다.",
    },
  ],
  growth: [
    {
      href: "/tools/growth-percentile",
      label: "성장 백분위 계산기",
      description: "키와 몸무게 흐름을 수치로 확인하며 성장 Q&A와 함께 볼 수 있습니다.",
    },
    {
      href: "/tools/baby-age",
      label: "아기 개월수 계산기",
      description: "정확한 개월수를 확인한 뒤 발달 흐름을 비교할 때 편리합니다.",
    },
    {
      href: "/info/toddler",
      label: "유아 정보",
      description: "말, 놀이, 생활습관처럼 성장과 연결되는 일상 기준을 함께 볼 수 있습니다.",
    },
  ],
  behavior: [
    {
      href: "/info/toddler",
      label: "유아 정보",
      description: "생활 루틴, 자율성, 감정 조절처럼 행동과 연결되는 배경 정보를 함께 볼 수 있습니다.",
    },
    {
      href: "/checklists/daycare",
      label: "어린이집 준비 체크리스트",
      description: "분리불안, 생활 전환, 등원 적응처럼 행동 변화가 생기기 쉬운 시기에 참고하기 좋습니다.",
    },
    {
      href: "/checklists/newborn",
      label: "신생아 준비 체크리스트",
      description: "초기 생활 루틴과 환경 준비를 확인하며 행동 변화의 배경을 같이 살펴볼 수 있습니다.",
    },
  ],
};


function getRelatedHealthGuideLinks(item: QnaEntry) {
  const haystack = `${item.question} ${item.topic} ${item.summary} ${item.keywords.join(" ")}`.toLowerCase();
  return healthGuideItems
    .filter((guide) => {
      const candidates = [guide.slug, ...guide.keywords, ...guide.title.split(/[｜·\s]+/)];
      return candidates.some((candidate) => {
        const keyword = candidate.toLowerCase();
        return keyword.length >= 2 && haystack.includes(keyword);
      });
    })
    .slice(0, 4);
}

function buildFaqItems(
  item: QnaEntry,
  category: QnaCategory,
  content: QnaLongtailContent,
) {
  return [
    {
      question: item.question,
      answer: content.oneLineAnswer,
    },
    {
      question: `${item.topic} 상황에서 집에서 먼저 무엇을 보면 좋나요?`,
      answer: content.quickSummary.join(" "),
    },
    ...(item.simpleAction && item.simpleAction.length > 0
      ? [
          {
            question: `${item.topic}일 때 바로 해볼 수 있는 기본 대처는 무엇인가요?`,
            answer: item.simpleAction.join(" "),
          },
        ]
      : []),
    {
      question: `${item.topic} 상황에서 어떤 기록을 남기면 도움이 되나요?`,
      answer: content.recordItems.join(" "),
    },
    {
      question: `${item.topic} 상황에서 언제 상담을 더 서둘러야 하나요?`,
      answer: item.caution,
    },
    categoryFaqExtra[category],
  ];
}

export const runtime = "nodejs";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params;
  if (!(category in qnaCategories)) return {};
  const typed = category as QnaCategory;
  const item = await getQnaEntryFromDb(typed, slug);
  if (!item) return {};
  const content = buildQnaLongtailContent(item, typed);
  const url = `https://momtools.kr/qna/${category}/${slug}`;

  return {
    title: content.seoTitle,
    description: content.metaDescription,
    keywords: content.metaKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url,
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: QNA_PUBLISHED_ON,
      modifiedTime: QNA_UPDATED_ON,
    },
  };
}

export default async function QnaDetailPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  if (!(category in qnaCategories)) notFound();
  const typed = category as QnaCategory;
  const item = await getQnaEntryFromDb(typed, slug);
  if (!item) notFound();

  const content = buildQnaLongtailContent(item, typed);
  const related = await getRelatedQnaFromDb(typed, slug, 6);
  const relatedHealthGuides = typed === "health" ? getRelatedHealthGuideLinks(item) : [];
  const faqs = buildFaqItems(item, typed, content);
  const mobileQuickLinks = [
    { href: "#quick-answer", label: "결론" },
    { href: "#checkpoints", label: "먼저 볼 것" },
    { href: "#home-actions", label: "집에서 할 일" },
    { href: "#when-help", label: "상담 신호" },
    { href: "#related-tools", label: "연결 정보" },
  ];
  const pageUrl = `https://momtools.kr/qna/${typed}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: content.h1,
        description: content.metaDescription,
        inLanguage: "ko-KR",
        datePublished: QNA_PUBLISHED_ON,
        dateModified: QNA_UPDATED_ON,
        author: { "@type": "Organization", name: "MomTools" },
        publisher: { "@type": "Organization", name: "MomTools" },
        mainEntityOfPage: pageUrl,
        about: content.metaKeywords.slice(0, 8),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: "https://momtools.kr" },
          { "@type": "ListItem", position: 2, name: "육아 Q&A", item: "https://momtools.kr/qna" },
          {
            "@type": "ListItem",
            position: 3,
            name: qnaCategories[typed],
            item: `https://momtools.kr/qna/${typed}`,
          },
          { "@type": "ListItem", position: 4, name: item.question, item: pageUrl },
        ],
      },
    ],
  };

  const firstChecks = content.situationCards[0]?.points ?? [];
  const homeActions = content.situationCards[1]?.points ?? [];
  const comparePoints = content.situationCards[2]?.points ?? [];
  const emergencyMessage =
    typed === "health"
      ? "호흡이 힘들어 보이거나, 축 처짐·탈수 의심·경련·혈변처럼 평소와 다른 강한 신호가 보이면 온라인 정보를 더 찾기보다 진료 상담을 우선 고려해 주세요."
      : typed === "growth"
      ? "이전에 하던 행동이 갑자기 줄거나, 먹기·수면·상호작용 변화가 함께 이어지면 단순 개인차로만 보지 말고 상담을 고려해 주세요."
      : "아이 또는 주변 사람의 안전이 걱정될 정도로 행동 강도가 커지거나, 일상생활이 계속 흔들리면 전문가 상담을 고려해 주세요.";

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 md:text-sm" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link>
          <span>/</span>
          <Link href="/qna" className="hover:text-amber-700">육아 Q&amp;A</Link>
          <span>/</span>
          <Link href={`/qna/${typed}`} className="hover:text-amber-700">{qnaCategories[typed]}</Link>
        </nav>

        <section className="mt-page-hero">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mt-badge">{qnaCategories[typed]}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{item.topic}</span>
          </div>
          <h1 className="mt-title-xl mt-4">{content.h1}</h1>
          <p className="mt-text-main mt-3">{content.heroLead}</p>
          <div id="quick-answer" className="mt-mobile-note mt-4">
            <div className="font-extrabold text-slate-900">바로 결론</div>
            <p className="mt-1">{content.oneLineAnswer}</p>
          </div>
        </section>

        <nav className="sticky top-14 z-20 -mx-1 overflow-x-auto rounded-2xl border border-amber-100 bg-white/95 p-2 shadow-sm backdrop-blur md:static md:mx-0" aria-label="이 페이지 빠른 이동">
          <div className="flex min-w-max gap-2">
            {mobileQuickLinks.map((link) => (
              <a key={link.href} href={link.href} className="flex min-h-9 items-center rounded-full bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800 transition hover:bg-amber-100">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-app-stack" aria-label="핵심 확인 내용">
          <section id="checkpoints" className="mt-app-stack-section">
            <h2 className="mt-app-section-title">먼저 볼 기준</h2>
            <p className="mt-app-section-desc">하나의 증상만 보지 말고 아래 항목을 같이 확인해 주세요.</p>
            <ol className="mt-app-list">
              {firstChecks.map((point, index) => (
                <li key={`${point}-${index}`} className="mt-app-list-item">
                  <span className="font-extrabold text-amber-700">{index + 1}. </span>{point}
                </li>
              ))}
            </ol>
          </section>

          <section id="home-actions" className="mt-app-stack-section">
            <h2 className="mt-app-section-title">집에서 오늘 할 일</h2>
            <p className="mt-app-section-desc">상태를 안전하게 확인하고 상담 때 설명할 수 있게 정리하는 데 집중하세요.</p>
            <ul className="mt-app-list">
              {homeActions.map((point, index) => (
                <li key={`${point}-${index}`} className="mt-app-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section id="when-help" className="mt-app-stack-section">
            <h2 className="mt-app-section-title-danger">상담을 서두를 신호</h2>
            <p className="mt-app-section-desc text-rose-900">{item.caution}</p>
            <div className="mt-mobile-note mt-3">
              <strong className="text-slate-900">응급실을 고민할 신호</strong>
              <p className="mt-1">{emergencyMessage}</p>
            </div>
          </section>

          <section className="mt-app-stack-section">
            <h2 className="mt-app-section-title">피하면 좋은 대응</h2>
            <ul className="mt-app-list">
              {content.avoidItems.map((point, index) => (
                <li key={`${point}-${index}`} className="mt-app-list-item">{point}</li>
              ))}
            </ul>
          </section>

          <section className="mt-app-stack-section">
            <h2 className="mt-app-section-title">기록해두면 좋은 것</h2>
            <p className="mt-app-section-desc">{content.recordDescription}</p>
            <ul className="mt-app-list">
              {content.recordItems.map((point, index) => (
                <li key={`${point}-${index}`} className="mt-app-list-item">{point}</li>
              ))}
            </ul>
          </section>
        </div>

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <details className="mt-section-details">
          <summary className="mt-section-summary">
            <span>
              <span className="block text-base font-extrabold text-slate-900">자세한 설명 보기</span>
              <span className="mt-1 block text-sm leading-6 text-slate-500">검색 사용자를 위한 추가 설명은 접어서 화면을 줄였습니다.</span>
            </span>
            <span className="text-xs font-bold text-amber-700">열기</span>
          </summary>
          <div className="mt-detail-body space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {comparePoints.length > 0 ? (
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <strong className="text-slate-900">놓치기 쉬운 비교 기준</strong>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-600">
                  {comparePoints.map((point) => <li key={point}>• {point}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        </details>

        <section id="related-tools" className="space-y-3">
          <h2 className="mt-app-section-title">함께 볼 도구와 정보</h2>
          <div className="mt-app-link-list">
            {relatedLinks[typed].map((link) => (
              <Link key={link.href} href={link.href} className="mt-app-link-item">
                <div className="mt-app-link-title">{link.label}</div>
                <div className="mt-app-link-desc">{link.description}</div>
              </Link>
            ))}
            {relatedHealthGuides.map((guide) => (
              <Link key={guide.slug} href={`/health/${guide.slug}`} className="mt-app-link-item">
                <div className="mt-app-link-title">{guide.title}</div>
                <div className="mt-app-link-desc">{guide.summary}</div>
              </Link>
            ))}
          </div>
        </section>

        <details className="mt-section-details" id="faq">
          <summary className="mt-section-summary">
            <span>자주 묻는 질문</span>
            <span className="text-xs font-bold text-amber-700">열기</span>
          </summary>
          <div className="mt-detail-body space-y-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-[13px] font-extrabold leading-6 text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-[13px] leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </details>

        <section className="space-y-3">
          <h2 className="mt-app-section-title">같이 이어서 보면 좋은 질문</h2>
          <div className="mt-app-link-list">
            {related.slice(0, 5).map((entry) => (
              <Link key={entry.slug} href={`/qna/${typed}/${entry.slug}`} className="mt-app-link-item">
                <div className="text-[11px] font-bold text-amber-600">{entry.topic}</div>
                <div className="mt-app-link-title mt-1">{entry.question}</div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={`/qna/${typed}`} className="mt-chip-link">{qnaCategories[typed]} 전체 보기</Link>
            <Link href="/qna" className="mt-chip-link">Q&amp;A 홈</Link>
          </div>
        </section>
        <FeedbackPrompt />
      </div>
    </div>
  );
}
