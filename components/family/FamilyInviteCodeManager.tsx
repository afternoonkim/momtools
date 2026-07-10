"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, RefreshCw, Send } from "lucide-react";

function getInviteLink(code: string) {
  if (typeof window === "undefined") return `/family?inviteCode=${encodeURIComponent(code)}`;
  return `${window.location.origin}/family?inviteCode=${encodeURIComponent(code)}`;
}

export default function FamilyInviteCodeManager({ initialCode }: { initialCode: string }) {
  const router = useRouter();
  const [code, setCode] = useState(initialCode);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const inviteLink = useMemo(() => getInviteLink(code), [code]);

  async function copyText(value: string, successMessage: string) {
    setMessage("");
    try {
      await navigator.clipboard.writeText(value);
      setMessage(successMessage);
    } catch {
      setMessage("복사가 어렵다면 코드를 길게 눌러 직접 복사해 주세요.");
    }
  }

  async function shareInvite() {
    setMessage("");
    const text = `MomTools 가족 초대 코드: ${code}\n${inviteLink}`;
    const share = typeof navigator !== "undefined" ? (navigator as Navigator & { share?: (data: { title?: string; text?: string; url?: string }) => Promise<void> }).share : undefined;
    if (share) {
      try {
        await share({ title: "MomTools 가족 초대", text, url: inviteLink });
        setMessage("초대 내용을 공유했어요.");
        return;
      } catch {
        // 사용자가 공유창을 닫은 경우에도 아래 복사로 이어지게 둡니다.
      }
    }
    await copyText(text, "초대 코드와 링크를 복사했어요. 카톡이나 문자로 보내주세요.");
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
    <div className="px-4 py-4">
      <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-center">
        <p className="text-[11px] font-extrabold text-amber-800">상대에게 전달할 초대 코드</p>
        <div className="mt-1 text-[24px] font-black tracking-[0.22em] text-amber-950">{code}</div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => copyText(code, "초대 코드를 복사했어요.")}
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl border border-amber-100 bg-white px-3 text-[12px] font-extrabold text-amber-800 active:scale-[0.98]"
        >
          <Copy size={13} aria-hidden /> 코드 복사
        </button>
        <button
          type="button"
          onClick={shareInvite}
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl border border-amber-200 bg-amber-500 px-3 text-[12px] font-extrabold text-white active:scale-[0.98]"
        >
          <Send size={13} aria-hidden /> 초대 보내기
        </button>
      </div>

      <button
        type="button"
        onClick={regenerateCode}
        disabled={pending}
        className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3 text-[12px] font-extrabold text-slate-700 active:scale-[0.98] disabled:opacity-60"
      >
        <RefreshCw size={13} aria-hidden /> {pending ? "새 코드 만드는 중" : "초대 코드 재발급"}
      </button>

      <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-[12px] leading-5 text-slate-600">
        <strong className="block text-slate-800">상대방은 이렇게 연결해요</strong>
        카카오 로그인 후 이 페이지에서 초대 코드를 입력하면 같은 아이 홈, 발달 체크, 이유식 기록, 예방접종 체크를 함께 볼 수 있어요.
      </div>

      {message ? <p className="mt-2 rounded-2xl bg-slate-50 px-3 py-2 text-[12px] font-bold leading-5 text-slate-700">{message}</p> : null}
    </div>
  );
}
