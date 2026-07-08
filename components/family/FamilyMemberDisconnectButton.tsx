"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FamilyMemberDisconnectButton({ memberId, isSelf }: { memberId: string; isSelf: boolean }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function disconnect() {
    const confirmed = window.confirm(
      isSelf
        ? "이 가족 연결에서 나가겠어요? 내 아이 기록은 다른 보호자에게 더 이상 공유되지 않아요."
        : "이 보호자의 가족 연결을 해제할까요? 해당 보호자는 이 가족의 아이 기록을 더 이상 볼 수 없어요.",
    );
    if (!confirmed) return;

    setPending(true);
    setMessage("");

    const response = await fetch(`/api/family/members/${encodeURIComponent(memberId)}/disconnect`, { method: "POST" }).catch(() => null);
    const data = (await response?.json().catch(() => null)) as { message?: string; redirectTo?: string } | null;

    setPending(false);

    if (!response?.ok) {
      setMessage(data?.message ?? "가족 연결을 해제하지 못했어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    router.push(data?.redirectTo ?? "/family?memberDisconnected=1");
    router.refresh();
  }

  return (
    <div className="flex shrink-0 flex-col items-end gap-1">
      <button
        type="button"
        onClick={disconnect}
        disabled={pending}
        className="rounded-full border border-rose-100 bg-rose-50 px-2.5 py-1 text-[11px] font-extrabold text-rose-700 active:scale-[0.98] disabled:opacity-60"
      >
        {pending ? "처리 중" : isSelf ? "내 연결 해제" : "해제"}
      </button>
      {message ? <span className="max-w-[150px] text-right text-[10px] leading-4 text-rose-600">{message}</span> : null}
    </div>
  );
}
