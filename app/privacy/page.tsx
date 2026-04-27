import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "MomTools 개인정보처리방침 페이지입니다. 수집 가능한 정보, 이용 목적, 쿠키, 광고, 외부 서비스, 보유 기간, 이용자 권리, 아동 관련 정보 처리 기준을 확인할 수 있습니다.",
};

const sections = [
  {
    title: "1. 개인정보처리방침의 목적",
    paragraphs: [
      "MomTools(이하 ‘사이트’)는 임신, 출산, 신생아, 이유식, 육아 일정과 준비 과정에 도움이 되는 계산기와 정보 콘텐츠를 제공하는 웹사이트입니다.",
      "본 개인정보처리방침은 사이트 이용 과정에서 어떤 정보가 수집될 수 있는지, 왜 필요한지, 얼마나 보관될 수 있는지, 외부 서비스가 어떤 방식으로 연결될 수 있는지, 이용자가 어떤 권리를 가지는지 이해하기 쉽게 안내하기 위해 작성되었습니다.",
      "사이트는 회원가입 없이 이용할 수 있는 형태를 기본으로 하며, 꼭 필요한 범위를 넘는 개인정보 수집은 최소화합니다.",
    ],
  },
  {
    title: "2. 수집될 수 있는 정보",
    paragraphs: [
      "일반적인 계산기 사용이나 정보 페이지 열람만으로 이름, 생년월일, 주민등록번호 같은 식별 정보를 직접 제출하도록 요구하지 않습니다.",
      "다만 사이트 이용 과정에서 아래와 같은 정보가 제한적으로 수집되거나 처리될 수 있습니다.",
    ],
    bullets: [
      "문의 메일 또는 문의 폼을 통해 이용자가 직접 입력한 이름, 이메일 주소, 문의 내용",
      "접속 일시, 브라우저 종류, 기기 종류, 화면 크기, IP 주소, 리퍼러, 페이지 이동 기록 등 로그성 정보",
      "방문 통계, 성능 측정, 오류 분석, 기본 환경 설정을 위해 생성될 수 있는 쿠키 또는 유사 기술 기반 정보",
      "외부 안내 링크, 동영상, 임베드 콘텐츠 이용 과정에서 제한적으로 남을 수 있는 기록",
    ],
  },
  {
    title: "3. 정보를 이용하는 목적",
    paragraphs: [
      "사이트는 아래 목적 범위 안에서만 이용 정보 또는 개인정보를 처리할 수 있습니다.",
    ],
    bullets: [
      "문의 응답, 오류 확인, 기능 점검, 사용자 요청 처리",
      "사이트 품질 개선, 화면 최적화, 속도 개선, 오류 재현 및 보안 점검",
      "부정 이용 방지, 스팸 및 비정상 트래픽 탐지",
      "방문 통계 확인, 콘텐츠 품질 개선, 메뉴 구성 보완",
      "외부 안내 링크와 연결된 페이지의 이용 흐름 점검",
    ],
  },
  {
    title: "4. 쿠키와 유사 기술의 사용",
    paragraphs: [
      "사이트는 이용 편의 개선, 방문 통계 파악, 성능 측정, 언어 또는 화면 환경 유지를 위해 쿠키나 유사 기술을 사용할 수 있습니다.",
      "쿠키는 사용자의 브라우저에 저장되는 작은 파일이며, 같은 사용자의 재방문 여부 파악, 페이지 성능 측정, 기본 환경 설정 유지 등에 활용될 수 있습니다.",
      "이용자는 브라우저 설정에서 쿠키 저장을 차단하거나 기존 쿠키를 삭제할 수 있습니다. 다만 이 경우 일부 기능 또는 개인화된 경험이 제한될 수 있습니다.",
    ],
  },
  {
    title: "5. 광고 파트너와 Google AdSense",
    paragraphs: [
      "MomTools는 사이트 운영을 위해 Google AdSense를 비롯한 제3자 광고 파트너의 광고를 노출할 수 있습니다. 이 과정에서 광고 파트너는 사이트 방문자의 브라우저에 직접 쿠키나 유사 기술을 설정하거나 사용자 식별자(예: 광고 ID)를 활용해 사용자의 관심에 더 가까운 광고를 표시할 수 있습니다.",
      "Google은 게시자와 사용자 모두에게 적용되는 자체 광고 정책에 따라 데이터를 처리하며, 사이트는 Google이 수집·처리하는 데이터를 직접 통제하거나 보관하지 않습니다. Google의 광고 관련 정책은 ‘Google 개인정보처리방침’ 및 ‘Google 광고를 통한 개인 정보 사용 방법’ 페이지에서 확인할 수 있습니다.",
      "맞춤형 광고를 원치 않는 이용자는 사이트 하단의 쿠키 동의 배너에서 ‘맞춤형 광고 거부’를 선택할 수 있으며, 추가로 Google 광고 설정(adssettings.google.com), youronlinechoices.eu, optout.aboutads.info 등에서 광고 개인화를 직접 차단할 수 있습니다.",
      "EU/EEA·영국·스위스 거주 이용자에게는 GDPR 및 ePrivacy에 따라 사전 동의가 필요한 쿠키 사용 시 별도 동의 인터페이스(Consent Management Platform)가 표시될 수 있으며, 동의 없이는 비맞춤형 광고만 표시됩니다. 캘리포니아 거주 이용자는 CCPA에 따라 ‘판매·공유 거부’ 권리를 행사할 수 있습니다.",
    ],
  },
  {
    title: "6. 외부 서비스 연동",
    paragraphs: [
      "사이트에는 동영상 플랫폼, 지도, 임베드 요소, 외부 쇼핑몰, 공공 안내 링크, 블로그 또는 SNS처럼 이용 편의를 위한 외부 연결이 포함될 수 있습니다.",
      "외부 서비스는 자체 정책에 따라 이용자 정보를 처리할 수 있으며, 해당 처리에 대해서는 각 서비스 제공자의 정책이 적용됩니다.",
      "사이트는 이용자 편의를 위해 외부 서비스를 연결할 수 있지만, 외부 사이트의 회원관리, 결제, 배송, 자체 쿠키 정책까지 직접 통제하지는 않습니다. 외부 사이트로 이동한 이후에는 해당 사이트의 정책을 확인해 주세요.",
    ],
  },
  {
    title: "7. 외부 안내 링크에 대한 안내",
    paragraphs: [
      "사이트에는 부모가 추가 정보를 확인하기 쉽도록 외부 안내 링크가 포함될 수 있으며, 이 과정에서 기본적인 클릭 기록이나 이동 정보가 기술적으로 처리될 수 있습니다.",
      "외부 안내 링크의 성격이 일반 정보 연결과 다른 경우에는 이용자가 혼동하지 않도록 필요한 안내 문구를 함께 표시하려고 합니다.",
      "다만 사이트는 특정 상품의 성능이나 안전성, 판매 조건을 보증하지 않으며, 실제 구매 전에는 반드시 판매처의 최신 상품 정보와 정책을 다시 확인해야 합니다.",
    ],
  },
  {
    title: "8. 보유 기간과 파기 원칙",
    paragraphs: [
      "사이트는 개인정보 처리 목적이 달성되면 지체 없이 파기하는 것을 원칙으로 합니다.",
      "다만 문의 이력 확인, 분쟁 대응, 보안 점검, 법령상 보존 의무가 있는 기록은 필요한 범위 안에서 일정 기간 보관될 수 있습니다.",
      "보관 기간은 실제 이용 방식, 외부 서비스 구조, 법적 의무에 따라 달라질 수 있으며, 가능한 한 필요한 기간만 보유하려고 합니다.",
    ],
  },
  {
    title: "9. 이용자의 권리",
    paragraphs: [
      "이용자는 자신이 제공한 개인정보에 대해 열람, 정정, 삭제, 처리 정지 요청을 할 수 있습니다.",
      "문의 과정에서 제출한 정보의 수정이나 삭제를 원할 경우 문의 페이지에 안내된 연락 수단을 통해 요청할 수 있습니다.",
      "법령상 보관 의무가 있거나 기술적으로 즉시 삭제가 어려운 경우에는 해당 사유를 고려하여 제한될 수 있습니다.",
    ],
  },
  {
    title: "10. 아동 관련 정보 보호",
    paragraphs: [
      "사이트는 육아 정보를 다루지만, 원칙적으로 보호자 동의 없는 아동 개인정보의 적극적 수집을 지향하지 않습니다.",
      "문의 시 아이의 실명, 생년월일 전체, 연락처, 진료기록, 사진, 상세 건강정보처럼 식별 가능성이 높은 민감한 정보는 입력하지 않도록 권장합니다.",
      "불필요하게 민감한 정보가 포함된 문의가 접수된 경우, 정보 삭제 또는 최소화를 요청할 수 있습니다.",
    ],
  },
  {
    title: "11. 건강 정보와 민감 정보에 대한 안내",
    paragraphs: [
      "MomTools는 의료기관이 아니며, 의료 상담 또는 진단을 위한 서비스가 아닙니다.",
      "계산기 입력 과정에서 체중, 키, 생년월일, 접종 시기, 임신 주수처럼 건강 또는 민감한 정보와 연결될 수 있는 내용을 사용자가 스스로 입력할 수 있으나, 이런 정보는 가능한 한 개인 참고용으로 사용하는 것을 권장합니다.",
      "건강 이상, 발달 지연, 접종 여부, 진료 필요성처럼 중요한 판단은 반드시 의료진과 상담해야 하며, 문의하기를 통해 개인별 진단을 요청해서는 안 됩니다.",
    ],
  },
  {
    title: "12. 보안과 보호 조치",
    paragraphs: [
      "사이트는 개인정보의 분실, 도난, 유출, 위·변조를 줄이기 위해 합리적인 수준의 관리적·기술적 보호 조치를 적용하려고 노력합니다.",
      "다만 인터넷 환경의 특성상 모든 위험을 완전히 제거할 수는 없으므로, 이용자 역시 문의 시 민감한 정보 입력을 최소화해 주세요.",
    ],
  },
  {
    title: "13. 정책 변경 안내",
    paragraphs: [
      "본 개인정보처리방침은 서비스 구조, 외부 서비스 연동, 법령 또는 정책 변화에 따라 수정될 수 있습니다.",
      "중요한 변경이 있을 경우 페이지 개정일을 업데이트하거나 사이트 내 안내 방식으로 반영할 수 있습니다.",
    ],
  },
  {
    title: "14. 문의처",
    paragraphs: [
      "개인정보 관련 문의, 정정·삭제 요청, 정책 관련 문의는 문의하기 페이지에 안내된 이메일 또는 연락 수단을 통해 전달할 수 있습니다.",
      "문의 시 어떤 페이지에서 어떤 정보와 관련된 요청인지 함께 적어주면 더 빠르게 확인할 수 있습니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Privacy Policy</span>
          <h1 className="mt-title-lg mt-4">개인정보처리방침</h1>
          <p className="mt-text-main mt-4">
            MomTools는 부모가 안심하고 사이트를 이용할 수 있도록 개인정보 처리 기준을
            가능한 한 쉽게 안내하려고 합니다. 이 페이지에서는 어떤 정보가 수집될 수
            있는지, 왜 필요한지, 외부 서비스와 광고 파트너가 어떤 방식으로 연결될 수 있는지,
            이용자가 어떤 권리를 가질 수 있는지 정리해 두었습니다.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm text-slate-600">
            시행일: 2026-04-09 · 최근 개정: 2026-04-27
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">먼저 알아두면 좋은 핵심</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              회원가입 없이 이용하는 구조를 지향하며, 일반적인 페이지 열람만으로 민감한
              개인정보 제출을 요구하지 않습니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              Google AdSense 등 광고 파트너가 쿠키와 광고 ID를 사용할 수 있으며, 사이트 하단의
              쿠키 동의 배너에서 맞춤형 광고를 거부할 수 있습니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              아이 건강 상태나 진료 판단이 필요한 내용은 문의하기가 아니라 반드시 병원과
              의료진을 통해 확인해야 합니다.
            </div>
          </div>
        </section>

        {sections.map((section) => (
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

                {section.bullets && (
                  <ul className="space-y-2 pl-1 text-sm leading-8 text-slate-600 md:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </div>
        ))}

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">관련 페이지 함께 보기</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/terms"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">이용약관</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                서비스 이용 범위, 면책 기준, 외부 링크와 콘텐츠 이용 원칙을 확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                개인정보 관련 요청, 오류 제보, 정책 문의가 필요할 때 참고해 주세요.
              </div>
            </Link>

            <Link
              href="/faq"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                계산기 활용 범위와 정책 페이지 관련 자주 묻는 질문을 한 번에 볼 수 있어요.
              </div>
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">홈으로 이동</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                계산기, 육아 정보, 체크리스트 등 MomTools 전체 구조로 돌아갈 수 있어요.
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
