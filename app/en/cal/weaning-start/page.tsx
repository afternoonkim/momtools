import type { Metadata } from "next";
import Link from "next/link";
import WeaningStartCalculatorClient from "./WeaningStartCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/weaning-start");
const canonical = buildCanonical("/en/cal/weaning-start");

const points = [
  "Parents often search for the right solids start age because they want a practical window, not just a vague reminder that it happens sometime in the first year.",
  "Readiness matters as much as age. Sitting support, interest in food, and better head control are often more helpful than focusing on one exact birthday.",
  "A good starting-solids page should reduce pressure by showing that this stage is about gradual practice, not instantly replacing milk feeds.",
];

const faq = [
  {
    q: "What age do many U.S. parents start solids?",
    a: "Many families hear about starting around 6 months, but the timing also depends on readiness signs. A pediatrician may suggest watching both age and developmental readiness together.",
  },
  {
    q: "Is starting solids the same as weaning from breast milk or formula?",
    a: "No. Early solids are usually a gradual learning stage. Breast milk or formula remains the main source of nutrition for much of the first year, while solids begin as practice and exposure.",
  },
  {
    q: "What should I do if my baby is not interested right away?",
    a: "That is common. Interest can build slowly. Focus on a calm routine, safe positioning, and repeated low-pressure exposure instead of expecting immediate full meals.",
  },
  {
    q: "When should I ask my pediatrician before starting solids?",
    a: "Ask sooner if your baby was born early, has growth concerns, reflux, swallowing concerns, eczema linked to allergy discussions, or if you are unsure how to handle allergen introduction.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MomTools Starting Solids Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  url: canonical,
  description:
    "Check a practical solids-start window, review readiness signs, and plan first foods with parent-friendly guidance used by many U.S. families.",
};

export const metadata: Metadata = {
  title: "Starting Solids Calculator | Readiness signs and first foods timing | MomTools",
  description:
    "Check a practical solids-start window, review readiness signs, and plan first foods using parent-friendly guidance many U.S. families search for.",
  alternates: { canonical },
  openGraph: {
    title: "Starting Solids Calculator | MomTools",
    description:
      "Review a practical starting-solids window, readiness signs, and first-food planning tips for everyday family use.",
    url: canonical,
    siteName: "MomTools",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Starting Solids Calculator | MomTools",
    description:
      "Use a parent-friendly solids-start tool with readiness guidance and next-step planning.",
  },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Feeding transition tool</span>
          <h1 className="mt-title-xl mt-5">Find a starting-solids window that feels practical, not rushed</h1>
          <p className="mt-text-main mt-4">
            Starting solids is one of the biggest routine shifts in the first year, and many parents want more than a one-line answer.
            They want to know when to begin, what signs matter, whether milk feeds still stay central, and how to make the transition
            feel calm instead of confusing. This page is built around that real parent need. It helps you estimate a practical time
            window while also explaining how readiness signs fit into the decision.
          </p>
          <p className="mt-text-sub mt-4">
            In everyday U.S. parenting conversations, families often hear guidance connected to around 6 months plus readiness cues.
            This page keeps that idea simple and usable at home, while still reminding you that your pediatrician&apos;s advice matters most
            if feeding history or medical concerns make the decision less straightforward.
          </p>
        </section>

        <WeaningStartCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="This page is reviewed so parents can quickly see when the solids-start guidance was first added and when the practical feeding notes were most recently checked."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">What most parents are really asking</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {points.map((item) => (
              <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">How age and readiness work together</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                Many parents are told that solids often begin around 6 months, but a date alone is not the full picture. Readiness signs
                help answer the more practical question: is my baby physically ready to practice eating? Sitting with support, steadier
                head control, and interest in food are all reasons families start paying closer attention. When those signs line up with
                age, the transition usually feels much smoother.
              </p>
              <p>
                What parents often need most is reassurance that solids do not have to start with full meals or perfect eating. Early
                solids are usually about exploration, practice, and routine building. Milk feeds remain central while your baby learns
                texture, spoon routines, and family mealtime rhythm. That perspective reduces pressure and makes the process easier to
                follow.
              </p>
            </div>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">When to slow down and get personalized advice</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                Some families need more than a general timeline. Babies born early, babies with reflux or swallowing concerns, babies
                with growth questions, and families thinking carefully about allergen introduction may need a more individualized plan.
                In those cases, a calculator is still useful for general orientation, but it should not replace a feeding plan from your
                pediatrician or feeding specialist.
              </p>
              <p>
                If your baby gags a lot, refuses all attempts, seems uncomfortable during feeds, or you are not sure how to move from
                purees to more textured foods, the best next step is a conversation with a clinician who knows your baby&apos;s history.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">References parents commonly hear in feeding guidance</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              This page uses the kind of parent-friendly language families often encounter when reading AAP-informed feeding advice or
              talking with pediatric clinics about the shift from milk-only feeding to first foods. The goal is not to create a strict
              feeding rule. It is to make the transition easier to understand at home.
            </p>
            <p>
              Every baby starts differently. If you are unsure about readiness, food allergy planning, or how solids fit with bottle or
              breastfeeding routines, use this page as a reference and bring your specific questions to your pediatrician.
            </p>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Keep feeding plans connected</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/en/info/weaning" className="mt-list-card">
              <div className="font-semibold text-slate-800">Related guide: Weaning</div>
              <div className="mt-2 text-sm text-slate-500">Read through practical solids routines, textures, and transition tips.</div>
            </Link>
            <Link href="/en/qna/health" className="mt-list-card">
              <div className="font-semibold text-slate-800">Parenting Q&amp;A: Health</div>
              <div className="mt-2 text-sm text-slate-500">See common questions about feeding readiness, reactions, and routines.</div>
            </Link>
            <Link href="/en/baby-food" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended guide: Baby food</div>
              <div className="mt-2 text-sm text-slate-500">Browse stage-based food ideas and practical first-food planning.</div>
            </Link>
            <Link href="/en/checklists/weaning" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended checklist: Starting solids</div>
              <div className="mt-2 text-sm text-slate-500">Turn the timing result into a calmer, more organized solids setup.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
