import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "./DueDateCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/due-date");
const canonical = buildCanonical("/en/cal/due-date");

const keyPoints = [
  "The conventional LMP estimate is 280 days, or 40 weeks, from the first day of the last menstrual period.",
  "First-trimester ultrasound, through 13 weeks 6 days, is the most accurate method to establish or confirm gestational age.",
  "Pregnancies conceived with assisted reproductive technology should use ART-derived dating rather than a general LMP calculator.",
];

const faq = [
  {
    q: "Why can my clinician’s due date differ from this result?",
    a: "LMP dating assumes a typical cycle and may be less reliable when cycle length or ovulation timing varies. A first-trimester ultrasound can establish or confirm gestational age more accurately.",
  },
  {
    q: "Does the first day of my last period count as week 1?",
    a: "No. Standard gestational age starts at 0 weeks, 0 days on the first day of the last menstrual period. Seven days later is 1 week, 0 days.",
  },
  {
    q: "Should I use this for IVF dating?",
    a: "No as the primary date. ACOG recommends using the ART-derived gestational age based on embryo age and transfer date for pregnancies conceived through assisted reproductive technology.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const metadata: Metadata = {
  title: "Due Date Calculator | 280-day LMP estimate and ACOG dating guidance | MomTools",
  description:
    "Estimate an EDD from the first day of your last menstrual period using the conventional 280-day method, with ACOG guidance on ultrasound and ART dating.",
  alternates: { canonical },
  openGraph: {
    title: "Due Date Calculator | MomTools",
    description: "Estimate an LMP-based due date and understand when ultrasound or fertility-clinic dating should take priority.",
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
          <span className="mt-badge">ACOG-aligned pregnancy dating</span>
          <h1 className="mt-title-xl mt-5">Estimate your due date, but use the clinically established EDD for care</h1>
          <p className="mt-text-main mt-4">
            This calculator uses the conventional 280-day estimate from the first day of the last menstrual period. It is useful for planning,
            but ACOG recommends first-trimester ultrasound as the most accurate method to establish or confirm gestational age, and ART pregnancies require treatment-specific dating.
          </p>
        </section>

        <DueDateCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="Reviewed against ACOG pregnancy-dating guidance. Gestational weeks now begin at 0w0d on the first day of the LMP, and milestone dates use exact completed weeks."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">How U.S. pregnancy dating is handled</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {keyPoints.map((item) => <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">{item}</li>)}
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
            <Link href="/en/info/pregnancy" className="mt-list-card">
              <div className="font-semibold text-slate-800">Pregnancy guide</div>
              <div className="mt-2 text-sm text-slate-500">Use the dating result to organize trimester questions and appointments.</div>
            </Link>
            <Link href="/en/checklists/birth" className="mt-list-card">
              <div className="font-semibold text-slate-800">Birth prep checklist</div>
              <div className="mt-2 text-sm text-slate-500">Turn the clinically established EDD into practical preparation.</div>
            </Link>
            <a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date" target="_blank" rel="noreferrer" className="mt-list-card">
              <div className="font-semibold text-slate-800">ACOG due-date guidance</div>
              <div className="mt-2 text-sm text-slate-500">Open the clinical guidance used to verify this page.</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
