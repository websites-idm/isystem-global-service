import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  TrustGrid, BookRepair, BrandsGrid, ServiceBento,
  ProcessTimeline, WhyChoose, Stats, Testimonials, FAQ, ContactSection,
} from "@/components/home/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iSystem — Certified Mobile & Laptop Repair" },
      { name: "description", content: "Professional mobile and laptop repair with genuine parts, certified technicians and a 12-month warranty. Same-day service, transparent pricing." },
      { property: "og:title", content: "iSystem — Certified Mobile & Laptop Repair" },
      { property: "og:description", content: "Fast, reliable and certified repair for smartphones, laptops and tablets." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustGrid />
      <BookRepair />
      <BrandsGrid />
      <ServiceBento kind="mobile" />
      <ServiceBento kind="laptop" />
      <ProcessTimeline />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
