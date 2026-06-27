import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { pricing } from '../../data/pricing'
import { GET_STARTED_URL } from '../../config/site'

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free and upgrade as your team and feedback volume grow."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid items-stretch gap-6 md:grid-cols-3"
        >
          {pricing.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={`relative flex flex-col rounded-3xl p-8 ${
                tier.highlighted
                  ? 'glass-strong ring-glow'
                  : 'glass'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-lg font-semibold text-white">{tier.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold text-white">{tier.price}</span>
                <span className="mb-1 text-sm text-slate-500">{tier.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{tier.description}</p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={GET_STARTED_URL}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-95 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-600/30'
                    : 'border border-white/12 bg-white/[0.03] text-slate-200 hover:border-white/25 hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
