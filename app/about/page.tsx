import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "사이트 소개 | MomTools",
  description:
    "MomTools는 계산, 기록, 건강·발달 확인, 육아 정보 탐색을 한곳에서 이어서 할 수 있도록 만든 부모용 육아 도구 사이트입니다.",
};

const directions = [
  {
    title: "필요한 것부터 빠르게",
    description: "아기 개월수, 예방접종, 이유식, 성장, 건강처럼 지금 궁금한 내용을 바로 찾을 수 있게 구성했습니다.",
  },
  {
    title: "확인한 뒤 다음 단계까지",
    description: "계산 결과만 보여주기보다 함께 보면 좋은 가이드, 체크리스트, 질문으로 자연스럽게 이어집니다.",
  },
  {
    title: "중요한 판단은 공식 기준과 함께",
    description: "건강, 약 복용, 예방접종, 지원정책처럼 중요한 내용은 의료진과 공식 기관 안내를 최종 기준으로 확인할 수 있게 안내합니다.",
  },
] as const;

const coreMenus = [
  { href: "/tools", label: "계산하고 확인하기", description: "개월수, 예방접종, 이유식, 성장도표, 출산 예정일처럼 기준이 필요한 내용을 확인해요." },
  { href: "/checklists", label: "준비하고 기록하기", description: "출산, 신생아, 이유식, 어린이집 준비를 빠뜨리지 않도록 체크해요." },
  { href: "/qna", label: "궁금한 상황 찾아보기", description: "아이 건강, 성장·발달, 행동·수면, 가족 건강 질문을 상황별로 확인해요." },
  { href: "/info", label: "육아 정보 이어보기", description: "임신, 신생아, 이유식, 유아기 생활과 지원정책 정보를 필요한 시기에 맞춰 살펴봐요." },
] as const;

const useCases = [
  "아기 개월수나 출산 예정일을 빠르게 확인하고 싶을 때",
  "열, 수면, 발달처럼 지금 궁금한 기준을 먼저 보고 싶을 때",
  "출산·이유식·어린이집 준비를 체크리스트로 정리하고 싶을 때",
  "지원정책이나 육아 정보를 공식 안내와 함께 확인하고 싶을 때",
] as const;

export default function AboutPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">MomTools 소개</span>
          <h1 className="mt-title-xl mt-4">아이를 키우는 모든 순간을 더 쉽게</h1>
          <p className="mt-text-main mt-3">
            필요한 육아 정보를 찾고, 계산하고, 기록하고, 다음에 확인할 내용까지 한곳에서 이어볼 수 있도록 만들었습니다.
          </p>
        </section>

        <section className="mt-app-stack" aria-label="MomTools 이용 원칙">
          {directions.map((item) => (
            <div key={item.title} className="mt-app-stack-section">
              <h2 className="mt-app-section-title">{item.title}</h2>
              <p className="mt-app-section-desc">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-app-stack" aria-label="MomTools에서 할 수 있는 일">
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">지금 필요한 메뉴로 바로 이동해 보세요</h2>
            <p className="mt-app-section-desc">궁금한 상황에 맞는 메뉴를 고르면 관련 정보까지 이어서 확인할 수 있어요.</p>
          </div>
          {coreMenus.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-3.5 transition hover:bg-amber-50/60 active:bg-amber-50">
              <span className="min-w-0">
                <strong className="block text-[13px] font-extrabold leading-5 text-slate-900">{item.label}</strong>
                <span className="mt-0.5 line-clamp-2 block text-[12.5px] leading-5 text-slate-500">{item.description}</span>
              </span>
              <span className="shrink-0 text-sm font-bold text-amber-700">→</span>
            </Link>
          ))}
        </section>

        <section className="mt-app-stack" aria-label="MomTools 활용 예시">
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">이럴 때 활용해 보세요</h2>
          </div>
          <ul className="mt-app-stack-section mt-app-list">
            {useCases.map((item) => (
              <li key={item} className="mt-app-list-item">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-mobile-note">
          <strong className="text-slate-900">참고해서 이용해 주세요</strong>
          <p className="mt-1">
            MomTools의 계산 결과와 안내 글은 정보를 정리하고 다음 행동을 정하는 데 도움을 주는 참고용입니다. 아이의 건강, 접종, 성장, 약 복용과 직접 연결되는 판단은 의료진과 공식 기관 안내를 우선해 주세요.
          </p>
        </section>

        <section className="mt-app-stack" aria-label="도움이 필요할 때">
          <Link href="/privacy" className="mt-app-link-item">
            <div className="mt-app-link-title">개인정보처리방침</div>
            <div className="mt-app-link-desc">어떤 정보를 어떻게 다루는지 확인해요.</div>
          </Link>
          <Link href="/terms" className="mt-app-link-item">
            <div className="mt-app-link-title">이용약관</div>
            <div className="mt-app-link-desc">서비스 이용 범위와 기준을 확인해요.</div>
          </Link>
          <Link href="/contact" className="mt-app-link-item">
            <div className="mt-app-link-title">문의하기</div>
            <div className="mt-app-link-desc">오류 제보나 내용 수정 요청을 보낼 수 있어요.</div>
          </Link>
        </section>
      </div>
    </div>
  );
}
