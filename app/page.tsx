import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchBox from "@/components/layout/SearchBox";

export const metadata: Metadata = {
  title: "아이를 키우는 모든 순간을 더 쉽게 | MomTools",
  description:
    "아기 개월수, 예방접종, 이유식, 성장, 건강 신호와 육아 체크리스트를 부모가 모바일에서 바로 확인할 수 있게 정리한 MomTools 홈입니다.",
  keywords: [
    "육아 계산기",
    "아기 개월수 계산기",
    "예방접종 일정",
    "이유식 시작 시기",
    "아기 열",
    "육아 Q&A",
    "육아 체크리스트",
    "MomTools",
  ],
  openGraph: {
    title: "아이를 키우는 모든 순간을 더 쉽게 | MomTools",
    description: "계산하기, 기록하기, 확인하기, 참고하기로 필요한 육아 정보를 빠르게 찾아보세요.",
    url: "https://momtools.kr/",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const quickLinks = [
  { label: "출산 예정일", href: "/tools/due-date" },
  { label: "성장 백분위", href: "/tools/growth-percentile" },
  { label: "아이 건강", href: "/qna/health" },
  { label: "월령별 가이드", href: "/monthly-guide" },
  { label: "체크리스트", href: "/checklists" },
  { label: "정부지원정책", href: "/policy" },
];

const sections = [
  { label: "계산하기", href: "/tools", description: "개월수·예방접종·이유식·성장" },
  { label: "기록하기", href: "/checklists", description: "출산·신생아·이유식·어린이집 준비" },
  { label: "확인하기", href: "/qna", description: "건강·성장·행동 질문" },
  { label: "참고하기", href: "/info", description: "임신·신생아·이유식·정책 정보" },
];

export default function HomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-6 md:space-y-8">
        <section className="mx-auto flex min-h-[58vh] max-w-3xl flex-col items-center justify-center px-1 py-8 text-center md:py-14">
          <span className="mt-badge">MomTools</span>
          {/* <h1 className="mt-home-slogan mt-5">아이를 키우는 모든 순간을 더 쉽게</h1> */}

          <div className="mt-7 w-full max-w-2xl">
            <SearchBox
              placeholder="아기 열, 개월수, 예방접종, 이유식 검색"
              className="min-h-14 rounded-[24px] px-4 py-3 text-base shadow-[0_14px_28px_rgba(245,158,11,0.12)]"
            />
          </div>

          <div className="mt-4 flex max-w-2xl flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mt-chip-link">
                {link.label}
              </Link>
            ))}
          </div>
        </section>


        <section className="mt-card-soft p-4 md:p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-600">
            <Search size={14} /> 사이트 구조
          </div>
          <h2 className="mt-2 text-xl font-extrabold text-slate-900 md:text-2xl">필요한 일만 골라서 보세요</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {sections.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl border border-amber-100 bg-white px-4 py-3 transition hover:bg-amber-50">
                <span>
                  <strong className="block text-sm font-extrabold text-slate-900">{item.label}</strong>
                  <span className="mt-0.5 block text-xs leading-5 text-slate-500">{item.description}</span>
                </span>
                <span className="text-amber-700">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
