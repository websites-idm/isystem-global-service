import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { site, mobileBrands, laptopBrands } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy-deep)] text-white/80">
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-sm max-w-xs leading-relaxed">
              Certified mobile and laptop repair engineered with genuine parts, warrantied craftsmanship and same-day precision.
            </p>
            <form className="mt-6 flex glass rounded-full p-1 max-w-sm">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none" />
              <button className="rounded-full bg-white text-[color:var(--navy-deep)] px-4 py-2 text-sm font-semibold hover:bg-[color:var(--blue-glow)] hover:text-white transition">Subscribe</button>
            </form>
          </div>
          <FooterCol title="Company" links={[["About Us", "/about"], ["Contact Us", "/contact"], ["Book Repair", "/contact"]]} />
          <FooterCol title="Services" links={[["Mobile Services", "/mobile-services"], ["Laptop Services", "/laptop-services"]]} />
          <FooterCol title="Mobile Brands" links={mobileBrands.slice(0, 6).map((b) => [b.name, `/mobile-brands/${b.slug}`])} />
          <FooterCol title="Laptop Brands" links={laptopBrands.map((b) => [b.name, `/laptop-brands/${b.slug}`])} />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--blue-glow)]" />{site.address}</div>
          <div className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-[color:var(--blue-glow)]" />{site.phone}</div>
          <div className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-[color:var(--blue-glow)]" />{site.email}</div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} iSystem. Certified device service, worldwide.</p>
          <div className="flex items-center gap-4">
            <a href={site.social.instagram} aria-label="Instagram" className="hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href={site.social.facebook} aria-label="Facebook" className="hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="font-display text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link to={href as never} className="hover:text-white transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}