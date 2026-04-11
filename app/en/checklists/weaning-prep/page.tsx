import type { Metadata } from "next";
import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Starting Solids Checklist | Feeding Setup, Tools, and First Foods",
  description:
    "A simple starting solids checklist for US parents covering high chair setup, feeding tools, first foods, allergen planning, storage, and cleanup basics.",
  alternates: { canonical: "https://momtools.kr/en/checklists/weaning" },
};

const storageKey = "en-weaning-prep-checklist";

const sections = [
  {
    title: "Feeding space",
    badge: "Build the routine",
    accent: "sky" as const,
    summary:
      "Solids feel easier when the meal setup is repeatable. The goal is a stable seat, easy cleanup, and a place where you can sit with your baby every time.",
    items: [
      "High chair with secure straps and stable support",
      "Easy-clean bibs or smocks",
      "Simple floor mat or cleanup plan under the chair",
      "Consistent feeding spot with enough light",
      "Hand-washing and post-meal cleanup plan",
    ],
  },
  {
    title: "Basic feeding tools",
    badge: "Use often",
    accent: "amber" as const,
    summary:
      "You can start solids with fewer tools than most shopping lists suggest. Most families need only the basics at first.",
    items: [
      "Soft-tipped baby spoons",
      "A few small bowls or suction plates",
      "Open cup or training cup if you plan to offer water with meals",
      "Storage containers for leftovers",
      "Soft cloths for quick cleanup",
    ],
  },
  {
    title: "First food plan",
    badge: "Keep it simple",
    accent: "emerald" as const,
    summary:
      "A strong first-food plan is built around readiness, safe textures, iron-rich foods, and an approach to common allergens that fits your pediatrician’s guidance.",
    items: [
      "A short list of first foods you want to try",
      "At least one iron-rich option such as infant oatmeal, beans, egg, meat, or lentils",
      "Plan to introduce new foods one at a time at first",
      "Simple peanut and egg plan in age-appropriate forms if recommended by your pediatrician",
      "Texture plan that matches spoon-feeding, baby-led weaning, or a mix",
    ],
  },
  {
    title: "Storage and cleanup",
    badge: "Repeat daily",
    accent: "rose" as const,
    summary:
      "Solids become much more manageable when prep and cleanup are quick enough to repeat without stress.",
    items: [
      "Space in the fridge for small portions",
      "Freezer-safe containers if you want to batch prep",
      "Dish brush or sponge used for feeding items",
      "Laundry plan for bibs and cloths",
      "Short after-meal routine you can repeat every day",
    ],
  },
];

const related = [
  {
    href: "/en/baby-food",
    title: "Baby food guide",
    description: "Browse 150 US-style baby food ideas across first foods, stage 2 meals, and stage 3 family-style meals.",
  },
  {
    href: "/en/cal/weaning-start",
    title: "Solids readiness calculator",
    description: "Check the common timing window and readiness cues before starting solids.",
  },
  {
    href: "/en/qna/health",
    title: "Health Q&A",
    description: "Read parent-friendly answers about constipation, gas, spit-up, allergies, and common baby concerns.",
  },
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Starting solids</span>
          <h1 className="mt-title-xl mt-5">Starting solids checklist for a calmer first-food routine</h1>
          <p className="mt-text-main mt-4">
            This page is built for the way many US parents actually start solids at home: a high
            chair, a short first-food list, a simple cleanup plan, and baby-safe meals that focus on
            texture and repetition more than perfect portions.
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
            Most babies eat very small amounts when solids begin. That is normal. The win in the
            first weeks is practice: sitting, touching food, tasting, and learning the meal routine.
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
            { href: "/en/info/weaning", title: "Solids guide", description: "Read the main readiness signs and first-food planning before you buy anything." },
            { href: "/en/cal/weaning-start", title: "Starting solids calculator", description: "Estimate the timing window before building the feeding setup." },
            { href: "/en/baby-food", title: "Baby food ideas", description: "Move from prep into simple recipe ideas and texture planning." },
            { href: "/en/qna/growth", title: "Growth Q&A", description: "Compare feeding questions with growth and milestone questions." }
          ]}
        />
      </div>
    </div>
  );
}
