import type { ReactNode } from "react";
import Link from "next/link";
import { Activity, Baby, CalendarDays, HeartPulse, Landmark, Plus, UsersRound } from "lucide-react";
import LogoutButton from "@/components/auth/LogoutButton";
import FeelingQuickCard from "@/components/feelings/FeelingQuickCard";
import { prisma } from "@/lib/db";
import { getChildSummary, formatKoreanDate } from "@/lib/child-profile";
import { ensurePregnancySchedulesForChild } from "@/lib/pregnancy-records";
import { formatDaysFromToday, getPregnancySummary, getPregnancyWeekGuide, resolveChildHomeState } from "@/lib/pregnancy-home";
import { getTodayMomentPrompt } from "@/lib/feelings";

type ChildForHome = {
  id: string;
  nickname: string | null;
  birthDate: Date | null;
  birthTime?: string | null;
  birthWeightGram?: number | null;
  birthHeightCm?: number | null;
  expectedDueDate: Date | null;
  birthOrder?: number | null;
  useCorrectedAge: boolean;
  gender: string | null;
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

function PregnancyPrimaryAction({
  href,
  icon,
  title,
  description,
  meta,
  actionLabel,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  meta: string;
  actionLabel: string;
}) {
  return (
    <Link href={href} className="group rounded-3xl border border-amber-100 bg-amber-50/70 p-3 transition active:scale-[0.99] active:bg-amber-100">
      <div className="flex items-start gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-700 shadow-sm">{icon}</span>
        <span className="min-w-0 flex-1">
          <strong className="block text-[13px] font-black leading-5 text-slate-950">{title}</strong>
          <span className="mt-0.5 block text-[11px] leading-4 text-slate-600">{description}</span>
          <span className="mt-2 inline-flex rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold text-amber-700 shadow-sm">{meta}</span>
        </span>
      </div>
      <div className="mt-button-primary mt-2.5 flex min-h-9 items-center justify-center rounded-2xl px-3 py-2 text-[12px] font-extrabold transition">
        {actionLabel}
      </div>
    </Link>
  );
}

function PregnancyInfoDetails({
  title,
  summary,
  badge,
  children,
}: {
  title: string;
  summary: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <details className="group mt-card overflow-hidden p-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <strong className="block text-[14px] font-black leading-5 text-slate-900">{title}</strong>
            {badge ? <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-amber-700">{badge}</span> : null}
          </span>
          <span className="mt-1 line-clamp-1 block text-[11px] leading-4 text-slate-500">{summary}</span>
        </span>
        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold text-amber-700 group-open:hidden">펼치기</span>
        <span className="hidden rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-extrabold text-slate-600 group-open:inline-flex">접기</span>
      </summary>
      <div className="border-t border-slate-100 px-4 pb-3 pt-2">{children}</div>
    </details>
  );
}

function PregnancyShortcutCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="mt-timeline-link-card group flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-3 py-3 transition active:scale-[0.99] active:bg-slate-50">
      <span className="mt-timeline-link-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-amber-600">{icon}</span>
      <span className="min-w-0 flex-1">
        <strong className="block text-[13px] font-black leading-5 text-slate-900">{title}</strong>
        <span className="mt-0.5 line-clamp-2 block text-[11px] leading-4 text-slate-500">{description}</span>
      </span>
      <span className="mt-timeline-link-button shrink-0 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-extrabold text-amber-700">보기</span>
    </Link>
  );
}

function ChildSwitcher({ user, child, baseHref }: { user: UserForHome; child: ChildForHome; baseHref: "/" | "/my" }) {
  return (
    <section className="mt-simple-list" aria-label="아이 선택">
      <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {user.children.map((item, index) => {
          const isSelected = item.id === child.id;
          return (
            <Link
              key={item.id}
              href={childSwitcherHref(baseHref, item.id)}
              aria-current={isSelected ? "page" : undefined}
              data-mt-selected={isSelected ? "true" : "false"}
              data-state={isSelected ? "active" : "inactive"}
              className="mt-choice-control mt-choice-control--pill inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98]"
            >
              <Baby size={13} aria-hidden />
              {childDisplayName(item, index)}
            </Link>
          );
        })}
        <Link href="/child/new" className="mt-button-secondary inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98]">
          <Plus size={13} aria-hidden /> 추가
        </Link>
      </div>
    </section>
  );
}

