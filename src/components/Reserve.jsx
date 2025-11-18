import { useState } from 'react'

export default function Reserve() {
  const [status, setStatus] = useState('idle')

  function submit(e) {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <section id="reserve" className="relative bg-black py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h3 className="text-white text-3xl">Reserve</h3>
          <p className="text-white/70 mt-2">Request allocation for upcoming releases.</p>
        </div>

        <form onSubmit={submit} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="First name" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
            <input required placeholder="Last name" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
            <input required type="email" placeholder="Email" className="md:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
            <textarea rows="4" placeholder="Notes (optional)" className="md:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/40" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-white/60 text-sm">By request only. We'll be in touch shortly.</p>
            <button disabled={status==='loading'} className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 disabled:opacity-60">
              {status==='loading' ? 'Sending…' : status==='success' ? 'Request Sent' : 'Request Access'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
