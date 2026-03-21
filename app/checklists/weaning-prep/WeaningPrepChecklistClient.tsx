"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "앉는 환경과 기본 식사 도구",
    badge: "먼저 준비",
    tone: "orange",
    summary:
      "이유식은 음식만 준비하면 끝이 아니에요. 아기가 편하게 앉고, 부모도 안정적으로 먹일 수 있는 환경을 먼저 만드는 것이 중요해요.",
    items: [
      "아기 식탁의자",
      "턱받이와 이유식 스푼",
      "아기 전용 작은 그릇 또는 초기 이유식 용기",
      "먹는 자세를 안정적으로 잡아줄 방석이나 보조 도구 확인",
      "식사 후 바로 닦기 쉬운 자리와 동선 점검",
    ],
  },
  {
    title: "조리 도구",
    badge: "주방 분리",
    tone: "amber",
    summary:
      "이유식은 양보다 위생과 반복 사용 편의성이 더 중요해요. 복잡한 장비보다 자주 쓰는 기본 조리도구를 먼저 정리해두는 것이 좋아요.",
    items: [
      "작은 냄비와 도마 분리",
      "이유식용 칼 또는 기본 조리도구 분리",
      "재료를 곱게 으깨거나 갈 수 있는 도구 확인",
      "열탕 또는 세척이 쉬운 재질의 도구 준비",
      "조리 후 바로 식히고 담을 수 있는 기본 용기 준비",
    ],
  },
  {
    title: "보관과 소분",
    badge: "반복 준비",
    tone: "sky",
    summary:
      "이유식을 매번 처음부터 다시 만들기보다, 소분과 보관 흐름을 미리 정리해두면 훨씬 수월해요.",
    items: [
      "이유식 큐브 트레이",
      "식판 또는 보관 용기",
      "냉장·냉동 보관용 기본 용기 구분",
      "날짜 적을 스티커나 간단한 라벨 준비",
      "보관 위치와 회전 순서 미리 정해두기",
    ],
  },
  {
    title: "재료와 알레르기 체크",
    badge: "반응 확인",
    tone: "emerald",
    summary:
      "초기 이유식은 재료 가짓수를 많이 늘리기보다 한 가지씩 천천히 반응을 보는 것이 중요해요.",
    items: [
      "초기 시작용 기본 재료 정리",
      "알레르기 체크 메모",
      "새 재료 시작 날짜 기록할 간단한 노트 또는 메모앱 정하기",
      "반응이 있었던 재료 따로 표시할 방법 정해두기",
      "식재료 구매 빈도와 보관 주기 미리 생각해두기",
    ],
  },
  {
    title: "식사 후 정리와 세척",
    badge: "작지만 중요",
    tone: "violet",
    summary:
      "이유식은 먹이는 시간보다 치우는 시간이 더 길게 느껴질 수도 있어요. 세척과 정리 흐름을 미리 단순화해두면 부담이 줄어요.",
    items: [
      "식사 후 바로 닦을 수건이나 행주 따로 준비",
      "세척용 솔과 건조 공간 확인",
      "식탁의자 주변 바닥 정리 방식 생각해두기",
      "턱받이와 스푼 세척 루틴 단순하게 만들기",
      "먹인 뒤 기록하거나 사진 남길 간단한 루틴 정하기",
    ],
  },
];

const faqItems = [
  {
    question: "이유식 준비물은 시작 전에 전부 사야 하나요?",
    answer:
      "처음부터 모든 준비물을 다 갖출 필요는 없어요. 앉는 환경, 스푼, 기본 용기, 조리도구처럼 자주 쓰는 기본 항목부터 준비하고, 실제로 진행하면서 필요한 것을 보완하는 편이 더 실용적일 수 있어요.",
  },
  {
    question: "비싼 이유식 장비가 꼭 필요한가요?",
    answer:
      "반드시 그렇지는 않아요. 처음에는 작은 냄비, 도마 분리, 기본 보관 용기처럼 자주 쓰는 도구가 더 중요할 수 있어요. 사용 빈도가 높은지 먼저 생각해보는 것이 좋아요.",
  },
  {
    question: "알레르기 체크는 어떻게 준비하면 좋나요?",
    answer:
      "새 재료를 시작한 날짜와 반응 여부를 간단히 적어두는 것만으로도 큰 도움이 돼요. 처음부터 복잡하게 기록하기보다, 재료명과 날짜, 특별한 반응 유무 정도만 정리해도 충분히 유용합니다.",
  },
  {
    question: "이유식 준비에서 가장 먼저 챙길 것은 무엇인가요?",
    answer:
      "아기가 앉을 수 있는 환경, 이유식 스푼, 기본 용기, 위생적인 조리도구처럼 바로 쓰게 되는 항목을 먼저 챙기는 것이 좋아요. 이후 보관과 기록 도구를 천천히 보완하면 됩니다.",
  },
];

const pageStorageKey = "app-checklists-weaning-prep-WeaningPrepChecklistClient";

