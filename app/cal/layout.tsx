import type { Metadata } from "next";
import AdBlock from "@/components/ad/AdBlock";
import PageContextHero from "@/components/common/PageContextHero";

export const metadata: Metadata = {
  title: "육아 계산기",
  description: "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작, 성장 백분위를 확인하는 MomTools 계산기",
};

export default function CalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-6">
        <section className="mt-card-soft p-5">
          <div className="text-lg font-bold text-slate-800">육아 계산기</div>
          <div className="mt-1 text-sm text-slate-500">
            계산 결과는 참고용입니다. 실제 진료 일정과 발달 판단은 의료진 안내를 우선해 주세요.
          </div>
        </section>

        <PageContextHero />
        <AdBlock label="육아 계산기 상단 광고 영역" format="horizontal" />
        {children}
        <AdBlock label="육아 계산기 하단 광고 영역" format="rectangle" />
      </div>
    </div>
  );
}
