import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteLayout";
import { BookRepair, ContactSection, FAQ } from "@/components/home/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact iSystem — Book a Certified Repair" },
      { name: "description", content: "Book a mobile or laptop repair, request a quote, or reach our specialists by call, WhatsApp or email." },
      { property: "og:title", content: "Contact iSystem" },
      { property: "og:description", content: "Book a repair or reach a specialist in seconds." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to a specialist. Book a repair in minutes." subtitle="We're here seven days a week — by phone, WhatsApp or in-studio. Choose whichever suits you." />
      <BookRepair />
      <ContactSection />
      <FAQ />
    </>
  );
}