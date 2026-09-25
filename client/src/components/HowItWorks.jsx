import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PlusCircle, MenuSquare, PlayCircle, BarChart2, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: PlusCircle,
    title: 'Instant 1-Click Signup',
    desc: 'Register your brand in seconds with zero complicated paperwork or upfront hardware lock-in.',
  },
  {
    step: '02',
    icon: MenuSquare,
    title: 'Smart Menu Import',
    desc: 'Upload your food menu in Excel/PDF or use our AI importer with pre-categorized combos & variants.',
  },
  {
    step: '03',
    icon: PlayCircle,
    title: 'Plug & Play Live',
    desc: 'Connect your receipt printer, KOT screen, and start taking dine-in, takeaway, and delivery orders.',
  },
  {
    step: '04',
    icon: BarChart2,
    title: 'Scale & Optimize',
    desc: 'Leverage intelligent daily business digests and raw ingredient tracking to boost gross margins by 20%.',
  },
]

export default function HowItWorks({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="how-it-works" className="py-24 border-t border-slate-800/40 dark:border-white/[0.06] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#068aca] mb-2 block">
            Frictionless Setup
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Live and operational in{' '}
            <span className="gradient-text">less than 15 minutes</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            No expensive IT team or hardware technicians needed. Bhojan Bandhu runs seamlessly on any tablet, laptop, or dedicated POS terminal.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="saas-card p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Large Background Step Number */}
                <div className="text-5xl font-black opacity-10 select-none absolute top-4 right-4 group-hover:text-[#068aca] group-hover:opacity-25 transition-all">
                  {step.step}
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#068aca]/10 text-[#068aca] flex items-center justify-center mb-6">
                    <Icon size={20} />
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => scrollTo('#newsletter')}
            className="btn-primary-glow px-7 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
