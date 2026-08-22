import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, FileText, MessageCircle } from "lucide-react";

import { abs } from "@/data/site";
import { catalog } from "@/data/products";
import { company, waLink } from "@/data/company";
import { SpecTable } from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";
import { useQuote } from "@/components/QuoteProvider";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = catalog
      .flatMap((category) => category.products)
      .find((product) => createProductSlug(product.name) === params.slug);

    if (!product) {
      throw notFound();
    }

    return { product };
  },

  head: ({ loaderData }) => {
    const product = loaderData?.product;

    if (!product) {
      return {
        meta: [{ title: "Product Not Found" }],
      };
    }

    return {
      meta: [
        {
          title: `${product.name} | ${company.name}`,
        },
        {
          name: "description",
          content: product.description,
        },
        {
          property: "og:title",
          content: `${product.name} | ${company.name}`,
        },
        {
          property: "og:description",
          content: product.description,
        },
        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:url",
          content: abs(
            `/products/${createProductSlug(product.name)}`
          ),
        },
        {
          property: "og:image",
          content: abs(product.image),
        },
      ],

      links: [
        {
          rel: "canonical",
          href: abs(
            `/products/${createProductSlug(product.name)}`
          ),
        },
      ],
    };
  },

  component: ProductDetails,
});

function createProductSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ProductDetails() {
  const { product } = Route.useLoaderData();
  const { t } = useLang();
  const { openQuote } = useQuote();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            to="/products"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Products
          </Link>

          <h1 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            {product.description}
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-xl border border-border bg-white">
              <img
                src={product.image}
                alt={`${product.name} - ${company.name}`}
                loading="eager"
                width={1024}
                height={768}
                className="block h-auto max-h-[600px] w-full object-contain"
              />
            </div>

            {/* Basic Information */}
            <div>
              <h2 className="font-display text-2xl font-extrabold">
                {product.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {product.description}
              </p>

              {/* Main Specs */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">
                    {t("label.capacity")}
                  </div>
                  <div className="mt-1 font-bold">
                    {product.capacity}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">
                    {t("label.power")}
                  </div>
                  <div className="mt-1 font-bold">
                    {product.power}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">
                    {t("label.material")}
                  </div>
                  <div className="mt-1 font-bold">
                    {product.material}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">
                    {t("label.automation")}
                  </div>
                  <div className="mt-1 font-bold">
                    {product.automation}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openQuote(product.name)}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                >
                  <FileText className="h-4 w-4" />
                  {t("cta.quote")}
                </button>

                <a
                  href={waLink(
                    `Hi, please share price and specifications for ${product.name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md accent-gradient px-5 py-3 text-sm font-bold text-accent-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>
              </div>
            </div>
          </div>

          {/* Full Specifications */}
          <div className="mt-10">
            <h2 className="font-display text-xl font-extrabold">
              {t("label.specs")}
            </h2>

            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card p-4">
              <SpecTable
                specs={[
                  {
                    label: t("label.capacity"),
                    value: product.capacity,
                  },
                  {
                    label: t("label.material"),
                    value: product.material,
                  },
                  {
                    label: t("label.power"),
                    value: product.power,
                  },
                  {
                    label: t("label.automation"),
                    value: product.automation,
                  },
                  ...product.specs,
                ]}
              />
            </div>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="font-display text-xl font-extrabold">
              {t("label.features")}
            </h2>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground"
                >
                  <span className="mr-2 font-bold text-accent">▪</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="mt-10">
            <h2 className="font-display text-xl font-extrabold">
              {t("label.applications")}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {product.faqs.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-extrabold">
                {t("label.faq")}
              </h2>

              <div className="mt-4 space-y-3">
                {product.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <summary className="cursor-pointer text-sm font-bold">
                      {faq.q}
                    </summary>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6">
            <button
              type="button"
              onClick={() => openQuote(product.name)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              <FileText className="h-4 w-4" />
              {t("cta.quote")}
            </button>

            <a
              href={waLink(
                `Hi, please share price and specifications for ${product.name}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md accent-gradient px-5 py-3 text-sm font-bold text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.whatsapp")}
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-input px-5 py-3 text-sm font-bold hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}