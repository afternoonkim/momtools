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
            한 번에 다 기억하기 어려운 준비 항목을 단계별로 나눠 정리했습니다. 출산 전 준비,
            신생아 맞이, 이유식 시작, 어린이집 등원처럼 실제 육아 흐름에 맞춰 필요한 항목을
            빠르게 찾을 수 있도록 구성했습니다.
          </p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">체크리스트 안내</div>
          <h2 className="mt-title-lg mt-3">체크리스트는 빠뜨림을 줄이기 위한 참고 도구입니다</h2>
          <p className="mt-text-main mt-3 max-w-4xl">
            가정마다 필요한 물품과 우선순위는 다를 수 있습니다. MomTools 체크리스트는 부모가 먼저
            준비 순서를 정리하고 필요한 항목을 점검할 수 있게 도와주는 참고형 목록입니다. 실제 구매나
            최종 준비는 주거 환경, 병원 안내, 아이 상태에 따라 달라질 수 있으므로 우리 집 상황에 맞게
            조정해서 사용하면 좋습니다.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">단계별 정리</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">임신과 출산, 신생아, 이유식, 어린이집처럼 실제 흐름에 맞춰 페이지를 나눴습니다.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">관련 정보 연결</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">준비물만 보지 않고 관련 정보와 계산기, FAQ 페이지까지 이어서 확인할 수 있습니다.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-800">이용 안내</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">사이트 소개와 FAQ를 함께 확인하면 이 페이지를 어떤 범위에서 참고하면 좋은지 알 수 있습니다.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/about" className="rounded-full bg-amber-50 px-4 py-2 text-amber-800">사이트 소개</Link>
            <Link href="/faq" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">FAQ</Link>
            <Link href="/contact" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">문의하기</Link>
          </div>
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
