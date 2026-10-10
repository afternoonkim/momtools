"use client";

import Link from "next/link";
import UsDateInput from "@/components/common/UsDateInput";
import { useMemo, useState } from "react";

const AVERAGE_PREGNANCY_DAYS = 280;

function parseLocalDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime()) || date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function formatDate(date: Date | null) {
  if (!date) return "-";
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(date);
}

function formatCompactDate(date: Date | null) {
  if (!date) return "-";
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
}

function trimesterFromGestationalDays(days: number) {
  if (days < 14 * 7) return "First trimester";
  if (days < 28 * 7) return "Second trimester";
  return "Third trimester";
}

export default function DueDateCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [lmp, setLmp] = useState("");

  const result = useMemo(() => {
    if (!lmp) {
      return { status: "idle" as const, message: "Enter the first day of your last menstrual period to estimate your due date and gestational age." };
    }

    const lmpDate = parseLocalDate(lmp);
    if (!lmpDate) return { status: "error" as const, message: "Please check the date and try again." };

    const gestationalDays = diffInDays(lmpDate, today);
    if (gestationalDays < 0) return { status: "error" as const, message: "The last period date cannot be in the future." };
    if (gestationalDays > 330) return { status: "error" as const, message: "That date looks too far back. Please check the last menstrual period date." };

    const dueDate = addDays(lmpDate, AVERAGE_PREGNANCY_DAYS);
    const weeks = Math.floor(gestationalDays / 7);
    const days = gestationalDays % 7;
    const daysUntilDue = diffInDays(today, dueDate);

    const milestones = [
      { label: "8 weeks", date: addDays(lmpDate, 8 * 7), description: "Many patients have an early prenatal visit around this part of the first trimester, depending on the practice and pregnancy history." },
      { label: "12 weeks", date: addDays(lmpDate, 12 * 7), description: "Still within the first trimester; testing and visit timing varies by care plan." },
      { label: "20 weeks", date: addDays(lmpDate, 20 * 7), description: "The detailed fetal anatomy ultrasound is often performed around the mid-pregnancy window." },
      { label: "28 weeks", date: addDays(lmpDate, 28 * 7), description: "The third trimester begins at 28 weeks." },
      { label: "36 weeks", date: addDays(lmpDate, 36 * 7), description: "Late-pregnancy visit frequency and birth planning usually increase around this period." },
      { label: "40 weeks", date: dueDate, description: "Estimated due date based on 280 days from the first day of the LMP." },
    ];

    return {
      status: "ready" as const,
      dueDate,
      weeks,
      days,
      trimester: trimesterFromGestationalDays(gestationalDays),
      daysUntilDue,
      monthLabel: new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(dueDate),
      milestones,
    };
  }, [lmp, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">Pregnancy timeline</div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Due Date Calculator</h1>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Estimate an EDD from the first day of your last menstrual period using the conventional 280-day method. This assumes a typical cycle and should not override first-trimester ultrasound or ART dating.
          </p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="lmp" className="block text-sm font-semibold text-slate-800">First day of your last menstrual period</label>
                <UsDateInput id="lmp" max={new Date().toISOString().split("T")[0]} value={lmp} onChange={setLmp} />
              </div>
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">Good to know</div>
                <ul className="mt-2 space-y-1">
                  <li>• LMP dating starts at 0 weeks, 0 days on the first day of the last menstrual period.</li>
                  <li>• First-trimester ultrasound is the most accurate method to establish or confirm gestational age.</li>
                  <li>• IVF and other ART pregnancies should use the fertility clinic&apos;s dating method.</li>
                </ul>
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
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">Estimated due month</div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{result.monthLabel}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Estimated due date: <span className="font-semibold text-slate-900">{formatDate(result.dueDate)}</span>.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <InfoCard title="Gestational age" value={`${result.weeks}w ${result.days}d`} />
                  <InfoCard title="Trimester" value={result.trimester} />
                  <InfoCard title={result.daysUntilDue >= 0 ? "Days until EDD" : "Days past EDD"} value={`${Math.abs(result.daysUntilDue)} days`} />
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5">
                  <div className="text-sm font-semibold text-slate-800">Planning timeline</div>
                  <div className="mt-4 space-y-4">
                    {result.milestones.map((item) => (
                      <div key={item.label} className="flex flex-col gap-2 rounded-2xl border border-slate-100 px-4 py-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="font-semibold text-slate-800">{item.label}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-500">{item.description}</div>
                        </div>
                        <div className="text-sm font-medium text-slate-700">{formatCompactDate(item.date)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/en/checklists/birth" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Open birth prep checklist</Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return <div className="rounded-3xl bg-slate-50 px-5 py-5"><div className="text-sm text-slate-500">{title}</div><div className="mt-2 text-xl font-bold text-slate-900">{value}</div></div>;
}
