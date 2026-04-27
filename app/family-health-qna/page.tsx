import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import {
  familyHealthCategories,
  familyHealthQnaData,
  familyHealthTotalCount,
  type FamilyHealthQnaCategory,
} from "@/data/familyHealthQna";

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

const guideCards = [
  {
    title: "증상 하나로 단정하지 않기",
    description:
      "열, 통증, 피로처럼 흔한 증상도 수면, 식사, 복용 중인 약, 기존 질환에 따라 의미가 달라질 수 있어요.",
  },
  {
    title: "상담에 필요한 기록 남기기",
    description:
      "언제 시작됐는지, 무엇을 하면 심해지는지, 어떤 약을 먹었는지 적어두면 병원이나 약국에서 설명하기 쉬워요.",
  },
  {
    title: "위험 신호는 빠르게 확인하기",
    description:
      "호흡곤란, 의식 저하, 흉통, 반복 구토, 심한 알레르기 반응처럼 불안한 신호는 집에서 기다리기보다 상담이 먼저예요.",
  },
];

const bridgeLinks = [
  {
    href: "/qna/health",
    label: "아이 건강 Q&A",
    description: "열, 기침, 콧물, 설사, 피부 변화처럼 아이에게 생긴 증상은 기존 육아 Q&A에서 이어서 확인할 수 있어요.",
  },
  {
    href: "/tools/vaccine-schedule",
    label: "예방접종 일정 계산기",
    description: "아이 접종 시기와 다음 일정을 정리할 때 함께 보기 좋아요.",
  },
  {
    href: "/info/pregnancy",
    label: "임신 정보",
    description: "임신 중 몸 변화와 준비 흐름을 가족건강 Q&A와 함께 확인해 보세요.",
  },
];

export default function FamilyHealthQnaHubPage() {
  const categories = Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "가족건강 Q&A",
    description: metadata.description,
    inLanguage: "ko-KR",
    url: buildCanonical("/family-health-qna"),
    mainEntity: categories.map((category) => ({
      "@type": "ItemList",
      name: familyHealthCategories[category].label,
      numberOfItems: familyHealthQnaData[category].length,
      url: buildCanonical(`/family-health-qna/${category}`),
    })),
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mt-card overflow-hidden p-8 md:p-10">
          <span className="mt-badge">가족건강 Q&amp;A</span>
          <h1 className="mt-title-xl mt-5">아이만큼 부모 건강도 함께 챙길 수 있게 정리했어요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            가족을 돌보다 보면 내 몸의 불편함은 뒤로 밀릴 때가 많아요. 이 페이지는 엄마와 아빠,
            임신·출산 후 회복, 가족 생활 건강, 약과 영양제, 건강검진 결과처럼 집에서 자주 검색하는
            질문을 모아두었습니다. 바로 결론을 내리기보다 지금 무엇을 확인하고, 어떤 내용을 기록하고,
            언제 상담을 고려하면 좋은지 쉽게 확인할 수 있게 풀어갑니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-800">총 {familyHealthTotalCount}개 질문</span>
            <span className="rounded-full bg-slate-50 px-4 py-2">엄마 건강</span>
            <span className="rounded-full bg-slate-50 px-4 py-2">아빠 건강</span>
            <span className="rounded-full bg-slate-50 px-4 py-2">약·영양제</span>
            <span className="rounded-full bg-slate-50 px-4 py-2">검진 결과</span>
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={SITE_DATES.updated}
          note="가족이 일상에서 먼저 확인할 수 있는 관찰 기준과 병원·약국 상담에 도움이 되는 기록 항목을 중심으로 정리했습니다."
        />

        <MedicalDisclaimer lang="ko" variant="full" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 이렇게 활용해 보세요</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {guideCards.map((card) => (
              <article key={card.title} className="rounded-3xl bg-white px-5 py-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-800">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const info = familyHealthCategories[category];
            return (
              <Link
                key={category}
                href={`/family-health-qna/${category}`}
                className="mt-card p-6 transition hover:-translate-y-0.5 hover:border-amber-200"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Family Health</div>
                <h2 className="mt-3 text-xl font-bold text-slate-800">{info.label}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">{info.description}</p>
                <div className="mt-4 text-sm font-semibold text-amber-700">{familyHealthQnaData[category].length}개 질문 보기</div>
              </Link>
            );
          })}
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">아이 건강 질문은 어디서 보면 좋을까요?</h2>
          <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
            가족건강 Q&amp;A는 부모와 가족 전체의 생활 건강을 넓게 다룹니다. 아이의 열, 기침, 배변,
            성장, 행동처럼 육아 상황과 바로 연결되는 질문은 기존 육아 Q&amp;A와 함께 보면 더 편해요.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {bridgeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="mt-list-card transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="font-semibold text-slate-800">{item.label}</div>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
