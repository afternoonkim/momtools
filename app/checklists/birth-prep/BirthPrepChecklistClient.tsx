"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "산모 서류와 기본 준비",
    badge: "먼저 챙기기",
    tone: "rose",
    summary:
      "출산 직전에는 준비물보다 서류와 병원 안내를 먼저 정리해두는 것이 훨씬 중요해요.",
    items: [
      "산모수첩과 신분증",
      "입원 서류와 병원 안내문",
      "보험 서류나 제출이 필요한 문서 확인",
      "진료 예약 일정과 분만 병원 연락처 정리",
      "응급 상황 시 이동 방법과 보호자 연락 체계 정리",
    ],
  },
  {
    title: "산모 입원 준비물",
    badge: "입원 가방",
    tone: "amber",
    summary:
      "입원 가방은 너무 늦지 않게 미리 싸두는 것이 좋아요. 막달에는 몸 상태가 갑자기 달라질 수 있어요.",
    items: [
      "산모용 속옷과 수유 브라",
      "세면도구와 개인 위생용품",
      "편한 수면 양말 또는 실내 슬리퍼",
      "휴대폰 충전기와 보조 배터리",
      "퇴원 시 입을 편한 옷",
    ],
  },
  {
    title: "아기 준비물",
    badge: "퇴원 준비",
    tone: "sky",
    summary:
      "병원과 조리원에서 제공되는 물품이 다를 수 있으니, 개인 준비가 필요한 항목을 먼저 확인하는 것이 좋아요.",
    items: [
      "아기 배냇저고리와 속싸개",
      "퇴원용 우주복 또는 계절에 맞는 외출복",
      "손수건 또는 거즈 수건",
      "기저귀나 기본 위생용품 제공 여부 확인",
      "수유 관련 추가 준비물이 필요한지 확인",
    ],
  },
  {
    title: "보호자 준비물",
    badge: "같이 챙기기",
    tone: "emerald",
    summary:
      "출산 당일에는 보호자 준비가 생각보다 중요해요. 장시간 대기와 이동을 고려해 따로 챙겨두면 좋아요.",
    items: [
      "보호자 충전기와 세면도구",
      "간단한 간식과 물",
      "여분 옷 또는 얇은 겉옷",
      "주차, 출입, 병실 안내 관련 정보 확인",
      "산모와 아기 퇴원 동선 미리 점검",
    ],
  },
  {
    title: "퇴원 전 체크",
    badge: "마지막 확인",
    tone: "violet",
    summary:
      "출산 후에는 정신이 없기 쉬워서, 퇴원 전 체크 항목은 미리 따로 정리해두는 것이 좋아요.",
    items: [
      "퇴원 시 카시트 또는 이동 준비",
      "퇴원 약과 안내사항 다시 확인",
      "다음 외래 일정과 아기 진료 일정 체크",
      "집에 도착했을 때 바로 필요한 물품 배치 확인",
      "출생 직후 행정 처리나 서류 준비 일정 정리",
    ],
  },
];

const faqItems = [
  {
    question: "출산 준비물은 언제부터 챙기는 게 좋나요?",
    answer:
      "보통 막달 전에 큰 틀을 정리해두고, 입원 가방은 조금 여유 있게 미리 싸두는 것이 좋아요. 막달에는 몸 상태가 갑자기 달라질 수 있어서 너무 늦게 미루지 않는 편이 좋습니다.",
  },
  {
    question: "병원 제공 물품이 있으면 준비를 덜 해도 되나요?",
    answer:
      "병원이나 조리원마다 제공 물품이 다를 수 있어요. 그래서 무조건 줄이기보다, 제공 항목과 개인 준비 항목을 먼저 구분해서 정리하는 것이 좋아요.",
  },
  {
    question: "아기 준비물보다 산모 준비물을 먼저 챙겨야 하나요?",
    answer:
      "실제로는 서류, 입원 관련 안내, 산모 입원 준비를 먼저 정리해두는 것이 훨씬 실용적이에요. 아기 준비물은 퇴원 시점과 계절을 고려해 맞춰 준비하면 됩니다.",
  },
  {
    question: "퇴원 전 꼭 다시 확인해야 하는 것은 무엇인가요?",
    answer:
      "퇴원 약, 다음 진료 일정, 아기 외래 일정, 이동 준비, 집에 도착했을 때 바로 필요한 물품 배치를 다시 확인하는 것이 좋아요.",
  },
];

const pageStorageKey = "app-checklists-birth-prep-BirthPrepChecklistClient";

export default function BirthPrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <header className="mt-page-hero">
          <span className="mt-badge">MomTools 체크리스트</span>
          <h1 className="mt-title-xl mt-4">출산 준비 체크리스트</h1>
          <p className="mt-text-main mt-3">산모 준비물, 아기 준비물, 보호자 준비물, 퇴원 전 확인 사항을 모바일에서 빠르게 체크할 수 있게 정리했습니다.</p>
          <div className="mt-mobile-note mt-4">
            <strong className="text-slate-900">먼저 볼 기준</strong>
            <p className="mt-1">출산 가방과 퇴원 동선을 먼저 정리하세요.</p>
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
                        <Link href="/info/pregnancy" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">임신 정보 →</Link>
            <Link href="/tools/due-date" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">출산 예정일 계산기 →</Link>
            <Link href="/tools/birth-support-calculator" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">출산지원금 계산기 →</Link>
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
