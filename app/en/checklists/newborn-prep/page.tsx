import type { Metadata } from "next";
import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Newborn Checklist | Safe Sleep, Feeding, Diapers, and Daily Basics",
  description:
    "A newborn checklist for US parents covering safe sleep, feeding basics, diapering, clothing, and the everyday items families use most in the first weeks.",
  alternates: { canonical: "https://momtools.kr/en/checklists/newborn" },
};

const storageKey = "en-newborn-prep-checklist";

const sections = [
  {
    title: "Safe sleep setup",
    badge: "Start here",
    accent: "emerald" as const,
    summary:
      "A safe sleep space matters more than a fully decorated nursery. Keep it simple, easy to reset, and easy to use during overnight feeds.",
    items: [
      "Bassinet, crib, or play yard with a firm sleep surface",
      "Fitted sheets that match the sleep space",
      "No loose blankets, pillows, bumpers, or toys in the sleep area",
      "Sleep sack or swaddle plan if your baby and care team support it",
      "Low light for overnight diaper changes and feeds",
    ],
  },
  {
    title: "Feeding setup",
    badge: "Daily routine",
    accent: "sky" as const,
    summary:
      "Whether you breastfeed, formula feed, pump, or combine methods, the best setup is the one that supports how your family will actually feed the baby each day.",
    items: [
      "Burp cloths and a few easy-clean bibs",
      "Bottles and nipples if bottle feeding or pumping",
      "Formula or pumping supplies if needed",
      "A comfortable feeding chair or feeding station",
      "Water bottle and quick snacks for the feeding parent",
    ],
  },
  {
    title: "Diapering and hygiene",
    badge: "Use often",
    accent: "amber" as const,
    summary:
      "A small diaper station near your most-used room usually works better than a perfect nursery setup. Focus on access, not aesthetics.",
    items: [
      "Newborn or size 1 diapers",
      "Unscented wipes or warm-water cloth plan",
      "Changing pad or changing area",
      "Diaper cream and a simple trash or laundry plan",
      "Baby nail file, thermometer, and basic skin-care items",
    ],
  },
  {
    title: "Clothing and home basics",
    badge: "Keep it simple",
    accent: "rose" as const,
    summary:
      "Newborn life works best when clothing is easy to change and laundry is easy to repeat. You do not need a huge wardrobe for the first weeks.",
    items: [
      "Zip sleepers or easy-change bodysuits",
      "A few extra layers based on the season",
      "Laundry basket and newborn-safe detergent plan",
      "Blankets for supervised awake time, not for the crib",
      "A simple place to store daily-use baby items",
    ],
  },
];

const related = [
  {
    href: "/en/checklists/birth",
    title: "Birth prep checklist",
    description: "Finish paperwork, your hospital bag, and car seat planning before delivery day.",
  },
  {
    href: "/en/cal/baby-age",
    title: "Baby age calculator",
    description: "Track age in weeks and months for feeding, sleep, and milestone planning.",
  },
  {
    href: "/en/qna",
    title: "Parent Q&A",
    description: "Browse common questions about crying, sleep, feeding, gas, and development.",
  },
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Newborn basics</span>
          <h1 className="mt-title-xl mt-5">Newborn checklist built around what families use every day</h1>
          <p className="mt-text-main mt-4">
            This page focuses on the practical newborn setup many US parents actually need: a safe
            sleep space, a feeding station, a simple diaper area, and enough clothing to keep daily
            life moving. Check items off as your setup comes together.
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
            The easiest newborn setup is the one you can repeat at 2 a.m. If a setup makes feeding,
            diapering, or sleep harder, simplify it. Function beats clutter every time.
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
            { href: "/en/info/newborn", title: "Newborn guide", description: "Pair the home setup checklist with feeding, sleep, and first-week basics." },
            { href: "/en/cal/baby-age", title: "Baby age calculator", description: "Exact age helps when newborn routines start to shift week by week." },
            { href: "/en/qna/health", title: "Health Q&A", description: "Open practical questions about diaper counts, temperature, and feeding." },
            { href: "/en/checklists/weaning", title: "Solids checklist", description: "Keep the next stage in view once the newborn setup feels steady." }
          ]}
        />
      </div>
    </div>
  );
}
