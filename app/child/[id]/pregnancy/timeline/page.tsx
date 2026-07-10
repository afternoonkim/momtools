import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Activity, CalendarDays } from "lucide-react";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "임신 타임라인",
  description: "산전검진 일정과 태동 기록을 한눈에 확인하세요.",
  robots: { index: false, follow: false },
};

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(value);
}

export default async function PregnancyTimelinePage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/my");
  const { id } = await params;
  const child = await prisma.child.findFirst({ where: { id, ...getAccessibleChildWhere(user.id) }, select: { id: true, nickname: true, birthDate: true, expectedDueDate: true } });
  if (!child) redirect("/my");
  if (child.birthDate || !child.expectedDueDate) redirect(`/my?childId=${child.id}`);

  const [schedules, movements] = await Promise.all([
    prisma.pregnancySchedule.findMany({ where: { childId: child.id }, select: { id: true, title: true, scheduledDate: true, status: true, week: true }, orderBy: { scheduledDate: "asc" } }),
    prisma.fetalMovementRecord.findMany({ where: { childId: child.id }, select: { id: true, measuredAt: true, count: true, durationMinutes: true, memo: true }, orderBy: { measuredAt: "asc" }, take: 80 }),
  ]);

  const events = [
    ...schedules.map((schedule) => ({
      id: `schedule-${schedule.id}`,
      date: schedule.scheduledDate,
      title: schedule.title,
      description: `${schedule.status === "DONE" ? "완료" : "예정"}${schedule.week ? ` · ${schedule.week}주` : ""}`,
      icon: CalendarDays,
    })),
    ...movements.map((movement) => ({
      id: `movement-${movement.id}`,
      date: movement.measuredAt,
      title: "태동 기록",
      description: `${movement.count}회 · ${movement.durationMinutes}분${movement.memo ? ` · ${movement.memo}` : ""}`,
      icon: Activity,
    })),
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">임신 타임라인</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">{child.nickname ?? "우리 아기"}의 흐름을 한눈에 봐요</h1>
          <p className="mt-2 text-[12px] leading-5 text-slate-600">산전검진 일정과 태동 기록을 시간순으로 모아 보여드려요.</p>
        </section>

        <section className="mt-card p-4">
          {events.length ? (
            <ol className="space-y-3">
              {events.map((event) => {
                const Icon = event.icon;
                return (
                  <li key={event.id} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                      <Icon size={16} aria-hidden />
                    </span>
                    <div className="min-w-0 border-b border-slate-100 pb-3 last:border-b-0">
                      <p className="text-[11px] font-bold text-slate-500">{formatDate(event.date)}</p>
                      <p className="mt-0.5 text-[13px] font-extrabold text-slate-900">{event.title}</p>
                      <p className="mt-0.5 text-[12px] leading-5 text-slate-600">{event.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          ) : (
            <p className="text-[12px] font-bold leading-5 text-slate-500">타임라인에 표시할 기록이 아직 없어요.</p>
          )}
        </section>
      </div>
    </main>
  );
}
