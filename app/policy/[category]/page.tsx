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

type VerifiedUpdate = {
  title: string;
  lead: string;
  facts: string[];
  sources: { label: string; href: string }[];
};

const REVIEWED_AT = "2026-10-10";

const verifiedUpdates: Partial<Record<GovernmentPolicyCategory, VerifiedUpdate>> = {
  "pregnancy-birth": {
    title: "2026년 임신·출산 지원 핵심 기준을 다시 확인했습니다",
    lead: "전국 공통 제도 중 금액이나 사용기간을 잘못 기억하기 쉬운 항목을 보건복지부·e보건소 공식자료로 다시 대조했습니다.",
    facts: [
      "첫만남이용권은 첫째아 200만원, 둘째아 이상 300만원이며 2024년 이후 출생아는 출생일부터 2년 안에 사용할 수 있습니다.",
      "건강보험 임신·출산 진료비는 임신 1회당 100만원, 다태아는 기본 140만원이며 2025년 이후 신청자는 태아당 100만원이 되도록 추가금이 함께 신청됩니다.",
      "난임부부 시술비는 난임진단 등 요건을 충족하면 출산당 총 25회(체외수정 최대 20회, 인공수정 최대 5회)까지 지원 기준을 확인할 수 있습니다.",
    ],
    sources: [
      { label: "보건복지부 임신·출산 지원", href: "https://www.mohw.go.kr/menu.es?mid=a10711020100" },
      { label: "보건복지부 임신·출산 진료비", href: "https://www.mohw.go.kr/menu.es?mid=a10705020100" },
      { label: "e보건소 난임부부 시술비", href: "https://e-health.go.kr/gh/caSrvcGud/selectMdclSupGudInfo.do?heBiz=PG00001&menuId=200009" },
    ],
  },
  "childcare-benefit": {
    title: "2026년 아동수당·부모급여 최신 기준을 다시 확인했습니다",
    lead: "아이 나이와 거주지역에 따라 실제 지급액이 달라지는 전국 공통 지원을 보건복지부 최신 안내와 다시 대조했습니다.",
    facts: [
      "아동수당은 2026년 만 9세 미만 모든 아동이 대상이며 수도권 월 10만원, 비수도권 월 10.5만원이 기본입니다.",
      "인구감소 우대지역은 월 11만원, 특별지역은 월 12만원이며 지역사랑상품권 추가지원이 적용되면 최대 월 13만원까지 달라질 수 있습니다.",
      "부모급여는 0~11개월 월 100만원, 12~23개월 월 50만원 기준이며 어린이집 이용 시 보육료와 차액 지급 방식을 함께 확인해야 합니다.",
    ],
    sources: [
      { label: "보건복지부 아동수당", href: "https://www.mohw.go.kr/menu.es?mid=a10711030100" },
      { label: "보건복지부 부모급여", href: "https://www.mohw.go.kr/menu.es?mid=a10711030600" },
    ],
  },
  "work-parenting": {
    title: "2026년 휴가·육아휴직·단축근무 급여 기준을 다시 확인했습니다",
    lead: "9월 18일부터 시행된 최신 상한액 고시와 고용24 안내를 함께 확인했습니다. 휴가 일수와 고용보험 급여는 서로 다른 기준이므로 구분해서 보세요.",
    facts: [
      "일반 육아휴직급여는 1~3개월 월 상한 250만원, 4~6개월 200만원, 7개월 이후 160만원 기준입니다.",
      "육아기 근로시간 단축은 만 12세 이하 또는 초등학교 6학년 이하 자녀가 대상이며, 2026년부터 주당 최초 10시간분의 기준 상한이 250만원으로 올라갔습니다. 나머지 단축시간은 통상임금 80%, 기준 상한 160만원을 적용합니다.",
      "배우자 출산휴가는 20일이고 출산일부터 120일 이내 사용 기준입니다. 2026년 9월 18일 시행 고시의 20일분 급여 상한은 1,684,210원입니다.",
      "출산전후휴가 급여 상한은 최신 고시 기준 90일 660만원, 미숙아 100일 7,333,330원, 다태아 120일 880만원입니다.",
    ],
    sources: [
      { label: "고용24 육아휴직급여", href: "https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=10&systClId=SC00000251&systId=SI00000402" },
      { label: "국가법령정보센터 출산전후휴가 급여등 상한액 고시", href: "https://www.law.go.kr/admRulSc.do?eventGubun=060103&menuId=5&query=%EC%B6%9C%EC%82%B0%EC%A0%84%ED%9B%84%ED%9C%B4%EA%B0%80%20%EA%B8%89%EC%97%AC%EB%93%B1%20%EC%83%81%ED%95%9C%EC%95%A1%20%EA%B3%A0%EC%8B%9C&subMenuId=45&tabMenuId=183" },
    ],
  },
  "care-education": {
    title: "2026년 아이돌봄서비스 요금·지원구간을 다시 확인했습니다",
    lead: "아이돌봄서비스는 같은 시간 이용해도 소득유형과 서비스 종류에 따라 본인부담금이 달라집니다. 2026년 공식 안내의 요금과 정부지원 구간을 다시 대조했습니다.",
    facts: [
      "시간제 기본형 이용요금은 시간당 12,790원입니다.",
      "정부지원 소득기준은 기준 중위소득 250% 이하인 라형까지 확대되어 소득구간별 지원비율이 달라집니다.",
      "시간제 서비스는 생후 3개월 이상 만 12세 이하, 영아종일제는 생후 3개월 이상 만 36개월 이하가 기본 대상 연령입니다.",
    ],
    sources: [
      { label: "아이돌봄서비스 공식 안내", href: "https://idolbom.go.kr/front/biz/srvcGuide" },
      { label: "성평등가족부 아이돌봄 지원사업", href: "https://www.mogef.go.kr/sp/fam/sp_fam_f005.do" },
    ],
  },
};

