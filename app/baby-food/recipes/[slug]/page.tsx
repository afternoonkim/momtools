import type { Metadata } from "next";
import Link from "next/link";
import { babyFoodRecipes, getRecipe, stageLabels } from "@/data/babyFood";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

export async function generateStaticParams() {
  return babyFoodRecipes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} 레시피 | ${stageLabels[recipe.stage]}`,
    description: `${recipe.title} 재료손질, 만드는 법, 재료 효능, 같이 먹일 때 주의할 음식까지 정리한 MomTools 이유식 레시피 페이지입니다.`,
    alternates: { canonical: `https://momtools.kr/baby-food/recipes/${slug}` },
  };
}

export default async function BabyFoodRecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();
  const related = babyFoodRecipes.filter((item) => item.stage === recipe.stage && item.slug !== slug).slice(0, 4);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">{stageLabels[recipe.stage]}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{recipe.category}</span>
          </div>
          <h1 className="mt-title-xl mt-5">{recipe.title} 레시피</h1>
          <p className="mt-text-main mt-4">{recipe.summary}</p>
        </section>

        <AdBlock placement="contentInline" format="rectangle" label="이유식 상세 광고 영역" />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">재료</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {recipe.ingredients.map((item) => (
                <li key={item} className="rounded-2xl bg-amber-50 px-4 py-3">{item}</li>
              ))}
            </ul>
          </article>
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">만드는 법</h2>
            <ol className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
              {recipe.steps.map((step, index) => (
                <li key={step} className="rounded-2xl border border-amber-100 bg-white px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">STEP {index + 1}</div>
                  <div className="mt-2">{step}</div>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">재료 손질 방법</h2>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              {recipe.prepSteps.map((item) => (
                <li key={item} className="rounded-2xl bg-white px-4 py-3">{item}</li>
              ))}
            </ul>
          </article>
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">아이에게 기대할 수 있는 재료 효능</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.nutritionBenefit}</p>
          </article>
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">같이 먹일 때 주의할 음식</h2>
            <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              {recipe.incompatibleFoods.map((item) => (
                <li key={item} className="rounded-2xl bg-white px-4 py-3">{item}</li>
              ))}
            </ul>
          </article>
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">질감 가이드</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.textureGuide}</p>
          </article>
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">처음 먹일 때 팁</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.servingTip}</p>
          </article>
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">조리 시 주의할 점</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.avoidNote}</p>
          </article>
          <article className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-800">보관 팁</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.storageTip}</p>
          </article>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-800">한 번 더 체크</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{recipe.tip}</p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">같은 단계의 다른 메뉴</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/baby-food/recipes/${item.slug}`} className="mt-list-card">
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-2 text-sm text-slate-500">{item.category} · {stageLabels[item.stage]}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
