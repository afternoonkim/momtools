import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import BirthPrepChecklistClient from "./BirthPrepChecklistClient";

export const metadata: Metadata = {
  title: "출산 준비 체크리스트 | 입원 준비물과 출산 전 준비 정리 | MomTools",
  description:
    "산모 준비물, 아기 준비물, 보호자 준비물, 퇴원 전 체크까지 한눈에 정리해보세요. MomTools 출산 준비 체크리스트로 빠짐없이 준비할 수 있습니다.",
  keywords: [
    "출산 준비 체크리스트",
    "출산 준비물",
    "입원 준비물",
    "산모 준비물",
    "신생아 준비물",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/birth",
  },
  openGraph: {
    title: "출산 준비 체크리스트 | MomTools",
    description:
      "산모 준비물, 아기 준비물, 보호자 준비물, 퇴원 전 체크까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/birth",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "출산 준비 체크리스트 | MomTools",
    description:
      "입원 준비물과 출산 전 준비 항목을 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BirthPrepPage() {
  return (
    <div className="space-y-8">
      <BirthPrepChecklistClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="출산 준비 체크리스트 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">출산 준비는 항목별로 나눠 정리하면 훨씬 쉬워요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              출산 준비는 입원 가방만 챙기는 것이 아니라 산모 준비물, 아기 퇴원 준비물,
              보호자 역할, 집에서 바로 쓸 물건까지 함께 연결됩니다.
              그래서 병원용과 집에서 쓸 준비를 따로 나눠 보는 방식이 훨씬 실용적입니다.
            </p>
            <p>
              특히 임신 후기로 갈수록 몸 상태 때문에 한 번에 준비하기가 어려워질 수 있으므로
              중기부터 큰 항목부터 먼저 정리해두는 것이 좋습니다.
              준비를 미리 끝내두면 실제 출산 직전에 훨씬 덜 급해집니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/tools/due-date"
              title="출산 예정일 계산기"
              description="예정일과 임신 주수 흐름을 확인하고 준비 시점을 잡기 좋아요."
            />
            <RelatedLink
              href="/info/pregnancy"
              title="임신 정보"
              description="임신 후기 체크포인트와 출산 전 생활 흐름을 함께 정리할 수 있어요."
            />
            <RelatedLink
              href="/checklists/newborn"
              title="신생아 준비 체크리스트"
              description="출산 직후 집에서 바로 필요한 준비물을 이어서 점검해보세요."
            />
            <RelatedLink
              href="/items/essential"
              title="육아용품 목록"
              description="실제 구매가 필요한 품목은 용품 목록과 연결해 보기 좋습니다."
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