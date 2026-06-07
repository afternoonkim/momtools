import type { Metadata } from "next";
import Link from "next/link";
import { HOME_CARD_UPDATED_LABEL_KO } from "@/lib/content-meta";
import { Baby, CalendarDays, CheckSquare2, HeartPulse, Search, Sparkles } from "lucide-react";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

export const metadata: Metadata = {
  title: "육아 계산기와 육아 질문 빠른 확인 | MomTools",
  description:
    "아기 개월수, 출산 예정일, 예방접종 일정, 이유식 시작 시기와 육아 Q&A를 모바일에서 빠르게 확인할 수 있는 MomTools 홈입니다.",
  keywords: [
    "육아 계산기",
    "아기 개월수 계산기",
    "출산 예정일 계산기",
    "예방접종 일정",
    "이유식 시작 시기",
    "육아 Q&A",
    "아기 열",
    "아기 수면",
    "육아 체크리스트",
    "가족건강 Q&A",
  ],
};

const primaryTools = [
  {
    title: "아기 개월수",
    description: "생년월일로 월령과 100일·돌 날짜를 확인해요.",
    href: "/tools/baby-age",
    icon: Baby,
  },
  {
    title: "출산 예정일",
    description: "예정일과 임신 주차를 빠르게 정리해요.",
    href: "/tools/due-date",
    icon: CalendarDays,
  },
  {
    title: "예방접종 일정",
    description: "월령 기준 접종 흐름을 먼저 확인해요.",
    href: "/tools/vaccine-schedule",
    icon: HeartPulse,
  },
  {
    title: "이유식 시작",
    description: "시작 시기와 준비 순서를 이어서 봐요.",
    href: "/tools/weaning-start",
    icon: Sparkles,
  },
];

const popularQuestions = [
  {
    title: "벌레 물림, 언제 병원에 가야 할까요?",
    description: "붓기, 호흡, 전신 반응처럼 먼저 볼 신호를 정리했어요.",
    href: "/family-health-qna/family/family-insect-bite-urgent-sign",
  },
  {
    title: "아기가 자기 전에 너무 흥분해요",
    description: "피로 누적, 자극, 수면 루틴을 함께 살펴봐요.",
    href: "/qna/behavior/baby-overexcited-before-sleep",
  },
  {
    title: "아기 열이 매일 반복될 때",
    description: "체온 변화, 먹는 양, 처짐 여부를 먼저 확인해요.",
    href: "/qna/health/baby-fever-repeats-everyday",
  },
  {
    title: "밸런스 바이크는 언제부터?",
    description: "월령보다 균형감, 안전 장비, 아이 준비 상태를 봐요.",
    href: "/qna/growth/balance-bike",
  },
];

const situationRoutes = [
  { title: "오늘 아이 컨디션이 걱정될 때", href: "/qna/health", tag: "건강" },
  { title: "잠들기 전후 행동이 달라졌을 때", href: "/qna/behavior", tag: "수면·행동" },
  { title: "개월수에 맞는 발달이 궁금할 때", href: "/qna/growth", tag: "성장" },
  { title: "가족 생활 건강을 함께 확인할 때", href: "/family-health-qna/family", tag: "가족건강" },
  { title: "출산 전 준비물을 빠르게 볼 때", href: "/checklists/birth", tag: "체크리스트" },
  { title: "신생아 물품을 하나씩 챙길 때", href: "/checklists/newborn", tag: "준비물" },
];

const monthlyLinks = [
  { title: "0~3개월", href: "/monthly-guide/3-month", description: "수유, 수면, 체온처럼 초기에 자주 보는 기준" },
  { title: "4~6개월", href: "/monthly-guide/6-month", description: "뒤집기, 이유식 준비, 낮잠 흐름 확인" },
  { title: "7~12개월", href: "/monthly-guide/12-month", description: "기어가기, 앉기, 식감 변화와 놀이" },
  { title: "13~24개월", href: "/monthly-guide/19-24-month", description: "걷기, 말, 고집, 생활습관 정리" },
];

