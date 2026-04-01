"use client";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: "🧬",
    title: "Memorias Scrollytelling",
    tagline: "Tu investigación como una película interactiva",
    description:
      "La IA analiza cientos de páginas de datos. Nosotros los convertimos en una experiencia web inmersiva donde el usuario descubre la ciencia al hacer scroll, con audio, ilustraciones cálidas y métricas que cobran vida.",
    color: "#6C63FF",
    stats: "→ Hasta 8× más comprensión que un PDF tradicional",
  },
  {
    icon: "💡",
    title: "Pitch Deck Terapéutico",
    tagline: "Tu historia personal, tu mejor argumento de venta",
    description:
      "Un agente IA reconstruye tu modelo financiero al estándar de Silicon Valley. Luego tú y nosotros ensayamos 1-a-1 tu pitch para que el CEO salga con confianza, carisma y la historia de vida que enamora a los fondos de capital.",
    color: "#00D4FF",
    stats: "→ El 72% de las rondas se ganan en los primeros 90 segundos",
  },
  {
    icon: "📊",
    title: "Kit de Traducción de Datos",
    tagline: "Un paper de 60 páginas, convertido en 1 infografía viral",
    description:
      "La IA lee el documento y encuentra la analogía perfecta del mundo real. Nosotros la dibujamos con estética premium para que cualquier persona en LinkedIn o Instagram la entienda y comparta en segundos.",
    color: "#FF6B9D",
    stats: "→ 12× más alcance orgánico en redes sociales científicas",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [tilt, setTilt] = useState<Record<number, { x: number; y: number }>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt(prev => ({ ...prev, [idx]: { x, y } }));
  };

  const handleMouseLeave = (idx: number) => {
    setTilt(prev => ({ ...prev, [idx]: { x: 0, y: 0 } }));
    setActiveCard(null);
  };

  return (
    <section ref={sectionRef} className="relative py-32 px-6 scene">
      {/* Section header */}
      <div className="text-center mb-20">
        <div
          className="inline-block glass neon-border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "#6C63FF" }}
        >
          Productos Híbridos
        </div>
        <h2
          className="font-space font-black mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
        >
          <span style={{ color: "#fff" }}>Ciencia con </span>
          <span className="gradient-text">Alma</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: "1rem" }}>
          La IA agiliza el proceso. La sensibilidad humana lo hace irresistible.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            data-hover
            className="relative overflow-hidden rounded-3xl p-8 cursor-none transition-all duration-300"
            style={{
              background: activeCard === i
                ? `linear-gradient(135deg, rgba(${svc.color === "#6C63FF" ? "108,99,255" : svc.color === "#00D4FF" ? "0,212,255" : "255,107,157"},0.15) 0%, transparent 100%)`
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeCard === i ? svc.color + "50" : "rgba(255,255,255,0.07)"}`,
              transform: tilt[i]
                ? `perspective(1000px) rotateX(${tilt[i].y}deg) rotateY(${tilt[i].x}deg) scale(1.02)`
                : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
              boxShadow: activeCard === i ? `0 30px 60px ${svc.color}25` : "none",
              transition: "transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease",
            }}
            onMouseMove={e => handleMouseMove(e, i)}
            onMouseEnter={() => setActiveCard(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            {/* Glow dot top-right */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${svc.color}20 0%, transparent 70%)`, transform: "translate(30%, -30%)" }}
            />

            <div className="text-4xl mb-5">{svc.icon}</div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: svc.color }}
            >
              {svc.tagline}
            </div>
            <h3 className="font-space font-bold text-xl mb-4" style={{ color: "#fff" }}>
              {svc.title}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              {svc.description}
            </p>
            <div
              className="text-xs font-semibold rounded-full px-4 py-2 inline-block"
              style={{ background: svc.color + "20", color: svc.color }}
            >
              {svc.stats}
            </div>

            {/* Border gradient on active */}
            {activeCard === i && (
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${svc.color}15, transparent)`, zIndex: -1 }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
