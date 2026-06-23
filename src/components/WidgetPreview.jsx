import { motion } from 'motion/react'
import {
  MessageSquarePlus,
  Video,
  Camera,
  Paperclip,
  Send,
  Sparkles,
  Check,
} from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import Reveal from './Reveal'

const bullets = [
  { icon: Video, text: 'One-click screen recording, right inside your app' },
  { icon: Camera, text: 'Annotated screenshots with auto-captured context' },
  { icon: Sparkles, text: 'Console logs, network calls & device info attached automatically' },
  { icon: Check, text: 'Fully themeable to match your brand in seconds' },
]

export default function WidgetPreview() {
  return (
    <section id="widget" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-wide text-brand-300 uppercase"
          >
            <MessageSquarePlus size={13} /> The Widget
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Feedback capture that lives inside your product
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-400">
            Drop in a single script and a polished feedback widget appears in the
            corner of your app. Users report issues with full context — you get
            actionable bug reports, not vague complaints.
          </motion.p>

          <motion.ul variants={stagger(0.08)} className="mt-7 space-y-3">
            {bullets.map((b) => (
              <motion.li key={b.text} variants={fadeUp} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                  <b.icon size={15} />
                </span>
                <span className="text-sm text-slate-300">{b.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Widget mock */}
        <Reveal variants={fadeUp}>
          <WidgetMock />
        </Reveal>
      </div>
    </section>
  )
}

function WidgetMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/25 via-violet-500/15 to-accent-500/25 blur-2xl" />

      {/* Faux app surface behind the widget */}
      <div className="glass relative overflow-hidden rounded-3xl p-5">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

        {/* Faux app header */}
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-brand-500 to-violet-500" />
            <span className="text-sm font-semibold text-white/80">your app</span>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2 w-10 rounded-full bg-white/10" />
            <span className="h-2 w-6 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Faux content lines */}
        <div className="relative mt-5 space-y-2.5">
          <span className="block h-2.5 w-3/4 rounded-full bg-white/[0.06]" />
          <span className="block h-2.5 w-1/2 rounded-full bg-white/[0.06]" />
          <span className="block h-2.5 w-2/3 rounded-full bg-white/[0.06]" />
        </div>

        {/* The widget panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="glass-strong relative mt-6 rounded-2xl p-4 shadow-2xl shadow-black/40"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Send feedback</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-semibold text-brand-300">
              <Sparkles size={10} /> AI-assisted
            </span>
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-ink-900/70 p-3">
            <p className="text-xs leading-relaxed text-slate-400">
              The export button doesn’t respond when I click it on the reports
              page…
            </p>
          </div>

          {/* Capture actions */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { icon: Video, label: 'Record', active: true },
              { icon: Camera, label: 'Capture' },
              { icon: Paperclip, label: 'Attach' },
            ].map((a) => (
              <span
                key={a.label}
                className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 text-[11px] font-medium transition-colors ${
                  a.active
                    ? 'border-brand-500/40 bg-brand-500/15 text-brand-200'
                    : 'border-white/10 bg-white/[0.03] text-slate-400'
                }`}
              >
                <a.icon size={16} />
                {a.label}
              </span>
            ))}
          </div>

          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-semibold text-ink-950">
            Send report
            <Send size={14} />
          </button>
        </motion.div>
      </div>

      {/* Floating recording pill */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-strong absolute -top-5 -right-4 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
        </span>
        <span className="text-xs font-medium text-slate-200">Recording 00:08</span>
      </motion.div>

      {/* Floating launcher button */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-6 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-xl shadow-brand-500/30"
      >
        <MessageSquarePlus size={22} />
      </motion.div>
    </div>
  )
}
