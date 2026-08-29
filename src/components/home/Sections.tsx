import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck, Award, Clock3, BadgeDollarSign, Users, Wrench,
  Cpu, Battery, Camera, Speaker, Layers, Droplets, Wifi, HardDrive, Lock, Smartphone,
  Keyboard, MonitorSmartphone, Fan, Terminal, Bug, MemoryStick,
  CheckCircle2, ArrowRight, Star, MapPin, Phone, Mail, MessageCircle, Plus, Minus,
} from "lucide-react";
import { mobileBrands, laptopBrands, mobileServices, laptopServices, site } from "@/data/site";

/* ---------- Section 2: Trust ---------- */
const trustItems = [
  { icon: Award, label: "Certified Technicians", desc: "Brand-trained, background-checked engineers." },
  { icon: ShieldCheck, label: "Genuine Parts", desc: "OEM & Grade-A components, always." },
  { icon: Wrench, label: "Warranty Included", desc: "12-month coverage on parts and labor." },
  { icon: Clock3, label: "Fast Turnaround", desc: "Most repairs completed same day." },
  { icon: BadgeDollarSign, label: "Transparent Pricing", desc: "No hidden fees, quoted upfront." },
  { icon: Users, label: "250,000+ Customers", desc: "A repair experience people recommend." },
];

export function TrustGrid() {
  return (
    <Section eyebrow="Why iSystem" title="Precision, trust and pace — engineered together.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {trustItems.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-[color:var(--border)] p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface)] text-[color:var(--navy-deep)] group-hover:bg-[color:var(--navy-deep)] group-hover:text-white transition">
              <t.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--navy-deep)]">{t.label}</h3>
            <p className="mt-2 text-sm text-[color:var(--ink-mute)] leading-relaxed">{t.desc}</p>
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--blue-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Section 3: Book a Repair ---------- */
export function BookRepair() {
  return (
    <section id="book" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -top-24 right-1/3 h-96 w-96 rounded-full bg-[color:var(--blue-accent)]/25 blur-[120px]" />
      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 text-white">
          <p className="eyebrow text-[color:var(--blue-glow)]">Book a Repair</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight text-balance">
            Two minutes to a certified repair booking.
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-md">
            Tell us about your device — we'll confirm a slot, provide a transparent quote and, in most cases, complete the repair the same day.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {["Free diagnostic on every device", "Genuine parts and 12-month warranty", "Free pickup & drop-off within the city"].map((x) => (
              <li key={x} className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-[color:var(--blue-glow)]" />{x}</li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 shadow-elevated"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Full Name" placeholder="John Appleseed" />
            <Field label="Phone Number" placeholder="+1 555 000 1234" />
            <Select label="Device Type" options={["Smartphone", "Laptop", "Tablet", "Smartwatch"]} />
            <Select label="Brand" options={[...mobileBrands, ...laptopBrands].map((b) => b.name)} />
            <Select className="md:col-span-2" label="Repair Service" options={[...mobileServices, ...laptopServices].map((s) => s.name)} />
            <div className="md:col-span-2">
              <label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Describe the issue in a few words…"
                className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[color:var(--blue-glow)] transition"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full md:w-auto inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--navy-deep)] px-7 py-3.5 text-sm font-semibold hover:bg-[color:var(--blue-accent)] hover:text-white transition-all shadow-glow"
          >
            Book My Repair <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[color:var(--blue-glow)] transition"
      />
    </div>
  );
}
function Select({ label, options, className }: { label: string; options: string[]; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium uppercase tracking-widest text-white/60 mb-2">{label}</label>
      <select className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--blue-glow)] transition appearance-none">
        <option value="" className="bg-[color:var(--navy)]">Select…</option>
        {options.map((o) => <option key={o} value={o} className="bg-[color:var(--navy)]">{o}</option>)}
      </select>
    </div>
  );
}

