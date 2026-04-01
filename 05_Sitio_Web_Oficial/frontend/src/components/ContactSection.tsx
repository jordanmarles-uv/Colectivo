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
    background: focused === field ? "rgba(108,99,255,0.08)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "rgba(108,99,255,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 14,
    padding: "14px 18px",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "0 0 20px rgba(108,99,255,0.15)" : "none",
  });

  const services = ["Scrollytelling", "Pitch Deck Terapéutico", "Kit de Datos", "Consultoría"];

  return (
    <section className="relative py-32 px-6 scene" id="contacto">
      {/* BG glow */}
      <div className="absolute rounded-full pointer-events-none" style={{
        width: 500, height: 500, bottom: 0, right: 0,
        background: "radial-gradient(circle, rgba(255,107,157,0.08) 0%, transparent 70%)",
        filter: "blur(60px)", transform: "translate(30%, 40%)",
      }} />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <div className="inline-block glass neon-border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: "#FF6B9D" }}>
            Contáctanos
          </div>
          <h2 className="font-space font-black mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", lineHeight: 1.1 }}>
            ¿Tu ciencia merece<br/>
            <span className="gradient-text">ser escuchada?</span>
          </h2>
          <p className="mb-10" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
            Agenda una asesoría gratuita de 20 minutos. Sin compromisos. Solo una conversación honesta sobre si tu proyecto y el nuestro encajan.
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "📍", label: "Cali, Valle del Cauca", sub: "Colombia" },
              { icon: "✉️", label: "hola@colectivotransmedia.co", sub: "Respondemos en < 24h" },
              { icon: "🔗", label: "Programa NIDO & Ecosystem", sub: "Aliado estratégico" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 glass rounded-2xl px-5 py-4"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div>
          {sent ? (
            <div className="glass rounded-3xl p-12 text-center"
              style={{ border: "1px solid rgba(108,99,255,0.3)", boxShadow: "0 0 60px rgba(108,99,255,0.15)" }}>
              <div className="text-5xl mb-4 float">🚀</div>
              <h3 className="font-space font-bold text-xl mb-3 gradient-text">¡Mensaje enviado!</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                Te contactaremos en menos de 24 horas para agendar tu asesoría. Mientras, explora nuestro portafolio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 flex flex-col gap-5"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 mb-2 block font-semibold tracking-wide">Nombre</label>
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
                  <label className="text-xs text-white/40 mb-2 block font-semibold tracking-wide">Organización</label>
                  <input
                    value={form.org}
                    onFocus={() => setFocused("org")}
                    onBlur={() => setFocused(null)}
                    onChange={e => setForm({ ...form, org: e.target.value })}
                    placeholder="Startup / Universidad"
                    style={inputStyle("org")}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/40 mb-2 block font-semibold tracking-wide">Email</label>
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
                <label className="text-xs text-white/40 mb-3 block font-semibold tracking-wide">¿Qué necesitas?</label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      data-hover
                      onClick={() => setForm({ ...form, type: s })}
                      className="rounded-xl px-4 py-3 text-xs font-semibold text-left transition-all duration-300 cursor-none"
                      style={{
                        background: form.type === s ? "rgba(108,99,255,0.25)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${form.type === s ? "rgba(108,99,255,0.6)" : "rgba(255,255,255,0.07)"}`,
                        color: form.type === s ? "#fff" : "rgba(255,255,255,0.4)",
                        boxShadow: form.type === s ? "0 0 15px rgba(108,99,255,0.2)" : "none",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-white/40 mb-2 block font-semibold tracking-wide">Cuéntanos más</label>
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
                data-hover
                type="submit"
                className="magnetic-btn w-full py-4 rounded-2xl font-bold text-sm tracking-wide cursor-none transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #00D4FF)",
                  boxShadow: "0 0 30px rgba(108,99,255,0.4)",
                  color: "#fff",
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
