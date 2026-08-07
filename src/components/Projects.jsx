import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, CheckCircle2, Layers3, Sparkles } from 'lucide-react'
import { PROJECTS } from '../data/content'

const FILTERS = ['All', 'Platform', 'Website', 'Commerce', 'AI / Security']

function ProjectVisual({ type }) {
  const bars = [32, 56, 40, 76, 60, 88, 52]

  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="project-visual-orb project-visual-orb-one" />
      <div className="project-visual-orb project-visual-orb-two" />
      {type === 'network' && (
        <div className="visual-network">
          <i /><i /><i /><i /><i />
          <span /><span /><span /><span />
        </div>
      )}
      {['security', 'vision'].includes(type) && (
        <div className="visual-security">
          <div className="visual-scanline" />
          <div className="visual-lock">{type === 'vision' ? 'AI' : '01'}</div>
        </div>
      )}
      {['school', 'campus', 'learning'].includes(type) && (
        <div className="visual-campus"><span /><span /><span /><span /><span /></div>
      )}
      {type === 'career' && <div className="visual-career"><span>01</span><span>02</span><span>03</span></div>}
      {['industry', 'health'].includes(type) && (
        <div className="visual-bars">{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
      )}
      {type === 'gallery' && <div className="visual-gallery"><i /><i /><i /><i /></div>}
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.045, 0.25) }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <ProjectVisual type={project.visual} />
      <div className="relative p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
              <span className="rounded-full border border-green/30 bg-green/10 px-2.5 py-1 text-green">{project.category}</span>
              <span className="text-dim">{project.period}</span>
            </div>
            <h3 className="font-mono text-xl font-bold text-text sm:text-2xl">{project.name}</h3>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-dim transition-colors group-hover:border-green/60 group-hover:text-green"><ArrowUpRight size={17} /></span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mb-5 border-l-2 border-green/70 pl-3 text-sm leading-relaxed text-text/90">{project.outcome}</p>

        <div className="mb-5 flex items-center gap-2 font-mono text-xs text-dim">
          <Building2 size={14} className="text-amber" />
          <span>{project.client}</span>
        </div>
        {project.collaboration && <p className="mb-5 font-mono text-xs text-blue">{project.collaboration}</p>}

        <ul className="mb-5 grid gap-2 sm:grid-cols-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-1.5 font-mono text-xs leading-relaxed text-muted"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green" />{highlight}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => <span key={tech} className="rounded-md border border-border bg-bg/50 px-2 py-1 font-mono text-[11px] text-dim">{tech}</span>)}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = useMemo(() => PROJECTS.filter((project) => filter === 'All' || project.category === filter), [filter])

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(95,217,164,0.08),transparent_32%)]" />
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-3 font-mono text-xs text-dim">04 - selected work</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-mono text-3xl font-bold sm:text-4xl">Products built to move organisations forward.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">From secure institutional platforms to high-conversion public websites, each build pairs a clear user journey with dependable engineering.</p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-amber"><Sparkles size={15} /> {PROJECTS.length} project highlights</div>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {FILTERS.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${filter === item ? 'border-green bg-green text-bg' : 'border-border text-muted hover:border-green/50 hover:text-green'}`}>{item}</button>)}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </motion.div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-surface-hi/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3"><Layers3 className="mt-0.5 text-green" size={20} /><p className="max-w-2xl text-sm leading-relaxed text-muted">Looking for a collaborator who can take ownership from product thinking and UI through APIs, deployment, and iteration?</p></div>
          <a href="#contact" className="shrink-0 rounded-md bg-green px-4 py-2.5 font-mono text-sm font-semibold text-bg transition hover:brightness-110">Start a conversation</a>
        </div>
      </div>
    </section>
  )
}
