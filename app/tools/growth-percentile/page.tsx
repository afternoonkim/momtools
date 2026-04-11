import type { Metadata } from "next";
import Link from "next/link";
import GrowthPercentileCalculatorClient from "@/app/cal/growth-percentile/GrowthPercentileCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/tools/growth-percentile");

export const metadata: Metadata = {
  title: "성장 백분위 계산기 | 키와 몸무게 흐름 참고 | MomTools",
  description:
    "키와 몸무게를 기준으로 현재 성장 백분위를 참고용으로 확인하고, 숫자를 어떻게 이해하면 좋은지 부모 관점으로 설명한 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/growth-percentile") },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10"><span className="mt-badge">성장 흐름 확인</span><h1 className="mt-title-xl mt-5">성장 백분위는 한 번의 숫자보다 흐름으로 보는 것이 중요합니다</h1><p className="mt-text-main mt-4">성장 백분위 계산기는 현재 키와 몸무게가 또래 기준에서 어느 정도 위치인지 참고용으로 확인할 수 있는 도구입니다. 다만 백분위는 높고 낮음으로 단순 평가하기보다, 이전 기록과 비교했을 때 꾸준한 흐름이 유지되는지 함께 보는 편이 훨씬 중요합니다.</p></section>

        <GrowthPercentileCalculatorClient />

        <ContentUpdateNote publishedOn={pageDates.published} updatedOn={pageDates.updated} note="성장 백분위 페이지는 부모가 결과 숫자에 과하게 불안해하지 않도록, 해석 기준과 병원 상담이 필요한 경우를 함께 설명하는 방향으로 정기 점검합니다." />

        <section className="grid gap-6 lg:grid-cols-2"><article className="mt-card p-6 md:p-8"><h2 className="mt-title-lg">결과를 볼 때 먼저 확인할 점</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base"><li className="rounded-2xl bg-amber-50/70 px-4 py-4">한 번의 측정값보다 이전 기록과 비교해 성장 흐름이 이어지는지</li><li className="rounded-2xl bg-amber-50/70 px-4 py-4">식사량, 수면, 활동량, 컨디션처럼 일상 변화가 최근에 있었는지</li><li className="rounded-2xl bg-amber-50/70 px-4 py-4">또래 평균과 다르더라도 아이의 개별 성장 곡선이 안정적인지</li></ul></article><article className="mt-card p-6 md:p-8"><h2 className="mt-title-lg">언제 상담을 고려하면 좋을까요?</h2><div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base"><p>성장 백분위가 한 번 낮게 나오거나 높게 나온 것만으로 바로 문제를 판단하기는 어렵습니다. 하지만 이전보다 급격한 변화가 반복되거나, 식사·수면·활동과 함께 눈에 띄는 변화가 있다면 병원 상담을 고려하는 편이 좋습니다.</p><p>측정 환경이나 시간에 따라 숫자가 달라질 수 있으므로, 기록을 꾸준히 남기고 같은 기준으로 비교하는 습관이 도움이 됩니다.</p></div></article></section>

        <section className="mt-card p-6 md:p-8"><h2 className="mt-title-lg">많이 묻는 질문</h2><div className="mt-5 space-y-4"><article className="rounded-3xl border border-slate-100 bg-white p-5"><h3 className="text-base font-semibold text-slate-900">백분위가 낮으면 바로 걱정해야 하나요?</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">백분위 숫자 하나만으로 바로 결론 내리기보다는, 이전 기록과 비교해 흐름이 유지되는지 먼저 보는 편이 좋습니다. 지속적인 변화가 느껴질 때 상담을 고려해 주세요.</p></article><article className="rounded-3xl border border-slate-100 bg-white p-5"><h3 className="text-base font-semibold text-slate-900">집에서 잰 수치도 참고가 되나요?</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">대략적인 흐름을 보는 참고 자료로는 활용할 수 있지만, 중요한 판단은 병원 측정 기준을 함께 보는 편이 정확합니다.</p></article></div></section>

        <section className="mt-card-soft p-6 md:p-8"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 메뉴</div><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4"><Link href="/qna/growth" className="mt-list-card"><div className="font-semibold text-slate-800">아이 성장 Q&A</div><div className="mt-2 text-sm text-slate-500">뒤집기, 걷기, 언어 발달처럼 성장 흐름 질문을 함께 볼 수 있습니다.</div></Link><Link href="/tools/baby-age" className="mt-list-card"><div className="font-semibold text-slate-800">아기 개월수 계산기</div><div className="mt-2 text-sm text-slate-500">월령을 함께 보면 성장 결과를 해석하기 더 쉽습니다.</div></Link><Link href="/info/toddler" className="mt-list-card"><div className="font-semibold text-slate-800">유아 정보</div><div className="mt-2 text-sm text-slate-500">생활 루틴과 활동 패턴을 함께 살펴보세요.</div></Link><Link href="/play" className="mt-list-card"><div className="font-semibold text-slate-800">놀이 자료 안내</div><div className="mt-2 text-sm text-slate-500">성장 단계에 맞는 집콕 활동 아이디어를 함께 확인할 수 있습니다.</div></Link></div></section>
      </div>
    </div>
  );
}
