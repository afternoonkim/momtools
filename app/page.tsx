import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "MomTools",
  description: "육아 계산기, 아이 이름 짓기, 이유식 메뉴, 질문형 육아 정보, 체크리스트까지 한곳에서 보는 MomTools 홈입니다.",
  alternates: { canonical: "https://momtools.kr/" },
};

const sections = [
  {
    title: "육아 계산기",
    desc: "출산 예정일, 개월수, 예방접종, 이유식 시작, 성장 백분위까지 가장 자주 찾는 계산기를 한곳에 모았습니다.",
    href: "/tools",
  },
  {
    title: "아이 이름 짓기",
    desc: "이름 생성기, 연도별 인기 이름 순위, 한글 이름 뜻 모음을 분리해 간단하게 사용할 수 있습니다.",
    href: "/baby-names",
  },
  {
    title: "이유식 메뉴",
    desc: "초기, 중기, 후기 단계별로 20개씩 메뉴를 구성하고 분류와 검색까지 지원합니다.",
    href: "/baby-food",
  },
  {
    title: "육아 Q&A",
    desc: "아이 건강, 성장, 행동으로 나눈 질문형 정보 240개를 상세 페이지 구조로 제공합니다.",
    href: "/qna",
  },
  {
    title: "체크리스트",
    desc: "출산, 신생아, 이유식, 어린이집 준비를 실제 사용 흐름에 맞춰 정리했습니다.",
    href: "/checklists",
  },
  {
    title: "육아용품 목록",
    desc: "필수 육아용품 카드를 통해 준비물 탐색 흐름을 이어갈 수 있습니다.",
    href: "/items/essential",
  },
];

const quickLinks = [
  ["출산 예정일 계산기", "/tools/due-date"],
  ["2025 인기 이름 순위", "/baby-names/rankings/2025"],
  ["초기 이유식 20개", "/baby-food/early"],
  ["아이 건강 질문 80개", "/qna/health"],
];

export default function HomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-10">
        <section className="mt-card overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="mt-badge">MomTools · 네이버 중심 육아 정보 구조</span>
              <h1 className="mt-title-xl mt-5">계산기와 질문형 정보를
                <br />한 흐름으로 연결한 육아 도구 사이트</h1>
              <p className="mt-text-main mt-5 max-w-3xl">
                MomTools는 검색 유입이 많은 육아 질문형 정보와 실제 사용성이 높은 계산기, 이유식 메뉴,
                아이 이름 짓기, 체크리스트를 한 흐름으로 묶어 둔 사이트입니다. 각 페이지는 사이트 테마와
                통일감을 유지하면서도 애드센스 광고가 자연스럽게 들어갈 수 있도록 카드형 구조로 설계했습니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/tools" className="mt-button-primary">대표 메뉴 시작하기</Link>
                <Link href="/qna" className="mt-button-secondary">질문형 정보 보기</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {quickLinks.map(([label, href], index) => (
                <Link key={href} href={href} className="rounded-[24px] border border-amber-100 bg-white p-5 shadow-[0_12px_28px_rgba(245,158,11,0.08)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Quick {index + 1}</div>
                  <div className="mt-3 text-lg font-bold text-slate-800">{label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{section.desc}</p>
            </Link>
          ))}
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="홈 중단 광고 영역" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">운영 방향</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800">네이버 SEO 중심</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">질문형 상세 페이지, 단계별 이유식, 이름 뜻 페이지처럼 롱테일 검색 구조를 우선 반영했습니다.</p>
            </article>
            <article className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800">광고 친화적 레이아웃</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">상단 소개, 본문, 관련 링크 사이에 광고가 무리 없이 배치될 수 있도록 구성했습니다.</p>
            </article>
            <article className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800">내부링크 강화</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">계산기에서 체크리스트로, 질문에서 관련 질문으로 이어지는 내부링크를 강화했습니다.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
