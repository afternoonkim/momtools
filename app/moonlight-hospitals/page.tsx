import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical } from "@/lib/content-meta";
import MoonlightHospitalFinder from "./MoonlightHospitalFinder";

export const metadata: Metadata = {
  title: "달빛아동병원 찾기 | 서울 인천 청주 지역별 주소 전화번호 | MomTools",
  description:
    "서울, 인천, 청주, 용인 등 전국 달빛아동병원을 지역별로 찾아보고 주소와 전화번호를 바로 확인할 수 있는 모바일 중심 안내 페이지입니다.",
  keywords: ["달빛아동병원", "지역별 달빛아동병원", "청주 달빛아동병원", "인천 달빛아동병원", "소아 야간진료", "휴일 소아과"],
  alternates: { canonical: buildCanonical("/moonlight-hospitals") },
  openGraph: {
    title: "달빛아동병원 찾기 | MomTools",
    description: "서울, 인천, 청주 등 지역별 달빛아동병원 주소와 전화번호를 확인하세요.",
    url: buildCanonical("/moonlight-hospitals"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

export default function MoonlightHospitalsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${buildCanonical("/moonlight-hospitals")}#webpage`,
    name: "달빛아동병원 찾기",
    description: "서울, 인천, 청주 등 전국 달빛아동병원 주소와 전화번호를 지역별로 확인하는 페이지입니다.",
    inLanguage: "ko-KR",
    url: buildCanonical("/moonlight-hospitals"),
  };

  return (
    <div className="mt-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">확인하기</span>
          <h1 className="mt-title-xl mt-4">달빛아동병원 찾기</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            야간이나 휴일에 아이 진료가 필요할 때, 가까운 달빛아동병원의 주소와 전화번호를 먼저 확인하세요.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-mobile-note">
          <strong className="text-slate-900">방문 전 확인</strong>
          <p className="mt-1">
            운영일, 접수 마감, 진료 가능 연령은 병원 사정에 따라 달라질 수 있어요. 이동하기 전에 전화로 먼저 확인하는 것이 안전합니다.
          </p>
        </section>

        <Suspense fallback={<div className="mt-app-stack"><div className="mt-app-stack-section">달빛아동병원 목록을 불러오고 있어요.</div></div>}>
          <MoonlightHospitalFinder />
        </Suspense>

        <section className="mt-app-link-list" aria-label="함께 보면 좋은 확인 메뉴">
          <Link href="/qna/health" className="mt-app-link-item">
            <div className="mt-app-link-title">아이 건강 Q&A</div>
            <div className="mt-app-link-desc">열, 기침, 구토, 설사처럼 집에서 먼저 볼 기준을 확인합니다.</div>
          </Link>
          <Link href="/health" className="mt-app-link-item">
            <div className="mt-app-link-title">증상별 가이드</div>
            <div className="mt-app-link-desc">상담을 서두를 신호와 기록해둘 점을 증상별로 봅니다.</div>
          </Link>
        </section>
      </div>
    </div>
  );
}
