import { motion } from 'motion/react'
import { Sparkles, Video, Camera, Bot, CircleDot, ArrowRight, LayoutDashboard, Brain } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import AuthButtons from '../ui/AuthButtons'
import DotGridOverlay from '../ui/DotGridOverlay'

const featureTabs = [
  { label: 'Capture', icon: Video, color: 'text-brand-600', bg: 'bg-brand-50' },
  { label: 'AI Triage', icon: Brain, color: 'text-accent-600', bg: 'bg-teal-50' },
  { label: 'Dashboard', icon: LayoutDashboard, color: 'text-violet-500', bg: 'bg-violet-50' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-32 pb-16 sm:pt-36 lg:pt-40">
      <DotGridOverlay mask="top" opacity="opacity-40" className="-inset-x-8" />
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.a
            href="#features"
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300"
          >
            Introducing contextual feedback for modern teams
            <ArrowRight size={13} className="text-gray-400" />
          </motion.a>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Build better products with{' '}
            <span className="text-gradient">Contextual Feedback</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Let users record their screen or capture shots directly inside your
            app — then manage everything in an AI-powered dashboard that closes
            the loop from report to resolution.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <AuthButtons size="lg" primaryLabel="Get started free" align="center" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500"
          >
            <span className="inline-flex items-center gap-2">
              <CircleDot size={13} className="text-accent-600" /> Free plan available
            </span>
            <span>No credit card required</span>
            <span>2-minute setup</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500"
          >
            <span className="text-sm leading-none" aria-hidden>
              🇮🇳
            </span>
            Proudly building from India, for the world
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {featureTabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? 'border-gray-300 bg-white text-gray-900 shadow-sm'
                  : 'border-gray-200 bg-white/60 text-gray-600 hover:border-gray-300 hover:bg-white'
              }`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-md ${tab.bg}`}>
                <tab.icon size={14} className={tab.color} />
              </span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12"
        >
          <HeroPreview />
        </motion.div>
      </div>
    </section>
  )
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-strong relative overflow-hidden rounded-2xl p-4 ring-glow"
      >
        <DotGridOverlay mask="wide" opacity="opacity-30" />
        <div className="relative mb-4 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-gray-400">trakr · inbox</span>
        </div>

        <div className="relative space-y-3">
          {[
            { icon: Video, title: 'Checkout button overlaps on mobile', tag: 'Bug', color: 'text-rose-700 bg-rose-50' },
            { icon: Camera, title: 'Dashboard chart not loading', tag: 'High', color: 'text-amber-700 bg-amber-50' },
            { icon: Bot, title: 'Add dark mode to settings', tag: 'Idea', color: 'text-teal-700 bg-teal-50' },
          ].map((row, i) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <row.icon size={16} />
              </span>
              <p className="flex-1 truncate text-sm text-gray-800">{row.title}</p>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${row.color}`}>
                {row.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-4 flex items-center justify-between rounded-xl bg-brand-50 p-3">
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <Bot size={14} className="text-violet-500" />
            AI triaged 3 reports
          </div>
          <span className="text-xs font-semibold text-accent-600">+ 98% accuracy</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="glass-strong absolute -bottom-5 -left-4 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-lg sm:-left-6"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
        </span>
        <span className="text-xs font-medium text-gray-700">Recording 00:14</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="glass-strong absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-lg"
      >
        <Sparkles size={14} className="text-violet-500" />
        <span className="text-xs font-medium text-gray-700">Urgency: High</span>
      </motion.div>
    </div>
  )
}
