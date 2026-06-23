import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import WaitlistForm from './WaitlistForm'

export default function Waitlist() {
  return (
    <section id="waitlist" className="relative px-4 py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
          {/* animated glow */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
              <Sparkles size={13} /> Private beta · 50% OFF Lifetime
            </span>
            <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be the first to fix feedback loops
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              Trakr is currently in private beta. Join the waitlist today to
              secure your spot and get 50% off lifetime access when we launch.
            </p>

            <div className="mx-auto mt-8 max-w-md text-left">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
