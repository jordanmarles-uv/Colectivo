'use client';

import React, { useState, useEffect } from 'react';
import { modulesData, DeepModule, MatryoshkaItem, glossary } from './data';

import { createPortal } from 'react-dom';

const TermPopup = ({ term, definition }: { term: string, definition: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const modalContent = isOpen ? createPortal(
    <span className="fixed inset-0 z-[9999] flex items-center justify-center cursor-default" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} onClick={(e) => e.stopPropagation()}>
      <span 
        className="absolute inset-0 z-[9999] cursor-pointer bg-[#020617]/60 backdrop-blur-md" 
        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} 
      />
      <span className="relative z-[10000] w-[90vw] max-w-sm bg-[var(--bg-primary)] p-6 rounded-3xl shadow-2xl border border-[var(--border-subtle)] text-center flex flex-col items-center animate-in fade-in zoom-in duration-200">
         <span className="w-12 h-12 flex items-center justify-center bg-[var(--accent-1)]/10 text-[var(--accent-1)] rounded-full text-2xl font-black mb-4">
           ?
         </span>
         <strong className="block text-xl font-black font-[var(--font-space)] text-[var(--text-primary)] mb-3 capitalize">{term}</strong>
         <span className="block text-sm text-[var(--text-secondary)] leading-relaxed">{definition}</span>
         <button 
           onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
           className="mt-6 px-6 py-2 rounded-full bg-[var(--accent-1)] text-white text-xs font-bold tracking-widest uppercase hover:bg-[var(--accent-2)] transition-colors inline-block"
         >
           Genial, gracias
         </button>
      </span>
    </span>,
    document.body
  ) : null;

  return (
    <span 
      className="relative inline-flex items-center cursor-pointer group"
      onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
      title="Ver definición pedagógica"
    >
      <strong className="text-[var(--accent-1)] font-bold group-hover:underline decoration-[var(--accent-1)] decoration-dashed underline-offset-4 transition-all">{term}</strong>
      <span 
        className="ml-1 w-[18px] h-[18px] inline-flex items-center justify-center rounded-full bg-[var(--accent-1)] text-white text-[10px] font-black leading-none group-hover:scale-110 transition-transform shadow-sm"
      >
        ?
      </span>
      {modalContent}
    </span>
  );
};

const glossaryTerms = Object.keys(glossary).sort((a, b) => b.length - a.length);
const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const termsRegex = new RegExp(`\\b(${glossaryTerms.map(escapeRegExp).join('|')})\\b`, 'gi');

const renderWithTooltips = (text: string) => {
  if (!glossaryTerms.length) return text;
  const parts = text.split(termsRegex);
  return parts.map((part, i) => {
    const termKey = glossaryTerms.find(term => term.toLowerCase() === part.toLowerCase());
    if (termKey) {
      return <TermPopup key={i} term={part} definition={glossary[termKey]} />;
    }
    return part;
  });
};

// --- Markdown Parser Inteligente (Sin dependencias pesadas) ---
// Interpreta viñetas, negritas dobles y saltos de línea para renderizar texto crudo.
const parseMarkdown = (text: string) => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  return lines.map((line, idx) => {
    // Si la línea es un elemento de lista (empieza con * o - o 1.)
    const isList = line.trim().startsWith('* ') || line.trim().startsWith('- ') || /^\d+\.\s/.test(line.trim());
    
    // Parseador básico de negritas (**texto**) combinando los tooltips
    const formatBold = (str: string) => {
      const parts = str.split('**');
      if (parts.length === 1) return renderWithTooltips(str);
      return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-black text-[var(--accent-1)]">{renderWithTooltips(part)}</strong> : renderWithTooltips(part));
    };

    if (isList) {
      const cleanLine = line.replace(/^[\*\-\d\.]+\s/, '');
      return (
        <li key={idx} className="flex items-start text-sm md:text-base leading-loose mb-3 opacity-90">
           <span className="text-[var(--accent-1)] mr-3 mt-[6px] text-xs">◆</span>
           <span>{formatBold(cleanLine)}</span>
        </li>
      );
    }
    
    // Si no es lista, es un párrafo normal
    return (
      <p key={idx} className="text-sm md:text-base leading-loose mb-6 opacity-90 text-[var(--text-secondary)]">
        {formatBold(line)}
      </p>
    );
  });
};

// --- Subcomponentes ---
const Badge = ({ children, color = 'var(--accent-1)' }: { children: React.ReactNode, color?: string }) => (
  <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border inline-flex items-center gap-2" 
        style={{ color, borderColor: color, backgroundColor: `${color}10` }}>
    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
    {children}
  </span>
);

