import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import { DirectionModal } from "@/components/DirectionModal";
import { SectionHeading } from "@/components/SectionHeading";
import { DIRECTIONS } from "@/data/portfolio";
import type { Direction } from "@/types";

export function DirectionSection() {
  const [selected, setSelected] = useState<Direction | null>(null);

  return (
    <section id="expertise" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          zh="代表性项目 / 技术栈"
          en="Projects & Expertise"
          sub="围绕 Agent 系统工程、科研智能工作流与 AI 驱动药物研发，开展算法研究、系统构建与实际应用。"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[...DIRECTIONS]
            .sort((a, b) => a.index.localeCompare(b.index))
            .map((direction, i) => (
            <button
              key={direction.id}
              type="button"
              onClick={() => setSelected(direction)}
              data-reveal-delay={`${i * 120}`}
              className="reveal group relative flex flex-col rounded-xl border border-hairline bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_22px_44px_-28px_oklch(0.4_0.07_190/0.45)] focus-visible:outline-2 focus-visible:outline-primary"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl font-semibold text-accent transition-colors group-hover:text-primary">
                  {direction.index}
                </span>
                <MoveUpRight
                  size={18}
                  className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink-deep">
                {direction.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-primary">{direction.subtitle}</p>
              <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{direction.intro}</p>

              <div className="mt-5 overflow-hidden rounded-lg border border-hairline bg-secondary/40">
                <img
                  src={direction.image}
                  alt={`${direction.title} 方向插图`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {direction.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary/70 px-2.5 py-1 text-[11px] font-medium text-teal-deep"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>

      <DirectionModal
        direction={selected}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}
