import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react'

const singlePlanFeatures = [
  'Unlimited Billing Counters & Order Tickets',
  'Real-Time Socket.IO Kitchen Display System (KDS)',
  'Direct Swiggy & Zomato Webhook Ingestion',
  'Automated Recipe-Level Live Inventory Deductions',
  '100% Offline Billing Mode with Instant Cloud Sync',
  'Silent Thermal ESC/POS Receipt & KOT Printing',
  'Interactive Table Management & Split Billing',
  'Automated Day-End (Z-Report) & GST Compliance',
  'Dynamic Contactless QR Digital Menu Ordering',
  'Customer CRM, Digital WhatsApp E-Bills & Loyalty',
  'Centralized Multi-Outlet Menu & Royalty Controls',
  'Priority 24/7 Phone, WhatsApp & Technical Support',
]

export default function Pricing({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C52033]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Transparent Pricing
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            One simple, all-inclusive plan for{' '}
            <span className="gradient-text">your restaurant</span>
          </h2>

          <p
            className={`text-base sm:text-lg ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Zero hidden charges. No commission on your sales. Everything unlocked at one flat annual rate.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`saas-card p-8 sm:p-12 relative overflow-hidden border-[#C52033]/60 shadow-2xl shadow-[#C52033]/10 ring-1 ring-[#C52033]/40 ${
              darkMode ? 'bg-[#101216]' : 'bg-white'
            }`}
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-8 px-4 py-1 rounded-b-xl bg-[#C52033] text-white text-[11px] font-bold tracking-wider uppercase shadow-md shadow-[#C52033]/40">
              All-In-One Annual Access
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 mb-8 border-b border-slate-800/60 dark:border-white/[0.08]">
              {/* Left Column: Plan Title & Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C52033]/10 text-[#C52033] text-xs font-bold uppercase tracking-wider mb-3">
                  <Zap size={13} />
                  <span>Complete Suite</span>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Yearly Growth Plan
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Complete access to POS billing, real-time KDS, direct Swiggy & Zomato sync, inventory depletion, and franchise analytics for a full year.
                </p>
              </div>

              {/* Right Column: Price Display */}
              <div className="lg:col-span-5 lg:text-right flex flex-col lg:items-end">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`text-4xl sm:text-5xl font-black tracking-tight text-[#C52033]`}
                  >
                    ₹7,999
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    / year
                  </span>
                </div>

                <span
                  className={`text-xs mt-1 font-medium ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Billed annually (Just ~₹666/month)
                </span>
                <span className="text-[11px] font-semibold text-emerald-500 mt-0.5">
                  ✓ Zero commissions · Zero setup fee
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-10">
              <p
                className={`text-xs font-bold uppercase tracking-wider mb-5 ${
                  darkMode ? 'text-slate-300' : 'text-slate-800'
                }`}
              >
                Everything Included in Your Annual License:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {singlePlanFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <div className="p-0.5 rounded-full bg-[#C52033]/15 text-[#C52033] shrink-0 mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span
                      className={`text-xs sm:text-sm leading-tight font-medium ${
                        darkMode ? 'text-slate-200' : 'text-slate-700'
                      }`}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-800/60 dark:border-white/[0.08]">
              <button
                onClick={() => scrollTo('#newsletter')}
                className="btn-primary-glow w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-transform hover:scale-[1.02]"
              >
                <span>Get Started with ₹7,999 / Year</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>14-day free trial · Assisted menu migration included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
