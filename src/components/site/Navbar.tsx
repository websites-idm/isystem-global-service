import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { mobileBrands, laptopBrands, mobileServices, laptopServices } from "@/data/site";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Mobile Brands", to: "/mobile-brands" as const, mega: "mobile-brands" },
  { label: "Laptop Brands", to: "/laptop-brands" as const, mega: "laptop-brands" },
  { label: "Mobile Services", to: "/mobile-services" as const, mega: "mobile-services" },
  { label: "Laptop Services", to: "/laptop-services" as const, mega: "laptop-services" },
  { label: "Contact Us", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen || open !== null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        solid
          ? "bg-white/85 backdrop-blur-xl border-b border-[color:var(--border)] shadow-soft"
          : "bg-transparent",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.mega ?? null)} className="relative">
              <Link
                to={item.to}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-full inline-flex items-center gap-1 transition",
                  solid ? "text-[color:var(--ink-soft)] hover:text-[color:var(--navy-deep)]" : "text-white/85 hover:text-white",
                )}
                activeProps={{ className: "text-[color:var(--blue-accent)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
              solid
                ? "bg-[color:var(--navy-deep)] text-white hover:bg-[color:var(--blue-accent)] shadow-soft"
                : "bg-white text-[color:var(--navy-deep)] hover:bg-[color:var(--blue-accent)] hover:text-white",
            )}
          >
            Book Repair
          </Link>
        </div>

        <button
          className={cn("lg:hidden p-2 rounded-lg", solid ? "text-[color:var(--navy-deep)]" : "text-white")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega menu */}
      {open && (
        <div className="hidden lg:block absolute left-0 right-0 top-full">
          <div className="container-x">
            <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white border border-[color:var(--border)] shadow-elevated p-8 animate-in fade-in slide-in-from-top-2 duration-200">
              <MegaContent kind={open} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[color:var(--border)]">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 rounded-lg text-[color:var(--ink)] font-medium hover:bg-[color:var(--surface)]"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 px-5 py-3 rounded-full bg-[color:var(--navy-deep)] text-white text-center font-semibold"
            >
              Book Repair
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaContent({ kind }: { kind: string }) {
  if (kind === "mobile-brands") return <BrandMega items={mobileBrands} basePath="/mobile-brands" title="Mobile Brands" note="Certified service for every flagship." />;
  if (kind === "laptop-brands") return <BrandMega items={laptopBrands} basePath="/laptop-brands" title="Laptop Brands" note="From ultrabooks to workstation-class." />;
  if (kind === "mobile-services") return <ServiceMega items={mobileServices} basePath="/mobile-services" title="Mobile Services" note="Board-level expertise for every issue." />;
  if (kind === "laptop-services") return <ServiceMega items={laptopServices} basePath="/laptop-services" title="Laptop Services" note="From SSD upgrades to chip-level repair." />;
  return null;
}

function BrandMega({ items, basePath, title, note }: { items: readonly { slug: string; name: string; tagline: string }[]; basePath: "/mobile-brands" | "/laptop-brands"; title: string; note: string }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <p className="eyebrow">{title}</p>
        <p className="mt-3 font-display text-2xl font-semibold text-[color:var(--navy-deep)]">{note}</p>
        <Link to={basePath} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--blue-accent)]">View all <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-2">
        {items.map((b) => (
          <Link key={b.slug} to={`${basePath}/$brand`} params={{ brand: b.slug }} className="group rounded-2xl p-4 hover:bg-[color:var(--surface)] transition">
            <p className="font-display font-semibold text-[color:var(--navy-deep)] group-hover:text-[color:var(--blue-accent)]">{b.name}</p>
            <p className="text-xs text-[color:var(--ink-mute)] mt-1">{b.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ServiceMega({ items, basePath, title, note }: { items: readonly { slug: string; name: string; desc: string }[]; basePath: "/mobile-services" | "/laptop-services"; title: string; note: string }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <p className="eyebrow">{title}</p>
        <p className="mt-3 font-display text-2xl font-semibold text-[color:var(--navy-deep)]">{note}</p>
        <Link to={basePath} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--blue-accent)]">Explore all <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-2">
        {items.map((s) => (
          <Link key={s.slug} to={`${basePath}/$service`} params={{ service: s.slug }} className="group rounded-2xl p-4 hover:bg-[color:var(--surface)] transition">
            <p className="font-display font-semibold text-[color:var(--navy-deep)] group-hover:text-[color:var(--blue-accent)]">{s.name}</p>
            <p className="text-xs text-[color:var(--ink-mute)] mt-1 line-clamp-1">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}