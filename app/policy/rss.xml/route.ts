import { governmentPolicies, governmentPolicyCategories } from "@/data/governmentPolicy";
import { buildRssXml, RSS_RESPONSE_HEADERS, type FeedItem } from "@/lib/rss/feed";
import { SITE_DATES } from "@/lib/content-meta";

export const dynamic = "force-static";
export const revalidate = 3600;

const MAX = 60;

export function GET() {
  const items: FeedItem[] = governmentPolicies.slice(0, MAX).map((entry) => ({
    link: `/policy/${entry.category}/${entry.slug}`,
    title: entry.title,
    description: entry.summary,
    pubDate: SITE_DATES.updated,
    category: governmentPolicyCategories[entry.category].shortLabel,
  }));

  const xml = buildRssXml(
    {
      title: "MomTools — 정부정책 (임신·출산·양육)",
      description:
        "임신·출산 지원, 양육·보육, 일·육아 병행, 돌봄·교육, 의료·건강, 지역별 출산지원금 정책을 한국 가정 기준으로 정리한 피드입니다.",
      pagePath: "/policy",
      feedPath: "/policy/rss.xml",
    },
    items,
  );

  return new Response(xml, { headers: RSS_RESPONSE_HEADERS });
}
