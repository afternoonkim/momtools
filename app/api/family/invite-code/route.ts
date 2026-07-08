import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { regenerateFamilyInviteCode } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

export async function POST() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const result = await regenerateFamilyInviteCode(user.id);
  if (!result.ok) return NextResponse.json({ message: result.message }, { status: 400 });

  return NextResponse.json({
    message: "새 가족 초대 코드가 만들어졌어요.",
    inviteCode: result.inviteCode,
    inviteCodeUpdatedAt: result.inviteCodeUpdatedAt.toISOString(),
  });
}
