import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2, Monitor, ArrowUpRight, Flame } from 'lucide-react'

const promoHighlights = [
  'Live Real-Time Billing & Quick-Pay',
  'Interactive Table & Room Status',
  'Dynamic Franchise Analytics Dashboard',
  'Multi-Kitchen KOT Dispatch Engine',
]

export default function PromoShowcase({ darkMode }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [activeTab, setActiveTab] = useState('full-tour')

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section id="interactive-demo" className="py-24 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]" ref={ref}>
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#C52033]/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4"
          >
            <Flame size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Interactive Live Walkthrough
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
            See FoodAdda in Action —{' '}
            <span className="gradient-text">Speed, Power & Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Watch how cashiers, kitchen captains, and franchise owners run their high-volume peak-hour rushes with zero lag.
          </motion.p>
        </div>

        {/* ================= CINEMATIC 3D VIDEO CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer Glowing Glass Shell */}
          <div className={`p-2 sm:p-4 rounded-3xl border shadow-2xl backdrop-blur-2xl transition-all relative ${
            darkMode
              ? 'bg-[#101217]/90 border-white/10 shadow-black/90'
              : 'bg-white/90 border-slate-200/80 shadow-slate-300/80'
          }`}>
            
            {/* Top Device Bar */}
            <div className="flex items-center justify-between px-3 pb-3 mb-1 border-b border-slate-800/40 dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C52033]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline ml-2">
                  FoodAdda POS Live Engine v3.0 · Full Tour
                </span>
              </div>

              {/* Status Badges */}
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-500 text-[10px] font-bold tracking-wide flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  60 FPS HD STREAM
                </span>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video group shadow-inner">
              <video
                ref={videoRef}
                src="/foodadda_pos_animated_promo_1080p.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Floating Overlay Controls on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-between p-4 sm:p-6">
                
                {/* Top Overlay Pill */}
                <div className="flex justify-between items-center pointer-events-auto">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                    🍕 FoodAdda SaaS Walkthrough
                  </span>
                </div>

                {/* Bottom Video Controls Bar */}
                <div className="flex items-center justify-between pointer-events-auto bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-xl bg-[#C52033] text-white hover:bg-[#a8192a] transition-all cursor-pointer shadow-md"
                      aria-label="Play / Pause"
                    >
                      {isPlaying ? <Pause size={15} /> : <Play size={15} className="fill-white" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                      aria-label="Mute / Unmute"
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>

                    <span className="text-xs font-medium text-slate-300 hidden sm:inline">
                      {isPlaying ? 'Playing Real-time Demo' : 'Paused'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleFullscreen}
                      className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                      aria-label="Fullscreen"
                    >
                      <Maximize2 size={15} />
                    </button>

                    <button
                      onClick={() => {
                        const el = document.querySelector('#newsletter')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="btn-primary-glow px-4 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>Book Live Demo</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Highlights Under Video */}
            <div className="mt-4 pt-3 border-t border-slate-800/40 dark:border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {promoHighlights.map((hl) => (
                <div key={hl} className="flex items-center gap-2 text-[11px] sm:text-xs">
                  <CheckCircle2 size={13} className="text-[#C52033] shrink-0" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{hl}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
