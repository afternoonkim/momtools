import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical } from "@/lib/content-meta";
import MoonlightHospitalFinder from "./MoonlightHospitalFinder";

const REVIEWED_AT = "2026-10-10";
const EGEN_MOONLIGHT_URL = "https://www.e-gen.or.kr/moonlight/main.do";

export const metadata: Metadata = {
  title: "달빛어린이병원 찾기 | 지역별 주소 전화번호·공식 운영정보 확인 | MomTools",
  description:
    "전국 달빛어린이병원을 지역별로 찾아보고 주소와 전화번호를 확인한 뒤, 방문 전 E-Gen 공식 운영정보와 병원 전화로 당일 진료시간을 다시 확인할 수 있는 안내 페이지입니다.",
  keywords: ["달빛어린이병원", "지역별 달빛어린이병원", "청주 달빛어린이병원", "소아 야간진료", "휴일 소아과", "E-Gen 달빛어린이병원"],
  alternates: { canonical: buildCanonical("/moonlight-hospitals") },
  openGraph: {
    title: "달빛어린이병원 찾기 | MomTools",
    description: "지역별 병원 정보를 찾고 E-Gen 공식 운영정보와 전화로 당일 진료 여부를 확인하세요.",
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
    name: "달빛어린이병원 찾기",
    description: "전국 달빛어린이병원 주소와 전화번호를 지역별로 확인하고 공식 운영정보를 함께 확인하는 페이지입니다.",
    inLanguage: "ko-KR",
    url: buildCanonical("/moonlight-hospitals"),
    dateModified: REVIEWED_AT,
  };

  return (
    <div className="mt-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">야간·휴일 진료 확인</span>
          <h1 className="mt-title-xl mt-4">달빛어린이병원 찾기</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            가까운 병원의 주소와 전화번호를 먼저 찾고, 이동 전에는 E-Gen 공식 운영정보와 병원 전화로 오늘 진료 가능한지 다시 확인하세요.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <ContentUpdateNote
          publishedOn="2026-04-10"
          updatedOn={REVIEWED_AT}
          note="병원 명칭·주소·전화번호 같은 정적 정보는 찾기 편하도록 제공하지만, 진료일·진료시간·접수마감은 수시로 바뀔 수 있어 E-Gen과 병원 전화 확인을 최종 기준으로 안내합니다."
        />

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">공식 운영정보 우선 확인</div>
          <h2 className="mt-title-md mt-3">목록에 있어도 오늘 바로 진료할 수 있다는 뜻은 아닙니다</h2>
          <p className="mt-text-main mt-3">
            달빛어린이병원은 야간·휴일 소아 경증환자 진료를 위한 의료기관이지만 병원별 운영시간은 다르고 변동될 수 있습니다. E-Gen도 방문 전에 반드시 전화로 진료시간을 확인하라고 안내합니다.
          </p>
          <a
            href={EGEN_MOONLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:border-amber-300"
          >
            E-Gen 달빛어린이병원 공식정보 확인하기
          </a>
        </section>

        <section className="mt-mobile-note">
          <strong className="text-slate-900">방문 전 확인</strong>
          <p className="mt-1">
            운영일, 접수 마감, 진료 가능 연령과 진료과는 병원 사정에 따라 달라질 수 있어요. 이동하기 전에 공식정보와 전화로 먼저 확인하세요. 응급 증상이 의심되면 달빛어린이병원 검색보다 119 또는 응급실 이용 판단을 우선하세요.
          </p>
        </section>

        <Suspense fallback={<div className="mt-app-stack"><div className="mt-app-stack-section">달빛어린이병원 목록을 불러오고 있어요.</div></div>}>
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
