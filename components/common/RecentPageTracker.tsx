"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export interface RecentPageItem {
  href: string;
  title: string;
  category: string;
  viewedAt: number;
}

export type RecentPagesScope =
  | { type: "guest"; storageKey: string }
  | { type: "user"; userId: string; storageKey: string };

const RECENT_PAGES_LEGACY_STORAGE_KEY = "momtools:recent-pages";
const RECENT_PAGES_GUEST_STORAGE_KEY = "momtools:recent-pages:guest";
const RECENT_PAGES_USER_STORAGE_PREFIX = "momtools:recent-pages:user:";

export const RECENT_PAGES_UPDATED_EVENT = "momtools:recent-pages-updated";
export const RECENT_PAGES_AUTH_CHANGED_EVENT = "momtools:recent-pages-auth-changed";

const MAX_RECENT_PAGES = 8;

function getCategory(pathname: string) {
  if (pathname.startsWith("/tools") || pathname.startsWith("/cal")) return "계산하기";
  if (pathname.startsWith("/qna") || pathname.startsWith("/health") || pathname.startsWith("/family-health-qna")) return "확인하기";
  if (pathname.startsWith("/moonlight-hospitals")) return "달빛아동병원";
  if (pathname.startsWith("/feelings")) return "마음";
  if (pathname.startsWith("/development-check")) return "발달 체크";
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
  if (pathname.startsWith("/auth") || pathname.startsWith("/login")) return false;
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

function getUserStorageKey(userId: string) {
  return `${RECENT_PAGES_USER_STORAGE_PREFIX}${encodeURIComponent(userId)}`;
}

function cleanupLegacyRecentPages() {
  try {
    window.localStorage.removeItem(RECENT_PAGES_LEGACY_STORAGE_KEY);
  } catch {
    // localStorage를 사용할 수 없는 환경에서는 조용히 무시합니다.
  }
}

function dispatchRecentPagesUpdated() {
  window.dispatchEvent(new Event(RECENT_PAGES_UPDATED_EVENT));
}

export function notifyRecentPagesAuthChanged() {
  window.dispatchEvent(new Event(RECENT_PAGES_AUTH_CHANGED_EVENT));
  dispatchRecentPagesUpdated();
}

export async function resolveRecentPagesScope(): Promise<RecentPagesScope> {
  cleanupLegacyRecentPages();

  try {
    const response = await fetch("/api/auth/me", { cache: "no-store" });
    const data = (await response.json().catch(() => null)) as { loggedIn?: boolean; user?: { id?: unknown } } | null;
    const userId = typeof data?.user?.id === "string" ? data.user.id : "";

    if (response.ok && data?.loggedIn && userId) {
      return { type: "user", userId, storageKey: getUserStorageKey(userId) };
    }
  } catch {
    // 인증 상태 확인 실패 시에는 비회원 저장소만 사용합니다.
  }

  return { type: "guest", storageKey: RECENT_PAGES_GUEST_STORAGE_KEY };
}

export function readRecentPagesFromScope(scope: RecentPagesScope): RecentPageItem[] {
  try {
    const raw = window.localStorage.getItem(scope.storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item?.href && item?.title && item?.category && item?.viewedAt);
  } catch {
    return [];
  }
}

export function writeRecentPagesToScope(scope: RecentPagesScope, items: RecentPageItem[]) {
  window.localStorage.setItem(scope.storageKey, JSON.stringify(items.slice(0, MAX_RECENT_PAGES)));
  dispatchRecentPagesUpdated();
}

export function clearRecentPagesFromScope(scope: RecentPagesScope) {
  window.localStorage.removeItem(scope.storageKey);
  dispatchRecentPagesUpdated();
}

export default function RecentPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || !shouldTrack(pathname)) return;

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const scope = await resolveRecentPagesScope();
      if (cancelled) return;

      const params = window.location.search.replace(/^\?/, "");
      const href = params && pathname.startsWith("/moonlight-hospitals") ? `${pathname}?${params}` : pathname;
      const item: RecentPageItem = {
        href,
        title: getReadableTitle(),
        category: getCategory(pathname),
        viewedAt: Date.now(),
      };

      const current = readRecentPagesFromScope(scope);
      const next = [item, ...current.filter((entry) => entry.href !== item.href)].slice(0, MAX_RECENT_PAGES);
      writeRecentPagesToScope(scope, next);
    }, 220);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
