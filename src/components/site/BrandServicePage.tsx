import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "./SiteLayout";
import { ProcessTimeline, WhyChoose, FAQ } from "@/components/home/Sections";

export function BrandDetailPage({
  brandName, kind, related,
}: {
  brandName: string;
  kind: "mobile" | "laptop";
  related: readonly { slug: string; name: string; tagline: string }[];
}) {
  const label = kind === "mobile" ? "Mobile Brand" : "Laptop Brand";
  const commonRepairs = kind === "mobile"
    ? ["Screen Replacement", "Battery Replacement", "Charging Port", "Camera Module", "Back Glass", "Motherboard Repair", "Water Damage", "Software Restore"]
    : ["Screen Replacement", "Keyboard Replacement", "Battery", "SSD / RAM Upgrade", "Motherboard Repair", "Fan & Thermal Service", "OS Installation", "Data Recovery"];

  return (
    <>
      <PageHero
        eyebrow={label}
        title={`${brandName} ${kind === "mobile" ? "Repair" : "Service"} — engineered to factory standards.`}
        subtitle={`Certified ${brandName} technicians, genuine parts and a 12-month warranty on every ${kind === "mobile" ? "smartphone" : "laptop"} we repair.`}
      />

      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">Brand Overview</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[color:var(--navy-deep)] leading-tight">{brandName} at iSystem.</h2>
            <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed">
              From current flagships to devices two generations old, our {brandName} bench covers the full lineup. We keep genuine parts on hand for high-volume models and can source uncommon components within 24–48 hours.
            </p>
            <p className="mt-4 text-[color:var(--ink-soft)] leading-relaxed">
              Every {brandName} repair is diagnosed on a calibrated bench, quoted transparently and delivered with a 12-month warranty and a documented service report.
            </p>
          </div>
          <div>
            <p className="eyebrow">Common Repairs</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commonRepairs.map((r) => (
                <li key={r} className="flex items-center gap-3 rounded-2xl bg-[color:var(--surface)] p-4 border border-[color:var(--border)]">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--blue-accent)]" />
                  <span className="text-[color:var(--ink)] font-medium text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <WhyChoose />
      <FAQ />

      <RelatedGrid title={`Other ${label}s`} items={related} basePath={kind === "mobile" ? "/mobile-brands" : "/laptop-brands"} />
      <CTASection />
    </>
  );
}

export function ServiceDetailPage({
  service, kind, related,
}: {
  service: { slug: string; name: string; desc: string };
  kind: "mobile" | "laptop";
  related: readonly { slug: string; name: string; desc: string }[];
}) {
  const symptoms = [
    "Erratic behaviour or intermittent failure",
    "Visible physical damage or cracks",
    "Reduced performance or capacity",
    "Sudden shutdowns or restarts",
  ];
  const procedure = [
    "Booked-in and photographed on arrival",
    "Diagnosed by a certified technician",
    "Quoted transparently for approval",
    "Repaired with genuine, tested components",
    "20-point verification before handover",
  ];
  return (
    <>
      <PageHero eyebrow={kind === "mobile" ? "Mobile Service" : "Laptop Service"} title={service.name} subtitle={service.desc} />

      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="eyebrow">About this service</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[color:var(--navy-deep)]">Precision {service.name.toLowerCase()} you can rely on.</h2>
              <p className="mt-4 text-[color:var(--ink-soft)] leading-relaxed">
                {service.desc} Our specialists work under microscope-grade tooling with ESD-safe protocols to ensure a factory-quality result — every time.
              </p>
            </div>

            <div>
              <p className="eyebrow">Symptoms we address</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[color:var(--ink-soft)]">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--blue-accent)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Repair procedure</p>
              <ol className="mt-5 space-y-3">
                {procedure.map((p, i) => (
                  <li key={p} className="flex items-start gap-4 rounded-2xl bg-[color:var(--surface)] p-4 border border-[color:var(--border)]">
                    <span className="h-7 w-7 rounded-full bg-[color:var(--navy-deep)] text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span className="text-[color:var(--ink)]">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl gradient-navy text-white p-7 shadow-elevated">
              <p className="eyebrow text-[color:var(--blue-glow)]">Warranty</p>
              <p className="mt-3 font-display text-3xl font-semibold">12 months</p>
              <p className="mt-2 text-white/70 text-sm">Full coverage on parts and workmanship, transferable with the device.</p>
            </div>
            <div className="rounded-3xl bg-white border border-[color:var(--border)] p-7 shadow-soft">
              <p className="eyebrow">Pricing</p>
              <p className="mt-3 text-[color:var(--ink-soft)]">Transparent quotes provided after a free diagnostic. No surprises, ever.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--navy-deep)] text-white px-5 py-3 text-sm font-semibold hover:bg-[color:var(--blue-accent)] transition">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <FAQ />

      <section className="py-24 bg-[color:var(--surface)]">
        <div className="container-x">
          <p className="eyebrow">Related Services</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)]">Other {kind} services we offer.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.filter((r) => r.slug !== service.slug).slice(0, 6).map((r) => (
              <Link
                key={r.slug}
                to={kind === "mobile" ? "/mobile-services/$service" : "/laptop-services/$service"}
                params={{ service: r.slug }}
                className="group rounded-3xl bg-white border border-[color:var(--border)] p-6 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1"
              >
                <h3 className="font-display font-semibold text-[color:var(--navy-deep)] group-hover:text-[color:var(--blue-accent)]">{r.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-mute)] line-clamp-2">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export function RelatedGrid({ title, items, basePath }: { title: string; items: readonly { slug: string; name: string; tagline: string }[]; basePath: "/mobile-brands" | "/laptop-brands" }) {
  return (
    <section className="py-24 bg-[color:var(--surface)]">
      <div className="container-x">
        <p className="eyebrow">Explore</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--navy-deep)]">{title}</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((b, i) => (
            <motion.div key={b.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
              <Link
                to={`${basePath}/$brand`}
                params={{ brand: b.slug }}
                className="group flex aspect-square items-center justify-center rounded-3xl bg-white border border-[color:var(--border)] shadow-soft hover:shadow-glow hover:-translate-y-1 hover:border-[color:var(--blue-accent)]/30 transition-all"
              >
                <span className="font-display font-semibold text-[color:var(--navy-deep)] group-hover:text-[color:var(--blue-accent)]">{b.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] gradient-navy p-10 md:p-16 text-white shadow-elevated">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[color:var(--blue-accent)]/30 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="eyebrow text-[color:var(--blue-glow)]">Ready when you are</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight text-balance">Book a certified repair — most devices ready the same day.</h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--navy-deep)] px-6 py-3.5 text-sm font-semibold hover:bg-[color:var(--blue-accent)] hover:text-white transition shadow-glow">
              Book Repair <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}