import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, Sparkles } from 'lucide-react'

const comparisonMatrix = [
  { feature: '100% Offline Mode (Never Stops Billing)', 'Bhojan Bandhu': true, legacy: false, generic: false },
  { feature: 'Real-Time Auto-KOT to Kitchen Stations', 'Bhojan Bandhu': true, legacy: true, generic: false },
  { feature: 'Direct 1-Click Swiggy & Zomato Sync', 'Bhojan Bandhu': true, legacy: false, generic: false },
  { feature: 'Recipe-Level Ingredient Auto-Deductions', 'Bhojan Bandhu': true, legacy: false, generic: false },
  { feature: 'Waiter Captain Mobile App (Android/iOS)', 'Bhojan Bandhu': true, legacy: false, generic: false },
  { feature: 'QR Code Table Dining & Digital Payments', 'Bhojan Bandhu': true, legacy: false, generic: false },
  { feature: 'Multi-Store Central Brand Dashboard', 'Bhojan Bandhu': true, legacy: false, generic: false },
  { feature: 'Zero Proprietary Hardware Lock-In', 'Bhojan Bandhu': true, legacy: false, generic: true },
  { feature: '24/7 Phone & Priority WhatsApp Support', 'Bhojan Bandhu': true, legacy: false, generic: false },
]

export default function Comparison({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#068aca]" />
            <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
              Feature Breakdown
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            How Bhojan Bandhu compares with{' '}
            <span className="gradient-text">legacy POS software</span>
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            See why modern Indian restaurant chains and standalone food outlets choose Bhojan Bandhu over outdated desktop setups.
          </p>
        </div>

        {/* Comparison Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`saas-card overflow-hidden border-[#068aca]/30 ${
            darkMode ? 'bg-dark-surface/95' : 'bg-white'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800/60 dark:border-white/[0.08]">
                  <th className={`p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Platform Capabilities
                  </th>
                  <th className="p-4 sm:p-6 text-center bg-[#068aca]/15 text-[#068aca] font-extrabold text-sm sm:text-base border-x border-[#068aca]/30">
                    Bhojan Bandhu POS
                  </th>
                  <th className={`p-4 sm:p-6 text-center text-xs sm:text-sm font-semibold ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Legacy Desktop POS
                  </th>
                  <th className={`p-4 sm:p-6 text-center text-xs sm:text-sm font-semibold ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Basic Billing Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 dark:divide-white/[0.05]">
                {comparisonMatrix.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors ${
                      darkMode ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className={`p-4 sm:p-5 text-xs sm:text-sm font-medium ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {row.feature}
                    </td>

                    {/* Bhojan Bandhu column */}
                    <td className="p-4 sm:p-5 text-center bg-[#068aca]/5 border-x border-[#068aca]/20">
                      <div className="inline-flex p-1 rounded-full bg-[#068aca]/15 text-[#068aca]">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    </td>

                    {/* Legacy POS column */}
                    <td className="p-4 sm:p-5 text-center">
                      {row.legacy ? (
                        <div className="inline-flex p-1 rounded-full bg-slate-800 text-slate-400">
                          <Check size={14} />
                        </div>
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-slate-800/50 text-slate-500">
                          <X size={14} />
                        </div>
                      )}
                    </td>

                    {/* Generic Billing column */}
                    <td className="p-4 sm:p-5 text-center">
                      {row.generic ? (
                        <div className="inline-flex p-1 rounded-full bg-slate-800 text-slate-400">
                          <Check size={14} />
                        </div>
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-slate-800/50 text-slate-500">
                          <X size={14} />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
