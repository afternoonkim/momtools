import type { Metadata } from "next";
import Link from "next/link";
import WeaningStartCalculatorClient from "@/app/cal/weaning-start/WeaningStartCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/tools/weaning-start");

export const metadata: Metadata = {
  title: "이유식 시작 계산기 | 시작 시기와 준비 순서 정리 | MomTools",
  description:
    "생년월일을 기준으로 이유식 시작 시기를 참고용으로 확인하고, 첫 재료·준비 도구·진행 순서까지 함께 살펴볼 수 있는 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/weaning-start") },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">이유식 준비 흐름</span>
          <h1 className="mt-title-xl mt-5">이유식은 시작 날짜보다 준비 순서를 함께 보는 것이 더 중요합니다</h1>
          <p className="mt-text-main mt-4">이유식 시작 계산기는 생년월일을 바탕으로 시작 시기를 참고용으로 확인하는 도구입니다. 다만 실제 시작은 개월수 하나로만 결정하기보다 아이의 앉는 자세, 목 가누기, 음식에 대한 관심, 소화 상태를 함께 살펴보는 편이 좋습니다.</p>
        </section>

        <WeaningStartCalculatorClient />

        <ContentUpdateNote publishedOn={pageDates.published} updatedOn={pageDates.updated} note="이유식 시작 페이지는 단순 날짜 계산이 아니라, 보호자가 실제 준비 순서를 이해할 수 있도록 단계별 설명과 연결 메뉴를 계속 다듬고 있습니다." />

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8"><h2 className="mt-title-lg">시작 전 체크 포인트</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base"><li className="rounded-2xl bg-amber-50/70 px-4 py-4">아이가 고개와 목을 비교적 안정적으로 가눌 수 있는지</li><li className="rounded-2xl bg-amber-50/70 px-4 py-4">먹는 모습을 보며 관심을 보이거나 입을 벌리는 반응이 있는지</li><li className="rounded-2xl bg-amber-50/70 px-4 py-4">한 번에 양을 많이 먹이기보다 천천히 재료와 질감을 늘릴 계획을 세웠는지</li></ul></article>
          <article className="mt-card p-6 md:p-8"><h2 className="mt-title-lg">부모가 많이 헷갈리는 부분</h2><div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base"><p>이유식은 빨리 시작하는 것이 목표가 아닙니다. 준비 신호가 충분하지 않은데 시기만 보고 시작하면 아이와 부모 모두 부담이 커질 수 있습니다.</p><p>반대로 시작 시기를 너무 늦추면 먹는 연습 타이밍을 놓칠 수 있으므로, 계산기로 월령을 확인한 뒤 실제 신호와 병원 상담을 함께 보시는 것이 좋습니다.</p></div></article>
        </section>

        <section className="mt-card p-6 md:p-8"><h2 className="mt-title-lg">처음 이유식을 시작할 때 자주 묻는 질문</h2><div className="mt-5 space-y-4"><article className="rounded-3xl border border-slate-100 bg-white p-5"><h3 className="text-base font-semibold text-slate-900">처음부터 하루 두 번 먹여도 되나요?</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">보통은 적은 양으로 천천히 시작해 아이 반응을 확인하는 편이 부담이 적습니다. 횟수와 양은 아이 반응과 병원 안내를 함께 보며 조절해 주세요.</p></article><article className="rounded-3xl border border-slate-100 bg-white p-5"><h3 className="text-base font-semibold text-slate-900">새 재료는 얼마나 천천히 늘리면 좋을까요?</h3><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">부모가 아이 반응을 확인할 수 있을 정도의 속도로 늘리는 것이 중요합니다. 새로운 재료를 한꺼번에 많이 추가하기보다 관찰 가능한 방식으로 천천히 진행해 주세요.</p></article></div></section>

        <section className="mt-card-soft p-6 md:p-8"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이어서 보기</div><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4"><Link href="/baby-food/early" className="mt-list-card"><div className="font-semibold text-slate-800">초기 이유식 메뉴</div><div className="mt-2 text-sm text-slate-500">베이스죽과 첫 재료 흐름을 이어서 볼 수 있습니다.</div></Link><Link href="/checklists/weaning" className="mt-list-card"><div className="font-semibold text-slate-800">이유식 준비 체크리스트</div><div className="mt-2 text-sm text-slate-500">도구와 준비 순서를 실제 항목으로 정리해 보세요.</div></Link><Link href="/info/weaning" className="mt-list-card"><div className="font-semibold text-slate-800">이유식 정보</div><div className="mt-2 text-sm text-slate-500">단계별 진행 흐름을 먼저 이해하기 좋습니다.</div></Link><Link href="/tools/baby-age" className="mt-list-card"><div className="font-semibold text-slate-800">아기 개월수 계산기</div><div className="mt-2 text-sm text-slate-500">월령 기준을 함께 보면 준비 계획을 세우기 편합니다.</div></Link></div></section>
      </div>
    </div>
  );
}
