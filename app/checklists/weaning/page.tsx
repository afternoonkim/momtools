import type { Metadata } from "next";
import WeaningPrepChecklistClient from "../weaning-prep/WeaningPrepChecklistClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

export const metadata: Metadata = {
  title: "이유식 준비 체크리스트 | 식기 재료 보관 준비물 정리 | MomTools",
  description:
    "아기 식탁의자, 이유식 스푼, 보관 용기, 조리도구, 알레르기 체크까지 한눈에 정리해보세요. MomTools 이유식 준비 체크리스트로 이유식 시작 전 필요한 준비를 빠짐없이 확인할 수 있습니다.",
  keywords: [
    "이유식 준비 체크리스트",
    "이유식 준비물",
    "이유식 식기",
    "이유식 큐브 트레이",
    "이유식 조리도구",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/weaning",
  },
  openGraph: {
    title: "이유식 준비 체크리스트 | MomTools",
    description:
      "식기, 조리도구, 보관 용기, 알레르기 체크까지 이유식 준비물을 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/weaning",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이유식 준비 체크리스트 | MomTools",
    description:
      "이유식 시작 전 필요한 준비물을 카테고리별로 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeaningPrepCanonicalPage() {
  return (
    <>
      <WeaningPrepChecklistClient />
      <div className="mt-page">
        <div className="mt-container-narrow space-y-5 md:space-y-6">
          <AdFitAd {...ADFIT_UNITS.mobileResult} />
          <ContentUpdateNote
            publishedOn="2026-04-09"
            updatedOn="2026-04-09"
            note="모바일에서 핵심 체크 항목을 먼저 볼 수 있도록 체크리스트 구조를 간단히 정리했습니다."
          />
        </div>
      </div>
    </>
  );
}
