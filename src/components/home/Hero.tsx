import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-devices.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setPos({ x, y });
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden gradient-hero text-white pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[color:var(--blue-accent)]/30 blur-[120px]" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[color:var(--navy-soft)]/50 blur-[100px]" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--blue-glow)]" />
              Certified repair · 12-month warranty
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display font-semibold tracking-tight text-balance text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02]"
          >
            Professional Mobile & Laptop
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#FFFFFF,#3B82F6)" }}>
              Repair Services.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Fast, reliable and certified repair solutions for smartphones, laptops and tablets — using genuine parts and experienced technicians.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--navy-deep)] px-6 py-3.5 text-sm font-semibold hover:shadow-glow hover:bg-[color:var(--blue-accent)] hover:text-white transition-all duration-300"
            >
              Book Repair
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:+18005550142"
              className="inline-flex items-center gap-2 rounded-full glass text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[color:var(--blue-glow)]" /> 250,000+ devices restored</span>
            <span className="hidden sm:inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[color:var(--blue-glow)]" /> 4.9 ★ average rating</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            style={{ x: pos.x * 22, y: pos.y * 22 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow ring-1 ring-white/10">
              <img
                src={heroImg}
                alt="Premium mobile and laptop repair"
                width={1600}
                height={1408}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--navy-deep)]/40 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-16 glass rounded-2xl px-4 py-3 text-white shadow-elevated"
            >
              <p className="text-[10px] uppercase tracking-widest text-white/60">Avg. turnaround</p>
              <p className="font-display text-xl font-semibold">45 mins</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 text-white shadow-elevated"
            >
              <p className="text-[10px] uppercase tracking-widest text-white/60">Warranty</p>
              <p className="font-display text-xl font-semibold">12 months</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}