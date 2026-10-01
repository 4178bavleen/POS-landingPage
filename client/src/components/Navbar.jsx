import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Sun,
  Moon,
  CalendarCheck,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  HelpCircle,
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { POS_APP_URL } from '../config/api'
import { useBranding } from '../context/BrandingContext'
import OfferBanner from './OfferBanner'

const whyBhojanBandhuDropdown = [
  {
    label: 'Overview & All Features',
    desc: 'Explore the full 50+ enterprise SaaS feature suite',
    path: '/features',
    isPage: true,
    icon: Sparkles,
  },
  {
    label: 'Why Us vs Competitors',
    desc: 'Compare Bhojan Bandhu against legacy POS systems',
    href: '#comparison',
    icon: ShieldCheck,
  },
  {
    label: 'Problem & Solution',
    desc: 'Solving restaurant billing & kitchen delays',
    href: '#problem-solution',
    icon: Zap,
  },
  {
    label: 'System Architecture',
    desc: 'Multi-tenant hierarchy & real-time KDS',
    href: '#architecture',
    icon: Layers,
  },
  {
    label: 'How It Works',
    desc: 'Fast 3-step setup and operational workflow',
    href: '#how-it-works',
    icon: HelpCircle,
  },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const { logo: brandLogo, brandName } = useBranding()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileWhyOpen, setMobileWhyOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (link) => {
    setMobileOpen(false)
    setDropdownOpen(false)

    if (link.isPage) {
      if (link.path === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate(link.path)
      }
      return
    }

    // Anchor link logic
    if (location.pathname === '/') {
      const el = document.querySelector(link.href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/${link.href}`)
    }
  }

  const handleActionClick = (targetHash) => {
    setMobileOpen(false)
    setDropdownOpen(false)
    if (location.pathname === '/') {
      const el = document.querySelector(targetHash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/${targetHash}`)
    }
  }

  const isWhyActive =
    location.pathname === '/features' ||
    location.pathname === '/why-bhojan-bandhu'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <OfferBanner />
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4'
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
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative flex items-center">
                <div className="absolute -inset-1 bg-[#068aca]/30 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={brandLogo || logo}
                  alt={brandName}
                  className="relative h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home Link */}
              <button
                onClick={() => handleNavClick({ label: 'Home', path: '/', isPage: true })}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  location.pathname === '/'
                    ? darkMode
                      ? 'text-white font-semibold'
                      : 'text-slate-950 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                Home
              </button>

              {/* Why Bhojan Bandhu Dropdown Trigger */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isWhyActive || dropdownOpen
                      ? 'bg-[#068aca]/15 text-[#068aca] border border-[#068aca]/30 font-semibold shadow-sm'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                  }`}
                >
                  <span>Why Bhojan Bandhu</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className={`absolute top-full left-0 mt-2 w-80 p-2 rounded-2xl border shadow-2xl backdrop-blur-2xl z-50 ${
                        darkMode
                          ? 'bg-dark-canvas/95 border-dark-border text-dark-text'
                          : 'bg-white/95 border-slate-200 text-slate-900'
                      }`}
                    >
                      <div className="space-y-1">
                        {whyBhojanBandhuDropdown.map((item) => {
                          const IconComp = item.icon
                          return (
                            <button
                              key={item.label}
                              onClick={() => handleNavClick(item)}
                              className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                                darkMode
                                  ? 'hover:bg-white/[0.07]'
                                  : 'hover:bg-slate-100/80'
                              }`}
                            >
                              <div
                                className={`p-2 rounded-lg shrink-0 transition-colors ${
                                  darkMode
                                    ? 'bg-[#068aca]/15 text-[#068aca] group-hover:bg-[#068aca] group-hover:text-white'
                                    : 'bg-[#068aca]/10 text-[#068aca] group-hover:bg-[#068aca] group-hover:text-white'
                                }`}
                              >
                                <IconComp size={16} />
                              </div>
                              <div>
                                <div className="text-xs sm:text-sm font-semibold flex items-center justify-between">
                                  <span>{item.label}</span>
                                </div>
                                <p
                                  className={`text-[11px] leading-tight mt-0.5 ${
                                    darkMode ? 'text-slate-400' : 'text-slate-500'
                                  }`}
                                >
                                  {item.desc}
                                </p>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Link */}
              <button
                onClick={() => handleActionClick('#pricing')}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                Pricing
              </button>

              {/* Architecture Link */}
              <button
                onClick={() => handleNavClick({ label: 'Architecture', href: '#architecture' })}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                Architecture
              </button>

              {/* FAQ Link */}
              <button
                onClick={() => handleNavClick({ label: 'FAQ', href: '#faq' })}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                }`}
              >
                FAQ
              </button>
            </div>

            {/* Desktop Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleActionClick('#newsletter')}
                className="btn-primary-glow text-xs sm:text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <CalendarCheck size={14} />
                <span>Book a Demo</span>
              </button>

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
                  ? 'bg-dark-canvas/95 border-dark-border text-dark-text'
                  : 'bg-white/95 border-slate-200 text-slate-900'
              }`}
            >
              <div className="space-y-1.5">
                {/* Home */}
                <button
                  onClick={() => handleNavClick({ label: 'Home', path: '/', isPage: true })}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                    location.pathname === '/'
                      ? 'bg-[#068aca]/15 text-[#068aca] font-semibold border border-[#068aca]/30'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Home
                </button>

                {/* Why Bhojan Bandhu Accordion in Mobile Menu */}
                <div>
                  <button
                    onClick={() => setMobileWhyOpen(!mobileWhyOpen)}
                    className={`flex items-center justify-between w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                      isWhyActive
                        ? 'bg-[#068aca]/15 text-[#068aca] font-semibold border border-[#068aca]/30'
                        : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>Why Bhojan Bandhu</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        mobileWhyOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileWhyOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 mt-1 space-y-1 overflow-hidden"
                      >
                        {whyBhojanBandhuDropdown.map((item) => {
                          const IconComp = item.icon
                          return (
                            <button
                              key={item.label}
                              onClick={() => handleNavClick(item)}
                              className={`flex items-center gap-2.5 w-full text-left px-3 py-2 text-xs font-medium rounded-lg cursor-pointer transition-colors ${
                                darkMode
                                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                              }`}
                            >
                              <IconComp size={14} className="text-[#068aca]" />
                              <span>{item.label}</span>
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Architecture */}
                <button
                  onClick={() => handleNavClick({ label: 'Architecture', href: '#architecture' })}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                    darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Architecture
                </button>

                {/* FAQ */}
                <button
                  onClick={() => handleNavClick({ label: 'FAQ', href: '#faq' })}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg cursor-pointer ${
                    darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  FAQ
                </button>

                <div className="pt-3 border-t border-slate-800/60 dark:border-white/[0.08] space-y-2">
                  <a
                    href={`${POS_APP_URL}/login`}
                    onClick={() => setMobileOpen(false)}
                    className="btn-secondary-glow block w-full text-center text-sm py-2.5 rounded-xl font-semibold"
                  >
                    POS Login
                  </a>
                  <button
                    onClick={() => handleActionClick('#newsletter')}
                    className="btn-primary-glow w-full justify-center text-sm py-2.5 rounded-xl flex items-center gap-2 cursor-pointer"
                  >
                    <CalendarCheck size={15} />
                    <span>Book a Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
