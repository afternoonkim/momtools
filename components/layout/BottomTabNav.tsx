"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, ClipboardList, Home, Menu, Stethoscope } from "lucide-react";
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
  const className = `flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1.5 text-[10.5px] font-bold leading-none transition active:scale-[0.98] ${
    isActive ? "bg-amber-50 text-amber-700" : "text-slate-500 active:bg-slate-50"
  }`;
  const Icon = item.icon;
  const content = (
    <>
      <Icon size={18} strokeWidth={isActive ? 2.6 : 2.2} />
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
      label: "계산",
      href: "/tools",
      icon: Calculator,
      active: (path) => path === "/tools" || path.startsWith("/tools/") || path.startsWith("/cal/"),
    },
    {
      label: "확인",
      href: "/qna",
      icon: Stethoscope,
      active: (path) => path.startsWith("/qna") || path.startsWith("/health") || path.startsWith("/monthly-guide") || path.startsWith("/family-health-qna") || path.startsWith("/moonlight-hospitals"),
    },
    {
      label: "기록",
      href: "/records",
      icon: ClipboardList,
      active: (path) => path.startsWith("/records") || path.startsWith("/child") || path.startsWith("/development-check") || path.startsWith("/checklists"),
    },
    {
      label: "메뉴",
      icon: Menu,
      action: "menu",
      active: () => false,
    },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[35] border-t border-amber-100 bg-white/95 px-2 pb-[calc(0.45rem+env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-10px_30px_rgba(15,23,42,0.06)] backdrop-blur lg:hidden" aria-label="하단 주요 메뉴">
      <div className="mx-auto flex max-w-md items-center gap-1">
        {items.map((item) => (
          <TabButton key={item.label} item={item} pathname={pathname} onMenuClick={onMenuClick} />
        ))}
      </div>
    </nav>
  );
}
