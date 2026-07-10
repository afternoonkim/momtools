import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { FEELING_REACTIONS } from "@/lib/feelings";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const body = (await request.json().catch(() => null)) as { recordId?: unknown; reactionType?: unknown } | null;
  const recordId = typeof body?.recordId === "string" ? body.recordId : "";
  const reactionType = typeof body?.reactionType === "string" ? body.reactionType : "";

  if (!recordId || !FEELING_REACTIONS.some((reaction) => reaction.key === reactionType)) {
    return NextResponse.json({ error: "공감 정보를 확인할 수 없습니다." }, { status: 400 });
  }

  const record = await prisma.feelingRecord.findFirst({
    where: { id: recordId, visibility: "PUBLIC" },
    select: { id: true },
  });
  if (!record) return NextResponse.json({ error: "기록을 찾을 수 없습니다." }, { status: 404 });

  const existingReaction = await prisma.feelingReaction.findUnique({
    where: { recordId_userId_reactionType: { recordId, userId: user.id, reactionType } },
    select: { id: true },
  });

  if (existingReaction) {
    await prisma.feelingReaction.delete({ where: { id: existingReaction.id } });
    const count = await prisma.feelingReaction.count({ where: { recordId, reactionType } });
    return NextResponse.json({ ok: true, active: false, count });
  }

  await prisma.feelingReaction.create({ data: { recordId, userId: user.id, reactionType } });

  const count = await prisma.feelingReaction.count({ where: { recordId, reactionType } });
  return NextResponse.json({ ok: true, active: true, count });
}
