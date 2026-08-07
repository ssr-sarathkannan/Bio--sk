import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../data/content'

export default function Nav() {
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between font-mono text-sm">
        <button
          type="button"
          onClick={() => scrollTo('top')}
          className="text-text hover:text-green transition-colors"
        >
          <span className="text-dim">sk</span>
          <span className="text-green">@</span>
          <span className="text-muted">portfolio</span>
          <span className="text-dim">:~$</span>
        </button>

        <ul className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-2 rounded transition-colors ${
                  active === item.id ? 'text-green' : 'text-muted hover:text-text'
                }`}
              >
                {active === item.id && <span className="text-dim">./</span>}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border text-muted hover:text-green hover:border-green/50 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          open to work
        </button>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-9 w-9 place-items-center rounded border border-border text-muted transition hover:border-green/50 hover:text-green sm:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-bg/95 px-6 py-4 backdrop-blur-xl sm:hidden"
        >
          <ul className="mx-auto grid max-w-5xl gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button type="button" onClick={() => scrollTo(item.id)} className={`w-full rounded px-3 py-3 text-left font-mono text-sm transition ${active === item.id ? 'bg-green/10 text-green' : 'text-muted hover:bg-surface hover:text-text'}`}>
                  {active === item.id && <span className="mr-1 text-dim">./</span>}{item.label}
                </button>
              </li>
            ))}
            <li><button type="button" onClick={() => scrollTo('contact')} className="mt-2 w-full rounded bg-green px-3 py-3 text-left font-mono text-sm font-semibold text-bg">Let's work together</button></li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
