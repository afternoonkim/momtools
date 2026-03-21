import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "US Parenting Tools and Guides",
  description:
    "Find practical help for due dates, baby age, vaccine timing, starting solids, checklists, and everyday parenting questions in one simple place.",
};

const cards = [
  {
    title: "Due date guide",
    desc: "A simple place to estimate your due date and understand what the weeks ahead usually look like.",
    href: "/en/cal/due-date",
  },
  {
    title: "Baby age guide",
    desc: "Check baby age by months and get a quick feel for the stage your baby is in right now.",
    href: "/en/cal/baby-age",
  },
  {
    title: "Vaccine schedule",
    desc: "Review a parent-friendly schedule overview based on routine timing used in the United States.",
    href: "/en/cal/vaccine-schedule",
  },
  {
    title: "Starting solids",
    desc: "See when many babies are ready to start solids and what signs to look for first.",
    href: "/en/cal/weaning-start",
  },
  {
    title: "Baby food ideas",
    desc: "Browse baby food ideas built around common US feeding patterns, early finger foods, and simple meals.",
    href: "/en/info/weaning",
  },
  {
    title: "Checklists",
    desc: "Use simple checklists for birth prep, newborn essentials, starting solids, and daycare prep.",
    href: "/en/checklists/birth",
  },
];

export default function EnglishHomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">MomTools English</span>
          <h1 className="mt-title-xl mt-5">Simple parenting tools for real daily questions</h1>
          <p className="mt-text-main mt-5 max-w-3xl">
            MomTools English is built for parents who want clear help without digging through multiple pages.
            Start with the tool or guide that matches your current question, then move to the next step with
            related checklists and practical reading.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/en/cal/due-date" className="mt-button-primary">Start with a popular tool</Link>
            <Link href="/en/faq" className="mt-button-secondary">Read common questions</Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-xl font-bold text-slate-800">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.desc}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
