"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BabyFoodRecipe, BabyFoodStage } from "@/data/babyFood";
import { stageLabels } from "@/data/babyFood";

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
    <div className="space-y-5 md:space-y-6">
      <section className="mt-card p-4 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="mt-badge">{stageLabels[stage]}</span>
            <h2 className="mt-3 text-xl font-extrabold text-slate-900 md:text-2xl">분류와 검색으로 바로 찾기</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">재료명이나 메뉴명을 입력하면 관련 이유식만 추려서 볼 수 있습니다.</p>
          </div>
          <div className="shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
            {filtered.length}개
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-[1.4fr_0.8fr]">
          <label className="space-y-2">
            <span className="text-sm font-bold text-slate-700">이유식 검색</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-input"
              placeholder="예: 단호박, 두부, 닭고기"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-bold text-slate-700">분류</span>
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
      </section>

      <section className="mt-simple-list" aria-label={`${stageLabels[stage]} 이유식 레시피 목록`}>
        {filtered.map((recipe) => (
          <Link key={recipe.slug} href={`/baby-food/recipes/${recipe.slug}`} className="mt-simple-list-item">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">{recipe.category}</span>
              <span className="text-[11px] text-slate-400">{stageLabels[recipe.stage]}</span>
            </div>
            <h3 className="mt-2 text-base font-extrabold text-slate-900">{recipe.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">{recipe.summary}</p>
            <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
              {recipe.ingredients.slice(0, 6).map((item) => (
                <span key={item} className="shrink-0 rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-500">
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
