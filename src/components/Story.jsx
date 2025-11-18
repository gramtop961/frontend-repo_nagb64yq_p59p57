export default function Story() {
  return (
    <section id="maison" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-white text-3xl mb-4">A House of Measured Splendor</h3>
            <p className="text-white/70 leading-relaxed">
              Founded by artisans and visionaries, Grande Charte pursues a singular goal: to distill the essence of our terroirs into a champagne of subtle intensity. We embrace patience—long élevage, cool cellars, minimal intervention—so that every bottle carries a whisper of the chalk.
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              Our iridescent signature reflects a modern sensibility: meticulous detail, technological precision, and luminous beauty. The result—effortlessly luxurious, unmistakably contemporary.
            </p>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(59,130,246,0.25),transparent_60%)]" />
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(60%_40%_at_30%_80%,rgba(236,72,153,0.25),transparent_60%)]" />
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(16,185,129,0.2),transparent_60%)]" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
