import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "육아 계산기 모음",
  description: "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위를 한곳에서 확인하는 MomTools 육아 계산기 모음입니다.",
  alternates: { canonical: "https://momtools.kr/tools" },
};

const tools = [
  ["출산 예정일 계산기", "임신 주수와 예정일 흐름을 빠르게 확인합니다.", "/tools/due-date"],
  ["아기 개월수 계산기", "생년월일 기준 개월수와 일수를 계산합니다.", "/tools/baby-age"],
  ["예방접종 일정 계산기", "월령 기준 접종 시기를 참고용으로 봅니다.", "/tools/vaccine-schedule"],
  ["이유식 시작 계산기", "이유식 시작 시기와 준비 주간을 확인합니다.", "/tools/weaning-start"],
  ["성장 백분위 계산기", "키와 몸무게로 현재 성장 위치를 살펴봅니다.", "/tools/growth-percentile"],
] as const;

export default function ToolsHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">육아 계산기</span>
          <h1 className="mt-title-xl mt-5">지금 필요한 계산부터 바로 시작할 수 있게 정리했습니다</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            MomTools 계산기 메뉴는 초보 부모가 가장 자주 찾는 계산형 기능만 따로 모아둔 공간입니다.
            네이버 검색에서 바로 들어와도 헷갈리지 않도록 이름과 기능을 단순하게 구성했고, 각 계산기
            페이지 안에는 관련 정보 페이지와 체크리스트 링크도 함께 배치했습니다.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tools.map(([title, description, href]) => (
            <Link key={href} href={href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Tool</div>
              <h2 className="mt-3 text-xl font-bold text-slate-800">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
            </Link>
          ))}
        </section>

        <AdBlock placement="contentInline" label="육아 계산기 허브 광고 영역" format="horizontal" />
      </div>
    </div>
  );
}
