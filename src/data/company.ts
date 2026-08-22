import { SITE_URL } from "./site";

// export const company = {
//   name: "Foodex Engineering Works",
//   short: "Foodex",
//   tagline: "Snack Food Processing Machinery Manufacturer & Exporter",
//   director: "Bharat Bhusan Sharma",
//   gstin: "09BASPS3724A2ZI",
//   address:
//     "Ground Floor, KH No 1284 Industrial Area Morta, Morta, Pillar No 698, Ghaziabad - 201001, Uttar Pradesh, India",
//   city: "Ghaziabad",
//   state: "Uttar Pradesh",
//   postalCode: "201001",
//   email: "foodaxengworks@gmail.com",
//   phone: "+91-9599763232",
//   phoneRaw: "+919599763232",
//   whatsapp: "+91-9599763232",
//   social: {
//     youtube: "https://www.youtube.com/",
//     instagram: "https://www.instagram.com/",
//     facebook: "https://www.facebook.com/",
//   },
//   established: "Snack & food processing plant engineering",
// };

export const company = {
  name: "Foodax Engineering Works",
  short: "Foodax",
  tagline: "Snack Food Processing Machinery Manufacturer & Exporter",

  director: "Bharat Bhusan Sharma",

  gstin: "09BASPS3724A2ZI",

  address:
    "Ground Floor, KH No 1284 Industrial Area Morta, Morta, Pillar No 698, Ghaziabad - 201001, Uttar Pradesh, India",

  city: "Ghaziabad",
  state: "Uttar Pradesh",
  postalCode: "201001",

  email: "foodaxengworks@gmail.com",

  phone: "+91-9599763232",
  phoneRaw: "+919599763232",
  whatsapp: "+91-9599763232",

  social: {
    youtube: "https://www.youtube.com/@foodaxengineeringworks2863",
    instagram: "https://www.instagram.com/foodaxengineeringworks/",
    facebook: "https://www.facebook.com/foodaxengineeringworks",
  },

  established: "2014",

  batchFryer: {
    title: "Batch Fryer",
    url: "https://foodaxengineering.com/batch_fryers.php",
  },
};
export function waLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  url: SITE_URL,
  image: `${SITE_URL}/favicon.png`,
  logo: `${SITE_URL}/favicon.png`,
  priceRange: "On request",
  description:
    "Manufacturer and exporter of industrial batch fryers, food extruder machines, soya nugget plants and food processing machines.",
  telephone: company.phone,
  email: company.email,
  taxID: company.gstin,
  founder: { "@type": "Person", name: company.director },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, KH No 1284 Industrial Area Morta, Pillar No 698",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201001",
    addressCountry: "IN",
  },
  areaServed: ["India", "South Africa", "United Arab Emirates", "Nepal", "United Kingdom"],
  sameAs: [company.social.youtube, company.social.instagram, company.social.facebook],
};
