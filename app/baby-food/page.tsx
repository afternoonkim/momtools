import type { Metadata } from "next";
import Link from "next/link";
import { stageGuides, stageLabels, getRecipesByStage } from "@/data/babyFood";
import AdBlock from "@/components/ad/AdBlock";

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
          <h1 className="mt-title-xl mt-5">초기, 중기, 후기 이유식을 사용자 흐름에 맞게 다시 정리했습니다</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            단계만 나누는 데서 끝나지 않고, 각 단계마다 어떤 질감으로 시작하면 좋은지, 무엇을 먼저 확인하면 좋은지,
            그리고 어떤 분류에서 레시피를 찾으면 편한지까지 한 번에 볼 수 있도록 구성했습니다.
          </p>
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

        <AdBlock placement="contentInline" format="horizontal" label="이유식 허브 광고 영역" />

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
