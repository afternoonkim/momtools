"use client";

import Link from "next/link";

const newbornSections = [
  {
    title: "수유",
    badge: "매일 자주 체크",
    tone: "rose",
    summary:
      "신생아 시기에는 정해진 양보다 아기 컨디션, 수유 후 반응, 소변 횟수를 함께 보는 것이 중요해요.",
    items: [
      "수유 간격만 보지 말고 먹는 모습과 컨디션을 함께 보기",
      "먹는 양이 갑자기 줄거나 수유를 계속 거부하면 상태 체크하기",
      "수유 후 트림, 역류, 토하는 양과 횟수 관찰하기",
      "수유 후 너무 축 처지거나 깨우기 어려우면 병원 상담 고려하기",
      "모유·분유 여부와 관계없이 탈수 징후가 없는지 같이 확인하기",
    ],
  },
  {
    title: "수면",
    badge: "환경 점검",
    tone: "amber",
    summary:
      "신생아는 수면 패턴이 일정하지 않아도 자연스러운 경우가 많아요. 안전한 수면 환경을 먼저 챙기는 것이 좋아요.",
    items: [
      "등을 대고 재우는 기본 원칙 지키기",
      "이불, 쿠션, 인형 등은 최소화해 수면 공간 단순하게 유지하기",
      "실내 온도와 옷 두께를 과하지 않게 조절하기",
      "낮밤 리듬은 바로 잡으려 하기보다 천천히 만들어가기",
      "너무 오래 깨우기 어렵거나 반응이 평소와 다르면 상태 확인하기",
    ],
  },
  {
    title: "황달과 체온",
    badge: "주의 깊게 보기",
    tone: "sky",
    summary:
      "신생아 황달과 체온 변화는 초보 부모가 특히 자주 걱정하는 부분이에요. 경과를 보되 심해지면 바로 상담하는 것이 중요해요.",
    items: [
      "얼굴, 가슴, 눈 흰자 쪽 노란 기운이 심해지는지 보기",
      "황달이 점점 아래로 내려오거나 더 진해 보이면 병원 문의하기",
      "체온이 너무 높거나 낮게 느껴지면 정확히 재보고 기록하기",
      "축 처짐, 수유량 저하, 보채거나 처지는 모습이 같이 있으면 더 주의하기",
      "조리원 퇴소 후에도 상태 변화가 있으면 병원 상담 미루지 않기",
    ],
  },
  {
    title: "배변과 소변",
    badge: "패턴 확인",
    tone: "emerald",
    summary:
      "색깔과 횟수는 수유 상태를 보는 중요한 단서가 될 수 있어요. 완벽한 기준을 외우기보다 평소와 달라졌는지 보는 것이 좋아요.",
    items: [
      "대변 색, 묽기, 냄새, 횟수의 변화를 같이 보기",
      "소변 횟수가 너무 줄거나 기저귀가 지나치게 마르면 상태 체크하기",
      "피가 섞인 것처럼 보이거나 색이 이상하면 병원 문의하기",
      "수유량 감소와 배변 변화가 같이 보이면 더 주의 깊게 보기",
      "며칠간 패턴이 확 달라졌다면 기록 후 상담에 활용하기",
    ],
  },
];

const faqItems = [
  {
    question: "신생아는 수유 간격이 꼭 일정해야 하나요?",
    answer:
      "항상 정확히 같은 간격일 필요는 없어요. 수유 간격뿐 아니라 아기 컨디션, 수유 후 반응, 소변 횟수 등을 함께 보는 것이 더 중요합니다.",
  },
  {
    question: "신생아 낮밤이 바뀐 것 같으면 바로 교정해야 하나요?",
    answer:
      "신생아 시기에는 낮밤 구분이 아직 뚜렷하지 않은 경우가 많아요. 무리하게 바로 교정하기보다 수유와 수면 환경을 안정적으로 유지하면서 천천히 리듬을 만들어가는 것이 좋아요.",
  },
  {
    question: "황달은 어느 정도부터 병원에 다시 물어보는 게 좋나요?",
    answer:
      "노란 기운이 더 심해 보이거나 아래쪽으로 퍼지는 느낌이 들고, 수유량 감소나 축 처짐이 함께 보이면 병원에 상담하는 것이 좋아요.",
  },
  {
    question: "신생아 정보는 계산기와 어떻게 같이 활용하면 좋나요?",
    answer:
      "아기 개월수 계산기나 예방접종 일정 계산기로 현재 시기를 확인하고, 이 페이지에서 수유·수면·배변 같은 실제 생활 체크포인트를 함께 보면 훨씬 정리하기 쉬워요.",
  },
];

