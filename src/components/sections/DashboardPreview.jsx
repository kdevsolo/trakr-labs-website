import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import { scaleIn, viewportOnce } from '../../lib/motion'

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Dashboard"
          title="A command center for every piece of feedback"
          subtitle="Triage, assign, and resolve reports from one AI-powered workspace built for product teams."
        />

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/20 via-violet-500/10 to-accent-500/20 blur-3xl" />

          <div className="glass-strong relative overflow-hidden rounded-3xl ring-glow">
            <img
              src="/dashboard.webp"
              alt="Trakr dashboard showing feedback triage, stats, and AI-powered insights"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
