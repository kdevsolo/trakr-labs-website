import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import Reveal from '../ui/Reveal'
import AuthButtons from '../ui/AuthButtons'
import DotGridOverlay from '../ui/DotGridOverlay'

export default function CTA() {
  return (
    <section id="get-started" className="relative px-4 py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-teal-50 px-6 py-14 text-center sm:px-12">
          <DotGridOverlay mask="wide" opacity="opacity-45" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
              <Sparkles size={13} /> Start for free · No credit card required
            </span>
            <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start shipping better feedback today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
              Create your account in minutes and turn messy bug reports into
              clear, contextual feedback your whole team can act on.
            </p>

            <div className="mt-8 flex justify-center">
              <AuthButtons size="lg" primaryLabel="Get started free" align="center" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
