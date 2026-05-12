import Link from "next/link";
import type { Metadata } from "next";
import { monthlyGuideItems } from "@/data/monthlyGuide";

export const metadata: Metadata = {
  title: "월령별 육아 로드맵 | 생후 0개월부터 36개월까지 발달·수유·수면 가이드",
  description: "생후 0개월 신생아부터 36개월 유아까지 월령별 발달, 수유, 수면, 이유식, 놀이, 병원 상담 신호를 부모 관점으로 자세히 정리했습니다.",
  keywords: ["월령별 육아", "생후 개월수 발달", "아기 수유량", "아기 수면", "이유식 시작", "아기 발달"],
  alternates: { canonical: "https://momtools.kr/monthly-guide" },
};

export default function MonthlyGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-sm sm:px-8">
        <p className="text-sm font-semibold text-emerald-200">월령별 육아 로드맵</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">생후 개월수별로 지금 필요한 육아 기준을 확인하세요</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
          아기 개월수에 따라 수유, 수면, 이유식, 놀이, 발달 확인 포인트가 달라집니다. 월령별 가이드는 부모가 오늘 바로 볼 수 있는 기준, 집에서 기록할 내용, 병원 상담이 필요한 신호까지 함께 정리했습니다.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {monthlyGuideItems.map((item) => (
          <Link key={item.slug} href={`/monthly-guide/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-sm font-semibold text-emerald-600">{item.ageLabel}</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">{item.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.keyChecks.slice(0, 2).map((check) => (
                <span key={check} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{check}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
