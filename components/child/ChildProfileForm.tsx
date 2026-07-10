"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import UsDateInput from "@/components/common/UsDateInput";

type ChildStatus = "pregnancy" | "born";

export default function ChildProfileForm({ submitLabel = "아이 정보 저장하기" }: { submitLabel?: string }) {
  const router = useRouter();
  const maxDate = useMemo(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  }, []);
  const [status, setStatus] = useState<ChildStatus>("born");
  const [nickname, setNickname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [birthOrder, setBirthOrder] = useState("1");
  const [hospital, setHospital] = useState("");
  const [city, setCity] = useState("");
  const [useCorrectedAge, setUseCorrectedAge] = useState(false);
  const [expectedDueDate, setExpectedDueDate] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!nickname.trim()) {
      setMessage(status === "pregnancy" ? "태명이나 아이 이름을 입력해 주세요." : "아이 표시 이름을 입력해 주세요.");
      return;
    }

    if (status === "pregnancy" && !expectedDueDate) {
      setMessage("출산예정일을 입력해 주세요.");
      return;
    }

    if (status === "born" && !birthDate) {
      setMessage("아이 생년월일을 입력해 주세요.");
      return;
    }

    if (status === "born" && useCorrectedAge && !expectedDueDate) {
      setMessage("출산 예정일을 입력해 주세요.");
      return;
    }

    setPending(true);
    const response = await fetch("/api/children", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status,
        nickname,
        birthDate: status === "born" ? birthDate : "",
        gender,
        birthOrder: Number(birthOrder) || 1,
        hospital,
        city,
        useCorrectedAge: status === "born" ? useCorrectedAge : false,
        expectedDueDate,
      }),
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
        <p className="text-sm font-extrabold text-slate-900">지금 상태를 선택해 주세요</p>
        <p className="mt-1 text-[12px] leading-5 text-slate-500">출산 전이면 예정일 기준 임신 홈을, 출생일이 있으면 육아 홈을 보여드려요.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { value: "pregnancy", label: "출산 전" },
            { value: "born", label: "출산 후" },
          ].map((item) => {
            const selected = status === item.value;
            return (
              <button
                key={item.value}
                type="button"
                aria-pressed={selected}
                data-mt-selected={selected ? "true" : "false"}
                onClick={() => setStatus(item.value as ChildStatus)}
                className={`mt-choice-button rounded-2xl border px-3 py-3 text-[13px] font-extrabold transition active:scale-[0.99] ${
                  selected ? "border-amber-300 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-card p-4 md:p-5">
        <label htmlFor="childNickname" className="block text-sm font-extrabold text-slate-900">
          아이 이름 또는 태명 <span className="text-amber-600">필수</span>
        </label>
        <input
          id="childNickname"
          value={nickname}
          maxLength={30}
          onChange={(event) => setNickname(event.target.value)}
          placeholder={status === "pregnancy" ? "예: 콩콩이, 우리 아기" : "예: 하윤이, 첫째"}
          className="mt-input mt-3"
        />
        <p className="mt-2 text-[12px] leading-5 text-slate-500">화면에 보여줄 이름만 적어도 괜찮아요.</p>
      </div>

      <div className="mt-card p-4 md:p-5">
        <label htmlFor="childBirthOrder" className="block text-sm font-extrabold text-slate-900">
          첫째/둘째 여부 <span className="text-amber-600">필수</span>
        </label>
        <select id="childBirthOrder" value={birthOrder} onChange={(event) => setBirthOrder(event.target.value)} className="mt-input mt-3">
          <option value="1">첫째</option>
          <option value="2">둘째</option>
          <option value="3">셋째</option>
          <option value="4">넷째 이상</option>
        </select>
      </div>

      <div className="mt-card p-4 md:p-5">
        <label htmlFor="childExpectedDueDate" className="block text-sm font-extrabold text-slate-900">
          출산예정일 <span className="text-amber-600">{status === "pregnancy" ? "필수" : "선택"}</span>
        </label>
        <div className="mt-3">
          <UsDateInput
            id="childExpectedDueDate"
            label="출산예정일"
            value={expectedDueDate}
            min={status === "pregnancy" ? maxDate : undefined}
            onChange={setExpectedDueDate}
          />
        </div>
        <p className="mt-2 text-[12px] leading-5 text-slate-500">
          {status === "pregnancy" ? "예정일을 기준으로 임신 주차와 산전검진 흐름을 보여드려요." : "이른둥이 교정 월령을 참고할 때만 입력해도 괜찮아요."}
        </p>
      </div>

      {status === "born" ? (
        <div className="mt-card p-4 md:p-5">
          <label htmlFor="childBirthDate" className="block text-sm font-extrabold text-slate-900">
            아이 생년월일 <span className="text-amber-600">필수</span>
          </label>
          <div className="mt-3">
            <UsDateInput id="childBirthDate" label="아이 생년월일" value={birthDate} max={maxDate} onChange={setBirthDate} />
          </div>
        </div>
      ) : null}

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
        <label htmlFor="childHospital" className="block text-sm font-extrabold text-slate-900">
          병원명·거주지역 <span className="text-xs font-semibold text-slate-400">선택</span>
        </label>
        <input id="childHospital" value={hospital} maxLength={40} onChange={(event) => setHospital(event.target.value)} placeholder="예: 다니는 병원명" className="mt-input mt-3" />
        <input id="childCity" value={city} maxLength={40} onChange={(event) => setCity(event.target.value)} placeholder="예: 서울, 경기 수원" className="mt-input mt-2" />
      </div>

      {status === "born" ? (
        <div className="mt-card p-4 md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-extrabold text-slate-900">예정일보다 일찍 태어났나요?</p>
              <p className="mt-1 text-[12px] leading-5 text-slate-500">이른둥이는 발달 체크에서 교정 월령을 함께 참고하면 불필요한 걱정을 줄이는 데 도움이 돼요.</p>
            </div>
            <button
              type="button"
              aria-pressed={useCorrectedAge}
              data-mt-selected={useCorrectedAge ? "true" : "false"}
              onClick={() => setUseCorrectedAge((current) => !current)}
              className={`mt-choice-button shrink-0 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                useCorrectedAge ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {useCorrectedAge ? "네" : "아니요"}
            </button>
          </div>
        </div>
      ) : null}

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
