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
const CHILDCARE_BIRTH_SUPPORT_URL = "https://www.childcare.go.kr/?menuno=279";
const MOHW_CHILD_ALLOWANCE_URL = "https://www.mohw.go.kr/menu.es?mid=a10711030100";
const MOHW_BIRTH_POLICY_URL = "https://www.mohw.go.kr/menu.es?mid=a10711020100";

export const metadata: Metadata = {
  title: "출산지원금 계산기 | 지역별 첫째 둘째 지원금 예상 금액 | MomTools",
  description:
    "2026년 전국 공통 출산·육아 지원금과 지역별 출산지원금 자료를 참고해 예상 금액을 계산합니다. 지자체 금액·거주기간·신청기한은 수시로 바뀔 수 있어 아이사랑과 관할 주민센터 최신 안내를 최종 기준으로 확인해야 합니다.",
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
    description: "사는 지역과 출생 순위를 선택해 여러 해에 걸친 지원금의 등록 기준액을 비교하세요. 실제 수령액·즉시 지급액과 다릅니다.",
    url: buildCanonical("/tools/birth-support-calculator"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const faq = [
  {
    q: "지역별 출산지원금 계산기는 어떤 금액을 합산하나요?",
    a: "첫만남이용권, 부모급여, 아동수당의 108개월 비교 시나리오, 선택 지역의 지자체 출산지원금 등록액이 합산돼요. 현금 지급 예상액이나 평생 최대액이 아니며, 인구감소지역 아동수당 가산 등은 별도로 확인해야 합니다. 가정양육수당은 어린이집·유치원 이용 여부에 따라 달라지는 조건부 지원이라 별도 항목으로 확인할 수 있어요.",
  },
  {
    q: "계산기에 나온 지자체 금액이 현재 확정 금액인가요?",
    a: "아닙니다. 계산기는 각 지역 데이터의 기준일에 확인된 내용을 바탕으로 한 참고용 예상치입니다. 아이사랑 출산지원금 게시판은 2026년 전체 업데이트 이후에도 일부 지역이 개별 갱신되고 있으므로 신청 직전에는 해당 지역 최신 게시물과 관할 주민센터 안내를 다시 확인해야 합니다.",
  },
  {
    q: "지자체 출산지원금은 한 번에 지급되나요?",
    a: "지역마다 다릅니다. 일부 지역은 일시금, 일부 지역은 수년간 분할 지급하고 지역화폐·선불카드·현물 지원을 제공하기도 합니다. 실제 지급 일정은 신청 시 최신 공고와 주민센터에서 다시 확인하세요.",
  },
  {
    q: "가정양육수당도 무조건 받을 수 있나요?",
    a: "가정양육수당은 어린이집이나 유치원 등 보육·교육 서비스를 이용하지 않고 가정에서 양육하는 경우에 확인해야 하는 조건부 지원입니다. 계산기에서는 기본 예상 합계에 넣지 않고 조건 충족 시 추가 가능 금액으로 따로 보여줍니다.",
  },
  {
    q: "전입한 지 얼마 안 됐으면 받을 수 있나요?",
    a: "지역마다 거주기간 기준이 다릅니다. 일정 기간 계속 거주해야 하거나 출생신고일·신청일 주소를 보는 등 기준이 다르므로 계산 결과와 함께 해당 지자체의 최신 거주 조건을 확인해야 합니다.",
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
    "지역 데이터마다 기준일이 다르므로 계산 결과의 자료 기준일을 먼저 확인합니다.",
    "거주기간, 출생 순위, 신청기한, 지급 방식은 지자체 공고가 바뀌면 계산 결과와 달라질 수 있습니다.",
    "첫만남이용권·아동수당처럼 전국 공통 제도와 지자체 자체 지원을 구분해서 확인합니다.",
    "신청 직전에는 아이사랑 최신 게시물과 관할 주민센터·보건소 안내를 최종 기준으로 확인합니다.",
  ] as const;

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">육아 계산기 · 지역별 출산지원금</span>
          <h1 className="mt-title-lg mt-4">지역별 출산지원금은 조건 확인이 먼저입니다</h1>
          <p className="mt-text-main mt-3">
            거주 지역과 출생 순위를 선택해 전국 공통 지원금과 지자체 출산지원금을 참고용으로 합산합니다.
            실제 지급 여부는 거주기간, 신청기한, 지급 방식과 최신 지자체 공고에 따라 달라질 수 있어요.
          </p>
        </section>

        <BirthSupportCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="2026년 10월 10일 전국 공통 제도와 아이사랑 출산지원금 게시판의 최신 갱신 흐름을 다시 확인했습니다. 계산기의 지자체 금액은 각 지역 데이터 기준일의 참고치이므로 신청 직전 최신 공고와 관할 주민센터 안내를 최종 기준으로 확인해 주세요."
        />

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">공식자료 우선 확인</div>
          <h2 className="mt-title-md mt-3">지역 지원금은 계산 결과보다 최신 공고가 우선입니다</h2>
          <p className="mt-text-main mt-3">
            아이사랑 출산지원금 게시판은 2026년 3월 전체 업데이트 후에도 일부 시·군·구 게시물이 추가로 갱신되고 있습니다.
            그래서 계산기에 저장된 지역별 기준일과 실제 신청일 사이에 금액·거주기간·신청기한이 달라질 수 있습니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={CHILDCARE_BIRTH_SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="mt-chip-link">아이사랑 지역별 출산지원금</a>
            <a href={MOHW_BIRTH_POLICY_URL} target="_blank" rel="noopener noreferrer" className="mt-chip-link">보건복지부 첫만남이용권</a>
            <a href={MOHW_CHILD_ALLOWANCE_URL} target="_blank" rel="noopener noreferrer" className="mt-chip-link">보건복지부 아동수당</a>
          </div>
        </section>

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
        지역명을 누르면 해당 지자체 출산지원금 페이지로 이동합니다. 각 지역 페이지의 자료 기준일을 확인한 뒤 최신 공고와 다시 대조해 주세요.
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