"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

export default function SidebarItem({
  href,
  label,
  icon: Icon,
  collapsed,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  collapsed: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  if (collapsed) {
    return (
      <Link
        href={href}
        aria-label={label}
        title={label}
        className={[
          "flex w-full items-center justify-center rounded-2xl px-2 py-2.5 transition-all duration-200",
          active
            ? "bg-amber-100 text-amber-700 shadow-sm"
            : "text-slate-600 hover:bg-amber-50 hover:text-slate-800",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-11 w-11 items-center justify-center rounded-2xl border transition-all",
            active
              ? "border-amber-200 bg-white shadow-sm"
              : "border-transparent bg-white/70",
          ].join(" ")}
        >
          <Icon size={22} strokeWidth={2} />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={[
        "flex w-full items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200",
        active
          ? "bg-amber-100 text-amber-700 shadow-sm"
          : "text-slate-600 hover:bg-amber-50 hover:text-slate-800",
      ].join(" ")}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-100 bg-white">
        <Icon size={19} strokeWidth={2} />
      </span>
      <span className="min-w-0 text-sm font-medium leading-5">{label}</span>
    </Link>
  );
}
