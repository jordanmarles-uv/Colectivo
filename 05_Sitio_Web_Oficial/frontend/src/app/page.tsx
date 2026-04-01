import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TranslatorDemo from "@/components/TranslatorDemo";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="animated-bg min-h-screen relative">
      {/* Global interactive elements */}
      <ParticleCanvas />
      <CustomCursor />
      <Navbar />

      {/* Page Sections */}
      <section id="hero">
        <HeroSection />
      </section>

      <section id="servicios">
        <ServicesSection />
      </section>

      <section id="proceso">
        <ProcessSection />
      </section>

      <section id="demo">
        <TranslatorDemo />
      </section>

      <section id="contacto">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 py-12 px-8 text-center scene"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="font-space font-black text-lg gradient-text mb-2">Colectivo Transmedia</div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
          Cali, Valle del Cauca · Colombia · {new Date().getFullYear()} ·{" "}
          <span style={{ color: "rgba(108,99,255,0.6)" }}>Todos los derechos morales reservados (Ley 23 de 1982 - DNDA)</span>
        </p>
      </footer>
    </main>
  );
}
