export type RoleSlug = "manufacturer" | "supplier";

export type Role = {
  slug: RoleSlug;
  label: string;
  labelPlural: string;
  /** Short intent phrase used in titles: "{product} manufacturer in {location}" */
  intent: string;
  blurb: string;
};

export const roles: Role[] = [
  {
    slug: "manufacturer",
    label: "Manufacturer",
    labelPlural: "Manufacturers",
    intent: "manufacturer",
    blurb:
      "Built in our own Ghaziabad fabrication unit — heavy-gauge stainless steel, in-house machining, load testing and factory acceptance before dispatch.",
  },
  {
    slug: "supplier",
    label: "Supplier",
    labelPlural: "Suppliers",
    intent: "supplier",
    blurb:
      "Ready stock and made-to-order supply with fast dispatch, spare-parts availability, on-site installation and operator training after delivery.",
  },
];

export const roleSlugs = roles.map((r) => r.slug);

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}
