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
      select: { itemKey: true, status: true, note: true },
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
    <>
      <div className="mx-auto mb-4 max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-950">
        <strong>발달 관찰 기록용입니다.</strong> 이 체크 항목은 K-DST 같은 표준화된 발달선별검사를 대신하지 않으며, 항목 하나의 달성 여부만으로 발달지연을 판단하지 않습니다. 영유아 건강검진의 K-DST는 9~71개월에 시행되는 선별검사이고, 결과상 심화평가가 권고되거나 이전에 하던 기능이 줄어드는 등 걱정되는 변화가 있으면 의료진과 상담하세요.
      </div>
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
    </>
  );
}
