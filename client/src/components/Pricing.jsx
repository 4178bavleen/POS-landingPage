import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter QSR',
    price: { monthly: 999, yearly: 799 },
    badge: 'Solo Outlets',
    desc: 'Ideal for small cafes, takeaway counters, kiosks, and food trucks.',
    features: [
      '1 POS Terminal & Billing Counter',
      'Unlimited Menu Items & Categories',
      'Thermal Receipt & KOT Printing',
      'UPI, QR, Cash & Card Payments',
      'Daily Sales Reports & Summary via SMS',
      '100% Offline Mode Support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Restaurant Pro',
    price: { monthly: 2499, yearly: 1999 },
    badge: 'Most Popular',
    desc: 'Engineered for busy dine-in restaurants, bars, and multi-station kitchens.',
    features: [
      'Up to 4 POS Terminals & Waiter Apps',
      'Real-Time Kitchen Display System (KDS)',
      'Table Management & Split Billing',
      'Automated Recipe & Raw Stock Tracking',
      'Zomato & Swiggy Order Integration',
      'Customer CRM & Loyalty Rewards',
      'Priority 24/7 Phone & Chat Support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise Chain',
    price: { monthly: 5999, yearly: 4799 },
    badge: 'Multi-Outlet Brands',
    desc: 'For growing restaurant chains, cloud kitchen networks, and franchises.',
    features: [
      'Unlimited Billing Terminals & Outlets',
      'Centralized Brand Menu & Pricing Control',
      'Cross-Store Inventory & Transfer POs',
      'Custom Role-Based Access & Audit Logs',
      'Dedicated Account Manager & SLA',
      'Custom ERP & Accounting Integrations',
    ],
    cta: 'Talk to Sales',
    popular: false,
  },
]

export default function Pricing({ darkMode }) {
  const [yearly, setYearly] = useState(true)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Transparent Pricing
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Simple plans for restaurants of{' '}
            <span className="gradient-text">every scale</span>
          </h2>

          <p className={`text-base sm:text-lg mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Zero hidden charges. No commission on your sales. Try all features free for 14 days.
          </p>

          {/* Billing Switcher Pill */}
          <div className="inline-flex items-center p-1 rounded-full bg-slate-800/40 dark:bg-white/[0.04] border border-slate-700/50 dark:border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !yearly
                  ? 'bg-[#C52033] text-white shadow-md shadow-[#C52033]/30'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                yearly
                  ? 'bg-[#C52033] text-white shadow-md shadow-[#C52033]/30'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`saas-card p-8 flex flex-col justify-between relative ${
                plan.popular
                  ? 'border-[#C52033]/70 shadow-xl shadow-[#C52033]/10 ring-1 ring-[#C52033]/50'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#C52033] text-white text-[11px] font-bold tracking-wider uppercase shadow-md shadow-[#C52033]/40">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {plan.name}
                  </h3>
                  {!plan.popular && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800/40 dark:bg-white/[0.04] text-slate-400 border border-slate-700/50 dark:border-white/[0.06]">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-800/60 dark:border-white/[0.08]">
                  <span className={`text-4xl font-extrabold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    ₹{(yearly ? plan.price.yearly : plan.price.monthly).toLocaleString()}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    / month {yearly ? '(billed annually)' : ''}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Includes:
                  </p>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <div className="p-0.5 rounded-full bg-[#C52033]/10 text-[#C52033] shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className={`text-xs sm:text-sm leading-tight ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => scrollTo('#newsletter')}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  plan.popular
                    ? 'btn-primary-glow'
                    : 'btn-secondary-glow'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
