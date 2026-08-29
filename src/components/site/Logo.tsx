import { Link } from "@tanstack/react-router";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="iSystem home">
      <img 
        src="/logo.png" 
        alt="iSystem Logo" 
        className="h-16 md:h-20 w-auto object-contain"
      />
    </Link>
  );
}