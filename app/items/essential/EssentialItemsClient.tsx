"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, Search, ShoppingBag, ShieldCheck, Tags } from "lucide-react";
import {
  COUPANG_PARTNERS_DISCLOSURE,
  babyProductCategories,
  babyProductCategoryOptions,
  babyProductQnaItems,
  type BabyProductCategory,
} from "@/data/babyProductQna";

const recommendedSearches = ["휴대용 유모차", "젖병", "아기비데", "이유식 큐브", "빨대컵", "배변훈련"];

export default function EssentialItemsClient() {
  const [selectedCategory, setSelectedCategory] = useState<"전체" | BabyProductCategory>("전체");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    return babyProductQnaItems.filter((item) => {
      const categoryMatches = selectedCategory === "전체" || item.category === selectedCategory;
      const text = [
        item.productName,
        item.shortName,
        item.question,
        item.summary,
        item.kind,
        item.brand ?? "",
        babyProductCategories[item.category].label,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase();
      const queryMatches = !trimmed || text.includes(trimmed);

      return categoryMatches && queryMatches;
    });
  }, [query, selectedCategory]);

  const categoryLabel = selectedCategory === "전체" ? "전체" : babyProductCategories[selectedCategory].shortLabel;

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                육아용품 Q&A
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                육아용품은 질문으로 먼저 고르면 실패를 줄일 수 있어요
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                유모차, 젖병, 이유식용품, 목욕용품처럼 매일 쓰는 육아용품은 바로 제품만 보기보다
                “우리 집 상황에 정말 맞을까?”를 먼저 확인하는 편이 좋습니다. 이 페이지는 실제 상품을 바탕으로
                부모가 구매 전에 자주 묻는 질문과 확인 기준을 함께 정리했습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-4 text-sm leading-7 text-slate-700 lg:max-w-sm">
              <div className="font-bold text-slate-900">제휴 링크 안내</div>
              <p className="mt-2 font-semibold text-orange-800">{COUPANG_PARTNERS_DISCLOSURE}</p>
              <p className="mt-2 text-slate-600">
                구매 전 가격, 구성품, 배송, 교환·반품 조건은 판매처 페이지에서 다시 확인해 주세요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900"><ShieldCheck size={18} /> 먼저 상황 확인</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">아이 월령, 사용 빈도, 세척 방식, 집 보관 공간부터 확인하면 불필요한 구매를 줄일 수 있어요.</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900"><Tags size={18} /> 기준으로 비교</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">무게, 소재, 사용 가능 시기, 관리 편의성처럼 실제 생활에서 체감되는 기준을 함께 봅니다.</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-slate-900"><ShoppingBag size={18} /> 필요한 경우 이동</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">답변을 읽은 뒤 상품 정보와 후기를 확인할 수 있도록 상품정보 URL과 파트너스 링크를 연결했습니다.</p>
          </div>
        </section>

        <section className="mt-card-soft p-5 md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-sm lg:max-w-xl">
              <Search size={18} className="shrink-0 text-amber-600" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="예: 유모차, 젖병, 아기비데, 이유식, 빨대컵"
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                aria-label="육아용품 Q&A 검색"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {recommendedSearches.map((word) => (
                <button
                  key={word}
                  type="button"
                  onClick={() => setQuery(word)}
                  className="rounded-full border border-amber-100 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {[{ value: "전체" as const, label: "전체" }, ...babyProductCategoryOptions].map((category) => {
              const isActive = selectedCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setSelectedCategory(category.value)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "border-amber-200 bg-amber-100 text-amber-800"
                      : "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700",
                  ].join(" ")}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">육아용품 Q&A 목록</h2>
              <p className="mt-1 text-sm text-slate-500">
                {categoryLabel === "전체" ? `전체 ${filteredItems.length}개 질문` : `${categoryLabel} ${filteredItems.length}개 질문`}
              </p>
            </div>
            <p className="text-sm text-slate-500">상품 카드가 아니라, 구매 전 판단 기준을 먼저 볼 수 있는 질문형 페이지입니다.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <Link
                key={item.slug}
                href={`/items/essential/${item.slug}`}
                className="mt-card group flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {babyProductCategories[item.category].shortLabel}
                    </span>
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">{item.kind}</span>
                  </div>
                  <ChevronRight className="shrink-0 text-slate-300 transition group-hover:text-amber-600" size={18} />
                </div>

                <h3 className="mt-4 text-lg font-bold leading-[1.45] text-slate-900">{item.question}</h3>
                <p className="mt-2 text-xs font-semibold text-slate-500">{item.productName}</p>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600">{item.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.keywords.slice(0, 3).map((keyword) => (
                    <span key={keyword} className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">#{keyword}</span>
                  ))}
                </div>

                <div className="mt-auto pt-5 text-sm font-bold text-amber-700">구매 전 기준 보기</div>
              </Link>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="mt-card-soft p-8 text-center text-slate-500">
              조건에 맞는 질문이 없습니다. 다른 단어로 검색하거나 전체 보기로 돌아가면 다시 확인할 수 있어요.
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
