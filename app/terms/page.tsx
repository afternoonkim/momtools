import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "MomTools 이용약관 페이지입니다. 서비스 이용 기준, 면책 범위, 외부 링크, 지식재산권, 금지 행위 등을 확인할 수 있습니다.",
};

const sections = [
  {
    title: "1. 목적",
    paragraphs: [
      "본 이용약관은 MomTools(이하 “사이트”)가 제공하는 육아 계산기, 육아 정보, 체크리스트, 콘텐츠 연결, 육아용품 정보 제공 등 관련 서비스의 이용 조건과 절차, 사이트와 이용자의 권리·의무 및 책임 사항을 정하는 것을 목적으로 합니다.",
    ],
  },
  {
    title: "2. 서비스의 성격",
    paragraphs: [
      "사이트는 출산, 육아, 생활 준비와 관련된 일반적인 정보를 쉽게 확인할 수 있도록 보조적 도구와 콘텐츠를 제공하는 웹서비스입니다.",
      "사이트가 제공하는 계산 결과, 설명, 체크리스트, 링크 연결 정보는 일반적인 참고 자료이며, 의료적 판단, 법적 판단, 전문 상담을 대체하지 않습니다.",
    ],
  },
  {
    title: "3. 이용자의 책임",
    paragraphs: [
      "이용자는 사이트에서 제공하는 정보를 자신의 상황에 맞게 참고용으로 활용해야 하며, 최종적인 판단과 결정은 본인의 책임 하에 진행해야 합니다.",
      "특히 건강 상태, 성장 이상, 질병 의심, 예방접종 여부, 치료 방향 등은 반드시 병원, 의료진, 공공기관의 안내를 우선하여 확인해야 합니다.",
    ],
  },
  {
    title: "4. 서비스 제공 및 변경",
    paragraphs: [
      "사이트는 운영상 필요에 따라 서비스의 전부 또는 일부를 수정, 추가, 중단할 수 있습니다.",
      "계산기 로직, 문구, 메뉴 구조, 콘텐츠 구성, 외부 링크, 정책 페이지 등은 서비스 품질 개선 또는 운영상 필요에 따라 변경될 수 있습니다.",
      "운영자는 별도의 사전 통지 없이 일부 기능을 조정할 수 있으나, 중요한 변경 사항은 합리적인 방식으로 반영하도록 노력합니다.",
    ],
  },
  {
    title: "5. 면책 사항",
    paragraphs: [
      "사이트는 정보 제공을 위해 노력하지만, 제공되는 정보의 완전성, 최신성, 정확성, 특정 목적 적합성을 절대적으로 보증하지 않습니다.",
      "사이트 이용자가 계산 결과, 정보 콘텐츠, 체크리스트, 외부 링크 등을 이용하여 내린 판단이나 결정에 대해 사이트는 책임을 지지 않습니다.",
      "건강, 진료, 구매, 계약, 법률, 재정 등 중요한 결정은 반드시 관련 전문가 및 공식 기관 안내를 함께 확인해야 합니다.",
    ],
  },
  {
    title: "6. 외부 링크 및 제휴 서비스",
    paragraphs: [
      "사이트는 이용자 편의를 위해 블로그, 유튜브, 쇼핑 링크, 제휴 링크 등 외부 사이트 또는 외부 서비스로 연결될 수 있습니다.",
      "외부 사이트의 상품 정보, 가격, 재고, 배송, 환불, 개인정보 처리, 정책, 서비스 상태 등은 해당 운영 주체의 책임 하에 관리됩니다.",
      "사이트는 외부 링크 연결 자체만 제공할 수 있으며, 외부 사이트에서 발생하는 문제에 대해 직접 책임지지 않습니다.",
    ],
  },
  {
    title: "7. 광고 및 제휴 고지",
    paragraphs: [
      "사이트에는 광고 또는 제휴 링크가 포함될 수 있습니다.",
      "이 경우 관련 법령 및 플랫폼 정책에 맞추어 광고성 또는 제휴성 문구를 표시할 수 있습니다.",
      "이용자는 링크를 통해 외부 서비스로 이동하기 전, 해당 페이지의 안내 문구와 실제 판매처 정보를 함께 확인해야 합니다.",
    ],
  },
  {
    title: "8. 지식재산권",
    paragraphs: [
      "사이트 내 텍스트, 디자인, 구성, 이미지, 설명 문구, 로고, 기능 구성 등은 운영자 또는 정당한 권리자의 권리에 속할 수 있습니다.",
      "이용자는 사이트의 내용을 개인적인 참고 범위를 넘어 무단 복제, 재배포, 상업적 재사용, 2차 가공 등의 방식으로 사용할 수 없습니다.",
      "단, 관련 법령이 허용하는 범위 또는 운영자가 별도로 허용한 경우는 예외로 합니다.",
    ],
  },
  {
    title: "9. 금지 행위",
    paragraphs: [
      "이용자는 다음과 같은 행위를 해서는 안 됩니다.",
    ],
    bullets: [
      "사이트 운영을 방해하거나 비정상적인 접근을 시도하는 행위",
      "자동화 도구를 사용한 과도한 요청 또는 서버에 부담을 주는 행위",
      "허위 문의, 스팸, 욕설, 명예훼손, 불법 정보 전송 행위",
      "사이트의 정보를 무단으로 복제·배포하거나 상업적으로 악용하는 행위",
      "기타 관련 법령 또는 공서양속에 반하는 행위",
    ],
  },
  {
    title: "10. 개인정보 보호",
    paragraphs: [
      "이용자의 개인정보 처리와 관련된 사항은 별도의 개인정보처리방침에 따릅니다.",
      "문의 기능을 이용하는 경우 이용자가 자발적으로 제공한 정보가 처리될 수 있으므로, 자세한 내용은 개인정보처리방침을 확인해 주세요.",
    ],
  },
  {
    title: "11. 약관의 변경",
    paragraphs: [
      "본 이용약관은 서비스 구조, 법령, 운영 정책 변경 등에 따라 수정될 수 있습니다.",
      "약관이 변경되는 경우 사이트 내 페이지 개정일 갱신 또는 공지 형태로 반영할 수 있습니다.",
      "변경 후에도 사이트를 계속 이용하는 경우 변경된 약관에 동의한 것으로 볼 수 있습니다.",
    ],
  },
  {
    title: "12. 준거 및 문의",
    paragraphs: [
      "본 약관의 해석과 적용은 관련 법령 및 일반적인 서비스 운영 원칙에 따릅니다.",
      "서비스 이용과 관련한 문의는 문의하기 페이지에 안내된 운영자 연락처를 통해 전달할 수 있습니다.",
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
            본 약관은 MomTools가 제공하는 서비스의 이용 조건과 운영 기준을 안내하기 위해
            작성되었습니다. 사이트 이용 전 아래 내용을 확인해 주세요.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm text-slate-600">
            시행일 예시: 2026-03-14
          </div>
        </section>

        <AdBlock placement="legalInline" label="이용약관 상단 광고 영역" format="horizontal" />

        {sections.map((section, index) => (
          <div key={section.title}>
          <section className="mt-card p-8 md:p-10">
            <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
              {section.title}
            </h2>

            <div className="mt-5 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-8 text-slate-600 md:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-2 pl-1 text-sm leading-8 text-slate-600 md:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          {index === 4 ? (
            <AdBlock placement="legalInline" label="이용약관 중단 광고 영역" format="rectangle" />
          ) : null}
          </div>
        ))}

        <AdBlock placement="legalInline" label="이용약관 하단 광고 영역" format="horizontal" />

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">추가 안내</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              MomTools는 계산기와 정보형 콘텐츠를 제공하는 사이트이며,
              모든 결과와 설명은 참고 자료로 활용되어야 합니다.
            </p>
            <p>
              특히 건강, 예방접종, 성장 판단, 구매 결정처럼 중요한 문제는
              MomTools 단독 정보에 의존하기보다 의료진, 공식 기관, 판매처 안내를 함께
              확인하는 것이 적절합니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/privacy"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">개인정보처리방침</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                개인정보와 쿠키, 외부 도구 연동 기준을 함께 확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                사이트 관련 문의, 오류 제보, 제휴 문의가 필요할 때 확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/faq"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                자주 묻는 질문으로 기본적인 이용 기준을 빠르게 볼 수 있어요.
              </div>
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">홈으로 이동</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                MomTools 전체 구조로 돌아갈 수 있어요.
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}