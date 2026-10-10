import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "육아 계산기 모음 | 출산 예정일 아기 개월수 접종 이유식 성장 | MomTools",
  description: "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장도표 확인을 한곳에서 이어서 볼 수 있는 MomTools 육아 도구 모음입니다.",
  alternates: { canonical: buildCanonical("/tools") },
};

const tools = [
  ["아기 개월수 계산기", "생년월일 기준 개월수, 일수, 100일·돌 날짜를 확인합니다.", "/tools/baby-age", "자주 사용"],
  ["예방접종 일정 계산기", "아이 생년월일 기준으로 접종 시기를 참고용으로 정리합니다.", "/tools/vaccine-schedule", "확인 필수"],
  ["이유식 시작 확인", "생후 6개월 전후의 시기와 준비 신호를 함께 확인합니다.", "/tools/weaning-start", "시기 확인"],
  ["성장도표 확인", "성별·월령·키·몸무게를 정리하고 공식 성장도표에서 성장 흐름을 확인합니다.", "/tools/growth-percentile", "공식 기준"],
  ["출산 예정일 계산기", "마지막 생리 시작일 또는 임신 주수로 예정일을 계산합니다.", "/tools/due-date", "임신"],
  ["출산지원금 확인", "지역과 출생 순위를 기준으로 공통 지원과 지역 지원을 함께 확인합니다.", "/tools/birth-support-calculator", "정책"],
] as const;

export default function ToolsHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">육아 도구</span>
          <h1 className="mt-title-xl mt-4">지금 필요한 것부터 바로 확인하세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            날짜를 계산하거나 기준을 확인할 때 필요한 도구를 모았습니다. 결과를 본 뒤에는 관련 Q&amp;A와 체크리스트로 이어서 확인할 수 있어요.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />
        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <section className="mt-simple-list" aria-label="육아 도구 목록">
          {tools.map(([title, description, href, tag]) => (
            <Link key={href} href={href} className="mt-simple-list-item flex items-center justify-between gap-3">
              <span className="min-w-0">
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-700">{tag}</span>
                <strong className="mt-2 block text-base font-extrabold text-slate-900">{title}</strong>
                <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-500">{description}</span>
              </span>
              <span className="shrink-0 text-amber-700">→</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
