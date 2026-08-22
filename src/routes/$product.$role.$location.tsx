import { abs } from "@/data/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ArrowLeft, Truck, Wrench, Headphones, Factory } from "lucide-react";
import { getHotProduct, hotProducts } from "@/data/products";
import { getLocation, countries } from "@/data/locations";
import { getRole, roles } from "@/data/roles";
import { company } from "@/data/company";
import { SpecTable, ProductActions } from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/$product/$role/$location")({
  loader: ({ params }) => {
    const product = getHotProduct(params.product);
    const role = getRole(params.role);
    const location = getLocation(params.location);
    if (!product || !role || !location) throw notFound();
    return { product, role, location };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    const { product: p, role, location: l } = loaderData;
    const path = `/${params.product}/${params.role}/${params.location}`;
    const url = abs(path);
    const title = `${p.title} ${role.label} in ${l.name} | ${company.short}`;
    const description =
      `${p.title} ${role.intent} in ${l.name} — ${p.capacity}, ${p.material}. ${company.short}, Ghaziabad: supply, installation & spares in ${l.cities.slice(0, 2).join(", ")}.`.slice(
        0,
        160,
      );
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: [
            `${p.title} ${role.intent} in ${l.name}`,
            `${p.title} ${role.intent} ${l.name}`,
            `${p.category} ${role.intent} ${l.name}`,
            `best ${p.title} ${role.labelPlural.toLowerCase()} ${l.name}`,
            ...l.cities.map((c) => `${p.title} ${role.intent} ${c}`),
            ...p.keywords.slice(0, 4),
          ].join(", "),
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: abs(p.image) },
        { name: "twitter:image", content: abs(p.image) },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${url}#product`,
            name: `${p.title} ${role.label} in ${l.name}`,
            description: p.summary,
            category: p.category,
            sku: `${p.slug}-${role.slug}-${l.slug}`,
            image: [abs(p.image)],
            url,
            brand: { "@type": "Brand", name: company.name },
            manufacturer: {
              "@type": "Organization",
              "@id": `${abs("/")}#organization`,
              name: company.name,
              url: abs("/"),
              telephone: company.phone,
            },
            areaServed: {
              "@type": l.slug !== "india" ? "Country" : "AdministrativeArea",
              name: l.name,
              containsPlace: l.cities.map((c) => ({ "@type": "City", name: c })),
            },
            additionalProperty: [
              { "@type": "PropertyValue", name: "Capacity", value: p.capacity },
              { "@type": "PropertyValue", name: "Material", value: p.material },
              { "@type": "PropertyValue", name: "Power", value: p.power },
              { "@type": "PropertyValue", name: "Automation", value: p.automation },
              { "@type": "PropertyValue", name: "Business Role", value: role.label },
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
                name: `Who is a trusted ${p.title} ${role.intent} in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${company.name}, Ghaziabad (Director: ${company.director}) is a ${role.intent} of the ${p.title} serving ${l.cities.join(", ")} and all of ${l.name}.`,
                },
              },
              {
                "@type": "Question",
                name: `What is the capacity and price basis of the ${p.title} in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `The ${p.title} is offered in ${p.capacity} with ${p.material} body and ${p.automation} operation. Pricing depends on capacity and customisation — request a quotation for ${l.name}.`,
                },
              },
              {
                "@type": "Question",
                name: `Do you install the ${p.title} in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    l.slug !== "india"
                      ? `Yes. Export orders to ${l.name} ship in 3-5 weeks with full documentation, plus commissioning support at ${l.hub}.`
                      : `Yes. Delivery to ${l.hub} and other cities in ${l.name} takes 2-4 weeks, including installation and operator training.`,
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
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
              { "@type": "ListItem", position: 2, name: p.title, item: abs(`/hot-products/${p.slug}`) },
              { "@type": "ListItem", position: 3, name: role.label, item: url },
              { "@type": "ListItem", position: 4, name: l.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: RoleMarketPage,
});

