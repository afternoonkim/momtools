
"use client";

import { useEffect, useMemo, useState } from "react";

type PersistentChecklistProps = {
  storageKey: string;
  items: string[];
  accent?: "emerald" | "sky" | "amber" | "rose" | "violet" | "orange";
};

const accentClasses: Record<NonNullable<PersistentChecklistProps["accent"]>, string> = {
  emerald: "accent-emerald-500 focus:ring-emerald-200",
  sky: "accent-sky-500 focus:ring-sky-200",
  amber: "accent-amber-500 focus:ring-amber-200",
  rose: "accent-rose-500 focus:ring-rose-200",
  violet: "accent-violet-500 focus:ring-violet-200",
  orange: "accent-orange-500 focus:ring-orange-200",
};

export default function PersistentChecklist({
  storageKey,
  items,
  accent = "emerald",
}: PersistentChecklistProps) {
  const initialState = useMemo(() => Object.fromEntries(items.map((item) => [item, false])), [items]);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(initialState);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (!raw) {
          setCheckedMap(initialState);
          return;
        }
        const parsed = JSON.parse(raw) as Record<string, boolean>;
        const merged = Object.fromEntries(items.map((item) => [item, Boolean(parsed[item])]));
        setCheckedMap(merged);
      } catch {
        setCheckedMap(initialState);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [initialState, items, storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checkedMap));
    } catch {}
  }, [checkedMap, storageKey]);

  return (
    <div className="mt-4">
      <p className="mb-2 text-xs leading-5 text-slate-500">체크한 항목은 이 기기 브라우저에 자동 저장됩니다.</p>
      <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white">
        {items.map((item) => (
          <label
            key={item}
            className="flex min-h-12 items-start gap-3 px-4 py-3 text-sm leading-6 text-slate-700"
          >
            <input
              type="checkbox"
              checked={Boolean(checkedMap[item])}
              onChange={() =>
                setCheckedMap((prev) => ({
                  ...prev,
                  [item]: !prev[item],
                }))
              }
              className={`mt-1 h-4 w-4 rounded border-slate-300 ${accentClasses[accent]}`}
            />
            <span className={checkedMap[item] ? "text-slate-400 line-through" : ""}>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
