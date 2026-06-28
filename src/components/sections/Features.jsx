import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { features } from '../../data/features'

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to close the feedback loop"
          subtitle="From capture to resolution, Trakr handles the entire lifecycle of user feedback."
        />

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
            >
              <div
                className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 ${f.iconColor}`}
              >
                <f.icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
