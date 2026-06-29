import type { Metadata } from "next";
import Link from "next/link";
import { getQnaCategorySummaries } from "@/lib/repositories/qna-db";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "육아 Q&A | 아이 건강 성장 행동 설명형 질문 모음 | MomTools",
  description:
    "아이 건강, 아이 성장, 아이 행동으로 나눈 설명형 육아 Q&A 페이지입니다. 보호자가 집에서 먼저 볼 포인트, 체크리스트, 상담이 필요한 신호까지 함께 정리했습니다.",
  alternates: { canonical: buildCanonical("/qna") },
  openGraph: {
    title: "육아 Q&A | MomTools",
    description:
      "짧은 답변이 아니라 보호자 관점의 설명형 답변으로 정리한 육아 질문 모음입니다.",
    url: buildCanonical("/qna"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const categoryDescriptions = {
  health: "열, 기침, 콧물, 발진, 변 상태처럼 병원에 가기 전 먼저 확인하고 싶은 건강 질문입니다.",
  growth: "뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 발달 흐름이 궁금할 때 보는 질문입니다.",
  behavior: "잠투정, 편식, 떼쓰기, 분리불안처럼 매일 부딪히는 행동 고민입니다.",
} as const;

export const runtime = "nodejs";
export const revalidate = 3600;

export default async function QnaHubPage() {
  const categorySummaries = await getQnaCategorySummaries();
  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">질문형 육아 정보</span>
          <h1 className="mt-title-xl mt-4">아이 건강·성장·행동을 질문 그대로 찾아보세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            긴 설명보다 먼저 볼 기준, 상담을 서둘러야 할 신호, 기록해두면 좋은 내용을 앞에 두었습니다.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <section className="mt-simple-list" aria-label="육아 Q&A 카테고리">
          {categorySummaries.map((category) => (
            <Link key={category.key} href={`/qna/${category.key}`} className="mt-simple-list-item flex items-center justify-between gap-3">
              <span className="min-w-0">
                <strong className="block text-base font-extrabold text-slate-900">{category.name}</strong>
                <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{category.description ?? categoryDescriptions[category.key]}</span>
                <span className="mt-2 inline-block text-xs font-bold text-amber-700">{category.count}개 질문</span>
              </span>
              <span className="shrink-0 text-amber-700">→</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
