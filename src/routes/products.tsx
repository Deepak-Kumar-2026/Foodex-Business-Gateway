// // import { abs } from "@/data/site";
// // import { useEffect, useState } from "react";
// // import {
// //   createFileRoute,
// //   useNavigate,
// // } from "@tanstack/react-router";
// // import { X, MessageCircle, FileText } from "lucide-react";
// // import {
// //   catalog,
// //   productImages,
// //   type CatalogProduct,
// // } from "@/data/products";
// // import { CatalogCard, SpecTable } from "@/components/ProductCard";
// // import { company, waLink } from "@/data/company";
// // import { useLang } from "@/lib/i18n";
// // import { useQuote } from "@/components/QuoteProvider";

// // const title = "All Products | Food Processing, Packing & Extruder Machines";

// // const description =
// //   "Browse the full Foodex range of food processing, packing and extruder machines with technical specs, applications and instant quotation.";

// // export const Route = createFileRoute("/products")({
// //   head: () => ({
// //     meta: [
// //       { title },
// //       { name: "description", content: description },
// //       {
// //         name: "keywords",
// //         content:
// //           "food processing machines, packing machines manufacturer, extruder machines, masala mixing drum, chana roaster, pasta making machine, snack packing machine",
// //       },
// //       { property: "og:title", content: title },
// //       { property: "og:description", content: description },
// //       { property: "og:type", content: "website" },
// //       { property: "og:url", content: abs("/products") },
// //       {
// //         property: "og:image",
// //         content: abs(productImages.foodProcessing),
// //       },
// //       {
// //         name: "twitter:image",
// //         content: abs(productImages.foodProcessing),
// //       },
// //     ],

// //     links: [
// //       {
// //         rel: "canonical",
// //         href: abs("/products"),
// //       },
// //     ],

// //     scripts: [
// //       {
// //         type: "application/ld+json",
// //         children: JSON.stringify({
// //           "@context": "https://schema.org",
// //           "@type": "ItemList",
// //           name: "Product Catalogue",
// //           url: abs("/products"),
// //           numberOfItems: catalog.reduce(
// //             (n, c) => n + c.products.length,
// //             0
// //           ),
// //           itemListElement: catalog
// //             .flatMap((c) => c.products)
// //             .map((p, i) => ({
// //               "@type": "ListItem",
// //               position: i + 1,
// //               item: {
// //                 "@type": "Product",
// //                 name: p.name,
// //                 brand: {
// //                   "@type": "Brand",
// //                   name: company.name,
// //                 },
// //               },
// //             })),
// //         }),
// //       },
// //     ],
// //   }),

// //   component: Products,
// // });

// // function createProductSlug(name: string) {
// //   return name
// //     .toLowerCase()
// //     .trim()
// //     .replace(/&/g, "and")
// //     .replace(/[^a-z0-9]+/g, "-")
// //     .replace(/^-+|-+$/g, "");
// // }

// // function Products() {
// //   const { t } = useLang();
// //   const { openQuote } = useQuote();
// //   const navigate = useNavigate();

// //   const [spec, setSpec] = useState<CatalogProduct | null>(null);

// //   useEffect(() => {
// //     const onKey = (e: KeyboardEvent) =>
// //       e.key === "Escape" && setSpec(null);

// //     window.addEventListener("keydown", onKey);

// //     return () =>
// //       window.removeEventListener("keydown", onKey);
// //   }, []);

// //   return (
// //     <>
// //       <section className="bg-primary py-12">
// //         <div className="mx-auto max-w-7xl px-4">
// //           <h1 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
// //             All Products
// //           </h1>

// //           <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
// //             Food processing machines, packing machines and extruder machines
// //             engineered by {company.name}, Ghaziabad — with complete
// //             specification matrix for every machine.
// //           </p>

// //           <nav className="mt-5 flex flex-wrap gap-2">
// //             {catalog.map((c) => (
// //               <a
// //                 key={c.slug}
// //                 href={`#${c.slug}`}
// //                 className="rounded-md bg-primary-foreground/15 px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-primary-foreground/25"
// //               >
// //                 {c.name}
// //               </a>
// //             ))}
// //           </nav>
// //         </div>
// //       </section>

// //       {catalog.map((cat, i) => (
// //         <section
// //           key={cat.slug}
// //           id={cat.slug}
// //           className={`section-pad scroll-mt-28 ${
// //             i % 2 ? "bg-surface" : "bg-background"
// //           }`}
// //         >
// //           <div className="mx-auto max-w-7xl px-4">
// //             <h2 className="font-display text-2xl font-extrabold">
// //               {cat.name}
// //             </h2>

