import { NextRequest, NextResponse } from "next/server";
import { normalizeCoupangPathname, shouldShowCoupangProductAds } from "@/lib/coupang-partners";
import { getMatchedCoupangProductAds } from "@/lib/repositories/coupang-product-ads-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMPTY_RESPONSE_HEADERS = { "Cache-Control": "no-store" };
const PRODUCT_RESPONSE_HEADERS = {
  "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
};

export async function GET(request: NextRequest) {
  const rawPathname = request.nextUrl.searchParams.get("path") ?? "/";
  const pathname = normalizeCoupangPathname(rawPathname);

  if (!shouldShowCoupangProductAds(pathname)) {
    return NextResponse.json({ items: [] }, { headers: EMPTY_RESPONSE_HEADERS });
  }

  try {
    const items = await getMatchedCoupangProductAds(pathname);
    return NextResponse.json({ items }, { headers: PRODUCT_RESPONSE_HEADERS });
  } catch (error) {
    console.error("쿠팡 맞춤 상품 광고 조회 실패", error);
    return NextResponse.json({ items: [] }, { status: 200, headers: EMPTY_RESPONSE_HEADERS });
  }
}
