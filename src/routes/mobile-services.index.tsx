import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/BrandServicePage";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { mobileServices } from "@/data/site";

export const Route = createFileRoute("/mobile-services/")({
  head: () => ({
    meta: [
      { title: "Mobile Repair Services — iSystem" },
      { name: "description", content: "From screen replacements to chip-level board repair, iSystem covers every mobile service with certified expertise." },
      { property: "og:title", content: "Mobile Repair Services" },
      { property: "og:description", content: "Every mobile repair, precisely handled." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mobile-services" },
    ],
    links: [{ rel: "canonical", href: "/mobile-services" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Mobile Services" title="Every mobile repair — precisely handled." subtitle="A full catalog of certified smartphone services, backed by genuine parts and a 12-month warranty." />
      <section className="py-24 bg-white">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mobileServices.map((s) => (
            <Link key={s.slug} to="/mobile-services/$service" params={{ service: s.slug }}
              className="group rounded-3xl bg-white border border-[color:var(--border)] p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 hover:border-[color:var(--blue-accent)]/30 transition-all">
              <h3 className="font-display text-xl font-semibold text-[color:var(--navy-deep)] group-hover:text-[color:var(--blue-accent)]">{s.name}</h3>
              <p className="mt-2 text-[color:var(--ink-mute)] leading-relaxed">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--blue-accent)]">Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  ),
});