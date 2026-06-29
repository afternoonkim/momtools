import Link from "next/link";
import type { Metadata } from "next";
import { getMonthlyGuidesFromDb } from "@/lib/repositories/guides-db";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "월령별 육아 로드맵 | 생후 0개월부터 36개월까지 발달·수유·수면 가이드",
  description: "생후 0개월 신생아부터 36개월 유아까지 월령별 발달, 수유, 수면, 이유식, 놀이, 병원 상담 신호를 부모 관점으로 자세히 정리했습니다.",
  keywords: ["월령별 육아", "생후 개월수 발달", "아기 수유량", "아기 수면", "이유식 시작", "아기 발달"],
  alternates: { canonical: "https://momtools.kr/monthly-guide" },
};

export const revalidate = 3600;

export default async function MonthlyGuidePage() {
  const monthlyGuideItems = await getMonthlyGuidesFromDb();

  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">월령별 확인</span>
          <h1 className="mt-title-xl mt-4">생후 개월수별로 지금 필요한 기준을 확인하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            수유, 수면, 이유식, 놀이, 발달 확인 포인트를 월령별로 짧게 나누어 정리했습니다.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <AdFitAd {...ADFIT_UNITS.contentMedium} />

        <section className="mt-simple-list" aria-label="월령별 육아 가이드 목록">
          {monthlyGuideItems.map((item) => (
            <Link key={item.slug} href={`/monthly-guide/${item.slug}`} className="mt-simple-list-item">
              <span className="text-xs font-bold text-emerald-700">{item.ageLabel}</span>
              <strong className="mt-1 block text-base font-extrabold text-slate-900">{item.title}</strong>
              <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{item.summary}</span>
              <span className="mt-2 flex flex-wrap gap-1.5">
                {item.keyChecks.slice(0, 2).map((check) => (
                  <span key={check} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{check}</span>
                ))}
              </span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
