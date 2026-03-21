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

export default function WeaningStartCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");
  const [premature, setPremature] = useState<"no" | "yes">("no");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message:
          "Enter your baby’s birth date to estimate a common solids window and review the readiness signs most parents watch for.",
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

    const shift = premature === "yes" ? 28 : 0;
    const prepDate = addDays(birth, 166 + shift);
    const earliestDate = addDays(birth, 120 + shift);
    const commonStartDate = addDays(birth, 180 + shift);

    return {
      status: "ready" as const,
      prepDate,
      earliestDate,
      commonStartDate,
      note:
        premature === "yes"
          ? "If your baby was born early, many pediatricians consider adjusted age before starting solids."
          : "Many US families start solids around 6 months once readiness signs are present.",
      readiness: [
        "Good head and neck control",
        "Can sit with support",
        "Shows interest when others eat",
        "Can move food from a spoon into the mouth",
        "Tongue-thrust reflex is less noticeable",
      ],
    };
  }, [birthDate, premature, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              Feeding timeline
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Solids Readiness Calculator
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Find a practical solids start window, see when to begin prepping feeding supplies,
              and review the readiness signs parents are usually told to look for.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">Helpful next tool</div>
            <p className="mt-2">
              Pair this with the{" "}
              <Link
                href="/en/baby-food"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                baby food guide
              </Link>{" "}
              when you&apos;re ready to choose first foods.
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Enter baby details</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This estimate gives you a planning window. Actual solids timing depends on
                  readiness, growth, and your pediatrician&apos;s guidance.
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

              <div className="space-y-3">
                <div className="block text-sm font-semibold text-slate-800">
                  Was your baby born before 37 weeks?
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setPremature("no")}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      premature === "no" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    onClick={() => setPremature("yes")}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      premature === "yes" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    Yes
                  </button>
                </div>
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
                <div className="grid gap-4 md:grid-cols-3">
                  <InfoCard title="Start prepping" value={formatDate(result.prepDate)} />
                  <InfoCard title="Earliest common window" value={formatDate(result.earliestDate)} />
                  <InfoCard title="Common start point" value={formatDate(result.commonStartDate)} />
                </div>

                <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5 text-sm leading-7 text-slate-700">
                  <div className="font-semibold text-slate-900">What this means</div>
                  <p className="mt-2">{result.note}</p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5">
                  <div className="font-semibold text-slate-800">Readiness checklist</div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                    {result.readiness.map((item) => (
                      <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
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
      <div className="mt-2 text-lg font-bold text-slate-900">{value}</div>
    </div>
  );
}
