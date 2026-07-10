import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PregnancyScheduleClient from "@/components/pregnancy/PregnancyScheduleClient";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";
import { ensurePregnancySchedulesForChild } from "@/lib/pregnancy-records";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "산전검진 일정",
  description: "출산예정일 기준 산전검진 일정을 확인하고 완료 체크하세요.",
  robots: { index: false, follow: false },
};

export default async function PregnancySchedulesPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/my");
  const { id } = await params;
  const child = await prisma.child.findFirst({ where: { id, ...getAccessibleChildWhere(user.id) }, select: { id: true, nickname: true, birthDate: true, expectedDueDate: true } });
  if (!child) redirect("/my");
  if (child.birthDate || !child.expectedDueDate) redirect(`/my?childId=${child.id}`);

  await ensurePregnancySchedulesForChild(child.id, child.expectedDueDate);
  const schedules = await prisma.pregnancySchedule.findMany({
    where: { childId: child.id },
    orderBy: { scheduledDate: "asc" },
    select: { id: true, title: true, description: true, week: true, scheduledDate: true, status: true, memo: true },
  });

  return <PregnancyScheduleClient childId={child.id} childName={child.nickname ?? "우리 아기"} schedules={schedules.map((schedule) => ({ ...schedule, scheduledDate: schedule.scheduledDate.toISOString().slice(0, 10) }))} />;
}