function RoleMarketPage() {
  const { product, role, location } = Route.useLoaderData();
  const { t } = useLang();
  const isCountry = location.slug !== "india";
  const otherRole = roles.find((r) => r.slug !== role.slug)!;
  const others = hotProducts.filter((p) => p.slug !== product.slug).slice(0, 4);
  const nearby = countries.filter((l) => l.slug !== location.slug).slice(0, 12);

  return (
    <>
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            to="/hot-products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-foreground/80 hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> {product.title}
          </Link>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full accent-gradient px-2.5 py-1 text-[10px] font-bold uppercase text-accent-foreground">
            <Factory className="h-3 w-3" /> {role.label} · {location.name}
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {product.title} {role.label} in {location.name}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            {company.name} is a {role.intent} of the {product.title} ({product.capacity}, {product.material}) for buyers
            across {location.name} — {location.cities.join(", ")}. {role.blurb}
          </p>
          <Link
            to="/$product/$role/$location"
            params={{ product: product.slug, role: otherRole.slug, location: location.slug }}
            className="mt-4 inline-block rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground"
          >
            Looking for a {product.title} {otherRole.intent} in {location.name}?
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src={product.image}
              alt={`${product.title} ${role.intent} in ${location.name} — ${company.name}`}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-lg object-cover shadow-card"
            />

            <h2 className="mt-8 font-display text-xl font-bold">
              {product.title} Specifications — {location.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{product.summary}</p>
            <div className="mt-3 card-surface p-4">
              <SpecTable specs={product.specs} />
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">
              Cities we serve as {product.title} {role.intent} in {location.name}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {location.cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  <MapPin className="h-3 w-3" /> {city}
                </span>
              ))}
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">
              Looking for a {product.title} {otherRole.intent} in {location.name}?
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/$product/$role/$location"
                params={{ product: product.slug, role: otherRole.slug, location: location.slug }}
                className="inline-flex items-center gap-1 rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground"
              >
                {product.title} {otherRole.intent} in {location.name}
              </Link>
              <Link
                to="/hot-products/$slug/target-markets/$location"
                params={{ slug: product.slug, location: location.slug }}
                search={{ lang: undefined }}
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-bold hover:border-primary hover:text-primary"
              >
                {product.title} in {location.name}
              </Link>
            </div>


            <h2 className="mt-8 font-display text-xl font-bold">Why choose us as your {role.intent}</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-accent">▪</span> {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-xl font-bold">Buying in {location.name}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                [
                  Truck,
                  isCountry ? "Export Logistics" : "Dispatch",
                  isCountry
                    ? `Sea/air freight to ${location.hub} with complete export documentation.`
                    : `Road dispatch to ${location.hub} and across ${location.name} in 2-4 weeks.`,
                ],
                [
                  Wrench,
                  "Installation & Training",
                  `Our engineers install and commission the ${product.title} at your site and train operators.`,
                ],
                [Headphones, "After-Sales Support", `Spares and service support for ${location.name} buyers, direct from Ghaziabad.`],
              ].map(([Icon, head, body]) => {
                const I = Icon as typeof Truck;
                return (
                  <div key={head as string} className="card-surface p-4">
                    <I className="h-6 w-6 text-accent" />
                    <h3 className="mt-2 font-display text-sm font-bold">{head as string}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{body as string}</p>
                  </div>
                );
              })}
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">FAQs</h2>
            <div className="mt-2 space-y-2">
              <details className="card-surface p-4" open>
                <summary className="cursor-pointer text-sm font-bold">
                  Who is a trusted {product.title} {role.intent} in {location.name}?
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  {company.name}, Ghaziabad (Director: {company.director}) is a {role.intent} of the {product.title}{" "}
                  serving {location.cities.join(", ")} and all of {location.name}.
                </p>
              </details>
              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  What is the price of the {product.title} in {location.name}?
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pricing depends on capacity ({product.capacity}), material ({product.material}) and automation level (
                  {product.automation}). Request a quotation for a {location.name}-specific offer.
                </p>
              </details>
              <details className="card-surface p-4">
                <summary className="cursor-pointer text-sm font-bold">
                  Do you install the {product.title} in {location.name}?
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  {isCountry
                    ? `Yes — export orders to ${location.name} ship in 3-5 weeks with full documentation and commissioning support at ${location.hub}.`
                    : `Yes — delivery to ${location.hub} and other cities in ${location.name} takes 2-4 weeks including installation and operator training.`}
                </p>
              </details>
              {product.faqs.slice(0, 3).map((f) => (
                <details key={f.q} className="card-surface p-4">
                  <summary className="cursor-pointer text-sm font-bold">{f.q}</summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
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
                  ["Role", role.label],
                  ["Market", location.name],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-border pb-1.5 last:border-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <ProductActions
                name={`${product.title} — ${role.label} — ${location.name}`}
                className="mt-4"
              />
              <p className="mt-3 text-xs text-muted-foreground">
                {t("label.director")}: {company.director} · {company.phone}
              </p>
            </div>

            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Other machines — {role.label} in {location.name}
              </h2>
              <ul className="mt-3 space-y-1.5">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/$product/$role/$location"
                      params={{ product: p.slug, role: role.slug, location: location.slug }}
                      className="block rounded-md border border-border px-3 py-2 text-xs font-semibold hover:border-primary hover:text-primary"
                    >
                      {p.title} {role.intent} in {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-5">
              <h2 className="font-display text-base font-bold">
                Other markets
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {nearby.map((l) => (
                  <Link
                    key={l.slug}
                    to="/$product/$role/$location"
                    params={{ product: product.slug, role: role.slug, location: l.slug }}
                    className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[11px] font-semibold hover:border-primary hover:text-primary"
                  >
                    <MapPin className="h-2.5 w-2.5 text-accent" /> {l.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/target-markets/$slug"
                params={{ slug: location.slug }}
                className="mt-4 inline-block text-xs font-bold text-primary hover:text-accent"
              >
                All machines for {location.name}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
