import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "MomTools 이용약관 페이지입니다. 서비스 성격, 사용자 책임, 의료 정보 면책, 외부 링크, 저작권, 정책 변경 기준을 확인할 수 있습니다.",
};

const sections = [
  {
    title: "1. 목적",
    paragraphs: [
      "본 이용약관은 MomTools(이하 ‘사이트’)가 제공하는 임신·출산·육아 관련 계산기, 정보 페이지, 체크리스트, 외부 링크 연결, 육아용품 탐색형 콘텐츠 등의 이용 조건과 책임 범위를 정하는 것을 목적으로 합니다.",
    ],
  },
  {
    title: "2. 서비스의 성격",
    paragraphs: [
      "사이트는 보호자와 예비 부모가 육아 흐름을 이해하고 준비하는 데 도움이 되는 참고용 도구와 정보를 제공합니다.",
      "사이트의 계산 결과, 설명 문구, 체크리스트, 링크 정리, 추천 콘텐츠는 이해를 돕기 위한 일반 정보이며, 의료 진단, 치료 지시, 법률 자문, 재무 상담, 구매 확정 판단을 대신하지 않습니다.",
    ],
  },
  {
    title: "3. 이용 대상과 기본 원칙",
    paragraphs: [
      "사이트는 누구나 자유롭게 열람할 수 있으나, 실제 활용은 보호자 또는 성인의 판단을 전제로 합니다.",
      "아이의 건강 상태, 예방접종 가능 여부, 발달 이상 여부, 식이 조절, 알레르기, 약 복용 여부처럼 개인 상태에 따라 달라질 수 있는 사항은 반드시 병원이나 공식 기관 안내를 함께 확인해야 합니다.",
    ],
  },
  {
    title: "4. 이용자의 책임",
    paragraphs: [
      "이용자는 사이트에서 제공되는 정보를 자신의 상황에 맞는 참고자료로 사용해야 하며, 최종 판단과 행동의 책임은 본인에게 있습니다.",
      "특히 증상 판단, 응급 여부, 진료 시점, 접종 결정, 제품 구매, 계약 체결, 법적 분쟁 대응 등 중요한 결정은 전문가 또는 공식 안내를 우선으로 해야 합니다.",
      "문의하기를 통해 개인별 진단, 처방, 응급 판단, 법률 판단을 요청해서는 안 됩니다.",
    ],
  },
  {
    title: "5. 서비스 제공과 변경",
    paragraphs: [
      "사이트는 필요에 따라 계산기 로직, 문구, 메뉴 구조, 링크 구성, 디자인, 정책 페이지 내용을 수정하거나 일부 기능을 중단할 수 있습니다.",
      "중요한 변경 사항은 합리적인 범위에서 페이지 개정일 또는 사이트 안내 형태로 반영하도록 노력합니다.",
    ],
  },
  {
    title: "6. 의료 정보 및 건강 관련 면책",
    paragraphs: [
      "MomTools는 의료기관이 아니며, 의료진을 대신해 개별 상황에 대한 진단 또는 치료 결정을 내리지 않습니다.",
      "예정일 계산, 개월 수 확인, 접종 시기 정리, 성장 백분위, 이유식 시기 안내 등은 부모가 흐름을 이해하는 데 도움을 주는 참고용 정보입니다.",
      "발열, 탈수, 경련, 호흡 이상, 성장 정체, 발달 지연, 예방접종 금기 여부처럼 실제 건강에 직접 영향을 주는 문제는 반드시 의료진 상담을 통해 확인해야 합니다.",
    ],
  },
  {
    title: "7. 외부 링크와 안내 콘텐츠",
    paragraphs: [
      "사이트는 이용자 편의를 위해 외부 블로그, 유튜브, 쇼핑몰, 공공기관, 기타 웹서비스로 연결될 수 있습니다.",
      "외부 사이트의 상품 정보, 가격, 재고, 배송, 환불, 개인정보 처리, 접속 안정성은 해당 서비스 제공자의 책임이며, 사이트는 이를 직접 통제하지 않습니다.",
      "일부 링크는 외부 안내 성격을 가질 수 있으며, 이용자가 혼동하지 않도록 필요한 안내 문구를 함께 표시하려고 합니다.",
    ],
  },
  {
    title: "8. 외부 안내 정보에 대한 원칙",
    paragraphs: [
      "사이트에는 추가 정보를 확인할 수 있는 외부 안내 요소가 포함될 수 있습니다.",
      "외부에서 제공하는 상품이나 서비스의 품질, 안전성, 적합성을 사이트가 보증하는 것은 아닙니다.",
      "이용자는 링크를 통해 이동한 외부 페이지에서 제공하는 최신 정보를 다시 확인해야 합니다.",
    ],
  },
  {
    title: "9. 지식재산권",
    paragraphs: [
      "사이트에 게시된 텍스트, 설명, 구성, 디자인, 자체 제작한 정리 문구와 편집 결과물에 대한 권리는 별도 표시가 없는 한 사이트 또는 정당한 권리자에게 있습니다.",
      "법이 허용하는 범위를 넘는 무단 복제, 재배포, 상업적 전재는 제한될 수 있습니다.",
      "다만 공공기관 자료, 외부 브랜드명, 제품명, 공공 정보 링크 등은 각 권리자 또는 출처 기준이 함께 적용될 수 있습니다.",
    ],
  },
  {
    title: "10. 금지되는 이용 행위",
    paragraphs: [
      "다음과 같은 행위는 제한될 수 있습니다.",
    ],
    bullets: [
      "사이트 기능을 방해하거나 비정상적 접근을 시도하는 행위",
      "허위 정보 입력, 스팸 발송, 악성 문의, 과도한 자동 요청 행위",
      "정책 페이지나 안내 문구를 의도적으로 왜곡해 오해를 유발하는 행위",
      "불법 행위, 타인의 권리 침해, 악성 코드 유포와 관련된 행위",
    ],
  },
  {
    title: "11. 서비스 중단과 책임 제한",
    paragraphs: [
      "사이트는 서버 점검, 기능 개편, 외부 서비스 장애, 네트워크 문제, 불가항력적 상황에 따라 일시적으로 중단될 수 있습니다.",
      "사이트는 안정적인 제공을 위해 노력하지만, 모든 정보의 완전성·최신성·무오류 상태를 절대적으로 보증하지 않습니다.",
      "이용자가 사이트 정보를 활용해 내린 판단과 행동으로 인해 발생한 직접적 또는 간접적 손해에 대해, 법령이 허용하는 범위 안에서 책임이 제한될 수 있습니다.",
    ],
  },
  {
    title: "12. 약관 변경",
    paragraphs: [
      "본 약관은 서비스 구조, 이용 기준, 법령 변화에 따라 수정될 수 있습니다.",
      "중요한 변경이 있는 경우 페이지 개정일 갱신 또는 사이트 내 안내 방식으로 반영할 수 있습니다.",
    ],
  },
  {
    title: "13. 문의",
    paragraphs: [
      "약관과 서비스 이용 기준에 대한 문의는 문의하기 페이지에 안내된 연락 수단을 통해 전달할 수 있습니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Terms of Service</span>
          <h1 className="mt-title-lg mt-4">이용약관</h1>
          <p className="mt-text-main mt-4">
            MomTools는 보호자와 예비 부모가 참고용으로 활용할 수 있는 계산기와 육아
            콘텐츠를 제공합니다. 이 페이지에서는 사이트를 어떤 범위에서 이용해야 하는지,
            어떤 내용은 참고용인지, 외부 링크는 어떤 원칙으로 연결되는지,
            이용자의 책임은 어디까지인지 정리해 두었습니다.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm text-slate-600">
            시행일: 2026-04-09
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">핵심 이용 원칙</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              사이트의 계산 결과와 설명은 참고용이며, 개인 맞춤 진단이나 전문 판단을 대신하지
              않습니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              건강, 접종, 발달, 식이, 응급 상황은 반드시 의료진 또는 공식 기관 기준을 먼저
              확인해야 합니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              외부 링크는 편의를 위한 연결이며, 실제 상품 정보와 정책은 연결된 페이지 기준이 적용됩니다.
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <div key={section.title}>
            <section className="mt-card p-8 md:p-10">
              <h2 className="text-xl font-bold text-slate-800 md:text-2xl">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-8 text-slate-600 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-2 pl-1 text-sm leading-8 text-slate-600 md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          </div>
        ))}

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">관련 페이지 함께 보기</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/privacy"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">개인정보처리방침</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                어떤 정보가 수집될 수 있는지, 외부 서비스와 쿠키는 어떻게 연결될 수 있는지
                확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                오류 제보, 정책 문의, 정보 수정 요청이 필요할 때 바로 이동할 수 있어요.
              </div>
            </Link>

            <Link
              href="/faq"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                계산기 정확도, 정책 페이지, 문의 기준과 관련된 자주 묻는 질문을 볼 수 있어요.
              </div>
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">홈으로 이동</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                MomTools 메인으로 돌아가 계산기와 육아 정보 페이지를 이어서 확인해 보세요.
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
