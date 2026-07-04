"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { notifyRecentPagesAuthChanged } from "@/components/common/RecentPageTracker";

type AuthState = {
  loading: boolean;
  loggedIn: boolean;
};

export default function TopbarAuthButton() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [auth, setAuth] = useState<AuthState>({ loading: true, loggedIn: false });
  const [pending, setPending] = useState(false);

  const loginHref = useMemo(() => {
    const safeNext = pathname.startsWith("/") && !pathname.startsWith("/api/") ? pathname : "/auth/after-login";
    return `/login?next=${encodeURIComponent(safeNext)}`;
  }, [pathname]);

  useEffect(() => {
    let alive = true;

    fetch("/api/auth/me", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : { loggedIn: false }))
      .then((data) => {
        if (!alive) return;
        setAuth({ loading: false, loggedIn: Boolean(data?.loggedIn) });
      })
      .catch(() => {
        if (!alive) return;
        setAuth({ loading: false, loggedIn: false });
      });

    return () => {
      alive = false;
    };
  }, [pathname]);

  async function handleLogout() {
    if (pending) return;
    setPending(true);
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => null);
    notifyRecentPagesAuthChanged();
    setAuth({ loading: false, loggedIn: false });
    router.replace("/");
    router.refresh();
  }

  if (auth.loading) {
    return (
      <span className="inline-flex min-h-10 min-w-[3.25rem] items-center justify-center rounded-full border border-slate-200 bg-white/80 px-3 text-xs font-bold text-slate-400">
        ...
      </span>
    );
  }

  if (auth.loggedIn) {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={pending}
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-xs font-extrabold text-slate-600 transition active:scale-[0.98] disabled:opacity-60"
        aria-label="로그아웃"
      >
        {pending ? "처리중" : "로그아웃"}
      </button>
    );
  }

  return (
    <Link
      href={loginHref}
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-amber-200 bg-amber-50 px-3 text-xs font-extrabold text-amber-800 transition active:scale-[0.98]"
      aria-label="로그인"
    >
      로그인
    </Link>
  );
}
