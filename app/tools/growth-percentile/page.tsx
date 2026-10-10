import type { Metadata } from "next";
import Link from "next/link";
import GrowthPercentileCalculatorClient from "@/app/cal/growth-percentile/GrowthPercentileCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/growth-percentile");

export const metadata: Metadata = {
  title: "성장 백분위 확인 가이드 | 질병관리청 성장도표 기준 | MomTools",
  description:
    "아이의 성별·월령·키·몸무게를 정리한 뒤 질병관리청 공식 소아청소년 성장도표와 비교하도록 안내합니다. 임의 공식으로 백분위를 계산하지 않습니다.",
  alternates: { canonical: buildCanonical("/tools/growth-percentile") },
};

const nextStepItems = [
  { href: "/qna/growth", label: "성장 Q&A", description: "키·몸무게·발달 질문을 이어서 확인해요.", tag: "성장" },
  { href: "/monthly-guide", label: "월령별 발달 가이드", description: "개월수별 생활과 놀이 흐름을 봐요.", tag: "월령" },
  { href: "/tools/baby-age", label: "아기 개월수 계산기", description: "정확한 월령을 먼저 확인해요.", tag: "월령" },
] as const;

const firstLookItems = [
  "같은 측정 조건에서 이전 기록과 비교해 성장 흐름이 이어지는지 봅니다.",
  "키·몸무게는 성별과 정확한 월령에 맞는 공식 성장도표에서 확인합니다.",
  "최근 식사량, 수면, 활동량, 컨디션 변화가 있었는지 함께 확인합니다.",
] as const;

const cautionItems = [
  "키나 몸무게 증가가 멈추거나 감소하는 흐름이 반복됩니다.",
  "식사량 감소, 처짐, 잦은 구토·설사처럼 생활 변화가 함께 있습니다.",
  "이전 성장곡선 흐름에서 눈에 띄게 벗어나거나 보호자가 크게 걱정됩니다.",
] as const;

const faqItems = [
  { question: "MomTools가 백분위를 직접 계산하지 않는 이유는 무엇인가요?", answer: "정확한 백분위는 성별·월령별 공식 성장도표의 분포값을 사용해야 합니다. 단순 평균식이나 선형 추정식으로 만든 수치를 실제 백분위처럼 보여주면 오해가 생길 수 있어 공식 성장도표 확인을 우선하도록 바꿨습니다." },
  { question: "백분위가 낮으면 바로 걱정해야 하나요?", answer: "숫자 하나만으로 판단하기보다 이전 기록과 비교해 아이가 자기 성장곡선 흐름을 유지하는지 보는 것이 중요합니다. 성장 정체·감소나 다른 증상이 함께 있으면 진료 상담을 고려하세요." },
] as const;

const relatedItems = [
  { href: "/qna/growth", title: "아이 성장 Q&A", description: "발달과 성장 질문을 이어서 봐요." },
  { href: "/tools/baby-age", title: "아기 개월수 계산기", description: "월령 기준을 먼저 맞춰요." },
  { href: "/monthly-guide", title: "월령별 가이드", description: "개월수별 생활 흐름을 확인해요." },
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">공식 성장도표 기준 확인</span>
          <h1 className="mt-title-lg mt-4">성장 백분위는 임의 공식이 아니라 공식 성장도표로 확인합니다</h1>
          <p className="mt-text-main mt-3">성별·월령·키·몸무게를 정리한 뒤 질병관리청 소아청소년 성장도표와 비교하고, 한 번의 숫자보다 이전 기록과 이어지는 흐름을 함께 확인하세요.</p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <GrowthPercentileCalculatorClient />
        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <NextStepLinks
          eyebrow="결과 다음에 볼 정보"
          title="공식 성장도표와 성장 흐름을 같이 확인하세요"
          description="한 번의 수치보다 이전 기록과 생활 변화를 함께 보면 결과를 더 안전하게 해석할 수 있어요."
          items={[...nextStepItems]}
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="2026년 10월 안전성 재검토에서 임의 선형 추정식으로 성장 위치를 표시하던 로직을 제거했습니다. 현재 질병관리청이 제공하는 2017 소아청소년 성장도표를 공식 확인 기준으로 안내합니다."
        />

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">먼저 볼 기준</h2>
          <ul className="mt-result-list mt-4">
            {firstLookItems.map((item) => <li key={item} className="mt-result-list-item"><span className="mt-result-value">{item}</span></li>)}
          </ul>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">상담을 고려할 신호</h2>
          <ul className="mt-result-list mt-4">
            {cautionItems.map((item) => <li key={item} className="mt-result-list-item border-amber-100 bg-amber-50/60"><span className="mt-result-value text-amber-900">{item}</span></li>)}
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">공식 기준</div>
          <h2 className="mt-title-md mt-3">질병관리청 성장도표에서 최종 확인하세요</h2>
          <p className="mt-text-sub mt-3">질병관리청은 현재 2017 소아청소년 성장도표를 제공하고 있으며 2027 성장도표 개정을 준비하고 있습니다.</p>
          <a href="https://kdca.go.kr/kdca/5458/subview.do" target="_blank" rel="noreferrer" className="mt-chip-link mt-4 inline-flex">질병관리청 소아청소년 성장도표</a>
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
