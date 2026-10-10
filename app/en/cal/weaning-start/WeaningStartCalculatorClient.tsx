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

function addMonthsSafe(date: Date, months: number) {
  const next = new Date(date);
  const targetMonth = next.getMonth() + months;
  const day = next.getDate();
  next.setDate(1);
  next.setMonth(targetMonth);
  const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
  next.setDate(Math.min(day, lastDay));
  return next;
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function formatDate(date: Date | null) {
  if (!date) return "-";
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(date);
}

export default function WeaningStartCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");
  const [premature, setPremature] = useState<"no" | "yes">("no");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message: "Enter your baby’s birth date to see the around-6-month reference point and a readiness checklist.",
      };
    }

    const birth = parseLocalDate(birthDate);
    if (!birth) return { status: "error" as const, message: "Please check the birth date and try again." };
    if (diffInDays(birth, today) < 0) return { status: "error" as const, message: "Birth date cannot be in the future." };

    const sixMonthDate = addMonthsSafe(birth, 6);
    return {
      status: "ready" as const,
      sixMonthDate,
      premature,
      readiness: [
        "Can sit alone or with support",
        "Has good head and neck control",
        "Opens the mouth when food is offered",
        "Swallows food instead of pushing it back out",
        "Brings objects toward the mouth and shows interest in food",
      ],
    };
  }, [birthDate, premature, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Starting solids</div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Solids Readiness Check</h1>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            CDC and U.S. dietary guidance point to about 6 months as the usual time to begin foods other than breast milk or infant formula,
            while also checking developmental readiness. Starting before 4 months is not recommended.
          </p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-semibold text-slate-800">Birth date</label>
                <UsDateInput id="birthDate" max={new Date().toISOString().split("T")[0]} value={birthDate} onChange={setBirthDate} />
              </div>

              <div className="space-y-3">
                <div className="block text-sm font-semibold text-slate-800">Was your baby born before 37 weeks?</div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setPremature("no")} className={`rounded-full px-4 py-2 text-sm font-medium ${premature === "no" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700"}`}>No</button>
                  <button type="button" onClick={() => setPremature("yes")} className={`rounded-full px-4 py-2 text-sm font-medium ${premature === "yes" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700"}`}>Yes</button>
                </div>
                <p className="text-xs leading-6 text-slate-500">
                  Prematurity does not add one fixed number of days to the solids timeline. Corrected age depends on gestational age at birth, so follow your pediatric or feeding team’s guidance.
                </p>
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
                <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5">
                  <div className="text-sm text-slate-500">About 6 months from birth</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">{formatDate(result.sixMonthDate)}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">Use this as a reference point, not an automatic start date.</p>
                </div>

                {result.premature === "yes" && (
                  <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 text-sm leading-7 text-slate-700">
                    Because your baby was born early, ask your pediatrician or feeding clinician which age reference to use before starting solids.
                  </div>
                )}

                <div className="rounded-3xl border border-slate-100 bg-white p-5">
                  <div className="font-semibold text-slate-800">Readiness checklist</div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                    {result.readiness.map((item) => <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">{item}</li>)}
                  </ul>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 text-sm leading-7 text-slate-700">
                  Introduce foods in developmentally safe textures and supervise every meal. For a baby with severe eczema or egg allergy, ask the clinician how to introduce peanut-containing foods safely.
                </div>

                <Link href="/en/baby-food" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Open the baby food guide</Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
