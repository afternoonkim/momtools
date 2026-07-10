import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getFeelingScope, isValidEmotion } from "@/lib/feelings";

export const dynamic = "force-dynamic";

const MAX_CONTENT_LENGTH = 100;

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });

  const body = (await request.json().catch(() => null)) as {
    childId?: unknown;
    emotions?: unknown;
    content?: unknown;
    visibility?: unknown;
    momentPromptId?: unknown;
  } | null;

  const childId = typeof body?.childId === "string" ? body.childId : "";
  const child = user.children.find((item) => item.id === childId && !item.deletedAt);
  if (!child) return NextResponse.json({ error: "아이 정보를 확인할 수 없습니다." }, { status: 403 });

  const emotions = Array.isArray(body?.emotions)
    ? body.emotions.filter((value): value is string => typeof value === "string" && isValidEmotion(value)).slice(0, 4)
    : [];
  if (!emotions.length) return NextResponse.json({ error: "감정을 하나 이상 선택해 주세요." }, { status: 400 });

  const content = typeof body?.content === "string" ? body.content.trim().slice(0, MAX_CONTENT_LENGTH) : "";
  if (!content) return NextResponse.json({ error: "짧은 메모를 입력해 주세요." }, { status: 400 });

  const scope = getFeelingScope(child);
  if (!scope) return NextResponse.json({ error: "아이의 예정일 또는 출생일이 필요합니다." }, { status: 400 });

  const visibility = body?.visibility === "PRIVATE" ? "PRIVATE" : "PUBLIC";
  const momentPromptId = typeof body?.momentPromptId === "string" && body.momentPromptId.trim() ? body.momentPromptId.trim() : null;

  const record = await prisma.feelingRecord.create({
    data: {
      childId: child.id,
      userId: user.id,
      stage: scope.stage,
      baseValue: scope.baseValue,
      emotions,
      content,
      visibility,
      momentPromptId,
    },
    select: { id: true, createdAt: true },
  });

  return NextResponse.json({ ok: true, record });
}
