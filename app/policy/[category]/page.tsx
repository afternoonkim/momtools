import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import {
  governmentPolicyCategories,
  getGovernmentPolicies,
  POLICY_VERIFIED_AT,
  POLICY_VERIFIED_LABEL,
  type GovernmentPolicyCategory,
} from "@/data/governmentPolicy";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import PolicyCategorySearch from "./PolicyCategorySearch";

type Params = { category: string };

export async function generateStaticParams() {
  return (Object.keys(governmentPolicyCategories) as GovernmentPolicyCategory[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in governmentPolicyCategories)) return {};
  const typed = category as GovernmentPolicyCategory;
  const info = governmentPolicyCategories[typed];

  return {
    title: `${info.label} | 2026 정부지원정책 정리 | MomTools`,
    description: `${info.description} ${POLICY_VERIFIED_LABEL}으로 대상, 지원내용, 신청 전 확인할 점을 사용자 관점으로 정리했습니다.`,
    keywords: [info.label, "정부지원정책", "육아 지원금", "출산 지원금", ...getGovernmentPolicies(typed).flatMap((item) => item.keywords.slice(0, 2)).slice(0, 40)],
    alternates: { canonical: buildCanonical(`/policy/${typed}`) },
    openGraph: {
      title: `${info.label} | MomTools`,
      description: info.description,
      url: buildCanonical(`/policy/${typed}`),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function PolicyCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  if (!(category in governmentPolicyCategories)) notFound();
  const typed = category as GovernmentPolicyCategory;
  const info = governmentPolicyCategories[typed];
  const entries = getGovernmentPolicies(typed);
  const featured = entries
    .filter((policy) => (policy.amountCards?.length ?? 0) > 0 || (policy.dataRows?.length ?? 0) > 0)
    .slice(0, 4);
  const displayFeatured = featured.length > 0 ? featured : entries.slice(0, 4);
  const searchableEntries = entries.map(({
    slug,
    category,
    title,
    shortTitle,
    summary,
    status,
    keywords,
    verifiedFacts,
    amountCards,
    dataRows,
    regionName,
  }) => ({
    slug,
    category,
    title,
    shortTitle,
    summary,
    status,
    keywords: [
      ...keywords,
      ...verifiedFacts,
      regionName ?? "",
      ...(amountCards ?? []).flatMap((item) => [item.label, item.amount, item.description]),
      ...(dataRows ?? []).flatMap((item) => [item.label, item.value, item.note ?? ""]),
    ].filter(Boolean),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${info.label} 정부지원정책`,
    description: info.description,
    inLanguage: "ko-KR",
    url: buildCanonical(`/policy/${typed}`),
    dateModified: POLICY_VERIFIED_AT,
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link>
          <span>/</span>
          <Link href="/policy" className="hover:text-amber-700">정부지원정책</Link>
          <span>/</span>
          <span className="text-slate-700">{info.label}</span>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{info.label} · {POLICY_VERIFIED_LABEL}</span>
          <h1 className="mt-title-xl mt-5">{info.label}을 필요한 상황별로 확인해 보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{info.heroLead}</p>
          <div className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
            {entries.length}개 정책 질문 정리
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={POLICY_VERIFIED_AT}
          note="정책 기준은 공식자료 확인일 기준으로 정리했습니다. 실제 신청 전에는 복지로, 정부24, 고용24, 주민센터, 보건소 등 공식 창구에서 최종 조건을 확인해 주세요."
        />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이 카테고리 활용법</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {info.guide.map((guide) => (
              <div key={guide} className="rounded-3xl bg-white px-5 py-5 text-sm leading-7 text-slate-600 shadow-sm">
                {guide}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">먼저 확인하면 좋은 정책</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">이 카테고리에서 먼저 확인하기 좋은 대표 정책입니다. 정확한 금액과 대상은 각 상세페이지의 공식자료 확인처를 함께 봐 주세요.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {displayFeatured.map((policy) => (
              <Link key={policy.slug} href={`/policy/${typed}/${policy.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{policy.status}</div>
                <h3 className="mt-3 text-lg font-bold text-slate-800">{policy.shortTitle}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">{policy.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <PolicyCategorySearch category={typed} placeholder={info.searchPlaceholder} entries={searchableEntries} />
      </div>
    </div>
  );
}
