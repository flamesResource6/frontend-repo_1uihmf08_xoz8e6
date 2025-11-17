import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500" />
          <span className="text-slate-800 font-semibold text-lg">Bem-Estar em Casa</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#servicos" className="hover:text-emerald-600">Serviços</a>
          <a href="#agendar" className="hover:text-emerald-600">Agendar</a>
          <a href="#contato" className="hover:text-emerald-600">Contato</a>
          <a href="#newsletter" className="inline-flex items-center px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Assinar novidades</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
