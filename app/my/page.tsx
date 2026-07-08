import type { Metadata } from "next";
import { redirect } from "next/navigation";
import MyChildHome from "@/components/child/MyChildHome";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "내 아이 홈",
  description: "등록한 아이 생년월일 기준으로 월령, 예방접종, 이유식, 체크리스트를 확인하세요.",
  robots: { index: false, follow: false },
};

export default async function MyPage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();

  if (!user) redirect("/login?next=/my");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;

  return <MyChildHome user={user} selectedChildId={params?.childId} baseHref="/my" showLogout={false} />;
}
