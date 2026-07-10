import { NextRequest, NextResponse } from "next/server";
import { normalizeCoupangPathname, shouldShowCoupangProductAds } from "@/lib/coupang-partners";
import { getMatchedCoupangProductAds } from "@/lib/repositories/coupang-product-ads-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMPTY_RESPONSE_HEADERS = { "Cache-Control": "no-store" };
const API_PRODUCT_RESPONSE_HEADERS = {
  "Cache-Control": "public, s-maxage=604800, stale-while-revalidate=86400",
};
const MANUAL_FALLBACK_RESPONSE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET(request: NextRequest) {
  const rawPathname = request.nextUrl.searchParams.get("path") ?? "/";
  const pathname = normalizeCoupangPathname(rawPathname);

  if (!shouldShowCoupangProductAds(pathname)) {
    return NextResponse.json({ items: [] }, { headers: EMPTY_RESPONSE_HEADERS });
  }

  try {
    const items = await getMatchedCoupangProductAds(pathname);
    if (items.length === 0) {
      return NextResponse.json({ items: [] }, { headers: EMPTY_RESPONSE_HEADERS });
    }

    const hasApiItem = items.some((item) => item.source === "api");
    return NextResponse.json(
      { items },
      { headers: hasApiItem ? API_PRODUCT_RESPONSE_HEADERS : MANUAL_FALLBACK_RESPONSE_HEADERS },
    );
  } catch (error) {
    console.error("쿠팡 맞춤 상품 광고 조회 실패", error);
    return NextResponse.json({ items: [] }, { status: 200, headers: EMPTY_RESPONSE_HEADERS });
  }
}