const AccordionMatryoshka = ({ item }: { item: MatryoshkaItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`glass rounded-3xl mb-4 transition-all duration-300 overflow-hidden ${isOpen ? 'ring-2 ring-[var(--accent-1)] ring-opacity-20' : 'hover:bg-white/5 border border-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 pr-4">
          <span className="font-bold font-[var(--font-space)] text-lg md:text-xl text-[var(--text-primary)] leading-tight">{item.title}</span>
        </div>
        <span className={`transform transition-transform duration-500 text-[var(--accent-1)] font-black text-2xl shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 pb-8 pt-2">
          <div className="w-full h-px bg-gradient-to-r from-[var(--border-subtle)] to-transparent mb-6 opacity-50" />
          <div className="text-[var(--text-primary)]">
            {/* INYECCIÓN DEL TEXTO CRUDO PARSEADO */}
            {parseMarkdown(item.content)}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Drawer: El panel lateral que aloja los acordeones ---
const MatryoshkaDrawer = ({ 
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
        className="fixed inset-0 bg-[#020617]/80 backdrop-blur-sm z-[100] transition-opacity duration-500"
        onClick={onClose}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-3xl bg-[var(--bg-primary)] z-[110] shadow-2xl border-l border-[var(--border-subtle)] overflow-y-auto custom-scrollbar transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Cabecera del Panel (Fija) */}
        <div className="sticky top-0 bg-[var(--bg-primary)]/90 backdrop-blur-xl z-20 px-8 py-8 border-b border-[var(--border-subtle)] flex items-start justify-between">
          <div className="flex items-start gap-5">
             <span className="text-5xl text-[var(--accent-1)]">{module.icon}</span>
             <div>
               <div className="flex items-center gap-3 mb-2">
                 <Badge color="var(--accent-1)">Consulta Profunda</Badge>
                 <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{module.accordions.length} Documentos</span>
               </div>
               <h2 className="text-3xl font-black font-[var(--font-space)] tracking-tighter drop-shadow-sm">{module.title}</h2>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl glass hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all font-black text-2xl"
          >
            ×
          </button>
        </div>

        {/* Cuerpo del Panel: Los Acordeones (La Matrioska) */}
        <div className="px-6 md:px-10 py-10 pb-32">
          
          {/* Cita de Síntesis */}
          <div className="mb-10 p-8 rounded-3xl bg-[var(--accent-1)]/5 border border-[var(--accent-1)]/20 relative">
            <span className="absolute -top-6 -left-2 text-6xl text-[var(--accent-1)] opacity-20 font-[var(--font-space)] select-none">"</span>
            <p className="text-lg md:text-xl md:leading-relaxed font-medium text-[var(--text-primary)] relative z-10 italic opacity-90">
              {module.synthesis}
            </p>
          </div>

          {module.accordions.map((acc) => (
            <AccordionMatryoshka key={acc.id} item={acc} />
          ))}
        </div>
      </div>
    </>
  );
};

// --- Página Principal ---
export default function LocalBlueprintPage() {
  const [activeModule, setActiveModule] = useState<DeepModule | null>(null);

  // Bloquear scroll de fondo al abrir el Drawer
  useEffect(() => {
    if (activeModule) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; }
  }, [activeModule]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative overflow-x-hidden selection:bg-[var(--accent-1)] selection:text-white">
      {/* Fondos Decorativos */}
      <div className="fixed inset-0 grid-overlay opacity-[0.1] pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[var(--accent-1)]/5 to-transparent pointer-events-none z-0" />

      {/* Cabecera Principal */}
      <header className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex glass px-4 py-2 rounded-full mb-8 items-center gap-3 border-[var(--accent-2)]/30">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent-2)]">Exhaustivo 100% Original</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-[var(--font-space)] tracking-tighter leading-[0.8] uppercase mb-8 drop-shadow-2xl">
          El <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-1)] to-[var(--accent-2)]">Matryoshka</span> Plan.
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-medium leading-relaxed">
          Toda la investigación, estrategia y base legal del colectivo, importada directamente de los reportes fuente sin resúmenes. Desglose capa por capa.
        </p>
      </header>

      {/* Grilla de Tarjetas (Capa 1) */}
      <main className="relative z-10 pb-32 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesData.map((mod) => (
              <div 
                key={mod.id}
                onClick={() => setActiveModule(mod)}
                className="group relative glass rounded-[2.5rem] p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-[var(--border-subtle)] hover:border-[var(--accent-1)]/50 flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent dark:from-[#ffffff05] dark:to-transparent"
              >
                 <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[var(--accent-1)]/10 blur-[60px] rounded-full group-hover:bg-[var(--accent-1)]/20 transition-all duration-700 pointer-events-none" />
                 
                 <div className="flex justify-between items-start mb-10 relative z-10">
                    <span className="text-6xl drop-shadow-md group-hover:scale-110 transition-transform duration-500">{mod.icon}</span>
                    <button className="w-12 h-12 rounded-full border border-[var(--border-subtle)] flex items-center justify-center font-bold text-[var(--accent-1)] group-hover:bg-[var(--accent-1)] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      →
                    </button>
                 </div>

                 <div className="relative z-10 flex-grow">
                    <h3 className="text-3xl font-black font-[var(--font-space)] leading-none tracking-tight mb-4">{mod.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed font-medium">{mod.summary}</p>
                 </div>

                 <div className="relative z-10 grid grid-cols-3 gap-2 pt-6 border-t border-[var(--border-subtle)] mt-8">
                    {mod.stats.map((s, i) => (
                      <div key={i}>
                         <p className="text-[9px] uppercase font-black opacity-30 tracking-widest">{s.label}</p>
                         <p className="text-xs font-bold mt-1 tracking-tight text-[var(--accent-1)]">{s.val}</p>
                      </div>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </main>

      {/* El Renderizador de la Capa 2 y 3 (Drawer + Accordions) */}
      <MatryoshkaDrawer 
        isOpen={!!activeModule} 
        onClose={() => setActiveModule(null)} 
        module={activeModule} 
      />

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 text-center border-t border-[var(--border-subtle)] max-w-7xl mx-auto text-xs opacity-40 font-bold uppercase tracking-widest mt-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span>Colectivo Transmedia • Localhost D:\</span>
          <span>Desarrollado para retener el 100% de la información fuente.</span>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700;900&display=swap');
        
        body { scroll-behavior: smooth; }
        .glass {
          background: rgba(var(--bg-primary-rgb, 255, 255, 255), 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .dark .glass {
          background: rgba(4, 9, 20, 0.5);
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
