import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Toddler guide | routines, meals, sleep, big feelings, and transitions",
  description:
    "A practical toddler guide for parents in the U.S., focused on routines, picky eating, sleep, big feelings, and everyday transitions at home and daycare.",
  alternates: { canonical: "https://momtools.kr/en/info/toddler" },
  openGraph: {
    title: "Toddler guide | MomTools",
    description: "Daily routines, meals, sleep, and behavior questions that become bigger in the toddler years.",
    url: "https://momtools.kr/en/info/toddler",
    locale: "en_US",
    type: "website",
  },
};

const topics = [
  "Toddlers usually do better with repeated routines than with perfect schedules.",
  "Meals often go better when the pressure drops and the routine stays steady.",
  "Big feelings are common. A calmer response and consistent boundaries help more than long explanations in the moment.",
  "Transitions like daycare, travel, and bedtime often improve when the next step is prepared before it starts.",
];

const details = [
  {
    title: "Look for patterns over time",
    text: "Sleep struggles, mealtime refusal, and tantrums often make more sense when parents connect them to tiredness, hunger, routine changes, or transition stress instead of treating each hard moment as a separate problem.",
  },
  {
    title: "Routine is often the hidden support system",
    text: "Parents usually get more traction from predictable meals, naps, bedtime signals, and transition warnings than from trying a new discipline approach every week.",
  },
  {
    title: "Behavior questions still need context",
    text: "Exact age, language development, childcare changes, and sleep quality can all shape toddler behavior. That is why a routine page, age check, or daycare checklist can be as useful as a direct behavior answer.",
  },
];

export default function ToddlerPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Toddler guide</span>
          <h1 className="mt-title-xl mt-5">Practical help for the years when routines matter more</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Toddler life can feel louder and less predictable than the newborn stage. This guide keeps the focus on the parts parents deal with most:
            food, sleep, routines, big feelings, and everyday transitions.
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">{item}</div>
            ))}
          </div>
        </section>

        <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-11" locale="en" />

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="mt-card-soft p-6 md:p-8 space-y-5">
            {details.map((item) => (
              <article key={item.title}>
                <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">Useful next steps</h2>
            <div className="mt-4 grid gap-3">
              <RelatedLink href="/en/checklists/daycare" title="Daycare checklist" description="Organize what to prepare before daycare starts or routines change." />
              <RelatedLink href="/en/qna/behavior" title="Behavior Q&A" description="Browse detailed answers on tantrums, biting, separation, and bedtime battles." />
              <RelatedLink href="/en/cal/baby-age" title="Baby age calculator" description="A quick age check often helps toddler questions make more sense." />
            </div>
          </div>
        </section>

        <RelatedContent
          locale="en"
          title="Helpful next pages"
          description="Use the related tools, guides, and checklists below to turn one answer into a clearer next step."
          items={[
            { href: "/en/checklists/daycare", title: "Daycare checklist", description: "Use it when transitions, labels, and daily routines become part of the plan." },
            { href: "/en/qna/behavior", title: "Behavior Q&A", description: "Read practical questions about tantrums, transitions, and separation worries." },
            { href: "/en/qna/growth", title: "Growth Q&A", description: "Compare behavior changes with language and development questions." },
            { href: "/en/cal/baby-age", title: "Baby age calculator", description: "A quick age check often helps toddler questions make more sense." }
          ]}
        />
      </div>
    </div>
  );
}

function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">{title}</div><div className="mt-2 text-sm leading-7 text-slate-500">{description}</div></Link>;
}
