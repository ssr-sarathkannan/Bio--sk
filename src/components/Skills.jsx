import { motion } from 'framer-motion'
import { Layout, Server, Database, Smartphone, Terminal, BarChart3 } from 'lucide-react'
import { SKILL_MODULES } from '../data/content'

const ICONS = { Layout, Server, Database, Smartphone, Terminal, BarChart3 }

function ModuleCard({ mod, index }) {
  const Icon = ICONS[mod.icon]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="rounded-lg border border-border bg-surface p-5 hover:border-green/40 transition-colors"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <Icon size={16} className="text-green" />
        <span className="font-mono text-xs text-dim">import from</span>
        <span className="font-mono text-xs text-amber">"{mod.from}"</span>
      </div>
      <ul className="space-y-1.5">
        {mod.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 + i * 0.04 }}
            className="font-mono text-sm text-text/90"
          >
            <span className="text-dim">{'{ '}</span>
            {item}
            <span className="text-dim">{' }'}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-dim mb-3"
        >
          03 — stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono font-bold text-3xl sm:text-4xl mb-12"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_MODULES.map((mod, i) => (
            <ModuleCard key={mod.from} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}