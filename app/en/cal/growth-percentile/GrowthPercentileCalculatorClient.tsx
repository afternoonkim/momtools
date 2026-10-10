"use client";

import { useMemo, useState } from "react";

function formatNumber(value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value);
}

function toCmFromInches(inches: number) {
  return inches * 2.54;
}

function toKgFromPounds(pounds: number) {
  return pounds * 0.45359237;
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
      return { status: "error" as const, message: "Enter age, length, and weight to organize the measurement for a growth-chart check." };
    }

    if (m > 240) {
      return { status: "error" as const, message: "Enter an age from birth through 20 years (240 months)." };
    }

    const lengthCm = toCmFromInches(lengthIn);
    const weightKg = toKgFromPounds(weightLb);
    const reference = m < 24 ? "WHO Growth Standards" : "CDC Growth Charts";
    const referenceNote =
      m < 24
        ? "CDC and AAP recommend WHO growth standards from birth to under age 2."
        : "CDC growth charts are recommended in the U.S. from age 2 through 20 years.";

    return {
      status: "ready" as const,
      sex,
      months: m,
      lengthIn,
      weightLb,
      lengthCm,
      weightKg,
      reference,
      referenceNote,
    };
  }, [sex, months, lengthInches, weightPounds]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            Growth chart prep
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Growth Chart Check</h1>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Enter age, sex, length or height, and weight to organize the measurements you can compare with the official growth chart used for your child&apos;s age.
            MomTools no longer generates a made-up percentile from a simplified formula.
          </p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Enter measurements</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Use the most recent clinic measurement when possible. Home measurements can help with tracking, but small technique differences can change the result.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Sex</label>
                  <select value={sex} onChange={(e) => setSex(e.target.value as "boy" | "girl")} className="mt-input">
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Age in months</label>
                  <input type="number" min="0" max="240" value={months} onChange={(e) => setMonths(e.target.value)} className="mt-input" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Length / height (inches)</label>
                  <input type="number" step="0.1" value={lengthInches} onChange={(e) => setLengthInches(e.target.value)} className="mt-input" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">Weight (pounds)</label>
                  <input type="number" step="0.1" value={weightPounds} onChange={(e) => setWeightPounds(e.target.value)} className="mt-input" />
                </div>
              </div>
            </div>
          </section>
        </aside>

        <div className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            {result.status === "error" ? (
              <p className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-rose-700">{result.message}</p>
            ) : (
              <div className="space-y-5">
                <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">Use this reference</div>
                  <div className="mt-2 text-xl font-bold text-slate-900">{result.reference}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{result.referenceNote}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <MeasurementCard title="Length / height" primary={`${formatNumber(result.lengthIn)} in`} secondary={`${formatNumber(result.lengthCm)} cm`} />
                  <MeasurementCard title="Weight" primary={`${formatNumber(result.weightLb)} lb`} secondary={`${formatNumber(result.weightKg)} kg`} />
                </div>

                <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 text-sm leading-7 text-slate-700">
                  A growth chart is not a stand-alone diagnosis. The useful question is how measurements track over time alongside feeding, development, health history, and your pediatrician&apos;s assessment.
                </div>

                <a
                  href="https://www.cdc.gov/growthcharts/index.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Open CDC growth chart guidance
                </a>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

function MeasurementCard({ title, primary, secondary }: { title: string; primary: string; secondary: string }) {
  return (
    <div className="rounded-3xl bg-slate-50 px-5 py-5">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-bold text-slate-900">{primary}</div>
      <div className="mt-1 text-sm font-medium text-slate-600">{secondary}</div>
    </div>
  );
}
