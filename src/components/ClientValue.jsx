import { motion } from 'framer-motion'
import { ArrowUpRight, Boxes, Gauge, Palette, ShieldCheck } from 'lucide-react'

const VALUES = [
  { Icon: Palette, label: 'Design with intent', text: 'Interfaces shaped around clarity, trust, and the real journey your users need to complete.' },
  { Icon: Boxes, label: 'Full-stack ownership', text: 'One partner across interface design, APIs, data, integrations, deployment, and iteration.' },
  { Icon: ShieldCheck, label: 'Built for confidence', text: 'Thoughtful structure, role-aware flows, and maintainable code for institutional-grade work.' },
  { Icon: Gauge, label: 'Momentum that lasts', text: 'A practical delivery mindset that turns ambitious ideas into usable, scalable products.' },
]

export default function ClientValue() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg-alt py-28 sm:py-36">
      <div className="client-hud-lines" aria-hidden="true"><i /><i /><i /></div>
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55 }}>
            <p className="mb-3 font-mono text-xs text-dim">// CLIENT VALUE PROTOCOL</p>
            <h2 className="font-mono text-3xl font-bold leading-tight sm:text-4xl">More than a developer.<br /><span className="text-green">A product-minded partner.</span></h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">I combine considered design with end-to-end engineering so your digital product does not merely look modern - it feels clear, credible, and ready to grow.</p>
            <a href="#contact" className="client-value-link mt-7">Discuss your next build <ArrowUpRight size={16} /></a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay: .08 }} className="client-command-panel">
            <div className="client-panel-header"><span><i /> LIVE DELIVERY SIGNAL</span><span>READY</span></div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {VALUES.map(({ Icon, label, text }, index) => (
                <motion.div key={label} initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .35, delay: .16 + index * .06 }} className="client-value-cell">
                  <div className="mb-4 flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-md border border-green/30 bg-green/10 text-green"><Icon size={17} /></span><span className="font-mono text-[10px] text-dim">0{index + 1}</span></div>
                  <h3 className="font-mono text-sm font-bold text-text">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </motion.div>
              ))}
            </div>
            <div className="client-panel-footer"><span>DESIGN + ENGINEERING</span><span>FUTURE-READY DELIVERY</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
