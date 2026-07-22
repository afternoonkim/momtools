import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink, ShieldAlert } from "lucide-react";
import {
  getParentingProductGuideBySlug,
  getPublicParentingProductGuideBySlug,
  getPublishedParentingProductGuides,
  getRelatedParentingProductGuides,
  isParentingProductGuidePublic,
} from "@/data/parentingProductGuides";
import { buildCanonical } from "@/lib/content-meta";
import { COUPANG_PARTNERS_DISCLOSURE } from "@/lib/coupang-partners";

type Params = { slug: string };

export const revalidate = 3600;

export function generateStaticParams() {
  return getPublishedParentingProductGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getParentingProductGuideBySlug(slug);
  if (!guide || !isParentingProductGuidePublic(guide)) {
    return { robots: { index: false, follow: false } };
  }

  const path = `/parenting-products/${guide.slug}`;
  return {
    title: `${guide.title} | MomTools`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: buildCanonical(path) },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: buildCanonical(path),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: guide.publishAt,
      modifiedTime: guide.updatedAt,
    },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description },
    robots: { index: true, follow: true },
  };
}

function formatPublishedAt(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

export default async function ParentingProductGuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getPublicParentingProductGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedParentingProductGuides(guide);
  const pagePath = `/parenting-products/${guide.slug}`;
  const pageUrl = buildCanonical(pagePath);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: guide.title,
        description: guide.description,
        inLanguage: "ko-KR",
        datePublished: guide.publishAt,
        dateModified: guide.updatedAt,
        author: { "@type": "Organization", name: "MomTools" },
        publisher: { "@type": "Organization", name: "MomTools" },
        mainEntityOfPage: pageUrl,
        about: guide.keywords,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "육아용품 가이드", item: buildCanonical("/parenting-products") },
          { "@type": "ListItem", position: 3, name: guide.shortTitle, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <article className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 md:text-sm" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link><span>/</span>
          <Link href="/parenting-products" className="hover:text-amber-700">육아용품 가이드</Link><span>/</span>
          <span>{guide.category}</span>
        </nav>

        <header className="mt-card p-5 md:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">{guide.category}</span>
            {/* <span className="text-slate-400">{formatPublishedAt(guide.publishAt)}</span> */}
          </div>
          <h1 className="mt-4 text-2xl font-extrabold leading-[1.35] tracking-tight text-slate-900 md:text-4xl md:leading-[1.3]">
            {guide.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{guide.summary}</p>
          <p className="mt-4 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-xs font-semibold leading-6 text-orange-800">
            {COUPANG_PARTNERS_DISCLOSURE}
          </p>
        </header>

        <section data-coupang-product-anchor="true" className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 md:p-7">
          <p className="text-xs font-extrabold text-amber-700">먼저 보는 결론</p>
          <h2 className="mt-2 text-lg font-extrabold leading-7 text-slate-900 md:text-xl">지금 선택 기준은 이것이에요</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base md:leading-8">{guide.quickAnswer}</p>
        </section>

        {guide.sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 0 ? "mt-card p-5 md:p-8" : "mt-card-soft p-5 md:p-8"}>
            <h2 className="text-xl font-extrabold leading-8 text-slate-900 md:text-2xl">{section.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {section.items?.length ? (
              <ul className="mt-5 space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2 rounded-xl bg-white px-3.5 py-3 text-sm leading-6 text-slate-700 shadow-sm">
                    <Check className="mt-0.5 shrink-0 text-amber-600" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.tip ? (
              <p className="mt-5 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
                <strong className="text-sky-800">생활 팁</strong><span className="mx-2 text-sky-300">·</span>{section.tip}
              </p>
            ) : null}
          </section>
        ))}

        <section className="mt-card p-5 md:p-8">
          <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">구매 전 마지막 체크</h2>
          <div className="mt-5 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white">
            {guide.buyingChecklist.map((item, index) => (
              <div key={item} className="flex gap-3 px-4 py-3.5 text-sm leading-6 text-slate-700 md:px-5 md:text-base md:leading-7">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-extrabold text-amber-700">{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-rose-100 bg-rose-50/80 p-5 md:p-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 shrink-0 text-rose-600" size={22} />
            <div>
              <h2 className="text-lg font-extrabold leading-7 text-slate-900 md:text-xl">{guide.safetyTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                {guide.safetyNotes.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
          <p className="text-xs font-extrabold text-emerald-700">오늘 바로 할 일</p>
          <p className="mt-2 text-base font-bold leading-7 text-slate-900 md:text-lg">{guide.simpleAction}</p>
        </section>

        <section className="mt-card p-5 md:p-8">
          <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">함께 보면 판단이 쉬운 페이지</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {guide.relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-start justify-between gap-3 py-4 first:pt-1 last:pb-1">
                <span>
                  <span className="block text-sm font-extrabold leading-6 text-slate-900 group-hover:text-amber-700 md:text-base">{item.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500 md:text-sm md:leading-6">{item.description}</span>
                </span>
                <ArrowRight className="mt-1 shrink-0 text-slate-300 group-hover:text-amber-600" size={18} />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-5 md:p-8">
          <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {guide.faq.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-100 bg-white p-4 open:border-amber-100">
                <summary className="cursor-pointer list-none pr-5 text-sm font-extrabold leading-6 text-slate-900 md:text-base">{item.question}</summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {relatedGuides.length > 0 ? (
          <section className="mt-card p-5 md:p-8">
            <h2 className="text-lg font-extrabold text-slate-900 md:text-xl">다른 육아용품 가이드</h2>
            <div className="mt-3 divide-y divide-slate-100">
              {relatedGuides.map((item) => (
                <Link key={item.slug} href={`/parenting-products/${item.slug}`} className="flex items-center justify-between gap-3 py-4 text-sm font-bold leading-6 text-slate-700 hover:text-amber-700">
                  <span>{item.shortTitle}</span><ArrowRight size={17} className="shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-1 pb-2 text-xs leading-6 text-slate-500 md:text-sm">
          <p className="font-bold text-slate-700">확인한 안전 정보</p>
          <div className="mt-2 flex flex-col gap-2">
            {guide.sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 hover:text-amber-700">
                <ExternalLink className="mt-1 shrink-0" size={13} /><span>{source.title}</span>
              </a>
            ))}
          </div>
          <p className="mt-3">상품의 가격·옵션·인증 상태·사용 범위는 바뀔 수 있으므로 구매 시점의 판매처와 제품안전정보를 다시 확인해 주세요.</p>
        </section>
      </div>
    </article>
  );
}
