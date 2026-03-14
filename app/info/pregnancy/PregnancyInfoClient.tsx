"use client";

import Link from "next/link";

const trimesterSections = [
  {
    title: "임신 초기",
    weeks: "1주~13주",
    color: "rose",
    summary:
      "임신 확인, 첫 진료, 엽산 복용, 기본 생활 습관 점검이 중요한 시기예요.",
    items: [
      "임신 테스트 후 산부인과 첫 진료 일정 잡기",
      "엽산 복용과 복용 중인 약 확인하기",
      "출혈, 심한 복통, 어지럼증 같은 이상 증상 체크하기",
      "카페인, 음주, 흡연 등 생활 습관 다시 점검하기",
      "입덧이 심하면 식사량보다 수분 섭취와 컨디션 관리 우선하기",
    ],
  },
  {
    title: "임신 중기",
    weeks: "14주~27주",
    color: "amber",
    summary:
      "몸이 조금 안정되면서 검사 일정, 체중 관리, 출산 준비를 차근차근 시작하기 좋은 시기예요.",
    items: [
      "정밀 초음파 및 주요 검사 일정 확인하기",
      "체중 증가 흐름과 식사 균형 관리하기",
      "태동이 느껴지기 시작하면 간단히 기록해보기",
      "출산 병원, 조리 계획, 육아용품 리스트 천천히 정리하기",
      "허리 통증, 부종, 소화 불편 등 생활 변화에 맞춰 루틴 조정하기",
    ],
  },
  {
    title: "임신 후기",
    weeks: "28주~출산 전",
    color: "sky",
    summary:
      "분만 준비와 생활 동선 정리, 병원 안내 재확인이 중요해지는 시기예요.",
    items: [
      "입원 가방과 산모·아기 준비물 점검하기",
      "분만 예정 병원 안내와 보호자 동선 다시 확인하기",
      "태동 변화, 진통 양상, 몸의 변화 기록해두기",
      "출산 직후 행정 처리나 필요한 서류 미리 정리하기",
      "무리한 일정은 줄이고 휴식과 수면 리듬 챙기기",
    ],
  },
];

const faqItems = [
  {
    question: "임신 초기에는 가장 먼저 무엇을 챙기면 좋나요?",
    answer:
      "임신 확인 후에는 산부인과 첫 진료 일정을 잡고, 엽산 복용, 복용 중인 약, 생활 습관을 먼저 점검하는 것이 좋아요. 이상 증상이 있으면 일정과 별개로 병원 상담이 우선입니다.",
  },
  {
    question: "임신 중기에는 무엇을 준비해두면 좋을까요?",
    answer:
      "정밀 초음파 등 주요 검사 일정 확인과 함께 출산 병원, 육아용품, 생활비 계획을 천천히 정리하면 좋아요. 몸이 비교적 안정적인 시기라 준비를 시작하기 좋은 편입니다.",
  },
  {
    question: "임신 후기에는 어떤 점을 가장 신경 써야 하나요?",
    answer:
      "태동 변화, 진통 양상, 분만 병원 안내, 입원 가방 준비 등을 다시 점검하는 것이 중요해요. 일정이 너무 많아지지 않도록 휴식과 컨디션 관리도 함께 챙기는 것이 좋습니다.",
  },
  {
    question: "임신 정보는 계산기와 어떻게 같이 활용하면 좋나요?",
    answer:
      "출산 예정일 계산기로 전체 일정을 보고, 이 페이지에서 시기별 체크포인트를 확인하면 준비 흐름을 잡기 쉬워져요. 이후 체크리스트나 예산 계획과 연결하면 더 체계적으로 정리할 수 있습니다.",
  },
];

