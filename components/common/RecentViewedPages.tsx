"use client";

import Link from "next/link";
import { Clock3, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RECENT_PAGES_STORAGE_KEY, RECENT_PAGES_UPDATED_EVENT, type RecentPageItem } from "@/components/common/RecentPageTracker";

interface RecentViewedPagesProps {
  limit?: number;
  title?: string;
  className?: string;
}

function readRecentPages(): RecentPageItem[] {
  try {
    const raw = window.localStorage.getItem(RECENT_PAGES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item?.href && item?.title);
  } catch {
    return [];
  }
}

export default function RecentViewedPages({
  limit = 5,
  title = "최근 본 페이지",
  className,
}: RecentViewedPagesProps) {
  const [items, setItems] = useState<RecentPageItem[]>([]);

  useEffect(() => {
    const refresh = () => setItems(readRecentPages().slice(0, limit));
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener(RECENT_PAGES_UPDATED_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(RECENT_PAGES_UPDATED_EVENT, refresh);
    };
  }, [limit]);

  if (items.length === 0) return null;

  const clearItems = () => {
    window.localStorage.removeItem(RECENT_PAGES_STORAGE_KEY);
    setItems([]);
    window.dispatchEvent(new Event(RECENT_PAGES_UPDATED_EVENT));
  };

  return (
    <section className={`mt-recent-panel ${className ?? ""}`.trim()} aria-label={title}>
      <div className="mt-recent-head">
        <div className="flex items-center gap-2">
          <span className="mt-recent-icon" aria-hidden>
            <Clock3 size={14} />
          </span>
          <h2>{title}</h2>
        </div>
        <button type="button" onClick={clearItems} className="mt-recent-clear" aria-label="최근 본 페이지 지우기">
          <X size={13} />
          지우기
        </button>
      </div>
      <div className="mt-recent-list">
        {items.map((item) => (
          <Link key={`${item.href}-${item.viewedAt}`} href={item.href} className="mt-recent-item">
            <span>
              <strong>{item.title}</strong>
              <em>{item.category}</em>
            </span>
            <span aria-hidden className="mt-recent-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
