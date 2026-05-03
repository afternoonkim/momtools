import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import { PARTNER_SITES, getPartnerLinkProps } from "@/lib/partner-sites";

export const metadata: Metadata = {
  title: "육아 계산기 모음 | 출산 예정일 아기 개월수 접종 이유식 성장 | MomTools",
  description: "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위를 한곳에서 확인하는 MomTools 육아 계산기 허브입니다.",
  alternates: { canonical: buildCanonical("/tools") },
};

const tools = [
  ["출산 예정일 계산기", "임신 주수와 예정일 흐름을 빠르게 확인합니다.", "/tools/due-date"],
  ["아기 개월수 계산기", "생년월일 기준 개월수와 일수를 계산합니다.", "/tools/baby-age"],
  ["예방접종 일정 계산기", "월령 기준 접종 시기를 참고용으로 봅니다.", "/tools/vaccine-schedule"],
  ["이유식 시작 계산기", "이유식 시작 시기와 준비 주간을 확인합니다.", "/tools/weaning-start"],
  ["성장 백분위 계산기", "키와 몸무게로 현재 성장 위치를 살펴봅니다.", "/tools/growth-percentile"],
  ["출산지원금 계산기", "사는 지역과 출생 순위로 전국 공통 지원금과 지자체 지원금을 함께 계산합니다.", "/tools/birth-support-calculator"],
] as const;

const trustNotes = [
  "계산 결과는 집에서 먼저 흐름을 정리해 보기 위한 참고용으로 활용해 주세요.",
  "아이 상태가 평소와 다르거나 수치 해석이 헷갈린다면 병원 상담을 먼저 받는 게 좋아요.",
  "계산기 페이지 아래에서 결과 해석, 활용 팁, 관련 Q&A까지 한 번에 이어 볼 수 있어요.",
];

export default function ToolsHubPage() {
  const megaProps = getPartnerLinkProps(PARTNER_SITES.megaCalculators, "ko");
  const bluedinoProps = getPartnerLinkProps(PARTNER_SITES.bluedino, "ko");

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">육아 계산기</span>
          <h1 className="mt-title-xl mt-5">지금 필요한 계산부터 바로 시작해 보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            처음 부모가 가장 자주 찾는 계산기를 한곳에 모아 두었어요.
            한 번 계산하고 끝나는 게 아니라, 결과를 본 뒤 이어서 보면 좋은 정보와 체크리스트까지
            바로 연결돼 있어 준비 흐름을 자연스럽게 이어갈 수 있어요.
          </p>
        </section>

        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map(([title, description, href]) => (
            <Link key={href} href={href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Calculator</div>
              <h2 className="mt-3 text-xl font-bold text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              <div className="mt-5 text-sm font-semibold text-slate-800">바로 계산하기 →</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">계산기를 볼 때 먼저 알아둘 점</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {trustNotes.map((note) => (
                  <li key={note} className="rounded-2xl bg-white px-4 py-3 shadow-sm">{note}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">계산 뒤에 이어서 보기 좋은 메뉴</h2>
              <div className="mt-4 grid gap-3 text-sm">
                <Link href="/info" className="mt-list-card">
                  <div className="font-semibold text-slate-800">육아 정보 허브</div>
                  <div className="mt-2 text-slate-500">임신, 신생아, 이유식, 유아 시기별로 연결되는 정보를 함께 볼 수 있어요.</div>
                </Link>
                <Link href="/qna" className="mt-list-card">
                  <div className="font-semibold text-slate-800">육아 Q&A</div>
                  <div className="mt-2 text-slate-500">건강, 성장, 행동 질문을 설명형 답변으로 바로 이어서 확인할 수 있습니다.</div>
                </Link>
                <Link href="/checklists" className="mt-list-card">
                  <div className="font-semibold text-slate-800">체크리스트</div>
                  <div className="mt-2 text-slate-500">시기별 준비물과 해야 할 일을 한 번 더 정리할 수 있어요.</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 운영하는 사이트</div>
          <h2 className="mt-title-md mt-3">MomTools 외 더 많은 계산기와 가계 가이드</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            육아 계산 외에도 일상에서 자주 필요한 계산기와 가계 운용 가이드를 같은 운영자가 따로 운영하고 있어요.
            육아 흐름과 함께 보면 좋아 자매 사이트로 자연스럽게 이어 두었어요.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <a
              {...megaProps}
              className="group rounded-3xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">Mega Calculators</div>
              <div className="mt-2 text-base font-bold text-slate-900">{PARTNER_SITES.megaCalculators.copy.ko.label}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{PARTNER_SITES.megaCalculators.copy.ko.blurb}</p>
              <div className="mt-3 text-xs font-semibold text-sky-700">
                {PARTNER_SITES.megaCalculators.copy.ko.cta} ↗
              </div>
            </a>
            <a
              {...bluedinoProps}
              className="group rounded-3xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">BlueDino</div>
              <div className="mt-2 text-base font-bold text-slate-900">{PARTNER_SITES.bluedino.copy.ko.label}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{PARTNER_SITES.bluedino.copy.ko.blurb}</p>
              <div className="mt-3 text-xs font-semibold text-sky-700">
                {PARTNER_SITES.bluedino.copy.ko.cta} ↗
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
