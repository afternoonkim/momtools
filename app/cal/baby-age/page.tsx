import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import BabyAgeCalculatorClient from "./BabyAgeCalculatorClient";

export const metadata: Metadata = {
  title: "아기 개월수 계산기 | 생후 개월수·일수·100일 확인 | MomTools",
  description:
    "아기 생년월일을 입력하면 현재 개월수, 출생 후 일수, 주수, 100일·200일·돌 시점을 간편하게 확인할 수 있습니다.",
  keywords: [
    "아기 개월수 계산기",
    "생후 개월수 계산",
    "아기 개월수",
    "아기 100일 계산",
    "아기 돌 계산",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/cal/baby-age",
  },
  openGraph: {
    title: "아기 개월수 계산기 | MomTools",
    description:
      "아기 생년월일을 입력하면 현재 개월수, 출생 후 일수, 주수, 100일·200일·돌 시점을 간편하게 확인할 수 있습니다.",
    url: "https://momtools.kr/cal/baby-age",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "아기 개월수 계산기 | MomTools",
    description:
      "생후 개월수, 출생 후 일수, 100일·돌 시점을 한 번에 확인해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BabyAgePage() {
  return (
    <div className="mt-container-narrow space-y-8">
      <BabyAgeCalculatorClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="아기 개월수 계산기 중단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">계산기 설명</span>
          <h2 className="mt-title-lg mt-4">아기 개월수 계산기란</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              아기 개월수 계산기는 아기의 출생일을 기준으로 현재 생후 개월수와 출생 후
              일수, 100일, 200일, 돌 시점 등을 한 번에 확인할 수 있는 도구입니다.
            </p>
            <p>
              육아 정보는 대부분 개월수 기준으로 설명되기 때문에 정확한 개월수를 알고
              있는 것이 중요합니다. 예방접종 일정, 이유식 시작 시기, 성장 발달 정보,
              수면 패턴 변화 등도 대부분 월령 기준으로 안내됩니다.
            </p>
            <p>
              특히 출생 후 초반에는 하루 차이도 체감이 큰 시기이기 때문에 생년월일을
              기준으로 개월수와 주요 기념 시점을 미리 확인해두면 육아 계획을 세우는 데
              도움이 됩니다.
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
              title="신생아 수유와 수면 정보"
              description="개월수에 따라 수유 간격과 수면 흐름이 달라지기 때문에 함께 보면 좋아요."
            />
            <RelatedLink
              href="/tools/vaccine-schedule"
              title="예방접종 일정 계산기"
              description="접종은 월령 기준으로 많이 확인하므로 개월수 계산기와 같이 활용하기 좋습니다."
            />
            <RelatedLink
              href="/tools/weaning-start"
              title="이유식 시작 계산기"
              description="이유식 시작 시점도 생후 개월수를 기준으로 많이 판단합니다."
            />
            <RelatedLink
              href="/faq"
              title="계산기 활용 방법 FAQ"
              description="결과를 어떻게 참고하면 되는지 자주 묻는 질문에서 함께 확인할 수 있어요."
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