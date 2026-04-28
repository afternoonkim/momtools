"use client";

import { ReactNode, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SidebarGroup({
  title,
  children,
  collapsed,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  collapsed: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  if (collapsed) {
    return <div className="space-y-2">{children}</div>;
  }

  return (
    <details
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      className="rounded-3xl border border-transparent transition-colors duration-200 hover:border-amber-100/70 hover:bg-white/40"
    >
      <summary
        onClick={(event) => event.stopPropagation()}
        className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-2 py-2 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:bg-amber-50 hover:text-amber-700 [&::-webkit-details-marker]:hidden"
      >
        <span className="truncate">{title}</span>
        <ChevronDown
          size={15}
          strokeWidth={2.3}
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-amber-600" : "text-slate-400"}`}
        />
      </summary>

      <div className="mt-2 space-y-2 pb-1">{children}</div>
    </details>
  );
}
