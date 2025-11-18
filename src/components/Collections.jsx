export default function Collections() {
  const wines = [
    {
      name: 'Grande Réserve',
      notes: 'Pinot Noir-led blend • 7 years on lees • precise, mineral, luminous',
    },
    {
      name: 'Cuvée Iridescence',
      notes: 'Chardonnay Grand Cru • micro-vinified • crystalline, weightless, vibrant',
    },
    {
      name: 'Rosé de Prestige',
      notes: 'Saignée rosé • old vines • silken texture, red-fruit nuance',
    },
  ]

  return (
    <section id="cuvees" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-white/90">Our Cuvées</h2>
          <p className="text-white/60 mt-2 max-w-xl">Limited releases shaped by time, temperature and terroir. Each bottle numbered, each sip a study in restraint and power.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {wines.map((w) => (
            <div key={w.name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-fuchsia-300 text-xl font-medium">{w.name}</div>
              <p className="mt-3 text-white/70 text-sm">{w.notes}</p>
              <div className="mt-6 inline-flex items-center text-sm text-white/80 group-hover:text-white">Explore →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
