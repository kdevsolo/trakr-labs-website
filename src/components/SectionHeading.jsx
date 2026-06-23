import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-wide text-brand-300 uppercase">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