// //             <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //               {cat.products.map((p) => (
// //                 <CatalogCard
// //                   key={p.name}
// //                   product={p}
// //                   onSpecs={() => {
// //                     setSpec(p);

// //                     navigate({
// //                       to: "/products/$slug",
// //                       params: {
// //                         slug: createProductSlug(p.name),
// //                       },
// //                       resetScroll: false,
// //                     });
// //                   }}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       ))}

// //       {spec && (
// //         <div
// //           className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm"
// //           onClick={() => setSpec(null)}
// //         >
// //           <div
// //             className="my-6 w-full max-w-3xl rounded-xl bg-card shadow-lift"
// //             onClick={(e) => e.stopPropagation()}
// //             role="dialog"
// //             aria-modal="true"
// //             aria-label={`${spec.name} specifications`}
// //           >
// //             <div className="flex items-center justify-between gap-4 rounded-t-xl bg-primary px-5 py-4">
// //               <h2 className="font-display text-lg font-bold text-primary-foreground">
// //                 {spec.name}
// //               </h2>

// //               <button
// //                 onClick={() => setSpec(null)}
// //                 className="inline-flex items-center gap-1 rounded-md bg-primary-foreground/15 px-3 py-1.5 text-sm font-semibold text-primary-foreground"
// //               >
// //                 <X className="h-4 w-4" />
// //                 Close
// //               </button>
// //             </div>

// //             <div className="space-y-5 p-5">
// //               <img
// //                 src={spec.image}
// //                 alt={spec.name}
// //                 loading="lazy"
// //                 width={1024}
// //                 height={768}
// //                 className="h-72 w-full rounded-lg object-contain bg-white"
// //               />

// //               <p className="text-sm text-muted-foreground">
// //                 {spec.description}
// //               </p>

// //               <div>
// //                 <h3 className="font-display text-sm font-bold">
// //                   {t("label.specs")}
// //                 </h3>

// //                 <div className="mt-2 rounded-md border border-border p-3">
// //                   <SpecTable
// //                     specs={[
// //                       {
// //                         label: t("label.capacity"),
// //                         value: spec.capacity,
// //                       },
// //                       {
// //                         label: t("label.material"),
// //                         value: spec.material,
// //                       },
// //                       {
// //                         label: t("label.power"),
// //                         value: spec.power,
// //                       },
// //                       {
// //                         label: t("label.automation"),
// //                         value: spec.automation,
// //                       },
// //                       ...spec.specs,
// //                     ]}
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <h3 className="font-display text-sm font-bold">
// //                   {t("label.features")}
// //                 </h3>

// //                 <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
// //                   {spec.features.map((f) => (
// //                     <li key={f} className="flex gap-2">
// //                       <span className="text-accent">▪</span>
// //                       {f}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div>
// //                 <h3 className="font-display text-sm font-bold">
// //                   {t("label.applications")}
// //                 </h3>

// //                 <div className="mt-2 flex flex-wrap gap-1.5">
// //                   {spec.applications.map((a) => (
// //                     <span
// //                       key={a}
// //                       className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
// //                     >
// //                       {a}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div>
// //                 <h3 className="font-display text-sm font-bold">
// //                   {t("label.faq")}
// //                 </h3>

// //                 <div className="mt-2 space-y-2">
// //                   {spec.faqs.map((f) => (
// //                     <details
// //                       key={f.q}
// //                       className="rounded-md border border-border p-3"
// //                     >
// //                       <summary className="cursor-pointer text-sm font-bold">
// //                         {f.q}
// //                       </summary>

// //                       <p className="mt-1.5 text-sm text-muted-foreground">
// //                         {f.a}
// //                       </p>
// //                     </details>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="flex flex-wrap gap-2 border-t border-border pt-4">
// //                 <button
// //                   onClick={() => {
// //                     openQuote(spec.name);
// //                     setSpec(null);
// //                   }}
// //                   className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
// //                 >
// //                   <FileText className="h-4 w-4" />
// //                   {t("cta.quote")}
// //                 </button>

// //                 <a
// //                   href={waLink(
// //                     `Hi, please share price and specifications for ${spec.name}.`
// //                   )}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="inline-flex items-center gap-2 rounded-md accent-gradient px-4 py-2 text-sm font-bold text-accent-foreground"
// //                 >
// //                   <MessageCircle className="h-4 w-4" />
// //                   {t("cta.whatsapp")}
// //                 </a>

