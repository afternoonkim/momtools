import type { Metadata } from "next";
import BirthPrepChecklistClient from "../birth-prep/BirthPrepChecklistClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

export const metadata: Metadata = {
  title: "출산 준비 체크리스트 | 입원 준비물과 출산 전 준비 정리 | MomTools",
  description:
    "산모 준비물, 아기 준비물, 보호자 준비물, 퇴원 전 체크까지 한눈에 정리해보세요. MomTools 출산 준비 체크리스트로 빠짐없이 준비할 수 있습니다.",
  keywords: [
    "출산 준비 체크리스트",
    "출산 준비물",
    "입원 준비물",
    "산모 준비물",
    "신생아 준비물",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/birth",
  },
  openGraph: {
    title: "출산 준비 체크리스트 | MomTools",
    description:
      "산모 준비물, 아기 준비물, 보호자 준비물, 퇴원 전 체크까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/birth",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "출산 준비 체크리스트 | MomTools",
    description:
      "입원 준비물과 출산 전 준비 항목을 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BirthPrepCanonicalPage() {
  return (
    <>
      <BirthPrepChecklistClient />
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
