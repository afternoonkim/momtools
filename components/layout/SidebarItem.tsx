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

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-200 ${
        active
          ? "bg-amber-100 text-amber-700 shadow-sm"
          : "text-slate-600 hover:bg-amber-50 hover:text-slate-800"
      }`}
    >
      <Icon size={18} />
      {!collapsed ? <span className="text-sm font-medium">{label}</span> : null}
    </Link>
  );
}
