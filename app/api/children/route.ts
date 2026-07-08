import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { parseLocalDate } from "@/lib/child-profile";
import { ensureFamilyGroupForUser } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

type ChildPayload = {
  nickname?: string;
  birthDate?: string;
  gender?: string;
  useCorrectedAge?: boolean;
  expectedDueDate?: string;
};

function toDbDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as ChildPayload | null;
  const birthDate = body?.birthDate?.trim() ?? "";
  const nickname = body?.nickname?.trim().slice(0, 30) || null;
  const gender = body?.gender === "MALE" || body?.gender === "FEMALE" || body?.gender === "UNKNOWN" ? body.gender : null;
  const wantsCorrectedAge = body?.useCorrectedAge === true;
  const expectedDueDate = body?.expectedDueDate?.trim() ?? "";

  const parsed = parseLocalDate(birthDate);
  if (!parsed) {
    return NextResponse.json({ message: "아이 생년월일을 다시 확인해 주세요." }, { status: 400 });
  }

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (parsed.getTime() > todayDate.getTime()) {
    return NextResponse.json({ message: "아이 생년월일은 오늘 이후 날짜로 입력할 수 없어요." }, { status: 400 });
  }

  const oldestAllowed = new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDate());
  if (parsed.getTime() < oldestAllowed.getTime()) {
    return NextResponse.json({ message: "아이 생년월일을 다시 확인해 주세요." }, { status: 400 });
  }

  let parsedDueDate: Date | null = null;
  if (wantsCorrectedAge) {
    parsedDueDate = parseLocalDate(expectedDueDate);
    if (!parsedDueDate) {
      return NextResponse.json({ message: "예정일을 입력해 주세요." }, { status: 400 });
    }

    if (parsedDueDate.getTime() <= parsed.getTime()) {
      return NextResponse.json({ message: "예정일은 실제 생년월일보다 뒤 날짜로 입력해 주세요." }, { status: 400 });
    }

    const latestAllowedDueDate = new Date(parsed.getFullYear(), parsed.getMonth() + 6, parsed.getDate());
    if (parsedDueDate.getTime() > latestAllowedDueDate.getTime()) {
      return NextResponse.json({ message: "예정일이 너무 멀리 떨어져 있어요. 날짜를 다시 확인해 주세요." }, { status: 400 });
    }
  }

  const familyGroup = await ensureFamilyGroupForUser(user.id);
  const existingChildren = await prisma.child.count({ where: { userId: user.id, deletedAt: null } });
  const child = await prisma.child.create({
    data: {
      userId: user.id,
      familyGroupId: familyGroup.id,
      nickname,
      birthDate: toDbDate(birthDate),
      expectedDueDate: wantsCorrectedAge && expectedDueDate ? toDbDate(expectedDueDate) : null,
      useCorrectedAge: wantsCorrectedAge,
      gender,
      isPrimary: existingChildren === 0,
    },
  });

  return NextResponse.json({ childId: child.id, redirectTo: `/my?childId=${child.id}` });
}
