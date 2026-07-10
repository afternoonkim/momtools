import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { FEELING_REPORT_REASONS } from "@/lib/feelings";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const body = (await request.json().catch(() => null)) as { recordId?: unknown; reason?: unknown; memo?: unknown } | null;
  const recordId = typeof body?.recordId === "string" ? body.recordId : "";
  const reason = typeof body?.reason === "string" ? body.reason : "";
  const memo = typeof body?.memo === "string" ? body.memo.trim().slice(0, 120) : null;

  if (!recordId || !FEELING_REPORT_REASONS.some((item) => item.key === reason)) {
    return NextResponse.json({ error: "신고 사유를 확인할 수 없습니다." }, { status: 400 });
  }

  const record = await prisma.feelingRecord.findFirst({
    where: { id: recordId, visibility: "PUBLIC" },
    select: { id: true },
  });
  if (!record) return NextResponse.json({ error: "기록을 찾을 수 없습니다." }, { status: 404 });

  await prisma.feelingReport.create({ data: { recordId, userId: user.id, reason, memo } });
  return NextResponse.json({ ok: true });
}