export default function PregnancyInfoClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                MomTools 육아 정보
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                임신 정보
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                임신 초기, 중기, 후기에 꼭 확인하면 좋은 체크포인트와 생활 팁을
                한눈에 정리해보세요. 주차별로 무엇을 챙기면 좋을지, 어떤 준비를
                미리 해두면 편한지 흐름 중심으로 구성했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                일정이 궁금하다면{" "}
                <Link
                  href="/cal/due-date"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  출산 예정일 계산기
                </Link>
                를 먼저 확인하고, 이후 이 페이지에서 시기별 준비 흐름을 같이
                보면 더 정리하기 쉬워요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="핵심 흐름"
            value="초기 → 중기 → 후기"
            description="시기마다 챙길 포인트가 달라서 순서대로 보는 것이 좋아요."
            tone="rose"
          />
          <QuickCard
            title="우선 확인"
            value="진료 일정"
            description="검사 일정과 병원 안내는 항상 가장 먼저 체크하는 게 좋아요."
            tone="amber"
          />
          <QuickCard
            title="함께 준비"
            value="출산 + 생활 계획"
            description="몸 상태뿐 아니라 준비물과 생활 동선까지 같이 보면 편해요."
            tone="sky"
          />
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            AdSense 추천 위치 1
          </div>
          <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
            상단 요약 카드 아래 / 본문 시작 전 광고 영역
          </div>
        </div>

        <section className="space-y-6">
          {trimesterSections.map((section) => (
            <section
              key={section.title}
              className="mt-card-soft p-6 md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.color === "rose"
                        ? "bg-rose-100 text-rose-700"
                        : section.color === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-sky-100 text-sky-700",
                    ].join(" ")}
                  >
                    {section.weeks}
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                    {section.summary}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-100 bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              임신 중 같이 정리하면 좋은 것
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="진료와 검사 일정"
                description="병원 예약, 검사 시기, 진료 후 안내사항은 따로 기록해두면 훨씬 편해요."
              />
              <GuideCard
                title="생활 습관 점검"
                description="수면, 식사, 수분 섭취, 무리한 일정 조절은 시기와 관계없이 꾸준히 중요해요."
              />
              <GuideCard
                title="출산 준비물"
                description="입원 가방, 신생아 준비물, 집 정리 등은 후기 전에 미리 목록을 잡아두면 좋아요."
              />
              <GuideCard
                title="가계와 일정 계획"
                description="출산 준비 비용, 육아 초기 지출, 보호자 일정도 함께 정리하면 실제로 훨씬 도움이 돼요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                안내 문구
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 임신 시기별 체크포인트를 정리한 참고용 정보예요.</li>
                <li>• 몸 상태나 증상에 대한 최종 판단은 병원 진료가 우선이에요.</li>
                <li>• 출혈, 심한 복통, 태동 변화 등 걱정되는 증상이 있으면 바로 의료진과 상담해 주세요.</li>
                <li>• 시기별 준비는 한 번에 몰아서 하기보다 천천히 나눠서 정리하는 것이 좋아요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/cal/due-date"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  출산 예정일 계산기
                </Link>
                <Link
                  href="/checklist/birth-prep"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  출산 준비 체크리스트
                </Link>
                <Link
                  href="/faq"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  자주 묻는 질문
                </Link>
              </div>
            </div>
          </aside>
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            AdSense 추천 위치 2
          </div>
          <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
            시기별 정보 섹션 아래 / FAQ 및 설명 콘텐츠 시작 전 광고 영역
          </div>
        </div>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  임신 정보는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    임신 정보 페이지는 임신 초기, 중기, 후기에 따라 무엇을
                    먼저 확인하면 좋을지 흐름 중심으로 정리한 가이드입니다.
                    단순히 증상만 보는 것이 아니라 진료 일정, 생활 습관,
                    출산 준비까지 함께 볼 수 있도록 구성했어요.
                  </p>
                  <p>
                    임신 기간에는 시기마다 챙겨야 하는 것이 달라집니다. 초기에는
                    임신 확인과 첫 진료, 중기에는 검사 일정과 생활 관리,
                    후기에는 분만 준비와 병원 동선 확인이 중요해지는 경우가
                    많아요.
                  </p>
                  <p>
                    이 페이지는 복잡한 정보를 한눈에 보기 쉽게 정리해두는 역할에
                    가깝고, 실제 증상이나 건강 판단은 반드시 병원 진료와 함께
                    확인하는 것이 좋습니다.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  자주 묻는 질문
                </h2>
                <div className="mt-4 space-y-4">
                  {faqItems.map((item) => (
                    <FaqItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                    임신 정보를 한눈에 정리해보세요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                    임신 기간에는 시기마다 챙겨야 하는 것이 달라져요. 이 페이지에서는 임신 초기,
                    중기, 후기에 따라 자주 확인하는 내용을 흐름대로 정리해두어, 필요한 정보를
                    더 쉽게 찾아볼 수 있도록 구성했습니다.
                </p>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                    준비는 천천히 나눠서 해도 괜찮아요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                    출산 준비는 한 번에 몰아서 하기보다 시기에 맞춰 조금씩 정리하는 것이 훨씬
                    수월해요. 병원 안내, 준비물, 생활 계획까지 순서대로 체크해두면 실제로 많은
                    도움이 됩니다.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuickCard({
  title,
  value,
  description,
  tone,
}: {
  title: string;
  value: string;
  description: string;
  tone: "rose" | "amber" | "sky";
}) {
  const toneClass =
    tone === "rose"
      ? "border-rose-100 bg-rose-50"
      : tone === "amber"
      ? "border-amber-100 bg-amber-50"
      : "border-sky-100 bg-sky-50";

  return (
    <div className={`rounded-3xl border p-5 ${toneClass}`}>
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">
        {value}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function GuideCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">{question}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{answer}</p>
    </div>
  );
}