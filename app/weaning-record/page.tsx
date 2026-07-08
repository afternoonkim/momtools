import type { Metadata } from "next";
import { redirect } from "next/navigation";
import WeaningRecordClient from "@/components/weaning/WeaningRecordClient";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "이유식 기록",
  description: "아이별로 오늘 먹은 이유식, 먹은 양, 반응을 짧게 기록하세요.",
  robots: { index: false, follow: false },
};

function toDateInputValue(value: Date) {
  return value.toISOString().slice(0, 10);
}

function todayDateInputValue() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function normalizeDateParam(value?: string) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return todayDateInputValue();
  return value;
}

export default async function WeaningRecordPage({ searchParams }: { searchParams?: Promise<{ childId?: string; date?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/weaning-record");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const selectedChild = user.children.find((child) => child.id === params?.childId) ?? user.children.find((child) => child.isPrimary) ?? user.children[0];
  const selectedDate = normalizeDateParam(params?.date);

  const records = await prisma.childWeaningRecord.findMany({
    where: { childId: selectedChild.id },
    orderBy: [{ recordDate: "desc" }, { updatedAt: "desc" }],
    take: 80,
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

  return (
    <WeaningRecordClient
      selectedChildId={selectedChild.id}
      selectedDate={selectedDate}
      childrenOptions={user.children.map((child) => ({
        id: child.id,
        nickname: child.nickname,
        birthDate: toDateInputValue(child.birthDate),
        isPrimary: child.isPrimary,
      }))}
      initialRecords={records.map((record) => ({
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
      }))}
    />
  );
}
