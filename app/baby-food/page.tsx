import type { Metadata } from "next";
import Link from "next/link";
import { stageGuides, stageLabels, getRecipesByStage } from "@/data/babyFood";

export const metadata: Metadata = {
  title: "이유식 메뉴 | 초기 중기 후기 레시피",
  description: "초기, 중기, 후기 이유식 메뉴를 단계별로 나누고 분류 필터와 검색으로 빠르게 찾을 수 있는 MomTools 이유식 허브입니다.",
  alternates: { canonical: "https://momtools.kr/baby-food" },
};

const stages = ["early", "middle", "late"] as const;

export default function BabyFoodHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">이유식 메뉴</span>
          <h1 className="mt-title-xl mt-5">초기·중기·후기 이유식, 집에서 한눈에 살펴보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            단계만 나누는 데서 끝나는 게 아니라, 각 단계에서 어떤 질감으로 시작하면 좋은지,
            무엇을 먼저 확인하면 좋은지, 어떤 분류에서 레시피를 찾으면 편한지까지 한 번에 볼 수 있어요.
          </p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이용 안내</div>
          <h2 className="mt-title-lg mt-3">정답표가 아니라, 우리 아이 이유식 흐름을 잡는 데 쓰는 참고 자료예요</h2>
          <p className="mt-text-main mt-3 max-w-4xl">
            이유식 시작 시기, 질감, 재료는 아이마다 발달 상태와 알레르기 가능성, 진료받은 의사 안내에 따라 달라질 수 있어요.
            여기서는 집에서 먼저 순서를 이해하고 메뉴 아이디어를 잡을 수 있게 도와드릴게요.
            실제 진행할 때는 소아청소년과 안내를 함께 반영해 조정해 보세요.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">단계별 흐름 한눈에</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">초기·중기·후기에 어떤 질감과 흐름이 자연스러운지 쉽게 파악할 수 있어요.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">메뉴를 빠르게 찾기</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">단계별 레시피 개수와 짧은 소개를 함께 보여드려, 지금 필요한 메뉴를 빠르게 골라볼 수 있어요.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">관련 페이지로 바로</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">이유식 시작 계산기, 체크리스트, FAQ와 이어 보며 준비 범위를 자연스럽게 넓힐 수 있어요.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/tools/weaning-start" className="rounded-full bg-amber-50 px-4 py-2 text-amber-800">이유식 시작 계산기</Link>
            <Link href="/checklists/weaning" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">이유식 준비 체크리스트</Link>
            <Link href="/faq" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">FAQ</Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {stages.map((stage) => (
            <Link key={stage} href={`/baby-food/${stage}`} className="mt-card p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Stage</div>
              <h2 className="mt-3 text-xl font-bold text-slate-800">{stageLabels[stage]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{stageGuides[stage].intro}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">현재 {getRecipesByStage(stage).length}개 메뉴</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이유식 메뉴 활용법</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {stages.map((stage) => (
              <div key={stage} className="rounded-3xl bg-white px-5 py-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-800">{stageLabels[stage]}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[stage].texture}</p>
                <p className="mt-3 text-sm leading-7 text-slate-500">{stageGuides[stage].focus}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
