"use client";
import { useState } from "react";

const MODES = [
  {
    key: "dense",
    label: "Modo Científico",
    emoji: "🔬",
    title: "Análisis Comparativo de Marcadores Inflamatorios en Matrices Biológicas Derivadas de Tejido Adiposo Visceral en Poblaciones con Síndrome Metabólico",
    body: "Se realizó un estudio retrospectivo longitudinal con una muestra de n=342 sujetos diagnosticados con síndrome metabólico (IDF criteria 2009) en el cual se evaluaron biomarcadores séricos incluídos PCR, IL-6, IL-1β, TNF-α y adiponectina. Los resultados indican correlaciones estadísticamente significativas (p<0.001, r=0.78) entre los niveles de adiponectina y la reducción del índice HOMA-IR en sujetos intervenidos con...",
    color: "var(--accent-1)",
    bg: "var(--bg-secondary)",
    border: "var(--border-subtle)",
  },
  {
    key: "light",
    label: "Modo Narrativa",
    emoji: "✨",
    title: "Descubrieron que la grasa abdominal puede inflamar el cuerpo como si tuvieras fiebre constante — y así lo frenamos.",
    body: "Investigamos a 342 personas con síndrome metabólico durante 2 años. El hallazgo más poderoso: una proteína llamada 'adiponectina' actúa como un bombero natural del cuerpo. Cuando sus niveles suben, la inflamación cae en picada. Lo revolucionario: identificamos qué estilo de vida la dispara— y lo visualizamos en una sola infografía.",
    color: "var(--accent-2)",
    bg: "var(--bg-secondary)",
    border: "var(--border-subtle)",
  },
];

export default function TranslatorDemo() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 px-6 scene" id="demo">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border border-accent/20 bg-accent/5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
            style={{ color: "var(--accent-3)", borderColor: "var(--glass-border)" }}>
            Demo Interactivo
          </div>
          <h2 className="font-space font-black mb-4 tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--text-primary)", lineHeight: 1.1 }}>
            Traduce con{" "}
            <span className="gradient-text-3">un clic</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Arrastra el interruptor para ver cómo transformamos ciencia densa en narrativa que cualquier inversionista entiende.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-black/[0.03] dark:bg-white/[0.03] rounded-full p-1.5 flex gap-2 border border-black/[0.05] dark:border-white/[0.08]">
            {MODES.map((m, i) => (
              <button
                key={m.key}
                onClick={() => setActive(i)}
                className="rounded-full px-6 py-3 text-sm font-semibold transition-all duration-400 flex items-center gap-2"
                style={{
                  background: active === i ? m.color : "transparent",
                  color: active === i ? "#fff" : "var(--text-secondary)",
                  boxShadow: active === i ? `0 10px 20px -5px ${m.color === 'var(--accent-1)' ? 'rgba(108,99,255,0.4)' : 'rgba(0,212,255,0.4)'}` : "none",
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
          className="rounded-3xl p-8 md:p-12 transition-all duration-500 bg-white dark:bg-[#0f1015] shadow-xl"
          style={{
            border: `1px solid var(--border-subtle)`,
            animation: "fadeScaleIn 0.4s ease",
          }}
        >
          <div className="text-xs font-black tracking-widest uppercase mb-6 flex items-center gap-2" style={{ color: MODES[active].color }}>
            <span className="w-8 h-[1px]" style={{ background: MODES[active].color }}></span>
            {MODES[active].emoji} {MODES[active].label}
          </div>
          <h3
            className="font-space font-bold mb-6 leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "var(--text-primary)" }}
          >
            {MODES[active].title}
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
            {MODES[active].body}
          </p>

          {active === 1 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { tag: "🔥 Inflamación crónica", color: "var(--accent-3)" },
                { tag: "💊 Adiponectina = Bombero Natural", color: "var(--accent-1)" },
                { tag: "📈 Impacto en 342 personas", color: "var(--accent-2)" },
                { tag: "🎯 Intervención visualizable", color: "var(--accent-1)" }
              ].map(item => (
                <span key={item.tag} className="rounded-xl px-4 py-2 text-xs font-bold border"
                  style={{ background: "transparent", color: item.color, borderColor: "var(--border-subtle)" }}>
                  {item.tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <style>{`
          @keyframes fadeScaleIn {
            from { opacity: 0; transform: translateY(10px) scale(0.99); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
      </div>
    </section>
  );
}
