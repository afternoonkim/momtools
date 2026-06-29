import type { Metadata } from "next";
import Link from "next/link";
import VaccineScheduleCalculatorClient from "@/app/cal/vaccine-schedule/VaccineScheduleCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/vaccine-schedule");

export const metadata: Metadata = {
  title: "예방접종 일정 계산기 | 월령 기준 접종 흐름 참고 | MomTools",
  description:
    "아기 월령을 기준으로 예방접종 흐름을 참고용으로 확인하고, 병원 예약 전에 함께 체크하면 좋은 포인트까지 정리한 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/vaccine-schedule") },
};


const nextStepItems = [
  { href: "/qna/health/after-vaccine-fever", label: "접종 후 열 Q&A", description: "접종 뒤 열이 날 때 먼저 볼 신호를 확인해요.", tag: "발열" },
  { href: "/health/fever", label: "아기 열 대처 가이드", description: "체온 기록과 상담 신호를 이어서 봐요.", tag: "건강" },
  { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "정확한 월령을 다시 확인해요.", tag: "월령" }
] as const;

const firstLookItems = [
  "이전 접종 기록과 다음 예약 시점을 함께 확인합니다.",
  "아이 컨디션, 발열, 최근 증상 여부를 접종 전 체크합니다.",
  "실제 접종 가능 여부와 간격은 병원 안내를 우선합니다."
] as const;

const cautionItems = [
  "열, 심한 기침, 처짐, 발진처럼 평소와 다른 증상이 있습니다.",
  "알레르기 이력이나 이전 접종 후 강한 반응이 있었습니다.",
  "접종이 늦어졌거나 여러 접종을 같은 날 하는지 헷갈립니다."
] as const;

const faqItems = [
  { question: "접종 일정이 조금 늦어지면 어떻게 보나요?", answer: "개별 상황에 따라 보완 접종이나 일정 조정이 가능할 수 있으므로 병원에 문의하는 편이 안전합니다." },
  { question: "여러 접종을 같은 날 할 수 있나요?", answer: "세부 시행 여부는 의료기관 판단이 중요합니다. 계산기는 큰 흐름을 이해하는 용도로 활용해 주세요." }
] as const;

const relatedItems = [
  { href: "/qna/health", title: "아이 건강 Q&A", description: "접종 후 반응과 상담 신호를 확인해요." },
  { href: "/tools/baby-age", title: "아기 개월수 계산기", description: "월령을 먼저 정확히 확인해요." },
  { href: "/info/newborn", title: "신생아 정보", description: "초기 건강 관리와 생활 루틴을 봐요." }
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">건강 일정 정리</span>
          <h1 className="mt-title-lg mt-4">예방접종 일정은 병원 예약 전 흐름을 보는 용도입니다</h1>
          <p className="mt-text-main mt-3">아기 월령을 기준으로 접종 흐름을 참고하고, 접종 전후 컨디션과 상담 신호를 함께 정리합니다.</p>
        </section>

        <VaccineScheduleCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <NextStepLinks
          eyebrow="접종 일정 다음에 볼 정보"
          title="접종일과 접종 후 관찰 포인트를 함께 보세요"
          description="월령, 컨디션, 발열 여부, 병원 상담 신호를 같이 정리해두면 예약 전후 부담이 줄어듭니다."
          items={[...nextStepItems]}
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="예방접종 일정 페이지는 참고용 계산 결과와 함께, 병원 예약 전에 무엇을 함께 확인하면 좋은지 부모 관점의 설명을 보완했습니다."
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
          <h2 className="mt-title-md">접종 전 문의가 필요한 경우</h2>
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
