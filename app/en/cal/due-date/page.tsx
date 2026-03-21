import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "./DueDateCalculatorClient";

export const metadata: Metadata = {
  title: "Due Date Calculator | Pregnancy Week, Due Date, and Prenatal Planning",
  description:
    "Estimate your due date from your last period, see your current pregnancy week, and review common prenatal planning windows used in the US.",
  keywords: [
    "due date calculator",
    "pregnancy due date",
    "pregnancy week calculator",
    "estimated due date",
    "prenatal timeline",
  ],
  alternates: { canonical: "https://momtools.kr/en/cal/due-date" },
  openGraph: {
    title: "Due Date Calculator | Pregnancy Week and Planning",
    description:
      "A practical due date calculator for estimating pregnancy week, due date, and common next steps.",
    url: "https://momtools.kr/en/cal/due-date",
    type: "website",
  },
};

export default function DueDatePage() {
  return (
    <>
      <DueDateCalculatorClient />

      <section className="mt-card-soft p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">How parents usually use a due date calculator</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              A due date estimate helps with more than curiosity. It gives you a simple anchor point for scheduling a first prenatal visit,
              understanding what pregnancy week you are in, and planning around scans, leave, travel, and baby prep. Most calculators start
              with the first day of your last menstrual period because that is still the most common early reference point before dating is confirmed.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Ultrasound dating can shift the final date your OB office uses, especially when cycle length is irregular or ovulation happened earlier or later than average.
              That is why this tool works best as a first estimate and a planning guide rather than a medical confirmation.
            </p>
          </div>
          <aside className="rounded-3xl border border-amber-100 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Helpful next pages</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/en/checklists/birth" className="rounded-2xl bg-amber-50 px-4 py-3 text-slate-700">Birth prep checklist</Link>
              <Link href="/en/info/pregnancy" className="rounded-2xl bg-amber-50 px-4 py-3 text-slate-700">Pregnancy guide</Link>
              <Link href="/en/cal/baby-age" className="rounded-2xl bg-amber-50 px-4 py-3 text-slate-700">Baby age calculator</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Best when your test just turned positive",
            body: "A quick estimate helps you understand where you may be in pregnancy before your first visit is on the calendar.",
          },
          {
            title: "Useful for appointment planning",
            body: "Parents often use the estimate to think about the first prenatal appointment, anatomy scan timing, and big month-by-month milestones.",
          },
          {
            title: "Good for family logistics",
            body: "It can also make work leave planning, childcare planning, and support conversations much easier because everyone has a rough timeline to work from.",
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
