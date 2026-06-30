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
  if (!value) return { year: "", month: "", day: "" };
  const [year, month, day] = value.split("-");
  return { year: year ?? "", month: month ?? "", day: day ?? "" };
}

function normalize(value: string, maxLength: number) {
  return value.replace(/[^0-9]/g, "").slice(0, maxLength);
}

function makeIso(year: string, month: string, day: string) {
  if (year.length !== 4 || month.length < 1 || day.length < 1) return "";
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
  return `${year}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export default function UsDateInput({ id, value, onChange, min, max, label = "날짜" }: Props) {
  const initial = useMemo(() => splitIso(value), [value]);
  const [year, setYear] = useState(initial.year);
  const [month, setMonth] = useState(initial.month);
  const [day, setDay] = useState(initial.day);

  useEffect(() => {
    const next = splitIso(value);
    setYear(next.year);
    setMonth(next.month);
    setDay(next.day);
  }, [value]);

  const helperId = `${id}-hint`;

  function commit(next: { year?: string; month?: string; day?: string }) {
    const nextYear = next.year ?? year;
    const nextMonth = next.month ?? month;
    const nextDay = next.day ?? day;
    const iso = makeIso(nextYear, nextMonth, nextDay);
    if (!iso || (min && iso < min) || (max && iso > max)) {
      onChange("");
      return;
    }
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
          aria-describedby={helperId}
          value={year}
          onChange={(e) => {
            const next = normalize(e.target.value, 4);
            setYear(next);
            commit({ year: next });
          }}
          className="mt-input min-w-0 px-3 text-center text-[16px]"
        />
        <input
          id={`${id}-month`}
          inputMode="numeric"
          autoComplete="bday-month"
          placeholder="MM"
          aria-label={`${label} 월`}
          aria-describedby={helperId}
          value={month}
          onChange={(e) => {
            const next = normalize(e.target.value, 2);
            setMonth(next);
            commit({ month: next });
          }}
          className="mt-input min-w-0 px-2 text-center text-[16px]"
        />
        <input
          id={`${id}-day`}
          inputMode="numeric"
          autoComplete="bday-day"
          placeholder="DD"
          aria-label={`${label} 일`}
          aria-describedby={helperId}
          value={day}
          onChange={(e) => {
            const next = normalize(e.target.value, 2);
            setDay(next);
            commit({ day: next });
          }}
          className="mt-input min-w-0 px-2 text-center text-[16px]"
        />
      </div>
      <p id={helperId} className="text-[12px] leading-5 text-slate-500">
        연도 / 월 / 일 순서로 입력하세요. 예: 2026 / 03 / 15
      </p>
    </div>
  );
}
