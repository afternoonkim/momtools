import { prisma } from "@/lib/db";
import { buildPregnancyScheduleSeeds } from "@/lib/pregnancy-home";

export async function ensurePregnancySchedulesForChild(childId: string, dueDate?: Date | string | null) {
  if (!dueDate) return;
  const existing = await prisma.pregnancySchedule.count({ where: { childId } });
  if (existing > 0) return;
  const data = buildPregnancyScheduleSeeds(childId, dueDate);
  if (!data.length) return;
  await prisma.pregnancySchedule.createMany({ data });
}
