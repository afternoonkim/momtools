"use client";

import { ReactNode } from "react";

export default function SidebarGroup({
  title,
  children,
  collapsed,
}: {
  title: string;
  children: ReactNode;
  collapsed: boolean;
}) {
  return (
    <div>
      {!collapsed ? (
        <div className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {title}
        </div>
      ) : null}
      <div className="space-y-2">{children}</div>
    </div>
  );
}
