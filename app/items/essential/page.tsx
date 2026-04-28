import type { Metadata } from "next";
import Link from "next/link";
import EssentialItemsClient from "./EssentialItemsClient";
import { babyProductQnaItems, COUPANG_PARTNERS_DISCLOSURE } from "@/data/babyProductQna";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "육아용품 Q&A | 유모차·젖병·이유식·목욕용품 구매 전 체크 | MomTools",
  description:
    "유모차, 젖병, 이유식용품, 목욕용품, 장난감처럼 구매 전 많이 묻는 육아용품 질문을 사용자 관점으로 정리한 Q&A 목록입니다.",
  keywords: [
    "육아용품 Q&A",
    "유모차 추천",
    "젖병 추천",
    "이유식용품",
    "아기비데",
    "휴대용 유모차",
    "절충형 유모차",
    "신생아 유모차",
    "육아용품 구매 전 체크",
  ],
  alternates: {
    canonical: buildCanonical("/items/essential"),
  },
  openGraph: {
    title: "육아용품 Q&A | 유모차·젖병·이유식·목욕용품 구매 전 체크 | MomTools",
    description:
      "육아용품을 바로 구매하기 전에 우리 집 상황에 맞는지 질문형으로 먼저 확인해 보세요.",
    url: buildCanonical("/items/essential"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "육아용품 Q&A | MomTools",
    description: "유모차, 젖병, 이유식용품, 목욕용품을 구매하기 전 확인하면 좋은 기준을 질문형으로 정리했습니다.",
  },
  robots: {
    // AdSense 심사 동안 일시 색인 차단 (쿠팡 파트너스 affiliate 콘텐츠)
    index: false,
    follow: true,
  },
};

export default function EssentialItemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${buildCanonical("/items/essential")}#collection`,
        name: "육아용품 Q&A",
        description: "육아용품 구매 전 부모가 자주 묻는 질문을 기준으로 정리한 Q&A 목록입니다.",
        inLanguage: "ko-KR",
        datePublished: SITE_DATES.published,
        dateModified: SITE_DATES.updated,
        mainEntity: babyProductQnaItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          url: buildCanonical(`/items/essential/${item.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${buildCanonical("/items/essential")}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: buildCanonical("/") },
          { "@type": "ListItem", position: 2, name: "육아용품", item: buildCanonical("/items/essential") },
        ],
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EssentialItemsClient />

      <div className="mt-container-narrow space-y-8">
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">구성 방식</div>
          <h2 className="mt-title-lg mt-3">육아용품은 제품 설명보다 질문형으로 보는 것이 더 편합니다</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              유모차, 젖병, 이유식용품, 목욕용품처럼 가격대가 있거나 매일 쓰는 육아용품은 “좋은 제품인가요?”보다
              “우리 집 상황에 맞나요?”가 더 중요합니다. 그래서 MomTools의 육아용품 메뉴는 제품을 바로 나열하기보다
              부모가 실제로 검색하는 질문을 먼저 보여주고, 그 안에서 선택 기준과 상품 정보를 함께 확인할 수 있도록 구성했습니다.
            </p>
            <p>
              예를 들어 유모차는 가볍다는 점만 보면 좋아 보이고, 젖병이나 이유식용품은 구성만 보면 충분해 보일 수 있습니다. 하지만 아이 월령, 소재, 세척 편의성,
              보관 방식, 외출 동선에 따라 만족도가 달라질 수 있습니다. 질문형 페이지에서는 이런 기준을 먼저 확인한 뒤
              필요할 때 상품 정보와 후기를 보러 이동할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">구매 전 체크</span>
          <h2 className="mt-title-lg mt-4">육아용품을 볼 때 먼저 나눠보면 좋은 기준</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-amber-50 p-5">
              <div className="font-bold text-slate-900">사용 시기</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">신생아부터 쓸지, 돌 전후부터 쓸지에 따라 필요한 안정감과 기능이 달라집니다.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-900">생활 동선</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">차 이동, 외출, 수유, 이유식, 목욕처럼 어느 상황에서 자주 쓸지 먼저 보면 선택이 쉬워집니다.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="font-bold text-slate-900">추가 비용</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">본품 가격뿐 아니라 리필 부품, 세척 도구, 보관용기, 추가 구성품도 함께 확인하는 것이 좋습니다.</p>
            </div>
          </div>
          <div className="mt-5 rounded-3xl border border-orange-100 bg-orange-50 p-4 text-sm leading-7 text-slate-700">
            {COUPANG_PARTNERS_DISCLOSURE} 구매 전에는 가격, 구성, 배송, 교환·반품 조건을 판매처 페이지에서 다시 확인해 주세요.
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            함께 보면 좋은 페이지
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CategoryLink
              href="/checklists/newborn"
              title="신생아 준비 체크리스트"
              description="유모차, 수유용품, 위생용품, 수면용품처럼 출산 직후 필요한 준비물을 함께 확인할 수 있어요."
            />
            <CategoryLink
              href="/info/newborn"
              title="신생아 정보"
              description="신생아 시기 수유, 수면, 체온, 외출 기준을 이해하면 용품 선택도 더 쉬워집니다."
            />
            <CategoryLink
              href="/qna/health"
              title="아이 건강 Q&A"
              description="외출 전후 열, 기침, 피부 상태처럼 부모가 자주 궁금해하는 건강 질문을 함께 볼 수 있어요."
            />
            <CategoryLink
              href="/family-health-qna/family"
              title="가족 생활 건강"
              description="가족이 함께 쓰는 위생용품이나 외출 준비를 볼 때 같이 참고하기 좋은 질문을 모았습니다."
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
