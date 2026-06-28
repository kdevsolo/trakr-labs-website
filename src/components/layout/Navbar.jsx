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
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="Trakr home" className="relative z-10 shrink-0">
          <Logo />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 hidden items-center gap-2 md:flex">
          <a
            href={SIGN_IN_URL}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
          >
            Sign in
          </a>
          <a
            href={GET_STARTED_URL}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get started
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 md:hidden"
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
            className="absolute inset-x-0 top-16 border-b border-gray-200 bg-white p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-gray-100 pt-2">
                <a
                  href={SIGN_IN_URL}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href={GET_STARTED_URL}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700"
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
