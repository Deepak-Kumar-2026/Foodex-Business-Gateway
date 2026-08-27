import { useEffect, useState } from "react";
import { X, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import { useLang } from "@/lib/i18n";

export function GetQuoteModal({
  product,
  onClose,
}: {
  product?: string | undefined;
  onClose: () => void;
}) {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    product: product ?? "",
    capacity: "",
    message: "",
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const field =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

  const summary = `Quotation Request%0A${form.product || "Machine enquiry"}%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email || "-"}%0ACity: ${form.city || "-"}%0ACapacity: ${form.capacity || "-"}%0ADetails: ${form.message || "-"}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Quotation Request

Product: ${form.product || "Machine enquiry"}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "-"}
City / Country: ${form.city || "-"}
Capacity: ${form.capacity || "-"}
Details: ${form.message || "-"}

Thank you.`;

    const whatsappUrl = `https://wa.me/919599763232?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="my-6 w-full max-w-2xl rounded-xl bg-card shadow-lift"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Get Quote"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between gap-4 rounded-t-xl bg-primary px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-bold text-primary-foreground">
              {t("cta.quote")} — {company.short}
            </h2>

            <p className="text-xs text-primary-foreground/75">
              {t("label.gstin")}: {company.gstin} · {company.phone}
            </p>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1 rounded-md bg-primary-foreground/15 px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/25"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>

        {/* AFTER SUBMIT */}
        {sent ? (
          <div className="space-y-4 p-6">
            <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />

              <p className="text-sm font-semibold text-secondary-foreground">
                {t("form.thanks")}
              </p>
            </div>

            {/* QUOTATION SUMMARY */}
            <div className="card-surface p-4 text-sm">
              <h3 className="mb-2 font-display font-bold">
                Quotation Summary
              </h3>

              <dl className="grid gap-1 sm:grid-cols-2">
                {[
                  ["Name", form.name],
                  ["Phone", form.phone],
                  ["Email", form.email],
                  ["City / Country", form.city],
                  ["Product", form.product],
                  ["Capacity", form.capacity],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <dt className="text-muted-foreground">{k}:</dt>

                    <dd className="font-medium">
                      {v || "-"}
                    </dd>
                  </div>
                ))}
              </dl>

              {form.message && (
                <p className="mt-2 text-muted-foreground">
                  {form.message}
                </p>
              )}
            </div>

            {/* AFTER SUBMIT WHATSAPP */}
            <div className="flex flex-wrap gap-2">
              <a
                href={`https://wa.me/919599763232?text=${encodeURIComponent(
                  `Quotation Request

Product: ${form.product || "Machine enquiry"}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "-"}
City / Country: ${form.city || "-"}
Capacity: ${form.capacity || "-"}
Details: ${form.message || "-"}

Thank you.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md accent-gradient px-4 py-2 text-sm font-semibold text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {t("chat.continue")}
              </a>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-md border border-input px-4 py-2 text-sm font-semibold"
              >
                <X className="h-4 w-4" />
                {t("form.close")}
              </button>
            </div>
          </div>
        ) : (
          /* FORM */
          <form
            className="space-y-3 p-5"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-3 sm:grid-cols-2">

              {/* NAME */}
              <label className="block text-sm">
                <span className="mb-1 block font-medium">
                  {t("form.name")}*
                </span>

                <input
                  required
                  className={field}
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </label>

              {/* PHONE */}
              <label className="block text-sm">
                <span className="mb-1 block font-medium">
                  {t("form.phone")}*
                </span>

                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  className={field}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />
              </label>

              {/* EMAIL */}
              <label className="block text-sm">
                <span className="mb-1 block font-medium">
                  {t("form.email")}
                </span>

                <input
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </label>

              {/* CITY */}
              <label className="block text-sm">
                <span className="mb-1 block font-medium">
                  {t("form.city")}
                </span>

                <input
                  className={field}
                  value={form.city}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      city: e.target.value,
                    })
                  }
                />
              </label>

              {/* PRODUCT */}
              <label className="block text-sm">
                <span className="mb-1 block font-medium">
                  {t("form.product")}
                </span>

                <input
                  className={field}
                  value={form.product}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      product: e.target.value,
                    })
                  }
                />
              </label>

              {/* CAPACITY */}
              <label className="block text-sm">
                <span className="mb-1 block font-medium">
                  {t("form.capacity")}
                </span>

                <input
                  className={field}
                  placeholder="e.g. 100 kg/hr"
                  value={form.capacity}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      capacity: e.target.value,
                    })
                  }
                />
              </label>
            </div>

            {/* MESSAGE */}
            <label className="block text-sm">
              <span className="mb-1 block font-medium">
                {t("form.message")}
              </span>

              <textarea
                rows={3}
                className={field}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              />
            </label>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-2 pt-1">

              {/* SUBMIT ONLY */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
              >
                <Send className="h-4 w-4" />
                {t("form.submit")}
              </button>

              {/* CLOSE */}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-md border border-input px-4 py-2 text-sm font-semibold"
              >
                <X className="h-4 w-4" />
                {t("form.close")}
              </button>

            </div>
          </form>
        )}
      </div>
    </div>
  );
}