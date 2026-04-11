import type { Metadata } from "next";
import Link from "next/link";
import VaccineScheduleCalculatorClient from "./VaccineScheduleCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/vaccine-schedule");
const canonical = buildCanonical("/en/cal/vaccine-schedule");

const points = [
  "Parents often use a vaccine timing page to organize well-child visits, ask better questions at appointments, and avoid missing routine shots during the first year.",
  "The routine infant timeline in the U.S. is commonly discussed using CDC schedules, but the exact plan can shift based on health history, prior doses, or a pediatrician's recommendations.",
  "A simple timeline is most helpful when it reduces stress and turns vaccination planning into a clear to-do list instead of a last-minute scramble.",
];

const faq = [
  {
    q: "Does this page replace my child’s official vaccine record?",
    a: "No. It is a planning tool for home use. Your pediatrician, state registry, clinic record, or after-visit summary should be treated as the official record for doses already given and the next recommended schedule.",
  },
  {
    q: "Why might my baby’s vaccine plan look different from the timeline here?",
    a: "Some babies have catch-up schedules, medical considerations, or clinic-specific follow-up plans. Timing can also shift if a visit is moved. When the page and your pediatrician's instructions differ, always follow the pediatrician's plan.",
  },
  {
    q: "What should I bring to a vaccine visit?",
    a: "Bring your baby’s record if you keep one, a list of recent symptoms or medications, and any questions about side effects, comfort measures, or next-dose timing. Many parents also like to note feeding or sleep concerns while they are already at the visit.",
  },
  {
    q: "What if my baby misses a routine shot window?",
    a: "A missed window does not automatically mean you have to start over. Many families continue with a catch-up plan. Contact your pediatrician so the next step matches your baby’s record and age.",
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
  name: "MomTools Vaccine Schedule Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  url: canonical,
  description:
    "Review a parent-friendly infant vaccine timeline based on birth date and common CDC routine schedule windows used in U.S. pediatric care.",
};

export const metadata: Metadata = {
  title: "Baby Vaccine Schedule Calculator | CDC infant timeline guide | MomTools",
  description:
    "See a parent-friendly infant vaccine timeline based on your baby's birth date and common CDC schedule windows used for routine U.S. well-child visits.",
  alternates: { canonical },
  openGraph: {
    title: "Baby Vaccine Schedule Calculator | MomTools",
    description:
      "Review routine infant vaccine timing, organize appointments, and prepare better questions for U.S. pediatric visits.",
    url: canonical,
    siteName: "MomTools",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Baby Vaccine Schedule Calculator | MomTools",
    description:
      "Plan around routine infant vaccine timing using a simple parent-friendly timeline based on common CDC windows.",
  },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Routine care planning</span>
          <h1 className="mt-title-xl mt-5">Use your baby&apos;s birth date to make vaccine planning less stressful</h1>
          <p className="mt-text-main mt-4">
            This vaccine schedule calculator is designed for parents who want a clearer view of routine infant timing. In the U.S., many
            families hear vaccine discussions through the lens of well-child visits and CDC schedule windows. That can feel easy to
            understand during an appointment and surprisingly hard to remember later at home. A simple timeline helps you organize what
            comes next, prepare your questions, and keep the first year from turning into a series of rushed reminders.
          </p>
          <p className="mt-text-sub mt-4">
            The page is built for planning and reference. Your baby&apos;s official vaccine record and your pediatrician&apos;s instructions should
            always come first when something looks different.
          </p>
        </section>

        <VaccineScheduleCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="This page is reviewed so parents can quickly see when the routine vaccine planning guidance was first added and when the reference notes were most recently checked."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Why parents keep coming back to a vaccine timeline</h2>
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
            <h2 className="mt-title-lg">How this page fits with CDC-based routine care</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                U.S. parents often hear vaccine timing in relation to routine newborn, infant, and early childhood visits. The CDC
                schedule gives the broad framework, while the pediatric clinic translates that framework into a real appointment plan for
                your child. This page follows that everyday parent perspective. It helps you connect the birth date to the kind of timing
                windows families are most likely to hear at standard well-child visits.
              </p>
              <p>
                That kind of planning matters because vaccine visits are not only about shots. Families often use the same appointment to
                ask about feeding, sleep, growth, rashes, pooping patterns, or returning to childcare. A timeline reduces the mental load
                so the appointment can feel more organized and less reactive.
              </p>
            </div>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">When to lean on your pediatrician instead of the calculator</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                If your child started vaccines late, received doses at more than one clinic, was born early, or has a medical condition
                that changes routine timing, a general schedule page may not reflect the exact plan you need. The same is true if your
                baby recently had a fever or if you are trying to understand what happens after a delayed appointment.
              </p>
              <p>
                In those moments, this page still has value as a planning overview, but the final answer should come from the doctor or
                clinic record. Think of the calculator as a way to prepare, not a substitute for the official schedule used in care.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Parent-friendly references behind the timeline</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              This page is written in a simple parent voice, but the timing perspective reflects the kinds of routine guidance families
              often hear through CDC schedules, AAP-informed pediatric care, and well-child visit planning. The goal is to support
              understanding, not to overwhelm parents with formal clinical language.
            </p>
            <p>
              If you are concerned about side effects, fever after a shot, a missed dose, or whether a vaccine can be given alongside
              another visit concern, bring the question directly to your child&apos;s clinician. A planning page cannot replace that advice.
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Plan around the next visit</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/en/info/newborn" className="mt-list-card">
              <div className="font-semibold text-slate-800">Related guide: Newborn care</div>
              <div className="mt-2 text-sm text-slate-500">Review routine care questions that often come up around early visits.</div>
            </Link>
            <Link href="/en/qna/health" className="mt-list-card">
              <div className="font-semibold text-slate-800">Parenting Q&amp;A: Health</div>
              <div className="mt-2 text-sm text-slate-500">Read common parent questions about vaccines, fever, and early health concerns.</div>
            </Link>
            <Link href="/en/cal/baby-age" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended tool: Baby age calculator</div>
              <div className="mt-2 text-sm text-slate-500">Use an exact age result when you compare visit timing or paperwork needs.</div>
            </Link>
            <Link href="/en/checklists/newborn" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended checklist: Newborn prep</div>
              <div className="mt-2 text-sm text-slate-500">Keep practical care tasks together with your visit and vaccine planning.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
