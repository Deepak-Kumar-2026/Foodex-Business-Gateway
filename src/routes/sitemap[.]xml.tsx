import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/data/site";
import { hotProducts } from "@/data/products";
import { allLocations } from "@/data/locations";
import { roleSlugs } from "@/data/roles";

const staticPaths = ["/", "/about-us", "/products", "/hot-products", "/target-markets", "/contact-us"];

function buildSitemap() {
  const urls = [
    ...staticPaths.map((p) => ({ loc: p, priority: p === "/" ? "1.0" : "0.8" })),
    ...hotProducts.map((p) => ({ loc: `/hot-products/${p.slug}`, priority: "0.9" })),
    ...allLocations.map((l) => ({ loc: `/target-markets/${l.slug}`, priority: "0.7" })),
    ...hotProducts.flatMap((p) =>
      allLocations.map((l) => ({
        loc: `/hot-products/${p.slug}/target-markets/${l.slug}`,
        priority: "0.8" as const,
      })),
    ),
    ...hotProducts.flatMap((p) =>
      roleSlugs.flatMap((role) =>
        allLocations.map((l) => ({ loc: `/${p.slug}/${role}/${l.slug}`, priority: "0.9" })),
      ),
    ),
  ];

  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${SITE_URL}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
