import { familyFinanceArticles } from "@/data/familyFinance";
import { buildRssXml, RSS_RESPONSE_HEADERS, type FeedItem } from "@/lib/rss/feed";

export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const items: FeedItem[] = familyFinanceArticles.map((article) => ({
    link: `/info/family-finance/${article.slug}`,
    title: article.title,
    description: article.metaDescription,
    pubDate: article.publishedOn,
    category: article.topic,
  }));

  const xml = buildRssXml(
    {
      title: "MomTools — 출산·육아 가계 가이드",
      description:
        "부모급여 활용, 첫만남이용권 사용처, 육아휴직 가계부, 자녀세액공제, 아이 통장·청약, 산후조리비 등 한국 가정 출산 후 가계 흐름을 정리한 가이드 피드입니다.",
      pagePath: "/info/family-finance",
      feedPath: "/info/family-finance/rss.xml",
    },
    items,
  );

  return new Response(xml, { headers: RSS_RESPONSE_HEADERS });
}
