import type { Metadata } from "next";
import {
  getRecipeCategories,
  getRecipesByStage,
  stageGuides,
  stageLabels,
  type EnglishBabyFoodStage,
} from "@/data/en/babyFood";
import EnglishRecipeExplorerClient from "@/components/en/EnglishRecipeExplorerClient";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

const stages: EnglishBabyFoodStage[] = ["early", "middle", "late"];

export async function generateStaticParams() {
  return stages.map((stage) => ({ stage }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stage: string }>;
}): Promise<Metadata> {
  const { stage } = await params;
  if (!stages.includes(stage as EnglishBabyFoodStage)) return {};
  const typed = stage as EnglishBabyFoodStage;

  return {
    title: `${stageLabels[typed]} | Baby food ideas and texture tips`,
    description: `${stageLabels[typed]} meal ideas with age guidance, texture tips, and easy ingredients for parents in the US.`,
    alternates: { canonical: `https://momtools.kr/en/baby-food/${stage}` },
  };
}

export default async function BabyFoodStagePage({
  params,
}: {
  params: Promise<{ stage: string }>;
}) {
  const { stage } = await params;
  if (!stages.includes(stage as EnglishBabyFoodStage)) notFound();

  const typedStage = stage as EnglishBabyFoodStage;
  const recipes = getRecipesByStage(typedStage);
  const categories = getRecipeCategories(typedStage);

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{stageLabels[typedStage]}</span>
          <h1 className="mt-title-xl mt-5">{stageLabels[typedStage]} meal ideas</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{stageGuides[typedStage].intro}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-amber-50 px-5 py-5">
              <h2 className="text-base font-bold text-slate-800">Texture</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[typedStage].texture}</p>
            </div>
            <div className="rounded-3xl bg-amber-50 px-5 py-5">
              <h2 className="text-base font-bold text-slate-800">What to work on</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[typedStage].focus}</p>
            </div>
            <div className="rounded-3xl bg-amber-50 px-5 py-5">
              <h2 className="text-base font-bold text-slate-800">Safety note</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[typedStage].caution}</p>
            </div>
          </div>
        </section>

        <EnglishRecipeExplorerClient recipes={recipes} categories={categories} stage={typedStage} />
        <AdBlock placement="contentInline" format="horizontal" label="Baby food stage guide" />
      </div>
    </div>
  );
}
