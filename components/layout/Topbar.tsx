"use client";

import Link from "next/link";
import TopbarAuthButton from "@/components/auth/TopbarAuthButton";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-amber-100 bg-white/95 px-3 py-1.5 backdrop-blur lg:hidden">
      <div className="flex min-h-10 items-center justify-between">
        <Link href="/my" className="flex min-w-0 items-center gap-2" aria-label="내 아이 홈으로 이동">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-sm">
            👶
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-extrabold leading-4 text-slate-900">MomTools</div>
            <div className="truncate text-[10px] leading-3 text-slate-500">아이를 키우는 모든 순간을 더 쉽게</div>
          </div>
        </Link>
        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            href="/search"
            className="inline-flex min-h-9 items-center rounded-full border border-amber-100 bg-amber-50 px-2.5 text-[11px] font-bold text-amber-800"
          >
            검색
          </Link>
          <TopbarAuthButton />
        </div>
      </div>
    </header>
  );
}
