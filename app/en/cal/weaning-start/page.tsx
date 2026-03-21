import type { Metadata } from "next";
import Link from "next/link";
import WeaningStartCalculatorClient from "./WeaningStartCalculatorClient";

export const metadata: Metadata = {
  title: "Solids Readiness Calculator | First Foods and Baby Feeding Start Window",
  description:
    "Check a practical solids start window, review readiness signs, and plan next steps for first foods and baby feeding in the US.",
  keywords: [
    "solids readiness calculator",
    "when to start solids",
    "first foods for baby",
    "baby feeding start",
    "starting solids guide",
  ],
  alternates: { canonical: "https://momtools.kr/en/cal/weaning-start" },
  openGraph: {
    title: "Solids Readiness Calculator | Baby Feeding Start Window",
    description:
      "A practical first-foods timing tool with readiness signs and simple planning notes for parents.",
    url: "https://momtools.kr/en/cal/weaning-start",
    type: "website",
  },
};

export default function WeaningStartPage() {
  return (
    <>
      <WeaningStartCalculatorClient />

      <section className="mt-card-soft p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Why a solids timeline helps even before your baby takes the first bite</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Starting solids feels easier when parents know what signs to watch for and roughly when those signs often show up. A timing estimate can help you get a high chair, bibs, and a few first foods ready without feeling like you need to rush.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              Most families are balancing questions about puree, baby-led feeding, allergens, iron-rich foods, and whether their baby is actually ready. This page works best as a simple planning tool that helps you connect timing with readiness, rather than treating age alone as the answer.
            </p>
          </div>
          <aside className="rounded-3xl border border-orange-100 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Helpful next pages</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/en/baby-food" className="rounded-2xl bg-orange-50 px-4 py-3 text-slate-700">Baby food guide</Link>
              <Link href="/en/checklists/weaning" className="rounded-2xl bg-orange-50 px-4 py-3 text-slate-700">Starting solids checklist</Link>
              <Link href="/en/qna/health" className="rounded-2xl bg-orange-50 px-4 py-3 text-slate-700">Parent Q&amp;A</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Age and readiness work together",
            body: "Parents usually use timing as a guide, then confirm it with head control, interest in food, and the ability to sit with support.",
          },
          {
            title: "Useful for home prep",
            body: "It helps with deciding when to buy supplies, introduce first foods, and start thinking about allergen exposure and texture progression.",
          },
          {
            title: "Great paired with food ideas",
            body: "After the date window looks right, the next helpful step is choosing a few realistic first foods and a simple routine you can repeat.",
          },
        ].map((item) => (
          <article key={item.title} className="mt-card p-5">
            <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
