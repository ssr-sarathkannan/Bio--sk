import { motion } from 'framer-motion'
import { GitCommitHorizontal } from 'lucide-react'
import { EXPERIENCE } from '../data/content'

function Commit({ entry, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="relative pl-9 sm:pl-11"
    >
      <span className="absolute left-0 top-1 text-green">
        <GitCommitHorizontal size={20} />
      </span>
      {index !== EXPERIENCE.length - 1 && (
        <span className="absolute left-[9.5px] top-6 -bottom-11 w-px bg-border" />
      )}

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <span className="font-mono text-xs text-dim">{entry.hash}</span>
        <span className="font-mono text-xs text-amber">{entry.period}</span>
      </div>

      <h3 className="font-mono font-bold text-lg sm:text-xl text-text mb-1">
        {entry.role}
      </h3>
      <p className="font-mono text-sm text-green mb-1">{entry.company}</p>
      <p className="font-mono text-xs text-dim mb-4">{entry.meta}</p>

      <ul className="space-y-1.5">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="font-mono text-sm flex gap-2.5">
            <span className="text-dim select-none">$</span>
            <span className="text-muted">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 border-t border-border bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-dim mb-3"
        >
          02 — experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono font-bold text-3xl sm:text-4xl mb-4"
        >
          git log --work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-dim mb-16"
        >
          4 roles · 3+ years tracked
        </motion.p>

        <div className="rounded-lg border border-border bg-surface p-6 sm:p-10">
          <div className="space-y-11">
            {EXPERIENCE.map((entry, i) => (
              <Commit key={entry.hash} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}