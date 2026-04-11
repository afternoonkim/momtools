"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Package2,
  ShoppingBag,
  Info,
  ImageIcon,
} from "lucide-react";

type ShopType = "coupang" | "naver";

type ItemCategory =
  | "기저귀"
  | "물티슈"
  | "수유용품"
  | "위생용품"
  | "목욕용품"
  | "수면용품"
  | "외출용품"
  | "안전용품";

type ProductItem = {
  id: string;
  keyword: ItemCategory;
  name: string;
  summary: string;
  shopName: string;
  shopType: ShopType;
  url: string;
  imageUrl?: string;
  tags: string[];
};

const productItems: ProductItem[] = [
  // {
  //   id: "diaper-1",
  //   keyword: "기저귀",
  //   name: "신생아 밴드형 기저귀",
  //   summary: "신생아 시기부터 가장 자주 쓰는 기본 소모품이에요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["신생아", "소모품", "자주 사용"],
  // },
  // {
  //   id: "diaper-2",
  //   keyword: "기저귀",
  //   name: "야간용 대용량 기저귀",
  //   summary: "밤 시간 사용량이 많아질 때 같이 비교해보기 좋아요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["야간", "대용량", "비교용"],
  // },
  // {
  //   id: "wipes-1",
  //   keyword: "물티슈",
  //   name: "엠보싱 물티슈",
  //   summary: "기저귀 교체, 손 닦기, 외출 시 모두 자주 쓰게 돼요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["엠보싱", "외출", "기본템"],
  // },
  // {
  //   id: "wipes-2",
  //   keyword: "물티슈",
  //   name: "휴대용 물티슈",
  //   summary: "가방에 넣어두고 외출할 때 쓰기 좋아요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["휴대용", "외출", "소형"],
  // },
  // {
  //   id: "feeding-1",
  //   keyword: "수유용품",
  //   name: "젖병 세트",
  //   summary: "수유 방식에 따라 기본 구성을 비교해보기 좋아요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["젖병", "수유", "기본구성"],
  // },
  // {
  //   id: "feeding-2",
  //   keyword: "수유용품",
  //   name: "분유포트",
  //   summary: "분유 수유를 계획한다면 편의성이 높은 품목이에요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["분유", "가전", "편의성"],
  // },
  // {
  //   id: "hygiene-1",
  //   keyword: "위생용품",
  //   name: "비접촉 체온계",
  //   summary: "육아 초반 체온 확인용으로 자주 찾는 품목이에요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["체온계", "건강", "필수"],
  // },
  // {
  //   id: "hygiene-2",
  //   keyword: "위생용품",
  //   name: "아기 손톱깎이 세트",
  //   summary: "작지만 자주 필요한 기본 위생용품이에요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["손톱", "위생", "소형"],
  // },
  // {
  //   id: "bath-1",
  //   keyword: "목욕용품",
  //   name: "아기 욕조",
  //   summary: "목욕 동선을 편하게 잡는 데 도움이 되는 기본 품목이에요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["욕조", "목욕", "기본템"],
  // },
  // {
  //   id: "bath-2",
  //   keyword: "목욕용품",
  //   name: "거즈 목욕 타월",
  //   summary: "신생아 목욕 후 자주 쓰는 부드러운 기본 아이템이에요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["타월", "거즈", "목욕"],
  // },
  // {
  //   id: "sleep-1",
  //   keyword: "수면용품",
  //   name: "수면조끼",
  //   summary: "계절에 따라 잠잘 때 자주 비교하게 되는 품목이에요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["수면", "계절", "의류"],
  // },
  // {
  //   id: "sleep-2",
  //   keyword: "수면용품",
  //   name: "아기 침대 매트",
  //   summary: "수면 환경을 정리할 때 같이 보게 되는 품목이에요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["침대", "수면", "환경"],
  // },
  // {
  //   id: "outing-1",
  //   keyword: "외출용품",
  //   name: "유모차",
  //   summary: "외출 빈도와 이동 환경에 따라 비교가 필요한 대표 품목이에요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["유모차", "외출", "이동"],
  // },
  // {
  //   id: "outing-2",
  //   keyword: "외출용품",
  //   name: "기저귀 가방",
  //   summary: "외출 시 자주 쓰는 물건을 한 번에 담기 좋아요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["가방", "외출", "수납"],
  // },
  // {
  //   id: "safety-1",
  //   keyword: "안전용품",
  //   name: "카시트",
  //   summary: "차 이동이 있다면 미리 준비해야 하는 대표 안전용품이에요.",
  //   shopName: "쿠팡파트너스",
  //   shopType: "coupang",
  //   url: "https://www.coupang.com/",
  //   imageUrl: "",
  //   tags: ["카시트", "차량", "안전"],
  // },
  // {
  //   id: "safety-2",
  //   keyword: "안전용품",
  //   name: "코너 보호대",
  //   summary: "집 안 활동 반경이 넓어질 때 같이 보게 되는 안전용품이에요.",
  //   shopName: "네이버쇼핑",
  //   shopType: "naver",
  //   url: "https://shopping.naver.com/",
  //   imageUrl: "",
  //   tags: ["보호대", "집안", "안전"],
  // },
];

