import Link from "next/link";
import { notFound } from "next/navigation";
import { getFamilyHealthDbStatus } from "@/lib/repositories/family-health-qna-db";

export const dynamic = "force-dynamic";

export default async function FamilyHealthDbCheckPage() {
  if (process.env.NODE_ENV === "production" && process.env.DB_CHECK_ENABLED !== "true") {
    notFound();
  }

  const status = await getFamilyHealthDbStatus();

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">로컬 확인</span>
          <h1 className="mt-title-xl mt-5">가족건강 Q&amp;A DB 연결 상태</h1>
          <p className="mt-text-main mt-4">
            이 페이지는 로컬에서 가족건강 Q&amp;A 데이터가 Supabase DB에서 읽히는지 확인하기 위한 화면입니다.
            배포 환경에서는 기본적으로 노출되지 않습니다.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="mt-card p-6">
            <div className="text-sm font-bold text-slate-500">DB 연결</div>
            <div className={`mt-3 text-2xl font-black ${status.connected ? "text-emerald-700" : "text-rose-700"}`}>
              {status.connected ? "성공" : "실패"}
            </div>
          </div>
          <div className="mt-card p-6">
            <div className="text-sm font-bold text-slate-500">발행된 가족건강 Q&amp;A</div>
            <div className="mt-3 text-2xl font-black text-slate-900">{status.total.toLocaleString()}개</div>
          </div>
          <div className="mt-card p-6 md:col-span-2">
            <div className="text-sm font-bold text-slate-500">민감 카테고리 출처/검수 메모</div>
            <div className="mt-3 text-2xl font-black text-slate-900">{status.sourceCount.toLocaleString()}개</div>
            <p className="mt-3 text-sm leading-7 text-slate-500">medicine, postpartum, checkup 데이터에 제품 설명서 확인·의료진 상담·검진 결과지 확인 같은 검수 기준이 저장됐는지 확인합니다.</p>
          </div>
        </section>

        {status.reviewStatuses.length > 0 ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">검수 상태별 저장 개수</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {status.reviewStatuses.map((row) => (
                <div key={row.reviewStatus} className="rounded-2xl bg-white px-4 py-4 text-sm leading-7 shadow-sm">
                  <div className="font-bold text-slate-900">{row.reviewStatus}</div>
                  <div className="mt-2 text-xl font-black text-amber-700">{row.count.toLocaleString()}개</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">카테고리별 저장 개수</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {status.categories.map((category) => (
              <Link
                key={category.key}
                href={`/family-health-qna/${category.key}`}
                className="rounded-3xl border border-amber-100 bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-amber-200"
              >
                <div className="text-sm font-bold text-amber-700">{category.name}</div>
                <div className="mt-3 text-2xl font-black text-slate-900">{category.count.toLocaleString()}개</div>
                <p className="mt-3 text-sm leading-7 text-slate-500">해당 카테고리 화면으로 이동해서 실제 노출을 확인할 수 있습니다.</p>
              </Link>
            ))}
          </div>
        </section>

        {status.sample ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">샘플 콘텐츠</h2>
            <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <div><strong>path:</strong> {status.sample.path}</div>
              <div><strong>category:</strong> {status.sample.category}</div>
              <div><strong>question:</strong> {status.sample.question}</div>
              <div><strong>summary:</strong> {status.sample.summary}</div>
              <div><strong>reviewStatus:</strong> {status.sample.reviewStatus}</div>
              <div><strong>editorMemo:</strong> {status.sample.editorMemo ?? "-"}</div>
              <div><strong>duplicateMemo:</strong> {status.sample.duplicateMemo ?? "-"}</div>
              <div><strong>sections:</strong> {status.sample.sections.join(", ")}</div>
              <div><strong>keywords:</strong> {status.sample.keywordCount.toLocaleString()}개</div>
              <div><strong>sources:</strong> {status.sample.sourceCount.toLocaleString()}개</div>
            </div>
            <Link href={status.sample.path} className="mt-5 inline-flex min-h-11 items-center rounded-2xl bg-amber-500 px-5 text-sm font-bold text-white hover:bg-amber-600">
              샘플 페이지 열기
            </Link>
          </section>
        ) : null}
      </div>
    </div>
  );
}
