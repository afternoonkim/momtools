"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function FamilyInviteForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [role, setRole] = useState("CAREGIVER");
  const [connectOwnChildren, setConnectOwnChildren] = useState(true);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");

    const response = await fetch("/api/family/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, role, connectOwnChildren }),
    }).catch(() => null);

    setPending(false);

    const data = (await response?.json().catch(() => null)) as { message?: string; redirectTo?: string } | null;
    if (!response?.ok) {
      setMessage(data?.message ?? "가족 연결을 완료하지 못했어요. 초대 코드를 다시 확인해 주세요.");
      return;
    }

    router.push(data?.redirectTo ?? "/family?joined=1");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label className="block">
        <span className="text-[12px] font-extrabold text-slate-700">가족 초대 코드</span>
        <input
          value={code}
          onChange={(event) => setCode(event.target.value.toUpperCase())}
          inputMode="text"
          autoCapitalize="characters"
          placeholder="예: AB12CD34"
          className="mt-input mt-1 text-center font-extrabold tracking-[0.18em]"
        />
      </label>

      <fieldset className="space-y-2">
        <legend className="text-[12px] font-extrabold text-slate-700">나는 아이에게</legend>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["MOTHER", "엄마"],
            ["FATHER", "아빠"],
            ["CAREGIVER", "보호자"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setRole(value)}
              className={`rounded-2xl border px-2 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                role === value ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="flex items-start gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-700">
        <input
          type="checkbox"
          checked={connectOwnChildren}
          onChange={(event) => setConnectOwnChildren(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300"
        />
        <span>이미 등록한 아이도 이 가족에 함께 연결할게요.</span>
      </label>

      {message ? <p className="rounded-2xl bg-rose-50 px-3 py-2 text-[12px] font-bold leading-5 text-rose-700">{message}</p> : null}

      <button type="submit" disabled={pending || code.trim().length < 6} className="mt-button-primary w-full disabled:opacity-60">
        {pending ? "연결 중..." : "가족 데이터 연결하기"}
      </button>
    </form>
  );
}
