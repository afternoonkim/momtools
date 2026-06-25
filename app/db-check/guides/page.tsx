import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuidesDbStatus } from "@/lib/repositories/guides-db";

export const dynamic = "force-dynamic";

export default async function GuidesDbCheckPage() {
  if (process.env.NODE_ENV === "production" && process.env.DB_CHECK_ENABLED !== "true") {
    notFound();
  }

  const status = await getGuidesDbStatus();

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">로컬 확인</span>
          <h1 className="mt-title-xl mt-5">월령별·건강 가이드 DB 연결 상태</h1>
          <p className="mt-text-main mt-4">
            이 페이지는 로컬에서 월령별 가이드와 증상별 건강 가이드가 Supabase DB에서 읽히는지 확인하기 위한 화면입니다.
            배포 환경에서는 기본적으로 노출되지 않습니다.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="mt-card p-6">
            <div className="text-sm font-bold text-slate-500">DB 연결</div>
            <div className={`mt-3 text-2xl font-black ${status.connected ? "text-emerald-700" : "text-rose-700"}`}>
              {status.connected ? "성공" : "확인 필요"}
            </div>
          </div>
          <div className="mt-card p-6">
            <div className="text-sm font-bold text-slate-500">월령별 가이드</div>
            <div className="mt-3 text-2xl font-black text-slate-900">{status.monthlyTotal.toLocaleString()}개</div>
          </div>
          <div className="mt-card p-6">
            <div className="text-sm font-bold text-slate-500">증상별 건강 가이드</div>
            <div className="mt-3 text-2xl font-black text-slate-900">{status.healthTotal.toLocaleString()}개</div>
          </div>
        </section>

        {status.reviewStatuses.length > 0 ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">검수 상태별 저장 개수</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {status.reviewStatuses.map((row) => (
                <div key={`${row.type}-${row.reviewStatus}`} className="rounded-2xl bg-white px-4 py-4 text-sm leading-7 shadow-sm">
                  <div className="font-bold text-slate-900">{row.type}</div>
                  <div className="mt-1 text-xs font-bold text-slate-500">{row.reviewStatus}</div>
                  <div className="mt-2 text-xl font-black text-emerald-700">{row.count.toLocaleString()}개</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-5 lg:grid-cols-2">
          {status.samples.monthly ? (
            <article className="mt-card p-6 md:p-8">
              <h2 className="mt-title-md">월령별 가이드 샘플</h2>
              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <div><strong>path:</strong> {status.samples.monthly.path}</div>
                <div><strong>title:</strong> {status.samples.monthly.title}</div>
                <div><strong>summary:</strong> {status.samples.monthly.summary}</div>
                <div><strong>sections:</strong> {status.samples.monthly.sections.join(", ")}</div>
                <div><strong>keywords:</strong> {status.samples.monthly.keywordCount.toLocaleString()}개</div>
              </div>
              <Link href={status.samples.monthly.path} className="mt-5 inline-flex min-h-11 items-center rounded-2xl bg-emerald-600 px-5 text-sm font-bold text-white hover:bg-emerald-700">
                샘플 페이지 열기
              </Link>
            </article>
          ) : null}

          {status.samples.health ? (
            <article className="mt-card p-6 md:p-8">
              <h2 className="mt-title-md">건강 가이드 샘플</h2>
              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <div><strong>path:</strong> {status.samples.health.path}</div>
                <div><strong>title:</strong> {status.samples.health.title}</div>
                <div><strong>summary:</strong> {status.samples.health.summary}</div>
                <div><strong>sections:</strong> {status.samples.health.sections.join(", ")}</div>
                <div><strong>keywords:</strong> {status.samples.health.keywordCount.toLocaleString()}개</div>
              </div>
              <Link href={status.samples.health.path} className="mt-5 inline-flex min-h-11 items-center rounded-2xl bg-rose-600 px-5 text-sm font-bold text-white hover:bg-rose-700">
                샘플 페이지 열기
              </Link>
            </article>
          ) : null}
        </section>
      </div>
    </div>
  );
}
