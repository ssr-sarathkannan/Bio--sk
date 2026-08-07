import { motion } from 'framer-motion'
import { Blocks, Compass, Rocket, Workflow } from 'lucide-react'

const SERVICES = [
  { Icon: Compass, number: '01', title: 'Product & UI direction', description: 'Clarify the user journey, shape intuitive interfaces, and turn complex requirements into a focused digital experience.' },
  { Icon: Blocks, number: '02', title: 'Full-stack development', description: 'Build responsive React front ends, reliable APIs, secure data flows, and integrations that work as one product.' },
  { Icon: Rocket, number: '03', title: 'Launch & improvement', description: 'Support deployment, testing, refinement, and the practical iteration needed after a product reaches real users.' },
]

const PROCESS = ['Discover the goal', 'Design the flow', 'Build the system', 'Test and launch']

export default function Services() {
  return (
    <section id="services" className="relative border-t border-border py-28 sm:py-36">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-3 font-mono text-xs text-dim">// HOW I HELP TEAMS</motion.p>
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="font-mono text-3xl font-bold leading-tight sm:text-4xl">A single partner for the work between idea and launch.</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .08 }} className="leading-relaxed text-muted">For organisations that need more than an isolated feature: thoughtful design, hands-on technical ownership, and a product experience users can trust.</motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map(({ Icon, number, title, description }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .07 }} whileHover={{ y: -5 }} className="service-card">
              <div className="mb-8 flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-lg bg-green text-bg"><Icon size={20} /></span><span className="font-mono text-sm text-dim">{number}</span></div>
              <h3 className="font-mono text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }} className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-green"><Workflow size={15} /> DELIVERY FLOW</div>
          <ol className="grid gap-4 sm:grid-cols-4">
            {PROCESS.map((step, index) => <li key={step} className="flex items-center gap-3 font-mono text-xs text-muted"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-green/40 text-green">{index + 1}</span>{step}</li>)}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
