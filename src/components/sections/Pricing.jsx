import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import DotGridOverlay from '../ui/DotGridOverlay'
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
                  ? 'glass-strong ring-glow border-brand-200'
                  : 'glass'
              }`}
            >
              {tier.highlighted && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <DotGridOverlay mask="wide" opacity="opacity-40" />
                </div>
              )}

              <div className="relative flex flex-1 flex-col">
                {tier.highlighted && (
                  <span className="mb-4 self-center rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="mb-1 text-sm text-gray-500">{tier.cadence}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{tier.description}</p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                        <Check size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={GET_STARTED_URL}
                  className={`mt-auto pt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors active:scale-[0.98] ${
                    tier.highlighted
                      ? 'bg-brand-600 text-white shadow-sm hover:bg-brand-700'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
