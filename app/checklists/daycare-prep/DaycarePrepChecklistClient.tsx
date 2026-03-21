"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "등원 기본 준비물",
    badge: "가장 먼저",
    tone: "sky",
    summary:
      "어린이집은 매일 반복해서 가져가거나 두고 쓰는 물건이 많아서, 기본 준비물을 먼저 구분해두는 것이 좋아요.",
    items: [
      "여벌옷과 속옷",
      "양말과 계절에 맞는 여벌 옷 한 벌 더",
      "개인 물통과 칫솔",
      "기저귀 또는 배변 관련 개인 준비물 확인",
      "가방 안에 매일 확인할 기본 소지품 정리",
    ],
  },
  {
    title: "낮잠과 생활용품",
    badge: "원마다 다름",
    tone: "amber",
    summary:
      "어린이집마다 준비 방식이 다를 수 있어서, 지정 침구나 개인 생활용품 기준을 먼저 확인하는 것이 중요해요.",
    items: [
      "낮잠 이불 또는 지정 침구",
      "수건이나 개인 손수건 필요 여부 확인",
      "개인 위생용품 보관 파우치",
      "실내화 또는 별도 신발이 필요한지 확인",
      "주기적으로 교체하거나 세탁해 보내야 하는 물품 정리",
    ],
  },
  {
    title: "이름 표시와 분실 방지",
    badge: "작지만 중요",
    tone: "rose",
    summary:
      "작은 물건은 생각보다 자주 헷갈릴 수 있어서, 이름 표시를 미리 해두면 훨씬 편해요.",
    items: [
      "이름 스티커와 네임펜",
      "옷, 물통, 침구, 파우치에 이름 표시",
      "떼어지기 쉬운 스티커는 여분 준비",
      "형제자매가 있으면 헷갈리지 않게 구분 표시",
      "세탁 후에도 표시가 남는 방식인지 확인",
    ],
  },
  {
    title: "연락과 귀가 준비",
    badge: "반드시 확인",
    tone: "emerald",
    summary:
      "첫 등원 전에는 물건 준비만큼 비상연락과 귀가 관련 정보를 정확히 정리해두는 것이 중요해요.",
    items: [
      "비상연락처와 귀가자 정보",
      "알림장 앱 또는 가방 확인",
      "부모 외 귀가 가능 인원 정보 확인",
      "아이 건강 상태 전달 방식 정리",
      "등·하원 시간과 연락 가능한 번호 다시 확인",
    ],
  },
  {
    title: "적응 기간 준비",
    badge: "첫 주 중요",
    tone: "violet",
    summary:
      "처음 어린이집에 가는 시기에는 준비물만 챙기는 것보다 아이가 적응할 수 있는 루틴을 같이 만드는 것이 중요해요.",
    items: [
      "등원 전 아침 루틴 단순하게 정리",
      "하원 후 바로 쉴 수 있는 시간과 동선 준비",
      "첫 주에는 너무 많은 일정 넣지 않기",
      "아이에게 어린이집 흐름을 짧게 반복해서 이야기해주기",
      "적응 기간에는 집에서도 지나치게 큰 변화 주지 않기",
    ],
  },
];

const faqItems = [
  {
    question: "어린이집 준비물은 언제부터 챙기면 좋나요?",
    answer:
      "첫 등원 직전에 한 번에 준비하려 하기보다, 원에서 안내받은 뒤 큰 항목부터 먼저 정리해두는 것이 좋아요. 특히 이름 표시, 여벌옷, 낮잠 침구 같은 기본 준비물은 미리 챙겨두면 훨씬 편합니다.",
  },
  {
    question: "어린이집마다 준비물이 많이 다른가요?",
    answer:
      "네. 낮잠 침구, 실내화, 개인 위생용품, 기저귀 준비 여부처럼 원마다 차이가 있을 수 있어요. 그래서 공통 준비물과 원별 지정 준비물을 따로 나눠서 정리하는 것이 좋아요.",
  },
  {
    question: "첫 등원 준비에서 가장 먼저 챙길 것은 무엇인가요?",
    answer:
      "여벌옷, 이름 표시, 비상연락처, 귀가자 정보처럼 실제 운영에 바로 필요한 항목을 먼저 챙기는 것이 좋아요. 이후 낮잠 침구와 생활용품을 정리하면 흐름이 훨씬 수월해집니다.",
  },
  {
    question: "어린이집 적응은 얼마나 걸릴 수 있나요?",
    answer:
      "아이마다 속도가 달라요. 며칠 만에 적응하는 아이도 있고 조금 더 시간이 필요한 경우도 있어요. 울거나 거부 반응이 있다고 바로 실패로 보기보다 반복적인 루틴 안에서 천천히 적응하는 과정으로 보는 것이 좋습니다.",
  },
];

const pageStorageKey = "app-checklists-daycare-prep-DaycarePrepChecklistClient";

