"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "등원 기본 준비물",
    badge: "가장 먼저",
    tone: "sky",
    summary:
      "어린이집은 매일 반복해서 가져가거나 두고 쓰는 물건이 많아서, 기본 준비물을 먼저 구분해두는 것이 좋아요.",
    items: [
      "여벌옷과 속옷",
      "양말과 계절에 맞는 여벌 옷 한 벌 더",
      "개인 물통과 칫솔",
      "기저귀 또는 배변 관련 개인 준비물 확인",
      "가방 안에 매일 확인할 기본 소지품 정리",
    ],
  },
  {
    title: "낮잠과 생활용품",
    badge: "원마다 다름",
    tone: "amber",
    summary:
      "어린이집마다 준비 방식이 다를 수 있어서, 지정 침구나 개인 생활용품 기준을 먼저 확인하는 것이 중요해요.",
    items: [
      "낮잠 이불 또는 지정 침구",
      "수건이나 개인 손수건 필요 여부 확인",
      "개인 위생용품 보관 파우치",
      "실내화 또는 별도 신발이 필요한지 확인",
      "주기적으로 교체하거나 세탁해 보내야 하는 물품 정리",
    ],
  },
  {
    title: "이름 표시와 분실 방지",
    badge: "작지만 중요",
    tone: "rose",
    summary:
      "작은 물건은 생각보다 자주 헷갈릴 수 있어서, 이름 표시를 미리 해두면 훨씬 편해요.",
    items: [
      "이름 스티커와 네임펜",
      "옷, 물통, 침구, 파우치에 이름 표시",
      "떼어지기 쉬운 스티커는 여분 준비",
      "형제자매가 있으면 헷갈리지 않게 구분 표시",
      "세탁 후에도 표시가 남는 방식인지 확인",
    ],
  },
  {
    title: "연락과 귀가 준비",
    badge: "반드시 확인",
    tone: "emerald",
    summary:
      "첫 등원 전에는 물건 준비만큼 비상연락과 귀가 관련 정보를 정확히 정리해두는 것이 중요해요.",
    items: [
      "비상연락처와 귀가자 정보",
      "알림장 앱 또는 가방 확인",
      "부모 외 귀가 가능 인원 정보 확인",
      "아이 건강 상태 전달 방식 정리",
      "등·하원 시간과 연락 가능한 번호 다시 확인",
    ],
  },
  {
    title: "적응 기간 준비",
    badge: "첫 주 중요",
    tone: "violet",
    summary:
      "처음 어린이집에 가는 시기에는 준비물만 챙기는 것보다 아이가 적응할 수 있는 루틴을 같이 만드는 것이 중요해요.",
    items: [
      "등원 전 아침 루틴 단순하게 정리",
      "하원 후 바로 쉴 수 있는 시간과 동선 준비",
      "첫 주에는 너무 많은 일정 넣지 않기",
      "아이에게 어린이집 흐름을 짧게 반복해서 이야기해주기",
      "적응 기간에는 집에서도 지나치게 큰 변화 주지 않기",
    ],
  },
];

const faqItems = [
  {
    question: "어린이집 준비물은 언제부터 챙기면 좋나요?",
    answer:
      "첫 등원 직전에 한 번에 준비하려 하기보다, 원에서 안내받은 뒤 큰 항목부터 먼저 정리해두는 것이 좋아요. 특히 이름 표시, 여벌옷, 낮잠 침구 같은 기본 준비물은 미리 챙겨두면 훨씬 편합니다.",
  },
  {
    question: "어린이집마다 준비물이 많이 다른가요?",
    answer:
      "네. 낮잠 침구, 실내화, 개인 위생용품, 기저귀 준비 여부처럼 원마다 차이가 있을 수 있어요. 그래서 공통 준비물과 원별 지정 준비물을 따로 나눠서 정리하는 것이 좋아요.",
  },
  {
    question: "첫 등원 준비에서 가장 먼저 챙길 것은 무엇인가요?",
    answer:
      "여벌옷, 이름 표시, 비상연락처, 귀가자 정보처럼 첫 등원 전에 바로 챙겨야 하는 항목을 먼저 정리하는 것이 좋아요. 이후 낮잠 침구와 생활용품을 정리하면 흐름이 훨씬 수월해집니다.",
  },
  {
    question: "어린이집 적응은 얼마나 걸릴 수 있나요?",
    answer:
      "아이마다 속도가 달라요. 며칠 만에 적응하는 아이도 있고 조금 더 시간이 필요한 경우도 있어요. 울거나 거부 반응이 있다고 바로 실패로 보기보다 반복적인 루틴 안에서 천천히 적응하는 과정으로 보는 것이 좋습니다.",
  },
];

const pageStorageKey = "app-checklists-daycare-prep-DaycarePrepChecklistClient";

export default function DaycarePrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <header className="mt-page-hero">
          <span className="mt-badge">MomTools 체크리스트</span>
          <h1 className="mt-title-xl mt-4">어린이집 준비 체크리스트</h1>
          <p className="mt-text-main mt-3">첫 등원 전 챙길 물건과 등원 루틴, 비상연락 정보까지 한 번에 확인할 수 있게 정리했습니다.</p>
          <div className="mt-mobile-note mt-4">
            <strong className="text-slate-900">먼저 볼 기준</strong>
            <p className="mt-1">물건보다 이름표, 연락처, 등원 루틴을 먼저 확인하세요.</p>
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
                        <Link href="/info/toddler" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">유아 정보 →</Link>
            <Link href="/qna/behavior" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">행동·수면 Q&A →</Link>
            <Link href="/info/childcare-portal" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">아이사랑 활용 →</Link>
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
