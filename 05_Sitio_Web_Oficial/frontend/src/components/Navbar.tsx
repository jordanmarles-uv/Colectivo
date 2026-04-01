"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#proceso" },
  { label: "Demo", href: "#demo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
      style={{
        background: "rgba(5,5,16,0.6)",
        backdropFilter: "blur(30px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Logo */}
      <div className="font-space font-black text-lg tracking-tight">
        <span className="gradient-text">Colectivo</span>
        <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, fontSize: "0.7rem", marginLeft: 6 }}>
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
            style={{ color: hover === link.href ? "#fff" : "rgba(255,255,255,0.45)" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contacto"
        data-hover
        className="magnetic-btn hidden md:flex px-5 py-2.5 rounded-full text-sm font-semibold cursor-none"
        style={{
          background: "linear-gradient(135deg, #6C63FF, #00D4FF)",
          boxShadow: "0 0 20px rgba(108,99,255,0.4)",
          color: "#fff",
        }}
      >
        Trabajemos juntos ✦
      </a>
    </nav>
  );
}
