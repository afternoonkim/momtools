"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type FetalMovementRecordView = {
  id: string;
  measuredAt: string;
  durationMinutes: number;
  count: number;
  memo: string | null;
};

type FetalMovementClientProps = {
  childId: string;
  childName: string;
  initialRecords: FetalMovementRecordView[];
};

function datetimeLocalNow() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export default function FetalMovementClient({ childId, childName, initialRecords }: FetalMovementClientProps) {
  const router = useRouter();
  const [measuredAt, setMeasuredAt] = useState(datetimeLocalNow());
  const [durationMinutes, setDurationMinutes] = useState("60");
  const [count, setCount] = useState("10");
  const [memo, setMemo] = useState("");
  const [records, setRecords] = useState(initialRecords);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const todayRecord = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    return records.find((record) => record.measuredAt.slice(0, 10) === today);
  }, [records]);

  async function saveRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const movementCount = Number(count);
    const duration = Number(durationMinutes);
    if (!measuredAt || !Number.isFinite(movementCount) || movementCount < 0 || !Number.isFinite(duration) || duration <= 0) {
      setMessage("태동 횟수와 측정 시간을 다시 확인해 주세요.");
      return;
    }
    setPending(true);
    const response = await fetch(`/api/children/${encodeURIComponent(childId)}/pregnancy/fetal-movements`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ measuredAt, durationMinutes: duration, count: movementCount, memo }),
    }).catch(() => null);
    setPending(false);
    if (!response) {
      setMessage("잠시 후 다시 시도해 주세요.");
      return;
    }
    const data = (await response.json().catch(() => null)) as { message?: string; record?: FetalMovementRecordView } | null;
    if (!response.ok || !data?.record) {
      setMessage(data?.message ?? "태동 기록을 저장하지 못했어요.");
      return;
    }
    setRecords((current) => [data.record!, ...current].slice(0, 30));
    setMemo("");
    router.refresh();
  }

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">태동 기록</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">{childName}의 움직임을 짧게 남겨요</h1>
          <p className="mt-2 text-[12px] leading-5 text-slate-600">태동은 개인차가 크기 때문에 기록은 참고용이에요. 평소보다 움직임이 확연히 줄었다고 느껴지면 의료기관에 문의하세요.</p>
        </section>

        <section className="mt-card p-4">
          <h2 className="text-[14px] font-extrabold text-slate-900">최근 태동 기록</h2>
          <p className="mt-2 text-[13px] font-bold text-slate-700">{todayRecord ? `오늘 ${todayRecord.count}회 · ${todayRecord.durationMinutes}분` : "오늘 기록은 아직 없어요."}</p>
        </section>

        <form onSubmit={saveRecord} className="mt-card space-y-3 p-4">
          <h2 className="text-[14px] font-extrabold text-slate-900">새 기록</h2>
          <label className="block text-[12px] font-extrabold text-slate-700" htmlFor="measuredAt">날짜·시간</label>
          <input id="measuredAt" type="datetime-local" value={measuredAt} onChange={(event) => setMeasuredAt(event.target.value)} className="mt-input" />
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[12px] font-extrabold text-slate-700" htmlFor="movementCount">태동 횟수</label>
              <input id="movementCount" inputMode="numeric" value={count} onChange={(event) => setCount(event.target.value.replace(/[^0-9]/g, ""))} className="mt-input mt-2" />
            </div>
            <div>
              <label className="block text-[12px] font-extrabold text-slate-700" htmlFor="durationMinutes">측정 시간</label>
              <input id="durationMinutes" inputMode="numeric" value={durationMinutes} onChange={(event) => setDurationMinutes(event.target.value.replace(/[^0-9]/g, ""))} className="mt-input mt-2" />
            </div>
          </div>
          <label className="block text-[12px] font-extrabold text-slate-700" htmlFor="movementMemo">메모</label>
          <textarea id="movementMemo" value={memo} onChange={(event) => setMemo(event.target.value)} placeholder="예: 저녁에 움직임이 많았음" className="mt-input min-h-24 resize-none" />
          {message ? <p className="rounded-2xl bg-rose-50 px-3 py-2 text-[12px] font-bold text-rose-700">{message}</p> : null}
          <button type="submit" disabled={pending} className="mt-button-primary min-h-11 w-full rounded-2xl px-4 py-3 text-[13px] font-extrabold disabled:opacity-60">{pending ? "저장하는 중" : "저장"}</button>
        </form>

        <section className="mt-simple-list" aria-labelledby="movement-list-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <h2 id="movement-list-title" className="text-[14px] font-extrabold text-slate-900">기록 목록</h2>
          </div>
          {records.length ? records.map((record) => (
            <div key={record.id} className="border-b border-slate-100 px-4 py-3 last:border-b-0">
              <p className="text-[13px] font-extrabold text-slate-900">{formatDateTime(record.measuredAt)} · {record.count}회</p>
              <p className="mt-1 text-[11px] font-bold text-slate-500">{record.durationMinutes}분 측정{record.memo ? ` · ${record.memo}` : ""}</p>
            </div>
          )) : <div className="px-4 py-4 text-[12px] font-bold text-slate-500">아직 태동 기록이 없어요.</div>}
        </section>
      </div>
    </main>
  );
}
