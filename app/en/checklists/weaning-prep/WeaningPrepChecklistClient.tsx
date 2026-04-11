"use client";

import Link from "next/link";

export default function PageClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-6">
        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">MomTools English</span>
          <h1 className="mt-title-lg mt-4">Starting solids checklist snapshot</h1>
          <p className="mt-text-main mt-4">A short English version of the solids-prep checklist.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Feeding space</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">A stable seat and easy cleanup matter more than buying a long list of tools.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Basic tools</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">Most families need only simple spoons, bowls, bibs, and containers at first.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Planning ahead</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">Think about allergens, leftovers, and cleanup before the first meal.</p>
            </div>
        </section>

        <section className="mt-card-soft p-6">
          <h2 className="text-lg font-bold text-slate-900">Helpful next step</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">This lightweight client component now matches the English site tone. For the full parent-facing page, open the dedicated guide or checklist below.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/en/checklists/weaning" className="mt-button-primary">Open full page</Link>
            <Link href="/en" className="mt-button-secondary">English home</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
