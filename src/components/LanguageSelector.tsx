import { Languages } from "lucide-react";
import { languages, useLang, type LangCode } from "@/lib/i18n";

export function LanguageSelector({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang, setLang, t } = useLang();
  return (
    <label
      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
        variant === "dark" ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      <Languages className="h-4 w-4" />
      <span className="sr-only">{t("label.language")}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LangCode)}
        className={`max-w-[9.5rem] cursor-pointer rounded border px-1.5 py-1 text-xs font-semibold outline-none [color-scheme:light] ${
          variant === "dark"
            ? "border-primary-foreground/25 bg-primary-dark text-primary-foreground"
            : "border-input bg-background text-foreground"
        }`}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} className="bg-card text-card-foreground">
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
