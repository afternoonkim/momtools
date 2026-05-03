import type { Metadata } from "next";
import Link from "next/link";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { PARTNER_SITES, getPartnerLinkProps } from "@/lib/partner-sites";

export const metadata: Metadata = {
  title: "Parenting Calculators | Due Date, Baby Age, Vaccines, Solids, Growth",
  description:
    "Simple parenting calculators for due date, baby age, US vaccine timing, solids readiness, and baby growth — plus a link to our other everyday calculator hub.",
  alternates: { canonical: "https://momtools.kr/en/cal" },
};

const tools = [
  {
    href: "/en/cal/due-date",
    title: "Due Date Calculator",
    desc: "Estimate your due date and current pregnancy week from your last period.",
  },
  {
    href: "/en/cal/baby-age",
    title: "Baby Age Calculator",
    desc: "See your baby’s exact age in months, weeks, and days.",
  },
  {
    href: "/en/cal/vaccine-schedule",
    title: "Vaccine Schedule Calculator",
    desc: "Build a simple US infant vaccine timeline from your baby’s birth date.",
  },
  {
    href: "/en/cal/weaning-start",
    title: "Solids Readiness Calculator",
    desc: "Estimate a common solids start window and review readiness signs.",
  },
  {
    href: "/en/cal/growth-percentile",
    title: "Growth Percentile Check",
    desc: "Get a quick estimate using age, sex, length, and weight.",
  },
];

export default function EnCalHubPage() {
  const megaProps = getPartnerLinkProps(PARTNER_SITES.megaCalculators, "en");

  return (
    <div className="space-y-8">
      <section className="mt-card p-8 md:p-10">
        <span className="mt-badge">Parenting tools</span>
        <h1 className="mt-title-xl mt-5">Quick calculators for pregnancy and baby milestones</h1>
        <p className="mt-text-main mt-4 max-w-4xl">
          Use these tools when you want a fast answer without opening several tabs.
          Each one is built around common questions parents in the US ask most often.
        </p>
      </section>

      <MedicalDisclaimer lang="en" variant="compact" />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="mt-card p-6 transition hover:-translate-y-0.5"
          >
            <h2 className="text-lg font-bold text-slate-800">{tool.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{tool.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mt-card p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Sister site</div>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800">
          Need calculators outside parenting? Try Mega Calculators
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          The same maintainer behind MomTools also runs <strong>Mega Calculators</strong> — a hub of everyday calculators
          for currency, loans, savings, and unit conversions. If you frequently switch between parenting prep and household
          numbers, it’s a useful sister site to keep open in another tab.
        </p>
        <a
          {...megaProps}
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {PARTNER_SITES.megaCalculators.copy.en.cta} ↗
        </a>
        <p className="mt-3 text-xs text-slate-500">{PARTNER_SITES.megaCalculators.domain}</p>
      </section>
    </div>
  );
}
