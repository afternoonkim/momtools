import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baby guides for everyday parenting decisions",
  description: "Straightforward, practical guidance for pregnancy, newborn care, baby food, and toddler routines.",
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-6">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">MomTools English</span>
          <h1 className="mt-title-lg mt-4">Baby guides for everyday parenting decisions</h1>
          <p className="mt-text-main mt-4">Straightforward, practical guidance for pregnancy, newborn care, baby food, and toddler routines.</p>
        </section>
        <section className="grid gap-4">
          <div className="rounded-3xl border border-amber-100 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-800">Pregnancy</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">Use this section when you want a simpler starting point for due date planning, timing questions, and prep decisions.</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-800">Newborn</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">Focus on feeding, sleep, temperature, diapers, and the small daily questions that feel big in the first weeks.</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-800">Baby food</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">Learn when to start solids, what to offer first, and how to build variety without overcomplicating meals.</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-800">Toddler</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">Find practical help for routines, transitions, daily habits, and common behavior questions.</p>
          </div>
        </section>
        <section className="mt-card p-6">
          <h2 className="text-lg font-bold text-slate-800">Helpful next step</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/en" className="mt-button-secondary">English home</Link>
            <Link href="/en/info" className="mt-button-secondary">Guide hub</Link>
            <Link href="/en/faq" className="mt-button-secondary">FAQ</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
