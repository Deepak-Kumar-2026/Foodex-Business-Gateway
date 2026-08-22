import { abs } from "@/data/site";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, ArrowLeft, Truck, Wrench, Headphones } from "lucide-react";
import { getHotProduct, hotProducts } from "@/data/products";
import { getLocation, allLocations, countries } from "@/data/locations";
import { company } from "@/data/company";
import { SpecTable, ProductActions } from "@/components/ProductCard";
import { useLang, languages, type LangCode } from "@/lib/i18n";
import { marketCopy, rtlLangs } from "@/data/market-copy";

const langCodes = languages.map((l) => l.code) as readonly LangCode[];
const isLang = (v: unknown): v is LangCode => typeof v === "string" && (langCodes as readonly string[]).includes(v);
const langHref = (path: string, lang: LangCode) => abs(lang === "en" ? path : `${path}?lang=${lang}`);

export const Route = createFileRoute("/hot-products/$slug/target-markets/$location")({
  validateSearch: (search: Record<string, unknown>) => ({
    lang: isLang(search['lang']) ? (search['lang'] as LangCode) : undefined,
  }),
  loaderDeps: ({ search }) => ({ lang: search.lang }),
  loader: ({ params, deps }) => {
    const product = getHotProduct(params.slug);
    const location = getLocation(params.location);
    if (!product || !location) throw notFound();
    return { product, location, lang: (deps.lang ?? "en") as LangCode };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    const { product: p, location: l, lang } = loaderData;
    const path = `/hot-products/${params.slug}/target-markets/${params.location}`;
    const url = langHref(path, lang);
    const c = marketCopy(lang, {
      p: p.title,
      l: l.name,
      co: company.short,
      cap: p.capacity,
      mat: p.material,
      cities: l.cities.slice(0, 3).join(", "),
      hub: l.hub,
    });
    const title = c("metaTitle");
    const description = c("metaDesc").slice(0, 160);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: [
            `${p.title} in ${l.name}`,
            `${p.title} manufacturer ${l.name}`,
            `${p.category} supplier ${l.name}`,
            ...l.cities.map((c) => `${p.title} ${c}`),
            ...p.keywords.slice(0, 4),
          ].join(", "),
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:locale", content: lang === "en" ? "en_IN" : `${lang}_IN` },
        { property: "og:image", content: abs(p.image) },
        { name: "twitter:image", content: abs(p.image) },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hreflang: "x-default", href: langHref(path, "en") } as unknown as { rel: string; href: string },
        ...langCodes.map(
          (code) =>
            ({
              rel: "alternate",
              hreflang: code === "en" ? "en" : `${code}-IN`,
              href: langHref(path, code),
            }) as unknown as { rel: string; href: string },
        ),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${url}#product`,
            name: `${p.title} in ${l.name}`,
            description: p.summary,
            category: p.category,
            sku: `${p.slug}-${l.slug}`,
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
                name: `Do you supply the ${p.title} in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes. ${company.name} manufactures the ${p.title} in Ghaziabad and dispatches to ${l.cities.join(", ")} and all other locations in ${l.name}, including installation and operator training.`,
                },
              },
              {
                "@type": "Question",
                name: `What is the capacity of the ${p.title} available in ${l.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `The ${p.title} is offered in ${p.capacity} with ${p.material} construction and ${p.automation} operation, customisable for buyers in ${l.name}.`,
                },
              },
              {
                "@type": "Question",
                name: `How long does delivery to ${l.name} take?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    l.slug !== "india"
                      ? `Export orders to ${l.name} are typically dispatched in 3-5 weeks with complete documentation, sea or air freight to your nearest port.`
                      : `Delivery to ${l.hub} and other cities in ${l.name} usually takes 2-4 weeks from order confirmation.`,
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
              { "@type": "ListItem", position: 2, name: "Hot Products", item: abs("/hot-products") },
              { "@type": "ListItem", position: 3, name: p.title, item: abs(`/hot-products/${params.slug}`) },
              { "@type": "ListItem", position: 4, name: l.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ProductMarketPage,
});

