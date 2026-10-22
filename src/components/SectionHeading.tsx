interface SectionHeadingProps {
  zh: string;
  en: string;
  sub: string;
}

export function SectionHeading({ zh, en, sub }: SectionHeadingProps) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="eyebrow text-[11px] font-semibold text-primary">{en}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-deep md:text-4xl">
        {zh}
      </h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{sub}</p>
      <div className="mx-auto mt-6 h-px w-14 bg-accent" />
    </div>
  );
}
