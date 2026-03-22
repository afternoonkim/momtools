import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "./DueDateCalculatorClient";

export const metadata: Metadata = {
  title: "Due Date Calculator | OB-GYN pregnancy week and due date estimate",
  description: "Estimate your baby’s due date from your last menstrual period, review current pregnancy week, and plan common OB-GYN milestones used in the U.S.",
  alternates: { canonical: "https://momtools.kr/en/cal/due-date" },
};

export default function Page() {
  return (<><DueDateCalculatorClient /><section className="mt-card-soft p-6 md:p-8"><div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]"><div><h2 className="text-xl font-bold text-slate-900">How parents usually use this page</h2><p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">Estimate your baby’s due date from your last menstrual period, review current pregnancy week, and plan common OB-GYN milestones used in the U.S. Parents usually open this tool when they want a clear answer they can use for appointments, planning, or a quick home reference.</p></div><aside className="rounded-3xl border border-sky-100 bg-white p-5"><div className="text-sm font-semibold text-slate-900">Helpful next pages</div><div className="mt-4 grid gap-3 text-sm"><Link href="/en/checklists/birth" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Birth prep checklist</Link><Link href="/en/info/pregnancy" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Pregnancy guide</Link><Link href="/en/qna/health" className="rounded-2xl bg-sky-50 px-4 py-3 text-slate-700">Health Q&amp;A</Link></div></aside></div></section></>);
}
