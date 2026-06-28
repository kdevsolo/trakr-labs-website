import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import DotGridOverlay from '../ui/DotGridOverlay'
import { scaleIn, viewportOnce } from '../../lib/motion'

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative px-4 py-24">
      {/* <DotGridOverlay mask="wide" opacity="opacity-35" /> */}
      <div className="relative mx-auto max-w-6xl">
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
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-100/60 via-violet-100/40 to-accent-100/50 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg ring-glow">
            <DotGridOverlay mask="wide" opacity="opacity-25" />
            <img
              src="/dashboard.png"
              alt="Trakr dashboard showing feedback triage, stats, and AI-powered insights"
              className="relative w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
