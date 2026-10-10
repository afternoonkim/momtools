import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";
import { getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/info/newborn");

export const metadata: Metadata = {
  title: "Newborn guide | feeding, safe sleep, diapers, and when to call",
  description:
    "A practical U.S. newborn guide covering feeding patterns, safe sleep, diaper output, temperature questions, and signs that should be discussed with a pediatric clinician.",
  alternates: { canonical: "https://momtools.kr/en/info/newborn" },
  openGraph: {
    title: "Newborn guide | MomTools",
    description: "Feeding, safe sleep, diaper output, and the daily questions that matter most in the newborn stage.",
    url: "https://momtools.kr/en/info/newborn",
    locale: "en_US",
    type: "website",
  },
};

const cards = [
  { title: "Feeding", text: "Look at feeding frequency, comfort at the breast or bottle, diaper output, and overall alertness rather than judging one difficult feed by itself." },
  { title: "Safe sleep", text: "Place baby on the back for every sleep on a firm, flat, noninclined infant sleep surface with only a fitted sheet. Keep pillows, blankets, toys, and other soft objects out." },
  { title: "Diaper output", text: "Wet and dirty diapers are useful clues about intake and hydration, especially when they are considered together with feeding and alertness." },
];

const details = [
  {
    title: "Safe sleep setup matters more than sleep duration",
    text: "AAP guidance recommends back sleeping for every sleep, a firm flat noninclined surface, and room sharing without bed sharing. Keep loose bedding and soft objects out of the sleep area and avoid overheating.",
  },
  {
    title: "Track patterns, not one hard moment",
    text: "Feeds, spit-up, diapers, alert periods, and sleep stretches often make more sense when viewed across a full day instead of one stressful moment.",
  },
  {
    title: "Keep a low threshold for calling with a newborn",
    text: "A newborn who is unusually hard to wake, feeding far less than usual, breathing differently, or acting much less responsive than usual deserves prompt clinical advice. A temperature of 100.4°F (38°C) or higher in a baby younger than 3 months should be discussed with a clinician right away.",
  },
];

export default function NewbornPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Newborn guide</span>
          <h1 className="mt-title-xl mt-5">The first weeks feel safer when the basics are clear</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Newborn life brings repeated questions about feeds, diapers, sleep, temperature, spit-up, and what is still normal.
            This page focuses on the parts parents can observe at home while keeping safe-sleep and urgent-care guidance easy to find.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {cards.map((item) => (
            <div key={item.title} className="mt-card-soft p-5">
              <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          locale="en"
          note="Reviewed with current U.S. safe-sleep guidance, including back sleeping, a firm flat noninclined surface, room sharing without bed sharing, and keeping soft objects out of the sleep area."
        />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="mt-card p-6 md:p-8 space-y-5">
            {details.map((item) => (
              <article key={item.title}>
                <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <aside className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">Helpful next pages</h2>
            <div className="mt-4 grid gap-3">
              <RelatedLink href="/en/cal/baby-age" title="Baby age calculator" description="Check exact age before comparing routines or health guidance." />
              <RelatedLink href="/en/cal/vaccine-schedule" title="Vaccine visit planner" description="Organize age-based checkups and open the current CDC schedule." />
              <RelatedLink href="/en/qna/health" title="Health Q&A" description="Move into question-by-question answers about common newborn concerns." />
            </div>
            <a href="https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline underline-offset-4">AAP safe sleep recommendations</a>
          </aside>
        </section>

        <RelatedContent
          locale="en"
          title="Helpful next pages"
          description="Use the related tools, guides, and checklists below to turn one answer into a clearer next step."
          items={[
            { href: "/en/cal/baby-age", title: "Baby age calculator", description: "Use exact age in months and weeks when comparing routines and milestones." },
            { href: "/en/qna/health", title: "Health Q&A", description: "Check common parent questions about spit-up, congestion, fever, and feeding." },
            { href: "/en/checklists/newborn", title: "Newborn checklist", description: "Keep the home setup and everyday baby basics in one place." },
            { href: "/en/info/weaning", title: "Starting solids guide", description: "See what usually comes next after the early newborn stage." }
          ]}
        />
      </div>
    </div>
  );
}

function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">{title}</div><div className="mt-2 text-sm leading-7 text-slate-500">{description}</div></Link>;
}
