import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { getAccessibleChildWhere } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

type Payload = { status?: string; memo?: string; scheduledDate?: string };

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ childId: string; scheduleId: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const { childId, scheduleId } = await params;
  const child = await prisma.child.findFirst({ where: { id: childId, ...getAccessibleChildWhere(user.id) }, select: { id: true } });
  if (!child) return NextResponse.json({ message: "아이 정보를 찾지 못했어요." }, { status: 404 });

  const body = (await request.json().catch(() => null)) as Payload | null;
  const status = body?.status === "DONE" || body?.status === "SKIPPED" || body?.status === "UPCOMING" ? body.status : undefined;
  const schedule = await prisma.pregnancySchedule.findFirst({ where: { id: scheduleId, childId: child.id }, select: { id: true } });
  if (!schedule) return NextResponse.json({ message: "일정을 찾지 못했어요." }, { status: 404 });

  await prisma.pregnancySchedule.update({
    where: { id: schedule.id },
    data: {
      ...(status ? { status } : {}),
      ...(typeof body?.memo === "string" ? { memo: body.memo.trim().slice(0, 300) || null } : {}),
    },
  });

  return NextResponse.json({ ok: true });
}
