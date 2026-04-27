import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | MomTools 소개",
  description:
    "MomTools는 임신, 신생아, 이유식, 유아 시기의 흐름을 부모가 쉽게 확인할 수 있도록 돕는 육아 계산기·정보·체크리스트 사이트입니다.",
};

const values = [
  {
    title: "복잡한 정보를 쉽게",
    description:
      "임신 주수, 아기 개월수, 이유식 시작 시기, 예방접종 흐름처럼 자주 찾게 되는 내용을 너무 어렵지 않게 정리하는 것을 목표로 합니다.",
  },
  {
    title: "실사용 중심 구성",
    description:
      "부모가 실제로 궁금해하는 질문, 계산기 활용 흐름, 준비 체크리스트, 빠르게 확인할 핵심 포인트를 중심으로 페이지를 구성합니다.",
  },
  {
    title: "최종 판단은 공식 기준 우선",
    description:
      "MomTools는 계획과 이해를 돕는 참고용 사이트입니다. 진단, 치료, 접종 일정, 성장 판단은 의료진과 공공기관 안내를 우선해야 합니다.",
  },
];

const principles = [
  "의학적 진단을 대신하지 않는 참고용 정보라는 점을 분명하게 안내합니다.",
  "부모가 빠르게 이해할 수 있는 문장과 읽기 쉬운 구성으로 정리합니다.",
  "계산기 결과만 보여주지 않고 해석에 도움이 되는 설명형 콘텐츠를 함께 제공합니다.",
  "정책 페이지와 문의 안내를 통해 참고 범위와 정보 처리 기준을 쉽게 확인할 수 있게 둡니다.",
  "오래된 안내로 보이지 않도록 핵심 페이지의 설명과 연결 구조를 정기적으로 확인합니다.",
];

const reviewStandards = [
  "건강, 예방접종, 성장과 직접 연결되는 주제는 계산 결과만으로 결론 내리지 않도록 주의 문구를 함께 제공합니다.",
  "부모가 실제로 다음에 무엇을 해야 하는지 알 수 있도록 계산기·정보·Q&A·체크리스트를 서로 연결합니다.",
  "외부 링크나 참고 자료가 있더라도 MomTools 안에서 먼저 핵심 흐름을 이해할 수 있게 자체 설명을 충분히 제공합니다.",
  "내용 오류나 표현 수정이 필요한 경우 문의 페이지를 통해 바로 전달할 수 있도록 안내합니다.",
];

export default function AboutPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">About MomTools</span>
          <h1 className="mt-title-lg mt-4">MomTools는 부모가 육아 흐름을 조금 더 쉽게 이해하도록 돕는 사이트입니다</h1>
          <p className="mt-text-main mt-4">
            MomTools는 임신부터 신생아, 이유식, 유아 시기까지 이어지는 주요 정보를 한곳에서
            정리해 볼 수 있도록 만든 육아 도구형 정보 사이트입니다. 출산 예정일, 아기 개월수,
            이유식 시작 시기, 성장 백분위처럼 자주 확인하는 내용을 계산기로 빠르게 살펴보고,
            이어서 관련 설명과 체크포인트까지 함께 읽을 수 있도록 구성하고 있습니다.
          </p>
          <p className="mt-text-sub mt-4">
            이 사이트의 목적은 부모가 정보를 더 빨리 찾고, 큰 흐름을 이해하고, 다음에 무엇을
            확인해야 하는지 감을 잡도록 돕는 것입니다. 다만 MomTools의 계산 결과와 안내 글은
            참고용이며, 개별 아이의 건강 상태에 대한 최종 판단은 의료진과 공식 기관 기준을
            우선해야 합니다.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="mt-card-soft p-6">
              <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">MomTools에서 볼 수 있는 것</h2>
          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              <strong className="text-slate-800">계산기 페이지</strong>에서는 출산 예정일, 아기
              개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위처럼 육아 과정에서 자주
              확인하는 항목을 빠르게 계산할 수 있습니다.
            </p>
            <p>
              <strong className="text-slate-800">Q&amp;A 페이지</strong>에서는 부모가 실제로 자주
              묻는 질문을 주제별로 정리해, 짧은 답만 보는 것이 아니라 왜 그런지 이해할 수 있는
              설명형 답변을 확인할 수 있습니다.
            </p>
            <p>
              <strong className="text-slate-800">정보 및 체크리스트 페이지</strong>에서는 임신,
              신생아, 이유식, 유아 시기의 핵심 흐름과 준비 항목을 보기 쉽게 정리해 필요한 내용을
              빠르게 파악할 수 있도록 돕습니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">안내 원칙</h2>
          <ul className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {principles.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">이용 전 알아두면 좋은 점</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-slate-800">MomTools가 잘 맞는 경우</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600">
                육아 정보를 처음 정리하는 부모, 중요한 주제를 빠르게 훑고 싶은 사용자, 병원 방문
                전에 기본 흐름을 이해하고 싶은 경우에 도움이 될 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-800">MomTools만으로 부족한 경우</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600">
                아이의 증상 판단, 약 복용 여부, 접종 가능 여부, 성장 이상 여부처럼 개별 건강 상태와
                직접 연결되는 문제는 반드시 의료기관과 공식 기관 자료를 함께 확인해야 합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">MomTools가 콘텐츠를 정리하는 기준</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            MomTools는 부모가 검색을 여러 번 반복하지 않아도 한 흐름 안에서 필요한 정보를 찾을 수 있게 구성하는 것을 중요하게 생각합니다.
            그래서 계산기만 보여주지 않고, 결과를 이해하는 설명과 다음에 이어서 볼 페이지를 함께 배치합니다.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {reviewStandards.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">운영자 정보</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            MomTools는 한 명의 개인 운영자가 직접 만들고 관리하는 사이트입니다. 콘텐츠 정확도, 표현 수정,
            기능 개선 요청은 아래 채널 또는 문의 페이지를 통해 직접 받고 반영합니다.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <a
              href="https://blog.naver.com/afterchan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Naver Blog</div>
              <div className="mt-2 font-semibold text-slate-800">blog.naver.com/afterchan</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">육아 관련 일상 글과 사이트 운영 노트를 함께 정리합니다.</p>
            </a>
            <a
              href="https://github.com/afternoonkim"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">GitHub</div>
              <div className="mt-2 font-semibold text-slate-800">github.com/afternoonkim</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">사이트의 기술적 변경 이력과 다른 프로젝트를 확인할 수 있어요.</p>
            </a>
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">관련 페이지 바로가기</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/tools"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">계산기 모아보기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">자주 쓰는 육아 계산기를 한곳에서 확인해 보세요.</div>
            </Link>
            <Link
              href="/qna"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">육아 Q&amp;A</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">부모가 자주 묻는 질문을 설명형 답변으로 확인할 수 있어요.</div>
            </Link>
            <Link
              href="/privacy"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">개인정보처리방침</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">개인정보 처리 기준과 참고 범위를 함께 확인해 보세요.</div>
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">오류 제보나 내용 수정 요청이 있다면 문의 페이지를 이용해 주세요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
