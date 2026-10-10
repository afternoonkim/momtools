import type { Metadata } from "next";
import Link from "next/link";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { PARTNER_SITES, getPartnerLinkProps } from "@/lib/partner-sites";

export const metadata: Metadata = {
  title: "Parenting Tools | Due Date, Baby Age, Vaccines, Solids, Growth",
  description:
    "Practical parenting tools for due date, baby age, U.S. vaccine timing, solids readiness, and growth-chart reference — plus a link to everyday calculators outside parenting.",
  alternates: { canonical: "https://momtools.kr/en/cal" },
};

const tools = [
  {
    href: "/en/cal/due-date",
    title: "Due Date Calculator",
    desc: "Estimate your due date and current pregnancy week from your last menstrual period.",
  },
  {
    href: "/en/cal/baby-age",
    title: "Baby Age Calculator",
    desc: "See your baby’s exact age in months, weeks, and days.",
  },
  {
    href: "/en/cal/vaccine-schedule",
    title: "Vaccine Schedule Reference",
    desc: "Use your child’s birth date to organize routine vaccine timing, then compare it with the current CDC schedule and official vaccine record.",
  },
  {
    href: "/en/cal/weaning-start",
    title: "Starting Solids Readiness",
    desc: "Use age and readiness signs together to plan when to begin solids.",
  },
  {
    href: "/en/cal/growth-percentile",
    title: "Growth Chart Helper",
    desc: "Organize age, sex, length or height, and weight before checking the appropriate WHO or CDC growth chart. This tool does not estimate a percentile.",
  },
];

export default function EnCalHubPage() {
  const megaProps = getPartnerLinkProps(PARTNER_SITES.megaCalculators, "en");

  return (
    <div className="space-y-8">
      <section className="mt-card p-8 md:p-10">
        <span className="mt-badge">Parenting tools</span>
        <h1 className="mt-title-xl mt-5">Quick tools for pregnancy and baby milestones</h1>
        <p className="mt-text-main mt-4 max-w-4xl">
          Choose the tool that matches the question you have now, then use the related guide or Q&amp;A when you need more context.
        </p>
      </section>

      <MedicalDisclaimer lang="en" variant="compact" />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="mt-card p-6 transition hover:-translate-y-0.5">
            <h2 className="text-lg font-bold text-slate-800">{tool.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{tool.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mt-card p-6 md:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Everyday calculators</div>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800">Need a calculator outside parenting?</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          <strong>Mega Calculators</strong> covers everyday numbers such as currency, loans, savings, and unit conversions.
        </p>
        <a {...megaProps} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          {PARTNER_SITES.megaCalculators.copy.en.cta} ↗
        </a>
        <p className="mt-3 text-xs text-slate-500">{PARTNER_SITES.megaCalculators.domain}</p>
      </section>
    </div>
  );
}
