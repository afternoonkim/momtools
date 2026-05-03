import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import { familyFinanceArticles } from "@/data/familyFinance";

export const metadata: Metadata = {
  title: "출산·육아 가계 가이드 | 부모급여 자녀 적금 청약 연말정산 한 번에 | MomTools",
  description:
    "부모급여 활용법, 첫만남이용권 사용처, 자녀 적금·청약 만들기, 연말정산 자녀세액공제, 산후조리비 의료비 공제까지 한국 가정의 출산·육아 가계 흐름을 한곳에서 정리한 가이드 모음이에요.",
  keywords: [
    "출산 가계 가이드",
    "육아 가계부",
    "부모급여 활용",
    "자녀 적금",
    "주택청약 0세",
    "자녀세액공제",
    "산후조리비 의료비 공제",
    "다자녀 가계 운용",
    "출산 후 가계 계획",
    "한국 가정 가계",
  ],
  alternates: { canonical: buildCanonical("/info/family-finance") },
  openGraph: {
    title: "출산·육아 가계 가이드 | MomTools",
    description:
      "부모급여, 자녀 적금·청약, 연말정산 자녀공제, 의료비 공제까지 한국 가정 출산 후 가계 흐름을 한 번에.",
    url: buildCanonical("/info/family-finance"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

export default function FamilyFinanceHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">출산·육아 가계 가이드</span>
          <h1 className="mt-title-xl mt-5">받는 돈 다음에 챙길 가계 흐름까지 한자리에서</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            부모급여, 첫만남이용권, 아동수당, 지자체 출산지원금처럼 통장으로 들어오는 돈은 받기 시작하면 끝이 아니라 거기서부터 가계 운용이 시작돼요.
            자녀 적금, 주택청약, 연말정산 자녀세액공제, 의료비 세액공제처럼 함께 챙기면 좋은 흐름을 한국 가정 기준으로 정리해 두었어요. 궁금한 주제로 바로 들어가 보세요.
          </p>
        </section>

        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {familyFinanceArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/info/family-finance/${article.slug}`}
              className="mt-card p-6 transition hover:-translate-y-0.5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{article.topicShort}</div>
              <h2 className="mt-3 text-lg font-bold leading-7 text-slate-900">{article.title}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{article.intro}</p>
              <div className="mt-5 text-sm font-semibold text-amber-700">자세히 읽기 →</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 보면 좋은 메뉴</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/tools/birth-support-calculator" className="mt-list-card">
              <div className="font-semibold text-slate-800">출산지원금 계산기</div>
              <div className="mt-2 text-sm text-slate-500">사는 지역과 출생 순위로 받게 될 예상 금액을 먼저 확인해 보세요.</div>
            </Link>
            <Link href="/policy" className="mt-list-card">
              <div className="font-semibold text-slate-800">정부정책 한눈에</div>
              <div className="mt-2 text-sm text-slate-500">부모급여, 아동수당, 첫만남이용권 같은 공식 제도 정보를 함께 보세요.</div>
            </Link>
            <Link href="/checklists/birth" className="mt-list-card">
              <div className="font-semibold text-slate-800">출산 준비 체크리스트</div>
              <div className="mt-2 text-sm text-slate-500">출산 전후 가계 외에 챙겨야 할 준비물도 같이 점검해 보세요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
