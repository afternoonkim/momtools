import type { Metadata } from "next";
import Link from "next/link";
import { babyFoodRecipes, getRecipe, stageLabels } from "@/data/en/babyFood";
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
    description: `${recipe.title} with ingredients, simple prep, texture notes, storage, and serving tips for babies.`,
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

        <ContentUpdateNote reviewedOn="2026-04-09" locale="en" />

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
            <h2 className="mt-title-md">How to make it</h2>
            <ol className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
              {recipe.howToMake.map((step, index) => (
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
            <h2 className="text-lg font-bold text-slate-800">Best age fit</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.ageFit}</p>
          </article>

          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Texture guide</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.textureGuide}</p>
          </article>

          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Serving tip</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.servingTip}</p>
          </article>

          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">Storage</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.storageTip}</p>
          </article>

          <article className="mt-card-soft p-6 md:p-8 md:col-span-2">
            <h2 className="text-lg font-bold text-slate-800">Safety note</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.safetyTip}</p>
          </article>
        </section>

        <RelatedContent
          locale="en"
          title="More meal ideas around the same feeding stage"
          description="Use nearby recipes to compare textures, serving ideas, and simple ingredient combinations for the same solids stage."
          items={related.map((item) => ({ href: `/en/baby-food/recipes/${item.slug}`, title: item.title, description: `${item.category} · ${stageLabels[item.stage]}` }))}
        />
      </div>
    </div>
  );
}