// //                 <button
// //                   onClick={() => setSpec(null)}
// //                   className="inline-flex items-center gap-2 rounded-md border border-input px-4 py-2 text-sm font-bold"
// //                 >
// //                   <X className="h-4 w-4" />
// //                   {t("form.close")}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }



import { abs } from "@/data/site";
import { useEffect, useState } from "react";
import {
  createFileRoute,
  useNavigate,
} from "@tanstack/react-router";
import { X, MessageCircle, FileText } from "lucide-react";
import {
  catalog,
  productImages,
  type CatalogProduct,
} from "@/data/products";
import { CatalogCard, SpecTable } from "@/components/ProductCard";
import { company, waLink } from "@/data/company";
import { useLang } from "@/lib/i18n";
import { useQuote } from "@/components/QuoteProvider";

const title = "All Products | Food Processing, Packing & Extruder Machines";

const description =
  "Browse the full Foodex range of food processing, packing and extruder machines with technical specs, applications and instant quotation.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "food processing machines, packing machines manufacturer, extruder machines, masala mixing drum, chana roaster, pasta making machine, snack packing machine",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/products") },
      {
        property: "og:image",
        content: abs(productImages.foodProcessing),
      },
      {
        name: "twitter:image",
        content: abs(productImages.foodProcessing),
      },
    ],

    links: [
      {
        rel: "canonical",
        href: abs("/products"),
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Product Catalogue",
          url: abs("/products"),
          numberOfItems: catalog.reduce(
            (n, c) => n + c.products.length,
            0
          ),
          itemListElement: catalog
            .flatMap((c) => c.products)
            .map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                brand: {
                  "@type": "Brand",
                  name: company.name,
                },
              },
            })),
        }),
      },
    ],
  }),

  component: Products,
});

function createProductSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function Products() {
  const { t } = useLang();
  const { openQuote } = useQuote();
  const navigate = useNavigate();

  const [spec, setSpec] =
    useState<CatalogProduct | null>(null);

  // Initially only 30 products are visible
  const [visibleProductCount, setVisibleProductCount] =
    useState(30);

  // Total products
  const totalProducts = catalog.reduce(
    (total, category) =>
      total + category.products.length,
    0
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSpec(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () =>
      window.removeEventListener("keydown", onKey);
  }, []);

  /*
   * Handle category click
   *
   * If category is hidden because it is after
   * the currently visible 30 products, automatically
   * reveal products up to that category and then scroll.
   */
  const handleCategoryClick = (slug: string) => {
    let categoryStartIndex = 0;
    let selectedCategory:
      | (typeof catalog)[number]
      | undefined;

    for (const category of catalog) {
      if (category.slug === slug) {
        selectedCategory = category;
        break;
      }

      categoryStartIndex += category.products.length;
    }

    if (!selectedCategory) return;

    const categoryEndIndex =
      categoryStartIndex +
      selectedCategory.products.length;

    /*
     * Reveal the complete selected category.
     */
    setVisibleProductCount((prev) =>
      Math.max(prev, categoryEndIndex)
    );

    /*
     * Wait for React to render the category,
     * then scroll to it.
     */
    setTimeout(() => {
      document
        .getElementById(slug)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            All Products
          </h1>

          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            Food processing machines, packing machines and
            extruder machines engineered by {company.name},
            Ghaziabad — with complete specification matrix
            for every machine.
          </p>

          {/* ================= CATEGORY BUTTONS ================= */}

          <nav className="mt-5 flex flex-wrap gap-2">
            {catalog.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() =>
                  handleCategoryClick(c.slug)
                }
                className="rounded-md bg-primary-foreground/15 px-3 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary-foreground/25"
              >
                {c.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      {(() => {
        let globalProductIndex = 0;

        return catalog.map((cat, i) => {
          /*
           * Starting index of this category
           * in the complete product list.
           */
          const categoryStartIndex =
            globalProductIndex;

          /*
           * Move global product counter forward.
           */
          globalProductIndex += cat.products.length;

          /*
           * Calculate how many products from
           * this category should be visible.
           */
          const visibleEnd =
            visibleProductCount -
            categoryStartIndex;

          const productsToShow =
            visibleEnd > 0
              ? cat.products.slice(
                  0,
                  Math.min(
                    visibleEnd,
                    cat.products.length
                  )
                )
              : [];

          /*
           * Hide complete category if none
           * of its products are visible.
           */
          if (productsToShow.length === 0) {
            return null;
          }

          return (
            <section
              key={cat.slug}
              id={cat.slug}
              className={`section-pad scroll-mt-28 ${
                i % 2
                  ? "bg-surface"
                  : "bg-background"
              }`}
            >
              <div className="mx-auto max-w-7xl px-4">
                {/* CATEGORY TITLE */}

                <h2 className="font-display text-2xl font-extrabold">
                  {cat.name}
                </h2>

                {/* PRODUCT GRID */}

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {productsToShow.map((p) => (
                    <CatalogCard
                      key={p.name}
                      product={p}
                      onSpecs={() => {
                        setSpec(p);

                        navigate({
                          to: "/products/$slug",
                          params: {
                            slug: createProductSlug(
                              p.name
                            ),
                          },
                          resetScroll: false,
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        });
      })()}

      {/* ================= VIEW MORE ================= */}

      {visibleProductCount < totalProducts && (
        <div className="flex justify-center bg-background py-10">
          <button
            type="button"
            onClick={() => {
              setVisibleProductCount(
                (prev) => prev + 30
              );
            }}
            className="rounded-md bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            View More Products
          </button>
        </div>
      )}

      {/* ================= SPEC MODAL ================= */}

      {spec && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm"
          onClick={() => setSpec(null)}
        >
          <div
            className="my-6 w-full max-w-3xl rounded-xl bg-card shadow-lift"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${spec.name} specifications`}
          >
            {/* MODAL HEADER */}

            <div className="flex items-center justify-between gap-4 rounded-t-xl bg-primary px-5 py-4">
              <h2 className="font-display text-lg font-bold text-primary-foreground">
                {spec.name}
              </h2>

              <button
                onClick={() => setSpec(null)}
                className="inline-flex items-center gap-1 rounded-md bg-primary-foreground/15 px-3 py-1.5 text-sm font-semibold text-primary-foreground"
              >
                <X className="h-4 w-4" />
                Close
              </button>
            </div>

            {/* MODAL BODY */}

            <div className="space-y-5 p-5">
              <img
                src={spec.image}
                alt={spec.name}
                loading="lazy"
                width={1024}
                height={768}
                className="h-72 w-full rounded-lg bg-white object-contain"
              />

              <p className="text-sm text-muted-foreground">
                {spec.description}
              </p>

              {/* SPECS */}

              <div>
                <h3 className="font-display text-sm font-bold">
                  {t("label.specs")}
                </h3>

                <div className="mt-2 rounded-md border border-border p-3">
                  <SpecTable
                    specs={[
                      {
                        label: t("label.capacity"),
                        value: spec.capacity,
                      },
                      {
                        label: t("label.material"),
                        value: spec.material,
                      },
                      {
                        label: t("label.power"),
                        value: spec.power,
                      },
                      {
                        label: t("label.automation"),
                        value: spec.automation,
                      },
                      ...spec.specs,
                    ]}
                  />
                </div>
              </div>

              {/* FEATURES */}

              <div>
                <h3 className="font-display text-sm font-bold">
                  {t("label.features")}
                </h3>

                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {spec.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2"
                    >
                      <span className="text-accent">
                        ▪
                      </span>

                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* APPLICATIONS */}

              <div>
                <h3 className="font-display text-sm font-bold">
                  {t("label.applications")}
                </h3>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {spec.applications.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}

              <div>
                <h3 className="font-display text-sm font-bold">
                  {t("label.faq")}
                </h3>

                <div className="mt-2 space-y-2">
                  {spec.faqs.map((f) => (
                    <details
                      key={f.q}
                      className="rounded-md border border-border p-3"
                    >
                      <summary className="cursor-pointer text-sm font-bold">
                        {f.q}
                      </summary>

                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}

              <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                <button
                  onClick={() => {
                    openQuote(spec.name);
                    setSpec(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
                >
                  <FileText className="h-4 w-4" />
                  {t("cta.quote")}
                </button>

                <a
                  href={waLink(
                    `Hi, please share price and specifications for ${spec.name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md accent-gradient px-4 py-2 text-sm font-bold text-accent-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>

                <button
                  onClick={() => setSpec(null)}
                  className="inline-flex items-center gap-2 rounded-md border border-input px-4 py-2 text-sm font-bold"
                >
                  <X className="h-4 w-4" />
                  {t("form.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}