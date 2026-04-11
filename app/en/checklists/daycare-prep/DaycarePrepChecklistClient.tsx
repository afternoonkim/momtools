"use client";

import Link from "next/link";

export default function PageClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-6">
        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">MomTools English</span>
          <h1 className="mt-title-lg mt-4">Daycare prep checklist snapshot</h1>
          <p className="mt-text-main mt-4">A short English version of the daycare checklist for labels, extra clothes, and daily routines.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Daily bag</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">Start with extra clothes, labels, food items if needed, and any classroom notes.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Pickup and contact details</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">Make pickup plans and emergency contacts clear before the first week begins.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">Transition support</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">Simple morning routines and predictable pickup rhythms often make the first weeks easier.</p>
            </div>
        </section>

        <section className="mt-card-soft p-6">
          <h2 className="text-lg font-bold text-slate-900">Helpful next step</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">This lightweight client component now matches the English site tone. For the full parent-facing page, open the dedicated guide or checklist below.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/en/checklists/daycare" className="mt-button-primary">Open full page</Link>
            <Link href="/en" className="mt-button-secondary">English home</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
