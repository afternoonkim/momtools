"use client";

import Link from "next/link";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-amber-100 bg-white/90 px-4 py-4 backdrop-blur lg:hidden">
      <Link href="/" className="flex items-center gap-3 pl-12">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-100 text-lg">
          👶
        </div>
        <div>
          <div className="font-bold text-slate-800">MomTools</div>
          <div className="text-xs text-slate-500">육아 계산기와 정보</div>
        </div>
      </Link>
    </div>
  );
}
