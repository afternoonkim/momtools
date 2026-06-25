import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageQualityReport } from "@/lib/repositories/page-quality-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "상세 페이지 카드 섹션 점검 | MomTools",
  robots: {
    index: false,
    follow: false,
  },
};

const sourceLabels: Record<string, string> = {
  DB_CONTENT: "DB 본문",
  GENERATED_LONGTAIL: "생성 카드",
  STATIC_TEMPLATE: "페이지 템플릿",
  RELATED_DYNAMIC: "추천 로직",
  SHARED_COMPONENT: "공통 컴포넌트",
  AD_COMPONENT: "광고 영역",
  METADATA: "메타 정보",
};

const actionLabels: Record<string, string> = {
  NONE: "조치 없음",
  REVIEW: "화면 확인",
  REWRITE: "본문 수정 대상",
  TEMPLATE_REVIEW: "템플릿 점검",
  RELATION_REVIEW: "관련 카드 점검",
};

const severityLabels: Record<string, string> = {
  high: "높음",
  medium: "중간",
  low: "낮음",
};

const issueLabels: Record<string, string> = {
  OPERATOR_VIEWPOINT: "운영자/개발자 관점",
  AI_LIKE_GENERIC: "AI식 일반론",
  RISKY_MEDICAL_EXPRESSION: "의료·복용 단정",
  REPEATED_WITHIN_PAGE: "페이지 내 반복",
  LOW_RELEVANCE_GENERIC_CARD: "관련 카드 점검",
  MISSING_PAGE_WIDE_REVIEW: "페이지 전체 점검 필요",
};

function chipClass(kind: string) {
  if (kind === "high") return "bg-rose-100 text-rose-700";
  if (kind === "medium") return "bg-amber-100 text-amber-700";
  return "bg-slate-100 text-slate-600";
}

function sourceClass(source: string) {
  if (source === "DB_CONTENT") return "bg-emerald-50 text-emerald-700";
  if (source === "STATIC_TEMPLATE" || source === "SHARED_COMPONENT") return "bg-amber-50 text-amber-700";
  if (source === "RELATED_DYNAMIC") return "bg-sky-50 text-sky-700";
  if (source === "GENERATED_LONGTAIL") return "bg-violet-50 text-violet-700";
  return "bg-slate-100 text-slate-600";
}

