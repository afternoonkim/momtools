import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "./DueDateCalculatorClient";
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

const nextStepItems = [
  { href: "/checklists/birth", label: "출산 준비 체크리스트", description: "입원 가방과 보호자 준비물을 정리해요.", tag: "준비" },
  { href: "/checklists/newborn", label: "신생아 준비 체크리스트", description: "퇴원 후 바로 필요한 물건을 확인해요.", tag: "신생아" },
  { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "출산 후 월령 기준 정보를 이어서 확인해요.", tag: "출산 후" },
] as const;

const firstLookItems = [
  "예정일은 실제 출산일을 확정하는 날짜가 아니라 준비 기준입니다.",
  "마지막 생리 시작일은 임신 0주 0일로 보고 현재 주수를 계산합니다.",
  "병원에서 초음파나 시술 기준으로 예정일을 확정했다면 그 날짜를 우선합니다.",
] as const;

const cautionItems = [
  "복통, 출혈, 양수 의심, 태동 변화처럼 평소와 다른 신호가 있으면 계산보다 병원 문의가 우선입니다.",
  "시험관·배아이식 등 보조생식술 임신은 일반적인 마지막 생리일 계산보다 병원에서 정한 기준을 우선합니다.",
  "생리주기가 불규칙하거나 마지막 생리 시작일이 불확실하면 계산 결과의 오차가 커질 수 있습니다.",
] as const;

const faqItems = [
  { question: "출산 예정일은 정확한 날짜인가요?", answer: "예정일은 마지막 생리 시작일에서 280일을 더한 일반적인 참고 기준입니다. 실제 진료에서는 초음파와 임신 경과를 함께 보고 예정일을 확인할 수 있습니다." },
  { question: "마지막 생리 시작일은 임신 몇 주로 보나요?", answer: "일반적인 임신 주수 계산에서는 마지막 생리 시작일을 0주 0일로 봅니다. 7일이 지나면 1주 0일입니다." },
  { question: "계산 결과와 병원 예정일이 다르면 무엇을 따라야 하나요?", answer: "병원에서 임신 주수와 예정일을 확정해 안내받았다면 그 날짜를 우선해 주세요." },
] as const;

const relatedItems = [
  { href: "/checklists/birth", title: "출산 준비 체크리스트", description: "입원 준비물을 빠르게 확인해요." },
  { href: "/checklists/newborn", title: "신생아 준비 체크리스트", description: "퇴원 후 필요한 항목을 정리해요." },
  { href: "/info/newborn", title: "신생아 정보", description: "출산 후 초기 수유·수면 흐름을 함께 봐요." },
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">출산 일정 정리</span>
          <h1 className="mt-title-lg mt-4">출산 예정일은 준비 일정을 나누는 기준입니다</h1>
          <p className="mt-text-main mt-3">마지막 생리 시작일로 예정일과 현재 임신 주수를 참고하고, 출산 전 준비·병원 상담·신생아 준비 순서를 함께 정리합니다.</p>
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
          note="마지막 생리 시작일을 임신 0주 0일로 계산하고, 예정일은 280일 기준 참고값으로 정리했습니다. 병원에서 확정한 예정일이 있다면 그 날짜를 우선하세요."
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
