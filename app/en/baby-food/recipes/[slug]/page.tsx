import type { Metadata } from "next";
import { babyFoodRecipes, getRecipe, stageGuides, stageLabels } from "@/data/en/babyFood";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export async function generateStaticParams() {
  return babyFoodRecipes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};

  return {
    title: `${recipe.title} | ${stageLabels[recipe.stage]}`,
    description: `${recipe.title} with ingredients, preparation guidance, texture notes, storage, and serving reminders for babies.`,
    alternates: { canonical: `https://momtools.kr/en/baby-food/recipes/${slug}` },
  };
}

export default async function BabyFoodRecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const related = babyFoodRecipes
    .filter((item) => item.stage === recipe.stage && item.slug !== slug)
    .slice(0, 4);

  const stageGuide = stageGuides[recipe.stage];
  const preparationSteps = recipe.howToMake;

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">{stageLabels[recipe.stage]}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">
              {recipe.category}
            </span>
          </div>
          <h1 className="mt-title-xl mt-5">{recipe.title}</h1>
          <p className="mt-text-main mt-4">{recipe.summary}</p>
        </section>

        <ContentUpdateNote reviewedOn="2026-10-18" locale="en" />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">Ingredients</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {recipe.ingredients.map((item) => (
                <li key={item} className="rounded-2xl bg-amber-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">Prepare it safely</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              These are ingredient-specific safety checkpoints, not a tested recipe with fixed quantities or cooking times. Use a food thermometer for meat, poultry, fish, eggs, and reheated leftovers; follow the current USDA temperatures.
            </p>
            <ol className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
              {preparationSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-2xl border border-amber-100 bg-white px-4 py-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                    Step {index + 1}
                  </div>
                  <div className="mt-2">{step}</div>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Typical stage</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{stageGuide.age}</p>
          </article>

          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Texture guide</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{stageGuide.texture}</p>
          </article>

          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Serving reminder</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Start with a small amount, let your baby set the pace, and change the texture or piece size when the food is harder to manage than expected.
            </p>
          </article>

          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Storage</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {recipe.storageTip}
            </p>
          </article>

          <article className="mt-card-soft p-6 md:p-8 md:col-span-2">
            <h2 className="text-lg font-bold text-slate-800">Safety note</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Check every bite for hard, round, sticky, dry, tough, or slippery pieces that are difficult to manage. Remove pits, bones, seeds, and firm skins when relevant, keep your baby upright and supervised, and follow your clinician&apos;s plan for known food allergies or feeding and swallowing concerns.
            </p>
          </article>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-800">Official food-safety references</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">Chicken, turkey, and reheated leftovers: 165°F (74°C). Ground beef: 160°F (71°C). Fish: 145°F (63°C). Check with a food thermometer. These temperatures are food-safety endpoints, not estimates of cooking time.</p>
          <div className="mt-3 space-y-2 text-sm">
            <a className="block underline" href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart" target="_blank" rel="noopener noreferrer">USDA safe minimum internal temperatures</a>
            <a className="block underline" href="https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html" target="_blank" rel="noopener noreferrer">CDC preparing infant solid foods</a>
            <a className="block underline" href="https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/choking-hazards.html" target="_blank" rel="noopener noreferrer">CDC choking hazards</a>
          </div>
        </section>

        <RelatedContent
          locale="en"
          title="More meal ideas around the same feeding stage"
          description="Use nearby recipes to compare ingredients and stage-appropriate textures for the same solids stage."
          items={related.map((item) => ({ href: `/en/baby-food/recipes/${item.slug}`, title: item.title, description: `${item.category} · ${stageLabels[item.stage]}` }))}
        />
      </div>
    </div>
  );
}
