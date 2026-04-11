import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Newborn guide | feeding, sleep, diapers, and daily patterns",
  description:
    "A practical newborn guide for parents in the U.S., covering feeding patterns, sleep basics, diaper output, temperature questions, and when to call the pediatrician.",
  alternates: { canonical: "https://momtools.kr/en/info/newborn" },
  openGraph: {
    title: "Newborn guide | MomTools",
    description: "Feeding, sleep, diaper output, and the daily questions that matter most in the newborn stage.",
    url: "https://momtools.kr/en/info/newborn",
    locale: "en_US",
    type: "website",
  },
};

const cards = [
  { title: "Feeding", text: "Look at feeding frequency, comfort at the breast or bottle, and whether your baby seems satisfied after feeds instead of judging one difficult session alone." },
  { title: "Sleep", text: "Newborn sleep is fragmented. Focus on safe sleep setup, short patterns across 24 hours, and what helps the next stretch go more smoothly." },
  { title: "Diaper output", text: "Wet and dirty diapers often tell parents more than one fussy feed does on its own, especially when they are watching hydration and intake." },
];

const details = [
  {
    title: "Track patterns, not one hard moment",
    text: "Many newborn worries become easier to understand when parents zoom out to a full day. Feeds, spit-up, diapers, alert periods, and sleep stretches often make more sense together than separately.",
  },
  {
    title: "Write questions down before visits",
    text: "A short note on your phone can help more than trying to remember everything while tired. Feeding concerns, diaper changes, fever worries, and sleep questions are easier to discuss when they are listed clearly.",
  },
  {
    title: "Call sooner when a baby seems unlike themselves",
    text: "A newborn who is unusually hard to wake, feeding far less than usual, breathing differently, or acting significantly less responsive than usual deserves a lower threshold for contacting a clinician.",
  },
];

export default function NewbornPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Newborn guide</span>
          <h1 className="mt-title-xl mt-5">The first weeks feel less overwhelming when you watch the basics well</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Newborn life is full of repeated questions about feeds, diapers, sleep stretches, spit-up, and what is still normal.
            This guide keeps the focus on the patterns parents actually watch from day to day.
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

        <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-11" locale="en" />

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
            <h2 className="text-lg font-bold text-slate-900">Related tools and pages</h2>
            <div className="mt-4 grid gap-3">
              <RelatedLink href="/en/cal/baby-age" title="Baby age calculator" description="Check exact age in weeks and months before comparing routines." />
              <RelatedLink href="/en/cal/vaccine-schedule" title="Vaccine schedule" description="See common age-based timing in the U.S. routine schedule." />
              <RelatedLink href="/en/qna/health" title="Health Q&A" description="Move into question-by-question answers about common newborn concerns." />
            </div>
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
