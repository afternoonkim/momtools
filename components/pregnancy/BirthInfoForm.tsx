"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import UsDateInput from "@/components/common/UsDateInput";

type BirthInfoFormProps = {
  childId: string;
  childName: string;
  initialBirthDate?: string;
};

function todayDateInputValue() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

export default function BirthInfoForm({ childId, childName, initialBirthDate = "" }: BirthInfoFormProps) {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState(initialBirthDate);
  const [birthTime, setBirthTime] = useState("");
  const [birthWeightGram, setBirthWeightGram] = useState("");
  const [birthHeightCm, setBirthHeightCm] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    if (!birthDate) {
      setMessage("출생일을 입력해 주세요.");
      return;
    }
    setPending(true);
    const response = await fetch(`/api/children/${encodeURIComponent(childId)}/birth`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ birthDate, birthTime, birthWeightGram, birthHeightCm }),
    }).catch(() => null);
    setPending(false);

    if (!response) {
      setMessage("잠시 후 다시 시도해 주세요.");
      return;
    }
    const data = (await response.json().catch(() => null)) as { message?: string; redirectTo?: string } | null;
    if (!response.ok) {
      setMessage(data?.message ?? "출생정보를 저장하지 못했어요.");
      return;
    }
    router.replace(data?.redirectTo ?? `/my?childId=${childId}`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <section className="mt-card p-4">
        <span className="mt-badge">출생정보 입력</span>
        <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">{childName}의 출생일을 입력해 주세요</h1>
        <p className="mt-2 text-[12px] leading-5 text-slate-600">출생일을 저장하면 예방접종, 월령 가이드, 이유식 기록, 발달 체크가 출생일 기준으로 전환돼요.</p>
      </section>

      <section className="mt-card p-4">
        <label htmlFor="birthDate" className="block text-sm font-extrabold text-slate-900">출생일 <span className="text-amber-600">필수</span></label>
        <div className="mt-3">
          <UsDateInput id="birthDate" label="출생일" value={birthDate} max={todayDateInputValue()} onChange={setBirthDate} />
        </div>
      </section>

      <section className="mt-card p-4">
        <label htmlFor="birthTime" className="block text-sm font-extrabold text-slate-900">출생 시간 <span className="text-xs font-semibold text-slate-400">선택</span></label>
        <input id="birthTime" type="time" value={birthTime} onChange={(event) => setBirthTime(event.target.value)} className="mt-input mt-3" />
      </section>

      <section className="mt-card p-4">
        <label htmlFor="birthWeight" className="block text-sm font-extrabold text-slate-900">출생 체중·키 <span className="text-xs font-semibold text-slate-400">선택</span></label>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <input id="birthWeight" inputMode="numeric" value={birthWeightGram} onChange={(event) => setBirthWeightGram(event.target.value.replace(/[^0-9]/g, ""))} placeholder="체중 g" className="mt-input" />
          <input inputMode="decimal" value={birthHeightCm} onChange={(event) => setBirthHeightCm(event.target.value.replace(/[^0-9.]/g, ""))} placeholder="키 cm" className="mt-input" />
        </div>
      </section>

      {message ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-[13px] font-bold leading-6 text-rose-700">{message}</p> : null}

      <button type="submit" disabled={pending} className="mt-button-primary min-h-12 w-full rounded-2xl px-4 py-3 text-sm font-extrabold transition active:scale-[0.99] disabled:opacity-60">
        {pending ? "저장하는 중" : "출생정보 저장하기"}
      </button>
    </form>
  );
}
