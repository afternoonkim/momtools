import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { getAccessibleChildWhere } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

type RouteParams = {
  params: Promise<{ childId: string }>;
};

type WeaningRecordPayload = {
  recordDate?: string;
  mealSlot?: string;
  foodNames?: string;
  amount?: string;
  reaction?: string;
  hasNewFood?: boolean;
  note?: string;
};

const mealSlotLabels = {
  breakfast: "아침",
  lunch: "점심",
  dinner: "저녁",
  snack: "간식",
} as const;

const amountLabels = {
  taste: "맛보기",
  little: "조금",
  normal: "보통",
  good: "잘 먹음",
} as const;

const reactionLabels = {
  ok: "괜찮았어요",
  refused: "거부했어요",
  uncomfortable: "불편해 보여요",
  caution: "상담이 필요해 보여요",
} as const;

type MealSlot = keyof typeof mealSlotLabels;
type Amount = keyof typeof amountLabels;
type Reaction = keyof typeof reactionLabels;

function isMealSlot(value: string): value is MealSlot {
  return value in mealSlotLabels;
}

function isAmount(value: string): value is Amount {
  return value in amountLabels;
}

function isReaction(value: string): value is Reaction {
  return value in reactionLabels;
}

function parseDateOnly(value?: string) {
  const raw = value?.trim() ?? "";
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const localDate = new Date(year, month - 1, day);
  if (
    Number.isNaN(localDate.getTime()) ||
    localDate.getFullYear() !== year ||
    localDate.getMonth() !== month - 1 ||
    localDate.getDate() !== day
  ) {
    return null;
  }

  return new Date(Date.UTC(year, month - 1, day));
}

function normalizeText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function normalizeNote(value: unknown) {
  const text = normalizeText(value, 300);
  return text.length ? text : null;
}

function toClientRecord(record: {
  id: string;
  childId: string;
  recordDate: Date;
  mealSlot: string;
  foodNames: string;
  amount: string;
  reaction: string;
  hasNewFood: boolean;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;
}) {
  return {
    id: record.id,
    childId: record.childId,
    recordDate: record.recordDate.toISOString().slice(0, 10),
    mealSlot: record.mealSlot,
    foodNames: record.foodNames,
    amount: record.amount,
    reaction: record.reaction,
    hasNewFood: record.hasNewFood,
    note: record.note,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
  };
}

async function getAccessibleChild(userId: string, childId: string) {
  return prisma.child.findFirst({
    where: { id: childId, ...getAccessibleChildWhere(userId) },
    select: { id: true },
  });
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const { childId } = await params;
  const child = await getAccessibleChild(user.id, childId);
  if (!child) return NextResponse.json({ message: "아이 정보를 다시 확인해 주세요." }, { status: 404 });

  const body = (await request.json().catch(() => null)) as WeaningRecordPayload | null;
  const recordDate = parseDateOnly(body?.recordDate);
  if (!recordDate) return NextResponse.json({ message: "기록 날짜를 다시 확인해 주세요." }, { status: 400 });

  const today = new Date();
  const todayOnly = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
  const tomorrowOnly = new Date(todayOnly);
  tomorrowOnly.setUTCDate(tomorrowOnly.getUTCDate() + 1);
  if (recordDate.getTime() > tomorrowOnly.getTime()) {
    return NextResponse.json({ message: "미래 날짜는 내일까지만 기록할 수 있어요." }, { status: 400 });
  }

  const mealSlot = body?.mealSlot?.trim() ?? "";
  if (!isMealSlot(mealSlot)) return NextResponse.json({ message: "식사 시간을 다시 선택해 주세요." }, { status: 400 });

  const amount = body?.amount?.trim() ?? "normal";
  if (!isAmount(amount)) return NextResponse.json({ message: "먹은 양을 다시 선택해 주세요." }, { status: 400 });

  const reaction = body?.reaction?.trim() ?? "ok";
  if (!isReaction(reaction)) return NextResponse.json({ message: "반응을 다시 선택해 주세요." }, { status: 400 });

  const foodNames = normalizeText(body?.foodNames, 100);
  if (foodNames.length < 1) {
    return NextResponse.json({ message: "오늘 먹인 재료나 메뉴를 적어주세요." }, { status: 400 });
  }

  const note = normalizeNote(body?.note);

  const record = await prisma.childWeaningRecord.upsert({
    where: {
      childId_recordDate_mealSlot: {
        childId: child.id,
        recordDate,
        mealSlot,
      },
    },
    update: {
      foodNames,
      amount,
      reaction,
      hasNewFood: body?.hasNewFood === true,
      note,
    },
    create: {
      childId: child.id,
      recordDate,
      mealSlot,
      foodNames,
      amount,
      reaction,
      hasNewFood: body?.hasNewFood === true,
      note,
    },
    select: {
      id: true,
      childId: true,
      recordDate: true,
      mealSlot: true,
      foodNames: true,
      amount: true,
      reaction: true,
      hasNewFood: true,
      note: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({ record: toClientRecord(record) });
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const { childId } = await params;
  const child = await getAccessibleChild(user.id, childId);
  if (!child) return NextResponse.json({ message: "아이 정보를 다시 확인해 주세요." }, { status: 404 });

  const recordId = request.nextUrl.searchParams.get("id")?.trim() ?? "";
  if (!recordId) return NextResponse.json({ message: "삭제할 기록을 다시 확인해 주세요." }, { status: 400 });

  const existing = await prisma.childWeaningRecord.findFirst({
    where: { id: recordId, childId: child.id },
    select: { id: true },
  });

  if (!existing) return NextResponse.json({ message: "이미 삭제됐거나 찾을 수 없는 기록이에요." }, { status: 404 });

  await prisma.childWeaningRecord.delete({ where: { id: existing.id } });
  return NextResponse.json({ ok: true, id: existing.id });
}
