// import { abs } from "@/data/site";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { ArrowRight, Factory, Globe2, ShieldCheck, Wrench, MapPin, Flame } from "lucide-react";
// import heroImg from "@/assets/hero-plant.jpg";
// import { company, waLink } from "@/data/company";
// import { hotProducts } from "@/data/products";
// import { countries } from "@/data/locations";
// import { roles } from "@/data/roles";
// import { HotProductCard } from "@/components/ProductCard";
// import { useLang } from "@/lib/i18n";
// import { useQuote } from "@/components/QuoteProvider";

// const title = "Foodex Engineering Works | Batch Fryer & Food Extruder Manufacturer India";
// const description =
//   "Ghaziabad manufacturer & exporter of industrial batch fryers, food extruder machines and soya nugget plants. Pan-India supply and export worldwide.";

// const faqs = [
//   {
//     q: "What machines does Foodex Engineering Works manufacture?",
//     a: "Industrial batch fryers, food extruder machines, soya nugget plants, food processing machines, packing machines and complete turnkey snack food lines.",
//   },
//   {
//     q: "Do you supply across all of India?",
//     a: "Yes. India is one of our five target markets — we manufacture in Ghaziabad and supply, install and service machinery anywhere in India, with dedicated manufacturer and supplier pages for India.",
//   },
//   {
//     q: "Which countries do you export to?",
//     a: "We export snack food machinery to South Africa, UAE, Nepal and the United Kingdom, including documentation and installation support.",
//   },
//   {
//     q: "How do I get a quotation?",
//     a: `Use the Get Quote form on any product or WhatsApp Director ${company.director} on ${company.phone} for a same-day quotation.`,
//   },
// ];

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title },
//       { name: "description", content: description },
//       {
//         name: "keywords",
//         content:
//           "batch fryer manufacturer, food extruder machine, soya nugget plant, food processing machines, snack plant manufacturer India, Ghaziabad",
//       },
//       { property: "og:title", content: title },
//       { property: "og:description", content: description },
//       { property: "og:type", content: "website" },
//       { property: "og:url", content: abs("/") },
//       { property: "og:image", content: abs(heroImg) },
//       { name: "twitter:image", content: abs(heroImg) },
//     ],
//     links: [{ rel: "canonical", href: abs("/") }],
//     scripts: [
//       {
//         type: "application/ld+json",
//         children: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "FAQPage",
//           mainEntity: faqs.map((f) => ({
//             "@type": "Question",
//             name: f.q,
//             acceptedAnswer: { "@type": "Answer", text: f.a },
//           })),
//         }),
//       },
//     ],
//   }),
//   component: Home,
// });

// function Home() {
//   const { t } = useLang();
//   const { openQuote } = useQuote();

//   return (
//     <>
//       <section className="relative isolate">
//         <img
//           src={heroImg}
//           alt="Snack food processing plant with batch fryers and extruders by Foodex Engineering Works"
//           width={1920}
//           height={1080}
//           className="absolute inset-0 -z-10 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 -z-10 hero-gradient" />
//         <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
//           <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
//             <Factory className="h-4 w-4" /> {t("home.eyebrow")}
//           </p>
//           <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
//             {t("home.title")}
//           </h1>
//           <p className="mt-4 max-w-2xl text-sm text-primary-foreground/85 sm:text-base">{t("home.sub")}</p>
//           <div className="mt-7 flex flex-wrap gap-3">
//             <button
//               onClick={() => openQuote()}
//               className="rounded-md bg-primary-foreground px-5 py-3 text-sm font-bold text-primary shadow-lift"
//             >
//               {t("cta.quote")}
//             </button>
//             <a
//               href={waLink(`Hi ${company.director}, I need machine details from ${company.name}.`)}
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-md accent-gradient px-5 py-3 text-sm font-bold text-accent-foreground"
//             >
//               {t("cta.whatsapp")} {company.phone}
//             </a>
//             <Link
//               to="/hot-products"
//               className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-bold text-primary-foreground"
//             >
//               {t("nav.hot")} <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//           <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
//             {[
//               ["5", "Target Markets"],
//               ["4", "Export Countries"],
//               ["9", "Hot Product Lines"],
//               ["SS 304", "Food Grade Build"],
//             ].map(([v, l]) => (
//               <div key={l} className="rounded-lg bg-primary-foreground/10 p-3">
//                 <dt className="font-display text-xl font-extrabold text-primary-foreground">{v}</dt>
//                 <dd className="text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/70">{l}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </section>

