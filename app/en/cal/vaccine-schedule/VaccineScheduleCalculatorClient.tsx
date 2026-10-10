"use client";

import Link from "next/link";
import UsDateInput from "@/components/common/UsDateInput";
import { useMemo, useState } from "react";

type VisitPoint = {
  label: string;
  month: number;
  note: string;
};

const visitPoints: VisitPoint[] = [
  { label: "Birth", month: 0, note: "Review the newborn record and the current CDC child schedule with the birth hospital or pediatric clinician." },
  { label: "Around 2 months", month: 2, note: "A major routine infant immunization visit commonly occurs around this age. Confirm the current schedule and product-specific plan with the clinic." },
  { label: "Around 4 months", month: 4, note: "Routine infant series often continue around this age. Prior doses and products determine what is due." },
  { label: "Around 6 months", month: 6, note: "Review the current CDC schedule, seasonal recommendations, and the child’s prior-dose record rather than relying on a static vaccine list." },
  { label: "Around 12 months", month: 12, note: "The one-year visit is another major immunization checkpoint. Exact vaccines depend on the current schedule and prior doses." },
  { label: "Around 15–18 months", month: 15, note: "Routine series and catch-up needs are reviewed again in this period. The clinic record should be the source of truth." },
];

function parseLocalDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime()) || date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

function addMonthsSafe(date: Date, months: number) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const targetMonthIndex = month + months;
  const targetYear = year + Math.floor(targetMonthIndex / 12);
  const normalizedTargetMonth = ((targetMonthIndex % 12) + 12) % 12;
  const lastDay = new Date(targetYear, normalizedTargetMonth + 1, 0).getDate();
  return new Date(targetYear, normalizedTargetMonth, Math.min(day, lastDay));
}

function dateOnlySerial(date: Date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function diffInDays(from: Date, to: Date) {
  return Math.floor((dateOnlySerial(to) - dateOnlySerial(from)) / 86_400_000);
}

function getMonthDiffWithDayAdjustment(from: Date, to: Date) {
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) months -= 1;
  return Math.max(0, months);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(date);
}

export default function VaccineScheduleCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) return { status: "idle" as const, message: "Enter your child’s birth date to create age-based vaccine planning checkpoints." };
    const birth = parseLocalDate(birthDate);
    if (!birth) return { status: "error" as const, message: "Please check the birth date and try again." };
    if (diffInDays(birth, today) < 0) return { status: "error" as const, message: "Birth date cannot be in the future." };

    const ageMonths = getMonthDiffWithDayAdjustment(birth, today);
    const schedule = visitPoints.map((item) => ({ ...item, date: addMonthsSafe(birth, item.month) }));
    const nextUpcoming = schedule.find((item) => diffInDays(today, item.date) >= -14) ?? null;
    return { status: "ready" as const, ageMonths, schedule, nextUpcoming };
  }, [birthDate, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">U.S. vaccine planning</div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Vaccine Visit Planner</h1>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Use the birth date to organize common pediatric visit checkpoints. This tool intentionally does not hard-code a permanent vaccine list because CDC recommendations, addenda, products, seasonal guidance, and individual catch-up needs can change.
          </p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-semibold text-slate-800">Birth date</label>
                <UsDateInput id="birthDate" label="Birth date" max={new Date().toISOString().split("T")[0]} value={birthDate} onChange={setBirthDate} />
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">Important</div>
                <p className="mt-2">Use your child&apos;s clinic record, state immunization registry, and the current CDC schedule for the actual vaccines and doses due.</p>
              </div>
            </div>
          </section>
        </aside>

        <div className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            {result.status === "idle" && <p className="text-sm leading-7 text-slate-600">{result.message}</p>}
            {result.status === "error" && <p className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-rose-700">{result.message}</p>}
            {result.status === "ready" && (
              <div className="space-y-6">
                <div className="rounded-3xl bg-slate-50 px-5 py-5">
                  <div className="text-sm text-slate-500">Current age</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">{result.ageMonths} months</div>
                  {result.nextUpcoming && <p className="mt-2 text-sm leading-7 text-slate-600">Next planning checkpoint: <span className="font-semibold text-slate-900">{result.nextUpcoming.label}</span> around {formatDate(result.nextUpcoming.date)}.</p>}
                </div>

                <div className="space-y-4">
                  {result.schedule.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-100 bg-white p-5">
                      <div className="text-lg font-bold text-slate-900">{item.label}</div>
                      <div className="mt-1 text-sm font-medium text-slate-500">Planning date: {formatDate(item.date)}</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.note}</p>
                    </div>
                  ))}
                </div>

                <a href="https://www.cdc.gov/vaccines/hcp/imz-schedules/child-schedule-vaccines.html" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Open current CDC child schedule</a>
              </div>
            )}
          </section>

          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">If a dose was missed</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Do not restart a vaccine series just because an interval became longer than recommended. CDC notes that incomplete or unknown histories should be addressed using the current schedule and catch-up guidance.</p>
            <Link href="/en/cal/baby-age" className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline underline-offset-4">Check exact child age</Link>
          </section>
        </div>
      </div>
    </section>
  );
}
