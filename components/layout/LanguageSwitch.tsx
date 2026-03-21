"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitch({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <div
      className={[
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-100/90 p-1 shadow-sm",
        mobile ? "scale-[0.96]" : "",
      ].join(" ")}
      aria-label="언어 전환"
    >
      <Link
        href="/en"
        className={[
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          isEnglish ? "bg-white text-slate-800 shadow-sm" : "text-slate-600 hover:text-slate-800",
        ].join(" ")}
      >
        English
      </Link>
      <Link
        href="/"
        className={[
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          !isEnglish ? "bg-white text-slate-800 shadow-sm" : "text-slate-600 hover:text-slate-800",
        ].join(" ")}
      >
        한국어
      </Link>
    </div>
  );
}
