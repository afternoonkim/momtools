import type { Metadata } from "next";
import DaycarePrepChecklistClient from "../daycare-prep/DaycarePrepChecklistClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

export const metadata: Metadata = {
  title: "어린이집 준비 체크리스트 | 등원 준비물과 적응 준비 정리 | MomTools",
  description:
    "여벌옷, 낮잠 이불, 이름 스티커, 개인 위생용품, 비상연락처, 등원 루틴까지 한눈에 정리해보세요. MomTools 어린이집 준비 체크리스트로 첫 등원 준비를 빠짐없이 정리할 수 있습니다.",
  keywords: [
    "어린이집 준비 체크리스트",
    "어린이집 준비물",
    "첫 등원 준비",
    "어린이집 여벌옷",
    "어린이집 낮잠이불",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/daycare",
  },
  openGraph: {
    title: "어린이집 준비 체크리스트 | MomTools",
    description:
      "여벌옷, 낮잠 이불, 이름 스티커, 개인 위생용품, 비상연락처, 등원 루틴까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/daycare",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "어린이집 준비 체크리스트 | MomTools",
    description:
      "첫 등원 전에 필요한 준비물을 카테고리별로 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DaycarePrepCanonicalPage() {
  return (
    <>
      <DaycarePrepChecklistClient />
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
