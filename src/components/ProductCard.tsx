import { Link } from "@tanstack/react-router";
import {
  MessageCircle,
  FileText,
  Flame,
  ArrowRight,
} from "lucide-react";
import { company, waLink } from "@/data/company";
import { useLang } from "@/lib/i18n";
import { useQuote } from "./QuoteProvider";
import type { CatalogProduct, Product, Spec } from "@/data/products";

export function SpecTable({ specs }: { specs: Spec[] }) {
  return (
    <table className="w-full text-left text-xs">
      <tbody>
        {specs.map((s) => (
          <tr
            key={s.label}
            className="border-b border-border last:border-0"
          >
            <th
              scope="row"
              className="w-2/5 py-1.5 pr-2 font-semibold text-muted-foreground"
            >
              {s.label}
            </th>

            <td className="py-1.5 font-medium">{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ProductActions({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const { t } = useLang();
  const { openQuote } = useQuote();

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {/* GET QUOTE */}
      <button
        onClick={() => openQuote(name)}
        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary-dark"
      >
        <FileText className="h-3.5 w-3.5" />
        {t("cta.quote")}
      </button>

      {/* WHATSAPP */}
      <a
        href={waLink(
          `Hi ${company.director}, I am interested in ${name}. Please share price and specifications.`,
        )}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md accent-gradient px-3 py-2 text-xs font-bold text-accent-foreground"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        {t("cta.whatsapp")}
      </a>
    </div>
  );
}

export function HotProductCard({ product }: { product: Product }) {
  const { t } = useLang();

  return (
    <article className="card-surface flex h-full flex-col overflow-hidden transition hover:shadow-lift">
      {/* PRODUCT IMAGE */}
      <div className="relative">
        <div className="group flex h-56 w-full cursor-pointer items-center justify-center overflow-hidden bg-white">
          <img
            src={product.image}
            alt={`${product.title} manufactured by ${company.name}, Ghaziabad`}
            loading="lazy"
            width={500}
            height={500}
            className="block h-full w-full object-fill transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full accent-gradient px-2.5 py-1 text-[10px] font-bold uppercase text-accent-foreground">
          <Flame className="h-3 w-3" />
          {t("label.hotProduct")}
        </span>
      </div>

      {/* PRODUCT CONTENT */}
      <div className="flex flex-1 flex-col p-4">
        {/* TITLE */}
        <h3 className="font-display text-base font-bold">
          {product.title}
        </h3>

        {/* SUMMARY */}
        <p className="mt-1.5 line-clamp-3 text-sm text-muted-foreground">
          {product.summary}
        </p>

        {/* ACTIONS */}
        <div className="mt-auto pt-4">
          <ProductActions name={product.title} />

          <Link
            to="/hot-products/$slug"
            params={{
              slug: product.slug,
            }}
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent"
          >
            {t("cta.viewSpecs")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function CatalogCard({
  product,
  onSpecs,
}: {
  product: CatalogProduct;
  onSpecs: () => void;
}) {
  const { t } = useLang();

  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      {/* PRODUCT IMAGE */}
      <button
        type="button"
        onClick={onSpecs}
        aria-label={`View specifications for ${product.name}`}
        className="flex h-56 w-full cursor-pointer items-center justify-center overflow-hidden bg-white"
      >
        <img
          src={product.image}
          alt={`${product.name} - food processing machinery by ${company.name}`}
          loading="lazy"
          width={1024}
          height={768}
          className="block h-full w-full object-fill transition-transform duration-300 hover:scale-[1.01]"
        />
      </button>

      {/* PRODUCT CONTENT */}
      <div className="flex flex-1 flex-col p-4">
        {/* PRODUCT NAME */}
        <h3 className="font-display text-base font-bold leading-snug">
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* SPECIFICATIONS ARE HIDDEN */}
        {/*
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 rounded-md bg-surface p-3 text-xs">
          <div>
            <dt className="text-[11px] text-muted-foreground">
              {t("label.capacity")}
            </dt>
            <dd className="mt-0.5 font-semibold">
              {product.capacity}
            </dd>
          </div>

          <div>
            <dt className="text-[11px] text-muted-foreground">
              {t("label.power")}
            </dt>
            <dd className="mt-0.5 font-semibold">
              {product.power}
            </dd>
          </div>

          <div>
            <dt className="text-[11px] text-muted-foreground">
              {t("label.material")}
            </dt>
            <dd className="mt-0.5 font-semibold">
              {product.material}
            </dd>
          </div>

          <div>
            <dt className="text-[11px] text-muted-foreground">
              {t("label.automation")}
            </dt>
            <dd className="mt-0.5 font-semibold">
              {product.automation}
            </dd>
          </div>
        </dl>
        */}

        {/* ACTION BUTTONS */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {/* GET QUOTE + WHATSAPP */}
          <ProductActions name={product.name} />

          {/* SPECS SHEET */}
          <button
            type="button"
            onClick={onSpecs}
            className="inline-flex items-center gap-1.5 rounded-md border border-input px-3 py-2 text-xs font-bold transition-colors hover:bg-secondary"
          >
            <FileText className="h-3.5 w-3.5" />
            {t("cta.specs")}
          </button>
        </div>
      </div>
    </article>
  );
}