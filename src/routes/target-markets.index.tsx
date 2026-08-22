import { abs } from "@/data/site";
import heroImg from "@/assets/hero-plant.jpg";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Globe2 } from "lucide-react";
import { countries } from "@/data/locations";
import { roles } from "@/data/roles";
import { hotProducts } from "@/data/products";
import { company } from "@/data/company";

const title = "Target Markets | India, South Africa, UAE, Nepal & UK — Foodex";
const description =
  "Snack food machinery manufacturer & supplier for India, South Africa, UAE, Nepal and the UK. Manufacturer and supplier pages for all 9 hot products.";

export const Route = createFileRoute("/target-markets/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "batch fryer manufacturer in India, food extruder supplier South Africa, snack machinery UAE, food processing machine Nepal, snack plant UK",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/target-markets") },
      { property: "og:image", content: abs(heroImg) },
      { name: "twitter:image", content: abs(heroImg) },
    ],
    links: [{ rel: "canonical", href: abs("/target-markets") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Target Markets",
          itemListElement: countries.map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: l.name,
            item: abs(`/target-markets/${l.slug}`),
          })),
        }),
      },
    ],
  }),
  component: Markets,
});

function Markets() {
  const [active, setActive] = useState(hotProducts[0]!);

  return (
    <>
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Target Markets — India & International
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            {company.name} manufactures in Ghaziabad and supplies, installs and services food processing machinery in
            India, South Africa, UAE, Nepal and the United Kingdom — with a dedicated manufacturer and supplier page for
            every machine in every market.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-6">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Select a product to see its market pages
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {hotProducts.map((p) => (
              <button
                key={p.slug}
                onClick={() => setActive(p)}
                className={`flex items-center gap-2.5 rounded-lg border p-2 text-left ${
                  active.slug === p.slug ? "border-primary bg-card shadow-card" : "border-border bg-card/60 hover:border-primary/50"
                }`}
              >
                <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="h-11 w-16 shrink-0 rounded object-cover" />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">{p.title}</span>
                  <span className="text-[11px] text-muted-foreground">{p.capacity}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong className="text-foreground">{active.title}</strong> — {active.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {countries.map((c) =>
              roles.map((r) => (
                <Link
                  key={`${c.slug}-${r.slug}`}
                  to="/$product/$role/$location"
                  params={{ product: active.slug, role: r.slug, location: c.slug }}
                  className="rounded-md bg-accent px-2.5 py-1.5 text-[11px] font-bold text-accent-foreground"
                >
                  {active.title} {r.intent} in {c.name}
                </Link>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-extrabold">Our 5 Markets</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <div key={c.slug} className="card-surface p-5">
                <Globe2 className="h-6 w-6 text-accent" />
                <h3 className="mt-2 font-display text-lg font-bold">
                  <Link to="/target-markets/$slug" params={{ slug: c.slug }} className="hover:text-primary">
                    {c.name}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  <MapPin className="mr-1 inline h-3 w-3 text-accent" />
                  {c.cities.join(", ")}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {roles.map((r) => (
                    <Link
                      key={r.slug}
                      to="/$product/$role/$location"
                      params={{ product: active.slug, role: r.slug, location: c.slug }}
                      className="rounded border border-border px-2 py-1 text-[11px] font-semibold hover:border-primary hover:text-primary"
                    >
                      {r.label} in {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
