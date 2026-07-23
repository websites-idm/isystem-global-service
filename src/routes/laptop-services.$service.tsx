import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/BrandServicePage";
import { laptopServices } from "@/data/site";

export const Route = createFileRoute("/laptop-services/$service")({
  loader: ({ params }) => {
    const service = laptopServices.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const name = s?.name ?? "Laptop Service";
    return {
      meta: [
        { title: `${name} — Laptop Repair · iSystem` },
        { name: "description", content: s?.desc ?? `Certified laptop ${name.toLowerCase()} with genuine parts and warranty.` },
        { property: "og:title", content: `${name} — iSystem` },
        { property: "og:description", content: s?.desc ?? "Certified laptop repair." },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: () => {
    const { service } = Route.useLoaderData();
    return <ServiceDetailPage service={service} kind="laptop" related={laptopServices} />;
  },
});