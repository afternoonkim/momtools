"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const feedbackTypes = [
  "불편해요",
  "오류가 있어요",
  "이런 기능이 필요해요",
  "내용이 헷갈려요",
  "기타",
];

export default function FeedbackForm({
  initialPageUrl,
  initialType,
}: {
  initialPageUrl?: string;
  initialType?: string;
}) {
  const [type, setType] = useState(feedbackTypes.includes(initialType || "") ? initialType || "기타" : "불편해요");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [pageUrl, setPageUrl] = useState(initialPageUrl || "");
  const [pageTitle, setPageTitle] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");
  const startedAt = useMemo(() => Date.now(), []);

  useEffect(() => {
    if (!pageUrl && typeof window !== "undefined") {
      setPageUrl(`${window.location.origin}${window.location.pathname}${window.location.search}`);
    }
    if (typeof document !== "undefined") {
      setPageTitle(document.title || "");
    }
  }, [pageUrl]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (message.trim().length < 10) {
      setStatus("error");
      setNotice("의견 내용을 10자 이상 적어주세요.");
      return;
    }

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, message, email, pageUrl, pageTitle, website, startedAt }),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "의견 전송에 실패했습니다.");
      }
      setStatus("sent");
      setNotice("의견을 보냈어요. 남겨주신 내용은 사이트 개선에 반영해볼게요.");
      setMessage("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "의견 전송 중 오류가 발생했습니다.");
    }
  }

  return (
    <section className="mt-card p-4 md:p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="hidden" aria-hidden="true">
          <label>
            website
            <input value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className="block">
          <span className="text-[13px] font-extrabold text-slate-900">어떤 의견인가요?</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[14px] font-bold text-slate-900 outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
          >
            {feedbackTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-[13px] font-extrabold text-slate-900">내용</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            maxLength={1200}
            placeholder="예: 이유식 페이지에서 지역 메뉴가 헷갈렸어요. 검색 결과가 더 짧게 보이면 좋겠어요."
            className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[14px] leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
          />
          <span className="mt-1 block text-right text-[11px] text-slate-400">{message.length}/1200</span>
        </label>

        <label className="block">
          <span className="text-[13px] font-extrabold text-slate-900">답변 받을 이메일 <span className="font-semibold text-slate-400">선택</span></span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="답변이 필요하면 이메일을 남겨주세요"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
          />
        </label>

        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-[12px] leading-6 text-slate-500">
          <div className="font-bold text-slate-700">안내</div>
          <p className="mt-1">
            이 폼은 사이트 이용 의견을 보내는 공간입니다. 아이의 증상, 진단, 치료, 복용량 상담은 의료기관이나 약국을 이용해 주세요.
          </p>
          {pageUrl ? <p className="mt-2 break-all text-slate-400">전달 페이지: {pageUrl}</p> : null}
        </div>

        {notice ? (
          <div className={status === "sent" ? "rounded-2xl bg-emerald-50 px-4 py-3 text-[13px] font-bold text-emerald-800" : "rounded-2xl bg-rose-50 px-4 py-3 text-[13px] font-bold text-rose-800"}>
            {notice}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-12 w-full rounded-2xl bg-slate-900 px-5 py-3 text-[14px] font-extrabold text-white transition active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {status === "sending" ? "보내는 중" : "의견 보내기"}
        </button>
      </form>
    </section>
  );
}
