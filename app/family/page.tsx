import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Baby, Copy, KeyRound, Link2, ShieldCheck, UsersRound } from "lucide-react";
import FamilyInviteForm from "@/components/family/FamilyInviteForm";
import FamilyInviteCodeManager from "@/components/family/FamilyInviteCodeManager";
import FamilyMemberDisconnectButton from "@/components/family/FamilyMemberDisconnectButton";
import { getCurrentUser } from "@/lib/auth/session";
import { ensureFamilyGroupForUser, familyRoleLabels, normalizeInviteCode, type FamilyChildView, type FamilyMemberView } from "@/lib/family-sharing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "가족 초대/연결",
  description: "엄마와 아빠가 같은 아이 정보와 기록을 함께 볼 수 있도록 가족 데이터를 연결합니다.",
  robots: { index: false, follow: false },
};

function childDisplayName(child: { nickname: string | null }, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function GuideStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-2.5 rounded-2xl border border-slate-100 bg-white px-3 py-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[11px] font-black text-amber-800">{number}</span>
      <span className="min-w-0">
        <strong className="block text-[12px] font-extrabold leading-5 text-slate-900">{title}</strong>
        <span className="block text-[11px] leading-4 text-slate-500">{description}</span>
      </span>
    </div>
  );
}

export default async function FamilyPage({
  searchParams,
}: {
  searchParams?: Promise<{ joined?: string; left?: string; memberDisconnected?: string; inviteCode?: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/family");

  const params = await searchParams;
  const familyGroup = await ensureFamilyGroupForUser(user.id);
  const joined = params?.joined === "1";
  const left = params?.left === "1";
  const memberDisconnected = params?.memberDisconnected === "1";
  const initialInviteCode = normalizeInviteCode(params?.inviteCode ?? "");

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">가족 초대/연결</span>
          <h1 className="mt-title-lg mt-3">같은 아이 기록을 함께 볼 수 있어요</h1>
          <p className="mt-text-main mt-2">
            한 사람이 아이를 등록하고 초대 코드를 보내면, 다른 보호자도 카카오 로그인 후 같은 아이 홈과 기록을 함께 확인할 수 있어요.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href="#family-invite-code" className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl bg-amber-500 px-3 text-[12px] font-extrabold text-white active:scale-[0.98]">
              <Copy size={13} aria-hidden /> 초대 코드 보기
            </a>
            <a href="#family-join" className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-2xl border border-amber-100 bg-white px-3 text-[12px] font-extrabold text-amber-800 active:scale-[0.98]">
              <KeyRound size={13} aria-hidden /> 코드 입력하기
            </a>
          </div>
          {joined ? <p className="mt-3 rounded-2xl bg-emerald-50 px-3 py-2 text-[12px] font-bold leading-5 text-emerald-800">가족 데이터가 연결됐어요. 이제 같은 아이 기록을 함께 볼 수 있어요.</p> : null}
          {left ? <p className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-[12px] font-bold leading-5 text-amber-800">기존 가족 연결을 해제했어요. 내 아이 기록은 다른 보호자에게 더 이상 공유되지 않아요.</p> : null}
          {memberDisconnected ? <p className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-[12px] font-bold leading-5 text-amber-800">보호자 연결을 해제했어요. 해당 보호자는 이 가족 기록을 더 이상 볼 수 없어요.</p> : null}
        </section>

        <section className="mt-card p-3.5" aria-labelledby="family-guide-title">
          <div className="flex items-center gap-2">
            <Link2 size={15} className="text-amber-600" aria-hidden />
            <h2 id="family-guide-title" className="text-[14px] font-extrabold text-slate-900">가족 연결은 이렇게 사용해요</h2>
          </div>
          <div className="mt-3 space-y-2">
            <GuideStep number="1" title="초대하는 보호자" description="아래 초대 코드를 복사하거나 초대 보내기를 눌러 배우자에게 전달해요." />
            <GuideStep number="2" title="초대받은 보호자" description="카카오로 로그인한 뒤 전달받은 코드를 입력하고 가족 데이터 연결을 눌러요." />
            <GuideStep number="3" title="함께 확인" description="연결되면 아이 홈, 이유식 기록, 발달 체크, 예방접종 체크를 같은 아이 기준으로 볼 수 있어요." />
          </div>
        </section>

        <section id="family-invite-code" className="mt-simple-list scroll-mt-20" aria-labelledby="family-code-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <Copy size={15} className="text-amber-600" aria-hidden />
              <h2 id="family-code-title" className="text-[14px] font-extrabold text-slate-900">초대 코드 발급/공유</h2>
            </div>
            <p className="mt-1 text-[12px] leading-5 text-slate-500">아이를 등록한 사람이 이 코드를 보내면 돼요. 코드가 노출됐거나 더 이상 공유하고 싶지 않다면 재발급해 주세요.</p>
          </div>
          <FamilyInviteCodeManager initialCode={familyGroup.inviteCode} />
        </section>

        <section id="family-join" className="mt-card scroll-mt-20 p-4" aria-labelledby="family-join-title">
          <div className="mb-3 flex items-center gap-2">
            <UsersRound size={15} className="text-amber-600" aria-hidden />
            <h2 id="family-join-title" className="text-[14px] font-extrabold text-slate-900">초대 코드 입력하기</h2>
          </div>
          <FamilyInviteForm initialCode={initialInviteCode} />
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
