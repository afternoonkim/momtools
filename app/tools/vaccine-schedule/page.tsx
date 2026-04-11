import type { Metadata } from "next";
import Link from "next/link";
import VaccineScheduleCalculatorClient from "@/app/cal/vaccine-schedule/VaccineScheduleCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/tools/vaccine-schedule");

export const metadata: Metadata = {
  title: "예방접종 일정 계산기 | 월령 기준 접종 흐름 참고 | MomTools",
  description:
    "아기 월령을 기준으로 예방접종 흐름을 참고용으로 확인하고, 병원 예약 전에 함께 체크하면 좋은 포인트까지 정리한 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/vaccine-schedule") },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">건강 일정 정리</span>
          <h1 className="mt-title-xl mt-5">예방접종 일정을 미리 정리하면 병원 예약이 훨씬 편해집니다</h1>
          <p className="mt-text-main mt-4">
            이 페이지는 아기 월령을 기준으로 접종 흐름을 참고용으로 정리할 수 있게 만든 계산기입니다.
            실제 접종 가능 여부와 접종 간격 판단은 병원과 공식 안내를 우선해야 하지만, 부모가 미리 흐름을 정리해 두면 예약과 준비가 훨씬 수월해집니다.
          </p>
        </section>

        <VaccineScheduleCalculatorClient />

        <ContentUpdateNote publishedOn={pageDates.published} updatedOn={pageDates.updated} note="예방접종 일정 페이지는 참고용 계산 결과와 함께, 병원 예약 전에 무엇을 함께 확인하면 좋은지 부모 관점의 설명을 주기적으로 보완합니다." />

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">이 계산기가 도와주는 부분</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              <li className="rounded-2xl bg-amber-50/70 px-4 py-4">월령 기준으로 어떤 접종을 놓치지 말아야 하는지 큰 흐름을 먼저 볼 수 있습니다.</li>
              <li className="rounded-2xl bg-amber-50/70 px-4 py-4">병원 방문 전에 지난 접종 기록과 다음 예약 시점을 정리하는 데 도움이 됩니다.</li>
              <li className="rounded-2xl bg-amber-50/70 px-4 py-4">접종 전후로 궁금한 발열, 발진, 컨디션 변화는 건강 Q&A와 함께 읽으면 이해가 쉬워집니다.</li>
            </ul>
          </article>
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">꼭 기억해야 할 점</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>접종 일정은 의료기관 운영 방식, 이전 접종 시점, 아이 컨디션, 백신 종류에 따라 실제 일정이 달라질 수 있습니다. 따라서 이 페이지 결과는 예약 전 참고용으로 보고 최종 일정은 병원 안내를 따라 주세요.</p>
              <p>발열, 기침, 피부 증상, 최근 복용 약, 알레르기 이력처럼 접종과 직접 연결되는 사항은 계산기보다 상담이 먼저입니다. 부모가 일정만 알고 있어도 준비 부담이 줄어드는 만큼, 흐름 정리에 활용해 보시면 좋습니다.</p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">부모가 많이 궁금해하는 점</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <div className="rounded-3xl border border-slate-100 bg-white p-5"><strong className="text-slate-900">접종 일정이 조금 늦어지면 어떻게 보나요?</strong><p className="mt-3">개별 상황에 따라 보완 접종이나 일정 조정이 가능할 수 있으므로 병원에 바로 문의하는 편이 안전합니다. 계산기 결과는 현재 흐름을 정리하는 데 활용해 주세요.</p></div>
            <div className="rounded-3xl border border-slate-100 bg-white p-5"><strong className="text-slate-900">여러 접종을 같은 날 하는지 궁금할 때도 참고할 수 있나요?</strong><p className="mt-3">세부 시행 여부는 의료기관 판단이 중요하지만, 이 페이지를 보면 어느 시기에 어떤 접종을 함께 보게 되는지 큰 흐름을 이해하는 데 도움이 됩니다.</p></div>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 정보</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/qna/health" className="mt-list-card"><div className="font-semibold text-slate-800">아이 건강 Q&A</div><div className="mt-2 text-sm text-slate-500">접종 후 반응이나 병원 상담이 필요한 상황을 함께 읽어 보세요.</div></Link>
            <Link href="/tools/baby-age" className="mt-list-card"><div className="font-semibold text-slate-800">아기 개월수 계산기</div><div className="mt-2 text-sm text-slate-500">월령을 먼저 정확히 확인하면 접종 흐름 정리가 더 쉬워집니다.</div></Link>
            <Link href="/checklists/newborn" className="mt-list-card"><div className="font-semibold text-slate-800">신생아 준비 체크리스트</div><div className="mt-2 text-sm text-slate-500">초기 육아 일정과 준비 항목을 함께 정리할 수 있습니다.</div></Link>
            <Link href="/info/newborn" className="mt-list-card"><div className="font-semibold text-slate-800">신생아 정보</div><div className="mt-2 text-sm text-slate-500">초기 건강 관리와 생활 루틴을 함께 확인해 보세요.</div></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
