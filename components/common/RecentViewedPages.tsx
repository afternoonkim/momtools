"use client";

import Link from "next/link";
import { Clock3, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  RECENT_PAGES_AUTH_CHANGED_EVENT,
  RECENT_PAGES_UPDATED_EVENT,
  clearRecentPagesFromScope,
  readRecentPagesFromScope,
  resolveRecentPagesScope,
  type RecentPageItem,
  type RecentPagesScope,
} from "@/components/common/RecentPageTracker";

interface RecentViewedPagesProps {
  limit?: number;
  title?: string;
  className?: string;
}

export default function RecentViewedPages({
  limit = 5,
  title = "최근 본 페이지",
  className,
}: RecentViewedPagesProps) {
  const [items, setItems] = useState<RecentPageItem[]>([]);
  const [scope, setScope] = useState<RecentPagesScope | null>(null);

  useEffect(() => {
    let alive = true;

    const refresh = async () => {
      const resolvedScope = await resolveRecentPagesScope();
      if (!alive) return;
      setScope(resolvedScope);
      setItems(readRecentPagesFromScope(resolvedScope).slice(0, limit));
    };

    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener(RECENT_PAGES_UPDATED_EVENT, refresh);
    window.addEventListener(RECENT_PAGES_AUTH_CHANGED_EVENT, refresh);
    return () => {
      alive = false;
      window.removeEventListener("storage", refresh);
      window.removeEventListener(RECENT_PAGES_UPDATED_EVENT, refresh);
      window.removeEventListener(RECENT_PAGES_AUTH_CHANGED_EVENT, refresh);
    };
  }, [limit]);

  if (items.length === 0) return null;

  const clearItems = async () => {
    const currentScope = scope ?? await resolveRecentPagesScope();
    clearRecentPagesFromScope(currentScope);
    setItems([]);
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
