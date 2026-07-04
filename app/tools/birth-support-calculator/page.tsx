import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import { birthSupportRegions, calculateBirthSupport } from "@/data/birthSupportCalculator";
import BirthSupportCalculatorClient from "./BirthSupportCalculatorClient";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/birth-support-calculator");
const firstResult = calculateBirthSupport("jeju", "first");
const secondResult = calculateBirthSupport("jeju", "second");

export const metadata: Metadata = {
  title: "출산지원금 계산기 | 지역별 첫째 둘째 지원금 예상 금액 | MomTools",
  description:
    "2026년 전국 공통 출산·육아 지원금과 제주도·경남·경북·전남·전북·충남·충북·경기·강원·세종·울산·대전·광주·인천·대구·부산·서울 지역별 출산지원금 자료를 반영해 첫만남이용권, 부모급여, 아동수당, 지자체 출산지원금을 먼저 합산하고 가정양육수당처럼 조건에 따라 달라지는 지원은 별도로 안내합니다.",
  keywords: [
    "출산지원금 계산기",
    "지역별 출산지원금",
    "경남 출산지원금",
    "경북 출산지원금",
    "전남 출산지원금",
    "전북 출산지원금",
    "충남 출산지원금",
    "충북 출산지원금",
    "경기 출산지원금",
    "강원 출산지원금",
    "세종 출산지원금",
    "울산 출산지원금",
    "대전 출산지원금",
    "광주 출산지원금",
    "인천 출산지원금",
    "대구 출산지원금",
    "부산 출산지원금",
    "서울 출산지원금",
    "제주 출산지원금",
    "첫째 출산지원금",
    "둘째 출산지원금",
    "첫만남이용권",
    "2026 출산지원금",
  ],
  alternates: { canonical: buildCanonical("/tools/birth-support-calculator") },
  openGraph: {
    title: "출산지원금 계산기 | 지역별 첫째 둘째 지원금 예상 금액",
    description: "사는 지역과 출생 순위를 선택해 전국 공통 지원금과 지자체 출산지원금을 나누어 확인하세요.",
    url: buildCanonical("/tools/birth-support-calculator"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const faq = [
  {
    q: "지역별 출산지원금 계산기는 어떤 금액을 합산하나요?",
    a: "첫만남이용권, 부모급여, 아동수당, 그리고 선택한 지역의 지자체 출산지원금이 기본 예상 금액으로 먼저 합산돼요. 가정양육수당은 어린이집·유치원 이용 여부에 따라 달라지는 조건부 지원이라 별도 항목으로 확인할 수 있어요.",
  },
  {
    q: "지자체 출산지원금은 한 번에 지급되나요?",
    a: "지역마다 다릅니다. 일부 지역은 일시금, 일부 지역은 2년~9년 분할, 지역화폐·선불카드·현물 지원으로 지급됩니다. 실제 지급 일정은 신청 시 주민센터에서 다시 확인하는 것이 좋습니다.",
  },
  {
    q: "가정양육수당도 무조건 받을 수 있나요?",
    a: "가정양육수당은 어린이집이나 유치원 등 보육·교육 서비스를 이용하지 않고 가정에서 양육하는 경우에 확인해야 하는 조건부 지원입니다. 계산기에서는 기본 예상 합계에 넣지 않고, 24개월 이상~86개월 미만 일반 아동 기준 월 10만 원을 조건 충족 시 추가 가능 금액으로 따로 보여줍니다.",
  },
  {
    q: "전입한 지 얼마 안 됐으면 받을 수 있나요?",
    a: "지역마다 거주기간 기준이 다릅니다. 3개월, 6개월, 12개월 거주 조건이 있는 곳도 있고 출생신고일 기준 주소만 보는 곳도 있으므로 계산 결과와 함께 각 지역의 거주 조건을 확인해야 합니다.",
  },
];

export default function Page() {
  const summaryRows = [
    {
      label: "첫째아 기준 예시",
      value: firstResult.formattedTotal,
      hint: "첫만남이용권, 부모급여, 아동수당, 제주도 출산지원금을 우선 합산한 참고 금액입니다.",
    },
    {
      label: "둘째아 이상 기준 예시",
      value: secondResult.formattedTotal,
      hint: "첫만남이용권과 지자체 지원금이 출생 순위에 따라 달라질 수 있습니다.",
    },
    {
      label: "지급 방식",
      value: "바우처 · 월 지급 · 현금",
      hint: "지역에 따라 현금, 지역화폐, 선불카드, 현물 지원이 섞일 수 있습니다.",
    },
  ] as const;

  const checkRows = [
    "거주기간 조건은 지역마다 3개월, 6개월, 12개월 등으로 다를 수 있습니다.",
    "첫째, 둘째, 셋째 이상에 따라 금액과 지급 방식이 달라집니다.",
    "출생 후 60일, 90일, 180일, 1년 이내처럼 신청기한이 있는 지역이 있습니다.",
    "신청 직전에는 관할 주민센터나 공식 안내에서 최신 금액과 조건을 다시 확인해야 합니다.",
  ] as const;

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">육아 계산기 · 지역별 출산지원금</span>
          <h1 className="mt-title-lg mt-4">지역별 출산지원금은 조건 확인이 먼저입니다</h1>
          <p className="mt-text-main mt-3">
            거주 지역과 출생 순위를 선택해 전국 공통 지원금과 지자체 출산지원금을 참고용으로 합산합니다.
            실제 지급 여부는 거주기간, 신청기한, 지급 방식에 따라 달라질 수 있어요.
          </p>
        </section>

        <BirthSupportCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="2026년 전국 공통 출산·육아 지원금과 지역별 안내 자료를 기준으로 합산해 보여드려요. 신청 직전엔 관할 주민센터에서 최신 금액·조건을 다시 확인해 주세요."
        />

        <details className="mt-section-details">
          <summary className="mt-section-summary"><span>예상 금액 기준과 신청 전 확인할 조건</span><span className="text-xs font-bold text-amber-700">열기</span></summary>
          <div className="mt-detail-body space-y-4">
            <section className="rounded-2xl bg-white px-4 py-3">
              <h2 className="mt-title-md">예상 금액을 볼 때 참고할 기준</h2>
              <div className="mt-result-list mt-4">
                {summaryRows.map((row) => (
                  <div key={row.label} className="mt-result-list-item">
                    <div>
                      <div className="mt-result-label">{row.label}</div>
                      <div className="mt-result-value">{row.value}</div>
                      <p className="mt-result-hint mt-1">{row.hint}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl bg-white px-4 py-3">
              <h2 className="mt-title-md">신청 전 확인할 조건</h2>
              <ul className="mt-result-list mt-4">
                {checkRows.map((item) => (
                  <li key={item} className="mt-result-list-item border-amber-100 bg-amber-50/60">
                    <span className="mt-result-value text-amber-900">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </details>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="mt-section-details">
                <summary className="mt-section-summary">{item.q}</summary>
                <p className="mt-detail-body">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <RegionIndexSection />

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 확인하기</div>
          <div className="mt-result-list mt-4">
            <Link href="/policy/local-check" className="mt-list-card">
              <div className="font-semibold text-slate-800">지역별 출산지원금</div>
              <div className="mt-1 text-sm leading-6 text-slate-500">지자체 지원금 조건과 신청 기한을 함께 확인해요.</div>
            </Link>
            <Link href="/policy/pregnancy-birth/first-encounter-voucher-data" className="mt-list-card">
              <div className="font-semibold text-slate-800">첫만남이용권</div>
              <div className="mt-1 text-sm leading-6 text-slate-500">전국 공통 바우처 금액과 사용 기한을 봐요.</div>
            </Link>
            <Link href="/policy/childcare-benefit/parental-benefit-data" className="mt-list-card">
              <div className="font-semibold text-slate-800">부모급여</div>
              <div className="mt-1 text-sm leading-6 text-slate-500">출산 후 매월 받을 수 있는 지원금도 이어서 확인해요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * 지역별 출산지원금 상세 페이지로 바로 이동할 수 있도록 시·도 단위로 묶어 보여줍니다.
 */
function RegionIndexSection() {
  const grouped = new Map<string, typeof birthSupportRegions>();
  for (const region of birthSupportRegions) {
    const key = region.sido;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(region);
  }

  const sidoOrder = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원특별자치도",
    "강원도",
    "충청북도",
    "충청남도",
    "전북특별자치도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  const ordered = sidoOrder
    .map((sido) => [sido, grouped.get(sido)] as const)
    .filter(([, regions]) => Array.isArray(regions) && regions.length > 0);

  return (
    <section className="mt-card p-4 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">지역별 바로가기</div>
      <h2 className="mt-title-md mt-3">시·군·구별 출산지원금 페이지</h2>
      <p className="mt-text-sub mt-3">
        지역명을 누르면 해당 지자체 출산지원금 페이지로 이동합니다. 모바일에서는 시·도별로 접어서 확인할 수 있게 정리했습니다.
      </p>
      <div className="mt-4 space-y-3">
        {ordered.map(([sido, regions]) => (
          <details key={sido} className="mt-section-details">
            <summary className="mt-section-summary">{sido}</summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {regions!.map((region) => {
                const sigungu = region.sigungu === "전체" ? region.sido : region.sigungu;
                return (
                  <Link
                    key={region.regionCode}
                    href={`/tools/birth-support-calculator/${region.regionCode}`}
                    className="rounded-full border border-amber-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-700"
                  >
                    {sigungu}
                  </Link>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
