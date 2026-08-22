import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";
import { Logo } from "./Logo";
import { company, waLink } from "@/data/company";
import { hotProducts } from "@/data/products";
import { countries } from "@/data/locations";
import { useLang } from "@/lib/i18n";
import footerLogo from "../assets/footerlogo.png";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 text-sm text-footer-foreground/70">
            Manufacturer and exporter of industrial batch fryers, food extruder machines, soya
            nugget plants and complete turnkey snack food processing lines.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-footer-foreground/20 px-3 py-1.5 text-xs font-semibold">
            <BadgeCheck className="h-4 w-4 text-accent" /> GSTIN: {company.gstin}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={company.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="rounded-md bg-footer-foreground/10 p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-md bg-footer-foreground/10 p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-md bg-footer-foreground/10 p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
            {t("footer.quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/", t("nav.home")],
              ["/about-us", t("nav.about")],
              ["/hot-products", t("nav.hot")],
              ["/products", t("nav.products")],
              ["/target-markets", t("nav.markets")],
              ["/contact-us", t("nav.contact")],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as string} className="text-footer-foreground/75 hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
            {t("footer.hotLinks")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {hotProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/hot-products/$slug"
                  params={{ slug: p.slug }}
                  className="text-footer-foreground/75 hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">
            {t("footer.contact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-footer-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${company.phoneRaw}`} className="hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
              <a
                href={waLink("Hi, I need machine details.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                WhatsApp: {company.phone}
              </a>
            </li>
          </ul>
          <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-accent">
            {t("footer.markets")}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/target-markets/$slug"
                  params={{ slug: c.slug }}
                  className="rounded border border-footer-foreground/20 px-2 py-1 text-footer-foreground/75 hover:border-accent hover:text-accent"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-footer-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-footer-foreground/60 sm:flex-row sm:items-center sm:justify-start">
          <p>
            © {new Date().getFullYear()} {company.name}. {t("footer.rights")}
          </p>

          <div className="flex items-center gap-3 sm:ml-8">
            {/* <span className="text-orange-500 whitespace-nowrap">Design and Developed by :</span> */}
            <span className="whitespace-nowrap">
              <span className="text-orange-500">Design</span>{" "}
              <span className="text-white">and</span>{" "}
              <span className="text-blue-400">Developed by :</span>
            </span>

            <span className="h-6 w-px bg-footer-foreground/30" />

            <img src={footerLogo} alt="Zolexo Mart" className="h-8 w-auto object-contain" />

            {/* <span className="whitespace-nowrap text-white sm:ml-4">
              Director – <span className="text-orange-500">{company.director}</span>
            </span> */}
            <span className="whitespace-nowrap text-white sm:ml-80">
              Director – <span className="text-orange-500">{company.director}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
