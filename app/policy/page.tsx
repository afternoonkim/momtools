import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ClipboardCheck, HeartHandshake, Landmark, SearchCheck, Stethoscope } from "lucide-react";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import {
  governmentPolicies,
  governmentPolicyCategories,
  governmentPolicyData,
  POLICY_VERIFIED_LABEL,
  POLICY_VERIFIED_AT,
  type GovernmentPolicyCategory,
} from "@/data/governmentPolicy";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "정부지원정책 | 임신 출산 육아 지원금 최신 정리 | MomTools",
  description:
    "2026년 공식자료 기준으로 임신·출산, 양육·보육, 일·육아 병행, 돌봄·교육, 지역별 추가 지원정책을 사용자 관점으로 정리했습니다.",
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
      "임신·출산부터 양육, 보육, 일·육아 병행까지 가족이 실제로 확인해야 할 지원정책을 최신 공식자료 기준으로 정리했습니다.",
    url: buildCanonical("/policy"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const categoryIcons: Record<GovernmentPolicyCategory, typeof CalendarCheck> = {
  "pregnancy-birth": HeartHandshake,
  "childcare-benefit": ClipboardCheck,
  "work-parenting": CalendarCheck,
  "care-education": SearchCheck,
  "medical-health": Stethoscope,
  "local-check": Landmark,
};

const userQuestions = [
  "2026 부모급여는 0세 1세 얼마 받을까",
  "첫만남이용권 둘째는 300만원 맞을까",
  "아동수당 2026년부터 몇 살까지 받을까",
  "육아휴직급여 상한액은 어떻게 달라질까",
  "아이돌봄서비스 정부지원 시간은 몇 시간일까",
  "우리 동네 출산지원금은 어디서 확인할까",
];

const featuredSlugs = [
  "parental-benefit-data",
  "child-allowance-data",
  "first-encounter-voucher-data",
  "pregnancy-medical-voucher-data",
  "parental-leave-pay-data",
  "idolbom-service-data",
  "local-birth-grant-check-data",
  "incheon-angel-1040-support",
  "daejeon-basic-childcare-allowance",
];

export default function PolicyHubPage() {
  const featuredFromSlugs = featuredSlugs
    .map((slug) => governmentPolicies.find((policy) => policy.slug === slug))
    .filter((policy): policy is (typeof governmentPolicies)[number] => Boolean(policy));
  const featured = featuredFromSlugs.length > 0
    ? featuredFromSlugs
    : governmentPolicies.filter((policy) => (policy.amountCards?.length ?? 0) > 0 || (policy.dataRows?.length ?? 0) > 0).slice(0, 9);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "정부지원정책",
    description: "임신·출산·육아 관련 정부지원정책을 최신 공식자료 기준으로 정리한 페이지",
    inLanguage: "ko-KR",
    url: buildCanonical("/policy"),
    dateModified: POLICY_VERIFIED_AT,
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">정부지원정책 · {POLICY_VERIFIED_LABEL}</span>
          <h1 className="mt-title-xl mt-5">임신·출산·육아 지원정책, 받을 수 있는 것부터 놓치지 않게 확인해 보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            지원금 이름은 많이 들어봤지만, 막상 신청하려고 하면 아이 나이, 출생 순서, 어린이집 이용 여부,
            회사 재직 조건, 거주 지역 기준이 한꺼번에 나와 헷갈릴 수 있습니다. 이 페이지는 가족이 실제로
            확인해야 할 핵심 기준과 신청 전 체크할 내용을 먼저 볼 수 있도록 정리했습니다.
          </p>
          <div className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-3">
            <div className="rounded-2xl bg-amber-50 px-4 py-4">
              <strong className="text-amber-800">최신 기준 표시</strong>
              <p className="mt-1">각 정책마다 공식자료 확인일과 출처를 함께 표시합니다.</p>
            </div>
            <div className="rounded-2xl bg-amber-50 px-4 py-4">
              <strong className="text-amber-800">신청 전 체크</strong>
              <p className="mt-1">대상, 금액, 신청 경로보다 먼저 확인할 조건을 따로 정리했습니다.</p>
            </div>
            <div className="rounded-2xl bg-amber-50 px-4 py-4">
              <strong className="text-amber-800">지역 차이 안내</strong>
              <p className="mt-1">지자체별로 달라질 수 있는 항목은 최종 확인처를 함께 안내합니다.</p>
            </div>
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={POLICY_VERIFIED_AT}
          note="정부지원정책은 예산, 법령, 지자체 공고에 따라 달라질 수 있어 공식자료 확인일을 함께 표시했습니다. 신청 전에는 복지로, 정부24, 고용24, 거주지 주민센터 안내를 최종 기준으로 확인해 주세요."
        />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">많이 찾는 질문</div>
          <h2 className="mt-title-md mt-3">검색하기 전에 이런 질문부터 확인해 보세요</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {userQuestions.map((question) => (
              <span key={question} className="rounded-full border border-amber-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                {question}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {(Object.keys(governmentPolicyCategories) as GovernmentPolicyCategory[]).map((category) => {
            const info = governmentPolicyCategories[category];
            const Icon = categoryIcons[category];
            const count = governmentPolicyData[category].length;
            return (
              <Link key={category} href={`/policy/${category}`} className="mt-card p-6 transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">정부지원정책</div>
                <h2 className="mt-2 text-xl font-bold text-slate-800">{info.label}</h2>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-500">{info.description}</p>
                <div className="mt-4 text-sm font-semibold text-amber-700">{count}개 정책 보기</div>
              </Link>
            );
          })}
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 많이 확인하는 정책</div>
              <h2 className="mt-title-md mt-3">지금 바로 확인하기 좋은 지원정책</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                아이 나이와 가정 상황에 따라 바로 연결되는 대표 정책부터 확인해 보세요.
              </p>
            </div>
            <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
              총 {governmentPolicies.length}개 정책 질문 정리
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((policy) => (
              <Link
                key={policy.slug}
                href={`/policy/${policy.category}/${policy.slug}`}
                className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {governmentPolicyCategories[policy.category].shortLabel}
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{policy.status}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-800">{policy.shortTitle}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-500">{policy.summary}</p>
                <div className="mt-4 text-sm font-semibold text-amber-700">자세히 보기</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">정책 정보를 볼 때 꼭 기억할 점</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              정부지원정책은 이름이 같아도 실제 금액과 신청 가능 여부가 아이 나이, 출생월, 회사 재직 조건,
              건강보험 자격, 거주 지역에 따라 달라질 수 있습니다. 그래서 이 페이지에서는 “얼마를 받는다”보다
              “내가 먼저 무엇을 확인해야 하는지”를 함께 정리했습니다.
            </p>
            <p>
              특히 지역별 지원금, 산후조리비, 다자녀 혜택은 지자체 예산과 조례에 따라 수시로 달라질 수 있습니다.
              신청 직전에는 반드시 주민센터, 보건소, 정부24, 복지로, 고용24 등 공식 창구에서 최종 조건을 확인해 주세요.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