/* ---------- Section 4: Brands Grid ---------- */
export function BrandsGrid() {
  const all = [
    ...mobileBrands.map((b) => ({ ...b, kind: "mobile" as const })),
    ...laptopBrands.map((b) => ({ ...b, kind: "laptop" as const })),
  ];
  return (
    <Section eyebrow="Brands We Service" title="Certified expertise across every leading brand.">
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {all.map((b, i) => (
          <motion.div
            key={b.slug + b.kind}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
          >
            <Link
              to={b.kind === "mobile" ? "/mobile-brands/$brand" : "/laptop-brands/$brand"}
              params={{ brand: b.slug }}
              className="group relative flex aspect-square items-center justify-center rounded-3xl bg-white border border-[color:var(--border)] shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--blue-accent)]/30"
            >
              <span className="font-display text-lg md:text-xl font-semibold text-[color:var(--navy-deep)] group-hover:text-[color:var(--blue-accent)] transition">{b.name}</span>
              <span className="absolute -bottom-px left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[color:var(--blue-accent)] group-hover:w-16 transition-all duration-500" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Section 5 & 6: Service Bento ---------- */
const mobileIcons: Record<string, typeof Cpu> = {
  "screen-replacement": Smartphone, "battery-replacement": Battery, "charging-port": Wrench,
  "camera-repair": Camera, "speaker-repair": Speaker, "back-glass": Layers,
  "motherboard-repair": Cpu, "water-damage": Droplets, "software-issues": Terminal,
  "network-problems": Wifi, "data-recovery": HardDrive, "phone-unlock": Lock,
};
const laptopIcons: Record<string, typeof Cpu> = {
  "screen": MonitorSmartphone, "keyboard": Keyboard, "battery": Battery, "ssd-upgrade": HardDrive,
  "ram-upgrade": MemoryStick, "motherboard": Cpu, "charging-port": Wrench, "fan-cleaning": Fan,
  "operating-system": Terminal, "virus-removal": Bug, "data-recovery": HardDrive, "chip-level-repair": Cpu,
};

export function ServiceBento({ kind }: { kind: "mobile" | "laptop" }) {
  const items = kind === "mobile" ? mobileServices : laptopServices;
  const icons = kind === "mobile" ? mobileIcons : laptopIcons;
  const base = kind === "mobile" ? "/mobile-services" : "/laptop-services";
  return (
    <Section
      eyebrow={kind === "mobile" ? "Mobile Repair Services" : "Laptop Repair Services"}
      title={kind === "mobile" ? "Every mobile issue — precisely solved." : "Every laptop issue — engineered back to new."}
      tone={kind === "laptop" ? "soft" : "default"}
    >
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((s, i) => {
          const Icon = icons[s.slug] ?? Cpu;
          const big = i === 0 || i === 5;
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              className={big ? "md:col-span-2 md:row-span-2" : ""}
            >
              <Link
                to={`${base}/$service`}
                params={{ service: s.slug }}
                className={`group h-full flex flex-col justify-between rounded-3xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1 overflow-hidden relative ${
                  big
                    ? "gradient-navy text-white border-transparent shadow-elevated hover:shadow-glow"
                    : "bg-white border-[color:var(--border)] shadow-soft hover:shadow-elevated hover:border-[color:var(--blue-accent)]/30"
                }`}
              >
                {/* Background image overlay */}
                <div className="absolute right-0 top-0 w-32 h-32 md:w-48 md:h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-luminosity">
                  <img src={`/services/${s.slug}.jpeg`} alt="" className="w-full h-full object-cover rounded-bl-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl relative z-10 ${big ? "bg-white/10" : "bg-[color:var(--surface)]"}`}>
                  <Icon className={`h-5 w-5 ${big ? "text-white" : "text-[color:var(--navy-deep)]"}`} />
                </div>
                
                <div className="mt-8 relative z-10">
                  <h3 className={`font-display font-semibold ${big ? "text-2xl md:text-3xl" : "text-base md:text-lg"} ${big ? "text-white" : "text-[color:var(--navy-deep)]"}`}>{s.name}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${big ? "text-white/70" : "text-[color:var(--ink-mute)]"}`}>{s.desc}</p>
                  
                  {/* For large cards, show a larger image */}
                  {big && (
                    <div className="mt-6 rounded-2xl overflow-hidden h-32 md:h-48 w-full relative">
                      <img src={`/services/${s.slug}.jpeg`} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy-deep)] to-transparent" />
                    </div>
                  )}

                  <span className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${big ? "text-[color:var(--blue-glow)]" : "text-[color:var(--blue-accent)]"}`}>
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Section 7: Process Timeline ---------- */
const steps = [
  { title: "Book", desc: "Reserve a slot in under two minutes." },
  { title: "Inspection", desc: "Free diagnostic by a certified engineer." },
  { title: "Diagnosis", desc: "A clear, itemised report — no jargon." },
  { title: "Approval", desc: "Transparent quote before any work begins." },
  { title: "Repair", desc: "Genuine parts, precision tooling, ESD-safe bench." },
  { title: "Quality Check", desc: "20-point verification and stress test." },
  { title: "Pickup", desc: "Ready with 12-month warranty documentation." },
];

export function ProcessTimeline() {
  return (
    <Section eyebrow="Our Process" title="Seven precise steps. One meticulous repair." tone="soft">
      <div className="relative mt-16">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--blue-accent)]/0 via-[color:var(--blue-accent)]/40 to-[color:var(--blue-accent)]/0" />
        <ol className="space-y-10 md:space-y-14">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className={`md:pr-10 md:text-right ${i % 2 ? "md:pl-10 md:pr-0 md:text-left" : ""}`}>
                <div className="pl-12 md:pl-0">
                  <p className="text-xs font-mono text-[color:var(--blue-accent)]">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-[color:var(--navy-deep)]">{s.title}</h3>
                  <p className="mt-2 text-[color:var(--ink-mute)] max-w-sm md:ml-auto">{s.desc}</p>
                </div>
              </div>
              <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-[color:var(--navy-deep)] ring-4 ring-[color:var(--blue-accent)]/20" />
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- Section 8: Why Choose ---------- */
const whyItems = [
  { title: "Certified Engineers", desc: "Every technician holds brand-issued certifications and passes our internal apprenticeship." },
  { title: "Latest Equipment", desc: "Microscope soldering stations, ultrasonic cleaners, and calibrated diagnostics." },
  { title: "Original Components", desc: "OEM-grade screens, batteries and boards — sourced through verified supply." },
  { title: "Transparent Pricing", desc: "Fixed quotes before we start. No last-minute additions, no surprises." },
  { title: "Fast Repairs", desc: "Most repairs same day. Urgent express service available on request." },
  { title: "Customer Support", desc: "A real specialist on the line, seven days a week — before and after." },
];

export function WhyChoose() {
  return (
    <Section eyebrow="Why Choose iSystem" title="The details that define a premium repair.">
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyItems.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-3xl bg-white border border-[color:var(--border)] p-7 shadow-soft hover:shadow-elevated transition-all"
          >
            <p className="text-xs font-mono text-[color:var(--blue-accent)]">0{i + 1}</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-[color:var(--navy-deep)]">{w.title}</h3>
            <p className="mt-2 text-[color:var(--ink-mute)] leading-relaxed">{w.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Section 9: Stats ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const duration = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  const items = [
    { v: 14, s: "+", label: "Years Experience" },
    { v: 250000, s: "+", label: "Devices Repaired" },
    { v: 180000, s: "+", label: "Happy Customers" },
    { v: 99, s: "%", label: "Success Rate" },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-white">
        {items.map((it) => (
          <div key={it.label} className="text-center md:text-left">
            <p className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              <Counter to={it.v} suffix={it.s} />
            </p>
            <p className="mt-3 text-sm uppercase tracking-widest text-white/60">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Section 10: Testimonials ---------- */
const reviews = [
  { name: "Amelia R.", role: "Photographer", quote: "My MacBook screen came back looking factory-new. The team explained every step, and the finish is flawless." },
  { name: "Daniel K.", role: "Product Manager", quote: "Same-day iPhone battery replacement with a genuine cell. The diagnostics report they emailed me was ridiculously thorough." },
  { name: "Priya S.", role: "Founder", quote: "Water-damaged Galaxy revived in under 48 hours. iSystem is the only place I'll trust my team's devices." },
  { name: "Marco V.", role: "Architect", quote: "A ThinkPad chip-level repair no one else would touch. Transparent pricing, warranty, and calm expertise." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="container-x relative text-white">
        <p className="eyebrow text-[color:var(--blue-glow)]">Testimonials</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold max-w-3xl text-balance">Trusted by professionals who can't afford downtime.</h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const r = reviews[(i + offset) % reviews.length];
            return (
              <motion.div
                key={offset + r.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-7 shadow-elevated"
              >
                <div className="flex items-center gap-1 text-[color:var(--blue-glow)]">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-white/85 leading-relaxed">"{r.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[color:var(--blue-glow)] to-[color:var(--navy-soft)] flex items-center justify-center font-semibold">{r.name[0]}</div>
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-xs text-white/60">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-2">
          {reviews.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Review ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-white" : "w-4 bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 11: FAQ ---------- */
const faqs = [
  { q: "Do you use genuine parts?", a: "Yes — we use OEM parts wherever available and Grade-A certified components otherwise, always disclosed upfront." },
  { q: "How long does a repair take?", a: "Most repairs are completed the same day. Complex board-level work may take 2–4 business days; we always share an ETA at approval." },
  { q: "Is my data safe?", a: "Absolutely. Devices are handled under NDA-bound protocols and we never require your passcode unless functional testing demands it." },
  { q: "What warranty do you offer?", a: "Every repair carries a 12-month warranty covering parts and labor. Battery replacements include a capacity guarantee." },
  { q: "Do you offer pickup and drop-off?", a: "Yes — free within the city for eligible services. Nationwide insured shipping is available on request." },
  { q: "Can you repair water-damaged devices?", a: "In most cases, yes. Our ultrasonic revival protocol has a high success rate when acted on quickly." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Answers" title="Frequently asked questions." tone="soft">
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-2xl bg-white border border-[color:var(--border)] shadow-soft overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left p-5 md:p-6"
              >
                <span className="font-display font-semibold text-[color:var(--navy-deep)] text-lg">{f.q}</span>
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-[color:var(--surface)] text-[color:var(--navy-deep)]">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-6 text-[color:var(--ink-soft)] leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Section 12: Contact ---------- */
export function ContactSection() {
  return (
    <Section eyebrow="Contact" title="Come by the studio — or reach us in a tap.">
      <div className="mt-14 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-soft border border-[color:var(--border)] min-h-[380px]">
          <iframe
            title="iSystem location"
            src="https://maps.google.com/maps?q=Flat+No.102,+1st+Floor,+OnePlus+Servicing+Centers+-+Vanasthalipuram,+HYD,+Sree+Santhoshi+Mansion+Complex,+Hyderabad+-+Suryapet+Hwy,+beside+Sub-Registar+Office,+Sushma,+Vanasthalipuram,+Hyderabad,+Telangana+500070&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-2 space-y-4">
          {site.locations?.map((loc, i) => (
            <InfoCard key={i} icon={MapPin} label={loc.name} value={loc.address} href={loc.mapUrl} />
          ))}
          <InfoCard icon={Phone} label="Call" value={site.phone} href={site.phoneHref} />
          <InfoCard icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
          <InfoCard icon={Clock3} label="Hours" value={site.hours} />
          <a href={site.whatsapp} className="flex items-center justify-between rounded-2xl gradient-blue text-white p-5 shadow-glow hover:shadow-elevated transition">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70">WhatsApp</p>
              <p className="font-display font-semibold text-lg">Chat with a specialist</p>
            </div>
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: typeof Cpu; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-white border border-[color:var(--border)] p-5 shadow-soft hover:shadow-elevated transition">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--surface)] text-[color:var(--navy-deep)]"><Icon className="h-5 w-5" /></span>
      <div>
        <p className="text-xs uppercase tracking-widest text-[color:var(--ink-mute)]">{label}</p>
        <p className="font-display font-semibold text-[color:var(--navy-deep)]">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

/* ---------- Section shell ---------- */
function Section({ eyebrow, title, children, tone = "default" }: { eyebrow?: string; title: string; children: React.ReactNode; tone?: "default" | "soft" }) {
  return (
    <section className={`py-24 md:py-32 ${tone === "soft" ? "bg-[color:var(--surface)]" : "bg-white"}`}>
      <div className="container-x">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-[color:var(--navy-deep)] leading-tight text-balance">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}