export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 text-center tracking-tight">
            Ciencia Densa, <br/> Narrativa Ligera.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl text-center leading-relaxed font-sans">
            El colectivo transmedia de Cali que transforma <strong>Pitch Decks aburridos</strong> y datos duros 
            en visualizaciones interactivas de alto impacto para <strong>inversionistas y Startups NIDO.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 w-full max-w-3xl">
            <div className="p-6 bg-white shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition-all">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">🧬 Scrollytelling</h2>
              <p className="text-gray-600 mb-4">Experiencias y memorias web donde los datos médicos despiertan al hacer scroll.</p>
              <button className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Ver Demo &rarr;</button>
            </div>
            
            <div className="p-6 bg-white shadow-xl rounded-2xl border border-gray-100 hover:shadow-2xl transition-all">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">💡 Pitch Terapéutico</h2>
              <p className="text-gray-600 mb-4">Rediseño VC-Ready de tu presentación + sesión 1a1 para alinear tu historia personal.</p>
              <button className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Ver Demo &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
