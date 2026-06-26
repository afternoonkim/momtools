import {
  COUPANG_PARTNERS,
  COUPANG_PARTNERS_DISCLOSURE,
} from "@/lib/coupang-partners";

type CoupangCategoryBannerProps = {
  className?: string;
};

export default function CoupangCategoryBanner({
  className = "",
}: CoupangCategoryBannerProps) {
  if (!COUPANG_PARTNERS.enabled || !COUPANG_PARTNERS.categoryBannerHtml) {
    return null;
  }

  return (
    <aside
      aria-label="육아 준비물 관련 배너"
      className={`mt-card-soft overflow-hidden p-3 ${className}`.trim()}
    >
      <div className="flex justify-center">
        <div
          className="mx-auto max-w-full overflow-hidden rounded-xl bg-white shadow-sm [&_iframe]:mx-auto [&_iframe]:block [&_iframe]:max-w-full"
          style={{
            width: COUPANG_PARTNERS.categoryBanner.width,
            minHeight: COUPANG_PARTNERS.categoryBanner.height,
          }}
          dangerouslySetInnerHTML={{
            __html: COUPANG_PARTNERS.categoryBannerHtml,
          }}
        />
      </div>

      <p className="mt-3 rounded-xl bg-white/75 px-3 py-2 text-center text-[11px] leading-5 text-slate-500">
        {COUPANG_PARTNERS_DISCLOSURE}
      </p>
    </aside>
  );
}
