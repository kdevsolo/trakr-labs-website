import { Clapperboard, BrainCircuit, KanbanSquare } from 'lucide-react'

export const features = [
  {
    icon: Clapperboard,
    title: 'Rich Media Feedback',
    desc: 'Users record their screen or capture screenshots directly within your app to give crystal-clear context.',
    tags: ['Screen Recording', 'Screenshots', 'Annotations'],
    accent: 'from-brand-500/10 to-brand-500/0',
    iconColor: 'text-brand-600',
  },
  {
    icon: BrainCircuit,
    title: 'AI Analysis',
    desc: 'Automatically categorize and prioritize feedback with advanced models. Detect sentiment and urgency instantly.',
    tags: ['Auto-Categorization', 'Sentiment Analysis', 'Urgency Detection'],
    accent: 'from-violet-500/10 to-violet-500/0',
    iconColor: 'text-violet-500',
  },
  {
    icon: KanbanSquare,
    title: 'Integrated PM',
    desc: 'A built-in agile board to assign issues, track progress, and collaborate with your team — without leaving the app.',
    tags: ['Kanban Board', 'Issue Tracking', 'Team Assignments'],
    accent: 'from-accent-500/10 to-accent-500/0',
    iconColor: 'text-accent-600',
  },
]
