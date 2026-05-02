import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import {
  birthSupportRegions,
  calculateBirthSupport,
  formatWon,
  type BirthSupportRegion,
} from "@/data/birthSupportCalculator";
import BirthSupportCalculatorClient from "../BirthSupportCalculatorClient";

const pageDates = getPageDates("/tools/birth-support-calculator");

type RouteParams = { region: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return birthSupportRegions.map((region) => ({ region: region.regionCode }));
}

function findRegion(regionCode: string): BirthSupportRegion | undefined {
  return birthSupportRegions.find((region) => region.regionCode === regionCode);
}

/**
 * 시도/시군구를 기준으로 사용자 검색에서 자주 쓰이는 지역명 후보를 만듭니다.
 * 예) "충청북도 청주시" → ["청주시", "청주", "충청북도 청주시", "충북 청주시", "충북 청주"]
 */
function buildRegionAliases(region: BirthSupportRegion): string[] {
  const sido = region.sido.trim();
  const sigungu = region.sigungu.trim();

  // 광역시도 짧은 이름 (예: "충청북도" → "충북")
  const sidoShort = sido
    .replace("특별자치도", "")
    .replace("특별자치시", "")
    .replace("광역시", "")
    .replace("특별시", "")
    .replace(/도$/, "")
    .replace(/시$/, "")
    .trim();

  // 시군구 짧은 이름 (예: "청주시" → "청주")
  const sigunguShort =
    sigungu === "전체"
      ? ""
      : sigungu.replace(/(시|군|구)$/, "").trim();

  const aliases = new Set<string>();

  if (sigungu && sigungu !== "전체") {
    aliases.add(sigungu);
    if (sigunguShort) aliases.add(sigunguShort);
    aliases.add(`${sido} ${sigungu}`);
    aliases.add(`${sidoShort} ${sigungu}`);
    if (sigunguShort) aliases.add(`${sidoShort} ${sigunguShort}`);
  } else {
    aliases.add(sido);
    if (sidoShort) aliases.add(sidoShort);
  }

  return Array.from(aliases).filter(Boolean);
}

function getRegionDisplayName(region: BirthSupportRegion): string {
  if (!region.sigungu || region.sigungu === "전체") return region.sido;
  return `${region.sido} ${region.sigungu}`.trim();
}

