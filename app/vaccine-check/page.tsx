import type { Metadata } from "next";
import { redirect } from "next/navigation";
import VaccinationCheckClient from "@/components/vaccination/VaccinationCheckClient";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "예방접종 체크",
  description: "아이 생년월일을 기준으로 예방접종 예상 일정을 확인하고 완료 여부를 기록하세요.",
  robots: { index: false, follow: false },
};

function toDateInputValue(value: Date) {
  return value.toISOString().slice(0, 10);
}

export default async function VaccineCheckPage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/vaccine-check");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const bornChildren = user.children.filter((child) => child.birthDate);
  if (!bornChildren.length) redirect("/my");
  const selectedChild = bornChildren.find((child) => child.id === params?.childId) ?? bornChildren.find((child) => child.isPrimary) ?? bornChildren[0];

  const records = await prisma.childVaccinationRecord.findMany({
    where: { childId: selectedChild.id },
    orderBy: [{ scheduledDate: "asc" }, { updatedAt: "desc" }],
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

  return (
    <VaccinationCheckClient
      selectedChildId={selectedChild.id}
      childrenOptions={bornChildren.map((child) => ({
        id: child.id,
        nickname: child.nickname,
        birthDate: toDateInputValue(child.birthDate!),
        isPrimary: child.isPrimary,
      }))}
      initialRecords={records.map((record) => ({
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
      }))}
    />
  );
}
