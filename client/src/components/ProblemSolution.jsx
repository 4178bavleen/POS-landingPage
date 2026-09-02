import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, Zap, RefreshCcw } from 'lucide-react'

const oldWay = [
  'Handwritten KOTs lost in busy kitchen counters',
  'Manual Swiggy & Zomato re-entry causing 15% order errors',
  'Total billing downtime whenever broadband disconnects',
  'Unexplained raw material loss & food wastage eating margins',
  'Slow counter queues during peak lunch & dinner rushes',
]

const newWay = [
  'Direct digital KOT auto-routing to multi-station kitchen printers',
  '1-Click auto-accept & instant sync with Swiggy and Zomato',
  '100% offline billing with automatic cloud reconciliation',
  'Recipe-level inventory auto-deductions stopping leakage',
  '3-second fast touchscreen billing & table QR ordering',
]

export default function ProblemSolution({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C52033] mb-2 block">
            The Operational Shift
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why 10,000+ restaurants switched from{' '}
            <span className="gradient-text">legacy systems to foodAdda</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Traditional POS systems were built 15 years ago for desktop computers. foodAdda is modern cloud infrastructure built for high-velocity dining.
          </p>
        </div>

        {/* Side by Side Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The Old Way (Chaos) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-3xl border transition-all ${
              darkMode
                ? 'bg-[#101216]/60 border-red-950/40'
                : 'bg-red-50/50 border-red-200/70'
            }`}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/10">
              <div className="p-2 rounded-xl bg-red-500/10 text-red-500">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  The Legacy Way
                </h3>
                <p className="text-xs text-red-500 font-medium">Clunky, error-prone & slow</p>
              </div>
            </div>

            <div className="space-y-4">
              {oldWay.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <XCircle size={17} className="text-red-500/70 shrink-0 mt-0.5" />
                  <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The foodAdda Way (Speed) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`p-8 rounded-3xl border shadow-2xl relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-b from-[#141720] to-[#0D0F14] border-[#C52033]/50 shadow-[#C52033]/10 ring-1 ring-[#C52033]/40'
                : 'bg-white border-[#C52033]/40 shadow-slate-200/80 ring-1 ring-[#C52033]/20'
            }`}
          >
            {/* Top Right Tag */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#C52033] text-white text-[10px] font-bold tracking-wider uppercase">
              Speed & Precision
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/10">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Zap size={20} />
              </div>
              <div>
                <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  The foodAdda Way
                </h3>
                <p className="text-xs text-emerald-500 font-medium">Real-time automation & zero wastage</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {newWay.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className={`text-sm font-medium leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#newsletter')}
              className="btn-primary-glow w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Upgrade Your Kitchen Operations</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
