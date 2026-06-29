import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "육아 체크리스트 모음",
  description: "출산 준비, 신생아 준비, 이유식 준비, 어린이집 준비까지 MomTools 체크리스트를 한곳에서 확인하세요.",
  alternates: { canonical: "https://momtools.kr/checklists" },
};

const items = [
  ["출산 준비 체크리스트", "입원 가방과 출산 전 준비 항목을 순서대로 확인합니다.", "/checklists/birth"],
  ["신생아 준비 체크리스트", "집으로 아기를 맞이하기 전 필요한 준비를 정리합니다.", "/checklists/newborn"],
  ["이유식 준비 체크리스트", "조리 도구와 시작 전 점검 항목을 확인합니다.", "/checklists/weaning"],
  ["어린이집 준비 체크리스트", "등원 전 준비물과 적응 포인트를 정리합니다.", "/checklists/daycare"],
] as const;

export default function ChecklistHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">기록하기</span>
          <h1 className="mt-title-xl mt-4">준비물이 많을수록 체크리스트로 가볍게 정리하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            출산, 신생아, 이유식, 어린이집 준비처럼 반복해서 확인할 항목만 간단히 모았습니다.
          </p>
        </section>

        <section className="mt-simple-list" aria-label="육아 체크리스트 목록">
          {items.map(([title, description, href]) => (
            <Link key={href} href={href} className="mt-simple-list-item flex items-center justify-between gap-3">
              <span>
                <strong className="block text-base font-extrabold text-slate-900">{title}</strong>
                <span className="mt-1 block text-sm leading-6 text-slate-500">{description}</span>
              </span>
              <span className="text-amber-700">→</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
