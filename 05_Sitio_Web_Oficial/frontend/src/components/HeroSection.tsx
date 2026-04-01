"use client";
import { useEffect, useRef, useState } from "react";

const WORDS = [
  "Papers Científicos",
  "Datos de Laboratorio",
  "Investigación Compleja",
  "Tesis de Doctorado",
  "Reportes Técnicos",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = WORDS[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(i => (i + 1) % WORDS.length);
        }
      }
    }, isDeleting ? 60 : 110);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  // Parallax on mouse
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      el.style.transform = `translate(${dx * 12}px, ${dy * 8}px)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden scene">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Radial glow center */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "700px", height: "700px",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Badge */}
      <div className="float glass neon-border rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase mb-8"
        style={{ color: "#00D4FF" }}>
        ✦ Colectivo Transmedia · Cali, Colombia
      </div>

      {/* Main headline */}
      <h1
        ref={titleRef}
        className="text-center font-space leading-tight mb-4"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
          fontWeight: 900,
          transition: "transform 0.1s ease",
        }}
      >
        <span className="gradient-text text-glow">Ciencia Densa,</span>
        <br />
        <span style={{ color: "#fff" }}>Narrativa Ligera.</span>
      </h1>

      {/* Typewriter sub-headline */}
      <p
        className="text-center mb-10"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "rgba(255,255,255,0.55)",
          maxWidth: "640px",
          lineHeight: 1.7,
        }}
      >
        Transformamos{" "}
        <span style={{ color: "#6C63FF", fontWeight: 700 }}>
          {displayed}<span className="typewriter-cursor">|</span>
        </span>{" "}
        en narrativas visuales que conquistan inversionistas.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <button
          data-hover
          className="magnetic-btn px-8 py-4 rounded-full font-semibold text-sm tracking-wide"
          style={{
            background: "linear-gradient(135deg, #6C63FF, #00D4FF)",
            boxShadow: "0 0 30px rgba(108,99,255,0.5)",
            color: "#fff",
            cursor: "none",
          }}
        >
          Ver Portafolio Interactivo →
        </button>
        <button
          data-hover
          className="magnetic-btn px-8 py-4 rounded-full font-semibold text-sm tracking-wide glass neon-border"
          style={{ color: "#fff", cursor: "none" }}
        >
          Agenda una Asesoría
        </button>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { num: "3", unit: "Productos Híbridos", desc: "IA + Empatía Humana" },
          { num: "100%", unit: "Coautoría Moral", desc: "Propiedad intelectual blindada" },
          { num: "∞", unit: "Impacto Visual", desc: "Narrativas transmedia" },
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl px-6 py-4 text-center" style={{ minWidth: 160 }}>
            <div className="gradient-text font-space font-black" style={{ fontSize: "2rem" }}>{s.num}</div>
            <div className="font-semibold text-sm" style={{ color: "#fff" }}>{s.unit}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.3)" }}>
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <div className="float-slow" style={{ fontSize: "1.5rem" }}>↓</div>
      </div>
    </section>
  );
}
