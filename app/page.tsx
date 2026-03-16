import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "MomTools",
  description:
    "출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기, 성장 백분위까지 한 번에 확인할 수 있는 육아 계산기와 정보 허브",
};

const calculators = [
  {
    title: "출산 예정일 계산기",
    description:
      "마지막 생리 시작일 또는 임신 주수를 기준으로 예정일과 현재 임신 주차를 빠르게 확인할 수 있어요.",
    href: "/cal/due-date",
    badge: "Pregnancy",
  },
  {
    title: "아기 개월수 계산기",
    description:
      "생년월일 기준으로 현재 개월수, 일수, 개월 단계까지 한 번에 정리해 드려요.",
    href: "/cal/baby-age",
    badge: "Baby Age",
  },
  {
    title: "예방접종 일정 계산기",
    description:
      "생년월일을 바탕으로 월령 기준 예방접종 시기를 참고용으로 정리해 볼 수 있어요.",
    href: "/cal/vaccine-schedule",
    badge: "Vaccine",
  },
  {
    title: "이유식 시작 계산기",
    description:
      "이유식 시작 권장 시기와 준비를 언제부터 하면 좋을지 한 번에 파악할 수 있어요.",
    href: "/cal/weaning-start",
    badge: "Weaning",
  },
  {
    title: "성장 백분위 계산기",
    description:
      "키와 몸무게를 기준으로 현재 성장 위치를 참고용으로 확인할 수 있어요.",
    href: "/cal/growth-percentile",
    badge: "Growth",
  },
];

const infoCards = [
  {
    title: "임신",
    description:
      "임신 초기 증상, 출산 예정일, 주차별 체크포인트를 흐름에 맞춰 확인할 수 있어요.",
    href: "/info/pregnancy",
  },
  {
    title: "신생아",
    description:
      "수유, 수면, 체온, 배변, 예방접종처럼 초보 부모가 자주 찾는 핵심 정보를 정리했어요.",
    href: "/info/newborn",
  },
  {
    title: "이유식",
    description:
      "이유식 시작 시기, 준비 포인트, 단계별 진행 흐름을 한눈에 보기 쉽게 구성했어요.",
    href: "/info/weaning",
  },
  {
    title: "유아",
    description:
      "생활 습관, 놀이, 감정 표현, 어린이집 적응 등 실생활 중심 정보를 담았어요.",
    href: "/info/toddler",
  },
];

const checklistCards = [
  {
    title: "출산 준비 체크리스트",
    description: "출산 전 미리 준비해야 할 서류, 용품, 일정을 빠르게 정리해 보세요.",
    href: "/checklists/birth-prep",
  },
  {
    title: "신생아 준비 체크리스트",
    description: "집으로 아기를 맞이하기 전에 필요한 핵심 항목들을 확인할 수 있어요.",
    href: "/checklists/newborn-prep",
  },
  {
    title: "이유식 준비 체크리스트",
    description: "이유식 시작 전에 필요한 도구와 준비 순서를 빠르게 확인해요.",
    href: "/checklists/weaning-prep",
  },
  {
    title: "어린이집 준비 체크리스트",
    description: "등원 준비물과 적응 전 체크 포인트를 단계별로 볼 수 있어요.",
    href: "/checklists/daycare-prep",
  },
];

const contentCards = [
  {
    title: "블로그 콘텐츠",
    description:
      "운영 중인 블로그 글을 연결해 더 자세한 육아 정보와 정리형 콘텐츠를 볼 수 있어요.",
    href: "/content/blog",
  },
  {
    title: "추천 유튜브",
    description:
      "영상으로 보고 싶은 분들을 위해 추천 유튜브 콘텐츠 영역도 함께 구성했어요.",
    href: "/content/youtube",
  },
  {
    title: "육아용품 목록",
    description:
      "기저귀, 물티슈, 수유용품처럼 자주 찾는 육아용품을 카테고리별로 확인할 수 있어요.",
    href: "/items/essential",
  },
];

const trustCards = [
  {
    title: "FAQ",
    description:
      "계산기 정확도, 문의 방법, 제휴 링크, 정책 안내 등 자주 묻는 질문을 정리했습니다.",
    href: "/faq",
  },
  {
    title: "문의하기",
    description:
      "오류 제보, 제휴 문의, 콘텐츠 제안, 정보 수정 요청이 필요할 때 확인할 수 있어요.",
    href: "/contact",
  },
  {
    title: "개인정보처리방침",
    description:
      "문의 과정, 로그 수집, 쿠키, 외부 서비스 연동 등 개인정보 관련 기준을 안내합니다.",
    href: "/privacy",
  },
  {
    title: "이용약관",
    description:
      "서비스 이용 기준, 면책 사항, 외부 링크 안내, 금지 행위 등을 확인할 수 있어요.",
    href: "/terms",
  },
];

