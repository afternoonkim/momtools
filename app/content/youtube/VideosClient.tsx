"use client";

import { useEffect, useState } from "react";
import { ExternalLink, RefreshCcw } from "lucide-react";
import StateMessage from "@/components/common/StateMessage";

type VideoItem = {
  id: string;
  title: string;
  channelLabel: string;
  publishedAtLabel?: string;
  thumbnail?: string | null;
  url: string;
  duration?: string;
  viewCountLabel?: string;
};

export default function VideosClient() {
  const [items, setItems] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadVideos() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/youtube-videos", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message || "유튜브 영상을 불러오지 못했습니다.");
      setItems(data.items || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadVideos(); }, []);

  return (
    <div className="space-y-6">
      <section className="mt-card p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mt-badge">콘텐츠</span>
            <h1 className="mt-title-lg mt-4">추천 유튜브</h1>
            <p className="mt-text-main mt-4">MomTools에서 육아 관련 유튜브 영상을 모아 보는 페이지입니다. 연결된 채널의 최신 영상을 한눈에 확인할 수 있어요.</p>
          </div>
          <button type="button" onClick={loadVideos} className="mt-button-secondary gap-2"><RefreshCcw size={16} />새로고침</button>
        </div>
      </section>

      {loading ? <StateMessage tone="loading" title="추천 영상을 불러오는 중입니다" description="연결된 채널의 최신 영상과 썸네일을 확인하고 있습니다." /> : null}
      {error ? <StateMessage tone="error" title="추천 영상을 불러오지 못했습니다" description={error} actionLabel="다시 시도" onAction={loadVideos} secondaryHref="/content/blog" secondaryLabel="블로그 글 보기" /> : null}
      {!loading && !error && items.length === 0 ? <StateMessage title="표시할 영상이 아직 없습니다" description="채널 연결은 유지되고 있지만 지금은 노출할 최신 영상이 없습니다. 잠시 뒤 다시 시도해 주세요." actionLabel="새로고침" onAction={loadVideos} secondaryHref="/info" secondaryLabel="육아 정보 허브 보기" /> : null}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="mt-card overflow-hidden transition hover:-translate-y-1">
            <div className="aspect-video bg-amber-50">
              {item.thumbnail ? <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" loading="lazy" referrerPolicy="no-referrer" /> : null}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="mt-badge">{item.channelLabel}</span>
                <ExternalLink size={16} className="text-slate-400" />
              </div>
              <h3 className="mt-4 line-clamp-2 text-xl font-bold text-slate-800">{item.title}</h3>
              <div className="mt-3 text-sm text-slate-500">{item.publishedAtLabel || "최신 영상"} · {item.duration || "-"} · {item.viewCountLabel || "-"}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
