import { motion } from 'motion/react'
import { Clapperboard, BrainCircuit, KanbanSquare } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const features = [
  {
    icon: Clapperboard,
    title: 'Rich Media Feedback',
    desc: 'Users record their screen or capture screenshots directly within your app to give crystal-clear context.',
    tags: ['Screen Recording', 'Screenshots', 'Annotations'],
    accent: 'from-brand-500/20 to-brand-500/0',
    iconColor: 'text-brand-300',
  },
  {
    icon: BrainCircuit,
    title: 'AI Analysis',
    desc: 'Automatically categorize and prioritize feedback with advanced models. Detect sentiment and urgency instantly.',
    tags: ['Auto-Categorization', 'Sentiment Analysis', 'Urgency Detection'],
    accent: 'from-violet-500/20 to-violet-500/0',
    iconColor: 'text-violet-400',
  },
  {
    icon: KanbanSquare,
    title: 'Integrated PM',
    desc: 'A built-in agile board to assign issues, track progress, and collaborate with your team — without leaving the app.',
    tags: ['Kanban Board', 'Issue Tracking', 'Team Assignments'],
    accent: 'from-accent-500/20 to-accent-500/0',
    iconColor: 'text-accent-400',
  },
]

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
              className="group glass relative overflow-hidden rounded-3xl p-7"
            >
              <div
                className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] ${f.iconColor}`}
              >
                <f.icon size={22} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
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
