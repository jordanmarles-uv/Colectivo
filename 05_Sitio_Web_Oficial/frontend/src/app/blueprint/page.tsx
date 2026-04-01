'use client';

import React, { useState, useEffect } from 'react';

export default function BlueprintPage() {
  const [activeSection, setActiveSection] = useState('resumen');

  const sections = [
    { id: 'resumen', title: 'Resumen Ejecutivo', icon: '📋' },
    { id: 'ecosistema', title: 'Ecosistema & NIDO', icon: '🌐' },
    { id: 'operacion', title: 'Plan Operativo', icon: '⚙️' },
    { id: 'legal', title: 'Marco Legal & UVT', icon: '⚖️' },
    { id: 'transmedia', title: 'Estrategia Transmedia', icon: '🎬' },
    { id: 'checklist', title: 'Checklist Crítico', icon: '✅' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-1)] selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 grid-overlay opacity-20 pointer-events-none" />
      
      {/* Floating Navigation Menu (Sidebar) */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={`group flex items-center gap-4 transition-all duration-500 ${
              activeSection === section.id ? 'translate-x-2' : ''
            }`}
          >
            <span className={`w-12 h-12 rounded-2xl glass flex items-center justify-center text-xl transition-all duration-500 shadow-lg ${
              activeSection === section.id 
                ? 'scale-110 border-[var(--accent-1)] text-[var(--accent-1)] bg-[var(--accent-1)] bg-opacity-10 ring-4 ring-[var(--accent-1)] ring-opacity-10' 
                : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
            }`}>
              {section.icon}
            </span>
            <div className={`flex flex-col items-start transition-all duration-500 ${
              activeSection === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
            }`}>
               <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-1)] opacity-70">Sección</span>
               <span className="text-sm font-bold font-[var(--font-space)] whitespace-nowrap text-[var(--text-primary)]">
                {section.title}
              </span>
            </div>
          </button>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 relative">
        {/* Header */}
        <header className="mb-24 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-[10px] font-black tracking-[0.2em] uppercase mb-6 text-[var(--accent-1)] border-[var(--accent-1)] border-opacity-20">
            Documento de Arquitectura Interna • 2024-2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 font-[var(--font-space)] tracking-tighter leading-[0.9]">
            BLUE<span className="gradient-text">PRINT</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            Visión estratégica, flujo operativo y blindaje legal para el Colectivo de Comunicación Científica Transmedia en Cali.
          </p>
          <div className="flex justify-center gap-4 mt-12">
            <div className="flex -space-x-3">
              {[1,2].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] bg-gradient-to-tr from-[var(--accent-1)] to-[var(--accent-2)]" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest opacity-50">Acceso Privado</p>
              <p className="text-sm font-bold">2 Fundadores Co-Autores</p>
            </div>
          </div>
        </header>

        {/* Section: Resumen */}
        <section id="resumen" className="mb-40 scroll-mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-3xl shadow-xl">📋</div>
            <div>
              <h2 className="text-4xl font-black font-[var(--font-space)] tracking-tight">Resumen Ejecutivo</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--accent-1)] to-transparent rounded-full mt-2" />
            </div>
          </div>
          <div className="glass p-10 rounded-[3rem] space-y-8 text-xl leading-relaxed border-t-2 border-t-white dark:border-t-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-1)] opacity-5 blur-[60px] rounded-full" />
            <p className="relative z-10">
              El Valle del Cauca está alineando su política de competitividad alrededor de 7 focos estratégicos. La estrategia <strong className="text-[var(--accent-1)]">NIDO</strong> ha impulsado +300 startups, creando una demanda real por narrativas que traduzcan la ciencia densa en inversión.
            </p>
            <p className="relative z-10 text-[var(--text-secondary)] text-lg">
              Operamos como <strong>No Responsables de IVA</strong> (tope ~174M-183M COP), manteniendo la <strong>paternidad intelectual inalienable</strong> bajo la Ley 23 de 1982.
            </p>
          </div>
        </section>

        {/* Section: Ecosistema */}
        <section id="ecosistema" className="mb-40 scroll-mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-3xl shadow-xl">🌐</div>
            <h2 className="text-4xl font-black font-[var(--font-space)] tracking-tight">Ecosistema & NIDO</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2.5rem] border-b-4 border-b-[var(--accent-2)]">
              <h3 className="font-bold text-[var(--accent-2)] mb-6 uppercase text-xs tracking-[0.2em]">Aliados Estratégicos</h3>
              <ul className="space-y-4">
                {[
                  { name: 'NIDO', desc: 'Distrito de IA y startups (Salud, Fintech).' },
                  { name: 'REDDI', desc: 'Centro de innovación y patentes.' },
                  { name: 'Parquesoft', desc: 'Incubadora tecnológica regional.' },
                  { name: 'Zonamerica', desc: 'Campus de negocios global en Cali.' }
                ].map(aliado => (
                  <li key={aliado.name} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-2)] mt-2" />
                    <div>
                      <p className="font-bold text-sm">{aliado.name}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{aliado.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-[2.5rem] border-b-4 border-b-[var(--accent-3)]">
              <h3 className="font-bold text-[var(--accent-3)] mb-6 uppercase text-xs tracking-[0.2em]">Focos del Valle</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Biodiversidad', 'Agroindustria', 'Salud', 'Salud Tech', 'Energía', 'Turismo', 'Educación', 'Logística'].map((foco) => (
                  <div key={foco} className="px-4 py-3 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-bold text-center">
                    {foco}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Operacion */}
        <section id="operacion" className="mb-40 scroll-mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-3xl shadow-xl">⚙️</div>
            <h2 className="text-4xl font-black font-[var(--font-space)] tracking-tight">Plan Operativo</h2>
          </div>
          <div className="space-y-12">
            {[
              { phase: '0-1 Mes', title: 'Maqueta & Identidad', desc: 'Estructurar el branding transmedia y crear los primeros 3 casos "demo" (Salud y Logística) para mostrar capacidad.', color: 'var(--accent-1)' },
              { phase: '1-3 Meses', title: 'Tracción Inicial', desc: 'Contactos directos en Univalle y asistencia a Demo Days de NIDO. Pilotos estratégicos.', color: 'var(--accent-2)' },
              { phase: '3-6 Meses', title: 'Sostenibilidad', desc: 'Optimización de procesos internos y cálculo de rentabilidad por hora. Registro ante la DNDA.', color: 'var(--accent-3)' },
              { phase: '6-12 Meses', title: 'Escalabilidad', desc: 'Venta consultiva a laboratorios farmacéuticos y grandes exportadores del Valle.', color: '#020617' }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full glass border-2 border-[var(--border-subtle)] flex items-center justify-center font-black text-xs group-hover:border-[var(--accent-1)] transition-colors">
                    {i+1}
                  </div>
                  <div className="flex-1 w-px bg-[var(--border-subtle)] my-4 group-last:hidden" />
                </div>
                <div className="glass p-8 rounded-[2rem] flex-1 hover:shadow-2xl transition-all duration-500 border-l-[6px]" style={{ borderLeftColor: item.color }}>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{item.phase}</span>
                  <h4 className="text-2xl font-black font-[var(--font-space)] mb-3">{item.title}</h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Legal */}
        <section id="legal" className="mb-40 scroll-mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-3xl shadow-xl">⚖️</div>
            <h2 className="text-4xl font-black font-[var(--font-space)] tracking-tight">Estructura Legal</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 glass p-10 rounded-[3rem] border-2 border-[var(--accent-3)] bg-opacity-5 relative overflow-hidden">
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent-3)] opacity-10 blur-3xl rounded-full" />
               <h3 className="text-2xl font-black mb-6">Topes Críticos UVT</h3>
               <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2">Persona Natural General</p>
                  <p className="text-4xl font-black text-[var(--accent-3)]">~$174M <span className="text-lg opacity-40">/año</span></p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2">Exclusivo Entidades del Estado</p>
                  <p className="text-4xl font-black text-[var(--accent-2)]">~$199M <span className="text-lg opacity-40">/año</span></p>
                </div>
               </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="glass p-8 rounded-[2rem]">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-1)]" /> Paternidad Moral
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">Ley 23 de 1982: Los derechos morales son inalienables e irrenunciables. Siempre conservamos co-autoría.</p>
              </div>
              <div className="glass p-8 rounded-[2rem]">
                <h4 className="font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-2)]" /> Facturación
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">Obligatoriedad de factura electrónica para contratos B2B y universidades desde el inicio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Transmedia */}
        <section id="transmedia" className="mb-40 scroll-mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-3xl shadow-xl">🎬</div>
            <h2 className="text-4xl font-black font-[var(--font-space)] tracking-tight">Entregables de Impacto</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'One-Pagers', d: 'Gráficas densas pero legibles en 1 sola página.', icon: '📄', c: 'var(--accent-1)' },
              { t: 'Scrollytelling', d: 'Webs que cuentan historias al navegar.', icon: '🖱️', c: 'var(--accent-2)' },
              { t: 'Video Teasers', d: 'Clips de 90s para rondas de capital.', icon: '🎥', c: 'var(--accent-3)' },
              { t: 'Pitch Decks', d: 'Presentaciones modulares de alta estética.', icon: '💎', c: 'var(--accent-1)' },
              { t: 'Infografías', d: 'Traducción de resultados de I+D.', icon: '📊', c: 'var(--accent-2)' },
              { t: 'Dashboards', d: 'Paneles interactivos de métricas científicas.', icon: '📈', c: 'var(--accent-3)' },
            ].map(item => (
              <div key={item.t} className="glass p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 border-t-4" style={{borderTopColor: item.c}}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h5 className="font-black text-lg mb-2">{item.t}</h5>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Checklist */}
        <section id="checklist" className="mb-32 scroll-mt-20">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-3xl shadow-xl">✅</div>
            <h2 className="text-4xl font-black font-[var(--font-space)] tracking-tight">Checklist de Ejecución</h2>
          </div>
          <div className="bg-black dark:bg-[var(--accent-1)] text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full translate-x-20 -translate-y-20" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-8">Administrativo</h4>
                {[
                  'Actualizar RUT con actividad de diseño.',
                  'Habilitar facturador DIAN gratuito.',
                  'Configurar cuenta bancaria para pagos B2B.'
                ].map((t, i) => (
                  <div key={i} className="flex gap-4 items-center group cursor-pointer">
                    <div className="w-6 h-6 rounded-lg border-2 border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                       <div className="w-2 h-2 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                    <span className="text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">{t}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-8">Comercial / Producto</h4>
                {[
                  'Finalizar Demo Scrollytelling (Health).',
                  'Finalizar One-Pager (Logística).',
                  'Estructurar portafolio en PDF/Web.'
                ].map((t, i) => (
                  <div key={i} className="flex gap-4 items-center group cursor-pointer">
                    <div className="w-6 h-6 rounded-lg border-2 border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                       <div className="w-2 h-2 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                    <span className="text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="pt-20 border-t border-[var(--border-subtle)] opacity-50 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[var(--accent-1)] to-[var(--accent-2)]" />
             <span className="font-black font-[var(--font-space)] text-lg">Colectivo Transmedia</span>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-right">
            <p>Hecho en Cali, Colombia</p>
            <p className="mt-2 text-[var(--accent-1)]">Blueprint v1.0.2 • Abril 2026</p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Space+Grotesk:wght@300;400;700&display=swap');
        
        :root {
          --bg-primary-rgb: 255, 255, 255;
        }
        .dark {
          --bg-primary-rgb: 2, 6, 23;
        }
        
        body { 
          scroll-behavior: smooth !important;
        }
        .glass {
          background: rgba(var(--bg-primary-rgb), 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--border-subtle);
        }
        .grid-overlay {
          background-image: 
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 50%, var(--accent-3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