function ProductMarketPage() {
  const { product, location, lang: urlLang } = Route.useLoaderData();
  const { t, lang: ctxLang } = useLang();
  const lang = urlLang !== "en" ? urlLang : ctxLang;
  const c = marketCopy(lang, {
    p: product.title,
    l: location.name,
    co: company.name,
    cap: product.capacity,
    mat: product.material,
    auto: product.automation,
    cities: location.cities.join(", "),
    hub: location.hub,
    n: allLocations.length,
  });
  const dir = rtlLangs.includes(lang) ? "rtl" : undefined;
  const isCountry = location.slug !== "india";
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
            <MapPin className="h-3 w-3" /> {location.name}
          </p>
          <h1 dir={dir} className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {c("h1")}
          </h1>
          <p dir={dir} className="mt-2 max-w-3xl text-sm text-primary-foreground/80">
            {c("hero")}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src={product.image}
              alt={`${product.title} supplied in ${location.name} by ${company.name}`}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-lg object-cover shadow-card"
            />

            <h2 dir={dir} className="mt-8 font-display text-xl font-bold">
              {c("specs")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{product.summary}</p>
            <div className="mt-3 card-surface p-4">
              <SpecTable specs={product.specs} />
            </div>

            <h2 dir={dir} className="mt-8 font-display text-xl font-bold">{c("cities")}</h2>
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

            <div className="mt-6 flex flex-wrap gap-2">
              {(["manufacturer", "supplier"] as const).map((role) => (
                <Link
                  key={role}
                  to="/$product/$role/$location"
                  params={{ product: product.slug, role, location: location.slug }}
                  className="rounded-md accent-gradient px-3 py-1.5 text-xs font-bold text-accent-foreground"
                >
                  {product.title} {role} in {location.name}
                </Link>
              ))}
            </div>


            <h2 dir={dir} className="mt-8 font-display text-xl font-bold">{c("features")}</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-accent">▪</span> {f}
                </li>
              ))}
            </ul>

            <h2 dir={dir} className="mt-8 font-display text-xl font-bold">
              {c("buying")}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                [
                  Truck,
                  isCountry ? c("export") : c("dispatch"),
                  isCountry ? c("exportBody") : c("dispatchBody"),
                ],
                [Wrench, c("install"), c("installBody")],
                [Headphones, c("support"), c("supportBody")],
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

            <h2 dir={dir} className="mt-8 font-display text-xl font-bold">{c("faq")}</h2>
            <div className="mt-2 space-y-2">
              <details className="card-surface p-4" open>
                <summary dir={dir} className="cursor-pointer text-sm font-bold">{c("faq1q")}</summary>
                <p dir={dir} className="mt-2 text-sm text-muted-foreground">{c("faq1a")}</p>
              </details>
              <details className="card-surface p-4">
                <summary dir={dir} className="cursor-pointer text-sm font-bold">{c("faq2q")}</summary>
                <p dir={dir} className="mt-2 text-sm text-muted-foreground">{c("faq2a")}</p>
              </details>
              <details className="card-surface p-4">
                <summary dir={dir} className="cursor-pointer text-sm font-bold">{c("faq3q")}</summary>
                <p dir={dir} className="mt-2 text-sm text-muted-foreground">
                  {isCountry ? c("faq3aExport") : c("faq3a")}
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
              <h2 dir={dir} className="font-display text-base font-bold">{c("overview")}</h2>
              <dl className="mt-3 space-y-2 text-sm">
                {[
                  [t("label.capacity"), product.capacity],
                  [t("label.material"), product.material],
                  [t("label.power"), product.power],
                  [t("label.automation"), product.automation],
                  [c("market"), location.name],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-border pb-1.5 last:border-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <ProductActions name={`${product.title} — ${location.name}`} className="mt-4" />
              <p className="mt-3 text-xs text-muted-foreground">
                {t("label.director")}: {company.director} · {company.phone}
              </p>
            </div>

            <div className="card-surface p-5">
              <h2 dir={dir} className="font-display text-base font-bold">{c("others")}</h2>
              <ul className="mt-3 space-y-1.5">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/hot-products/$slug/target-markets/$location"
                      params={{ slug: p.slug, location: location.slug }}
                      search={{ lang: undefined }}
                      className="block rounded-md border border-border px-3 py-2 text-xs font-semibold hover:border-primary hover:text-primary"
                    >
                      {p.title} in {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-5">
              <h2 dir={dir} className="font-display text-base font-bold">
                {c("otherCountries")}
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {nearby.map((l) => (
                  <Link
                    key={l.slug}
                    to="/hot-products/$slug/target-markets/$location"
                    params={{ slug: product.slug, location: l.slug }}
                    search={{ lang: undefined }}
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
                {c("allMachines")}
              </Link>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {c("covered")}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
