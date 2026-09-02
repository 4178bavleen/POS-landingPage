import { useState } from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, Sparkles, TrendingUp, Clock, ShieldCheck, ArrowRight } from 'lucide-react'

export default function RoiCalculator({ darkMode }) {
  const [dailyOrders, setDailyOrders] = useState(150)
  const [avgOrderValue, setAvgOrderValue] = useState(350)

  // Math models based on real restaurant operations:
  // 1. Reduced food wastage via recipe-based inventory deductions (approx 4% of monthly revenue)
  // 2. Faster billing saves approx 2 cashier hours daily (~ ₹8,000/mo)
  // 3. Aggregator order error reduction (saves ~ ₹12,000/mo in voided deliveries)

  const monthlyRevenue = dailyOrders * avgOrderValue * 30
  const wastageSavings = Math.round(monthlyRevenue * 0.045)
  const laborSavings = 9000
  const errorSavings = Math.round(dailyOrders * 2.5 * 30)
  const totalMonthlySavings = wastageSavings + laborSavings + errorSavings

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#C52033]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Interactive ROI Estimator
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Calculate your monthly{' '}
            <span className="gradient-text">restaurant savings</span>
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            See how much revenue foodAdda preserves by eliminating manual billing bottlenecks and raw inventory leakage.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className={`saas-card p-6 sm:p-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-[#C52033]/40 ${
          darkMode ? 'bg-[#101216]/95' : 'bg-white'
        }`}>
          {/* Sliders (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Daily Orders */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Daily Dine-in & Delivery Orders
                </label>
                <span className="text-base font-extrabold text-[#C52033]">
                  {dailyOrders} orders / day
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="800"
                step="10"
                value={dailyOrders}
                onChange={(e) => setDailyOrders(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C52033]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>30 (Small Cafe)</span>
                <span>400 (Busy Restro)</span>
                <span>800+ (High Volume)</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Average Order Value (AOV)
                </label>
                <span className="text-base font-extrabold text-[#C52033]">
                  ₹{avgOrderValue} per bill
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C52033]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹100 (Chai & QSR)</span>
                <span>₹800 (Dine-in)</span>
                <span>₹2,000+ (Restro-Bar)</span>
              </div>
            </div>

            {/* Estimated Monthly Revenue Reference */}
            <div className="p-4 rounded-2xl bg-slate-800/40 dark:bg-white/[0.03] border border-slate-700/50 dark:border-white/[0.06] flex items-center justify-between text-xs">
              <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Projected Monthly GMV:
              </span>
              <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                ₹{monthlyRevenue.toLocaleString()} / month
              </span>
            </div>
          </div>

          {/* Results Summary (Right 5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-[#C52033]/15 via-rose-500/5 to-transparent border border-[#C52033]/30 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C52033] block mb-1">
                Estimated Monthly Savings
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#C52033] mb-6 flex items-baseline gap-1">
                <span>₹{totalMonthlySavings.toLocaleString()}</span>
                <span className="text-xs font-medium text-slate-400">/ mo</span>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 dark:border-white/[0.06]">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Raw Ingredient Leakage Saved:</span>
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>₹{wastageSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60 dark:border-white/[0.06]">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Aggregator Order Void Prevention:</span>
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>₹{errorSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Staff Reconciliation Hours:</span>
                  <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>₹{laborSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('#newsletter')}
              className="btn-primary-glow w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Unlock These Savings Today</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
