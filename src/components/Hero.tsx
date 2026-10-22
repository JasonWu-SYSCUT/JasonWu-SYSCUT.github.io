const HERO_ART =
  "images/hero-dna-ai-white.png";

const HERO_TAGS = [
  "AI for Science",
  "Biomedical Data",
  "Machine Learning",
  "Agentic Workflows",
  "Harness Engineering",
  "Research Translation",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_78%_30%,oklch(0.94_0.03_190/0.55),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-28 md:px-8 lg:grid-cols-[52%_48%] lg:gap-6 lg:pb-24 lg:pt-36">
        <div>
          <p className="eyebrow text-[11px] font-semibold text-primary">
            Biology × Artificial Intelligence
          </p>
          <p className="eyebrow mt-3 text-[10px] font-medium text-muted-foreground">
            AI for Science · Molecular Modeling · Agent Systems
          </p>

          <h1 className="mt-8 font-display text-5xl font-semibold leading-tight tracking-tight text-ink-deep md:text-6xl">
            巫景行
          </h1>
          <p className="mt-4 font-display text-2xl font-medium text-foreground md:text-3xl">
            生物医药 × 人工智能
          </p>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            从科学问题定义到模型与系统落地
          </p>

          <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted-foreground">
            具备生物制药本科与生物信息学博士专业背景训练，兼具分子与药物数据理解、机器学习建模及 Agent 系统工程经验。关注从科学问题抽象、数据治理与分子表征，到模型评测和科研工作流与智能体系统落地。
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {HERO_TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-accent/60 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-teal-deep transition-colors hover:border-primary hover:text-primary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute inset-y-6 right-0 w-[44%] max-w-[230px] lg:static lg:w-auto lg:max-w-none">
          <img
            src={HERO_ART}
            alt="DNA 双螺旋逐渐转化为代码与神经网络节点的 Bio × AI 主视觉插图"
            className="animate-float-slow h-full w-full select-none object-cover object-[72%_50%] opacity-45 mix-blend-multiply [mask-image:linear-gradient(to_left,#000_38%,transparent_94%)] lg:h-auto lg:object-contain lg:object-center lg:opacity-100 lg:[mask-image:radial-gradient(120%_100%_at_70%_45%,#000_55%,transparent_92%)]"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
