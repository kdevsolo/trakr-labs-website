import { motion } from 'motion/react'
import {
  LayoutDashboard,
  Inbox,
  KanbanSquare,
  BarChart3,
  Settings,
  Search,
  Bell,
  Video,
  Camera,
  Bot,
  ArrowUpRight,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { scaleIn, viewportOnce } from '../lib/motion'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Inbox, label: 'Inbox', badge: '12' },
  { icon: KanbanSquare, label: 'Board' },
  { icon: BarChart3, label: 'Insights' },
  { icon: Settings, label: 'Settings' },
]

const stats = [
  { label: 'Open reports', value: '38', delta: '+6', up: true },
  { label: 'Resolved', value: '124', delta: '+18%', up: true },
  { label: 'Avg. resolution', value: '4.2h', delta: '-31%', up: true },
]

const columns = [
  {
    title: 'Triage',
    accent: 'bg-rose-500/15 text-rose-300',
    cards: [
      { icon: Video, title: 'Checkout button overlaps on mobile', tag: 'Bug', color: 'text-rose-300 bg-rose-500/15' },
      { icon: Camera, title: 'Dashboard chart not loading', tag: 'High', color: 'text-amber-300 bg-amber-500/15' },
    ],
  },
  {
    title: 'In progress',
    accent: 'bg-brand-500/15 text-brand-300',
    cards: [
      { icon: Bot, title: 'Add dark mode to settings', tag: 'Idea', color: 'text-accent-400 bg-accent-500/15' },
      { icon: Video, title: 'Slow load on reports page', tag: 'Perf', color: 'text-violet-400 bg-violet-500/15' },
    ],
  },
  {
    title: 'Done',
    accent: 'bg-accent-500/15 text-accent-400',
    cards: [
      { icon: Camera, title: 'Typo on pricing page', tag: 'Fixed', color: 'text-accent-400 bg-accent-500/15' },
    ],
  },
]

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
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/20 via-violet-500/10 to-accent-500/20 blur-3xl" />

          {/* Browser frame */}
          <div className="glass-strong relative overflow-hidden rounded-3xl ring-glow">
            {/* Top bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto hidden w-full max-w-xs items-center gap-2 rounded-lg border border-white/10 bg-ink-900/70 px-3 py-1.5 sm:flex">
                <Search size={13} className="text-slate-500" />
                <span className="text-xs text-slate-500">app.trakr.io/overview</span>
              </div>
              <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 sm:ml-0">
                <Bell size={14} />
              </span>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
              {/* Sidebar */}
              <aside className="hidden flex-col gap-1 border-r border-white/10 p-4 md:flex">
                {navItems.map((item) => (
                  <span
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                      item.active
                        ? 'bg-brand-500/15 text-white'
                        : 'text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={16} className={item.active ? 'text-brand-300' : ''} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="rounded-md bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-rose-300">
                        {item.badge}
                      </span>
                    )}
                  </span>
                ))}
                <div className="mt-auto flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-bold text-white">
                    KS
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-medium text-white">Keshav</p>
                    <p className="text-[10px] text-slate-500">Admin</p>
                  </div>
                </div>
              </aside>

              {/* Main */}
              <div className="p-5 sm:p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="truncate text-[11px] text-slate-500">{s.label}</p>
                      <div className="mt-1.5 flex items-end justify-between gap-1">
                        <p className="font-display text-xl font-bold text-white sm:text-2xl">
                          {s.value}
                        </p>
                        <span className="inline-flex items-center gap-0.5 rounded-md bg-accent-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent-400">
                          <ArrowUpRight size={11} />
                          {s.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Board */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {columns.map((col) => (
                    <div key={col.title}>
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${col.accent}`}>
                          {col.title}
                        </span>
                        <span className="text-[10px] text-slate-600">{col.cards.length}</span>
                      </div>
                      <div className="space-y-2.5">
                        {col.cards.map((card, i) => (
                          <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                                <card.icon size={13} />
                              </span>
                              <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${card.color}`}>
                                {card.tag}
                              </span>
                            </div>
                            <p className="mt-2.5 text-xs leading-snug text-slate-200">
                              {card.title}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
