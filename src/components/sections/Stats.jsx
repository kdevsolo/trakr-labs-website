import { motion } from 'motion/react'
import DotGridOverlay from '../ui/DotGridOverlay'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { stats } from '../../data/stats'

export default function Stats() {
  return (
    <section className="relative px-4 py-16">
      <DotGridOverlay mask="wide" opacity="opacity-35" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
        >
          <DotGridOverlay mask="wide" opacity="opacity-30" />
          <div className="relative grid grid-cols-2 gap-px bg-gray-100 md:grid-cols-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="flex flex-col items-center justify-center gap-2 bg-white px-6 py-10 text-center"
              >
                <span className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="text-gradient">{s.value}</span>
                </span>
                <span className="text-sm text-gray-600">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
