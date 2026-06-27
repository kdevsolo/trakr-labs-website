import { ArrowRight } from 'lucide-react'
import { SIGN_IN_URL, GET_STARTED_URL } from '../../config/site'

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
}

export default function AuthButtons({
  size = 'md',
  className = '',
  primaryLabel = 'Get started',
  showSignIn = true,
  align = 'start',
}) {
  const pad = sizes[size] || sizes.md
  const justify = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${justify} ${className}`}>
      <a
        href={GET_STARTED_URL}
        className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-[1.03] active:scale-95 ${pad}`}
      >
        {primaryLabel}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </a>
      {showSignIn && (
        <a
          href={SIGN_IN_URL}
          className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] font-semibold text-slate-200 transition-colors hover:border-white/25 hover:text-white ${pad}`}
        >
          Sign in
        </a>
      )}
    </div>
  )
}
