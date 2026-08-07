import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-border bg-bg-alt">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-dim mb-3 text-center"
        >
          05 — contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono font-bold text-3xl sm:text-4xl mb-12 text-center"
        >
          Let's build something.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-lg border border-border bg-surface overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg">
            <span className="w-2.5 h-2.5 rounded-full bg-red/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green/70" />
            <span className="ml-2 font-mono text-xs text-dim">
              sk123sarath@gmail.com:~$ send-message
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 font-mono text-sm">
            <label className="block">
              <span className="text-green">--name</span>{' '}
              <span className="text-dim">"</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="your name"
                className="bg-transparent border-b border-border focus:border-green outline-none py-1 px-1 text-text placeholder:text-dim w-56 max-w-full"
              />
              <span className="text-dim">"</span>
            </label>

            <label className="block">
              <span className="text-green">--email</span>{' '}
              <span className="text-dim">"</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-transparent border-b border-border focus:border-green outline-none py-1 px-1 text-text placeholder:text-dim w-64 max-w-full"
              />
              <span className="text-dim">"</span>
            </label>

            <label className="block">
              <span className="text-green">--message</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="what are we building?"
                rows={4}
                className="mt-2 w-full bg-bg border border-border focus:border-green outline-none rounded p-3 text-text placeholder:text-dim resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-3 rounded bg-green text-bg font-semibold hover:brightness-110 transition"
            >
              {sent ? 'opening mail client ✓' : 'run --send'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}