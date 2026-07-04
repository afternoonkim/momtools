import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { joinFamilyGroupByCode } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

type JoinPayload = {
  code?: string;
  role?: string;
  connectOwnChildren?: boolean;
};

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ message: "로그인이 필요해요." }, { status: 401 });

  const body = (await request.json().catch(() => null)) as JoinPayload | null;
  const result = await joinFamilyGroupByCode({
    userId: user.id,
    code: body?.code ?? "",
    role: body?.role ?? "CAREGIVER",
    connectOwnChildren: body?.connectOwnChildren !== false,
  });

  if (!result.ok) return NextResponse.json({ message: result.message }, { status: 400 });

  return NextResponse.json({ message: "가족 데이터가 연결됐어요.", redirectTo: "/family?joined=1" });
}
