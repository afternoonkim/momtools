import { getPublishedParentingProductGuides } from "@/data/parentingProductGuides";
import { buildRssXml, RSS_RESPONSE_HEADERS, type FeedItem } from "@/lib/rss/feed";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export function GET() {
  const items: FeedItem[] = getPublishedParentingProductGuides().map((guide) => ({
    link: `/parenting-products/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    pubDate: guide.publishAt,
    category: `육아용품 가이드 · ${guide.category}`,
  }));

  const xml = buildRssXml(
    {
      title: "MomTools — 육아용품 구매 전 가이드",
      description: "신생아·수유·외출·이유식·어린이집 용품을 사기 전에 확인할 선택 기준을 정리한 가이드입니다.",
      pagePath: "/parenting-products",
      feedPath: "/parenting-products/rss.xml",
    },
    items,
  );

  return new Response(xml, { headers: RSS_RESPONSE_HEADERS });
}
