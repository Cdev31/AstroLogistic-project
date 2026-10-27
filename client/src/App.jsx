import Navbar from './components/layout/Navbar'
import CargaPage from './components/carga/CargaPage'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl p-4">
        <CargaPage />
      </main>
    </div>
  )
}

