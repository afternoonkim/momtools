import type { Metadata } from "next";
import Link from "next/link";
import { HOME_CARD_UPDATED_LABEL } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "U.S. parenting tools, checklists, and practical baby guides | MomTools English",
  description:
    "MomTools English helps U.S. parents with due date planning, baby age tracking, vaccine timing, starting solids, checklists, and everyday baby and toddler questions.",
  keywords: [
    "due date calculator",
    "baby age calculator",
    "vaccine schedule by age",
    "when to start solids",
    "newborn checklist",
    "toddler routine help",
    "parenting questions",
  ],
  alternates: { canonical: "https://momtools.kr/en" },
};

const quickActions = [
  {
    title: "Due date calculator",
    description: "Estimate your due date, pregnancy week, and a practical planning window for appointments and birth prep.",
    href: "/en/cal/due-date",
  },
  {
    title: "Baby age calculator",
    description: "Check exact age in months, weeks, and days when feeding, naps, milestones, or daycare paperwork depends on timing.",
    href: "/en/cal/baby-age",
  },
  {
    title: "Vaccine schedule",
    description: "Review a parent-friendly U.S. routine schedule overview before you compare it with your pediatrician's office plan.",
    href: "/en/cal/vaccine-schedule",
  },
  {
    title: "Starting solids",
    description: "Use age and readiness signs together so the move into solids feels less rushed and more realistic.",
    href: "/en/cal/weaning-start",
  },
  {
    title: "Growth percentile",
    description: "See where a measurement falls and learn why one number matters less than the growth pattern over time.",
    href: "/en/cal/growth-percentile",
  },
  {
    title: "Parent Q&A",
    description: "Open fuller answers to the real questions parents search, from newborn sleep and spit-up to tantrums and daycare transitions.",
    href: "/en/qna",
  },
];

const featuredGuides = [
  {
    title: "Pregnancy guide",
    description: "Trimester priorities, visit planning, symptom questions, and birth preparation in a simpler order.",
    href: "/en/info/pregnancy",
    tag: "Planning",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "Newborn guide",
    description: "Feeding, diaper output, sleep basics, and the patterns parents usually watch in the first weeks.",
    href: "/en/info/newborn",
    tag: "Newborn",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "Starting solids guide",
    description: "Readiness signs, first-food ideas, texture progression, and how to keep meals simple.",
    href: "/en/info/weaning",
    tag: "Feeding",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "Toddler guide",
    description: "Daily routines, picky eating, sleep struggles, big feelings, and smoother transitions at home and daycare.",
    href: "/en/info/toddler",
    tag: "Toddler",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "Checklists hub",
    description: "Keep birth prep, newborn setup, starting solids, and daycare planning organized without a giant shopping list.",
    href: "/en/checklists",
    tag: "Checklist",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
  {
    title: "FAQ and site policies",
    description: "Review how to use the site, what its limits are, and where to send a correction or content suggestion.",
    href: "/en/faq",
    tag: "Trust",
    updatedAt: HOME_CARD_UPDATED_LABEL,
  },
];

const searchIntent = [
  "How is due date calculated from the first day of the last menstrual period?",
  "What is my baby's age in months and weeks today?",
  "What vaccines are usually due by age in the United States?",
  "When should I start solids and what are the readiness signs?",
  "What is normal for newborn poop, spit-up, and sleep?",
  "How do I prepare for daycare without forgetting the basics?",
];

const trustPoints = [
  {
    title: "Tools with context",
    description:
      "The English version does not stop at a result. Each major tool is connected to a practical guide, Q&A topic, or checklist so parents can keep moving instead of starting a new search.",
  },
  {
    title: "Built for U.S. parent searches",
    description:
      "Pages are written around the kinds of Google searches parents actually make in English, such as due date timing, vaccine by age, starting solids, newborn sleep, and toddler behavior.",
  },
  {
    title: "Clear limits, not false certainty",
    description:
      "MomTools English is written as a planning and education reference. It does not pretend to diagnose symptoms or replace a pediatrician, OB office, or urgent medical advice.",
  },
];

export default function EnglishHomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <span className="mt-badge">MomTools English · U.S. parenting help</span>
              <h1 className="mt-title-xl mt-5">
                Parenting tools and guides that help you get to the next step faster
              </h1>
              <p className="mt-text-main mt-5 max-w-3xl">
                MomTools English is designed for parents who want clear help without opening ten tabs.
                Start with a calculator, move into a short guide, and then use a checklist or Q&amp;A page
                for the part that usually comes next. The goal is not more content. The goal is fewer
                repeated searches.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/en/cal/due-date" className="mt-button-primary">Start with a popular tool</Link>
                <Link href="/en/qna" className="mt-button-secondary">Browse parent questions</Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Pregnancy</div>
                <div className="mt-3 text-xl font-bold text-slate-800">Due dates and planning</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Know the timing first so appointments, leave planning, and hospital prep feel easier.</p>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Baby</div>
                <div className="mt-3 text-xl font-bold text-slate-800">Age and milestones</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Exact age often changes how sleep, feeds, vaccines, and developmental questions are understood.</p>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Feeding</div>
                <div className="mt-3 text-xl font-bold text-slate-800">Starting solids</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Use readiness signs, safe textures, and simple planning instead of overcomplicated meal ideas.</p>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Checklist</div>
                <div className="mt-3 text-xl font-bold text-slate-800">Preparation that sticks</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Keep birth prep, home setup, and daycare transitions organized in a way that feels usable.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="mt-badge">Search-driven starting points</span>
              <h2 className="mt-title-lg mt-4">Popular ways parents arrive here</h2>
              <p className="mt-text-sub mt-3">
                The English pages are built around the questions parents tend to search in real life.
                These are the kinds of entry points the site is meant to support.
              </p>
            </div>
            <Link href="/en/info" className="mt-button-secondary">Open all guides</Link>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {searchIntent.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((card) => (
            <Link key={card.href} href={card.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-xl font-bold text-slate-800">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Featured pages</div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800">High-value pages to strengthen trust and depth</h2>
            </div>
            <Link href="/en/about" className="mt-button-secondary">Why MomTools exists</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuides.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-3xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.tag}</div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 text-xs font-semibold text-slate-400">{item.updatedAt}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {trustPoints.map((item) => (
            <article key={item.title} className="mt-card p-6">
              <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
