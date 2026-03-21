import type { Metadata } from "next";
import Link from "next/link";
import BabyAgeCalculatorClient from "./BabyAgeCalculatorClient";

export const metadata: Metadata = {
  title: "Baby Age Calculator | Age in Months, Weeks, Days, and Milestone Stage",
  description:
    "Calculate your baby's exact age in months, weeks, and days and use it for milestones, appointments, feeding changes, and everyday planning.",
  keywords: [
    "baby age calculator",
    "baby age in months",
    "baby age in weeks",
    "infant age calculator",
    "milestone age calculator",
  ],
  alternates: { canonical: "https://momtools.kr/en/cal/baby-age" },
  openGraph: {
    title: "Baby Age Calculator | Months, Weeks, and Days",
    description:
      "A simple baby age calculator for milestone timing, checkups, and daily planning.",
    url: "https://momtools.kr/en/cal/baby-age",
    type: "website",
  },
};

export default function BabyAgePage() {
  return (
    <>
      <BabyAgeCalculatorClient />

      <section className="mt-card-soft p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Why exact baby age matters more than people expect</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              During the first year, parents are constantly asked how old their baby is in weeks or months. That age window affects how providers talk about feeding,
              sleep, milestones, growth, and what is normal at a visit. A general answer like “almost six months” can feel close enough, but exact age makes guidance easier to match.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              This tool is useful when you want one clear answer for pediatric forms, daycare paperwork, milestone check-ins, or when you are comparing development with what your provider mentioned at the last appointment.
            </p>
          </div>
          <aside className="rounded-3xl border border-sky-100 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Parents also open</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/en/cal/growth-percentile" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Growth percentile</Link>
              <Link href="/en/cal/vaccine-schedule" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Vaccine schedule</Link>
              <Link href="/en/info/newborn" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Newborn guide</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Good for milestone conversations",
            body: "Parents often check exact age before visits because milestone talk is usually tied to age windows, not just birth month.",
          },
          {
            title: "Useful for feeding transitions",
            body: "Starting solids, dropping feeds, and sleep changes often make more sense when you can quickly see age in months and weeks.",
          },
          {
            title: "Helpful for forms and records",
            body: "It can save time when completing daycare forms, insurance documents, or personal baby logs that ask for exact age.",
          },
        ].map((item) => (
          <article key={item.title} className="mt-card p-5">
            <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
