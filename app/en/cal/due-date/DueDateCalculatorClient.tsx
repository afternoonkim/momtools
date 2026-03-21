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
  return Number.isNaN(date.getTime()) ? null : date;
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
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

function formatCompactDate(date: Date | null) {
  if (!date) return "-";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function trimesterFromWeek(week: number) {
  if (week < 14) return "First trimester";
  if (week < 28) return "Second trimester";
  return "Third trimester";
}

export default function DueDateCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [lmp, setLmp] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const result = useMemo(() => {
    if (!lmp) {
      return {
        status: "idle" as const,
        message:
          "Enter the first day of your last menstrual period to estimate your due date and current pregnancy week.",
      };
    }

    const lmpDate = parseLocalDate(lmp);
    if (!lmpDate) {
      return { status: "error" as const, message: "Please check the date and try again." };
    }

    const daysFromLmp = diffInDays(lmpDate, today);
    if (daysFromLmp < 0) {
      return { status: "error" as const, message: "The last period date cannot be in the future." };
    }
    if (daysFromLmp > 330) {
      return {
        status: "error" as const,
        message: "That date looks too far back. Please enter a more recent last period date.",
      };
    }

    const dueDate = addDays(lmpDate, AVERAGE_PREGNANCY_DAYS + (cycleLength - 28));
    const gestationalDays = Math.max(0, daysFromLmp);
    const weeks = Math.floor(gestationalDays / 7) + 1;
    const days = gestationalDays % 7;
    const daysUntilDue = diffInDays(today, dueDate);

    const milestones = [
      {
        label: "8 weeks",
        date: addDays(lmpDate, 7 * 7),
        description: "A first prenatal visit often happens around this point.",
      },
      {
        label: "12 weeks",
        date: addDays(lmpDate, 11 * 7),
        description: "The first trimester is almost complete.",
      },
      {
        label: "20 weeks",
        date: addDays(lmpDate, 19 * 7),
        description: "The anatomy scan is commonly scheduled around this time.",
      },
      {
        label: "28 weeks",
        date: addDays(lmpDate, 27 * 7),
        description: "Third trimester planning usually begins here.",
      },
      {
        label: "36 weeks",
        date: addDays(lmpDate, 35 * 7),
        description: "Many parents finalize hospital bags and delivery plans.",
      },
      {
        label: "40 weeks",
        date: dueDate,
        description: "Estimated due date based on a 40-week pregnancy.",
      },
    ];

    return {
      status: "ready" as const,
      dueDate,
      weeks,
      days,
      trimester: trimesterFromWeek(weeks),
      daysUntilDue,
      monthLabel: new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(dueDate),
      milestones,
    };
  }, [lmp, cycleLength, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              Pregnancy timeline
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Due Date Calculator
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Use your last menstrual period and average cycle length to estimate your due date,
              current week of pregnancy, and the milestones parents commonly plan around in the US.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">Helpful next step</div>
            <p className="mt-2">
              Once your due date looks right, save your first prenatal visit and anatomy scan
              window. You can later use the{" "}
              <Link
                href="/en/cal/baby-age"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                baby age calculator
              </Link>{" "}
              for newborn milestones.
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Enter your dates</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Most due date estimates start with the first day of your last period.
                  Cycle length slightly shifts the estimate if your cycles are usually shorter
                  or longer than 28 days.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="lmp" className="block text-sm font-semibold text-slate-800">
                  First day of your last period
                </label>
                <UsDateInput
                  id="lmp"
                  max={new Date().toISOString().split("T")[0]}
                  value={lmp}
                  onChange={setLmp}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="cycleLength" className="block text-sm font-semibold text-slate-800">
                  Average cycle length
                </label>
                <input
                  id="cycleLength"
                  type="range"
                  min={21}
                  max={40}
                  step={1}
                  value={cycleLength}
                  onChange={(e) => setCycleLength(Number(e.target.value))}
                  className="w-full"
                />
                <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                  {cycleLength} days
                </div>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">Good to know</div>
                <ul className="mt-2 space-y-1">
                  <li>• This is an estimate, not a diagnosis.</li>
                  <li>• Ultrasound dating may adjust your due date.</li>
                  <li>• Call your OB office sooner if you have pain, bleeding, or severe symptoms.</li>
                </ul>
              </div>
            </div>
          </section>
        </aside>

        <div className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            {result.status === "idle" && (
              <p className="text-sm leading-7 text-slate-600">{result.message}</p>
            )}
            {result.status === "error" && (
              <p className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-rose-700">
                {result.message}
              </p>
            )}
            {result.status === "ready" && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                    Estimated due month
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{result.monthLabel}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Your estimated due date is{" "}
                    <span className="font-semibold text-slate-900">{formatDate(result.dueDate)}</span>.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <InfoCard title="Pregnancy week" value={`${result.weeks}w ${result.days}d`} />
                  <InfoCard title="Trimester" value={result.trimester} />
                  <InfoCard
                    title={result.daysUntilDue >= 0 ? "Days until due date" : "Days past due date"}
                    value={`${Math.abs(result.daysUntilDue)} days`}
                  />
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5">
                  <div className="text-sm font-semibold text-slate-800">Timeline</div>
                  <div className="mt-4 space-y-4">
                    {result.milestones.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col gap-2 rounded-2xl border border-slate-100 px-4 py-4 md:flex-row md:items-center md:justify-between"
                      >
                        <div>
                          <div className="font-semibold text-slate-800">{item.label}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-500">
                            {item.description}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-slate-700">
                          {formatCompactDate(item.date)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl bg-slate-50 px-5 py-5">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold text-slate-900">{value}</div>
    </div>
  );
}
