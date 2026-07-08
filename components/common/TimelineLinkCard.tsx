import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type TimelineLinkCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  ariaLabel?: string;
  className?: string;
};

export default function TimelineLinkCard({
  href,
  title,
  description,
  icon: Icon,
  ariaLabel,
  className = "",
}: TimelineLinkCardProps) {
  return (
    <section
      className={`mt-card p-3 ${className}`.trim()}
      aria-label={ariaLabel ?? `${title} 이동`}
    >
      <Link
        href={href}
        className="mt-timeline-link-card flex min-h-[64px] items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white px-3 py-3 transition hover:border-amber-200 hover:bg-amber-50/40 active:scale-[0.99]"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="mt-timeline-link-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-amber-600">
            <Icon size={17} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-black text-slate-950">
              {title}
            </span>
            <span className="mt-0.5 block truncate text-[11px] font-bold leading-4 text-slate-500">
              {description}
            </span>
          </span>
        </div>
        <span className="mt-timeline-link-button shrink-0 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-extrabold text-amber-700">
          보기
        </span>
      </Link>
    </section>
  );
}
