import { motion } from 'motion/react'
import {
  MessageSquarePlus,
  Video,
  Camera,
  Sparkles,
  Check,
} from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import Reveal from '../ui/Reveal'
import FeedbackWidget from '../ui/FeedbackWidget'

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
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-600 uppercase"
          >
            <MessageSquarePlus size={13} /> The Widget
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Feedback capture that lives inside your product
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-gray-600">
            Drop in a single script and a polished feedback widget appears in the
            corner of your app. Users report issues with full context — you get
            actionable bug reports, not vague complaints.
          </motion.p>

          <motion.ul variants={stagger(0.08)} className="mt-7 space-y-3">
            {bullets.map((b) => (
              <motion.li key={b.text} variants={fadeUp} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <b.icon size={15} />
                </span>
                <span className="text-sm text-gray-700">{b.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <Reveal variants={fadeUp}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-100/80 via-violet-100/50 to-accent-100/60 blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative"
            >
              <FeedbackWidget />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
