import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 pointer-events-none" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24">
          <div className="max-w-2xl">
            <p className="text-white/70 tracking-[0.4em] uppercase text-xs mb-6">Maison de Champagne</p>
            <h1 className="text-4xl md:text-6xl leading-tight font-light text-white">
              Grande Charte
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-fuchsia-300">Cuvées d'exception</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-xl">
              Crafted in the heart of Champagne, our house blends heritage with contemporary precision. A rare expression of elegance with iridescent depth.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#reserve" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 hover:from-cyan-200 hover:to-fuchsia-200 transition-colors">
                Reserve a Bottle
              </a>
              <a href="#maison" className="text-white/80 hover:text-white text-sm">Discover the Maison</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
