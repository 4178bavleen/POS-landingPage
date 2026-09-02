import logo from '../assets/logo.png'
import { FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { Mail, Phone, MapPin, Building2, ShieldCheck } from 'lucide-react'

const footerLinks = {
  Platform: ['Multi-Tenant POS', 'Socket.IO KDS', 'Silent Print Service', 'Recipe & Inventory', 'Branch Management', 'Aggregator Sync'],
  Solutions: ['Franchise Chains', 'Single Restaurants', 'Dark & Cloud Kitchens', 'QSR Counters', 'Cafes & Bakeries', 'Restro-Bars'],
  Architecture: ['Tenant Isolation', 'HMAC Webhook Ingestion', 'PostgreSQL & Prisma', 'AES-256 Encryption', 'API Documentation', 'Security Audit'],
  Company: ['About Vibrantick', 'FoodAdda Overview', 'Franchise Partner Program', 'Support Hotline', 'Contact Sales', 'Terms & SLA'],
}

const socials = [
  { icon: FiTwitter, label: 'Twitter', href: '#' },
  { icon: FiInstagram, label: 'Instagram', href: '#' },
  { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
  { icon: FiYoutube, label: 'YouTube', href: '#' },
]

export default function Footer({ darkMode }) {
  return (
    <footer className="border-t border-slate-800/60 dark:border-white/[0.08] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <img
                src={logo}
                alt="FoodAdda Logo"
                className="h-9 w-9 rounded-full object-contain p-0.5"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Food<span className="text-[#C52033]">Adda</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  A Product by Vibrantick Infotech Solutions
                </span>
              </div>
            </a>

            <p className={`text-xs sm:text-sm leading-relaxed mb-6 max-w-sm ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Enterprise-grade multi-tenant SaaS restaurant POS & management platform. Designed for multi-franchise chains, standalone restaurants, and dark kitchens.
            </p>

            <div className="space-y-2 mb-6 text-xs sm:text-sm">
              <a
                href="mailto:support@foodadda.in"
                className={`flex items-center gap-2 hover:text-[#C52033] transition-colors ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                <Mail size={14} className="text-[#C52033]" />
                <span>support@foodadda.in</span>
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

              <p className={`flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <Building2 size={14} className="text-[#C52033]" />
                <span>Vibrantick Infotech Solutions Pvt Ltd</span>
              </p>
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
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-xs transition-colors hover:text-[#C52033] ${
                        darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/40 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={darkMode ? 'text-slate-500' : 'text-slate-500'}>
            © {new Date().getFullYear()} Vibrantick Infotech Solutions Pvt Ltd. All rights reserved.
          </p>

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
