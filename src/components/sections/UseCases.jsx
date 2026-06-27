import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { useCases } from '../../data/useCases'

export default function UseCases() {
  return (
    <section id="use-cases" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Use cases"
          title="Built for every team that ships"
          subtitle="From solo builders to product orgs, Trakr fits the way you collect and resolve feedback."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((u) => (
            <motion.div
              key={u.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group glass relative overflow-hidden rounded-3xl p-7"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-500/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-300">
                <u.icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold text-white">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{u.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
