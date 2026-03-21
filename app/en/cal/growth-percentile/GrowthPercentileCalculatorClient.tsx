"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Band = "Lower range" | "Average range" | "Higher range";

function formatNumber(value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value);
}

function getBand(score: number): Band {
  if (score < -1.1) return "Lower range";
  if (score > 1.1) return "Higher range";
  return "Average range";
}

function bandStyle(band: Band) {
  if (band === "Lower range") return "bg-sky-50 text-sky-700 ring-sky-100";
  if (band === "Higher range") return "bg-orange-50 text-orange-700 ring-orange-100";
  return "bg-emerald-50 text-emerald-700 ring-emerald-100";
}

function toCmFromInches(inches: number) {
  return inches * 2.54;
}

function toKgFromPounds(pounds: number) {
  return pounds * 0.453592;
}

export default function GrowthPercentileCalculatorClient() {
  const [sex, setSex] = useState<"boy" | "girl">("boy");
  const [months, setMonths] = useState("6");
  const [lengthInches, setLengthInches] = useState("26");
  const [weightPounds, setWeightPounds] = useState("17");

  const result = useMemo(() => {
    const m = Number(months);
    const lengthIn = Number(lengthInches);
    const weightLb = Number(weightPounds);

    if ([m, lengthIn, weightLb].some((n) => Number.isNaN(n) || n <= 0)) {
      return { status: "error" as const, message: "Enter age, length, and weight to see a quick estimate." };
    }
    if (m > 24) {
      return { status: "error" as const, message: "This quick check is built for ages 0 to 24 months." };
    }

    const lengthCm = toCmFromInches(lengthIn);
    const weightKg = toKgFromPounds(weightLb);

    const expectedLength = sex === "boy" ? 50 + m * 2.6 : 49.5 + m * 2.5;
    const expectedWeight = sex === "boy" ? 3.4 + m * 0.74 : 3.2 + m * 0.69;

    const lengthScore = (lengthCm - expectedLength) / 3.8;
    const weightScore = (weightKg - expectedWeight) / 1.0;

    const lengthBand = getBand(lengthScore);
    const weightBand = getBand(weightScore);

    return {
      status: "ready" as const,
      lengthCm,
      weightKg,
      lengthBand,
      weightBand,
      lengthPercentile: Math.max(3, Math.min(97, Math.round(50 + lengthScore * 20))),
      weightPercentile: Math.max(3, Math.min(97, Math.round(50 + weightScore * 20))),
      overall:
        lengthBand === "Average range" && weightBand === "Average range"
          ? "Both measurements fall near the average range for age in this quick estimate."
          : "A single number matters less than the growth trend over time. Bring questions to your pediatrician, especially if growth has recently changed.",
    };
  }, [sex, months, lengthInches, weightPounds]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
              Growth check
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Growth Percentile Check
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Use age, sex, length, and weight to get a quick growth estimate.
              This is a simplified check for parent reference, not an official WHO or CDC chart reading.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">Best way to use this</div>
            <p className="mt-2">Look at the trend over time. One measurement by itself rarely tells the full story.</p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Enter measurements</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Measurements are in common US units. Use the most recent length and weight from home or the pediatrician&apos;s office.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Sex</label>
                  <select
                    value={sex}
                    onChange={(e) => setSex(e.target.value as "boy" | "girl")}
                    className="mt-input"
                  >
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Age in months</label>
                  <input
                    type="number"
                    min="0"
                    max="24"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="mt-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Length (inches)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={lengthInches}
                    onChange={(e) => setLengthInches(e.target.value)}
                    className="mt-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Weight (pounds)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={weightPounds}
                    onChange={(e) => setWeightPounds(e.target.value)}
                    className="mt-input"
                  />
                </div>
              </div>
            </div>
          </section>
        </aside>

        <div className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            {result.status === "error" && (
              <p className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-rose-700">
                {result.message}
              </p>
            )}
            {result.status === "ready" && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <ResultCard
                    title="Length estimate"
                    percentile={result.lengthPercentile}
                    band={result.lengthBand}
                  />
                  <ResultCard
                    title="Weight estimate"
                    percentile={result.weightPercentile}
                    band={result.weightBand}
                  />
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5">
                  <div className="font-semibold text-slate-800">Your converted measurements</div>
                  <div className="mt-3 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                    <div>
                      Length: <span className="font-semibold text-slate-900">{formatNumber(result.lengthCm)} cm</span>
                    </div>
                    <div>
                      Weight: <span className="font-semibold text-slate-900">{formatNumber(result.weightKg)} kg</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5 text-sm leading-7 text-slate-700">
                  {result.overall}
                </div>

                <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 text-sm leading-7 text-slate-700">
                  Want another age-based tool? Try the{" "}
                  <Link
                    href="/en/cal/baby-age"
                    className="font-semibold text-sky-700 underline underline-offset-4"
                  >
                    baby age calculator
                  </Link>
                  .
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  title,
  percentile,
  band,
}: {
  title: string;
  percentile: number;
  band: Band;
}) {
  return (
    <div className="rounded-3xl bg-slate-50 px-5 py-5">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-bold text-slate-900">~{percentile}th</div>
      <span
        className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${bandStyle(
          band
        )}`}
      >
        {band}
      </span>
    </div>
  );
}
