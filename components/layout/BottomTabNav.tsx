"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, ClipboardList, Heart, Home, Menu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TabItem = {
  label: string;
  href?: string;
  icon: LucideIcon;
  active: (pathname: string) => boolean;
  action?: "menu";
};

function TabButton({ item, pathname, onMenuClick }: { item: TabItem; pathname: string; onMenuClick: () => void }) {
  const isActive = item.active(pathname);
  const className = `flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 text-[10px] font-bold leading-none transition active:scale-[0.98] ${
    isActive ? "bg-amber-50 text-amber-700" : "text-slate-500 active:bg-slate-50"
  }`;
  const Icon = item.icon;
  const content = (
    <>
      <Icon size={17} strokeWidth={isActive ? 2.6 : 2.2} />
      <span className="truncate">{item.label}</span>
    </>
  );

  if (item.action === "menu") {
    return (
      <button type="button" className={className} onClick={onMenuClick} aria-label="전체 메뉴 열기">
        {content}
      </button>
    );
  }

  return (
    <Link href={item.href || "/"} className={className} aria-current={isActive ? "page" : undefined}>
      {content}
    </Link>
  );
}

export default function BottomTabNav({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname() || "/";

  const items: TabItem[] = [
    {
      label: "홈",
      href: "/",
      icon: Home,
      active: (path) => path === "/" || path.startsWith("/my"),
    },
    {
      label: "마음",
      href: "/feelings",
      icon: Heart,
      active: (path) => path.startsWith("/feelings"),
    },
    {
      label: "계산",
      href: "/tools",
      icon: Calculator,
      active: (path) => path === "/tools" || path.startsWith("/tools/") || path.startsWith("/cal/"),
    },
    {
      label: "기록",
      href: "/records",
      icon: ClipboardList,
      active: (path) => path.startsWith("/records") || path.startsWith("/child") || path.startsWith("/development-check") || path.startsWith("/weaning-record") || path.startsWith("/vaccine-check") || path.startsWith("/checklists") || path.startsWith("/family"),
    },
    {
      label: "메뉴",
      icon: Menu,
      action: "menu",
      active: () => false,
    },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[35] border-t border-amber-100 bg-white/95 px-2 pb-[calc(0.35rem+env(safe-area-inset-bottom))] pt-1 shadow-[0_-6px_18px_rgba(15,23,42,0.04)] backdrop-blur lg:hidden" aria-label="하단 주요 메뉴">
      <div className="mx-auto flex max-w-md items-center gap-1">
        {items.map((item) => (
          <TabButton key={item.label} item={item} pathname={pathname} onMenuClick={onMenuClick} />
        ))}
      </div>
    </nav>
  );
}