const guideCards = [
  {
    title: "임신 정보",
    description: "임신 주차별 변화와 출산 준비 흐름을 확인해요.",
    href: "/info/pregnancy",
  },
  {
    title: "신생아 정보",
    description: "수유, 수면, 체온, 배변 기준을 한곳에서 봐요.",
    href: "/info/newborn",
  },
  {
    title: "이유식 정보",
    description: "시작 시기, 단계, 재료 추가 흐름을 정리해요.",
    href: "/info/weaning",
  },
  {
    title: "정부지원정책",
    description: "부모급여, 아동수당, 첫만남이용권을 확인해요.",
    href: "/policy",
  },
  {
    title: "아이사랑 공식정보",
    description: "임신·출산·육아·어린이집 공식 메뉴를 필요한 순서대로 확인해요.",
    href: "/info/childcare-portal",
  },
];

const featuredContents = [
  {
    title: "아기 개월수 계산과 월령 해석",
    description: "수면·수유·접종·이유식 기준을 월령과 함께 보는 방법입니다.",
    href: "/tools/baby-age",
    category: "월령 계산",
    updatedAt: HOME_CARD_UPDATED_LABEL_KO,
  },
  {
    title: "예방접종 일정 참고 방법",
    description: "월령 기준으로 접종 흐름을 정리하고 병원 예약 전에 확인할 점을 안내합니다.",
    href: "/tools/vaccine-schedule",
    category: "건강 일정",
    updatedAt: HOME_CARD_UPDATED_LABEL_KO,
  },
  {
    title: "이유식 시작 시기와 준비 순서",
    description: "시작 신호, 준비물, 첫 재료 선택 흐름을 쉽게 확인할 수 있습니다.",
    href: "/tools/weaning-start",
    category: "이유식",
    updatedAt: HOME_CARD_UPDATED_LABEL_KO,
  },
  {
    title: "신생아 준비물 체크리스트",
    description: "출산 전 미리 챙길 물품을 우선순위 중심으로 확인합니다.",
    href: "/checklists/newborn",
    category: "체크리스트",
    updatedAt: HOME_CARD_UPDATED_LABEL_KO,
  },
];