//       <section className="section-pad bg-background">
//         <div className="mx-auto max-w-7xl px-4">
//           <div className="flex flex-wrap items-end justify-between gap-4">
//             <div>
//               <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent">
//                 <Flame className="h-4 w-4" /> {t("home.hotHeading")}
//               </p>
//               <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">{t("home.hotHeading")}</h2>
//               <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{t("home.hotSub")}</p>
//             </div>
//             <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent">
//               {t("cta.viewAll")} <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {hotProducts.map((p) => (
//               <HotProductCard key={p.slug} product={p} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-pad bg-surface">
//         <div className="mx-auto max-w-7xl px-4">
//           <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t("home.whyHeading")}</h2>
//           <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               [ShieldCheck, "SS 304 Food Grade Build", "Every contact part is food grade stainless steel, built for 16+ hour shifts."],
//               [Wrench, "In-House Engineering", "Machines designed, fabricated and trial-run at our Ghaziabad works before dispatch."],
//               [Globe2, "India & Export Markets", "Manufacturer and supplier for India, South Africa, UAE, Nepal and the UK."],
//               [Factory, "Turnkey Plants", "Complete lines from raw material handling to frying, seasoning and packing."],
//             ].map(([Icon, head, body]) => {
//               const I = Icon as typeof ShieldCheck;
//               return (
//                 <div key={head as string} className="card-surface p-5">
//                   <I className="h-7 w-7 text-accent" />
//                   <h3 className="mt-3 font-display text-base font-bold">{head as string}</h3>
//                   <p className="mt-1.5 text-sm text-muted-foreground">{body as string}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="section-pad bg-background">
//         <div className="mx-auto max-w-7xl px-4">
//           <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t("home.marketsHeading")}</h2>
//           <p className="mt-1 text-sm text-muted-foreground">
//             Five markets — India, South Africa, UAE, Nepal and the UK — each with dedicated manufacturer and supplier
//             pages for all 9 hot products.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {countries.map((c) => (
//               <Link
//                 key={c.slug}
//                 to="/target-markets/$slug"
//                 params={{ slug: c.slug }}
//                 className="inline-flex items-center gap-1.5 rounded-md accent-gradient px-3 py-2 text-xs font-bold text-accent-foreground"
//               >
//                 <Globe2 className="h-3.5 w-3.5" /> {c.name}
//               </Link>
//             ))}
//           </div>

//           {/* <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {hotProducts.map((p) => (
//               <div key={p.slug} className="card-surface p-4">
//                 <h3 className="font-display text-sm font-bold">
//                   <Link to="/hot-products/$slug" params={{ slug: p.slug }} className="hover:text-primary">
//                     {p.title}
//                   </Link>
//                 </h3>
//                 <div className="mt-2 flex flex-wrap gap-1.5">
//                   {countries.map((c) =>
//                     roles.map((r) => (
//                       <Link
//                         key={`${c.slug}-${r.slug}`}
//                         to="/$product/$role/$location"
//                         params={{ product: p.slug, role: r.slug, location: c.slug }}
//                         className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[11px] font-semibold hover:border-primary hover:text-primary"
//                       >
//                         <MapPin className="h-2.5 w-2.5 text-accent" /> {r.label} in {c.name}
//                       </Link>
//                     )),
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </section>

//       <section className="section-pad bg-surface">
//         <div className="mx-auto max-w-4xl px-4">
//           <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t("label.faq")}</h2>
//           <div className="mt-6 space-y-3">
//             {faqs.map((f) => (
//               <details key={f.q} className="card-surface p-4">
//                 <summary className="cursor-pointer font-display text-sm font-bold">{f.q}</summary>
//                 <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { abs } from "@/data/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Globe2, ShieldCheck, Wrench, MapPin, Flame } from "lucide-react";
import heroImg from "@/assets/hero-plant.jpg";
import { company, waLink } from "@/data/company";
import { hotProducts } from "@/data/products";
import { countries } from "@/data/locations";
import { roles } from "@/data/roles";
import { HotProductCard } from "@/components/ProductCard";
import { useLang } from "@/lib/i18n";
import { useQuote } from "@/components/QuoteProvider";

const title = "Foodex Engineering Works | Batch Fryer & Food Extruder Manufacturer India";

const description =
  "Ghaziabad manufacturer & exporter of industrial batch fryers, food extruder machines and soya nugget plants. Pan-India supply and export worldwide.";

const faqs = [
  {
    q: "What machines does Foodex Engineering Works manufacture?",
    a: "Industrial batch fryers, food extruder machines, soya nugget plants, food processing machines, packing machines and complete turnkey snack food lines.",
  },
  {
    q: "Do you supply across all of India?",
    a: "Yes. India is one of our five target markets — we manufacture in Ghaziabad and supply, install and service machinery anywhere in India, with dedicated manufacturer and supplier pages for India.",
  },
  {
    q: "Which countries do you export to?",
    a: "We export snack food machinery to South Africa, UAE, Nepal and the United Kingdom, including documentation and installation support.",
  },
  {
    q: "How do I get a quotation?",
    a: `Use the Get Quote form on any product or WhatsApp Director ${company.director} on ${company.phone} for a same-day quotation.`,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "batch fryer manufacturer, food extruder machine, soya nugget plant, food processing machines, snack plant manufacturer India, Ghaziabad",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/") },
      { property: "og:image", content: abs(heroImg) },
      { name: "twitter:image", content: abs(heroImg) },
    ],

    links: [{ rel: "canonical", href: abs("/") }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }),
      },
    ],
  }),

  component: Home,
});

