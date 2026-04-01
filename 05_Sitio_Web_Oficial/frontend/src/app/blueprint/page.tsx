'use client';

import React, { useState, useEffect } from 'react';

// --- Types ---
type ContentBlock = {
  type: 'h3' | 'h4' | 'p' | 'list' | 'quote' | 'alert' | 'code';
  text?: string | React.ReactNode;
  items?: string[] | React.ReactNode[];
  alertType?: 'info' | 'warning' | 'success';
};

type DeepModule = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  stats: { label: string; val: string }[];
  content: ContentBlock[];
};

// --- Data: The Mega Blueprint ---
const modulesData: DeepModule[] = [
  {
    id: 'nucleo',
    title: 'Núcleo & Ecosistema',
    icon: '🏢',
    summary: 'Focos CTeI del Valle, Startups NIDO y alianzas clave para el colectivo.',
    stats: [
      { label: 'Startups NIDO', val: '+300' },
      { label: 'Focos CTeI', val: '7 Ejes' },
      { label: 'Ubicación', val: 'Valle Central' }
    ],
    content: [
      { type: 'h3', text: '1. Focos Estratégicos CTeI 2032 (Valle del Cauca)' },
      { type: 'p', text: 'La política C+CTeI departamental condiciona la financiación de Regalías a 7 focos. Toda comunicación debe enmarcarse en estas vocaciones:' },
      { type: 'list', items: ['Biodiversidad', 'Agropecuario-Agroindustrial', 'Servicios-Logística', 'Salud', 'Energía', 'Turismo', 'Educación'] },
      { type: 'h3', text: '2. NIDO: Distrito de Innovación' },
      { type: 'quote', text: 'Estrategia de Gobernación + Alcaldía + Cámara de Comercio (CCC) que apoya a +300 startups.' },
      { type: 'p', text: 'Verticales priorizadas donde debemos buscar clientes:' },
      { type: 'list', items: [
          '**Salud / HealthTech:** Valley Care (Telemedicina, IA Médica, etc.).',
          '**Economía Digital:** Clúster de productos digitales según la CCC.',
          '**Fintech, Logística y Edtech:** Demandantes de dashboards y VC Decks.'
      ]},
      { type: 'h3', text: '3. Actores y Aliados de Prospección' },
      { type: 'list', items: [
        '**REDDI (Cali):** Centro de innovación para transferir hardware/software y conectar academia con empresa.',
        '**Parquesoft Pacífico / Parquesoft TI:** Incubadora local de base tecnológica. Ruta crítica de acompañamiento a emprendedores.',
        '**Zonamerica:** Sede franca para exportación de servicios Tech. Ideal para Decks en Inglés.',
        '**Universidad del Valle (UV) / INCIVA:** El punto de entrada "Natural". Grupos de investigación e institutos que publican papers constantemente.'
      ]}
    ]
  },
  {
    id: 'recursos',
    title: 'Recursos & Estructura',
    icon: '💻',
    summary: 'Infraestructura tecnológica disponible y distribución de roles del equipo base a 2 personas.',
    stats: [
      { label: 'Fundadores', val: '2' },
      { label: 'Renta', val: '$0' },
      { label: 'Hardware', val: '5+ Eq.' }
    ],
    content: [
      { type: 'h3', text: '1. Hardware Disponible' },
      { type: 'alert', alertType: 'success', text: 'Financiamiento inicial bajo/cero externo operando bajo Bootstrapping. La ventaja radica en los equipos propios.' },
      { type: 'list', items: [
        'Portátil Asus A15 (Potencia de render / Modelado).',
        'MacBook M2 (Diseño, UX/UI, optimización rápida).',
        '2 Computadores de escritorio (Workstations fijas).',
        'Cámara Nikon D5300 + Lentes + Flash (Fotografía y video corporativo).',
        'iPad Pro (Ilustración digital, sketching en sitio).'
      ]},
      { type: 'h3', text: '2. Software & Stack' },
      { type: 'p', text: 'Orientado a Open-Source y herramientas gratuitas/freemium para maximizar ROI:' },
      { type: 'list', items: ['Figma (Diseño de Decks, UI/UX, One-Pagers).', 'Canva (Entregables rápidos y plantillas).', 'GIMP / DaVinci Resolve (Edición audiovisual gratuita pero Pro).', 'Next.js / WordPress (Soluciones Web y Scrollytelling).'] },
      { type: 'h3', text: '3. Distribución de Roles' },
      { type: 'list', items: [
        '**Diseñadora Gráfica:** Identidad visual, diseño de infografías estáticas, branding y dirección de arte.',
        '**Diseñador Multimedia/Web:** Animación 2D/3D corto, Scrollytelling web, código frontend, videos teaser.',
        '**Administrativo (Compartido):** Gestión DIAN, cotizaciones, llamadas exploratorias (Prospección).'
      ]}
    ]
  },
  {
    id: 'operacion',
    title: 'Línea de Vida (12 Meses)',
    icon: '🗓️',
    summary: 'Roadmap de ejecución dividido en 4 fases desde la consolidación local hasta la retención de clientes B2B.',
    stats: [
      { label: 'Fases', val: '4' },
      { label: 'Meta', val: '5-10 Clts' },
      { label: 'Rotación', val: 'Mensual' }
    ],
    content: [
      { type: 'h3', text: 'Fase 1: Lanzamiento y Base (Mes 0-1)' },
      { type: 'list', items: [
        'Definir naming corporativo y branding base del Colectivo.',
        'Construir sitio web y perfiles clave (LinkedIn, Instagram).',
        'Demos Ficticios 1: Crear un "One-Pager / Deck" falso para Salud (HealthTech).',
        'Demos Ficticios 2: Rediseñar una noticia técnica de Univalle en una infografía interactiva.'
      ]},
      { type: 'h3', text: 'Fase 2: Enganche Inicial (Mes 1-3)' },
      { type: 'list', items: [
        'Tocar puertas internamente en Univalle. Ofrecer 2 tarifas "Piloto" con descuento a cambio de Testimonio + Caso de Éxito en Portafolio.',
        'Asistir a foros de ciencia locales (INCIVA, Cámara Comercio).',
        'Prospección pura vía LinkedIn mandando la "Plantilla Lean".'
      ]},
      { type: 'h3', text: 'Fase 3: Calibración y Venta (Mes 3-6)' },
      { type: 'list', items: [
        'Ajuste del Tracking Temporal: Revisar si la Infografía tomó 20 horas o 40 y ajustar la tarifa base.',
        'Cazar convocatorias locales (MinCiencias) o fondos NIDO buscando fungir como "Proveedor Transversal" de los ganadores.',
        'Consolidar la contabilidad y emisión de E-Factura real DIAN.'
      ]},
      { type: 'h3', text: 'Fase 4: Expansión Modulada (Mes 6-12)' },
      { type: 'list', items: [
        'Alcanzar cartera recurrente de 5 a 10 clientes (Laboratorios, ONGs, Startups).',
        'Si la demanda lo permite, tercerizar el desarrollo pesado en Upwork/Workana o sumar E-Learning y Podcasts densos.'
      ]}
    ]
  },
  {
    id: 'comercial',
    title: 'Finanzas & Ventas Lean',
    icon: '💵',
    summary: 'Fórmula central del tarifario por hora. Empaquetamiento de servicios y estrategia de prospección en frío vía LinkedIn.',
    stats: [
      { label: 'H/Base', val: '~$25k COP' },
      { label: 'Mensaje', val: 'Soft-Sell' },
      { label: 'Paquetes', val: '3 Niveles' }
    ],
    content: [
      { type: 'h3', text: '1. Tarifas y Costos ("Hora Hombre")' },
      { type: 'p', text: 'La fórmula base de subsistencia recomendada por la industria es:' },
      { type: 'code', text: '(Costos Fijos Operativos + Ingreso Neto Deseado) / 160 horas al mes' },
      { type: 'alert', alertType: 'info', text: 'Ejemplo: Si buscan $3M COP entre ambos y los costos fijos (luz, software) son $1M, el requerimiento es recaudar $4M. Si trabajan 160h productivas conjuntas, la hora mínima es $25.000 COP. Recomendado cobrar entre $25.000 a $50.000 COP según el bulto técnico de la ciencia.' },
      { type: 'h3', text: '2. Empaquetamiento de Servicios' },
      { type: 'list', items: [
        '**Paquete Básico (Visión General):** ~20 horas. Infografía base o Deck simple. $500k a $1M.',
        '**Paquete Estándar (Multi-plataforma):** ~50 horas. Web sencilla, short video + redes. $1.5M a $2.5M.',
        '**Paquete Pro (Transmedia DeepTech):** ~100+ horas. Micrositio complejo, scrollytelling animado, dashboards BI. A convenir ($3M+).'
      ]},
      { type: 'h3', text: '3. Prospección Inbound/Outbound (The "Soft-Sell")' },
      { type: 'alert', alertType: 'warning', text: 'JAMÁS enviar PDF institucionales inmensos en el primer mensaje. La clave es el "Short and Sweet". Observar papers locales antes de hablar.' },
      { type: 'p', text: 'Plantilla base de contacto por email / LinkedIn:' },
      { type: 'quote', text: '"Estimado/a Dr/a. [Nombre], le escribo porque me llamó la atención su reciente proyecto sobre [Tema de Paper]. Creemos fundamental que investigaciones de este nivel crucen la barrera académica. Somos [Colectivo], especialistas en visualización de ciencia densa de forma transmedia y dinámica. ¿Tendría 10 minutos la próxima semana para una charlar online exploratoria sobre cómo un "Interactive Deck" o un "One-Pager" podría potenciar su difusión de resultados? Saludos cordiales."' }
    ]
  },
  {
    id: 'legal',
    title: 'Blindaje Jurídico',
    icon: '⚖️',
    summary: 'Marco normativo en Colombia (DIAN: topes UVT e ISR) más la estructura base contractual de Derechos Morales vs Patrimoniales ante la DNDA.',
    stats: [
      { label: 'Tope UVT', val: '3.500/4.000' },
      { label: 'Regla', val: 'F. Electrón' },
      { label: 'Autoría', val: 'Inalienable' }
    ],
    content: [
      { type: 'h3', text: '1. Tributación - No Responsable de IVA' },
      { type: 'list', items: [
        '**Tope General (2025):** 3.500 UVT anuales. Aprox ~174 Millones de pesos.',
        '**Tope Gubernamental:** 4.000 UVT (~199 Millones COP) *SI Y SÓLO SI* todos los ingresos provienen exclusivamente de entidades del Estado. Si hay mezcla privada, aplica el de 3.5k.',
        '**Facturación B2B:** Es obligatorio registrarse (incluso gratis en módulo DIAN) para expedir *Factura Electrónica* a Univalle, Gobiernos y Startups. Se factura indicando "Sin IVA causado".'
      ]},
      { type: 'h3', text: '2. Régimen de Derechos Autor (Ley 23 de 1982 - DNDA)' },
      { type: 'alert', alertType: 'warning', text: 'Siempre incluir anexo de términos en todos los tratos con universidades públicas para evitar apropiaciones indebidas.' },
      { type: 'h4', text: 'Derechos Morales (Del Creador)' },
      { type: 'p', text: 'Irrenunciables, inembargables e imprescriptibles. Exige visibilidad de la firma. Ej: "Visualización e Interacción Transmedia por [Colectivo]".' },
      { type: 'h4', text: 'Derechos Patrimoniales (Del Cliente)' },
      { type: 'p', text: 'Se CEDEN mediante contrato comercial (reproducción y distribución). El cliente es dueño del producto entregado para usarlo institucionalmente.' },
      { type: 'h4', text: 'Exhibición en Portafolio' },
      { type: 'p', text: 'Por ley, el autor siempre puede mostrar su obra alegando paternidad, a menos que exista un NDA (Non-Disclosure Agreement) firmado explicitamente por protección de datos secretos (patentes/datos de testeo cerrados).' }
    ]
  },
  {
    id: 'transmedia',
    title: 'Formatos Deep Tech 2026',
    icon: '🎬',
    summary: 'Los "Entregables". Decks, Dashboards y Scrollytelling orientados al estándar mundial de inversión de capital de riesgo (VC).',
    stats: [
      { label: 'A. Tiempo', val: '< 2 Mins' },
      { label: 'Técnica', val: 'Scrolly' },
      { label: 'UX', val: 'Dashboard' }
    ],
    content: [
      { type: 'h3', text: 'El Mandamiento: "Short and Sweet"' },
      { type: 'p', text: 'En 2024-2026, los inversores le dedican en promedio MENOS de 2 minutos a cada Pitch Deck (TechCrunch). Reportes estáticos de 50 páginas están muertos para la prospección.' },
      { type: 'h3', text: 'Catálogo de Formatos Estrella' },
      { type: 'list', items: [
        '**One-Pagers de Inversión:** 1 a 2 páginas con extrema carga infográfica. Condensa: Problema > Solución > Mercado > KPI > Equipo.',
        '**Scrollytelling:** Sitios web inmersivos donde la animación base 3D/2D y los textos van apareciendo al ritmo del _scroll_ del mouse. Ideal para historias de biodiversidad o logística.',
        '**Pitches Modulares:** 10-15 slides audaces de extrema lectura (Fuentes gigantes). Los datos microscópicos se mandan a un Anexo "Data Room".',
        '**Paneles Interactivos (Dashboards):** Usando librerías (ej. React/Highcharts) para que los financiadores comparen filtros de impacto social/Científico en vivo.',
        '**Podcasts/Audio-Cápsulas:** Para apropiación social del conocimiento asíncrono en movilidad.',
        '**Teaser Videos (Explainer Animado):** Videos crudos hiperkinéticos de 60 a 90 segundos que resumen patentes biomédicas. Ideales para landing pages.'
      ]}
    ]
  }
];

