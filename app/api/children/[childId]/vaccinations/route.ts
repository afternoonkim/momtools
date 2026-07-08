import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";
import { getVaccinationItem } from "@/lib/vaccination-schedule";

export const dynamic = "force-dynamic";

type RouteParams = {
  params: Promise<{ childId: string }>;
};

type VaccinationPayload = {
  vaccineKey?: string;
  doseKey?: string;
  scheduledDate?: string;
  completed?: boolean;
  note?: string;
};

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

function todayUtcDateOnly() {
  const today = new Date();
  return new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
}

function normalizeText(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const text = value.replace(/\s+/g, " ").trim().slice(0, max);
  return text.length ? text : null;
}

function toClientRecord(record: {
  id: string;
  childId: string;
  vaccineKey: string;
  doseKey: string;
  scheduledDate: Date;
  completed: boolean;
  completedAt: Date | null;
  note: string | null;
  createdAt: Date;
  updatedAt: Date;
}) {
  return {
    id: record.id,
    childId: record.childId,
    vaccineKey: record.vaccineKey,
    doseKey: record.doseKey,
    scheduledDate: record.scheduledDate.toISOString().slice(0, 10),
    completed: record.completed,
    completedAt: record.completedAt?.toISOString().slice(0, 10) ?? null,
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

  const body = (await request.json().catch(() => null)) as VaccinationPayload | null;
  const vaccineKey = body?.vaccineKey?.trim() ?? "";
  const doseKey = body?.doseKey?.trim() ?? "";
  const scheduleItem = getVaccinationItem(vaccineKey, doseKey);
  if (!scheduleItem) return NextResponse.json({ message: "접종 항목을 다시 확인해 주세요." }, { status: 400 });

  const scheduledDate = parseDateOnly(body?.scheduledDate);
  if (!scheduledDate) return NextResponse.json({ message: "예정일을 다시 확인해 주세요." }, { status: 400 });

  const completed = body?.completed === true;
  const record = await prisma.childVaccinationRecord.upsert({
    where: {
      childId_vaccineKey_doseKey: {
        childId: child.id,
        vaccineKey,
        doseKey,
      },
    },
    update: {
      scheduledDate,
      completed,
      completedAt: completed ? todayUtcDateOnly() : null,
      note: normalizeText(body?.note, 200),
    },
    create: {
      childId: child.id,
      vaccineKey,
      doseKey,
      scheduledDate,
      completed,
      completedAt: completed ? todayUtcDateOnly() : null,
      note: normalizeText(body?.note, 200),
    },
    select: {
      id: true,
      childId: true,
      vaccineKey: true,
      doseKey: true,
      scheduledDate: true,
      completed: true,
      completedAt: true,
      note: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({ record: toClientRecord(record) });
}
