import type { Metadata } from "next";
import Link from "next/link";
import VaccineScheduleCalculatorClient from "./VaccineScheduleCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/vaccine-schedule");
const canonical = buildCanonical("/en/cal/vaccine-schedule");

const facts = [
  "As of October 2026, CDC states that a March 16, 2026 federal court order stayed later 2025 ACIP votes and the January 5, 2026 childhood-schedule revision; CDC identifies the July 2, 2025 schedule as the current child and adolescent schedule for clinicians.",
  "CDC catch-up guidance says an extended interval generally does not mean a vaccine series should be restarted.",
  "The child’s clinic record, state registry, current CDC tables, medical conditions, products, and prior doses determine what is actually due.",
];

const faq = [
  {
    q: "Why doesn’t MomTools show a fixed vaccine list for every visit?",
    a: "Because the official schedule can change through CDC updates and addenda, and an individual child’s plan also depends on prior doses, products, medical conditions, catch-up needs, and seasonal recommendations. A static list can become misleading faster than an age-based visit planner.",
  },
  {
    q: "What should I use as the official record?",
    a: "Use your pediatric clinic record, state immunization registry, and the current CDC schedule. MomTools is for planning, not for documenting completed doses.",
  },
  {
    q: "Do missed doses mean starting over?",
    a: "Usually no. CDC guidance says vaccine series should not be restarted or have extra doses added just because the interval between doses became longer. Ask the clinic to apply the current catch-up schedule to the child’s actual record.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export const metadata: Metadata = {
  title: "U.S. Vaccine Visit Planner | Current CDC child schedule context | MomTools",
  description:
    "Plan age-based pediatric vaccine checkpoints and use the current CDC child schedule, clinic record, and catch-up guidance for the actual vaccines and doses due.",
  alternates: { canonical },
  openGraph: {
    title: "U.S. Vaccine Visit Planner | MomTools",
    description: "Organize common pediatric vaccine checkpoints without relying on a stale hard-coded vaccine list.",
    url: canonical,
    siteName: "MomTools",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Current CDC schedule context</span>
          <h1 className="mt-title-xl mt-5">Plan vaccine visits without treating a static webpage as the official schedule</h1>
          <p className="mt-text-main mt-4">
            Vaccine guidance can change through schedule updates, addenda, products, seasonal recommendations, and individual catch-up needs.
            MomTools now keeps the calculator focused on age-based planning checkpoints and sends the final vaccine decision back to the current CDC schedule and your child’s actual record.
          </p>
        </section>

        <VaccineScheduleCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="Reviewed against the current CDC child and adolescent immunization schedule page and its 2026 court-order notice. Static vaccine-by-visit claims were removed from the calculator."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">What is current right now</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {facts.map((item) => <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">{item}</li>)}
          </ul>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/en/cal/baby-age" className="mt-list-card">
              <div className="font-semibold text-slate-800">Baby age calculator</div>
              <div className="mt-2 text-sm text-slate-500">Confirm exact age before comparing visit windows.</div>
            </Link>
            <Link href="/en/qna/health" className="mt-list-card">
              <div className="font-semibold text-slate-800">Health Q&amp;A</div>
              <div className="mt-2 text-sm text-slate-500">Review common questions around fever and routine care.</div>
            </Link>
            <a href="https://www.cdc.gov/vaccines/hcp/imz-schedules/child-schedule-vaccines.html" target="_blank" rel="noreferrer" className="mt-list-card">
              <div className="font-semibold text-slate-800">Current CDC schedule</div>
              <div className="mt-2 text-sm text-slate-500">Open the official schedule and current notices.</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
