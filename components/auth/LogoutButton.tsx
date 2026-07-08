"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { notifyRecentPagesAuthChanged } from "@/components/common/RecentPageTracker";

export default function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleLogout() {
    setPending(true);
    await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" }).catch(() => null);
    notifyRecentPagesAuthChanged();
    router.replace("/?view=home");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={pending}
      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-500 transition hover:bg-slate-50 disabled:opacity-60"
    >
      {pending ? "나가는 중" : "로그아웃"}
    </button>
  );
}
