import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "MomTools 개인정보처리방침 페이지입니다. 수집 가능한 정보, 이용 목적, 보유 기간, 외부 서비스, 이용자 권리 등에 대한 기준을 안내합니다.",
};

const sections = [
  {
    title: "1. 총칙",
    paragraphs: [
      "MomTools(이하 “사이트”)는 육아 계산기, 육아 정보, 체크리스트, 콘텐츠 연결, 육아용품 정보 제공 등을 목적으로 운영되는 웹사이트입니다.",
      "사이트는 이용자의 개인정보를 중요하게 생각하며, 개인정보 보호 관련 법령을 준수하기 위해 노력합니다.",
      "본 개인정보처리방침은 사이트 이용 과정에서 수집될 수 있는 정보, 그 이용 목적, 보관 및 파기 기준, 이용자의 권리 등을 안내하기 위해 작성되었습니다.",
    ],
  },
  {
    title: "2. 수집할 수 있는 정보",
    paragraphs: [
      "사이트는 기본적으로 회원가입 없이 이용할 수 있는 구조를 지향합니다. 따라서 일반적인 계산기 및 정보 페이지 이용만으로 이름, 주민등록번호 등 민감한 개인정보를 직접 요구하지 않습니다.",
      "다만 다음과 같은 정보가 서비스 운영 과정에서 수집되거나 처리될 수 있습니다.",
    ],
    bullets: [
      "문의하기 기능을 통해 이용자가 직접 입력한 이름, 이메일 주소, 문의 내용",
      "접속 로그, 기기 정보, 브라우저 정보, IP 주소, 쿠키 정보 등 서비스 운영에 필요한 비식별 정보",
      "광고, 방문 통계, 외부 콘텐츠 연동 과정에서 생성되는 이용 기록",
      "링크 클릭, 페이지 이동, 체류 시간 등 사이트 개선을 위한 통계성 정보",
    ],
  },
  {
    title: "3. 개인정보의 수집 및 이용 목적",
    paragraphs: [
      "사이트는 다음 목적 범위 내에서 개인정보 또는 관련 이용 정보를 처리할 수 있습니다.",
    ],
    bullets: [
      "문의 응대 및 사용자 요청 처리",
      "오류 확인, 기능 개선, 서비스 안정성 점검",
      "부정 이용 방지 및 보안 관리",
      "콘텐츠 품질 개선과 사용자 편의성 향상",
      "광고 노출, 제휴 링크 운영, 방문 통계 분석",
    ],
  },
  {
    title: "4. 개인정보의 보유 및 이용 기간",
    paragraphs: [
      "사이트는 개인정보 수집 목적이 달성되면 해당 정보를 지체 없이 파기하는 것을 원칙으로 합니다.",
      "다만 법령에 따라 일정 기간 보관이 필요한 경우 또는 분쟁 대응, 보안 기록, 문의 이력 관리가 필요한 경우에는 필요한 범위 내에서 일정 기간 보관할 수 있습니다.",
      "구체적인 보관 기간은 실제 운영 방식, 문의 시스템, 외부 서비스 연동 방식에 따라 달라질 수 있으며, 운영자는 최소한의 기간만 보관하도록 노력합니다.",
    ],
  },
  {
    title: "5. 쿠키 및 로그 정보",
    paragraphs: [
      "사이트는 이용자 경험 개선, 접속 통계, 광고 운영, 외부 서비스 연동을 위해 쿠키 또는 유사한 기술을 사용할 수 있습니다.",
      "쿠키는 이용자의 브라우저에 저장되는 작은 정보 파일로, 사이트 접속 상태 유지, 통계 분석, 맞춤형 기능 제공 등에 활용될 수 있습니다.",
      "이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다. 다만 이 경우 일부 기능 사용에 제한이 있을 수 있습니다.",
    ],
  },
  {
    title: "6. 외부 서비스 및 제3자 제공 관련",
    paragraphs: [
      "사이트는 콘텐츠 제공, 방문 분석, 광고 운영, 외부 링크 연결 등을 위해 제3자 서비스와 연동될 수 있습니다.",
      "예를 들어 블로그 콘텐츠, 유튜브 콘텐츠, 광고 플랫폼, 방문 통계 도구, 외부 쇼핑 링크, 제휴 링크 등이 포함될 수 있습니다.",
      "이 과정에서 각 외부 서비스는 자체적인 정책에 따라 이용자 정보를 처리할 수 있으며, 이에 대해서는 해당 서비스의 개인정보처리방침 또는 정책이 적용될 수 있습니다.",
      "사이트 운영자는 이용자 편의를 위해 외부 서비스를 연결할 수 있으나, 외부 사이트에서 이루어지는 개인정보 처리에 대해서는 직접 통제하지 않습니다.",
    ],
  },
  {
    title: "7. 이용자의 권리",
    paragraphs: [
      "이용자는 자신의 개인정보와 관련하여 열람, 정정, 삭제, 처리 정지 요청 등을 할 수 있습니다.",
      "문의 기능을 통해 제출한 개인정보의 수정 또는 삭제를 원하는 경우, 운영자가 안내한 연락처를 통해 요청할 수 있습니다.",
      "단, 법령상 보관 의무가 있거나 서비스 운영상 즉시 삭제가 어려운 경우에는 해당 범위 내에서 제한될 수 있습니다.",
    ],
  },
  {
    title: "8. 아동의 개인정보 보호",
    paragraphs: [
      "사이트는 육아 관련 정보를 제공하지만, 원칙적으로 법정대리인의 동의 없이 아동의 개인정보를 적극적으로 수집하는 구조를 지향하지 않습니다.",
      "이용자는 문의 과정에서 아동의 민감한 개인정보, 건강정보, 식별 가능한 상세정보를 불필요하게 기재하지 않도록 주의해 주세요.",
      "운영자는 아동 관련 민감 정보가 불필요하게 포함된 경우 해당 정보의 삭제 또는 최소화를 요청할 수 있습니다.",
    ],
  },
  {
    title: "9. 개인정보의 안전성 확보 조치",
    paragraphs: [
      "사이트 운영자는 개인정보의 분실, 도난, 유출, 위·변조 등을 방지하기 위해 관리적·기술적 조치를 합리적인 범위 내에서 적용하도록 노력합니다.",
      "다만 인터넷 환경의 특성상 완전한 보안을 절대적으로 보장할 수는 없으므로, 이용자 역시 문의 시 불필요한 민감 정보를 입력하지 않도록 주의해야 합니다.",
    ],
  },
  {
    title: "10. 개인정보처리방침의 변경",
    paragraphs: [
      "본 개인정보처리방침은 서비스 내용, 기능, 연동 도구, 법령 및 정책 변화에 따라 수정될 수 있습니다.",
      "중요한 변경이 있는 경우 사이트 내 페이지 개정일 갱신 또는 별도 공지 방식으로 반영할 수 있습니다.",
    ],
  },
  {
    title: "11. 문의처",
    paragraphs: [
      "개인정보와 관련된 문의, 열람·수정·삭제 요청이 있는 경우 문의하기 페이지에 기재된 운영자 연락처를 통해 요청할 수 있습니다.",
      "실제 운영 시 이 위치에 운영 이메일 또는 문의 폼 정보를 기재해 주세요.",
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
            MomTools는 이용자의 개인정보를 중요하게 생각합니다. 본 페이지는 사이트 이용
            과정에서 수집될 수 있는 정보와 그 처리 기준을 이해하기 쉽게 안내하기 위해
            작성되었습니다.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm text-slate-600">
            시행일 예시: 2026-03-14
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.title} className="mt-card p-8 md:p-10">
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
        ))}

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">추가 안내</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              MomTools는 회원가입 없이 이용할 수 있는 구조를 지향하지만, 문의, 로그,
              쿠키, 광고 및 분석 도구 연동 과정에서 일부 정보가 처리될 수 있습니다.
            </p>
            <p>
              실제 운영 환경에서 Google AdSense, 방문자 분석 도구, 외부 링크, 제휴 링크가
              추가될 경우 해당 서비스 제공자의 정책도 함께 적용될 수 있으므로,
              필요 시 각 서비스의 정책도 별도로 확인하는 것이 좋습니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/terms"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">이용약관</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                서비스 이용 기준과 면책 사항을 함께 확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                개인정보 관련 요청이나 문의가 필요한 경우 확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/faq"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                MomTools 이용 전 자주 묻는 질문을 함께 볼 수 있어요.
              </div>
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">홈으로 이동</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                계산기와 정보 페이지 전체 구조로 돌아갈 수 있어요.
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}