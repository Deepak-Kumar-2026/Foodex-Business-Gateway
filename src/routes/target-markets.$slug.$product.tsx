// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/target-markets/$slug/$product')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/target-markets/$slug/$product"!</div>
// }
import { abs } from "@/data/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  MapPin,
  Truck,
  Wrench,
  Headphones,
} from "lucide-react";

import { allLocations } from "@/data/locations";
import { hotProducts } from "@/data/products";
import { roles } from "@/data/roles";
import { company } from "@/data/company";
import {
  ProductActions,
  SpecTable,
} from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute(
  "/target-markets/$slug/$product",
)({
  loader: ({ params }) => {
    const location = allLocations.find(
      (item) =>
        item.slug.toLowerCase() ===
        params.slug.toLowerCase(),
    );

    if (!location) {
      throw notFound();
    }

    const product = hotProducts.find(
      (item) =>
        item.slug.toLowerCase() ===
        params.product.toLowerCase(),
    );

    if (!product) {
      throw notFound();
    }

    return {
      location,
      product,
    };
  },

  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Product not found",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { location, product } = loaderData;

    const title = `${product.title} in ${location.name} | ${company.short}`;

    const description =
      `${product.title} supplied by ${company.name} in ${location.name}. ` +
      `${product.summary}`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "keywords",
          content: [
            `${product.title} in ${location.name}`,
            `${product.title} manufacturer in ${location.name}`,
            `${product.title} supplier in ${location.name}`,
            `${product.slug} ${location.slug}`,
          ].join(", "),
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
          content: abs(
            `/target-markets/${location.slug}/${product.slug}`,
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
            `/target-markets/${location.slug}/${product.slug}`,
          ),
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.title} in ${location.name}`,
            description,
            image: abs(product.image),

            brand: {
              "@type": "Brand",
              name: company.name,
            },

            manufacturer: {
              "@type": "Organization",
              name: company.name,
              url: abs("/"),
            },

            category: product.category,

            additionalProperty: product.specs.map(
              (spec) => ({
                "@type": "PropertyValue",
                name: spec.label,
                value: spec.value,
              }),
            ),
          }),
        },

        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: abs("/"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Target Markets",
                item: abs("/target-markets"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: location.name,
                item: abs(
                  `/target-markets/${location.slug}`,
                ),
              },
              {
                "@type": "ListItem",
                position: 4,
                name: product.title,
                item: abs(
                  `/target-markets/${location.slug}/${product.slug}`,
                ),
              },
            ],
          }),
        },
      ],
    };
  },

  component: ProductMarketPage,
});

function ProductMarketPage() {
  const { location, product } =
    Route.useLoaderData();

  const { t } = useLang();

  const isCountry = location.slug !== "india";

  const otherProducts = hotProducts.filter(
    (item) => item.slug !== product.slug,
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            to="/target-markets/$slug"
            params={{
              slug: location.slug,
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-foreground/80 hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {location.name}
          </Link>

          <h1 className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {product.title} in {location.name}
          </h1>

          <p className="mt-2 max-w-4xl text-sm text-primary-foreground/80">
            {company.name} supplies {product.title}{" "}
            {isCountry
              ? `for export to ${location.name}`
              : `across ${location.name}`}
            , with installation, commissioning and
            after-sales support.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {location.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 rounded-md bg-primary-foreground/15 px-2.5 py-1.5 text-xs font-semibold text-primary-foreground"
              >
                <MapPin className="h-3 w-3 text-accent" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5">

          {/* LEFT */}
          <div className="lg:col-span-3">

            {/* PRODUCT DETAIL */}
            <div
              id="selected-product"
              className="card-surface scroll-mt-24 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="border-b border-border bg-card p-6">
                <div className="flex min-h-[280px] items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.title} in ${location.name}`}
                    width={500}
                    height={500}
                    className="h-64 w-full object-contain"
                  />
                </div>
              </div>

              <div className="p-6">
                <h2 className="font-display text-2xl font-extrabold">
                  {product.title} in {location.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {product.summary}
                </p>

                {/* BASIC DETAILS */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md bg-surface p-3">
                    <p className="text-xs text-muted-foreground">
                      Material
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      {product.material}
                    </p>
                  </div>

                  <div className="rounded-md bg-surface p-3">
                    <p className="text-xs text-muted-foreground">
                      Power
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      {product.power}
                    </p>
                  </div>

                  <div className="rounded-md bg-surface p-3">
                    <p className="text-xs text-muted-foreground">
                      Automation
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      {product.automation}
                    </p>
                  </div>

                  <div className="rounded-md bg-surface p-3">
                    <p className="text-xs text-muted-foreground">
                      Capacity
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      {product.capacity}
                    </p>
                  </div>
                </div>

                {/* SPECIFICATIONS */}
                <div className="mt-5">
                  <h3 className="font-display text-lg font-bold">
                    Technical Specifications
                  </h3>

                  <div className="mt-3">
                    <SpecTable specs={product.specs} />
                  </div>
                </div>

                {/* FEATURES */}
                <div className="mt-6">
                  <h3 className="font-display text-lg font-bold">
                    Key Features
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {product.features.map(
                      (feature) => (
                        <li
                          key={feature}
                          className="flex gap-2"
                        >
                          <span className="text-accent">
                            ▪
                          </span>

                          <span>{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* APPLICATIONS */}
                <div className="mt-6">
                  <h3 className="font-display text-lg font-bold">
                    Applications
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.applications.map(
                      (application) => (
                        <span
                          key={application}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold"
                        >
                          {application}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* ACTIONS */}
                <ProductActions
                  name={`${product.title} — ${location.name}`}
                  className="mt-6"
                />

                {/* SEO LINKS */}
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {product.title.toUpperCase()} IN{" "}
                    {location.name.toUpperCase()}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {roles.map((role) => (
                      <Link
                        key={role.slug}
                        to="/$product/$role/$location"
                        params={{
                          product: product.slug,
                          role: role.slug,
                          location: location.slug,
                        }}
                        className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-xs font-semibold hover:border-primary hover:text-primary"
                      >
                        <MapPin className="h-3 w-3 text-accent" />
                        {product.title}{" "}
                        {role.intent} in{" "}
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <h2 className="mt-10 font-display text-xl font-bold">
              Why buyers in {location.name} choose{" "}
              {company.short}
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="card-surface p-4">
                <Truck className="h-6 w-6 text-accent" />

                <h3 className="mt-2 font-display text-sm font-bold">
                  {isCountry
                    ? "Export Logistics"
                    : "Pan India Dispatch"}
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  {isCountry
                    ? "Sea and air freight with complete export documentation."
                    : `Road transport to ${location.hub} and all major cities.`}
                </p>
              </div>

              <div className="card-surface p-4">
                <Wrench className="h-6 w-6 text-accent" />

                <h3 className="mt-2 font-display text-sm font-bold">
                  On-Site Installation
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Erection, commissioning and operator
                  training by our engineers.
                </p>
              </div>

              <div className="card-surface p-4">
                <Headphones className="h-6 w-6 text-accent" />

                <h3 className="mt-2 font-display text-sm font-bold">
                  After-Sales Support
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Spares, consumables and remote
                  troubleshooting support.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="mt-10 font-display text-xl font-bold">
              {t("label.faq")} — {location.name}
            </h2>

            <div className="mt-3 space-y-2">
              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  Do you supply {product.title} in{" "}
                  {location.name}?
                </summary>

                <p className="mt-2 text-sm text-muted-foreground">
                  Yes. We supply and install{" "}
                  {product.title} across{" "}
                  {location.name}, including{" "}
                  {location.cities.join(", ")}.
                </p>
              </details>

              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  Is installation available in{" "}
                  {location.name}?
                </summary>

                <p className="mt-2 text-sm text-muted-foreground">
                  Yes, installation, commissioning and
                  operator training are available in{" "}
                  {location.name}.
                </p>
              </details>

              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  What is the delivery time?
                </summary>

                <p className="mt-2 text-sm text-muted-foreground">
                  Standard machines generally dispatch
                  after order confirmation. Final delivery
                  time depends on machine configuration,
                  installation and destination.
                </p>
              </details>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5 lg:col-span-2">

            {/* QUOTE */}
            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Get Quote for {location.name}
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                {t("label.director")}:{" "}
                {company.director} ·{" "}
                {company.phone}
              </p>

              <ProductActions
                name={`${product.title} — ${location.name}`}
                className="mt-3"
              />
            </div>

            {/* CITIES */}
            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Major Cities Covered
              </h2>

              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {location.cities.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-1.5"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            {/* OTHER PRODUCTS */}
            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Other Products
              </h2>

              <div className="mt-3 space-y-2">
                {otherProducts.map(
                  (otherProduct) => (
                    <Link
                      key={otherProduct.slug}
                      to="/target-markets/$slug/$product"
                      params={{
                        slug: location.slug,
                        product: otherProduct.slug,
                      }}
                      className="flex items-center gap-2 rounded-md border border-border p-2 hover:border-primary"
                    >
                      <img
                        src={otherProduct.image}
                        alt={otherProduct.title}
                        width={500}
                        height={500}
                        className="h-12 w-14 rounded object-contain"
                      />

                      <span className="min-w-0">
                        <span className="block truncate text-xs font-bold">
                          {otherProduct.title}
                        </span>

                        <span className="text-[10px] text-muted-foreground">
                          {otherProduct.capacity}
                        </span>
                      </span>
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* OTHER MARKETS */}
            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Other Markets
              </h2>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {allLocations
                  .filter(
                    (item) =>
                      item.slug !==
                      location.slug,
                  )
                  .map((market) => (
                    <Link
                      key={market.slug}
                      to="/target-markets/$slug"
                      params={{
                        slug: market.slug,
                      }}
                      className="rounded border border-border px-2 py-1 text-[11px] font-semibold hover:border-primary hover:text-primary"
                    >
                      {market.name}
                    </Link>
                  ))}
              </div>

              <Link
                to="/target-markets"
                className="mt-3 inline-block text-xs font-bold text-primary hover:text-accent"
              >
                View all target markets →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}