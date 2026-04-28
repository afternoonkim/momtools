import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import { birthSupportRegions, calculateBirthSupport } from "@/data/birthSupportCalculator";
import BirthSupportCalculatorClient from "./BirthSupportCalculatorClient";

const pageDates = getPageDates("/tools/birth-support-calculator");
const firstResult = calculateBirthSupport("jeju", "first");
const secondResult = calculateBirthSupport("jeju", "second");

export const metadata: Metadata = {
  title: "출산지원금 계산기 | 지역별 첫째 둘째 지원금 예상 금액 | MomTools",
  description:
    "2026년 전국 공통 출산·육아 지원금과 제주도·경남·경북·전남·전북·충남·충북·경기·강원·세종·울산·대전·광주·인천·대구·부산·서울 지역별 출산지원금 자료를 반영해 첫만남이용권, 부모급여, 아동수당, 가정양육수당, 지자체 출산지원금을 합산 계산합니다.",
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
    a: "현재 버전은 첫만남이용권, 부모급여, 아동수당, 가정양육수당, 선택 지역의 지자체 출산지원금을 합산합니다. 전국 공통 지원금은 부모급여 1,800만 원, 비수도권 아동수당 최대 1,134만 원, 가정양육수당 최대 620만 원을 반영했습니다.",
  },
  {
    q: "지자체 출산지원금은 한 번에 지급되나요?",
    a: "지역마다 다릅니다. 일부 지역은 일시금, 일부 지역은 2년~9년 분할, 지역화폐·선불카드·현물 지원으로 지급됩니다. 실제 지급 일정은 신청 시 주민센터에서 다시 확인하는 것이 좋습니다.",
  },
  {
    q: "가정양육수당도 무조건 받을 수 있나요?",
    a: "가정양육수당은 어린이집이나 유치원 등 보육·교육 서비스를 이용하지 않고 가정에서 양육하는 경우에 확인해야 하는 조건부 지원입니다. 계산기에는 24개월 이상~86개월 미만 일반 아동 기준 월 10만 원을 포함했지만 실제 수령 여부는 보육서비스 이용 상태에 따라 달라질 수 있습니다.",
  },
  {
    q: "전입한 지 얼마 안 됐으면 받을 수 있나요?",
    a: "지역마다 거주기간 기준이 다릅니다. 3개월, 6개월, 12개월 거주 조건이 있는 곳도 있고 출생신고일 기준 주소만 보는 곳도 있으므로 계산 결과와 함께 각 지역의 거주 조건을 확인해야 합니다.",
  },
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">육아 계산기 · 지역별 출산지원금</span>
          <h1 className="mt-title-xl mt-5">지역별 출산지원금 계산기, 첫째와 둘째 이상 예상 금액을 확인해 보세요</h1>
          <p className="mt-text-main mt-4">
            출산지원금은 출생 직후 받는 첫만남이용권, 매월 지급되는 부모급여와 아동수당, 조건에 따라 받을 수 있는 가정양육수당, 그리고 지자체가 따로 지급하는 출산지원금으로 나뉩니다. 그래서 단순히 “출산지원금 얼마”만 검색하면 실제로 우리 집이 받을 수 있는 금액을 한눈에 파악하기 어렵습니다.
          </p>
          <p className="mt-text-sub mt-4">
            이 페이지는 제공해주신 2026년 전국 공통 출산·육아 지원금 기준과 제주도·경남·경북·전남·전북·충남·충북·경기·강원·세종·울산·대전·광주·인천·대구·부산·서울 지역별 출산지원금 자료를 바탕으로, 사용자가 거주 지역과 출생 순위를 선택하면 예상 지원 가치를 바로 확인할 수 있도록 만든 계산기 페이지입니다.
          </p>
        </section>

        <BirthSupportCalculatorClient />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="출산지원금 계산기 페이지는 제공된 2026년 전국 공통 지원금 기준과 아이사랑 2026년 지역별 출산지원금 게시물 기준으로 구성했으며, 지역별 데이터가 추가될 때 같은 계산 구조로 확장할 수 있습니다."
        />

        <section className="grid gap-5 md:grid-cols-3">
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">첫째아 기준</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">{firstResult.formattedTotal}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">첫만남이용권 200만 원, 부모급여 1,800만 원, 비수도권 아동수당 최대 1,134만 원, 가정양육수당 최대 620만 원, 제주도 출산지원금 500만 원을 합산한 조건 충족 시 예상 금액입니다.</p>
          </article>
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">둘째아 이상 기준</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">{secondResult.formattedTotal}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">첫만남이용권 300만 원과 제주도 출산지원금 1,000만 원에 부모급여 1,800만 원, 비수도권 아동수당, 가정양육수당을 더한 조건 충족 시 예상 금액입니다.</p>
          </article>
          <article className="mt-card p-6">
            <div className="text-sm font-semibold text-amber-600">지급 방식</div>
            <h2 className="mt-3 text-2xl font-black text-slate-900">바우처 + 월 지급 + 현금</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">첫만남이용권은 국민행복카드 바우처, 부모급여·아동수당·가정양육수당은 월 단위 현금성 지원, 지자체 출산지원금은 현금, 지역화폐, 선불카드, 현물 지원 등으로 구분해 보여줍니다.</p>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">지역별 출산지원금 신청 전 확인할 조건</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            현재 계산기에는 총 {birthSupportRegions.length}개 지역 데이터가 들어가 있습니다. 같은 도 안에서도 시·군·구마다 금액, 지급 방식, 거주기간, 신청기한이 다르기 때문에 계산 결과를 본 뒤 반드시 신청 조건을 함께 확인해야 합니다.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-amber-50/70 p-5 text-sm leading-7 text-slate-700">
              <b className="text-slate-900">거주기간</b><br />
              지역별로 출생일 기준 3개월, 6개월, 12개월 이상 거주 조건이 다릅니다. 조건을 충족하지 못한 경우 일정 기간 경과 후 신청 가능한 지역도 있습니다.
            </div>
            <div className="rounded-3xl bg-amber-50/70 p-5 text-sm leading-7 text-slate-700">
              <b className="text-slate-900">출생순위</b><br />
              첫째, 둘째, 셋째, 넷째 이상에 따라 금액이 크게 달라집니다. 일부 지역은 넷째와 다섯째 이상 금액이 다르므로 상세 안내 문구를 확인해야 합니다.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <b className="text-slate-900">지급방식</b><br />
              현금 일시금뿐 아니라 분할 지급, 지역화폐, 선불카드, 상품권, 출산축하용품, 건강보험료 지원으로 나뉩니다.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <b className="text-slate-900">신청기한</b><br />
              출생신고 시 바로 신청하는 지역도 있고, 출생 후 60일·90일·180일·1년 이내 신청해야 하는 지역도 있습니다.
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">자주 묻는 질문</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 확인하기</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/policy/local-check" className="mt-list-card">
              <div className="font-semibold text-slate-800">지역별 출산지원금</div>
              <div className="mt-2 text-sm text-slate-500">지자체 지원금은 지역별 조건과 신청 기한이 다르므로 함께 확인해 보세요.</div>
            </Link>
            <Link href="/policy/pregnancy-birth/first-encounter-voucher-data" className="mt-list-card">
              <div className="font-semibold text-slate-800">첫만남이용권</div>
              <div className="mt-2 text-sm text-slate-500">전국 공통 바우처 금액과 사용 기한을 자세히 볼 수 있습니다.</div>
            </Link>
            <Link href="/policy/childcare-benefit/parental-benefit-data" className="mt-list-card">
              <div className="font-semibold text-slate-800">부모급여</div>
              <div className="mt-2 text-sm text-slate-500">출산 후 매월 받을 수 있는 양육 지원금도 이어서 확인하세요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
