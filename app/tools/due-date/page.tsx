import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "@/app/cal/due-date/DueDateCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/due-date");

export const metadata: Metadata = {
  title: "출산 예정일 계산기 | 임신 주수와 출산 준비 흐름 확인 | MomTools",
  description:
    "마지막 생리 시작일을 기준으로 출산 예정일과 현재 임신 주수를 참고용으로 확인하고, 병원 일정과 출산 준비 흐름까지 함께 정리할 수 있는 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/due-date") },
};

const points = [
  "예정일은 분만 준비 시기를 잡는 기준으로 활용하기 좋지만 실제 출산일과 완전히 같지는 않을 수 있어요.",
  "주수 확인이 되면 산전검사, 진료 예약, 출산 가방 준비처럼 다음 행동을 더 구체적으로 정리하기 쉬워집니다.",
  "시험관 시술, 배란일 추정, 생리 주기 차이처럼 개인 조건이 다르면 병원 계산 기준이 더 중요할 수 있습니다.",
];

const faq = [
  {
    q: "출산 예정일 계산기는 어떤 상황에서 가장 유용한가요?",
    a: "임신 사실을 처음 확인했거나, 현재 주수와 예정일을 빠르게 정리하고 싶을 때 유용합니다. 진료 전에 대략적인 흐름을 파악하고 출산 준비 시점을 잡는 데도 도움이 됩니다.",
  },
  {
    q: "계산 결과가 병원에서 들은 주수와 조금 다를 수 있나요?",
    a: "네. 마지막 생리 시작일 기준 계산과 초음파 기반 판단은 차이가 날 수 있습니다. 주기 불규칙, 배란 시점 차이, 착상 시점 차이가 있으면 의료진 판단을 우선하는 편이 안전합니다.",
  },
  {
    q: "예정일을 확인한 뒤 바로 무엇을 보면 좋을까요?",
    a: "출산 준비 체크리스트, 임신 정보 페이지, 병원 진료 일정 메모를 함께 정리해 두면 좋습니다. 예정일 자체보다 지금 시점에 무엇을 준비해야 하는지가 더 중요합니다.",
  },
];


const nextStepItems = [
  { href: "/checklists/birth", label: "출산 준비 체크리스트", description: "입원 가방과 보호자 준비물을 정리해요.", tag: "준비" },
  { href: "/checklists/newborn", label: "신생아 준비 체크리스트", description: "퇴원 후 바로 필요한 물건을 확인해요.", tag: "신생아" },
  { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "출산 후 월령 기준 정보를 이어서 확인해요.", tag: "출산 후" }
] as const;

const firstLookItems = [
  "예정일은 실제 출산일을 확정하는 날짜가 아니라 준비 기준입니다.",
  "임신 주수, 검진 일정, 병원 안내를 함께 확인합니다.",
  "입원 가방은 막달에 한 번에 준비하기보다 필요한 항목부터 나눠 정리합니다."
] as const;

const cautionItems = [
  "복통, 출혈, 양수 의심, 태동 변화처럼 평소와 다른 신호가 있으면 계산보다 병원 문의가 우선입니다.",
  "고위험 임신이나 병원에서 별도 안내를 받은 경우에는 개인 일정 안내를 따릅니다.",
  "예정일이 가까워질수록 이동 동선과 보호자 연락 방법을 미리 정리합니다."
] as const;

const faqItems = [
  { question: "출산 예정일은 정확한 날짜인가요?", answer: "예정일은 참고 기준입니다. 실제 출산일은 개인 상태와 병원 판단에 따라 달라질 수 있습니다." },
  { question: "예정일을 알면 무엇부터 준비하면 좋나요?", answer: "입원 가방, 산모용품, 신생아 용품, 보호자 동선을 단계별로 나눠 준비하는 것이 좋습니다." },
  { question: "예정일이 지나면 바로 문제가 되나요?", answer: "상황마다 다르므로 병원 안내를 우선해야 합니다. 태동 변화나 통증 등 다른 신호가 있으면 바로 문의하세요." }
] as const;

const relatedItems = [
  { href: "/checklists/birth", title: "출산 준비 체크리스트", description: "입원 준비물을 빠르게 확인해요." },
  { href: "/checklists/newborn", title: "신생아 준비 체크리스트", description: "퇴원 후 필요한 항목을 정리해요." },
  { href: "/info/newborn", title: "신생아 정보", description: "출산 후 초기 수유·수면 흐름을 함께 봐요." }
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">출산 일정 정리</span>
          <h1 className="mt-title-lg mt-4">출산 예정일은 준비 일정을 나누는 기준입니다</h1>
          <p className="mt-text-main mt-3">마지막 생리 시작일이나 기준일로 예정일을 참고하고, 출산 전 준비·병원 상담·신생아 준비 순서를 함께 정리합니다.</p>
        </section>

        <DueDateCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <NextStepLinks
          eyebrow="예정일 다음에 볼 정보"
          title="예정일을 확인했다면 준비물을 단계별로 정리하세요"
          description="예정일은 확정 날짜가 아니라 준비 순서를 잡는 기준으로 보면 부담이 줄어듭니다."
          items={[...nextStepItems]}
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="출산 예정일은 실제 출산일과 달라질 수 있으므로, 준비 순서를 나누는 기준으로 활용하도록 설명을 정리했습니다."
        />

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">먼저 볼 기준</h2>
          <ul className="mt-result-list mt-4">
            {firstLookItems.map((item) => (
              <li key={item} className="mt-result-list-item">
                <span className="mt-result-value">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">상담이 먼저인 경우</h2>
          <ul className="mt-result-list mt-4">
            {cautionItems.map((item) => (
              <li key={item} className="mt-result-list-item border-amber-100 bg-amber-50/60">
                <span className="mt-result-value text-amber-900">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="mt-section-details">
                <summary className="mt-section-summary">{item.question}</summary>
                <p className="mt-detail-body">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이어서 보기</div>
          <div className="mt-result-list mt-4">
            {relatedItems.map((item) => (
              <Link key={item.href} href={item.href} className="mt-list-card">
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-1 text-sm leading-6 text-slate-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
