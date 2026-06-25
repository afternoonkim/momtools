import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentQualityStatus } from "@/lib/repositories/content-quality-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "콘텐츠 품질 점검 | MomTools",
  robots: {
    index: false,
    follow: false,
  },
};

const severityLabels = {
  high: "높음",
  medium: "중간",
  low: "낮음",
} as const;

const kindLabels = {
  RISKY_MEDICAL_EXPRESSION: "의료·복용 단정",
  OPERATOR_VIEWPOINT: "운영자 관점",
  AI_LIKE_REPETITION: "반복 문장",
  WEAK_USER_VALUE: "사용자 가치 부족",
  TOO_SHORT: "정보량 부족",
  MISSING_SAFETY_SECTION: "상담 신호 부족",
} as const;

export default async function ContentQualityCheckPage() {
  if (process.env.NODE_ENV === "production" && process.env.DB_CHECK_ENABLED !== "true") {
    notFound();
  }

  const status = await getContentQualityStatus();

  return (
    <main className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-6 md:p-10">
          <span className="mt-badge">로컬 확인</span>
          <h1 className="mt-title-xl mt-4">DB 콘텐츠 품질 점검</h1>
          <p className="mt-text-main mt-4">
            Q&amp;A, 가족건강 Q&amp;A, 월령별 가이드, 건강 가이드에 남아 있는 반복 문장, 운영자 관점 표현, 의료·복용 단정 표현을 확인합니다.
            실제 화면에 노출되는 문장을 사용자 관점으로 바꾸기 위한 점검 화면입니다.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">DB 연결</div>
            <div className={`mt-2 text-2xl font-black ${status.connected ? "text-emerald-700" : "text-rose-700"}`}>
              {status.connected ? "성공" : "확인 필요"}
            </div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">점검 대상</div>
            <div className="mt-2 text-2xl font-black text-slate-900">{status.total.toLocaleString("ko-KR")}개</div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">높은 우선순위</div>
            <div className="mt-2 text-2xl font-black text-rose-700">{status.highIssueCount.toLocaleString("ko-KR")}개</div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">전체 탐지 이슈</div>
            <div className="mt-2 text-2xl font-black text-amber-700">{status.issueCount.toLocaleString("ko-KR")}개</div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="mt-card p-6">
            <h2 className="mt-title-md">콘텐츠 타입별 개수</h2>
            <div className="mt-5 space-y-3">
              {status.typeCounts.map((row) => (
                <div key={row.type} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-700">{row.type}</span>
                  <span className="font-black text-slate-900">{row.count.toLocaleString("ko-KR")}개</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-card p-6">
            <h2 className="mt-title-md">검수 상태별 개수</h2>
            <div className="mt-5 max-h-80 space-y-3 overflow-auto pr-1">
              {status.reviewStatuses.map((row) => (
                <div key={row.reviewStatus} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-700">{row.reviewStatus}</span>
                  <span className="font-black text-slate-900">{row.count.toLocaleString("ko-KR")}개</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">반복 문장 TOP</h2>
          <p className="mt-text-muted mt-3">같은 문장이 여러 글에 반복되면 AI가 찍어낸 콘텐츠처럼 보일 수 있습니다. 카테고리별 상황에 맞게 다르게 쓰는 것이 좋습니다.</p>
          <div className="mt-5 space-y-4">
            {status.repeatedSentences.slice(0, 12).map((item) => (
              <div key={item.sentence} className="rounded-3xl border border-amber-100 bg-white p-5">
                <div className="text-sm font-black text-amber-700">{item.count.toLocaleString("ko-KR")}회 반복</div>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.sentence}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.examples.slice(0, 3).map((example) => (
                    <Link key={example.path} href={example.path} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-200">
                      {example.path}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {status.repeatedSentences.length === 0 ? <p className="text-sm text-slate-500">많이 반복되는 문장이 아직 탐지되지 않았습니다.</p> : null}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">우선 수정 대상</h2>
          <p className="mt-text-muted mt-3">민감 카테고리, 운영자 관점 표현, 의료·복용 단정 표현을 먼저 줄이는 것이 좋습니다.</p>
          <div className="mt-5 space-y-4">
            {status.topIssues.slice(0, 30).map((issue, index) => (
              <div key={`${issue.path}-${issue.label}-${index}`} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${issue.severity === "high" ? "bg-rose-100 text-rose-700" : issue.severity === "medium" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}>
                    {severityLabels[issue.severity]}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{kindLabels[issue.kind]}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-100">{issue.type}{issue.category ? ` / ${issue.category}` : ""}</span>
                </div>
                <Link href={issue.path} className="mt-3 block text-base font-black text-slate-900 hover:text-amber-700">
                  {issue.title}
                </Link>
                <div className="mt-2 text-xs font-semibold text-slate-400">{issue.path}</div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  <div><strong>발견:</strong> {issue.matchedText}</div>
                  <div className="mt-2"><strong>제안:</strong> {issue.suggestion}</div>
                </div>
              </div>
            ))}
            {status.topIssues.length === 0 ? <p className="text-sm text-slate-500">우선 수정 대상이 아직 탐지되지 않았습니다.</p> : null}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">다음 실행 명령어</h2>
          <div className="mt-4 space-y-3 rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100">
            <div>npm run db:audit:content</div>
            <div>npm run db:improve:content</div>
            <div>npm run db:improve:content:apply</div>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
            {status.suggestedNextActions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
