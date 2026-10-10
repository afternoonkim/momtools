"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

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

function toLocalIso(date: Date) {
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function resolveMax(max?: string) {
  if (!max) return undefined;
  const now = new Date();
  const utcToday = now.toISOString().slice(0, 10);
  return max === utcToday ? toLocalIso(now) : max;
}

export default function UsDateInput({ id, value, onChange, min, max, label = "날짜" }: Props) {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const initial = useMemo(() => splitIso(value), [value]);
  const [year, setYear] = useState(initial.year);
  const [month, setMonth] = useState(initial.month);
  const [day, setDay] = useState(initial.day);
  const [hasDraftError, setHasDraftError] = useState(false);
  const isBirthDate = /birth/i.test(id);

  useEffect(() => {
    if (!value) return;
    const next = splitIso(value);
    setYear(next.year);
    setMonth(next.month);
    setDay(next.day);
    setHasDraftError(false);
  }, [value]);

  const helperId = `${id}-hint`;
  const errorId = `${id}-error`;
  const yearLabel = isEnglish ? `${label} year` : `${label} 연도`;
  const monthLabel = isEnglish ? `${label} month` : `${label} 월`;
  const dayLabel = isEnglish ? `${label} day` : `${label} 일`;
  const helperText = isEnglish
    ? "Enter all three fields: year / month / day. Example: 2026 / 03 / 12"
    : "연도 / 월 / 일은 각각 끝까지 입력해 주세요. 예: 2026 / 03 / 12";
  const invalidText = isEnglish ? "Please check the date and try again." : "날짜를 다시 확인해 주세요.";
  const rangeText = isEnglish ? "That date is outside the allowed range." : "선택할 수 있는 날짜 범위를 벗어났어요.";

  function commit(next: { year?: string; month?: string; day?: string }) {
    const nextYear = next.year ?? year;
    const nextMonth = next.month ?? month;
    const nextDay = next.day ?? day;

    if (!nextYear && !nextMonth && !nextDay) {
      setHasDraftError(false);
      onChange("");
      return;
    }

    if (!isComplete(nextYear, nextMonth, nextDay)) {
      setHasDraftError(false);
      onChange("");
      return;
    }

    const iso = makeIso(nextYear, nextMonth, nextDay);
    if (!iso) {
      setHasDraftError(true);
      onChange("");
      return;
    }

    const effectiveMax = resolveMax(max);
    if ((min && iso < min) || (effectiveMax && iso > effectiveMax)) {
      setHasDraftError(true);
      onChange("");
      return;
    }

    setHasDraftError(false);
    onChange(iso);
  }

  const errorText = (() => {
    if (!hasDraftError) return "";
    const iso = makeIso(year, month, day);
    if (!iso) return invalidText;
    const effectiveMax = resolveMax(max);
    if ((min && iso < min) || (effectiveMax && iso > effectiveMax)) return rangeText;
    return invalidText;
  })();

  return (
    <div className="w-full space-y-2">
      <div className="grid w-full min-w-0 grid-cols-[1.25fr_0.85fr_0.85fr] gap-2">
        <input
          id={id}
          inputMode="numeric"
          autoComplete={isBirthDate ? "bday-year" : "off"}
          placeholder="YYYY"
          aria-label={yearLabel}
          aria-describedby={`${helperId}${errorText ? ` ${errorId}` : ""}`}
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
          autoComplete={isBirthDate ? "bday-month" : "off"}
          placeholder="MM"
          aria-label={monthLabel}
          aria-describedby={`${helperId}${errorText ? ` ${errorId}` : ""}`}
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
          autoComplete={isBirthDate ? "bday-day" : "off"}
          placeholder="DD"
          aria-label={dayLabel}
          aria-describedby={`${helperId}${errorText ? ` ${errorId}` : ""}`}
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
        {helperText}
      </p>
      {errorText ? (
        <p id={errorId} className="text-[12px] font-bold leading-5 text-rose-600">
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
