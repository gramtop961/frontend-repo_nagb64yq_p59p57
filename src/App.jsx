import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Story from './components/Story'
import Reserve from './components/Reserve'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Story />
        <Reserve />
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Grande Charte</p>
            <div className="text-white/50 text-sm">Crafted with restraint and precision</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
