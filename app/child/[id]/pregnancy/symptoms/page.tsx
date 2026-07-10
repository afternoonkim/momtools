import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";
import { getSeverityClasses, getSeverityLabel, pregnancySymptoms } from "@/lib/pregnancy-home";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "임신 증상 확인",
  description: "임신 중 몸의 신호를 응급도와 카테고리별로 확인하세요.",
  robots: { index: false, follow: false },
};

const severityFilters = [
  { label: "전체", value: "all" },
  { label: "응급", value: "EMERGENCY" },
  { label: "진료 권장", value: "SEE_DOCTOR" },
  { label: "정상 범위", value: "NORMAL" },
] as const;

const categories = ["전체", "출혈", "통증", "태동", "양수·분비물", "발열", "소변", "기타"];

export default async function PregnancySymptomsPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams?: Promise<{ severity?: string; category?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/my");
  const { id } = await params;
  const query = await searchParams;
  const child = await prisma.child.findFirst({ where: { id, ...getAccessibleChildWhere(user.id) }, select: { id: true, nickname: true, birthDate: true, expectedDueDate: true } });
  if (!child) redirect("/my");
  if (child.birthDate || !child.expectedDueDate) redirect(`/my?childId=${child.id}`);

  const selectedSeverity = query?.severity ?? "all";
  const selectedCategory = query?.category ?? "전체";
  const filtered = pregnancySymptoms.filter((item) => (selectedSeverity === "all" || item.severity === selectedSeverity) && (selectedCategory === "전체" || item.category === selectedCategory));
  const base = `/child/${encodeURIComponent(child.id)}/pregnancy/symptoms`;

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">임신 증상 확인</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">몸의 신호를 가볍게 확인해요</h1>
          <p className="mt-2 text-[12px] leading-5 text-slate-600">화면 내용은 진단이 아니라 참고용이에요. 평소와 다르거나 걱정이 계속되면 의료기관에 문의하세요.</p>
        </section>

        <section className="mt-card p-3">
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {severityFilters.map((filter) => (
              <Link key={filter.value} href={`${base}?severity=${filter.value}&category=${encodeURIComponent(selectedCategory)}`} className={`shrink-0 rounded-full border px-3 py-2 text-[12px] font-extrabold ${selectedSeverity === filter.value ? "border-amber-300 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"}`}>{filter.label}</Link>
            ))}
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <Link key={category} href={`${base}?severity=${selectedSeverity}&category=${encodeURIComponent(category)}`} className={`shrink-0 rounded-full border px-3 py-2 text-[12px] font-extrabold ${selectedCategory === category ? "border-amber-300 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"}`}>{category}</Link>
            ))}
          </div>
        </section>

        <section className="space-y-2" aria-label="증상 목록">
          {filtered.map((symptom) => (
            <Link key={symptom.id} href={`${base}/${symptom.slug}`} className="mt-card block p-4 transition active:scale-[0.99]">
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-extrabold ${getSeverityClasses(symptom.severity)}`}>{getSeverityLabel(symptom.severity)}</span>
              <h2 className="mt-3 text-[15px] font-black text-slate-950">{symptom.title}</h2>
              <p className="mt-1 text-[12px] leading-5 text-slate-600">{symptom.summary}</p>
              <span className="mt-3 inline-flex text-[12px] font-extrabold text-amber-700">자세히 보기 →</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
