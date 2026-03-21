import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, HeartHandshake, BookOpenCheck, CheckSquare2 } from "lucide-react";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "육아 계산기와 체크리스트 한곳에 | MomTools",
  description:
    "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위와 함께 임신·신생아·이유식·유아 정보를 한 번에 정리하는 MomTools 홈",
  keywords: [
    "육아 계산기",
    "출산 예정일 계산기",
    "아기 개월수 계산기",
    "예방접종 일정",
    "이유식 시작 시기",
    "성장 백분위",
    "육아 체크리스트",
  ],
};

const quickActions = [
  {
    title: "출산 예정일 계산기",
    description: "예정일과 현재 주차를 빠르게 확인하고 준비 시점을 잡아보세요.",
    href: "/tools/due-date",
  },
  {
    title: "아기 개월수 계산기",
    description: "개월수와 일수를 한 번에 보고 수유, 수면, 접종 기준을 확인해요.",
    href: "/tools/baby-age",
  },
  {
    title: "예방접종 일정 계산기",
    description: "월령 기준으로 접종 흐름을 먼저 파악하고 병원 일정 정리에 활용해요.",
    href: "/tools/vaccine-schedule",
  },
  {
    title: "이유식 시작 계산기",
    description: "언제부터 준비하고 어떤 순서로 시작할지 감을 잡기 좋습니다.",
    href: "/tools/weaning-start",
  },
  {
    title: "성장 백분위 계산기",
    description: "우리 아기의 현재 성장 위치를 참고용으로 확인해 보세요.",
    href: "/tools/growth-percentile",
  },
  {
    title: "한글 이름 뜻 모음",
    description: "남아·여아 이름 뜻을 자연스럽고 보기 쉽게 모아두었습니다.",
    href: "/baby-names/meanings",
  },
];

const guideCards = [
  {
    title: "임신 정보",
    description: "임신 초기 증상, 주차별 체크 포인트, 준비 흐름을 한눈에 정리합니다.",
    href: "/info/pregnancy",
    icon: Sparkles,
  },
  {
    title: "신생아 정보",
    description: "수유, 수면, 체온, 배변처럼 처음 육아에서 자주 찾는 내용을 모았습니다.",
    href: "/info/newborn",
    icon: HeartHandshake,
  },
  {
    title: "이유식 정보",
    description: "시작 시기, 단계별 진행, 준비 도구와 음식 흐름을 쉽게 확인할 수 있어요.",
    href: "/info/weaning",
    icon: BookOpenCheck,
  },
  {
    title: "체크리스트 모음",
    description: "출산 전부터 어린이집 준비까지 실제로 챙겨야 할 항목을 체크해 보세요.",
    href: "/checklists/birth",
    icon: CheckSquare2,
  },
];

const searchIntent = [
  "출산 예정일 계산은 어떻게 할까",
  "아기 개월수는 왜 정확히 봐야 할까",
  "예방접종 일정은 월령 기준으로 어떻게 정리할까",
  "이유식은 언제 시작하면 좋을까",
  "성장 백분위는 어떻게 해석하면 될까",
  "신생아 준비물은 무엇부터 챙겨야 할까",
];

export default function HomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="mt-badge">MomTools · 육아 계산기 & 정보 홈</span>
              <h1 className="mt-title-xl mt-5">
                육아할 때 자주 찾는 정보,
                <br />
                헤매지 않게 한곳에 모았습니다
              </h1>
              <p className="mt-text-main mt-5 max-w-3xl">
                MomTools는 계산기만 모아둔 사이트가 아니라, 계산 결과를 본 뒤 바로 이어서
                필요한 정보와 체크리스트까지 볼 수 있도록 구성한 육아 도구 홈입니다. 지금
                필요한 계산을 먼저 확인하고, 다음에 해야 할 준비까지 자연스럽게 이어서 볼 수
                있게 만들었습니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/tools/due-date" className="mt-button-primary">바로 시작하기</Link>
                <Link href="/checklists/birth" className="mt-button-secondary">체크리스트 보기</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Pregnancy</div>
                <div className="mt-3 text-xl font-bold text-slate-800">예정일과 주차</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">출산 준비는 시기를 먼저 아는 것부터 시작됩니다.</p>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Baby</div>
                <div className="mt-3 text-xl font-bold text-slate-800">개월수와 발달 흐름</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">개월수 기준으로 수면, 수유, 접종, 놀이 기준을 보세요.</p>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Feeding</div>
                <div className="mt-3 text-xl font-bold text-slate-800">이유식 시작</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">언제부터 준비하고 어떤 순서로 진행할지 쉽게 정리합니다.</p>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Checklist</div>
                <div className="mt-3 text-xl font-bold text-slate-800">준비 항목 관리</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">준비물을 빠뜨리지 않게 체크박스로 하나씩 확인할 수 있어요.</p>
              </div>
            </div>
          </div>
        </section>

        <AdBlock slot="home-top" />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((item) => (
            <Link key={item.href} href={item.href} className="mt-card p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]">
              <div className="text-lg font-bold text-slate-800">{item.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">바로 보기 →</div>
            </Link>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">육아 흐름에 맞춘 정보 연결</h2>
            <p className="mt-text-main mt-3">계산 결과만 보고 끝내지 않고, 그 다음에 궁금해지는 내용을 바로 이어서 볼 수 있게 구성했습니다.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {guideCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link key={card.href} href={card.href} className="rounded-3xl border border-amber-100 bg-white p-5 transition hover:bg-amber-50/60">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700"><Icon size={20} /></div>
                    <div className="mt-4 text-lg font-bold text-slate-800">{card.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">많이 찾는 질문 흐름</h2>
            <p className="mt-text-main mt-3">실제 부모가 검색하는 흐름을 고려해 홈에서 자주 찾는 질문 출발점을 먼저 정리했습니다.</p>
            <ul className="mt-6 space-y-3">
              {searchIntent.map((item) => (
                <li key={item} className="rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 text-sm font-medium text-slate-700">{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
