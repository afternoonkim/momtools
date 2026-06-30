"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeedbackPrompt({
  title = "이 페이지가 도움이 되었나요?",
  description = "헷갈린 부분이나 고치면 좋을 점을 짧게 알려주세요.",
}: {
  title?: string;
  description?: string;
}) {
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(`${window.location.pathname}${window.location.search}`);
  }, []);

  const href = `/feedback?page=${encodeURIComponent(page)}&type=${encodeURIComponent("내용이 헷갈려요")}`;

  return (
    <section className="rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-[14px] font-extrabold text-slate-900">{title}</h2>
          <p className="mt-1 text-[12px] leading-5 text-slate-600">{description}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 rounded-full bg-white px-3 py-2 text-[12px] font-extrabold text-amber-700 shadow-sm ring-1 ring-amber-100"
        >
          의견 보내기
        </Link>
      </div>
    </section>
  );
}
