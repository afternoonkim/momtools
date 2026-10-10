import type { Metadata } from "next";
import Link from "next/link";
import { stageGuides, stageLabels, getRecipesByStage } from "@/data/en/babyFood";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/baby-food");

export const metadata: Metadata = {
  title: "Baby Food Guide | First foods, textures, allergens, and choking safety",
  description:
    "Practical U.S. baby food guidance with first foods, texture progression, allergen introduction, choking-risk reminders, and stage-based meal ideas.",
  alternates: { canonical: "https://momtools.kr/en/baby-food" },
};

const stages = ["early", "middle", "late"] as const;

const safetyNotes = [
  "CDC recommends starting foods other than breast milk or infant formula at about 6 months and not before 4 months.",
  "At first, try one single-ingredient food at a time and allow time to notice reactions. Potentially allergenic foods can be introduced along with other foods in developmentally safe forms.",
  "For severe eczema or egg allergy, ask your child’s clinician how to introduce peanut-containing foods safely.",
  "Always match texture and shape to your baby’s feeding skills and supervise meals. Whole nuts, whole grapes, popcorn, hot dog rounds, hard raw pieces, and spoonfuls of nut butter are choking hazards.",
  "Avoid honey before 12 months. Cow’s milk as a drink is not recommended before 12 months, although pasteurized yogurt and cheese can be introduced earlier in age-appropriate forms.",
];

export default function BabyFoodHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Baby food guide</span>
          <h1 className="mt-title-xl mt-5">Baby food by stage, with safety first</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Browse first foods, thicker combinations, and soft finger-food ideas. Stage labels are only rough feeding-progress guides,
            not medical age cutoffs. Readiness, safe texture, supervision, and your child’s individual feeding history matter more than moving to the next label on a fixed schedule.
          </p>
        </section>

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="Reviewed against current CDC infant and toddler feeding guidance, including around-6-month timing, allergen introduction, choking prevention, honey, and cow’s-milk guidance."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Before you choose a recipe</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {safetyNotes.map((item) => <li key={item} className="rounded-2xl bg-amber-50 px-4 py-4 text-slate-700">{item}</li>)}
          </ul>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {stages.map((stage) => (
            <Link key={stage} href={`/en/baby-food/${stage}`} className="mt-card p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{stageGuides[stage].age}</div>
              <h2 className="mt-3 text-xl font-bold text-slate-800">{stageLabels[stage]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{stageGuides[stage].intro}</p>
              <div className="mt-4 text-sm font-semibold text-amber-700">{getRecipesByStage(stage).length} meal ideas</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Quick feeding notes</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {stages.map((stage) => (
              <div key={stage} className="rounded-3xl bg-white px-5 py-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-800">{stageLabels[stage]}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{stageGuides[stage].texture}</p>
                <p className="mt-3 text-sm leading-7 text-slate-500">{stageGuides[stage].focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/en/cal/weaning-start" className="mt-chip-link">Starting solids readiness</Link>
            <a href="https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html" target="_blank" rel="noreferrer" className="mt-chip-link">CDC first-food guidance</a>
          </div>
        </section>
      </div>
    </div>
  );
}
