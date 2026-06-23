import { motion } from 'motion/react'
import { Sparkles, Video, Camera, Bot, CircleDot } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import WaitlistForm from './WaitlistForm'

export default function Hero() {
  console.log('Random number:', Math.random());
  return (
    <section id="top" className="relative px-4 pt-36 pb-20 sm:pt-40 lg:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.7)]" />
            Revolutionize your feedback workflow
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Build better products with{' '}
            <span className="text-gradient">Contextual Feedback</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Let users record their screen or capture shots directly inside your
            app — then manage everything in an AI-powered dashboard that closes
            the loop from report to resolution.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 max-w-md">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
              <Sparkles size={13} />
              50% OFF Lifetime
              <span className="font-normal text-slate-400">for early access members</span>
            </div>
            <WaitlistForm />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-6 text-xs text-slate-500"
          >
            <span className="inline-flex items-center gap-2">
              <CircleDot size={13} className="text-accent-400" /> Coming soon 🚀
            </span>
            <span>No credit card required</span>
            <span>2-minute setup</span>
          </motion.div>
        </motion.div>

        {/* Product preview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <HeroPreview />
        </motion.div>
      </div>
    </section>
  )
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 via-violet-500/20 to-accent-500/30 blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-strong relative rounded-3xl p-4 ring-glow"
      >
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-slate-500">trakr · inbox</span>
        </div>

        <div className="space-y-3">
          {[
            { icon: Video, title: 'Checkout button overlaps on mobile', tag: 'Bug', color: 'text-rose-300 bg-rose-500/15' },
            { icon: Camera, title: 'Dashboard chart not loading', tag: 'High', color: 'text-amber-300 bg-amber-500/15' },
            { icon: Bot, title: 'Add dark mode to settings', tag: 'Idea', color: 'text-accent-400 bg-accent-500/15' },
          ].map((row, i) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                <row.icon size={16} />
              </span>
              <p className="flex-1 truncate text-sm text-slate-200">{row.title}</p>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${row.color}`}>
                {row.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-brand-500/15 to-violet-500/15 p-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Bot size={14} className="text-violet-400" />
            AI triaged 3 reports
          </div>
          <span className="text-xs font-semibold text-accent-400">+ 98% accuracy</span>
        </div>
      </motion.div>

      {/* Floating recorder pill */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="glass-strong absolute -bottom-6 -left-6 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-xl"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
        </span>
        <span className="text-xs font-medium text-slate-200">Recording 00:14</span>
      </motion.div>

      {/* Floating sentiment chip */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="glass-strong absolute -top-5 -right-4 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl"
      >
        <Sparkles size={14} className="text-violet-400" />
        <span className="text-xs font-medium text-slate-200">Urgency: High</span>
      </motion.div>
    </div>
  )
}
