import Link from "next/link";
import type { Metadata } from "next";
import { getHealthGuidesFromDb } from "@/lib/repositories/guides-db";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "아기 증상별 건강 가이드 | 열·기침·콧물·설사·구토·발진 확인 기준",
  description: "아기 열, 기침, 콧물, 설사, 구토, 변비, 발진, 탈수, 머리 부딪힘처럼 부모가 자주 찾는 증상별 확인 기준과 위험 신호를 정리했습니다.",
  keywords: ["아기 열", "아기 기침", "아기 콧물", "아기 설사", "아기 구토", "아기 발진", "아기 탈수"],
  alternates: { canonical: "https://momtools.kr/health" },
};

export const revalidate = 3600;

export default async function HealthGuidePage() {
  const healthGuideItems = await getHealthGuidesFromDb();

  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">증상별 확인</span>
          <h1 className="mt-title-xl mt-4">아기 증상, 먼저 볼 기준만 빠르게 확인하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            진단이 아니라 집에서 놓치기 쉬운 확인 순서, 상담을 서둘러야 할 신호, 기록할 점을 증상별로 정리했습니다.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-simple-list" aria-label="아기 증상별 건강 가이드 목록">
          {healthGuideItems.map((item) => (
            <Link key={item.slug} href={`/health/${item.slug}`} className="mt-simple-list-item">
              <strong className="block text-base font-extrabold text-slate-900">{item.title}</strong>
              <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{item.summary}</span>
              <span className="mt-2 line-clamp-2 block rounded-2xl bg-rose-50 px-3 py-2 text-xs leading-5 text-rose-800">{item.quickConclusion}</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
