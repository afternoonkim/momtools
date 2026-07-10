"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FeelingComposer from "@/components/feelings/FeelingComposer";
import type { MomentPromptSeed } from "@/lib/feelings";

type FeelingFabContext = {
  loggedIn?: boolean;
  selectedChild?: { id: string; name: string } | null;
  momentPrompt?: MomentPromptSeed | null;
};

export default function FeelingFab() {
  const pathname = usePathname() || "/";
  const [context, setContext] = useState<FeelingFabContext | null>(null);
  const [open, setOpen] = useState(false);
  const shouldShowFab = Boolean(context?.loggedIn && context.selectedChild && !pathname.startsWith("/feelings"));

  useEffect(() => {
    if (pathname.startsWith("/api") || pathname.startsWith("/login") || pathname.startsWith("/auth")) return;
    let alive = true;

    fetch("/api/feelings/context", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: FeelingFabContext | null) => {
        if (!alive) return;
        setContext(data);
      })
      .catch(() => null);

    return () => {
      alive = false;
    };
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("mt-has-feeling-fab", shouldShowFab);
    return () => document.documentElement.classList.remove("mt-has-feeling-fab");
  }, [shouldShowFab]);

  if (!shouldShowFab || !context?.selectedChild) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-floating-action fixed bottom-[calc(4.9rem+env(safe-area-inset-bottom))] right-4 z-[38] flex h-12 w-12 items-center justify-center rounded-full border text-xl active:scale-95 lg:hidden"
        aria-label="오늘의 마음 기록하기"
      >
        ❤️
      </button>
      <FeelingComposer
        open={open}
        onClose={() => setOpen(false)}
        childId={context.selectedChild.id}
        childName={context.selectedChild.name}
        momentPrompt={context.momentPrompt}
      />
    </>
  );
}
