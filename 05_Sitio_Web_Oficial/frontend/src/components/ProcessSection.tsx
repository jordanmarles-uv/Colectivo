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

"use client";
import { useState, useRef, useEffect } from "react";

const steps = [
  { step: "01", title: "Auditoría Profunda", desc: "Analizamos tu data bruta, identificamos el valor oculto y definimos el ángulo narrativo ganador.", color: "var(--accent-1)", icon: "🔬" },
  { step: "02", title: "Estructuración IA", desc: "Nuestros agentes extraen patrones, organizan la arquitectura de la información y proponen flujos lógicos.", color: "var(--accent-2)", icon: "🤖" },
  { step: "03", title: "Dirección Humana", desc: "Filtramos la información, le damos tono de voz y aplicamos el storytelling que conecta emocionalmente.", color: "var(--accent-3)", icon: "✍️" },
  { step: "04", title: "Diseño y Lanzamiento", desc: "Desarrollamos el producto final (Pitch, Web o Kit) con diseño top-tier listo para impresionar.", color: "var(--accent-1)", icon: "🚀" }
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
    <section className="relative py-32 scene bg-black/[0.01] dark:bg-white/[0.01]" id="proceso">

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block border border-accent/20 bg-accent/5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
            style={{ color: "var(--accent-2)" }}>
            Metodología
          </div>
          <h2
            className="font-space font-black tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)", lineHeight: 1.1 }}
          >
            Nuestra <span className="gradient-text-2">Fábrica Híbrida</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--border-strong), transparent)", zIndex: 0 }} />

          {steps.map((s, i) => (
            <div
              key={i}
              data-hover
              onClick={() => { setActiveStep(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
              className={`relative flex flex-col items-center text-center cursor-pointer transition-opacity duration-300 ${activeStep !== i ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}
              style={{ zIndex: 1 }}
            >
              {/* Icon bubble */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-500 bg-white dark:bg-[#0f1015]"
                style={{
                  color: s.color,
                  boxShadow: activeStep === i ? "var(--glass-shadow)" : "none",
                  border: `1px solid ${activeStep === i ? s.color : "var(--border-subtle)"}`,
                  transform: activeStep === i ? "scale(1.05) translateY(-5px)" : "scale(1)",
                }}
              >
                {s.icon}
              </div>

              <div className="text-[0.65rem] font-black tracking-[0.2em] uppercase mb-3 transition-colors" style={{ color: activeStep === i ? s.color : "var(--text-secondary)" }}>
                Paso {s.step}
              </div>
              <h3 className="font-space font-bold text-sm mb-3 transition-colors duration-300 tracking-tight" style={{ color: "var(--text-primary)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed transition-all duration-300" style={{ color: "var(--text-secondary)", minHeight: "80px" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-16 flex justify-center gap-3">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => { setActiveStep(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: activeStep === i ? 48 : 16,
                background: activeStep === i ? s.color : "var(--border-strong)",
              }}
              aria-label={`View step ${s.step}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
