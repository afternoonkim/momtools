import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parenting Tools | Due Date, Baby Age, Vaccines, Solids, Growth",
  description:
    "Practical parenting tools for due date planning, baby age, vaccine timing, starting solids, and growth-chart reference.",
  alternates: {
    canonical: "https://momtools.kr/en/cal",
  },
};

export default function CalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-6">
        <section className="mt-card-soft p-5">
          <div className="text-lg font-bold text-slate-800">Parenting tools</div>
          <div className="mt-1 text-sm leading-6 text-slate-500">
            Use these pages for timing, planning, and reference. They do not diagnose symptoms or replace your pediatrician&apos;s guidance.
          </div>
        </section>
        {children}
      </div>
    </div>
  );
}
