import { motion } from 'motion/react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { stats } from '../../data/stats'

export default function Stats() {
  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-2 px-6 py-10 text-center"
            >
              <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </span>
              <span className="text-sm text-slate-400">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
