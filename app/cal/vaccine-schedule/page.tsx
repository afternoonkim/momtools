import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import VaccineScheduleCalculatorClient from "./VaccineScheduleCalculatorClient";

export const metadata: Metadata = {
  title: "예방접종 일정 계산기 | 아기 접종 시기 확인 | MomTools",
  description:
    "아기 생년월일을 입력하면 월령 기준 예방접종 예상 시점을 간편하게 확인할 수 있습니다. 출생 직후부터 12개월 주요 접종 시기를 한눈에 정리해보세요.",
  keywords: [
    "예방접종 일정 계산기",
    "아기 예방접종 계산기",
    "예방접종 시기",
    "아기 접종 일정",
    "신생아 예방접종 일정",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/cal/vaccine-schedule",
  },
  openGraph: {
    title: "예방접종 일정 계산기 | MomTools",
    description:
      "아기 생년월일을 입력하면 월령 기준 예방접종 예상 시점을 간편하게 확인할 수 있습니다.",
    url: "https://momtools.kr/cal/vaccine-schedule",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "예방접종 일정 계산기 | MomTools",
    description:
      "출생 직후부터 12개월 주요 예방접종 시기를 한눈에 확인해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VaccineSchedulePage() {
  return (
    <div className="mt-container-narrow space-y-8">
      <VaccineScheduleCalculatorClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="예방접종 일정 계산기 중단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">계산기 설명</span>
          <h2 className="mt-title-lg mt-4">예방접종 일정 계산기란</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              예방접종 일정 계산기는 아기 생년월일을 기준으로 출생 직후부터 주요 월령에
              맞는 예방접종 시기를 참고용으로 정리해보는 도구입니다.
            </p>
            <p>
              실제 예방접종 일정은 아기의 건강 상태, 병원 예약 일정, 보건소 운영, 지연
              접종 여부 등에 따라 달라질 수 있습니다. 따라서 이 계산기 결과는 접종 흐름을
              미리 파악하는 참고용으로 보고, 실제 접종은 의료진과 공식 안내 기준을
              우선하는 것이 좋습니다.
            </p>
            <p>
              출생 직후에는 부모가 확인해야 할 정보가 많기 때문에 월령 기준 접종 흐름을
              한 번에 정리해두면 일정 관리에 큰 도움이 됩니다.
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
              title="신생아 기본 체크 가이드"
              description="수유, 수면, 황달, 병원 방문 기준과 함께 보면 초기 육아 흐름을 이해하기 좋아요."
            />
            <RelatedLink
              href="/tools/baby-age"
              title="아기 개월수 계산기"
              description="예방접종은 월령 기준으로 확인하는 경우가 많아 함께 활용하기 좋습니다."
            />
            <RelatedLink
              href="/faq"
              title="계산기 결과는 그대로 따라도 될까"
              description="참고 범위와 실제 활용 방법은 FAQ에서 다시 확인할 수 있어요."
            />
            <RelatedLink
              href="/info/pregnancy"
              title="출산 전부터 준비하는 육아 정보"
              description="출산 전후 흐름을 함께 연결해 보면 초기 접종 준비도 훨씬 쉬워집니다."
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