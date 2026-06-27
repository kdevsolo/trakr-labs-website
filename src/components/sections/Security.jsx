import { motion } from 'motion/react'
import { Check, ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { securityPractices, securityPledge } from '../../data/security'

export default function Security() {
  return (
    <section id="security" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Security & Privacy"
          title="Your client data stays yours"
          subtitle="Security and privacy are built in, not bolted on. Here is how we protect every piece of feedback you collect."
        />

        {/* Pledge callout */}
        <Reveal variants={fadeUp} className="mt-14">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
                  <ShieldCheck size={13} /> Signed at signup
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-white">
                  {securityPledge.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                  {securityPledge.body}
                </p>
              </div>
              <ul className="grid gap-3 lg:w-80">
                {securityPledge.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                      <Check size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Practices grid */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {securityPractices.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass relative overflow-hidden rounded-3xl p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent-400">
                <item.icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
