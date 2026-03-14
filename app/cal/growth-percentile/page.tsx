import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import GrowthPercentileCalculatorClient from "./GrowthPercentileCalculatorClient";

export const metadata: Metadata = {
  title: "성장 백분위 계산기 | 아기 키 몸무게 성장 위치 체크 | MomTools",
  description:
    "성별, 월령, 키, 몸무게를 입력하면 아기의 현재 성장 위치를 간편하게 확인할 수 있습니다. 평균 흐름 대비 키와 몸무게 구간을 빠르게 참고해보세요.",
  keywords: [
    "성장 백분위 계산기",
    "아기 성장 계산기",
    "아기 키 몸무게 계산기",
    "성장 위치 체크",
    "아기 성장 곡선",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/cal/growth-percentile",
  },
  openGraph: {
    title: "성장 백분위 계산기 | MomTools",
    description:
      "성별, 월령, 키, 몸무게를 입력하면 아기의 현재 성장 위치를 간편하게 확인할 수 있습니다.",
    url: "https://momtools.kr/cal/growth-percentile",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "성장 백분위 계산기 | MomTools",
    description:
      "아기 키와 몸무게의 현재 성장 위치를 빠르게 참고해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GrowthPercentilePage() {
  return (
    <div className="mt-container-narrow space-y-8">
      <GrowthPercentileCalculatorClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="성장 백분위 계산기 중단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">계산기 설명</span>
          <h2 className="mt-title-lg mt-4">아기 성장 백분위 계산기란</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              성장 백분위 계산기는 아기의 성별, 월령, 키, 몸무게를 기준으로 같은
              연령대 아기들과 비교했을 때 현재 어느 정도 위치에 있는지를 참고용으로
              확인하는 도구입니다.
            </p>
            <p>
              예를 들어 백분위 50은 같은 연령대 아기들 중 중간 수준을 의미합니다.
              다만 백분위가 높거나 낮다고 해서 그 자체만으로 정상 여부를 단정할 수는
              없습니다. 중요한 것은 한 번의 수치보다 성장 흐름이 꾸준한지 함께 보는
              것입니다.
            </p>
            <p>
              성장 상태가 걱정되는 경우에는 수유, 이유식, 수면, 출생 이력, 진료 기록을
              함께 고려해야 하므로 반드시 소아청소년과 상담을 우선해 주세요.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 육아 정보
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/info/newborn"
              title="신생아 수유와 체중 흐름"
              description="초기 체중 증가와 수유 흐름을 함께 확인하면 성장 수치 이해에 도움이 됩니다."
            />
            <RelatedLink
              href="/info/weaning"
              title="이유식 정보"
              description="이유식 시기의 식사 변화는 키와 몸무게 흐름과도 함께 보는 것이 좋습니다."
            />
            <RelatedLink
              href="/cal/baby-age"
              title="아기 개월수 계산기"
              description="성장 백분위는 월령 기준으로 해석하므로 개월수 계산기와 함께 활용해 보세요."
            />
            <RelatedLink
              href="/faq"
              title="백분위 결과 해석 FAQ"
              description="계산 결과를 진단처럼 보면 안 되는 이유와 참고 범위를 FAQ에서 확인할 수 있어요."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function RelatedLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
    >
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-500">{description}</div>
    </Link>
  );
}