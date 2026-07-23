import { createFileRoute, notFound } from "@tanstack/react-router";
import { BrandDetailPage } from "@/components/site/BrandServicePage";
import { laptopBrands } from "@/data/site";

export const Route = createFileRoute("/laptop-brands/$brand")({
  loader: ({ params }) => {
    const brand = laptopBrands.find((b) => b.slug === params.brand);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.brand.name ?? "Laptop Brand";
    return {
      meta: [
        { title: `${name} Repair Service — iSystem` },
        { name: "description", content: `Certified ${name} laptop repair with genuine parts, transparent pricing and a 12-month warranty.` },
        { property: "og:title", content: `${name} Repair — iSystem` },
        { property: "og:description", content: `Expert ${name} laptop repair by certified technicians.` },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: BrandPage,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const others = laptopBrands.filter((b) => b.slug !== brand.slug);
  return <BrandDetailPage brandName={brand.name} kind="laptop" related={others} />;
}