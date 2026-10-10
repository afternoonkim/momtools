import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import {
  governmentPolicies,
  governmentPolicyCategories,
  governmentPolicyData,
  type GovernmentPolicyCategory,
} from "@/data/governmentPolicy";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const REVIEWED_AT = "2026-10-10";

const checkOrder = [
  {
    title: "아이 나이와 출생 시점",
    text: "부모급여, 아동수당, 보육료처럼 아이의 개월수·연령에 따라 대상과 금액이 달라지는 제도가 많아요.",
  },
  {
    title: "가구·재직·이용 조건",
    text: "소득, 건강보험 자격, 회사 재직 여부, 어린이집·유치원 이용 여부에 따라 받을 수 있는 지원이 달라질 수 있어요.",
  },
  {
    title: "거주 지역과 신청 시점",
    text: "지역 지원금과 일부 돌봄 제도는 거주기간, 예산, 신청기한이 다르므로 신청 직전에 공식 창구에서 최종 확인하세요.",
  },
] as const;

export const metadata: Metadata = {
  title: "2026 임신 출산 육아 지원정책 | MomTools",
  description:
    "임신·출산, 양육·보육, 일·육아 병행, 돌봄·교육, 의료·건강 지원을 대상과 신청 조건 중심으로 확인하고 필요한 정책을 빠르게 찾아보세요.",
  keywords: [
    "정부지원정책",
    "육아 지원금",
    "출산 지원금",
    "부모급여",
    "아동수당",
    "첫만남이용권",
    "육아휴직급여",
    "아이돌봄서비스",
  ],
  alternates: { canonical: buildCanonical("/policy") },
  openGraph: {
    title: "정부지원정책 | MomTools",
    description:
      "임신·출산부터 양육, 보육, 일·육아 병행까지 우리 가족이 확인할 지원정책을 한곳에서 찾아보세요.",
    url: buildCanonical("/policy"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const featuredSlugs = [
  "parental-benefit-data",
  "child-allowance-data",
  "first-encounter-voucher-data",
  "pregnancy-medical-voucher-data",
  "parental-leave-pay-data",
  "idolbom-service-data",
  "local-birth-grant-check-data",
];

export default function PolicyHubPage() {
  const featuredFromSlugs = featuredSlugs
    .map((slug) => governmentPolicies.find((policy) => policy.slug === slug))
    .filter((policy): policy is (typeof governmentPolicies)[number] => Boolean(policy));
  const featured = featuredFromSlugs.length > 0 ? featuredFromSlugs : governmentPolicies.slice(0, 7);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "정부지원정책",
    description: "임신·출산·육아 관련 정부지원정책을 공식자료 기준으로 정리한 페이지",
    inLanguage: "ko-KR",
    url: buildCanonical("/policy"),
    dateModified: REVIEWED_AT,
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mt-page-hero">
          <span className="mt-badge">2026년 기준 확인</span>
          <h1 className="mt-title-xl mt-4">우리 가족에게 필요한 지원부터 찾아보세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            같은 지원금도 아이 나이, 신청 시점, 가구 조건, 거주 지역에 따라 달라질 수 있어요. 먼저 우리 상황과 가까운 분야를 고른 뒤 세부 조건을 확인해 보세요.
          </p>
        </section>

        <AdFitAd {...ADFIT_UNITS.contentMedium} />
        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={REVIEWED_AT}
          note="전국 공통 제도 중 변경 가능성이 큰 금액·대상·기간은 2026년 10월 10일 기준 공식자료와 다시 확인했습니다. 지자체 지원금은 수시로 바뀔 수 있어 주소지 주민센터·복지로·지자체 공고를 최종 기준으로 확인해 주세요."
        />

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">신청 전에 먼저 볼 것</div>
          <h2 className="mt-title-md mt-3">지원금을 찾을 때는 이 세 가지부터 확인하세요</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {checkOrder.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-xs font-bold text-amber-700">{index + 1}</div>
                <div className="mt-2 text-sm font-extrabold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-simple-list" aria-label="정부지원정책 카테고리">
          {(Object.keys(governmentPolicyCategories) as GovernmentPolicyCategory[]).map((category) => {
            const info = governmentPolicyCategories[category];
            const count = governmentPolicyData[category].length;
            return (
              <Link key={category} href={`/policy/${category}`} className="mt-simple-list-item flex items-center justify-between gap-3">
                <span className="min-w-0">
                  <strong className="block text-base font-extrabold text-slate-900">{info.label}</strong>
                  <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{info.description}</span>
                  <span className="mt-2 inline-block text-xs font-bold text-amber-700">{count}개 정책</span>
                </span>
                <span className="shrink-0 text-amber-700">→</span>
              </Link>
            );
          })}
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="text-lg font-extrabold text-slate-900 md:text-xl">먼저 많이 확인하는 정책</h2>
          <div className="mt-3 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-amber-100 bg-white">
            {featured.map((policy) => (
              <Link key={policy.slug} href={`/policy/${policy.category}/${policy.slug}`} className="block px-4 py-4 transition hover:bg-amber-50/60">
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-700">
                  {governmentPolicyCategories[policy.category].shortLabel}
                </span>
                <strong className="mt-2 block text-base font-extrabold text-slate-900">{policy.shortTitle}</strong>
                <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{policy.summary}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <h2 className="text-lg font-extrabold text-slate-900">신청 직전에 한 번 더 확인하세요</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            정책은 아이 나이, 출생월, 회사 재직 조건, 건강보험 자격, 거주 지역에 따라 달라질 수 있습니다. 신청 전에는 정부24, 복지로, 고용24, 주민센터 등 공식 창구에서 실제 대상 여부와 신청기한을 확인해 주세요.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/info/childcare-portal" className="mt-chip-link">아이사랑 활용 가이드</Link>
            <Link href="/tools/birth-support-calculator" className="mt-chip-link">출산지원금 확인</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
