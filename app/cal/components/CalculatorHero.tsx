type CalculatorHeroProps = {
  badge: string;
  title: string;
  description: string;
  tip: string;
};

export default function CalculatorHero({ badge, title, description, tip }: CalculatorHeroProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-slate-100 shadow-sm md:p-7">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="bd-badge">{badge}</span>
          <h1 className="mt-3 text-xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-[13px] leading-6 text-slate-300 md:text-base">
            {description}
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2.5 text-[13px] text-cyan-200 lg:max-w-md">
          {tip}
        </div>
      </div>
    </section>
  );
}