export async function generateStaticParams() {
  return (Object.keys(governmentPolicyCategories) as GovernmentPolicyCategory[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in governmentPolicyCategories)) return {};
  const typed = category as GovernmentPolicyCategory;
  const info = governmentPolicyCategories[typed];
  const latest = verifiedUpdates[typed];

  return {
    title: `${info.label} | 2026 정부지원정책 정리 | MomTools`,
    description: `${info.description} ${latest ? "2026년 10월 공식자료 재확인 기준" : POLICY_VERIFIED_LABEL}으로 대상, 지원내용, 신청 전 확인할 점을 정리했습니다.`,
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
  const latest = verifiedUpdates[typed];
  const categoryVerifiedAt = latest ? REVIEWED_AT : POLICY_VERIFIED_AT;
  const categoryVerifiedLabel = latest ? "2026.10.10 공식자료 재확인" : POLICY_VERIFIED_LABEL;
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
    dateModified: categoryVerifiedAt,
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
          <span className="mt-badge">{info.label} · {categoryVerifiedLabel}</span>
          <h1 className="mt-title-xl mt-5">{info.label}을 필요한 상황별로 확인해 보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{info.heroLead}</p>
          <div className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
            {entries.length}개 정책 질문 정리
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={categoryVerifiedAt}
          note={latest
            ? "변경 가능성이 큰 금액·대상·기간은 2026년 10월 10일 현재 공식자료로 재확인했습니다. 개별 신청 전에는 상세페이지의 공식자료와 담당 기관 안내를 최종 기준으로 확인해 주세요."
            : "정책 기준은 공식자료 확인일 기준으로 정리했습니다. 실제 신청 전에는 복지로, 정부24, 고용24, 주민센터, 보건소 등 공식 창구에서 최종 조건을 확인해 주세요."}
        />

        {latest ? (
          <section className="mt-card-soft p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">2026 최신 기준 재확인</div>
            <h2 className="mt-title-md mt-3">{latest.title}</h2>
            <p className="mt-text-main mt-3">{latest.lead}</p>
            <ul className="mt-result-list mt-5">
              {latest.facts.map((fact) => (
                <li key={fact} className="mt-result-list-item">
                  <span className="mt-result-value">{fact}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {latest.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:border-amber-300"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}

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
