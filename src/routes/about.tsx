import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteLayout";
import { Stats, WhyChoose, Testimonials } from "@/components/home/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About iSystem — Precision Device Repair" },
      { name: "description", content: "A studio-grade repair company built on certified engineers, genuine parts and transparent craftsmanship." },
      { property: "og:title", content: "About iSystem" },
      { property: "og:description", content: "The team, standards and philosophy behind iSystem." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Studio-grade repair. Built on precision, trust and craft." subtitle="iSystem exists for people who refuse to compromise on the devices they depend on. Every repair we perform is guided by three principles: genuine parts, certified expertise and transparent process." />
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] leading-tight">Repair as craftsmanship — not commodity.</h2>
          </div>
          <div className="space-y-6 text-[color:var(--ink-soft)] leading-relaxed text-lg">
            <p>We opened iSystem to bring a studio-grade standard to a category dominated by rushed, opaque service. Our benches are ESD-safe. Our components are certified. Our diagnostics are documented.</p>
            <p>Every technician on our team is brand-trained, background-checked and mentored through a six-month internal apprenticeship before they touch a customer's device.</p>
            <p>The result is a repair experience you can hand to a client, a spouse or a CTO with equal confidence.</p>
          </div>
        </div>
      </section>
      <Stats />
      <WhyChoose />
      <Testimonials />
    </>
  );
}