import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "육아 체크리스트 모음",
  description: "출산 준비, 신생아 준비, 이유식 준비, 어린이집 준비까지 MomTools 체크리스트를 한곳에서 확인하세요.",
  alternates: { canonical: "https://momtools.kr/checklists" },
};

const items = [
  ["출산 준비 체크리스트", "입원 가방과 출산 전 준비 항목을 순서대로 점검합니다.", "/checklists/birth"],
  ["신생아 준비 체크리스트", "집으로 아기를 맞이하기 전 필요한 준비를 모았습니다.", "/checklists/newborn"],
  ["이유식 준비 체크리스트", "조리 도구와 시작 전 점검 항목을 정리했습니다.", "/checklists/weaning"],
  ["어린이집 준비 체크리스트", "등원 전 준비물과 적응 포인트를 정리했습니다.", "/checklists/daycare"],
] as const;

export default function ChecklistHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">체크리스트</span>
          <h1 className="mt-title-xl mt-5">준비물이 많은 육아일수록 체크리스트로 가볍게 정리하세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            네이버 검색에서 바로 들어와도 필요한 항목을 빠르게 찾을 수 있도록 체크리스트를 단계별로 나눴습니다.
            각 페이지는 기존 MomTools 인터랙션을 유지하면서 새 URL 구조에 맞게 재배치했습니다.
          </p>
        </section>
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map(([title, description, href]) => (
            <Link key={href} href={href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-xl font-bold text-slate-800">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
