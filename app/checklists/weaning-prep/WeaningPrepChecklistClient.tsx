"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "앉는 환경과 기본 식사 도구",
    badge: "먼저 준비",
    tone: "orange",
    summary:
      "이유식은 음식만 준비하면 끝이 아니에요. 아기가 편하게 앉고, 부모도 안정적으로 먹일 수 있는 환경을 먼저 만드는 것이 중요해요.",
    items: [
      "아기 식탁의자",
      "턱받이와 이유식 스푼",
      "아기 전용 작은 그릇 또는 초기 이유식 용기",
      "먹는 자세를 안정적으로 잡아줄 방석이나 보조 도구 확인",
      "식사 후 바로 닦기 쉬운 자리와 동선 점검",
    ],
  },
  {
    title: "조리 도구",
    badge: "주방 분리",
    tone: "amber",
    summary:
      "이유식은 양보다 위생과 반복 사용 편의성이 더 중요해요. 복잡한 장비보다 자주 쓰는 기본 조리도구를 먼저 정리해두는 것이 좋아요.",
    items: [
      "작은 냄비와 도마 분리",
      "이유식용 칼 또는 기본 조리도구 분리",
      "재료를 곱게 으깨거나 갈 수 있는 도구 확인",
      "열탕 또는 세척이 쉬운 재질의 도구 준비",
      "조리 후 바로 식히고 담을 수 있는 기본 용기 준비",
    ],
  },
  {
    title: "보관과 소분",
    badge: "반복 준비",
    tone: "sky",
    summary:
      "이유식을 매번 처음부터 다시 만들기보다, 소분과 보관 흐름을 미리 정리해두면 훨씬 수월해요.",
    items: [
      "이유식 큐브 트레이",
      "식판 또는 보관 용기",
      "냉장·냉동 보관용 기본 용기 구분",
      "날짜 적을 스티커나 간단한 라벨 준비",
      "보관 위치와 회전 순서 미리 정해두기",
    ],
  },
  {
    title: "재료와 알레르기 체크",
    badge: "반응 확인",
    tone: "emerald",
    summary:
      "초기 이유식은 재료 가짓수를 많이 늘리기보다 한 가지씩 천천히 반응을 보는 것이 중요해요.",
    items: [
      "초기 시작용 기본 재료 정리",
      "알레르기 체크 메모",
      "새 재료 시작 날짜 기록할 간단한 노트 또는 메모앱 정하기",
      "반응이 있었던 재료 따로 표시할 방법 정해두기",
      "식재료 구매 빈도와 보관 주기 미리 생각해두기",
    ],
  },
  {
    title: "식사 후 정리와 세척",
    badge: "작지만 중요",
    tone: "violet",
    summary:
      "이유식은 먹이는 시간보다 치우는 시간이 더 길게 느껴질 수도 있어요. 세척과 정리 흐름을 미리 단순화해두면 부담이 줄어요.",
    items: [
      "식사 후 바로 닦을 수건이나 행주 따로 준비",
      "세척용 솔과 건조 공간 확인",
      "식탁의자 주변 바닥 정리 방식 생각해두기",
      "턱받이와 스푼 세척 루틴 단순하게 만들기",
      "먹인 뒤 기록하거나 사진 남길 간단한 루틴 정하기",
    ],
  },
];

