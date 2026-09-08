import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck, Zap, Layers } from 'lucide-react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import BusinessPulse from '../components/BusinessPulse'
import PromoShowcase from '../components/PromoShowcase'
import Architecture from '../components/Architecture'
import ProblemSolution from '../components/ProblemSolution'
import HowItWorks from '../components/HowItWorks'
import Comparison from '../components/Comparison'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'

export default function Home({ darkMode }) {
  return (
    <main>
      <Hero darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <PromoShowcase darkMode={darkMode} />
      <BusinessPulse darkMode={darkMode} />
      <Architecture darkMode={darkMode} />
      <div id="problem-solution">
        <ProblemSolution darkMode={darkMode} />
      </div>

      {/* Feature Teaser & Gateway to Dedicated Features Page */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden transition-all ${
              darkMode
                ? 'bg-gradient-to-br from-[#13161F] via-[#0E1015] to-[#0A0C0E] border-white/10 shadow-2xl shadow-black/40'
                : 'bg-gradient-to-br from-slate-50 via-white to-red-50/30 border-slate-200 shadow-xl'
            }`}
          >
            {/* Ambient Red Glow */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#C52033]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
                  <Sparkles size={14} className="text-[#C52033]" />
                  <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
                    50+ Enterprise Capabilities
                  </span>
                </div>

                <h2
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Explore the full FoodAdda{' '}
                  <span className="gradient-text">Feature Suite</span>
                </h2>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  From 3-second billing & KDS to real-time Swiggy/Zomato webhook ingestion and recipe-level inventory deductions, see everything engineered for high-volume kitchen operations.
                </p>

                <div className="flex flex-wrap gap-4 mt-6 text-xs font-medium">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${darkMode ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    <Zap size={13} className="text-[#C52033]" /> 3-Sec Quick Billing
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${darkMode ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    <Layers size={13} className="text-orange-500" /> Zomato & Swiggy Sync
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${darkMode ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    <ShieldCheck size={13} className="text-emerald-500" /> 100% Offline Mode
                  </span>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Link
                  to="/features"
                  className="btn-primary-glow w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl transition-transform hover:scale-105"
                >
                  <span>Explore All Features</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks darkMode={darkMode} />
      <Comparison darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <Newsletter darkMode={darkMode} />
    </main>
  )
}
