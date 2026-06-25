import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getQnaDbStatus } from "@/lib/repositories/qna-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Q&A DB 확인 | MomTools",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function QnaDbCheckPage() {
  if (process.env.NODE_ENV === "production" && process.env.DB_CHECK_ENABLED !== "true") {
    notFound();
  }

  const status = await getQnaDbStatus();

  return (
    <main className="mt-page">
      <div className="mt-container-narrow space-y-6">
        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">로컬 확인</span>
          <h1 className="mt-title-xl mt-4">Q&amp;A DB 연결 상태</h1>
          <p className="mt-text-main mt-4">
            이 페이지는 로컬에서 Q&amp;A 데이터가 Supabase DB에서 읽히는지 확인하기 위한 화면입니다.
            배포 환경에서는 기본적으로 노출되지 않습니다.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">DB 연결</div>
            <div className={`mt-2 text-2xl font-bold ${status.connected ? "text-emerald-700" : "text-rose-700"}`}>
              {status.connected ? "성공" : "확인 필요"}
            </div>
          </div>
          <div className="mt-card-soft p-5">
            <div className="text-sm font-semibold text-slate-500">발행된 Q&amp;A</div>
            <div className="mt-2 text-2xl font-bold text-slate-900">{status.total.toLocaleString("ko-KR")}개</div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">카테고리별 저장 개수</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {status.categories.map((category) => (
              <Link key={category.key} href={`/qna/${category.key}`} className="rounded-3xl border border-amber-100 bg-white p-5 transition hover:-translate-y-0.5">
                <div className="text-sm font-semibold text-amber-700">{category.name}</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">{category.count.toLocaleString("ko-KR")}개</div>
                <div className="mt-3 text-sm leading-7 text-slate-500">해당 카테고리 화면으로 이동해서 실제 노출을 확인할 수 있습니다.</div>
              </Link>
            ))}
          </div>
        </section>

        {status.sample ? (
          <section className="mt-card p-6 md:p-8">
            <h2 className="mt-title-md">샘플 데이터</h2>
            <div className="mt-5 space-y-3 rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <div><strong>경로:</strong> {status.sample.path}</div>
              <div><strong>질문:</strong> {status.sample.question}</div>
              <div><strong>요약:</strong> {status.sample.summary}</div>
              <div><strong>섹션:</strong> {status.sample.sections.join(", ")}</div>
              <div><strong>키워드 수:</strong> {status.sample.keywordCount}</div>
            </div>
            <Link href={status.sample.path} className="mt-5 inline-flex rounded-2xl bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-700">
              샘플 상세 화면에서 확인하기
            </Link>
          </section>
        ) : null}
      </div>
    </main>
  );
}
