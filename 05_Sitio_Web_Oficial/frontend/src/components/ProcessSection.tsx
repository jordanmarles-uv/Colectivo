"use client";
import { useState, useRef, useEffect } from "react";

const steps = [
  {
    step: "01",
    title: "La Ciencia Llega Cruda",
    desc: "Recibes un paper de 80 páginas, un Excel lleno de estadísticas o un pitch deck con 40 diapositivas de texto.",
    icon: "📄",
    color: "#6C63FF",
  },
  {
    step: "02",
    title: "La IA Extrae lo Esencial",
    desc: "Nuestros agentes leen, clasifican y extraen las métricas críticas, tendencias y la 'analogía del mundo real' perfecta para cada dato.",
    icon: "🤖",
    color: "#9D4EDD",
  },
  {
    step: "03",
    title: "El Humano Inyecta el Alma",
    desc: "Nosotros trazamos las ilustraciones, elegimos las tipografías cálidas, grabamos testimonios reales y diseñamos la experiencia emocional que la IA no puede inventar.",
    icon: "🎨",
    color: "#00D4FF",
  },
  {
    step: "04",
    title: "Tu Ciencia Conquista",
    desc: "Un Scrollytelling interactivo, un Pitch Deck de clase VC o una infografía viral que tu audiencia comprende en segundos.",
    icon: "🚀",
    color: "#FF6B9D",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep(s => (s + 1) % steps.length);
    }, 2800);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section className="relative py-32 px-6 scene">
      {/* Horizontal line BG */}
      <div className="absolute left-0 right-0" style={{ top: "50%", height: 1, background: "rgba(108,99,255,0.1)" }} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block glass neon-border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: "#00D4FF" }}>
            Metodología
          </div>
          <h2
            className="font-space font-black"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", lineHeight: 1.1 }}
          >
            El Proceso{" "}
            <span className="gradient-text-2">Fábrica Híbrida</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #6C63FF, #00D4FF, #FF6B9D, transparent)", zIndex: 0 }} />

          {steps.map((s, i) => (
            <div
              key={i}
              data-hover
              onClick={() => { setActiveStep(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
              className="relative flex flex-col items-center text-center cursor-none"
              style={{ zIndex: 1 }}
            >
              {/* Icon bubble */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 transition-all duration-500"
                style={{
                  background: activeStep === i ? `linear-gradient(135deg, ${s.color}, ${s.color}80)` : "rgba(255,255,255,0.05)",
                  boxShadow: activeStep === i ? `0 0 30px ${s.color}60, 0 0 60px ${s.color}20` : "none",
                  border: `2px solid ${activeStep === i ? s.color : "rgba(255,255,255,0.1)"}`,
                  transform: activeStep === i ? "scale(1.2)" : "scale(1)",
                }}
              >
                {s.icon}
              </div>

              <div className="text-xs font-black tracking-widest mb-2" style={{ color: activeStep === i ? s.color : "rgba(255,255,255,0.2)" }}>
                {s.step}
              </div>
              <h3 className="font-space font-bold text-sm mb-3 transition-colors duration-300" style={{ color: activeStep === i ? "#fff" : "rgba(255,255,255,0.4)" }}>
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed transition-all duration-300" style={{ color: activeStep === i ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-12 flex justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: activeStep === i ? 40 : 12,
                background: activeStep === i ? `linear-gradient(to right, ${s.color}, ${s.color}80)` : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
