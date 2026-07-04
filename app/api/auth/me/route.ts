import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ loggedIn: false });
    }

    return NextResponse.json({
      loggedIn: true,
      user: {
        id: user.id,
        nickname: user.nickname,
        childCount: user.children.length,
      },
    });
  } catch {
    return NextResponse.json({ loggedIn: false }, { status: 200 });
  }
}
