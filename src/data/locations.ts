export type Location = {
  slug: string;
  name: string;
  kind: "country";
  country: string;
  /** Major buying cities used as content mentions (no separate city pages). */
  cities: string[];
  hub: string;
};

/**
 * Target markets: India plus 4 export countries.
 * Indian states are intentionally NOT separate markets — India is one country market.
 */
export const countries: Location[] = [
  {
    slug: "india",
    name: "India",
    kind: "country",
    country: "India",
    hub: "Ghaziabad",
    cities: ["Delhi NCR", "Mumbai", "Ahmedabad", "Bengaluru", "Kolkata", "Chennai", "Hyderabad", "Indore"],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    kind: "country",
    country: "South Africa",
    hub: "Johannesburg",
    cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"],
  },
  {
    slug: "uae",
    name: "UAE",
    kind: "country",
    country: "United Arab Emirates",
    hub: "Dubai",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
  },
  {
    slug: "nepal",
    name: "Nepal",
    kind: "country",
    country: "Nepal",
    hub: "Kathmandu",
    cities: ["Kathmandu", "Pokhara", "Biratnagar", "Birgunj", "Bhairahawa"],
  },
  {
    slug: "uk",
    name: "UK",
    kind: "country",
    country: "United Kingdom",
    hub: "London",
    cities: ["London", "Birmingham", "Manchester", "Leicester", "Glasgow"],
  },
];

export const allLocations: Location[] = countries;

export function getLocation(slug: string) {
  return allLocations.find((l) => l.slug === slug);
}
