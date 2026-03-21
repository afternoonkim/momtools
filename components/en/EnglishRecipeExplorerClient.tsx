"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export interface EnglishRecipe {
  slug: string;
  title: string;
  stage: "early" | "middle" | "late";
  category: string;
  ingredients: string[];
  summary: string;
  searchTerms: string[];
}

const stageLabels = {
  early: "First foods",
  middle: "Stage 2 foods",
  late: "Stage 3 foods",
} as const;

export default function EnglishRecipeExplorerClient({
  recipes,
  categories,
  stage,
}: {
  recipes: EnglishRecipe[];
  categories: string[];
  stage: EnglishRecipe["stage"];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const categoryMatch = category === "All" || recipe.category === category;
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
            <h2 className="mt-title-lg mt-4">Browse {stageLabels[stage].toLowerCase()} by ingredient and category</h2>
            <p className="mt-text-sub mt-3 max-w-3xl">
              This English version is organized around how US parents usually search: first foods, stage 2 combinations, finger foods, iron-rich options, and quick meal ideas.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-700">
            {recipes.length} recipes · {filtered.length} results
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_0.8fr]">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Search</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="mt-input" placeholder="Example: avocado, oatmeal, chicken, finger food" />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">Category</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-input">
              <option value="All">All</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((recipe) => (
          <Link key={recipe.slug} href={`/en/baby-food/recipes/${recipe.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{recipe.category}</span>
              <span className="text-xs text-slate-400">{stageLabels[recipe.stage]}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">{recipe.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">{recipe.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {recipe.ingredients.map((item) => (
                <span key={item} className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{item}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
