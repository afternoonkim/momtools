import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Baby, Copy, ShieldCheck, UsersRound } from "lucide-react";
import FamilyInviteForm from "@/components/family/FamilyInviteForm";
import FamilyInviteCodeManager from "@/components/family/FamilyInviteCodeManager";
import FamilyMemberDisconnectButton from "@/components/family/FamilyMemberDisconnectButton";
import { getCurrentUser } from "@/lib/auth/session";
import { ensureFamilyGroupForUser, familyRoleLabels, type FamilyChildView, type FamilyMemberView } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "가족 연결",
  description: "엄마와 아빠가 같은 아이 정보와 기록을 함께 볼 수 있도록 가족 데이터를 연결합니다.",
  robots: { index: false, follow: false },
};

function childDisplayName(child: { nickname: string | null }, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

export default async function FamilyPage({ searchParams }: { searchParams?: Promise<{ joined?: string; left?: string; memberDisconnected?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/family");

  const params = await searchParams;
  const familyGroup = await ensureFamilyGroupForUser(user.id);
  const joined = params?.joined === "1";
  const left = params?.left === "1";
  const memberDisconnected = params?.memberDisconnected === "1";

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">가족 연결</span>
          <h1 className="mt-title-lg mt-3">엄마와 아빠가 같은 기록을 봐요</h1>
          <p className="mt-text-main mt-2">
            한 사람이 아이를 등록하고 초대 코드를 공유하면, 다른 보호자도 카카오 로그인 후 같은 아이 홈과 발달 기록을 볼 수 있어요.
          </p>
          {joined ? <p className="mt-3 rounded-2xl bg-emerald-50 px-3 py-2 text-[12px] font-bold leading-5 text-emerald-800">가족 데이터가 연결됐어요. 이제 같은 아이 기록을 함께 볼 수 있어요.</p> : null}
          {left ? <p className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-[12px] font-bold leading-5 text-amber-800">기존 가족 연결을 해제했어요. 내 아이 기록은 다른 보호자에게 더 이상 공유되지 않아요.</p> : null}
          {memberDisconnected ? <p className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-[12px] font-bold leading-5 text-amber-800">보호자 연결을 해제했어요. 해당 보호자는 이 가족 기록을 더 이상 볼 수 없어요.</p> : null}
        </section>

        <section className="mt-simple-list" aria-labelledby="family-code-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <Copy size={15} className="text-amber-600" aria-hidden />
              <h2 id="family-code-title" className="text-[14px] font-extrabold text-slate-900">내 가족 초대 코드</h2>
            </div>
            <p className="mt-1 text-[12px] leading-5 text-slate-500">배우자에게 이 코드를 전달해 주세요. 코드를 아는 사람만 가족 데이터에 연결할 수 있어요. 노출이 걱정되면 재발급하면 기존 코드는 바로 막혀요.</p>
          </div>
          <FamilyInviteCodeManager initialCode={familyGroup.inviteCode} />
        </section>

        <section className="mt-card p-4" aria-labelledby="family-join-title">
          <div className="mb-3 flex items-center gap-2">
            <UsersRound size={15} className="text-amber-600" aria-hidden />
            <h2 id="family-join-title" className="text-[14px] font-extrabold text-slate-900">초대 코드로 연결하기</h2>
          </div>
          <FamilyInviteForm />
        </section>

        <section className="mt-simple-list" aria-labelledby="family-members-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-amber-600" aria-hidden />
              <h2 id="family-members-title" className="text-[14px] font-extrabold text-slate-900">함께 보는 보호자</h2>
            </div>
            <p className="mt-1 text-[12px] leading-5 text-slate-500">더 이상 함께 보지 않을 보호자는 연결을 해제할 수 있어요.</p>
          </div>
          {(familyGroup.members as FamilyMemberView[]).map((member, index) => {
            const isSelf = member.userId === user.id;
            return (
              <div key={member.id} className="flex items-center justify-between gap-3 px-4 py-3 text-[12px] leading-5">
                <span className="min-w-0 flex-1">
                  <strong className="block truncate font-bold text-slate-800">{member.user.nickname || member.user.email || `${index + 1}번째 보호자`}</strong>
                  <span className="mt-0.5 inline-flex rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-extrabold text-slate-600">
                    {isSelf ? "나 · " : ""}{familyRoleLabels[member.role] ?? "보호자"}
                  </span>
                </span>
                {!isSelf || familyGroup.members.length > 1 ? <FamilyMemberDisconnectButton memberId={member.id} isSelf={isSelf} /> : null}
              </div>
            );
          })}
        </section>

        <section className="mt-simple-list" aria-labelledby="family-children-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <Baby size={15} className="text-amber-600" aria-hidden />
              <h2 id="family-children-title" className="text-[14px] font-extrabold text-slate-900">함께 보는 아이</h2>
            </div>
          </div>
          {familyGroup.children.length ? (
            (familyGroup.children as FamilyChildView[]).map((child, index) => (
              <Link key={child.id} href={`/my?childId=${encodeURIComponent(child.id)}`} className="flex items-center justify-between gap-3 px-4 py-3 text-[12px] leading-5 transition active:bg-slate-50">
                <span className="font-bold text-slate-800">{childDisplayName(child, index)}</span>
                <span className="text-[12px] font-extrabold text-amber-700">보기 →</span>
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-[12px] leading-5 text-slate-500">아직 연결된 아이가 없어요. 아이를 등록하면 가족이 함께 볼 수 있어요.</p>
          )}
        </section>

        <p className="rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 text-[12px] leading-5 text-amber-900">
          가족 연결은 실제 엄마·아빠를 서류로 확인하는 방식이 아니라, 카카오 로그인과 가족 초대 코드로 같은 아이 기록을 함께 보는 방식이에요. 초대 코드가 노출됐거나 더 이상 함께 볼 필요가 없다면 재발급 또는 연결 해제를 사용해 주세요. 아이 실명, 주민등록번호, 주소, 사진, 진료기록은 요구하지 않아요.
        </p>
      </div>
    </main>
  );
}
