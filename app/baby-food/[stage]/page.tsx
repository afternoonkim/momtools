import type { Metadata } from "next";
import { getRecipeCategories, getRecipesByStage, stageGuides, stageLabels, type BabyFoodStage } from "@/data/babyFood";
import RecipeExplorerClient from "@/components/baby-food/RecipeExplorerClient";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

const stages: BabyFoodStage[] = ["early", "middle", "late"];

export async function generateStaticParams() {
  return stages.map((stage) => ({ stage }));
}

export async function generateMetadata({ params }: { params: Promise<{ stage: string }> }): Promise<Metadata> {
  const { stage } = await params;
  if (!stages.includes(stage as BabyFoodStage)) return {};
  const typed = stage as BabyFoodStage;
  return {
    title: `${stageLabels[typed]} 메뉴 | 레시피 ${getRecipesByStage(typed).length}개`,
    description: `${stageLabels[typed]} 단계에서 참고하기 좋은 이유식 메뉴를 분류 필터와 검색으로 확인할 수 있는 MomTools 페이지입니다.`,
    alternates: { canonical: `https://momtools.kr/baby-food/${stage}` },
  };
}

export default async function BabyFoodStagePage({ params }: { params: Promise<{ stage: string }> }) {
  const { stage } = await params;
  if (!stages.includes(stage as BabyFoodStage)) notFound();
  const typedStage = stage as BabyFoodStage;
  const recipes = getRecipesByStage(typedStage);
  const categories = getRecipeCategories(typedStage);

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{stageLabels[typedStage]}</span>
          <h1 className="mt-title-xl mt-5">{stageLabels[typedStage]} 메뉴와 레시피 찾기</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{stageGuides[typedStage].intro}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-amber-50 px-5 py-5">
              <h2 className="text-base font-bold text-slate-800">질감 기준</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[typedStage].texture}</p>
            </div>
            <div className="rounded-3xl bg-amber-50 px-5 py-5">
              <h2 className="text-base font-bold text-slate-800">먼저 볼 것</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[typedStage].focus}</p>
            </div>
            <div className="rounded-3xl bg-amber-50 px-5 py-5">
              <h2 className="text-base font-bold text-slate-800">주의점</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[typedStage].caution}</p>
            </div>
          </div>
        </section>

        <RecipeExplorerClient recipes={recipes} categories={categories} stage={typedStage} />
        <AdBlock placement="contentInline" format="horizontal" label="단계별 이유식 광고 영역" />
      </div>
    </div>
  );
}