export default async function PageQualityCheckPage({
  searchParams,
}: {
  searchParams: Promise<{ path?: string }>;
}) {
  if (process.env.NODE_ENV === "production" && process.env.DB_CHECK_ENABLED !== "true") {
    notFound();
  }

  const params = await searchParams;
  const pagePath = params.path ?? "/qna/health/after-vaccine-fever";
  const report = await getPageQualityReport(pagePath);

  return (
    <main className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-6 md:p-10">
          <span className="mt-badge">로컬 확인</span>
          <h1 className="mt-title-xl mt-4">상세 페이지 카드 섹션 점검</h1>
          <p className="mt-text-main mt-4">
            본문 리라이팅만으로 batch를 완료하지 않고, 사용자가 실제 상세 페이지에서 보는 모든 카드가 어디서 오는지 확인합니다.
            DB 본문, 생성 카드, 페이지 템플릿, 관련 글 추천, 공통 컴포넌트를 함께 점검해 페이지 전체 신뢰도를 맞춥니다.
          </p>
          <form className="mt-6 flex flex-col gap-3 md:flex-row" action="/db-check/page-quality">
            <input
              name="path"
              defaultValue={report.path}
              className="min-h-12 flex-1 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-amber-400"
              placeholder="/qna/health/after-vaccine-fever"
            />
            <button className="min-h-12 rounded-2xl bg-slate-900 px-5 text-sm font-black text-white" type="submit">
              페이지 점검
            </button>
          </form>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">지원 여부</div>
            <div className={`mt-2 text-2xl font-black ${report.supported ? "text-emerald-700" : "text-rose-700"}`}>{report.supported ? "지원" : "미지원"}</div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">표시 섹션</div>
            <div className="mt-2 text-2xl font-black text-slate-900">{report.sections.length.toLocaleString("ko-KR")}개</div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">탐지 이슈</div>
            <div className="mt-2 text-2xl font-black text-amber-700">{report.issues.length.toLocaleString("ko-KR")}개</div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">높음 이슈</div>
            <div className="mt-2 text-2xl font-black text-rose-700">{report.issues.filter((issue) => issue.severity === "high").length.toLocaleString("ko-KR")}개</div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">페이지 유형</div>
            <div className="mt-2 text-lg font-black text-slate-900">{report.pageType}</div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="mt-title-md">{report.title}</h2>
              <p className="mt-2 text-sm font-semibold text-amber-700">{report.path}</p>
              {report.summary ? <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{report.summary}</p> : null}
            </div>
            <Link href={report.path} className="mt-3 w-fit rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-700 hover:bg-amber-100 md:mt-0">
              실제 페이지 열기
            </Link>
          </div>
          <div className="mt-5 rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            {report.pageSourceNote}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="mt-card p-6">
            <h2 className="mt-title-md">출처별 섹션</h2>
            <div className="mt-5 space-y-3">
              {report.sourceCounts.map((row) => (
                <div key={row.source} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${sourceClass(row.source)}`}>{sourceLabels[row.source] ?? row.source}</span>
                  <span className="font-black text-slate-900">{row.count.toLocaleString("ko-KR")}개</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-card p-6">
            <h2 className="mt-title-md">조치 유형</h2>
            <div className="mt-5 space-y-3">
              {report.actionCounts.map((row) => (
                <div key={row.action} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-700">{actionLabels[row.action] ?? row.action}</span>
                  <span className="font-black text-slate-900">{row.count.toLocaleString("ko-KR")}개</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">실제 화면에 표시되는 카드 섹션</h2>
          <p className="mt-text-muted mt-3">
            batch 작업 시 아래 섹션을 모두 확인해야 완료입니다. DB 본문만 좋아져도 STATIC_TEMPLATE, RELATED_DYNAMIC 카드가 어색하면 완료로 보지 않습니다.
          </p>
          <div className="mt-5 space-y-4">
            {report.sections.map((section) => (
              <article key={section.id} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${sourceClass(section.source)}`}>{sourceLabels[section.source] ?? section.source}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{actionLabels[section.actionNeeded] ?? section.actionNeeded}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-100">{section.location}</span>
                </div>
                <h3 className="mt-3 text-lg font-black text-slate-900">{section.label}</h3>
                {section.title ? <p className="mt-2 text-sm font-bold text-slate-700">{section.title}</p> : null}
                {section.description ? <p className="mt-2 text-sm leading-7 text-slate-600">{section.description}</p> : null}
                {section.textItems.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                    {section.textItems.slice(0, 8).map((text, index) => (
                      <li key={`${section.id}-${index}`} className="rounded-2xl bg-slate-50 px-4 py-3">{text}</li>
                    ))}
                  </ul>
                ) : null}
                {section.links && section.links.length > 0 ? (
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {section.links.map((link) => (
                      <Link key={`${section.id}-${link.href}-${link.label}`} href={link.href} className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4 text-sm hover:bg-white">
                        <div className="font-black text-slate-800">{link.label}</div>
                        {link.description ? <p className="mt-2 leading-6 text-slate-600">{link.description}</p> : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">탐지 이슈</h2>
          <div className="mt-5 space-y-4">
            {report.issues.length === 0 ? <p className="text-sm text-slate-500">탐지된 이슈가 없습니다.</p> : null}
            {report.issues.map((issue, index) => (
              <div key={`${issue.sectionId}-${issue.kind}-${index}`} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${chipClass(issue.severity)}`}>{severityLabels[issue.severity]}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">{issueLabels[issue.kind] ?? issue.kind}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${sourceClass(issue.source)}`}>{sourceLabels[issue.source] ?? issue.source}</span>
                </div>
                <div className="mt-3 font-black text-slate-900">{issue.sectionLabel}</div>
                <div className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  <div><strong>발견:</strong> {issue.matchedText}</div>
                  <div className="mt-2"><strong>제안:</strong> {issue.suggestion}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">앞으로 batch 완료 기준</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
            {report.batchRuleUpdate.map((rule) => <li key={rule}>{rule}</li>)}
          </ul>
          <h3 className="mt-6 text-lg font-black text-slate-900">권장 조치</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
            {report.recommendedActions.map((action) => <li key={action}>{action}</li>)}
          </ul>
          <div className="mt-5 rounded-3xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100">
            npm run db:quality:page -- --path={report.path}
          </div>
        </section>
      </div>
    </main>
  );
}
