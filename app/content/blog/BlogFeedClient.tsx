"use client";

import { useEffect, useState } from "react";
import { RefreshCcw, ExternalLink, ImageIcon } from "lucide-react";

type BlogItem = {
  title: string;
  link: string;
  description?: string;
  thumbnail?: string | null;
  pubDate?: string;
  parentCategory?: string;
  childCategory?: string;
};

function stripHtml(html?: string) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateString?: string) {
  if (!dateString) return "최신 글";

  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) return dateString;

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
}

function getSafeThumbnailUrl(url?: string | null) {
  if (!url) return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("//")
  ) {
    return trimmed.startsWith("//") ? `https:${trimmed}` : trimmed;
  }

  return null;
}

function Thumbnail({
  src,
  alt,
}: {
  src?: string | null;
  alt: string;
}) {
  const [hasError, setHasError] = useState(false);
  const safeSrc = getSafeThumbnailUrl(src);

  if (!safeSrc || hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-400">
        <ImageIcon size={30} />
        <span className="text-sm font-medium">썸네일 준비중</span>
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="h-full w-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export default function BlogFeedClient() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadFeed() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/naver-blog", { cache: "no-store" });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "블로그 글을 불러오지 못했습니다.");
      }

      setItems(data.items || []);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <div className="space-y-6">
      <section className="mt-card p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mt-badge">콘텐츠</span>
            <h1 className="mt-title-lg mt-4">블로그 글</h1>
            <p className="mt-text-main mt-4">
              똑똑한 육아로그 블로그의 최신 글을 한눈에 모아보세요.<br/>
              썸네일, 제목, 발행일을 함께 보여주어 필요한 글을 빠르게 찾기 쉽게
              구성했습니다.
            </p>
          </div>

          <button
            type="button"
            onClick={loadFeed}
            className="mt-button-secondary gap-2"
          >
            <RefreshCcw size={16} />
            새로고침
          </button>
        </div>
      </section>

      {loading ? (
        <div className="mt-card-soft p-8 text-slate-500">불러오는 중...</div>
      ) : null}

      {error ? (
        <div className="mt-card-soft p-8 text-rose-500">{error}</div>
      ) : null}

      {!loading && !error && items.length === 0 ? (
        <div className="mt-card-soft p-8 text-slate-500">
          표시할 블로그 글이 아직 없습니다. RSS 연결 상태를 확인해 주세요.
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const cleanedDescription =
            stripHtml(item.description) || "블로그 설명이 없습니다.";

          return (
            <a
              key={`${item.link}-${index}`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-card overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Thumbnail src={item.thumbnail} alt={item.title} />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="mt-badge">
                    {item.childCategory || item.parentCategory || "블로그"}
                  </span>
                  <ExternalLink size={16} className="shrink-0 text-slate-400" />
                </div>

                <h3 className="mt-4 line-clamp-2 text-[24px] font-bold leading-[1.35] text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-500">
                  {cleanedDescription}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-400">
                  <span>{formatDate(item.pubDate)}</span>
                  <span>{item.parentCategory || "미분류"}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}