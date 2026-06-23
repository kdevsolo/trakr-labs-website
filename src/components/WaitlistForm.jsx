import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

export default function WaitlistForm({ className = '' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || status !== 'idle') return
    setStatus('loading')
    // Simulated submit — wire this up to your backend / waitlist provider.
    setTimeout(() => setStatus('done'), 1100)
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
              <Check size={18} />
            </span>
            <p className="text-sm text-slate-200">
              You're on the list. We'll be in touch soon —{' '}
              <span className="text-accent-400">welcome aboard.</span>
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong flex flex-col gap-2 rounded-2xl p-2 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-80"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Joining…
                </>
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      <p className="mt-3 text-xs text-slate-500">
        We promise not to spam. Early access opening soon.
      </p>
    </div>
  )
}
