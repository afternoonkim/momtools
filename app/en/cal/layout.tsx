import type { Metadata } from "next";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "Parenting Calculators | Due Date, Baby Age, Vaccines, Solids, Growth",
  description:
    "Simple parenting calculators for due date planning, baby age, vaccine timing, starting solids, and baby growth reference.",
  alternates: {
    canonical: "https://momtools.kr/en/cal",
  },
};

export default function CalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-6">
        <section className="mt-card-soft p-5">
          <div className="text-lg font-bold text-slate-800">Parenting calculators</div>
          <div className="mt-1 text-sm leading-6 text-slate-500">
            Use these pages when you need a quick estimate, a planning date, or a clearer next step.
            They are built for everyday parent questions, not diagnosis or treatment. When symptoms,
            missed vaccines, feeding concerns, or growth worries are involved, use your pediatrician&apos;s
            advice as the final guide.
          </div>
        </section>

        <AdBlock placement="calculatorTop" format="horizontal" />
        {children}
        <AdBlock placement="calculatorBottom" format="rectangle" />
      </div>
    </div>
  );
}