function getRegionShortName(region: BirthSupportRegion): string {
  if (!region.sigungu || region.sigungu === "전체") {
    return region.sido
      .replace("특별자치도", "")
      .replace("특별자치시", "")
      .replace("광역시", "")
      .replace("특별시", "")
      .trim() || region.sido;
  }
  return region.sigungu;
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { region: regionCode } = await params;
  const region = findRegion(regionCode);
  if (!region) return {};

  const aliases = buildRegionAliases(region);
  const displayName = getRegionDisplayName(region);
  const shortName = getRegionShortName(region);
  const result = calculateBirthSupport(region.regionCode, "first");
  const secondResult = calculateBirthSupport(region.regionCode, "second");

  // 가장 많이 검색되는 표현을 메타 타이틀 앞쪽에 배치
  // 예) "청주 출산지원금 2026 첫째 둘째 예상 금액 | MomTools"
  const title = `${shortName} 출산지원금 2026 첫째 둘째 예상 금액 | MomTools`;
  const description =
    `${displayName} 출산지원금을 첫만남이용권, 부모급여, 아동수당, 가정양육수당, 지자체 출산지원금까지 합산해 ` +
    `첫째 ${result.formattedTotal}, 둘째 ${secondResult.formattedTotal} 예상 금액을 바로 확인할 수 있어요. ` +
    `${shortName} 출산지원금 신청 조건과 지급 방식까지 한 번에 살펴보세요.`;

  const keywords = Array.from(
    new Set<string>([
      ...aliases.map((alias) => `${alias} 출산지원금`),
      ...aliases.map((alias) => `${alias} 출산축하금`),
      ...aliases.map((alias) => `${alias} 출산장려금`),
      `${shortName} 출산지원금 2026`,
      `${shortName} 출산지원금 첫째`,
      `${shortName} 출산지원금 둘째`,
      `${shortName} 출산지원금 셋째`,
      `${shortName} 첫만남이용권`,
      `${shortName} 부모급여`,
      `${shortName} 아동수당`,
      "출산지원금 계산기",
      "지역별 출산지원금",
      "2026 출산지원금",
    ]),
  ).slice(0, 25);

  const canonicalPath = `/tools/birth-support-calculator/${region.regionCode}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: buildCanonical(canonicalPath) },
    openGraph: {
      title,
      description,
      url: buildCanonical(canonicalPath),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "article",
      publishedTime: pageDates.published,
      modifiedTime: region.updatedAt ?? pageDates.updated,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RegionalBirthSupportCalculatorPage({ params }: { params: Promise<RouteParams> }) {
  const { region: regionCode } = await params;
  const region = findRegion(regionCode);
  if (!region) notFound();

  const displayName = getRegionDisplayName(region);
  const shortName = getRegionShortName(region);
  const aliases = buildRegionAliases(region);

  const firstResult = calculateBirthSupport(region.regionCode, "first");
  const secondResult = calculateBirthSupport(region.regionCode, "second");
  const thirdResult = calculateBirthSupport(region.regionCode, "third");
  const fourthResult = calculateBirthSupport(region.regionCode, "fourthPlus");

  const localBenefits = region.benefits.filter((benefit) => benefit.isLocalSupport);
  const pageUrl = buildCanonical(`/tools/birth-support-calculator/${region.regionCode}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "@id": `${pageUrl}#service`,
        name: `${displayName} 출산지원금`,
        description: `${displayName}에서 출생한 아이 가정에 지급되는 출산지원금, 출산축하금, 출산장려금, 다자녀지원금 정보입니다.`,
        serviceType: "출산지원금",
        provider: {
          "@type": "GovernmentOrganization",
          name: displayName,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: displayName,
        },
        audience: {
          "@type": "Audience",
          audienceType: "출산 가정",
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `${shortName} 출산지원금은 첫째와 둘째 얼마인가요?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${displayName} 출산지원금을 전국 공통 지원과 합산하면 첫째 ${firstResult.formattedTotal}, 둘째 ${secondResult.formattedTotal} 예상 금액으로 확인할 수 있습니다.`,
            },
          },
          {
            "@type": "Question",
            name: `${shortName} 출산지원금 셋째와 넷째 이상 금액은 어떻게 되나요?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${displayName} 셋째 ${thirdResult.formattedTotal}, 넷째 이상 ${fourthResult.formattedTotal} 예상 금액을 한 번에 확인할 수 있습니다.`,
            },
          },
          {
            "@type": "Question",
            name: `${shortName} 출산지원금은 어떻게 신청하나요?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `출생신고 후 정부24 행복출산 원스톱서비스 또는 ${displayName} 관할 주민센터에서 신청할 수 있고, 일부 항목은 별도 보건소·복지로 신청이 필요합니다. 거주기간과 신청기한 조건은 항목마다 다르므로 계산 결과 아래 안내를 함께 확인해 보세요.`,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "육아 계산기", item: buildCanonical("/tools") },
          { "@type": "ListItem", position: 3, name: "출산지원금 계산기", item: buildCanonical("/tools/birth-support-calculator") },
          { "@type": "ListItem", position: 4, name: `${displayName} 출산지원금`, item: pageUrl },
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
          <Link href="/tools" className="hover:text-amber-700">육아 계산기</Link>
          <span>/</span>
          <Link href="/tools/birth-support-calculator" className="hover:text-amber-700">출산지원금 계산기</Link>
          <span>/</span>
          <span>{displayName}</span>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{region.sido} 출산지원금</span>
          <h1 className="mt-title-xl mt-5">{shortName} 출산지원금 2026 첫째·둘째·셋째 얼마 받을 수 있나요?</h1>
          <p className="mt-text-main mt-4">
            {displayName} 출산지원금은 전국 공통 지원금(첫만남이용권, 부모급여, 아동수당, 가정양육수당)과 {displayName}이 자체적으로 지급하는 출산축하금·출산장려금·다자녀지원금을 합쳐서 봐야 실제 받을 수 있는 금액에 가까워요. 출생 순위별 합산 예상 금액을 한 번에 보고, {shortName} 지자체 지원 항목까지 같이 살펴보세요.
          </p>
          <p className="mt-text-sub mt-4">
            검색 키워드 예시: {aliases.map((a) => `“${a} 출산지원금”`).join(", ")}.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">첫째아 예상</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">{firstResult.formattedTotal}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">전국 공통 지원금 + {shortName} 지자체 지원금을 합산한 첫째아 예상 합계입니다.</p>
          </article>
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">둘째아 예상</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">{secondResult.formattedTotal}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{shortName} 둘째아부터 추가되는 다자녀 지원과 첫만남이용권 증액분이 함께 들어간 예상 금액이에요.</p>
          </article>
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">셋째아 예상</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">{thirdResult.formattedTotal}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{shortName} 셋째아 이상에서 받을 수 있는 다자녀 지자체 지원금 증액 기준 예상 금액입니다.</p>
          </article>
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">넷째 이상 예상</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">{fourthResult.formattedTotal}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">넷째 이상은 {shortName} 조례에 따른 추가 지원이 큰 폭으로 적용될 수 있어 따로 확인해 보세요.</p>
          </article>
        </section>

        <BirthSupportCalculatorClient
          initialRegionCode={region.regionCode}
          initialBirthOrder="first"
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={region.updatedAt ?? pageDates.updated}
          note={`${displayName} 출산지원금은 ${region.sourceName ?? "아이사랑 출산지원금 게시판"}을 기준으로 보여드려요. 신청 직전엔 관할 주민센터에서 최신 금액·조건을 다시 확인해 주세요.`}
        />

        {localBenefits.length > 0 ? (
          <section className="mt-card p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{shortName} 지자체 지원 항목</div>
            <h2 className="mt-title-md mt-3">{displayName} 출산지원금 항목별 자세히 보기</h2>
            <div className="mt-5 space-y-4">
              {localBenefits.map((benefit) => (
                <article key={benefit.id} className="rounded-3xl border border-amber-100 bg-amber-50/40 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700">{benefit.category}</span>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-500">{benefit.paymentType}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{benefit.name}</h3>
                  <div className="mt-3 grid gap-2 text-sm leading-7 text-slate-700 md:grid-cols-2">
                    <div>
                      <b className="text-slate-900">금액</b>: {benefit.displayValue || formatWon(benefit.amountByBirthOrder.first)}
                    </div>
                    <div>
                      <b className="text-slate-900">신청기한</b>: {benefit.applicationPeriod}
                    </div>
                    <div>
                      <b className="text-slate-900">신청방법</b>: {benefit.applicationMethod}
                    </div>
                    <div>
                      <b className="text-slate-900">문의</b>: {benefit.contact}
                    </div>
                  </div>
                  {benefit.residenceCondition ? (
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      <b className="text-slate-800">거주조건</b>: {benefit.residenceCondition}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">{shortName} 출산지원금 신청 전 자주 묻는 질문</h2>
          <div className="mt-5 space-y-4">
            <article className="rounded-3xl border border-slate-100 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{shortName} 출산지원금은 어떻게 신청하나요?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                출생신고 후 정부24 행복출산 원스톱서비스에서 첫만남이용권·부모급여·아동수당과 함께 신청할 수 있고,
                {displayName} 자체 지원금은 관할 주민센터 또는 보건소에서 별도 신청이 필요한 경우가 있어요.
                항목마다 신청기한과 거주기간 조건이 다르니 계산 결과 아래 항목별 안내를 함께 확인해 보세요.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">전입한 지 얼마 안 됐는데 {shortName} 출산지원금을 받을 수 있나요?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                지역마다 출생일 또는 신청일 기준 거주기간 조건이 다릅니다. {shortName}은 항목별로 3개월·6개월·12개월
                거주 조건이 적용될 수 있으니, 각 항목의 “거주조건” 안내를 보고 우리 집 전입일을 함께 비교해 보세요.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{shortName} 출산지원금은 일시금인가요, 분할 지급인가요?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                항목에 따라 일시금, 분할 지급, 지역화폐, 선불카드, 출산축하용품 등 지급 방식이 다양합니다.
                계산 결과 카드 옆 “{`{지급방식}`}” 표시와 항목별 안내 문구에서 우리 가정에 맞는 방식인지 확인해 보세요.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 확인하기</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/tools/birth-support-calculator" className="mt-list-card">
              <div className="font-semibold text-slate-800">출산지원금 계산기 전체</div>
              <div className="mt-2 text-sm text-slate-500">다른 지역과 비교해 보거나 출생 순위를 다시 선택해 보세요.</div>
            </Link>
            <Link href="/policy/local-check" className="mt-list-card">
              <div className="font-semibold text-slate-800">지역별 출산지원금 안내</div>
              <div className="mt-2 text-sm text-slate-500">우리 시·도 단위에서 챙겨야 할 출산지원금 흐름을 한자리에서 살펴볼 수 있어요.</div>
            </Link>
            <Link href="/policy/pregnancy-birth/first-encounter-voucher-data" className="mt-list-card">
              <div className="font-semibold text-slate-800">첫만남이용권</div>
              <div className="mt-2 text-sm text-slate-500">전국 공통 바우처 금액과 사용 기한을 자세히 볼 수 있어요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
