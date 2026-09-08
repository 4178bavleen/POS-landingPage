import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Activity, BarChart3, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react'
import dashboardMockup from '../assets/dashboard-mockup.png'

const metrics = [
  { label: 'Real-time sales at a glance', icon: TrendingUp },
  { label: 'Low-stock automated Alerts', icon: AlertCircle },
  { label: 'Multi-branch outlet activity', icon: Activity },
  { label: 'Hourly peak sales analysis', icon: BarChart3 },
]

export default function BusinessPulse({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: Text & Badges (5 Cols) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
              <Sparkles size={14} className="text-[#C52033]" />
              <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
                The Business Pulse
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Open the dashboard and know{' '}
              <span className="gradient-text">what needs attention.</span>
            </h2>

            <p className={`text-sm sm:text-base font-normal leading-relaxed mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Sales, inventory levels, staff attendance, and multi-branch operations stay visual, real-time, and easy to act on directly from the central command view.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {metrics.map((m) => {
                const Icon = m.icon
                return (
                  <div
                    key={m.label}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode
                        ? 'bg-[#14171F]/80 border-white/10 text-slate-300 hover:border-[#C52033]/40'
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:border-[#C52033]/40'
                    }`}
                  >
                    <Icon size={14} className="text-[#C52033]" />
                    <span>{m.label}</span>
                  </div>
                )
              })}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#newsletter')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary-glow px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Live Dashboard</span>
              <ArrowUpRight size={15} />
            </button>
          </motion.div>

          {/* ================= RIGHT COLUMN: Dashboard UI Mockup (7 Cols) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Ambient backlight glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C52033]/15 blur-[90px] rounded-full pointer-events-none" />

            {/* Dashboard Frame */}
            <div className={`relative rounded-2xl p-2 sm:p-3 border shadow-2xl backdrop-blur-xl ${
              darkMode
                ? 'bg-[#101216]/90 border-white/10 shadow-black/80'
                : 'bg-white/90 border-slate-200 shadow-slate-300/70'
            }`}>
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between px-2.5 pb-2 mb-1 border-b border-slate-800/40 dark:border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  foodadda-cloud-dashboard.vibrantick.com
                </span>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500">
                  LIVE
                </span>
              </div>

              {/* Dashboard Image */}
              <motion.img
                src={dashboardMockup}
                alt="FoodAdda Multi-Branch SaaS Management Dashboard by Vibrantick"
                className="w-full h-auto rounded-xl object-contain border border-slate-800/30 dark:border-white/[0.04]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
