import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Sparkles, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    outlet: 'Sharma Dhaba & Sweets (3 Outlets)',
    city: 'Delhi NCR',
    avatar: '👨‍🍳',
    rating: 5,
    highlight: 'Cut billing queue by 50%',
    review:
      'Bhojan Bandhu replaced our clunky old desktop system in just one afternoon. Our table turnaround time improved by 40% and our staff learned the interface in 10 minutes.',
  },
  {
    name: 'Priya Mehta',
    outlet: 'Café Bloom & Roastery',
    city: 'Bangalore',
    avatar: '👩‍💼',
    rating: 5,
    highlight: 'Reduced food wastage by 30%',
    review:
      'The recipe-based inventory auto-deductions are exceptionally accurate. We know exactly how much coffee and milk we consume daily without manual reconciliation.',
  },
  {
    name: 'Amit Patel',
    outlet: 'Spice Box Cloud Kitchens (6 Brands)',
    city: 'Mumbai',
    avatar: '👨‍💻',
    rating: 5,
    highlight: 'Single screen for Swiggy & Zomato',
    review:
      'Handling high-volume lunch rushes across 6 virtual brands was chaos before Bhojan Bandhu. The unified KOT routing and online aggregator sync saved us 2 dedicated operators.',
  },
  {
    name: 'Vikramjit Singh',
    outlet: 'Urban Tandoor Restro-Bar',
    city: 'Chandigarh',
    avatar: '👨‍💼',
    rating: 5,
    highlight: 'Offline mode is a lifesaver',
    review:
      'Even when our broadband went down on a packed Saturday night, billing and kitchen orders did not pause for a second. Synced seamlessly once back online.',
  },
]

export default function Testimonials({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const goToNext = useCallback(() => {
    setFeaturedIndex(prev => (prev >= testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const goToPrev = useCallback(() => {
    setFeaturedIndex(prev => (prev <= 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  const goToIndex = useCallback((index) => {
    setFeaturedIndex(index)
  }, [])

  const featured = testimonials[featuredIndex]
  const others = testimonials.filter((_, i) => i !== featuredIndex)

  return (
    <section id="testimonials" className="py-14 sm:py-16 md:py-20 border-t border-slate-800/40 dark:border-white/[0.06] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#068aca]" />
            <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
              Proven Results
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Loved by restaurateurs{' '}
            <span className="gradient-text">nationwide</span>
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hear directly from the food entrepreneurs and franchise owners who run their daily operations on Bhojan Bandhu.
          </p>
        </div>

        {/* Main Layout: Featured + Stack */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Featured Testimonial */}
          <motion.div
            key={featured.name}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#068aca]/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative saas-card p-5 sm:p-8 lg:p-10">
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#068aca]/20 to-[#067bba]/10 border border-[#068aca]/20 flex items-center justify-center opacity-50">
                <Quote size={28} className="text-[#068aca]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: featured.rating }).map((_, s) => (
                  <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Highlight Badge */}
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#068aca]/10 text-[#068aca] border border-[#068aca]/20 mb-6">
                {featured.highlight}
              </span>

              {/* Review Text */}
              <blockquote className={`text-lg sm:text-xl leading-relaxed font-medium mb-8 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                "{featured.review}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/40 dark:border-white/[0.06]">
                <div className="w-14 h-14 rounded-full bg-slate-800/60 dark:bg-white/[0.06] flex items-center justify-center text-2xl shrink-0 ring-2 ring-[#068aca]/30">
                  {featured.avatar}
                </div>
                <div>
                  <h4 className={`text-base font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {featured.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {featured.outlet}
                  </p>
                  <p className={`text-sm font-medium text-[#068aca]`}>{featured.city}</p>
                </div>
              </div>

              {/* Nav Arrows on Featured Card */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  onClick={goToPrev}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-white/[0.06] border border-slate-800/40 dark:border-white/[0.06] text-slate-300 dark:text-slate-400 hover:bg-[#068aca]/20 hover:border-[#068aca]/30 hover:text-[#068aca] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={goToNext}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-white/[0.06] border border-slate-800/40 dark:border-white/[0.06] text-slate-300 dark:text-slate-400 hover:bg-[#068aca]/20 hover:border-[#068aca]/30 hover:text-[#068aca] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stack of Other Testimonials */}
          <div className="relative">
            <div className="sticky top-24 space-y-3">
              {others.map((t, i) => {
                  const originalIndex = testimonials.indexOf(t)
                  const isNextInRotation = originalIndex === (featuredIndex + 1) % testimonials.length

                  return (
                    <motion.button
                      key={t.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      onClick={() => goToIndex(originalIndex)}
                      onMouseEnter={() => setAutoPlay(false)}
                      onMouseLeave={() => setAutoPlay(true)}
                      className={`relative saas-card p-5 flex items-center gap-4 group w-full text-left transition-all duration-300 ${
                        isNextInRotation ? 'ring-2 ring-[#068aca]/40' : ''
                      } hover:ring-2 hover:ring-[#068aca]/30 hover:shadow-xl hover:shadow-[#068aca]/10`}
                      aria-label={`Read ${t.name}'s testimonial`}
                      aria-current={isNextInRotation ? 'true' : 'false'}
                    >
                      {/* Active Indicator - shows for next in auto-play rotation */}
                      <motion.div
                        animate={{ width: isNextInRotation ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-[#068aca]/20 to-transparent rounded-xl pointer-events-none"
                      />

                  <div className="w-12 h-12 rounded-full bg-slate-800/60 dark:bg-white/[0.06] flex items-center justify-center text-lg shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                    {t.avatar}
                  </div>

                  <div className="flex-1 min-w-0 relative z-10">
                    <h4 className={`text-sm font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {t.name}
                    </h4>
                    <p className={`text-xs truncate ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {t.outlet}
                    </p>
                    <p className={`text-xs font-medium text-[#068aca]`}>{t.city}</p>
                  </div>

                  <div className="flex items-center gap-0.5 relative z-10">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </motion.button>
                  )
                })}
            </div>

            {/* Auto-play progress indicator */}
            <div className="mt-6 h-1 bg-slate-800/30 dark:bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ['0%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#068aca] to-[#0996d4] rounded-full"
                style={{ animationPlayState: autoPlay ? 'running' : 'paused' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}