import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "육아 정보 허브 | 임신 신생아 이유식 유아 가이드 | MomTools",
  description:
    "임신, 신생아, 이유식, 유아 시기의 핵심 흐름을 한곳에서 볼 수 있는 MomTools 육아 정보 허브입니다. 지금 시기에 맞는 가이드를 빠르게 찾고 다음에 이어서 볼 페이지까지 함께 확인해 보세요.",
  alternates: { canonical: buildCanonical("/info") },
  openGraph: {
    title: "육아 정보 허브 | MomTools",
    description: "임신부터 유아기까지 자주 찾는 육아 정보 흐름을 한곳에 정리했습니다.",
    url: buildCanonical("/info"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const guides = [
  ["임신 정보", "주차별 체크포인트, 생활 습관, 출산 준비 흐름을 정리합니다.", "/info/pregnancy"],
  ["신생아 정보", "수유, 수면, 체온, 황달, 상담 신호처럼 초기에 자주 찾는 내용입니다.", "/info/newborn"],
  ["이유식 정보", "언제 시작할지, 첫 재료와 단계별 진행 흐름을 확인합니다.", "/info/weaning"],
  ["유아 정보", "식사, 수면, 생활 루틴처럼 유아기 일상에서 반복되는 주제입니다.", "/info/toddler"],
  ["아이사랑 공식정보 활용", "어린이집, 입소대기, 임신·출산·육아 공식 메뉴를 필요한 순서로 정리합니다.", "/info/childcare-portal"],
] as const;

export default function InfoHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">참고하기</span>
          <h1 className="mt-title-xl mt-4">지금 시기에 필요한 정보만 골라보세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            임신, 신생아, 이유식, 유아 시기별로 자주 찾는 핵심 정보를 간단히 이어볼 수 있게 정리했습니다.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <section className="mt-simple-list" aria-label="육아 정보 목록">
          {guides.map(([title, description, href]) => (
            <Link key={href} href={href} className="mt-simple-list-item flex items-center justify-between gap-3">
              <span>
                <strong className="block text-base font-extrabold text-slate-900">{title}</strong>
                <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{description}</span>
              </span>
              <span className="text-amber-700">→</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
