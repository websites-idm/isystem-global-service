import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { mobileBrands, laptopBrands, mobileServices, laptopServices } from "@/data/site";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths: string[] = [
          "/", "/about", "/contact",
          "/mobile-brands", "/laptop-brands",
          "/mobile-services", "/laptop-services",
          ...mobileBrands.map((b) => `/mobile-brands/${b.slug}`),
          ...laptopBrands.map((b) => `/laptop-brands/${b.slug}`),
          ...mobileServices.map((s) => `/mobile-services/${s.slug}`),
          ...laptopServices.map((s) => `/laptop-services/${s.slug}`),
        ];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});