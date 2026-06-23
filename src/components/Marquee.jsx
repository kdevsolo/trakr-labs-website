import { Video, Camera, Bot, Gauge, KanbanSquare, Bell, Sparkles, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Video, label: 'Screen Recording' },
  { icon: Camera, label: 'Screenshots' },
  { icon: Bot, label: 'AI Triage' },
  { icon: Gauge, label: 'Velocity Reports' },
  { icon: KanbanSquare, label: 'Kanban Board' },
  { icon: Bell, label: 'SLA Alerts' },
  { icon: Sparkles, label: 'Sentiment Analysis' },
  { icon: ShieldCheck, label: 'Privacy First' },
]

export default function Marquee() {
  const loop = [...items, ...items]
  return (
    <section className="relative py-10">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.02] px-5 py-2.5"
            >
              <item.icon size={16} className="text-brand-300" />
              <span className="text-sm whitespace-nowrap text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
