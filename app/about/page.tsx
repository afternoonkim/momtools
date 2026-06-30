import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "사이트 소개 | MomTools",
  description:
    "MomTools는 아이를 키우는 모든 순간을 더 쉽게 만들기 위해 계산하기, 기록하기, 확인하기, 참고하기 흐름으로 구성한 모바일 중심 육아 도구 사이트입니다.",
};

const directions = [
  {
    title: "모바일에서 앱처럼 빠르게",
    description: "복잡한 카드와 긴 설명을 줄이고, 부모가 바로 검색하고 확인할 수 있는 화면을 우선합니다.",
  },
  {
    title: "정보보다 다음 행동",
    description: "긴 글을 읽게 하기보다 먼저 볼 기준, 상담 신호, 기록할 점을 앞에 배치합니다.",
  },
  {
    title: "공식 기준을 우선",
    description: "진단, 치료, 약 복용, 접종 가능 여부는 의료진과 공공기관 안내를 우선하도록 안내합니다.",
  },
] as const;

const coreMenus = [
  { href: "/tools", label: "계산하기", description: "개월수, 예방접종, 이유식, 성장, 출산지원금처럼 기준이 필요한 항목" },
  { href: "/checklists", label: "기록하기", description: "출산, 신생아, 이유식, 어린이집 준비를 체크리스트로 정리" },
  { href: "/qna", label: "확인하기", description: "아이 건강, 성장, 행동, 가족 건강을 질문형으로 확인" },
  { href: "/info", label: "참고하기", description: "임신, 신생아, 이유식, 아이사랑, 가계 흐름 등 참고 정보" },
] as const;

const removedFeatures = [
  "아기 이름 생성·순위 기능",
  "색칠공부·미로·숨은그림 같은 놀이 콘텐츠",
  "육아용품을 별도 메뉴로 모아두는 카드 페이지",
] as const;

export default function AboutPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">MomTools 소개</span>
          <h1 className="mt-title-xl mt-4">아이를 키우는 모든 순간을 더 쉽게</h1>
          <p className="mt-text-main mt-3">
            MomTools는 육아 정보를 많이 보여주는 사이트보다, 부모가 모바일에서 바로 계산하고 확인하고 기록할 수 있는 육아 도구 사이트를 지향합니다.
          </p>
        </section>

        <section className="mt-app-stack" aria-label="MomTools 방향성">
          {directions.map((item) => (
            <div key={item.title} className="mt-app-stack-section">
              <h2 className="mt-app-section-title">{item.title}</h2>
              <p className="mt-app-section-desc">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-app-stack" aria-label="MomTools 핵심 구조">
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">MomTools의 핵심 구조</h2>
            <p className="mt-app-section-desc">사이트는 계산하기, 기록하기, 확인하기, 참고하기 네 흐름으로 단순하게 정리하고 있습니다.</p>
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

        <section className="mt-app-stack" aria-label="정리한 기능">
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">정리한 기능</h2>
            <p className="mt-app-section-desc">사이트가 복잡해지지 않도록 핵심 방향과 맞지 않는 기능은 메뉴에서 제외했습니다.</p>
          </div>
          <ul className="mt-app-stack-section mt-app-list">
            {removedFeatures.map((item) => (
              <li key={item} className="mt-app-list-item">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-mobile-note">
          <strong className="text-slate-900">참고 범위</strong>
          <p className="mt-1">
            MomTools의 계산 결과와 안내 글은 보호자가 정보를 정리하는 데 도움을 주는 참고용입니다. 아이의 건강, 접종, 성장, 약 복용과 직접 연결되는 판단은 의료진과 공식 기관 안내를 우선해 주세요.
          </p>
        </section>

        <section className="mt-app-stack" aria-label="주요 바로가기">
          <Link href="/privacy" className="mt-app-link-item">
            <div className="mt-app-link-title">개인정보처리방침</div>
            <div className="mt-app-link-desc">개인정보 처리 기준을 확인합니다.</div>
          </Link>
          <Link href="/terms" className="mt-app-link-item">
            <div className="mt-app-link-title">이용약관</div>
            <div className="mt-app-link-desc">서비스 이용 기준을 확인합니다.</div>
          </Link>
          <Link href="/contact" className="mt-app-link-item">
            <div className="mt-app-link-title">문의하기</div>
            <div className="mt-app-link-desc">오류 제보나 내용 수정 요청을 보냅니다.</div>
          </Link>
        </section>
      </div>
    </div>
  );
}