export default function DaycarePrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                MomTools 체크리스트
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                어린이집 준비 체크리스트
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                여벌옷, 낮잠 이불, 이름 스티커, 비상연락처, 등원 루틴까지 첫 등원 전에
                필요한 준비를 한눈에 정리해보세요. 물건만 챙기는 것이 아니라 적응 기간까지
                같이 생각할 수 있도록 흐름 중심으로 구성했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                어린이집 적응 흐름을 같이 보고 싶다면{" "}
                <Link
                  href="/info/toddler"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  유아 정보
                </Link>
                와{" "}
                <Link
                  href="/tools/baby-age"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  아기 개월수 계산기
                </Link>
                도 함께 보면 좋아요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 먼저"
            value="여벌옷 · 이름 표시 · 연락처"
            description="첫 등원 전에 실제 운영에 바로 필요한 기본 항목부터 먼저 정리하는 것이 좋아요."
            tone="sky"
          />
          <QuickCard
            title="준비 기준"
            value="원별 안내 먼저 확인"
            description="공통 준비물도 중요하지만, 원마다 필요한 지정 물품이 다를 수 있어요."
            tone="amber"
          />
          <QuickCard
            title="함께 준비"
            value="적응 기간 루틴"
            description="물건 준비만큼 아침 등원과 하원 후 흐름을 미리 생각해두는 것이 중요해요."
            tone="emerald"
          />
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            AdSense 추천 위치 1
          </div>
          <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
            상단 요약 카드 아래 / 체크리스트 본문 시작 전 광고 영역
          </div>
        </div>

        <section className="space-y-6">
          {checklistSections.map((section) => (
            <section key={section.title} className="mt-card-soft p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.tone === "sky"
                        ? "bg-sky-100 text-sky-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "rose"
                        ? "bg-rose-100 text-rose-700"
                        : section.tone === "emerald"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-violet-100 text-violet-700",
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

              <PersistentChecklist storageKey={`${pageStorageKey}-${section.title}`} items={section.items} accent={section.tone as "emerald" | "sky" | "amber" | "rose" | "violet" | "orange"} />
            </section>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              어린이집 준비할 때 같이 보면 좋은 것
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="아침 동선"
                description="등원 준비가 급하지 않도록 옷, 가방, 물품 위치를 전날 미리 정리해두면 훨씬 수월해요."
              />
              <GuideCard
                title="하원 후 루틴"
                description="하원 직후에는 아이가 피곤할 수 있어요. 바로 쉬거나 먹을 수 있는 흐름을 미리 생각해두면 좋아요."
              />
              <GuideCard
                title="가방 확인 습관"
                description="알림장, 갈아입은 옷, 개인 물품, 전달사항을 확인하는 간단한 루틴을 만들면 실수가 줄어요."
              />
              <GuideCard
                title="감정 준비"
                description="첫 적응 기간에는 아이뿐 아니라 부모도 마음이 흔들릴 수 있어요. 하루 단위보다 일주일 흐름으로 보는 것이 좋아요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 첫 등원 전 준비 흐름을 정리한 참고용 체크리스트예요.</li>
                <li>• 어린이집마다 준비물과 운영 방식이 다를 수 있으니 원 안내를 함께 확인해 주세요.</li>
                <li>• 물건만 챙기는 것보다 등원·하원 루틴과 연락 체계를 같이 준비하는 것이 중요해요.</li>
                <li>• 적응 기간에는 아이 반응이 달라질 수 있으니 너무 빠르게 판단하지 않는 것이 좋아요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/info/toddler"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  유아 정보
                </Link>
                <Link
                  href="/faq"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  자주 묻는 질문
                </Link>
                <Link
                  href="/tools/baby-age"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  아기 개월수 계산기
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
            체크리스트 본문 아래 / FAQ 및 설명 콘텐츠 시작 전 광고 영역
          </div>
        </div>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  어린이집 준비 체크리스트는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    어린이집 준비 체크리스트는 물건을 빠짐없이 챙기는 목록이기도 하지만,
                    실제로는 첫 등원과 적응 기간을 조금 더 안정적으로 보내기 위한 정리 도구에 가까워요.
                    여벌옷, 낮잠 침구, 이름 표시처럼 눈에 보이는 준비물과 함께 연락 체계, 하원 동선,
                    적응 기간 루틴도 같이 생각해두는 것이 훨씬 도움이 됩니다.
                  </p>
                  <p>
                    특히 첫 등원 시기에는 부모도 아이도 낯설 수 있어서, 준비물만 완벽하면 된다고 보기보다
                    아침 흐름과 하원 후 흐름까지 같이 정리해두는 편이 좋아요. 이 페이지도 그런 흐름 중심으로
                    구성했습니다.
                  </p>
                  <p>
                    다만 어린이집마다 필요한 준비물과 운영 방식이 다를 수 있으니, 최종 준비는 원 안내와 함께
                    다시 확인하는 것이 좋습니다.
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
                  이 체크리스트를 이렇게 활용해보세요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  어린이집 준비는 물건 목록만 보는 것보다 등원, 하원, 적응 기간까지 같이 정리하는 것이 중요해요.
                  이 체크리스트는 준비물을 카테고리별로 나누고, 실제 생활 흐름까지 함께 생각할 수 있도록
                  만들어서 필요한 내용을 빠르게 다시 확인하는 데 도움이 되도록 구성했습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  처음은 서툴러도 괜찮아요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  첫 등원과 적응 기간에는 예상보다 더 정신없게 느껴질 수 있어요.
                  그래서 한 번에 완벽하게 맞추려 하기보다, 준비물과 루틴을 조금씩 보완해가며
                  우리 아이와 우리 집에 맞는 흐름을 만들어가는 것이 더 중요합니다.
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
  tone: "sky" | "amber" | "emerald";
}) {
  const toneClass =
    tone === "sky"
      ? "border-sky-100 bg-sky-50"
      : tone === "amber"
      ? "border-amber-100 bg-amber-50"
      : "border-emerald-100 bg-emerald-50";

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