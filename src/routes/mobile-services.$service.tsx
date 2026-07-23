import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/site/BrandServicePage";
import { mobileServices } from "@/data/site";

export const Route = createFileRoute("/mobile-services/$service")({
  loader: ({ params }) => {
    const service = mobileServices.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const name = s?.name ?? "Mobile Service";
    return {
      meta: [
        { title: `${name} — Mobile Repair · iSystem` },
        { name: "description", content: s?.desc ?? `Certified mobile ${name.toLowerCase()} with genuine parts and warranty.` },
        { property: "og:title", content: `${name} — iSystem` },
        { property: "og:description", content: s?.desc ?? "Certified mobile repair." },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: () => {
    const { service } = Route.useLoaderData();
    return <ServiceDetailPage service={service} kind="mobile" related={mobileServices} />;
  },
});