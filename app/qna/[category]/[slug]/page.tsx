import type { Metadata } from "next";
import Link from "next/link";
import { getQnaEntry, getRelatedQna, qnaCategories, type QnaCategory } from "@/data/qna";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

type Params = { category: string; slug: string };

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

const categoryIntro: Record<QnaCategory, string> = {
  health:
    "아이 건강 Q&A는 열, 기침, 콧물, 구토, 설사처럼 보호자가 가장 먼저 검색하는 증상형 질문을 기준으로 정리했습니다. 병명을 단정하기보다 아이의 컨디션, 수분 섭취, 수면, 호흡 상태처럼 집에서 먼저 볼 수 있는 기준을 중심으로 설명합니다.",
  growth:
    "아이 성장 Q&A는 뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 월령별 발달 흐름을 이해하려는 보호자를 위한 설명형 페이지입니다. 한 번의 결과보다 최근 몇 주와 몇 달의 흐름을 함께 보는 관점으로 정리했습니다.",
  behavior:
    "아이 행동 Q&A는 잠투정, 떼쓰기, 편식, 분리불안, 예민함처럼 반복적으로 부딪히는 일상 고민을 보호자 관점에서 다시 풀었습니다. 문제 행동만 보지 않고 수면, 루틴, 자극, 배고픔, 피로 같은 배경 요인을 함께 살펴보는 방식으로 설명합니다.",
};

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
      "이 페이지는 보호자가 집에서 먼저 볼 관찰 포인트를 정리한 일반 참고용 정보입니다. 축 처짐, 탈수 의심, 호흡곤란, 경련, 혈변처럼 경고 신호가 있거나 보호자가 느끼기에 평소와 많이 다르면 온라인 정보보다 진료 상담을 먼저 고려하는 편이 안전합니다.",
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
  ],
  behavior: [
    {
      href: "/info/toddler",
      label: "유아 정보",
      description: "생활 루틴, 자율성, 감정 조절처럼 행동과 연결되는 배경 정보를 함께 볼 수 있습니다.",
    },
    {
      href: "/checklists/daycare-prep",
      label: "어린이집 준비 체크리스트",
      description: "분리불안, 생활 전환, 등원 적응처럼 행동 변화가 생기기 쉬운 시기에 참고하기 좋습니다.",
    },
  ],
};

function buildFaqItems(item: NonNullable<ReturnType<typeof getQnaEntry>>, category: QnaCategory) {
  return [
    {
      question: item.question,
      answer: `${item.summary} ${item.caution}`,
    },
    {
      question: `${item.topic} 상황에서 집에서 먼저 무엇을 보면 좋나요?`,
      answer: item.checklist.join(" "),
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
      question: `${item.topic} 상황에서 언제 상담을 더 서둘러야 하나요?`,
      answer: item.caution,
    },
    categoryFaqExtra[category],
  ];
}

