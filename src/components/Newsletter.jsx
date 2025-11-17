import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('enviando')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erro')
      setStatus('sucesso')
      setEmail('')
      setName('')
    } catch (e) {
      setStatus('erro')
    }
  }

  return (
    <section id="newsletter" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 sm:p-10 text-white">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Receba dicas de bem-estar em casa</h3>
              <p className="mt-2 text-emerald-50">Conteúdos semanais com respiração, alongamento e auto-cuidado.</p>
            </div>
            <form onSubmit={onSubmit} className="grid sm:grid-cols-3 gap-3">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="px-4 py-3 rounded-lg text-slate-900" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Seu email" className="px-4 py-3 rounded-lg text-slate-900" required />
              <button className="px-5 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50">Assinar</button>
              {status === 'sucesso' && <p className="sm:col-span-3 text-emerald-100">Inscrição confirmada!</p>}
              {status === 'erro' && <p className="sm:col-span-3 text-red-200">Erro ao enviar. Tente novamente.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
