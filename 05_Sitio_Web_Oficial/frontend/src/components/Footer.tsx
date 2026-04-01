"use client";
import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "Servicios",
    links: [
      { label: "Scrollytelling", href: "#servicios" },
      { label: "Pitch Terapéutico", href: "#servicios" },
      { label: "Kit de Datos", href: "#servicios" },
      { label: "Consultoría IA", href: "#servicios" },
    ],
  },
  {
    title: "Ecosistema",
    links: [
      { label: "Programa NIDO", href: "#" },
      { label: "REDDI Cali", href: "#" },
      { label: "Cámara de Comercio", href: "#" },
      { label: "Alianzas", href: "#" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Cali, Colombia", href: "https://maps.app.goo.gl/9ZpXyQ8Jv7vYp3B8A" },
      { label: "hola@colectivo-mu.co", href: "mailto:hola@colectivo-mu.co" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-24 px-8 border-t border-white/5 scene"
      style={{ background: "rgba(5,5,16,0.8)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-space font-black text-xl gradient-text mb-6">Colectivo Transmedia</div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Transformamos la ciencia densa en narrativas ligeras y visuales que conquistan audiencias e inversionistas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-xs hover:bg-white/10 transition-all">in</a>
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-xs hover:bg-white/10 transition-all">ig</a>
              <a href="#" className="w-8 h-8 rounded-full glass flex items-center justify-center text-xs hover:bg-white/10 transition-all">yt</a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="col-span-1 md:col-span-1 h-32 rounded-2xl overflow-hidden glass border-white/10 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-xs text-white/50 text-center px-4">
               📍 Cali · Distrito de Innovación
             </div>
             {/* Map placeholder */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127412.3551061!2d-76.541!3d3.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc42d517%3A0xa19cf2976d8b6727!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1711950000000!5m2!1sen!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0, opacity: 0.3 }} 
                allowFullScreen={true} 
                loading="lazy"
              />
          </div>

          {/* Links */}
          {FOOTER_SECTIONS.map((section, idx) => (
             <div key={idx} className="col-span-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                   {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                         <Link href={link.href} className="text-sm text-white/30 hover:text-white transition-all">
                            {link.label}
                         </Link>
                      </li>
                   ))}
                </ul>
             </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Colectivo de Comunicación Científica · Cali · Todos los derechos morales reservados
          </p>
          <div className="flex gap-6 text-[10px] text-white/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white/40">Privacidad</a>
            <a href="#" className="hover:text-white/40">Términos</a>
            <a href="#" className="hover:text-white/40">DNDA (Ley 23)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
