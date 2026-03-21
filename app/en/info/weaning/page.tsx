import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "Starting solids guide | when to begin, first foods, and texture progression",
  description:
    "A practical starting solids guide for parents in the US, covering readiness signs, first foods, texture progression, and how to keep meals simple and safe.",
  alternates: { canonical: "https://momtools.kr/en/info/weaning" },
  openGraph: {
    title: "Starting solids guide | MomTools",
    description: "Readiness signs, first foods, texture progression, and practical meal planning for starting solids.",
    url: "https://momtools.kr/en/info/weaning",
    locale: "en_US",
    type: "website",
  },
};

export default function WeaningPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Starting solids guide</span>
          <h1 className="mt-title-xl mt-5">A calmer way to begin solids</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Starting solids gets easier when you focus on readiness, safe textures, and repetition instead of trying to build the perfect meal plan right away.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Readiness" text="Good head control, interest in food, and sitting with support matter more than chasing one exact date." />
          <InfoCard title="First foods" text="Parents often start with iron-rich foods, simple produce, and repeated exposure to new tastes." />
          <InfoCard title="Texture" text="Move forward slowly as your baby handles smoother foods, thicker textures, and then soft finger foods." />
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="Starting solids guide" />

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900">Helpful next steps</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <RelatedLink href="/en/cal/weaning-start" title="Starting solids calculator" description="See a simple starting point based on age." />
            <RelatedLink href="/en/baby-food" title="Baby food by age" description="Move from timing questions to actual food ideas." />
            <RelatedLink href="/en/checklists/weaning" title="Solids prep checklist" description="Keep bibs, spoons, trays, and cleanup items organized." />
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return <div className="mt-card-soft p-5"><h2 className="text-lg font-bold text-slate-900">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>;
}
function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">{title}</div><div className="mt-2 text-sm leading-7 text-slate-500">{description}</div></Link>;
}
