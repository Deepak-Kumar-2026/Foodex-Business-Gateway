import { abs } from "@/data/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, BadgeCheck, User, Factory } from "lucide-react";
import heroImg from "@/assets/hero-plant.jpg";
import { company } from "@/data/company";
import { hotProducts } from "@/data/products";
import { useLang } from "@/lib/i18n";
import { useQuote } from "@/components/QuoteProvider";

const title = "About Us | Foodax Engineering Works, Ghaziabad";
const description =
  "Foodex Engineering Works is a Ghaziabad based manufacturer of snack food processing machinery led by Director Mr. Bharat Bhushan. GSTIN 09BASPS3724A2ZI.";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/about-us") },
      { property: "og:image", content: abs(heroImg) },
      { name: "twitter:image", content: abs(heroImg) },
    ],
    links: [{ rel: "canonical", href: abs("/about-us") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  const { openQuote } = useQuote();

  return (
    <>
      <section className="relative isolate">
        <img src={heroImg} alt="Foodex Engineering Works manufacturing unit" loading="lazy" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            About {company.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-primary-foreground/85">
            Engineering snack food and food processing machinery from Ghaziabad, Uttar Pradesh for customers
            across India and export markets.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold">Our Company</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                {company.name} is a manufacturer, supplier and exporter of industrial food processing machinery
                with a specialisation in snack food plants. Our product range covers industrial batch fryers,
                food extruder machines, soya nugget plants, roasters, masala coating drums, cutters, de-oilers
                and automatic packing machines.
              </p>
              <p>
                Every machine is engineered in-house from SS 304 food grade stainless steel, assembled and
                trial-run at our Ghaziabad works before dispatch. We handle complete turnkey projects — plant
                layout, utility planning, installation, commissioning and operator training — so that customers
                can start commercial production quickly and confidently.
              </p>
              <p>
                Under the leadership of Director <strong className="text-foreground">{company.director}</strong>,
                the company serves snack manufacturers, namkeen units, food startups and large FMCG contract
                manufacturers across India and exports to South Africa, UAE, Nepal and the UK.
              </p>
            </div>

            <h2 className="mt-10 font-display text-2xl font-extrabold">What We Manufacture</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {hotProducts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/hot-products/$slug"
                    params={{ slug: p.slug }}
                    className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold hover:border-primary hover:text-primary"
                  >
                    <Factory className="h-4 w-4 text-accent" /> {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="card-surface h-fit p-5">
            <h2 className="font-display text-lg font-bold">Company Details</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <User className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <strong>{t("label.director")}:</strong> {company.director}
                </span>
              </li>
              <li className="flex gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <strong>GSTIN:</strong> {company.gstin}
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-primary">{company.phone}</a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-primary">{company.email}</a>
              </li>
            </ul>
            <button
              onClick={() => openQuote("General enquiry")}
              className="mt-5 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-dark"
            >
              {t("cta.quote")}
            </button>
          </aside>
        </div>
      </section>
    </>
  );
}
