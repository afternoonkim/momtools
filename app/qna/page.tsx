import type { Metadata } from "next";
import Link from "next/link";
import { qnaCategories, qnaData } from "@/data/qna";
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
  health: "열, 기침, 콧물, 발진, 변 상태처럼 병원에 가기 전 가장 먼저 확인하고 싶은 건강 질문을 모았습니다.",
  growth: "뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 발달 흐름이 궁금할 때 먼저 볼 질문을 정리했습니다.",
  behavior: "잠투정, 편식, 떼쓰기, 분리불안, 예민함처럼 일상에서 바로 부딪히는 행동 고민을 정리했습니다.",
} as const;

const guideCards = [
  {
    title: "질문 그대로 찾기",
    description: "보호자가 실제로 궁금해하는 문장 그대로 정리되어 있어, 원하는 답을 빠르게 찾아볼 수 있어요.",
  },
  {
    title: "체크포인트 먼저 보기",
    description: "병원에 전화하기 전, 집에서 먼저 살펴보면 좋은 포인트와 어떤 기록을 남겨 두면 도움이 되는지 함께 안내해요.",
  },
  {
    title: "왜 그런지까지 이해하기",
    description: "“괜찮아요/아니에요” 한 줄이 아니라, 왜 이런 상황을 같이 봐야 하는지, 언제 상담이 필요한지까지 풀어서 설명해요.",
  },
];

export default function QnaHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">질문형 육아 정보</span>
          <h1 className="mt-title-xl mt-5">아이 건강·성장·행동, 궁금한 질문부터 천천히 풀어 보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            “이게 정상인지 아닌지” 한 줄로 끊어 말하기 어려운 상황이 더 많죠. 그래서 부모가 실제로
            궁금해하는 질문 그대로 모아 두고, 지금 집에서 무엇을 먼저 보면 좋은지, 어떤 기록을 남겨 두면
            도움이 되는지, 언제 상담을 고려해야 하는지까지 자세히 설명하고 있어요.
          </p>
        </section>

        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <MedicalDisclaimer lang="ko" variant="full" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이 페이지가 다른 점</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {guideCards.map((card) => (
              <div key={card.title} className="rounded-3xl bg-white px-5 py-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-800">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 알아둘 점</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            육아 Q&amp;A는 보호자가 집에서 먼저 확인할 포인트를 정리한 일반 참고용 정보입니다. 특히
            건강 카테고리는 공공 건강정보에서 공통적으로 안내하는 관찰 원칙을 기준으로 보수적으로
            정리했습니다. 아이 상태가 평소와 많이 다르거나 보호자가 느끼기에 불안할 정도라면 온라인
            정보보다 진료 상담을 먼저 고려하는 편이 안전합니다.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {(Object.keys(qnaCategories) as Array<keyof typeof qnaCategories>).map((key) => (
            <Link key={key} href={`/qna/${key}`} className="mt-card p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Q&amp;A</div>
              <h2 className="mt-3 text-xl font-bold text-slate-800">{qnaCategories[key]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{categoryDescriptions[key]}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">총 {qnaData[key].length}개 질문</div>
            </Link>
          ))}
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">이렇게 활용하면 더 편해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              아이가 열이 나거나, 발달이 좀 느린 것 같거나, 갑자기 떼쓰기가 심해지면 짧고 빠른 답부터 찾게 되죠.
              그런데 실제로는 숫자 하나, 행동 하나만 보고 판단하기 어려운 경우가 많아요. 그래서 각 상황을
              설명형으로 풀어서, 집에서 먼저 살펴볼 기준과 다음 행동을 함께 정리해 두었어요.
            </p>
            <p>
              카테고리에 들어가면 질문별로 체크포인트, 간단한 대처법, 상담이 필요한 신호, 관련 도구와 정보까지
              이어서 볼 수 있어요. 한 번에 많은 내용을 다 외우기보다, 지금 궁금한 질문부터 차근차근 읽어보세요.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
