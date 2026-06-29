import type { Metadata } from "next";
import Link from "next/link";
import GrowthPercentileCalculatorClient from "@/app/cal/growth-percentile/GrowthPercentileCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/growth-percentile");

export const metadata: Metadata = {
  title: "성장 백분위 계산기 | 키와 몸무게 흐름 참고 | MomTools",
  description:
    "키와 몸무게를 기준으로 현재 성장 백분위를 참고용으로 확인하고, 숫자를 어떻게 이해하면 좋은지 부모 관점으로 설명한 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/growth-percentile") },
};


const nextStepItems = [
  { href: "/qna/growth", label: "성장 Q&A", description: "키·몸무게·발달 질문을 이어서 확인해요.", tag: "성장" },
  { href: "/monthly-guide", label: "월령별 발달 가이드", description: "개월수별 생활과 놀이 흐름을 봐요.", tag: "월령" },
  { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "정확한 월령을 먼저 확인해요.", tag: "월령" }
] as const;

const firstLookItems = [
  "이전 기록과 비교해 성장 흐름이 이어지는지 봅니다.",
  "최근 식사량, 수면, 활동량, 컨디션 변화가 있었는지 확인합니다.",
  "측정 환경이 달랐다면 같은 기준으로 다시 기록해봅니다."
] as const;

const cautionItems = [
  "키나 몸무게 흐름이 짧은 기간에 눈에 띄게 달라졌습니다.",
  "식사량 감소, 처짐, 잦은 구토·설사처럼 생활 변화가 함께 있습니다.",
  "보호자가 보기에도 이전과 다른 변화가 반복됩니다."
] as const;

const faqItems = [
  { question: "백분위가 낮으면 바로 걱정해야 하나요?", answer: "숫자 하나만으로 판단하기보다 이전 기록과 비교해 흐름이 유지되는지 먼저 보는 편이 좋습니다." },
  { question: "집에서 잰 수치도 참고가 되나요?", answer: "대략적인 흐름을 보는 참고 자료로는 쓸 수 있지만, 중요한 판단은 병원 측정 기준을 함께 보는 편이 좋습니다." }
] as const;

const relatedItems = [
  { href: "/qna/growth", title: "아이 성장 Q&A", description: "발달과 성장 질문을 이어서 봐요." },
  { href: "/tools/baby-age", title: "아기 개월수 계산기", description: "월령 기준을 먼저 맞춰요." },
  { href: "/monthly-guide", title: "월령별 가이드", description: "개월수별 생활 흐름을 확인해요." }
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">성장 흐름 확인</span>
          <h1 className="mt-title-lg mt-4">성장 백분위는 한 번의 숫자보다 흐름으로 봅니다</h1>
          <p className="mt-text-main mt-3">키와 몸무게를 참고용으로 확인하고, 이전 기록·식사·수면·활동 변화를 함께 보도록 정리합니다.</p>
        </section>

        <GrowthPercentileCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <NextStepLinks
          eyebrow="결과 다음에 볼 정보"
          title="백분위 숫자만 보지 말고 성장 흐름을 같이 확인하세요"
          description="한 번의 수치보다 이전 기록과 생활 변화를 함께 보면 결과를 더 차분하게 해석할 수 있어요."
          items={[...nextStepItems]}
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="결과 숫자 하나에 너무 마음 졸이지 않도록, 해석 기준과 병원 상담이 필요한 경우까지 같이 안내해 드려요."
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
          <h2 className="mt-title-md">상담을 고려할 신호</h2>
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
