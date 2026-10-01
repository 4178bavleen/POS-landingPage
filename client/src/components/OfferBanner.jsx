import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Tag } from 'lucide-react'

export default function OfferBanner({ onDismiss }) {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 13,
    minutes: 29,
    seconds: 0,
  })

  useEffect(() => {
    // 6 days, 13 hours, 29 minutes initial target
    const INITIAL_DURATION_MS = (6 * 24 * 3600 + 13 * 3600 + 29 * 60) * 1000
    let targetTime = localStorage.getItem('bhojan_pos_offer_end')

    if (!targetTime || isNaN(targetTime)) {
      targetTime = Date.now() + INITIAL_DURATION_MS
      localStorage.setItem('bhojan_pos_offer_end', targetTime.toString())
    } else {
      targetTime = parseInt(targetTime, 10)
    }

    const updateTimer = () => {
      const now = Date.now()
      const diff = targetTime - now

      if (diff <= 0) {
        // Reset timer when expired to maintain offer visibility
        const newTarget = Date.now() + INITIAL_DURATION_MS
        localStorage.setItem('bhojan_pos_offer_end', newTarget.toString())
        setTimeLeft({ days: 6, hours: 13, minutes: 29, seconds: 0 })
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((diff / (1000 * 60)) % 60)
        const seconds = Math.floor((diff / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateTimer()
    const timerId = setInterval(updateTimer, 1000)
    return () => clearInterval(timerId)
  }, [])

  const handleClose = (e) => {
    e.stopPropagation()
    setIsVisible(false)
    if (onDismiss) onDismiss()
  }

  const handleBannerClick = () => {
    const el = document.querySelector('#pricing')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!isVisible) return null

  const formatUnit = (num, unit) => `${String(num).padStart(2, '0')}${unit}`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={handleBannerClick}
          className="bg-[#00557f] hover:bg-[#00486c] transition-colors cursor-pointer text-white py-2.5 px-4 relative z-50 border-b border-white/10 shadow-sm overflow-hidden group select-none"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium pr-6 sm:pr-0">
            {/* Offer title & discount tag */}
            <div className="flex items-center gap-2 text-center">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 animate-pulse hidden xs:inline-block" />
              <span>
                Limited-time offer — <span className="font-semibold text-white">50% off for 12 months</span>
              </span>
            </div>

            {/* Countdown section */}
            <div className="flex items-center gap-2 ml-1">
              <span className="text-white/80 font-normal">ends in</span>
              <div className="flex items-center gap-1 sm:gap-1.5 font-sans font-semibold">
                <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-md sm:rounded-lg text-white text-xs sm:text-sm min-w-[34px] sm:min-w-[38px] text-center border border-white/15 shadow-inner">
                  {formatUnit(timeLeft.days, 'd')}
                </span>
                <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-md sm:rounded-lg text-white text-xs sm:text-sm min-w-[34px] sm:min-w-[38px] text-center border border-white/15 shadow-inner">
                  {formatUnit(timeLeft.hours, 'h')}
                </span>
                <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-md sm:rounded-lg text-white text-xs sm:text-sm min-w-[34px] sm:min-w-[38px] text-center border border-white/15 shadow-inner">
                  {formatUnit(timeLeft.minutes, 'm')}
                </span>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white rounded-full hover:bg-white/15 transition-all"
            title="Dismiss offer"
            aria-label="Dismiss offer"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
