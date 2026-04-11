import type { Metadata } from "next";
import Link from "next/link";
import { getQnaEntries, qnaCategories, type QnaCategory } from "@/data/qna";
import { notFound } from "next/navigation";

type Params = { category: string };

const categoryDescriptions: Record<QnaCategory, string> = {
  health: "열, 기침, 콧물, 구토, 설사, 발진처럼 아플 때 보호자가 가장 먼저 묻는 질문을 설명형으로 정리했습니다.",
  growth: "뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 발달 흐름을 이해하고 싶은 보호자를 위한 성장 Q&A입니다.",
  behavior: "잠, 식사, 떼쓰기, 분리불안, 예민함처럼 매일 반복되는 행동 고민을 집에서 이해하기 쉽게 풀었습니다.",
};

const categoryGuideCards: Record<QnaCategory, { title: string; description: string }[]> = {
  health: [
    {
      title: "숫자보다 컨디션 먼저 보기",
      description: "체온 숫자 하나보다 아이가 처지는지, 잘 마시는지, 숨쉬는 모습이 편한지를 함께 봐야 판단이 쉬워집니다.",
    },
    {
      title: "기록이 가장 큰 도움",
      description: "증상이 시작된 시간, 체온 변화, 수유량, 소변 횟수를 적어두면 진료 설명이 훨씬 쉬워집니다.",
    },
    {
      title: "경고 신호는 바로 확인",
      description: "호흡곤란, 경련, 탈수 의심, 혈변처럼 경고 신호가 있으면 검색보다 상담이 우선입니다.",
    },
  ],
  growth: [
    {
      title: "하루 차이보다 흐름 보기",
      description: "오늘 못 하는 것 하나보다 최근 몇 주 사이에 어떤 시도가 늘었는지 보는 것이 더 중요합니다.",
    },
    {
      title: "개월수 정확히 맞추기",
      description: "같은 연령처럼 보여도 실제 개월수 차이에 따라 발달 비교 기준이 달라질 수 있습니다.",
    },
    {
      title: "기술 후퇴는 체크",
      description: "하던 기능이 갑자기 줄거나 상호작용이 눈에 띄게 달라지면 상담이 필요한 신호일 수 있습니다.",
    },
  ],
  behavior: [
    {
      title: "행동은 배경과 함께 보기",
      description: "떼쓰기나 거부 행동은 배고픔, 졸림, 과자극, 예고 없는 전환과 연결되는 경우가 많습니다.",
    },
    {
      title: "패턴 찾기가 우선",
      description: "언제, 누구와 있을 때, 어떤 상황에서 심해지는지 알면 대응이 훨씬 쉬워집니다.",
    },
    {
      title: "일관된 반응이 중요",
      description: "긴 설명보다 짧고 같은 문장으로 반복해주는 방식이 갈등을 줄이는 데 도움이 됩니다.",
    },
  ],
};

const categoryIntroBlocks: Record<QnaCategory, string[]> = {
  health: [
    "아이 건강 Q&A는 보호자가 바로 검색하는 문장형 질문을 그대로 살리면서, 짧은 답변이 아니라 집에서 어떻게 관찰하고 어떤 상황에서 병원을 먼저 고려해야 하는지까지 설명하도록 구성했습니다.",
    "특히 건강 카테고리는 열, 기침, 콧물, 배변, 피부 변화처럼 흔하지만 불안해지기 쉬운 주제를 중심으로 정리했습니다. 병명을 추측하기보다 지금 아이 상태를 더 정확히 이해하는 데 초점을 맞췄습니다.",
  ],
  growth: [
    "아이 성장 Q&A는 발달 속도가 또래보다 느린 것 같아 걱정될 때, 혹은 지금 개월수에서 어떤 흐름을 기대할 수 있는지 궁금할 때 참고하기 좋은 설명형 페이지입니다.",
    "성장은 평균값 하나로 판단하기보다 흐름을 함께 보는 것이 중요하기 때문에, 각 질문마다 보호자가 집에서 먼저 체크하면 좋은 포인트를 같이 정리했습니다.",
  ],
  behavior: [
    "아이 행동 Q&A는 단순한 훈육 팁보다 행동이 왜 반복되는지 이해하고, 집에서 어떻게 반응하면 갈등을 덜 키울 수 있는지에 초점을 맞춘 설명형 콘텐츠입니다.",
    "잠투정, 떼쓰기, 편식, 분리불안처럼 보호자가 매일 부딪히는 상황을 중심으로 묶어두어 비슷한 고민을 한 번에 이어서 살펴보기 쉽게 구성했습니다.",
  ],
};

export async function generateStaticParams() {
  return (Object.keys(qnaCategories) as QnaCategory[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in qnaCategories)) return {};
  const typed = category as QnaCategory;

  return {
    title: `${qnaCategories[typed]} Q&A | 설명형 육아 질문 모음 | MomTools`,
    description: `${qnaCategories[typed]}과 관련해 보호자가 집에서 먼저 확인할 포인트, 체크리스트, 상담이 필요한 신호를 설명형 콘텐츠로 정리한 육아 질문 모음입니다.`,
    alternates: { canonical: `https://momtools.kr/qna/${category}` },
    openGraph: {
      title: `${qnaCategories[typed]} Q&A | MomTools`,
      description: `${qnaCategories[typed]} 질문을 짧은 답변이 아닌 설명형 콘텐츠로 정리했습니다.`,
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
  const entries = getQnaEntries(typed);
  const featuredEntries = entries.slice(0, 6);

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{qnaCategories[typed]}</span>
          <h1 className="mt-title-xl mt-5">{qnaCategories[typed]} 설명형 Q&amp;A {entries.length}개</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{categoryDescriptions[typed]}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {categoryIntroBlocks[typed].map((paragraph) => (
              <div key={paragraph} className="rounded-3xl bg-slate-50 px-5 py-5 text-sm leading-8 text-slate-600">
                {paragraph}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이 카테고리 활용법</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {categoryGuideCards[typed].map((card) => (
              <div key={card.title} className="rounded-3xl bg-white px-5 py-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-800">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="mt-title-md">먼저 많이 찾는 질문</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">검색량이 높은 문장형 질문 위주로 먼저 배치해 빠르게 탐색할 수 있게 구성했습니다.</p>
            </div>
            <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
              총 {entries.length}개 질문
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredEntries.map((item) => (
              <Link key={item.slug} href={`/qna/${typed}/${item.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{item.topic}</div>
                <h3 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((item) => (
            <Link key={item.slug} href={`/qna/${typed}/${item.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{item.topic}</div>
              <h2 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">설명형 답변 보기</div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
