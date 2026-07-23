import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import {
  getPublishedParentingProductGuides,
  type ParentingProductGuide,
} from "@/data/parentingProductGuides";
import { buildCanonical } from "@/lib/content-meta";
import { COUPANG_PARTNERS_DISCLOSURE } from "@/lib/coupang-partners";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "육아용품 가이드｜구매 전 선택 기준 | MomTools",
  description:
    "기저귀, 젖병, 체온계, 카시트, 유모차, 수유쿠션, 아기침대 매트리스, 이유식 턱받이, 빨대컵처럼 자주 쓰는 육아용품의 구매 전 기준을 실제 생활 상황에 맞춰 정리했습니다.",
  keywords: [
    "육아용품 가이드",
    "신생아 용품",
    "육아용품 구매 전 체크",
    "젖병 고르는 법",
    "기저귀 사이즈",
    "이유식 용품",
    "아기 체온계",
    "신생아 카시트",
    "아기 콧물흡인기",
    "아기방 가습기",
    "이유식 식탁의자",
    "휴대용 유모차 절충형 차이",
    "이유식 냉동용기",
    "접이식 아기 욕조",
    "아기 세탁세제",
    "아기 수면조끼",
    "분유포트 고르는 법",
    "아기 놀이매트",
    "유아변기 변기커버 차이",
    "아기 안전문",
    "아기 첫 칫솔",
    "신생아 손톱깎이 전동 차이",
    "수유쿠션 고르는 법",
    "아기침대 매트리스",
    "이유식 턱받이",
    "빨대컵 스파우트컵 차이",
  ],
  alternates: { canonical: buildCanonical("/parenting-products") },
  openGraph: {
    title: "육아용품 가이드｜구매 전 선택 기준 | MomTools",
    description: "제품 순위보다 우리 집과 아이에게 맞는지 먼저 확인하는 육아용품 선택 가이드입니다.",
    url: buildCanonical("/parenting-products"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

function formatPublishedAt(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
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
            {/* <span className="text-slate-400">{formatPublishedAt(guide.publishAt)}</span> */}
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
          {/* <p className="mt-text-main mt-3 max-w-3xl">
            유명한 제품이나 판매 순위를 나열하지 않습니다. 아이의 시기, 집의 동선, 세척과 보관 방식처럼
            실제로 오래 쓰게 만드는 조건을 먼저 정리했어요.
          </p> */}
        </header>

        {/* <section className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4 md:p-5">
          <div className="grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-3">
            <div className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={17} /> 제품보다 사용 상황부터 확인</div>
            <div className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={17} /> 안전·세척·교체 기준 함께 점검</div>
            <div className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={17} /> 필요한 경우에만 관련 상품 비교</div>
          </div>
        </section> */}

        <section className="mt-card p-4 md:p-6">
          {/* <div className="flex items-end justify-between gap-4 border-b border-slate-100 px-1 pb-4 md:px-2"> */}
            {/* <div>
              <h2 className="text-lg font-extrabold text-slate-900 md:text-xl">최근 공개된 가이드</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500 md:text-sm">공개 시간이 지난 글만 목록에 표시됩니다.</p>
            </div> */}
            {/* <span className="shrink-0 rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500">{guides.length}개</span> */}
          {/* </div> */}

          {guides.length > 0 ? (
            <div>
              {guides.map((guide) => <GuideRow key={guide.slug} guide={guide} />)}
            </div>
          ) : (
            <div className="px-2 py-10 text-center text-sm leading-7 text-slate-500">
              첫 육아용품 가이드를 준비하고 있어요. 공개 시간이 되면 이곳에 표시됩니다.
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 text-xs leading-6 text-slate-600 md:p-5 md:text-sm">
          {/* <p className="font-bold text-orange-800">상품 연결 안내</p>
          <p className="mt-1">
            글의 선택 기준을 먼저 읽은 뒤 관련 상품을 비교할 수 있도록 쿠팡 검색 결과를 최대 3개만 보여드립니다.
            특정 상품의 만족도나 안전성을 보증하지 않으며, 가격·구성·사용 가능 범위는 판매처에서 다시 확인해 주세요.
          </p> */}
          <p className="mt-2 font-semibold text-orange-800">{COUPANG_PARTNERS_DISCLOSURE}</p>
        </section>
      </div>
    </div>
  );
}
