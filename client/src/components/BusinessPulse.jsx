import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  TrendingUp,
  Activity,
  BarChart3,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
  Lock,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  Maximize2,
  ZoomIn,
} from 'lucide-react'
import dashboardMockup from '../assets/dashboard-mockup.png'

const metrics = [
  { label: 'Real-time sales at a glance', icon: TrendingUp },
  { label: 'Low-stock automated Alerts', icon: AlertCircle },
  { label: 'Multi-branch outlet activity', icon: Activity },
  { label: 'Hourly peak sales analysis', icon: BarChart3 },
]

export default function BusinessPulse({ darkMode }) {
  const ref = useRef(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsZoomed(false)
    }
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isZoomed])

  return (
    <section className="py-14 sm:py-16 md:py-24 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 xl:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: Text & Badges (4 Cols on xl, 5 on lg) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
              <Sparkles size={14} className="text-[#068aca]" />
              <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
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
                        ? 'bg-dark-surface-raised/80 border-dark-border text-dark-muted hover:border-brand-primary-light/40'
                        : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:border-[#068aca]/40'
                    }`}
                  >
                    <Icon size={14} className="text-[#068aca]" />
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

          {/* ================= RIGHT COLUMN: Dashboard UI Mockup (8 Cols on xl, 7 on lg) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 xl:col-span-8 relative w-full"
          >
            {/* Ambient backlight glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 sm:h-96 bg-[#068aca]/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

            {/* Dashboard Browser Window Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-700/80 dark:border-white/10 bg-slate-900 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85),0_0_50px_rgba(6,138,202,0.18)] ring-1 ring-white/10 overflow-hidden">
              
              {/* Row 1: macOS Traffic Lights & Browser Tabs Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 pt-3 pb-2 border-b border-slate-800 bg-slate-950/90">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* macOS Window Controls */}
                  <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-sm" />
                    <button
                      type="button"
                      onClick={() => setIsZoomed(true)}
                      title="Expand to Fullscreen"
                      aria-label="Expand to Fullscreen"
                      className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-sm hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  </div>

                  {/* Active Browser Tab */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-t-lg bg-slate-800/90 border-t-2 border-t-[#068aca] border-x border-slate-700/60 shadow-sm text-xs font-medium text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate max-w-[130px] sm:max-w-[190px]">Bhojan Bandhu — HQ</span>
                    <X size={12} className="text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-1" />
                  </div>

                  {/* Inactive Tab (Tablet & Desktop) */}
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-t-lg text-xs font-medium text-slate-400 hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="truncate max-w-[120px]">Branch Analytics</span>
                  </div>

                  {/* New Tab Button */}
                  <button
                    type="button"
                    aria-label="New Tab"
                    className="hidden sm:flex p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                {/* Right Side Status Indicator */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE SYNC
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                    v2.4 ERP
                  </span>
                </div>
              </div>

              {/* Row 2: Navigation Bar & Address URL Omnibox */}
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border-b border-slate-800/80 bg-slate-900/90 text-slate-400">
                {/* Back / Forward / Reload Controls */}
                <div className="flex items-center gap-1 shrink-0">
                  <button type="button" aria-label="Go Back" className="p-1 rounded hover:bg-slate-800 hover:text-white transition-colors">
                    <ChevronLeft size={15} />
                  </button>
                  <button type="button" aria-label="Go Forward" className="p-1 rounded text-slate-600 cursor-not-allowed">
                    <ChevronRight size={15} />
                  </button>
                  <button type="button" aria-label="Reload Page" className="p-1 rounded hover:bg-slate-800 hover:text-white transition-colors">
                    <RotateCw size={13} />
                  </button>
                </div>

                {/* Omnibox / URL Bar */}
                <div className="flex-1 max-w-xl mx-auto bg-slate-950/80 border border-slate-700/70 rounded-lg px-2.5 sm:px-3 py-1 flex items-center justify-between text-xs font-mono shadow-inner">
                  <div className="flex items-center gap-1.5 truncate">
                    <Lock size={12} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-500 text-[11px] sm:text-xs">https://</span>
                    <span className="text-slate-200 text-[11px] sm:text-xs font-medium">cloud.bhojanbandhu.com</span>
                    <span className="text-[#068aca] text-[11px] sm:text-xs">/live-pulse</span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] text-emerald-400 font-sans font-medium px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/20 shrink-0 ml-2">
                    24ms
                  </span>
                </div>

                {/* Right Action Icons: Fullscreen / Lightbox Zoom */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsZoomed(true)}
                    title="Expand View"
                    aria-label="Expand View"
                    className="p-1 rounded hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>
              </div>

              {/* Window Canvas: Flush Edge-to-Edge Dashboard Mockup with Crisp Rendering */}
              <div
                className="relative w-full bg-slate-950 overflow-hidden cursor-zoom-in group"
                onClick={() => setIsZoomed(true)}
              >
                <img
                  src={dashboardMockup}
                  alt="BhojanBandhu Multi-Branch SaaS Management Dashboard"
                  className="w-full h-auto block select-none"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  loading="eager"
                  decoding="async"
                />

                {/* Hover zoom affordance */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold border border-white/15 shadow-2xl flex items-center gap-2 backdrop-blur-md">
                    <ZoomIn size={14} className="text-[#068aca]" />
                    <span>Click to view in full resolution</span>
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setIsZoomed(false)}
          >
            <div
              className="relative max-w-7xl w-full max-h-[92vh] flex flex-col items-center bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="w-full flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-white">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    Bhojan Bandhu — Live Cloud HQ Dashboard (Full Resolution)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                >
                  <X size={15} />
                  <span>Close (Esc)</span>
                </button>
              </div>

              {/* Scrollable Crisp Image Area */}
              <div className="w-full overflow-auto bg-slate-950 p-2 sm:p-4 max-h-[calc(92vh-55px)] flex justify-center">
                <img
                  src={dashboardMockup}
                  alt="BhojanBandhu Dashboard Fullscreen"
                  className="w-full max-w-none h-auto object-contain block select-none"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}