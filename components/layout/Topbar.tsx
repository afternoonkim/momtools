"use client";

import Link from "next/link";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-amber-100 bg-white/95 px-4 py-2.5 backdrop-blur lg:hidden">
      <div className="flex min-h-11 items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label="MomTools 홈으로 이동">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-base">
            👶
          </div>
          <div className="min-w-0">
            <div className="text-sm font-extrabold text-slate-900">MomTools</div>
            <div className="truncate text-[11px] text-slate-500">아이를 키우는 모든 순간을 더 쉽게</div>
          </div>
        </Link>
        <Link
          href="/search"
          className="inline-flex min-h-10 items-center rounded-full border border-amber-100 bg-amber-50 px-3 text-xs font-bold text-amber-800"
        >
          검색
        </Link>
      </div>
    </header>
  );
}
