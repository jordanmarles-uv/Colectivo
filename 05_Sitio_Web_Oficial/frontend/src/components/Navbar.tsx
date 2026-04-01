"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#proceso" },
  { label: "Demo", href: "#demo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [hover, setHover] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between glass"
      style={{
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      {/* Logo */}
      <div className="font-space font-black text-lg tracking-tight">
        <span className="gradient-text">Colectivo</span>
        <span className="ml-[6px]" style={{ color: "var(--text-secondary)", fontWeight: 400, fontSize: "0.7rem" }}>
          TRANSMEDIA
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            data-hover
            onMouseEnter={() => setHover(link.href)}
            onMouseLeave={() => setHover(null)}
            className="text-sm font-medium transition-all duration-300 cursor-none"
            style={{ color: hover === link.href ? "var(--text-primary)" : "var(--text-secondary)" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        )}

        {/* CTA */}
        <a
          href="#contacto"
          data-hover
          className="magnetic-btn hidden md:flex px-5 py-2.5 rounded-full text-sm font-semibold cursor-none"
          style={{
            background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
            boxShadow: "0 4px 14px rgba(108,99,255,0.3)",
            color: "#fff",
          }}
        >
          Trabajemos juntos ✦
        </a>
      </div>
    </nav>
  );
}
