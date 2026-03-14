import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import NewbornPrepChecklistClient from "./NewbornPrepChecklistClient";

export const metadata: Metadata = {
  title: "신생아 준비 체크리스트 | 수유 수면 위생 준비물 정리 | MomTools",
  description:
    "기저귀, 수유용품, 위생용품, 수면용품, 외출 준비물까지 한눈에 정리해보세요. MomTools 신생아 준비 체크리스트로 신생아 맞이 준비를 빠짐없이 정리할 수 있습니다.",
  keywords: [
    "신생아 준비 체크리스트",
    "신생아 준비물",
    "출산 후 준비물",
    "신생아 수유용품",
    "신생아 수면용품",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/newborn-prep",
  },
  openGraph: {
    title: "신생아 준비 체크리스트 | MomTools",
    description:
      "기저귀, 수유용품, 위생용품, 수면용품, 외출 준비물까지 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/newborn-prep",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "신생아 준비 체크리스트 | MomTools",
    description:
      "신생아 맞이 준비물을 카테고리별로 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewbornPrepPage() {
  return (
    <div className="space-y-8">
      <NewbornPrepChecklistClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="신생아 준비 체크리스트 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">신생아 준비는 많이 사는 것보다 동선 정리가 더 중요해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              신생아 준비물은 종류가 매우 많아 보이지만 실제로는 초반에 반복적으로 쓰는
              수유, 기저귀, 수면 관련 품목이 중심입니다. 그래서 품목 수를 늘리기보다
              자주 쓰는 물건이 손에 잘 닿도록 정리하는 것이 실제로 더 편합니다.
            </p>
            <p>
              집에 돌아온 직후에는 수유와 기저귀 교체, 잠자리 준비가 반복되기 때문에
              수유 공간과 교체 공간을 따로 정리해두면 체감 난이도가 크게 달라질 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/info/newborn"
              title="신생아 정보"
              description="수유, 수면, 체중, 예방접종 흐름까지 함께 이해하면 준비가 더 쉬워져요."
            />
            <RelatedLink
              href="/cal/baby-age"
              title="아기 개월수 계산기"
              description="출산 후 월령 기준으로 육아 흐름을 이어서 확인할 수 있어요."
            />
            <RelatedLink
              href="/cal/vaccine-schedule"
              title="예방접종 일정 계산기"
              description="출생 직후부터 주요 접종 시기를 월령 기준으로 참고할 수 있어요."
            />
            <RelatedLink
              href="/items/essential"
              title="육아용품 목록"
              description="체크리스트 품목을 실제 용품 카테고리와 연결해 보기 좋아요."
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