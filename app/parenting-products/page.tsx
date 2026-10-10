import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import {
  getParentingProductGuideModifiedAt,
  getPublishedParentingProductGuides,
  type ParentingProductGuide,
} from "@/data/parentingProductGuides";
import { buildCanonical } from "@/lib/content-meta";
import { COUPANG_PARTNERS_DISCLOSURE } from "@/lib/coupang-partners";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata(): Metadata {
  const publishedGuides = getPublishedParentingProductGuides();
  const publishedKeywords = Array.from(
    new Set(
      publishedGuides.flatMap((guide) => [
        guide.shortTitle,
        ...guide.keywords.slice(0, 2),
      ]),
    ),
  ).slice(0, 80);

  return {
    title: "육아용품 가이드｜구매 전 선택 기준 | MomTools",
    description:
      "기저귀·젖병·카시트·이유식·수면·외출용품까지 실제 부모가 구매 전에 확인할 크기, 세척, 호환, 보관과 안전 기준을 정리한 MomTools 육아용품 가이드입니다.",
    keywords: [
      "육아용품 가이드",
      "신생아 용품",
      "육아용품 구매 전 체크",
      "아기용품 고르는 법",
      "이유식 용품",
      "수유 용품",
      "어린이집 준비물",
      ...publishedKeywords,
    ],
    alternates: { canonical: buildCanonical("/parenting-products") },
    openGraph: {
      title: "육아용품 가이드｜구매 전 선택 기준 | MomTools",
      description:
        "제품 순위보다 우리 집과 아이에게 맞는 크기, 세척, 호환, 보관과 안전 기준을 먼저 확인하는 육아용품 선택 가이드입니다.",
      url: buildCanonical("/parenting-products"),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "website",
    },
  };
}

function GuideRow({ guide }: { guide: ParentingProductGuide }) {
  return (
    <Link
      href={`/parenting-products/${guide.slug}`}
      className="group block border-b border-slate-100 px-1 py-5 last:border-b-0 md:px-2 md:py-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">{guide.category}</span>
          </div>
          <h2 className="mt-3 text-[17px] font-extrabold leading-7 text-slate-900 transition group-hover:text-amber-700 md:text-xl md:leading-8">
            {guide.title}
          </h2>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 md:line-clamp-2 md:leading-7">
            {guide.summary}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {guide.coupangKeywords.slice(0, 3).map((keyword) => (
              <span key={keyword} className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <ArrowRight className="mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-600" size={20} />
      </div>
    </Link>
  );
}

export default function ParentingProductsPage() {
  const guides = getPublishedParentingProductGuides();
  const pageUrl = buildCanonical("/parenting-products");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        name: "MomTools 육아용품 가이드",
        description: "제품 순위보다 사용 상황과 구매 전 확인 기준을 먼저 설명하는 육아용품 가이드입니다.",
        inLanguage: "ko-KR",
        mainEntity: guides.map((guide) => ({
          "@type": "Article",
          headline: guide.title,
          url: buildCanonical(`/parenting-products/${guide.slug}`),
          datePublished: guide.publishAt,
          dateModified: getParentingProductGuideModifiedAt(guide),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "육아용품 가이드", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <header className="mt-page-hero p-5 md:p-8">
          <div className="flex items-center gap-2 text-xs font-extrabold text-amber-700">
            <ShoppingBag size={16} /> 육아용품 가이드
          </div>
          <h1 className="mt-title-xl mt-3">사기 전에 우리 집에 맞는지 먼저 확인해요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            유명한 제품 순위보다 아이의 시기, 집에서 쓰는 방식, 세척과 보관처럼 실제 선택에 필요한 기준부터 확인해 보세요.
          </p>
        </header>

        <section className="mt-card p-4 md:p-6">
          {guides.length > 0 ? (
            <div>
              {guides.map((guide) => <GuideRow key={guide.slug} guide={guide} />)}
            </div>
          ) : (
            <div className="px-2 py-10 text-center text-sm leading-7 text-slate-500">
              지금 확인할 수 있는 육아용품 가이드가 없어요. 다른 육아 정보나 체크리스트를 먼저 살펴보세요.
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 text-xs leading-6 text-slate-600 md:p-5 md:text-sm">
          <p className="font-semibold text-orange-800">{COUPANG_PARTNERS_DISCLOSURE}</p>
        </section>
      </div>
    </div>
  );
}
