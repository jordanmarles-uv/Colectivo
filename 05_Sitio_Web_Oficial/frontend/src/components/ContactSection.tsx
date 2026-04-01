"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    background: focused === field ? "var(--bg-secondary)" : "transparent",
    border: `1px solid ${focused === field ? "var(--accent-1)" : "var(--border-subtle)"}`,
    borderRadius: 14,
    padding: "14px 18px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "var(--glass-shadow)" : "none",
  });

  const services = ["Scrollytelling", "Pitch Deck Terapéutico", "Kit de Datos", "Consultoría"];

  return (
    <section className="relative py-32 scene" id="contacto">
      {/* Subtle BG glow instead of neon */}
      <div className="absolute rounded-full pointer-events-none opacity-30 dark:opacity-20" style={{
        width: 600, height: 600, bottom: -100, right: -100,
        background: "radial-gradient(circle, var(--accent-3) 0%, transparent 60%)",
        filter: "blur(100px)", zIndex: 0
      }} />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Side: Copy & Info */}
        <div>
          <div className="inline-block border border-accent/20 bg-accent/5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm"
            style={{ color: "var(--accent-3)", borderColor: "var(--glass-border)" }}>
            Contáctanos
          </div>
          <h2 className="font-space font-black mb-6 tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)", lineHeight: 1.1 }}>
            ¿Tu ciencia merece<br/>
            <span className="gradient-text-3">ser escuchada?</span>
          </h2>
          <p className="mb-10 text-[1.05rem]" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Agenda una asesoría gratuita de 20 minutos. Sin compromisos. Solo una conversación honesta sobre si tu proyecto y el nuestro encajan.
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "📍", label: "Cali, Valle del Cauca", sub: "Colombia" },
              { icon: "✉️", label: "hola@colectivotransmedia.co", sub: "Respondemos en < 24h" },
              { icon: "🔗", label: "Programa NIDO & Ecosystem", sub: "Aliado estratégico" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl px-5 py-4 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                style={{ border: "1px solid var(--border-subtle)" }}>
                <span className="text-2xl opacity-90">{item.icon}</span>
                <div>
                  <div style={{ color: "var(--text-primary)", fontSize: "0.95rem", fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          {sent ? (
            <div className="rounded-3xl p-12 text-center bg-white dark:bg-[#0f1015]"
              style={{ border: "1px solid var(--accent-1)", boxShadow: "var(--glass-shadow)" }}>
              <div className="text-5xl mb-6 float inline-block">🚀</div>
              <h3 className="font-space font-bold text-2xl mb-4 gradient-text">¡Mensaje enviado!</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Te contactaremos en menos de 24 horas para agendar tu asesoría. Mientras, explora nuestro portafolio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 flex flex-col gap-6 bg-white dark:bg-[#0f1015] shadow-xl"
              style={{ border: "1px solid var(--border-subtle)" }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs mb-2 block font-semibold tracking-wide" style={{ color: "var(--text-secondary)" }}>Nombre</label>
                  <input
                    required
                    value={form.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label className="text-xs mb-2 block font-semibold tracking-wide" style={{ color: "var(--text-secondary)" }}>Organización</label>
                  <input
                    value={form.org}
                    onFocus={() => setFocused("org")}
                    onBlur={() => setFocused(null)}
                    onChange={e => setForm({ ...form, org: e.target.value })}
                    placeholder="Startup / Univ."
                    style={inputStyle("org")}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs mb-2 block font-semibold tracking-wide" style={{ color: "var(--text-secondary)" }}>Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@empresa.com"
                  style={inputStyle("email")}
                />
              </div>

              <div>
                <label className="text-xs mb-3 block font-semibold tracking-wide" style={{ color: "var(--text-secondary)" }}>¿Qué necesitas?</label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, type: s })}
                      className="rounded-xl px-4 py-3 text-xs font-semibold text-left transition-all duration-300"
                      style={{
                        background: form.type === s ? "var(--bg-secondary)" : "transparent",
                        border: `1px solid ${form.type === s ? "var(--accent-1)" : "var(--border-subtle)"}`,
                        color: form.type === s ? "var(--text-primary)" : "var(--text-secondary)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs mb-2 block font-semibold tracking-wide" style={{ color: "var(--text-secondary)" }}>Cuéntanos más</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="¿En qué etapa está tu proyecto? ¿Qué historia quieres contar?"
                  style={{ ...inputStyle("msg"), resize: "none" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--accent-1)",
                  color: "#fff",
                  boxShadow: "0 10px 30px -10px var(--accent-1)",
                }}
              >
                Enviar y Agendar Asesoría ✦
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