const workflow = [
  {
    step: "STEP 1",
    title: "계산기로 현재 상황 확인",
    description:
      "예정일, 개월수, 접종 시기, 이유식 시작 시기처럼 지금 필요한 계산을 먼저 확인하세요.",
  },
  {
    step: "STEP 2",
    title: "정보 페이지로 자세히 이해",
    description:
      "임신, 신생아, 이유식, 유아 단계별로 필요한 핵심 정보를 이어서 볼 수 있어요.",
  },
  {
    step: "STEP 3",
    title: "체크리스트와 용품 목록으로 실행",
    description:
      "실제로 준비해야 할 것들을 체크리스트와 용품 정리 페이지에서 이어서 정리할 수 있어요.",
  },
];

const quickTopics = [
  "임신 초기 증상은 언제부터 나타날까",
  "출산 예정일은 어떻게 계산할까",
  "신생아 하루 수면시간은 얼마나 될까",
  "아기 개월수는 왜 정확히 알아야 할까",
  "예방접종 일정은 월령 기준으로 어떻게 볼까",
  "이유식은 언제부터 시작하는 게 좋을까",
  "아기 성장 백분위는 어떻게 해석할까",
  "출산 준비물은 언제부터 챙기면 좋을까",
];

export default function HomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-10">
        <section className="mt-card overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="mt-badge">MomTools · 육아 계산기 & 정보 허브</span>
              <h1 className="mt-title-xl mt-5">
                바쁜 육아 일상에서
                <br />
                자주 찾는 정보만 더 쉽게
              </h1>
              <p className="mt-text-main mt-5 max-w-3xl">
                MomTools는 출산 예정일, 아기 개월수, 예방접종 일정, 이유식 시작 시기,
                성장 백분위처럼 자주 찾게 되는 육아 계산기와 임신·신생아·이유식·유아
                정보, 준비 체크리스트, 콘텐츠, 육아용품 목록까지 한곳에 모아둔 육아
                도구 사이트입니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/cal/due-date" className="mt-button-primary">
                  대표 계산기 시작하기
                </Link>
                <Link href="/faq" className="mt-button-secondary">
                  이용 전 FAQ 보기
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Calculators
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-800">5개</div>
                  <div className="mt-1 text-sm text-slate-500">핵심 육아 계산기</div>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Information
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-800">4개</div>
                  <div className="mt-1 text-sm text-slate-500">단계별 육아 정보</div>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Support
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-800">다양한 보조 페이지</div>
                  <div className="mt-1 text-sm text-slate-500">
                    체크리스트 · 콘텐츠 · 정책 안내
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {workflow.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[24px] border border-amber-100 bg-white p-5 shadow-[0_12px_28px_rgba(245,158,11,0.08)]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                    {item.step}
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-slate-800">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="자주 찾는 기능 중심"
            description="실제로 부모들이 자주 찾는 날짜 계산, 월령 기준, 준비 순서를 먼저 배치해 접근성을 높였습니다."
          />
          <FeatureCard
            title="밝고 편한 홈 구조"
            description="현재 MomTools 프로젝트의 따뜻한 컬러와 카드형 구조에 맞춰 홈 화면 동선을 더 명확하게 정리했습니다."
          />
          <FeatureCard
            title="운영 확장에 유리한 구성"
            description="계산기, 정보, 체크리스트, 콘텐츠, 정책 페이지가 분리되어 있어 이후 유지보수와 확장이 편합니다."
          />
        </section>

        <AdBlock placement="homeTop" label="홈 상단 광고 영역" format="horizontal" />

        <section className="mt-card p-8 md:p-10">
          <SectionHeader
            eyebrow="MomTools 소개"
            title="MomTools는 어떤 사이트인가요"
            description="초보 부모가 자주 찾는 계산기와 핵심 육아 정보를 한 번에 확인할 수 있도록 구성한 육아 도구 플랫폼입니다."
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-slate-800">육아 계산기 중심 구조</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
                MomTools는 출산 예정일 계산기, 아기 개월수 계산기, 예방접종 일정
                계산기, 이유식 시작 계산기, 성장 백분위 계산기처럼 부모가 실제로
                자주 찾는 기능을 우선 배치했습니다. 복잡한 정보를 오래 찾지 않아도
                바로 계산하고 참고할 수 있도록 구성한 것이 핵심입니다.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h3 className="text-lg font-bold text-slate-800">정보와 실행을 함께 연결</h3>
              <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
                단순히 결과만 보여주는 것이 아니라 임신, 신생아, 이유식, 유아 단계별
                정보 페이지와 준비 체크리스트, 육아용품 목록까지 함께 연결해 실제
                육아 흐름에 맞게 활용할 수 있도록 만들었습니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="육아 계산기"
            title="가장 먼저 찾게 되는 계산기"
            description="검색해서 다시 들어오지 않아도 되도록, 대표 기능을 홈에서 바로 시작할 수 있게 정리했습니다."
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {calculators.map((item) => (
              <Link key={item.href} href={item.href}>
                <article className="mt-card h-full p-6 transition hover:-translate-y-1">
                  <span className="mt-badge">{item.badge}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
                  <div className="mt-6 text-sm font-semibold text-amber-600">바로 이동 →</div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="mt-card-soft p-8">
            <SectionHeader
              eyebrow="육아 정보"
              title="단계별로 읽는 정보 페이지"
              description="임신부터 유아기까지 흐름에 맞춰 필요한 내용을 짧고 실용적으로 정리했습니다."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {infoCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-list-card transition hover:-translate-y-0.5"
                >
                  <div className="font-semibold text-slate-800">{item.title}</div>
                  <div className="mt-2 text-sm text-slate-500">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-card-soft p-8">
            <SectionHeader
              eyebrow="체크리스트"
              title="준비는 체크리스트로 끝내세요"
              description="시기별로 필요한 준비물을 따로 정리하지 않아도 되도록 단계별 체크리스트를 구성했습니다."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {checklistCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-list-card transition hover:-translate-y-0.5"
                >
                  <div className="font-semibold text-slate-800">{item.title}</div>
                  <div className="mt-2 text-sm text-slate-500">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AdBlock placement="homeMiddle" label="홈 중단 광고 영역" format="rectangle" />

        <section className="mt-card p-8 md:p-10">
          <SectionHeader
            eyebrow="육아 정보 콘텐츠"
            title="이런 내용을 빠르게 확인할 수 있어요"
            description="애드센스 승인과 검색 유입을 함께 고려해, 실제로 자주 찾는 육아 주제를 자연스럽게 연결할 수 있도록 구성했습니다."
          />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {quickTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-slate-100 bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="mt-card p-8">
            <SectionHeader
              eyebrow="콘텐츠 & 육아용품"
              title="정보 탐색과 실행을 자연스럽게 연결"
              description="글과 영상으로 더 자세히 보고, 필요한 육아용품 목록까지 이어서 확인할 수 있게 구성했습니다."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contentCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-amber-100 bg-amber-50 p-5 transition hover:bg-white"
                >
                  <div className="font-semibold text-slate-800">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-500">{item.description}</div>
                </Link>
              ))}
            </div>
          </article>

          <article className="mt-card p-8">
            <SectionHeader
              eyebrow="이용 전 확인"
              title="신뢰를 높이는 기본 안내"
              description="육아 사이트 운영에 필요한 FAQ, 문의, 개인정보처리방침, 이용약관 페이지를 한 번에 정리했습니다."
            />
            <div className="mt-6 space-y-3">
              {trustCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-list-card block transition hover:-translate-y-0.5"
                >
                  <div className="font-semibold text-slate-800">{item.title}</div>
                  <div className="mt-2 text-sm text-slate-500">{item.description}</div>
                </Link>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-card p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="mt-badge">MomTools 운영 기준</span>
              <h2 className="mt-title-lg mt-4">안내와 기준도 함께 제공하는 이유</h2>
              <p className="mt-text-main mt-4">
                MomTools는 단순히 계산기만 있는 사이트가 아니라, 실제 사용자 입장에서
                결과를 어떻게 이해해야 하는지, 문제가 생기면 어디로 문의해야 하는지,
                어떤 기준으로 운영되는지까지 함께 보여주는 구조를 목표로 하고 있습니다.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="mt-list-card">
                <div className="font-semibold text-slate-800">참고용 계산 결과 제공</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">
                  모든 계산 결과는 참고용 정보이며, 의료적 판단이나 진단을 대신하지 않습니다.
                </div>
              </div>
              <div className="mt-list-card">
                <div className="font-semibold text-slate-800">공식 기관 및 의료진 우선</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">
                  예방접종, 성장 판단, 건강 이상 여부 등은 반드시 보건소, 병원,
                  의료진 안내를 우선해 주세요.
                </div>
              </div>
              <div className="mt-list-card">
                <div className="font-semibold text-slate-800">외부 링크 및 제휴 안내 구분</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">
                  육아용품 페이지나 외부 링크가 포함되는 경우, 광고성 또는 제휴성 안내 문구를
                  명확히 표시하는 구조를 권장합니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdBlock placement="homeBottom" label="홈 하단 광고 영역" format="horizontal" />
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="mt-card-soft p-6">
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800 md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 md:text-base">
        {description}
      </p>
    </div>
  );
}