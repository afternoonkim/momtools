import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import {
  childcarePortalGuides,
  getChildcarePortalGuide,
  getRelatedChildcarePortalGuides,
} from "@/data/childcarePortalGuides";
import { buildCanonical } from "@/lib/content-meta";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return childcarePortalGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getChildcarePortalGuide(slug);
  if (!guide) return {};

  const canonicalPath = `/info/childcare-portal/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: buildCanonical(canonicalPath) },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: buildCanonical(canonicalPath),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: guide.publishedOn,
      modifiedTime: guide.updatedOn,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ChildcarePortalDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getChildcarePortalGuide(slug);
  if (!guide) notFound();

  const related = getRelatedChildcarePortalGuides(guide.slug, 4);
  const pageUrl = buildCanonical(`/info/childcare-portal/${guide.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: guide.title,
        description: guide.metaDescription,
        inLanguage: "ko-KR",
        datePublished: guide.publishedOn,
        dateModified: guide.updatedOn,
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
          { "@type": "ListItem", position: 3, name: "아이사랑 공식정보", item: buildCanonical("/info/childcare-portal") },
          { "@type": "ListItem", position: 4, name: guide.topic, item: pageUrl },
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
          <Link href="/info/childcare-portal" className="hover:text-amber-700">아이사랑 공식정보</Link>
          <span>/</span>
          <span>{guide.topic}</span>
        </nav>

        <section className="mt-card p-6 md:p-10">
          <span className="mt-badge">{guide.topic}</span>
          <h1 className="mt-title-xl mt-5">{guide.title}</h1>
          <p className="mt-text-main mt-4">{guide.intro}</p>
          <div className="mt-6 rounded-[28px] border border-amber-100 bg-amber-50/70 p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-800">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              바로 답변
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{guide.quickAnswer}</p>
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={guide.publishedOn}
          updatedOn={guide.updatedOn}
          note="아이사랑의 접근 가능한 공개 메뉴 구조를 확인한 뒤, 부모가 실제로 확인하기 쉬운 순서로 재구성했습니다. 신청 가능 여부, 금액, 제출 서류, 이용 가능 시간은 공식 안내를 최종 기준으로 확인해 주세요."
        />

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">이 페이지에서 확인할 수 있는 것</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {guide.sections.slice(0, 3).map((section) => (
              <div key={section.heading} className="rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-4">
                <div className="font-bold text-slate-900">{section.heading}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{section.paragraphs[0]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">신청 또는 확인 전 체크리스트</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {guide.checkPoints.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">자주 헷갈리는 부분</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {guide.faq.slice(0, 2).map((item) => (
              <article key={item.q} className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {guide.sections.map((section) => (
          <section key={section.heading} className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-700 md:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-card-soft p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="mt-badge">공식 사이트에서 최종 확인</span>
              <h2 className="mt-title-lg mt-3">신청·상담·결제는 공식 경로에서 다시 확인하세요</h2>
              <p className="mt-text-main mt-3">
                MomTools에서는 부모가 이해하기 쉬운 순서로 정리하고, 실제 신청이나 상담은 아이사랑 공식 메뉴에서 확인하도록 연결합니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {guide.officialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-bold text-slate-900">{link.label}</div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">공식 사이트에서 최종 확인할 항목</h2>
          <div className="mt-5 space-y-3">
            {guide.beforeYouGo.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">MomTools에서 이어서 볼 수 있어요</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {guide.momtoolsLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mt-list-card">
                <div className="font-semibold text-slate-900">{link.label}</div>
                <div className="mt-2 text-sm leading-6 text-slate-500">{link.description}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-5 space-y-4">
            {guide.faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">다른 아이사랑 활용 가이드</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/info/childcare-portal/${item.slug}`}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white"
              >
                <div className="text-xs font-semibold text-amber-700">{item.topic}</div>
                <div className="mt-2 font-bold leading-7 text-slate-900">{item.shortTitle}</div>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-500">{item.quickAnswer}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
