import { randomBytes } from "node:crypto";
import { prisma } from "@/lib/db";
import type { Prisma } from "@/lib/generated/prisma/client";

export type FamilyMemberView = {
  id: string;
  role: string;
  user: {
    id: string;
    nickname: string | null;
    email: string | null;
  };
};

export type FamilyChildView = {
  id: string;
  nickname: string | null;
};

export type FamilyGroupView = {
  id: string;
  name: string;
  inviteCode: string;
  members: FamilyMemberView[];
  children: FamilyChildView[];
};

export const familyRoleLabels: Record<string, string> = {
  MOTHER: "엄마",
  FATHER: "아빠",
  CAREGIVER: "보호자",
};

export function normalizeInviteCode(value: string) {
  return value.replace(/[^0-9A-Za-z]/g, "").toUpperCase().slice(0, 10);
}

async function createUniqueInviteCode() {
  for (let i = 0; i < 8; i += 1) {
    const code = randomBytes(5).toString("base64url").replace(/[^0-9A-Za-z]/g, "").toUpperCase().slice(0, 8);
    const existing = await prisma.familyGroup.findUnique({ where: { inviteCode: code }, select: { id: true } });
    if (!existing) return code;
  }
  return `${Date.now().toString(36).toUpperCase()}${randomBytes(2).toString("hex").toUpperCase()}`.slice(0, 10);
}


async function getFamilyGroupWithDetails(familyGroupId: string): Promise<FamilyGroupView> {
  return prisma.familyGroup.findUniqueOrThrow({
    where: { id: familyGroupId },
    include: {
      members: {
        where: { status: "ACTIVE" },
        include: { user: { select: { id: true, nickname: true, email: true } } },
        orderBy: { joinedAt: "asc" },
      },
      children: { where: { deletedAt: null }, orderBy: [{ isPrimary: "desc" }, { createdAt: "asc" }] },
    },
  });
}

export function getAccessibleChildWhere(userId: string): Prisma.ChildWhereInput {
  return {
    deletedAt: null,
    OR: [
      { userId },
      {
        familyGroup: {
          members: {
            some: {
              userId,
              status: "ACTIVE",
            },
          },
        },
      },
    ],
  };
}

export async function getAccessibleChildren(userId: string) {
  const children = await prisma.child.findMany({
    where: getAccessibleChildWhere(userId),
    orderBy: [{ isPrimary: "desc" }, { createdAt: "asc" }],
  });

  const seen = new Set<string>();
  return children.filter((child) => {
    if (seen.has(child.id)) return false;
    seen.add(child.id);
    return true;
  });
}

export async function ensureFamilyGroupForUser(userId: string) {
  const membership = await prisma.familyMember.findFirst({
    where: { userId, status: "ACTIVE" },
    orderBy: [{ joinedAt: "desc" }, { createdAt: "desc" }],
    select: { familyGroupId: true },
  });

  if (membership?.familyGroupId) {
    await prisma.child.updateMany({ where: { userId, deletedAt: null, familyGroupId: null }, data: { familyGroupId: membership.familyGroupId } });
    return getFamilyGroupWithDetails(membership.familyGroupId);
  }

  const inviteCode = await createUniqueInviteCode();
  const group = await prisma.familyGroup.create({
    data: {
      name: "우리 가족",
      inviteCode,
      members: {
        create: {
          userId,
          role: "CAREGIVER",
          status: "ACTIVE",
        },
      },
    },
    select: { id: true },
  });

  await prisma.child.updateMany({ where: { userId, deletedAt: null }, data: { familyGroupId: group.id } });
  return getFamilyGroupWithDetails(group.id);
}

export async function joinFamilyGroupByCode({ userId, code, role, connectOwnChildren }: { userId: string; code: string; role: string; connectOwnChildren: boolean }) {
  const inviteCode = normalizeInviteCode(code);
  if (inviteCode.length < 6) return { ok: false as const, message: "초대 코드를 다시 확인해 주세요." };

  const group = await prisma.familyGroup.findUnique({ where: { inviteCode }, select: { id: true } });
  if (!group) return { ok: false as const, message: "일치하는 가족 초대 코드를 찾지 못했어요." };

  const normalizedRole = role === "MOTHER" || role === "FATHER" || role === "CAREGIVER" ? role : "CAREGIVER";

  await prisma.familyMember.upsert({
    where: { familyGroupId_userId: { familyGroupId: group.id, userId } },
    update: { role: normalizedRole, status: "ACTIVE", joinedAt: new Date() },
    create: { familyGroupId: group.id, userId, role: normalizedRole, status: "ACTIVE" },
  });

  if (connectOwnChildren) {
    await prisma.child.updateMany({ where: { userId, deletedAt: null }, data: { familyGroupId: group.id } });
  }

  return { ok: true as const, familyGroupId: group.id };
}
