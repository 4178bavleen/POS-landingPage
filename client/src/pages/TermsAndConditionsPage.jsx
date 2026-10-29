import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FileText,
  ShieldCheck,
  Scale,
  Clock,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  Building2,
  Lock,
  Server,
  Receipt,
  RefreshCw,
} from 'lucide-react'

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    icon: Scale,
    content: [
      'These Terms and Conditions ("Terms", "Agreement") constitute a legally binding electronic contract between you (either as an individual restaurant owner, partner, authorized representative, or merchant entity, hereinafter "Customer", "Merchant", or "You") and Bhojan Bandhu, a product developed and operated by Vibrantick Infotech Solutions ("Company", "We", "Us", or "Our").',
      'This agreement is published in compliance with the provisions of Rule 3(1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Information Technology Act, 2000 of India.',
      'By accessing our website, creating an account, subscribing to any POS plan, downloading or installing our billing software, mobile apps, or kitchen display modules, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these terms, you must not access or use our services.',
    ],
  },
  {
    id: 'services',
    title: '2. Description of Services & License Grant',
    icon: Server,
    content: [
      'Bhojan Bandhu provides a comprehensive cloud and hybrid restaurant management operating system, which includes touchscreen point-of-sale (POS) billing, Kitchen Display System (KDS) stations, recipe and inventory control, digital QR table ordering, online food aggregator webhooks (Swiggy, Zomato), multi-outlet franchise analytics, and reporting dashboards.',
      'Subject to timely payment of subscription fees and adherence to these Terms, the Company grants you a limited, non-exclusive, non-transferable, revocable license to access and use the software solely for your internal restaurant operational purposes.',
      'The Company reserves the right to introduce new modules, update existing features, conduct scheduled maintenance, or discontinue legacy versions with reasonable advance notification.',
    ],
  },
  {
    id: 'accounts',
    title: '3. Account Registration & Merchant Responsibilities',
    icon: Building2,
    content: [
      'You must provide accurate, complete, and verifiable business details during registration, including your legal trade name, FSSAI registration/license number, GSTIN (where applicable), registered address, and designated administrative contact details.',
      'You are exclusively responsible for maintaining the confidentiality of cashier, manager, and administrator passwords. Any action, bill cancellation, discount application, or data modification initiated through your account credentials will be deemed executed by you.',
      'You agree not to use the platform for any illegal, fraudulent, or unlicensed sales activities, including the unauthorized sale of contraband or liquor without valid state excise licenses.',
    ],
  },
  {
    id: 'billing',
    title: '4. Subscription Fees, Billing & Taxes',
    icon: Receipt,
    content: [
      'Subscription fees for Bhojan Bandhu POS are structured on monthly, quarterly, or annual plans as per the pricing tiers displayed on our website or mutually agreed upon in a commercial proposal.',
      'All subscription fees are billed in advance. Service activation or renewal occurs upon receipt of payment confirmation.',
      'All applicable statutory taxes, including Goods and Services Tax (GST) at 18%, will be charged in addition to the stated subscription fees in compliance with Indian tax regulations. Tax invoices with your GSTIN will be provided for input tax credit eligibility.',
      'Failure to renew subscriptions by the due date may result in a temporary suspension of cloud sync, aggregator integrations, and reporting features until outstanding invoices are settled.',
    ],
  },
  {
    id: 'cancellation',
    title: '5. Cancellation, Trial Period & Refund Policy',
    icon: RefreshCw,
    content: [
      'Bhojan Bandhu offers a 14-day free trial period to evaluate platform features without requiring credit card details. We encourage merchants to fully test POS billing, KOT printing, and reports during this period.',
      'Consistent with enterprise SaaS and restaurant software industry standards (such as Petpooja and comparable POS providers), subscription fees paid for activated billing periods are strictly non-refundable. We do not provide prorated refunds for mid-cycle cancellations.',
      'You may cancel your subscription renewal at any time by contacting your assigned account manager or submitting a written request to support@bhojanbandhu.in at least 7 business days before your next billing cycle.',
      'In the event of accidental duplicate transactions or billing discrepancies verified by our finance team, refunds will be processed back to the original source payment method within 5–7 business days.',
    ],
  },
  {
    id: 'hardware',
    title: '6. Hardware Compatibility & Offline Sync',
    icon: ShieldCheck,
    content: [
      'Bhojan Bandhu software is engineered to operate on standard Windows, Android, and web-compatible hardware, including ESC/POS thermal receipt printers, cash drawers, and customer-facing displays.',
      'Our hybrid offline engine allows continuous billing and local receipt printing during internet outages. You acknowledge that aggregator sync (Swiggy/Zomato), cloud analytics, and multi-branch data synchronization require an active internet connection to transmit updates.',
      'The Company is not responsible for hardware malfunctions, printer driver conflicts, physical wear-and-tear, or third-party operating system updates that impair hardware performance.',
    ],
  },
  {
    id: 'integrations',
    title: '7. Third-Party Integrations & Food Aggregators',
    icon: Lock,
    content: [
      'Our platform integrates with third-party delivery platforms (Swiggy, Zomato), SMS/WhatsApp gateways, and digital payment providers (UPI, QR, payment gateways, EDC card machines).',
      'You acknowledge that your merchant relationship, commissions, payouts, menu approvals, and delivery fulfillment with Swiggy and Zomato remain strictly between you and those entities.',
      'The Company shall not be held liable for aggregator service downtimes, API rate limit changes, delayed delivery pickups, or commission payout disputes occurring on external partner networks.',
    ],
  },
  {
    id: 'ip',
    title: '8. Intellectual Property Rights & Restrictions',
    icon: FileText,
    content: [
      'All copyrights, trademarks, logos, source code, user interface designs, algorithmic workflows, database schemas, and documentation related to Bhojan Bandhu remain the exclusive intellectual property of Vibrantick Infotech Solutions.',
      'You are expressly prohibited from: (a) reverse engineering, decompiling, or disassembling the software; (b) licensing, sublicensing, selling, or distributing copies; (c) creating derivative software products; (d) scraping platform content or APIs; (e) attempting unauthorized penetration tests.',
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability & Warranties',
    icon: AlertCircle,
    content: [
      'The software is provided on an "as is" and "as available" basis. While we strive to maintain a 99.9% uptime SLA, the Company does not warrant that operations will be completely uninterrupted or error-free.',
      'In no event shall Vibrantick Infotech Solutions, its directors, employees, or partners be liable for any indirect, consequential, incidental, or special damages, including lost restaurant revenue, inventory wastage, reputational harm, or data loss.',
      'Our total aggregate liability under any circumstances arising out of or related to your use of Bhojan Bandhu shall be capped at the total subscription amount paid by you to the Company in the preceding three (3) months.',
    ],
  },
  {
    id: 'termination',
    title: '10. Termination & Data Retrieval',
    icon: Clock,
    content: [
      'Either party may terminate this agreement upon written notice if the other party materially breaches any provision and fails to cure such breach within fifteen (15) days of receiving notice.',
      'Upon termination, you will be granted a grace period of thirty (30) calendar days to export your customer databases, item catalogs, and historical sales ledgers in CSV/Excel format. Following the grace period, your tenant data will be archived or permanently purged in accordance with our data retention schedule.',
    ],
  },
  {
    id: 'governing-law',
    title: '11. Governing Law & Dispute Resolution',
    icon: Scale,
    content: [
      'These Terms shall be governed, construed, and enforced exclusively in accordance with the substantive laws of India, without regard to its conflict of law principles.',
      'Any dispute, controversy, or claim arising out of or relating to this contract shall first be attempted to be resolved amicably through good-faith executive negotiations within 30 days.',
      'Unresolved disputes shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration situated in India.',
    ],
  },
  {
    id: 'grievance',
    title: '12. Grievance Redressal & Contact Information',
    icon: HelpCircle,
    content: [
      'In accordance with the Information Technology Act 2000 and consumer protection guidelines, our designated Grievance Officer details are published below for any queries or escalation regarding these terms:',
      'Company: Vibrantick Infotech Solutions (Bhojan Bandhu POS)',
      'Grievance / Legal Desk Email: support@bhojanbandhu.in',
      'Support Helpline: +91 9870443528',
      'Operating Hours: Monday – Friday, 10:00 AM – 7:00 PM IST',
    ],
  },
]

export default function TermsAndConditionsPage({ darkMode }) {
  const [activeSection, setActiveSection] = useState('acceptance')

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
        <span className="text-[#068aca] font-semibold">Terms & Conditions</span>
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
          <Scale size={14} className="text-[#068aca]" />
          <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
            Legal Agreement & Terms of Service
          </span>
        </div>

        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Terms & <span className="gradient-text">Conditions</span>
        </h1>

        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Transparent, fair terms governing your use of Bhojan Bandhu's cloud POS software, billing modules, kitchen display stations, and merchant services.
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
            <Building2 size={12} className="text-[#068aca]" />
            Product of Vibrantick Infotech Solutions
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-slate-300'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            <ShieldCheck size={12} className="text-[#068aca]" />
            Information Technology Act, 2000 Compliant
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
              <FileText size={16} className="text-[#068aca]" />
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

            {/* Quick Support Box */}
            <div
              className={`mt-6 pt-5 border-t border-slate-800/40 dark:border-white/[0.08] text-xs ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <div className="font-semibold text-sm mb-1 text-[#068aca]">Need Clarification?</div>
              <p className="leading-relaxed mb-3">
                Have questions regarding custom enterprise agreements, franchise contracts, or SLA commitments?
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
