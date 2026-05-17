/**
 * RSS 2.0 피드 빌더.
 *
 * - 네이버 서치어드바이저는 "RSS 제출" 메뉴에서 RSS 2.0 형식을 받아들입니다.
 * - 구글 서치콘솔은 사이트맵 제출란에 RSS URL을 그대로 넣어도 됩니다.
 * - Content-Type은 `application/rss+xml; charset=utf-8` 이 가장 안정적입니다.
 */

import { buildCanonical } from "@/lib/content-meta";

export interface FeedItem {
  /** 절대 URL (https://momtools.kr/... 형태) — 비어 있으면 절대 URL로 자동 변환합니다. */
  link: string;
  title: string;
  description: string;
  /** 게시일 (ISO 8601, 예: "2026-04-29" 또는 "2026-04-29T00:00:00+09:00") */
  pubDate: string;
  category?: string;
  /** RSS guid. 미지정 시 link 사용. */
  guid?: string;
}

export interface FeedChannel {
  title: string;
  description: string;
  /** /info/family-finance 같은 채널 페이지 경로 (절대 URL이 아닌 경로) */
  pagePath: string;
  /** /rss.xml 또는 /info/family-finance/rss.xml 같은 피드 자체 경로 */
  feedPath: string;
  language?: string;
}

const SITE_URL = "https://momtools.kr";

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsoluteUrl(linkOrPath: string): string {
  if (/^https?:\/\//.test(linkOrPath)) return linkOrPath;
  if (linkOrPath.startsWith("/")) return `${SITE_URL}${linkOrPath}`;
  return buildCanonical(`/${linkOrPath}`);
}

function toRfc822(dateInput: string): string {
  // ISO 또는 YYYY-MM-DD 입력을 RFC 822 (RSS 표준)로 변환
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) {
    return new Date().toUTCString();
  }
  return d.toUTCString();
}

export function buildRssXml(channel: FeedChannel, items: FeedItem[]): string {
  const channelLink = toAbsoluteUrl(channel.pagePath);
  const selfLink = toAbsoluteUrl(channel.feedPath);
  const lastBuild = items.length > 0 ? toRfc822(items[0].pubDate) : new Date().toUTCString();

  const itemXml = items
    .map((item) => {
      const link = toAbsoluteUrl(item.link);
      const guid = item.guid ? escapeXml(item.guid) : escapeXml(link);
      const category = item.category ? `\n      <category>${escapeXml(item.category)}</category>` : "";
      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="${item.guid ? "false" : "true"}">${guid}</guid>
      <pubDate>${toRfc822(item.pubDate)}</pubDate>
      <description>${escapeXml(item.description)}</description>${category}
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(channel.description)}</description>
    <language>${channel.language ?? "ko-KR"}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml"/>${itemXml}
  </channel>
</rss>
`;
}

export const RSS_RESPONSE_HEADERS = {
  "Content-Type": "application/rss+xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
} as const;
