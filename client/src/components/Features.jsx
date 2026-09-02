import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  UtensilsCrossed,
  Receipt,
  Layers,
  BarChart3,
  Smartphone,
  Truck,
  ShieldCheck,
  QrCode,
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function Features({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState('billing')

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Engineered for Speed
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            An all-in-one OS for{' '}
            <span className="gradient-text">high-volume kitchens</span>
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Built from the ground up for busy dine-in venues, fast-food counters, cafes, bars, and multi-brand cloud kitchens.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: 3-Second Quick Touchscreen Billing (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`md:col-span-7 saas-card p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group ${
              darkMode ? 'bg-gradient-to-br from-[#141720] via-[#101216] to-[#0A0C0E]' : 'bg-white'
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C52033]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C52033]/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#C52033]/15 text-[#C52033]">
                  <Receipt size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/20">
                  ⚡ 3-Sec Speed
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Lightning Fast Touchscreen Billing
              </h3>

              <p className={`text-sm leading-relaxed mb-6 max-w-lg ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Punch orders with custom add-ons, modifiers, automated GST calculations, and split settlements (Cash, Card, UPI, Wallets) in under 3 seconds per ticket.
              </p>
            </div>

            {/* Micro UI: Mock Order Ticket */}
            <div className="p-4 rounded-2xl bg-slate-800/40 dark:bg-white/[0.03] border border-slate-700/50 dark:border-white/[0.08] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Table 04 · Paneer Tikka (x2), Masala Chai (x3)
                </span>
              </div>
              <span className="font-extrabold text-[#C52033]">₹580 · Paid</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Zomato & Swiggy Sync (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`md:col-span-5 saas-card p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group ${
              darkMode ? 'bg-[#101216]' : 'bg-white'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-orange-500/15 text-orange-500">
                  <Truck size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/60 dark:bg-white/[0.05] text-slate-400 border border-slate-700/40 dark:border-white/[0.06]">
                  Online Aggregators
                </span>
              </div>

              <h3 className={`text-xl font-bold tracking-tight mb-3 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Direct Swiggy & Zomato Integration
              </h3>

              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Accept online delivery orders directly on your POS. Auto-print kitchen tickets without manual tablets or rider re-entry delays.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-semibold px-4 py-2.5 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
              <span>Auto-Accept Mode Active</span>
              <span className="text-emerald-500 font-bold">0% Order Rejections</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Recipe & Inventory Auto-Deductions (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 saas-card p-7 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#C52033]/15 text-[#C52033] w-fit mb-5">
                <Layers size={22} />
              </div>

              <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Recipe-Based Stock Tracking
              </h3>

              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Every bill auto-deducts exact grams of paneer, chicken, cheese, and syrups from your live raw stock.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-white/[0.06] flex items-center justify-between text-xs">
              <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Low-Stock WhatsApp Alerts:</span>
              <span className="text-[#C52033] font-bold">Enabled</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Captain Waiter App (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 saas-card p-7 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-sky-500/15 text-sky-500 w-fit mb-5">
                <Smartphone size={22} />
              </div>

              <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Captain Mobile Waiter App
              </h3>

              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Waitstaff punch orders tableside on Android or iOS devices. Routes immediately to the kitchen printer.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-white/[0.06] flex items-center justify-between text-xs">
              <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Average Time Saved per Table:</span>
              <span className="text-sky-500 font-bold">4.5 Mins</span>
            </div>
          </motion.div>

          {/* Bento Card 5: 100% Offline Capability (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-4 saas-card p-7 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-500 w-fit mb-5">
                <ShieldCheck size={22} />
              </div>

              <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                100% Offline Operational Mode
              </h3>

              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                No internet? Keep ringing up orders and printing KOT receipts without missing a single customer.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-white/[0.06] flex items-center justify-between text-xs">
              <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Cloud Auto-Sync:</span>
              <span className="text-emerald-500 font-bold">Instant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
