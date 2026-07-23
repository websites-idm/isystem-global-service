import { createFileRoute, notFound } from "@tanstack/react-router";
import { BrandDetailPage } from "@/components/site/BrandServicePage";
import { mobileBrands } from "@/data/site";

export const Route = createFileRoute("/mobile-brands/$brand")({
  loader: ({ params }) => {
    const brand = mobileBrands.find((b) => b.slug === params.brand);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.brand.name ?? "Mobile Brand";
    return {
      meta: [
        { title: `${name} Repair Service — iSystem` },
        { name: "description", content: `Certified ${name} smartphone repair with genuine parts, transparent pricing and a 12-month warranty.` },
        { property: "og:title", content: `${name} Repair — iSystem` },
        { property: "og:description", content: `Expert ${name} device repair by certified technicians.` },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: BrandPage,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const others = mobileBrands.filter((b) => b.slug !== brand.slug);
  return <BrandDetailPage brandName={brand.name} kind="mobile" related={others} />;
}