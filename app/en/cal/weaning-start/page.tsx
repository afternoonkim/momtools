import type { Metadata } from "next";
import Link from "next/link";
import WeaningStartCalculatorClient from "./WeaningStartCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/weaning-start");
const canonical = buildCanonical("/en/cal/weaning-start");

const points = [
  "CDC says foods other than breast milk or infant formula are generally introduced at about 6 months, and starting before 4 months is not recommended.",
  "Readiness signs matter: sitting alone or with support, good head and neck control, opening the mouth for food, and swallowing rather than pushing food out.",
  "Potentially allergenic foods can be introduced along with other foods in age-appropriate forms. Babies with severe eczema or egg allergy may need clinician guidance for peanut introduction.",
];

const faq = [
  {
    q: "Is six months an exact start date?",
    a: "No. About 6 months is a general reference point. Developmental readiness, growth, prematurity, feeding history, and your pediatrician’s advice can change the timing for an individual baby.",
  },
  {
    q: "Should I start solids before 4 months if my baby seems hungry?",
    a: "CDC guidance says introducing foods before 4 months is not recommended. Talk with your pediatrician if feeding needs seem unusual or you are worried about growth or milk intake.",
  },
  {
    q: "Do I need to delay peanut or egg?",
    a: "For most children, potentially allergenic foods can be introduced when other foods are introduced in safe forms. If your baby has severe eczema or egg allergy, ask the clinician how and when to introduce peanut-containing foods.",
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
  title: "Starting Solids Readiness Check | CDC timing and first-food guidance | MomTools",
  description:
    "Use your baby's birth date as a reference around 6 months, then review CDC readiness signs, allergen guidance, and when prematurity or feeding concerns need clinician input.",
  alternates: { canonical },
  openGraph: {
    title: "Starting Solids Readiness Check | MomTools",
    description: "Review the around-6-month reference point, readiness signs, and first-food safety guidance for U.S. families.",
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
          <span className="mt-badge">U.S. infant feeding guidance</span>
          <h1 className="mt-title-xl mt-5">Use about 6 months as a reference, then check readiness</h1>
          <p className="mt-text-main mt-4">
            U.S. guidance from CDC and the Dietary Guidelines for Americans points to about 6 months for introducing foods other than breast milk or infant formula.
            The date is only one part of the decision. Developmental readiness and your child’s medical and feeding history matter too.
          </p>
        </section>

        <WeaningStartCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="Reviewed against current CDC infant and toddler feeding guidance. Prematurity is not converted into a fixed-day delay by this tool."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Current U.S. guidance in plain language</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {points.map((item) => <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">{item}</li>)}
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
            <Link href="/en/baby-food" className="mt-list-card">
              <div className="font-semibold text-slate-800">Baby food guide</div>
              <div className="mt-2 text-sm text-slate-500">Move from timing to safe textures and meal ideas.</div>
            </Link>
            <Link href="/en/qna/health" className="mt-list-card">
              <div className="font-semibold text-slate-800">Health Q&amp;A</div>
              <div className="mt-2 text-sm text-slate-500">Check common questions about reactions and feeding concerns.</div>
            </Link>
            <a href="https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html" target="_blank" rel="noreferrer" className="mt-list-card">
              <div className="font-semibold text-slate-800">CDC starting-solids guidance</div>
              <div className="mt-2 text-sm text-slate-500">Open the current U.S. public-health guidance.</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
