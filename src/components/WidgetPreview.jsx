import { motion } from 'motion/react'
import {
  MessageSquarePlus,
  Video,
  Camera,
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
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-500/25 via-violet-500/15 to-accent-500/25 blur-2xl" />

      <motion.img
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        src="/widget.webp"
        alt="Trakr feedback widget with bug reporting and general feedback options"
        className="relative w-full rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
        loading="lazy"
      />
    </div>
  )
}
