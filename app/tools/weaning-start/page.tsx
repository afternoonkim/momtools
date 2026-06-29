import type { Metadata } from "next";
import Link from "next/link";
import WeaningStartCalculatorClient from "@/app/cal/weaning-start/WeaningStartCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/weaning-start");

export const metadata: Metadata = {
  title: "이유식 시작 계산기 | 시작 시기와 준비 순서 정리 | MomTools",
  description:
    "생년월일을 기준으로 이유식 시작 시기를 참고용으로 확인하고, 첫 재료·준비 도구·진행 순서까지 함께 살펴볼 수 있는 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/weaning-start") },
};


const nextStepItems = [
  { href: "/baby-food/early", label: "초기 이유식", description: "첫 재료와 부드러운 질감부터 살펴봐요.", tag: "초기" },
  { href: "/checklists/weaning", label: "이유식 준비물", description: "조리도구와 보관용품을 체크해요.", tag: "준비" },
  { href: "/qna/health", label: "알레르기 체크", description: "새 재료 뒤 피부·구토·설사 신호를 확인해요.", tag: "관찰" }
] as const;

const firstLookItems = [
  "아이가 고개와 목을 비교적 안정적으로 가누는지 봅니다.",
  "먹는 모습을 보며 관심을 보이거나 입을 벌리는 반응이 있는지 확인합니다.",
  "처음부터 양을 늘리기보다 재료와 질감을 천천히 늘릴 계획을 세웁니다."
] as const;

const cautionItems = [
  "아이가 아직 앉는 자세를 유지하기 어렵습니다.",
  "구토, 설사, 발진처럼 컨디션 변화가 있습니다.",
  "미숙아, 질환, 알레르기 이력 등으로 병원 안내가 필요한 상황입니다."
] as const;

const faqItems = [
  { question: "처음부터 하루 두 번 먹여도 되나요?", answer: "적은 양으로 천천히 시작해 아이 반응을 확인하는 편이 부담이 적습니다." },
  { question: "새 재료는 얼마나 천천히 늘리면 좋을까요?", answer: "새로운 재료를 한꺼번에 많이 추가하기보다 보호자가 반응을 관찰할 수 있는 속도로 진행하는 것이 좋습니다." }
] as const;

const relatedItems = [
  { href: "/baby-food/early", title: "초기 이유식 메뉴", description: "첫 재료와 질감 흐름을 이어서 봐요." },
  { href: "/checklists/weaning", title: "이유식 준비 체크리스트", description: "도구와 준비 순서를 실제 항목으로 정리해요." },
  { href: "/tools/baby-age", title: "아기 개월수 계산기", description: "월령 기준을 함께 맞춰요." }
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">이유식 준비 흐름</span>
          <h1 className="mt-title-lg mt-4">이유식은 시작 날짜보다 준비 신호를 함께 봅니다</h1>
          <p className="mt-text-main mt-3">생년월일로 시작 시기를 참고하고, 앉는 자세·목 가누기·음식 관심·알레르기 관찰을 함께 정리합니다.</p>
        </section>

        <WeaningStartCalculatorClient />

        <AdFitAd {...ADFIT_UNITS.mobileResult} />

        <NextStepLinks
          eyebrow="이유식 시작 다음에 볼 정보"
          title="시작 시기를 확인했다면 재료와 준비물을 정리하세요"
          description="날짜만 정하기보다 아이의 준비 신호, 첫 재료, 알레르기 관찰, 조리 도구를 함께 보세요."
          items={[...nextStepItems]}
        />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="이유식 시작 페이지는 단순 날짜 계산이 아니라, 보호자가 실제 준비 순서를 이해할 수 있도록 단계별 설명과 연결 메뉴를 다듬었습니다."
        />

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">먼저 볼 기준</h2>
          <ul className="mt-result-list mt-4">
            {firstLookItems.map((item) => (
              <li key={item} className="mt-result-list-item">
                <span className="mt-result-value">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">시작을 서두르지 말아야 할 때</h2>
          <ul className="mt-result-list mt-4">
            {cautionItems.map((item) => (
              <li key={item} className="mt-result-list-item border-amber-100 bg-amber-50/60">
                <span className="mt-result-value text-amber-900">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="mt-section-details">
                <summary className="mt-section-summary">{item.question}</summary>
                <p className="mt-detail-body">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이어서 보기</div>
          <div className="mt-result-list mt-4">
            {relatedItems.map((item) => (
              <Link key={item.href} href={item.href} className="mt-list-card">
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-1 text-sm leading-6 text-slate-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