function HomeHeader({ title, badge, description, showLogout }: { title: string; badge: string; description: string; showLogout: boolean }) {
  return (
    <section className="mt-card p-3.5">
      <div className="flex items-start justify-between gap-2.5">
        <div className="min-w-0">
          <span className="mt-badge">{badge}</span>
          <h1 className="mt-2 text-[20px] font-black leading-7 text-slate-950">{title}</h1>
          <p className="mt-1 text-[12px] leading-5 text-slate-600">{description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Link href="/family" className="mt-button-secondary inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-extrabold active:scale-[0.98]">
            <UsersRound size={13} aria-hidden /> 가족 초대
          </Link>
          {showLogout ? <LogoutButton /> : null}
        </div>
      </div>
    </section>
  );
}

async function PregnancyHome({ child }: { child: ChildForHome }) {
  if (!child.expectedDueDate) return null;
  await ensurePregnancySchedulesForChild(child.id, child.expectedDueDate);
  const today = new Date();
  const pregnancy = getPregnancySummary(child.expectedDueDate, today);
  const guide = getPregnancyWeekGuide(pregnancy.pregnancyWeek);
  const [schedules, latestMovement] = await Promise.all([
    prisma.pregnancySchedule.findMany({
      where: { childId: child.id, scheduledDate: { gte: today }, status: { not: "SKIPPED" } },
      orderBy: { scheduledDate: "asc" },
      take: 3,
      select: { id: true, title: true, scheduledDate: true, week: true, status: true },
    }),
    prisma.fetalMovementRecord.findFirst({
      where: { childId: child.id },
      orderBy: { measuredAt: "desc" },
      select: { measuredAt: true, count: true, durationMinutes: true },
    }),
  ]);
  const childQuery = `childId=${encodeURIComponent(child.id)}`;
  const detailBase = `/child/${encodeURIComponent(child.id)}`;
  const nearestSchedule = schedules[0];
  const latestMovementMeta = latestMovement
    ? `최근 ${latestMovement.count}회 · ${latestMovement.durationMinutes}분`
    : "아직 기록이 없어요";

  return (
    <>
      <section className="mt-card p-3.5" aria-labelledby="pregnancy-dday-title">
        <div className="grid grid-cols-2 gap-2">
          <MiniStat label="우리 아기와 만날 날" value={`D-${Math.max(0, pregnancy.daysUntilDue)}`} hint={`예정일 ${formatKoreanDate(pregnancy.dueDate)}`} />
          <MiniStat label="현재 임신 주차" value={`${pregnancy.pregnancyWeek}주 ${pregnancy.pregnancyDay}일`} hint={`${numberFormat(pregnancy.pregnancyDays)}일째`} />
        </div>
      </section>

      <section className="mt-card p-3.5" aria-labelledby="pregnancy-priority-title">
        <div className="mb-3">
          <h2 id="pregnancy-priority-title" className="text-[14px] font-black text-slate-900">오늘 가장 먼저 확인해요</h2>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500">기록과 몸 상태 확인을 먼저 볼 수 있게 모았어요.</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <PregnancyPrimaryAction
            href={`${detailBase}/pregnancy/fetal-movement`}
            icon={<Activity size={18} aria-hidden />}
            title="태동 기록하기"
            description="평소와 다른 움직임이 느껴졌다면 짧게 기록해보세요."
            meta={latestMovementMeta}
            actionLabel="태동 기록"
          />
          <PregnancyPrimaryAction
            href={`${detailBase}/pregnancy/symptoms`}
            icon={<HeartPulse size={18} aria-hidden />}
            title="몸 상태 확인하기"
            description="출혈, 통증, 태동 변화, 양수·분비물 신호를 참고해요."
            meta="평소와 다르면 문의하세요"
            actionLabel="임신 증상 확인"
          />
        </div>
      </section>

      <PregnancyInfoDetails title="이번 주 우리 아기" badge={`${guide.week}주`} summary={guide.summary}>
        <p className="text-[13px] font-extrabold leading-5 text-slate-900">{guide.title}</p>
        <div className="mt-2 grid gap-2">
          <div className="rounded-2xl bg-slate-50 px-3 py-2">
            <p className="text-[11px] font-extrabold text-slate-700">아기 성장</p>
            <p className="mt-1 text-[12px] leading-5 text-slate-600">{guide.babyGrowth}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-3 py-2">
            <p className="text-[11px] font-extrabold text-slate-700">엄마 몸의 변화</p>
            <p className="mt-1 text-[12px] leading-5 text-slate-600">{guide.motherChange}</p>
          </div>
        </div>
      </PregnancyInfoDetails>

      <PregnancyInfoDetails
        title="다가오는 산전검진"
        summary={nearestSchedule ? `${nearestSchedule.title} · ${formatDaysFromToday(nearestSchedule.scheduledDate, today)}` : "앞으로 표시할 산전검진 일정이 없어요."}
      >
        <div className="grid gap-2">
          {schedules.length ? schedules.map((schedule) => (
            <div key={schedule.id} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
              <div className="flex items-center justify-between gap-3">
                <span className="min-w-0">
                  <strong className="block text-[13px] font-extrabold leading-5 text-slate-900">{schedule.title}</strong>
                  <span className="mt-0.5 block text-[11px] leading-4 text-slate-500">{schedule.scheduledDate.toISOString().slice(0, 10)} · {formatDaysFromToday(schedule.scheduledDate, today)}</span>
                </span>
                <span className="shrink-0 text-[11px] font-extrabold text-slate-400">{schedule.week ? `${schedule.week}주` : "일정"}</span>
              </div>
            </div>
          )) : (
            <p className="rounded-2xl bg-slate-50 px-3 py-3 text-[12px] font-bold text-slate-500">앞으로 표시할 산전검진 일정이 없어요.</p>
          )}
          <Link href={`${detailBase}/pregnancy/schedules`} className="mt-button-secondary inline-flex min-h-10 items-center justify-center rounded-2xl px-3 py-2 text-[12px] font-extrabold">
            산전검진 일정 보기
          </Link>
        </div>
      </PregnancyInfoDetails>

      <section className="space-y-2" aria-label="임신 관련 바로가기">
        <PregnancyShortcutCard
          href={`${detailBase}/pregnancy/timeline`}
          icon={<CalendarDays size={17} aria-hidden />}
          title="임신 타임라인"
          description="검진 일정과 태동 기록을 시간순으로 모아 볼 수 있어요."
        />
        <PregnancyShortcutCard
          href={`/policy?${childQuery}`}
          icon={<Landmark size={17} aria-hidden />}
          title="정부지원"
          description="임신·출산 시기에 확인하면 좋은 지원 정보를 살펴볼 수 있어요."
        />
      </section>
    </>
  );
}

function BirthConfirmHome({ child, displayName }: { child: ChildForHome; displayName: string }) {
  const childPath = `/child/${encodeURIComponent(child.id)}`;
  return (
    <section className="mt-card p-4" aria-labelledby="birth-confirm-title">
      <span className="mt-badge">출산 확인</span>
      <h2 id="birth-confirm-title" className="mt-3 text-[20px] font-black leading-7 text-slate-950">{displayName}가 태어났나요?</h2>
      <p className="mt-2 text-[13px] leading-6 text-slate-600">출생일을 입력하면 예방접종, 월령 가이드, 이유식 기록, 발달 체크를 출생일 기준으로 보여드려요.</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <Link href={`${childPath}/birth`} className="mt-button-primary inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-3 text-[13px] font-extrabold">출생일 입력하기</Link>
        <Link href={`/my?childId=${encodeURIComponent(child.id)}`} className="mt-button-secondary inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-3 text-[13px] font-extrabold">아직이에요</Link>
      </div>
    </section>
  );
}

function BabyHome({ child }: { child: ChildForHome }) {
  if (!child.birthDate) return null;
  const summary = getChildSummary(child.birthDate, new Date(), child.expectedDueDate, child.useCorrectedAge);
  const childQuery = `childId=${encodeURIComponent(child.id)}`;

  return (
    <>
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
        <ActionLink href={`/weaning-record?${childQuery}`} label="이유식 기록" description="먹은 것, 양, 반응만 빠르게 남겨요." />
        <ActionLink href={`/vaccine-check?${childQuery}`} label="예방접종 체크" description="일정과 완료 여부를 함께 확인해요." />
        <ActionLink href="/family" label="가족 초대/연결" description="배우자와 같은 아이 기록을 함께 봐요." />
        <ActionLink href={`${summary.monthlyGuideHref}?${childQuery}`} label={summary.monthlyGuideLabel} description="월령에 가까운 생활 흐름을 확인해요." />
        <ActionLink href={`/tools/weaning-start?${childQuery}`} label="이유식 시작" description="월령과 준비 신호를 함께 봐요." />
      </section>
    </>
  );
}

export default async function MyChildHome({ user, selectedChildId, baseHref = "/my", showLogout = false }: MyChildHomeProps) {
  const child = user.children.find((item) => item.id === selectedChildId) ?? user.children.find((item) => item.isPrimary) ?? user.children[0];
  const selectedIndex = user.children.findIndex((item) => item.id === child.id);
  const displayName = childDisplayName(child, Math.max(selectedIndex, 0));
  const homeState = resolveChildHomeState(child);
  const momentPrompt = getTodayMomentPrompt(child);
  const headerDescription = homeState === "BABY_HOME" && child.birthDate
    ? (() => {
        const summary = getChildSummary(child.birthDate, new Date(), child.expectedDueDate, child.useCorrectedAge);
        return summary.usesCorrectedAge ? `발달 참고 ${summary.months}개월 · 실제 ${summary.actualMonths}개월` : `생후 ${numberFormat(summary.days)}일 · 현재 ${summary.months}개월`;
      })()
    : child.expectedDueDate
      ? getPregnancySummary(child.expectedDueDate).label
      : "아이 기준으로 오늘 볼 정보를 정리해요.";

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <HomeHeader title={displayName} badge={homeState === "BABY_HOME" ? "내 아이 홈" : homeState === "BIRTH_CONFIRM" ? "출산 전환" : "임신 홈"} description={headerDescription} showLogout={showLogout} />
        <FeelingQuickCard childId={child.id} childName={displayName} momentPrompt={momentPrompt} className="lg:hidden" />
        <ChildSwitcher user={user} child={child} baseHref={baseHref} />
        {homeState === "BABY_HOME" ? <BabyHome child={child} /> : null}
        {homeState === "PREGNANCY_HOME" ? <PregnancyHome child={child} /> : null}
        {homeState === "BIRTH_CONFIRM" ? <BirthConfirmHome child={child} displayName={displayName} /> : null}
      </div>
    </main>
  );
}
