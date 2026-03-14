"use client";

import { usePathname } from "next/navigation";

const calculatorMap: Record<string, { title: string; description: string }> = {
  "/cal/due-date": {
    title: "출산 예정일 계산기",
    description: "마지막 생리 시작일 또는 임신 주수를 기준으로 출산 예정일과 현재 임신 주차를 간단히 확인할 수 있습니다.",
  },
  "/cal/baby-age": {
    title: "아기 개월수 계산기",
    description: "생년월일을 기준으로 현재 개월수, 일수, 다음 개월수 도달 시점을 빠르게 확인할 수 있습니다.",
  },
  "/cal/vaccine-schedule": {
    title: "예방접종 일정 계산기",
    description: "생년월일을 입력하면 초기 육아에서 자주 확인하는 접종 시점을 월령 기준으로 정리해줍니다.",
  },
  "/cal/weaning-start": {
    title: "이유식 시작 계산기",
    description: "생년월일과 출생 형태를 기준으로 이유식 시작 권장 시기와 준비 주간을 확인할 수 있습니다.",
  },
  "/cal/growth-percentile": {
    title: "성장 백분위 계산기",
    description: "월령, 성별, 키와 몸무게 입력값을 바탕으로 현재 위치를 대략적인 구간으로 살펴보는 참고용 계산기입니다.",
  },
};

export default function PageContextHero() {
  const pathname = usePathname();
  const content = calculatorMap[pathname];

  if (!content) return null;

  return (
    <section className="mt-card p-6 md:p-8">
      <div className="space-y-3">
        <span className="mt-badge">육아 계산기</span>
        <div>
          <h1 className="mt-title-lg">{content.title}</h1>
          <p className="mt-3 max-w-4xl mt-text-sub">{content.description}</p>
        </div>
      </div>
    </section>
  );
}