const keywords: Array<"전체" | ItemCategory> = [
  "전체",
  "기저귀",
  "물티슈",
  "수유용품",
  "위생용품",
  "목욕용품",
  "수면용품",
  "외출용품",
  "안전용품",
];

function shopBadgeClass(shopType: ShopType) {
  return shopType === "coupang"
    ? "bg-orange-50 text-orange-700 border-orange-100"
    : "bg-green-50 text-green-700 border-green-100";
}

function ProductThumbnail({
  imageUrl,
  name,
  keyword,
}: {
  imageUrl?: string;
  name: string;
  keyword: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (!imageUrl || hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-amber-50 via-white to-sky-50 text-slate-400">
        <ImageIcon size={28} />
        <span className="text-sm font-medium">{keyword}</span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={name}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="h-full w-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export default function EssentialItemsClient() {
  const [selectedKeyword, setSelectedKeyword] = useState<"전체" | ItemCategory>("전체");

  const filteredItems = useMemo(() => {
    if (selectedKeyword === "전체") return productItems;
    return productItems.filter((item) => item.keyword === selectedKeyword);
  }, [selectedKeyword]);

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                육아용품
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                용품목록
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                기저귀, 물티슈, 수유용품, 외출용품처럼 자주 찾는 육아용품을
                카테고리별로 정리해두었어요. <br/>
                키워드를 누르면 해당 품목만 볼 수 있고,
                품목 카드를 누르면 연결된 외부 상품 페이지로 이동해 자세한 정보를 확인할 수 있습니다.
              </p>
            </div>

            {/* <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 md:max-w-sm">
              <div className="font-semibold text-slate-900">활용 방식</div>
              <p className="mt-2">
                지금은 쿠팡파트너스나 네이버쇼핑커넥트 링크를 넣을 수 있게 구조를
                만들어둔 상태예요. 나중에는 실제 외부 링크와 상품 이미지 URL만
                필요한 상품 링크나 이미지로 자연스럽게 교체해 사용할 수 있습니다.
              </p>
            </div> */}
          </div>
        </header>

        <section className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 shrink-0 text-amber-700" size={18} />
            <div>
              <h2 className="text-base font-bold text-slate-900">외부 링크 안내</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                이 페이지의 일부 품목 카드는 외부 쇼핑 페이지로 연결될 수 있습니다. 구매 전에는 가격, 구성, 배송, 환불 조건을 판매처 페이지에서 다시 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-card-soft p-5 md:p-6">
          <div className="flex items-center gap-2 text-slate-800">
            <Package2 size={18} />
            <h2 className="text-lg font-bold">카테고리 선택</h2>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {keywords.map((keyword) => {
              const isActive = selectedKeyword === keyword;

              return (
                <button
                  key={keyword}
                  type="button"
                  onClick={() => setSelectedKeyword(keyword)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "border-amber-200 bg-amber-100 text-amber-800"
                      : "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700",
                  ].join(" ")}
                >
                  {keyword}
                </button>
              );
            })}
          </div>
        </section>

        <div className="mt-card p-5 md:p-6">
          <div className="text-sm font-bold text-slate-900">용품 고를 때 이렇게 시작해 보세요</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            필요한 카테고리부터 좁혀 보면 한 번에 너무 많은 품목을 보지 않아도 됩니다. 먼저 꼭 필요한 기본 품목을 보고,
            예산이나 사용 빈도에 따라 나중에 추가할 품목을 나누어 생각해 보세요.
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">품목 목록</h2>
              <p className="mt-1 text-sm text-slate-500">
                {selectedKeyword === "전체"
                  ? `전체 ${filteredItems.length}개 품목`
                  : `${selectedKeyword} ${filteredItems.length}개 품목`}
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer sponsored"
                className="mt-card overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <ProductThumbnail
                    imageUrl={item.imageUrl}
                    name={item.name}
                    keyword={item.keyword}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {item.keyword}
                      </div>
                      <h3 className="mt-3 text-xl font-bold leading-[1.35] text-slate-900">
                        {item.name}
                      </h3>
                    </div>

                    <ExternalLink className="shrink-0 text-slate-400" size={18} />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <ShoppingBag size={16} />
                      <span>{item.shopName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
                        외부 링크
                      </span>
                      <span
                        className={[
                          "rounded-full border px-3 py-1 text-xs font-semibold",
                          shopBadgeClass(item.shopType),
                        ].join(" ")}
                      >
                        바로가기
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="mt-card-soft p-8 text-center text-slate-500">
              선택한 조건에 맞는 품목이 아직 없습니다. 다른 카테고리를 선택하거나 전체 보기로 돌아가면 다시 확인할 수 있어요.
            </div>
          ) : null}
        </section>

        <div className="mt-card p-5 md:p-6">
          <div className="text-sm font-bold text-slate-900">비교할 때 체크하면 좋은 점</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            같은 카테고리라도 크기, 재질, 세척 편의, 보관 공간, 아이 피부 상태에 따라 만족도가 달라질 수 있어요.
            제품명만 보기보다 우리 집 생활 방식에 맞는지 함께 확인해 보세요.
          </p>
        </div>

        <section className="mt-card p-6 md:p-8">
          {/* <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"> */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  용품목록은 이렇게 보면 더 편해요
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    육아용품은 한 번에 전부 고르려 하면 오히려 선택이 더 어려워질 수 있어요.
                    그래서 이 페이지는 기저귀, 물티슈, 수유용품, 외출용품처럼
                    카테고리별로 먼저 나눈 뒤 필요한 품목만 빠르게 볼 수 있게 구성했습니다.
                  </p>
                  <p>
                    기본은 전체 보기로 두고, 필요할 때 키워드를 눌러 원하는 품목만 골라볼 수 있어요.
                    나중에는 쿠팡파트너스나 네이버쇼핑커넥트 링크를 실제 외부 링크로 교체하고,
                    썸네일 이미지와 외부 링크를 함께 확인할 수 있도록 보기 쉽게 정리했습니다.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  함께 보면 좋은 페이지
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/checklists/newborn"
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                  >
                    신생아 준비 체크리스트
                  </Link>
                  <Link
                    href="/checklists/weaning"
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                  >
                    이유식 준비 체크리스트
                  </Link>
                  <Link
                    href="/info/newborn"
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                  >
                    신생아 정보
                  </Link>
                  <Link
                    href="/info/toddler"
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                  >
                    유아 정보
                  </Link>
                </div>
              </div>
            </div>
          {/* </div> */}
        </section>
      </div>
    </div>
  );
}