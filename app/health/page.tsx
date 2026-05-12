import Link from "next/link";
import type { Metadata } from "next";
import { healthGuideItems } from "@/data/healthGuides";

export const metadata: Metadata = {
  title: "아기 증상별 건강 가이드 | 열·기침·콧물·설사·구토·발진 확인 기준",
  description: "아기 열, 기침, 콧물, 설사, 구토, 변비, 발진, 탈수, 머리 부딪힘처럼 부모가 자주 찾는 증상별 확인 기준과 위험 신호를 정리했습니다.",
  keywords: ["아기 열", "아기 기침", "아기 콧물", "아기 설사", "아기 구토", "아기 발진", "아기 탈수"],
  alternates: { canonical: "https://momtools.kr/health" },
};

export default function HealthGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl bg-rose-50 px-6 py-10 sm:px-8">
        <p className="text-sm font-semibold text-rose-700">증상별 육아 건강 가이드</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">아기 증상, 집에서 먼저 무엇을 봐야 할까요?</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
          증상별 가이드는 진단이 아니라 부모가 놓치기 쉬운 확인 순서를 정리한 자료입니다. 열, 기침, 콧물, 설사, 구토처럼 흔한 증상도 아이의 개월수와 컨디션에 따라 대응이 달라질 수 있습니다. 위험 신호가 보이거나 아이가 평소와 다르면 의료진 상담을 우선해 주세요.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {healthGuideItems.map((item) => (
          <Link key={item.slug} href={`/health/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">{item.summary}</p>
            <div className="mt-4 rounded-2xl bg-rose-50 p-3 text-xs leading-5 text-rose-800">
              {item.quickConclusion}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
