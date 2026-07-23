import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteLayout";
import { RelatedGrid, CTASection } from "@/components/site/BrandServicePage";
import { mobileBrands } from "@/data/site";

export const Route = createFileRoute("/mobile-brands/")({
  head: () => ({
    meta: [
      { title: "Mobile Brands We Service — iSystem" },
      { name: "description", content: "Certified repair for Apple, Samsung, Google Pixel, OnePlus, Xiaomi and every leading smartphone brand." },
      { property: "og:title", content: "Mobile Brands We Service" },
      { property: "og:description", content: "Every major smartphone brand, expertly repaired." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mobile-brands" },
    ],
    links: [{ rel: "canonical", href: "/mobile-brands" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Mobile Brands" title="Certified repair for every leading smartphone brand." subtitle="Genuine parts, brand-trained technicians and 12-month warranty across our full mobile lineup." />
      <RelatedGrid title="All Mobile Brands" items={mobileBrands} basePath="/mobile-brands" />
      <CTASection />
    </>
  ),
});