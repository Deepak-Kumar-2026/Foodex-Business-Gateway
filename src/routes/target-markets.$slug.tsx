

import { abs } from "@/data/site";
import { useState } from "react";
import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";
import {
  MapPin,
  ArrowLeft,
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

export const Route = createFileRoute("/target-markets/$slug")({
  loader: ({ params }) => {
    const location = allLocations.find(
      (item) =>
        item.slug.toLowerCase() === params.slug.toLowerCase(),
    );

    if (!location) {
      throw notFound();
    }

    return { location };
  },

  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Market not found",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const l = loaderData.location;

    const title = `Batch Fryer & Food Extruder Machine in ${l.name} | ${company.short}`;

    const description =
      `Batch fryers, food extruders and snack plants supplied & installed in ${l.name} — ` +
      `${l.cities.slice(0, 3).join(", ")}. Get a quotation from ${company.short}.`;

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
            `batch fryer manufacturer in ${l.name}`,
            `food extruder machine ${l.name}`,
            `snack plant supplier ${l.name}`,
            `soya nugget plant ${l.name}`,
            ...l.cities.map(
              (c) => `food processing machine ${c}`,
            ),
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
          content: abs(`/target-markets/${params.slug}`),
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
          href: abs(`/target-markets/${params.slug}`),
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType:
              "Snack food processing machinery supply and installation",
            name: `Food processing machinery supply in ${l.name}`,

            provider: {
              "@type": "Organization",
              "@id": `${abs("/")}#organization`,
              name: company.name,
              url: abs("/"),
              telephone: company.phone,
              email: company.email,

              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Ground Floor, KH No 1284 Industrial Area Morta, Pillar No 698",
                addressLocality: company.city,
                addressRegion: company.state,
                postalCode: company.postalCode,
                addressCountry: "IN",
              },
            },

            areaServed: [
              {
                "@type":
                  l.slug !== "india" ? "Country" : "State",
                name: l.name,
              },

              ...l.cities.map((c) => ({
                "@type": "City",
                name: c,
              })),
            ],
          }),
        },

        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: [
              {
                "@type": "Question",
                name: `Do you supply batch fryers in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    `Yes. We regularly supply and install industrial batch fryers ` +
                    `and extruders across ${l.name}, including ${l.cities.join(", ")}.`,
                },
              },

              {
                "@type": "Question",
                name: `Is installation available in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    `Yes, our engineers handle installation, commissioning and ` +
                    `operator training in ${l.name}.`,
                },
              },
            ],
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
                name: l.name,
                item: abs(`/target-markets/${params.slug}`),
              },
            ],
          }),
        },
      ],
    };
  },

  component: MarketPage,
});

