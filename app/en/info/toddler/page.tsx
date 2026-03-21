import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "Toddler guide | routines, meals, sleep, big feelings, and daycare transitions",
  description:
    "A practical toddler guide for parents in the US, focused on routines, picky eating, sleep, big feelings, and everyday transitions at home and daycare.",
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
  "Transitions like daycare, travel, and bedtime often improve when parents prepare the next step before it starts.",
];

export default function ToddlerPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Toddler guide</span>
          <h1 className="mt-title-xl mt-5">Practical help for the years when routines start to matter more</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Toddler life can feel louder and less predictable than the newborn stage. This page keeps the focus on the parts parents deal with most: food, sleep, transitions, and behavior.
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">{item}</div>
            ))}
          </div>
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="Toddler guide" />

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">What to watch over time</h2>
            <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
              Look for patterns instead of isolated hard moments. Sleep, meal refusal, and tantrums often make more sense when you connect them to transitions, tiredness, and routine changes.
            </p>
          </div>
          <div className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">Useful next steps</h2>
            <div className="mt-4 grid gap-3">
              <RelatedLink href="/en/checklists/daycare" title="Daycare checklist" description="Organize what to prepare before daycare starts." />
              <RelatedLink href="/en/qna/behavior" title="Behavior Q&A" description="Browse detailed answers on tantrums, biting, and transitions." />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">{title}</div><div className="mt-2 text-sm leading-7 text-slate-500">{description}</div></Link>;
}
