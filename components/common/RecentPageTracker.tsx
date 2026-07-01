"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export interface RecentPageItem {
  href: string;
  title: string;
  category: string;
  viewedAt: number;
}

export const RECENT_PAGES_STORAGE_KEY = "momtools:recent-pages";
export const RECENT_PAGES_UPDATED_EVENT = "momtools:recent-pages-updated";

const MAX_RECENT_PAGES = 8;

function getCategory(pathname: string) {
  if (pathname.startsWith("/tools") || pathname.startsWith("/cal")) return "계산하기";
  if (pathname.startsWith("/qna") || pathname.startsWith("/health") || pathname.startsWith("/family-health-qna")) return "확인하기";
  if (pathname.startsWith("/moonlight-hospitals")) return "달빛아동병원";
  if (pathname.startsWith("/checklists")) return "기록하기";
  if (pathname.startsWith("/baby-food")) return "이유식";
  if (pathname.startsWith("/monthly-guide")) return "월령 가이드";
  if (pathname.startsWith("/policy")) return "정책";
  if (pathname.startsWith("/info")) return "참고하기";
  return "최근 확인";
}

function shouldTrack(pathname: string) {
  if (!pathname || pathname === "/") return false;
  if (pathname.startsWith("/api")) return false;
  if (pathname.startsWith("/db-check")) return false;
  if (pathname.startsWith("/en")) return false;
  if (["/search", "/feedback", "/privacy", "/terms", "/about", "/contact", "/faq"].includes(pathname)) return false;
  return true;
}

function getReadableTitle() {
  const h1 = document.querySelector("main h1")?.textContent?.trim();
  if (h1) return h1.replace(/\s+/g, " ").slice(0, 48);

  const title = document.title
    .replace(/\s*\|\s*MomTools.*$/i, "")
    .replace(/\s*-\s*MomTools.*$/i, "")
    .trim();
  return title ? title.slice(0, 48) : "최근 본 페이지";
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

function writeRecentPages(items: RecentPageItem[]) {
  window.localStorage.setItem(RECENT_PAGES_STORAGE_KEY, JSON.stringify(items.slice(0, MAX_RECENT_PAGES)));
  window.dispatchEvent(new Event(RECENT_PAGES_UPDATED_EVENT));
}

export default function RecentPageTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || !shouldTrack(pathname)) return;

    const timer = window.setTimeout(() => {
      const params = window.location.search.replace(/^\?/, "");
      const href = params && pathname.startsWith("/moonlight-hospitals") ? `${pathname}?${params}` : pathname;
      const item: RecentPageItem = {
        href,
        title: getReadableTitle(),
        category: getCategory(pathname),
        viewedAt: Date.now(),
      };

      const current = readRecentPages();
      const next = [item, ...current.filter((entry) => entry.href !== item.href)].slice(0, MAX_RECENT_PAGES);
      writeRecentPages(next);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
