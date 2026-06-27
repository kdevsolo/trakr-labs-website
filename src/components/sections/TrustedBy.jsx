import { motion } from 'motion/react'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { clients } from '../../data/clients'

export default function TrustedBy() {
  return (
    <section className="relative px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase"
        >
          Trusted by product teams at
        </motion.p>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
        >
          {clients.map((c) => (
            <motion.span
              key={c.name}
              variants={fadeUp}
              className="font-display text-xl font-bold text-slate-500 grayscale transition-all duration-300 hover:text-slate-200 sm:text-2xl"
            >
              {c.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
