"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "기본 위생 용품",
    badge: "가장 먼저",
    tone: "emerald",
    summary:
      "신생아 시기에는 자주 쓰는 위생 용품을 손이 닿기 쉬운 곳에 정리해두는 것이 훨씬 편해요.",
    items: [
      "기저귀와 물티슈",
      "손수건과 거즈 수건",
      "아기 전용 바디워시 또는 세정용품",
      "체온계와 손톱깎이",
      "보습제와 기본 피부 케어 용품",
    ],
  },
  {
    title: "수유 준비물",
    badge: "자주 쓰는 용품",
    tone: "sky",
    summary:
      "수유용품은 한 번만 쓰는 것이 아니라 매일 반복해서 쓰게 되므로, 세척과 보관 흐름까지 같이 생각하는 것이 좋아요.",
    items: [
      "수유용품과 젖병 세정도구",
      "젖병 또는 수유 보조용품",
      "젖병솔과 건조대",
      "분유 수유 예정이면 분유포트 또는 온수 준비 방식 점검",
      "트림용 손수건과 수유 후 정리용 천",
    ],
  },
  {
    title: "수면 준비물",
    badge: "잠자리 환경",
    tone: "amber",
    summary:
      "신생아는 잠자는 시간이 길고 수면 환경이 중요해요. 안전하고 단순한 잠자리 구성이 우선이에요.",
    items: [
      "아기 침구와 수면조끼",
      "속싸개 또는 계절에 맞는 얇은 담요",
      "아기 침대 또는 안전한 수면 공간",
      "방 온도와 습도 확인용 기본 도구",
      "잠자리 주변에 불필요한 쿠션이나 소품 없는지 점검",
    ],
  },
  {
    title: "의류와 세탁",
    badge: "계절 맞춤",
    tone: "rose",
    summary:
      "옷은 예쁘게 많이 사기보다 갈아입히기 쉬운 기본 구성을 먼저 준비하는 것이 실용적이에요.",
    items: [
      "배냇저고리와 기본 내의",
      "계절에 맞는 우주복 또는 외출복",
      "신생아용 세탁세제",
      "세탁 후 바로 정리할 수 있는 수납 공간",
      "토하거나 젖었을 때 갈아입힐 여벌옷",
    ],
  },
  {
    title: "외출과 이동",
    badge: "퇴원 후 준비",
    tone: "violet",
    summary:
      "출산 직후 바로 자주 외출하지 않아도, 퇴원과 병원 방문에 필요한 이동 준비는 미리 해두는 것이 좋아요.",
    items: [
      "카시트 또는 안전한 이동 준비",
      "기저귀 가방 또는 외출용 정리 파우치",
      "외출용 담요나 계절에 맞는 덮개",
      "병원 방문 시 챙길 기본 물품 따로 정리",
      "차량 이동 또는 택시 이동 시 동선 미리 확인",
    ],
  },
];

const faqItems = [
  {
    question: "신생아 준비물은 언제부터 정리하면 좋나요?",
    answer:
      "출산 직전 한 번에 준비하려 하기보다 막달 전에 큰 항목부터 정리해두는 것이 좋아요. 특히 자주 쓰는 위생용품, 수유용품, 수면용품은 먼저 정리해두면 훨씬 편합니다.",
  },
  {
    question: "준비물은 많이 사둘수록 좋은가요?",
    answer:
      "처음부터 너무 많이 사두기보다 기본적으로 자주 쓰는 항목부터 준비하는 것이 실용적이에요. 아기마다 잘 맞는 제품이 다를 수 있어서 써본 뒤 추가하는 편이 더 나을 수 있습니다.",
  },
  {
    question: "병원이나 조리원에서 제공하는 물품이 있으면 덜 준비해도 되나요?",
    answer:
      "제공 물품이 있는 경우에도 집에 돌아왔을 때 바로 쓸 기본 준비물은 따로 필요할 수 있어요. 제공 항목과 집에서 필요한 항목을 나눠서 정리하는 것이 좋아요.",
  },
  {
    question: "신생아 준비에서 가장 먼저 챙길 것은 무엇인가요?",
    answer:
      "기저귀, 손수건, 수유용품, 체온계처럼 매일 바로 쓰게 될 기본 용품을 먼저 챙기는 것이 좋아요. 이후 수면 공간, 세탁, 외출 준비 순으로 확장하면 정리하기 쉽습니다.",
  },
];

const pageStorageKey = "app-checklists-newborn-prep-NewbornPrepChecklistClient";

export default function NewbornPrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <header className="mt-page-hero">
          <span className="mt-badge">MomTools 체크리스트</span>
          <h1 className="mt-title-xl mt-4">신생아 준비 체크리스트</h1>
          <p className="mt-text-main mt-3">기저귀, 수유용품, 위생용품, 수면 환경처럼 신생아 시기에 자주 쓰는 항목을 우선순위대로 정리했습니다.</p>
          <div className="mt-mobile-note mt-4">
            <strong className="text-slate-900">먼저 볼 기준</strong>
            <p className="mt-1">많이 사두기보다 매일 쓰는 기본 용품부터 준비하세요.</p>
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
                        <Link href="/info/newborn" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">신생아 정보 →</Link>
            <Link href="/tools/baby-age" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">아기 개월수 계산기 →</Link>
            <Link href="/tools/vaccine-schedule" className="block px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50">예방접종 일정 →</Link>
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
