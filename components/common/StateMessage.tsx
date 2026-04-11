import type { ReactNode } from "react";
import Link from "next/link";
import { AlertCircle, FileSearch, Loader2, RefreshCcw } from "lucide-react";

type StateMessageProps = {
  tone?: "loading" | "error" | "empty";
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  href?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  icon?: ReactNode;
};

const toneClasses = {
  loading: "border-sky-100 bg-sky-50/70 text-sky-900",
  error: "border-rose-100 bg-rose-50/80 text-rose-900",
  empty: "border-slate-200 bg-slate-50 text-slate-900",
} as const;

function defaultIcon(tone: NonNullable<StateMessageProps["tone"]>) {
  if (tone === "loading") return <Loader2 className="animate-spin" size={20} />;
  if (tone === "error") return <AlertCircle size={20} />;
  return <FileSearch size={20} />;
}

export default function StateMessage({
  tone = "empty",
  title,
  description,
  actionLabel,
  onAction,
  href,
  secondaryHref,
  secondaryLabel,
  icon,
}: StateMessageProps) {
  return (
    <section className={`mt-card-soft border p-6 md:p-8 ${toneClasses[tone]}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-3">
          <div className="mt-0.5 rounded-2xl bg-white/80 p-2 text-current">{icon ?? defaultIcon(tone)}</div>
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
          </div>
        </div>
        {(actionLabel && (onAction || href)) || secondaryHref ? (
          <div className="flex flex-wrap gap-3 md:justify-end">
            {actionLabel && onAction ? (
              <button type="button" onClick={onAction} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                <RefreshCcw size={15} />
                {actionLabel}
              </button>
            ) : null}
            {actionLabel && href ? (
              <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                {actionLabel}
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
