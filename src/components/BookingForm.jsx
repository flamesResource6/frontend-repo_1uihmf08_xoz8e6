import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: 'massage', datetime: '', address: '', notes: ''
  })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('enviando')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erro ao enviar')
      setStatus('sucesso')
      setForm({ name: '', email: '', phone: '', service: 'massage', datetime: '', address: '', notes: '' })
    } catch (e) {
      setStatus('erro')
    }
  }

  return (
    <section id="agendar" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Agende seu atendimento</h2>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-emerald-100 shadow-sm">
          <div className="grid gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Nome completo" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Telefone" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            <select name="service" value={form.service} onChange={onChange} className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="massage">Massagem Relaxante</option>
              <option value="yoga">Aula de Yoga</option>
              <option value="skincare">Skincare em Casa</option>
            </select>
          </div>
          <div className="grid gap-4">
            <input name="datetime" type="datetime-local" value={form.datetime} onChange={onChange} className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            <input name="address" value={form.address} onChange={onChange} placeholder="Endereço" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
            <textarea name="notes" value={form.notes} onChange={onChange} placeholder="Observações" rows={4} className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button type="submit" className="px-5 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700">Confirmar agendamento</button>
            {status === 'sucesso' && <p className="text-emerald-700">Agendamento enviado com sucesso!</p>}
            {status === 'erro' && <p className="text-red-600">Erro ao enviar. Tente novamente.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
