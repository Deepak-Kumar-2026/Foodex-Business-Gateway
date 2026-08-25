


import { abs } from "@/data/site";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ArrowRight, MapPin } from "lucide-react";
import { hotProducts } from "@/data/products";
import {
  HotProductCard,
  SpecTable,
  ProductActions,
} from "@/components/ProductCard";
import { countries } from "@/data/locations";
import { company } from "@/data/company";
import { useLang } from "@/lib/i18n";

const title =
  "Hot Products | Batch Fryers, Extruders & Soya Nugget Plant";

const description =
  "Hot selling Foodex machines: industrial batch fryers, kurkure & namkeen fryers, food extruders and soya nugget plants with full specifications.";

export const Route = createFileRoute("/hot-products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content: hotProducts
          .flatMap((p) => p.keywords)
          .join(", "),
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: abs("/hot-products"),
      },
      {
        property: "og:image",
        content: abs(hotProducts[0]!.image),
      },
      {
        name: "twitter:image",
        content: abs(hotProducts[0]!.image),
      },
    ],

    links: [
      {
        rel: "canonical",
        href: abs("/hot-products"),
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Hot Products",
          itemListElement: hotProducts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            url: abs(`/hot-products/${p.slug}`),
          })),
        }),
      },
    ],
  }),

  component: HotProducts,
});

function HotProducts() {
  const { t } = useLang();

  const [active, setActive] = useState(hotProducts[0]!);

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <Flame className="h-4 w-4" />
            {t("label.hotProduct")}
          </p>

          <h1 className="mt-2 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Hot Products — Snack Food Machinery
          </h1>

          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            Nine flagship machine lines engineered by{" "}
            {company.name}, Ghaziabad. Select any product to view
            its complete technical matrix, applications and FAQs.
          </p>
        </div>
      </section>

      {/* ================= PRODUCT SELECTOR ================= */}

      <section className="border-b border-border bg-surface py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hotProducts.map((p) => (
              <Link
                key={p.slug}
                to="/hot-products/$slug"
                params={{
                  slug: p.slug,
                }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card/60 p-2 text-left transition hover:border-primary/60"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-14 w-20 shrink-0 rounded object-cover"
                />

                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">
                    {p.title}
                  </span>

                  <span className="mt-0.5 flex flex-wrap items-center gap-1">
                    <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                      {p.capacity}
                    </span>

                    <span className="inline-flex items-center gap-0.5 rounded bg-accent-soft px-1.5 py-0.5 text-[10px] font-bold text-secondary-foreground">
                      <Flame className="h-2.5 w-2.5" />
                      {t("label.hotProduct")}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEEP DIVE ================= */}

      <section id="deep-dive" className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src={active.image}
              alt={`${active.title} by ${company.name}`}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-lg object-cover shadow-card"
            />

            <h2 className="mt-6 font-display text-2xl font-extrabold">
              {active.title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {active.summary}
            </p>

            {/* Specs */}

            <h3 className="mt-6 font-display text-lg font-bold">
              {t("label.specs")}
            </h3>

            <div className="mt-2 card-surface p-4">
              <SpecTable specs={active.specs} />
            </div>

            {/* Features */}

            <h3 className="mt-6 font-display text-lg font-bold">
              {t("label.features")}
            </h3>

            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {active.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2"
                >
                  <span className="text-accent">▪</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Applications */}

            <h3 className="mt-6 font-display text-lg font-bold">
              {t("label.applications")}
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">
              {active.applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {a}
                </span>
              ))}
            </div>

            {/* FAQ */}

            <h3 className="mt-6 font-display text-lg font-bold">
              {t("label.faq")}
            </h3>

            <div className="mt-2 space-y-2">
              {active.faqs.map((f) => (
                <details
                  key={f.q}
                  className="card-surface p-4"
                >
                  <summary className="cursor-pointer text-sm font-bold">
                    {f.q}
                  </summary>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            {/* Actions */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ProductActions name={active.title} />

              <Link
                to="/hot-products/$slug"
                params={{
                  slug: active.slug,
                }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent"
              >
                Full product page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* ================= TARGET MARKET ================= */}

          <aside className="lg:col-span-2">
            <div className="card-surface p-5">
              <h3 className="font-display text-base font-bold">
                Target Market Directory
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                {active.title} supplied across India and exported worldwide.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <Link
                    key={c.slug}
                    to="/target-markets/$slug"
                    params={{
                      slug: c.slug,
                    }}
                    className="rounded-md accent-gradient px-2.5 py-1.5 text-[11px] font-bold text-accent-foreground"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= ALL HOT PRODUCTS ================= */}

      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-extrabold">
            All Hot Products
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hotProducts.map((p) => (
              <Link
                key={p.slug}
                to="/hot-products/$slug"
                params={{
                  slug: p.slug,
                }}
                className="block rounded-lg"
              >
                <HotProductCard product={p} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}