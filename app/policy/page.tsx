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

const reviewHighlights = [
  {
    title: "임신·출산",
    text: "첫만남이용권, 임신·출산 진료비, 난임 시술비처럼 금액·횟수를 잘못 기억하기 쉬운 전국 공통 제도를 공식자료와 다시 대조했습니다.",
  },
  {
    title: "양육·보육",
    text: "2026년 아동수당 확대 기준, 부모급여, 보육료와 차액 지급처럼 아이 나이와 기관 이용 여부에 따라 달라지는 기준을 다시 확인했습니다.",
  },
  {
    title: "일·육아",
    text: "육아휴직급여, 배우자 출산휴가, 출산전후휴가, 육아기 근로시간 단축의 2026년 급여 상한과 사용 조건을 최신 고시와 대조했습니다.",
  },
  {
    title: "돌봄·교육",
    text: "2026년 아이돌봄서비스 시간제 요금, 정부지원 소득구간, 시간제·영아종일제 대상 연령을 공식 안내와 다시 확인했습니다.",
  },
  {
    title: "의료·건강",
    text: "영유아 건강검진 8회 일정, 미숙아·선천성이상아 의료비 지원, 저소득층 기저귀·조제분유 지원의 현재 중앙정부 기준을 재확인했습니다.",
  },
] as const;

export const metadata: Metadata = {
  title: "정부지원정책 | 임신 출산 육아 지원금 최신 정리 | MomTools",
  description:
    "2026년 10월 기준 변동 가능성이 큰 임신·출산, 양육·보육, 일·육아 병행, 돌봄·교육, 의료·건강 핵심 정책을 공식자료와 다시 대조하고, 지역별 지원은 신청 직전 공식 창구 확인이 필요하도록 구분해 정리했습니다.",
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
      "임신·출산부터 양육, 보육, 일·육아 병행까지 가족이 실제로 확인해야 할 지원정책을 공식자료 기준으로 정리했습니다.",
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
          <span className="mt-badge">주요 변동정보 · 2026.10.10 재확인</span>
          <h1 className="mt-title-xl mt-4">임신·출산·육아 지원정책을 먼저 확인하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            지원금 이름보다 중요한 것은 대상, 아이 나이, 신청 시점, 거주 지역입니다. 변경 가능성이 큰 핵심 기준은 공식자료로 다시 확인했고, 지역별 제도는 신청 직전 재확인이 필요하도록 따로 구분했습니다.
          </p>
        </section>

        <AdFitAd {...ADFIT_UNITS.contentMedium} />
        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={REVIEWED_AT}
          note="전국 공통 제도 중 변경 가능성이 큰 금액·대상·기간은 2026년 10월 10일 기준 공식자료와 재대조했습니다. 지자체 지원금은 수시로 바뀔 수 있어 주소지 주민센터·복지로·지자체 공고를 최종 기준으로 확인해 주세요."
        />

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이번 재검토 범위</div>
          <h2 className="mt-title-md mt-3">최신화가 특히 중요한 5개 영역을 먼저 다시 확인했습니다</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {reviewHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-sm font-extrabold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            지역별 출산지원금은 같은 지역도 조례·예산·거주기간 조건이 바뀔 수 있어 정적 목록만으로 최신 여부를 단정하지 않습니다. 계산 결과와 함께 신청 직전 공식 안내를 확인하는 것을 전제로 사용해 주세요.
          </p>
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
          <h2 className="text-lg font-extrabold text-slate-900">신청 전 꼭 기억할 점</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            이름이 같은 정책도 아이 나이, 출생월, 회사 재직 조건, 건강보험 자격, 거주 지역에 따라 달라질 수 있습니다. 신청 직전에는 정부24, 복지로, 고용24, 주민센터 등 공식 창구에서 최종 조건을 확인해 주세요.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/info/childcare-portal" className="mt-chip-link">아이사랑 활용 가이드</Link>
            <Link href="/tools/birth-support-calculator" className="mt-chip-link">출산지원금 계산기</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
