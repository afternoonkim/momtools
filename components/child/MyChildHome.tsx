import Link from "next/link";
import { Baby, Plus, UsersRound } from "lucide-react";
import LogoutButton from "@/components/auth/LogoutButton";
import { getChildSummary } from "@/lib/child-profile";

type ChildForHome = {
  id: string;
  nickname: string | null;
  birthDate: Date;
  expectedDueDate: Date | null;
  useCorrectedAge: boolean;
  isPrimary: boolean;
};

type UserForHome = {
  children: ChildForHome[];
};

type MyChildHomeProps = {
  user: UserForHome;
  selectedChildId?: string;
  baseHref?: "/" | "/my";
  showLogout?: boolean;
};

function numberFormat(value: number) {
  return new Intl.NumberFormat("ko-KR").format(value);
}

function childDisplayName(child: { nickname: string | null }, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function childSwitcherHref(baseHref: "/" | "/my", childId: string) {
  return `${baseHref}?childId=${encodeURIComponent(childId)}`;
}

function MiniStat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white px-3 py-2">
      <p className="text-[10px] font-bold text-slate-500">{label}</p>
      <p className="mt-0.5 text-[14px] font-extrabold leading-5 text-slate-900">{value}</p>
      <p className="mt-0.5 line-clamp-1 text-[10px] leading-4 text-slate-500">{hint}</p>
    </div>
  );
}

function ActionLink({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link href={href} className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-2.5 transition active:bg-slate-50 last:border-b-0">
      <span className="min-w-0 flex-1">
        <strong className="block text-[13px] font-extrabold leading-5 text-slate-900">{label}</strong>
        <span className="mt-0.5 line-clamp-1 block text-[11px] leading-4 text-slate-500">{description}</span>
      </span>
      <span className="text-sm font-extrabold text-amber-600">→</span>
    </Link>
  );
}

export default function MyChildHome({ user, selectedChildId, baseHref = "/my", showLogout = true }: MyChildHomeProps) {
  const child = user.children.find((item) => item.id === selectedChildId) ?? user.children.find((item) => item.isPrimary) ?? user.children[0];
  const selectedIndex = user.children.findIndex((item) => item.id === child.id);
  const summary = getChildSummary(child.birthDate, new Date(), child.expectedDueDate, child.useCorrectedAge);
  const displayName = childDisplayName(child, Math.max(selectedIndex, 0));
  const childQuery = `childId=${encodeURIComponent(child.id)}`;

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-3.5">
          <div className="flex items-start justify-between gap-2.5">
            <div className="min-w-0">
              <span className="mt-badge">내 아이 홈</span>
              <h1 className="mt-2 text-[20px] font-black leading-7 text-slate-950">{displayName}</h1>
              <p className="mt-1 text-[12px] leading-5 text-slate-600">
                {summary.usesCorrectedAge ? `발달 참고 ${summary.months}개월 · 실제 ${summary.actualMonths}개월` : `현재 ${summary.months}개월`} · 다음은 {summary.nextMilestoneLabel}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Link href="/family" className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-extrabold text-slate-700 active:scale-[0.98]">
                <UsersRound size={13} aria-hidden /> 가족
              </Link>
              {showLogout ? <LogoutButton /> : null}
            </div>
          </div>
        </section>

        <section className="mt-simple-list" aria-labelledby="child-switcher-title">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {user.children.map((item, index) => {
              const isSelected = item.id === child.id;
              return (
                <Link
                  key={item.id}
                  href={childSwitcherHref(baseHref, item.id)}
                  aria-current={isSelected ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    isSelected ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Baby size={13} aria-hidden />
                  {childDisplayName(item, index)}
                </Link>
              );
            })}
            <Link href="/child/new" className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-extrabold text-slate-700 transition active:scale-[0.98]">
              <Plus size={13} aria-hidden /> 추가
            </Link>
          </div>
        </section>

        <section className="mt-card p-3.5" aria-labelledby="child-summary-title">
          <div className="mb-2.5 flex items-center justify-between gap-3">
            <h2 id="child-summary-title" className="text-[13px] font-extrabold text-slate-900">오늘 바로 볼 것</h2>
            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-extrabold text-slate-600">아이 기준</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <MiniStat label={summary.usesCorrectedAge ? "발달 참고" : "현재 월령"} value={`${summary.months}개월`} hint={summary.usesCorrectedAge ? `실제 ${summary.actualMonths}개월` : summary.ageLabel} />
            <MiniStat label="태어난 지" value={`${numberFormat(summary.days)}일`} hint={`${summary.weeks}주 ${summary.remainDays}일`} />
            <MiniStat label="다음 기준일" value={summary.nextMilestoneLabel} hint={summary.nextMilestoneDays ? `${summary.nextMilestoneDays}일 남음` : "오늘 기준"} />
          </div>
        </section>

        <section className="mt-simple-list" aria-labelledby="child-links-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <h2 id="child-links-title" className="text-[14px] font-extrabold text-slate-900">자주 쓰는 기록</h2>
          </div>
          <ActionLink href={`/development-check?${childQuery}`} label="발달 체크" description="오늘 보이는 모습만 짧게 기록해요." />
          <ActionLink href={`/tools/vaccine-schedule?${childQuery}`} label="예방접종 일정" description="생년월일 기준으로 확인해요." />
          <ActionLink href={`${summary.monthlyGuideHref}?${childQuery}`} label={summary.monthlyGuideLabel} description="월령에 가까운 생활 흐름을 확인해요." />
          <ActionLink href={`/tools/weaning-start?${childQuery}`} label="이유식 시작" description="월령과 준비 신호를 함께 봐요." />
        </section>
      </div>
    </main>
  );
}
