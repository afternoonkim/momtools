import { NextRequest, NextResponse } from "next/server";
import { getMatchedCoupangProductAds } from "@/lib/repositories/coupang-product-ads-db";
import { normalizeCoupangPathname, shouldShowCoupangProductAds } from "@/lib/coupang-partners";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const rawPathname = request.nextUrl.searchParams.get("path") ?? "/";
  const pathname = normalizeCoupangPathname(rawPathname);

  if (!shouldShowCoupangProductAds(pathname)) {
    return NextResponse.json({ items: [] }, { headers: { "Cache-Control": "no-store" } });
  }

  try {
    const items = await getMatchedCoupangProductAds(pathname);
    return NextResponse.json(
      { items },
      { headers: { "Cache-Control": "private, max-age=300, stale-while-revalidate=600" } },
    );
  } catch (error) {
    console.error("쿠팡 맞춤 상품 광고 조회 실패", error);
    return NextResponse.json({ items: [] }, { status: 200, headers: { "Cache-Control": "no-store" } });
  }
}
