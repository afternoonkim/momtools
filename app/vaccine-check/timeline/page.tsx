import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Baby, CheckCircle2, ShieldCheck } from "lucide-react";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getVaccinationScheduleForBirthDate } from "@/lib/vaccination-schedule";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "예방접종 완료 타임라인",
  description: "아이별 예방접종 완료 기록을 날짜순으로 확인하세요.",
  robots: { index: false, follow: false },
};

function toDateInputValue(value: Date) {
  return value.toISOString().slice(0, 10);
}

function parseLocalDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatKoreanDate(value: string) {
  const date = parseLocalDate(value);
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(date);
}

function childDisplayName(child: { nickname: string | null }, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

export default async function VaccineTimelinePage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/vaccine-check/timeline");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const selectedChild = user.children.find((child) => child.id === params?.childId) ?? user.children.find((child) => child.isPrimary) ?? user.children[0];
  const schedule = getVaccinationScheduleForBirthDate(selectedChild.birthDate);
  const scheduleMap = new Map(schedule.map((item) => [`${item.vaccineKey}__${item.doseKey}`, item]));

  const records = await prisma.childVaccinationRecord.findMany({
    where: { childId: selectedChild.id, completed: true },
    orderBy: [{ completedAt: "desc" }, { updatedAt: "desc" }],
    select: {
      id: true,
      vaccineKey: true,
      doseKey: true,
      scheduledDate: true,
      completedAt: true,
      updatedAt: true,
      note: true,
    },
  });

  const grouped = records.reduce<Map<string, typeof records>>((acc, record) => {
    const completedDate = record.completedAt?.toISOString().slice(0, 10) ?? record.updatedAt.toISOString().slice(0, 10);
    const current = acc.get(completedDate) ?? [];
    current.push(record);
    acc.set(completedDate, current);
    return acc;
  }, new Map());

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-3.5">
          <span className="mt-badge">예방접종 타임라인</span>
          <h1 className="mt-2 text-[20px] font-black leading-7 text-slate-950">완료한 접종을 날짜별로 확인해요</h1>
          <p className="mt-1 text-[12px] leading-5 text-slate-600">
            MomTools에 체크한 완료 기록만 보여줘요. 공식 접종 이력은 의료기관·보건소·예방접종도우미 기록을 함께 확인해 주세요.
          </p>
        </section>

        <section className="mt-simple-list" aria-label="아이 선택">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {user.children.map((child, index) => {
              const active = child.id === selectedChild.id;
              return (
                <Link
                  key={child.id}
                  href={`/vaccine-check/timeline?childId=${encodeURIComponent(child.id)}`}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    active ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Baby size={13} aria-hidden />
                  {childDisplayName(child, index)}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-2 gap-2" aria-label="타임라인 요약">
          <div className="rounded-2xl border border-slate-100 bg-white px-3 py-2">
            <p className="text-[10px] font-bold text-slate-500">완료 기록</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">{records.length}</p>
          </div>
          <Link href={`/vaccine-check?childId=${encodeURIComponent(selectedChild.id)}`} className="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-2 text-[12px] font-extrabold text-amber-800">
            <ShieldCheck size={14} className="mb-1" aria-hidden />
            체크리스트로 돌아가기
          </Link>
        </section>

        {records.length ? (
          <section className="space-y-3" aria-label="완료한 예방접종 타임라인">
            {Array.from(grouped.entries()).map(([completedDate, items]) => (
              <article key={completedDate} className="rounded-3xl border border-slate-100 bg-white p-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 size={16} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-black text-slate-950">{formatKoreanDate(completedDate)}</p>
                    <p className="text-[11px] font-bold text-slate-500">{items.length}개 접종 완료 기록</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2 border-l border-dashed border-emerald-200 pl-3">
                  {items.map((record) => {
                    const scheduleItem = scheduleMap.get(`${record.vaccineKey}__${record.doseKey}`);
                    const scheduledDate = toDateInputValue(record.scheduledDate);
                    return (
                      <div key={record.id} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[13px] font-black text-slate-900">{scheduleItem?.title ?? record.doseKey}</p>
                            <p className="mt-0.5 text-[11px] font-bold text-slate-500">예정 시기: {scheduledDate}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-extrabold text-emerald-700">완료</span>
                        </div>
                        {scheduleItem?.note ? <p className="mt-1 text-[11px] leading-4 text-slate-600">{scheduleItem.note}</p> : null}
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="rounded-3xl border border-slate-100 bg-white p-4 text-center">
            <p className="text-[14px] font-black text-slate-900">아직 완료한 접종 기록이 없어요</p>
            <p className="mt-1 text-[12px] leading-5 text-slate-600">예방접종 체크리스트에서 완료한 항목을 체크하면 이곳에 날짜별로 쌓여요.</p>
            <Link href={`/vaccine-check?childId=${encodeURIComponent(selectedChild.id)}`} className="mt-3 inline-flex rounded-full bg-amber-500 px-4 py-2 text-[12px] font-black text-white">
              체크리스트로 가기
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
