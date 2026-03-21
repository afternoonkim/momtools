import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "Newborn guide | feeding, sleep, diapers, and when to call the pediatrician",
  description:
    "A practical newborn guide for parents in the US, covering feeding patterns, sleep basics, diaper changes, temperature questions, and signs to bring to your pediatrician.",
  alternates: { canonical: "https://momtools.kr/en/info/newborn" },
  openGraph: {
    title: "Newborn guide | MomTools",
    description: "Feeding, sleep, diaper output, and the daily questions that matter most in the newborn stage.",
    url: "https://momtools.kr/en/info/newborn",
    locale: "en_US",
    type: "website",
  },
};

export default function NewbornPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Newborn guide</span>
          <h1 className="mt-title-xl mt-5">The first weeks feel less confusing when you track the basics</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Newborn life is full of repeated questions about feeds, diapers, sleep stretches, spit-up, and what is still normal.
            This guide keeps the focus on the patterns parents actually watch day to day.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Feeding" text="Look at feeding frequency, latch or bottle comfort, and whether your baby seems satisfied after feeds." />
          <InfoCard title="Sleep" text="Newborn sleep is fragmented. Focus on safe sleep setup and what helps the next stretch go more smoothly." />
          <InfoCard title="Diapers and output" text="Wet and dirty diapers often tell you more than one feeding session does on its own." />
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="Newborn guide" />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900">What usually helps most</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>Instead of judging one hard day, try looking at a 24-hour pattern. Feeding, diaper output, alert periods, and sleep often make more sense when you zoom out.</p>
              <p>Write down the questions you want answered before pediatrician visits. Parents usually remember concerns more clearly when they see them listed together.</p>
              <p>Call sooner rather than later when something feels off and your baby seems unusually sleepy, hard to wake for feeds, or not acting like themselves.</p>
            </div>
          </div>
          <aside className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">Related tools and pages</h2>
            <div className="mt-4 grid gap-3">
              <RelatedLink href="/en/cal/baby-age" title="Baby age calculator" description="Check exact age in weeks and months." />
              <RelatedLink href="/en/cal/vaccine-schedule" title="Vaccine schedule" description="See common timing in the US routine schedule." />
              <RelatedLink href="/en/qna/health" title="Health Q&A" description="Move into question-by-question answers." />
            </div>
          </aside>
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
