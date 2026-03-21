"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  max?: string;
};

function splitIso(value: string) {
  if (!value) return { month: "", day: "", year: "" };
  const [year, month, day] = value.split("-");
  return { month: month ?? "", day: day ?? "", year: year ?? "" };
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
    date.getFullYear() != y ||
    date.getMonth() != m - 1 ||
    date.getDate() != d
  ) {
    return "";
  }
  return `${year}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export default function UsDateInput({ id, value, onChange, min, max }: Props) {
  const initial = useMemo(() => splitIso(value), [value]);
  const [month, setMonth] = useState(initial.month);
  const [day, setDay] = useState(initial.day);
  const [year, setYear] = useState(initial.year);

  useEffect(() => {
    const next = splitIso(value);
    setMonth(next.month);
    setDay(next.day);
    setYear(next.year);
  }, [value]);

  const helperId = `${id}-hint`;

  function commit(next: { month?: string; day?: string; year?: string }) {
    const nextMonth = next.month ?? month;
    const nextDay = next.day ?? day;
    const nextYear = next.year ?? year;
    const iso = makeIso(nextYear, nextMonth, nextDay);
    if (!iso) {
      onChange("");
      return;
    }
    if (min && iso < min) {
      onChange("");
      return;
    }
    if (max && iso > max) {
      onChange("");
      return;
    }
    onChange(iso);
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-3">
        <input
          id={`${id}-month`}
          inputMode="numeric"
          autoComplete="bday-month"
          placeholder="MM"
          aria-label="Month"
          aria-describedby={helperId}
          value={month}
          onChange={(e) => {
            const next = normalize(e.target.value, 2);
            setMonth(next);
            commit({ month: next });
          }}
          className="mt-input text-center"
        />
        <input
          id={`${id}-day`}
          inputMode="numeric"
          autoComplete="bday-day"
          placeholder="DD"
          aria-label="Day"
          aria-describedby={helperId}
          value={day}
          onChange={(e) => {
            const next = normalize(e.target.value, 2);
            setDay(next);
            commit({ day: next });
          }}
          className="mt-input text-center"
        />
        <input
          id={id}
          inputMode="numeric"
          autoComplete="bday-year"
          placeholder="YYYY"
          aria-label="Year"
          aria-describedby={helperId}
          value={year}
          onChange={(e) => {
            const next = normalize(e.target.value, 4);
            setYear(next);
            commit({ year: next });
          }}
          className="mt-input text-center"
        />
      </div>
      <p id={helperId} className="text-xs leading-6 text-slate-500">
        Enter the date in U.S. format: MM / DD / YYYY
      </p>
    </div>
  );
}
