import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Smartphone, Braces, PenTool } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { PROFILE, TECH_TICKER } from '../data/content'

const AVATAR_IMAGE = '/profile1.jpg'

const BOOT_LINES = [
  '> initializing profile...',
  '> loading stack: react, node, mongodb...',
  '> status: available for new builds',
]

const ORBIT_BADGES = [
  { Icon: Code2, style: { top: '-6%', left: '82%' }, delay: 0 },
  { Icon: Database, style: { top: '68%', left: '92%' }, delay: 0.4 },
  { Icon: Cloud, style: { top: '92%', left: '18%' }, delay: 0.8 },
  { Icon: Smartphone, style: { top: '18%', left: '-8%' }, delay: 1.2 },
  { Icon: Braces, style: { top: '58%', left: '-10%' }, delay: 1.6 },
]

function Avatar() {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="hero-avatar"
    >
      {/* rotating gradient ring */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="avatar-ring"
        style={{
          background:
            'conic-gradient(from 0deg, #5FD9A4, #F2A65A, #6FA8DC, #5FD9A4)',
          padding: 2,
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
        }}
      />

      {/* photo / monogram */}
      <div className="avatar-photo">
        <img
          src={AVATAR_IMAGE}
          alt={PROFILE.name}
          loading="eager"
          decoding="async"
          className={`avatar-img ${imageError ? 'hidden' : ''}`}
          onError={() => setImageError(true)}
        />
        <div
          className={`avatar-fallback ${imageError ? 'visible' : ''}`}
          aria-hidden={!imageError}
        >
          {PROFILE.initials}
        </div>
      </div>

      {/* orbiting tech badges */}
      {ORBIT_BADGES.map(({ Icon, style, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 1.8 + delay * 0.15, duration: 0.4 },
            scale: { delay: 1.8 + delay * 0.15, duration: 0.4 },
            y: { delay: 2.2 + delay * 0.15, duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="orbit-badge"
          style={style}
        >
          <Icon size={18} className="text-green" />
        </motion.div>
      ))}
    </motion.div>
  )
}

function TechTicker() {
  const items = [...TECH_TICKER, ...TECH_TICKER]
  return (
    <div className="relative mt-16 border-y border-border py-4 overflow-hidden mask-[linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-10 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span key={i} className="font-mono text-sm text-dim whitespace-nowrap">
            {tech} <span className="text-border">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function CodeWindow() {
  const lines = [
    ['const', ' portfolio', ' = {'],
    ['  craft:', " 'intentional',"],
    ['  stack:', " ['React', 'Node'],"],
    ['  status:', " 'shipping'"],
    ['}'],
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 1.45, duration: 0.7, ease: 'easeOut' }}
      className="code-window"
    >
      <div className="code-window-bar"><span><i /><i /><i /></span><span>portfolio.config.js</span><span>JS</span></div>
      <pre className="code-window-body">
        {lines.map((line, index) => (
          <motion.code key={index} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 + index * .16, duration: .3 }}>
            <b>{String(index + 1).padStart(2, '0')}</b><span className={index === 0 ? 'code-keyword' : index === 4 ? 'code-bracket' : 'code-property'}>{line[0]}</span>{line[1] && <span className="code-value">{line[1]}</span>}{line[2] && <span className="code-bracket">{line[2]}</span>}
          </motion.code>
        ))}
        <code className="code-cursor-line"><b>06</b><span className="code-cursor" /></code>
      </pre>
      <div className="code-window-footer"><span><i /> main</span><span>Ln 6, Col 1</span><span>UTF-8</span></div>
    </motion.div>
  )
}

export default function Hero() {
  const { output: line1, done: line1Done } = useTypewriter(BOOT_LINES[0], { speed: 22 })
  const { output: line2, done: line2Done } = useTypewriter(BOOT_LINES[1], {
    speed: 18,
    startDelay: 650,
  })
  const { output: line3 } = useTypewriter(BOOT_LINES[2], {
    speed: 22,
    startDelay: 1500,
  })

  return (
    <section
      id="top"
      className="hero relative min-h-screen flex items-center bg-grid bg-scanlines overflow-hidden pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 400px at 15% 20%, rgba(95,217,164,0.08), transparent 60%), radial-gradient(500px 350px at 85% 75%, rgba(242,166,90,0.07), transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          <div>
            <div className="font-mono text-xs sm:text-sm text-dim space-y-1 mb-8 min-h-18">
              <p>{line1}{!line1Done && <span className="caret" />}</p>
              {line1Done && (
                <p>
                  {line2}
                  {!line2Done && <span className="caret" />}
                </p>
              )}
              {line2Done && (
                <p className="text-green">
                  {line3}
                  <span className="caret" />
                </p>
              )}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="font-mono text-amber text-sm tracking-wide mb-4"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.05, duration: 0.6, ease: 'easeOut' }}
              className="font-mono font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight text-glow-green"
            >
              Hi, I'm {PROFILE.name.split(' ')[0]}.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6, ease: 'easeOut' }}
              className="mt-4 font-mono text-lg sm:text-xl text-muted"
            >
              {PROFILE.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.55, ease: 'easeOut' }}
              className="designer-stamp"
            >
              <span className="designer-stamp-icon"><PenTool size={15} /></span>
              <span>
                <strong>Design-minded developer</strong>
                <small>I turn complex ideas into clear, memorable digital experiences.</small>
              </span>
              <em>01</em>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.35, duration: 0.6, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
            >
              4+ years building scalable web and mobile applications — from
              React interfaces to Node.js APIs — for institutional, startup,
              and enterprise teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-5 py-3 rounded bg-green text-bg font-mono text-sm font-semibold hover:brightness-110 transition"
              >
                view changelog →
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-5 py-3 rounded border border-border font-mono text-sm text-muted hover:text-text hover:border-dim transition"
              >
                get in touch
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-8 lg:items-start">
            <Avatar />
            <CodeWindow />
          </div>
        </div>

        <TechTicker />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-dim tracking-widest uppercase"
      >
        scroll
      </motion.div>
    </section>
  )
}
