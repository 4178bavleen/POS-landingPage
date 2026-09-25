import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Sparkles } from 'lucide-react'

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

  return (
    <section id="testimonials" className="py-24 border-t border-slate-800/40 dark:border-white/[0.06] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="saas-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#068aca]/10 text-[#068aca] border border-[#068aca]/20">
                    {t.highlight}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-6 font-normal ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  "{t.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/40 dark:border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-slate-800/60 dark:bg-white/[0.06] flex items-center justify-center text-xl shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h4 className={`text-sm font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {t.name}
                  </h4>
                  <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {t.outlet} · <span className="text-[#068aca] font-medium">{t.city}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
