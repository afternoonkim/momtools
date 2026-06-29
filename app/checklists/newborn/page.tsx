import type { Metadata } from "next";
import NewbornPrepChecklistClient from "../newborn-prep/NewbornPrepChecklistClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

export const metadata: Metadata = {
  title: "신생아 준비 체크리스트 | 수유 수면 위생 준비물 정리 | MomTools",
  description:
    "기저귀, 수유용품, 위생용품, 수면용품, 외출 준비물까지 한눈에 정리해보세요. MomTools 신생아 준비 체크리스트로 신생아 맞이 준비를 빠짐없이 정리할 수 있습니다.",
  keywords: [
    "신생아 준비 체크리스트",
    "신생아 준비물",
    "출산 후 준비물",
    "신생아 수유용품",
    "신생아 수면용품",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/newborn",
  },
  openGraph: {
    title: "신생아 준비 체크리스트 | MomTools",
    description:
      "기저귀, 수유용품, 위생용품, 수면용품, 외출 준비물까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/newborn",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "신생아 준비 체크리스트 | MomTools",
    description:
      "신생아 맞이 준비물을 카테고리별로 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewbornPrepCanonicalPage() {
  return (
    <>
      <NewbornPrepChecklistClient />
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
