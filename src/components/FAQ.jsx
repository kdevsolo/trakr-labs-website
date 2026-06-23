import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'What exactly is Trakr?',
    a: 'Trakr is a contextual feedback platform. It lets your users record their screen or capture screenshots directly inside your app, then routes everything into an AI-powered dashboard where your team can triage, assign, and resolve.',
  },
  {
    q: 'Do I need to change my code to use it?',
    a: 'No. Trakr installs with a single script tag — drop it into your HTML head or body and the feedback widget appears. It works with any web stack, no build steps or framework lock-in required.',
  },
  {
    q: 'Does it slow down my website?',
    a: 'Not noticeably. The widget loads asynchronously and is heavily optimized, so it stays out of your critical render path and has negligible impact on performance.',
  },
  {
    q: 'Is there a free plan?',
    a: 'We will offer a generous free tier at launch. Join the waitlist to lock in 50% off lifetime access as an early member.',
  },
  {
    q: 'Can I integrate this with Jira or Linear?',
    a: 'Yes — integrations with tools like Jira and Linear are on the roadmap, so triaged feedback can flow straight into your existing workflow.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about Trakr."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q}>
                <div
                  className={`glass overflow-hidden rounded-2xl transition-colors ${
                    isOpen ? 'border-brand-500/30' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-white">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                        isOpen ? 'bg-brand-500/20 text-brand-300' : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
