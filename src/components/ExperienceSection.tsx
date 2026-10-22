import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { EDUCATION, EXPERIENCE } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          zh="工作与教育经历"
          en="Experience & Education"
          sub="从工程研发到学术训练的实践路径。"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="reveal-left">
            <h3 className="eyebrow text-[11px] font-semibold text-teal-deep">Experience</h3>
            <ol className="mt-6 space-y-8 border-l border-hairline pl-6">
              {EXPERIENCE.map((item) => (
                <li key={item.org} className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
                  <p className="eyebrow text-[10px] font-medium text-muted-foreground">
                    {item.period}
                  </p>
                  <h4 className="mt-1.5 font-display text-lg font-semibold text-ink-deep">
                    {item.org}
                  </h4>
                  <p className="mt-0.5 text-sm font-medium text-primary">{item.role}</p>
                  <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal-right">
            <h3 className="eyebrow text-[11px] font-semibold text-teal-deep">Education</h3>
            <ul className="mt-6 space-y-5">
              {EDUCATION.map((item) => (
                <li
                  key={item.school}
                  className="flex items-start gap-4 rounded-xl border border-hairline bg-card p-5 transition-colors hover:border-accent"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-secondary/50 text-primary">
                    <GraduationCap size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-ink-deep">
                      {item.school}
                    </h4>
                    <p className="mt-0.5 text-sm text-foreground">{item.degree}</p>
                    <p className="eyebrow mt-1.5 text-[10px] font-medium text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
