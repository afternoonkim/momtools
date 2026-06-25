import { qnaCategories, type QnaCategory } from "@/data/qna";
import { getQnaEntriesForCategory } from "@/lib/repositories/qna-db";
import { buildRssXml, RSS_RESPONSE_HEADERS, type FeedItem } from "@/lib/rss/feed";
import { SITE_DATES } from "@/lib/content-meta";

export const runtime = "nodejs";
export const revalidate = 3600;

const PER_CATEGORY = 20;

export async function GET() {
  const itemsByCategory = await Promise.all(
    (Object.keys(qnaCategories) as QnaCategory[]).map(async (category) => {
      const entries = await getQnaEntriesForCategory(category);

      return entries.slice(0, PER_CATEGORY).map((entry) => ({
        link: `/qna/${category}/${entry.slug}`,
        title: entry.question,
        description: entry.summary,
        pubDate: SITE_DATES.updated,
        category: qnaCategories[category],
      }));
    }),
  );

  const items: FeedItem[] = itemsByCategory.flat();

  const xml = buildRssXml(
    {
      title: "MomTools — 육아 Q&A (건강·성장·행동)",
      description:
        "아이 건강·성장·행동 관련해 부모가 자주 묻는 질문에 집에서 먼저 확인할 포인트와 상담 신호까지 한 번에 정리한 Q&A 피드입니다.",
      pagePath: "/qna",
      feedPath: "/qna/rss.xml",
    },
    items,
  );

  return new Response(xml, { headers: RSS_RESPONSE_HEADERS });
}
