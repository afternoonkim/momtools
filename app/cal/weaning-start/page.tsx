import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import WeaningStartCalculatorClient from "./WeaningStartCalculatorClient";

export const metadata: Metadata = {
  title: "이유식 시작 계산기 | 아기 이유식 시작 시기 확인 | MomTools",
  description:
    "아기 생년월일을 입력하면 이유식 준비 시작일과 이유식 시작 참고일을 간편하게 확인할 수 있습니다. 일반 기준과 교정 연령 참고 여부를 함께 반영해보세요.",
  keywords: [
    "이유식 시작 계산기",
    "이유식 시작 시기",
    "아기 이유식 시작",
    "이유식 준비 시기",
    "초기 이유식 시작",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/cal/weaning-start",
  },
  openGraph: {
    title: "이유식 시작 계산기 | MomTools",
    description:
      "아기 생년월일을 입력하면 이유식 준비 시작일과 이유식 시작 참고일을 간편하게 확인할 수 있습니다.",
    url: "https://momtools.kr/cal/weaning-start",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이유식 시작 계산기 | MomTools",
    description:
      "이유식 준비 시작일과 이유식 시작 참고일을 한눈에 확인해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeaningStartPage() {
  return (
    <div className="mt-container-narrow space-y-8">
      <WeaningStartCalculatorClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="이유식 시작 계산기 중단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">계산기 설명</span>
          <h2 className="mt-title-lg mt-4">이유식 시작 계산기란</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              이유식 시작 계산기는 아기 생년월일을 기준으로 이유식 준비를 언제부터
              시작하면 좋은지, 그리고 일반적으로 언제쯤 이유식을 시작하는지 참고일을
              정리해보는 도구입니다.
            </p>
            <p>
              이유식은 보통 생후 4~6개월 사이에 시작하는 경우가 많지만, 실제 시작 시점은
              아기의 목 가누기, 음식에 대한 관심, 혀 밀어내기 반사 감소 같은 발달 상태를
              함께 보고 결정하는 것이 중요합니다.
            </p>
            <p>
              따라서 계산기 결과는 날짜를 정확히 고정하는 용도보다 준비 흐름을 잡는
              참고 기준으로 활용하는 것이 좋습니다. 특히 미숙아 등 교정 연령을 고려해야
              하는 경우에는 반드시 의료진 안내를 우선해 주세요.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 육아 정보
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/info/weaning"
              title="이유식 시작 전 체크포인트"
              description="단계별 이유식 진행 흐름과 준비 포인트를 함께 확인할 수 있어요."
            />
            <RelatedLink
              href="/tools/baby-age"
              title="아기 개월수 계산기"
              description="이유식은 월령 기준으로 많이 보기 때문에 개월수 계산기와 함께 활용하기 좋습니다."
            />
            <RelatedLink
              href="/checklists/weaning"
              title="이유식 준비 체크리스트"
              description="스푼, 의자, 턱받이, 이유식 용기처럼 실제 준비물도 함께 정리해보세요."
            />
            <RelatedLink
              href="/faq"
              title="참고용 계산 결과 활용 방법"
              description="계산기 결과를 어떻게 이해하면 좋은지 FAQ에서 함께 확인할 수 있어요."
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