import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import DueDateCalculatorClient from "./DueDateCalculatorClient";

export const metadata: Metadata = {
  title: "출산 예정일 계산기 | 마지막 생리일로 임신 주수 확인 | MomTools",
  description:
    "마지막 생리 시작일을 기준으로 출산 예정일, 현재 임신 주수, 남은 기간을 간편하게 계산해보세요. MomTools 임신 계산기.",
  keywords: [
    "출산 예정일 계산기",
    "임신 주수 계산기",
    "출산일 계산",
    "임신 몇 주 계산",
    "마지막 생리 시작일 출산 예정일",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/cal/due-date",
  },
  openGraph: {
    title: "출산 예정일 계산기 | MomTools",
    description:
      "마지막 생리 시작일을 기준으로 출산 예정일, 현재 임신 주수, 남은 기간을 간편하게 계산해보세요.",
    url: "https://momtools.kr/cal/due-date",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "출산 예정일 계산기 | MomTools",
    description:
      "마지막 생리 시작일을 기준으로 출산 예정일, 현재 임신 주수, 남은 기간을 확인해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DueDatePage() {
  return (
    <div className="mt-container-narrow space-y-8">
      <DueDateCalculatorClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="출산 예정일 계산기 중단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">계산기 설명</span>
          <h2 className="mt-title-lg mt-4">출산 예정일 계산기란</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              출산 예정일 계산기는 마지막 생리 시작일을 기준으로 아기의 예상 출산 날짜를
              계산하는 도구입니다. 일반적으로 임신 기간은 마지막 생리 시작일 기준 약
              280일, 즉 40주로 계산하는 경우가 많습니다.
            </p>
            <p>
              다만 실제 출산일은 예정일과 정확히 일치하지 않을 수 있으며, 배란일 차이,
              생리주기 차이, 초음파 기준 조정 등에 따라 병원에서 안내하는 예정일이 달라질
              수 있습니다. 따라서 이 계산기는 임신 주수와 전체 일정 흐름을 참고하는 용도로
              보는 것이 좋습니다.
            </p>
            <p>
              출산 예정일을 미리 확인해두면 산부인과 진료 일정, 출산 준비물, 신생아 용품
              준비, 보호자 일정 조정 같은 실질적인 준비를 조금 더 체계적으로 할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 육아 정보
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/info/pregnancy"
              title="임신 초기 증상과 주차별 체크포인트"
              description="임신 초기, 중기, 후기 흐름을 함께 보면 예정일을 더 이해하기 쉬워요."
            />
            <RelatedLink
              href="/checklists/birth-prep"
              title="출산 준비 체크리스트"
              description="예정일이 보이면 입원 가방과 출산 준비물을 실제로 정리하기 쉬워집니다."
            />
            <RelatedLink
              href="/faq"
              title="계산기 결과는 어떻게 해석하면 좋을까"
              description="MomTools 계산기 결과 활용 기준과 참고 범위를 FAQ에서 확인할 수 있어요."
            />
            <RelatedLink
              href="/cal/baby-age"
              title="출산 후에는 아기 개월수 계산기 활용"
              description="출산 이후에는 개월수 기준으로 접종, 이유식, 성장 정보를 이어서 확인할 수 있어요."
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