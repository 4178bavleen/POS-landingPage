import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Why FoodAdda', href: '#problem-solution' },
  { label: 'ROI Estimator', href: '#roi-calculator' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'header-glass shadow-xl shadow-black/25 border border-slate-800/80 dark:border-white/[0.1] backdrop-blur-2xl'
              : 'bg-transparent'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#C52033]/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={logo}
                alt="FoodAdda"
                className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-bold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Food<span className="text-[#C52033]">Adda</span>
              </span>
              <span className="text-[9px] font-semibold text-slate-400 tracking-wider uppercase -mt-0.5">
                by Vibrantick
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                darkMode
                  ? 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                  : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => scrollTo('#pricing')}
              className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => scrollTo('#newsletter')}
              className="btn-primary-glow text-xs sm:text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 rounded-lg border ${
                darkMode
                  ? 'border-white/10 text-slate-400'
                  : 'border-slate-200 text-slate-600'
              }`}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-1.5 rounded-lg border ${
                darkMode
                  ? 'border-white/10 text-slate-300'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`lg:hidden mx-4 mt-2 p-4 rounded-2xl border shadow-2xl backdrop-blur-2xl ${
              darkMode
                ? 'bg-[#08090A]/95 border-white/10 text-white'
                : 'bg-white/95 border-slate-200 text-slate-900'
            }`}
          >
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                    darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800/60 dark:border-white/[0.08]">
                <button
                  onClick={() => scrollTo('#newsletter')}
                  className="btn-primary-glow w-full justify-center text-sm py-2.5 rounded-xl flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
