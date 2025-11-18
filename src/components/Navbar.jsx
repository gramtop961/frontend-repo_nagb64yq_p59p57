import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Maison', href: '#maison' },
    { label: 'Cuvées', href: '#cuvees' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Reserve', href: '#reserve' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-200 via-cyan-300 to-fuchsia-400 ring-1 ring-white/30 shadow-lg" />
              <span className="text-white/90 tracking-[0.2em] text-sm md:text-base group-hover:text-white transition-colors">GRANDE CHARTE</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#reserve" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 hover:from-cyan-200 hover:to-fuchsia-200 transition-colors">
                Reserve
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white py-2 border-b border-white/10">
                    {item.label}
                  </a>
                ))}
                <a href="#reserve" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300">
                  Reserve
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
