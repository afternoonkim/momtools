import { prisma } from "@/lib/db";

const COMPLETED_ITEM_STATUSES = new Set(["COMPLETED", "REWRITTEN", "QUALITY_READY"]);
const IN_PROGRESS_ITEM_STATUSES = new Set(["EXPORTED", "REWRITING", "NEEDS_FINAL_REVIEW"]);

type BatchItemStatusRow = {
  status: string;
  count: number;
};

type BatchTypeRow = {
  type: string;
  category: string | null;
  count: number;
  completed: number;
  staticPending: number;
};

export type ContentQualityProgressStatus = {
  connected: boolean;
  initialized: boolean;
  totalItems: number;
  totalBatches: number;
  completedItems: number;
  readyItems: number;
  exportedItems: number;
  dbReadyItems: number;
  staticPendingItems: number;
  batchSize: number;
  statusCounts: BatchItemStatusRow[];
  typeCounts: BatchTypeRow[];
  batches: Array<{
    batchNo: number;
    label: string;
    scope: string;
    status: string;
    rawStatus: string;
    totalItems: number;
    completedItems: number;
    staticPendingItems: number;
    firstPath: string | null;
    lastPath: string | null;
    updatedAt: string;
  }>;
  nextBatch: {
    batchNo: number;
    label: string;
    scope: string;
    status: string;
    rawStatus: string;
    totalItems: number;
    completedItems: number;
    items: Array<{
      sequence: number;
      path: string;
      type: string;
      category: string | null;
      title: string;
      dbStatus: string;
      status: string;
    }>;
  } | null;
};

function isCompletedItemStatus(status: string | null | undefined) {
  return COMPLETED_ITEM_STATUSES.has(status ?? "");
}

function deriveBatchStatus(items: Array<{ status: string }>, rawStatus: string) {
  if (items.length === 0) return rawStatus;

  const completedCount = items.filter((item) => isCompletedItemStatus(item.status)).length;
  if (completedCount === items.length) return "COMPLETED";
  if (items.some((item) => IN_PROGRESS_ITEM_STATUSES.has(item.status))) return "IN_PROGRESS";
  return rawStatus;
}

export async function getContentQualityProgressStatus(): Promise<ContentQualityProgressStatus> {
  const db = prisma as any;

  const [totalItems, totalBatches] = await Promise.all([
    db.contentQualityBatchItem.count(),
    db.contentQualityBatch.count(),
  ]);

  if (totalItems === 0 || totalBatches === 0) {
    return {
      connected: true,
      initialized: false,
      totalItems,
      totalBatches,
      completedItems: 0,
      readyItems: 0,
      exportedItems: 0,
      dbReadyItems: 0,
      staticPendingItems: 0,
      batchSize: 10,
      statusCounts: [],
      typeCounts: [],
      batches: [],
      nextBatch: null,
    };
  }

  const [statusGroups, dbStatusGroups, typeGroups, batches] = await Promise.all([
    db.contentQualityBatchItem.groupBy({
      by: ["status"],
      _count: { _all: true },
      orderBy: { status: "asc" },
    }),
    db.contentQualityBatchItem.groupBy({
      by: ["dbStatus"],
      _count: { _all: true },
      orderBy: { dbStatus: "asc" },
    }),
    db.contentQualityBatchItem.groupBy({
      by: ["type", "category"],
      _count: { _all: true },
      orderBy: [{ type: "asc" }, { category: "asc" }],
    }),
    db.contentQualityBatch.findMany({
      orderBy: { batchNo: "asc" },
      include: {
        items: {
          orderBy: { sequence: "asc" },
          select: {
            sequence: true,
            path: true,
            type: true,
            category: true,
            title: true,
            dbStatus: true,
            status: true,
          },
        },
      },
    }),
  ]);

  const countByItemStatus = (status: string) =>
    statusGroups.find((row: any) => row.status === status)?._count._all ?? 0;

  const completedItems = statusGroups.reduce((sum: number, row: any) => {
    return sum + (isCompletedItemStatus(row.status) ? row._count._all : 0);
  }, 0);
  const readyItems = countByItemStatus("READY");
  const exportedItems = countByItemStatus("EXPORTED");
  const dbReadyItems = dbStatusGroups.find((row: any) => row.dbStatus === "DB_READY")?._count._all ?? 0;
  const staticPendingItems = dbStatusGroups.find((row: any) => row.dbStatus === "STATIC_PENDING_DB")?._count._all ?? 0;

  const typedCounts = await Promise.all(
    typeGroups.map(async (row: any) => {
      const where = { type: row.type, category: row.category };
      const [completed, staticPending] = await Promise.all([
        db.contentQualityBatchItem.count({
          where: {
            ...where,
            status: { in: Array.from(COMPLETED_ITEM_STATUSES) },
          },
        }),
        db.contentQualityBatchItem.count({ where: { ...where, dbStatus: "STATIC_PENDING_DB" } }),
      ]);
      return {
        type: row.type,
        category: row.category,
        count: row._count._all,
        completed,
        staticPending,
      };
    }),
  );

  const mappedBatches = batches.map((batch: any) => {
    const completed = batch.items.filter((item: any) => isCompletedItemStatus(item.status)).length;
    const staticPending = batch.items.filter((item: any) => item.dbStatus === "STATIC_PENDING_DB").length;
    const derivedStatus = deriveBatchStatus(batch.items, batch.status);

    return {
      batchNo: batch.batchNo,
      label: batch.label,
      scope: batch.scope,
      status: derivedStatus,
      rawStatus: batch.status,
      totalItems: batch.totalItems,
      completedItems: completed,
      staticPendingItems: staticPending,
      firstPath: batch.items[0]?.path ?? null,
      lastPath: batch.items[batch.items.length - 1]?.path ?? null,
      updatedAt: batch.updatedAt.toISOString(),
    };
  });

  const nextBatchRow = batches.find((batch: any) => {
    if (batch.items.length === 0) return true;
    return batch.items.some((item: any) => !isCompletedItemStatus(item.status));
  });

  const nextBatchStatus = nextBatchRow
    ? deriveBatchStatus(nextBatchRow.items, nextBatchRow.status)
    : null;

  return {
    connected: true,
    initialized: true,
    totalItems,
    totalBatches,
    completedItems,
    readyItems,
    exportedItems,
    dbReadyItems,
    staticPendingItems,
    batchSize: 10,
    statusCounts: statusGroups.map((row: any) => ({ status: row.status, count: row._count._all })),
    typeCounts: typedCounts,
    batches: mappedBatches,
    nextBatch: nextBatchRow
      ? {
          batchNo: nextBatchRow.batchNo,
          label: nextBatchRow.label,
          scope: nextBatchRow.scope,
          status: nextBatchStatus ?? nextBatchRow.status,
          rawStatus: nextBatchRow.status,
          totalItems: nextBatchRow.totalItems,
          completedItems: nextBatchRow.items.filter((item: any) => isCompletedItemStatus(item.status)).length,
          items: nextBatchRow.items,
        }
      : null,
  };
}
