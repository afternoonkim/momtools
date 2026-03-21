import type { Metadata } from "next";
import Link from "next/link";
import GrowthPercentileCalculatorClient from "./GrowthPercentileCalculatorClient";

export const metadata: Metadata = {
  title: "Growth Percentile Calculator | Baby Weight and Length Reference",
  description:
    "Use age, sex, weight, and length to get a quick baby growth percentile estimate and understand what percentile ranges are commonly used for reference.",
  keywords: [
    "growth percentile calculator",
    "baby growth chart",
    "baby weight percentile",
    "baby length percentile",
    "infant growth percentile",
  ],
  alternates: { canonical: "https://momtools.kr/en/cal/growth-percentile" },
  openGraph: {
    title: "Growth Percentile Calculator | Quick Baby Growth Reference",
    description:
      "Check a simple percentile estimate for baby growth using current measurements.",
    url: "https://momtools.kr/en/cal/growth-percentile",
    type: "website",
  },
};

export default function GrowthPercentilePage() {
  return (
    <>
      <GrowthPercentileCalculatorClient />

      <section className="mt-card-soft p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">How to think about percentile results without overreacting</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Growth percentiles are best used as a trend tool, not a grade. They help you understand where a measurement falls compared with children of the same age and sex,
              but one number by itself does not tell the full story. Pediatricians usually care most about whether growth is steady over time and whether feeding, development, and general health match what they see in the chart.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              This page is most useful between visits when you want a quick reference. If measurements are far off from the last visit, or the pattern changes fast, that is when a direct conversation with your pediatrician matters most.
            </p>
          </div>
          <aside className="rounded-3xl border border-emerald-100 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Helpful related pages</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/en/cal/baby-age" className="rounded-2xl bg-emerald-50 px-4 py-3 text-slate-700">Baby age calculator</Link>
              <Link href="/en/qna/growth" className="rounded-2xl bg-emerald-50 px-4 py-3 text-slate-700">Growth Q&amp;A</Link>
              <Link href="/en/info/toddler" className="rounded-2xl bg-emerald-50 px-4 py-3 text-slate-700">Toddler guide</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Bring recent measurements",
            body: "The result is more useful when weight and length were measured recently and as accurately as possible.",
          },
          {
            title: "Look at the pattern, not one point",
            body: "Percentiles make more sense when you compare several measurements over time instead of focusing on one data point.",
          },
          {
            title: "Use it as a discussion helper",
            body: "This tool can help you ask better questions at a visit, especially if feeding, growth, or appetite has changed.",
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
