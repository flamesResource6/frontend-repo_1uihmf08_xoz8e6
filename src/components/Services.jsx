import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error('Erro ao carregar serviços', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Serviços populares</h2>

        {loading ? (
          <p className="text-slate-600">Carregando...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="aspect-video overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">{s.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-emerald-700 font-semibold">R$ {s.price.toFixed(2)}</span>
                    <span className="text-slate-500 text-sm">{s.duration_min} min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
