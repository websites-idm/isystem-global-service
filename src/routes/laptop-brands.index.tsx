import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteLayout";
import { RelatedGrid, CTASection } from "@/components/site/BrandServicePage";
import { laptopBrands } from "@/data/site";

export const Route = createFileRoute("/laptop-brands/")({
  head: () => ({
    meta: [
      { title: "Laptop Brands We Service — iSystem" },
      { name: "description", content: "Certified repair for MacBook, Dell, HP, Lenovo, Asus and Acer laptops — genuine parts and 12-month warranty." },
      { property: "og:title", content: "Laptop Brands We Service" },
      { property: "og:description", content: "Every major laptop brand, expertly repaired." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/laptop-brands" },
    ],
    links: [{ rel: "canonical", href: "/laptop-brands" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Laptop Brands" title="Certified laptop service — from ultrabooks to workstations." subtitle="Genuine components, calibrated diagnostics and micro-soldering expertise across every leading laptop brand." />
      <RelatedGrid title="All Laptop Brands" items={laptopBrands} basePath="/laptop-brands" />
      <CTASection />
    </>
  ),
});