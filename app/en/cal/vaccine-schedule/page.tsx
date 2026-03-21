import type { Metadata } from "next";
import Link from "next/link";
import VaccineScheduleCalculatorClient from "./VaccineScheduleCalculatorClient";

export const metadata: Metadata = {
  title: "Baby Vaccine Schedule Calculator | US Infant Visit Timeline",
  description:
    "See a simple US infant vaccine timeline based on your baby's birth date and common CDC routine schedule windows for well-child visits.",
  keywords: [
    "baby vaccine schedule",
    "infant vaccine schedule",
    "US vaccine schedule",
    "CDC baby vaccines",
    "well child visit timeline",
  ],
  alternates: { canonical: "https://momtools.kr/en/cal/vaccine-schedule" },
  openGraph: {
    title: "Baby Vaccine Schedule Calculator | US Infant Timeline",
    description:
      "A simple planning view for common US infant vaccine timing and upcoming checkup windows.",
    url: "https://momtools.kr/en/cal/vaccine-schedule",
    type: "website",
  },
};

export default function VaccineSchedulePage() {
  return (
    <>
      <VaccineScheduleCalculatorClient />

      <section className="mt-card-soft p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">What this vaccine timeline is meant to help with</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Parents often want a clearer picture of what well-child visit may be coming next. This calculator is meant to make the usual infant timeline easier to follow by using your baby&apos;s birth date as the starting point.
              It can help you think about the next visit window, questions to bring, and how vaccine timing fits into your first year schedule.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              This is not a vaccine record and it is not a catch-up scheduler. Actual vaccines can vary depending on the brand used, missed doses, medical history, seasonal vaccines, and what your pediatrician recommends at each visit.
            </p>
          </div>
          <aside className="rounded-3xl border border-sky-100 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Useful next pages</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/en/checklists/newborn" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Newborn checklist</Link>
              <Link href="/en/cal/baby-age" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Baby age calculator</Link>
              <Link href="/en/info/newborn" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Newborn guide</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Best for routine planning",
            body: "Use it when your child is following a typical schedule and you want a simpler view of upcoming visit windows.",
          },
          {
            title: "Not built for missed-dose catch-up",
            body: "If a vaccine was delayed or a series was started late, your pediatrician should confirm what comes next.",
          },
          {
            title: "Good before appointments",
            body: "Parents often check this page before a visit so they can ask clearer questions about vaccines, timing, and records.",
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
