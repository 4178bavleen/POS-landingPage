import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  UtensilsCrossed,
  Receipt,
  Layers,
  BarChart3,
  Truck,
  ShieldCheck,
  QrCode,
  Users,
  Sparkles,
  ArrowRight,
  Printer,
  ChevronRight,
  CheckCircle2,
  Zap,
  Globe,
  Server,
  RefreshCw,
  Clock,
  FileText,
  AlertTriangle,
  XCircle,
  HelpCircle,
} from 'lucide-react'
import Features from '../components/Features'

const categories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'billing', label: 'POS & Billing' },
  { id: 'kitchen', label: 'Kitchen & KDS' },
  { id: 'aggregators', label: 'Swiggy & Zomato' },
  { id: 'inventory', label: 'Inventory & Stock' },
  { id: 'franchise', label: 'Franchise & HQ' },
]

const deepFeatures = [
  {
    category: 'billing',
    icon: Receipt,
    badge: 'Front of House',
    title: 'Touchscreen Rapid Billing',
    description:
      'Punch orders in under 3 seconds. Supports combos, customized dish modifiers, discounts, automated GST, and split payments (Cash, Card, UPI, Wallets).',
    bullets: [
      'Split bills by seat or equal share',
      'One-tap discount authorization',
      'Multi-tender simultaneous checkout',
    ],
    highlight: '< 3s per ticket',
    color: 'text-[#C52033]',
    bg: 'bg-[#C52033]/15',
  },
  {
    category: 'kitchen',
    icon: UtensilsCrossed,
    badge: 'Kitchen Display',
    title: 'Real-Time KDS',
    description:
      'Eliminate paper chaos with synchronized multi-station digital screens. Color-coded ticket aging alerts chefs when preparation passes target thresholds.',
    bullets: [
      'Live order bumping and item status sync',
      'Split routing for Bar, Fryer, & Main Kitchen',
      'Average ticket prep time telemetry',
    ],
    highlight: 'Zero latency sync',
    color: 'text-amber-500',
    bg: 'bg-amber-500/15',
  },
  {
    category: 'aggregators',
    icon: Truck,
    badge: 'Online Orders',
    title: 'Direct Swiggy & Zomato Sync',
    description:
      'Say goodbye to multiple clunky aggregator tablets. Ingest online orders directly into your POS with instant automatic kitchen ticket printing.',
    bullets: [
      'Auto-accept orders to avoid platform penalties',
      'Centralized menu item toggle (In Stock / Sold Out)',
      'Consolidated payout and commission reconciliation',
    ],
    highlight: '0% missed orders',
    color: 'text-orange-500',
    bg: 'bg-orange-500/15',
  },
  {
    category: 'inventory',
    icon: Layers,
    badge: 'Supply Chain',
    title: 'Recipe-Level Live Depletion',
    description:
      'Every dish sold instantly decrements exact raw ingredients from inventory. Get automated WhatsApp alerts before key staples run out.',
    bullets: [
      'Granular ingredient recipes down to gram & ml',
      'Vendor purchase order generation',
      'Wastage, spoilage, and theft variance auditing',
    ],
    highlight: 'Real-time raw stock',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/15',
  },
  {
    category: 'billing',
    icon: ShieldCheck,
    badge: 'High Availability',
    title: '100% Offline Operational Mode',
    description:
      'Unreliable internet will never stop your service. The local engine rings sales, applies discounts, and prints KOTs offline, syncing to cloud upon reconnect.',
    bullets: [
      'Local IndexedDB / SQLite resilient storage',
      'Offline KOT and bill print queue',
      'Automatic conflict-free cloud sync',
    ],
    highlight: '100% uptime',
    color: 'text-purple-500',
    bg: 'bg-purple-500/15',
  },
  {
    category: 'billing',
    icon: Printer,
    badge: 'Hardware',
    title: 'Silent Background Thermal Printing',
    description:
      'Raw ESC/POS communication sends receipts and kitchen order tickets directly to thermal printers over USB, LAN, or Wi-Fi without browser dialogs.',
    bullets: [
      'Parallel printing across multiple kitchen counters',
      'Bilingual receipt printing (English & Local script)',
      'Custom header, footer, GSTIN & QR code logos',
    ],
    highlight: 'Direct ESC/POS driver',
    color: 'text-[#C52033]',
    bg: 'bg-[#C52033]/15',
  },
  {
    category: 'franchise',
    icon: Users,
    badge: 'Franchise HQ',
    title: 'Hierarchical Multi-Tenant Engine',
    description:
      'Architected for fast-growing chains. Push global recipes and menu pricing from HQ while giving individual franchise outlets local operating autonomy.',
    bullets: [
      'Strict tenant data isolation and role boundaries',
      'Multi-outlet sales comparison & royalty calculation',
      'Consolidated multi-branch P&L dashboard',
    ],
    highlight: 'Enterprise tier',
    color: 'text-blue-500',
    bg: 'bg-blue-500/15',
  },
  {
    category: 'billing',
    icon: QrCode,
    badge: 'Self-Serve',
    title: 'Contactless QR Table Ordering',
    description:
      'Place dynamic QR codes on tables allowing diners to scan, browse interactive digital menus with photos, place orders, and pay directly via UPI.',
    bullets: [
      'No customer app download required',
      'Instant routing to kitchen display',
      'Increased table turn rate by up to 25%',
    ],
    highlight: '25% faster table turn',
    color: 'text-teal-500',
    bg: 'bg-teal-500/15',
  },
  {
    category: 'franchise',
    icon: BarChart3,
    badge: 'Analytics',
    title: 'Business Pulse & Hourly Analytics',
    description:
      'Deep real-time insight into average ticket value, fastest-selling dishes, peak dining hours, cashier productivity, and customer retention metrics.',
    bullets: [
      'Real-time gross and net sales tracking',
      'Cost of Goods Sold (COGS) variance graphs',
      'End-of-day Z-Report sent via email & WhatsApp',
    ],
    highlight: 'Live executive view',
    color: 'text-rose-500',
    bg: 'bg-rose-500/15',
  },
  {
    category: 'billing',
    icon: FileText,
    badge: 'Compliance',
    title: 'Automated GST & E-Invoicing',
    description:
      'Stay 100% tax compliant effortlessly. Configure CGST, SGST, IGST, Service Charges, and export ready-made JSON/Excel ledgers for CA filing.',
    bullets: [
      'Item-level or category-level GST rate configuration',
      'B2B customer GSTIN validation on the fly',
      'One-click export compatible with Tally and Zoho Books',
    ],
    highlight: 'Tax compliant',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/15',
  },
  {
    category: 'aggregators',
    icon: RefreshCw,
    badge: 'Omnichannel',
    title: 'Unified Dine-In, Takeaway & Delivery',
    description:
      'Manage all revenue streams in a single unified dashboard without toggling between disparate screens or running separate accounting reconciliations.',
    bullets: [
      'Single centralized order timeline',
      'Specific channel pricing & packaging charges',
      'Driver assignment and dispatch tracking',
    ],
    highlight: 'Unified pipeline',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/15',
  },
]

