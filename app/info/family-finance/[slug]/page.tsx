import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import {
  familyFinanceArticles,
  getFamilyFinanceArticle,
  getRelatedFamilyFinanceArticles,
} from "@/data/familyFinance";
import { PARTNER_SITES, getPartnerLinkProps } from "@/lib/partner-sites";
import { buildCanonical } from "@/lib/content-meta";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return familyFinanceArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getFamilyFinanceArticle(slug);
  if (!article) return {};

  const canonicalPath = `/info/family-finance/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: buildCanonical(canonicalPath) },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: buildCanonical(canonicalPath),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: article.publishedOn,
      modifiedTime: article.updatedOn,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function FamilyFinanceArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getFamilyFinanceArticle(slug);
  if (!article) notFound();

  const related = getRelatedFamilyFinanceArticles(article.slug, 4);
  const pageUrl = buildCanonical(`/info/family-finance/${article.slug}`);
  const bluedinoProps = getPartnerLinkProps(PARTNER_SITES.bluedino, "ko");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: article.title,
        description: article.metaDescription,
        inLanguage: "ko-KR",
        datePublished: article.publishedOn,
        dateModified: article.updatedOn,
        author: { "@type": "Organization", name: "MomTools" },
        publisher: { "@type": "Organization", name: "MomTools" },
        mainEntityOfPage: pageUrl,
        about: article.keywords.slice(0, 8),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "육아 정보", item: buildCanonical("/info") },
          { "@type": "ListItem", position: 3, name: "출산·육아 가계 가이드", item: buildCanonical("/info/family-finance") },
          { "@type": "ListItem", position: 4, name: article.topic, item: pageUrl },
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
          <Link href="/info" className="hover:text-amber-700">육아 정보</Link>
          <span>/</span>
          <Link href="/info/family-finance" className="hover:text-amber-700">출산·육아 가계 가이드</Link>
          <span>/</span>
          <span>{article.topic}</span>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{article.topic}</span>
          <h1 className="mt-title-xl mt-5">{article.title}</h1>
          <p className="mt-text-main mt-4">{article.intro}</p>
        </section>

        <ContentUpdateNote publishedOn={article.publishedOn} updatedOn={article.updatedOn} />

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-700 md:text-base">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">다음 단계 · 가계 가이드</div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            받는 돈 다음에 챙길 흐름까지 보고 싶다면
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            {article.bluedinoCallout.leadIn}, 같은 운영자가 운영하는{" "}
            <a
              {...bluedinoProps}
              className="font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-800"
            >
              {article.bluedinoCallout.anchorText}(bluedino.kr)
            </a>
            에서 한국 가정 기준으로 정리해 두고 있어요.
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-5 space-y-4">
            {article.faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {article.relatedTools.length > 0 ? (
          <section className="mt-card-soft p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 보면 좋은 도구</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {article.relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="mt-list-card">
                  <div className="font-semibold text-slate-800">{tool.label}</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {related.length > 0 ? (
          <section className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">이어서 보면 좋은 가계 가이드</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/info/family-finance/${item.slug}`}
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white"
                >
                  <div className="text-xs font-semibold text-amber-700">{item.topicShort}</div>
                  <div className="mt-2 font-bold leading-7 text-slate-900">{item.title}</div>
                  <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-500">{item.intro}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
