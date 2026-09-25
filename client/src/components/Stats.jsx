import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Store, Zap, IndianRupee, Star } from 'lucide-react'

const stats = [
  { value: 10000, suffix: '+', label: 'Active Food Outlets', icon: Store, desc: 'Across 45+ Indian cities' },
  { value: 99.99, suffix: '%', label: 'Cloud Uptime', icon: Zap, decimal: 2, desc: 'Offline mode auto-sync' },
  { value: 65, suffix: 'Cr+', label: 'Monthly GMV Processed', icon: IndianRupee, desc: 'Fast, secure settlements' },
  { value: 4.9, suffix: '/5', label: 'Customer Satisfaction', icon: Star, decimal: 1, desc: 'Rated by 1,200+ managers' },
]

function AnimatedCounter({ value, suffix, decimal = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 50
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(parseFloat(current.toFixed(decimal)))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value, decimal])

  return (
    <span ref={ref}>
      {decimal > 0 ? count.toFixed(decimal) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-16 border-y border-slate-800/40 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="saas-card p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-lg bg-[#068aca]/10 text-[#068aca]">
                    <Icon size={18} />
                  </div>
                </div>

                <div>
                  <div className={`text-3xl lg:text-4xl font-extrabold tracking-tight mb-1 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                  </div>
                  <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
