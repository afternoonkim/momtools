import type { Metadata } from "next";
import { redirect } from "next/navigation";
import BirthInfoForm from "@/components/pregnancy/BirthInfoForm";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "출생정보 입력",
  description: "출생일을 입력하고 아이 홈을 육아 홈으로 전환하세요.",
  robots: { index: false, follow: false },
};

export default async function BirthInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/my");
  const { id } = await params;
  const child = await prisma.child.findFirst({
    where: { id, ...getAccessibleChildWhere(user.id) },
    select: { id: true, nickname: true, birthDate: true },
  });
  if (!child) redirect("/my");

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl">
        <BirthInfoForm childId={child.id} childName={child.nickname ?? "우리 아기"} initialBirthDate={child.birthDate ? child.birthDate.toISOString().slice(0, 10) : ""} />
      </div>
    </main>
  );
}
