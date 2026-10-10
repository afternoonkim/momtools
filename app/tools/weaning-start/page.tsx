import type { Metadata } from "next";
import Link from "next/link";
import WeaningStartCalculatorClient from "@/app/cal/weaning-start/WeaningStartCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import NextStepLinks from "@/components/common/NextStepLinks";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/tools/weaning-start");

export const metadata: Metadata = {
  title: "이유식 시작 시기 | 생후 6개월과 준비 신호 확인 | MomTools",
  description:
    "이유식은 달력상 날짜만으로 결정하지 않습니다. 생후 약 6개월을 참고하되 목 가누기, 지지해 앉기, 삼키기, 음식 관심 등 발달 준비 상태를 함께 확인하세요.",
  alternates: { canonical: buildCanonical("/tools/weaning-start") },
};

const nextStepItems = [
  { href: "/baby-food/early", label: "초기 이유식", description: "첫 재료와 부드러운 질감부터 살펴봐요.", tag: "초기" },
  { href: "/checklists/weaning", label: "이유식 준비물", description: "조리도구와 보관용품을 체크해요.", tag: "준비" },
  { href: "/qna/health", label: "알레르기 체크", description: "새 재료 뒤 피부·구토·설사·호흡 신호를 확인해요.", tag: "관찰" },
] as const;

const firstLookItems = [
  "아이가 고개와 목을 비교적 안정적으로 가누는지 봅니다.",
  "도움을 받아 몸을 지지해 앉을 수 있고 음식을 삼키는 준비가 되었는지 확인합니다.",
  "어른이 먹는 모습을 보고 음식에 관심을 보이는지 함께 봅니다.",
] as const;

const cautionItems = [
  "아이가 아직 머리와 몸통을 지지하기 어렵거나 음식을 계속 밀어냅니다.",
  "구토, 설사, 발진, 호흡 이상처럼 컨디션 변화가 있습니다.",
  "미숙아, 성장 문제, 질환, 이전 알레르기 반응 등으로 개별 안내가 필요한 상황입니다.",
] as const;

const faqItems = [
  { question: "정확히 생후 6개월 되는 날 시작해야 하나요?", answer: "아니요. 생후 약 6개월은 참고 시점이고 실제 시작은 아이의 발달 준비 상태를 함께 봐야 합니다." },
  { question: "미숙아는 180일이 되면 시작하면 되나요?", answer: "그렇게 단순 계산하면 안 됩니다. 교정연령은 출생 주수에 따라 달라지므로 의료진이 안내한 교정연령과 성장·발달 상태를 우선하세요." },
  { question: "알레르기 가능 식품은 최대한 늦게 먹이는 게 안전한가요?", answer: "특별한 이유 없이 무조건 늦출 필요는 없습니다. 다만 이전 반응, 심한 아토피 피부염, 강한 알레르기 병력이 있으면 도입 전에 의료진과 상의하는 것이 좋습니다." },
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-card p-4 md:p-6">
          <span className="mt-badge">이유식 안전 기준 재검토</span>
          <h1 className="mt-title-lg mt-4">이유식은 날짜보다 준비 신호를 함께 봅니다</h1>
          <p className="mt-text-main mt-3">질병관리청 최신 영유아 영양 안내처럼 보통 생후 약 6개월을 참고하되, 머리·몸통 조절과 삼키기 준비 상태를 함께 확인하세요.</p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
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
          note="2026년 10월 안전성 재검토에서 미숙아를 일괄 180일로 계산하던 로직을 제거하고, 생후 약 6개월 참고 시점과 발달 준비 신호를 함께 보도록 수정했습니다."
        />

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">먼저 볼 기준</h2>
          <ul className="mt-result-list mt-4">
            {firstLookItems.map((item) => <li key={item} className="mt-result-list-item"><span className="mt-result-value">{item}</span></li>)}
          </ul>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="mt-title-md">시작을 서두르지 말아야 할 때</h2>
          <ul className="mt-result-list mt-4">
            {cautionItems.map((item) => <li key={item} className="mt-result-list-item border-amber-100 bg-amber-50/60"><span className="mt-result-value text-amber-900">{item}</span></li>)}
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">공식 안내</div>
          <p className="mt-text-sub mt-3">질병관리청 국가건강정보포털의 영유아 식이영양 자료는 이유 보충식을 보통 생후 약 6개월에 아이의 발달 준비 상태를 보고 시작하도록 안내합니다.</p>
          <a href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5212" target="_blank" rel="noreferrer" className="mt-chip-link mt-4 inline-flex">질병관리청 영유아 식이영양</a>
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이어서 보기</div>
          <div className="mt-result-list mt-4">
            <Link href="/baby-food/early" className="mt-list-card"><div className="font-semibold text-slate-800">초기 이유식 메뉴</div><div className="mt-1 text-sm leading-6 text-slate-500">첫 재료와 질감 흐름을 이어서 봐요.</div></Link>
            <Link href="/checklists/weaning" className="mt-list-card"><div className="font-semibold text-slate-800">이유식 준비 체크리스트</div><div className="mt-1 text-sm leading-6 text-slate-500">도구와 준비 순서를 실제 항목으로 정리해요.</div></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
