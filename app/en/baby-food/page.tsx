import type { Metadata } from "next";
import Link from "next/link";
import { stageGuides, stageLabels, getRecipesByStage } from "@/data/en/babyFood";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "Baby Food Guide by Age | First Foods, Stage 2, Stage 3",
  description:
    "Practical baby food ideas by age with first foods, stage 2 combinations, stage 3 finger foods, and simple texture guidance for parents in the US.",
  alternates: { canonical: "https://momtools.kr/en/baby-food" },
};

const stages = ["early", "middle", "late"] as const;

export default function BabyFoodHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Baby food guide</span>
          <h1 className="mt-title-xl mt-5">Baby food by age</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Find simple meal ideas for first foods, thicker stage 2 combinations, and soft finger foods.
            This guide is built for how many US parents feed at home: spoon-fed purees, soft mashes,
            and baby-led self-feeding once the texture is safe.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {stages.map((stage) => (
            <Link
              key={stage}
              href={`/en/baby-food/${stage}`}
              className="mt-card p-6 transition hover:-translate-y-0.5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                {stageGuides[stage].age}
              </div>
              <h2 className="mt-3 text-xl font-bold text-slate-800">{stageLabels[stage]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{stageGuides[stage].intro}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">
                {getRecipesByStage(stage).length} meal ideas
              </div>
            </Link>
          ))}
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="Baby food guide" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            Quick feeding notes
          </div>
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
