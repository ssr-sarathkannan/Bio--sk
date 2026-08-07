import { motion } from 'framer-motion'
import { BIO_PARAGRAPHS, STRENGTHS } from '../data/content'

const FACTS = [
  { label: 'role', value: 'Full-stack & mobile developer' },
  { label: 'exp', value: '4+ years' },
  { label: 'education', value: 'MCA, Bharathiar University' },
  { label: 'focus', value: 'Web, mobile & enterprise platforms' },
  { label: 'mode', value: 'Full stack, UI/UX-minded, ships fast' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-dim mb-3"
        >
          01 — about
        </motion.p>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-mono font-bold text-3xl sm:text-4xl leading-tight mb-6">
              One developer,
              <br />
              the whole stack.
            </h2>

            <div className="space-y-4">
              {BIO_PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-muted leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {STRENGTHS.map((strength, i) => (
                <motion.span
                  key={strength}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:border-green/50 hover:text-green transition-colors"
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="rounded-lg border border-border bg-surface overflow-hidden self-start"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-alt">
              <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
              <span className="ml-2 font-mono text-xs text-dim">README.md</span>
            </div>
            <dl className="p-6 space-y-5">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="grid grid-cols-[6.5rem_1fr] gap-3 font-mono text-sm"
                >
                  <dt className="text-dim">{fact.label}</dt>
                  <dd className="text-text">{fact.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}