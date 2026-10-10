import type { Metadata } from "next";
import Link from "next/link";
import { stageGuides, stageLabels, getRecipesByStage } from "@/data/babyFood";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "이유식 메뉴 | 초기 중기 후기 레시피와 안전 기준",
  description: "초기, 중기, 후기 이유식 메뉴를 단계별로 찾고 시작 시기, 알레르기 관찰, 질식 예방 등 안전 기준을 함께 확인하는 MomTools 이유식 허브입니다.",
  alternates: { canonical: "https://momtools.kr/baby-food" },
};

const stages = ["early", "middle", "late"] as const;

export default function BabyFoodHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">이유식 메뉴</span>
          <h1 className="mt-title-xl mt-4">초기·중기·후기 이유식을 단계별로 찾아보세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            이유식 메뉴를 많이 보여주기보다, 지금 단계에서 볼 질감·흐름·메뉴 목록과 꼭 확인해야 할 안전 기준을 함께 정리했습니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/weaning-record" className="mt-button-primary">오늘 이유식 기록하기</Link>
            <Link href="/checklists/weaning" className="mt-button-secondary">준비물 먼저 보기</Link>
          </div>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-card-soft p-4 md:p-6">
          <h2 className="text-lg font-extrabold text-slate-900">이유식 안전 기준부터 확인하세요</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
            <li>• 보통 생후 약 6개월에 아이의 발달 준비 상태를 함께 보고 이유 보충식을 시작합니다.</li>
            <li>• 새로운 식품은 반응을 관찰할 수 있는 속도로 하나씩 도입하고, 특별한 이유 없이 알레르기 가능 식품을 무조건 늦추지는 않습니다.</li>
            <li>• 먹는 동안에는 보호자가 가까이에서 지켜보고, 아이가 삼키기 쉬운 크기와 질감으로 준비합니다.</li>
            <li>• 음식 뒤 두드러기, 얼굴·입술 부기, 반복 구토, 쌕쌕거림, 호흡곤란이 나타나면 즉시 진료가 필요할 수 있습니다.</li>
            <li>• 미숙아, 성장 문제, 이전 음식 알레르기 반응, 심한 아토피 피부염이 있다면 의료진 안내를 우선하세요.</li>
          </ul>
          <a
            href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5212"
            target="_blank"
            rel="noreferrer"
            className="mt-chip-link mt-4 inline-flex"
          >
            질병관리청 영유아 식이영양 확인
          </a>
        </section>

        <AdFitAd {...ADFIT_UNITS.contentMedium} />

        <section className="mt-simple-list" aria-label="이유식 단계별 메뉴">
          {stages.map((stage) => (
            <Link key={stage} href={`/baby-food/${stage}`} className="mt-simple-list-item flex items-center justify-between gap-3">
              <span>
                <strong className="block text-base font-extrabold text-slate-900">{stageLabels[stage]}</strong>
                <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{stageGuides[stage].intro}</span>
                <span className="mt-2 inline-block text-xs font-bold text-amber-700">{getRecipesByStage(stage).length}개 메뉴</span>
              </span>
              <span className="text-amber-700">→</span>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <h2 className="text-lg font-extrabold text-slate-900">함께 확인하면 좋은 페이지</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/weaning-record" className="mt-chip-link">이유식 기록하기</Link>
            <Link href="/tools/weaning-start" className="mt-chip-link">이유식 시작 시기</Link>
            <Link href="/checklists/weaning" className="mt-chip-link">이유식 준비 체크리스트</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
