import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import FeelingsPageClient from "@/components/feelings/FeelingsPageClient";
import FeelingRecordActions from "@/components/feelings/FeelingRecordActions";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { FEELING_EMOTIONS, FEELING_REACTIONS, formatFeelingDate, getEmotionMeta, getFeelingScope, getTodayMomentPrompt } from "@/lib/feelings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "오늘의 마음",
  description: "아이와 관련된 오늘의 마음을 짧게 기록하고 비슷한 시기 부모의 익명 기록을 확인하세요.",
  robots: { index: false, follow: false },
};

type FeelingPageSearchParams = { childId?: string };

type PublicFeelingRecord = {
  id: string;
  emotions: string[];
  content: string;
  createdAt: Date;
  reactions: { reactionType: string; userId: string | null }[];
};

function childDisplayName(child: { nickname?: string | null }, index: number) {
  return child.nickname?.trim() || `아이 ${index + 1}`;
}

function reactionCounts(reactions: { reactionType: string }[]) {
  return FEELING_REACTIONS.reduce<Record<string, number>>((acc, reaction) => {
    acc[reaction.key] = reactions.filter((item) => item.reactionType === reaction.key).length;
    return acc;
  }, {});
}

function FeelingRecordCard({ record, userId }: { record: PublicFeelingRecord; userId: string }) {
  const activeReactions = record.reactions.filter((reaction) => reaction.userId === userId).map((reaction) => reaction.reactionType);

  return (
    <article className="mt-card p-3.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {record.emotions.map((emotionKey) => {
            const emotion = getEmotionMeta(emotionKey);
            return <span key={emotionKey} className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-extrabold text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">{emotion.emoji} {emotion.label}</span>;
          })}
        </div>
        <span className="shrink-0 text-[10px] font-bold text-slate-400">{formatFeelingDate(record.createdAt)}</span>
      </div>
      <p className="mt-3 whitespace-pre-wrap text-[13px] font-bold leading-6 text-slate-700 dark:text-slate-200">{record.content}</p>
      <FeelingRecordActions recordId={record.id} initialCounts={reactionCounts(record.reactions)} initialActiveReactions={activeReactions} />
    </article>
  );
}

export default async function FeelingsPage({ searchParams }: { searchParams?: Promise<FeelingPageSearchParams> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/feelings");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const child = user.children.find((item) => item.id === params?.childId) ?? user.children.find((item) => item.isPrimary) ?? user.children[0];
  const childIndex = user.children.findIndex((item) => item.id === child.id);
  const childName = childDisplayName(child, Math.max(childIndex, 0));
  const scope = getFeelingScope(child);
  const momentPrompt = getTodayMomentPrompt(child);

  if (!scope) {
    return (
      <main className="mt-page">
        <div className="mt-container max-w-xl">
          <section className="mt-card p-4">
            <h1 className="text-[20px] font-black text-slate-950">오늘의 마음</h1>
            <p className="mt-2 text-[13px] font-bold leading-6 text-slate-500">마음 기록을 사용하려면 아이의 출산예정일 또는 출생일이 필요해요.</p>
            <Link href="/child/new" className="mt-button-primary mt-4 inline-flex min-h-11 items-center rounded-2xl px-4 text-[13px] font-black">아이 정보 등록하기</Link>
          </section>
        </div>
      </main>
    );
  }

  const publicRecords = await prisma.feelingRecord.findMany({
    where: {
      visibility: "PUBLIC",
      stage: scope.stage,
      baseValue: { gte: scope.minValue, lte: scope.maxValue },
    },
    orderBy: { createdAt: "desc" },
    take: 20,
    select: { id: true, emotions: true, content: true, createdAt: true, reactions: { select: { reactionType: true, userId: true } } },
  });

  const myRecords = await prisma.feelingRecord.findMany({
    where: { childId: child.id, userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 8,
    select: { id: true, emotions: true, content: true, createdAt: true, visibility: true },
  });

  const emotionCounts = FEELING_EMOTIONS.map((emotion) => ({
    ...emotion,
    count: publicRecords.filter((record) => record.emotions.includes(emotion.key)).length,
  })).filter((emotion) => emotion.count > 0);

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <FeelingsPageClient childId={child.id} childName={childName} momentPrompt={momentPrompt} />

        <section className="mt-simple-list" aria-label="아이 선택">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {user.children.map((item, index) => {
              const isSelected = item.id === child.id;
              return (
                <Link key={item.id} href={`/feelings?childId=${encodeURIComponent(item.id)}`} aria-current={isSelected ? "page" : undefined} data-mt-selected={isSelected ? "true" : "false"} data-state={isSelected ? "active" : "inactive"} className="mt-choice-control mt-choice-control--pill inline-flex shrink-0 rounded-full border px-3 py-2 text-[12px] font-extrabold">
                  {childDisplayName(item, index)}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-card p-3.5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-[14px] font-black text-slate-950 dark:text-white">같은 시기 부모들의 오늘</h2>
              <p className="mt-0.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">{scope.label}의 익명 기록만 보여드려요.</p>
            </div>
            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-extrabold text-slate-500 dark:bg-slate-800 dark:text-slate-300">{scope.shortLabel}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {emotionCounts.length ? emotionCounts.slice(0, 6).map((emotion) => (
              <span key={emotion.key} className="mt-choice-control mt-choice-control--chip rounded-full border px-2.5 py-1.5 text-[11px] font-extrabold">
                {emotion.emoji} {emotion.label} {emotion.count}
              </span>
            )) : <span className="text-[12px] font-bold text-slate-400">아직 쌓인 감정 통계가 없어요.</span>}
          </div>
        </section>

        <section className="space-y-2" aria-label="익명 기록">
          {publicRecords.length ? publicRecords.map((record) => <FeelingRecordCard key={record.id} record={record} userId={user.id} />) : (
            <div className="mt-card p-4 text-[13px] font-bold leading-6 text-slate-500 dark:text-slate-400">
              아직 같은 시기 부모의 공개 기록이 없어요. 오늘의 마음을 남기면 누군가에게 조용한 공감이 될 수 있어요.
            </div>
          )}
        </section>

        <section className="mt-simple-list" aria-label="내 기록">
          <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
            <h2 className="text-[14px] font-black text-slate-950 dark:text-white">내 기록</h2>
            <p className="mt-0.5 text-[11px] font-bold text-slate-500 dark:text-slate-400">최근 남긴 마음을 확인해요.</p>
          </div>
          {myRecords.length ? myRecords.map((record) => (
            <div key={record.id} className="border-b border-slate-100 px-4 py-3 last:border-b-0 dark:border-slate-800">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {record.emotions.map((emotionKey) => {
                    const emotion = getEmotionMeta(emotionKey);
                    return <span key={emotionKey} className="text-[12px] font-extrabold text-slate-700 dark:text-slate-200">{emotion.emoji} {emotion.label}</span>;
                  })}
                </div>
                <span className="shrink-0 text-[10px] font-bold text-slate-400">{record.visibility === "PRIVATE" ? "나만 보기" : "익명 공개"}</span>
              </div>
              <p className="mt-1 text-[12px] font-bold leading-5 text-slate-500 dark:text-slate-400">{record.content}</p>
            </div>
          )) : <p className="px-4 py-4 text-[12px] font-bold text-slate-400">아직 내 기록이 없어요.</p>}
        </section>
      </div>
    </main>
  );
}
