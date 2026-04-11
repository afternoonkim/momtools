import type { Metadata } from "next";
import Link from "next/link";
import BabyAgeCalculatorClient from "./BabyAgeCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/baby-age");
const canonical = buildCanonical("/en/cal/baby-age");

const highlights = [
  "Parents often need age in months, weeks, and days for pediatric visits, forms, milestone check-ins, daycare paperwork, and routine planning.",
  "Exact age matters because feeding, sleep expectations, vaccination timing, and growth references can change quickly during the first year.",
  "A simple age result becomes much more useful when it leads you to the next page you need, such as growth, vaccines, or a newborn guide.",
];

const faq = [
  {
    q: "Why do some forms ask for age in months instead of years?",
    a: "During infancy and toddlerhood, development changes quickly. Pediatricians, therapists, and childcare programs often use months because they give a more precise picture of where a baby is in early growth and development.",
  },
  {
    q: "Should I use adjusted age for a premature baby?",
    a: "In many cases, yes. Families of premature babies may hear both chronological age and adjusted age. The right reference depends on the situation, so it is best to follow the guidance from your pediatrician or neonatal follow-up team.",
  },
  {
    q: "What can I do after I calculate my baby’s age?",
    a: "Most parents use it to connect the age result to a vaccine schedule, growth chart review, feeding changes, or a milestone check-in. The age itself is most helpful when it supports the next parenting decision.",
  },
  {
    q: "Can age in weeks still matter after the newborn stage?",
    a: "Yes. Weeks can still be useful during the first months when changes happen quickly and some clinical guidance is organized around short age windows. Later on, months usually become the simpler reference.",
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
  name: "MomTools Baby Age Calculator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  url: canonical,
  description:
    "Calculate a baby's exact age in months, weeks, and days for routine planning, milestone check-ins, and parent-friendly record keeping.",
};

export const metadata: Metadata = {
  title: "Baby Age Calculator | Months, weeks, and days for parents | MomTools",
  description:
    "Calculate your baby's exact age in months, weeks, and days for pediatric visits, milestones, routine planning, and everyday parenting tasks.",
  alternates: { canonical },
  openGraph: {
    title: "Baby Age Calculator | MomTools",
    description:
      "Check your baby's exact age in months, weeks, and days, then move directly into growth, vaccine, and milestone planning.",
    url: canonical,
    siteName: "MomTools",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Baby Age Calculator | MomTools",
    description:
      "Calculate your baby's exact age and use it for milestones, forms, visits, and next-step planning.",
  },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Everyday planning tool</span>
          <h1 className="mt-title-xl mt-5">Know your baby&apos;s exact age and make the next parenting step easier</h1>
          <p className="mt-text-main mt-4">
            A baby age calculator sounds simple, but it solves one of the most common parenting questions: how old is my baby today in
            the format I actually need right now? In the first year, many appointments, growth references, and developmental check-ins
            are organized by weeks or months rather than years. That is why parents often need an exact age result for doctor visits,
            vaccine planning, forms, daycare paperwork, or just daily routines at home.
          </p>
          <p className="mt-text-sub mt-4">
            This page is designed to turn age into something practical. Instead of stopping at a number, you can use the result to move
            into the next question parents usually have: growth, vaccines, feeding, or milestone timing.
          </p>
        </section>

        <BabyAgeCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="This page is reviewed so families can see when the age guidance was first added and when the practical planning notes were most recently checked."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Why an exact age result matters</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {highlights.map((item) => (
              <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">How parents use age in real life</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                In everyday parenting, age helps make other information usable. A pediatrician may talk about a routine that usually fits
                around two months, six months, or twelve months. A form might ask for age in months. A milestone handout may describe a
                range that makes more sense in weeks than in years. When your child is very young, those details matter because the pace
                of change is so fast.
              </p>
              <p>
                This is also why parents often recalculate age many times. One result can support several tasks at once: checking a
                vaccine schedule, comparing a new measurement on a growth chart, deciding whether solids are close, or preparing for a
                daycare conversation. The number becomes most useful when it helps you move confidently into the next step.
              </p>
            </div>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">When age needs more context</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                Exact age is important, but it is not the only context that matters. Premature babies, babies with ongoing medical needs,
                and children followed by specialists may have different timelines for growth, milestones, or feeding progress. In those
                situations, your care team may use adjusted age or a more individualized schedule.
              </p>
              <p>
                Parents do not need to memorize every clinical detail. The practical approach is to use this calculator for quick home
                reference and then match the result to the guidance you were given by your pediatrician, therapist, or specialist. That
                keeps the page useful without replacing personalized care.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">References parents commonly encounter</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              This page is written for everyday family use and fits naturally with the kinds of age-based guidance parents often see from
              pediatric clinics, AAP-style developmental handouts, and U.S. routine care schedules. The page is not a diagnosis tool.
              It simply helps translate a birth date into the age formats parents are most often asked to use.
            </p>
            <p>
              When your baby&apos;s age connects to growth concerns, feeding trouble, missed vaccines, or developmental worries, use the
              result as a starting point and bring the question to your pediatrician. Exact timing helps, but professional context still
              matters.
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Use the age result next</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/en/info/newborn" className="mt-list-card">
              <div className="font-semibold text-slate-800">Related guide: Newborn care</div>
              <div className="mt-2 text-sm text-slate-500">See routines and practical guidance for the first weeks and months.</div>
            </Link>
            <Link href="/en/qna/growth" className="mt-list-card">
              <div className="font-semibold text-slate-800">Parenting Q&amp;A: Growth</div>
              <div className="mt-2 text-sm text-slate-500">Read common parent questions about measurements, growth, and milestones.</div>
            </Link>
            <Link href="/en/cal/growth-percentile" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended tool: Growth percentile</div>
              <div className="mt-2 text-sm text-slate-500">Take the age result into a growth reference check with weight and length.</div>
            </Link>
            <Link href="/en/cal/vaccine-schedule" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended tool: Vaccine schedule</div>
              <div className="mt-2 text-sm text-slate-500">Use your baby&apos;s age to review routine visit and vaccine timing.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
