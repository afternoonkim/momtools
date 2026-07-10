import type { Metadata } from "next";
import { redirect } from "next/navigation";
import FetalMovementClient from "@/components/pregnancy/FetalMovementClient";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "태동 기록",
  description: "임신 중 태동 횟수와 측정 시간을 짧게 기록하세요.",
  robots: { index: false, follow: false },
};

export default async function FetalMovementPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/my");
  const { id } = await params;
  const child = await prisma.child.findFirst({ where: { id, ...getAccessibleChildWhere(user.id) }, select: { id: true, nickname: true, birthDate: true, expectedDueDate: true } });
  if (!child) redirect("/my");
  if (child.birthDate || !child.expectedDueDate) redirect(`/my?childId=${child.id}`);

  const records = await prisma.fetalMovementRecord.findMany({
    where: { childId: child.id },
    orderBy: { measuredAt: "desc" },
    take: 50,
    select: { id: true, measuredAt: true, durationMinutes: true, count: true, memo: true },
  });

  return <FetalMovementClient childId={child.id} childName={child.nickname ?? "우리 아기"} initialRecords={records.map((record) => ({ ...record, measuredAt: record.measuredAt.toISOString() }))} />;
}
