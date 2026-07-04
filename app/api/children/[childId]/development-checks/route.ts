import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/session";
import { getAccessibleChildWhere } from "@/lib/family-sharing";
import {
  developmentStatusLabels,
  getDevelopmentMilestone,
  type DevelopmentStatus,
} from "@/data/developmentMilestones";

export const dynamic = "force-dynamic";

const validStatuses = new Set<DevelopmentStatus>(["not_started", "practicing", "achieved", "concern"]);

type RouteParams = {
  params: Promise<{ childId: string }>;
};

type DevelopmentCheckPayload = {
  itemKey?: string;
  status?: string;
  note?: string;
};

function normalizeNote(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed.slice(0, 300) : null;
}

function toDateOnly(value = new Date()) {
  return new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
}

function toClientLog(log: {
  itemKey: string;
  ageRangeKey: string;
  domainKey: string;
  previousStatus: string | null;
  status: string;
  note: string | null;
  observedAt: Date;
  createdAt: Date;
}) {
  return {
    itemKey: log.itemKey,
    ageRangeKey: log.ageRangeKey,
    domainKey: log.domainKey,
    previousStatus: log.previousStatus,
    status: log.status,
    note: log.note,
    observedAt: log.observedAt.toISOString(),
    createdAt: log.createdAt.toISOString(),
  };
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });
  }

  const { childId } = await params;
  const child = await prisma.child.findFirst({
    where: { id: childId, ...getAccessibleChildWhere(user.id) },
    select: { id: true },
  });

  if (!child) {
    return NextResponse.json({ message: "아이 정보를 다시 확인해 주세요." }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as DevelopmentCheckPayload | null;
  const itemKey = body?.itemKey?.trim() ?? "";
  const milestone = getDevelopmentMilestone(itemKey);

  if (!milestone) {
    return NextResponse.json({ message: "체크 항목을 다시 확인해 주세요." }, { status: 400 });
  }

  const status = body?.status as DevelopmentStatus | undefined;
  if (!status || !validStatuses.has(status)) {
    return NextResponse.json({ message: "체크 상태를 다시 선택해 주세요." }, { status: 400 });
  }

  const note = normalizeNote(body?.note);
  const observedAt = toDateOnly();
  const previous = await prisma.childDevelopmentRecord.findUnique({
    where: {
      childId_itemKey: {
        childId: child.id,
        itemKey: milestone.key,
      },
    },
    select: {
      status: true,
      note: true,
    },
  });

  const shouldCreateLog = !previous || previous.status !== status || (previous.note ?? null) !== note;

  const result = await prisma.$transaction(async (tx) => {
    const record = await tx.childDevelopmentRecord.upsert({
      where: {
        childId_itemKey: {
          childId: child.id,
          itemKey: milestone.key,
        },
      },
      update: {
        status,
        note,
        ageRangeKey: milestone.ageRangeKey,
        domainKey: milestone.domainKey,
        observedAt,
      },
      create: {
        childId: child.id,
        itemKey: milestone.key,
        ageRangeKey: milestone.ageRangeKey,
        domainKey: milestone.domainKey,
        status,
        note,
        observedAt,
      },
      select: {
        itemKey: true,
        status: true,
        note: true,
        updatedAt: true,
      },
    });

    const log = shouldCreateLog
      ? await tx.childDevelopmentCheckLog.create({
          data: {
            childId: child.id,
            itemKey: milestone.key,
            ageRangeKey: milestone.ageRangeKey,
            domainKey: milestone.domainKey,
            previousStatus: previous?.status ?? null,
            status,
            note,
            observedAt,
          },
          select: {
            itemKey: true,
            ageRangeKey: true,
            domainKey: true,
            previousStatus: true,
            status: true,
            note: true,
            observedAt: true,
            createdAt: true,
          },
        })
      : null;

    return { record, log };
  });

  return NextResponse.json({
    record: result.record,
    log: result.log ? toClientLog(result.log) : null,
    label: developmentStatusLabels[status],
  });
}
