import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Server,
  FileText,
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  Building2,
  Receipt,
  UserCheck,
} from 'lucide-react'

const sections = [
  {
    id: 'intro',
    title: '1. Introduction & Overview',
    icon: ShieldCheck,
    content: [
      'Bhojan Bandhu ("we", "our", or "us"), a restaurant POS and management platform engineered and operated by Vibrantick Infotech Solutions, is deeply committed to protecting the privacy, confidentiality, and security of our merchant partners and their customers.',
      'This Privacy Policy describes our practices regarding the collection, use, processing, storage, and disclosure of information when you access our website (bhojanbandhu.in), utilize our cloud and offline point-of-sale software, mobile applications, and connected kitchen services.',
      'Our practices adhere strictly to the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act (DPDP Act, 2023) of India.',
    ],
  },
  {
    id: 'data-collection',
    title: '2. Information We Collect',
    icon: Database,
    content: [
      'We collect information under three distinct operational categories to power your restaurant billing and kitchen operations:',
      '• Merchant Business Data: Legal entity trade name, restaurant outlet addresses, FSSAI license numbers, GSTIN, owner/manager contact numbers, email addresses, and subscription payment details.',
      '• Transaction & Operational POS Data: Order line items, billing amounts, table assignments, order types (Dine-in, Takeaway, Online Delivery), payment modes (Cash, Card, UPI, Wallets), cashier IDs, discount logs, and recipe depletion metrics.',
      '• End-Customer Contact Details: Mobile numbers or names collected at counter checkout or via QR Menu Ordering strictly for issuing paperless digital bills, WhatsApp e-invoices, and loyalty reward tracking.',
      '• Technical & Diagnostic Data: IP addresses, device identifiers, POS terminal hardware specifications, OS versions, crash analytics, and offline sync transaction journals.',
    ],
  },
  {
    id: 'data-usage',
    title: '3. How We Use Collected Information',
    icon: Eye,
    content: [
      'The data processed by Bhojan Bandhu is used exclusively to deliver robust, high-availability restaurant POS services:',
      '• Real-time POS Billing & Kitchen Operations: Processing instant invoices, routing orders to Kitchen Display Systems (KDS), and executing split tenders.',
      '• Paperless Invoicing & Notifications: Dispatching transaction confirmations, e-bills, and status updates via SMS and WhatsApp.',
      '• Business Intelligence & Accounting: Calculating Cost of Goods Sold (COGS), real-time revenue analytics, cashier shift closures, and statutory GST export ledgers.',
      '• Food Aggregator Synchronization: Seamlessly ingesting, updating, and marking food ready across Swiggy and Zomato pipelines.',
      '• Account Security & Audit Trails: Monitoring unauthorized discount approvals, audit logs, and fraud prevention.',
    ],
  },
  {
    id: 'no-sale',
    title: '4. Strict No-Sale of Data Commitment',
    icon: Lock,
    content: [
      'In alignment with established ethical software practices (such as Petpooja and enterprise SaaS benchmarks), Bhojan Bandhu maintains a zero-tolerance policy against data commodification.',
      'We DO NOT sell, rent, monetize, or trade your restaurant’s customer databases, dining patron phone numbers, revenue reports, or supplier invoices to third-party advertisers, data brokers, or marketing networks under any circumstances.',
      'Your customer databases remain your proprietary business asset. We act solely as a secure data processor on your behalf.',
    ],
  },
  {
    id: 'offline-security',
    title: '5. Offline Storage & Cloud Synchronization',
    icon: Server,
    content: [
      'Bhojan Bandhu employs a state-of-the-art hybrid architecture. When your internet connection is disrupted, order transactions and KOT tickets are saved locally within an encrypted offline database on your POS terminal.',
      'Upon internet restoration, the local engine cryptographically verifies transaction sequence integrity before synchronizing records over high-grade TLS 1.3 encrypted pipelines to our secure cloud data servers.',
    ],
  },
  {
    id: 'third-parties',
    title: '6. Third-Party Integrations & Sub-Processors',
    icon: UserCheck,
    content: [
      'To provide end-to-end functionality, we integrate with vetted infrastructure and platform providers:',
      '• Cloud Infrastructure: Enterprise-grade data centers located in India (e.g., AWS / Google Cloud) ensuring data residency compliance.',
      '• Payment Gateways & Terminals: PCI-DSS compliant payment aggregators (e.g., Razorpay, PineLabs, Paytm) for UPI QR and EDC card processing.',
      '• Communication Channels: Enterprise SMS telecommunication gateways and Meta-authorized WhatsApp Business BSPs for paperless invoice dispatch.',
      '• Food Aggregators: Official developer APIs of Swiggy and Zomato for automatic menu mapping and order relay.',
    ],
  },
  {
    id: 'retention',
    title: '7. Data Retention & Archival Policies',
    icon: Clock,
    content: [
      'We retain your operational billing records for as long as your merchant account remains active to provide continuous historical comparisons, yearly revenue audits, and recipe trends.',
      'In accordance with Indian tax, GST, and company statutory audit mandates, financial invoice logs may be retained in secure encrypted archives for a period of up to eight (8) financial years.',
      'Merchants may request a complete export of their operational data at any time in standard CSV or Excel formats prior to account deactivation.',
    ],
  },
  {
    id: 'security-measures',
    title: '8. Security Architecture & Encryption',
    icon: Lock,
    content: [
      'We implement rigorous administrative, technical, and physical safeguards to prevent unauthorized access, alteration, or disclosure:',
      '• Encryption in Transit: 256-bit TLS 1.3 protocol encryption for all data flowing between POS terminals, cloud APIs, and web dashboards.',
      '• Encryption at Rest: Industry-standard AES-256 cryptographic algorithms protecting multi-tenant database volumes and backups.',
      '• Role-Based Access Control (RBAC): Fine-grained permission tiers restricting cashiers and stewards from viewing executive profit margins or sensitive phone numbers.',
      '• Continuous Auditing: Automated vulnerability scanning, daily off-site encrypted backups, and DDoS mitigation.',
    ],
  },
  {
    id: 'merchant-rights',
    title: '9. Your Rights & Choices',
    icon: FileText,
    content: [
      'Under applicable data protection legislation (including the DPDP Act 2023), merchants and authorized individuals possess the right to:',
      '• Access and Review: Request a comprehensive summary of personal and business information held on file.',
      '• Correction & Rectification: Update outdated or inaccurate outlet details, phone numbers, or tax registration records via the POS dashboard.',
      '• Opt-Out of Marketing Communications: Dining patrons who receive promotional SMS notifications from your outlet can opt-out at any time via standard unsubscribe keywords.',
      '• Data Portability: Export full catalogs, customer lists, and transaction histories.',
    ],
  },
  {
    id: 'cookies',
    title: '10. Cookies & Tracking Technologies',
    icon: Eye,
    content: [
      'Our marketing website (bhojanbandhu.in) utilizes standard cookies and session tokens solely to preserve authentication sessions, remember dark/light theme preferences, and analyze aggregate visitor traffic.',
      'We do not employ cross-site tracking cookies to deliver targeted third-party advertising across external websites.',
    ],
  },
  {
    id: 'grievance',
    title: '11. Grievance Officer & Contact Information',
    icon: HelpCircle,
    content: [
      'If you have questions, concerns, or complaints regarding this Privacy Policy or our data handling practices, our designated Data Protection & Grievance Desk may be contacted at:',
      'Company: Vibrantick Infotech Solutions (Bhojan Bandhu POS)',
      'Attention: Data Protection & Grievance Officer',
      'Email: support@bhojanbandhu.in',
      'Helpline: +91 9870443528',
      'Resolution Timeline: All bona fide privacy inquiries will be acknowledged within 48 business hours and resolved in accordance with statutory guidelines.',
    ],
  },
]

