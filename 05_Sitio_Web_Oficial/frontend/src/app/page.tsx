"use client";
import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TranslatorDemo from "@/components/TranslatorDemo";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative transition-colors duration-300">
      {/* Global interactive elements */}
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

      <Footer />
    </main>
  );
}
