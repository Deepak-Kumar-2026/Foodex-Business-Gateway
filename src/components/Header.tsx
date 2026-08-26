import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Bot,
  Download,
} from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";
import { company, waLink } from "@/data/company";
import { useLang } from "@/lib/i18n";
import { useQuote } from "./QuoteProvider";

export function Header() {
  const { t } = useLang();
  const { openQuote } = useQuote();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about-us", label: t("nav.about") },
    { to: "/hot-products", label: t("nav.hot") },
    { to: "/products", label: t("nav.products") },
    { to: "/#social-media", label: "Social Links" },
    { to: "/target-markets", label: t("nav.markets") },
    { to: "/contact-us", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" />
              {company.phone}
            </a>

            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              {company.email}
            </a>

            <span className="hidden font-semibold text-primary-foreground/80 sm:inline">
              GSTIN: {company.gstin}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector variant="dark" />

            <span className="hidden items-center gap-2 sm:flex">
              {/* YouTube */}
              <a
                href={company.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-[#FF0000]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="4"
                    fill="currentColor"
                  />
                  <path d="M10 9L16 12L10 15V9Z" fill="white" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#E4405F]"
              >
                <svg
                  className="h-4 w-4"
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
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[#1877F2]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 21V13.2H16l.4-3h-2.9V8.3c0-.9.3-1.6 1.7-1.6h1.5V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4.1v2.2H8v3h2.5V21h3Z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <Logo />

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{
                  className: "bg-secondary text-primary",
                }}
                className="whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </Link>
            ))}

            {/* DOWNLOAD BROCHURE */}
            <a
              href="/brochure.pdf"
              download
              className="ml-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-accent px-3 py-2 text-sm font-bold text-accent-foreground transition hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>

            {/* AI CHAT */}
            <a
              href="#ai-chat"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold text-primary hover:bg-secondary"
            >
              <Bot className="h-4 w-4" />
              AI Chat
            </a>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <button
              onClick={() => openQuote()}
              className="whitespace-nowrap rounded-md bg-primary px-3.5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
            >
              {t("cta.quote")}
            </button>

            <a
              href={waLink(
                `Hi ${company.name}, I would like to know more about your machines.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md accent-gradient px-3.5 py-2 text-sm font-bold text-accent-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {t("cta.whatsapp")}
            </a>
          </div>

          <button
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}

            {/* MOBILE DOWNLOAD BROCHURE */}
            <a
              href="/brochure.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-3 py-2.5 text-sm font-bold text-accent-foreground"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>

            <div className="mt-2 flex gap-2">
              <button
                onClick={() => {
                  setOpen(false);
                  openQuote();
                }}
                className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-bold text-primary-foreground"
              >
                {t("cta.quote")}
              </button>

              <a
                href={waLink(
                  `Hi ${company.name}, I need details of your machines.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-md accent-gradient px-3 py-2 text-center text-sm font-bold text-accent-foreground"
              >
                {t("cta.whatsapp")}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}