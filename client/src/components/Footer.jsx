import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'
import { useBranding } from '../context/BrandingContext'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { Mail, Phone, CalendarCheck } from 'lucide-react'

const socials = [
  { icon: FiInstagram, label: 'Instagram', href: '#' },
  { icon: FiFacebook, label: 'Facebook', href: '#' },
]

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Why Bhojan Bandhu', path: '/features' },
      { label: 'Contact Sales', href: '#newsletter' },
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
    ],
  },
]

export default function Footer({ darkMode }) {
  const { logo: brandLogo, logoDark: brandLogoDark, brandName } = useBranding()
  const activeLogo = darkMode ? (brandLogoDark || logoDark) : (brandLogo || logo)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLink = (link) => {
    if (link.path) {
      if (link.path === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate(link.path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }
    if (location.pathname === '/') {
      const el = document.querySelector(link.href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/${link.href}`)
    }
  }

  const headingClass = `text-[11px] font-bold uppercase tracking-widest mb-4 ${
    darkMode ? 'text-slate-300' : 'text-slate-800'
  }`
  const linkClass = `text-sm transition-colors hover:text-[#068aca] ${
    darkMode ? 'text-slate-400' : 'text-slate-600'
  }`

  return (
    <footer className="border-t border-slate-800/60 dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand & Contact */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <img
                src={activeLogo}
                alt={`${brandName} Logo`}
                className="h-9 w-9 rounded-full object-contain p-0.5"
              />
              <span className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {brandName === 'Bhojan Bandhu' ? (
                  <>
                    Bhojan <span className="text-[#068aca]">Bandhu</span>
                  </>
                ) : (
                  brandName
                )}
              </span>
            </Link>
            <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Restaurant POS built for speed — billing, KDS, inventory & multi-branch control in one platform.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href="mailto:support@bhojanbandhu.in"
                className={`flex items-center gap-2.5 hover:text-[#068aca] transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <Mail size={14} className="text-[#068aca]" />
                <span>support@bhojanbandhu.in</span>
              </a>
              <a
                href="tel:+919870443528"
                className={`flex items-center gap-2.5 hover:text-[#068aca] transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <Phone size={14} className="text-[#068aca]" />
                <span>+91 9870443528</span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className={headingClass}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => handleLink(link)} className={`${linkClass} cursor-pointer`}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Column */}
          <div>
            <h4 className={headingClass}>Get Started</h4>
            <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Try Bhojan Bandhu free for 14 days. No credit card required.
            </p>
            <button
              onClick={() => handleLink({ href: '#newsletter' })}
              className="btn-primary-glow text-xs sm:text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 w-fit cursor-pointer mb-5"
            >
              <CalendarCheck size={14} />
              <span>Book a Demo</span>
            </button>
            <div className="flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`p-2 rounded-lg border transition-all ${
                      darkMode
                        ? 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                        : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800/40 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={darkMode ? 'text-slate-500' : 'text-slate-400'}>
            <span className="font-semibold text-[#068aca]"> Bhojan Bandhu | Product of Vibrantick Infotech Solutions</span>
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <button
              onClick={() => handleLink({ path: '/terms' })}
              className={`hover:text-[#068aca] transition-colors cursor-pointer ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Terms & Conditions
            </button>
            <span className={darkMode ? 'text-slate-700' : 'text-slate-300'}>•</span>
            <button
              onClick={() => handleLink({ path: '/privacy' })}
              className={`hover:text-[#068aca] transition-colors cursor-pointer ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
