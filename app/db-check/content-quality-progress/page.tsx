import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentQualityProgressStatus } from "@/lib/repositories/content-quality-progress-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "콘텐츠 품질 개선 진행률 | MomTools",
  robots: {
    index: false,
    follow: false,
  },
};

function percent(done: number, total: number) {
  if (total <= 0) return 0;
  return Math.round((done / total) * 1000) / 10;
}

function statusLabel(status: string) {
  const labels: Record<string, string> = {
    READY: "대기",
    EXPORTED: "추출됨",
    REWRITING: "작성 중",
    IN_PROGRESS: "진행 중",
    NEEDS_FINAL_REVIEW: "최종 확인 필요",
    REWRITTEN: "리라이팅 완료",
    QUALITY_READY: "품질 개선 완료",
    COMPLETED: "완료",
  };
  return labels[status] ?? status;
}

function dbStatusLabel(status: string) {
  const labels: Record<string, string> = {
    DB_READY: "DB화 완료",
    STATIC_PENDING_DB: "DB 전환 대기",
  };
  return labels[status] ?? status;
}

export default async function ContentQualityProgressPage() {
  if (process.env.NODE_ENV === "production" && process.env.DB_CHECK_ENABLED !== "true") {
    notFound();
  }

  const status = await getContentQualityProgressStatus();

  return (
    <main className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-6 md:p-10">
          <span className="mt-badge">로컬 확인</span>
          <h1 className="mt-title-xl mt-4">콘텐츠 품질 개선 진행률</h1>
          <p className="mt-text-main mt-4">
            MomTools 전체 작성형 페이지를 10개 단위로 나누어 사용자 관점, 네이버 검색 의도, AI 생성 티 제거 기준에 맞게 순차 점검합니다.
            아직 DB로 옮기지 않은 정적 페이지는 해당 batch 차례에 DB 전환과 품질 개선을 함께 진행합니다.
          </p>
        </section>

        {!status.initialized ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">batch가 아직 생성되지 않았습니다</h2>
            <p className="mt-text-muted mt-3">아래 명령어로 전체 콘텐츠 인벤토리와 10개 단위 batch를 먼저 만들어 주세요.</p>
            <div className="mt-5 rounded-3xl bg-slate-950 p-5 font-mono text-sm text-slate-100">
              npm run db:quality:init
            </div>
          </section>
        ) : (
          <>
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <div className="mt-card-soft p-5">
                <div className="text-sm font-semibold text-slate-500">DB 연결</div>
                <div className={`mt-2 text-2xl font-black ${status.connected ? "text-emerald-700" : "text-rose-700"}`}>{status.connected ? "성공" : "확인 필요"}</div>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-sm font-semibold text-slate-500">전체 대상</div>
                <div className="mt-2 text-2xl font-black text-slate-900">{status.totalItems.toLocaleString("ko-KR")}개</div>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-sm font-semibold text-slate-500">전체 batch</div>
                <div className="mt-2 text-2xl font-black text-slate-900">{status.totalBatches.toLocaleString("ko-KR")}개</div>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-sm font-semibold text-slate-500">완료율</div>
                <div className="mt-2 text-2xl font-black text-emerald-700">{percent(status.completedItems, status.totalItems)}%</div>
              </div>
              <div className="mt-card-soft p-5">
                <div className="text-sm font-semibold text-slate-500">DB 전환 대기</div>
                <div className="mt-2 text-2xl font-black text-amber-700">{status.staticPendingItems.toLocaleString("ko-KR")}개</div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="mt-card p-6">
                <h2 className="mt-title-md">상태별 진행률</h2>
                <div className="mt-5 space-y-3">
                  {status.statusCounts.map((row) => (
                    <div key={row.status} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                      <span className="font-bold text-slate-700">{statusLabel(row.status)}</span>
                      <span className="font-black text-slate-900">{row.count.toLocaleString("ko-KR")}개</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-card p-6">
                <h2 className="mt-title-md">DB 전환 상태</h2>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3 text-sm">
                    <span className="font-bold text-emerald-700">DB화 완료</span>
                    <span className="font-black text-emerald-800">{status.dbReadyItems.toLocaleString("ko-KR")}개</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-amber-50 px-4 py-3 text-sm">
                    <span className="font-bold text-amber-700">DB 전환 대기</span>
                    <span className="font-black text-amber-800">{status.staticPendingItems.toLocaleString("ko-KR")}개</span>
                  </div>
                </div>
              </div>
            </section>

            {status.nextBatch ? (
              <section className="mt-card p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="mt-title-md">다음 작업 batch</h2>
                    <p className="mt-text-muted mt-2">
                      batch-{String(status.nextBatch.batchNo).padStart(3, "0")} · {status.nextBatch.scope} · {status.nextBatch.totalItems}개
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-amber-100 px-4 py-2 text-xs font-black text-amber-700">{statusLabel(status.nextBatch.status)}</span>
                </div>
                <div className="mt-5 overflow-hidden rounded-3xl border border-slate-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-xs font-black text-slate-500">
                      <tr>
                        <th className="px-4 py-3">순서</th>
                        <th className="px-4 py-3">DB 상태</th>
                        <th className="px-4 py-3">유형</th>
                        <th className="px-4 py-3">제목</th>
                        <th className="px-4 py-3">경로</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {status.nextBatch.items.map((item) => (
                        <tr key={`${item.sequence}-${item.path}`} className="bg-white">
                          <td className="px-4 py-3 font-bold text-slate-500">{item.sequence}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full px-3 py-1 text-xs font-black ${item.dbStatus === "DB_READY" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                              {dbStatusLabel(item.dbStatus)}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-xs font-bold text-slate-500">{item.type}{item.category ? `/${item.category}` : ""}</td>
                          <td className="px-4 py-3 font-bold text-slate-800">{item.title}</td>
                          <td className="px-4 py-3">
                            <Link href={item.path} className="text-xs font-semibold text-amber-700 hover:underline">{item.path}</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100">
                  npm run db:quality:export -- --batch={String(status.nextBatch.batchNo).padStart(3, "0")}
                </div>
              </section>
            ) : null}

            <section className="mt-card p-6 md:p-8">
              <h2 className="mt-title-md">유형별 작업 대상</h2>
              <div className="mt-5 max-h-[520px] overflow-auto rounded-3xl border border-slate-100">
                <table className="w-full text-left text-sm">
                  <thead className="sticky top-0 bg-slate-50 text-xs font-black text-slate-500">
                    <tr>
                      <th className="px-4 py-3">유형</th>
                      <th className="px-4 py-3">전체</th>
                      <th className="px-4 py-3">완료</th>
                      <th className="px-4 py-3">DB 전환 대기</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {status.typeCounts.map((row) => (
                      <tr key={`${row.type}-${row.category ?? "all"}`} className="bg-white">
                        <td className="px-4 py-3 font-bold text-slate-700">{row.type}{row.category ? ` / ${row.category}` : ""}</td>
                        <td className="px-4 py-3 font-black text-slate-900">{row.count.toLocaleString("ko-KR")}</td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">{row.completed.toLocaleString("ko-KR")}</td>
                        <td className="px-4 py-3 text-amber-700 font-bold">{row.staticPending.toLocaleString("ko-KR")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-card-soft p-6 md:p-8">
              <h2 className="mt-title-md">작업 명령어</h2>
              <div className="mt-4 space-y-3 rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100">
                <div>npm run db:quality:init</div>
                <div>npm run db:quality:export -- --batch=001</div>
                <div>npm run db:quality:progress</div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                batch를 다시 만들고 싶을 때만 <code className="rounded bg-white px-2 py-1">npm run db:quality:init -- --reset</code>을 사용하세요.
              </p>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
