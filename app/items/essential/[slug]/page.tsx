import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ShoppingBag } from "lucide-react";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import {
  COUPANG_PARTNERS_DISCLOSURE,
  babyProductCategories,
  babyProductQnaItems,
  getBabyProductQnaBySlug,
  getRelatedBabyProductQna,
} from "@/data/babyProductQna";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

type Params = { slug: string };

export async function generateStaticParams() {
  return babyProductQnaItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getBabyProductQnaBySlug(slug);
  if (!item) return {};

  const canonicalPath = `/items/essential/${item.slug}`;
  const title = `${item.question} | 육아용품 Q&A`;
  const description = item.description;

  return {
    title,
    description,
    keywords: item.keywords,
    alternates: { canonical: buildCanonical(canonicalPath) },
    openGraph: {
      title,
      description,
      url: buildCanonical(canonicalPath),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: SITE_DATES.published,
      modifiedTime: item.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BabyProductQnaDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getBabyProductQnaBySlug(slug);
  if (!item) notFound();

  const category = babyProductCategories[item.category];
  const related = getRelatedBabyProductQna(item, 4);
  const pageUrl = buildCanonical(`/items/essential/${item.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: item.title,
        description: item.description,
        inLanguage: "ko-KR",
        datePublished: SITE_DATES.published,
        dateModified: item.updatedAt,
        author: { "@type": "Organization", name: "MomTools" },
        publisher: { "@type": "Organization", name: "MomTools" },
        mainEntityOfPage: pageUrl,
        about: item.keywords.slice(0, 8),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.summary },
          },
          {
            "@type": "Question",
            name: `${item.shortName} 구매 전에 무엇을 확인해야 하나요?`,
            acceptedAnswer: { "@type": "Answer", text: item.checkPoints.join(" ") },
          },
          {
            "@type": "Question",
            name: `${item.shortName}는 어떤 집에 잘 맞나요?`,
            acceptedAnswer: { "@type": "Answer", text: item.goodFor.join(" ") },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "육아용품", item: buildCanonical("/items/essential") },
          { "@type": "ListItem", position: 3, name: category.shortLabel, item: buildCanonical("/items/essential") },
          { "@type": "ListItem", position: 4, name: item.shortName, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link>
          <span>/</span>
          <Link href="/items/essential" className="hover:text-amber-700">육아용품</Link>
          <span>/</span>
          <span>{item.kind}</span>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">{category.label}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">{item.kind}</span>
            {item.brand ? <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{item.brand}</span> : null}
          </div>
          <h1 className="mt-title-xl mt-5">{item.title}</h1>
          <p className="mt-text-main mt-4">{item.summary}</p>
          <div className="mt-5 rounded-3xl border border-orange-100 bg-orange-50 p-4 text-sm leading-7 text-slate-700">
            {COUPANG_PARTNERS_DISCLOSURE} 이 글은 구매를 대신 결정해주는 글이 아니라, 부모가 먼저 확인하면 좋은 기준을 정리한 참고용 안내입니다.
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={item.updatedAt}
          note="상품 정보와 가격, 재고, 배송 조건은 수시로 달라질 수 있습니다. 구매 전 판매처 상세페이지에서 최신 내용을 다시 확인해 주세요."
        />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">바로 결론</div>
          <h2 className="mt-title-md mt-3">이 제품을 볼 때 먼저 생각할 점</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-700 md:text-base">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_180px] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-orange-700"><ShoppingBag size={18} /> 상품 정보와 가격 확인</div>
              <h2 className="mt-2 text-xl font-extrabold text-slate-900">{item.shortName}를 더 자세히 비교해 보세요</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
                상세페이지에서 현재 가격, 후기, 배송 예정일, 구성품, 교환·반품 조건을 다시 확인한 뒤 우리 집 상황에 맞는지 결정해 주세요.
              </p>
              <p className="mt-3 rounded-2xl border border-orange-200 bg-white/80 px-4 py-3 text-sm font-bold leading-7 text-orange-800">
                {COUPANG_PARTNERS_DISCLOSURE}
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={item.partnerUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
                >
                  쿠팡에서 가격·후기 보기 <ExternalLink size={16} />
                </a>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-50"
                >
                  상품 정보 URL 확인 <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="mx-auto rounded-3xl border border-orange-100 bg-white p-4 shadow-sm">
              <div
                aria-label={`${item.shortName} 쿠팡 상품 위젯`}
                className="flex min-h-[240px] w-[120px] items-center justify-center overflow-hidden rounded-2xl"
                dangerouslySetInnerHTML={{ __html: item.coupangIframeHtml }}
              />
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">상품 페이지에서 확인한 정보</div>
          <h2 className="mt-title-md mt-3">구매 전 기본 정보</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            아래 내용은 상품 정보 URL에서 확인한 표시 정보를 기준으로 정리했습니다. 색상, 옵션, 가격, 재고는 바뀔 수 있으니 최종 구매 전에는 반드시 판매처 상세페이지를 다시 확인해 주세요.
          </p>
          <div className="mt-5 overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
            {item.productFacts.map((fact, index) => (
              <div key={`${fact.label}-${index}`} className="grid gap-2 border-b border-amber-50 px-5 py-4 last:border-b-0 md:grid-cols-[180px_1fr]">
                <div className="text-sm font-bold text-slate-800">{fact.label}</div>
                <div className="text-sm leading-7 text-slate-600">
                  <div className="font-semibold text-slate-800">{fact.value}</div>
                  {fact.note ? <div className="mt-1 text-slate-500">{fact.note}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="이런 집이라면 잘 맞을 수 있어요" items={item.goodFor} />
          <InfoCard title="구매 전에 꼭 확인해 보세요" items={item.checkPoints} />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="바로 사기 전에 한 번 더 생각할 점" items={item.beforeBuy} />
          <InfoCard title="주의할 점" items={item.caution} tone="caution" />
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">비교 기준</div>
          <h2 className="mt-title-md mt-3">다른 제품과 비교할 때</h2>
          <p className="mt-4 text-sm leading-8 text-slate-700 md:text-base">{item.compareWith}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm">#{keyword}</span>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 질문</div>
          <h2 className="mt-title-md mt-3">함께 보면 좋은 육아용품 Q&A</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {related.map((relatedItem) => (
              <Link
                key={relatedItem.slug}
                href={`/items/essential/${relatedItem.slug}`}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white"
              >
                <div className="text-xs font-semibold text-amber-700">{relatedItem.kind}</div>
                <div className="mt-2 font-bold leading-7 text-slate-900">{relatedItem.question}</div>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-500">{relatedItem.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoCard({ title, items, tone = "default" }: { title: string; items: string[]; tone?: "default" | "caution" }) {
  return (
    <section className={tone === "caution" ? "rounded-[2rem] border border-rose-100 bg-rose-50 p-6 md:p-8" : "mt-card p-6 md:p-8"}>
      <h2 className="text-lg font-bold text-slate-900 md:text-xl">{title}</h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm leading-7 text-slate-700 shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
