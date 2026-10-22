import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Direction } from "@/types";

interface DirectionModalProps {
  direction: Direction | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="eyebrow text-[10px] font-semibold text-primary">{label}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function DirectionModal({ direction, open, onOpenChange }: DirectionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="animate-modal-in flex max-h-[88vh] w-[calc(100vw-2rem)] flex-col gap-0 overflow-hidden rounded-xl border-hairline bg-card p-0 sm:max-w-2xl"
      >
        {direction && (
          <>
            <DialogHeader className="border-b border-hairline px-6 pb-5 pt-6 text-left sm:px-8">
              <p className="eyebrow text-[10px] font-semibold text-primary">
                Direction {direction.index}
              </p>
              <DialogTitle className="mt-2 font-display text-2xl font-semibold text-ink-deep">
                {direction.title}
              </DialogTitle>
              <p className="mt-1 text-sm text-muted-foreground">{direction.subtitle}</p>
            </DialogHeader>

            <div className="space-y-7 overflow-y-auto px-6 py-6 sm:px-8">
              <Block label="Overview｜方向概述">
                <p className="text-sm leading-7 text-foreground">{direction.modal.overview}</p>
              </Block>

              <Block label="Key Work｜主要工作">
                <ul className="space-y-2.5">
                  {direction.modal.keyWork.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block label="Technical Expertise｜核心技术">
                <div className="flex flex-wrap gap-2">
                  {direction.modal.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/60 bg-secondary/50 px-3 py-1 text-xs font-medium text-teal-deep"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Block>

              <Block label="Results & Experience｜成果与实践">
                <ul className="space-y-2.5">
                  {direction.modal.results.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
