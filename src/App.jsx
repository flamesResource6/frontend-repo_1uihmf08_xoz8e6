import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BookingForm />
        <Newsletter />
      </main>
      <footer id="contato" className="border-t border-slate-200 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-sm text-slate-600">
          <div>
            <p className="font-semibold text-slate-900">Bem-Estar em Casa</p>
            <p className="mt-2">Cuidar de você no seu tempo, no seu espaço.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Contato</p>
            <p className="mt-2">contato@bemestaremcasa.com</p>
            <p>(11) 99999-0000</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Horários</p>
            <p className="mt-2">Seg a Sáb, 8h às 22h</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">© {new Date().getFullYear()} Bem-Estar em Casa. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
