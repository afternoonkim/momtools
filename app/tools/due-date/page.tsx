import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "@/app/cal/due-date/DueDateCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

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

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">임신 준비 흐름</span>
          <h1 className="mt-title-xl mt-5">출산 예정일과 현재 임신 주수를 먼저 확인해 보세요</h1>
          <p className="mt-text-main mt-4">
            출산 예정일 계산기는 마지막 생리 시작일을 기준으로 현재 임신 주수와 예정일을 빠르게 정리할 수 있는 도구입니다.
            날짜를 하나 확인하는 데서 끝내기보다, 지금 시기에 어떤 준비를 하면 좋은지 이어서 생각할 수 있게 만드는 것이 더 중요합니다.
          </p>
          <p className="mt-text-sub mt-4">
            계산 결과는 가정에서 참고하기 좋은 기준선으로 보시면 되고, 실제 진료 일정과 분만 시점 판단은 의료진 안내를 우선해 주세요.
          </p>
        </section>

        <DueDateCalculatorClient />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="예정일 계산 페이지는 부모가 날짜만 보는 데서 그치지 않고, 다음에 무엇을 준비하면 좋은지까지 함께 이해할 수 있도록 설명 구조를 정기적으로 점검합니다."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">이 계산기를 이렇게 활용하면 편합니다</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {points.map((item) => (
              <li key={item} className="rounded-2xl bg-amber-50/70 px-4 py-4 text-slate-700">{item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">결과를 해석할 때 기억할 점</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                출산 예정일은 임신 전체 흐름을 보는 기준으로는 매우 유용하지만, 실제 분만일을 정확하게 예측하는 숫자는 아닙니다.
                그래서 계산 결과를 본 뒤에는 지금이 임신 몇 주차인지, 다음 진료 전까지 무엇을 준비하면 좋은지, 출산 가방과 서류 준비는 언제 시작하면 좋은지처럼
                행동 계획으로 연결해 보는 것이 좋습니다.
              </p>
              <p>
                임신 초기에는 주수에 따라 검사 계획이나 생활 습관 조정이 달라질 수 있고, 중기 이후에는 태동 준비, 입원 준비, 출산 직전 체크리스트처럼 실제 행동이 많아집니다.
                날짜 하나를 확인했다면 그다음엔 준비 순서를 정리하는 흐름으로 이어가 보세요.
              </p>
            </div>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">이럴 때는 병원 기준을 먼저 보세요</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                생리 주기가 일정하지 않거나 마지막 생리 시작일이 정확하지 않은 경우, 배란 시점을 따로 추적하고 있는 경우, 시험관 시술이나 배아이식처럼 일반 계산과 다른 기준이 필요한 경우에는
                계산기보다 병원에서 안내한 예정일과 주수를 우선하는 편이 더 정확합니다.
              </p>
              <p>
                임신 중 출혈, 통증, 진한 입덧, 움직임 변화처럼 몸 상태와 직접 연결되는 문제는 날짜 계산보다 의료진 상담이 우선입니다.
                MomTools는 준비 흐름을 돕는 참고 도구로 활용해 주세요.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">자주 묻는 질문</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이어서 보기</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/info/pregnancy" className="mt-list-card">
              <div className="font-semibold text-slate-800">임신 정보 가이드</div>
              <div className="mt-2 text-sm text-slate-500">주수별로 어떤 흐름으로 준비하면 좋은지 설명형으로 확인할 수 있어요.</div>
            </Link>
            <Link href="/checklists/birth" className="mt-list-card">
              <div className="font-semibold text-slate-800">출산 준비 체크리스트</div>
              <div className="mt-2 text-sm text-slate-500">예정일을 확인했다면 실제 준비물을 체크박스로 정리해 보세요.</div>
            </Link>
            <Link href="/qna/health" className="mt-list-card">
              <div className="font-semibold text-slate-800">건강 Q&A</div>
              <div className="mt-2 text-sm text-slate-500">임신과 출산 직후 자주 묻는 건강 질문을 함께 읽을 수 있습니다.</div>
            </Link>
            <Link href="/tools/baby-age" className="mt-list-card">
              <div className="font-semibold text-slate-800">아기 개월수 계산기</div>
              <div className="mt-2 text-sm text-slate-500">출산 후에는 월령 계산으로 수유, 수면, 접종 흐름을 이어서 확인해 보세요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
