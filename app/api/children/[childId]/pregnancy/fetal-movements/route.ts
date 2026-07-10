import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { getAccessibleChildWhere } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

type Payload = {
  measuredAt?: string;
  durationMinutes?: number;
  count?: number;
  memo?: string;
};

export async function POST(request: NextRequest, { params }: { params: Promise<{ childId: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const { childId } = await params;
  const child = await prisma.child.findFirst({ where: { id: childId, ...getAccessibleChildWhere(user.id) }, select: { id: true, birthDate: true, expectedDueDate: true } });
  if (!child) return NextResponse.json({ message: "아이 정보를 찾지 못했어요." }, { status: 404 });
  if (child.birthDate || !child.expectedDueDate) return NextResponse.json({ message: "임신 홈에서만 태동 기록을 남길 수 있어요." }, { status: 400 });

  const body = (await request.json().catch(() => null)) as Payload | null;
  const measuredAt = body?.measuredAt ? new Date(body.measuredAt) : null;
  const durationMinutes = Number(body?.durationMinutes);
  const count = Number(body?.count);
  if (!measuredAt || Number.isNaN(measuredAt.getTime()) || !Number.isFinite(durationMinutes) || durationMinutes <= 0 || !Number.isFinite(count) || count < 0) {
    return NextResponse.json({ message: "태동 기록 값을 다시 확인해 주세요." }, { status: 400 });
  }

  const record = await prisma.fetalMovementRecord.create({
    data: {
      childId: child.id,
      measuredAt,
      durationMinutes: Math.round(durationMinutes),
      count: Math.round(count),
      memo: body?.memo?.trim().slice(0, 300) || null,
    },
    select: { id: true, measuredAt: true, durationMinutes: true, count: true, memo: true },
  });

  return NextResponse.json({
    record: {
      id: record.id,
      measuredAt: record.measuredAt.toISOString(),
      durationMinutes: record.durationMinutes,
      count: record.count,
      memo: record.memo,
    },
  });
}
