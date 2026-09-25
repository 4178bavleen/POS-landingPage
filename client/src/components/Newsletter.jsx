import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { API_BASE_URL } from '../config/api'
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles,
  CalendarCheck,
  User,
  Mail,
  Phone,
  Building2,
  Clock,
  Store,
  MapPin,
} from 'lucide-react'

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
]

export default function Newsletter({ darkMode }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [city, setCity] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [outlets, setOutlets] = useState('1')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !phone || !preferredDate || !preferredTime) {
      setErrorMsg('Please fill in all required fields.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const payload = {
        name,
        email,
        phone,
        restaurant,
        city,
        preferredDate,
        preferredTime,
        outlets,
        notes: `Time: ${preferredTime} | Outlets: ${outlets} outlets | Source: Homepage Demo Form`,
      }
      const endpoint = API_BASE_URL ? `${API_BASE_URL}/api/v1/public/book-demo` : '/api/v1/public/book-demo'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => fetch('/api/v1/public/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }))

      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection.')
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
    darkMode
      ? 'bg-dark-canvas border-dark-border text-dark-text placeholder-dark-muted/70 focus:border-brand-primary-light'
      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#068aca]'
  }`

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Anchor for both #newsletter and #book-demo */}
      <span id="book-demo" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`saas-card p-8 sm:p-14 relative overflow-hidden border-[#068aca]/30 ${
            darkMode ? 'bg-gradient-to-b from-dark-surface-raised to-dark-canvas' : 'bg-gradient-to-b from-white to-slate-50'
          }`}
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#068aca]/20 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge">
              <CalendarCheck size={14} className="text-[#068aca]" />
              <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
                Book a Free Platform Demo
              </span>
            </div>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Schedule your live{' '}
            <span className="gradient-text">1-on-1 walkthrough</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-xl mx-auto mb-10 text-center ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Tailored to your specific restaurant concept, menu structure, and hardware setup. Get 14 days free access — no credit card needed.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 sm:p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-lg mx-auto text-center"
            >
              <CheckCircle2 size={46} className="text-emerald-500 mx-auto mb-3" />
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Demo Request Confirmed!
              </h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                We have scheduled your walkthrough inquiry for <span className="font-semibold text-emerald-400">{preferredDate} at {preferredTime}</span>.
              </p>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                A confirmation has been sent to <span className="font-medium text-foreground">{email}</span>. Our restaurant specialist will reach out within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Work Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                      type="email"
                      placeholder="e.g. rahul@restaurant.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Restaurant / Brand Name
                  </label>
                  <div className="relative">
                    <Building2 size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                      type="text"
                      placeholder="e.g. Spice Symphony"
                      value={restaurant}
                      onChange={(e) => setRestaurant(e.target.value)}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    City / Location
                  </label>
                  <div className="relative">
                    <MapPin size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Delhi, Bengaluru"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Number of Outlets
                  </label>
                  <div className="relative">
                    <Store size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 z-10 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <select
                      value={outlets}
                      onChange={(e) => setOutlets(e.target.value)}
                      className={`${inputClass} pl-10 appearance-none cursor-pointer`}
                    >
                      <option value="1">1 outlet (Standalone)</option>
                      <option value="2-5">2–5 outlets (Multi-branch)</option>
                      <option value="6-20">6–20 outlets (Regional chain)</option>
                      <option value="20+">20+ Enterprise Franchise</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Preferred Demo Date *
                  </label>
                  <div className="relative">
                    <CalendarCheck size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 z-10 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      required
                      className={`${inputClass} pl-10 appearance-none cursor-pointer`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {errorMsg && (
                <p className="text-xs text-[#068aca] text-left px-1 font-medium">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary-glow w-full px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-lg mt-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Scheduling your walkthrough...</span>
                  </>
                ) : (
                  <>
                    <span>Book Free Demo</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className={`text-center text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-500'} pt-2`}>
                Free 1-on-1 session. No credit card required. Cancel anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