function Home() {
  const { t } = useLang();
  const { openQuote } = useQuote();

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Snack food processing plant with batch fryers and extruders by Foodex Engineering Works"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 hero-gradient" />

        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            <Factory className="h-4 w-4" />
            {t("home.eyebrow")}
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {t("home.title")}
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/85 sm:text-base">
            {t("home.sub")}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => openQuote()}
              className="rounded-md bg-primary-foreground px-5 py-3 text-sm font-bold text-primary shadow-lift"
            >
              {t("cta.quote")}
            </button>

            <a
              href={waLink(`Hi ${company.director}, I need machine details from ${company.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-md accent-gradient px-5 py-3 text-sm font-bold text-accent-foreground"
            >
              {t("cta.whatsapp")} {company.phone}
            </a>

            <Link
              to="/hot-products"
              className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              {t("nav.hot")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["5", "Target Markets"],
              ["4", "Export Countries"],
              ["9", "Hot Product Lines"],
              ["SS 304", "Food Grade Build"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-lg bg-primary-foreground/10 p-3">
                <dt className="font-display text-xl font-extrabold text-primary-foreground">{v}</dt>

                <dd className="text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/70">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= HOT PRODUCTS ================= */}

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                <Flame className="h-4 w-4" />
                {t("home.hotHeading")}
              </p>

              <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                {t("home.hotHeading")}
              </h2>

              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{t("home.hotSub")}</p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent"
            >
              {t("cta.viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hotProducts.map((p) => (
              <HotProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}

      <section id="social-media" className="section-pad scroll-mt-10 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="border-b border-border pb-5">
              <p className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-accent-foreground">
                OFFICIAL SOCIAL MEDIA HUBS
              </p>

              <h2 className="mt-3 font-display text-2xl font-extrabold text-primary sm:text-3xl">
                CONNECT WITH FOODEX ENGINEERING WORKS
              </h2>

              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                Explore live factory operations, machine demonstrations, new arrivals and customer
                deliveries on our official social channels.
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {/* YOUTUBE */}
              <div className="rounded-xl bg-[#0d162b] p-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-red-600 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">
                  YOUTUBE CHANNEL
                </span>

                <h3 className="mt-5 font-display text-lg font-extrabold uppercase">
                  VISIT OUR YOUTUBE CHANNEL
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Watch machinery demonstrations, factory operations and machine working videos.
                </p>

                <a
                  href="https://www.youtube.com/@foodaxengineeringworks2863"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-xs font-extrabold uppercase text-white hover:bg-red-700"
                >
                  YOUTUBE
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* INSTAGRAM */}
              <div className="rounded-xl bg-[#171326] p-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">
                  INSTAGRAM PROFILE
                </span>

                <h3 className="mt-5 font-display text-lg font-extrabold uppercase">
                  FOLLOW US ON INSTAGRAM
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Get factory updates, machine dispatch photos, customer deliveries and product
                  launches.
                </p>

                <a
                  href="https://www.instagram.com/foodaxengineeringworks/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-4 py-3 text-xs font-extrabold uppercase text-white"
                >
                  INSTAGRAM
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* FACEBOOK */}
              <div className="rounded-xl bg-[#101a35] p-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">
                  FACEBOOK PROFILE
                </span>

                <h3 className="mt-5 font-display text-lg font-extrabold uppercase">
                  FOLLOW US ON FACEBOOK
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Stay connected for machine news, customer updates and industrial announcements.
                </p>

                <a
                  href="https://www.facebook.com/foodaxengineeringworks"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-xs font-extrabold uppercase text-white hover:bg-blue-700"
                >
                  FACEBOOK
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            {t("home.whyHeading")}
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                ShieldCheck,
                "SS 304 Food Grade Build",
                "Every contact part is food grade stainless steel, built for 16+ hour shifts.",
              ],
              [
                Wrench,
                "In-House Engineering",
                "Machines designed, fabricated and trial-run at our Ghaziabad works before dispatch.",
              ],
              [
                Globe2,
                "India & Export Markets",
                "Manufacturer and supplier for India, South Africa, UAE, Nepal and the UK.",
              ],
              [
                Factory,
                "Turnkey Plants",
                "Complete lines from raw material handling to frying, seasoning and packing.",
              ],
            ].map(([Icon, head, body]) => {
              const I = Icon as typeof ShieldCheck;

              return (
                <div key={head as string} className="card-surface p-5">
                  <I className="h-7 w-7 text-accent" />

                  <h3 className="mt-3 font-display text-base font-bold">{head as string}</h3>

                  <p className="mt-1.5 text-sm text-muted-foreground">{body as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TARGET MARKETS ================= */}

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            {t("home.marketsHeading")}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Five markets — India, South Africa, UAE, Nepal and the UK — each with dedicated
            manufacturer and supplier pages for all 9 hot products.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {countries.map((c) => (
              <Link
                key={c.slug}
                to="/target-markets/$slug"
                params={{ slug: c.slug }}
                className="inline-flex items-center gap-1.5 rounded-md accent-gradient px-3 py-2 text-xs font-bold text-accent-foreground"
              >
                <Globe2 className="h-3.5 w-3.5" />
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{t("label.faq")}</h2>

          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card-surface p-4">
                <summary className="cursor-pointer font-display text-sm font-bold">{f.q}</summary>

                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
