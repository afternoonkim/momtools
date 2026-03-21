"use client";

import Link from "next/link";
import UsDateInput from "@/components/common/UsDateInput";
import { useMemo, useState } from "react";

function parseLocalDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function getMonthDiffWithDayAdjustment(from: Date, to: Date) {
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) months -= 1;
  return Math.max(0, months);
}

function addMonthsSafe(date: Date, months: number) {
  const target = new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
  if (target.getDate() !== date.getDate()) {
    return new Date(target.getFullYear(), target.getMonth() + 1, 0);
  }
  return target;
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

function stageLabel(months: number) {
  if (months < 1) return "Newborn";
  if (months < 3) return "Early infant";
  if (months < 6) return "Infant";
  if (months < 12) return "Older baby";
  if (months < 24) return "Toddler";
  return "Young child";
}

const milestoneMonths = [2, 4, 6, 9, 12, 18, 24];

export default function BabyAgeCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message:
          "Enter your baby’s birth date to see their exact age and the next milestone checkpoint.",
      };
    }

    const birth = parseLocalDate(birthDate);
    if (!birth) {
      return { status: "error" as const, message: "Please check the birth date and try again." };
    }

    const livedDays = diffInDays(birth, today);
    if (livedDays < 0) {
      return { status: "error" as const, message: "Birth date cannot be in the future." };
    }

    const months = getMonthDiffWithDayAdjustment(birth, today);
    const weeks = Math.floor(livedDays / 7);
    const stage = stageLabel(months);
    const nextMilestoneMonth = milestoneMonths.find((month) => month > months) ?? null;
    const nextMilestoneDate = nextMilestoneMonth !== null ? addMonthsSafe(birth, nextMilestoneMonth) : null;

    return {
      status: "ready" as const,
      birth,
      livedDays,
      months,
      weeks,
      stage,
      nextMilestoneMonth,
      nextMilestoneDate,
    };
  }, [birthDate, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              Baby milestones
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Baby Age Calculator
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Find your baby’s exact age in months, weeks, and days. This is useful for milestone
              visits, feeding stages, vaccine timing, and growth tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">Common next tool</div>
            <p className="mt-2">
              Many parents use this together with the{" "}
              <Link
                href="/en/cal/vaccine-schedule"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                vaccine schedule
              </Link>{" "}
              or the{" "}
              <Link
                href="/en/cal/weaning-start"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                solids readiness calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Enter birth date</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Use the exact birth date to get a quick age view for doctor visits, feeding,
                  and developmental planning.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-semibold text-slate-800">
                  Birth date
                </label>
                <UsDateInput
                  id="birthDate"
                  max={new Date().toISOString().split("T")[0]}
                  value={birthDate}
                  onChange={setBirthDate}
                />
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">Tip</div>
                <ul className="mt-2 space-y-1">
                  <li>• Pediatric visits often use age in months during the first 2 years.</li>
                  <li>• Feeding and vaccine schedules are usually organized by age windows.</li>
                  <li>• If your baby was born early, your clinician may also use adjusted age.</li>
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
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                    Current age
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{result.months} months</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Born on <span className="font-semibold text-slate-900">{formatDate(result.birth)}</span>
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <InfoCard title="Weeks" value={`${result.weeks}`} />
                  <InfoCard title="Days" value={`${result.livedDays}`} />
                  <InfoCard title="Stage" value={result.stage} />
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5">
                  <div className="font-semibold text-slate-800">Next milestone checkpoint</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {result.nextMilestoneMonth !== null && result.nextMilestoneDate
                      ? `The next common milestone check is around ${result.nextMilestoneMonth} months, which falls near ${formatDate(result.nextMilestoneDate)}.`
                      : "You’re past the early milestone checkpoints shown here, so growth, language, and behavior trends matter more than single milestone dates."}
                  </p>
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
