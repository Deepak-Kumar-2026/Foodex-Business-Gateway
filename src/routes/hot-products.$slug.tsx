import { abs } from "@/data/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Flame, MapPin, ArrowLeft } from "lucide-react";
import { getHotProduct, hotProducts } from "@/data/products";
import { SpecTable, ProductActions } from "@/components/ProductCard";
import { countries } from "@/data/locations";
import { company } from "@/data/company";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/hot-products/$slug")({
  loader: ({ params }) => {
    const product = getHotProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `${p.title} Manufacturer & Exporter | ${company.short} India`;
    const description = `${p.title} — ${p.material}, ${p.capacity}. Made in Ghaziabad by ${company.short}: pan-India supply, export and installation. Get a quotation today.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: abs(`/hot-products/${params.slug}`) },
        { property: "og:image", content: abs(p.image) },
        { name: "twitter:image", content: abs(p.image) },
      ],
      links: [{ rel: "canonical", href: abs(`/hot-products/${params.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": abs(`/hot-products/${params.slug}#product`),
            name: p.title,
            description: p.summary,
            category: p.category,
            sku: p.slug,
            image: [abs(p.image)],
            url: abs(`/hot-products/${params.slug}`),
            brand: { "@type": "Brand", name: company.name },
            manufacturer: {
              "@type": "Organization",
              name: company.name,
              url: abs("/"),
              telephone: company.phone,
            },
            additionalProperty: [
              { "@type": "PropertyValue", name: "Capacity", value: p.capacity },
              { "@type": "PropertyValue", name: "Material", value: p.material },
              { "@type": "PropertyValue", name: "Power", value: p.power },
              { "@type": "PropertyValue", name: "Automation", value: p.automation },
              ...p.specs.map((s) => ({
                "@type": "PropertyValue",
                name: s.label,
                value: s.value,
              })),
            ],
          }),
        },

        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "Hot Products", item: abs("/hot-products") },
              { "@type": "ListItem", position: 3, name: p.title, item: abs(`/hot-products/${params.slug}`) },
            ],
          }),
        },
      ],
    };
  },
  component: HotProductPage,
});

function HotProductPage() {
  const { product } = Route.useLoaderData();
  const { t } = useLang();
  const related = hotProducts.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-4">
          <Link to="/hot-products" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-foreground/80 hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> {t("nav.hot")}
          </Link>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full accent-gradient px-2.5 py-1 text-[10px] font-bold uppercase text-accent-foreground">
            <Flame className="h-3 w-3" /> {product.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">{product.summary}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src={product.image}
              alt={`${product.title} manufactured by ${company.name} Ghaziabad`}
              width={1024}
              height={768}
              className="w-full rounded-lg object-cover shadow-card"
            />

            <h2 className="mt-8 font-display text-xl font-bold">{t("label.specs")}</h2>
            <div className="mt-2 card-surface p-4">
              <SpecTable specs={product.specs} />
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">{t("label.features")}</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-accent">▪</span> {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-xl font-bold">{t("label.applications")}</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {a}
                </span>
              ))}
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">{t("label.faq")}</h2>
            <div className="mt-2 space-y-2">
              {product.faqs.map((f) => (
                <details key={f.q} className="card-surface p-4">
                  <summary className="cursor-pointer text-sm font-bold">{f.q}</summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">Related Machines</h2>
            <ul className="mt-2 grid gap-2 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/hot-products/$slug"
                    params={{ slug: r.slug }}
                    className="block rounded-md border border-border p-3 text-sm font-semibold hover:border-primary hover:text-primary"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-5 lg:col-span-2">
            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">Machine Overview</h2>
              <dl className="mt-3 space-y-2 text-sm">
                {[
                  [t("label.capacity"), product.capacity],
                  [t("label.material"), product.material],
                  [t("label.power"), product.power],
                  [t("label.automation"), product.automation],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-border pb-1.5 last:border-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <ProductActions name={product.title} className="mt-4" />
              <p className="mt-3 text-xs text-muted-foreground">
                {t("label.director")}: {company.director} · {company.phone}
              </p>
            </div>

            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">{product.title} — Manufacturer & Supplier Pages</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Dedicated manufacturer and supplier landing page for India and each export country.
              </p>
              <div className="mt-3 space-y-3">
                {(["manufacturer", "supplier"] as const).map((role) => (
                  <div key={role}>
                    <p className="text-[11px] font-bold uppercase text-primary">{role}</p>
                    <div className="mt-1.5 flex max-h-40 flex-wrap gap-1.5 overflow-y-auto">
                      {countries.map((l) => (
                        <Link
                          key={`${role}-${l.slug}`}
                          to="/$product/$role/$location"
                          params={{ product: product.slug, role, location: l.slug }}
                          className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[11px] font-semibold hover:border-primary hover:text-primary"
                        >
                          <MapPin className="h-2.5 w-2.5 text-accent" /> {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">{product.title} — Target Markets</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Dedicated page for each of our 5 markets.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <Link
                    key={c.slug}
                    to="/hot-products/$slug/target-markets/$location"
                    params={{ slug: product.slug, location: c.slug }}
                    search={{ lang: undefined }}
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
    </>
  );
}
