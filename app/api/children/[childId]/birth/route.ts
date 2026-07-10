import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { getAccessibleChildWhere } from "@/lib/family-sharing";
import { parseLocalDate } from "@/lib/child-profile";

export const dynamic = "force-dynamic";

type BirthPayload = {
  birthDate?: string;
  birthTime?: string;
  birthWeightGram?: string | number;
  birthHeightCm?: string | number;
};

function toDbDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function normalizeTime(value?: string) {
  if (!value) return null;
  return /^\d{2}:\d{2}$/.test(value) ? value : null;
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ childId: string }> }) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const { childId } = await params;
  const child = await prisma.child.findFirst({ where: { id: childId, ...getAccessibleChildWhere(user.id) }, select: { id: true } });
  if (!child) return NextResponse.json({ message: "아이 정보를 찾지 못했어요." }, { status: 404 });

  const body = (await request.json().catch(() => null)) as BirthPayload | null;
  const birthDate = body?.birthDate?.trim() ?? "";
  const parsedBirthDate = parseLocalDate(birthDate);
  if (!parsedBirthDate) return NextResponse.json({ message: "출생일을 다시 확인해 주세요." }, { status: 400 });

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (parsedBirthDate.getTime() > todayDate.getTime()) return NextResponse.json({ message: "출생일은 오늘 이후 날짜로 입력할 수 없어요." }, { status: 400 });

  const weight = body?.birthWeightGram === undefined || body.birthWeightGram === "" ? null : Number(body.birthWeightGram);
  const height = body?.birthHeightCm === undefined || body.birthHeightCm === "" ? null : Number(body.birthHeightCm);
  const normalizedWeight = typeof weight === "number" && Number.isFinite(weight) && weight > 0 ? Math.round(weight) : null;
  const normalizedHeight = typeof height === "number" && Number.isFinite(height) && height > 0 ? height : null;

  await prisma.child.update({
    where: { id: child.id },
    data: {
      birthDate: toDbDate(birthDate),
      birthTime: normalizeTime(body?.birthTime),
      birthWeightGram: normalizedWeight,
      birthHeightCm: normalizedHeight,
    },
  });

  return NextResponse.json({ ok: true, redirectTo: `/my?childId=${child.id}` });
}
