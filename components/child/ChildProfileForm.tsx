"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import UsDateInput from "@/components/common/UsDateInput";

export default function ChildProfileForm({ submitLabel = "아이 정보 저장하기" }: { submitLabel?: string }) {
  const router = useRouter();
  const maxDate = useMemo(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  }, []);
  const [nickname, setNickname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [useCorrectedAge, setUseCorrectedAge] = useState(false);
  const [expectedDueDate, setExpectedDueDate] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!birthDate) {
      setMessage("아이 생년월일을 입력해 주세요.");
      return;
    }

    if (useCorrectedAge && !expectedDueDate) {
      setMessage("예정일을 입력해 주세요.");
      return;
    }

    setPending(true);
    const response = await fetch("/api/children", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname, birthDate, gender, useCorrectedAge, expectedDueDate }),
    }).catch(() => null);
    setPending(false);

    if (!response) {
      setMessage("잠시 후 다시 시도해 주세요.");
      return;
    }

    const data = (await response.json().catch(() => null)) as { message?: string; redirectTo?: string } | null;
    if (!response.ok) {
      setMessage(data?.message ?? "아이 정보를 저장하지 못했어요.");
      return;
    }

    router.replace(data?.redirectTo ?? "/my");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mt-card p-4 md:p-5">
        <label htmlFor="childNickname" className="block text-sm font-extrabold text-slate-900">
          아이 표시 이름 <span className="text-xs font-semibold text-slate-400">선택</span>
        </label>
        <input
          id="childNickname"
          value={nickname}
          maxLength={30}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="예: 우리 아이, 첫째, 하윤이"
          className="mt-input mt-3"
        />
        <p className="mt-2 text-[12px] leading-5 text-slate-500">실명을 입력하지 않아도 괜찮아요. 화면에 보여줄 이름만 적어주세요.</p>
      </div>

      <div className="mt-card p-4 md:p-5">
        <label htmlFor="childBirthDate" className="block text-sm font-extrabold text-slate-900">
          아이 생년월일 <span className="text-amber-600">필수</span>
        </label>
        <div className="mt-3">
          <UsDateInput id="childBirthDate" label="아이 생년월일" value={birthDate} max={maxDate} onChange={setBirthDate} />
        </div>
      </div>

      <div className="mt-card p-4 md:p-5">
        <label htmlFor="childGender" className="block text-sm font-extrabold text-slate-900">
          성별 <span className="text-xs font-semibold text-slate-400">선택</span>
        </label>
        <select id="childGender" value={gender} onChange={(event) => setGender(event.target.value)} className="mt-input mt-3">
          <option value="">선택하지 않음</option>
          <option value="FEMALE">여아</option>
          <option value="MALE">남아</option>
          <option value="UNKNOWN">아직 정하지 않음</option>
        </select>
      </div>

      <div className="mt-card p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-extrabold text-slate-900">예정일보다 일찍 태어났나요?</p>
            <p className="mt-1 text-[12px] leading-5 text-slate-500">이른둥이는 발달 체크에서 교정 월령을 함께 참고하면 불필요한 걱정을 줄이는 데 도움이 돼요.</p>
          </div>
          <button
            type="button"
            aria-pressed={useCorrectedAge}
            onClick={() => setUseCorrectedAge((current) => !current)}
            className={`shrink-0 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
              useCorrectedAge ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            {useCorrectedAge ? "네" : "아니요"}
          </button>
        </div>

        {useCorrectedAge ? (
          <div className="mt-4">
            <label htmlFor="childExpectedDueDate" className="block text-[13px] font-extrabold text-slate-800">
              출산 예정일
            </label>
            <div className="mt-2">
              <UsDateInput
                id="childExpectedDueDate"
                label="출산 예정일"
                value={expectedDueDate}
                min={birthDate || undefined}
                onChange={setExpectedDueDate}
              />
            </div>
            <p className="mt-2 text-[12px] leading-5 text-slate-500">발달 체크에서 실제 월령과 교정 월령을 함께 보여드릴게요. 24개월 전후까지만 참고용으로 사용해요.</p>
          </div>
        ) : null}
      </div>

      {message ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-[13px] font-bold leading-6 text-rose-700">{message}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-button-primary min-h-12 w-full rounded-2xl px-4 py-3 text-sm font-extrabold transition active:scale-[0.99] disabled:opacity-60"
      >
        {pending ? "저장하는 중" : submitLabel}
      </button>
    </form>
  );
}
