import type { Metadata } from "next";
import Link from "next/link";
import { qnaCategories, qnaData } from "@/data/qna";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "육아 Q&A | 아이 건강 성장 행동 질문형 정보",
  description: "아이 건강, 아이 성장, 아이 행동으로 나눈 질문형 육아 정보 페이지입니다. 보호자가 먼저 확인할 포인트를 중심으로 정리한 일반 참고용 육아 정보입니다.",
  alternates: { canonical: "https://momtools.kr/qna" },
};

const categoryDescriptions = {
  health: "열, 기침, 콧물, 발진, 변 상태처럼 병원에 가기 전 가장 먼저 확인하고 싶은 건강 질문을 모았습니다.",
  growth: "뒤집기, 앉기, 걷기, 말, 키와 몸무게처럼 발달 흐름이 궁금할 때 먼저 볼 질문을 정리했습니다.",
  behavior: "잠투정, 편식, 떼쓰기, 분리불안, 예민함처럼 일상에서 바로 부딪히는 행동 고민을 정리했습니다.",
} as const;

export default function QnaHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">질문형 육아 정보</span>
          <h1 className="mt-title-xl mt-5">아이 건강, 성장, 행동 질문을 사용자 중심으로 다시 정리했습니다</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            MomTools 육아 Q&amp;A는 네이버에서 실제로 자주 검색하는 질문 문장에 맞춰 구성했습니다.
            답변은 병명을 단정하기보다 지금 집에서 무엇을 먼저 보고, 어떤 기록을 남기고, 언제 상담을 고려하면 좋은지
            보호자 관점으로 정리했습니다.
          </p>
        </section>

        

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 알아둘 점</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            육아 Q&amp;A는 보호자가 집에서 먼저 확인할 포인트를 정리한 일반 참고용 정보입니다. 특히 건강 카테고리는 질병관리청 국가건강정보포털처럼 공공 건강정보에서 공통적으로 안내하는 원칙에 맞춰 보수적으로 정리했고, 아이 상태가 평소와 많이 다르거나 보호자가 불안할 정도라면 온라인 정보보다 진료 상담이 우선입니다.
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

        <AdBlock placement="contentInline" format="horizontal" label="육아 Q&A 허브 광고 영역" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이 페이지 활용법</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white px-5 py-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-800">1. 질문 그대로 찾기</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">네이버에서 검색하듯 질문 문장 그대로 찾을 수 있게 제목을 구성했습니다.</p>
            </div>
            <div className="rounded-3xl bg-white px-5 py-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-800">2. 집에서 먼저 볼 포인트 확인</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">모든 상세 페이지에 보호자가 바로 확인할 체크 포인트를 넣었습니다.</p>
            </div>
            <div className="rounded-3xl bg-white px-5 py-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-800">3. 관련 질문으로 이어보기</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">비슷한 상황의 질문을 내부링크로 이어 체류시간과 탐색 편의성을 높였습니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
