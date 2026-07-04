"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  max?: string;
  label?: string;
};

function splitIso(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return { year: "", month: "", day: "" };
  const [year, month, day] = value.split("-");
  return { year: year ?? "", month: month ?? "", day: day ?? "" };
}

function normalize(value: string, maxLength: number) {
  return value.replace(/[^0-9]/g, "").slice(0, maxLength);
}

function makeIso(year: string, month: string, day: string) {
  if (year.length !== 4 || month.length !== 2 || day.length !== 2) return "";
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);
  if (!y || m < 1 || m > 12 || d < 1 || d > 31) return "";
  const date = new Date(y, m - 1, d);
  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  ) {
    return "";
  }
  return `${year}-${month}-${day}`;
}

function isComplete(year: string, month: string, day: string) {
  return year.length === 4 && month.length === 2 && day.length === 2;
}

export default function UsDateInput({ id, value, onChange, min, max, label = "날짜" }: Props) {
  const initial = useMemo(() => splitIso(value), [value]);
  const [year, setYear] = useState(initial.year);
  const [month, setMonth] = useState(initial.month);
  const [day, setDay] = useState(initial.day);
  const [draftError, setDraftError] = useState("");

  useEffect(() => {
    // 부모 값이 유효한 날짜로 바뀐 경우에만 입력칸을 동기화합니다.
    // 부분 입력 중 onChange("")가 호출되어도 사용자가 입력하던 월/일이 통째로 지워지지 않게 합니다.
    if (!value) return;
    const next = splitIso(value);
    setYear(next.year);
    setMonth(next.month);
    setDay(next.day);
    setDraftError("");
  }, [value]);

  const helperId = `${id}-hint`;
  const errorId = `${id}-error`;

  function commit(next: { year?: string; month?: string; day?: string }) {
    const nextYear = next.year ?? year;
    const nextMonth = next.month ?? month;
    const nextDay = next.day ?? day;

    if (!nextYear && !nextMonth && !nextDay) {
      setDraftError("");
      onChange("");
      return;
    }

    if (!isComplete(nextYear, nextMonth, nextDay)) {
      setDraftError("");
      onChange("");
      return;
    }

    const iso = makeIso(nextYear, nextMonth, nextDay);
    if (!iso) {
      setDraftError("날짜를 다시 확인해 주세요.");
      onChange("");
      return;
    }

    if ((min && iso < min) || (max && iso > max)) {
      setDraftError("선택할 수 있는 날짜 범위를 벗어났어요.");
      onChange("");
      return;
    }

    setDraftError("");
    onChange(iso);
  }

  return (
    <div className="w-full space-y-2">
      <div className="grid w-full min-w-0 grid-cols-[1.25fr_0.85fr_0.85fr] gap-2">
        <input
          id={id}
          inputMode="numeric"
          autoComplete="bday-year"
          placeholder="YYYY"
          aria-label={`${label} 연도`}
          aria-describedby={`${helperId}${draftError ? ` ${errorId}` : ""}`}
          value={year}
          onChange={(e) => {
            const next = normalize(e.target.value, 4);
            setYear(next);
            commit({ year: next });
          }}
          onBlur={() => commit({})}
          className="mt-input min-w-0 px-3 text-center text-[16px]"
        />
        <input
          id={`${id}-month`}
          inputMode="numeric"
          autoComplete="bday-month"
          placeholder="MM"
          aria-label={`${label} 월`}
          aria-describedby={`${helperId}${draftError ? ` ${errorId}` : ""}`}
          value={month}
          onChange={(e) => {
            const next = normalize(e.target.value, 2);
            setMonth(next);
            commit({ month: next });
          }}
          onBlur={() => commit({})}
          className="mt-input min-w-0 px-2 text-center text-[16px]"
        />
        <input
          id={`${id}-day`}
          inputMode="numeric"
          autoComplete="bday-day"
          placeholder="DD"
          aria-label={`${label} 일`}
          aria-describedby={`${helperId}${draftError ? ` ${errorId}` : ""}`}
          value={day}
          onChange={(e) => {
            const next = normalize(e.target.value, 2);
            setDay(next);
            commit({ day: next });
          }}
          onBlur={() => commit({})}
          className="mt-input min-w-0 px-2 text-center text-[16px]"
        />
      </div>
      <p id={helperId} className="text-[12px] leading-5 text-slate-500">
        연도 / 월 / 일은 각각 끝까지 입력해 주세요. 예: 2026 / 03 / 12
      </p>
      {draftError ? (
        <p id={errorId} className="text-[12px] font-bold leading-5 text-rose-600">
          {draftError}
        </p>
      ) : null}
    </div>
  );
}
