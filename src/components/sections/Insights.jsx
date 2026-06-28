import { motion } from 'motion/react'
import { Gauge, TrendingUp, Users, Flame, BellRing } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

const days = [
  { d: 'Mon', v: 48 },
  { d: 'Tue', v: 72 },
  { d: 'Wed', v: 60 },
  { d: 'Thu', v: 90 },
  { d: 'Fri', v: 78 },
  { d: 'Sat', v: 40 },
  { d: 'Sun', v: 56 },
]

const bullets = [
  { icon: TrendingUp, text: 'Weekly resolution velocity reports' },
  { icon: Users, text: 'Individual developer performance tracking' },
  { icon: Flame, text: 'Feedback category heatmaps' },
  { icon: BellRing, text: 'SLA breach alerts' },
]

export default function Insights() {
  return (
    <section id="insights" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold tracking-wide text-accent-600 uppercase"
          >
            <Gauge size={13} /> Performance Insights
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Track team velocity and resolution metrics
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-gray-600">
            Get detailed reports on bug closure rates, team performance, and
            feedback trends over time. Make data-driven decisions to improve your
            product quality.
          </motion.p>

          <motion.ul variants={stagger(0.08)} className="mt-7 space-y-3">
            {bullets.map((b) => (
              <motion.li key={b.text} variants={fadeUp} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <b.icon size={15} />
                </span>
                <span className="text-sm text-gray-700">{b.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Chart card */}
        <Reveal variants={fadeUp}>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">Resolution velocity</p>
                <p className="font-display mt-1 text-3xl font-bold text-gray-900">
                  124 <span className="text-base font-medium text-gray-500">closed</span>
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-600">
                <TrendingUp size={13} /> +18.2%
              </span>
            </div>

            <div className="mt-8 flex h-48 items-end justify-between gap-3">
              {days.map((day, i) => (
                <div key={day.d} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-40 w-full items-end justify-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${day.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full max-w-[26px] rounded-t-lg bg-gradient-to-t from-brand-600 to-violet-400"
                    />
                  </div>
                  <span className="text-[11px] text-gray-500">{day.d}</span>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-brand-100 blur-3xl" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
