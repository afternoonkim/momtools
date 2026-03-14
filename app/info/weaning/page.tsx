import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import WeaningInfoClient from "./WeaningInfoClient";

export const metadata: Metadata = {
  title: "이유식 정보 | 시작 시기 단계별 진행 가이드 | MomTools",
  description:
    "이유식 시작 전 체크포인트, 단계별 진행 방법, 알레르기 주의, 잘 안 먹을 때 대처까지 한눈에 정리해보세요. 초보 부모가 보기 쉽게 구성한 MomTools 이유식 정보 페이지입니다.",
  keywords: [
    "이유식 정보",
    "이유식 시작 시기",
    "이유식 단계",
    "초기 이유식",
    "이유식 알레르기",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/info/weaning",
  },
  openGraph: {
    title: "이유식 정보 | 시작 시기 단계별 진행 가이드 | MomTools",
    description:
      "이유식 시작 전 체크포인트, 단계별 진행 방법, 알레르기 주의, 잘 안 먹을 때 대처까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/info/weaning",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이유식 정보 | MomTools",
    description:
      "이유식 시작 전 체크포인트와 단계별 진행 가이드를 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeaningPage() {
  return (
    <div className="space-y-8">
      <WeaningInfoClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="이유식 정보 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">이유식은 날짜보다 아기 준비 상태를 함께 봐야 해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              이유식은 보통 생후 4~6개월 사이에 시작하는 경우가 많지만, 실제로는 목 가누기,
              자세 유지, 음식 관심, 혀 밀어내기 반사 같은 준비 신호를 함께 보는 것이 중요합니다.
              그래서 월령만 보고 바로 시작하기보다 아기의 반응을 같이 살피는 접근이 더 현실적입니다.
            </p>
            <p>
              또 이유식 초반에는 많이 먹는 것보다 먹는 경험 자체에 적응하는 것이 더 중요합니다.
              양이 적거나 흘리는 일이 많아도 초반에는 자연스러운 경우가 많고,
              한 번에 많은 재료를 시도하기보다 천천히 반응을 확인하는 것이 좋습니다.
            </p>
            <p>
              반복되는 구토, 알레르기 의심 반응, 성장 관련 걱정이 있다면 온라인 정보만으로 판단하지 말고
              의료진 상담을 우선하는 것이 안전합니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/cal/weaning-start"
              title="이유식 시작 계산기"
              description="아기 생년월일 기준으로 이유식 준비 시점을 빠르게 참고할 수 있어요."
            />
            <RelatedLink
              href="/cal/baby-age"
              title="아기 개월수 계산기"
              description="이유식은 월령 기준으로 자주 보기 때문에 함께 활용하면 좋아요."
            />
            <RelatedLink
              href="/checklists/weaning-prep"
              title="이유식 준비 체크리스트"
              description="스푼, 식기, 의자, 보관용기 등 실제 준비물을 점검할 수 있어요."
            />
            <RelatedLink
              href="/items/essential"
              title="육아용품 목록"
              description="이유식 관련 용품을 실제 카테고리와 연결해 보기 좋습니다."
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