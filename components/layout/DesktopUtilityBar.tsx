"use client";

import Link from "next/link";
import DesktopAuthActions from "@/components/auth/DesktopAuthActions";

export default function DesktopUtilityBar() {
  return (
    <div
      className="fixed right-5 top-4 z-[90] hidden items-center gap-2 rounded-full border border-amber-100 bg-white/95 px-2.5 py-2 shadow-[0_10px_30px_rgba(245,158,11,0.12)] backdrop-blur lg:flex"
      aria-label="데스크탑 로그인 메뉴"
    >
      <Link
        href="/search"
        className="inline-flex min-h-9 items-center justify-center rounded-full border border-slate-100 bg-white px-3.5 text-[12px] font-extrabold text-slate-600 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-800 active:scale-[0.98]"
      >
        검색
      </Link>
      <DesktopAuthActions />
    </div>
  );
}
