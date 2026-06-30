import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import {
  familyHealthCategories,
  type FamilyHealthQnaCategory,
} from "@/data/familyHealthQna";
import { getFamilyHealthCategorySummaries } from "@/lib/repositories/family-health-qna-db";

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
          publishedOn={SITE_DATES.published}
          updatedOn={SITE_DATES.updated}
          note="가족이 일상에서 먼저 확인할 수 있는 관찰 기준과 병원·약국 상담에 도움이 되는 기록 항목을 중심으로 정리했습니다."
        />

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
