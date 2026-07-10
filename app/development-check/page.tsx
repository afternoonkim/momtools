import type { Metadata } from "next";
import { redirect } from "next/navigation";
import DevelopmentCheckClient from "@/components/development/DevelopmentCheckClient";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import type { DevelopmentAgeRangeKey, DevelopmentDomainKey, DevelopmentStatus } from "@/data/developmentMilestones";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "발달 체크",
  description: "등록한 아이 기준으로 움직임, 감각, 말·소통, 먹기·생활 발달 흐름을 기록하세요.",
  robots: { index: false, follow: false },
};

function toDateInputValue(value: Date) {
  return value.toISOString().slice(0, 10);
}

export default async function DevelopmentCheckPage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/development-check");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const bornChildren = user.children.filter((child) => child.birthDate);
  if (!bornChildren.length) redirect("/my");
  const selectedChild = bornChildren.find((child) => child.id === params?.childId) ?? bornChildren.find((child) => child.isPrimary) ?? bornChildren[0];

  const [records, history] = await Promise.all([
    prisma.childDevelopmentRecord.findMany({
      where: { childId: selectedChild.id },
      select: {
        itemKey: true,
        status: true,
        note: true,
      },
    }),
    prisma.childDevelopmentCheckLog.findMany({
      where: { childId: selectedChild.id },
      orderBy: { createdAt: "desc" },
      take: 80,
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
    }),
  ]);

  return (
    <DevelopmentCheckClient
      selectedChildId={selectedChild.id}
      childrenOptions={bornChildren.map((child) => ({
        id: child.id,
        nickname: child.nickname,
        birthDate: toDateInputValue(child.birthDate!),
        expectedDueDate: child.expectedDueDate ? toDateInputValue(child.expectedDueDate) : null,
        useCorrectedAge: child.useCorrectedAge,
        isPrimary: child.isPrimary,
      }))}
      initialRecords={Object.fromEntries(
        records.map((record) => [record.itemKey, { status: record.status as DevelopmentStatus, note: record.note }]),
      )}
      initialHistory={history.map((item) => ({
        itemKey: item.itemKey,
        ageRangeKey: item.ageRangeKey as DevelopmentAgeRangeKey,
        domainKey: item.domainKey as DevelopmentDomainKey,
        previousStatus: item.previousStatus as DevelopmentStatus | null,
        status: item.status as DevelopmentStatus,
        note: item.note,
        observedAt: item.observedAt.toISOString(),
        createdAt: item.createdAt.toISOString(),
      }))}
    />
  );
}
