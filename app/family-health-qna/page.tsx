import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import {
  familyHealthCategories,
  type FamilyHealthQnaCategory,
} from "@/data/familyHealthQna";
import { getFamilyHealthCategorySummaries } from "@/lib/repositories/family-health-qna-db";

const pageDates = getPageDates("/family-health-qna");
const NEDRUG_URL = "https://nedrug.mfds.go.kr";
const DRUGSAFE_URL = "https://www.drugsafe.or.kr";

export const metadata: Metadata = {
  title: "가족건강 Q&A | 엄마 아빠 생활 건강 약 영양제 질문 모음 | MomTools",
  description:
    "엄마 건강, 아빠 건강, 임신·출산 후 건강, 가족 생활 건강, 약·영양제, 검진·병원 이용 질문을 쉽게 둘러볼 수 있는 가족건강 Q&A입니다.",
  keywords: [
    "가족건강 Q&A",
    "엄마 건강",
    "아빠 건강",
    "생활 건강",
    "약 영양제",
    "건강검진 결과",
    "출산 후 건강",
  ],
  alternates: { canonical: buildCanonical("/family-health-qna") },
  openGraph: {
    title: "가족건강 Q&A | MomTools",
    description:
      "가족이 일상에서 자주 궁금해하는 건강 질문을 집에서 먼저 확인할 점과 상담이 필요한 신호 중심으로 정리했습니다.",
    url: buildCanonical("/family-health-qna"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

export const revalidate = 3600;

export default async function FamilyHealthQnaHubPage() {
  const categorySummaries = await getFamilyHealthCategorySummaries();
  const categories = categorySummaries.map((category) => category.key);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "가족건강 Q&A",
    description: metadata.description,
    inLanguage: "ko-KR",
    url: buildCanonical("/family-health-qna"),
    dateModified: pageDates.updated,
    mainEntity: categories.map((category) => ({
      "@type": "ItemList",
      name: familyHealthCategories[category as FamilyHealthQnaCategory].label,
      numberOfItems: categorySummaries.find((item) => item.key === category)?.count ?? 0,
      url: buildCanonical(`/family-health-qna/${category}`),
    })),
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mt-page-hero">
          <span className="mt-badge">가족건강 Q&amp;A</span>
          <h1 className="mt-title-xl mt-4">아이를 돌보는 가족 건강도 간단히 확인하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            부모와 가족이 자주 검색하는 건강 질문을 증상 단정이 아니라 확인할 점, 기록할 점, 상담 신호 중심으로 정리했습니다.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="2026년 10월 기준으로 건강정보의 표현과 약·영양제 안전 안내를 다시 점검했습니다. 개별 제품의 성분·용량·임신·수유·소아 사용 여부는 최신 제품 설명서와 의약품안전나라, 약사·의료진 안내를 최종 기준으로 확인해 주세요."
        />

        <section className="mt-card-soft p-4 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">약·영양제 확인 원칙</div>
          <h2 className="mt-title-md mt-3">제품명보다 성분과 현재 복용 상황을 먼저 확인하세요</h2>
          <ul className="mt-result-list mt-4">
            <li className="mt-result-list-item"><span className="mt-result-value">감기약·진통제·영양제처럼 익숙한 제품도 같은 성분이나 비슷한 효능군을 중복해서 먹지 않는지 확인합니다.</span></li>
            <li className="mt-result-list-item"><span className="mt-result-value">임신·수유 중이거나 아이가 복용할 때는 연령·체중·기존 질환과 다른 약을 함께 확인한 뒤 약사나 의료진에게 문의하는 것이 안전합니다.</span></li>
            <li className="mt-result-list-item"><span className="mt-result-value">제품명·함량·제형은 바뀔 수 있으므로 실제 복용 전 최신 포장지와 허가사항을 다시 확인합니다.</span></li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={NEDRUG_URL} target="_blank" rel="noopener noreferrer" className="mt-chip-link">의약품안전나라 확인</a>
            <a href={DRUGSAFE_URL} target="_blank" rel="noopener noreferrer" className="mt-chip-link">의약품안전관리원 DUR 확인</a>
          </div>
        </section>

        <section className="mt-simple-list" aria-label="가족건강 Q&A 카테고리">
          {categories.map((category) => {
            const info = familyHealthCategories[category as FamilyHealthQnaCategory];
            return (
              <Link key={category} href={`/family-health-qna/${category}`} className="mt-simple-list-item flex items-center justify-between gap-3">
                <span className="min-w-0">
                  <strong className="block text-base font-extrabold text-slate-900">{info.label}</strong>
                  <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{info.description}</span>
                </span>
                <span className="shrink-0 text-amber-700">→</span>
              </Link>
            );
          })}
        </section>

        <section className="mt-card-soft p-4 md:p-6">
          <h2 className="text-lg font-extrabold text-slate-900">아이 건강 질문은 따로 볼 수 있어요</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">열, 기침, 배변, 성장, 행동처럼 아이 상황과 바로 연결되는 질문은 육아 Q&amp;A에서 확인하는 편이 더 빠릅니다.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/qna/health" className="mt-chip-link">아이 건강 Q&amp;A</Link>
            <Link href="/health" className="mt-chip-link">증상별 가이드</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
