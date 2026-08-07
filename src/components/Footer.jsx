export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-dim">
        <p>© {new Date().getFullYear()} SK — built with React &amp; Framer Motion.</p>
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green" />
          status: online
        </p>
      </div>
    </footer>
  )
}