export async function generateStaticParams() {
  const categories = Object.keys(qnaCategories) as QnaCategory[];
  const { qnaData } = await import("@/data/qna");
  return categories.flatMap((category) => qnaData[category].map((item) => ({ category, slug: item.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params;
  if (!(category in qnaCategories)) return {};
  const item = getQnaEntry(category as QnaCategory, slug);
  if (!item) return {};

  return {
    title: `${item.question} | ${qnaCategories[category as QnaCategory]} Q&A | MomTools`,
    description: `${item.summary} 집에서 먼저 볼 체크포인트, 간단한 대처, 상담이 필요한 신호까지 설명형 콘텐츠로 정리했습니다.`,
    keywords: item.keywords,
    alternates: { canonical: `https://momtools.kr/qna/${category}/${slug}` },
    openGraph: {
      title: `${item.question} | MomTools`,
      description: `${item.summary} 집에서 먼저 볼 기준과 상담이 필요한 신호를 함께 확인해보세요.`,
      url: `https://momtools.kr/qna/${category}/${slug}`,
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
    },
  };
}

export default async function QnaDetailPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  if (!(category in qnaCategories)) notFound();
  const typed = category as QnaCategory;
  const item = getQnaEntry(typed, slug);
  if (!item) notFound();
  const related = getRelatedQna(typed, slug);
  const faqs = buildFaqItems(item, typed);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">{qnaCategories[typed]}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{item.topic}</span>
          </div>
          <h1 className="mt-title-xl mt-5">{item.question}</h1>
          <p className="mt-text-main mt-4">{item.summary}</p>
          <div className="mt-6 rounded-3xl bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900">
            <div className="font-semibold">한눈에 보면</div>
            <p className="mt-2">
              {typed === "health"
                ? "열이나 기침처럼 눈에 띄는 증상 하나보다 아이가 잘 마시고, 잘 자고, 숨쉬는 모습이 편한지를 먼저 보는 것이 더 중요합니다."
                : typed === "growth"
                  ? "성장과 발달은 하루 차이보다 최근 흐름을 함께 볼 때 판단이 쉬워집니다."
                  : "행동 문제는 그 장면만 보지 말고 졸림, 배고픔, 과자극, 전환 상황 같은 배경을 함께 보는 것이 도움이 됩니다."}
            </p>
          </div>
        </section>

        <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-09" note="질문별 답변은 보호자가 집에서 먼저 볼 기준을 이해하기 쉽도록 정리하고, 실제 진료 판단이 필요한 부분은 보수적으로 안내하는 방향으로 점검하고 있습니다." />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">설명형 가이드</div>
          <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
            {categoryIntro[typed]}
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">보호자가 먼저 이해하면 좋은 핵심 설명</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">{categoryObservationTitle[typed]}</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">{categoryObservationBody[typed]}</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
            {item.checklist.map((point) => (
              <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">{point}</li>
            ))}
          </ul>
        </section>

        {(item.simpleAction && item.simpleAction.length > 0) || categoryActionBody[typed] ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">{categoryActionTitle[typed]}</h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">{categoryActionBody[typed]}</p>
            {item.simpleAction && item.simpleAction.length > 0 ? (
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {item.simpleAction.map((point) => (
                  <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">이 내용을 병원이나 상담에서 더 잘 설명하려면</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              증상이나 행동 자체보다 언제 시작됐는지, 하루 중 언제 심해지는지, 먹는 양과 잠은 어떤지,
              최근 달라진 환경이 있었는지를 함께 정리해두면 설명이 훨씬 쉬워집니다. 특히 같은 문제라도
              반복되는 시간대와 패턴이 보이면 원인을 좁히는 데 도움이 됩니다.
            </p>
            <p>
              짧게라도 기록해두면 보호자 스스로 불안을 줄이는 데도 도움이 됩니다. 오늘은 어땠는지,
              어제와 비교해 나아졌는지 악화됐는지, 아이가 힘들어하는 포인트가 무엇인지를 적어두면 다음
              판단이 한결 분명해집니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">{categoryWhenToSeekHelpTitle[typed]}</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">{item.caution}</p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">같이 보면 좋은 도구와 정보</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {relatedLinks[typed].map((link) => (
              <Link key={link.href} href={link.href} className="mt-list-card">
                <div className="font-semibold text-slate-800">{link.label}</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">{link.description}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-100 bg-slate-50 px-5 py-5">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">같이 이어서 보면 좋은 질문</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            비슷한 고민은 한 가지 질문으로 끝나지 않는 경우가 많습니다. 같은 카테고리 안에서
            이어지는 질문을 같이 보면 보호자가 패턴을 더 빨리 이해하고, 집에서 무엇을 먼저
            기록해야 하는지도 정리하기 쉬워집니다.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {related.map((entry) => (
              <Link key={entry.slug} href={`/qna/${typed}/${entry.slug}`} className="mt-list-card">
                <div className="font-semibold text-slate-800">{entry.question}</div>
                <div className="mt-2 text-sm text-slate-500">{entry.summary}</div>
                <div className="mt-3 text-sm font-semibold text-amber-700">이 질문도 이어서 보기</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href={`/qna/${typed}`} className="rounded-3xl border border-slate-100 bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">{qnaCategories[typed]} 전체 질문 보기</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">같은 주제의 질문을 한 번에 훑어보며 우리 아이 상황과 비슷한 고민을 비교해 보세요.</p>
            </Link>
            <Link href="/qna" className="rounded-3xl border border-slate-100 bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">육아 Q&amp;A 허브로 돌아가기</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">건강, 성장, 행동 카테고리를 비교하며 지금 필요한 질문으로 다시 이동할 수 있습니다.</p>
            </Link>
          </div>
        </section>
      

        <RelatedContent
          title="관련 페이지를 함께 보면 정리가 더 쉬워져요"
          description="같은 질문을 여러 방향에서 확인하면 집에서 무엇을 먼저 보고, 어떤 페이지를 다음으로 보면 좋은지 감을 잡기 쉬워집니다."
          items={relatedLinks[typed].map((item) => ({ href: item.href, title: item.label, description: item.description }))}
        />
      </div>
    </div>
  );
}
