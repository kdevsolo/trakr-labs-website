import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import Reveal from '../ui/Reveal'
import AuthButtons from '../ui/AuthButtons'

export default function CTA() {
  return (
    <section id="get-started" className="relative px-4 py-24">
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
              <Sparkles size={13} /> Start for free · No credit card required
            </span>
            <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start shipping better feedback today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              Create your account in minutes and turn messy bug reports into
              clear, contextual feedback your whole team can act on.
            </p>

            <div className="mt-8 flex justify-center">
              <AuthButtons size="lg" primaryLabel="Get started free" align="center" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
