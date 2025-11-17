export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Bem-estar de spa, no conforto da sua casa
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Massagens, yoga e skincare com profissionais selecionados. Agende em poucos cliques e receba um atendimento acolhedor onde você estiver.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#agendar" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700">
                Agendar agora
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">
                Ver serviços
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-slate-900">+500</p>
                <p className="text-sm text-slate-500">clientes satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">4.9</p>
                <p className="text-sm text-slate-500">avaliação média</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">24h</p>
                <p className="text-sm text-slate-500">atendimento flexível</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd5a?q=80&w=1600&auto=format&fit=crop"
                alt="Relaxamento em casa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
