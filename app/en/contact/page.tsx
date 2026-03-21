import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | report an issue or suggest a useful update",
  description: "Contact MomTools English to report errors, suggest content improvements, or share practical feedback about the site.",
};

export default function EnglishContactPage() {
  return (
    <div className="mt-page"><div className="mt-container-narrow space-y-6">
      <section className="mt-card p-8"><span className="mt-badge">Contact</span><h1 className="mt-title-lg mt-4">Send practical feedback that helps parents use the site better</h1><p className="mt-text-main mt-4">This page is best for reporting broken links, incorrect wording, confusing tool results, or sections that need a clearer explanation for US-based parents.</p>
      <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <div className="text-sm font-semibold text-slate-800">E-MAIL: afternoonkim93@gmail.com</div>
            {/* <p className="mt-2 text-sm leading-7 text-slate-600">
              현재는 예시 문구로 구성되어 있습니다. 실제 배포 시 아래 영역에 운영용
              이메일 주소, 구글폼, 네이버 폼, 응답 가능 시간 등을 넣어 사용해 주세요.
            </p> */}

            {/* <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              {<div>이메일: afternoonkim93@gmail.com</div>}
              {<div>문의 폼 예시: 외부 설문/문의 폼 링크 연결</div>}
              {<div>운영 시간 예시: 평일 09:00 ~ 18:00</div>}
            </div> */}
          </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2"><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Good reasons to contact us</h2><p className="mt-3 text-sm leading-8 text-slate-600">Use this page to flag content that feels outdated, a page that needs a better explanation, or a workflow that makes the site harder to use on mobile.</p></article><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">What to include</h2><p className="mt-3 text-sm leading-8 text-slate-600">The page URL, what looked wrong, what device you used, and what outcome you expected are the most helpful details.</p></article></section>
      <section className="mt-card p-6"><h2 className="text-lg font-bold text-slate-900">Important note</h2><p className="mt-3 text-sm leading-8 text-slate-600">Do not use this page for urgent medical concerns. If your concern involves immediate symptoms, medication questions, or a child who seems acutely unwell, contact your clinician or emergency services instead.</p></section>
    </div></div>
  );
}
