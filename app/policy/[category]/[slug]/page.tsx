import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import {
  governmentPolicyCategories,
  getGovernmentPolicies,
  getGovernmentPolicy,
  getRelatedGovernmentPolicies,
  POLICY_VERIFIED_AT,
  POLICY_VERIFIED_LABEL,
  type GovernmentPolicyCategory,
} from "@/data/governmentPolicy";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

type Params = { category: string; slug: string };

export async function generateStaticParams() {
  return (Object.keys(governmentPolicyCategories) as GovernmentPolicyCategory[]).flatMap((category) =>
    getGovernmentPolicies(category).map((policy) => ({ category, slug: policy.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params;
  if (!(category in governmentPolicyCategories)) return {};
  const typed = category as GovernmentPolicyCategory;
  const policy = getGovernmentPolicy(typed, slug);
  if (!policy) return {};
  const info = governmentPolicyCategories[typed];
  const title = `${policy.shortTitle} | ${info.shortLabel} 정부지원정책 공식자료 확인`;
  const description = `${policy.summary.slice(0, 135)}...`;
  const canonicalPath = `/policy/${typed}/${policy.slug}`;

  return {
    title,
    description,
    keywords: policy.keywords,
    alternates: { canonical: buildCanonical(canonicalPath) },
    openGraph: {
      title,
      description,
      url: buildCanonical(canonicalPath),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: SITE_DATES.published,
      modifiedTime: POLICY_VERIFIED_AT,
    },
  };
}

function SourceList({ sources }: { sources: NonNullable<ReturnType<typeof getGovernmentPolicy>>["sources"] }) {
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2">
      {sources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-amber-100 bg-white px-4 py-4 text-sm leading-7 text-slate-600 shadow-sm transition hover:border-amber-300"
        >
          <div className="font-bold text-slate-800">{source.name}</div>
          <div className="mt-1 text-xs text-slate-500">확인일: {source.checkedAt}</div>
          {source.sourceUpdatedAt ? <div className="mt-1 text-xs text-slate-500">자료 수정일: {source.sourceUpdatedAt}</div> : null}
          <div className="mt-2 font-semibold text-amber-700">공식자료 열기</div>
        </a>
      ))}
    </div>
  );
}

export default async function PolicyDetailPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  if (!(category in governmentPolicyCategories)) notFound();
  const typed = category as GovernmentPolicyCategory;
  const policy = getGovernmentPolicy(typed, slug);
  if (!policy) notFound();

  const info = governmentPolicyCategories[typed];
  const related = getRelatedGovernmentPolicies(policy, 6);
  const hasDetailedData = (policy.amountCards?.length ?? 0) > 0 || (policy.dataRows?.length ?? 0) > 0;
  const pageUrl = buildCanonical(`/policy/${typed}/${policy.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: policy.title,
        description: policy.summary,
        inLanguage: "ko-KR",
        datePublished: SITE_DATES.published,
        dateModified: POLICY_VERIFIED_AT,
        author: { "@type": "Organization", name: "MomTools" },
        publisher: { "@type": "Organization", name: "MomTools" },
        mainEntityOfPage: pageUrl,
        about: policy.keywords.slice(0, 8),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: policy.title,
            acceptedAnswer: { "@type": "Answer", text: policy.summary },
          },
          {
            "@type": "Question",
            name: `${policy.shortTitle} 신청 전에 무엇을 확인해야 하나요?`,
            acceptedAnswer: { "@type": "Answer", text: policy.checkBefore.join(" ") },
          },
          {
            "@type": "Question",
            name: `${policy.shortTitle} 공식자료는 어디서 확인하나요?`,
            acceptedAnswer: { "@type": "Answer", text: policy.sources.map((source) => source.name).join(", ") },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "정부지원정책", item: buildCanonical("/policy") },
          { "@type": "ListItem", position: 3, name: info.label, item: buildCanonical(`/policy/${typed}`) },
          { "@type": "ListItem", position: 4, name: policy.shortTitle, item: pageUrl },
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
          <Link href="/policy" className="hover:text-amber-700">정부지원정책</Link>
          <span>/</span>
          <Link href={`/policy/${typed}`} className="hover:text-amber-700">{info.label}</Link>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">{info.label}</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{policy.status}</span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{POLICY_VERIFIED_LABEL}</span>
          </div>
          <h1 className="mt-title-xl mt-5">{policy.title}</h1>
          <p className="mt-text-main mt-4">{policy.summary}</p>
          <div className="mt-5 rounded-3xl border border-amber-100 bg-amber-50/70 p-4 text-sm leading-7 text-slate-700">
            이 글은 신청 여부를 대신 판단하지 않습니다. 보호자가 먼저 볼 기준을 정리한 자료이며, 최종 대상·금액·서류는 아래 공식자료와 담당 기관 안내를 기준으로 확인해 주세요.
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={POLICY_VERIFIED_AT}
          note="정책은 공식자료 확인일 기준으로 다시 점검했습니다. 신청 전 실제 대상 여부, 금액, 서류, 기한은 담당 기관의 최신 안내를 최종 기준으로 확인해 주세요."
        />

        {hasDetailedData ? (
          <section className="mt-card p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">금액과 조건</div>
            <h2 className="mt-title-md mt-3">
              {policy.regionName ? policy.regionName + " 기준으로 먼저 볼 지원 내용" : policy.shortTitle + " 신청 전에 볼 실제 기준"}
            </h2>
            <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
              지원금은 이름만 보면 비슷해 보여도 금액, 신청 기한, 거주 기간, 아이 나이 기준이 서로 다를 수 있습니다.
              아래 내용을 먼저 확인한 뒤 우리 집 상황과 맞는지 공식 창구에서 마지막으로 확인해 주세요.
            </p>

            {policy.amountCards?.length ? (
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {policy.amountCards.map((item) => (
                  <div key={item.label + "-" + item.amount} className="rounded-3xl border border-amber-100 bg-amber-50/70 p-5 shadow-sm">
                    <div className="text-sm font-bold text-amber-800">{item.label}</div>
                    <div className="mt-2 text-2xl font-extrabold text-slate-900">{item.amount}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {policy.dataRows?.length ? (
              <div className="mt-6 overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
                {policy.dataRows.map((row, index) => (
                  <div key={row.label + "-" + index} className="grid gap-2 border-b border-amber-50 px-5 py-4 last:border-b-0 md:grid-cols-[170px_1fr]">
                    <div className="text-sm font-bold text-slate-800">{row.label}</div>
                    <div className="text-sm leading-7 text-slate-600">
                      <div className="font-semibold text-slate-800">{row.value}</div>
                      {row.note ? <div className="mt-1 text-slate-500">{row.note}</div> : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ) : null}

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">공식자료에서 확인한 기준</div>
          <h2 className="mt-title-md mt-3">먼저 믿고 볼 수 있는 핵심 정보</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {policy.verifiedFacts.map((fact, index) => (
              <div key={fact} className="rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-sm">
                <span className="font-semibold text-amber-700">확인 {index + 1}. </span>{fact}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">한눈에 보기</div>
          <h2 className="mt-title-md mt-3">먼저 확인해야 할 핵심 기준</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-800">누가 확인하면 좋나요?</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                {policy.target.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-800">무엇을 받을 수 있나요?</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                {policy.benefit.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-800">어디서 신청하나요?</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                {policy.apply.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">신청 전에 꼭 확인할 점</h2>
          <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
            같은 정책이라도 아이 나이, 출생월, 회사 재직 조건, 이용 기관, 거주 지역에 따라 결과가 달라질 수 있습니다.
            아래 항목을 먼저 확인하면 신청 과정에서 놓치는 부분을 줄일 수 있습니다.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {policy.checkBefore.map((item, index) => (
              <div key={item} className="rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-4 text-sm leading-7 text-slate-700">
                <span className="font-semibold text-amber-700">{index + 1}. </span>{item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">실제로 준비할 때 도움이 되는 팁</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            {policy.userTip.map((tip) => <p key={tip}>{tip}</p>)}
          </div>
        </section>

        <section className="rounded-[32px] border border-red-100 bg-red-50/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-red-900">주의해서 볼 부분</h2>
          <p className="mt-3 text-sm leading-8 text-red-900 md:text-base">{policy.caution}</p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">공식자료 확인처</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            아래 자료를 기준으로 정리했지만, 정책은 예산과 법령 변경으로 달라질 수 있습니다. 신청 직전에는 공식자료를 한 번 더 확인해 주세요.
          </p>
          <SourceList sources={policy.sources} />
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">함께 확인하면 좋은 정책</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/policy/${item.category}/${item.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{governmentPolicyCategories[item.category].shortLabel}</div>
                <h3 className="mt-3 text-lg font-bold text-slate-800">{item.shortTitle}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
