"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BabyFoodRecipe, BabyFoodStage } from "@/data/babyFood";
import { stageGuides, stageLabels } from "@/data/babyFood";

export default function RecipeExplorerClient({
  recipes,
  categories,
  stage,
}: {
  recipes: BabyFoodRecipe[];
  categories: string[];
  stage: BabyFoodStage;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const categoryMatch = category === "전체" || recipe.category === category;
      const searchMatch =
        !keyword ||
        recipe.searchTerms.some((term) => term.toLowerCase().includes(keyword)) ||
        recipe.ingredients.some((term) => term.toLowerCase().includes(keyword)) ||
        recipe.title.toLowerCase().includes(keyword);
      return categoryMatch && searchMatch;
    });
  }, [recipes, category, search]);

  return (
    <div className="space-y-6">
      <section className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mt-badge">{stageLabels[stage]}</span>
            <h2 className="mt-title-lg mt-4">분류와 검색으로 바로 찾는 {stageLabels[stage]} 레시피</h2>
            <p className="mt-text-sub mt-3 max-w-3xl">
              베이스죽, 채소 토핑, 단백질, 죽/덮밥, 핑거푸드처럼 실제 검색 흐름에 맞는 분류를 넣었습니다.
              재료명까지 함께 검색할 수 있어 원하는 메뉴를 더 빠르게 찾을 수 있습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-700">
            현재 {recipes.length}개 메뉴 · 검색 결과 {filtered.length}개
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_0.8fr]">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">이유식 검색</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-input"
              placeholder="예: 단호박, 두부, 닭고기, 핑거푸드"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">분류 선택</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-input">
              <option value="전체">전체</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 rounded-3xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
          <strong className="text-slate-800">이 단계에서 먼저 볼 것:</strong> {stageGuides[stage].focus}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/baby-food/recipes/${recipe.slug}`}
            className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                {recipe.category}
              </span>
              <span className="text-xs text-slate-400">{stageLabels[recipe.stage]}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">{recipe.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">{recipe.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {recipe.ingredients.map((item) => (
                <span key={item} className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
