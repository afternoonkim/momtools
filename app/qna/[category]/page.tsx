import type { Metadata } from "next";
import { Suspense } from "react";
import { qnaCategories, type QnaCategory } from "@/data/qna";
import { getQnaEntriesForCategory } from "@/lib/repositories/qna-db";
import { notFound } from "next/navigation";
import QnaCategorySearch from "./QnaCategorySearch";
import SituationExplorer from "@/components/common/SituationExplorer";

type Params = { category: string };

const categoryDescriptions: Record<QnaCategory, string> = {
  health: "열, 기침, 콧물, 구토, 설사, 발진처럼 아플 때 보호자가 가장 먼저 묻는 질문을 설명형으로 정리했습니다.",
  growth: "뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 발달 흐름을 이해하고 싶은 보호자를 위한 성장 Q&A입니다.",
  behavior: "잠, 식사, 떼쓰기, 분리불안, 예민함처럼 매일 반복되는 행동 고민을 집에서 이해하기 쉽게 풀었습니다.",
};

const situationItems: Record<QnaCategory, { href: string; label: string; description?: string }[]> = {
  health: [
    { href: "/qna/health?q=%EC%97%B4", label: "열이 날 때", description: "체온·처짐·수분 섭취" },
    { href: "/qna/health?q=%EA%B8%B0%EC%B9%A8", label: "기침·콧물", description: "호흡과 수면 변화" },
    { href: "/qna/health?q=%EA%B5%AC%ED%86%A0%20%EC%84%A4%EC%82%AC", label: "구토·설사", description: "탈수와 배변 변화" },
    { href: "/qna/health?q=%EB%B0%9C%EC%A7%84", label: "피부·발진", description: "새 음식·제품·번짐" },
    { href: "/qna/health?q=%EC%A0%91%EC%A2%85", label: "예방접종 후 증상", description: "접종 후 열과 처짐" },
    { href: "/qna/health?q=%EC%83%81%EB%8B%B4", label: "병원 상담 신호", description: "호흡곤란·경련·의식 저하" },
  ],
  growth: [
    { href: "/qna/growth?q=%EB%92%A4%EC%A7%91%EA%B8%B0", label: "뒤집기·앉기·걷기", description: "대근육 발달" },
    { href: "/qna/growth?q=%EB%A7%90", label: "말 발달", description: "이름 반응과 표현" },
    { href: "/qna/growth?q=%ED%82%A4%20%EB%AA%B8%EB%AC%B4%EA%B2%8C", label: "키·몸무게", description: "성장곡선 흐름" },
    { href: "/qna/growth?q=%EB%86%80%EC%9D%B4", label: "놀이와 운동 발달", description: "시도와 상호작용" },
    { href: "/qna/growth?q=%EC%83%81%EB%8B%B4", label: "발달 상담 신호", description: "후퇴·비대칭·반응 변화" },
  ],
  behavior: [
    { href: "/qna/behavior?q=%EC%9E%A0", label: "잠투정", description: "낮잠·밤잠 루틴" },
    { href: "/qna/behavior?q=%ED%8E%B8%EC%8B%9D", label: "편식", description: "식사 거부와 질감" },
    { href: "/qna/behavior?q=%EB%96%BC%EC%93%B0%EA%B8%B0", label: "떼쓰기", description: "감정 폭발과 전환" },
    { href: "/qna/behavior?q=%EB%B6%84%EB%A6%AC%EB%B6%88%EC%95%88", label: "분리불안", description: "등원과 보호자 분리" },
    { href: "/qna/behavior?q=%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%A7%91", label: "어린이집 적응", description: "등원 초기 변화" },
    { href: "/qna/behavior?q=%EB%82%AF%EA%B0%80%EB%A6%BC", label: "낯가림", description: "새 사람·새 장소" },
  ],
};

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateStaticParams() {
  return (Object.keys(qnaCategories) as QnaCategory[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in qnaCategories)) return {};
  const typed = category as QnaCategory;

  return {
    title: `${qnaCategories[typed]} Q&A | 설명형 육아 질문 모음 | MomTools`,
    description: `${qnaCategories[typed]}과 관련해 보호자가 집에서 먼저 확인할 포인트, 체크리스트, 상담이 필요한 신호를 설명형 답변으로 정리한 육아 질문 모음입니다.`,
    alternates: { canonical: `https://momtools.kr/qna/${category}` },
    openGraph: {
      title: `${qnaCategories[typed]} Q&A | MomTools`,
      description: `${qnaCategories[typed]} 질문을 짧은 답변이 아닌 설명형 답변으로 정리했습니다.`,
      url: `https://momtools.kr/qna/${category}`,
      siteName: "MomTools",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function QnaCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  if (!(category in qnaCategories)) notFound();
  const typed = category as QnaCategory;
  const entries = await getQnaEntriesForCategory(typed);
  const searchableEntries = entries.map(({ slug, question, topic, summary, keywords }) => ({
    slug,
    question,
    topic,
    summary,
    keywords,
  }));

  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">{qnaCategories[typed]}</span>
          <h1 className="mt-title-xl mt-4">{qnaCategories[typed]} 질문을 상황별로 확인하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">{categoryDescriptions[typed]}</p>
        </section>

        {/* <SituationExplorer
          title="지금 상황과 가까운 질문부터 고르세요"
          description="전체 목록을 훑기 전에 현재 상황과 가장 비슷한 묶음을 먼저 열어보세요."
          items={situationItems[typed]}
        /> */}

        <Suspense fallback={<div className="mt-app-stack"><div className="mt-app-stack-section">질문을 불러오고 있어요.</div></div>}>
          <QnaCategorySearch category={typed} entries={searchableEntries} />
        </Suspense>
      </div>
    </div>
  );
}
