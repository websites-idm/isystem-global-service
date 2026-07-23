import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { site } from "@/data/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[color:var(--navy-deep)] text-white/80 text-xs">
      <div className="container-x flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[color:var(--blue-glow)]" />{site.address.split(",")[0]}</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[color:var(--blue-glow)]" />{site.hours}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white transition"><Phone className="h-3.5 w-3.5" />{site.phone}</a>
          <a href={site.whatsapp} className="inline-flex items-center gap-2 hover:text-white transition"><MessageCircle className="h-3.5 w-3.5" />WhatsApp</a>
          <span className="h-3 w-px bg-white/15" />
          <a href={site.social.instagram} aria-label="Instagram" className="hover:text-white transition"><Instagram className="h-3.5 w-3.5" /></a>
          <a href={site.social.facebook} aria-label="Facebook" className="hover:text-white transition"><Facebook className="h-3.5 w-3.5" /></a>
          <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-white transition"><Linkedin className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
}