type Variant = "compact" | "full";

interface MedicalDisclaimerProps {
  /** "ko" or "en". Defaults to Korean. */
  lang?: "ko" | "en";
  /** "compact" for inline single-paragraph; "full" for boxed callout. */
  variant?: Variant;
  /** Optional extra classes for the outer wrapper. */
  className?: string;
}

const COPY = {
  ko: {
    label: "의료 안내",
    compact:
      "이 페이지는 가정에서 참고하기 좋은 일반 정보예요. 진단·치료·약 복용·접종 결정은 반드시 의료진과 상의해 주세요.",
    fullTitle: "병원 진료를 대신하지 않는 참고용 정보예요",
    fullParagraphs: [
      "MomTools의 계산기, 정보 글, 체크리스트는 가족이 집에서 흐름을 정리하고 다음 단계를 준비하는 데 도움을 주는 일반 참고용 자료예요.",
      "아이와 가족의 진단, 치료, 약 복용 여부, 접종 가능 여부, 발달 이상 여부처럼 개별 건강 상태와 직결된 판단은 의료기관과 의료진을 통해 확인하셔야 해요.",
      "급한 증상이 있거나 평소와 많이 다르게 보일 때는 온라인 정보를 보기 전에 가까운 병원이나 응급실로 먼저 연락해 주세요.",
    ],
  },
  en: {
    label: "Medical notice",
    compact:
      "This page is a general parent reference. For diagnosis, treatment, medication, or vaccination decisions, always check with your pediatrician or another qualified clinician.",
    fullTitle: "This is reference reading, not a substitute for your pediatrician",
    fullParagraphs: [
      "The calculators, guides, and checklists on MomTools are written to help families plan and learn at home. They are not a medical record, diagnosis, or treatment plan.",
      "Decisions about diagnosis, medication, vaccination eligibility, growth concerns, or developmental questions should be made with your child's pediatrician or another qualified healthcare provider.",
      "If your child seems much sicker than usual, has trouble breathing, or you are worried about an urgent symptom, contact your clinician or local emergency services first — before searching online.",
    ],
  },
} as const;

/**
 * Medical / YMYL safety disclaimer that should appear near the top of any
 * page that gives parenting health, vaccine, growth, or feeding guidance.
 *
 * Use `compact` for short pages or repeated placements, and `full` for the
 * primary placement (e.g., near the top of a calculator or info hub).
 */
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
      className={`rounded-3xl border border-amber-200 bg-amber-50/80 p-5 md:p-6 ${className ?? ""}`.trim()}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
        {copy.label}
      </div>
      <h2 className="mt-2 text-base font-bold text-slate-900 md:text-lg">
        {copy.fullTitle}
      </h2>
      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
        {copy.fullParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </aside>
  );
}
