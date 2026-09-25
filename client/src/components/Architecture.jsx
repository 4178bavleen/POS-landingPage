import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Network, Layers, Server, Globe2, KeyRound, Sparkles } from 'lucide-react'

const archNodes = [
  {
    icon: Server,
    badge: 'Tier 1: Master Platform',
    title: 'SaaS Super Admin Platform',
    desc: 'Centralized master SaaS subscriptions, master vendor API credentials vault (AES-256-GCM), and global audit logging.',
    highlights: ['Master Credentials Vault', 'Subscription & Billing', 'Global Multi-Tenant Logs'],
  },
  {
    icon: Network,
    badge: 'Tier 2: Franchise Layer',
    title: 'Franchise Owner (Tenant Scope)',
    desc: 'Brand-level menu catalogs, pricing, combos, employee role management, and aggregator store linkings.',
    highlights: ['Tenant Isolation', 'Brand Menu & Combos', 'Aggregator ResID Linkings'],
  },
  {
    icon: Layers,
    badge: 'Tier 3: Local Outlets',
    title: 'Branch POS & KDS Operators',
    desc: 'Local high-speed POS billing, Socket.IO real-time kitchen display rooms, cash drawers, and ESC/POS thermal printing.',
    highlights: ['Keep yu', 'Instant KOT Dispatch', 'Local Cash Reconciliation'],
  },
]

export default function Architecture({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="architecture" className="py-24 relative overflow-hidden border-t border-slate-800/40 dark:border-white/[0.06]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gradient-badge mb-4">
            <Sparkles size={14} className="text-[#068aca]" />
            <span className="text-xs font-semibold tracking-wide text-[#068aca] uppercase">
              System Architecture
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Hierarchical Multi-Tenant{' '}
            <span className="gradient-text">Cloud Architecture</span>
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
    Bhojan Bandhu delivers true enterprise data isolation, Real Time Inventory and Multi-branch Management.
          </p>
        </div>

        {/* 3-Tier Diagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {archNodes.map((node, i) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`saas-card p-7 flex flex-col justify-between relative ${
                  i === 0 ? 'border-[#068aca]/40 shadow-xl shadow-[#068aca]/5' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[#068aca]/15 text-[#068aca]">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800/40 dark:bg-white/[0.04] text-slate-400 border border-slate-700/50 dark:border-white/[0.06]">
                      {node.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {node.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {node.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 dark:border-white/[0.06] space-y-2">
                  {node.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#068aca]" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        
      </div>
    </section>
  )
}
