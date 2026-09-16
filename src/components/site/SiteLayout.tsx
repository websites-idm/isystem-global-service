import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--background)]">
      <TopBar />
      <Navbar />
      <main className="flex-1 -mt-16 md:-mt-20">{children}</main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href={site.phoneHref} 
          aria-label="Call Us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--blue-accent)] text-white shadow-elevated hover:scale-110 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a 
          href={site.whatsapp} 
          aria-label="WhatsApp Us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:var(--navy-deep)]/60" />
      <div className="container-x relative">
        {eyebrow && <p className="eyebrow text-[color:var(--blue-glow)]">{eyebrow}</p>}
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold text-balance max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}