import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        const probe = window.scrollY + window.innerHeight * 0.32;
        let current = NAV_ITEMS[0].id;
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.id);
          if (el && el.offsetTop <= probe) current = item.id;
        }
        setActive(current);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-hairline bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          onClick={() => go("home")}
          className="group flex items-baseline gap-2 text-left"
        >
          <span className="font-display text-lg font-semibold tracking-wide text-ink-deep">
            巫景行
          </span>
          <span className="eyebrow text-[10px] font-medium text-primary/80 transition-colors group-hover:text-primary">
            Bio × AI
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={cn(
                "relative py-1 text-sm transition-colors",
                active === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-primary transition-all duration-300",
                  active === item.id ? "w-5" : "w-0"
                )}
              />
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label="打开菜单"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  "border-b border-hairline/60 py-3 text-left text-sm last:border-b-0",
                  active === item.id ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
