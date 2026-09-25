import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const faqs = [
  {
    q: 'Can Bhojan Bandhu operate without an active internet connection?',
    a: 'Yes, 100%. If your broadband fails, billing, table orders, and thermal KOT prints continue working locally in offline mode. Once connectivity returns, all data automatically syncs back to your cloud database with zero data loss.',
  },
  {
    q: 'Do I need to purchase specific proprietary hardware?',
    a: 'Not at all. Bhojan Bandhu runs smoothly on standard Android tablets (7" or 10"), iPads, Windows PCs, laptops, and all standard USB/Bluetooth/Ethernet thermal receipt printers (Epson, TVS, NGX, Star, etc.).',
  },
  {
    q: 'Is GST billing and compliance supported?',
    a: 'Yes. Bhojan Bandhu automatically generates GST-compliant bills with customizable CGST/SGST/IGST tax slabs, HSN/SAC codes, invoice numbering formats, and ready-to-export GSTR monthly reports.',
  },
  {
    q: 'How does Bhojan Bandhu handle Swiggy and Zomato integrations?',
    a: 'Our direct aggregator sync feeds incoming Swiggy and Zomato orders straight into your live kitchen queue. You can toggle item stock, adjust menus, and manage delivery rider handoffs from one screen.',
  },
  {
    q: 'Can my waiters take orders on their own phones?',
    a: 'Yes! With our Captain Waiter App, waitstaff can punch orders right beside the table. The order routes instantly to the kitchen KOT printer, eliminating back-and-forth trips to the billing counter.',
  },
  {
    q: 'How do I migrate my existing menu and customer data?',
    a: 'Our onboarding specialists handle free data migration. Simply share your menu PDF or spreadsheet, and our team will set up your categories, combos, modifiers, and recipe inventory for you.',
  },
]

function FAQItem({ faq, index, darkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="saas-card overflow-hidden transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
      >
        <span className={`text-sm sm:text-base font-semibold pr-4 tracking-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#068aca] shrink-0"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t border-slate-800/40 dark:border-white/[0.06] pt-4 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#068aca]" />
            <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
              Got Questions?
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about Bhojan Bandhu POS implementation, hardware support, and billing.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  )
}
