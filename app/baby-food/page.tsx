import type { Metadata } from "next";
import Link from "next/link";
import { stageGuides, stageLabels, getRecipesByStage } from "@/data/babyFood";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "이유식 메뉴 | 초기 중기 후기 레시피",
  description: "초기, 중기, 후기 이유식 메뉴를 단계별로 나누고 분류 필터와 검색으로 빠르게 찾을 수 있는 MomTools 이유식 허브입니다.",
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
            이유식 메뉴를 많이 보여주기보다, 지금 단계에서 볼 질감·흐름·메뉴 목록으로 바로 이동할 수 있게 정리했습니다.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
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
            <Link href="/tools/weaning-start" className="mt-chip-link">이유식 시작 계산기</Link>
            <Link href="/checklists/weaning" className="mt-chip-link">이유식 준비 체크리스트</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