export default function WeaningPrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                MomTools 체크리스트
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                이유식 준비 체크리스트
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                식사 의자, 스푼, 조리도구, 보관 용기, 알레르기 체크까지 이유식
                시작 전에 필요한 준비를 한눈에 정리해보세요. 이유식은 장비보다
                실제로 자주 쓰는 준비물이 더 중요해서, 생활 흐름 중심으로 보기
                쉽게 구성했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                이유식 시기를 먼저 확인하고 싶다면{" "}
                <Link
                  href="/tools/weaning-start"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  이유식 시작 계산기
                </Link>
                를 보고, 이후 이 체크리스트에서 준비 흐름을 정리하면 훨씬 편해요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 먼저"
            value="앉는 환경과 기본 식기"
            description="이유식은 조리도구보다 먼저 식사 자세와 기본 도구를 준비하는 것이 좋아요."
            tone="orange"
          />
          <QuickCard
            title="준비 기준"
            value="많이보다 반복 사용"
            description="처음부터 복잡한 장비를 갖추기보다 자주 쓰는 기본 도구부터 준비하는 편이 실용적이에요."
            tone="amber"
          />
          <QuickCard
            title="함께 점검"
            value="보관과 알레르기 기록"
            description="이유식은 먹이는 것만큼 소분, 보관, 반응 체크 흐름을 미리 잡아두는 것이 중요해요."
            tone="sky"
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
                      section.tone === "orange"
                        ? "bg-orange-100 text-orange-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "sky"
                        ? "bg-sky-100 text-sky-700"
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
              이유식 준비할 때 같이 보면 좋은 것
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="주방 동선"
                description="씻기, 조리, 담기, 보관까지 한 번에 이어질 수 있도록 동선을 먼저 생각해두면 훨씬 편해요."
              />
              <GuideCard
                title="기록 습관"
                description="새 재료 시작 날짜와 반응 정도만 간단히 적어도 이후 이유식 진행이 훨씬 수월해져요."
              />
              <GuideCard
                title="보관 루틴"
                description="소분 용기, 큐브 트레이, 라벨을 미리 정리해두면 매번 다시 고민할 일이 줄어들어요."
              />
              <GuideCard
                title="식사 분위기"
                description="먹이는 시간과 치우는 시간을 너무 복잡하게 만들지 않도록 시작 전 환경을 단순하게 잡는 것이 좋아요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 이유식 시작 전 준비 흐름을 정리한 참고용 체크리스트예요.</li>
                <li>• 처음부터 모든 장비를 갖추기보다 자주 쓰는 기본 도구부터 준비하는 것이 좋아요.</li>
                <li>• 알레르기나 삼킴 문제처럼 걱정되는 부분은 의료진 안내를 함께 참고해 주세요.</li>
                <li>• 물건 수보다 식사 환경, 보관 흐름, 기록 습관이 실제로 더 중요할 수 있어요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/tools/weaning-start"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 시작 계산기
                </Link>
                <Link
                  href="/info/weaning"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 정보
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
                  이유식 준비 체크리스트는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    이유식 준비 체크리스트는 물건을 많이 사는 목록이라기보다,
                    무엇을 먼저 준비하면 좋을지 순서를 정리하는 데 더 도움이 돼요.
                    실제로는 아기가 앉을 환경, 기본 식기, 조리도구, 보관 용기,
                    알레르기 기록 흐름까지 함께 보는 것이 훨씬 실용적이에요.
                  </p>
                  <p>
                    특히 이유식은 먹이는 것만큼 준비와 정리가 반복되는 과정이기 때문에,
                    장비보다 생활 동선과 세척·보관 흐름을 먼저 정리해두는 편이
                    훨씬 수월할 수 있어요. 이 페이지도 그 흐름 중심으로 구성했습니다.
                  </p>
                  <p>
                    다만 아이 상태, 알레르기 가능성, 삼킴 반응에 따라 실제 진행 방식은
                    달라질 수 있으니 걱정되는 부분은 의료진 안내를 함께 참고하는 것이 좋습니다.
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
                  이유식 준비는 식기만 사는 것이 아니라 앉는 환경, 조리 도구,
                  보관 방식, 반응 기록까지 같이 정리하는 일이에요. 이 체크리스트는
                  그 흐름을 카테고리별로 나눠 필요한 내용을 빠르게 다시 확인할 수
                  있도록 만들었습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  복잡하게 말고 단순하게 시작해도 괜찮아요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  이유식 준비는 처음부터 완벽한 시스템을 만들기보다, 실제로 자주 쓰는
                  기본 도구부터 단순하게 준비해두는 편이 더 실용적일 수 있어요.
                  진행하면서 필요한 것을 보완해도 충분히 괜찮습니다.
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
  tone: "orange" | "amber" | "sky";
}) {
  const toneClass =
    tone === "orange"
      ? "border-orange-100 bg-orange-50"
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