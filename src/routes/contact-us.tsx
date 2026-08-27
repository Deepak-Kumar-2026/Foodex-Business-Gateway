import { abs } from "@/data/site";
import heroImg from "@/assets/hero-plant.jpg";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  BadgeCheck,
  Youtube,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react";
import { company, waLink } from "@/data/company";
import { useLang } from "@/lib/i18n";

const title = "Contact Us | Foodex Engineering Works Ghaziabad";
const description =
  "Contact Foodex Engineering Works, Ghaziabad for batch fryers, extruders and food processing machines. Call +91-95997 63232 or WhatsApp Director Bharat Bhusan Sharma.";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/contact-us") },
      { property: "og:image", content: abs(heroImg) },
      { name: "twitter:image", content: abs(heroImg) },
    ],
    links: [{ rel: "canonical", href: abs("/contact-us") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const field =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25";

  return (
    <>
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-primary-foreground/80">
            Talk to our engineering team about capacity, layout and pricing. Lead response within
            one working day.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2">
          <div className="card-surface p-6">
            <h2 className="font-display text-xl font-bold">Lead Generation / Enquiry Form</h2>
            {sent ? (
              <div className="mt-5 flex items-center gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="text-sm font-semibold text-secondary-foreground">
                  {t("form.thanks")}
                </p>
              </div>
            ) : (
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("form.name")}*</span>
                    <input required className={field} />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("form.phone")}*</span>
                    <input required className={field} />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("form.email")}</span>
                    <input type="email" className={field} />
                  </label>
                  <label className="text-sm">
                    <span className="mb-1 block font-medium">{t("form.city")}</span>
                    <input className={field} />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium">{t("form.message")}</span>
                  <textarea rows={4} className={field} />
                </label>
                <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-dark">
                  <Send className="h-4 w-4" /> {t("form.submit")}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="card-surface p-6">
              <h2 className="font-display text-xl font-bold">{company.name}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{" "}
                  <span>{company.address}</span>
                </li>
                <li className="flex gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`tel:${company.phoneRaw}`} className="font-semibold hover:text-primary">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-2">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a
                    href={waLink("Hi, I want a quotation.")}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:text-primary"
                  >
                    WhatsApp {company.phone}
                  </a>
                </li>
                <li className="flex gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-2">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{" "}
                  <span>GSTIN: {company.gstin}</span>
                </li>
              </ul>
              {/* <div className="mt-5 flex gap-2">
                <a href={company.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-md bg-secondary p-2 text-primary hover:bg-accent-soft">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-md bg-secondary p-2 text-primary hover:bg-accent-soft">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-md bg-secondary p-2 text-primary hover:bg-accent-soft">
                  <Facebook className="h-5 w-5" />
                </a>
              </div> */}
              <div className="mt-5 flex gap-2">
                {/* YouTube */}
                <a
                  href={company.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-[#FF0000] transition hover:bg-accent-soft"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.6 3.9-6.6 3.9Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-[#E4405F] transition hover:bg-accent-soft"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-[#1877F2] transition hover:bg-accent-soft"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.7-1.5h1.5V4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.8 1.4-3.8 4v2.1H8v3h2.7v8h2.8Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Foodex Engineering Works location map"
                src="https://www.google.com/maps?q=Industrial+Area+Morta+Ghaziabad&output=embed"
                loading="lazy"
                className="h-72 w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
