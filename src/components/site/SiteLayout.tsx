import type { ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <Navbar />
      <main className="flex-1 -mt-16 md:-mt-20">{children}</main>
      <Footer />
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