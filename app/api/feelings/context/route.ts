import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getFeelingScope, getTodayMomentPrompt } from "@/lib/feelings";

export const dynamic = "force-dynamic";

function childName(child: { nickname?: string | null }, index: number) {
  return child.nickname?.trim() || `아이 ${index + 1}`;
}

export async function GET(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ loggedIn: false }, { status: 401 });

  const childId = request.nextUrl.searchParams.get("childId") || "";
  const children = user.children.filter((child) => !child.deletedAt);
  if (!children.length) {
    return NextResponse.json({ loggedIn: true, children: [], selectedChild: null, scope: null, momentPrompt: null });
  }

  const selectedChild = children.find((child) => child.id === childId) ?? children.find((child) => child.isPrimary) ?? children[0];
  const selectedIndex = children.findIndex((child) => child.id === selectedChild.id);
  const scope = getFeelingScope(selectedChild);
  const momentPrompt = getTodayMomentPrompt(selectedChild);

  return NextResponse.json({
    loggedIn: true,
    children: children.map((child, index) => ({
      id: child.id,
      name: childName(child, index),
      isPrimary: child.isPrimary,
      hasBirthDate: Boolean(child.birthDate),
      hasDueDate: Boolean(child.expectedDueDate),
    })),
    selectedChild: {
      id: selectedChild.id,
      name: childName(selectedChild, Math.max(selectedIndex, 0)),
    },
    scope,
    momentPrompt,
  });
}
