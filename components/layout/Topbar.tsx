"use client";

import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-amber-100 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex min-h-12 items-center pl-12">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="MomTools 홈으로 이동">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-lg">
            👶
          </div>
          <div className="min-w-0">
            <div className="font-bold text-slate-800">MomTools</div>
            <div className="truncate text-xs text-slate-500">육아 계산기와 정보</div>
          </div>
        </Link>
      </div>

      <div className="mt-3">
        <SearchBox size="sm" placeholder="감기, 부모급여, 청주 출산지원금" />
      </div>
    </div>
  );
}
