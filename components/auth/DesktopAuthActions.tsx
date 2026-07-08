"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Baby, LogIn, LogOut } from "lucide-react";
import { notifyRecentPagesAuthChanged } from "@/components/common/RecentPageTracker";

type AuthState = {
  loading: boolean;
  loggedIn: boolean;
  childCount: number;
};

type DesktopAuthActionsProps = {
  compact?: boolean;
};

function getSafeNext(pathname: string) {
  if (!pathname.startsWith("/") || pathname.startsWith("/api/") || pathname.startsWith("/auth") || pathname.startsWith("/login")) {
    return "/auth/after-login";
  }

  return pathname;
}

function iconButtonClass(isPrimary = false) {
  return `inline-flex h-9 w-9 items-center justify-center rounded-xl border text-[12px] font-extrabold transition active:scale-[0.98] ${
    isPrimary
      ? "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
  }`;
}

function textButtonClass(isPrimary = false) {
  return `inline-flex h-9 items-center justify-center rounded-xl border px-3 text-[12px] font-extrabold transition active:scale-[0.98] ${
    isPrimary
      ? "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
  }`;
}

export default function DesktopAuthActions({ compact = false }: DesktopAuthActionsProps) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [auth, setAuth] = useState<AuthState>({ loading: true, loggedIn: false, childCount: 0 });
  const [pending, setPending] = useState(false);

  const kakaoLoginHref = useMemo(() => `/api/auth/kakao?next=${encodeURIComponent(getSafeNext(pathname))}`, [pathname]);
  const isLoginPage = pathname === "/login" || pathname.startsWith("/login/");

  useEffect(() => {
    let alive = true;

    fetch("/api/auth/me", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : { loggedIn: false }))
      .then((data) => {
        if (!alive) return;
        setAuth({
          loading: false,
          loggedIn: Boolean(data?.loggedIn),
          childCount: Number(data?.user?.childCount || 0),
        });
      })
      .catch(() => {
        if (!alive) return;
        setAuth({ loading: false, loggedIn: false, childCount: 0 });
      });

    return () => {
      alive = false;
    };
  }, [pathname]);

  async function handleLogout() {
    if (pending) return;
    setPending(true);
    await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" }).catch(() => null);
    notifyRecentPagesAuthChanged();
    setAuth({ loading: false, loggedIn: false, childCount: 0 });
    router.replace("/?view=home");
    router.refresh();
  }

  if (isLoginPage) {
    return null;
  }

  if (auth.loading) {
    return compact ? (
      <div className="flex justify-center" aria-label="로그인 상태 확인 중">
        <span className="h-9 w-9 rounded-xl border border-slate-200 bg-white/70" />
      </div>
    ) : (
      <div className="grid grid-cols-2 gap-2" aria-label="로그인 상태 확인 중">
        <span className="h-9 rounded-xl border border-slate-200 bg-white/70" />
        <span className="h-9 rounded-xl border border-slate-200 bg-white/70" />
      </div>
    );
  }

  if (auth.loggedIn) {
    return compact ? (
      <div className="flex flex-col items-center gap-2">
        <Link
          href={auth.childCount > 0 ? "/my" : "/child/new"}
          className={iconButtonClass(true)}
          aria-label={auth.childCount > 0 ? "내 아이 홈" : "아이 등록"}
          title={auth.childCount > 0 ? "내 아이 홈" : "아이 등록"}
        >
          <Baby size={16} aria-hidden />
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          disabled={pending}
          className={`${iconButtonClass(false)} disabled:opacity-60`}
          aria-label="로그아웃"
          title="로그아웃"
        >
          <LogOut size={16} aria-hidden />
        </button>
      </div>
    ) : (
      <div className="grid grid-cols-2 gap-2">
        <Link href={auth.childCount > 0 ? "/my" : "/child/new"} className={textButtonClass(true)}>
          {auth.childCount > 0 ? "내 아이 홈" : "아이 등록"}
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          disabled={pending}
          className={`${textButtonClass(false)} disabled:opacity-60`}
          aria-label="로그아웃"
        >
          {pending ? "처리중" : "로그아웃"}
        </button>
      </div>
    );
  }

  return compact ? (
    <div className="flex justify-center">
      <a href={kakaoLoginHref} className={iconButtonClass(true)} aria-label="카카오 로그인" title="카카오 로그인">
        <LogIn size={16} aria-hidden />
      </a>
    </div>
  ) : (
    <a href={kakaoLoginHref} className={`${textButtonClass(true)} w-full`} aria-label="카카오 로그인">
      카카오 로그인
    </a>
  );
}
