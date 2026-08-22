import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { company } from "@/data/company";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5">
      <img src={logo} alt={`${company.name} logo`} width={48} height={48} className="h-10 w-10 shrink-0 object-contain" />
      <span className="leading-tight">
        <span
          className={`block whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-tight sm:text-base ${
            variant === "dark" ? "text-footer-foreground" : "text-primary"
          }`}
        >
          Foodex <span className="text-accent">Engineering</span> Works
        </span>
        <span
          className={`block whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] ${
            variant === "dark" ? "text-footer-foreground/60" : "text-muted-foreground"
          }`}
        >
          Food Processing Machinery
        </span>
      </span>
    </Link>

  );
}
