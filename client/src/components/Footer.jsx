import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useBranding } from '../context/BrandingContext'
import { FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { Mail, Phone, MapPin, Building2, ShieldCheck } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Multi-Tenant POS', to: '/features' },
    { label: 'Socket.IO KDS', to: '/features' },
    { label: 'Silent Print Service', to: '/features' },
    { label: 'Recipe & Inventory', to: '/features' },
    { label: 'Branch Management', to: '/features' },
    { label: 'Aggregator Sync', to: '/features' },
  ],
  Solutions: [
    { label: 'Franchise Chains', to: '/#problem-solution' },
    { label: 'Single Restaurants', to: '/#problem-solution' },
    { label: 'Dark & Cloud Kitchens', to: '/#problem-solution' },
    { label: 'QSR Counters', to: '/#problem-solution' },
    { label: 'Cafes & Bakeries', to: '/#problem-solution' },
    { label: 'Restro-Bars', to: '/#problem-solution' },
  ],
  Architecture: [
    { label: 'Tenant Isolation', to: '/#architecture' },
    { label: 'HMAC Webhook Ingestion', to: '/#architecture' },
    { label: 'PostgreSQL & Prisma', to: '/#architecture' },
    { label: 'AES-256 Encryption', to: '/#architecture' },
    { label: 'API Documentation', to: '/#architecture' },
    { label: 'Security Audit', to: '/#architecture' },
  ],
  Company: [
   
    { label: 'Bhojan Bandhu Overview', to: '/' },
    { label: 'Franchise Partner Program', to: '/#newsletter' },
    { label: 'Support Hotline', to: 'tel:18002008899', isExternal: true },
    { label: 'Contact Sales', to: '/#newsletter' },
    { label: 'Terms & SLA', to: '#' },
  ],
}

const socials = [
  { icon: FiTwitter, label: 'Twitter', href: '#' },
  { icon: FiInstagram, label: 'Instagram', href: '#' },
  { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
  { icon: FiYoutube, label: 'YouTube', href: '#' },
]

export default function Footer({ darkMode }) {
  const { logo: brandLogo, brandName } = useBranding()

  return (
    <footer className="border-t border-slate-800/60 dark:border-white/[0.08] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src={brandLogo || logo}
                alt={`${brandName} Logo`}
                className="h-9 w-9 rounded-full object-contain p-0.5"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {brandName === 'Bhojan Bandhu' ? (
                    <>
                      Bhojan <span className="text-[#C52033]">Bandhu</span>
                    </>
                  ) : (
                    brandName
                  )}
                </span>
            
              </div>
            </Link>

            <p className={`text-xs sm:text-sm leading-relaxed mb-6 max-w-sm ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Enterprise-grade multi-tenant SaaS restaurant POS & management platform. Designed for multi-franchise chains, standalone restaurants, and dark kitchens.
            </p>

            <div className="space-y-2 mb-6 text-xs sm:text-sm">
              <a
                href="mailto:support@bhojanbandhu.in"
                className={`flex items-center gap-2 hover:text-[#C52033] transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <Mail size={14} className="text-[#C52033]" />
                <span>support@bhojanbandhu.in</span>
              </a>

              <a
                href="tel:18002008899"
                className={`flex items-center gap-2 hover:text-[#C52033] transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <Phone size={14} className="text-[#C52033]" />
                <span>1800-200-8899 (Enterprise Support, 24/7)</span>
              </a>

              
            </div>

            {/* Social links */}
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

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-800'
              }`}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.to}
                        className={`text-xs transition-colors hover:text-[#C52033] ${
                          darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className={`text-xs transition-colors hover:text-[#C52033] ${
                          darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/40 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
              Multi-Tenant Cloud Services Operational
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className={`hover:text-[#C52033] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Privacy Policy</a>
            <a href="#" className={`hover:text-[#C52033] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Terms & SLA</a>
            <a href="#" className={`hover:text-[#C52033] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Security Vault</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
