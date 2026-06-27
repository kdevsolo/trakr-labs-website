import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo'
import { navLinks } from '../../data/nav'
import { SIGN_IN_URL, GET_STARTED_URL } from '../../config/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled ? 'glass-strong shadow-xl shadow-black/30' : 'border border-transparent'
        }`}
      >
        <Link to="/" aria-label="Trakr home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={SIGN_IN_URL}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href={GET_STARTED_URL}
            className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get started
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-200 transition-colors hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href={SIGN_IN_URL}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-center text-sm font-semibold text-slate-200 transition-colors hover:bg-white/5"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href={GET_STARTED_URL}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-ink-950"
                >
                  Get started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
