import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { parseLocalDate } from "@/lib/child-profile";
import { ensureFamilyGroupForUser } from "@/lib/family-sharing";
import { buildPregnancyScheduleSeeds } from "@/lib/pregnancy-home";

export const dynamic = "force-dynamic";

type ChildPayload = {
  status?: "pregnancy" | "born";
  nickname?: string;
  birthDate?: string;
  gender?: string;
  birthOrder?: number;
  hospital?: string;
  city?: string;
  district?: string;
  useCorrectedAge?: boolean;
  expectedDueDate?: string;
};

function toDbDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function cleanText(value?: string, max = 40) {
  const text = value?.trim().slice(0, max) ?? "";
  return text || null;
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as ChildPayload | null;
  const status = body?.status === "pregnancy" ? "pregnancy" : "born";
  const birthDate = body?.birthDate?.trim() ?? "";
  const nickname = cleanText(body?.nickname, 30);
  const gender = body?.gender === "MALE" || body?.gender === "FEMALE" || body?.gender === "UNKNOWN" ? body.gender : null;
  const birthOrder = Number.isInteger(body?.birthOrder) && Number(body?.birthOrder) > 0 ? Math.min(Number(body?.birthOrder), 9) : 1;
  const wantsCorrectedAge = status === "born" && body?.useCorrectedAge === true;
  const expectedDueDate = body?.expectedDueDate?.trim() ?? "";

  if (!nickname) {
    return NextResponse.json({ message: status === "pregnancy" ? "태명이나 아이 이름을 입력해 주세요." : "아이 표시 이름을 입력해 주세요." }, { status: 400 });
  }

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  let parsedBirthDate: Date | null = null;
  if (status === "born") {
    parsedBirthDate = parseLocalDate(birthDate);
    if (!parsedBirthDate) {
      return NextResponse.json({ message: "아이 생년월일을 다시 확인해 주세요." }, { status: 400 });
    }

    if (parsedBirthDate.getTime() > todayDate.getTime()) {
      return NextResponse.json({ message: "아이 생년월일은 오늘 이후 날짜로 입력할 수 없어요." }, { status: 400 });
    }

    const oldestAllowed = new Date(todayDate.getFullYear() - 18, todayDate.getMonth(), todayDate.getDate());
    if (parsedBirthDate.getTime() < oldestAllowed.getTime()) {
      return NextResponse.json({ message: "아이 생년월일을 다시 확인해 주세요." }, { status: 400 });
    }
  }

  let parsedDueDate: Date | null = null;
  if (expectedDueDate) {
    parsedDueDate = parseLocalDate(expectedDueDate);
    if (!parsedDueDate) {
      return NextResponse.json({ message: "출산예정일을 다시 확인해 주세요." }, { status: 400 });
    }
  }

  if (status === "pregnancy") {
    if (!parsedDueDate) {
      return NextResponse.json({ message: "출산예정일을 입력해 주세요." }, { status: 400 });
    }

    const earliestDueDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 21);
    const latestDueDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 10, todayDate.getDate());
    if (parsedDueDate.getTime() < earliestDueDate.getTime() || parsedDueDate.getTime() > latestDueDate.getTime()) {
      return NextResponse.json({ message: "출산예정일 범위를 다시 확인해 주세요." }, { status: 400 });
    }
  }

  if (wantsCorrectedAge) {
    if (!parsedDueDate || !parsedBirthDate) {
      return NextResponse.json({ message: "예정일을 입력해 주세요." }, { status: 400 });
    }

    if (parsedDueDate.getTime() <= parsedBirthDate.getTime()) {
      return NextResponse.json({ message: "예정일은 실제 생년월일보다 뒤 날짜로 입력해 주세요." }, { status: 400 });
    }

    const latestAllowedDueDate = new Date(parsedBirthDate.getFullYear(), parsedBirthDate.getMonth() + 6, parsedBirthDate.getDate());
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
      birthDate: parsedBirthDate ? toDbDate(birthDate) : null,
      expectedDueDate: parsedDueDate && expectedDueDate ? toDbDate(expectedDueDate) : null,
      birthOrder,
      useCorrectedAge: wantsCorrectedAge,
      gender,
      hospital: cleanText(body?.hospital, 40),
      city: cleanText(body?.city, 40),
      district: cleanText(body?.district, 40),
      isPrimary: existingChildren === 0,
    },
  });

  if (status === "pregnancy" && expectedDueDate) {
    await prisma.pregnancySchedule.createMany({ data: buildPregnancyScheduleSeeds(child.id, toDbDate(expectedDueDate)) });
  }

  return NextResponse.json({ childId: child.id, redirectTo: `/my?childId=${child.id}` });
}
