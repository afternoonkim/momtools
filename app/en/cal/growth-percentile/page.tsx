import type { Metadata } from "next";
import Link from "next/link";
import GrowthPercentileCalculatorClient from "./GrowthPercentileCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/growth-percentile");
const canonical = buildCanonical("/en/cal/growth-percentile");

const points = [
  "Parents usually look up percentiles because they want context for a weight or length number they were given at a checkup.",
  "A percentile is a comparison point, not a grade. It helps show where a measurement falls on a reference chart, but it does not tell the whole story by itself.",
  "Growth is often most meaningful over time, which is why one measurement should be read together with your pediatrician's trend tracking and overall health picture.",
];

const faq = [
  {
    q: "What does the 50th percentile mean?",
    a: "It means the measurement is around the middle of the reference range for children of the same age and sex. It does not mean that lower or higher percentiles are automatically bad.",
  },
  {
    q: "Should I worry if my baby is in a low percentile?",
    a: "Not necessarily. Some healthy children are naturally smaller or larger. The more important question is whether growth is following a steady pattern and whether your pediatrician is concerned about the overall trend.",
  },
  {
    q: "Why can home measurements and clinic measurements differ?",
    a: "Small differences in scale accuracy, clothing, movement, or measuring technique can change the result. For medical decision-making, the clinic measurement should carry more weight.",
  },
  {
    q: "Which growth references matter most in the U.S.?",
    a: "Parents often hear about WHO and CDC growth references, depending on age and clinical context. Your pediatrician chooses the chart that fits your child and explains how to read it over time.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MomTools Growth Percentile Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  url: canonical,
  description:
    "Estimate baby growth percentile using age, sex, weight, and length with parent-friendly guidance based on common WHO and CDC reference concepts.",
};

export const metadata: Metadata = {
  title: "Growth Percentile Calculator | WHO and CDC reference guide | MomTools",
  description:
    "Use age, sex, weight, and length to estimate a baby's growth percentile and read the result with parent-friendly context based on common WHO and CDC references.",
  alternates: { canonical },
  openGraph: {
    title: "Growth Percentile Calculator | MomTools",
    description:
      "Estimate a baby's growth percentile and learn how parents usually interpret the result with clinic-based context.",
    url: canonical,
    siteName: "MomTools",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Growth Percentile Calculator | MomTools",
    description:
      "Check a baby's percentile and understand what the number means before the next pediatric visit.",
  },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Growth check tool</span>
          <h1 className="mt-title-xl mt-5">Turn a growth number into context you can actually use</h1>
          <p className="mt-text-main mt-4">
            Parents often leave a visit remembering a weight, a length, and maybe a percentile, but not always the bigger picture of what
            those numbers mean. This growth percentile calculator is meant to close that gap. It helps you compare a measurement with the
            kind of reference ranges many parents hear about through WHO or CDC-based growth discussions, while also explaining the part
            that matters most at home: how to think about the number without overreacting to a single data point.
          </p>
          <p className="mt-text-sub mt-4">
            A percentile can be useful, but it does not replace a pediatrician&apos;s view of growth over time. Use this page to understand
            the result better and prepare smarter questions for your next appointment.
          </p>
        </section>

        <GrowthPercentileCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="This page is reviewed so parents can quickly see when the percentile guidance was first added and when the growth interpretation notes were most recently checked."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">What percentile results can and cannot tell you</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {points.map((item) => (
              <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">How parents usually interpret percentile information</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                A percentile compares your child&apos;s measurement with a reference population of children of the same age and sex. Parents
                often assume that a higher percentile means healthier growth, but that is not really how percentiles work. A child can be
                healthy at a wide range of percentiles. The more useful question is whether growth is progressing in a way that makes
                sense over time and matches the child&apos;s overall health, feeding, and development.
              </p>
              <p>
                This is why pediatric visits usually focus on trends, not only single numbers. A one-time percentile can give context,
                but the pattern across visits is often what guides the conversation. That is especially important when parents are trying
                to understand feeding concerns, weight gain, or whether a recent measurement should be treated as an urgent issue.
              </p>
            </div>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">When to rely more on the clinic than the calculator</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                Home measurements can be helpful, but babies move, scales vary, and length is surprisingly hard to measure accurately at
                home. If the number you enter here creates concern, the best next step is to compare it with the measurement taken at a
                pediatric visit. That clinic measurement is usually the stronger reference point.
              </p>
              <p>
                Percentile questions also deserve more direct pediatric input when they connect to feeding refusal, vomiting, diarrhea,
                dehydration, chronic illness, or developmental concerns. In those cases, a growth chart is only part of the picture.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">WHO and CDC context in parent language</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              Parents in the U.S. may hear both WHO and CDC mentioned during growth discussions. The exact chart used can depend on age
              and clinical setting, but the practical point for families is simpler: growth references are tools that help clinicians see
              patterns. This page keeps that idea understandable without asking parents to decode technical chart language on their own.
            </p>
            <p>
              If your pediatrician has already talked through your child&apos;s trend, use this page as a quick reference at home. If the
              percentile surprises you, write down the question and bring it to the next visit instead of assuming one number tells the
              full story.
            </p>
          </div>
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Use the growth result next</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/en/info/toddler" className="mt-list-card">
              <div className="font-semibold text-slate-800">Related guide: Toddler care</div>
              <div className="mt-2 text-sm text-slate-500">Read practical growth and routine guidance beyond the newborn stage.</div>
            </Link>
            <Link href="/en/qna/growth" className="mt-list-card">
              <div className="font-semibold text-slate-800">Parenting Q&amp;A: Growth</div>
              <div className="mt-2 text-sm text-slate-500">See common parent questions about weight, length, and growth patterns.</div>
            </Link>
            <Link href="/en/cal/baby-age" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended tool: Baby age calculator</div>
              <div className="mt-2 text-sm text-slate-500">Start with an exact age before you compare growth references.</div>
            </Link>
            <Link href="/en/cal/weaning-start" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended tool: Starting solids</div>
              <div className="mt-2 text-sm text-slate-500">If growth brings up feeding questions, use this next for practical timing.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
