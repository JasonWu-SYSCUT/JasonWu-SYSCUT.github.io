import { METRICS } from "@/data/portfolio";

/** 成果指标条：嵌入 AI4S 产品章节标题与卡片之间，紧凑呈现 */
export function MetricsBand() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
      {METRICS.map((metric) => (
        <div key={metric.label} className="bg-card px-5 py-4 text-center">
          <p className="font-display text-[1.75rem] font-semibold leading-none tracking-tight text-primary">
            {metric.value}
          </p>
          <p className="eyebrow mt-2 text-[10px] font-semibold text-ink-deep">{metric.label}</p>
          <p className="mx-auto mt-1.5 max-w-[240px] text-[11px] leading-4 text-muted-foreground">
            {metric.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
