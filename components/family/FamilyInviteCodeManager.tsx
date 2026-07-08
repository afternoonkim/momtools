"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, RefreshCw } from "lucide-react";

export default function FamilyInviteCodeManager({ initialCode }: { initialCode: string }) {
  const router = useRouter();
  const [code, setCode] = useState(initialCode);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function copyCode() {
    setMessage("");
    try {
      await navigator.clipboard.writeText(code);
      setMessage("초대 코드를 복사했어요.");
    } catch {
      setMessage("복사가 어렵다면 코드를 길게 눌러 직접 복사해 주세요.");
    }
  }

  async function regenerateCode() {
    const confirmed = window.confirm("초대 코드를 새로 만들까요? 기존 코드는 더 이상 사용할 수 없어요.");
    if (!confirmed) return;

    setPending(true);
    setMessage("");

    const response = await fetch("/api/family/invite-code", { method: "POST" }).catch(() => null);
    const data = (await response?.json().catch(() => null)) as { inviteCode?: string; message?: string } | null;

    setPending(false);

    if (!response?.ok || !data?.inviteCode) {
      setMessage(data?.message ?? "초대 코드를 새로 만들지 못했어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    setCode(data.inviteCode);
    setMessage("새 초대 코드가 만들어졌어요. 이전 코드는 사용할 수 없어요.");
    router.refresh();
  }

  return (
    <div className="px-4 py-4 text-center">
      <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-[24px] font-black tracking-[0.22em] text-amber-900">
        {code}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" onClick={copyCode} className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl border border-amber-100 bg-white px-3 text-[12px] font-extrabold text-amber-800 active:scale-[0.98]">
          <Copy size={13} aria-hidden /> 복사
        </button>
        <button type="button" onClick={regenerateCode} disabled={pending} className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3 text-[12px] font-extrabold text-slate-700 active:scale-[0.98] disabled:opacity-60">
          <RefreshCw size={13} aria-hidden /> {pending ? "변경 중" : "재발급"}
        </button>
      </div>
      <p className="mt-2 text-[12px] leading-5 text-slate-500">초대 코드는 가족끼리만 공유해 주세요. 코드가 노출됐다고 느껴지면 바로 재발급하면 돼요.</p>
      {message ? <p className="mt-2 rounded-2xl bg-slate-50 px-3 py-2 text-[12px] font-bold leading-5 text-slate-700">{message}</p> : null}
    </div>
  );
}
