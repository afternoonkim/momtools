import type { Metadata } from "next";
import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Birth Prep Checklist | Hospital Bag, Paperwork, and Delivery Prep",
  description:
    "A practical birth prep checklist for parents in the US, covering hospital bag basics, paperwork, partner prep, car seat setup, and the first trip home.",
  alternates: { canonical: "https://momtools.kr/en/checklists/birth" },
};

const storageKey = "en-birth-prep-checklist";

const sections = [
  {
    title: "Paperwork and care details",
    badge: "Do first",
    accent: "rose" as const,
    summary:
      "These are the items that create the most stress when they are left until the last minute. Keep them in one folder or in one note on your phone.",
    items: [
      "Photo ID and insurance card",
      "Hospital registration details and provider phone numbers",
      "Any birth preferences you want to discuss with your care team",
      "A short emergency contact list",
      "Pediatrician choice or shortlist for the first newborn visit",
    ],
  },
  {
    title: "Hospital bag basics",
    badge: "Pack once",
    accent: "amber" as const,
    summary:
      "Most US parents need far less than a full suitcase. Focus on comfort, phone power, going-home clothes, and the items you know you will actually use.",
    items: [
      "Long phone charger and backup battery",
      "Comfortable clothes and non-slip slippers",
      "Toiletries, lip balm, glasses, and hair ties if needed",
      "Nursing bra, feeding-friendly top, or pumping bra if that fits your plan",
      "Baby going-home outfit and weather-appropriate blanket",
    ],
  },
  {
    title: "Partner or support person plan",
    badge: "Support matters",
    accent: "sky" as const,
    summary:
      "A calm support plan helps more than extra gear. The best checklist is the one that makes labor-day logistics feel predictable.",
    items: [
      "Parking, entrance, and check-in plan for the hospital",
      "Snacks, water bottle, and extra layer for the support person",
      "List of who should be updated and when",
      "Childcare or pet-care backup plan if needed",
      "Clear ride-home plan for the day of discharge",
    ],
  },
  {
    title: "Going-home safety",
    badge: "Before delivery",
    accent: "emerald" as const,
    summary:
      "The first ride home is one of the most overlooked parts of birth prep. Handling it before labor starts removes a lot of pressure.",
    items: [
      "Rear-facing infant car seat installed or inspected",
      "Harness adjusted to fit a newborn",
      "Simple route and parking plan for getting home",
      "A safe sleep space ready at home",
      "Basic postpartum and feeding supplies set up before delivery",
    ],
  },
];

const related = [
  {
    href: "/en/checklists/newborn",
    title: "Newborn checklist",
    description: "Set up safe sleep, feeding supplies, diapers, and daily basics before the baby arrives.",
  },
  {
    href: "/en/cal/due-date",
    title: "Due date calculator",
    description: "Use your due date to decide when you want your bag packed and your paperwork done.",
  },
  {
    href: "/en/faq",
    title: "FAQ",
    description: "Get quick answers about how the site works and how to use the tools alongside real-life planning.",
  },
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Birth prep</span>
          <h1 className="mt-title-xl mt-5">Birth prep checklist for a smoother hospital and home transition</h1>
          <p className="mt-text-main mt-4">
            This checklist is built for what parents in the US usually need most before delivery:
            paperwork, a practical hospital bag, a support plan, and a safe ride home. Use it to
            simplify the final weeks instead of buying more things than you need.
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
            This page is meant to make planning easier, not more overwhelming. A smaller, repeatable
            list usually works better than a huge shopping list. Finish the paperwork and car seat
            plan first. Everything else feels easier after that.
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
            { href: "/en/cal/due-date", title: "Due date calculator", description: "Use your due date and pregnancy week to pace the final prep timeline." },
            { href: "/en/info/pregnancy", title: "Pregnancy guide", description: "Keep appointments, symptom planning, and birth prep on the same track." },
            { href: "/en/checklists/newborn", title: "Newborn checklist", description: "Move from birth prep into the first home setup without missing the basics." },
            { href: "/en/qna/health", title: "Health Q&A", description: "Open common parent health questions that often come up late in pregnancy and right after birth." }
          ]}
        />
      </div>
    </div>
  );
}
