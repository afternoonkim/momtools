"use client";

import { useState } from "react";
import FeelingComposer from "@/components/feelings/FeelingComposer";
import type { MomentPromptSeed } from "@/lib/feelings";

type FeelingsPageClientProps = {
  childId: string;
  childName: string;
  momentPrompt?: MomentPromptSeed | null;
};

export default function FeelingsPageClient({ childId, childName, momentPrompt }: FeelingsPageClientProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="mt-card p-3.5">
        <div className="min-w-0">
          <span className="mt-badge">마음</span>
          <h1 className="mt-2 text-[22px] font-black leading-7 text-slate-950 dark:text-white">오늘의 마음</h1>
          <p className="mt-1 text-[12px] font-bold leading-5 text-slate-500 dark:text-slate-400">하루 30초, 아이와 관련된 마음을 짧게 남겨요.</p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="mt-action-card mt-3 w-full rounded-3xl border p-3 text-left transition active:scale-[0.99]">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-lg shadow-sm dark:bg-slate-950" aria-hidden>❤️</span>
            <span className="min-w-0">
              <strong className="block text-[13px] font-black text-slate-950 dark:text-white">짧게 기록하기</strong>
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400">감정과 메모만 빠르게 남겨요.</span>
            </span>
          </div>
        </button>
      </section>
      {momentPrompt ? (
        <section className="mt-card border-amber-100 bg-amber-50/70 p-3.5 dark:border-amber-400/20 dark:bg-amber-400/10">
          <p className="text-[11px] font-extrabold text-amber-700">오늘의 순간</p>
          <h2 className="mt-1 text-[16px] font-black leading-6 text-slate-950 dark:text-white">{momentPrompt.title}</h2>
          <p className="mt-1 text-[12px] font-bold leading-5 text-slate-600 dark:text-slate-300">{momentPrompt.question}</p>
          <button type="button" onClick={() => setOpen(true)} className="mt-button-primary mt-3 inline-flex min-h-10 items-center rounded-2xl px-4 text-[12px] font-black active:scale-[0.98]">
            오늘의 순간 기록하기
          </button>
        </section>
      ) : null}
      <FeelingComposer open={open} onClose={() => setOpen(false)} childId={childId} childName={childName} momentPrompt={momentPrompt} />
    </>
  );
}
