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
    }, isDeleting ? 40 : 80); // sped up typewriter slightly for professional feel
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
      el.style.transform = `translate(${dx * 8}px, ${dy * 5}px)`; // reduced parallax intensity
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden scene pt-20">
      {/* Particle Canvas constrained to Hero section only */}
      <div className="absolute inset-0 z-[-1]">
        <ParticleCanvas />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50 z-[-1]" />

      {/* Radial glow center */}
      <div
        className="absolute rounded-full pointer-events-none z-[-1] hidden dark:block"
        style={{
          width: "700px", height: "700px",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(108,99,255,0.08) 0%, rgba(0,212,255,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-[-1] block dark:hidden"
        style={{
          width: "700px", height: "700px",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(108,99,255,0.05) 0%, rgba(0,212,255,0.02) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Badge */}
      <div className="float border border-accent/20 rounded-full bg-accent/5 px-4 py-1.5 text-[0.65rem] md:text-xs font-semibold tracking-widest uppercase mb-8 text-accent shadow-sm"
        style={{ color: "var(--accent-1)" }}>
        ✦ Colectivo Transmedia · Cali, Colombia
      </div>

      {/* Main headline */}
      <h1
        ref={titleRef}
        className="text-center font-space leading-[1.05] tracking-tight mb-5"
        style={{
          fontSize: "clamp(2rem, 5vw, 4.5rem)", // Reduced sizes for cleaner typography
          fontWeight: 800,
          transition: "transform 0.1s ease",
        }}
      >
        <span className="gradient-text text-glow">Ciencia Densa,</span>
        <br />
        <span style={{ color: "var(--text-primary)" }}>Narrativa Ligera.</span>
      </h1>

      {/* Typewriter sub-headline */}
      <p
        className="text-center mb-10"
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1.15rem)", // Reduced text size for elegance
          color: "var(--text-secondary)",
          maxWidth: "580px",
          lineHeight: 1.6,
        }}
      >
        Transformamos{" "}
        <span style={{ color: "var(--accent-1)", fontWeight: 600 }}>
          {displayed}<span className="typewriter-cursor">|</span>
        </span>{" "}
        en narrativas visuales que conquistan inversionistas.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-16 w-full sm:w-auto">
        <button
          data-hover
          className="magnetic-btn w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-shadow"
          style={{
            background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
            color: "#fff",
            cursor: "none",
          }}
        >
          Ver Portafolio Interactivo →
        </button>
        <button
          data-hover
          className="magnetic-btn w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide clean-border bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          style={{ color: "var(--text-primary)", cursor: "none" }}
        >
          Agenda una Asesoría
        </button>
      </div>

      {/* Stats row - Flatter design replacing old cards */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mt-4 pt-8 border-t border-black/5 dark:border-white/5">
        {[
          { num: "3", unit: "Productos Híbridos", desc: "IA + Empatía Humana" },
          { num: "100%", unit: "Coautoría Moral", desc: "Plena propiedad tuya" },
          { num: "∞", unit: "Impacto Visual", desc: "Narrativas transmedia" },
        ].map((s, i) => (
          <div key={i} className="text-center" style={{ minWidth: 140 }}>
            <div className="gradient-text font-space font-black tracking-tighter" style={{ fontSize: "1.75rem" }}>{s.num}</div>
            <div className="font-semibold text-sm mt-1 mb-0.5" style={{ color: "var(--text-primary)" }}>{s.unit}</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-6 flex flex-col items-center gap-2" style={{ color: "var(--text-secondary)" }}>
        <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">Explorar</span>
        <div className="float-slow" style={{ fontSize: "1.2rem" }}>↓</div>
      </div>
    </section>
  );
}
