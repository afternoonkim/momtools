import type { Metadata } from "next";
import Link from "next/link";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "확인하기 | 아이 건강 성장 행동 가족건강 확인 | MomTools",
  description:
    "아이 건강, 성장 발달, 행동과 수면, 가족 건강, 달빛아동병원을 모바일에서 빠르게 확인할 수 있는 MomTools 확인하기 허브입니다.",
  alternates: { canonical: buildCanonical("/qna") },
  openGraph: {
    title: "확인하기 | MomTools",
    description: "아이와 가족의 상황, 야간·휴일 진료 정보를 빠르게 확인하는 MomTools 확인하기 허브입니다.",
    url: buildCanonical("/qna"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const checkMenus = [
  {
    href: "/qna/health",
    label: "아이 건강",
    description: "열, 기침, 콧물, 구토, 설사, 발진처럼 아플 때 먼저 볼 기준",
  },
  {
    href: "/qna/growth",
    label: "성장·발달",
    description: "뒤집기, 앉기, 걷기, 말, 키와 몸무게 흐름 확인",
  },
  {
    href: "/qna/behavior",
    label: "행동·수면",
    description: "잠투정, 편식, 떼쓰기, 분리불안, 어린이집 적응 고민",
  },
  {
    href: "/family-health-qna/family",
    label: "가족 건강 확인",
    description: "가족 감기, 장염, 약 복용, 검진 수치처럼 함께 확인할 건강 질문",
  },
  {
    href: "/moonlight-hospitals",
    label: "달빛아동병원",
    description: "야간·휴일 아이 진료가 필요할 때 지역별 병원과 전화번호 확인",
  },
] as const;

const quickLinks = [
  { href: "/health", label: "증상별 가이드", description: "증상별로 상담 신호와 기록할 점을 봐요." },
  { href: "/monthly-guide", label: "월령별 가이드", description: "개월수별 발달·수유·수면 흐름을 봐요." },
  { href: "/tools/baby-age", label: "개월수 먼저 계산", description: "월령 기준이 필요할 때 먼저 확인해요." },
] as const;

export const runtime = "nodejs";
export const revalidate = 3600;

export default async function QnaHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <section className="mt-page-hero">
          <span className="mt-badge">확인하기</span>
          <h1 className="mt-title-xl mt-4">지금 상황에 맞는 확인 메뉴를 고르세요</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            긴 글을 읽기 전에 아이 건강, 성장, 행동, 가족 건강 중 지금 가장 가까운 상황을 먼저 선택하세요.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-app-stack" aria-label="확인하기 메뉴">
          {checkMenus.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-3.5 first:border-t-0 transition hover:bg-amber-50/60 active:bg-amber-50">
              <span className="min-w-0">
                <strong className="block text-[13px] font-extrabold leading-5 text-slate-900">{item.label}</strong>
                <span className="mt-0.5 line-clamp-2 block text-[12.5px] leading-5 text-slate-500">{item.description}</span>
              </span>
              <span className="shrink-0 text-sm font-bold text-amber-700">→</span>
            </Link>
          ))}
        </section>

        <section className="mt-app-stack" aria-label="같이 쓰면 좋은 확인 도구">
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">함께 쓰면 더 빨라요</h2>
            <p className="mt-app-section-desc">월령과 증상 기준을 함께 보면 다음 행동을 정하기 쉽습니다.</p>
          </div>
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-3.5 transition hover:bg-amber-50/60 active:bg-amber-50">
              <span className="min-w-0">
                <strong className="block text-[13px] font-extrabold leading-5 text-slate-900">{item.label}</strong>
                <span className="mt-0.5 line-clamp-2 block text-[12.5px] leading-5 text-slate-500">{item.description}</span>
              </span>
              <span className="shrink-0 text-sm font-bold text-amber-700">→</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
