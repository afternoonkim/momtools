import type { Metadata } from "next";
import Link from "next/link";
import BabyAgeCalculatorClient from "@/app/cal/baby-age/BabyAgeCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/baby-age");

export const metadata: Metadata = {
  title: "아기 개월수 계산기 | 월령 해석과 육아 일정 정리 | MomTools",
  description:
    "생년월일을 기준으로 아기 개월수와 일수를 확인하고, 수면·수유·접종·이유식처럼 월령 기준으로 많이 찾는 육아 흐름까지 함께 살펴볼 수 있는 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/baby-age") },
};



const nextStepItems = [
  { href: "/monthly-guide", label: "월령별 발달 가이드", description: "수면·수유·놀이 흐름을 월령별로 확인해요.", tag: "월령" },
  { href: "/tools/vaccine-schedule", label: "예방접종 일정", description: "현재 개월수 기준으로 접종 흐름을 이어서 봐요.", tag: "건강" },
  { href: "/tools/weaning-start", label: "이유식 시작 시기", description: "시작 가능 시기와 준비 신호를 확인해요.", tag: "이유식" }
] as const;

const firstLookItems = [
  "생후 며칠인지와 몇 개월 차인지 함께 확인합니다.",
  "예방접종, 이유식, 성장처럼 월령 기준 안내가 필요한 정보를 연결합니다.",
  "다른 아이와 비교하기보다 내 아이의 이전 기록과 생활 흐름을 같이 봅니다."
] as const;

const cautionItems = [
  "개월수는 비교 점수가 아니라 필요한 정보를 고르는 기준입니다.",
  "월령이 애매한 시기에는 병원·보건소 안내 기준을 우선 확인합니다.",
  "발달이나 건강 걱정이 있으면 계산 결과보다 아이 상태와 상담 신호를 먼저 봅니다."
] as const;

const faqItems = [
  { question: "아기 개월수를 왜 정확히 확인해야 하나요?", answer: "예방접종, 이유식 시작, 발달 체크처럼 월령 기준으로 안내되는 정보가 많기 때문입니다." },
  { question: "개월수와 나이는 어떻게 다르게 보나요?", answer: "일상 나이보다 월령이 더 세밀합니다. 특히 생후 24개월 전후까지는 월령 차이가 생활 루틴과 발달 체크에 영향을 줄 수 있습니다." },
  { question: "계산 결과를 어디에 먼저 연결하면 좋을까요?", answer: "예방접종 일정, 이유식 시작 시기, 성장 백분위처럼 월령을 기반으로 해석하는 페이지와 함께 보는 것이 좋습니다." }
] as const;

const relatedItems = [
  { href: "/tools/vaccine-schedule", title: "예방접종 일정 계산기", description: "개월수 계산 뒤 바로 접종 흐름을 확인해요." },
  { href: "/tools/weaning-start", title: "이유식 시작 계산기", description: "월령을 확인했다면 이유식 시작 시기도 정리해요." },
  { href: "/tools/growth-percentile", title: "성장 백분위 계산기", description: "월령과 함께 보면 성장 결과를 해석하기 쉬워요." }
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">월령 기준 정리</span>
          <h1 className="mt-title-lg mt-4">아기 개월수는 다음 정보를 고르는 기준입니다</h1>
          <p className="mt-text-main mt-3">생년월일로 현재 월령을 확인하고, 예방접종·이유식·성장 흐름처럼 지금 바로 이어서 볼 정보를 정리합니다.</p>
        </section>

        <BabyAgeCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <NextStepLinks
          eyebrow="결과 다음에 볼 정보"
          title="개월수를 확인했다면 월령별 정보를 이어서 보세요"
          description="같은 한 살 전후라도 월령에 따라 접종, 이유식, 수면 흐름이 달라질 수 있어요."
          items={[...nextStepItems]}
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="월령 숫자만 보지 않고, 결과 아래에서 실제 육아 일정과 연결되는 정보까지 한 번에 이어서 살펴볼 수 있어요."
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
          <h2 className="mt-title-md">숫자보다 중요한 점</h2>
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