export default function PrivacyPolicyPage({ darkMode }) {
  const [activeSection, setActiveSection] = useState('intro')

  const scrollTo = (id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs sm:text-sm mb-6 sm:mb-8">
        <Link
          to="/"
          className={`transition-colors hover:text-[#068aca] ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Home
        </Link>
        <ChevronRight size={13} className={darkMode ? 'text-slate-600' : 'text-slate-400'} />
        <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Legal</span>
        <ChevronRight size={13} className={darkMode ? 'text-slate-600' : 'text-slate-400'} />
        <span className="text-[#068aca] font-semibold">Privacy Policy</span>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
          <ShieldCheck size={14} className="text-[#068aca]" />
          <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
            Data Protection & Privacy Policy
          </span>
        </div>

        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          How Bhojan Bandhu collects, processes, and safeguards operational data for restaurant owners, billing operators, and dining customers.
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-slate-300'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            <Clock size={12} className="text-[#068aca]" />
            Last Updated: October 2026
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-slate-300'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            <Lock size={12} className="text-[#068aca]" />
            DPDP Act 2023 & IT Act Compliant
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-slate-300'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            <CheckCircle2 size={12} className="text-emerald-500" />
            Zero Data-Sale Guarantee
          </span>
        </div>
      </div>

      {/* Main Layout: Sidebar Navigation + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Table of contents sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28">
          <div
            className={`p-5 rounded-2xl border ${
              darkMode
                ? 'bg-dark-surface/90 border-dark-border text-dark-text'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800/40 dark:border-white/[0.08]">
              <Lock size={16} className="text-[#068aca]" />
              <h3 className="text-sm font-bold uppercase tracking-wider">Quick Navigation</h3>
            </div>
            <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    activeSection === sec.id
                      ? 'bg-[#068aca]/15 text-[#068aca] font-semibold border border-[#068aca]/30'
                      : darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  <ChevronRight size={13} className="shrink-0 opacity-60 ml-2" />
                </button>
              ))}
            </nav>

            {/* Privacy Promise Callout */}
            <div
              className={`mt-6 pt-5 border-t border-slate-800/40 dark:border-white/[0.08] text-xs ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <div className="font-semibold text-sm mb-1 text-emerald-500 flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>Our Privacy Promise</span>
              </div>
              <p className="leading-relaxed mb-3">
                Your restaurant and customer data are never sold or rented to advertisers. Period.
              </p>
              <a
                href="mailto:support@bhojanbandhu.in"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#068aca] hover:underline"
              >
                <Mail size={13} />
                <span>support@bhojanbandhu.in</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <div className="lg:col-span-8 space-y-6">
          {sections.map((sec, idx) => {
            const Icon = sec.icon
            return (
              <motion.article
                key={sec.id}
                id={sec.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-dark-surface/70 border-dark-border'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-[#068aca]/10 text-[#068aca]">
                    <Icon size={18} />
                  </div>
                  <h2
                    className={`text-lg sm:text-xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {sec.title}
                  </h2>
                </div>

                <div
                  className={`space-y-3.5 text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
