import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Sparkles, ShieldCheck, Zap, Star, Loader2, Building2, Users } from 'lucide-react'
import { API_BASE_URL } from '../config/api'

const FEATURE_LABELS = {
  pos: 'Multi-Tenant POS & Instant KOT',
  reports: 'Real-Time Sales & GST Analytics',
  inventory: 'Recipe-Level Inventory Tracking',
  onlineOrders: 'Swiggy & Zomato Webhook Sync',
  ai: 'AI Franchise Expansion & Forecasts',
}

const DEFAULT_PLANS = [
  {
    id: 2,
    name: 'Starter',
    description: 'Basic POS for single restaurant operations',
    price: '999',
    billingCycle: 'MONTHLY',
    maxBranches: 1,
    maxUsers: 5,
    features: { pos: true, reports: true },
    isActive: true,
  },
  {
    id: 3,
    name: 'Pro',
    description: 'Complete suite for growing restaurant chains',
    price: '2499',
    billingCycle: 'MONTHLY',
    maxBranches: 5,
    maxUsers: 20,
    features: { pos: true, reports: true, inventory: true, onlineOrders: true },
    isActive: true,
    isPopular: true,
  },
  {
    id: 4,
    name: 'Enterprise',
    description: 'Unlimited scale with priority 24/7 dedicated support',
    price: '4999',
    billingCycle: 'MONTHLY',
    maxBranches: 999,
    maxUsers: 999,
    features: { pos: true, reports: true, inventory: true, onlineOrders: true, ai: true },
    isActive: true,
  },
]

export default function Pricing({ darkMode }) {
  const [plans, setPlans] = useState(DEFAULT_PLANS)
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // Fetch real subscription plans from POS backend API
    const endpoint = API_BASE_URL ? `${API_BASE_URL}/api/v1/admin/subscriptions/plans` : '/api/v1/admin/subscriptions/plans'
    fetch(endpoint)
      .catch(() => fetch('/api/v1/admin/subscriptions/plans'))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((res) => {
        if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
          // Filter active plans and sort by price
          const active = res.data.filter((p) => p.isActive !== false)
          if (active.length > 0) {
            setPlans(active)
          }
        }
      })
      .catch((err) => {
        console.log('POS Backend plans fetch note (using fallback):', err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C52033]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Transparent Pricing Plans
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Flexible plans for{' '}
            <span className="gradient-text">every stage of growth</span>
          </h2>

          <p
            className={`text-base sm:text-lg ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Zero hidden charges. No commission on your food orders. Choose the package that fits your operational scale.
          </p>
        </div>

        {/* Dynamic Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans
            .filter((p) => Number(p.price) > 0 || plans.length <= 3)
            .map((plan, idx) => {
              const isPopular =
                plan.name?.toLowerCase().includes('pro') ||
                plan.isPopular ||
                idx === 1
              const priceNum = Number(plan.price) || 0
              const formattedPrice = priceNum.toLocaleString('en-IN')
              const cycle = plan.billingCycle?.toLowerCase() === 'annual' ? '/ year' : '/ month'

              // Resolve features
              const featureList = []
              if (plan.maxBranches) {
                featureList.push(
                  plan.maxBranches >= 100
                    ? 'Unlimited Outlets / Branches'
                    : `Up to ${plan.maxBranches} Outlet${plan.maxBranches > 1 ? 's' : ''}`
                )
              }
              if (plan.maxUsers) {
                featureList.push(
                  plan.maxUsers >= 100
                    ? 'Unlimited Staff Users'
                    : `Up to ${plan.maxUsers} Staff Accounts`
                )
              }

              if (typeof plan.features === 'object' && plan.features !== null) {
                Object.entries(plan.features).forEach(([k, val]) => {
                  if (val && FEATURE_LABELS[k]) {
                    featureList.push(FEATURE_LABELS[k])
                  }
                })
              }

              // Standard guarantees
              featureList.push('100% Offline Mode Sync')
              featureList.push('Thermal Receipt & KOT Printing')
              if (priceNum >= 2000) {
                featureList.push('Priority 24/7 Phone & WhatsApp Support')
              }

              return (
                <motion.div
                  key={plan.id || plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`saas-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                    isPopular
                      ? 'border-[#C52033] shadow-2xl shadow-[#C52033]/15 ring-2 ring-[#C52033]/50'
                      : 'border-border'
                  } ${darkMode ? 'bg-[#101216]' : 'bg-white'}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#C52033] text-white text-[10.5px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Title & Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-xl font-bold tracking-tight ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {plan.name}
                      </h3>
                      {isPopular ? (
                        <span className="p-1 rounded-lg bg-[#C52033]/10 text-[#C52033]">
                          <Zap size={16} />
                        </span>
                      ) : (
                        <span className="p-1 rounded-lg bg-secondary text-muted-foreground">
                          <Building2 size={16} />
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs min-h-[32px] leading-relaxed mb-6 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {plan.description || 'Full POS management package'}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#C52033]">
                          ₹{formattedPrice}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {cycle}
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-500 font-medium mt-1">
                        ✓ Zero setup fees · 14-day free trial
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <p
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Included Capabilities:
                      </p>
                      {featureList.slice(0, 6).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <div className="p-0.5 rounded-full bg-[#C52033]/15 text-[#C52033] shrink-0 mt-0.5">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span
                            className={`text-xs leading-snug font-medium ${
                              darkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <button
                      onClick={() => scrollTo('#newsletter')}
                      className={`w-full py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                        isPopular
                          ? 'btn-primary-glow'
                          : darkMode
                          ? 'bg-white/10 hover:bg-white/15 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Choose {plan.name}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
        </div>

        {/* Bottom Trust Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-card/60 px-4 py-2 rounded-full border border-border">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span>Need custom hardware bundles, thermal printers, or enterprise franchise rollout? </span>
            <button
              onClick={() => scrollTo('#newsletter')}
              className="text-[#C52033] font-semibold hover:underline cursor-pointer"
            >
              Talk to our team →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
