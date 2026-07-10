"use client";

import { useState } from "react";
import FeelingComposer from "@/components/feelings/FeelingComposer";
import type { MomentPromptSeed } from "@/lib/feelings";

type FeelingQuickCardProps = {
  childId: string;
  childName: string;
  momentPrompt?: MomentPromptSeed | null;
  className?: string;
};

const quickEmojis = ["😊", "😥", "❤️", "😴", "😭"];

export default function FeelingQuickCard({ childId, childName, momentPrompt, className = "" }: FeelingQuickCardProps) {
  const [open, setOpen] = useState(false);
  const isMoment = Boolean(momentPrompt);

  return (
    <section className={`mt-card p-3.5 ${className}`} aria-label="오늘의 마음 빠른 기록">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-extrabold text-amber-700">{isMoment ? "오늘의 순간" : "오늘의 마음"}</p>
          <h2 className="mt-1 text-[15px] font-black leading-6 text-slate-950 dark:text-white">
            {isMoment ? momentPrompt?.title : "오늘은 어떤 하루였나요?"}
          </h2>
          <p className="mt-1 line-clamp-2 text-[12px] font-bold leading-5 text-slate-500 dark:text-slate-400">
            {isMoment ? momentPrompt?.question : "감정을 고르고 짧게 남기면 같은 시기 부모의 마음도 함께 볼 수 있어요."}
          </p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="mt-button-secondary shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black active:scale-[0.98]">
          기록
        </button>
      </div>
      <button type="button" onClick={() => setOpen(true)} className="mt-action-card mt-3 flex w-full items-center justify-between rounded-2xl border px-3 py-2.5 text-left active:scale-[0.99]">
        <span className="flex gap-2 text-xl" aria-hidden>
          {quickEmojis.map((emoji) => <span key={emoji}>{emoji}</span>)}
        </span>
        <span className="text-[12px] font-black text-slate-700 dark:text-slate-200">짧게 기록하기</span>
      </button>
      <FeelingComposer open={open} onClose={() => setOpen(false)} childId={childId} childName={childName} momentPrompt={momentPrompt} />
    </section>
  );
}
