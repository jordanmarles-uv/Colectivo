'use client';

import React, { useState, useEffect } from 'react';

// --- Reusable Components ---

const Badge = ({ children, color = 'var(--accent-1)' }: { children: React.ReactNode, color?: string }) => (
  <span className="px-3 py-1 rounded-full glass text-[10px] font-black tracking-widest uppercase border border-opacity-20" style={{ color, borderColor: color }}>
    {children}
  </span>
);

const Accordion = ({ title, children, icon }: { title: string, children: React.ReactNode, icon?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`glass rounded-2xl mb-4 transition-all duration-300 overflow-hidden ${isOpen ? 'ring-2 ring-[var(--accent-1)] ring-opacity-30' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left hover:bg-white hover:bg-opacity-5 transition-colors"
      >
        <div className="flex items-center gap-4">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="font-bold font-[var(--font-space)] text-lg">{title}</span>
        </div>
        <span className={`transform transition-transform duration-300 text-[var(--accent-1)] font-bold text-xl ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}>
        <div className="h-px bg-[var(--border-subtle)] mb-6" />
        <div className="text-[var(--text-secondary)] text-sm leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="glass w-full max-w-2xl max-h-[85vh] rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col overflow-hidden border-t-4 border-t-[var(--accent-1)]">
        <div className="p-8 flex justify-between items-center border-b border-[var(--border-subtle)]">
          <h3 className="text-2xl font-black font-[var(--font-space)]">{title}</h3>
          <button onClick={onClose} className="w-10 h-10 rounded-full glass flex items-center justify-center font-bold hover:scale-110 transition-transform">×</button>
        </div>
        <div className="p-8 overflow-y-auto custom-scrollbar space-y-6 text-[var(--text-secondary)]">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function BlueprintPage() {
  const [activeSection, setActiveSection] = useState('resumen');
  const [modalContent, setModalContent] = useState<{title: string, content: React.ReactNode} | null>(null);

  const sections = [
    { id: 'resumen', title: 'Resumen Ejecutivo', icon: '📋' },
    { id: 'ecosistema', title: 'Ecosistema local', icon: '🌐' },
    { id: 'operacion', title: 'Plan Detallado', icon: '⚙️' },
    { id: 'legal', title: 'Marco Jurídico', icon: '⚖️' },
    { id: 'transmedia', title: 'Formatos 2026', icon: '🎬' },
    { id: 'modelo', title: 'Negocio & Precios', icon: '💎' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-1)] selection:text-white">
      <div className="fixed inset-0 grid-overlay opacity-20 pointer-events-none" />
      
      {/* Sidebar Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={`group flex items-center gap-4 transition-all duration-500 ${activeSection === section.id ? 'translate-x-2' : ''}`}
          >
            <span className={`w-12 h-12 rounded-2xl glass flex items-center justify-center text-xl transition-all duration-500 shadow-lg ${
              activeSection === section.id ? 'scale-110 border-[var(--accent-1)] text-[var(--accent-1)] bg-[var(--accent-1)]/10 ring-4 ring-[var(--accent-1)]/10' : 'opacity-40 grayscale'
            }`}>
              {section.icon}
            </span>
            <div className={`flex flex-col items-start transition-all duration-500 ${activeSection === section.id ? 'opacity-100' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
               <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-1)]">Blueprint</span>
               <span className="text-sm font-bold font-[var(--font-space)] whitespace-nowrap">{section.title}</span>
            </div>
          </button>
        ))}
      </nav>

      {/* Modal Root */}
      <Modal 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
        title={modalContent?.title || ''}
      >
        {modalContent?.content}
      </Modal>

      <main className="max-w-4xl mx-auto px-6 py-24 relative">
        <header className="mb-32 text-center">
          <Badge color="var(--accent-1)">Estrategia Colectivo 2024-2026</Badge>
          <h1 className="text-7xl md:text-9xl font-black mt-8 mb-10 font-[var(--font-space)] tracking-tighter leading-[0.85]">
            THE <span className="gradient-text">DOCS</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            Arquitectura completa del colectivo. Desde el marco legal de la DIAN hasta la estrategia de prospección en el Valle.
          </p>
        </header>

        {/* 📋 SECTION: RESUMEN */}
        <section id="resumen" className="mb-48 scroll-mt-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge color="var(--accent-1)">01. Visión</Badge>
              <h2 className="text-5xl font-black font-[var(--font-space)] mt-4">Resumen Ejecutivo</h2>
            </div>
            <button 
              onClick={() => setModalContent({
                title: "Resumen Profundo",
                content: (
                  <div className="space-y-4">
                    <p>El Valle del Cauca alinea su política C+CTeI en siete focos (Biodiversidad, Agroindustria, Salud, etc.), creando demanda de comunicación científica.</p>
                    <p>Estrategia NIDO ha apoyado +300 startups tech (2024-2025). Operamos como persona natural no responsable de IVA (ingresos &lt; 3.500-4.000 UVT).</p>
                    <p>Se priorizan formatos breves (One-pagers, Scrollytelling) frente a reportes aburridos.</p>
                    <div className="p-4 bg-[var(--accent-1)]/5 rounded-xl border border-[var(--accent-1)]/20">
                       <h5 className="font-bold mb-2">Clave Jurídica:</h5>
                       <p className="text-xs italic">Los derechos morales son inalienables (Ley 23). Conservamos co-autoría moral siempre.</p>
                    </div>
                  </div>
                )
              })}
              className="text-xs font-bold uppercase tracking-widest text-[var(--accent-1)] hover:underline"
            > + Expandir Resumen</button>
          </div>
          
          <div className="glass p-12 rounded-[3.5rem] relative overflow-hidden group border-t-2 border-t-white dark:border-t-white/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-1)] opacity-10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="text-2xl font-medium leading-relaxed mb-8">
              "Transformamos ciencia <span className="text-[var(--accent-1)] font-black">densa</span> en narrativas <span className="text-[var(--accent-1)] font-black">ligeras</span> que conquistan fondos e inversores."
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { label: 'Ingresos', val: '< 3.5k UVT', icon: '💰' },
                 { label: 'Estatus', icon: '🚀', val: 'Bootstrapping' },
                 { label: 'Derecho', icon: '⚖️', val: 'Co-autoría' },
                 { label: 'Foco', icon: '📍', val: 'Cali / Valle' }
               ].map(stat => (
                 <div key={stat.label} className="text-center p-4 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                   <div className="text-xl mb-1">{stat.icon}</div>
                   <div className="text-[10px] font-bold uppercase opacity-50 tracking-tighter">{stat.label}</div>
                   <div className="text-sm font-black">{stat.val}</div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 🌐 SECTION: ECOSISTEMA */}
        <section id="ecosistema" className="mb-48 scroll-mt-24">
          <div className="mb-12">
            <Badge color="var(--accent-2)">02. Localización</Badge>
            <h2 className="text-5xl font-black font-[var(--font-space)] mt-4">Ecosistema Valle</h2>
          </div>
          
          <div className="grid gap-6">
            <Accordion title="Estrategia NIDO & Verticales" icon="🏢">
               <p>Distrito de Innovación e IA del Valle (Gobernación + Alcaldía + CCC). +300 startups apoyadas.</p>
               <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 glass rounded-xl border-l-4 border-l-[var(--accent-2)]">
                     <p className="font-bold text-[var(--accent-2)]">Valley Care</p>
                     <p className="text-xs">Foco en HealthTech, telemedicina e IA médica.</p>
                  </div>
                  <div className="p-4 glass rounded-xl border-l-4 border-l-[var(--accent-1)]">
                     <p className="font-bold text-[var(--accent-1)]">Economía Digital</p>
                     <p className="text-xs">Clúster de la CCC para servicios pro y tech.</p>
                  </div>
               </div>
            </Accordion>
            
            <Accordion title="Aliados & Incubadoras" icon="🤝">
               <div className="space-y-4">
                  <div>
                    <strong className="text-[var(--text-primary)]">REDDI:</strong> Centro de innovación de la Cámara de Comercio. Misión: comercializar tecnologías y conectar academia con empresa.
                  </div>
                  <div>
                    <strong className="text-[var(--text-primary)]">Parquesoft Pacífico:</strong> Incubadora de impacto social y tech. Ruta de acompañamiento a emprendedores.
                  </div>
                  <div>
                    <strong className="text-[var(--text-primary)]">Zonamerica:</strong> Zona franca de servicios globales. Ideal para exportadores de ciencia.
                  </div>
               </div>
            </Accordion>
            
            <Accordion title="Focos Estratégicos CTeI 2032" icon="📍">
               <div className="flex flex-wrap gap-2">
                 {['Biodiversidad', 'Agropecuario', 'Servicios', 'Salud', 'Energía', 'Turismo', 'Educación'].map(f => (
                   <span key={f} className="px-4 py-2 rounded-xl glass text-xs font-bold">{f}</span>
                 ))}
               </div>
               <p className="mt-4 italic text-xs opacity-60">Estos focos determinan qué proyectos reciben financiación de Regalías en el Valle.</p>
            </Accordion>
          </div>
        </section>

        {/* ⚙️ SECTION: OPERACION */}
        <section id="operacion" className="mb-48 scroll-mt-24">
          <div className="mb-12">
            <Badge color="var(--accent-3)">03. Ejecución</Badge>
            <h2 className="text-5xl font-black font-[var(--font-space)] mt-4">Plan Operativo</h2>
          </div>

          <div className="space-y-12">
             {[
               { id: 'f1', time: 'Mes 1', title: 'Fundación & Portafolio', content: 'Definir branding, crear 3 proyectos ficticios y web base.', list: ['Branding Colectivo', 'Demo HealthTech', 'Web "One-Page"'] },
               { id: 'f2', time: 'Mes 1-3', title: 'Enganche Regional', desc: 'Contactar grupos Univalle y participar en Demo Days de NIDO.', list: ['Pilotos en UV', 'Redes Sociales', 'Pitch Comercial'] },
               { id: 'f3', time: 'Mes 3-6', title: 'Venta Recurrente', desc: 'Consolidar precios por hora y buscar fondos de Minciencias.', list: ['Ajuste Tarifario', 'Convocatorias I+D', 'Registro Propiedad'] }
             ].map((f, i) => (
               <div key={f.id} className="group relative flex gap-8">
                  <div className="w-12 h-12 rounded-2xl glass border-2 border-[var(--border-subtle)] flex items-center justify-center font-black group-hover:border-[var(--accent-1)] transition-colors text-xs">{i+1}</div>
                  <div className="flex-1 glass p-8 rounded-[2.5rem] border-l-8 border-l-[var(--accent-1)] transition-all group-hover:shadow-xl">
                     <span className="text-[10px] font-black tracking-widest text-[var(--accent-1)] uppercase">{f.time}</span>
                     <h4 className="text-2xl font-black font-[var(--font-space)] mt-2 mb-4">{f.title}</h4>
                     <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {f.list.map(l => (
                          <li key={l} className="flex items-center gap-2 text-xs font-bold opacity-60">
                             <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-1)]" /> {l}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* ⚖️ SECTION: LEGAL */}
        <section id="legal" className="mb-48 scroll-mt-24">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <Badge color="var(--accent-1)">04. Blindaje</Badge>
              <h2 className="text-5xl font-black font-[var(--font-space)] mt-4">Persona Natural & Ley</h2>
            </div>
            <button 
              onClick={() => setModalContent({
                title: "Detalles Tributarios DIAN",
                content: (
                  <div className="space-y-4">
                    <h5 className="font-bold text-[var(--accent-3)]">No Responsable de IVA 2025</h5>
                    <ul className="list-disc pl-5 space-y-2 text-sm italic">
                      <li>Tope 3.500 UVT: ~$174,000,000 COP anuales.</li>
                      <li>Tope 4.000 UVT (100% Estado): ~$199,000,000 COP anuales.</li>
                      <li>Obligatoriedad: Factura Electrónica Validada por la DIAN para B2B.</li>
                    </ul>
                  </div>
                )
              })}
              className="text-xs font-bold uppercase tracking-widest text-[var(--accent-3)] hover:underline"
            > + Ver Topes Exactos</button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-[3rem] bg-opacity-5 border-2 border-[var(--accent-1)]">
               <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                 <span className="text-2xl">✒️</span> Derechos de Autor
               </h3>
               <p className="text-sm leading-relaxed mb-6">
                 Basado en la <strong>Ley 23 de 1982</strong>. El derecho de autor en Colombia se divide en dos:
               </p>
               <Accordion title="Derechos Morales" icon="🧠">
                  <p>Inalienables, irrenunciables, perpetuos. Paternidad e integridad de la obra. El nombre del Colectivo debe figurar siempre.</p>
               </Accordion>
               <Accordion title="Derechos Patrimoniales" icon="💵">
                  <p>Cedibles mediante contrato. Permiten al cliente (Universidad/Startup) explotar la obra. Se ceden para uso institucional/comercial limitado.</p>
               </Accordion>
            </div>
            
            <div className="glass p-10 rounded-[3rem] border-2 border-[var(--accent-3)]">
               <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                 <span className="text-2xl">🧾</span> Facturación Electrónica
               </h3>
               <p className="text-sm leading-relaxed mb-6">
                 Indispensable para cobrar a Universidades y Startups formalizadas.
               </p>
               <ul className="space-y-4">
                  {[
                    'Habilitarse en el servicio gratuito de la DIAN.',
                    'Facturar "Sin IVA causado" (como No Responsable).',
                    'Soporte fiscal exigido por B2B.',
                    'Actualización obligatoria RUT cada año.'
                  ].map(t => (
                    <li key={t} className="flex gap-4 text-xs font-bold opacity-70">
                       <span className="text-[var(--accent-3)]">●</span> {t}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </section>

        {/* 🎬 SECTION: TRANSMEDIA */}
        <section id="transmedia" className="mb-48 scroll-mt-24">
          <div className="mb-12">
            <Badge color="var(--accent-2)">05. Producto</Badge>
            <h2 className="text-5xl font-black font-[var(--font-space)] mt-4">Formatos de Impacto</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { t: 'One-Pagers', icon: '📄', desc: 'Resumen ultra-visual para inversores con poco tiempo (VC).', btn: 'Ver Estándares' },
               { t: 'Scrollytelling', icon: '🖱️', desc: 'Narrativa interactiva web de desplazamiento continuo.', btn: 'Ver Técnica' },
               { t: 'Video Teasers', icon: '🎥', desc: 'Clips de 90s tipo elevator pitch visual.', btn: 'Plan de Motion' },
               { t: 'Data Rooms', icon: '💎', desc: 'Repositorios visuales de evidencia científica densa.', btn: 'Ver Jerarquías' },
               { t: 'Dashboards', icon: '📊', desc: 'Paneles BI para métricas de impacto científico.', btn: 'Ver Visualización' },
               { t: 'Pods Narrativos', icon: '🎙️', desc: 'Cápsulas de audio sobre impacto científico regional.', btn: 'Ver Guión' }
             ].map(item => (
               <div key={item.t} className="glass p-8 rounded-[2.5rem] hover:-translate-y-4 transition-all duration-500 border-t-4 border-t-[var(--accent-1)] group">
                  <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <h5 className="text-xl font-black font-[var(--font-space)] mb-4">{item.t}</h5>
                  <p className="text-xs text-[var(--text-secondary)] mb-6 leading-relaxed">{item.desc}</p>
                  <button 
                    onClick={() => setModalContent({ title: item.t, content: <p>Nuestros estándares de {item.t} para 2026 priorizan la velocidad de carga, la accesibilidad móvil y el uso de fuentes modernas como Inter. El tiempo promedio de consumo debe ser inferior a 3 minutos.</p> })}
                    className="w-full py-3 rounded-2xl glass text-[10px] font-black uppercase tracking-widest hover:bg-[var(--accent-1)] hover:text-white transition-colors"
                  >
                    Detalles
                  </button>
               </div>
             ))}
          </div>
        </section>

        {/* 💎 SECTION: MODELO */}
        <section id="modelo" className="mb-48 scroll-mt-24">
          <div className="mb-12">
            <Badge color="var(--accent-1)">06. Rentabilidad</Badge>
            <h2 className="text-5xl font-black font-[var(--font-space)] mt-4">Estructura de Precios</h2>
          </div>
          
          <div className="glass p-12 rounded-[4rem] flex flex-col md:flex-row gap-12 border-b-8 border-b-[var(--accent-1)]">
             <div className="flex-1 space-y-8">
                <div className="p-8 glass rounded-[2rem]">
                   <h4 className="text-xs font-black uppercase tracking-widest opacity-50 mb-4">Cálculo Base (H)</h4>
                   <p className="text-4xl font-black">$25.000 <span className="text-sm opacity-40">/ hora (Mínimo)</span></p>
                </div>
                <Accordion title="Roles Operativos" icon="👥">
                   <p><strong>Multimedia:</strong> Animación, Web, Video.</p>
                   <p><strong>Diseño:</strong> Infografía, Editorial, Marca.</p>
                </Accordion>
             </div>
             <div className="flex-1 glass p-8 rounded-[2rem] bg-[var(--accent-1)] bg-opacity-5">
                <h4 className="text-xs font-black uppercase tracking-widest opacity-50 mb-6">Paquetes Sugeridos</h4>
                <div className="space-y-4">
                   {[
                     { n: 'Básico', d: 'Infografía + Deck (10h)', p: '$250k+' },
                     { n: 'Estándar', d: 'Web OnePage + Video (40h)', p: '$1M+' },
                     { n: 'Pro', d: 'Campaña Transmedia (100h)', p: '$2.5M+' }
                   ].map(pkg => (
                     <div key={pkg.n} className="flex justify-between items-center p-4 rounded-2xl bg-white bg-opacity-10 border border-white/10">
                        <div>
                           <p className="font-bold text-xs uppercase text-[var(--accent-1)]">{pkg.n}</p>
                           <p className="text-[10px] opacity-60 font-medium">{pkg.d}</p>
                        </div>
                        <p className="font-black">{pkg.p}</p>
                     </div>
                   ))}
                </div>
                <p className="mt-6 text-[10px] opacity-40 italic">Precios estimados. Sujetos a negociación por complejidad científica.</p>
             </div>
          </div>
        </section>

        <footer className="pt-24 border-t border-[var(--border-subtle)] opacity-40 flex flex-col md:flex-row justify-between gap-12 pb-24">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[var(--accent-1)] to-[var(--accent-2)]" />
             <div>
                <span className="font-black font-[var(--font-space)] text-xl block">Colectivo Transmedia</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Blueprint v2.0</span>
             </div>
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-right">
             <p>Arquitectura IA por Antigravity</p>
             <p className="text-[var(--accent-1)] mt-2">Acceso Reservado • Cali 2024</p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Space+Grotesk:wght@300;400;700;900&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 99px; }

        body { scroll-behavior: smooth !important; }
        
        .glass {
          background: rgba(var(--bg-primary-rgb, 255, 255, 255), 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--border-subtle);
        }
        
        .dark .glass {
          background: rgba(2, 6, 23, 0.6);
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
