import { useState } from "react";
import { ArrowUpRight, FileText, QrCode } from "lucide-react";
import { MetricsBand } from "@/components/MetricsBand";
import { QrModal } from "@/components/QrModal";
import { SectionHeading } from "@/components/SectionHeading";
import { PRODUCTS } from "@/data/portfolio";
import type { Product } from "@/types";

const EXTERNAL_REL = "noopener noreferrer";

function ProductCard({
  product,
  index,
  onQr,
}: {
  product: Product;
  index: number;
  onQr: () => void;
}) {
  return (
    <article
      data-reveal-delay={`${(index % 4) * 90}`}
      className="reveal group relative flex flex-col rounded-xl border border-hairline bg-card p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_40px_-26px_oklch(0.4_0.07_190/0.45)]"
    >
      <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-tile-from to-tile-to">
        <img
          src={product.icon}
          alt={`${product.name} 产品图标`}
          loading="lazy"
          className="h-[86%] w-[86%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-ink-deep">{product.name}</h3>
      <p className="mt-0.5 text-[11px] font-medium leading-4 text-primary">{product.en}</p>
      <p className="mt-2.5 flex-1 text-xs leading-5 text-muted-foreground">{product.desc}</p>

      {(product.impactFactor || product.citations !== undefined) && (
        <p className="mt-2.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          {product.impactFactor && (
            <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
              IF
              <span className="ml-1 font-display text-sm font-semibold text-primary">
                {product.impactFactor}
              </span>
            </span>
          )}
          {product.citations !== undefined && (
            <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
              Cited
              <span className="ml-1 font-display text-sm font-semibold text-primary">
                {product.citations.toLocaleString("en-US")}
              </span>
            </span>
          )}
        </p>
      )}

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {product.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-secondary/70 px-2 py-0.5 text-[10px] font-medium text-teal-deep"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="pointer-events-none relative z-10 mt-4 flex items-center justify-between border-t border-hairline pt-3">
        {product.isQr ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-teal-deep">
            <QrCode size={13} /> 微信小程序 · 扫码体验
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-xs font-medium text-teal-deep transition-colors group-hover:text-primary">
            {product.hrefLabel}
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        )}
        {product.paper && (
          <a
            href={product.paper}
            target="_blank"
            rel={EXTERNAL_REL}
            className="pointer-events-auto flex items-center gap-1 rounded px-1 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <FileText size={12} /> Paper ↗
          </a>
        )}
      </div>

      {product.isQr ? (
        <button
          type="button"
          aria-label={`打开 ${product.name} 微信小程序二维码`}
          onClick={onQr}
          className="absolute inset-0 rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
        />
      ) : (
        <a
          href={product.href}
          target="_blank"
          rel={EXTERNAL_REL}
          aria-label={`打开 ${product.name} 网站`}
          className="absolute inset-0 rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
        />
      )}
    </article>
  );
}

export function ProductSection() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <section id="products" className="scroll-mt-20 border-t border-hairline bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          zh="AI4S 产品与研究成果"
          en="AI4S Product Portfolio"
          sub="以生物医学与科研场景为核心，探索人工智能在知识图谱、科研绘图、数据组织和药物发现等领域的实际应用"
        />

        <MetricsBand />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onQr={() => setQrOpen(true)}
            />
          ))}
        </div>
      </div>

      <QrModal open={qrOpen} onOpenChange={setQrOpen} />
    </section>
  );
}
