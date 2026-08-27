import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, Download } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";
import { company, waLink } from "@/data/company";
import { useLang } from "@/lib/i18n";
import { useQuote } from "./QuoteProvider";

export function Header() {
  const { t } = useLang();
  const { openQuote } = useQuote();

  const [open, setOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about-us", label: t("nav.about") },
    { to: "/hot-products", label: t("nav.hot") },
    { to: "/products", label: t("nav.products") },
    { to: "/#social-media", label: "Social Links" },
    { to: "/target-markets", label: t("nav.markets") },
    { to: "/contact-us", label: t("nav.contact") },
  ];

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const isBrochureFormValid =
    fullName.trim().length > 0 &&
    /^[6-9]\d{9}$/.test(whatsappNumber) &&
    isValidEmail(email);

  const handleBrochureDownload = () => {
    const name = fullName.trim();
    const phone = whatsappNumber.trim();
    const gmail = email.trim();

    if (!name) return;

    if (!/^[6-9]\d{9}$/.test(phone)) return;

    if (!isValidEmail(gmail)) return;

    const brochureUrl = "/brochure.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = brochureUrl;
    downloadLink.download = "Foodex-Engineering-Works-Brochure.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    const message = `Hello,

I would like to download the Foodex Engineering Works brochure.

Name: ${name}
Phone Number: +91 ${phone}
Gmail: ${gmail}

Thank you.`;

    const whatsappUrl = `https://wa.me/919599763232?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setBrochureOpen(false);
    setFullName("");
    setWhatsappNumber("");
    setEmail("");
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">

        {/* TOP BAR */}
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

            {/* RIGHT TOP BAR */}
            <div className="flex items-center gap-3">

              {/* WHATSAPP */}
              <a
                href={waLink(
                  `Hi ${company.name}, I would like to know more about your machines.`
                )}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-[#25D366] transition hover:opacity-80"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.56 0 .27 5.29.27 11.8c0 2.08.54 4.1 1.56 5.88L.17 24l6.47-1.64a11.8 11.8 0 0 0 5.43 1.31h.01c6.5 0 11.79-5.29 11.79-11.8 0-3.15-1.23-6.11-3.35-8.39ZM12.08 21.7h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.84.97 1.03-3.74-.23-.38a9.87 9.87 0 0 1-1.51-5.26C2.13 6.27 6.59 1.8 12.08 1.8c2.66 0 5.16 1.04 7.04 2.93a9.91 9.91 0 0 1 2.91 7.05c0 5.49-4.46 9.92-9.95 9.92Zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.29-.48-2.46-1.52-.91-.81-1.52-1.81-1.7-2.11-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>

                <span>WhatsApp</span>
              </a>

              {/* LANGUAGE */}
              <LanguageSelector variant="dark" />

              {/* SOCIAL ICONS */}
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
                    <path
                      d="M10 9L16 12L10 15V9Z"
                      fill="white"
                    />
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

        {/* MAIN NAVBAR */}
        <div className="border-b border-border bg-background/95 backdrop-blur">

          <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-3 px-4 py-3">

            <Logo />

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex">

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
              <button
                type="button"
                onClick={() => setBrochureOpen(true)}
                className="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-accent px-3 py-2 text-sm font-bold text-accent-foreground transition hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </button>

              {/* GET QUOTE */}
              <button
                type="button"
                onClick={() => openQuote()}
                className="ml-3 inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-3.5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
              >
                {t("cta.quote")}
              </button>

            </nav>

            {/* MOBILE MENU */}
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

          {/* MOBILE NAV */}
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

              {/* MOBILE DOWNLOAD */}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setBrochureOpen(true);
                }}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-3 py-2.5 text-sm font-bold text-accent-foreground"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </button>

              <div className="mt-2 flex gap-2">

                {/* MOBILE GET QUOTE */}
                <button
                  onClick={() => {
                    setOpen(false);
                    openQuote();
                  }}
                  className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-bold text-primary-foreground"
                >
                  {t("cta.quote")}
                </button>

                {/* MOBILE WHATSAPP */}
                <a
                  href={waLink(
                    `Hi ${company.name}, I need details of your machines.`
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

      {/* ================= FREE BROCHURE POPUP ================= */}
      {brochureOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setBrochureOpen(false);
            }
          }}
        >

          <div className="relative w-full max-w-[440px] overflow-hidden rounded-2xl bg-background shadow-2xl">

            {/* POPUP HEADER */}
            <div className="flex items-center justify-between bg-[#10182b] px-5 py-4 text-white">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Download className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h2 className="text-base font-extrabold uppercase">
                    FREE DOWNLOAD BROCHURE
                  </h2>

                  <p className="text-[11px] text-white/60">
                    Food Processing Machinery • PDF Catalog
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() => setBrochureOpen(false)}
                className="rounded-md p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
                aria-label="Close brochure popup"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* FORM */}
            <div className="p-5">

              <p className="mb-4 text-xs leading-5 text-muted-foreground">
                Please provide your details to download the free PDF brochure.
              </p>

              {/* YOUR NAME */}
              <div>

                <label
                  htmlFor="brochure-full-name"
                  className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground"
                >
                  Your Name *
                </label>

                <input
                  id="brochure-full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />

              </div>

              {/* YOUR PHONE NUMBER */}
              <div className="mt-4">

                <label
                  htmlFor="brochure-whatsapp"
                  className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground"
                >
                  Your Phone Number *
                </label>

                <div className="flex h-11 w-full overflow-hidden rounded-lg border border-border bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">

                  <span className="flex shrink-0 items-center border-r border-border bg-secondary px-3 text-sm font-semibold text-foreground">
                    +91
                  </span>

                  <input
                    id="brochure-whatsapp"
                    type="tel"
                    value={whatsappNumber}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

                      setWhatsappNumber(onlyNumbers);
                    }}
                    placeholder="98765 43210"
                    required
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    autoComplete="tel"
                    className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground/60"
                  />

                </div>

                {whatsappNumber.length > 0 &&
                  (whatsappNumber.length < 10 ||
                    !/^[6-9]\d{9}$/.test(whatsappNumber)) && (
                    <p className="mt-1.5 text-[10px] font-semibold text-red-500">
                      Please enter a valid 10-digit mobile number.
                    </p>
                  )}

              </div>

              {/* YOUR GMAIL */}
              <div className="mt-4">

                <label
                  htmlFor="brochure-email"
                  className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground"
                >
                  Your Gmail *
                </label>

                <input
                  id="brochure-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  required
                  autoComplete="email"
                  className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />

                {email.length > 0 && !isValidEmail(email) && (
                  <p className="mt-1.5 text-[10px] font-semibold text-red-500">
                    Please enter a valid email address.
                  </p>
                )}

              </div>

              {/* DOWNLOAD */}
              <button
                type="button"
                onClick={handleBrochureDownload}
                disabled={!isBrochureFormValid}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 text-xs font-extrabold uppercase tracking-wide text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                FREE DOWNLOAD BROCHURE
              </button>

              <p className="mt-3 text-center text-[10px] text-muted-foreground">
                Enter your name, phone number and Gmail to download.
              </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
}