const faqItems = [
  {
    question: "이유식 준비물은 시작 전에 전부 사야 하나요?",
    answer:
      "처음부터 모든 준비물을 다 갖출 필요는 없어요. 앉는 환경, 스푼, 기본 용기, 조리도구처럼 자주 쓰는 기본 항목부터 준비하고, 실제로 진행하면서 필요한 것을 보완하는 편이 더 실용적일 수 있어요.",
  },
  {
    question: "비싼 이유식 장비가 꼭 필요한가요?",
    answer:
      "반드시 그렇지는 않아요. 처음에는 작은 냄비, 도마 분리, 기본 보관 용기처럼 자주 쓰는 도구가 더 중요할 수 있어요. 사용 빈도가 높은지 먼저 생각해보는 것이 좋아요.",
  },
  {
    question: "알레르기 체크는 어떻게 준비하면 좋나요?",
    answer:
      "새 재료를 시작한 날짜와 반응 여부를 간단히 적어두는 것만으로도 큰 도움이 돼요. 처음부터 복잡하게 기록하기보다, 재료명과 날짜, 특별한 반응 유무 정도만 정리해도 충분히 유용합니다.",
  },
  {
    question: "이유식 준비에서 가장 먼저 챙길 것은 무엇인가요?",
    answer:
      "아기가 앉을 수 있는 환경, 이유식 스푼, 기본 용기, 위생적인 조리도구처럼 바로 쓰게 되는 항목을 먼저 챙기는 것이 좋아요. 이후 보관과 기록 도구를 천천히 보완하면 됩니다.",
  },
];

const pageStorageKey = "app-checklists-weaning-prep-WeaningPrepChecklistClient";

export default function WeaningPrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <header className="mt-page-hero">
          <span className="mt-badge">MomTools 체크리스트</span>
          <h1 className="mt-title-xl mt-4">이유식 준비 체크리스트</h1>
          <p className="mt-text-main mt-3">식사 의자, 스푼, 조리도구, 보관 용기, 알레르기 관찰까지 이유식 시작 전 필요한 흐름을 정리했습니다.</p>
          <div className="mt-mobile-note mt-4">
            <strong className="text-slate-900">먼저 볼 기준</strong>
            <p className="mt-1">도구보다 시작 신호와 알레르기 관찰 기준을 먼저 확인하세요.</p>
          </div>
        </header>

        <section className="mt-simple-list" aria-label="체크리스트 빠른 요약">
          {checklistSections.slice(0, 4).map((section) => (
            <a key={section.title} href={`#${section.title}`} className="mt-simple-list-item flex items-start justify-between gap-3">
              <span>
                <strong className="block text-sm font-extrabold text-slate-900">{section.title}</strong>
                <span className="mt-1 line-clamp-2 block text-xs leading-5 text-slate-500">{section.summary}</span>
              </span>
              <span className="shrink-0 text-sm font-bold text-amber-700">보기</span>
            </a>
          ))}
        </section>

        <section className="space-y-3" aria-label="체크할 항목">
          {checklistSections.map((section, index) => (
            <details key={section.title} id={section.title} className="mt-section-details" open={index === 0}>
              <summary className="mt-section-summary">
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-amber-600">{section.badge}</span>
                  <span className="mt-1 block text-base font-extrabold text-slate-900">{section.title}</span>
                  <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{section.summary}</span>
                </span>
                <span className="shrink-0 text-xs font-bold text-amber-700">열기</span>
              </summary>
              <div className="mt-detail-body">
                <PersistentChecklist storageKey={`${pageStorageKey}-${section.title}`} items={section.items} accent={section.tone as "emerald" | "sky" | "amber" | "rose" | "violet" | "orange"} />
              </div>
            </details>
          ))}
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">확인할 때 기억할 점</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
            <li className="mt-compact-row">처음부터 모든 항목을 완벽하게 준비하기보다, 오늘 바로 필요한 항목부터 체크하세요.</li>
            <li className="mt-compact-row">병원, 조리원, 어린이집 안내문처럼 실제 상황에 따라 달라지는 기준은 마지막에 다시 확인하세요.</li>
            <li className="mt-compact-row">체크가 끝난 항목은 저장되므로 다음에 들어와서 이어서 확인할 수 있습니다.</li>
          </ul>
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <h2 className="mt-title-md">함께 보면 좋은 페이지</h2>
          <div className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-amber-100 bg-white">
                        <Link href="/tools/weaning-start" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">이유식 시작 계산기 →</Link>
            <Link href="/baby-food" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">이유식 메뉴 →</Link>
            <Link href="/info/weaning" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">이유식 정보 →</Link>
          </div>
        </section>

        <section className="mt-card p-4 md:p-6" id="faq">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-4 space-y-2">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer text-sm font-extrabold leading-7 text-slate-900">{item.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
