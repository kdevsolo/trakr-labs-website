import { motion } from 'motion/react'
import { Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams who ship fast"
          subtitle="See why product and engineering teams choose Trakr to run their feedback loop."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="glass relative flex h-full flex-col rounded-3xl p-7"
            >
              <Quote size={22} className="text-brand-400/60" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