export default function HomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-6 md:space-y-8">
        <section className="mt-card overflow-hidden p-5 md:p-10 lg:p-12">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="mt-badge">MomTools · 모바일 육아 빠른 확인</span>
              <h1 className="mt-title-xl mt-4">
                지금 필요한 육아 정보,
                <br className="hidden sm:block" /> 먼저 빠르게 확인하세요
              </h1>
              <p className="mt-text-main mt-4 max-w-3xl">
                아기 개월수, 예방접종, 이유식, 수면·건강 질문까지 부모가 검색하는 흐름에 맞춰 바로 찾을 수 있게 정리했습니다. 급하게 확인할 때는 계산기와 바로 답변부터 보고, 필요하면 자세한 설명과 체크리스트로 이어서 확인해 보세요.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <Link href="/tools/baby-age" className="mt-button-primary min-h-12 px-4 text-sm sm:text-base">개월수 계산</Link>
                <Link href="/qna" className="mt-button-secondary min-h-12 px-4 text-sm sm:text-base">육아 질문 찾기</Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-4 md:p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <Search size={18} className="text-amber-600" />
                많이 찾는 빠른 메뉴
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {primaryTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link key={tool.href} href={tool.href} className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-100 text-amber-700"><Icon size={18} /></span>
                        <strong className="text-base text-slate-900">{tool.title}</strong>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <AdFitAd {...ADFIT_UNITS.mobileSmall} className="my-3" />

        <section className="mt-card p-5 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mt-badge">지금 많이 찾는 질문</span>
              <h2 className="mt-title-lg mt-3">검색 후 바로 확인하기 좋은 답변</h2>
            </div>
            <Link href="/qna" className="text-sm font-semibold text-amber-700">육아 Q&amp;A 전체 보기 →</Link>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {popularQuestions.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-3xl border border-slate-100 bg-slate-50/80 p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white">
                <h3 className="text-base font-bold leading-7 text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-4 text-sm font-semibold text-amber-700">바로 답변 보기 →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="mt-card p-5 md:p-8">
            <span className="mt-badge">상황별 빠른 찾기</span>
            <h2 className="mt-title-lg mt-3">지금 상황에 맞는 곳으로 이동하세요</h2>
            <p className="mt-text-main mt-3">
              모바일에서는 메뉴를 오래 찾기보다 상황별로 바로 들어가는 흐름이 편합니다. 현재 고민과 가장 가까운 항목을 선택해 보세요.
            </p>
            <div className="mt-5 space-y-3">
              {situationRoutes.map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-3 transition hover:bg-white">
                  <div>
                    <div className="text-xs font-semibold text-amber-700">{item.tag}</div>
                    <div className="mt-1 text-sm font-bold leading-6 text-slate-800 md:text-base">{item.title}</div>
                  </div>
                  <span className="text-amber-700">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-card-soft p-5 md:p-8">
            <span className="mt-badge">월령별 육아 흐름</span>
            <h2 className="mt-title-lg mt-3">개월수 계산 후 이어서 볼 내용</h2>
            <p className="mt-text-main mt-3">
              아기 개월수를 확인했다면 수면, 수유, 발달, 이유식, 놀이 기준을 함께 보면 다음에 챙길 것이 더 분명해집니다.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {monthlyLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                  <div className="text-lg font-extrabold text-slate-900">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  <div className="mt-4 text-sm font-semibold text-amber-700">월령 가이드 보기 →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-card p-5 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mt-badge">계산기 다음에 볼 정보</span>
              <h2 className="mt-title-lg mt-3">한 번에 이어지는 육아 가이드</h2>
              <p className="mt-text-main mt-3 max-w-3xl">
                계산 결과만 보고 끝내지 않도록 준비물, 생활 루틴, 건강 질문, 지원정책을 함께 연결했습니다.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guideCards.map((card) => (
              <Link key={card.href} href={card.href} className="rounded-3xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="text-lg font-bold text-slate-900">{card.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                <div className="mt-4 text-sm font-semibold text-amber-700">자세히 보기 →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card p-5 md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700"><CheckSquare2 size={20} /></span>
            <div>
              <h2 className="mt-title-md">체크리스트로 준비를 줄여보세요</h2>
              <p className="mt-text-sub">출산, 신생아, 이유식, 어린이집 준비를 항목별로 확인할 수 있습니다.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/checklists/birth" className="mt-list-card min-h-16 font-semibold text-slate-800">출산 준비 체크리스트 →</Link>
            <Link href="/checklists/newborn" className="mt-list-card min-h-16 font-semibold text-slate-800">신생아 준비 체크리스트 →</Link>
            <Link href="/checklists/weaning" className="mt-list-card min-h-16 font-semibold text-slate-800">이유식 준비 체크리스트 →</Link>
            <Link href="/checklists/daycare" className="mt-list-card min-h-16 font-semibold text-slate-800">어린이집 준비 체크리스트 →</Link>
          </div>
        </section>

        <section className="mt-card-soft p-5 md:p-8">
          <span className="mt-badge">함께 보면 좋은 콘텐츠</span>
          <h2 className="mt-title-lg mt-3">부모들이 이어서 확인하는 페이지</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredContents.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-3xl border border-white bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">{item.category}</span>
                <h3 className="mt-4 text-base font-bold leading-7 text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-4 text-xs text-slate-400">업데이트 {item.updatedAt}</div>
              </Link>
            ))}
          </div>
        </section>

        <AdFitAd {...ADFIT_UNITS.mobileSmall} className="mb-2" />
      </div>
    </div>
  );
}
