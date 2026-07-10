"use client";

import { useState } from "react";
import { FEELING_REACTIONS, FEELING_REPORT_REASONS, getReactionMeta } from "@/lib/feelings";

type Counts = Record<string, number>;

export default function FeelingRecordActions({
  recordId,
  initialCounts,
  initialActiveReactions = [],
}: {
  recordId: string;
  initialCounts: Counts;
  initialActiveReactions?: string[];
}) {
  const [counts, setCounts] = useState<Counts>(initialCounts);
  const [activeReactions, setActiveReactions] = useState<string[]>(initialActiveReactions);
  const [reported, setReported] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [pendingReaction, setPendingReaction] = useState<string | null>(null);

  async function react(reactionType: string) {
    if (pendingReaction) return;
    setPendingReaction(reactionType);
    const response = await fetch("/api/feelings/reactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recordId, reactionType }),
    }).catch(() => null);
    setPendingReaction(null);
    if (!response?.ok) return;
    const data = (await response.json().catch(() => null)) as { active?: boolean; count?: number } | null;
    if (!data) return;

    if (typeof data.count === "number") {
      const nextCount = data.count;
      setCounts((current) => ({ ...current, [reactionType]: nextCount }));
    }

    if (typeof data.active === "boolean") {
      setActiveReactions((current) => {
        const alreadyActive = current.includes(reactionType);
        if (data.active && !alreadyActive) return [...current, reactionType];
        if (!data.active && alreadyActive) return current.filter((item) => item !== reactionType);
        return current;
      });
    }
  }

  async function report(reason: string) {
    const response = await fetch("/api/feelings/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recordId, reason }),
    }).catch(() => null);
    if (response?.ok) {
      setReported(true);
      setReportOpen(false);
    }
  }

  return (
    <div className="mt-3 space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {FEELING_REACTIONS.map((reaction) => {
          const meta = getReactionMeta(reaction.key);
          const active = activeReactions.includes(reaction.key);
          const count = counts[reaction.key] || 0;
          return (
            <button
              key={reaction.key}
              type="button"
              onClick={() => react(reaction.key)}
              disabled={pendingReaction === reaction.key}
              aria-pressed={active}
              title={active ? `${meta.label} 취소` : meta.label}
              data-state={active ? "active" : "inactive"}
              className="mt-choice-control mt-choice-control--chip rounded-full border px-2.5 py-1.5 text-[11px] font-extrabold transition active:scale-[0.98] disabled:opacity-70"
            >
              {meta.emoji} {meta.label} {count ? count : ""}
            </button>
          );
        })}
        <button type="button" onClick={() => setReportOpen((value) => !value)} className="mt-button-ghost rounded-full px-2.5 py-1.5 text-[11px] font-bold">
          {reported ? "신고 완료" : "신고"}
        </button>
      </div>
      {reportOpen && !reported ? (
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-950">
          <p className="mb-1.5 text-[11px] font-extrabold text-slate-500 dark:text-slate-400">신고 사유를 선택해 주세요.</p>
          <div className="flex flex-wrap gap-1.5">
            {FEELING_REPORT_REASONS.map((reason) => (
              <button key={reason.key} type="button" onClick={() => report(reason.key)} className="mt-choice-control mt-choice-control--chip rounded-full border px-2.5 py-1.5 text-[11px] font-extrabold">
                {reason.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
