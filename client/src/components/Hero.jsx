import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Receipt, BellRing, ShieldCheck, Building2 } from 'lucide-react'
import posMockup from '../assets/pos-mockup.png'

const highlights = [
  'Multi-Tenant SaaS Hierarchy',
  'Real-Time Socket.IO KDS',
  'Direct Zomato & Swiggy Webhooks',
  'Automated Silent Thermal Printing',
]

const partners = [
  'Delhi NCR Branch', 'Gurugram Central', 'Karnal Franchise', 'Panipat Outlets', 'Chandigarh Restro', 'Noida Cloud Kitchen'
]

export default function Hero({ darkMode }) {
  const containerRef = useRef(null)

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  })

  const yOffset = useTransform(smoothProgress, [0, 1], [30, -30])

  return (
    <section ref={containerRef} className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background grid pattern & radial glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#C52033]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Left / Right Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN: Content & CTAs (7 Cols) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-6">
              <Sparkles size={14} className="text-[#C52033]" />
              <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
                FoodAdda by Vibrantick Infotech Solutions
              </span>
              <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                · Enterprise SaaS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.18] mb-5 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Enterprise POS & Restaurant Management for{' '}
              <span className="gradient-text">Multi-Franchise Chains</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-sm sm:text-base max-w-xl mb-7 font-normal leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Built by <strong>Vibrantick Infotech Solutions</strong>. FoodAdda delivers multi-tenant restaurant management for franchises, standalone dining, and cloud kitchens—unifying real-time billing, Socket.IO Kitchen Display Systems (KDS), automated thermal printing, and direct <strong>Zomato & Swiggy</strong> webhook ingestion.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('#newsletter')}
                className="btn-primary-glow px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Request Platform Demo</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollTo('#architecture')}
                className="btn-secondary-glow px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Building2 size={15} className="text-[#C52033]" />
                <span>View Architecture</span>
              </button>
            </div>

            {/* Mini Trust Bar: Highlights */}
            <div className="pt-6 border-t border-slate-800/60 dark:border-white/[0.08] w-full max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs font-medium">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#C52033] shrink-0" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Hardware Mockup Showcase (5 Cols) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              style={{ y: yOffset }}
              className="relative p-2 sm:p-4"
            >
              {/* Backlight Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C52033]/20 blur-[80px] rounded-full pointer-events-none" />

              {/* Hardware Mockup Image */}
              <motion.img
                src={posMockup}
                alt="FoodAdda POS Terminal & Hardware System by Vibrantick"
                className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)] relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Badge 1: Top-Left (Real-Time Socket KDS) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-4 -left-3 sm:top-2 sm:-left-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl shadow-xl border backdrop-blur-xl ${
                  darkMode
                    ? 'bg-[#14171F]/95 border-white/10 text-white shadow-black/70'
                    : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/80'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#C52033]/15 text-[#C52033] flex items-center justify-center shrink-0">
                  <Receipt size={15} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold leading-tight">Socket.IO KDS</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Real-Time Room Scoping
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Top-Right (Zomato & Swiggy Integration) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className={`absolute -top-4 -right-3 sm:top-4 sm:-right-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl shadow-xl border backdrop-blur-xl ${
                  darkMode
                    ? 'bg-[#14171F]/95 border-white/10 text-white shadow-black/70'
                    : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/80'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                  <BellRing size={15} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold leading-tight">Zomato & Swiggy</span>
                    <span className="text-[9px] font-semibold px-1 rounded bg-emerald-500/15 text-emerald-500">HMAC Webhooks</span>
                  </div>
                  <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Direct Branch Ingestion
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom-Left (Multi-Tenant Isolation) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className={`hidden sm:flex absolute -bottom-4 -left-2 z-20 items-center gap-2.5 px-3.5 py-2 rounded-2xl shadow-xl border backdrop-blur-xl ${
                  darkMode
                    ? 'bg-[#14171F]/95 border-white/10 text-white shadow-black/70'
                    : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/80'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-[#C52033]/15 text-[#C52033] flex items-center justify-center shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <span className="text-[11px] font-bold leading-tight block">Tenant & Branch Scoping</span>
                  <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    AES-256-GCM Encrypted
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Operating Branches Ribbon */}
        <div className="mt-20 pt-10 border-t border-slate-800/40 dark:border-white/[0.06] text-center">
          <p className={`text-xs font-semibold uppercase tracking-wider mb-6 ${
            darkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Multi-Tenant Hierarchical Architecture Deployed Across Regional Hubs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80">
            {partners.map((partner) => (
              <span
                key={partner}
                className={`text-xs md:text-sm font-semibold tracking-tight px-3 py-1 rounded-full border ${
                  darkMode
                    ? 'border-white/[0.08] text-slate-300 bg-white/[0.02]'
                    : 'border-slate-200 text-slate-700 bg-slate-100'
                }`}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
