import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "We could not find that page on MomTools English. Try one of the popular sections below.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/en/cal", title: "Calculators", description: "Open the most-used parenting tools for due date timing, baby age, solids, vaccines, and growth." },
  { href: "/en/qna", title: "Parent Q&A", description: "Browse structured answers for health, growth, routines, and common parent questions." },
  { href: "/en/info", title: "Guides", description: "See the main planning guides for pregnancy, newborn care, solids, and toddler routines." },
  { href: "/en/checklists", title: "Checklists", description: "Use practical prep lists for birth, newborn setup, solids, and daycare planning." },
];

export default function NotFoundPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10 text-center">
          <span className="mt-badge">404</span>
          <h1 className="mt-title-xl mt-5">We could not find that page</h1>
          <p className="mt-text-main mt-4">
            The link may have changed, or the page may no longer be available. The shortcuts below are the fastest way back to the main parenting tools and guides.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/en" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Back to home</Link>
            <Link href="/en/qna" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">Open Parent Q&amp;A</Link>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900">Try one of these pages next</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-sky-200">
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