// --- Sub-components ---
const Badge = ({ children, color = 'var(--accent-1)' }: { children: React.ReactNode, color?: string }) => (
  <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border" 
        style={{ color, borderColor: color, backgroundColor: `${color}10` }}>
    {children}
  </span>
);

const BlockRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case 'h3':
      return <h3 className="text-2xl font-black font-[var(--font-space)] mt-8 mb-4 tracking-tighter text-[var(--text-primary)]">{block.text}</h3>;
    case 'h4':
      return <h4 className="text-xl font-bold font-[var(--font-space)] mt-6 mb-3 text-[var(--accent-1)]">{block.text}</h4>;
    case 'p':
      return <p className="text-sm leading-loose mb-4 opacity-80">{block.text}</p>;
    case 'quote':
      return <blockquote className="border-l-4 border-[var(--accent-1)] pl-4 py-2 my-6 text-sm italic opacity-90 bg-[var(--accent-1)]/5 rounded-r-lg">{block.text}</blockquote>;
    case 'code':
      return <div className="bg-[#0f172a] text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto my-4 border border-[var(--border-subtle)] shadow-inner">{block.text}</div>;
    case 'alert':
      const colors = block.alertType === 'warning' ? 'text-amber-500 bg-amber-500/10 border-amber-500/30' : 
                     block.alertType === 'success' ? 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' : 
                     'text-blue-400 bg-blue-500/10 border-blue-500/30';
      return (
        <div className={`p-4 rounded-xl text-sm font-medium border my-4 ${colors}`}>
          <span className="font-bold mr-2">OJO:</span>{block.text}
        </div>
      );
    case 'list':
      return (
        <ul className="space-y-4 my-4 opacity-80">
          {block.items?.map((item: any, i) => {
            // Very simple parser for bolding
            let content = item;
            if (typeof item === 'string') {
              const parts = item.split('**');
              content = parts.map((part, index) => index % 2 === 1 ? <strong key={index} className="text-[var(--text-primary)] dark:text-white font-black">{part}</strong> : part);
            }
            return (
              <li key={i} className="flex items-start text-sm leading-relaxed">
                <span className="text-[var(--accent-1)] mr-3 mt-1 text-[10px] items-center block">◆</span>
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
      );
    default: return null;
  }
};

const Drawer = ({ 
  isOpen, 
  onClose, 
  module 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  module: DeepModule | null 
}) => {
  if (!isOpen || !module) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-[100] transition-opacity duration-300"
        onClick={onClose}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-full w-full max-w-2xl bg-[var(--bg-primary)] z-[110] shadow-2xl border-l border-[var(--border-subtle)] overflow-y-auto custom-scrollbar transform transition-transform duration-300 ease-out`}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Header Drawer */}
        <div className="sticky top-0 glass z-10 px-8 py-6 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-4">
             <span className="text-4xl text-[var(--accent-1)]">{module.icon}</span>
             <div>
               <p className="text-[10px] uppercase font-black tracking-widest text-[var(--accent-1)]">Blueprint Deep-Dive</p>
               <h2 className="text-2xl font-black font-[var(--font-space)] tracking-tight">{module.title}</h2>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-2xl glass hover:bg-[var(--accent-1)] hover:text-white transition-all group"
          >
             <span className="w-5 h-0.5 bg-current transform rotate-45 translate-y-[3px] group-hover:bg-white" />
             <span className="w-5 h-0.5 bg-current transform -rotate-45 -translate-y-[5px] group-hover:bg-white" />
          </button>
        </div>

        {/* Content Drawer */}
        <div className="px-8 py-10 pb-32">
          {module.content.map((block, idx) => (
             <BlockRenderer key={idx} block={block} />
          ))}
        </div>
      </div>
    </>
  );
};


// --- Main Page ---

export default function MegaBlueprintPage() {
  const [activeModule, setActiveModule] = useState<DeepModule | null>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (activeModule) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; }
  }, [activeModule]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 grid-overlay opacity-[0.15] pointer-events-none z-0" />
      <div className="fixed top-0 inset-x-0 h-[400px] bg-gradient-to-b from-[var(--accent-1)]/5 to-transparent pointer-events-none z-0" />

      {/* Hero Header */}
      <header className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-[var(--border-subtle)] border-opacity-30">
        <div className="inline-flex glass px-4 py-2 rounded-full mb-8 items-center gap-3 border-[var(--accent-1)]/30">
           <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Arquitectura Maestra 2024-2026</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-[var(--font-space)] tracking-tighter leading-[0.85] uppercase mb-8">
          The <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-1)] to-[var(--accent-2)]">Mega</span> Plan.
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-medium leading-relaxed mb-12">
          La central integral de conocimiento operativo, investigativo y jurídico del Colectivo de Comunicación Científica Transmedia. Todo condensado en 6 macro-nodos.
        </p>
      </header>

      {/* Main Grid Selector */}
      <main className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesData.map((mod) => (
              <div 
                key={mod.id}
                onClick={() => setActiveModule(mod)}
                className="group relative glass rounded-[2.5rem] p-8 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 border-transparent hover:border-[var(--accent-1)]/30 flex flex-col h-full bg-white/40 dark:bg-[#080d1e]/80"
              >
                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent-1)]/10 blur-[50px] rounded-full group-hover:bg-[var(--accent-1)]/30 transition-all duration-700" />
                 
                 <div className="flex justify-between items-start mb-10 relative z-10">
                    <span className="text-5xl lg:text-6xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-md">{mod.icon}</span>
                    <button className="w-10 h-10 rounded-full glass flex items-center justify-center font-bold text-[var(--accent-1)] group-hover:bg-[var(--accent-1)] group-hover:text-white transition-colors duration-300">
                      →
                    </button>
                 </div>

                 <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-black font-[var(--font-space)] leading-tight tracking-tight mb-4 group-hover:text-[var(--accent-1)] transition-colors">{mod.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed mb-8">{mod.summary}</p>
                 </div>

                 {/* Mini Stats Bar */}
                 <div className="relative z-10 grid grid-cols-3 gap-2 py-4 border-t border-[var(--border-subtle)] mt-auto">
                    {mod.stats.map(s => (
                      <div key={s.label}>
                         <p className="text-[9px] uppercase font-black opacity-40 tracking-widest truncate">{s.label}</p>
                         <p className="text-xs font-bold mt-1 text-[var(--text-primary)]">{s.val}</p>
                      </div>
                    ))}
                 </div>
              </div>
            ))}
         </div>

         {/* Launch Checklist */}
         <div className="mt-32 max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <Badge color="var(--accent-3)">Misión Crítica</Badge>
               <h2 className="text-5xl font-black font-[var(--font-space)] mt-6 tracking-tight">Checklist de Lanzamiento</h2>
            </div>
            
            <div className="glass p-10 md:p-16 rounded-[3rem] shadow-xl border-t-8 border-t-[var(--accent-3)]">
               <ul className="space-y-6">
                 {[
                   { label: 'Identidad', req: 'Definir nombre / branding base.' },
                   { label: 'Producto', req: 'Crear los Demos Ficticios (HealthTech & Univalle Data).' },
                   { label: 'Legal', req: 'RUT actualizado + Alta en Factura Electrónica (Gratuita).' },
                   { label: 'Comercial', req: 'Portafolio Web Básico en el aire.' },
                   { label: 'Prospección', req: 'Primer acercamiento de prueba a un grupo Univ. Valle.' }
                 ].map((chk, i) => (
                   <li key={chk.label} className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                     <div className="w-8 h-8 shrink-0 rounded-lg border-2 border-[var(--accent-3)] flex items-center justify-center mt-1 group-hover:bg-[var(--accent-3)] transition-colors">
                        <span className="w-3 h-3 bg-transparent group-hover:bg-white transition-colors rotate-45 transform" />
                     </div>
                     <div>
                       <span className="block text-xs font-black tracking-widest uppercase opacity-50 mb-1">{chk.label}</span>
                       <span className="text-sm md:text-base font-medium opacity-90 leading-relaxed">{chk.req}</span>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
         </div>
      </main>

      {/* The Global Drawer Component */}
      <Drawer 
        isOpen={!!activeModule} 
        onClose={() => setActiveModule(null)} 
        module={activeModule} 
      />

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 text-center border-t border-[var(--border-subtle)] max-w-7xl mx-auto text-xs opacity-50 font-bold uppercase tracking-widest mt-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <span>© 2024 Colectivo Transmedia</span>
        <span>Strictly Confidential • Santiago de Cali</span>
        <span>By Antigravity Engine</span>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700;900&display=swap');
        
        body { scroll-behavior: smooth; }
        .glass {
          background: rgba(var(--bg-primary-rgb, 255, 255, 255), 0.4);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid var(--border-subtle);
        }
        .dark .glass {
          background: rgba(2, 6, 23, 0.4);
        }
        .grid-overlay {
          background-image: 
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: var(--border-strong); 
          border-radius: 20px; 
          border: 2px solid transparent; 
          background-clip: padding-box; 
        }
      `}</style>
    </div>
  );
}
