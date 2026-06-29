import type { Metadata } from "next";
import { getRecipeCategories, getRecipesByStage, stageGuides, stageLabels, type BabyFoodStage } from "@/data/babyFood";
import RecipeExplorerClient from "@/components/baby-food/RecipeExplorerClient";
import { notFound } from "next/navigation";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

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
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">{stageLabels[typedStage]}</span>
          <h1 className="mt-title-xl mt-4">{stageLabels[typedStage]} 메뉴와 레시피 찾기</h1>
          <p className="mt-text-main mt-3 max-w-3xl">{stageGuides[typedStage].intro}</p>
          <div className="mt-app-stack mt-4">
            <section className="mt-app-stack-section">
              <h2 className="mt-app-section-title">질감 기준</h2>
              <p className="mt-app-section-desc">{stageGuides[typedStage].texture}</p>
            </section>
            <section className="mt-app-stack-section">
              <h2 className="mt-app-section-title">먼저 볼 것</h2>
              <p className="mt-app-section-desc">{stageGuides[typedStage].focus}</p>
            </section>
            <section className="mt-app-stack-section">
              <h2 className="mt-app-section-title-danger">주의점</h2>
              <p className="mt-app-section-desc">{stageGuides[typedStage].caution}</p>
            </section>
          </div>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <RecipeExplorerClient recipes={recipes} categories={categories} stage={typedStage} />
      </div>
    </div>
  );
}
