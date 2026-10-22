import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AWARDS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function AwardsSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          zh="创新创业竞赛获奖"
          en="Innovation & Entrepreneurship Awards"
          sub="将科研项目进行落地转化走向真实商业项目，在大量竞赛与实践中沉淀商业意识与用户视角。"
        />

        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {AWARDS.map((award, i) => {
            const national =
              award.prize.includes("国赛") || award.prize.includes("国际");
            return (
              <li
                key={`${award.competition}-${award.prize}`}
                data-reveal-delay={`${i * 80}`}
                className={cn(
                  "reveal group flex items-start gap-4 rounded-xl border border-hairline bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_16px_32px_-24px_oklch(0.4_0.07_190/0.4)]",
                  i === AWARDS.length - 1 && AWARDS.length % 2 === 1 && "md:col-span-2"
                )}
              >
                <Trophy
                  size={18}
                  className="mt-1 shrink-0 text-accent transition-colors group-hover:text-primary"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                        national
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-teal-deep"
                      )}
                    >
                      {award.prize}
                    </span>
                    <span className="rounded-full border border-hairline px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {award.role}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink-deep">
                    {award.competition}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{award.project}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
