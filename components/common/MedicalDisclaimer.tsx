type Variant = "compact" | "full";

interface MedicalDisclaimerProps {
  lang?: "ko" | "en";
  variant?: Variant;
  className?: string;
}

const COPY = {
  ko: {
    label: "의료 안내",
    compact:
      "가정에서 참고하는 일반 정보입니다. 진단·치료·약 복용·접종 결정은 의료진과 상의해 주세요.",
    fullTitle: "병원 진료를 대신하지 않는 참고용 정보입니다",
    fullParagraph:
      "아이 상태가 평소와 다르거나 호흡곤란, 심한 처짐, 탈수 의심처럼 불안한 신호가 있으면 온라인 정보보다 병원·응급 상담을 먼저 고려해 주세요.",
  },
  en: {
    label: "Medical notice",
    compact:
      "This is general parent reference. For diagnosis, treatment, medication, or vaccination decisions, check with a clinician.",
    fullTitle: "Reference only, not a substitute for medical care",
    fullParagraph:
      "If your child seems much sicker than usual, has trouble breathing, or you are worried about an urgent symptom, contact a clinician or local emergency services first.",
  },
} as const;

export default function MedicalDisclaimer({
  lang = "ko",
  variant = "compact",
  className,
}: MedicalDisclaimerProps) {
  const copy = COPY[lang];

  if (variant === "compact") {
    return (
      <aside
        role="note"
        aria-label={copy.label}
        className={`rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900 sm:text-sm ${
          className ?? ""
        }`.trim()}
      >
        <span className="mr-2 inline-block rounded-full bg-amber-200/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-900">
          {copy.label}
        </span>
        {copy.compact}
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label={copy.label}
      className={`rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-4 ${className ?? ""}`.trim()}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-700">
        {copy.label}
      </div>
      <h2 className="mt-1 text-base font-bold text-slate-900">
        {copy.fullTitle}
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">{copy.fullParagraph}</p>
    </aside>
  );
}
