import type { Metadata } from "next";
import Link from "next/link";
import GrowthPercentileCalculatorClient from "./GrowthPercentileCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/growth-percentile");
const canonical = buildCanonical("/en/cal/growth-percentile");

const points = [
  "CDC and AAP recommend WHO growth standards from birth to under age 2, then CDC growth charts from age 2 through 20 years.",
  "A percentile is a comparison point, not a grade. Growth charts are not meant to be used as a stand-alone diagnostic tool.",
  "Growth trends across visits are usually more useful than one home measurement or one percentile value.",
];

const faq = [
  {
    q: "Does this tool calculate a percentile?",
    a: "No. A real percentile requires official age- and sex-specific reference data and the correct measurement method. This tool organizes your measurements and points you to the appropriate U.S. growth reference instead of creating a simplified estimate.",
  },
  {
    q: "Which chart is used for babies in the U.S.?",
    a: "CDC and AAP recommend WHO growth standards for children from birth to under age 2. From age 2 through 20 years, CDC growth charts are recommended.",
  },
  {
    q: "Should I worry about one low or high percentile?",
    a: "Not automatically. Growth charts contribute to the overall health picture. Your pediatrician looks at the pattern over time together with feeding, development, family history, and other health information.",
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
  title: "Growth Chart Helper | WHO and CDC references for U.S. children | MomTools",
  description:
    "Organize age, sex, length or height, and weight, then use the correct U.S. growth reference: WHO standards under age 2 and CDC growth charts from age 2 through 20.",
  alternates: { canonical },
  openGraph: {
    title: "Growth Chart Helper | MomTools",
    description: "Prepare growth measurements and use the correct WHO or CDC reference for your child’s age.",
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
          <span className="mt-badge">U.S. growth charts</span>
          <h1 className="mt-title-xl mt-5">Choose the right growth chart before reading a percentile</h1>
          <p className="mt-text-main mt-4">
            The reference changes with age. CDC and AAP recommend WHO growth standards from birth to under age 2,
            then CDC growth charts from age 2 through 20. Enter the measurements below to organize them before checking the appropriate chart.
          </p>
        </section>

        <GrowthPercentileCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="Reviewed against current CDC growth-chart guidance. MomTools does not create a percentile unless it is calculated from an official reference dataset."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">What to keep in mind when reading a percentile</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {points.map((item) => (
              <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">{item}</li>
            ))}
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
              <div className="mt-2 text-sm text-slate-500">Confirm exact age before choosing a growth reference.</div>
            </Link>
            <Link href="/en/qna/growth" className="mt-list-card">
              <div className="font-semibold text-slate-800">Growth Q&amp;A</div>
              <div className="mt-2 text-sm text-slate-500">Read practical guidance about growth trends and development.</div>
            </Link>
            <a href="https://www.cdc.gov/growthcharts/index.htm" target="_blank" rel="noreferrer" className="mt-list-card">
              <div className="font-semibold text-slate-800">CDC growth charts</div>
              <div className="mt-2 text-sm text-slate-500">Open the official U.S. growth-chart guidance.</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
