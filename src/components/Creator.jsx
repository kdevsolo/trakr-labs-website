import { useState } from 'react'
import { motion } from 'motion/react'
import { Send, Check } from 'lucide-react'
import Reveal from './Reveal'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Creator() {
  return (
    <section id="creator" className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Creator card */}
        <Reveal variants={fadeUp}>
          <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8">
            <div className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-wide text-violet-400 uppercase">
              Meet the creator
            </span>

            <div className="relative mt-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 font-display text-2xl font-bold text-white shadow-lg shadow-brand-600/40">
                KS
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Keshav Saini</h3>
                <p className="text-sm text-slate-400">Software Engineer & Founder</p>
              </div>
            </div>

            <p className="relative mt-6 text-sm leading-relaxed text-slate-400">
              Building tools that developers actually love to use. Trakr was born
              from the frustration of messy feedback loops and unclear bug
              reports. Passionate about crafting pixel-perfect user experiences
              and scalable frontend architectures.
            </p>

          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal variants={fadeUp}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
    e.target.reset()
  }

  return (
    <div className="glass-strong h-full rounded-3xl p-8">
      <h3 className="font-display text-xl font-bold text-white">Get in touch</h3>
      <p className="mt-2 text-sm text-slate-400">
        Have questions? We'd love to hear from you.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6 space-y-4"
      >
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" placeholder="Jane Doe" />
          <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
          <textarea
            required
            rows={4}
            placeholder="Tell us what's on your mind…"
            className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-brand-500/50 focus:outline-none"
          />
        </motion.div>
        <motion.button
          variants={fadeUp}
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-[1.01] active:scale-95"
        >
          {sent ? (
            <>
              <Check size={16} /> Message sent
            </>
          ) : (
            <>
              Send Message
              <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </motion.button>
      </motion.form>
    </div>
  )
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-400">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-brand-500/50 focus:outline-none"
      />
    </div>
  )
}
