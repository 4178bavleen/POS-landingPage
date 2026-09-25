import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Flame } from 'lucide-react'

const promoHighlights = [
  'Live Real-Time Billing & Quick-Pay',
  'Interactive Table Management',
  'Dynamic Franchise Analytics Dashboard',
  'Multi-Kitchen KOT Dispatch Engine',
]

export default function PromoShowcase({ darkMode }) {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="interactive-demo"
      className="py-20 sm:py-28 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]"
      ref={containerRef}
      aria-label="Bhojan Bandhu POS Interactive Demo Section"
    >
      {/* Ambient background glows tailored to Bhojan Bandhu blue identity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] sm:h-[600px] bg-[#068aca]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4"
          >
            <Flame size={14} className="text-[#068aca]" />
            <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
              Live Software Preview
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3.5 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            See Bhojan Bandhu in Action —{' '}
            <span className="gradient-text">Engineered for Rapid POS Billing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Watch how billing counters, captains, and multi-outlet restaurants operate without lag on modern hardware.
          </motion.p>
        </div>

        {/* ================= REALISTIC LAPTOP MOCKUP CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-5xl mx-auto w-full flex flex-col items-center"
        >
          {/* Subtle Floating Animation Wrapper */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full aspect-[1672/941] select-none flex items-center justify-center filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
          >
            {/* 1. Realistic Laptop Frame PNG with transparent screen cutout */}
            <img
              src="/laptop-mockup.png"
              alt="Bhojan Bandhu POS on Laptop Device"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20"
            />

            {/* 2. Live POS Video positioned behind the laptop bezel cut-out */}
            {/*
                Exact cutout geometry:
                Left: 16.45%, Right: 16.51%, Top: 7.44%, Bottom: 23.27%
                Width: 67.05%, Height: 69.29%
                We extend by 0.5% on all sides so the video tucks underneath the black bezel with zero gaps or bleed.
            */}
            <div
              className="absolute overflow-hidden bg-black z-10"
              style={{
                left: '16.2%',
                top: '7.1%',
                width: '67.6%',
                height: '69.8%',
              }}
            >
              <video
                src="/bhojanbandhu_pos_animated_promo_1080p.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Bhojan Bandhu POS Live Demonstration Video"
                className="w-full h-full object-fill pointer-events-none block"
              />

              {/* Realistic Display Glass Inner Shadow / Bezel Inset Depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(0,0,0,0.95)] pointer-events-none" />

              {/* Realistic Diagonal Screen Sheen Reflection */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 25%, transparent 55%)',
                }}
              />
            </div>
          </motion.div>

          {/* Ambient blue accent underglow tailored to Bhojan Bandhu theme */}
          <div className="w-[65%] sm:w-[50%] h-4 sm:h-6 bg-[#068aca]/30 blur-2xl -mt-6 rounded-[50%] pointer-events-none" />

          {/* Highlights Below Laptop */}
          <div className="w-full mt-10 sm:mt-12 pt-4 border-t border-slate-800/40 dark:border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {promoHighlights.map((hl) => (
              <div key={hl} className="flex items-center gap-2 text-[11px] sm:text-xs">
                <CheckCircle2 size={14} className="text-[#068aca] shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{hl}</span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
