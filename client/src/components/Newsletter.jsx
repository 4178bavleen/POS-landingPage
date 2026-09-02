import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

export default function Newsletter({ darkMode }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !name) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, restaurant }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setEmail('')
        setName('')
        setRestaurant('')
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection.')
    }
  }

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`saas-card p-8 sm:p-14 relative overflow-hidden text-center border-[#C52033]/30 ${
            darkMode ? 'bg-gradient-to-b from-[#14171E] to-[#0A0C0F]' : 'bg-gradient-to-b from-white to-slate-50'
          }`}
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#C52033]/20 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-6">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Get Started Today
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Ready to upgrade your{' '}
            <span className="gradient-text">restaurant experience?</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-xl mx-auto mb-10 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Join 10,000+ happy restaurant owners. Get full access for 14 days free — no credit card needed.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto"
            >
              <CheckCircle2 size={42} className="text-emerald-500 mx-auto mb-3" />
              <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                You're on the priority list!
              </h3>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Our restaurant setup specialist will get in touch shortly to configure your menu.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                    darkMode
                      ? 'bg-[#08090A] border-white/10 text-white placeholder-slate-500 focus:border-[#C52033]'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#C52033]'
                  }`}
                />

                <input
                  type="text"
                  placeholder="Restaurant / Brand Name"
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                    darkMode
                      ? 'bg-[#08090A] border-white/10 text-white placeholder-slate-500 focus:border-[#C52033]'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#C52033]'
                  }`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Work Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`flex-1 px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                    darkMode
                      ? 'bg-[#08090A] border-white/10 text-white placeholder-slate-500 focus:border-[#C52033]'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#C52033]'
                  }`}
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary-glow px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Started Free</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {errorMsg && (
                <p className="text-xs text-[#C52033] text-left px-1">
                  {errorMsg}
                </p>
              )}

              <p className={`text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-500'} pt-2`}>
                Instant setup. No credit card required. Cancel anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
