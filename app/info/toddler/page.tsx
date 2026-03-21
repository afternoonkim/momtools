import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import ToddlerInfoClient from "./ToddlerInfoClient";

export const metadata: Metadata = {
  title: "유아 정보 | 식사 수면 감정 놀이 어린이집 적응 가이드 | MomTools",
  description:
    "유아기 생활 루틴, 식사와 수면, 말과 감정, 놀이, 어린이집 적응까지 한눈에 정리해보세요. 초보 부모가 보기 쉽게 핵심 흐름을 담은 MomTools 유아 정보 페이지입니다.",
  keywords: [
    "유아 정보",
    "유아기 생활 루틴",
    "유아 식사",
    "유아 수면",
    "유아 감정 표현",
    "어린이집 적응",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/info/toddler",
  },
  openGraph: {
    title: "유아 정보 | 식사 수면 감정 놀이 어린이집 적응 가이드 | MomTools",
    description:
      "유아기 생활 루틴, 식사와 수면, 말과 감정, 놀이, 어린이집 적응까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/info/toddler",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "유아 정보 | MomTools",
    description:
      "유아기 생활 루틴과 감정, 놀이, 어린이집 적응 포인트를 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ToddlerPage() {
  return (
    <div className="space-y-8">
      <ToddlerInfoClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="유아 정보 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">유아기는 비교보다 흐름으로 보는 것이 중요해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              유아기는 말, 감정 표현, 식사 습관, 놀이 방식, 수면 루틴이 빠르게 변하는 시기입니다.
              그래서 다른 아이와 단순 비교하기보다 내 아이가 어떤 흐름으로 적응하고 있는지
              보는 시선이 훨씬 중요합니다.
            </p>
            <p>
              특히 부모 입장에서는 떼쓰기나 고집이 갑자기 심해진 것처럼 느껴질 수 있지만,
              실제로는 감정 표현과 조절 능력이 함께 자라는 과정일 수 있습니다.
              생활 루틴을 완벽하게 맞추려 하기보다 반복 가능한 기본 흐름을 만드는 것이 더 현실적입니다.
            </p>
            <p>
              어린이집 적응, 수면 문제, 발달 관련 걱정이 커질 때는 온라인 정보만 보기보다
              기관 선생님, 전문가, 필요 시 의료진과 함께 보는 것이 더 도움이 됩니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/checklists/daycare"
              title="어린이집 준비 체크리스트"
              description="등원 준비물과 적응 전 체크 포인트를 실제로 정리할 수 있어요."
            />
            <RelatedLink
              href="/items/essential"
              title="육아용품 목록"
              description="유아 생활용품과 외출용품 같은 실제 품목과 연결하기 좋아요."
            />
            <RelatedLink
              href="/content/blog"
              title="블로그 콘텐츠"
              description="유아기 생활 팁과 확장형 정보를 더 자세한 글로 이어서 볼 수 있어요."
            />
            <RelatedLink
              href="/faq"
              title="FAQ"
              description="MomTools 이용 기준과 참고 범위를 다시 확인할 수 있어요."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function RelatedLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
    >
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-500">{description}</div>
    </Link>
  );
}