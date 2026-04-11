import type { Metadata } from "next";
import Link from "next/link";
import { HOME_CARD_UPDATED_LABEL } from "@/lib/content-meta";
import { Sparkles, HeartHandshake, BookOpenCheck, CheckSquare2 } from "lucide-react";

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


const featuredContents = [
  {
    title: "출산 예정일 계산기 제대로 보는 법",
    description: "예정일 계산 기준, 주차 확인 방법, 병원 방문 전 체크 포인트까지 한 번에 정리했습니다.",
    href: "/tools/due-date",
    category: "계산기 가이드",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "아기 개월수 계산과 월령 해석",
    description: "개월수와 일수를 왜 정확히 봐야 하는지, 수면·수유·발달 체크에 어떻게 연결되는지 설명합니다.",
    href: "/tools/baby-age",
    category: "계산기 가이드",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "예방접종 일정 참고 방법",
    description: "월령 기준으로 접종 흐름을 정리하고, 병원 예약 전에 어떤 점을 함께 확인하면 좋은지 안내합니다.",
    href: "/tools/vaccine-schedule",
    category: "건강 일정",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "이유식 시작 시기와 준비 순서",
    description: "시작 신호, 준비물, 첫 재료 선택 흐름까지 이유식 초반에 많이 찾는 내용을 보기 쉽게 모았습니다.",
    href: "/tools/weaning-start",
    category: "이유식",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "성장 백분위 결과 해석하기",
    description: "한 번의 숫자로 결론 내리기보다 어떤 흐름으로 보면 좋은지, 언제 상담을 고려하면 좋은지 참고용으로 설명합니다.",
    href: "/tools/growth-percentile",
    category: "성장 체크",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "신생아 준비물 체크리스트",
    description: "출산 전 미리 챙길 물품을 우선순위 중심으로 확인할 수 있어 처음 준비할 때 부담을 줄여줍니다.",
    href: "/checklists/newborn",
    category: "체크리스트",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "임신 정보 핵심 가이드",
    description: "임신 초기부터 후반까지 자주 헷갈리는 증상, 준비 흐름, 확인 포인트를 한곳에 정리했습니다.",
    href: "/info/pregnancy",
    category: "정보 가이드",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "육아 Q&A 대표 질문 모음",
    description: "수유, 수면, 발달, 이유식처럼 많이 묻는 질문을 설명형 답변으로 읽기 쉽게 정리했습니다.",
    href: "/qna",
    category: "Q&A",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
];

const trustPoints = [
  {
    title: "계산기만 보여주지 않습니다",
    description:
      "결과를 본 뒤 바로 이어서 확인할 수 있도록 관련 정보 페이지, Q&A, 체크리스트를 함께 연결했습니다.",
  },
  {
    title: "가정에서 참고하기 쉽게 정리합니다",
    description:
      "의료 진단이나 개별 치료 지시가 아니라, 부모가 먼저 흐름을 이해하고 준비할 수 있는 참고용 안내를 중심으로 구성합니다.",
  },
  {
    title: "정책과 안내 페이지를 함께 공개합니다",
    description:
      "사이트 소개, 문의 방법, 이용약관, 개인정보처리방침, FAQ를 함께 제공해 이용 범위와 기준을 확인할 수 있습니다.",
  },
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

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="mt-badge">신뢰형 안내</span>
              <h2 className="mt-title-lg mt-4">MomTools를 어떻게 참고하면 좋은지 먼저 알려드립니다</h2>
              <p className="mt-text-main mt-3">
                MomTools는 부모가 집에서 먼저 흐름을 정리하고 준비할 수 있도록 돕는 참고형 육아 사이트입니다.
                계산 결과나 정보 글은 병원 진료를 대신하지 않으며, 아이 상태가 걱정되거나 급한 증상이 있다면
                의료진 상담을 우선으로 두는 것이 좋습니다. 대신 일상에서 자주 헷갈리는 월령, 준비 순서,
                체크 포인트를 한 번에 이어서 볼 수 있게 만드는 데 집중하고 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px] lg:grid-cols-1">
              <Link href="/about" className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                사이트 소개 보기
              </Link>
              <Link href="/faq" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                자주 묻는 질문 보기
              </Link>
              <Link href="/privacy" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                개인정보처리방침 보기
              </Link>
              <Link href="/contact" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                문의하기
              </Link>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5">
                <h3 className="text-base font-bold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="mt-badge">최근 대표 콘텐츠</span>
              <h2 className="mt-title-lg mt-4">홈에서 바로 볼 수 있는 최신 정리 콘텐츠</h2>
              <p className="mt-text-main mt-3">
                최근에 보강한 대표 콘텐츠를 홈 아래에 직접 배치했습니다. 계산기만 빠르게 쓰고 나가는 구조보다,
                부모가 실제로 많이 이어서 읽는 설명형 콘텐츠를 함께 노출해 사이트의 정보성과 신뢰도를 높이는 목적입니다.
              </p>
            </div>
            <Link href="/about" className="text-sm font-semibold text-amber-700">사이트 소개 보기 →</Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredContents.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold leading-7 text-slate-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-4 text-sm font-semibold text-slate-700">콘텐츠 보기 →</div>
              </Link>
            ))}
          </div>
        </section>

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