export default function NewbornInfoClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                MomTools 육아 정보
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                신생아 정보
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                신생아 시기에 자주 확인하게 되는 수유, 수면, 황달, 체온, 배변
                체크포인트를 한눈에 정리해보세요. 초보 부모가 실제로 자주
                궁금해하는 흐름 중심으로 보기 쉽게 구성했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                현재 시기를 먼저 확인하고 싶다면{" "}
                <Link
                  href="/en/cal/baby-age"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  아기 개월수 계산기
                </Link>
                를 보고, 이후 이 페이지에서 생활 체크포인트를 함께 보면 더
                정리하기 쉬워요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 자주 보는 것"
            value="수유 · 수면 · 배변"
            description="신생아 시기에는 일상의 작은 변화도 크게 느껴져요. 자주 보는 항목부터 정리하면 좋아요."
            tone="emerald"
          />
          <QuickCard
            title="중요한 원칙"
            value="평소와 다른 변화 체크"
            description="절대 기준도 중요하지만, 평소와 달라졌는지를 보는 것이 실제로 더 도움이 돼요."
            tone="sky"
          />
          <QuickCard
            title="바로 상담 기준"
            value="축 처짐 · 수유 거부 · 이상 변화"
            description="걱정되는 변화가 반복되면 기록만 하지 말고 의료진과 상의하는 것이 좋아요."
            tone="amber"
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
          {newbornSections.map((section) => (
            <section key={section.title} className="mt-card-soft p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.tone === "rose"
                        ? "bg-rose-100 text-rose-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "sky"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-emerald-100 text-emerald-700",
                    ].join(" ")}
                  >
                    {section.badge}
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
              신생아 시기에는 이런 것도 같이 보면 좋아요
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="기록 습관"
                description="수유, 소변, 대변, 체온처럼 자주 보는 항목은 간단히 메모만 해도 훨씬 정리가 쉬워져요."
              />
              <GuideCard
                title="하루 리듬"
                description="완벽한 일정표보다 수유와 수면 패턴이 어떻게 흘러가는지 흐름을 보는 것이 더 중요해요."
              />
              <GuideCard
                title="가족 역할 분담"
                description="야간 수유, 병원 방문, 외출 준비 같은 실무를 미리 나누면 부담이 줄어들어요."
              />
              <GuideCard
                title="걱정 신호"
                description="평소보다 축 처지거나 먹는 양이 줄고 반응이 다르면 바로 상담해야 할 수 있어요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 신생아 시기에 자주 확인하는 항목을 정리한 참고용 정보예요.</li>
                <li>• 수유량, 황달, 체온, 배변 변화는 평소와의 차이를 함께 보는 것이 좋아요.</li>
                <li>• 고열, 축 처짐, 수유 거부, 호흡 변화 같은 증상이 있으면 바로 의료진과 상담해 주세요.</li>
                <li>• 걱정되는 경우 검색보다 병원 또는 의료진 안내가 우선입니다.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/en/cal/baby-age"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  아기 개월수 계산기
                </Link>
                <Link
                  href="/en/cal/vaccine-schedule"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  예방접종 일정 계산기
                </Link>
                <Link
                  href="/checklist/newborn-prep"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  신생아 준비 체크리스트
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
            핵심 정보 섹션 아래 / FAQ 및 설명 콘텐츠 시작 전 광고 영역
          </div>
        </div>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  신생아 정보는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    신생아 정보 페이지는 수유, 수면, 황달, 체온, 배변처럼 매일
                    반복해서 확인하게 되는 항목을 한눈에 정리해두는 가이드예요.
                    처음에는 모든 것이 낯설게 느껴질 수 있어서, 자주 보는 항목을
                    기준으로 흐름을 익히는 데 도움이 됩니다.
                  </p>
                  <p>
                    특히 신생아 시기에는 완벽한 정답을 외우기보다 평소와 다른
                    변화가 있는지를 보는 것이 실제로 더 중요해요. 그래서 이
                    페이지도 절대 기준만 나열하기보다, 어떤 변화에 주의하면 좋은지
                    함께 정리해두었습니다.
                  </p>
                  <p>
                    다만 고열, 수유 거부, 축 처짐, 호흡 변화처럼 걱정되는 증상이
                    있으면 정보 페이지보다 병원 상담이 우선입니다.
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
                  이 페이지를 이렇게 활용해보세요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  신생아 시기에는 하루에도 여러 번 같은 걱정을 하게 되는 경우가
                  많아요. 이 페이지는 수유, 수면, 황달, 배변처럼 자주 확인하는
                  항목을 흐름대로 정리해두어 필요한 내용을 빠르게 다시 보는 데
                  도움이 되도록 만들었습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  기록을 같이 해두면 더 편해요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  신생아 시기에는 수유량, 소변 횟수, 대변 상태, 체온 변화를
                  간단히라도 기록해두면 병원 상담이나 일상 관리에 큰 도움이 돼요.
                  완벽하게 적기보다 평소와 다른 변화가 있었는지만 정리해도 충분히
                  유용합니다.
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
  tone: "emerald" | "sky" | "amber";
}) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-100 bg-emerald-50"
      : tone === "sky"
      ? "border-sky-100 bg-sky-50"
      : "border-amber-100 bg-amber-50";

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