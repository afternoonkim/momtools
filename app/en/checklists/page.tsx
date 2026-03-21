import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parenting Checklists | Birth, Newborn, Solids, Daycare",
  description:
    "Practical checklists for hospital prep, newborn basics, starting solids, and daycare. Built for parents in the US.",
  alternates: { canonical: "https://momtools.kr/en/checklists" },
};

const cards = [
  {
    href: "/en/checklists/birth",
    title: "Birth Prep Checklist",
    description: "Hospital bag, paperwork, partner prep, and the last tasks to finish before labor.",
  },
  {
    href: "/en/checklists/newborn",
    title: "Newborn Checklist",
    description: "Safe sleep, feeding basics, diapering, and the items most families use right away.",
  },
  {
    href: "/en/checklists/weaning",
    title: "Starting Solids Checklist",
    description: "High chair setup, simple feeding tools, first-food planning, and cleanup basics.",
  },
  {
    href: "/en/checklists/daycare",
    title: "Daycare Prep Checklist",
    description: "Labels, extra clothes, backup care notes, and what helps drop-off feel smoother.",
  },
];

export default function EnChecklistsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parenting checklists</span>
          <h1 className="mt-title-xl mt-5">Only the checklists most parents actually need</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Instead of long shopping lists, these pages focus on the items and steps that matter
            most in real life. Use them as simple planning guides for the stages families commonly
            prepare for in the US.
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
      </div>
    </div>
  );
}
