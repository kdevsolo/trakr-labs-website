import { useState } from 'react'
import { motion } from 'motion/react'
import { Play } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { scaleIn, viewportOnce } from '../../lib/motion'
import { DEMO_VIDEO_URL } from '../../config/site'

export default function Demo() {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(DEMO_VIDEO_URL)

  return (
    <section id="demo" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Demo"
          title="See Trakr in action"
          subtitle="Watch how a piece of feedback travels from in-app report to AI-triaged resolution in minutes."
        />

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/20 via-violet-500/10 to-accent-500/20 blur-3xl" />

          <div className="glass-strong relative aspect-video overflow-hidden rounded-3xl ring-glow">
            {playing && hasVideo ? (
              <iframe
                src={`${DEMO_VIDEO_URL}${DEMO_VIDEO_URL.includes('?') ? '&' : '?'}autoplay=1`}
                title="Trakr product demo"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src="/dashboard.webp"
                  alt="Preview of the Trakr dashboard shown in the product demo"
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />

                <button
                  type="button"
                  onClick={() => hasVideo && setPlaying(true)}
                  aria-label={hasVideo ? 'Play product demo' : 'Product demo coming soon'}
                  className="group absolute inset-0 flex flex-col items-center justify-center gap-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-2xl shadow-brand-600/40"
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40" />
                    <Play size={28} className="relative ml-1" fill="currentColor" />
                  </motion.span>
                  <span className="rounded-full bg-black/40 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                    {hasVideo ? 'Watch the 2-minute demo' : 'Full demo coming soon'}
                  </span>
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
