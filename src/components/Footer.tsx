import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-hairline bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
        <p className="reveal font-display text-3xl font-semibold tracking-tight text-ink-deep">
          {CONTACT.name}
        </p>
        <p className="reveal eyebrow mt-3 text-[11px] font-semibold text-primary">
          {CONTACT.tagline}
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="story-link flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Mail size={15} /> {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="story-link flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone size={15} /> {CONTACT.phone}
          </a>
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            <MessageCircle size={15} className="text-primary" /> 微信：{CONTACT.wechat}
          </span>
        </div>

        <p className="reveal mt-12 font-display text-sm italic text-muted-foreground">
          {CONTACT.motto}
        </p>
        <p className="mt-3 text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} 巫景行 · Bio × AI Portfolio
        </p>
      </div>
    </footer>
  );
}
