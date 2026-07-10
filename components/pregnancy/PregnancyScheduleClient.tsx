"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type PregnancyScheduleView = {
  id: string;
  title: string;
  description: string | null;
  week: number | null;
  scheduledDate: string;
  status: string;
  memo: string | null;
};

type PregnancyScheduleClientProps = {
  childId: string;
  childName: string;
  schedules: PregnancyScheduleView[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(new Date(`${value}T00:00:00`));
}

function getDateDiffLabel(value: string) {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const target = new Date(`${value}T00:00:00`).getTime();
  const days = Math.round((target - start) / 86400000);
  if (days === 0) return "오늘";
  if (days > 0) return `${days}일 후`;
  return `${Math.abs(days)}일 지남`;
}

export default function PregnancyScheduleClient({ childId, childName, schedules }: PregnancyScheduleClientProps) {
  const router = useRouter();
  const [items, setItems] = useState(schedules);
  const grouped = useMemo(() => {
    const upcoming = items.filter((item) => item.status !== "DONE").sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate));
    const done = items.filter((item) => item.status === "DONE").sort((a, b) => b.scheduledDate.localeCompare(a.scheduledDate));
    return { upcoming, done };
  }, [items]);

  async function updateSchedule(id: string, nextStatus: "DONE" | "UPCOMING") {
    const response = await fetch(`/api/children/${encodeURIComponent(childId)}/pregnancy/schedules/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    }).catch(() => null);
    if (!response?.ok) return;
    setItems((current) => current.map((item) => item.id === id ? { ...item, status: nextStatus } : item));
    router.refresh();
  }

  function ScheduleItem({ item }: { item: PregnancyScheduleView }) {
    const done = item.status === "DONE";
    return (
      <div className="border-b border-slate-100 px-4 py-3 last:border-b-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[13px] font-extrabold leading-5 text-slate-900">{item.title}</p>
            <p className="mt-0.5 text-[11px] font-bold leading-4 text-slate-500">{formatDate(item.scheduledDate)} · {getDateDiffLabel(item.scheduledDate)}{item.week ? ` · ${item.week}주` : ""}</p>
            {item.description ? <p className="mt-1 text-[12px] leading-5 text-slate-600">{item.description}</p> : null}
          </div>
          <label className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-extrabold text-slate-700">
            <input type="checkbox" checked={done} onChange={() => updateSchedule(item.id, done ? "UPCOMING" : "DONE")} className="h-4 w-4 accent-amber-500" />
            완료
          </label>
        </div>
      </div>
    );
  }

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">산전검진 일정</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">{childName}와 만나는 날까지 확인해요</h1>
          <p className="mt-2 text-[12px] leading-5 text-slate-600">예정일 기준으로 만든 참고 일정이에요. 실제 병원 예약일과 다르면 병원 안내를 우선해 주세요.</p>
        </section>

        <section className="mt-simple-list" aria-labelledby="upcoming-schedule-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <h2 id="upcoming-schedule-title" className="text-[14px] font-extrabold text-slate-900">앞으로 확인할 일정</h2>
          </div>
          {grouped.upcoming.length ? grouped.upcoming.map((item) => <ScheduleItem key={item.id} item={item} />) : <div className="px-4 py-4 text-[12px] font-bold text-slate-500">앞으로 표시할 일정이 없어요.</div>}
        </section>

        <section className="mt-simple-list" aria-labelledby="done-schedule-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <h2 id="done-schedule-title" className="text-[14px] font-extrabold text-slate-900">완료한 일정</h2>
          </div>
          {grouped.done.length ? grouped.done.map((item) => <ScheduleItem key={item.id} item={item} />) : <div className="px-4 py-4 text-[12px] font-bold text-slate-500">완료 체크한 일정이 없어요.</div>}
        </section>
      </div>
    </main>
  );
}