const comparisonData = [
  {
    feature: 'Offline Billing Reliability',
    foodadda: '100% full billing & print capabilities with auto-sync',
    legacy: 'Crashes or locks up without active internet connection',
  },
  {
    feature: 'Zomato & Swiggy Integration',
    foodadda: 'Direct real-time webhook integration into single POS screen',
    legacy: 'Requires 2-3 separate physical tablets and manual re-punching',
  },
  {
    feature: 'Kitchen Display System (KDS)',
    foodadda: 'Instant digital KDS with real-time station routing',
    legacy: 'Relies solely on prone-to-jamming paper KOT slips',
  },
  {
    feature: 'Multi-Outlet Hierarchy',
    foodadda: 'Built-in multi-tenant architecture with master HQ control',
    legacy: 'Each outlet runs isolated database requiring manual exports',
  },
  {
    feature: 'Recipe & Ingredient Depletion',
    foodadda: 'Automatic gram-by-gram depletion with WhatsApp low-stock alerts',
    legacy: 'Periodic manual stock counts with high variance and pilferage',
  },
  {
    feature: 'Hardware Freedom',
    foodadda: 'Works on any Windows, Android, Mac, or Linux device',
    legacy: 'Locked to expensive proprietary hardware and annual dongles',
  },
]

export default function FeaturesPage({ darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredFeatures =
    selectedCategory === 'all'
      ? deepFeatures
      : deepFeatures.filter((f) => f.category === selectedCategory)

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background Decorative Ambient */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#C52033]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-medium mb-6">
          <Link
            to="/"
            className={`transition-colors hover:text-[#C52033] ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Home
          </Link>
          <ChevronRight size={13} className={darkMode ? 'text-slate-600' : 'text-slate-400'} />
          <span className="text-[#C52033] font-semibold">Features</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#C52033]" />
            <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
              Full Platform Capabilities
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineered for high speed, zero downtime &{' '}
            <span className="gradient-text">maximum kitchen output</span>
          </h1>

          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            FoodAdda by <strong>Vibrantick</strong> unifies counter billing, kitchen display stations, delivery aggregators, and multi-tenant chain analytics into one seamless operating system.
          </p>

          {/* Quick Metrics Bar */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border ${
              darkMode
                ? 'bg-[#101216]/80 border-white/10 text-white'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C52033]">&lt; 3 Sec</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Average Bill Checkout
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500">100%</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Offline Mode Reliability
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-500">0%</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Online Order Drop Rate
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-500">Unlimited</div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Franchise & Branch Scale
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Showcase Section */}
        <div className="mb-24">
          <Features darkMode={darkMode} />
        </div>

        {/* Category Filters for Deep Dive */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Explore Every Feature in Detail
            </h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Filter through specific modules engineered for each touchpoint in your restaurant.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#C52033] text-white shadow-md shadow-[#C52033]/25 scale-105'
                    : darkMode
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all hover:translate-y-[-2px] ${
                  darkMode
                    ? 'bg-[#101216] border-white/10 hover:border-white/20'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                      <Icon size={22} />
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        darkMode
                          ? 'bg-white/5 border-white/10 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 size={13} className="text-[#C52033] shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    darkMode
                      ? 'border-white/10 text-slate-400'
                      : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <span>Benchmark</span>
                  <span className={`${item.color} font-bold`}>{item.highlight}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Feature Comparison: FoodAdda vs Legacy POS */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-3">
              <span className="text-xs font-semibold tracking-wide text-[#C52033] uppercase">
                Direct Benchmark
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Why Modern Restaurants Choose FoodAdda
            </h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Compare FoodAdda's modern cloud-native architecture against legacy legacy POS software.
            </p>
          </div>

          <div
            className={`rounded-2xl border overflow-hidden ${
              darkMode ? 'bg-[#101216] border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr
                    className={`border-b ${
                      darkMode ? 'border-white/10 bg-white/[0.02]' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">
                      Operational Capability
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-[#C52033]">
                      FoodAdda by Vibrantick
                    </th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-slate-400">
                      Traditional Legacy POS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40 dark:divide-white/[0.06]">
                  {comparisonData.map((row) => (
                    <tr
                      key={row.feature}
                      className={`transition-colors ${
                        darkMode ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50/50'
                      }`}
                    >
                      <td className="py-4 px-6 font-semibold">
                        <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                          {row.feature}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span
                            className={`font-medium ${
                              darkMode ? 'text-slate-200' : 'text-slate-800'
                            }`}
                          >
                            {row.foodadda}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-start gap-2">
                          <XCircle size={16} className="text-rose-500/80 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                            {row.legacy}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div
          className={`p-8 sm:p-14 rounded-3xl border text-center relative overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-b from-[#141720] to-[#0A0C0E] border-white/10 shadow-2xl'
              : 'bg-gradient-to-b from-slate-50 to-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C52033]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Ready to experience FoodAdda in your kitchen?
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed mb-8 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Book a live 1-on-1 walkthrough tailored to your menu, hardware setup, and franchise structure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#newsletter"
                className="btn-primary-glow w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Free Demo</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/#pricing"
                className="btn-secondary-glow w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Check Pricing Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
