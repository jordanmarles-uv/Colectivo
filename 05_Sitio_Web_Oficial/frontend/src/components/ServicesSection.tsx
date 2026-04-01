import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    icon: "🧬",
    title: "Memorias Scrollytelling",
    tagline: "Tu investigación como experiencia interactiva",
    description:
      "La IA procesa extensos repositorios de datos y nosotros estructuramos el recorrido. Convierte tu paper en una experiencia inmersiva web donde cada scroll desata ilustraciones cálidas, audio y métricas que cobran vida de forma natural y accesible.",
    color: "var(--accent-1)",
    stats: "→ Hasta 8× más comprensión sin fricción",
    image: "/images/service_scrollytelling_1775027715969.png",
  },
  {
    icon: "💡",
    title: "Pitch Deck Terapéutico",
    tagline: "Tu historia personal como argumento clave",
    description:
      "Un agente IA reconstruye tu modelo financiero al estándar de Silicon Valley. Luego trabajamos 1-a-1 tu pitch para que salgas con la claridad, carisma y storytelling que todo fondo de capital busca antes de invertir.",
    color: "var(--accent-2)",
    stats: "→ Captura la atención en los primeros 90 segundos",
    image: "/images/service_pitch_deck_1775027736072.png",
  },
  {
    icon: "📊",
    title: "Kit de Traducción de Datos",
    tagline: "De 60 páginas a un ecosistema viral",
    description:
      "Nuestros algoritmos escanean el clúster de información para encontrar la analogía del mundo real perfecta. Después la sintetizamos con una dirección de arte minimalista para que cualquier usuario de LinkedIn entienda tu tesis en segundos.",
    color: "var(--accent-3)",
    stats: "→ Alcance orgánico masivo y validación social",
    image: "/images/service_data_kit_1775027766716.png",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-32 scene" id="servicios">
      
      {/* Background container for cleaner separation */}
      <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.01] pointer-events-none" />

      {/* Section header */}
      <div className="text-center mb-24 px-6 relative z-10">
        <div
          className="inline-block border border-accent/20 bg-accent/5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
          style={{ color: "var(--accent-1)", borderColor: "var(--glass-border)" }}
        >
          Productos Híbridos
        </div>
        <h2
          className="font-space font-black mb-4 tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
        >
          Ciencia con <span className="gradient-text">Alma</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: "1rem" }}>
          La inteligencia artificial escala el ritmo de análisis. La sensibilidad y empatía humana construyen el puente.
        </p>
      </div>

      {/* Elegant alternating sections without heavy cards */}
      <div className="w-full relative z-10">
        {services.map((svc, i) => {
          const isEven = i % 2 === 0;

          return (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 lg:py-32 ${!isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="w-full md:w-5/12 mb-12 md:mb-0">
                <div className="text-4xl mb-6 opacity-80">{svc.icon}</div>
                <div
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                  style={{ color: svc.color }}
                >
                  {svc.tagline}
                </div>
                <h3 className="font-space font-extrabold text-3xl mb-6 tracking-tight text-glow" style={{ color: "var(--text-primary)" }}>
                  {svc.title}
                </h3>
                <p className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                  {svc.description}
                </p>
                <div
                  className="text-xs font-semibold rounded-full px-5 py-2.5 inline-block shadow-sm clean-border"
                  style={{ background: "transparent", color: "var(--text-primary)" }}
                >
                  <span style={{ color: svc.color, marginRight: "4px" }}>✦</span> {svc.stats.replace('→', '')}
                </div>
              </div>

              {/* Graphic / Image */}
              <div className="w-full md:w-1/2 relative flex justify-center items-center">
                {/* Image blending strategy: 
                    dark:mix-blend-screen drops black, keeps color and white
                    but original has white background so mix-blend-multiply in light mode drops white and keeps color.
                    In dark mode since background is white we use an invert filter maybe, or we just rely on screen/plus-lighter? 
                    Wait, if background is white, screen will just look like a white box. 
                    Best trick for dark mode: dark:mix-blend-difference or use a drop filter.
                    Actually, since we generated with "light gray or white background" we use dark:invert dark:mix-blend-screen or dark:opacity-90 dark:mix-blend-lighten 
                    Let's use dark:invert dark:hue-rotate-180 so it keeps its colors but background becomes black.
                */}
                <div className="relative w-full aspect-square max-w-[500px]">
                  <Image 
                    src={svc.image} 
                    alt={svc.title}
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-105 pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 dark:brightness-110"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
