import type { Metadata } from "next";
import Link from "next/link";
import { babyFoodRecipes, getRecipe, stageLabels } from "@/data/babyFood";
import { notFound } from "next/navigation";
import FeedbackPrompt from "@/components/common/FeedbackPrompt";

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

  const infoSections = [
    { title: "재료 손질 방법", items: recipe.prepSteps },
    { title: "재료 효능", description: recipe.nutritionBenefit },
    { title: "같이 먹일 때 주의할 음식", items: recipe.incompatibleFoods, tone: "danger" as const },
    { title: "질감 가이드", description: recipe.textureGuide },
    { title: "처음 먹일 때 팁", description: recipe.servingTip },
    { title: "조리 시 주의할 점", description: recipe.avoidNote, tone: "danger" as const },
    { title: "보관 팁", description: recipe.storageTip },
    { title: "한 번 더 체크", description: recipe.tip },
  ];

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mt-badge">{stageLabels[recipe.stage]}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{recipe.category}</span>
          </div>
          <h1 className="mt-title-xl mt-4">{recipe.title} 레시피</h1>
          <p className="mt-text-main mt-3">{recipe.summary}</p>
        </section>

        <div className="mt-app-stack">
          <section className="mt-app-stack-section">
            <h2 className="mt-app-section-title">재료</h2>
            <ul className="mt-app-list">
              {recipe.ingredients.map((item) => (
                <li key={item} className="mt-app-list-item">{item}</li>
              ))}
            </ul>
          </section>
          <section className="mt-app-stack-section">
            <h2 className="mt-app-section-title">만드는 법</h2>
            <ol className="mt-app-list">
              {recipe.steps.map((step, index) => (
                <li key={step} className="mt-app-list-item">
                  <span className="font-extrabold text-amber-700">{index + 1}. </span>{step}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="mt-app-stack">
          {infoSections.map((section) => (
            <section key={section.title} className="mt-app-stack-section">
              <h2 className={section.tone === "danger" ? "mt-app-section-title-danger" : "mt-app-section-title"}>{section.title}</h2>
              {section.description ? <p className="mt-app-section-desc">{section.description}</p> : null}
              {section.items ? (
                <ul className="mt-app-list">
                  {section.items.map((item) => (
                    <li key={item} className={section.tone === "danger" ? "mt-app-list-item-danger" : "mt-app-list-item"}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="space-y-3">
          <div className="text-[12px] font-extrabold text-amber-700">같은 단계의 다른 메뉴</div>
          <div className="mt-app-link-list">
            {related.map((item) => (
              <Link key={item.slug} href={`/baby-food/recipes/${item.slug}`} className="mt-app-link-item">
                <div className="mt-app-link-title">{item.title}</div>
                <div className="mt-app-link-desc">{item.category} · {stageLabels[item.stage]}</div>
              </Link>
            ))}
          </div>
        </section>
        <FeedbackPrompt />
      </div>
    </div>
  );
}
