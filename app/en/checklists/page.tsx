import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parenting checklists | birth, newborn, solids, and daycare prep",
  description:
    "Use practical parenting checklists for birth prep, newborn setup, starting solids, and daycare preparation. Built for parents in the United States.",
  alternates: { canonical: "https://momtools.kr/en/checklists" },
};

const cards = [
  {
    href: "/en/checklists/birth",
    title: "Birth prep checklist",
    description: "Hospital bag basics, paperwork, support-person planning, car seat setup, and the last tasks that matter most before delivery.",
  },
  {
    href: "/en/checklists/newborn",
    title: "Newborn checklist",
    description: "Safe sleep, feeding basics, diapering, home setup, and the items most families actually use right away.",
  },
  {
    href: "/en/checklists/weaning",
    title: "Starting solids checklist",
    description: "High chair setup, bibs, spoons, simple first-food planning, and cleanup basics that make solids feel easier.",
  },
  {
    href: "/en/checklists/daycare",
    title: "Daycare prep checklist",
    description: "Labels, extra clothes, nap items, emergency contacts, and the details that help the first weeks go more smoothly.",
  },
];

const checklistPrinciples = [
  "These checklists focus on the items and steps parents usually need first, not on building the biggest possible shopping cart.",
  "Each page is designed to reduce last-minute stress by grouping together the tasks that are easiest to forget.",
  "Use the lists as planning tools, then adjust for your own pediatrician, daycare, birth setting, or family routine.",
];

export default function EnChecklistsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parenting checklists</span>
          <h1 className="mt-title-xl mt-5">The checklists parents actually reuse</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This section keeps preparation practical. Instead of huge gear lists, the English pages focus on the steps,
            documents, and everyday items that usually make the biggest difference in real life.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {cards.map((item) => (
            <Link key={item.href} href={item.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-lg font-bold text-slate-800">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 text-sm font-semibold text-sky-700">Open checklist</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">How to use these lists well</h2>
          <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {checklistPrinciples.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">{item}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
