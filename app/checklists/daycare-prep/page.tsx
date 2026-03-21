import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import DaycarePrepChecklistClient from "./DaycarePrepChecklistClient";

export const metadata: Metadata = {
  title: "어린이집 준비 체크리스트 | 등원 준비물과 적응 준비 정리 | MomTools",
  description:
    "여벌옷, 낮잠 이불, 이름 스티커, 개인 위생용품, 비상연락처, 등원 루틴까지 한눈에 정리해보세요. MomTools 어린이집 준비 체크리스트로 첫 등원 준비를 빠짐없이 정리할 수 있습니다.",
  keywords: [
    "어린이집 준비 체크리스트",
    "어린이집 준비물",
    "첫 등원 준비",
    "어린이집 여벌옷",
    "어린이집 낮잠이불",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/daycare",
  },
  openGraph: {
    title: "어린이집 준비 체크리스트 | MomTools",
    description:
      "여벌옷, 낮잠 이불, 이름 스티커, 개인 위생용품, 비상연락처, 등원 루틴까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/daycare",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "어린이집 준비 체크리스트 | MomTools",
    description:
      "첫 등원 전에 필요한 준비물을 카테고리별로 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DaycarePrepPage() {
  return (
    <div className="space-y-8">
      <DaycarePrepChecklistClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="어린이집 준비 체크리스트 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">어린이집 준비는 물건보다 루틴 정리가 더 중요할 수 있어요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              어린이집 준비는 여벌 옷이나 이름표 같은 물건 준비도 중요하지만,
              아침 등원 흐름, 하원 후 쉬는 루틴, 전달사항 정리처럼 생활 패턴까지 함께 생각해야
              실제 적응이 훨씬 부드러워질 수 있습니다.
            </p>
            <p>
              또 어린이집마다 준비물 기준과 운영 방식이 다르기 때문에 공통 준비물과
              원별 지정 준비물을 따로 구분해 정리하는 것이 좋습니다.
              이렇게 나누어 보면 빠뜨리는 항목이 훨씬 줄어듭니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/info/toddler"
              title="유아 정보"
              description="생활 습관, 감정 표현, 놀이, 적응 흐름을 함께 보면 더 도움이 됩니다."
            />
            <RelatedLink
              href="/items/essential"
              title="육아용품 목록"
              description="등원 준비물과 생활용품 카테고리를 연결해 보기 좋습니다."
            />
            <RelatedLink
              href="/content/blog"
              title="블로그 콘텐츠"
              description="어린이집 적응 팁 같은 확장형 글 콘텐츠와 연결하기 좋아요."
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