type ContentUpdateNoteProps = {
  reviewedOn?: string;
  publishedOn?: string;
  updatedOn?: string;
  locale?: "ko" | "en";
  note?: string;
};

function formatEnglishDate(value?: string) {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[(month ?? 1) - 1]} ${day}, ${year}`;
}

function formatDate(value: string | undefined, locale: "ko" | "en") {
  if (!value) return "";
  return locale === "en" ? formatEnglishDate(value) : value;
}

export default function ContentUpdateNote({
  reviewedOn,
  publishedOn,
  updatedOn,
  locale = "ko",
  note,
}: ContentUpdateNoteProps) {
  const isEnglish = locale === "en";
  const published = publishedOn ?? reviewedOn;
  const updated = updatedOn ?? reviewedOn;
  const defaultNote = isEnglish
    ? "This page is checked on a regular basis so parents can quickly see when the information was first added and when it was most recently reviewed."
    : "이 페이지는 부모가 처음 작성 시점과 최근 확인 시점을 함께 볼 수 있도록 일정한 기준으로 날짜를 표시합니다.";

  return (
    <section className="mt-card-soft p-5 md:p-6">
      <div className="grid gap-4 md:grid-cols-[0.9fr_0.9fr_1.2fr] md:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            {isEnglish ? "Published" : "작성일"}
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-800 md:text-base">
            {formatDate(published, locale)}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            {isEnglish ? "Last updated" : "최근 수정일"}
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-800 md:text-base">
            {formatDate(updated, locale)}
          </div>
        </div>
        <p className="text-sm leading-7 text-slate-600">{note ?? defaultNote}</p>
      </div>
    </section>
  );
}
