import { useState } from 'react'
import { motion } from 'motion/react'
import { KeyRound, Code2, MessageSquareHeart, Copy, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

export default function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Integration"
          title="Up and running in minutes"
          subtitle="Trakr works with any web technology. No complex build steps required."
        />

        <motion.div
          variants={stagger(0.16)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 grid gap-6 md:grid-cols-3"
        >
          {/* connecting line */}
          <div className="pointer-events-none absolute top-12 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          <Step
            n="01"
            icon={KeyRound}
            title="Get Access Key"
            desc="Create a project in your dashboard to generate your unique access key."
          >
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2.5">
              <span className="text-xs text-slate-500">Passkey</span>
              <code className="text-xs text-brand-300">lk_live_592…</code>
            </div>
          </Step>

          <Step
            n="02"
            icon={Code2}
            title="Add Script Tag"
            desc="Paste the widget script into your HTML head or body. That's it."
          >
            <ScriptSnippet />
          </Step>

          <Step
            n="03"
            icon={MessageSquareHeart}
            title="Start Collecting"
            desc="Your users can now report bugs with screen recordings and full context."
          >
            <div className="flex items-center gap-2 rounded-xl border border-accent-500/20 bg-accent-500/10 px-3 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-400" />
              </span>
              <span className="text-xs font-medium text-accent-300">Widget active</span>
            </div>
          </Step>
        </motion.div>
      </div>
    </section>
  )
}

function Step({ n, icon: Icon, title, desc, children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass relative rounded-3xl p-7"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/20 to-violet-500/10 text-brand-300">
          <Icon size={20} />
        </span>
        <span className="font-display text-4xl font-extrabold text-white/10">{n}</span>
      </div>
      <h3 className="font-display mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
      <div className="mt-5">{children}</div>
    </motion.div>
  )
}

function ScriptSnippet() {
  const [copied, setCopied] = useState(false)
  const snippet = '<script src="https://cdn.trakr.io/w.js" data-key="lk_live_592"></script>'

  const copy = () => {
    navigator.clipboard?.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2.5">
      <code className="truncate text-xs text-slate-300">
        &lt;script src=<span className="text-accent-400">"…/w.js"</span>&gt;
      </code>
      <button
        onClick={copy}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
        aria-label="Copy script"
      >
        {copied ? <Check size={14} className="text-accent-400" /> : <Copy size={14} />}
      </button>
    </div>
  )
}
