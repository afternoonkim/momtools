
"use client";

import Link from "next/link";
import UsDateInput from "@/components/common/UsDateInput";
import { useMemo, useState } from "react";

type VaccinePoint = {
  label: string;
  month: number;
  vaccines: string[];
  note: string;
};

const vaccinePoints: VaccinePoint[] = [
  {
    label: "Birth",
    month: 0,
    vaccines: ["HepB"],
    note:
      "The routine US infant schedule starts with hepatitis B at birth. Some newborns may also need RSV protection depending on season, maternal RSV vaccination, and pediatric guidance.",
  },
  {
    label: "1–2 months",
    month: 2,
    vaccines: ["HepB", "RV", "DTaP", "Hib", "PCV", "IPV"],
    note:
      "This is the first major infant visit on the routine CDC schedule. Rotavirus starts in this window, and the second hepatitis B dose is commonly given by 1–2 months.",
  },
  {
    label: "4 months",
    month: 4,
    vaccines: ["RV", "DTaP", "Hib", "PCV", "IPV"],
    note:
      "The second primary series visit often falls around 4 months. Depending on the rotavirus product, your baby may still need one more rotavirus dose later.",
  },
  {
    label: "6 months",
    month: 6,
    vaccines: ["DTaP", "PCV", "IPV", "HepB", "Flu", "COVID-19 (see notes)"],
    note:
      "Around 6 months, many babies receive another DTaP and pneumococcal dose. Hepatitis B may be due here depending on the product used earlier. Seasonal flu vaccination begins at 6 months, and COVID-19 recommendations may also apply by age and product.",
  },
  {
    label: "12–15 months",
    month: 12,
    vaccines: ["MMR", "Varicella", "HepA", "Hib", "PCV"],
    note:
      "The routine 1-year visit commonly includes MMR, varicella, hepatitis A, and final Hib and pneumococcal doses when still needed under the standard schedule.",
  },
  {
    label: "15–18 months",
    month: 15,
    vaccines: ["DTaP"],
    note:
      "A DTaP booster is commonly scheduled in this range. Your pediatrician may also review whether hepatitis A dose 2, flu, or catch-up vaccines are needed.",
  },
];

function parseLocalDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function addMonthsSafe(date: Date, months: number) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const targetMonthIndex = month + months;
  const targetYear = year + Math.floor(targetMonthIndex / 12);
  const normalizedTargetMonth = ((targetMonthIndex % 12) + 12) % 12;
  const lastDayOfTargetMonth = new Date(targetYear, normalizedTargetMonth + 1, 0).getDate();

  return new Date(targetYear, normalizedTargetMonth, Math.min(day, lastDayOfTargetMonth));
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

function getStatus(targetDate: Date, today: Date) {
  const diff = diffInDays(today, targetDate);
  if (diff > 14) return { text: `${diff} days away`, style: "bg-sky-50 text-sky-700 ring-sky-100" };
  if (diff >= -14) return { text: "Coming up", style: "bg-amber-50 text-amber-700 ring-amber-100" };
  return { text: "Passed", style: "bg-slate-100 text-slate-600 ring-slate-200" };
}

export default function VaccineScheduleCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message:
          "Enter your baby’s birth date to build a simple vaccine planning timeline based on the routine US infant schedule.",
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

    const ageMonths = getMonthDiffWithDayAdjustment(birth, today);
    const schedule = vaccinePoints.map((item) => {
      const date = addMonthsSafe(birth, item.month);
      return { ...item, date, status: getStatus(date, today) };
    });
    const nextUpcoming = schedule.find((item) => diffInDays(today, item.date) >= -14) ?? null;

    return { status: "ready" as const, ageMonths, schedule, nextUpcoming };
  }, [birthDate, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              CDC-style US schedule
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Vaccine Schedule Calculator
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Enter your baby’s birth date to see a simple US infant vaccine timeline. This planning tool
              follows common CDC routine timing through 18 months so parents can understand what visit is
              likely coming next.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">Important note</div>
            <p className="mt-2">
              This is not a vaccine record or a catch-up schedule. If your child missed a dose, was born early,
              has medical conditions, or your clinic uses a different product combination, your pediatrician’s
              schedule is the one to follow.
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
                  The calculator estimates routine visit timing from birth through 18 months. It is best used
                  to plan ahead for well visits, appointment reminders, and questions to ask at checkups.
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

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">What this timeline covers</div>
                <ul className="mt-2 space-y-1">
                  <li>• Routine infant vaccine visit windows used in the US.</li>
                  <li>• Standard timing only, not missed-dose catch-up logic.</li>
                  <li>• Helpful planning notes for parents before each checkup.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">Also useful</div>
                <p className="mt-2">
                  Pair this with the{" "}
                  <Link href="/en/cal/baby-age" className="font-semibold text-amber-700 underline underline-offset-4">
                    baby age calculator
                  </Link>{" "}
                  and the{" "}
                  <Link href="/en/checklists/newborn" className="font-semibold text-amber-700 underline underline-offset-4">
                    newborn checklist
                  </Link>{" "}
                  so appointments, records, and everyday planning stay in one place.
                </p>
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
                <div className="rounded-3xl bg-slate-50 px-5 py-5">
                  <div className="text-sm text-slate-500">Current age</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">{result.ageMonths} months</div>
                  {result.nextUpcoming && (
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Next likely visit window:{" "}
                      <span className="font-semibold text-slate-900">{result.nextUpcoming.label}</span>{" "}
                      around {formatDate(result.nextUpcoming.date)}.
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  {result.schedule.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-100 bg-white p-5">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="text-lg font-bold text-slate-900">{item.label}</div>
                          <div className="mt-1 text-sm text-slate-500">
                            Target date: {formatCompactDate(item.date)}
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${item.status.style}`}
                        >
                          {item.status.text}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.vaccines.map((vaccine) => (
                          <span
                            key={vaccine}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                          >
                            {vaccine}
                          </span>
                        ))}
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">How to use this well</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                <div className="font-semibold text-slate-900">Think in visit windows</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Clinics often book around age ranges rather than one exact day, so use this as a planning window.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                <div className="font-semibold text-slate-900">Bring records</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  A vaccine card, portal record, or discharge paperwork helps your pediatrician confirm the next dose.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                <div className="font-semibold text-slate-900">Ask about product details</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Rotavirus, pneumococcal, flu, RSV, and COVID-19 timing can vary depending on product, season, and prior doses.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
