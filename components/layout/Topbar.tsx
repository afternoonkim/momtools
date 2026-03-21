"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./LanguageSwitch";

export default function Topbar() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const homeHref = isEnglish ? "/en" : "/";

  return (
    <div className="sticky top-0 z-30 border-b border-amber-100 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-3 pl-12">
        <Link href={homeHref} className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-lg">
            👶
          </div>
          <div className="min-w-0">
            <div className="font-bold text-slate-800">MomTools</div>
            <div className="truncate text-xs text-slate-500">
              {isEnglish ? "US-friendly parenting tools" : "육아 계산기와 정보"}
            </div>
          </div>
        </Link>

        <LanguageSwitch mobile />
      </div>
    </div>
  );
}
