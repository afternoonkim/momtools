import type { Metadata } from "next";
import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Daycare Prep Checklist | Labels, Extra Clothes, and Daily Basics",
  description:
    "A daycare prep checklist for parents in the US with practical reminders for labels, extra clothes, nap items, paperwork, and daily drop-off routines.",
  alternates: { canonical: "https://momtools.kr/en/checklists/daycare" },
};

const storageKey = "en-daycare-prep-checklist";

const sections = [
  {
    title: "Daily bag basics",
    badge: "Use every day",
    accent: "sky" as const,
    summary:
      "Start with the items that will move back and forth most often. A dependable daily bag prevents most first-week daycare stress.",
    items: [
      "Extra clothes in the right size",
      "Weather-appropriate backup layer and socks",
      "Diapers and wipes if your center asks families to provide them",
      "Labeled cup, bottle, or lunch items if required",
      "Simple note for allergies, medication, or special care details",
    ],
  },
  {
    title: "Nap and comfort items",
    badge: "Ask the center",
    accent: "amber" as const,
    summary:
      "Every center handles rest time differently, so these items should match the actual classroom rules instead of a generic packing list.",
    items: [
      "Nap mat, sheet set, or crib items if required",
      "Approved comfort item if allowed",
      "Season-appropriate nap clothing",
      "Backup set for accidents or spills",
      "Laundry plan for weekly take-home items",
    ],
  },
  {
    title: "Labels and paperwork",
    badge: "Easy to forget",
    accent: "rose" as const,
    summary:
      "Labeling and paperwork feel small until the first busy morning. Do them early and the daily routine gets much easier.",
    items: [
      "Name labels for clothes, bottles, bags, and bedding",
      "Emergency contacts and approved pickup list",
      "Immunization or health forms requested by the center",
      "Food allergy plan if needed",
      "Backup copy of the center schedule and classroom rules",
    ],
  },
  {
    title: "Drop-off routine",
    badge: "Reduce stress",
    accent: "emerald" as const,
    summary:
      "A repeatable drop-off routine helps parents and children settle faster. The goal is not a perfect goodbye. The goal is consistency.",
    items: [
      "Standard drop-off time and backup pickup plan",
      "Quick goodbye routine you can repeat",
      "Contact method for the center saved on your phone",
      "Plan for first-week communication with teachers",
      "After-daycare cleanup or unpacking routine at home",
    ],
  },
];

const related = [
  {
    href: "/en/checklists/newborn",
    title: "Newborn checklist",
    description: "Use the newborn setup list first if your child is still in the early months.",
  },
  {
    href: "/en/faq",
    title: "FAQ",
    description: "See how to use the site and where planning tools fit alongside daycare logistics.",
  },
  {
    href: "/en/qna/behavior",
    title: "Behavior Q&A",
    description: "Browse common questions about routines, separation anxiety, and transitions.",
  },
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Daycare prep</span>
          <h1 className="mt-title-xl mt-5">Daycare prep checklist that makes the first weeks easier</h1>
          <p className="mt-text-main mt-4">
            This checklist focuses on the practical details families in the US usually need before a
            child starts daycare: labels, forms, extra clothes, rest-time items, and a drop-off
            routine that is easy to repeat on busy mornings.
          </p>
        </section>

        <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-09" locale="en" />

        <section className="space-y-5">
          {sections.map((section) => (
            <article key={section.title} className="mt-card p-6 md:p-8">
              <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                {section.badge}
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-800">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.summary}</p>
              <PersistentChecklist
                storageKey={`${storageKey}-${section.title}`}
                items={section.items}
                accent={section.accent}
              />
            </article>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Helpful note</div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The best daycare bag is the one you can reset in under five minutes at night. Keep a
            small staging spot at home for labels, spare clothes, and tomorrow’s bag check.
          </p>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Related pages</div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-sky-200"
              >
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </section>
      

        <RelatedContent
          locale="en"
          title="Helpful next pages"
          description="Use the related tools, guides, and checklists below to turn one answer into a clearer next step."
          items={[
            { href: "/en/info/toddler", title: "Toddler guide", description: "Pair daycare prep with routines, transitions, and everyday toddler patterns." },
            { href: "/en/qna/behavior", title: "Behavior Q&A", description: "Useful for separation anxiety, morning resistance, and pickup transitions." },
            { href: "/en/checklists/newborn", title: "Newborn checklist", description: "Helpful if your child is still in the younger infant stage." },
            { href: "/en/faq", title: "FAQ", description: "See how the site’s tools fit into real-world planning for parents." }
          ]}
        />
      </div>
    </div>
  );
}
