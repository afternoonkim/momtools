import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { disconnectFamilyMember } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

type RouteParams = {
  params: Promise<{ memberId: string }>;
};

export async function POST(_request: Request, { params }: RouteParams) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const { memberId } = await params;
  const result = await disconnectFamilyMember({ userId: user.id, memberId });
  if (!result.ok) return NextResponse.json({ message: result.message }, { status: 400 });

  return NextResponse.json({
    message: result.selfDisconnected ? "가족 연결을 해제했어요." : "보호자 연결을 해제했어요.",
    redirectTo: result.selfDisconnected ? "/family?left=1" : "/family?memberDisconnected=1",
  });
}
