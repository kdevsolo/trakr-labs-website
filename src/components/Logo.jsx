export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 shadow-lg shadow-brand-600/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 13.5 9 18.5 20 6"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -inset-px rounded-xl ring-1 ring-white/20" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Trakr<span className="text-brand-400">.</span>
      </span>
    </div>
  )
}