function MarketPage() {
  const { location } = Route.useLoaderData();
  const { t } = useLang();

  const [active, setActive] = useState(
    hotProducts[0]!,
  );

  const isCountry = location.slug !== "india";

  const others = allLocations
    .filter(
      (l) =>
        l.slug !== location.slug &&
        l.kind === location.kind,
    )
    .slice(0, 12);

  /*
   * Product click:
   *
   * 1. Change selected product
   * 2. Change URL WITHOUT router navigation
   * 3. Wait for React render
   * 4. Scroll to selected product
   */
  const handleProductClick = (
    product: (typeof hotProducts)[number],
  ) => {
    setActive(product);

    /*
     * IMPORTANT:
     * Do NOT use navigate() here.
     *
     * navigate() changes the route and TanStack Router
     * can move the page back to the top.
     *
     * replaceState changes only the URL.
     */
    window.history.replaceState(
      {},
      "",
      `/target-markets/${location.slug}/${product.slug}`,
    );

    /*
     * Wait until selected product is rendered.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element =
          document.getElementById("selected-product");

        if (!element) {
          return;
        }

        /*
         * Header ki height ke liye thoda gap.
         * Isse product card header ke neeche clearly dikhega.
         */
        const headerOffset = 90;

        const elementTop =
          element.getBoundingClientRect().top +
          window.scrollY;

        window.scrollTo({
          top: Math.max(
            0,
            elementTop - headerOffset,
          ),
          behavior: "smooth",
        });
      });
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            to="/target-markets"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-foreground/80 hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t("nav.markets")}
          </Link>

          <h1 className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Batch Fryer, Extruder & Food Processing Machines in{" "}
            {location.name}
          </h1>

          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            {company.name}, Ghaziabad supplies snack food machinery{" "}
            {isCountry ? "for export to" : "across"}{" "}
            {location.name} with installation, commissioning and
            after-sales support in{" "}
            {location.cities.join(", ")}.
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

            <h2 className="font-display text-2xl font-extrabold">
              Machines Supplied in {location.name}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Snack manufacturers in {location.hub} and nearby industrial
              belts choose our machines for SS 304 food grade construction,
              low fuel consumption and reliable after-sales support. Select a
              machine to view its specifications.
            </p>

            {/* PRODUCT SELECTOR */}
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {hotProducts.map((product) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() =>
                    handleProductClick(product)
                  }
                  className={`flex items-center gap-2.5 rounded-lg border p-2 text-left ${
                    active.slug === product.slug
                      ? "border-primary bg-card shadow-card"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={`${product.title} supplied in ${location.name}`}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="h-14 w-16 shrink-0 rounded object-contain"
                  />

                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold">
                      {product.title}
                    </span>

                    <span className="text-[11px] text-muted-foreground">
                      {product.capacity}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* SELECTED PRODUCT */}
            <div
              id="selected-product"
              className="mt-6 scroll-mt-24 card-surface p-5"
            >
              <h3 className="font-display text-lg font-bold">
                {active.title} in {location.name}
              </h3>

              <p className="mt-1.5 text-sm text-muted-foreground">
                {active.summary}
              </p>

              <div className="mt-3">
                <SpecTable
                  specs={active.specs.slice(0, 5)}
                />
              </div>

              <ProductActions
                name={`${active.title} — ${location.name}`}
                className="mt-4"
              />

              <div className="mt-4">
                <p className="text-xs font-bold uppercase text-muted-foreground">
                  {active.title} in {location.name}
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {roles.map((role) => (
                    <Link
                      key={role.slug}
                      to="/$product/$role/$location"
                      params={{
                        product: active.slug,
                        role: role.slug,
                        location: location.slug,
                      }}
                      className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[11px] font-semibold hover:border-primary hover:text-primary"
                    >
                      <MapPin className="h-2.5 w-2.5 text-accent" />

                      {active.title} {role.intent} in{" "}
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/hot-products/$slug/target-markets/$location"
                  params={{
                    slug: active.slug,
                    location: location.slug,
                  }}
                  search={{ lang: undefined }}
                  className="text-xs font-bold text-primary hover:text-accent"
                >
                  {active.title} in {location.name} →
                </Link>

                <Link
                  to="/hot-products/$slug"
                  params={{
                    slug: active.slug,
                  }}
                  className="text-xs font-bold text-primary hover:text-accent"
                >
                  View full {active.title} specifications →
                </Link>
              </div>
            </div>

            {/* WHY BUYERS */}
            <h2 className="mt-10 font-display text-xl font-bold">
              Why buyers in {location.name} choose {company.short}
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
                  Erection, commissioning and operator training by our
                  engineers.
                </p>
              </div>

              <div className="card-surface p-4">
                <Headphones className="h-6 w-6 text-accent" />

                <h3 className="mt-2 font-display text-sm font-bold">
                  After-Sales Support
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Spares, consumables and remote troubleshooting support.
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
                  Do you supply batch fryers in {location.name}?
                </summary>

                <p className="mt-2 text-sm text-muted-foreground">
                  Yes. We supply and install industrial batch fryers,
                  extruders and complete snack lines across{" "}
                  {location.name}, including{" "}
                  {location.cities.join(", ")}.
                </p>
              </details>

              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  What is the delivery time to {location.hub}?
                </summary>

                <p className="mt-2 text-sm text-muted-foreground">
                  Standard machines dispatch in 15-25 days after order
                  confirmation
                  {isCountry
                    ? ", plus shipping transit time"
                    : ""}
                  . Turnkey plants are scheduled after layout approval.
                </p>
              </details>

              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  Is installation and training included in{" "}
                  {location.name}?
                </summary>

                <p className="mt-2 text-sm text-muted-foreground">
                  Yes, installation, commissioning and operator training
                  are provided
                  {isCountry
                    ? " with export supervision support"
                    : ""}.
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
                {t("label.director")}: {company.director} ·{" "}
                {company.phone}
              </p>

              <ProductActions
                name={`Machinery enquiry — ${location.name}`}
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

            {/* OTHER MARKETS */}
            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Other {isCountry ? "Export Markets" : "States We Serve"}
              </h2>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {others.map((market) => (
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