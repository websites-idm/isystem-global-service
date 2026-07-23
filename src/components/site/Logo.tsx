import { Link } from "@tanstack/react-router";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const primary = variant === "light" ? "#FFFFFF" : "#071C3D";
  const accent = "#2563EB";
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="iSystem home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl shadow-soft" style={{ background: primary === "#FFFFFF" ? "rgba(255,255,255,0.08)" : "linear-gradient(135deg,#071C3D,#0F2D57)" }}>
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path d="M8 6h12a6 6 0 0 1 0 12h-6a6 6 0 0 0 0 12H8" stroke={variant === "light" ? "#FFFFFF" : "#FFFFFF"} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="2" fill={accent} />
        </svg>
      </span>
      <span className="flex items-baseline font-display text-lg font-semibold tracking-tight" style={{ color: primary }}>
        <span style={{ color: accent }}>i</span>System
      </span>
    </Link>
  );
}