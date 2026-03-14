import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import EssentialItemsClient from "./EssentialItemsClient";

export const metadata: Metadata = {
  title: "용품목록 | 육아용품 카테고리별 정리 | MomTools",
  description:
    "기저귀, 물티슈, 체온계, 카시트, 수유용품 등 육아용품을 카테고리별로 한눈에 보고 바로 이동할 수 있는 MomTools 용품목록 페이지입니다.",
  alternates: {
    canonical: "https://momtools.kr/items/essential",
  },
  openGraph: {
    title: "용품목록 | 육아용품 카테고리별 정리 | MomTools",
    description:
      "기저귀, 물티슈, 체온계, 카시트, 수유용품 등 육아용품을 카테고리별로 한눈에 보고 바로 이동할 수 있는 MomTools 용품목록 페이지입니다.",
    url: "https://momtools.kr/items/essential",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "용품목록 | MomTools",
    description:
      "육아용품을 카테고리별로 정리하고 바로 이동할 수 있는 용품목록 페이지입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EssentialItemsPage() {
  return (
    <div className="space-y-8">
      <EssentialItemsClient />

      <div className="mt-container-narrow space-y-8">
        <AdBlock label="육아용품 목록 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">육아 준비 가이드</span>

          <h2 className="mt-title-lg mt-4">
            출산 전 꼭 준비하면 좋은 육아 필수 준비물
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              아기를 맞이하기 위해서는 다양한 육아 준비물이 필요합니다. 특히 출산 전에는
              어떤 물품을 먼저 준비해야 할지 막막하게 느껴지는 경우가 많습니다. 기저귀,
              물티슈, 젖병처럼 반드시 필요한 물품도 있지만 실제로 육아를 시작해보면
              사용 빈도와 필요도는 가정 환경과 수유 방식에 따라 달라질 수 있습니다.
              그래서 출산 준비 단계에서는 처음부터 모든 제품을 한꺼번에 사기보다,
              신생아 시기부터 자주 쓰게 되는 육아 필수 준비물을 중심으로 먼저 정리하는
              방식이 훨씬 현실적입니다.
            </p>

            <p>
              대표적인 육아 필수 준비물로는 기저귀, 물티슈, 젖병, 젖병 세척용품,
              속싸개, 배냇저고리, 체온계, 수유 관련 용품, 아기 위생용품 등이 있습니다.
              이러한 품목은 출산 직후부터 바로 사용하게 되는 경우가 많기 때문에
              미리 준비해두면 육아 초반의 혼란을 줄이는 데 도움이 됩니다. 특히 기저귀와
              물티슈처럼 소모가 빠른 제품은 브랜드별 특징과 피부 적합성을 함께 고려해
              선택하는 것이 중요합니다.
            </p>

            <p>
              또한 아기 욕조, 아기용 세제, 보습제, 손수건, 가제수건 같은 제품도
              신생아 위생 관리에 자주 활용됩니다. 다만 모든 육아용품을 처음부터
              완벽하게 갖추는 것보다 실제 사용 빈도가 높은 제품부터 준비하고,
              육아를 하면서 필요한 품목을 추가해나가는 방식이 비용과 공간 부담을
              줄이는 데 더 유리할 수 있습니다.
            </p>

            <p>
              MomTools의 용품목록 페이지는 실제 육아 과정에서 자주 찾는 대표적인
              육아용품을 카테고리별로 정리해두어 필요한 준비물을 한눈에 확인할 수 있도록
              구성했습니다. 기저귀, 수유용품, 체온계, 카시트, 위생용품처럼 많이 찾는
              품목을 중심으로 비교해보면서 나에게 맞는 육아 환경을 준비해보세요.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            자주 준비하는 육아용품 카테고리
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CategoryLink
              href="/checklists/newborn-prep"
              title="신생아 준비 체크리스트"
              description="수유용품, 위생용품, 수면용품처럼 실제로 먼저 챙기게 되는 준비물을 함께 확인할 수 있어요."
            />
            <CategoryLink
              href="/checklists/weaning-prep"
              title="이유식 준비 체크리스트"
              description="이유식 스푼, 식기, 의자, 보관용기처럼 시기별로 필요한 품목을 이어서 점검할 수 있어요."
            />
            <CategoryLink
              href="/info/newborn"
              title="신생아 정보"
              description="용품만 보는 것이 아니라 수유, 수면, 체중 흐름까지 함께 이해하면 준비가 더 쉬워집니다."
            />
            <CategoryLink
              href="/faq"
              title="FAQ"
              description="제휴 링크, 이용 기준, 참고 범위처럼 용품 페이지 이용 전 알아두면 좋은 내용을 확인할 수 있어요."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function CategoryLink({
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