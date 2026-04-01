"use client";
import { useState } from "react";

const MODES = [
  {
    key: "dense",
    label: "Modo Científico",
    emoji: "🔬",
    title: "Análisis Comparativo de Marcadores Inflamatorios en Matrices Biológicas Derivadas de Tejido Adiposo Visceral en Poblaciones con Síndrome Metabólico",
    body: "Se realizó un estudio retrospectivo longitudinal con una muestra de n=342 sujetos diagnosticados con síndrome metabólico (IDF criteria 2009) en el cual se evaluaron biomarcadores séricos incluídos PCR, IL-6, IL-1β, TNF-α y adiponectina. Los resultados indican correlaciones estadísticamente significativas (p<0.001, r=0.78) entre los niveles de adiponectina y la reducción del índice HOMA-IR en sujetos intervenidos con...",
    color: "#9D4EDD",
    bg: "rgba(157,78,221,0.06)",
    border: "rgba(157,78,221,0.15)",
  },
  {
    key: "light",
    label: "Modo Narrativa",
    emoji: "✨",
    title: "Descubrieron que la grasa abdominal puede inflamar el cuerpo como si tuvieras fiebre constante — y así lo frenamos.",
    body: "Investigamos a 342 personas con síndrome metabólico durante 2 años. El hallazgo más poderoso: una proteína llamada 'adiponectina' actúa como un bombero natural del cuerpo. Cuando sus niveles suben, la inflamación cae en picada. Lo revolucionario: identificamos qué estilo de vida la dispara— y lo visualizamos en una sola infografía.",
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.06)",
    border: "rgba(0,212,255,0.15)",
  },
];

export default function TranslatorDemo() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 px-6 scene">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass neon-border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: "#FF6B9D" }}>
            Demo Interactivo
          </div>
          <h2 className="font-space font-black mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#fff", lineHeight: 1.1 }}>
            Traduce con{" "}
            <span style={{ background: "linear-gradient(135deg,#FF6B9D,#6C63FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>un clic</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 500, margin: "0 auto" }}>
            Arrastra el interruptor para ver cómo transformamos ciencia densa en narrativa que cualquier inversionista entiende.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1.5 flex gap-2" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {MODES.map((m, i) => (
              <button
                key={m.key}
                data-hover
                onClick={() => setActive(i)}
                className="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-400 cursor-none flex items-center gap-2"
                style={{
                  background: active === i ? `linear-gradient(135deg, ${m.color}, ${m.color}80)` : "transparent",
                  color: active === i ? "#fff" : "rgba(255,255,255,0.4)",
                  boxShadow: active === i ? `0 0 20px ${m.color}40` : "none",
                }}
              >
                <span>{m.emoji}</span> {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <div
          key={active}
          className="rounded-3xl p-10 transition-all duration-500"
          style={{
            background: MODES[active].bg,
            border: `1px solid ${MODES[active].border}`,
            boxShadow: `0 30px 80px ${MODES[active].color}15`,
            animation: "fadeScaleIn 0.4s ease",
          }}
        >
          <div className="text-xs font-black tracking-widest uppercase mb-5" style={{ color: MODES[active].color }}>
            {MODES[active].emoji} {MODES[active].label}
          </div>
          <h3
            className="font-space font-bold mb-6 leading-snug"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#fff" }}
          >
            {MODES[active].title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            {MODES[active].body}
          </p>

          {active === 1 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {["🔥 Inflamación crónica", "💊 Adiponectina = Bombero Natural", "📈 Impacto en 342 personas", "🎯 Intervención visualizable"].map(tag => (
                <span key={tag} className="rounded-full px-4 py-2 text-xs font-semibold"
                  style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <style>{`
          @keyframes fadeScaleIn {
            from { opacity: 0; transform: translateY(10px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
      </div>
    </section>
  );
}
