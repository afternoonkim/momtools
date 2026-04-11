import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Starting solids guide | readiness signs, first foods, and texture progression",
  description:
    "A practical starting solids guide for parents in the U.S., covering readiness signs, first foods, texture progression, allergen planning, and simple meal routines.",
  alternates: { canonical: "https://momtools.kr/en/info/weaning" },
  openGraph: {
    title: "Starting solids guide | MomTools",
    description: "Readiness signs, first foods, texture progression, and practical meal planning for starting solids.",
    url: "https://momtools.kr/en/info/weaning",
    locale: "en_US",
    type: "website",
  },
};

const cards = [
  { title: "Readiness", text: "Good head control, interest in food, and sitting with support usually matter more than chasing one exact date." },
  { title: "First foods", text: "Parents often start with iron-rich foods, simple produce, and repeated exposure instead of trying to build perfect variety on day one." },
  { title: "Texture", text: "Move forward gradually as your baby handles smoother foods, thicker textures, and then soft finger foods more confidently." },
];

const details = [
  {
    title: "Keep the beginning simple",
    text: "Starting solids usually goes better when parents focus on one small step at a time. Readiness, a simple seat setup, a first food plan, and a calm pace are often enough for the first stage.",
  },
  {
    title: "Repeated exposure matters more than one perfect meal",
    text: "Babies often need time with a new taste or texture. Parents usually get farther by repeating safe foods calmly than by trying a new complicated menu every day.",
  },
  {
    title: "Use age, readiness, and your own routine together",
    text: "The best solids plan fits the baby and the household. Exact age matters, but so do head control, feeding interest, and whether the routine at home makes new meals realistic right now.",
  },
];

export default function WeaningPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Starting solids guide</span>
          <h1 className="mt-title-xl mt-5">A calmer way to begin solids</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Starting solids gets easier when you focus on readiness, safe textures, repetition, and simple routines
            instead of trying to build the perfect meal plan right away.
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

        <section className="mt-card p-6 md:p-8 space-y-5">
          {details.map((item) => (
            <article key={item.title}>
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900">Helpful next steps</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <RelatedLink href="/en/cal/weaning-start" title="Starting solids calculator" description="See a simple starting point based on age and readiness." />
            <RelatedLink href="/en/baby-food" title="Baby food by age" description="Move from timing questions to actual food ideas and recipes." />
            <RelatedLink href="/en/checklists/weaning" title="Solids prep checklist" description="Keep bibs, spoons, trays, and cleanup items organized." />
          </div>
        </section>

        <RelatedContent
          locale="en"
          title="Helpful next pages"
          description="Use the related tools, guides, and checklists below to turn one answer into a clearer next step."
          items={[
            { href: "/en/cal/weaning-start", title: "Starting solids calculator", description: "Estimate a realistic solids window based on age and readiness." },
            { href: "/en/baby-food", title: "Baby food ideas", description: "Open recipe ideas, first foods, and texture-based meal planning." },
            { href: "/en/checklists/weaning", title: "Solids checklist", description: "Keep feeding tools, allergen planning, and prep basics together." },
            { href: "/en/qna/growth", title: "Growth Q&A", description: "Compare feeding concerns with milestone and growth questions." }
          ]}
        />
      </div>
    </div>
  );
}

function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">{title}</div><div className="mt-2 text-sm leading-7 text-slate-500">{description}</div></Link>;
}
